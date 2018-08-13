// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = '{%VERSION%}::';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = ['','dist/'];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  (<any>event).waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then((<any>self).skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  (<any>event).waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => (<any>self).clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if ((<any>event).request.url.startsWith(self.location.origin)) {
    (<any>event).respondWith(
      caches.match((<any>event).request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch((<any>event).request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put((<any>event).request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});



// console.log('WORKER: executing.');

// var version = '{%VERSION%}::';

// var offlineFundamentals = ['', 'dist/'];

// self.addEventListener('install', function(event) {
//   console.log('WORKER: install event in progress.');
//   event.waitUntil(
//     caches
//       .open(version + 'fundamentals')
//       .then(function(cache) {
//         return cache.addAll(offlineFundamentals);
//       })
//       .then(function() {
//         console.log('WORKER: install completed');
//       })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   console.log('WORKER: fetch event in progress.');
//   if (event.request.method !== 'GET') {
//     console.log(
//       'WORKER: fetch event ignored.',
//       event.request.method,
//       event.request.url
//     );
//     return;
//   }
//   event.respondWith(
//     caches.match(event.request).then(function(cached) {
//       var networked = fetch(event.request)
//         .then(fetchedFromNetwork, unableToResolve)
//         .catch(unableToResolve);

//       console.log(
//         'WORKER: fetch event',
//         cached ? '(cached)' : '(network)',
//         event.request.url
//       );

//       return cached || networked;

//       function fetchedFromNetwork(response) {
//         var cacheCopy = response.clone();

//         console.log('WORKER: fetch response from network.', event.request.url);

//         caches
//           .open(version + 'pages')
//           .then(function add(cache) {
//             return cache.put(event.request, cacheCopy);
//           })
//           .then(function() {
//             console.log(
//               'WORKER: fetch response stored in cache.',
//               event.request.url
//             );
//           });

//         return response;
//       }

//       function unableToResolve() {
//         console.log('WORKER: fetch request failed in both cache and network.');

//         return new Response('<h1>Service Unavailable</h1>', {
//           status: 503,
//           statusText: 'Service Unavailable',
//           headers: new Headers({
//             'Content-Type': 'text/html'
//           })
//         });
//       }
//     })
//   );
// });

// self.addEventListener('activate', function(event) {
//   console.log('WORKER: activate event in progress.');

//   event.waitUntil(
//     caches
//       .keys()
//       .then(function(keys) {
//         return Promise.all(
//           keys
//             .filter(function(key) {
//               return !key.startsWith(version);
//             })
//             .map(function(key) {
//               return caches.delete(key);
//             })
//         );
//       })
//       .then(function() {
//         console.log('WORKER: activate completed.');
//       })
//   );
// });
