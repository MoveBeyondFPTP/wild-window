/* Wild Window service worker: lets the app open instantly from the home screen.
   Live video always comes straight from YouTube and is never cached. */
const CACHE = "wild-window-v5";
const SHELL = [
  "./",
  "index.html",
  "css/styles.css",
  "js/config.js",
  "js/streams.js",
  "js/app.js",
  "manifest.webmanifest",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network first for the app's own files (so updates show up), cache as backup.
// "no-cache" makes the phone ask GitHub whether a file changed instead of reusing
// its own copy for up to 10 minutes, so new cams appear right away.
function fresh(req) {
  if (req.mode === "navigate") return fetch(req.url, { cache: "no-cache", credentials: "same-origin" });
  return fetch(new Request(req, { cache: "no-cache" }));
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fresh(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match("index.html")))
  );
});
