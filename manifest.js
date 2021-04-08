'use strict';
module.exports = {
    "short_name": "Asteroids",
    "name": "Asteroids",
    "description": "Asteroids",
    "icons": [
        {
            "src": "/asteroid.png",
            "type": "image/png",
            "sizes": "512x512"
        }
    ],
    "start_url": "/",
    "background_color": "#3367D6",
    "display": "standalone",
    "scope": "/",
    "theme_color": "#3367D6",
    "shortcuts": [
        {
            name: 'Asteroids of the day',
            short_name: 'Asteroids of the day',
            description: 'Asteroids of the day',
            url: "/asteroids-of-the-day?source=pwa",
            icons: [
                { 
                    "src": "/images/icon.png", 
                    "sizes": "192x192" 
                }
            ]
        },
        {
            name: 'Astronomy picture of the day',
            short_name: 'Astronomy picture of the day',
            description: 'Astronomy picture of the day',
            url: "/astronomy-picture-of-the-day?source=pwa",
            icons: [
                { 
                    "src": "/images/icon.png", 
                    "sizes": "192x192" 
                }
            ]
        },
        {
            name: 'Brightest of the week',
            short_name: 'Brightest of the week',
            description: 'Brightest of the week',
            url: "/asteroids-of-the-day?source=pwa",
            icons: [
                { 
                    "src": "/images/icon.png", 
                    "sizes": "192x192" 
                }
            ]
        }
    ]
}