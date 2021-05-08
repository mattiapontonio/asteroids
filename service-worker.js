self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open("cache").then(function(cache) {
            return cache.addAll(["/"]);
        })
    );
});
self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
self.addEventListener("notificationclose", console.log);
self.addEventListener("notificationclick", function(e) {
    clients.openWindow("/apod.html?api_key=DEMO_KEY");
});
self.addEventListener(
    "push",
    function(e) {
        if (Notification.permission == "granted") {
            fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`).then(
                (response) => {
                    if (response.status == 200) {
                        response.json().then(({ title, url, explanation, media_type }) => {
                            self.registration.showNotification(title, {
                                body: explanation,
                                icon: media_type == "video" ? "icon.png" : url,
                                vibrate: [200, 100, 200, 100, 200, 100, 200],
                                tag: "apod",
                                data: {
                                    dateOfArrival: Date.now(),
                                    primaryKey: 1,
                                },
                                actions: [{
                                    action: "explore",
                                    title: "Open",
                                    icon: media_type == "video" ? "icon.png" : url,
                                }, ],
                            });
                        });
                    }
                }
            );
        }
    },
    false
);