#!/usr/bin/env node
/*
 * Wild Window — weekly cam refresh.
 *
 * Runs every Monday morning from GitHub Actions (.github/workflows/refresh-cams.yml).
 *   1. Checks every cam in js/streams.js with the YouTube Data API.
 *   2. If a stream ended, moved or blocked embedding, looks on the same channel
 *      for its new live stream and swaps the link in (favorites keep working,
 *      because the cam's id never changes).
 *   3. Cams with no replacement are marked "retired" (hidden in the app, except in
 *      your favorites). They stay in the file so they come back automatically when
 *      the channel goes live again; cams the script found itself are removed after
 *      8 weeks retired. A cam's id never changes, so favorites always carry over.
 *   4. Searches YouTube for new live animal cams that allow embedding and adds a few.
 *   5. Rewrites js/streams.js and data/refresh-log.json.
 *
 * Usage:  YOUTUBE_API_KEY=... node scripts/refresh-cams.mjs [--dry-run]
 * Quota:  roughly 1,000–2,500 of YouTube's free 10,000 daily units per run.
 */
import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath, pathToFileURL } from "node:url";

/* ------------------------------------------------------------------ settings */
const SETTINGS = {
  maxNewPerRun: 6,        // new cams added each week
  maxAutoCams: 40,        // cap on cams the script has added in total
  maxPerChannel: 3,       // avoid one channel taking over the list
  minViewers: 10,         // skip streams almost nobody watches (often not real cams)
  maxChannelSearches: 50, // each costs 100 quota units; the rest wait until next week
  discoveryQueries: [
    "animal live cam",
    "wildlife live cam",
    "zoo live cam",
    "aquarium live cam",
    "bird nest live cam",
    "bird feeder live cam",
    "safari waterhole live cam",
    "underwater live cam fish",
    "kitten live cam",
    "puppy live cam"
  ]
};

const TONES = ["#d9c7e8", "#bfd8c8", "#f3cdb8", "#f6d58e", "#c9d6e8", "#e8dcc6", "#d6e4cc", "#bcd3e6"];

// Words that mark a stream as an animal cam, grouped into the app's categories.
const CATEGORY_WORDS = {
  cuddly: ["kitten", "kittens", "cat", "cats", "puppy", "puppies", "dog", "dogs", "bunny", "rabbit", "hamster",
    "guinea pig", "goat", "sheep", "lamb", "farm", "rescue", "sanctuary", "sloth", "otter", "otters", "panda", "pandas", "capybara", "red panda"],
  ocean: ["aquarium", "reef", "coral", "jelly", "jellies", "jellyfish", "shark", "sharks", "fish", "whale", "whales",
    "orca", "orcas", "dolphin", "dolphins", "seal", "seals", "sea lion", "octopus", "kelp", "underwater", "manatee", "manatees", "penguin", "penguins", "walrus"],
  birds: ["bird", "birds", "owl", "owls", "eagle", "eagles", "osprey", "ospreys", "hawk", "falcon", "falcons", "peregrine", "heron", "stork",
    "storks", "crane", "cranes", "hummingbird", "hummingbirds", "feeder", "puffin", "puffins", "albatross", "kestrel", "swan", "duck",
    "ducks", "songbird", "cardinal", "chickadee", "woodpecker", "vulture", "condor", "nest", "nestcam", "flamingo", "parrot", "macaw"],
  safari: ["safari", "waterhole", "watering hole", "africa", "african", "elephant", "elephants", "lion", "lions", "giraffe", "giraffes",
    "zebra", "rhino", "hippo", "buffalo", "leopard", "cheetah", "savanna", "savannah", "wildlife", "bear", "bears", "wolf", "wolves",
    "moose", "deer", "elk", "bison", "fox", "foxes", "beaver", "raccoon"],
  zoo: ["zoo", "monkey", "monkeys", "gorilla", "gorillas", "ape", "chimp", "chimpanzee", "orangutan", "koala", "kangaroo", "tiger",
    "tigers", "lemur", "meerkat", "meerkats", "bat", "bats", "animal", "animals"]
};
const CATEGORY_ORDER = ["cuddly", "ocean", "birds", "safari", "zoo"];

