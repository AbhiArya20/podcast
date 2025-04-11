// // service-worker.js

// const CACHE_NAME = 'edudoor-caches-v1';

// const urlsToCache = ['/index.html'];

// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches
//       .open(CACHE_NAME)
//       .then((cache) => {
//         return cache.addAll(urlsToCache);
//       })
//       .then(() => self.skipWaiting())
//   );
// });

// // Activate event: Remove outdated caches
// self.addEventListener('activate', (event) => {
//   event.waitUntil(
//     caches
//       .keys()
//       .then((cacheNames) => {
//         return Promise.all(cacheNames.filter((cacheName) => cacheName !== CACHE_NAME).map((cacheName) => caches.delete(cacheName)));
//       })
//       .then(() => self.clients.claim())
//   );
// });

// // Fetch event: Serve cached resources when offline
// self.addEventListener('fetch', (event) => {
//   const request = event.request;

//   // Handle navigation requests when offline
//   if (request.mode === 'navigate') {
//     event.respondWith(fetch(request).catch(() => caches.match('/offline.html')));
//     return;
//   }

//   // For Axios endpoints, just fetch directly
//   if (request.url.includes('/api')) {
//     return;
//   }

//   // For other requests, serve from cache or fetch from network
//   event.respondWith(
//     caches
//       .match(request)
//       .then((response) => {
//         return (
//           response ||
//           fetch(request).then((networkResponse) => {
//             if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
//               const responseToCache = networkResponse.clone();
//               caches.open(CACHE_NAME).then((cache) => {
//                 cache.put(request, responseToCache);
//               });
//             }
//             return networkResponse;
//           })
//         );
//       })
//       .catch(() => {
//         // Serve a fallback page when offline for non-navigation requests
//         return caches.match('/offline.html');
//       })
//   );
// });
