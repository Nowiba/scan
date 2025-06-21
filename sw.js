const CACHE_NAME = 'scanner-pwa-v1';
const urlsToCache = [
  './',
  './index.html',
  './admin.html',
  'https://cdn.tailwindcss.com',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js',
  'https://unpkg.com/@zxing/library@0.20.0/umd/index.min.js',
  'https://cdn.jsdelivr.net/npm/idb@8.0.0/build/umd.js'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).catch(error => {
        console.error('Cache addAll failed:', error);
      });
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(error => {
        console.error('Fetch failed:', error);
      });
    })
  );
});