// Streams with these words aren't animal cams (or aren't live cams at all).
const EXCLUDE = [
  "music", "lofi", "lo-fi", "radio", "news", "minecraft", "roblox", "fortnite", "gameplay", "gaming", "game",
  "simulator", "simulation", "cartoon", "kids song", "nursery", "highlights", "compilation", "replay", "rerun",
  "earthquake", "traffic", "train", "railcam", "airport", "iss ", "space station", "storm chas", "hunting",
  "fishing", "fish tank music", "sleep music", "relaxing music", "meditation music", "asmr", "podcast",
  "reaction", "q&a", "shopping", "sale", "giveaway", "crypto", "casino", "church", "sermon", "ai generated"
];

/* ------------------------------------------------------------------ helpers */
const today = () => new Date().toISOString().slice(0, 10);
const norm = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const hasWord = (text, word) => new RegExp(`(^|[^a-z])${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z]|$)`).test(text);

function animalWords(text) {
  const t = norm(text);
  const hits = [];
  for (const cat of CATEGORY_ORDER) for (const w of CATEGORY_WORDS[cat]) if (hasWord(t, w)) hits.push(w);
  return [...new Set(hits)];
}

function guessCategory(text) {
  const t = norm(text);
  for (const cat of CATEGORY_ORDER) {
    if (cat === "zoo") continue;
    if (CATEGORY_WORDS[cat].some((w) => w !== "animal" && w !== "animals" && hasWord(t, w))) return cat;
  }
  return "zoo";
}

const isExcluded = (text) => {
  const t = norm(text) + " ";
  return EXCLUDE.some((w) => t.includes(w));
};

