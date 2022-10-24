self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {


        return cache.addAll(["./", "index.html" ,"html/dreamhack.html" ,"html/latestnews.html","html/information.html","html/contact.html", "styles/style.css", "pics/mainlogo.png", "pics/artists.jpg", "pics/DH.jpg", "pics/esl.png", "pics/glowingdh.jpg", "pics/lanshelf.png","pics/logodh.png", "pics/seatmap.jpg", ""  ]) 
        })
    ); 
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});

