(function(e){function t(t){for(var n,r,c=t[0],l=t[1],s=t[2],d=0,m=[];d<c.length;d++)r=c[d],o[r]&&m.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var l=a[c];0!==o[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},o={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/msc-thesis-result/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=a("bb71");a("da64");n["a"].use(o["a"],{iconfont:"md"});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("UserInterface"),a("v-content",[a("router-view")],1)],1)},r=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-toolbar",{attrs:{app:"",dark:""}},[a("v-toolbar-title",{staticClass:"headline"},[a("span",[e._v("M.S. Thesis Result")]),a("span",{staticClass:"font-weight-light"},[e._v(" | Amin Zabardast")])]),a("v-spacer"),a("v-btn",{attrs:{dark:"",flat:""},on:{click:function(t){e.aboutDialog=!0}}},[a("span",[e._v("About")])]),a("v-btn",{attrs:{dark:"",flat:""},on:{click:function(t){e.dataSelectDialog=!0}}},[e._v("\n            Select Data Point\n        ")])],1),a("v-dialog",{attrs:{dark:"",scrollable:"","max-width":"500px"},model:{value:e.dataSelectDialog,callback:function(t){e.dataSelectDialog=t},expression:"dataSelectDialog"}},[a("v-card",[a("v-card-title",[e._v("Select a Data Point")]),a("v-divider"),a("v-card-text",{staticStyle:{"max-height":"500px"}},[a("v-layout",{attrs:{wrap:"","justify-space-between":""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-radio-group",{attrs:{column:""},model:{value:e.tempMethod,callback:function(t){e.tempMethod=t},expression:"tempMethod"}},e._l(e.methods,function(e){return a("v-radio",{key:e.value,attrs:{label:e.name,value:e.value}})}),1)],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-radio-group",{attrs:{column:""},model:{value:e.tempDataPoint,callback:function(t){e.tempDataPoint=t},expression:"tempDataPoint"}},e._l(e.data,function(e){return a("v-radio",{key:e.value,attrs:{label:e.name,value:e.value}})}),1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{color:"info",flat:""},on:{click:e.closeDataSelectDialog}},[e._v("Close")]),a("v-btn",{attrs:{color:"success",flat:""},on:{click:e.goTo}},[e._v("Submit")])],1)],1)],1),a("v-dialog",{attrs:{dark:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.aboutDialog,callback:function(t){e.aboutDialog=t},expression:"aboutDialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:""}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.aboutDialog=!1}}},[a("v-icon",[e._v("close")])],1),a("v-toolbar-title",[e._v("About")])],1),a("v-card-text",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cumque error ex excepturi harum modi molestias numquam officia omnis quaerat quidem saepe sapiente sed, soluta tempora temporibus totam ullam vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus esse ipsa porro quia vitae. Distinctio eius neque quae tempora. Dolore esse ipsam labore maxime natus nemo officia omnis repellendus voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorum explicabo fugit quo. Ad alias animi corporis cupiditate deserunt dolor, earum et eum illo labore mollitia odio provident sapiente, vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore eaque impedit minus nemo ullam. Esse eveniet neque tempore. Aspernatur eum excepturi veritatis vero. Aut doloribus expedita odit. Porro, unde.\n            ")])],1)],1)],1)},l=[],s=(a("7f7f"),a("ac6a"),a("28a5"),a("2ef0")),u={name:"UserInterface",data:function(){return{dataSelectDialog:!1,aboutDialog:!1,method:"".concat(this.$route.params.method),tempMethod:"".concat(this.$route.params.method),dataPoint:"".concat(this.$route.params.type,"/").concat(this.$route.params.number),tempDataPoint:"".concat(this.$route.params.type,"/").concat(this.$route.params.number),methods:[{name:"Block Matching",value:"bm"},{name:"Semi-Global Matching",value:"sgm"},{name:"Type S Network",value:"s"},{name:"Type C Network",value:"c"},{name:"Type CS Network",value:"cs"}]}},methods:{closeDataSelectDialog:function(){this.dataSelectDialog=!1,this.tempMethod=this.method,this.tempDataPoint=this.dataPoint},goTo:function(){this.$router.push({name:"main",params:{method:this.tempMethod,type:this.tempDataPoint.split("/")[0],number:this.tempDataPoint.split("/")[1]}}),this.dataSelectDialog=!1}},computed:{data:function(){var e=[],t=[{name:"All",value:"all",number:35,furtherDivide:[]},{name:"Smoke",value:"smoke",number:5,furtherDivide:[{name:"With Smoke",value:"w"},{name:"Without Smoke",value:"wo"}]},{name:"Blood",value:"blood",number:2,furtherDivide:[{name:"With Blood",value:"w"},{name:"Without Blood",value:"wo"}]}];return s["forEach"](t,function(t){for(var a=function(a){t.furtherDivide.length>0?s["forEach"](t.furtherDivide,function(n){e.push({name:"".concat(n.name," / ").concat(a),value:"".concat(t.value,"/").concat(a).concat(n.value)})}):e.push({name:"".concat(t.name," / ").concat(a),value:"".concat(t.value,"/").concat(a)})},n=1;n<=t.number;n++)a(n)}),e}}},d=u,m=a("2877"),p=a("6544"),f=a.n(p),v=a("8336"),h=a("b0af"),b=a("99d9"),g=a("12b2"),w=a("169a"),y=a("ce7e"),x=a("0e8f"),D=a("132d"),S=a("a722"),k=a("67b6"),_=a("43a6"),P=a("9910"),C=a("71d9"),A=a("2a7f"),V=Object(m["a"])(d,c,l,!1,null,"3a636398",null),T=V.exports;f()(V,{VBtn:v["a"],VCard:h["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:g["a"],VDialog:w["a"],VDivider:y["a"],VFlex:x["a"],VIcon:D["a"],VLayout:S["a"],VRadio:k["a"],VRadioGroup:_["a"],VSpacer:P["a"],VToolbar:C["a"],VToolbarTitle:A["a"]});var j={name:"App",components:{UserInterface:T},data:function(){return{}}},M=j,R=a("7496"),E=a("549c"),$=Object(m["a"])(M,i,r,!1,null,null,null),F=$.exports;f()($,{VApp:R["a"],VContent:E["a"]});var O,W,q,B,G,z,L,N,H,I=a("8c4f"),U=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},J=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"container"}})])}],Z=(a("63d9"),a("5a89")),X=a("5c54"),K=a("1157"),Q=a("a5d4"),Y={name:"PointCloudTest",data:function(){return{debug:!1}},methods:{init:function(){O=K("#container"),this.createCamera(),this.createGeometry(),this.createWorld(),B.add(z),this.createRenderer(),this.createControls(),this.focusCamera(),this.addingStats(this.debug)},animate:function(){requestAnimationFrame(this.animate),this.render(),N.update(),W.update()},onWindowResize:function(){q.aspect=window.innerWidth/window.innerHeight,q.updateProjectionMatrix(),G.setSize(window.innerWidth,window.innerHeight),N.handleResize(),this.render()},render:function(){G.render(B,q)},createCamera:function(){q=new Z["PerspectiveCamera"](50,window.innerWidth/window.innerHeight,1,1e4)},createWorld:function(){B=new Z["Scene"],B.background=new Z["Color"](7829367)},createGeometry:function(){var e=new Float32Array(3*L.length),t=new Float32Array(3*L.length),a=new Float32Array(L.length);s["forEach"](L,function(n,o){n=n.split(" "),e[3*o]=parseFloat(n[0]),e[3*o+1]=parseFloat(n[1]),e[3*o+2]=parseFloat(n[2]),t[3*o]=parseFloat(n[3])/255,t[3*o+1]=parseFloat(n[4])/255,t[3*o+2]=parseFloat(n[5])/255,a[o]=1}),H=new Z["BufferGeometry"],H.name="cloud",H.addAttribute("position",new Z["BufferAttribute"](e,3)),H.addAttribute("color",new Z["BufferAttribute"](t,3)),H.addAttribute("scale",new Z["BufferAttribute"](a,1)),H.rotateX(90);var n=new Z["PointsMaterial"]({vertexColors:Z["VertexColors"],size:.5});z=new Z["Points"](H,n)},createRenderer:function(){G=new Z["WebGLRenderer"]({antialias:!1}),G.setPixelRatio(window.devicePixelRatio),G.setSize(window.innerWidth,window.innerHeight),O.append(G.domElement)},createControls:function(){N=new Q(q,G.domElement),N.rotateSpeed=5,N.zoomSpeed=2,N.panSpeed=1,N.noZoom=!1,N.noPan=!0,N.staticMoving=!0,N.dynamicDampingFactor=.3,N.keys=[65,83,68],N.addEventListener("change",this.render)},addingStats:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];W=new X,e&&O.append(W.dom),window.addEventListener("resize",this.onWindowResize,!1)},loadResult:function(e){K["ajax"]({type:"GET",url:e,success:function(e){e=e.split("\n"),L=s["slice"](e,10,e.length-2),this.init(),this.animate()}.bind(this)})},loadNewResult:function(e){K["ajax"]({type:"GET",url:e,beforeSend:function(){B.remove(B.children[0])},success:function(e){e=e.split("\n"),L=s["slice"](e,10,e.length-2),this.createGeometry(),B.add(z),this.focusCamera(),this.animate()}.bind(this)})},focusCamera:function(){var e=new Z["Box3"];e.setFromObject(B.children[0]),e.getCenter(N.target)}},watch:{$route:function(e){var t="result_files/".concat(e.params.type,"/").concat(e.params.method,"/").concat(e.params.number,".ply");this.loadNewResult(t)}},mounted:function(){var e=this.$route.params,t="result_files/".concat(e.type,"/").concat(e.method,"/").concat(e.number,".ply");this.loadResult(t)}},ee=Y,te=(a("831f"),Object(m["a"])(ee,U,J,!1,null,"ac8bb604",null)),ae=te.exports;n["a"].use(I["a"]);var ne=new I["a"]({routes:[{path:"/",redirect:"/c/all/1",name:"root"},{path:"/:method/:type/:number",name:"main",component:ae}]});n["a"].config.productionTip=!1,new n["a"]({router:ne,render:function(e){return e(F)}}).$mount("#app")},"657f":function(e,t,a){},"831f":function(e,t,a){"use strict";var n=a("657f"),o=a.n(n);o.a}});
//# sourceMappingURL=app.635af00f.js.map