function decodeEntities(s) {
  return String(s || "")
    .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

// "🔴 LIVE: Decorah Eagles - North Nest | Explore.org" -> "Decorah Eagles"
function cleanTitle(raw, fallback) {
  let t = decodeEntities(raw).replace(/\p{Extended_Pictographic}|️/gu, " ");
  const parts = t.split(/\s*[|•·]\s*|\s+[-–—]\s+|\s*:\s+/).map((p) => p.trim()).filter(Boolean);
  const junk = /\b(live\s*(stream|webcam|now)?|livestream|24\s*\/\s*7|24\s*hours?|4k|uhd|hd|stream|now|official|channel)\b|(?<=\s|^)24\/7(?=\s|$)/gi;
  const useful = parts.filter((p) => p.replace(junk, "").trim().length > 2);
  let pick = useful.find((p) => animalWords(p).length) || useful[0] || parts[0] || "";
  pick = pick.replace(junk, " ").replace(/[!?]+/g, "").replace(/^[\s,.:;-]+|[\s,.:;-]+$/g, "").replace(/\s{2,}/g, " ").trim();
  if (pick === pick.toUpperCase() && /[A-Z]/.test(pick)) {
    pick = pick.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
  }
  if (pick.length > 42) pick = pick.slice(0, 42).replace(/\s+\S*$/, "");
  return pick.length >= 3 ? pick : (fallback || "Live animal cam");
}

function firstSentence(desc) {
  const text = decodeEntities(desc).replace(/https?:\/\/\S+/g, "").replace(/\s+/g, " ").trim();
  if (!text) return "";
  const m = text.match(/^(.{20,200}?[.!?])(\s|$)/);
  return (m ? m[1] : text.slice(0, 160).replace(/\s+\S*$/, "") + "…").trim();
}

const slug = (s) => norm(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 32);

/* ------------------------------------------------------------------ YouTube API */
function makeApi(fetchImpl, key, report) {
  return async function api(endpoint, params, cost) {
    const url = new URL("https://www.googleapis.com/youtube/v3/" + endpoint);
    for (const [k, v] of Object.entries({ ...params, key })) url.searchParams.set(k, String(v));
    const res = await fetchImpl(url.toString());
    const data = await res.json().catch(() => ({}));
    report.quotaUsed += cost;
    if (!res.ok) {
      const reason = data?.error?.errors?.[0]?.reason || "";
      const msg = data?.error?.message || `HTTP ${res.status}`;
      const err = new Error(`${endpoint}: ${msg}`);
      err.quota = /quota/i.test(reason + msg);
      err.badKey = /key/i.test(reason) || res.status === 400 && /key/i.test(msg);
      throw err;
    }
    return data;
  };
}

async function videoDetails(api, ids) {
  const map = new Map();
  for (let i = 0; i < ids.length; i += 50) {
    const chunk = ids.slice(i, i + 50);
    const data = await api("videos", {
      part: "snippet,status,liveStreamingDetails", id: chunk.join(","), maxResults: 50
    }, 1);
    for (const item of data.items || []) map.set(item.id, item);
  }
  return map;
}

// Live right now (or scheduled to go live), embeddable and public.
function isPlayable(item) {
  if (!item) return false;
  const st = item.status || {};
  if (st.embeddable === false) return false;
  if (st.privacyStatus && !["public", "unlisted"].includes(st.privacyStatus)) return false;
  const live = item.snippet?.liveBroadcastContent;
  if (live === "live" || live === "upcoming") return true;
  const d = item.liveStreamingDetails;
  return Boolean(d && d.actualStartTime && !d.actualEndTime);
}

async function searchLive(api, params) {
  const data = await api("search", {
    part: "snippet", type: "video", eventType: "live", videoEmbeddable: "true",
    safeSearch: "strict", maxResults: 25, ...params
  }, 100);
  return (data.items || []).filter((it) => it.id?.videoId);
}

function matchScore(cam, title) {
  const t = norm(title);
  const words = new Set([
    ...norm(cam.title).split(/[^a-z0-9]+/),
    ...(cam.tags || []).map(norm),
    ...norm(cam.ytTitle || "").split(/[^a-z0-9]+/)
  ].filter((w) => w.length > 3 && !["live", "cam", "nest", "stream", "with", "from", "the"].includes(w)));
  let score = 0;
  for (const w of words) if (hasWord(t, w)) score += 1;
  return score;
}

/* ------------------------------------------------------------------ files */
async function loadCams(file) {
  const code = await fs.readFile(file, "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { filename: file });
  if (!Array.isArray(sandbox.window.WW_CAMS)) throw new Error("js/streams.js didn't define window.WW_CAMS");
  const headerEnd = code.indexOf("window.WW_CAMS");
  return { cams: sandbox.window.WW_CAMS, header: code.slice(0, headerEnd) };
}

const FIELD_ORDER = ["id", "title", "place", "tz", "cat", "tags", "yt", "channel", "channelId", "tone", "blurb",
  "ytTitle", "auto", "added", "retired"];

function writeCams(header, cams) {
  const ordered = cams.map((c) => {
    const o = {};
    for (const k of FIELD_ORDER) if (c[k] !== undefined && c[k] !== null && c[k] !== false) o[k] = c[k];
    for (const k of Object.keys(c)) if (!(k in o) && c[k] !== undefined && c[k] !== null && c[k] !== false) o[k] = c[k];
    return o;
  });
  const body = ordered.map((c) => "  " + JSON.stringify(c, null, 2).replace(/\n/g, "\n  ")).join(",\n");
  return `${header.trimEnd()}\nwindow.WW_CAMS = [\n${body}\n];\n`;
}

/* ------------------------------------------------------------------ main */
export async function refresh({ fetchImpl = fetch, key, root, dryRun = false, date = today(), log = console.log } = {}) {
  const streamsFile = path.join(root, "js/streams.js");
  const logFile = path.join(root, "data/refresh-log.json");
  const report = {
    ranAt: new Date().toISOString(), checked: 0, playable: 0,
    replaced: [], retired: [], revived: [], removed: [], added: [], notes: [], quotaUsed: 0
  };
  const api = makeApi(fetchImpl, key, report);
  const { cams, header } = await loadCams(streamsFile);

  /* 1. Check every cam */
  const ids = [...new Set(cams.filter((c) => c.yt).map((c) => c.yt))];
  const details = await videoDetails(api, ids); // if this fails (bad key, no quota) we stop: nothing is changed
  const usedIds = new Set(ids);
  const keep = [];
  let channelSearches = 0;
  const canSearch = () => channelSearches++ < SETTINGS.maxChannelSearches;

  for (const cam of cams) {
    report.checked++;
    try {
      if (cam.channel && !cam.yt) {
        // "Always live" channel embeds: just make sure the channel has something live.
        if (!canSearch()) { keep.push(cam); continue; }
        const live = await searchLive(api, { channelId: cam.channel, maxResults: 1 });
        if (live.length) {
          if (cam.retired) { delete cam.retired; report.revived.push(cam.title); }
          report.playable++;
        } else if (!cam.retired) { cam.retired = date; report.retired.push(cam.title); }
        keep.push(cam);
        continue;
      }

      const item = details.get(cam.yt);
      if (item) {
        cam.channelId = cam.channelId || item.snippet.channelId;
        cam.ytTitle = decodeEntities(item.snippet.title);
      }
      if (isPlayable(item)) {
        if (cam.retired) { delete cam.retired; report.revived.push(cam.title); }
        report.playable++;
        keep.push(cam);
        continue;
      }

      // Not playable: look for this channel's new stream of the same animals.
      let replacement = null;
      if (cam.channelId && !canSearch()) {
        // Out of channel searches for this week: leave it as is and try again next Monday.
        keep.push(cam);
        continue;
      }
      if (cam.channelId) {
        const live = await searchLive(api, { channelId: cam.channelId });
        const ranked = live
          .filter((it) => !usedIds.has(it.id.videoId))
          .map((it) => ({ it, score: matchScore(cam, it.snippet.title) }))
          .sort((a, b) => b.score - a.score);
        if (ranked[0] && ranked[0].score >= 1) replacement = ranked[0].it;
        else if (live.length === 1 && !usedIds.has(live[0].id.videoId) && !cam.auto) replacement = live[0];
      }

      if (replacement) {
        const old = cam.yt;
        cam.yt = replacement.id.videoId;
        cam.ytTitle = decodeEntities(replacement.snippet.title);
        usedIds.add(cam.yt);
        if (cam.retired) delete cam.retired;
        report.replaced.push(`${cam.title} (${old} → ${cam.yt})`);
        report.playable++;
        keep.push(cam);
      } else {
        // Never delete right away: ids stay put so favorites keep pointing at the same cam.
        if (!cam.retired) { cam.retired = date; report.retired.push(cam.title); }
        const retiredDays = (Date.parse(date) - Date.parse(cam.retired)) / 86400000;
        if (cam.auto && retiredDays > 56) report.removed.push(cam.title); // auto-found and gone 8+ weeks
        else keep.push(cam);
      }
    } catch (err) {
      if (err.quota) throw err;
      report.notes.push(`Couldn't check ${cam.title}: ${err.message}`);
      keep.push(cam);
    }
  }

  /* 2. Find new cams */
  const autoCount = keep.filter((c) => c.auto).length;
  const room = Math.max(0, Math.min(SETTINGS.maxNewPerRun, SETTINGS.maxAutoCams - autoCount));
  if (room > 0) {
    try {
      const found = new Map();
      for (const q of SETTINGS.discoveryQueries) {
        try {
          for (const it of await searchLive(api, { q, relevanceLanguage: "en" })) {
            if (!usedIds.has(it.id.videoId)) found.set(it.id.videoId, it);
          }
        } catch (err) {
          if (err.quota) { report.notes.push("Stopped searching early: daily YouTube allowance used up."); break; }
          report.notes.push(`Search "${q}" failed: ${err.message}`);
        }
      }
      const info = await videoDetails(api, [...found.keys()]);
      const perChannel = new Map();
      for (const c of keep) if (c.channelId) perChannel.set(c.channelId, (perChannel.get(c.channelId) || 0) + 1);

      const candidates = [...info.values()]
        .filter(isPlayable)
        .filter((it) => it.snippet.liveBroadcastContent === "live")
        .filter((it) => Number(it.liveStreamingDetails?.concurrentViewers || 0) >= SETTINGS.minViewers)
        .filter((it) => animalWords(it.snippet.title).length > 0)
        .filter((it) => !isExcluded(it.snippet.title) && !isExcluded(it.snippet.channelTitle))
        .sort((a, b) => Number(b.liveStreamingDetails.concurrentViewers) - Number(a.liveStreamingDetails.concurrentViewers));

      const seenTitles = new Set(keep.map((c) => norm(c.title)));
      for (const it of candidates) {
        if (report.added.length >= room) break;
        const ch = it.snippet.channelId;
        if ((perChannel.get(ch) || 0) >= SETTINGS.maxPerChannel) continue;
        const rawTitle = decodeEntities(it.snippet.title);
        const title = cleanTitle(rawTitle, decodeEntities(it.snippet.channelTitle));
        if (seenTitles.has(norm(title))) continue;
        const text = `${rawTitle} ${it.snippet.description || ""}`;
        const cam = {
          id: `auto-${slug(title) || "cam"}-${it.id.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 6)}`,
          title,
          place: decodeEntities(it.snippet.channelTitle) || "YouTube",
          cat: guessCategory(rawTitle) || guessCategory(text),
          tags: animalWords(text).slice(0, 10),
          yt: it.id,
          channelId: ch,
          tone: TONES[(autoCount + report.added.length) % TONES.length],
          blurb: firstSentence(it.snippet.description) || "Found by Wild Window's weekly cam hunt.",
          ytTitle: rawTitle,
          auto: true,
          added: date
        };
        keep.push(cam);
        usedIds.add(cam.yt);
        seenTitles.add(norm(title));
        perChannel.set(ch, (perChannel.get(ch) || 0) + 1);
        report.added.push(`${cam.title} (${cam.place})`);
      }
    } catch (err) {
      report.notes.push(`Finding new cams didn't finish: ${err.message}`);
    }
  }

  /* 3. Save */
  const out = writeCams(header, keep);
  let history = [];
  try { history = JSON.parse(await fs.readFile(logFile, "utf8")).history || []; } catch { /* first run */ }
  const summary = {
    ranAt: report.ranAt, checked: report.checked, playable: report.playable,
    replaced: report.replaced, retired: report.retired, revived: report.revived,
    removed: report.removed, added: report.added, notes: report.notes, quotaUsed: report.quotaUsed
  };
  const logOut = JSON.stringify({ lastRun: summary, history: [summary, ...history].slice(0, 12) }, null, 2) + "\n";

  if (!dryRun) {
    await fs.writeFile(streamsFile, out);
    await fs.mkdir(path.dirname(logFile), { recursive: true });
    await fs.writeFile(logFile, logOut);
  }

  const md = [
    `## Wild Window cam refresh — ${date}`,
    `Checked **${report.checked}** cams · **${report.playable}** playable · used ~${report.quotaUsed} of 10,000 YouTube units`,
    "",
    list("New cams", report.added),
    list("Moved to a new stream", report.replaced),
    list("Came back", report.revived),
    list("Retired (hidden until they're live again)", report.retired),
    list("Removed", report.removed),
    list("Notes", report.notes)
  ].filter(Boolean).join("\n");
  log(md);
  if (process.env.GITHUB_STEP_SUMMARY && !dryRun) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, md + "\n");
  return { report, cams: keep, output: out };
}

function list(title, items) {
  return items.length ? `**${title}**\n${items.map((i) => `- ${i}`).join("\n")}\n` : "";
}

/* ------------------------------------------------------------------ run */
// In GitHub Actions, "::warning::" / "::error::" lines show up as readable notes on the
// run's page and in the email, instead of being buried in the log.
const inActions = Boolean(process.env.GITHUB_ACTIONS);
const note = (kind, msg) => console.log(inActions ? `::${kind} title=Weekly cam refresh::${msg}` : msg);

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  const key = (process.env.YOUTUBE_API_KEY || "").trim();
  if (!key) {
    // Not an error: the app works fine without the refresh. Skip quietly (no failure email).
    note("warning", "Skipped: no YouTube API key yet. Add one in GitHub → Settings → Secrets and variables → Actions → New repository secret, named YOUTUBE_API_KEY.");
    process.exit(0);
  }
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  refresh({ key, root, dryRun: process.argv.includes("--dry-run") }).catch((err) => {
    let msg;
    if (err.quota) msg = "YouTube's daily allowance is used up, so nothing was changed. It resets at midnight Pacific time.";
    else if (/API key not valid|keyInvalid|badRequest.*key/i.test(err.message)) msg = "YouTube says the API key isn't valid. Copy it again from Google Cloud Console and update the YOUTUBE_API_KEY secret.";
    else if (/referer|referrer|blocked/i.test(err.message)) msg = "The API key is restricted to websites, so it can't be used from GitHub. Make a second key with no website restriction (API restriction: YouTube Data API v3 only) and save that one as YOUTUBE_API_KEY.";
    else if (/has not been used|disabled|accessNotConfigured/i.test(err.message)) msg = "YouTube Data API v3 isn't turned on for this key's Google Cloud project. Enable it under APIs & Services → Library.";
    else msg = `Refresh failed, nothing was changed: ${err.message}`;
    note("error", msg);
    process.exit(1);
  });
}

export const _test = { cleanTitle, animalWords, guessCategory, isExcluded, isPlayable, matchScore, firstSentence };
