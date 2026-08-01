self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('annonce-cache-v1').then((cache) => {
      return cache.addAll([
        'index.html',
        'interface_amie.html',
        'secrets.js',
        'bebe.jpg',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
