self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('cache').then(function (cache) {
      return cache.addAll(['/'])
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})

self.addEventListener('notificationclose', function (e) {
  var notification = e.notification
  var primaryKey = notification.data.primaryKey
  console.log('Closed notification: ' + primaryKey)
})
self.addEventListener('notificationclick', function (e) {
  if (e.action === 'close') {
    e.notification.close()
  } else {
    clients.openWindow('http://www.example.com')
    e.notification.close()
  }
})
