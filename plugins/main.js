import Vue from 'vue';
Vue.config.productionTip = false;
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
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
}
