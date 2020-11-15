'use strict';
const fs = require('fs');
const formatDate = require('./formatDate.js');

const shortcuts = [
    0,1,2,3,4,5,6
].map(function(e,i){
    const date = new Date();
    const today = new Date();
    const day = today.getDay();
    const date_ = today.getDate() - (day - i)
    date.setDate(date_);
    const name = date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const short_name = date.toLocaleDateString(undefined, { weekday: 'long' });
    const description = "Asteroids of "+name;
    const url = "/?source=pwa&date="+formatDate(date);
    const icon = { 
        "src": "/images/icon.png", 
        "sizes": "192x192" 
    };
    const icons = [
        icon
    ]
    return {
        name,
        short_name,
        description,
        url,
        icons
    }
});
const manifest = {
    "short_name": "Weather",
    "name": "Weather: Do I need an umbrella?",
    "description": "Weather forecast information",
    "icons": [
        {
            "src": "/asteroid.png",
            "type": "image/png",
            "sizes": "512x512"
        }
    ],
    "start_url": "/?source=pwa",
    "background_color": "#3367D6",
    "display": "standalone",
    "scope": "/",
    "theme_color": "#3367D6",
    shortcuts
};
fs.writeFileSync('dist/manifest.webmanifest', JSON.stringify(manifest));
console.table(manifest);
console.table(shortcuts);