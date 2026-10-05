/* Service worker — Arabe KIU
   Pour publier une mise à jour : remplace index.html sur GitHub
   puis augmente le numéro de version ci-dessous (v3 → v4…). */
const PREFIX = 'arabe-kiu-';
const VERSION = PREFIX + 'v3';
const ASSETS = [
  './', './index.html', './fonts.css', './manifest.webmanifest',
  './apple-touch-icon.png', './icon-192.png', './icon-512.png',
  './icon-maskable-512.png', './favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith(PREFIX) && k !== VERSION).map(k => caches.delete(k))))   // ne touche pas aux caches des autres applis du même domaine
      .then(() => self.clients.claim())
  );
});

/* Page : réseau d'abord (pour recevoir les mises à jour), cache si hors ligne ou réseau lent.
   Autres fichiers : cache d'abord. */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      const cache = await caches.open(VERSION);
      const net = fetch(req).then(res => {
        if (res && res.ok) cache.put('./index.html', res.clone());
        return res;
      });
      const timeout = new Promise(r => setTimeout(r, 3500));
      try {
        const res = await Promise.race([net, timeout]);
        if (res) return res;
      } catch (err) { /* hors ligne */ }
      const cached = await cache.match('./index.html');
      return cached || net;
    })());
    return;
  }

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    }))
  );
});
