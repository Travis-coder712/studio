/* The Fifty Tour — offline app shell
   v66: previously this was cache-first on EVERY GET, which (a) froze pages until the
   cache version bumped and (b) swallowed cross-origin map tiles, fonts and CDN scripts
   into the app cache forever. Now: cross-origin requests pass straight through, HTML is
   network-first so updates land immediately, and only same-origin assets are cache-first. */
const CACHE = "fifty-tour-v75";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./tour/"];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(ASSETS.map(a => c.add(a))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  // Leave anything cross-origin alone: OpenStreetMap tiles, Google Fonts, the Leaflet CDN.
  // These must not be hoarded in the app cache.
  if (new URL(req.url).origin !== self.location.origin) return;

  const isHTML = req.mode === "navigate" ||
                 (req.headers.get("accept") || "").includes("text/html");

  if (isHTML) {
    // Network-first: a redeploy shows up on the next load, not the next cache bump.
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then(hit => hit || caches.match("./index.html")))
    );
    return;
  }

  // Everything else same-origin: cache-first, fill on miss.
  e.respondWith(
    caches.match(req).then(hit =>
      hit || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        return res;
      })
    )
  );
});
