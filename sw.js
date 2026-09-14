/* Offline cache. Bump CACHE when any file changes. */
var CACHE = "oo-bridge-v2";
var FILES = [
  "./", "./index.html", "./styles.css", "./app.js",
  "./data-equipment.js", "./data-duties.js", "./data-passage.js", "./data-arrdep.js", "./data-zones.js",
  "./manifest.json", "./icon.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(FILES.map(function (f) {
        return c.add(f).catch(function () { /* skip anything missing */ });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (ks) {
      return Promise.all(ks.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

// Cache-first: the app is static, so this works with no network at all.
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      return hit || fetch(e.request).then(function (res) {
        if (res && res.status === 200 && res.type === "basic") {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        }
        return res;
      }).catch(function () {
        return caches.match("./index.html");
      });
    })
  );
});
