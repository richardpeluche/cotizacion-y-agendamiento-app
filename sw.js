// Service Worker — Proformas RICCHARY
const CACHE_NAME = 'ricchary-v1';
const ASSETS = [
  './proforma_ricchary.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Instalación: guarda los archivos en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activación: limpia cachés viejas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: responde desde caché, si falla va a la red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).catch(() => {
        // Si no hay red y no está en caché, devuelve el HTML principal
        return caches.match('./proforma_ricchary.html');
      });
    })
  );
});
