'use strict';
const PREFIX = 'smokefree-samsung:' + self.registration.scope + ':';
const CACHE = PREFIX + 'gwangju-v1';
const ASSETS = ['./', './index.html', './app.js', './zones.json', './manifest.webmanifest', '../icons/icon-192.png', '../icons/icon-512.png'];
const URLS = new Set(ASSETS.map(path => new URL(path, self.registration.scope).href));
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith(PREFIX) && key !== CACHE).map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !URLS.has(event.request.url)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const response = await fetch(event.request);
      if (response.ok) await cache.put(event.request, response.clone());
      return response;
    } catch {
      return await cache.match(event.request) || new Response('Offline: resource unavailable', {status: 503});
    }
  })());
});

