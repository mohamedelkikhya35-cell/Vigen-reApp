// اسم الكاش الخاص بتطبيقك
const CACHE_NAME = 'vigenere-app-v1';
const urlsToCache = [
  '/Vigen-reApp/',
  '/Vigen-reApp/index.html',
  '/Vigen-reApp/manifest.json'
];

// مرحلة التثبيت وحفظ الملفات في الكاش
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// مرحلة الرد على الطلبات من الكاش لو النت فصل
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // لو الملف موجود في الكاش رجعه، لو مش موجود هاته من النت
        return response || fetch(event.request);
      })
  );
});
