(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{193:function(t,e,r){"use strict";r.r(e);var n={name:"min-max",components:{Bubble:r(196).default}},o=r(26),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("Diameter")]),this._v(" "),e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("bubble",{attrs:{d:0}}),this._v(" "),e("span",{staticStyle:{"margin-left":"16px"}},[this._v("Min km")])],1),this._v(" "),e("div",{staticStyle:{display:"flex","align-items":"center","margin-left":"110px"}},[e("bubble",{style:{position:"relative",transform:"none"},attrs:{d:1}}),this._v(" "),e("span",{staticStyle:{transform:"translateX(calc(16px - (100px/2)))"}},[this._v("Max km")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Bubble:r(196).default})},194:function(t,e,r){"use strict";r.r(e);var n={name:"scatter-plot",props:{items:{type:Array}}},o=r(26),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"scatter-plot",attrs:{viewBox:"0 0 200 100",preserveAspectRatio:"xMidYMid meet"}},[r("g",[r("line",{attrs:{x1:"0",y1:"0",x2:"0",y2:"100%","stroke-width":".5"}}),t._v(" "),r("line",{attrs:{x1:"0",y1:"0",x2:"100%",y2:"0","stroke-width":".5"}}),t._v(" "),t._l(10,(function(i){return r("line",{key:i,attrs:{x1:10*i+"%",y1:"0",x2:10*i+"%",y2:"100%"}})})),t._v(" "),t._l(10,(function(i){return r("line",{key:i,attrs:{x1:"0",y1:10*i+"%",x2:"100%",y2:10*i+"%"}})}))],2),t._v(" "),t._l(t.items,(function(e,i){return r("g",{key:i},[r("circle",{staticClass:"bubble",attrs:{id:"circle"+i,cx:(g=t.items.map((function(t){return t.close_approach_data[0].relative_velocity.kilometers_per_second})),100*(g[i]-Math.min.apply(Math,g))/(Math.max.apply(Math,g)-Math.min.apply(Math,g))+"%"),cy:function(){var g=t.items.map((function(t){return t.close_approach_data[0].miss_distance.kilometers}));return 100*(g[i]-Math.min.apply(Math,g))/(Math.max.apply(Math,g)-Math.min.apply(Math,g))+"%"}(),r:10}}),t._v(" "),r("use",{attrs:{href:"#circle"+i,r:"1"}})]);var g}))],2)}),[],!1,null,null,null);e.default=component.exports},196:function(t,e,r){"use strict";r.r(e);var n={name:"bubble"},o=r(26),component=Object(o.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"bubble"},[e("div",{staticClass:"point"})])}],!1,null,null,null);e.default=component.exports},203:function(t,e,r){"use strict";r.r(e);r(32);var n=r(193),o=r(194),l={components:{MinMax:n.default,ScatterPlot:o.default},name:"asteroids-of-the-day",computed:{minD:function(){return Math.min(this.items.map((function(t){return t.diameter})))},maxD:function(){return Math.max(this.items.map((function(t){return t.diameter})))}},props:{date:{type:Date,required:!0},items:{type:Array,default:function(){return new Array}},onchangedate:{type:Function},loading:{type:Boolean},errored:{type:Boolean},error:{type:Boolean}}},c=r(26),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","flex-direction":"column","flex-grow":"1"}},[e("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[e("min-max")],1),this._v(" "),e("scatter-plot",{attrs:{date:this.date,items:this.items,errored:this.errored,error:this.error}}),this._v(" "),this._m(0)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("tbody",[r("tr",[r("td",[t._v("⬆")]),t._v(" "),r("td",[t._v("Distance")]),t._v(" "),r("td",[t._v("(au)")])]),t._v(" "),r("tr",[r("td",[t._v("➡")]),t._v(" "),r("td",[t._v("Velocity")]),t._v(" "),r("td",[t._v("(km/s)")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MinMax:r(193).default,ScatterPlot:r(194).default})},212:function(t,e,r){"use strict";r.r(e);r(32),r(17),r(34),r(50),r(51),r(197),r(33);var n=r(6),o={data:function(){return{response:{}}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{date:t.query.date,apiKey:t.query.api_key});case 1:case"end":return e.stop()}}),e)})))()},fetch:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:(n=new URL(window.location)).pathname="neo/rest/v1/feed",n.searchParams.set("date",t.query.date),n.searchParams.set("api_key",t.query.api_key),fetch(n).then((function(t){return e.response=t,t.json()})).then((function(body){console.dir(body);var t=body.near_earth_objects;body.near_earth_objects&&(console.dir(body.near_earth_objects),body.near_earth_objects[e.date]&&(console.dir(body.near_earth_objects[e.date]),Array.isArray(body.near_earth_objects[e.date])&&(console.dir(body.near_earth_objects[e.date]),e.items=t[e.date].map((function(t,i,a){return{id:t.id,x:t.close_approach_data[0].relative_velocity.kilometers_per_second,y:t.close_approach_data[0].miss_distance.kilometers,d:t.estimated_diameter.kilometers.estimated_diameter_max}})).map((function(t,i,a){return{id:t.id,style:{left:100*scale(t.x,min(a.map((function(t){return t.x}))),max(a.map((function(t){return t.x}))))+"%",bottom:100*scale(t.y,min(a.map((function(t){return t.y}))),max(a.map((function(t){return t.y}))))+"%",width:100*scale(t.d,min(a.map((function(t){return t.d}))),max(a.map((function(t){return t.d}))))+"px",height:100*scale(t.d,min(a.map((function(t){return t.d}))),max(a.map((function(t){return t.d}))))+"px"}}})),e.rows=[{coordinate:"x",value:"Relative velocity",min:Math.min.apply(null,t[e.date].map((function(t){return t.close_approach_data[0].relative_velocity.kilometers_per_second}))),max:Math.max.apply(null,t[e.date].map((function(t){return t.close_approach_data[0].relative_velocity.kilometers_per_second}))),uom:"km/s",dir:"➡"},{coordinate:"y",value:"Miss distance",min:Math.min.apply(null,t[e.date].map((function(t){return t.close_approach_data[0].miss_distance.kilometers}))),max:Math.max.apply(null,t[e.date].map((function(t){return t.close_approach_data[0].miss_distance.kilometers}))),uom:"au",dir:"⬆"},{coordinate:"d",min:Math.min.apply(null,t[e.date].map((function(t){return t.estimated_diameter.kilometers.estimated_diameter_max}))),max:Math.max.apply(null,t[e.date].map((function(t){return t.estimated_diameter.kilometers.estimated_diameter_max})))}])))})).catch((function(t){console.dir(t),e.errored=!0,e.error=t})).finally((function(){return e.loading=!1}));case 5:case"end":return r.stop()}}),r)})))()}))},l=r(26),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.response.ok?r("div",[r("asteroids-of-the-day",{attrs:{date:t.date,items:t.items}})],1):r("div",[r("div",[t._v(t._s(t.response.status))]),t._v(" "),r("div",[t._v(t._s(t.response.statusText))]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[r("label",{attrs:{for:"api_key"}},[t._v("api_key")]),t._v(" "),r("input",{attrs:{type:"text",id:"api_key",name:"api_key",value:"DEMO_KEY",required:""}}),t._v(" "),r("label",{attrs:{for:"start_date"}},[t._v("start_date")]),t._v(" "),r("input",{attrs:{id:"start_date",type:"date",name:"start_date",value:"2021-04-25",required:""}}),t._v(" "),r("label",{attrs:{for:"start_date"}},[t._v("start_date")]),t._v(" "),r("input",{attrs:{id:"end_date",type:"date",name:"end_date",value:"2021-04-25",required:""}}),t._v(" "),r("button",{attrs:{type:"submit",value:"Submit"}},[t._v("Submit")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AsteroidsOfTheDay:r(203).default})}}]);