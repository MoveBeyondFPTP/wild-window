/* Wild Window — app logic. No build step, no dependencies. */
(() => {
  "use strict";

  /* ---------------------------------------------------------------- utils */
  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem("ww:" + key); return v == null ? fallback : JSON.parse(v); }
      catch { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem("ww:" + key, JSON.stringify(value)); } catch { /* private mode */ }
    }
  };
  const decodeEntities = (s) => {
    const t = document.createElement("textarea");
    t.innerHTML = s;
    return t.value;
  };
  const debounce = (fn, ms) => {
    let t;
    return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
  };
  const TONES = ["#d9c7e8", "#bfd8c8", "#f3cdb8", "#f6d58e", "#c9d6e8", "#e8dcc6"];

  /* ---------------------------------------------------------------- state */
  const CAMS = (window.WW_CAMS || []).map((c) => ({ ...c }));
  const config = window.WW_CONFIG || {};

  const state = {
    query: "",
    cat: "all",
    daylight: false,
    saved: new Set(store.get("saved", [])),
    myCams: store.get("myCams", []),
    musicMode: store.get("musicMode", false),
    apiKey: store.get("apiKey", "") || config.youtubeApiKey || "",
    live: {},            // youtube id -> "live" | "off" | "gone"
    blocked: store.get("blocked", {}), // cams that can't play in the app -> hidden everywhere
    found: [],           // results from a YouTube search
    current: null,
    player: null,
    playerReady: false,
    view: "browse"
  };

  const camKey = (c) => c.yt || (c.channel ? "ch:" + c.channel : c.id);
  const isBlocked = (c) => Boolean(state.blocked[camKey(c)]);
  const allCams = () => [...state.myCams, ...CAMS].filter((c) => !isBlocked(c));
  const findCam = (id) => allCams().find((c) => c.id === id) || state.found.find((c) => c.id === id);

  // Hide a cam everywhere once we learn it can't play inside the app.
  function blockCam(cam) {
    if (!cam || isBlocked(cam)) return;
    state.blocked[camKey(cam)] = Date.now();
    store.set("blocked", state.blocked);
    state.found = state.found.filter((c) => !isBlocked(c));
    render();
  }

  /* -------------------------------------------------------------- time */
  const localTime = (tz) => {
    if (!tz) return "";
    try {
      return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: tz })
        .format(new Date()).replace(" AM", " am").replace(" PM", " pm");
    } catch { return ""; }
  };
  const localHour = (tz) => {
    try {
      return Number(new Intl.DateTimeFormat("en-US", { hour: "numeric", hourCycle: "h23", timeZone: tz }).format(new Date()));
    } catch { return null; }
  };
  const isDaylight = (cam) => {
    if (!cam.tz) return true;
    const h = localHour(cam.tz);
    return h == null || (h >= 7 && h < 19);
  };

  function setGreeting() {
    const h = new Date().getHours();
    let greet, line;
    if (h >= 5 && h < 12) { greet = "Good morning, explorer"; line = "Who's up with<br>the sun today?"; }
    else if (h >= 12 && h < 17) { greet = "Good afternoon, explorer"; line = "Who's out<br>in the wild today?"; }
    else if (h >= 17 && h < 21) { greet = "Good evening, explorer"; line = "Who's awake<br>in the wild tonight?"; }
    else { greet = "Up late, explorer"; line = "Who's awake<br>in the wild tonight?"; }
    $("#greeting").textContent = greet;
    $("#headline").innerHTML = line;
  }

  /* -------------------------------------------------------------- search */
  const SYNONYMS = {
    fish: ["reef", "coral", "aquarium", "jelly", "shark"],
    bird: ["owl", "eagle", "penguin", "albatross", "crane", "feeder", "songbird"],
    birdie: ["bird"],
    cat: ["kitten", "lion", "big cat"],
    kitty: ["kitten"],
    puppy: ["dog", "pup"],
    bear: ["panda"],
    whale: ["orca"],
    monkey: ["macaque", "primate"],
    ape: ["monkey", "primate"],
    africa: ["safari", "kenya", "savanna"],
    cute: ["cuddly", "kitten", "otter", "panda"],
    sea: ["ocean", "underwater"],
    water: ["ocean", "underwater", "river"],
    calm: ["jelly", "relaxing"],
    sleepy: ["night", "nocturnal"]
  };
  const norm = (s) => String(s || "").toLowerCase().normalize("NFD")
    .replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9 ]+/g, " ");
  const stem = (w) => {
    if (w.length > 4 && w.endsWith("ies")) return w.slice(0, -3) + "y";
    if (w.length > 3 && w.endsWith("es") && /(ch|sh|x|ss)es$/.test(w)) return w.slice(0, -2);
    if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
    return w;
  };
  const words = (s) => norm(s).split(/\s+/).filter(Boolean).map(stem);

  function scoreCam(cam, tokens) {
    if (!tokens.length) return 1;
    const fields = [
      [words(cam.title), 5],
      [words((cam.tags || []).join(" ") + " " + (cam.cat || "")), 3],
      [words(cam.place), 3],
      [words(cam.blurb), 1]
    ];
    let total = 0;
    for (const tok of tokens) {
      const alts = [tok, ...(SYNONYMS[tok] || []).map(stem)];
      let best = 0;
      for (const [ws, weight] of fields) {
        for (const alt of alts) {
          const altWords = alt.split(" ");
          const hit = altWords.length > 1
            ? ws.join(" ").includes(alt)
            : ws.some((w) => w.startsWith(alt) || (alt.length > 3 && w === stem(alt)));
          if (hit) best = Math.max(best, alt === tok ? weight : weight * 0.8);
        }
      }
      if (!best) return 0;     // every word in the search has to match
      total += best;
    }
    return total;
  }

  function filteredCams() {
    const tokens = words(state.query);
    let list = allCams();
    if (state.cat === "saved") list = list.filter((c) => state.saved.has(c.id) || c.mine);
    else if (state.cat !== "all") list = list.filter((c) => c.cat === state.cat);
    if (state.daylight) list = list.filter(isDaylight);
    return list
      .map((c, i) => ({ c, s: scoreCam(c, tokens), live: state.live[c.yt] === "live" ? 1 : 0, i }))
      .filter((x) => x.s > 0)
      .sort((a, b) => (b.s - a.s) || (b.live - a.live) || (a.i - b.i))
      .map((x) => x.c);
  }

  /* -------------------------------------------------------------- cards */
  const DOODLES = {
    birds: '<path d="M4 14c4 0 6-3 8-6 1 3 4 5 8 5-2 3-5 5-9 5-3 0-5-1-7-4z"/><circle cx="14.5" cy="10" r=".6"/>',
    ocean: '<path d="M3 10c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>',
    safari: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>',
    zoo: '<ellipse cx="12" cy="15.5" rx="4.5" ry="3.8"/><circle cx="6.5" cy="10" r="1.8"/><circle cx="10" cy="6.8" r="1.8"/><circle cx="14" cy="6.8" r="1.8"/><circle cx="17.5" cy="10" r="1.8"/>',
    cuddly: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>'
  };

  function badgeFor(cam) {
    if (cam.found) return '<span class="badge live">● live</span>';
    const s = cam.yt ? state.live[cam.yt] : null;
    if (s === "live") return '<span class="badge live">● live</span>';
    if (s === "off") return '<span class="badge nap">zzz · napping</span>';
    if (s === "gone") return '<span class="badge nap">zzz · moved</span>';
    return '<span class="badge">● live cam</span>';
  }

  function cardHTML(cam) {
    const img = cam.yt
      ? `<img loading="lazy" alt="" src="https://i.ytimg.com/vi/${esc(cam.yt)}/hqdefault_live.jpg" data-fallback="https://i.ytimg.com/vi/${esc(cam.yt)}/hqdefault.jpg">`
      : "";
    const doodle = `<svg class="doodle" aria-hidden="true" viewBox="0 0 24 24">${DOODLES[cam.cat] || DOODLES.zoo}</svg>`;
    const saved = state.saved.has(cam.id)
      ? '<span class="saved-dot" aria-label="Saved"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg></span>'
      : "";
    const time = localTime(cam.tz);
    const meta = esc(cam.place || "") + (time ? ` <span class="nowrap">· ${esc(time)}</span>` : "");
    return `<button class="card" data-id="${esc(cam.id)}">
      <span class="thumb" style="--tone:${esc(cam.tone || TONES[0])}">${doodle}${img}${badgeFor(cam)}${saved}</span>
      <span class="card-title">${esc(cam.title)}</span>
      <span class="card-meta">${meta}</span>
    </button>`;
  }

  // Swap to a backup thumbnail, then give up and show the pastel doodle.
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement) || !img.closest(".thumb")) return;
    if (img.dataset.fallback) { img.src = img.dataset.fallback; delete img.dataset.fallback; }
    else img.remove();
  }, true);
  // YouTube serves a tiny grey placeholder for missing thumbnails; hide it.
  document.addEventListener("load", (e) => {
    const img = e.target;
    if (img instanceof HTMLImageElement && img.closest(".thumb") && img.naturalWidth > 0 && img.naturalWidth <= 120) {
      if (img.dataset.fallback) { img.src = img.dataset.fallback; delete img.dataset.fallback; }
      else img.remove();
    }
  }, true);

  /* -------------------------------------------------------------- chips */
  const CHIPS = [
    { id: "all", label: "All" },
    { id: "birds", label: "Birds" },
    { id: "ocean", label: "Ocean" },
    { id: "safari", label: "Safari" },
    { id: "zoo", label: "Zoo" },
    { id: "cuddly", label: "Cuddly" },
    { id: "saved", label: "Saved", icon: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>' }
  ];
  function renderChips() {
    const sun = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
    $("#chips").innerHTML =
      `<button class="chip" data-daylight aria-pressed="${state.daylight}"><svg aria-hidden="true" viewBox="0 0 24 24">${sun}</svg>Daylight now</button>` +
      CHIPS.map((c) => `<button class="chip" data-cat="${c.id}" aria-pressed="${state.cat === c.id}">${
        c.icon ? `<svg aria-hidden="true" viewBox="0 0 24 24">${c.icon}</svg>` : ""}${c.label}</button>`).join("");
  }

  /* -------------------------------------------------------------- render */
  function render() {
    const list = filteredCams();
    const grid = $("#grid");
    const q = state.query.trim();

    if (!list.length) {
      const hint = state.apiKey && q
        ? `<button class="pill-btn" data-yt-search>Search YouTube for “${esc(q)}”</button>`
        : "";
      const emptyMsg = state.cat === "saved" && !q
        ? "<strong>No saved friends yet</strong><p>Tap Save on any cam to keep it here.</p>"
        : `<strong>No one's home by that name</strong><p>Try one of these instead:</p>`;
      const suggestions = ["owl", "penguin", "panda", "jelly", "kitten"]
        .map((s) => `<button class="chip" data-suggest="${s}">${s}</button>`).join("");
      grid.innerHTML = `<div class="empty">${emptyMsg}${state.cat === "saved" && !q ? "" : `<div class="row">${suggestions}</div>`}${hint ? `<div class="row" style="margin-top:14px">${hint}</div>` : ""}</div>`;
    } else {
      grid.innerHTML = list.map(cardHTML).join("");
    }

    let countText;
    if (!list.length) countText = "";
    else if (q) countText = `${list.length} ${list.length === 1 ? "friend" : "friends"} found`;
    else if (state.cat === "saved") countText = `${list.length} saved ${list.length === 1 ? "friend" : "friends"}`;
    else countText = `${list.length} cams to peek into`;
    if (state.daylight && list.length) countText += " · in daylight now";
    $("#count").textContent = countText;

    renderFound();
  }

  function renderFound() {
    const q = state.query.trim();
    const box = $("#found");
    if (!state.apiKey || !q) { box.hidden = true; return; }
    box.hidden = false;
    const g = $("#found-grid");
    if (state.foundFor === q && state.found.length) {
      $("#found-note").textContent = "Live right now, found on YouTube.";
      g.innerHTML = state.found.map(cardHTML).join("");
    } else if (state.foundFor === q && state.foundLoading) {
      $("#found-note").textContent = "Peeking around YouTube…";
      g.innerHTML = "";
    } else if (state.foundFor === q && state.foundError) {
      $("#found-note").textContent = state.foundError;
      g.innerHTML = "";
    } else if (state.foundFor === q) {
      $("#found-note").textContent = "No live cams on YouTube match that right now.";
      g.innerHTML = "";
    } else {
      $("#found-note").innerHTML = "";
      g.innerHTML = `<button class="pill-btn ghost" data-yt-search style="grid-column:1/-1;justify-self:start">Find live “${esc(q)}” cams on YouTube</button>`;
    }
  }

  /* -------------------------------------------------------------- YouTube Data API (optional) */
  async function ytApi(path, params) {
    const url = new URL("https://www.googleapis.com/youtube/v3/" + path);
    Object.entries({ ...params, key: state.apiKey }).forEach(([k, v]) => url.searchParams.set(k, v));
    const res = await fetch(url);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error((data.error && data.error.message) || `YouTube said ${res.status}`);
    return data;
  }

  async function refreshLiveStatus() {
    if (!state.apiKey) return;
    const ids = [...new Set(allCams().map((c) => c.yt).filter(Boolean))];
    try {
      for (let i = 0; i < ids.length; i += 50) {
        const chunk = ids.slice(i, i + 50);
        const data = await ytApi("videos", { part: "snippet,status", id: chunk.join(","), maxResults: 50 });
        const seen = new Set();
        for (const item of data.items || []) {
          seen.add(item.id);
          state.live[item.id] = item.snippet.liveBroadcastContent === "live" ? "live" : "off";
          // Embedding turned off, or not public: it can't play here, so hide it.
          const st = item.status || {};
          if (st.embeddable === false || (st.privacyStatus && st.privacyStatus !== "public" && st.privacyStatus !== "unlisted")) {
            state.blocked[item.id] = Date.now();
          }
        }
        // Videos YouTube no longer knows about (deleted or private) can't play either.
        chunk.forEach((id) => { if (!seen.has(id)) { state.live[id] = "gone"; state.blocked[id] = Date.now(); } });
      }
      store.set("blocked", state.blocked);
      render();
      if (state.current) fillWatch(state.current);
    } catch (err) {
      console.warn("Live status check failed:", err.message);
    }
  }

  async function searchYouTube(q) {
    q = q.trim();
    if (!state.apiKey || !q) return;
    state.foundFor = q; state.foundLoading = true; state.foundError = ""; state.found = [];
    renderFound();
    const cacheKey = "ww:search:" + q.toLowerCase();
    try {
      let items;
      const cached = JSON.parse(sessionStorage.getItem(cacheKey) || "null");
      if (cached && Date.now() - cached.t < 30 * 60 * 1000) items = cached.items;
      else {
        const data = await ytApi("search", {
          part: "snippet", type: "video", eventType: "live", videoEmbeddable: "true",
          safeSearch: "strict", maxResults: 12, q: `${q} live cam`
        });
        items = data.items || [];
        try { sessionStorage.setItem(cacheKey, JSON.stringify({ t: Date.now(), items })); } catch { /* full */ }
      }
      state.found = items.filter((it) => it.id && it.id.videoId && !state.blocked[it.id.videoId]).map((it, i) => ({
        id: "yt-" + it.id.videoId,
        yt: it.id.videoId,
        title: decodeEntities(it.snippet.title).replace(/\s*[|–—-]\s*live.*$/i, "").slice(0, 70) || "Live cam",
        place: decodeEntities(it.snippet.channelTitle || "YouTube"),
        cat: "found",
        tags: [],
        tone: TONES[i % TONES.length],
        blurb: decodeEntities(it.snippet.description || "").slice(0, 220),
        found: true
      }));
    } catch (err) {
      state.foundError = /quota/i.test(err.message)
        ? "Today's YouTube search allowance is used up. It resets at midnight Pacific time."
        : `YouTube search didn't work: ${err.message}`;
    }
    state.foundLoading = false;
    if (state.foundFor === q) renderFound();
  }

  /* -------------------------------------------------------------- player */
  let ytApiPromise = null;
  function loadYouTubeApi() {
    if (ytApiPromise) return ytApiPromise;
    ytApiPromise = new Promise((resolve, reject) => {
      if (window.YT && window.YT.Player) return resolve();
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { if (prev) prev(); resolve(); };
      const s = document.createElement("script");
      s.src = "https://www.youtube.com/iframe_api";
      s.async = true;
      s.onerror = () => { ytApiPromise = null; reject(new Error("Could not load the YouTube player")); };
      document.head.appendChild(s);
    });
    return ytApiPromise;
  }

  function embedSrc(cam) {
    // Always start muted: muted video can autoplay everywhere, and on iPhone a
    // muted video never interrupts music playing in another app. In "Cam sound"
    // mode the player is unmuted as soon as it's ready.
    const p = new URLSearchParams({
      autoplay: "1", mute: "1", playsinline: "1", rel: "0",
      modestbranding: "1", enablejsapi: "1", iv_load_policy: "3"
    });
    if (location.origin && location.origin.startsWith("http")) p.set("origin", location.origin);
    if (cam.channel) {
      p.set("channel", cam.channel);
      return "https://www.youtube.com/embed/live_stream?" + p;
    }
    return `https://www.youtube.com/embed/${encodeURIComponent(cam.yt)}?` + p;
  }

  let mountToken = 0;
  function destroyPlayer() {
    if (state.player && state.player.destroy) { try { state.player.destroy(); } catch { /* gone */ } }
    state.player = null;
    state.playerReady = false;
    $("#stage-frame").innerHTML = "";
  }

  function mountPlayer(cam) {
    const token = ++mountToken;
    destroyPlayer();
    $("#stage-loading").hidden = false;
    $("#stage-error").hidden = true;

    const iframe = document.createElement("iframe");
    iframe.src = embedSrc(cam);
    iframe.title = `${cam.title} live cam`;
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("playsinline", "");
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    $("#stage-frame").appendChild(iframe);

    // If the player API is slow, still uncover the video once the frame loads.
    iframe.addEventListener("load", () => {
      setTimeout(() => { if (token === mountToken) $("#stage-loading").hidden = true; }, 2500);
    });

    loadYouTubeApi().then(() => {
      if (token !== mountToken) return;
      state.player = new window.YT.Player(iframe, {
        events: {
          onReady: () => {
            if (token !== mountToken) return;
            state.playerReady = true;
            applyAudio(true);
            try { state.player.playVideo(); } catch { /* ignore */ }
          },
          onStateChange: (e) => {
            if (token !== mountToken) return;
            if (e.data === 1 /* playing */) {
              $("#stage-loading").hidden = true;
              applyAudio(false);
              updateSoundHint();
            }
            if (e.data === 0 /* ended */) showNap(cam, "This stream has ended for now.");
          },
          onError: (e) => {
            if (token !== mountToken) return;
            // 100 = removed or private, 101/150 = owner blocks playing it in other apps.
            if (e.data === 100 || e.data === 101 || e.data === 150) {
              blockCam(cam);
              showNap(cam, "This one can't play inside the app, so it's been taken off your list.", true);
            } else {
              showNap(cam, "The stream hiccuped or moved to a new link.");
            }
          }
        }
      });
    }).catch(() => { /* the plain embed still plays; we just can't control sound */ });
  }

  function showNap(cam, text, removed = false) {
    $("#stage-loading").hidden = true;
    $("#stage-error").hidden = false;
    $("#stage-error-title").textContent = removed ? "This cam can't come inside" : "This cam is napping";
    $("#stage-error-text").textContent = text;
    $("#err-find").hidden = !state.apiKey || removed;
    if (cam.yt) state.live[cam.yt] = "gone";
    $("#w-more").innerHTML = allCams().filter((c) => c.id !== cam.id).slice(0, 8).map(cardHTML).join("");
  }

  /* -------------------------------------------------------------- sound: cam vs. my music */
  function setAudioSession() {
    // Safari 17+: an "ambient" page mixes with other apps' audio instead of stopping it.
    try {
      if (navigator.audioSession) navigator.audioSession.type = state.musicMode ? "ambient" : "auto";
    } catch { /* not supported */ }
  }

  function applyAudio(initial) {
    const p = state.player;
    if (!p || !state.playerReady) return;
    try {
      if (state.musicMode) {
        if (!p.isMuted()) p.mute();
      } else if (initial) {
        p.unMute();
        p.setVolume(100);
      }
    } catch { /* player not ready yet */ }
  }

  function setMusicMode(on, { announce = true } = {}) {
    state.musicMode = on;
    store.set("musicMode", on);
    setAudioSession();
    const p = state.player;
    if (p && state.playerReady) {
      try {
        if (on) p.mute();
        else {
          p.unMute();
          p.setVolume(100);
          if (p.getPlayerState() !== 1) p.playVideo();
        }
      } catch { /* ignore */ }
    }
    updateSoundUI();
    if (announce) {
      if (on && !store.get("musicTipSeen", false)) {
        store.set("musicTipSeen", true);
        toast("My music is on. The cam stays silent, so play anything from Music, Spotify or another app.", 5200);
      } else {
        toast(on ? "My music on · cam is silent" : "Cam sound on");
      }
    }
  }

  function updateSoundUI() {
    const on = state.musicMode;
    $("#sound-music").setAttribute("aria-pressed", String(on));
    $("#sound-cam").setAttribute("aria-pressed", String(!on));
    $("#mini-music").setAttribute("aria-pressed", String(on));
    $("#mini-music").setAttribute("aria-label", on ? "Switch to cam sound" : "Switch to my music");
    $("#mini-sub").textContent = on ? "silent cam · your music" : "listening in…";
    updateSoundHint();
  }

  function updateSoundHint() {
    let hint = "";
    if (state.musicMode) {
      hint = "Your music keeps playing while you watch. If it paused when the cam opened, start it again from Control Center.";
    } else {
      let muted = false;
      try { muted = state.player && state.playerReady && state.player.isMuted(); } catch { /* ignore */ }
      if (muted) hint = "No sound? Tap the speaker on the video once.";
    }
    $("#sound-hint").textContent = hint;
  }

  // Keep the cam silent in music mode, even if someone taps unmute on the video.
  setInterval(() => { if (state.musicMode) applyAudio(false); }, 800);

  /* -------------------------------------------------------------- views */
  function setView(view) {
    state.view = view;
    document.body.dataset.view = view;
    $("#watch").hidden = view === "browse";
  }

  function fillWatch(cam) {
    $("#w-title").textContent = cam.title;
    $("#w-place").textContent = cam.place || "";
    $("#mini-title").textContent = cam.title;
    const t = localTime(cam.tz);
    $("#w-time").textContent = t ? `${t} there` : "";
    const s = cam.found ? "live" : (cam.yt ? state.live[cam.yt] : null);
    const pill = $("#w-live");
    pill.className = "live-pill" + (s === "live" ? " live" : "");
    pill.textContent = s === "live" ? "● live now" : s === "off" ? "zzz · napping" : s === "gone" ? "zzz · moved" : "● live cam";
    $("#w-blurb").textContent = cam.blurb || "";
    $("#w-blurb").hidden = !cam.blurb;

    const saved = state.saved.has(cam.id);
    $("#w-save").setAttribute("aria-pressed", String(saved));
    $("#w-save span").textContent = saved ? "Saved" : "Save";

    const more = allCams()
      .filter((c) => c.id !== cam.id && (c.cat === cam.cat || cam.cat === "found" || cam.cat === "mine"))
      .sort((a, b) => (state.live[b.yt] === "live") - (state.live[a.yt] === "live"))
      .slice(0, 8);
    const fill = more.length ? more : allCams().filter((c) => c.id !== cam.id).slice(0, 8);
    $("#w-more").innerHTML = fill.map(cardHTML).join("");
  }

  function openCam(cam) {
    if (!cam) return;
    const same = state.current && state.current.id === cam.id && state.player;
    state.current = cam;
    fillWatch(cam);
    setView("watch");
    $("#watch").scrollTop = 0;
    if (!same) mountPlayer(cam);
    updateSoundUI();
    try {
      const url = new URL(location.href);
      url.search = "";
      if (cam.found || cam.mine) { url.searchParams.set("v", cam.yt); url.searchParams.set("name", cam.title); }
      else url.searchParams.set("cam", cam.id);
      history.replaceState(null, "", url);
    } catch { /* file:// */ }
  }

  function closeWatch() {
    mountToken++;
    destroyPlayer();
    state.current = null;
    setView("browse");
    try { history.replaceState(null, "", location.pathname); } catch { /* ignore */ }
  }

  /* -------------------------------------------------------------- save & share */
  function toggleSave(cam) {
    if (state.saved.has(cam.id)) {
      state.saved.delete(cam.id);
      if (cam.found) state.myCams = state.myCams.filter((c) => c.id !== cam.id);
      toast("Removed from Saved");
    } else {
      state.saved.add(cam.id);
      if (cam.found && !state.myCams.some((c) => c.id === cam.id)) {
        state.myCams.unshift({ ...cam, found: false, mine: true, cat: "mine" });
      }
      toast("Saved. Find it under Saved.");
    }
    store.set("saved", [...state.saved]);
    store.set("myCams", state.myCams);
    fillWatch(cam);
    render();
    renderMyCams();
  }

  async function share(cam) {
    const url = location.href;
    const data = { title: `${cam.title} · Wild Window`, text: `Peek at the ${cam.title} live cam`, url };
    try {
      if (navigator.share) { await navigator.share(data); return; }
      await navigator.clipboard.writeText(url);
      toast("Link copied");
    } catch (err) {
      if (err && err.name !== "AbortError") toast("Couldn't share that link");
    }
  }

  /* -------------------------------------------------------------- settings */
  function parseYouTubeId(input) {
    const s = String(input || "").trim();
    if (/^[\w-]{11}$/.test(s)) return s;
    try {
      const u = new URL(s);
      const host = u.hostname.replace(/^(www|m|music)\./, "");
      if (host === "youtu.be") return (u.pathname.slice(1).match(/^[\w-]{11}/) || [])[0] || null;
      if (/(^|\.)youtube(-nocookie)?\.com$/.test(host)) {
        const v = u.searchParams.get("v");
        if (v && /^[\w-]{11}$/.test(v)) return v;
        const m = u.pathname.match(/\/(?:live|embed|shorts|v)\/([\w-]{11})/);
        if (m) return m[1];
      }
    } catch { /* not a URL */ }
    return null;
  }

  function renderMyCams() {
    const mine = state.myCams;
    $("#my-cams").innerHTML = mine.length
      ? mine.filter((c) => !isBlocked(c)).map((c) => `<div class="my-cam"><span>${esc(c.title)}</span><button class="pill-btn ghost" data-remove="${esc(c.id)}">Remove</button></div>`).join("")
      : "";
    const hiddenCount = Object.keys(state.blocked).length;
    const note = $("#hidden-cams");
    note.hidden = !hiddenCount;
    note.innerHTML = hiddenCount
      ? `${hiddenCount} ${hiddenCount === 1 ? "cam is" : "cams are"} hidden because ${hiddenCount === 1 ? "it" : "they"} couldn't play inside the app. <button class="link-btn" data-unhide>Check again</button>`
      : "";
  }

  function openSheet() {
    $("#api-key").value = state.apiKey;
    $("#add-msg").textContent = ""; $("#key-msg").textContent = "";
    renderMyCams();
    $("#sheet-backdrop").hidden = false;
    $("#settings").hidden = false;
    setTimeout(() => $("#close-settings").focus(), 50);
  }
  function closeSheet() {
    $("#sheet-backdrop").hidden = true;
    $("#settings").hidden = true;
    $("#open-settings").focus();
  }

  function setMsg(el, text, kind) {
    el.textContent = text;
    el.className = "form-msg" + (kind ? " " + kind : "");
  }

  /* -------------------------------------------------------------- toast */
  let toastTimer;
  function toast(text, ms = 2600) {
    const t = $("#toast");
    t.textContent = text;
    t.hidden = false;
    t.style.animation = "none"; void t.offsetWidth; t.style.animation = "";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, ms);
  }

  /* -------------------------------------------------------------- events */
  const input = $("#q");
  const onType = debounce(() => {
    state.query = input.value;
    render();
  }, 120);
  input.addEventListener("input", () => {
    $("#clear-q").hidden = !input.value;
    onType();
  });
  $("#search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    state.query = input.value;
    render();
    input.blur();
    if (state.apiKey && state.query.trim() && !filteredCams().length) searchYouTube(state.query);
  });
  $("#clear-q").addEventListener("click", () => {
    input.value = ""; state.query = ""; $("#clear-q").hidden = true;
    render(); input.focus();
  });

  $("#chips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    if (chip.hasAttribute("data-daylight")) state.daylight = !state.daylight;
    else state.cat = chip.dataset.cat;
    renderChips();
    render();
  });

  // Cards anywhere (grid, YouTube results, "more friends" row)
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".card[data-id]");
    if (card) { openCam(findCam(card.dataset.id)); return; }
    const sug = e.target.closest("[data-suggest]");
    if (sug) {
      input.value = sug.dataset.suggest; state.query = input.value; state.cat = "all";
      $("#clear-q").hidden = false; renderChips(); render(); return;
    }
    if (e.target.closest("[data-yt-search]")) { searchYouTube(state.query); return; }
    if (e.target.closest("[data-unhide]")) {
      state.blocked = {};
      store.set("blocked", state.blocked);
      renderMyCams(); render();
      refreshLiveStatus();
      toast("Hidden cams are back. Any that still can't play will hide again.");
      return;
    }
    const rm = e.target.closest("[data-remove]");
    if (rm) {
      const id = rm.dataset.remove;
      state.myCams = state.myCams.filter((c) => c.id !== id);
      state.saved.delete(id);
      store.set("myCams", state.myCams); store.set("saved", [...state.saved]);
      renderMyCams(); render();
    }
  });

  $("#minimize").addEventListener("click", () => setView("mini"));
  $("#mini-expand").addEventListener("click", () => { setView("watch"); });
  $(".mini-info").addEventListener("click", () => { setView("watch"); });
  $("#close-watch").addEventListener("click", closeWatch);
  $("#mini-close").addEventListener("click", closeWatch);

  $("#sound-cam").addEventListener("click", () => { if (state.musicMode) setMusicMode(false); });
  $("#sound-music").addEventListener("click", () => { if (!state.musicMode) setMusicMode(true); });
  $("#mini-music").addEventListener("click", () => setMusicMode(!state.musicMode));

  $("#w-save").addEventListener("click", () => state.current && toggleSave(state.current));
  $("#w-share").addEventListener("click", () => state.current && share(state.current));

  $("#err-another").addEventListener("click", () => {
    const cur = state.current;
    const pool = allCams().filter((c) => c.id !== (cur && cur.id) && state.live[c.yt] !== "gone" && state.live[c.yt] !== "off");
    const same = pool.filter((c) => cur && c.cat === cur.cat);
    const pick = (same.length ? same : pool)[Math.floor(Math.random() * (same.length ? same.length : pool.length))];
    if (pick) openCam(pick);
  });
  $("#err-find").addEventListener("click", () => {
    const cur = state.current;
    if (!cur) return;
    const q = (cur.tags && cur.tags[0]) ? `${cur.title} ${cur.place.split(",")[0]}` : cur.title;
    closeWatch();
    input.value = cur.title; state.query = cur.title; state.cat = "all";
    $("#clear-q").hidden = false;
    renderChips(); render();
    searchYouTube(q);
    setTimeout(() => $("#found").scrollIntoView({ behavior: "smooth", block: "start" }), 200);
  });

  $("#open-settings").addEventListener("click", openSheet);
  $("#close-settings").addEventListener("click", closeSheet);
  $("#sheet-backdrop").addEventListener("click", closeSheet);

  $("#add-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = $("#add-msg");
    const yt = parseYouTubeId($("#add-url").value);
    if (!yt) { setMsg(msg, "That doesn't look like a YouTube video link.", "err"); return; }
    const id = "my-" + yt;
    if (allCams().some((c) => c.yt === yt)) { setMsg(msg, "That cam is already in your list.", "err"); return; }
    let title = $("#add-name").value.trim();
    if (!title && state.apiKey) {
      try {
        const d = await ytApi("videos", { part: "snippet", id: yt });
        if (d.items && d.items[0]) title = decodeEntities(d.items[0].snippet.title).slice(0, 60);
      } catch { /* fine */ }
    }
    const cam = {
      id, yt, title: title || "My cam", place: "Added by you", cat: "mine", tags: ["mine"],
      tone: TONES[state.myCams.length % TONES.length], blurb: "", mine: true
    };
    state.myCams.unshift(cam);
    state.saved.add(id);
    store.set("myCams", state.myCams); store.set("saved", [...state.saved]);
    $("#add-url").value = ""; $("#add-name").value = "";
    setMsg(msg, `Added “${cam.title}”.`, "ok");
    renderMyCams(); render();
    refreshLiveStatus();
  });

  $("#key-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = $("#key-msg");
    const key = $("#api-key").value.trim();
    if (!key) { setMsg(msg, "Paste a key first.", "err"); return; }
    setMsg(msg, "Checking the key…");
    const prev = state.apiKey;
    state.apiKey = key;
    try {
      await ytApi("videos", { part: "id", id: CAMS[0] ? CAMS[0].yt : "dQw4w9WgXcQ" });
      store.set("apiKey", key);
      setMsg(msg, "Key works. Live badges and YouTube search are on.", "ok");
      refreshLiveStatus();
      render();
    } catch (err) {
      state.apiKey = prev;
      setMsg(msg, `That key didn't work: ${err.message}`, "err");
    }
  });
  $("#remove-key").addEventListener("click", () => {
    state.apiKey = config.youtubeApiKey || "";
    store.set("apiKey", "");
    $("#api-key").value = "";
    state.live = {};
    setMsg($("#key-msg"), "Key removed from this device.", "ok");
    render();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!$("#settings").hidden) closeSheet();
    else if (state.view === "watch") setView("mini");
  });

  // Keep local times fresh.
  setInterval(() => {
    setGreeting();
    if (document.activeElement !== input) render();
    if (state.current) $("#w-time").textContent = localTime(state.current.tz) ? `${localTime(state.current.tz)} there` : "";
  }, 60 * 1000);
  // Re-check which cams are live every 10 minutes (uses 1 quota unit per 50 cams).
  setInterval(refreshLiveStatus, 10 * 60 * 1000);

  /* -------------------------------------------------------------- start */
  setGreeting();
  setAudioSession();
  renderChips();
  render();
  updateSoundUI();
  refreshLiveStatus();
  loadYouTubeApi().catch(() => {});

  // Open a cam from a shared link: ?cam=<id> or ?v=<youtube id>&name=<title>
  const params = new URLSearchParams(location.search);
  if (params.get("cam") && findCam(params.get("cam"))) {
    openCam(findCam(params.get("cam")));
  } else if (params.get("v") && /^[\w-]{11}$/.test(params.get("v"))) {
    const v = params.get("v");
    const existing = allCams().find((c) => c.yt === v);
    openCam(existing || {
      id: "yt-" + v, yt: v, title: (params.get("name") || "Shared cam").slice(0, 70),
      place: "Shared with you", cat: "found", tags: [], tone: TONES[0], blurb: "", found: true
    });
  }

  if ("serviceWorker" in navigator && /^https:|^http:\/\/localhost/.test(location.href)) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
