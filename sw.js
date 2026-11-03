const CACHE_NAME = 'liftlog-v410-offline-1';
const CORE = [
  "./",
  "./index.html",
  "./assets/exercises/incline-db-fly.webp",
  "./assets/exercises/push-up.webp",
  "./assets/exercises/low-to-high-cable-fly.webp",
  "./assets/exercises/machine-chest-fly.webp",
  "./assets/exercises/chest-press-machine.webp",
  "./assets/exercises/flat-db-press.webp",
  "./assets/exercises/bent-over-db-row.webp",
  "./assets/exercises/bulgarian-split-squat.webp",
  "./assets/exercises/cable-chest-fly.webp",
  "./assets/exercises/cable-triceps-pushdown.webp",
  "./assets/exercises/db-biceps-curl.webp",
  "./assets/exercises/db-hammer-curl.webp",
  "./assets/exercises/db-lateral-raise.webp",
  "./assets/exercises/db-overhead-triceps-extension.webp",
  "./assets/exercises/db-shoulder-press.webp",
  "./assets/exercises/hip-thrust-machine.webp",
  "./assets/exercises/incline-db-press.webp",
  "./assets/exercises/lat-pulldown.webp",
  "./assets/exercises/leg-press.webp"
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('liftlog-') && k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response.ok) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    }
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || (event.request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
