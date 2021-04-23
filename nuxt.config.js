import path from 'path'
import fs from 'fs'
module.exports = {
  plugins: ['~/plugins/main.js'],
  components: true,
  server: (() =>
    process.env.NODE_ENV !== 'production'
      ? {
          https: {
            key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
          },
        }
      : undefined)(),
  target: 'static',
  ssr: false,
  cli: {
    badgeMessages: ['Hello World!'],
    bannerColor: 'yellow',
  },
  css: ['~/assets/css/main.css'],
  loading: false
}
