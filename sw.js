// Service Worker for NCK Calculator PWA
const CACHE_NAME = "nck-calculator-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://cdn.tailwindcss.com",
];

// Install event - cache resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch((err) => {
        // If Tailwind CDN fails, that's okay - it's external
        console.log("Cache addAll completed (some may have failed)");
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      return (
        response ||
        fetch(event.request).catch(() => {
          // If network fails and no cache, return offline page if available
          if (event.request.destination === "document") {
            return caches.match("./index.html");
          }
        })
      );
    })
  );
});
