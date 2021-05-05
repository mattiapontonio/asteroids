Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status)
    displayNotification()
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js')
    })
}

function displayNotification() {
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {
            fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`).then(
                (response) => {
                    if (response.status == 200) {
                        response.json().then(({ title, url, explanation, media_type }) => {
                            reg.showNotification(title, {
                                body: explanation,
                                icon: media_type == 'video' ? 'icon.png' : url,
                                vibrate: [200, 100, 200, 100, 200, 100, 200],
                                tag: 'apod',
                                data: {
                                    dateOfArrival: Date.now(),
                                    primaryKey: 1,
                                },
                                actions: [{
                                    action: 'explore',
                                    title: "Open",
                                    icon: media_type == 'video' ? 'icon.png' : url,
                                }, ],
                            })
                        })
                    }
                }
            )
        })
    }
}