(function(t){function e(e){for(var a,o,s=e[0],d=e[1],l=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var d=n[s];0!==r[d]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=d;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},1731:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("a15b"),n("a9e3");var a=n("2909"),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",{staticClass:"app",attrs:{id:"app"}},[n("h1",[t._v("Aseroids")]),n("main",[n("asteroids-of-the-day",{attrs:{date:t.date,start_date:t.start_date,end_date:t.end_date,asteroids:t.asteroids_of_the_day,onchangedate:t.onchangedate,loading:t.loading,errored:t.errored}}),n("aside",[n("brightest",{attrs:{start_date:t.start_date,end_date:t.end_date}}),n("apod")],1)],1),n("footer",[n("table",[n("tbody",[t._m(0),n("tr",[n("td",[t._v("Version")]),n("td",[t._v(t._s(t.version))])])])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("GitHub")]),n("td",[n("a",{attrs:{href:"https://github.com/mattiapontonio/asteroids"}},[t._v("https://github.com/mattiapontonio/asteroids")])])])}],s=(n("d81d"),n("b0c0"),n("d3b7"),n("07ac"),n("3ca3"),n("ddb0"),n("2b3d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","flex-direction":"column","flex-grow":"1",padding:"0 16px"}},[n("h2",[t._v("Asteroids of the day")]),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[n("div",{staticStyle:{"flex-grow":"1"}},[n("p",[t._v("Select one day to update the chart:")]),n("selector",{attrs:{date:t.date,onchangedate:t.onchangedate,selected_index:t._f("lun_dom_day")(t.date)}})],1),n("min-max")],1),n("scatter-plot",{attrs:{date:t.date,asteroids:t.asteroids,loading:t.loading,errored:t.errored}}),t._m(0)],1)}),d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("tbody",[n("tr",[n("td",[t._v("⬆")]),n("td",[t._v("Distance")]),n("td",[t._v("(au)")])]),n("tr",[n("td",[t._v("➡")]),n("td",[t._v("Velocity")]),n("td",[t._v("(km/s)")])])])])}],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticStyle:{display:"flex"}},t._l(t.days,(function(e,a){return n("radio",{key:"radio-"+a,attrs:{id:"radio-"+a,date:e.date,label:e.label,onchangedate:t.onchangedate,checked:e.date==t.date}})})),1)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{staticClass:"radio",attrs:{type:"radio",id:t.id,name:"date"},domProps:{checked:t.checked,value:t._f("formatted")(t.date)},on:{change:function(e){return t.onchangedate(t.date)}}}),n("label",{staticStyle:{width:"32px",height:"32px","border-radius":"50%",display:"flex","align-items":"center","justify-content":"center","line-height":"1","vertical-align":"middle","margin-right":"8px"},attrs:{for:t.id}},[t._v(t._s(t.label))])])},f=[],p={name:"radio",props:{date:{type:Date,default:new Date},id:{type:String},label:{type:String},checked:{type:Boolean},onchangedate:{type:Function}},data:function(){return{count:0,selctedIndex:0}}},h=p,m=n("2877"),_=Object(m["a"])(h,u,f,!1,null,null,null),v=_.exports,g={name:"selector",components:{Radio:v},props:{date:{type:Date,default:new Date},onchangedate:{type:Function}},computed:{days:function(){for(var t=new Array,e=function(t){return["sun","mon","tue","wed","thur","fri","sat"][t.getDay()]},n=this.date,a=0;a<7;a++){var r=new Date;r.setDate(n.getDate()+(a-n.getDay())),t.push({date:n.getDate()==r.getDate()?n:r,label:e(r)})}return t}}},y=g,b=Object(m["a"])(y,l,c,!1,null,null,null),x=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Diameter")]),n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("bubble",{attrs:{d:0}}),n("span",{staticStyle:{"margin-left":"16px"}},[t._v("Min km")])],1),n("div",{staticStyle:{display:"flex","align-items":"center","margin-left":"110px"}},[n("bubble",{style:{position:"relative",transform:"none"},attrs:{d:1}}),n("span",{staticStyle:{transform:"translateX(calc(16px - (100px/2)))"}},[t._v("Max km")])],1)])])},D=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bubble",style:{width:t.width+"px",height:t.height+"px"}},[n("div",{staticClass:"point"})])},k=[],S={name:"bubble",props:{minD:{type:Number,default:function(){return 30}},maxD:{type:Number,default:function(){return 100}},d:{type:Number,default:function(){return 0}}},computed:{width:function(){return this.d*(this.maxD-this.minD)+this.minD},height:function(){return this.d*(this.maxD-this.minD)+this.minD}}},O=S,A=Object(m["a"])(O,j,k,!1,null,null,null),M=A.exports,E={name:"min-max",components:{Bubble:M}},$=E,P=Object(m["a"])($,w,D,!1,null,null,null),N=P.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scatter-plot"},[t.errored?n("section",[n("p",[t._v("We're sorry, we're not able to retrieve this information at the moment, please try back later")])]):t.loading?n("div",{staticClass:"gradient"},[t._v("Loading...")]):n("section",{staticClass:"container"},t._l(t.items,(function(t,e){return n("asteroid",{key:e,staticStyle:{position:"absolute"},attrs:{data:Object.assign({},t),x:t.x,y:t.y,d:t.d}})})),1)])},C=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{top:100-100*t.x+"%",left:100*t.y+"%",position:"absolute"},on:{mouseover:function(e){t.show=!0},mouseleave:function(e){t.show=!1}}},[n("bubble",{style:{transform:"translate(-50%, -50%)",position:"absolute"},attrs:{d:t.d}}),n("tooltip",{attrs:{show:t.show,data:t.data}})],1)},T=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-fade"}},[t.show?n("div",{staticClass:"tooltip"},[n("table",[n("tbody",[n("tr",[n("td",[t._v("Name")]),n("td",[t._v(t._s(t.data.name))])]),n("tr",[n("td",[t._v("Diameter")]),n("td",[t._v(t._s(t.data.diameter)+" km")])]),n("tr",[n("td",[t._v("Magnitude")]),n("td",[t._v(t._s(t.data.magnitude)+" h")])]),n("tr",[n("td",[t._v("Distance")]),n("td",[t._v(t._s(t.data.distance)+" au")])]),n("tr",[n("td",[t._v("Velocity")]),n("td",[t._v(t._s(t.data.velocity_kilometers_per_hour)+" km/h")])])])])]):t._e()])},R=[],z={name:"tooltip",props:["show","data"]},q=z,I=Object(m["a"])(q,L,R,!1,null,null,null),J=I.exports,U={name:"asteroid",components:{Bubble:M,Tooltip:J},props:["data","x","y","d"],data:function(){return{show:!1}}},V=U,W=Object(m["a"])(V,F,T,!1,null,null,null),G=W.exports,H={name:"scatter-plot",components:{Asteroid:G},computed:{items:function(){var t="velocity_kilometers_per_second",e="distance",n="diameter",a=r["a"].filter("scale"),i=r["a"].filter("min"),o=r["a"].filter("max"),s=this.asteroids;return s.map((function(e,n,r){var s=r.map((function(e){return e[t]}));return e.x=a(e[t],i(s),o(s)),e})).map((function(t,n,r){var s=r.map((function(t){return t[e]}));return t.y=a(t[e],i(s),o(s)),t})).map((function(t,e,r){var s=r.map((function(t){return t[n]}));return t.d=a(t[n],i(s),o(s)),t}))}},props:{date:{type:Date,default:new Date},asteroids:{type:Array,default:function(){return new Array}},loading:{type:Boolean,default:function(){return!1}},errored:{type:Boolean,default:function(){return!1}}}},X=H,Y=(n("a046"),Object(m["a"])(X,B,C,!1,null,null,null)),K=Y.exports,Q={components:{Selector:x,MinMax:N,ScatterPlot:K},name:"asteroids-of-the-day",computed:{minD:function(){return console.log(this.asteroids),Math.min(this.asteroids.map((function(t){return t.diameter})))},maxD:function(){return console.log(this.asteroids),Math.max(this.asteroids.map((function(t){return t.diameter})))}},props:{date:{type:Date,required:!0},asteroids:{type:Array,default:function(){return new Array}},onchangedate:{type:Function},loading:{type:Boolean},errored:{type:Boolean}}},Z=Q,tt=Object(m["a"])(Z,s,d,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h2",[t._v("Brightest of the week")]),t._m(0),t._m(1),t.errored?n("section",[n("p",[t._v("We're sorry, we're not able to retrieve this information at the moment, please try back later")])]):n("section",[t.loading?n("div",{staticClass:"gradient"},[t._v("Loading...")]):n("asteroids",{attrs:{asteroids:t.items}})],1)])},at=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("Magnitude "),n("span",[t._v("(h)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("tbody",[n("tr",[n("td",[n("div",{staticStyle:{width:"10px",height:"10px","box-sizing":"border-box",transform:"rotate(45deg)","background-color":"transparent",border:"1px solid white"}})]),n("td",[t._v("Filled area")]),n("td",[t._v("magnitude")])]),n("tr",[n("td",[n("div",{staticStyle:{width:"10px",height:"10px","box-sizing":"border-box",transform:"rotate(45deg)","background-color":"white",border:"1px solid white"}})]),n("td",[t._v("Empty area")]),n("td",[t._v("brightness")])])])])}],rt=(n("0481"),n("fb6a"),n("4069"),n("bc3a")),it=n.n(rt),ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.asteroids,(function(e,a){return n("div",{key:a,staticStyle:{display:"flex","align-items":"center",margin:"32px 0px"}},[n("rhombus",{attrs:{value:e.scale}}),n("table",[n("tbody",[n("tr",[n("td",[t._v("Name")]),n("td",[t._v(t._s(e.name))])]),n("tr",[n("td",[t._v("Diameter")]),n("td",[t._v(t._s(e.estimated_diameter.kilometers.estimated_diameter_max))])]),n("tr",[n("td",[t._v("Magnitude")]),n("td",[t._v(t._s(e.absolute_magnitude_h))])])])])],1)})),0)},st=[],dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center","flex-shrink":"0"},style:{width:t.dimension.outer,height:t.dimension.outer}},[n("div",{staticStyle:{border:"1px solid white",display:"flex","justify-content":"center","align-items":"center",transform:"rotate(-45deg)","box-sizing":"border-box","flex-shrink":"0"},style:{width:t.dimension.inner,height:t.dimension.inner,boxShadow:t.boxShadow}},[n("div",{staticStyle:{width:"0px",height:"0px","background-color":"white",display:"flex","justify-content":"center","align-items":"center"},style:{width:t.dimension.innerScaled,height:t.dimension.innerScaled}},[n("div",{staticStyle:{width:"4px",height:"4px","background-color":"black",margin:"auto",position:"absolute"}})])])])},lt=[],ct={name:"rhombus",props:{value:{type:Number,default:function(){return new Number}}},computed:{boxShadow:function(){return"0 0 ".concat(16*(1-this.value),"px white")},dimension:function(){var t="px",e=80,n=e,a=Math.sqrt(Math.pow(n,2)/2);return{outer:n+t,inner:a+t,innerScaled:this.value*a+t}}}},ut=ct,ft=Object(m["a"])(ut,dt,lt,!1,null,null,null),pt=ft.exports,ht={name:"asteroids",components:{Rhombus:pt},props:{asteroids:{type:Array,default:function(){return new Array}}}},mt=ht,_t=Object(m["a"])(mt,ot,st,!1,null,null,null),vt=_t.exports,gt={name:"brightest",components:{Asteroids:vt},props:{start_date:{type:Date},end_date:{type:Date}},data:function(){return{data:new Array,loading:new Boolean,errored:new Boolean}},computed:{items:function(){return Object.values(this.data).flat(1).sort((function(t,e){return t.absolute_magnitude_h-e.absolute_magnitude_h})).slice(0,5).reverse().map((function(t,e,n){var a=n.map((function(t){return t.absolute_magnitude_h})),i=r["a"].filter("scale"),o=r["a"].filter("min"),s=r["a"].filter("max");return t.scale=i(t.absolute_magnitude_h,o(a),s(a)),t}))}},methods:{get:function(){var t=this,e=r["a"].filter("formatted"),n=e(this.start_date),a=e(this.end_date),i=e(this.date),o=new URL(window.location.origin);console.log(i,n,a),console.assert(i>=n&&i<=a),o.pathname="neo/rest/v1/feed",o.searchParams.set("start_date",n),o.searchParams.set("end_date",a),this.loading=!0,this.errored=!1,it.a.get(o).then((function(e){t.data=e.data.near_earth_objects,t.loading=!1})).catch((function(e){console.error(e),t.errored=!0})).finally((function(){return t.loading=!1}))}},mounted:function(){this.get()}},yt=gt,bt=(n("fa82"),Object(m["a"])(yt,nt,at,!1,null,null,null)),xt=bt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h2",[t._v("Astronomy Picture of the Day")]),t.loading?n("div",{staticClass:"gradient"},[t._v("Loading...")]):n("div",[n("p",[t._v(" "+t._s(function(t){var e=new Date(t),n=new Intl.DateTimeFormat("it-IT").format(e);return n}(t.date))+" ")]),n("picture",[n("source",{attrs:{media:"(min-width:1680px)",srcset:t.hdurl}}),n("source",{attrs:{media:"(min-width:465px)",srcset:t.url}}),n("img",{attrs:{loading:"lazy",src:t.url,alt:t.title,title:t.title}}),n("figcaption",[t._v(t._s(t.explanation))])])])])},Dt=[],jt={name:"apod",data:function(){return{date:void 0,explanation:void 0,hdurl:void 0,media_type:void 0,service_version:void 0,title:void 0,url:void 0,loading:!1}},methods:{get:function(){var t=this;this.loading=!0,this.errored=!1,it.a.get("/planetary/apod").then((function(e){return Object.assign(t,e.data)})).catch((function(e){console.log(e),t.errored=!0})).finally((function(){return t.loading=!1}))}},mounted:function(){this.get()}},kt=jt,St=Object(m["a"])(kt,wt,Dt,!1,null,null,null),Ot=St.exports,At=n("9224"),Mt={name:"App",components:{Brightest:xt,AsteroidsOfTheDay:et,Apod:Ot},watch:{date:function(){this.get_asteroids_of_the_day()}},methods:{get_asteroids_of_the_day:function(){var t=this,e=r["a"].filter("formatted"),n=e(this.date),a=new URL(window.location.origin);a.pathname="neo/rest/v1/feed",a.searchParams.set("start_date",n),a.searchParams.set("end_date",n),this.loading=!0,this.errored=!1,it.a.get(a).then((function(e){return Promise.all(Object.values(e.data.near_earth_objects[n]).map((function(t){var e=new URL(window.location.origin);return e.pathname="neo/rest/v1/neo/".concat(t.id),it.a.get(e)}))).then((function(e){t.asteroids_of_the_day=e.map((function(t){return t.data})).map((function(t){return Object.assign({},{id:t.id,name:t.name,diameter:t.estimated_diameter.kilometers.estimated_diameter_max,magnitude:t.absolute_magnitude_h,velocity_kilometers_per_hour:t.close_approach_data[0].relative_velocity.kilometers_per_hour,velocity_kilometers_per_second:t.close_approach_data[0].relative_velocity.kilometers_per_second,distance:t.close_approach_data[0].miss_distance.astronomical})}))}))})).catch((function(e){console.log(e),t.errored=!0})).finally((function(){return t.loading=!1}))},onchangedate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;this.date=t}},data:function(){return{date:new Date,asteroids_of_the_day:new Array,loading:!0,errored:!1}},mounted:function(){this.get_asteroids_of_the_day()},props:{start_date:{type:Date,default:function(){var t=new Date;return t.setDate(t.getDate()-t.getDay()+1),t}},end_date:{type:Date,default:function(){var t=new Date,e=t.getDay()?t.getDay()-1:6;return t.setDate(t.getDate()+(6-e)),t}}},computed:{version:function(){return At["a"]}}},Et=Mt,$t=(n("034f"),Object(m["a"])(Et,i,o,!1,null,null,null)),Pt=$t.exports,Nt=n("9483");Object(Nt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,r["a"].filter("formatted",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;if(!t)return"";var e=""+(t.getMonth()+1),n=""+t.getDate(),a=t.getFullYear();return e.length<2&&(e="0"+e),n.length<2&&(n="0"+n),[a,e,n].join("-")})),r["a"].filter("lun_dom_day",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return 0==t.getDay()?t.getDay()-1:6})),r["a"].filter("scale",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Number,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Number,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Number;return(t-e)/(n-e)})),r["a"].filter("min",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Array;return Math.min.apply(Math,Object(a["a"])(t))})),r["a"].filter("max",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Array;return Math.max.apply(Math,Object(a["a"])(t))})),new r["a"]({render:function(t){return t(Pt)}}).$mount("#app")},"85ec":function(t,e,n){},9224:function(t){t.exports=JSON.parse('{"a":"0.0.5"}')},a046:function(t,e,n){"use strict";var a=n("1731"),r=n.n(a);r.a},db03:function(t,e,n){},fa82:function(t,e,n){"use strict";var a=n("db03"),r=n.n(a);r.a}});
//# sourceMappingURL=app.ab47e2d3.js.map