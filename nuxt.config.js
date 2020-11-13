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
        title: 'my website title',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'my website description'
            }
        ],
    },
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
    ]
}