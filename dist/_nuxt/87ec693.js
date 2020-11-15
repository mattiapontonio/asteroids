(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{193:function(t,e,n){"use strict";n.r(e);n(149);var r={name:"bubble",props:{minD:{type:Number,default:function(){return 30}},maxD:{type:Number,default:function(){return 100}},d:{type:Number,default:function(){return 0}}},computed:{width:function(){return this.d*(this.maxD-this.minD)+this.minD},height:function(){return this.d*(this.maxD-this.minD)+this.minD}}},o=n(49),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bubble",style:{width:this.width+"px",height:this.height+"px"}},[e("div",{staticClass:"point"})])}),[],!1,null,null,null);e.default=component.exports},194:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(147).default)("49ed2f74",content,!0,{sourceMap:!1})},195:function(t,e,n){var content=n(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(147).default)("41ae6330",content,!0,{sourceMap:!1})},196:function(t,e,n){var content=n(244);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(147).default)("220507ca",content,!0,{sourceMap:!1})},206:function(t,e,n){"use strict";n.r(e);var r={name:"selector",components:{Radio:n(210).default},props:{date:{type:String,required:!0}},computed:{days:function(){for(var t=new Array,e=new Date(this.date),label=function(t){return["sun","mon","tue","wed","thur","fri","sat"][t.getDay()]},i=0;i<7;i++){var n=new Date;n.setDate(e.getDate()+(i-e.getDay())),t.push({date:e.getDate()==n.getDate()?e:n,label:label(n)})}return t}}},o=n(49),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","flex-wrap":"nowrap","max-width":"100%","overflow-x":"scroll"}},t._l(t.days,(function(e,i){return n("radio",{key:"radio-"+i,attrs:{id:"radio-"+i,date:e.date,label:e.label,checked:e.date==t.date}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Radio:n(210).default})},207:function(t,e,n){"use strict";n.r(e);var r={name:"min-max",components:{Bubble:n(193).default}},o=n(49),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("Diameter")]),this._v(" "),e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("bubble",{attrs:{d:0}}),this._v(" "),e("span",{staticStyle:{"margin-left":"16px"}},[this._v("Min km")])],1),this._v(" "),e("div",{staticStyle:{display:"flex","align-items":"center","margin-left":"110px"}},[e("bubble",{style:{position:"relative",transform:"none"},attrs:{d:1}}),this._v(" "),e("span",{staticStyle:{transform:"translateX(calc(16px - (100px/2)))"}},[this._v("Max km")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Bubble:n(193).default})},208:function(t,e,n){"use strict";n.r(e);n(31),n(32);var r=n(211),o=n(0),d={name:"scatter-plot",components:{Asteroid:r.default},computed:{maxX:function(){return o.a.filter("max")(this.asteroids.map((function(t){return t.velocity_kilometers_per_second})))},minX:function(){return o.a.filter("min")(this.asteroids.map((function(t){return t.velocity_kilometers_per_second})))},maxY:function(){return o.a.filter("max")(this.asteroids.map((function(t){return t.distance})))},minY:function(){return o.a.filter("min")(this.asteroids.map((function(t){return t.distance})))},items:function(){var t="velocity_kilometers_per_second",e="distance",n="diameter",r=o.a.filter("scale"),d=o.a.filter("min"),l=o.a.filter("max"),c=this.asteroids;return c.map((function(e,i,a){var n=a.map((function(e){return e[t]}));return e.x=r(e[t],d(n),l(n)),e})).map((function(t,i,a){var n=a.map((function(t){return t[e]}));return t.y=r(t[e],d(n),l(n)),t})).map((function(t,i,a){var e=a.map((function(t){return t[n]}));return t.d=r(t[n],d(e),l(e)),t}))}},props:{date:{type:String,required:!0},asteroids:{type:Array,required:!0},loading:{type:Boolean,default:function(){return!1}},errored:{type:Boolean,default:function(){return!1}}}},l=(n(236),n(49)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scatter-plot"},[t.errored?n("section",{staticClass:"errored"},[n("p",[t._v("We're sorry, we're not able to retrieve this information at the moment, please try back later")])]):t.loading?n("div",{staticClass:"loading",staticStyle:{position:"absolute",width:"100%",height:"100%"}}):n("section",{staticClass:"container"},[t._l(t.items,(function(t,i){return n("asteroid",{key:i,attrs:{data:Object.assign({},t),x:t.x,y:t.y,d:t.d}})})),t._v(" "),n("span",{staticClass:"max",attrs:{coordinate:"x"}},[t._v(t._s(t.maxX))]),t._v(" "),n("span",{staticClass:"min",attrs:{coordinate:"x"}},[t._v(t._s(t.minX))]),t._v(" "),n("span",{staticClass:"max",attrs:{coordinate:"y"}},[t._v(t._s(t.maxY))]),t._v(" "),n("span",{staticClass:"min",attrs:{coordinate:"y"}},[t._v(t._s(t.minY))])],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Asteroid:n(211).default})},209:function(t,e,n){"use strict";n.r(e);var r={name:"asteroids",components:{Rhombus:n(212).default},props:{asteroids:{type:Array,default:function(){return new Array}}}},o=n(49),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.asteroids,(function(e,i){return n("div",{key:i,staticStyle:{display:"flex","align-items":"center",margin:"32px 0px"}},[n("rhombus",{attrs:{value:e.scale}}),t._v(" "),n("table",[n("tbody",[n("tr",[n("td",[t._v("Name")]),t._v(" "),n("td",[t._v(t._s(e.name))])]),t._v(" "),n("tr",[n("td",[t._v("Diameter")]),t._v(" "),n("td",[t._v(t._s(e.estimated_diameter.kilometers.estimated_diameter_max))])]),t._v(" "),n("tr",[n("td",[t._v("Magnitude")]),t._v(" "),n("td",[t._v(t._s(e.absolute_magnitude_h))])])])])],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Rhombus:n(212).default})},210:function(t,e,n){"use strict";n.r(e);n(31),n(17),n(50),n(51),n(191);var r=n(0),o={name:"radio",props:{date:{type:Date,default:new Date},id:{type:String},checked:{type:Boolean}},computed:{label:function(){return this.date.toLocaleDateString(void 0,{weekday:"long"})}},methods:{onchangedate:function(){var t=new URL(window.location);t.searchParams.set("date",r.a.filter("formatted")(this.date)),window.history.pushState({},"",t)}},data:function(){return{count:0,selctedIndex:0}}},d=n(49),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{attrs:{checked:t.checked},on:{click:function(e){return t.onchangedate(t.date)}}},[t._v(t._s(t.label))])}),[],!1,null,null,null);e.default=component.exports},211:function(t,e,n){"use strict";n.r(e);n(17),n(50),n(51),n(191);var r=n(193),o=n(213),d={name:"asteroid",components:{Bubble:r.default,Tooltip:o.default},props:["id","x","y","d"],data:function(){return{show:!1,data:{}}},methods:{get:function(){var t=this;axios.get(this.url).then((function(e){return t.data=e.data}))}},computed:{url:function(){var t=new URL(window.location.origin);return t.pathname="neo/rest/v1/neo/".concat(this.id),t},top:function(){return 100-100*this.x+"%"},left:function(){return 100*this.y+"%"}},mounted:function(){this.get()}},l=n(49),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"asteroid",style:{top:t.top,left:t.left},on:{mouseover:function(e){t.show=!0},mouseleave:function(e){t.show=!1}}},[n("bubble",{staticStyle:{"{transform":"'translate(-50%, -50%)'}"},attrs:{data:t.data}}),t._v(" "),n("tooltip",{attrs:{show:t.show,data:t.data}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Bubble:n(193).default,Tooltip:n(213).default})},212:function(t,e,n){"use strict";n.r(e);n(149);var r={name:"rhombus",props:{value:{type:Number,default:function(){return new Number}}},computed:{boxShadow:function(){return"0 0 ".concat(16*(1-this.value),"px white")},dimension:function(){var t=Math.sqrt(Math.pow(80,2)/2);return{outer:"80px",inner:t+"px",innerScaled:this.value*t+"px"}}}},o=n(49),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center","flex-shrink":"0"},style:{width:this.dimension.outer,height:this.dimension.outer}},[e("div",{staticStyle:{border:"1px solid white",display:"flex","justify-content":"center","align-items":"center",transform:"rotate(-45deg)","box-sizing":"border-box","flex-shrink":"0"},style:{width:this.dimension.inner,height:this.dimension.inner,boxShadow:this.boxShadow}},[e("div",{staticStyle:{width:"0px",height:"0px","background-color":"white",display:"flex","justify-content":"center","align-items":"center"},style:{width:this.dimension.innerScaled,height:this.dimension.innerScaled}},[e("div",{staticStyle:{width:"4px",height:"4px","background-color":"black",margin:"auto",position:"absolute"}})])])])}),[],!1,null,null,null);e.default=component.exports},213:function(t,e,n){"use strict";n.r(e);var r={name:"tooltip",props:["show","data"]},o=n(49),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-fade"}},[t.show?n("div",{staticClass:"tooltip"},[n("table",[n("tbody",[n("tr",[n("td",[t._v("Name")]),t._v(" "),n("td",[t._v(t._s(t.data.name))])]),t._v(" "),n("tr",[n("td",[t._v("Diameter")]),t._v(" "),n("td",[t._v(t._s(t.data.diameter)+" km")])]),t._v(" "),n("tr",[n("td",[t._v("Magnitude")]),t._v(" "),n("td",[t._v(t._s(t.data.magnitude)+" h")])]),t._v(" "),n("tr",[n("td",[t._v("Distance")]),t._v(" "),n("td",[t._v(t._s(t.data.distance)+" au")])]),t._v(" "),n("tr",[n("td",[t._v("Velocity")]),t._v(" "),n("td",[t._v(t._s(t.data.velocity_kilometers_per_hour)+" km/h")])])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},233:function(t){t.exports=JSON.parse('{"a":"0.0.5"}')},234:function(t,e,n){"use strict";var r=n(194);n.n(r).a},235:function(t,e,n){(e=n(146)(!1)).push([t.i,'main{display:flex;width:auto;flex-wrap:nowrap}@media (max-width:800px){main{flex-direction:column}}body{background:#020024;background:linear-gradient(180deg,#0a1e1a,#19435e);color:#fff;font-family:"Montserrat",sans-serif;text-rendering:optimizeLegibility;font-size:12px;font-weight:400;min-height:100vh;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:left;margin-top:0;padding:1em}body,img{max-width:100%}button,input+label{border:1px solid #fff;background-color:transparent;padding:1em}button{color:#fff}button:active,button:hover,button[checked],input+label:hover{border-color:#2af598;color:#2af598}input:checked+label{border:1px solid #2af598;background-color:#2af598;color:#0a1e1a}.radio{border:1px solid #2af598;background:transparent;visibility:hidden;position:absolute}h2{text-decoration:none}.slide-fade-enter-active{transition:all .3s ease}.slide-fade-leave-active{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter,.slide-fade-leave-to{transform:translateX(10px);opacity:0}aside{flex-grow:0;flex-shrink:1;flex-basis:33.33333%}.bubble{border:1px solid #2af598;box-sizing:border-box;border-radius:50%;display:flex;align-content:center;align-items:center;justify-content:center;flex-shrink:0;box-shadow:inset 0 0 16px #19435e,0 0 16px #2af598;z-index:0}.bubble .point{width:4px;height:4px;background:#2af598;border-radius:50%}.tooltip{border:1px solid #fff;padding:1.5em;color:#fff;background-color:rgba(0,0,0,.5);line-height:1.5;white-space:nowrap;z-index:1;position:absolute}.scatter-plot{position:relative;min-height:400px;width:100%;background:repeating-linear-gradient(transparent,transparent 100px,#133443 0,#133443 101px);padding:50px;box-sizing:border-box;display:flex;justify-content:stretch;align-content:stretch;align-items:stretch;justify-items:stretch}.scatter-plot .container{position:relative;flex:1}td,th{padding:.25em;text-align:left}table{display:block}footer{background:#fff;color:#000}.errored{color:#fff;border:1px solid red;padding:1em;background:red}.max[coordinate=x]{position:absolute;left:0;top:0}.min[coordinate=x]{position:absolute;left:0;bottom:0}.max[coordinate=y]{position:absolute;right:0;bottom:0}.min[coordinate=y]{position:absolute;left:0;bottom:0;transform:translateY(10px)}',""]),t.exports=e},236:function(t,e,n){"use strict";var r=n(195);n.n(r).a},237:function(t,e,n){(e=n(146)(!1)).push([t.i,'.loading{background:rgba(10,30,26,.5);background-size:400% 400%;justify-self:stretch;align-self:stretch;flex-grow:1;left:0;top:0;min-height:128px;align-items:center;justify-content:center;display:flex}.loading:before{content:"Loading..."}',""]),t.exports=e},243:function(t,e,n){"use strict";var r=n(196);n.n(r).a},244:function(t,e,n){(e=n(146)(!1)).push([t.i,"aside{padding:0 16px;border-left:0 solid #fff}@media (max-width:800px){aside{border-left-width:0}}",""]),t.exports=e},245:function(t,e,n){"use strict";n.r(e);n(31),n(17),n(50),n(51),n(191);var r=n(0),o=(n(192),n(233)),d={name:"app",data:function(){return{asteroids_of_the_day:new Array,loading:!0,errored:!1}},mounted:function(){var t=this;window.onpopstate=function(e){t.$forceUpdate()}},props:{start_date:{type:Date,default:function(){var t=new Date;return t.setDate(t.getDate()-t.getDay()+1),t}},end_date:{type:Date,default:function(){var t=new Date,e=t.getDay()?t.getDay()-1:6;return t.setDate(t.getDate()+(6-e)),t}}},computed:{version:function(){return o.a},date:function(){return new URL(location).searchParams.get("date")||r.a.filter("formatted")(new Date)}}},l=(n(234),n(49)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",{staticClass:"app",attrs:{id:"app"}},[n("h1",[t._v("Asteroids")]),t._v(" "),n("main",[n("asteroids-of-the-day",{attrs:{date:t.date,start_date:t.date,end_date:t.date,asteroids:t.asteroids_of_the_day,loading:t.loading,errored:t.errored}}),t._v(" "),n("aside",[n("brightest",{attrs:{start_date:t.start_date,end_date:t.end_date}}),t._v(" "),n("apod")],1)],1),t._v(" "),n("footer",[n("table",[n("tbody",[t._m(0),t._v(" "),n("tr",[n("td",[t._v("Version")]),t._v(" "),n("td",[t._v(t._s(t.version))])]),t._v(" "),t._m(1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("GitHub")]),this._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/mattiapontonio/asteroids"}},[this._v("https://github.com/mattiapontonio/asteroids")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("div",[this._v("Icons made by "),e("a",{attrs:{href:"https://www.flaticon.com/authors/good-ware",title:"Good Ware"}},[this._v("Good Ware")]),this._v(" from "),e("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[this._v("www.flaticon.com")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AsteroidsOfTheDay:n(246).default,Brightest:n(247).default,Apod:n(248).default})},246:function(t,e,n){"use strict";n.r(e);n(35),n(32),n(36),n(17),n(50),n(37),n(51),n(191);var r=n(206),o=n(207),d=n(208),l=n(192),c=n.n(l),f={components:{Selector:r.default,MinMax:o.default,ScatterPlot:d.default},name:"asteroids-of-the-day",computed:{minD:function(){return console.log(this.asteroids),Math.min(this.asteroids.map((function(t){return t.diameter})))},maxD:function(){return console.log(this.asteroids),Math.max(this.asteroids.map((function(t){return t.diameter})))}},props:{date:{type:String,required:!0},start_date:{type:String,required:!0},end_date:{type:String,required:!0},asteroids:{type:Array,required:!0,default:function(){return new Array}},loading:{type:Boolean},errored:{type:Boolean}},methods:{get:function(){var t=this,e=new URL(window.location.origin);e.pathname="neo/rest/v1/feed",e.searchParams.set("start_date",this.start_date),e.searchParams.set("end_date",this.end_date),this.loading=!0,this.errored=!1,c.a.get(e).then((function(e){t.asteroids=e.data.near_earth_objects[t.date],t.asteroids.forEach((function(t){var e=new URL(window.location.origin);e.pathname="neo/rest/v1/neo/".concat(t.id),c.a.get(e).then((function(e){Object.assign(t,{id:e.data.id,name:e.data.name,diameter:e.data.estimated_diameter.kilometers.estimated_diameter_max,magnitude:e.data.absolute_magnitude_h,velocity_kilometers_per_hour:e.data.close_approach_data[0].relative_velocity.kilometers_per_hour,velocity_kilometers_per_second:e.data.close_approach_data[0].relative_velocity.kilometers_per_second,distance:e.data.close_approach_data[0].miss_distance.astronomical})}))}))})).catch((function(e){return t.errored=!0})).finally((function(){return t.loading=!1}))}},mounted:function(){this.get()}},m=n(49),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","flex-direction":"column","flex-grow":"1"}},[n("h2",[t._v("Asteroids of the day")]),t._v(" "),n("h2",[t._v(t._s(this.asteroids.length))]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[n("selector",{attrs:{date:t.date,selected_index:t._f("lun_dom_day")(t.date)}}),t._v(" "),n("min-max")],1),t._v(" "),n("scatter-plot",{attrs:{date:t.date,asteroids:t.asteroids,loading:t.loading,errored:t.errored,minD:t.minD,maxD:t.maxD,minX:t.minX,maxX:t.maxX,minY:t.minY,maxY:t.maxY}}),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("tbody",[n("tr",[n("td",[t._v("⬆")]),t._v(" "),n("td",[t._v("Distance")]),t._v(" "),n("td",[t._v("(au)")])]),t._v(" "),n("tr",[n("td",[t._v("➡")]),t._v(" "),n("td",[t._v("Velocity")]),t._v(" "),n("td",[t._v("(km/s)")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Selector:n(206).default,MinMax:n(207).default,ScatterPlot:n(208).default})},247:function(t,e,n){"use strict";n.r(e);n(31),n(238),n(32),n(57),n(240),n(17),n(241),n(50),n(51),n(191);var r=n(0),o=n(192),d=n.n(o),l=n(209),c=new Date,f={name:"brightest",components:{Asteroids:l.default},props:{start:{type:Date,default:function(){return c}},end:{type:Date,default:function(){return c}},date:{type:Date,default:function(){return c}}},data:function(){return{data:new Array,loading:new Boolean,errored:new Boolean}},computed:{items:function(){return Object.values(this.data).flat(1).sort((function(a,b){return a.absolute_magnitude_h-b.absolute_magnitude_h})).slice(0,5).reverse().map((function(t,i,a){var e=a.map((function(t){return t.absolute_magnitude_h})),n=r.a.filter("scale"),o=r.a.filter("min"),d=r.a.filter("max");return t.scale=n(t.absolute_magnitude_h,o(e),d(e)),t}))}},methods:{get:function(){var t=this,e=r.a.filter("formatted"),n=e(this.start),o=e(this.end),l=e(this.date),c=new URL(window.location.origin);console.log(l,n,o),console.assert(this.date>=this.start),console.assert(this.date<=this.end),c.pathname="neo/rest/v1/feed",c.searchParams.set("start",n),c.searchParams.set("end",o),this.loading=!0,this.errored=!1,d.a.get(c).then((function(e){t.data=e.data.near_earth_objects,t.loading=!1})).catch((function(e){console.error(e),t.errored=!0})).finally((function(){return t.loading=!1}))}},mounted:function(){this.get()}},m=(n(243),n(49)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h2",[t._v("Brightest of the week")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t.errored?n("section",[n("p",[t._v("We're sorry, we're not able to retrieve this information at the moment, please try back later")])]):n("section",[t.loading?n("div",{staticClass:"loading"}):n("asteroids",{attrs:{asteroids:t.items}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Magnitude "),e("span",[this._v("(h)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("tbody",[n("tr",[n("td",[n("div",{staticStyle:{width:"10px",height:"10px","box-sizing":"border-box",transform:"rotate(45deg)","background-color":"transparent",border:"1px solid white"}})]),t._v(" "),n("td",[t._v("Filled area")]),t._v(" "),n("td",[t._v("magnitude")])]),t._v(" "),n("tr",[n("td",[n("div",{staticStyle:{width:"10px",height:"10px","box-sizing":"border-box",transform:"rotate(45deg)","background-color":"white",border:"1px solid white"}})]),t._v(" "),n("td",[t._v("Empty area")]),t._v(" "),n("td",[t._v("brightness")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Asteroids:n(209).default})},248:function(t,e,n){"use strict";n.r(e);n(17),n(38);var r=n(6),o=n(192),d=n.n(o),l={name:"apod",data:function(){return{date:void 0,explanation:void 0,hdurl:void 0,media_type:void 0,service_version:void 0,title:void 0,url:void 0,loading:!1,msg:""}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.errored=!1,e.next=4,d.a.get("/planetary/apod").then((function(e){var data=e.data;Object.assign(t,data)})).catch((function(e){console.error(e),t.msg=e.response.data.msg,t.errored=!0})).finally((function(){return t.loading=!1}));case 4:case"end":return e.stop()}}),e)})))()}},c=n(49),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h2",[t._v("Astronomy Picture of the Day")]),t._v(" "),t.errored?n("div",{staticClass:"errored"},[t._v(t._s(t.msg))]):n("div",[t.loading?n("div",{staticClass:"loading"}):n("div",[n("p",[t._v(t._s(t._f("DateTimeFormat")(t.date)))]),t._v(" "),n("picture",[n("source",{attrs:{media:"(min-width:1680px)",srcset:t.hdurl}}),t._v(" "),n("source",{attrs:{media:"(min-width:465px)",srcset:t.url}}),t._v(" "),n("img",{attrs:{loading:"lazy",src:t.url,alt:t.title,title:t.title}}),t._v(" "),n("figcaption",[t._v(t._s(t.explanation))])])])])])}),[],!1,null,null,null);e.default=component.exports},249:function(t,e,n){"use strict";n.r(e);var r=n(49),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("app")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{App:n(245).default})}}]);