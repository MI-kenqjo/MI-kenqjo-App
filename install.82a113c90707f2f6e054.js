(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";(function(global){var dialog_polyfill__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0);window.anime=animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__.a;var isInStandaloneMode=function(){return window.matchMedia("(display-mode: standalone)").matches||window.matchMedia("(display-mode: fullscreen)").matches||window.navigator.standalone||document.referrer.includes("android-app://")};global.isPWA=isInStandaloneMode(),window.runExternal=function(url){var fetch_option=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{method:"GET",headers:{"Content-Type":"text/javascript"},mode:"cors"};return new Promise((function(resolve,reject){fetch(url,fetch_option).then((function(e){return e.text()})).then((function(t){return resolve(eval(t))})).catch((function(e){return reject(e)}))}))},window.popup=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{OK:"ok"},i=document.querySelectorAll("dialog"),o=i[i.length-1];i.forEach((function(e){e.setAttribute("class","sent-back")}));var r=document.createElement("dialog");dialog_polyfill__WEBPACK_IMPORTED_MODULE_0__.a.registerDialog(r),document.body.appendChild(r);var a=document.createElement("form");r.appendChild(a),a.setAttribute("method","dialog");var c=document.createElement("p");a.appendChild(c),c.setAttribute("class","title"),c.innerText=e;var l=document.createElement("button");l.innerText="cancel",l.setAttribute("value","cancel"),c.appendChild(l),t.forEach((function(e){var t=document.createElement("p");if("string"==typeof e){var n=document.createElement("label");t.appendChild(n),n.innerText=e}else e instanceof HTMLElement&&t.appendChild(e);a.appendChild(t)}));var d=document.createElement("menu");for(var s in a.appendChild(d),n){var u=document.createElement("button");u.innerHTML=s,d.appendChild(u),u.setAttribute("value",n[s]),u.setAttribute("type","submit")}return new Promise((function(e){r.addEventListener("close",(function(){setTimeout((function(){return r.remove()}),500),o&&o.removeAttribute("class"),e(r.returnValue)})),setTimeout((function(){return r.showModal()}),100)}))},window.createElementFromHTML=function(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild},window.secretizeFunc=function(e){e.name?e.toString=function(){return"".concat(e.name,"(){ [ secret code ] }")}:e.toString=function(){return"()=>{ [ secret code ] }"}}}).call(this,__webpack_require__(6))},function(e,t,n){"use strict";n.p},,,function(e,t,n){"use strict";n.r(t),t.default=n.p+"0e3295e4662107e65d1f8f13f4ba967c.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"2bfa27340655858f8ebb60b791e8debb.svg"},,,,,,function(e,t,n){"use strict";n.r(t);n(3);var i=n(2),o=n.n(i),r=n(0);n(4),n.p;function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=document.querySelector("canvas"),l=function(){c.width=document.body.clientWidth,c.height=document.body.clientHeight};l(),window.addEventListener("resize",(function(e){l(),h()}));var d=c.getContext("2d"),s={vStart:0,vEnd:3*c.height},u=!1,h=function(){d.beginPath();var e=d.createLinearGradient(0,s.vStart,c.width,s.vEnd);e.addColorStop(0,"black"),e.addColorStop(1/3,"rgb(10, 15, 85)"),e.addColorStop(2/3,"rgb(18, 104, 218)"),e.addColorStop(1,"rgb(207, 106, 156)"),d.fillStyle=e,d.fillRect(0,0,c.width,c.height),d.closePath()},p=.08*Math.min(c.width,c.height),f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=Math.random()*c.width,this.y=c.height+Math.random()*c.height,this.radius=Math.random()*p+1,this.color="rgba(255, 255, 255, ".concat(Math.pow(1-this.radius/p,2),")");var t=.3*this.radius;this.xVel=t*Math.random()*.5,this.yVel=t*Math.random()*.5+.5}var t,n,i;return t=e,(n=[{key:"draw",value:function(){this.x-=this.xVel,this.y-=this.yVel,this.x<=-this.radius&&(this.x=c.width+this.radius),this.y<=-this.radius&&(this.y=c.height+this.radius),d.fillStyle=this.color,d.beginPath(),d.arc(this.x,this.y,this.radius,0,2*Math.PI),d.fill(),d.filter="none",d.closePath()}}])&&a(t.prototype,n),i&&a(t,i),e}();h();for(var m=[],_=function e(){d.clearRect(0,0,c.width,c.height),h(),m.forEach((function(e){return e.draw()})),requestAnimationFrame(e)},v=0;v<30;v++)m.push(new f);window.onappinstalled=function(){return location.href="./index.html"};!function(){if("serviceWorker"in navigator){o.a.register().then((function(){console.log("succeeded")})).catch((function(e){console.log("error:",e)}));var e=document.querySelector("#install_button");e.addEventListener("click",(function(){document.body.classList.add("install_pressed"),u||(u=!0,requestAnimationFrame(_),Object(r.a)({targets:s,duration:1500,vStart:[0,2*-c.height],vEnd:[3*c.height,c.height],easing:"easeInOutSine"}))})),"onbeforeinstallprompt"in window?window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),e.addEventListener("click",(function(){t.prompt||popup("didn't you already install the App?",[]),t.prompt().then((function(e){return console.log(e)}))}))})):e.addEventListener("click",(function(){popup("Install",["You can install Hakqlo App by adding this website to your home screen.",createElementFromHTML("\n            <ol>\n            <li> Tap the <div style='background-color: rgba(56, 172, 255, 0.91);\n            -webkit-mask: url(".concat(n(7).default,") no-repeat center;\n            mask: url(").concat(n(7).default,") no-repeat center;width: 28px;\n            height: 28px;'></div> icon at the bottom of your browser</li>\n            <li> Choose <div style='background-color: white;\n            -webkit-mask: url(").concat(n(8).default,") no-repeat center;\n            mask: url(").concat(n(8).default,") no-repeat center;width: 28px;\n            height: 28px;'></div> 'Add to Home Screen'.</li></ol>\n          "))]).catch((function(e){return console.warn(e)}))}))}else console.log("service worker not supported on your browser")}()}],[[14,0,1]]]);