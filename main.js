Notification.requestPermission(function (status) {
  console.log('Notification permission status:', status);
  displayNotification()
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js')
  })
}
function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function (reg) {
      reg.showNotification('Hello world!', {
        body: 'Here is a notification body!',
        icon: 'icon.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1,
        },
        actions: [
          {
            action: 'explore',
            title: 'Explore this new world',
            icon: 'icon.png',
          },
          { action: 'close', title: 'Close notification', icon: 'icon.png' },
        ],
      })
    })
  }
}
