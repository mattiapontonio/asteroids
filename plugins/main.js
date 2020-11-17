import Vue from 'vue';
import formatDate from '../formatDate.js';
Vue.config.productionTip = false;
Vue.filter('formatted', function (date = new Date()) {
  return formatDate(date);
});
Vue.filter('lun_dom_day', function (d) {
  const date = new Date(d);
  return date.getDay() == 0 ? date.getDay() - 1 : 6
});
Vue.filter('DateTimeFormat', function (datetime = new Date().toISOString()) {
  const options = { weekday: 'long' };
  const date = new Date(datetime);
  return new Intl.DateTimeFormat('default', options).format(date);
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
