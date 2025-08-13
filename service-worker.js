self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("yogurt-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./info.html",
        "./css/style.css",
        "./js/app.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});