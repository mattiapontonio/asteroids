import Vue from 'vue'

Vue.config.productionTip = false;
Vue.filter('formatted', function (date = new Date()) {
  if (!date) return ''
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  let year = date.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
});
Vue.filter('lun_dom_day', function (date = new Date()) {
  return date.getDay() == 0 ? date.getDay() - 1 : 6
});
Vue.filter('scale', function (v = new Number(), min = new Number(), max = new Number()) {
  return (v - min) / (max - min)
});
Vue.filter('min', function (values = new Array()) {
  return Math.min(...values);
});
Vue.filter('max', function (values = new Array()) {
  return Math.max(...values);
});
Vue.filter('DateTimeFormat', function (v = new Date()) {
  if(v instanceof Date) return new Intl.DateTimeFormat('it-IT').format(v);
});
if (process.client) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
}
