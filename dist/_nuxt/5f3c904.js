(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{209:function(t,e,r){"use strict";r.r(e);r(32);var n=r(6),_={data:function(){return{response:{}}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{date:t.query.date,apiKey:t.query.api_key});case 1:case"end":return e.stop()}}),e)})))()}},d=r(26),component=Object(d.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.response.ok?r("div",[r("asteroids-of-the-day",{attrs:{date:t.date,items:t.items}})],1):r("div",[r("div",[t._v(t._s(t.response.status))]),t._v(" "),r("div",[t._v(t._s(t.response.statusText))]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[r("label",{attrs:{for:"api_key"}},[t._v("api_key")]),t._v(" "),r("input",{attrs:{type:"text",id:"api_key",name:"api_key",value:"DEMO_KEY",required:""}}),t._v(" "),r("label",{attrs:{for:"start_date"}},[t._v("start_date")]),t._v(" "),r("input",{attrs:{id:"start_date",type:"date",name:"start_date",value:"2021-04-25",required:""}}),t._v(" "),r("label",{attrs:{for:"start_date"}},[t._v("start_date")]),t._v(" "),r("input",{attrs:{id:"end_date",type:"date",name:"end_date",value:"2021-04-25",required:""}}),t._v(" "),r("button",{attrs:{type:"submit",value:"Submit"}},[t._v("Submit")])])}],!1,null,null,null);e.default=component.exports}}]);