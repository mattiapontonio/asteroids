import path from 'path'
import fs from 'fs'
module.exports = {
    plugins: ['~/plugins/main.js'],
    components: true,
    server: (()=> process.env.NODE_ENV !== 'production' ? {
        https: {
            key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
        }
    }:undefined)(),
    target: 'static',
    ssr: false,
    head: {
        title: 'asteroids',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
<<<<<<< HEAD
                content: "A Vue.js Progressive Web App with Server Side Rendering and hydratated by REST microservices uses data from The National Aeronautics and Space Administration's application programming interface."
=======
                content: 'A Vue.js Progressive Web App with Server Side Rendering and hydratated by REST microservices uses data from The National Aeronautics and Space Administration\'s application programming interface.'
>>>>>>> develop-3
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'manifest', href: '/manifest.webmanifest' }
        ]
    },
    loading: '~/components/Loading.vue',
    htmlAttrs: {
        lang: 'en'
    },
    cli: {
        badgeMessages: ['Hello World!'],
        bannerColor: 'yellow'
    },
    css: [
        '~/assets/css/main.css',
    ]
}