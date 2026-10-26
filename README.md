# Wild Window 🦉

A cozy little web app for finding and watching free animal livestreams — owls, penguins, pandas, jellyfish, waterholes and more — right inside the app. Add it to your iPhone home screen and it opens full-screen like a real app.

**Features**

- Search by animal, place or mood ("owl", "Kenya", "calm", "cute")
- Categories, plus **Daylight now** to show cams where it's light out
- Streams play inside the app, with a mini player so you can keep browsing
- **My music** button: keeps the cam silent so your own music keeps playing
- Heart any cam to add it to your favorites — they live on a "Your favorites" shelf at the top and under the Favorites filter
- Add your own YouTube cams, share a cam with a link
- Optional YouTube key for live/offline badges and searching all of YouTube

No build step and no accounts — it's plain HTML, CSS and JavaScript.

---

## 1. Put it on GitHub

1. Sign in at [github.com](https://github.com) and click **New repository**.
2. Name it (for example `wild-window`), make it **Public**, and click **Create repository**.
3. On the new repo page, click **uploading an existing file**.
4. Unzip `wild-window.zip` on your computer, open the folder, select **everything inside it** (including the `css`, `js` and `icons` folders), and drag it onto the page.
5. Click **Commit changes**.

> Tip: drag the *contents* of the folder, not the folder itself, so `index.html` sits at the top level of the repo.

## 2. Turn it into a web link (GitHub Pages)

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then **Save**.
4. Wait a minute and refresh. Your link appears at the top, like
   `https://YOUR-NAME.github.io/wild-window/`

## 3. Add it to your iPhone

1. Open your link in **Safari** on your iPhone.
2. Tap the **Share** button, then **Add to Home Screen**.
3. Tap **Add**. The owl icon shows up on your home screen.

---

## Using "My music"

On the watch screen, switch from **Cam sound** to **My music** (or tap the headphones on the mini player). The cam keeps playing but stays silent, so music from Apple Music, Spotify, podcasts or anything else keeps going.

- Cams always start silently, so opening a cam won't stop your music while My music is on.
- If your music *was* stopped (for example, you had Cam sound on and then switched), start it again from **Control Center** — after that, both play together.
- Your choice is remembered for next time.
- Want cam sound back? Tap **Cam sound**. If the video pauses, tap it once to continue with sound (iPhones require a tap before playing sound).

## Adding your own cams

Tap the **gear** icon → **Add a cam**, paste a YouTube live stream link, and give it a name. It appears in search and in your **Favorites**, stored on your phone.

To add cams for everyone who uses your link, edit `js/streams.js` and add an entry (the file explains each field).

## Optional: live badges and searching all of YouTube

Without a key, the app works from its built-in list of cams. With a free **YouTube Data API key** you also get:

- **● live** / **zzz napping** badges showing which cams are on right now
- a **Find live cams on YouTube** button under your search results
- a **Find its new stream** button when a cam has moved

To get a key:

1. Go to [console.cloud.google.com](https://console.cloud.google.com/) and create a project (free).
2. Open **APIs & Services → Library**, find **YouTube Data API v3**, and click **Enable**.
3. Open **APIs & Services → Credentials → Create credentials → API key**.
4. Click the new key → **Application restrictions → Websites**, and add `https://YOUR-NAME.github.io/*`. Under **API restrictions**, choose **YouTube Data API v3**. Save.
5. In the app, tap the **gear** icon and paste the key. It's stored only on your device.

The free allowance is 10,000 units a day. Live badges cost about 1 unit per check; each YouTube search costs 100, so roughly 100 searches a day.

(You can also put the key in `js/config.js` so it works on every device — just make sure it's restricted to your site as in step 4, since the repo is public.)

## Weekly cam refresh (every Monday morning)

A GitHub Action runs every **Monday at about 5 am Denver time** (4 am in winter). It:

- checks every cam and swaps in the new link when a stream has moved to a new video on the same YouTube channel
- marks cams that are gone or block in-app playback as **off air**, so they're hidden from browsing (they come back automatically if they go live again)
- searches YouTube for up to 6 new live animal cams that allow in-app playback, tagged **✦ new** for a week
- saves a report in `data/refresh-log.json` (and on the run's page in the **Actions** tab)

**Your favorites always carry over.** Each cam keeps the same id even when its stream link changes, and the app keeps its own copy of every favorite. If a favorite goes off air, it stays in your favorites with a "zzz · off air" badge instead of disappearing.

### One-time setup

1. Get a free YouTube Data API key (steps in the section above).
2. In your GitHub repo, open **Settings → Secrets and variables → Actions → New repository secret**.
3. Name it `YOUTUBE_API_KEY`, paste the key, and click **Add secret**.
4. To try it right away: **Actions** tab → **Weekly cam refresh** → **Run workflow**.

Each run uses roughly 1,000–2,500 of the 10,000 free daily YouTube units. To change the day or time, edit the `cron` line in `.github/workflows/refresh-cams.yml` (times are in UTC).

---

## Good to know

- **Streams sometimes move.** Broadcasters occasionally restart a stream with a new link. When that happens the cam shows "This cam is napping." Fix it by pasting the new video ID into `js/streams.js`, or let the API key find it for you.
- **Seasons matter.** Some cams only run part of the year (nesting season, migrations), and night cams can look dark — try **Daylight now**.
- **Some broadcasters block embedding.** If a cam turns out to block in-app playback, the app hides it automatically and never shows it again. With a YouTube key it checks ahead of time, so you usually never see one. (Gear icon → "Check again" brings hidden cams back if a broadcaster changes their mind.)
- Videos are played through YouTube's official embedded player, so the streams' owners keep their views and credit.

## Files

```
index.html            the app page
css/styles.css        the Storybook look
js/streams.js         the built-in list of cams (edit me!)
js/app.js             search, player, my music, saving
js/config.js          optional YouTube API key
scripts/refresh-cams.mjs   the weekly refresh
.github/workflows/    runs the refresh every Monday
data/refresh-log.json what the last refreshes changed
manifest.webmanifest  home-screen app settings
sw.js                 makes the app open fast and offline-friendly
icons/                app icons
```

To try it on your computer first, run `python3 -m http.server` in this folder and open `http://localhost:8000`.
