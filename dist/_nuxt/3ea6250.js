(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){"use strict";n(31),n(149);var r=n(97),o=n(0),c=n(144),l=n.n(c);o.a.config.productionTip=!1,o.a.filter("formatted",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return l()(e)})),o.a.filter("lun_dom_day",(function(e){var t=new Date(e);return 0==t.getDay()?t.getDay()-1:6})),o.a.filter("DateTimeFormat",(function(e){var t=new Date(e);return new Intl.DateTimeFormat("it-IT").format(t)})),o.a.filter("scale",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Number,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Number,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Number;return(e-t)/(n-t)})),o.a.filter("min",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Array;return Math.min.apply(Math,Object(r.a)(e))})),o.a.filter("max",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Array;return Math.max.apply(Math,Object(r.a)(e))})),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}))},144:function(e,t,n){n(136),e.exports=function(e){var t=new Date(e),n=""+(t.getMonth()+1),r=""+t.getDate(),o=t.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[o,n,r].join("-")}},156:function(e,t,n){n(157),e.exports=n(158)}},[[156,4,1,5]]]);