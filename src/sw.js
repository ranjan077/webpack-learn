const cacheVersion = 'v1';
((self) => {
  self.addEventListener('install', () => {
    console.log('Service worker installed...');
  });

  self.addEventListener('activate', (e) => {
    console.log('Service worker activated...');
    e.waitUntil(() => {
      caches.keys().then((keys) => Promise.all(keys.map(
        (key) => {
          if (key !== cacheVersion) {
            return caches.delete(key);
          }
          return null;
        },
      ))).then(() => self.skipWaiting());
    });
  });

  self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request).then(
      (response) => {
        const res = response.clone();
        caches.open(cacheVersion).then((cache) => {
          cache.put(e.request, res);
        });
        return response;
      },
    ).catch(() => caches.match(e.request)));
  });
// eslint-disable-next-line no-restricted-globals
})(self);
