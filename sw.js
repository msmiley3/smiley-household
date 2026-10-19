/* Smiley Household service worker — network-first so the app is never stale;
   the cache is only an offline fallback. Supabase traffic is never touched.
   Install is fault-tolerant: the shell must cache; the rest are best-effort. */
var CACHE = 'smiley-v2';
self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){
    return c.addAll(['./', './index.html']).then(function(){
      return Promise.all(['./content.json', './manifest.json', './icon-192.png', './icon-512.png'].map(function(u){
        return fetch(u).then(function(r){ if(r.ok) return c.put(u, r); }).catch(function(){ });
      }));
    });
  }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){ if(k !== CACHE) return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e){
  var url = e.request.url;
  if(url.indexOf('supabase.co') >= 0 || e.request.method !== 'GET') return;
  if(e.request.mode === 'navigate' || url.indexOf('content.json') >= 0 || url.indexOf('index.html') >= 0){
    e.respondWith(fetch(e.request).then(function(r){
      var cp = r.clone();
      caches.open(CACHE).then(function(c){ c.put(e.request, cp); });
      return r;
    }).catch(function(){ return caches.match(e.request); }));
    return;
  }
  e.respondWith(caches.match(e.request).then(function(m){ return m || fetch(e.request); }));
});
