import path from 'path'
import fs from 'fs'
module.exports = {
    plugins: ['~/plugins/main.js'],
    components: true,
    server: {
        https: {
            key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
        }
    }
}