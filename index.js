const subscriptions = new Map();
const webpush = require('web-push');
const vapidKeys = webpush.generateVAPIDKeys();
webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);
new(require('cron').CronJob)('*/10 * * * * *', function() {
    subscriptions.forEach(function(e) {
        console.log(e);
        require('web-push').sendNotification(e, 'Notification')
    })
}, null, true, 'America/Los_Angeles').start();
require('http')
    .createServer(function(request, response) {
        switch (request.url) {
            case '/subscriptions':
                switch (request.method) {
                    case 'POST':
                        let data = ''
                        request.on('data', chunk => data += chunk)
                        request.on('end', () => {
                            try {
                                const subscription = JSON.parse(data);
                                subscriptions.set(subscription.keys.auth, subscription)
                            } catch (error) {
                                console.error()
                            }
                            console.log(data)
                            console.log(subscriptions)
                        })
                        break
                    case 'DELETE':
                        let data = ''
                        request.on('data', chunk => data += chunk)
                        request.on('end', () => {
                            try {
                                const subscription = JSON.parse(data);
                                subscriptions.delete(subscription.keys.auth)
                            } catch (error) {
                                console.error()
                            }
                            console.log(data)
                            console.log(subscriptions)
                        })
                        break
                    default:
                        break
                }
                response.end()
                break
            case '/publicKey':
                response.write(vapidKeys.publicKey)
                response.end();
                break
            default:
                const static = require('node-static')
                new static.Server(__dirname, {
                    cache: 0,
                    headers: { 'Cache-Control': 'no-cache' },
                    gzip: true,
                }).serve(request, response)
                break
        }
    })
    .listen(process.env.PORT || 8080)