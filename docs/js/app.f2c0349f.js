(function(e){function o(o){for(var n,l,a=o[0],c=o[1],d=o[2],u=0,h=[];u<a.length;u++)l=a[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&h.push(r[l][0]),r[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(o);while(h.length)h.shift()();return i.push.apply(i,d||[]),t()}function t(){for(var e,o=0;o<i.length;o++){for(var t=i[o],n=!0,a=1;a<t.length;a++){var c=t[a];0!==r[c]&&(n=!1)}n&&(i.splice(o--,1),e=l(l.s=t[0]))}return e}var n={},r={app:0},i=[];function l(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,o,t){l.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,o){if(1&o&&(e=l(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)l.d(t,n,function(o){return e[o]}.bind(null,n));return t},l.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(o,"a",o),o},l.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},l.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=o,a=a.slice();for(var d=0;d<a.length;d++)o(a[d]);var s=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("cd49")},"496e":function(e,o,t){},b544:function(e,o,t){"use strict";t("496e")},cd49:function(e,o,t){"use strict";t.r(o);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23"),r={id:"app"},i={id:"MV",ref:"MV"};function l(e,o,t,l,a,c){var d=Object(n["g"])("controller");return Object(n["d"])(),Object(n["b"])("div",r,[Object(n["c"])("canvas",i,null,512),Object(n["c"])("div",null,[Object(n["c"])(d),Object(n["c"])("button",{value:"ミライアカリ",onClick:o[1]||(o[1]=function(e){return c.loadModel("model/MiraiAkari/MiraiAkari_v1.0.pmx")})},"ミライアカリ"),Object(n["c"])("button",{value:"ときのそら",onClick:o[2]||(o[2]=function(e){return c.loadModel("model/TokinoSora/ときのそら.pmx")})},"ときのそら")])])}t("b0c0");var a=t("5a89"),c=t("4721"),d=t("34ad"),s=t("aed8"),u={model:{model:{MiraiAkari:"model/MiraiAkari/MiraiAkari_v1.0.pmx",TokinoSora:"model/TokinoSora/ときのそら.pmx"},camera:{PerspectiveCamera:{fov:70,aspectX:document.body.clientWidth,aspectY:document.body.clientHeight,near:1,far:500},position:{x:0,y:20,z:20},lookAt:new a["zb"](0,10,0)},light:{DirectionLight:{color:"0xFF0000",intensity:1},position:{x:20,y:0,z:20}}}},h=new a["kb"],m=new a["bb"](u.model.camera.PerspectiveCamera.fov,u.model.camera.PerspectiveCamera.aspectX/u.model.camera.PerspectiveCamera.aspectY,u.model.camera.PerspectiveCamera.near,u.model.camera.PerspectiveCamera.far);m.position.set(u.model.camera.position.x,u.model.camera.position.y,u.model.camera.position.z),m.lookAt(u.model.camera.lookAt);var p=new a["k"](u.model.light.DirectionLight.color,u.model.light.DirectionLight.intensity);p.position.set(u.model.light.position.x,u.model.light.position.y,u.model.light.position.z);var f=new a["I"],g=new s["a"](f),b=(new d["a"](f),Object(n["k"])("data-v-3d470812"));Object(n["f"])("data-v-3d470812");var v={id:"controller"},j=Object(n["c"])("label",{for:"light_color"},"ライトの色",-1);Object(n["e"])();var w=b((function(e,o,t,r,i,l){return Object(n["d"])(),Object(n["b"])("div",v,[Object(n["c"])("form",null,[j,Object(n["j"])(Object(n["c"])("input",{type:"color","onUpdate:modelValue":o[1]||(o[1]=function(e){return i.light_color=e}),id:"light_color",ref:"light_color"},null,512),[[n["i"],i.light_color]]),Object(n["c"])("p",null,Object(n["h"])(i.light_color),1)])])})),O={name:"Controller",data:function(){return{light_color:"0xFFFFFF"}},watch:{light_color:function(){console.log(this.$refs.light_color.value),this.$parent.light=new a["k"](this.$refs.light_color.value,1)}}};O.render=w,O.__scopeId="data-v-3d470812";var y,k,M,_,x=O,A={name:"App",components:{Controller:x},data:function(){return{scene:null,render:null,camera:null,light:null,model:null,Control:null,loader:g}},mounted:function(){k=h,M=m,_=p,k.add(_),this.scene=k,this.camera=M,this.render=new a["Bb"]({antialias:!0,canvas:this.$refs.MV}),this.render.setClearColor(15658734),this.control=new c["a"](M,this.render.domElement),this.control.target=u.model.camera.lookAt,this.control.enableDamping=!0,this.control.dampingFactor=.2,this.render.render(k,M),this.loadModel(u.model.model.MiraiAkari),this.animate()},methods:{animate:function(){if(this.resizeRendererToDisplaySize(this.render)){var e=this.render.domElement;this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix()}requestAnimationFrame(this.animate),this.control.update(),this.render.render(k,M)},resizeRendererToDisplaySize:function(e){var o=e.domElement,t=o.clientWidth,n=o.clientHeight,r=o.width!==t||o.height!==n;return r&&this.render.setSize(t,n,!1),r},setLightColor:function(e){this.scene.remove,this.light=new a["k"](e,1)},loadModel:function(e){var o=this;this.loader.load(e,(function(e){y=e,y.name="nowModel",console.log("model loaded"),o.model=y}),(function(e){console.log(Math.round(e.loaded/e.total*100)+"% loaded")}),(function(e){console.group("error! reason:"),console.log(e),console.groupEnd()}))}},watch:{model:function(){var e=k.getObjectByName("nowModel");k.remove(e),console.log(k),k.add(y),this.model=y,this.render.render(k,M),console.log(this.model)},light:function(){k.add(this.camera)}}};t("b544");A.render=l;var C=A,P=t("9483");Object(P["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(n["a"])(C).mount("#app")}});
//# sourceMappingURL=app.f2c0349f.js.map