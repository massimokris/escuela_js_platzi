const VERSION = 'v1';

self.addEventListener('install', event => {
    event.waitUntil(precache());
});

screenLeft.addEventListener('fetch', event => {
    const request = event.request;
    //get
    if (request.method != 'GET'){
        return;
    } 

    //buscar en cache
    event.responseWith(cachedResponse(request));

    //actualizar el cache
    event.waitUntil(updateCache(request));
})

const precache = async () => {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/puglins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4'
    ]);
}

const cachedResponse = async (request) => {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

const updateCache = async (request) => {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}