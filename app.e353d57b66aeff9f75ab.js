(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,function(module,__webpack_exports__,__webpack_require__){"use strict";(function(global){__webpack_require__.d(__webpack_exports__,"a",(function(){return format}));var dialog_polyfill__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0);window.anime=animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__.a;var isInStandaloneMode=function(){return window.matchMedia("(display-mode: standalone)").matches||window.matchMedia("(display-mode: fullscreen)").matches||window.navigator.standalone||document.referrer.includes("android-app://")};function format(t){var e=/(%?)(%([jds]))/g,n=Array.prototype.slice.call(arguments,1);t=t.toString();return n.length&&(t=t.replace(e,(function(t,e,r,o){var i=n.shift();switch(o){case"s":i=""+i;break;case"d":i=Number(i);break;case"j":i=JSON.stringify(i)}return e?(n.unshift(i),t):i}))),n.length&&(t+=" "+n.join(" ")),""+(t=t.replace(/%{2,2}/g,"%"))}global.isPWA=isInStandaloneMode(),window.runExternal=function(url){var fetch_option=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{method:"GET",headers:{"Content-Type":"text/javascript"},mode:"cors"};return new Promise((function(resolve,reject){fetch(url,fetch_option).then((function(t){return t.text()})).then((function(t){return resolve(eval(t))})).catch((function(t){return reject(t)}))}))},window.popup=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{OK:"ok"},r=document.querySelectorAll("dialog"),o=r[r.length-1];r.forEach((function(t){t.setAttribute("class","sent-back")}));var i=document.createElement("dialog");dialog_polyfill__WEBPACK_IMPORTED_MODULE_0__.a.registerDialog(i),document.body.appendChild(i);var a=document.createElement("form");i.appendChild(a),a.setAttribute("method","dialog");var s=document.createElement("p");a.appendChild(s),s.setAttribute("class","title"),s.innerText=t;var c=document.createElement("button");c.innerText="cancel",c.setAttribute("value","cancel"),s.appendChild(c),e.forEach((function(t){var e=document.createElement("p");if("string"==typeof t){var n=document.createElement("label");e.appendChild(n),n.innerText=t}else t instanceof HTMLElement&&e.appendChild(t);a.appendChild(e)}));var l=document.createElement("menu");for(var u in a.appendChild(l),n){var d=document.createElement("button");d.innerHTML=u,l.appendChild(d),d.setAttribute("value",n[u]),d.setAttribute("type","submit")}return new Promise((function(t){i.addEventListener("close",(function(){setTimeout((function(){return i.remove()}),500),o&&o.removeAttribute("class"),t(i.returnValue)})),setTimeout((function(){return i.showModal()}),100)}))},window.createElementFromHTML=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},window.secretizeFunc=function(t){t.name?t.toString=function(){return"".concat(t.name,"(){ [ secret code ] }")}:t.toString=function(){return"()=>{ [ secret code ] }"}}}).call(this,__webpack_require__(6))},,,,function(t,e,n){"use strict";n.p},,,,,,function(t,e){var n=document.querySelector("#startup");window.addEventListener("load",(function(t){console.log("load happened"),setTimeout((function(){n.style.transition="0.7s",n.style.opacity=0,window.WindowSystem.away=!1,setTimeout((function(){return n.remove()}),700)}),1800)}))},function(t,e,n){"use strict";n.r(e);n(2);var r=n(1),o=n(4),i=n.n(o);function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=function(t){t.portMain;var e=function(t){var e,n=t.data,r=n.type,o=n.content;switch(r){case"consoleLog":(e=console).log.apply(e,["sw:"].concat(a(o)))}portMain.start()};"serviceWorker"in navigator&&(i.a.register().then((function(n){if(console.log("succeeded"),n.active){console.log("sw is active");var r=new MessageChannel,o=r.port1,i=r.port2;n.active.postMessage({type:"init"},[i]),t.portMain=o,o.onmessage=e}else console.log("sw is NOT active")})).catch((function(t){console.error("error:",t)})),t.isPWA?console.log("this is in PWA"):(console.log("Not PWA: going to /install.html"),location.href="./install.html"))},l=n(9),u=n(10),d=function(){globalThis.safeAreaTop=getComputedStyle(document.documentElement).getPropertyValue("--safe-area-top"),globalThis.safeAreaLeft=getComputedStyle(document.documentElement).getPropertyValue("--safe-area-left"),globalThis.safeAreaBottom=getComputedStyle(document.documentElement).getPropertyValue("--safe-area-bottom"),globalThis.safeAreaRight=getComputedStyle(document.documentElement).getPropertyValue("--safe-area-right")};window.term=new l.Terminal,window.hakqloApp={print:function(){return term.write(r.a.apply(void 0,arguments).replace(/\n/g,"\r\n"))},println:function(){return term.writeln(r.a.apply(void 0,arguments).replace(/\n/g,"\r\n"))}};var f=new u.FitAddon;term.loadAddon(f),term.open(document.querySelector("#xterm_container")),f.fit(),d(),window.addEventListener("resize",(function(t){f.fit(),d(),hakqloApp.println("resized...")})),window.addEventListener("DOMContentLoaded",(function(){!function(t){var e=t.log,n=t.warn,r=t.error,o=function(){var t=Math.ceil(safeAreaTop/term.getOption("lineHeight")),e=Math.ceil(2*safeAreaLeft/term.getOption("lineHeight"));term.buffer.baseY<=t&&term.write("[".concat(t,";").concat(e+1,"H"))};t.log=function(){var t;e.apply(void 0,arguments),o(),hakqloApp.print("[39m"),(t=hakqloApp).println.apply(t,arguments)},t.warn=function(){var t;n.apply(void 0,arguments),o(),hakqloApp.print("[33m"),(t=hakqloApp).println.apply(t,arguments)},t.error=function(){var t;r.apply(void 0,arguments),o(),hakqloApp.print("[31m"),(t=hakqloApp).println.apply(t,arguments)},secretizeFunc(t.log),secretizeFunc(t.warn),secretizeFunc(t.error)}(globalThis.console)}));var p;n(11),n(5),n.p;"ja"!=navigator.language&&"ja-JP"!=navigator.language||(p="ja",document.body.setAttribute("lang",p));var h=n(0);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){var e="function"==typeof Map?new Map:void 0;return(g=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return b(t,arguments,E(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),L(r,t)})(t)}function b(t,e,n){return(b=_()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&L(o,n.prototype),o}).apply(null,arguments)}function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}window.WindowSystem={windowList:[],currentWin:0,container:document.querySelector("#windowsContainer"),scrollLength:0,_away:!1,_listView:!0,init:function(){},add:function(t){var e=document.createElement("app-window");return this.windowList.push(e),this.container.appendChild(e),t&&e.appendChild(t),this.moveTo(e.winIndex),e},moveTo:function(t){var e=this;if(t>=this.windowList.length)return 0;this.listView=!0,this.currentWin=t,setTimeout((function(){WindowSystem.container.classList.add("scrolling"),Object(h.a)({targets:e,scrollLength:t,duration:300,easing:"easeInOutQuint"}),setTimeout((function(){e.listView=!1,WindowSystem.container.classList.remove("scrolling")}),300)}),200)},draw:function(){},scrollTo:function(t){var e=t%this.windowList.length;this.scrollLength=e},bringToCenter:function(){this.scrollLength=Math.round(this.scrollLength)},get away(){return this._away},set away(t){t?this.container.classList.add("away"):this.container.classList.remove("away"),this._away=t},set listView(t){if(t)for(var e in this.scrollLength=this.currentWin,this.windowList)e==this.currentWin?this.windowList[e].classList.remove("focus"):this.windowList[e].classList.remove("away");else for(var n in this.windowList)n==this.currentWin?this.windowList[n].classList.add("focus"):this.windowList[n].classList.add("away");this._listView=t},get listView(){return this._listView}},window.WindowSystem.away=!0;var A=0,T=100/screen.width/.6/50,M=0;window.addEventListener("resize",(function(){T=100/screen.width/.6/50}));var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(s,t);var e,n,r,o,i,a=(e=s,n=_(),function(){var t,r=E(e);if(n){var o=E(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return y(this,t)});function s(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),S(v(t=a.call(this)),"winIndex",void 0),S(v(t),"ws",window.WindowSystem),S(v(t),"ready",!1),S(v(t),"cover",document.createElement("div")),t}return r=s,(o=[{key:"connectedCallback",value:function(){var t=this;this.ready=!0,this.updateIndex(),this.appendChild(this.cover),this.cover.setAttribute("class","cover"),requestAnimationFrame(this.draw.bind(this));var e={},n=function(e){t.ws.listView&&e.stopPropagation()};this.cover.addEventListener("touchstart",(function(t){n(t),A=t.changedTouches[0].screenX*T,M=WindowSystem.scrollLength,WindowSystem.container.classList.add("scrolling")}),e),this.cover.addEventListener("touchmove",(function(t){n(t);var e=A-t.changedTouches[0].screenX*T+M;if(1===WindowSystem.windowList.length&&(e>.4||e<-.4))return 0;WindowSystem.scrollTo(e)}),e),this.cover.addEventListener("touchend",(function(t){n(t),WindowSystem.container.classList.remove("scrolling"),WindowSystem.bringToCenter()}),e),this.cover.addEventListener("click",(function(e){n(e),t.focus()}),e)}},{key:"focus",value:function(){WindowSystem.currentWin=this.winIndex,WindowSystem.listView=!1}},{key:"updateIndex",value:function(){this.winIndex=this.ws.windowList.indexOf(this)}},{key:"draw",value:function(){if(!1===this.ready)return console.log("not ready"),0;if(this.classList.contains("focus"))this.style.transform=null,this.style.opacity=1;else if(this.classList.contains("away"))this.style.opacity=0,this.style.transform="translateZ(-100px)";else{var t=(n=this.winIndex,r=this.ws.scrollLength,o=this.ws.windowList.length,i=n-r,(Math.abs(i)>Math.abs(i+o)?i+o:Math.abs(i)>Math.abs(i-o)?i-o:i)*Math.PI/4),e=Math.cos(t);this.style.transform="scale(".concat(.6,", ").concat(.6,") translateZ(").concat(70*e,"px) translateX(").concat(50*Math.sin(t),"%)"),this.style.opacity=Math.pow(e,1.5)}var n,r,o,i;requestAnimationFrame(this.draw.bind(this))}}])&&m(r.prototype,o),i&&m(r,i),s}(g(HTMLElement));customElements.define("app-window",O),window.nativeOpen=window.open;WindowSystem.add();var k=document.createElement("div");k.classList.add("testing"),k.onclick=function(){return alert("gyaaaabdhxjsa")},k.innerText="cfghejkdnbhs\nvgjckanbdsjwb\nhsdsjk",WindowSystem.add(k),WindowSystem.add(),c(window)}],[[12,0,1]]]);