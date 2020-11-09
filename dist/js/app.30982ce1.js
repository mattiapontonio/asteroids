(function(t){function e(e){for(var n,o,s=e[0],d=e[1],l=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var d=a[s];0!==r[d]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=d;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},1731:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("4de4"),a("a15b"),a("a9e3");var n=a("2909"),r=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("body",{staticClass:"app",attrs:{id:"app"}},[a("h1",[t._v("Asteroids")]),a("main",[a("asteroids-of-the-day",{attrs:{date:t.date,start_date:t.start_date,end_date:t.end_date,asteroids:t.asteroids_of_the_day,onchangedate:t.onchangedate,loading:t.loading,errored:t.errored}}),a("aside",[a("brightest",{attrs:{start_date:t.start_date,end_date:t.end_date}}),a("apod")],1)],1),a("footer",[a("table",[a("tbody",[t._m(0),a("tr",[a("td",[t._v("Version")]),a("td",[t._v(t._s(t.version))])])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("GitHub")]),a("td",[a("a",{attrs:{href:"https://github.com/mattiapontonio/asteroids"}},[t._v("https://github.com/mattiapontonio/asteroids")])])])}],s=(a("d81d"),a("b0c0"),a("d3b7"),a("07ac"),a("3ca3"),a("ddb0"),a("2b3d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"flex","flex-direction":"column","flex-grow":"1"}},[a("h2",[t._v("Asteroids of the day")]),a("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[a("div",{staticStyle:{"flex-grow":"1"}},[a("p",[t._v("Select one day to update the chart:")]),a("selector",{attrs:{date:t.date,onchangedate:t.onchangedate,selected_index:t._f("lun_dom_day")(t.date)}})],1),a("min-max")],1),a("scatter-plot",{attrs:{date:t.date,asteroids:t.asteroids,loading:t.loading,errored:t.errored}}),t._m(0)],1)}),d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("tbody",[a("tr",[a("td",[t._v("⬆")]),a("td",[t._v("Distance")]),a("td",[t._v("(au)")])]),a("tr",[a("td",[t._v("➡")]),a("td",[t._v("Velocity")]),a("td",[t._v("(km/s)")])])])])}],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticStyle:{display:"flex"}},t._l(t.days,(function(e,n){return a("radio",{key:"radio-"+n,attrs:{id:"radio-"+n,date:e.date,label:e.label,onchangedate:t.onchangedate,checked:e.date==t.date}})})),1)},c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input",{staticClass:"radio",attrs:{type:"radio",id:t.id,name:"date"},domProps:{checked:t.checked,value:t._f("formatted")(t.date)},on:{change:function(e){return t.onchangedate(t.date)}}}),a("label",{staticStyle:{width:"32px",height:"32px","border-radius":"50%",display:"flex","align-items":"center","justify-content":"center","line-height":"1","vertical-align":"middle","margin-right":"8px"},attrs:{for:t.id}},[t._v(t._s(t.label))])])},f=[],h={name:"radio",props:{date:{type:Date,default:new Date},id:{type:String},label:{type:String},checked:{type:Boolean},onchangedate:{type:Function}},data:function(){return{count:0,selctedIndex:0}}},p=h,m=a("2877"),_=Object(m["a"])(p,u,f,!1,null,null,null),v=_.exports,g={name:"selector",components:{Radio:v},props:{date:{type:Date,default:new Date},onchangedate:{type:Function}},computed:{days:function(){for(var t=new Array,e=function(t){return["sun","mon","tue","wed","thur","fri","sat"][t.getDay()]},a=this.date,n=0;n<7;n++){var r=new Date;r.setDate(a.getDate()+(n-a.getDay())),t.push({date:a.getDate()==r.getDate()?a:r,label:e(r)})}return t}}},y=g,b=Object(m["a"])(y,l,c,!1,null,null,null),x=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Diameter")]),a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("bubble",{attrs:{d:0}}),a("span",{staticStyle:{"margin-left":"16px"}},[t._v("Min km")])],1),a("div",{staticStyle:{display:"flex","align-items":"center","margin-left":"110px"}},[a("bubble",{style:{position:"relative",transform:"none"},attrs:{d:1}}),a("span",{staticStyle:{transform:"translateX(calc(16px - (100px/2)))"}},[t._v("Max km")])],1)])])},D=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bubble",style:{width:t.width+"px",height:t.height+"px"}},[a("div",{staticClass:"point"})])},S=[],j={name:"bubble",props:{minD:{type:Number,default:function(){return 30}},maxD:{type:Number,default:function(){return 100}},d:{type:Number,default:function(){return 0}}},computed:{width:function(){return this.d*(this.maxD-this.minD)+this.minD},height:function(){return this.d*(this.maxD-this.minD)+this.minD}}},O=j,M=Object(m["a"])(O,k,S,!1,null,null,null),A=M.exports,E={name:"min-max",components:{Bubble:A}},$=E,P=Object(m["a"])($,w,D,!1,null,null,null),B=P.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scatter-plot"},[t.errored?a("section",[a("p",[t._v("We're sorry, we're not able to retrieve this information at the moment, please try back later")])]):t.loading?a("div",{staticClass:"loading",staticStyle:{position:"absolute",width:"100%",height:"100%"}}):a("section",{staticClass:"container"},t._l(t.items,(function(t,e){return a("asteroid",{key:e,staticStyle:{position:"absolute"},attrs:{data:Object.assign({},t),x:t.x,y:t.y,d:t.d}})})),1)])},C=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{top:100-100*t.x+"%",left:100*t.y+"%",position:"absolute"},on:{mouseover:function(e){t.show=!0},mouseleave:function(e){t.show=!1}}},[a("bubble",{style:{transform:"translate(-50%, -50%)",position:"absolute"},attrs:{d:t.d}}),a("tooltip",{attrs:{show:t.show,data:t.data}})],1)},F=[],W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide-fade"}},[t.show?a("div",{staticClass:"tooltip"},[a("table",[a("tbody",[a("tr",[a("td",[t._v("Name")]),a("td",[t._v(t._s(t.data.name))])]),a("tr",[a("td",[t._v("Diameter")]),a("td",[t._v(t._s(t.data.diameter)+" km")])]),a("tr",[a("td",[t._v("Magnitude")]),a("td",[t._v(t._s(t.data.magnitude)+" h")])]),a("tr",[a("td",[t._v("Distance")]),a("td",[t._v(t._s(t.data.distance)+" au")])]),a("tr",[a("td",[t._v("Velocity")]),a("td",[t._v(t._s(t.data.velocity_kilometers_per_hour)+" km/h")])])])])]):t._e()])},R=[],z={name:"tooltip",props:["show","data"]},L=z,I=Object(m["a"])(L,W,R,!1,null,null,null),J=I.exports,U={name:"asteroid",components:{Bubble:A,Tooltip:J},props:["data","x","y","d"],data:function(){return{show:!1}}},V=U,q=Object(m["a"])(V,T,F,!1,null,null,null),G=q.exports,H={name:"scatter-plot",components:{Asteroid:G},computed:{items:function(){var t="velocity_kilometers_per_second",e="distance",a="diameter",n=r["a"].filter("scale"),i=r["a"].filter("min"),o=r["a"].filter("max"),s=this.asteroids;return s.map((function(e,a,r){var s=r.map((function(e){return e[t]}));return e.x=n(e[t],i(s),o(s)),e})).map((function(t,a,r){var s=r.map((function(t){return t[e]}));return t.y=n(t[e],i(s),o(s)),t})).map((function(t,e,r){var s=r.map((function(t){return t[a]}));return t.d=n(t[a],i(s),o(s)),t}))}},props:{date:{type:Date,default:new Date},asteroids:{type:Array,default:function(){return new Array}},loading:{type:Boolean,default:function(){return!1}},errored:{type:Boolean,default:function(){return!1}}}},X=H,Y=(a("a046"),Object(m["a"])(X,N,C,!1,null,null,null)),K=Y.exports,Q={components:{Selector:x,MinMax:B,ScatterPlot:K},name:"asteroids-of-the-day",computed:{minD:function(){return console.log(this.asteroids),Math.min(this.asteroids.map((function(t){return t.diameter})))},maxD:function(){return console.log(this.asteroids),Math.max(this.asteroids.map((function(t){return t.diameter})))}},props:{date:{type:Date,required:!0},asteroids:{type:Array,default:function(){return new Array}},onchangedate:{type:Function},loading:{type:Boolean},errored:{type:Boolean}}},Z=Q,tt=Object(m["a"])(Z,s,d,!1,null,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("h2",[t._v("Brightest of the week")]),t._m(0),t._m(1),t.errored?a("section",[a("p",[t._v("We're sorry, we're not able to retrieve this information at the moment, please try back later")])]):a("section",[t.loading?a("div",{staticClass:"loading"}):a("asteroids",{attrs:{asteroids:t.items}})],1)])},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[t._v("Magnitude "),a("span",[t._v("(h)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("tbody",[a("tr",[a("td",[a("div",{staticStyle:{width:"10px",height:"10px","box-sizing":"border-box",transform:"rotate(45deg)","background-color":"transparent",border:"1px solid white"}})]),a("td",[t._v("Filled area")]),a("td",[t._v("magnitude")])]),a("tr",[a("td",[a("div",{staticStyle:{width:"10px",height:"10px","box-sizing":"border-box",transform:"rotate(45deg)","background-color":"white",border:"1px solid white"}})]),a("td",[t._v("Empty area")]),a("td",[t._v("brightness")])])])])}],rt=(a("0481"),a("fb6a"),a("4069"),a("bc3a")),it=a.n(rt),ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.asteroids,(function(e,n){return a("div",{key:n,staticStyle:{display:"flex","align-items":"center",margin:"32px 0px"}},[a("rhombus",{attrs:{value:e.scale}}),a("table",[a("tbody",[a("tr",[a("td",[t._v("Name")]),a("td",[t._v(t._s(e.name))])]),a("tr",[a("td",[t._v("Diameter")]),a("td",[t._v(t._s(e.estimated_diameter.kilometers.estimated_diameter_max))])]),a("tr",[a("td",[t._v("Magnitude")]),a("td",[t._v(t._s(e.absolute_magnitude_h))])])])])],1)})),0)},st=[],dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center","flex-shrink":"0"},style:{width:t.dimension.outer,height:t.dimension.outer}},[a("div",{staticStyle:{border:"1px solid white",display:"flex","justify-content":"center","align-items":"center",transform:"rotate(-45deg)","box-sizing":"border-box","flex-shrink":"0"},style:{width:t.dimension.inner,height:t.dimension.inner,boxShadow:t.boxShadow}},[a("div",{staticStyle:{width:"0px",height:"0px","background-color":"white",display:"flex","justify-content":"center","align-items":"center"},style:{width:t.dimension.innerScaled,height:t.dimension.innerScaled}},[a("div",{staticStyle:{width:"4px",height:"4px","background-color":"black",margin:"auto",position:"absolute"}})])])])},lt=[],ct={name:"rhombus",props:{value:{type:Number,default:function(){return new Number}}},computed:{boxShadow:function(){return"0 0 ".concat(16*(1-this.value),"px white")},dimension:function(){var t="px",e=80,a=e,n=Math.sqrt(Math.pow(a,2)/2);return{outer:a+t,inner:n+t,innerScaled:this.value*n+t}}}},ut=ct,ft=Object(m["a"])(ut,dt,lt,!1,null,null,null),ht=ft.exports,pt={name:"asteroids",components:{Rhombus:ht},props:{asteroids:{type:Array,default:function(){return new Array}}}},mt=pt,_t=Object(m["a"])(mt,ot,st,!1,null,null,null),vt=_t.exports,gt=new Date,yt={name:"brightest",components:{Asteroids:vt},props:{start:{type:Date,default:gt},end:{type:Date,default:gt},date:{type:Date,default:gt}},data:function(){return{data:new Array,loading:new Boolean,errored:new Boolean}},computed:{items:function(){return Object.values(this.data).flat(1).sort((function(t,e){return t.absolute_magnitude_h-e.absolute_magnitude_h})).slice(0,5).reverse().map((function(t,e,a){var n=a.map((function(t){return t.absolute_magnitude_h})),i=r["a"].filter("scale"),o=r["a"].filter("min"),s=r["a"].filter("max");return t.scale=i(t.absolute_magnitude_h,o(n),s(n)),t}))}},methods:{get:function(){var t=this,e=r["a"].filter("formatted"),a=e(this.start),n=e(this.end),i=e(this.date),o=new URL(window.location.origin);console.log(i,a,n),console.assert(this.date>=this.start),console.assert(this.date<=this.end),o.pathname="neo/rest/v1/feed",o.searchParams.set("start",a),o.searchParams.set("end",n),this.loading=!0,this.errored=!1,it.a.get(o).then((function(e){t.data=e.data.near_earth_objects,t.loading=!1})).catch((function(e){console.error(e),t.errored=!0})).finally((function(){return t.loading=!1}))}},mounted:function(){this.get()}},bt=yt,xt=(a("fa82"),Object(m["a"])(bt,at,nt,!1,null,null,null)),wt=xt.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("h2",[t._v("Astronomy Picture of the Day")]),t.loading?a("div",{staticClass:"loading"}):a("div",[a("p",[t._v(t._s(t._f("DateTimeFormat)")(t.date)))]),a("picture",[a("source",{attrs:{media:"(min-width:1680px)",srcset:t.hdurl}}),a("source",{attrs:{media:"(min-width:465px)",srcset:t.url}}),a("img",{attrs:{loading:"lazy",src:t.url,alt:t.title,title:t.title}}),a("figcaption",[t._v(t._s(t.explanation))])])])])},kt=[],St={name:"apod",data:function(){return{date:void 0,explanation:void 0,hdurl:void 0,media_type:void 0,service_version:void 0,title:void 0,url:void 0,loading:!1}},methods:{get:function(){var t=this;this.loading=!0,this.errored=!1,it.a.get("/planetary/apod").then((function(e){return Object.assign(t,e.data)})).catch((function(e){console.log(e),t.errored=!0})).finally((function(){return t.loading=!1}))}},mounted:function(){this.get()}},jt=St,Ot=Object(m["a"])(jt,Dt,kt,!1,null,null,null),Mt=Ot.exports,At=a("9224"),Et={name:"App",components:{Brightest:wt,AsteroidsOfTheDay:et,Apod:Mt},watch:{date:function(){this.get_asteroids_of_the_day()}},methods:{get_asteroids_of_the_day:function(){var t=this,e=r["a"].filter("formatted"),a=e(this.date),n=new URL(window.location.origin);n.pathname="neo/rest/v1/feed",n.searchParams.set("start_date",a),n.searchParams.set("end_date",a),this.loading=!0,this.errored=!1,it.a.get(n).then((function(e){return Promise.all(Object.values(e.data.near_earth_objects[a]).map((function(t){var e=new URL(window.location.origin);return e.pathname="neo/rest/v1/neo/".concat(t.id),it.a.get(e)}))).then((function(e){t.asteroids_of_the_day=e.map((function(t){return t.data})).map((function(t){return Object.assign({},{id:t.id,name:t.name,diameter:t.estimated_diameter.kilometers.estimated_diameter_max,magnitude:t.absolute_magnitude_h,velocity_kilometers_per_hour:t.close_approach_data[0].relative_velocity.kilometers_per_hour,velocity_kilometers_per_second:t.close_approach_data[0].relative_velocity.kilometers_per_second,distance:t.close_approach_data[0].miss_distance.astronomical})}))}))})).catch((function(e){console.log(e),t.errored=!0})).finally((function(){return t.loading=!1}))},onchangedate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;this.date=t}},data:function(){return{date:new Date,asteroids_of_the_day:new Array,loading:!0,errored:!1}},mounted:function(){this.get_asteroids_of_the_day()},props:{start_date:{type:Date,default:function(){var t=new Date;return t.setDate(t.getDate()-t.getDay()+1),t}},end_date:{type:Date,default:function(){var t=new Date,e=t.getDay()?t.getDay()-1:6;return t.setDate(t.getDate()+(6-e)),t}}},computed:{version:function(){return At["a"]}}},$t=Et,Pt=(a("034f"),Object(m["a"])($t,i,o,!1,null,null,null)),Bt=Pt.exports;r["a"].config.productionTip=!1,r["a"].filter("formatted",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;if(!t)return"";var e=""+(t.getMonth()+1),a=""+t.getDate(),n=t.getFullYear();return e.length<2&&(e="0"+e),a.length<2&&(a="0"+a),[n,e,a].join("-")})),r["a"].filter("lun_dom_day",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return 0==t.getDay()?t.getDay()-1:6})),r["a"].filter("scale",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Number,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Number,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Number;return(t-e)/(a-e)})),r["a"].filter("min",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Array;return Math.min.apply(Math,Object(n["a"])(t))})),r["a"].filter("max",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Array;return Math.max.apply(Math,Object(n["a"])(t))})),r["a"].filter("DateTimeFormat",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return new Intl.DateTimeFormat("it-IT").format(t)})),new r["a"]({render:function(t){return t(Bt)}}).$mount("#app"),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(t){console.log("ServiceWorker registration successful with scope: ",t.scope)}),(function(t){console.log("ServiceWorker registration failed: ",t)}))}))},"85ec":function(t,e,a){},9224:function(t){t.exports=JSON.parse('{"a":"0.0.5"}')},a046:function(t,e,a){"use strict";var n=a("1731"),r=a.n(n);r.a},db03:function(t,e,a){},fa82:function(t,e,a){"use strict";var n=a("db03"),r=a.n(n);r.a}});
//# sourceMappingURL=app.30982ce1.js.map