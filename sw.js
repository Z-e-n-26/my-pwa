<<<<<<< HEAD
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
=======
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
>>>>>>> d6f8b772ad0865602faeddc4efe35153e7a63f9e
