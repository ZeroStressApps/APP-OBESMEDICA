const CACHE_VERSION = "peso-v2";

self.addEventListener("install", () => {
  console.log("Instalando Service Worker:", CACHE_VERSION);
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Activando Service Worker:", CACHE_VERSION);

  event.waitUntil(
    self.clients.claim()
  );
});

self.addEventListener("fetch", () => {});
