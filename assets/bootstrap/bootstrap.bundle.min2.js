/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t="transitionend",e=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},n=t=>{const n=e(t);return n?document.querySelector(n):null},i=e=>{e.dispatchEvent(new Event(t))},s=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>s(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,o=t=>!(!s(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),a=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),l=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},c=[],u=()=>"rtl"===document.documentElement.dir,d=t=>{var e;e=()=>{const e=l();if(e){const n=t.NAME,i=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=i,t.jQueryInterface)}},"loading"===document.readyState?(c.length||document.addEventListener("DOMContentLoaded",(()=>{c.forEach((t=>t()))})),c.push(e)):e()},h=t=>{"function"==typeof t&&t()},f=(e,n,s=!0)=>{if(!s)return void h(e);const r=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const i=Number.parseFloat(e),s=Number.parseFloat(n);return i||s?(e=e.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(n))):0})(n)+5;let o=!1;const a=({target:i})=>{i===n&&(o=!0,n.removeEventListener(t,a),h(e))};n.addEventListener(t,a),setTimeout((()=>{o||i(n)}),r)},m=/[^.]*(?=\..*)\.|.*/,g=/\..*/,p=/::\d+$/,_={};let v=1;const b={mouseenter:"mouseover",mouseleave:"mouseout"},E=/^(mouseenter|mouseleave)/i,y=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function A(t,e){return e&&`${e}::${v++}`||t.uidEvent||v++}function I(t){const e=A(t);return t.uidEvent=e,_[e]=_[e]||{},_[e]}function w(t,e,n=null){const i=Object.keys(t);for(let s=0,r=i.length;s<r;s++){const r=t[i[s]];if(r.originalHandler===e&&r.delegationSelector===n)return r}return null}function T(t,e,n){const i="string"==typeof e,s=i?n:e;let r=$(t);return y.has(r)||(r=t),[i,s,r]}function O(t,e,n,i,s){if("string"!=typeof e||!t)return;if(n||(n=i,i=null),E.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};i?i=t(i):n=t(n)}const[r,o,a]=T(e,n,i),l=I(t),c=l[a]||(l[a]={}),u=w(c,o,r?n:null);if(u)return void(u.oneOff=u.oneOff&&s);const d=A(o,e.replace(m,"")),h=r?function(t,e,n){return function i(s){const r=t.querySelectorAll(e);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(let a=r.length;a--;)if(r[a]===o)return s.delegateTarget=o,i.oneOff&&L.off(t,s.type,e,n),n.apply(o,[s]);return null}}(t,n,i):function(t,e){return function n(i){return i.delegateTarget=t,n.oneOff&&L.off(t,i.type,e),e.apply(t,[i])}}(t,n);h.delegationSelector=r?n:null,h.originalHandler=o,h.oneOff=s,h.uidEvent=d,c[d]=h,t.addEventListener(a,h,r)}function S(t,e,n,i,s){const r=w(e[n],i,s);r&&(t.removeEventListener(n,r,Boolean(s)),delete e[n][r.uidEvent])}function $(t){return t=t.replace(g,""),b[t]||t}const L={on(t,e,n,i){O(t,e,n,i,!1)},one(t,e,n,i){O(t,e,n,i,!0)},off(t,e,n,i){if("string"!=typeof e||!t)return;const[s,r,o]=T(e,n,i),a=o!==e,l=I(t),c=e.startsWith(".");if(void 0!==r){if(!l||!l[o])return;return void S(t,l,o,r,s?n:null)}c&&Object.keys(l).forEach((n=>{!function(t,e,n,i){const s=e[n]||{};Object.keys(s).forEach((r=>{if(r.includes(i)){const i=s[r];S(t,e,n,i.originalHandler,i.delegationSelector)}}))}(t,l,n,e.slice(1))}));const u=l[o]||{};Object.keys(u).forEach((n=>{const i=n.replace(p,"");if(!a||e.includes(i)){const e=u[n];S(t,l,o,e.originalHandler,e.delegationSelector)}}))},trigger(t,e,n){if("string"!=typeof e||!t)return null;const i=l(),s=$(e),r=e!==s,o=y.has(s);let a,c=!0,u=!0,d=!1,h=null;return r&&i&&(a=i.Event(e,n),i(t).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),d=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(s,c,!0)):h=new CustomEvent(e,{bubbles:c,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((t=>{Object.defineProperty(h,t,{get:()=>n[t]})})),d&&h.preventDefault(),u&&t.dispatchEvent(h),h.defaultPrevented&&void 0!==a&&a.preventDefault(),h}},D=new Map,N={set(t,e,n){D.has(t)||D.set(t,new Map);const i=D.get(t);i.has(e)||0===i.size?i.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(t,e)=>D.has(t)&&D.get(t).get(e)||null,remove(t,e){if(!D.has(t))return;const n=D.get(t);n.delete(e),0===n.size&&D.delete(t)}};class x{constructor(t){(t=r(t))&&(this._element=t,N.set(this._element,this.constructor.DATA_KEY,this))}dispose(){N.remove(this._element,this.constructor.DATA_KEY),L.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,n=!0){f(t,e,n)}static getInstance(t){return N.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.1.3"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const k=".bs.alert",C=`close${k}`,j=`closed${k}`;class M extends x{static get NAME(){return"alert"}close(){if(L.trigger(this._element,C).defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),L.trigger(this._element,j),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=M.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}((t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;L.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),a(this))return;const r=n(this)||this.closest(`.${s}`);t.getOrCreateInstance(r)[e]()}))})(M,"close"),d(M);const X='[data-bs-toggle="button"]';class P extends x{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=P.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function q(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function Y(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}L.on(document,"click.bs.button.data-api",X,(t=>{t.preventDefault();const e=t.target.closest(X);P.getOrCreateInstance(e).toggle()})),d(P);const B={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${Y(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${Y(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((n=>{let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=q(t.dataset[n])})),e},getDataAttribute:(t,e)=>q(t.getAttribute(`data-bs-${Y(e)}`)),offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},H={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const n=[];let i=t.parentNode;for(;i&&i.nodeType===Node.ELEMENT_NODE&&3!==i.nodeType;)i.matches(e)&&n.push(i),i=i.parentNode;return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(e,t).filter((t=>!a(t)&&o(t)))}},K="carousel",V=".bs.carousel",W=".data-api",Q={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},R={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},z="next",F="prev",U="left",Z="right",G={ArrowLeft:Z,ArrowRight:U},J=`slide${V}`,tt=`slid${V}`,et=`keydown${V}`,nt=`mouseenter${V}`,it=`mouseleave${V}`,st=`touchstart${V}`,rt=`touchmove${V}`,ot=`touchend${V}`,at=`pointerdown${V}`,lt=`pointerup${V}`,ct=`dragstart${V}`,ut=`load${V}${W}`,dt=`click${V}${W}`,ht="active",ft=".active.carousel-item";class mt extends x{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=H.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Q}static get NAME(){return K}next(){this._slide(z)}nextWhenVisible(){!document.hidden&&o(this._element)&&this.next()}prev(){this._slide(F)}pause(t){t||(this._isPaused=!0),H.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(i(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=H.findOne(ft,this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void L.one(this._element,tt,(()=>this.to(t)));if(e===t)return this.pause(),void this.cycle();const n=t>e?z:F;this._slide(n,this._items[t])}_getConfig(t){return t={...Q,...B.getDataAttributes(this._element),..."object"==typeof t?t:{}},((t,e,n)=>{Object.keys(n).forEach((i=>{const r=n[i],o=e[i],a=o&&s(o)?"element":null==(l=o)?`${l}`:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(r).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${r}".`)}))})(K,t,R),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=40)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?Z:U)}_addEventListeners(){this._config.keyboard&&L.on(this._element,et,(t=>this._keydown(t))),"hover"===this._config.pause&&(L.on(this._element,nt,(t=>this.pause(t))),L.on(this._element,it,(t=>this.cycle(t)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>this._pointerEvent&&("pen"===t.pointerType||"touch"===t.pointerType),e=e=>{t(e)?this.touchStartX=e.clientX:this._pointerEvent||(this.touchStartX=e.touches[0].clientX)},n=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},i=e=>{t(e)&&(this.touchDeltaX=e.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((t=>this.cycle(t)),500+this._config.interval))};H.find(".carousel-item img",this._element).forEach((t=>{L.on(t,ct,(t=>t.preventDefault()))})),this._pointerEvent?(L.on(this._element,at,(t=>e(t))),L.on(this._element,lt,(t=>i(t))),this._element.classList.add("pointer-event")):(L.on(this._element,st,(t=>e(t))),L.on(this._element,rt,(t=>n(t))),L.on(this._element,ot,(t=>i(t))))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=G[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(t){return this._items=t&&t.parentNode?H.find(".carousel-item",t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const n=t===z;return((t,e,n,i)=>{let s=t.indexOf(e);if(-1===s)return t[!n&&i?t.length-1:0];const r=t.length;return s+=n?1:-1,i&&(s=(s+r)%r),t[Math.max(0,Math.min(s,r-1))]})(this._items,e,n,this._config.wrap)}_triggerSlideEvent(t,e){const n=this._getItemIndex(t),i=this._getItemIndex(H.findOne(ft,this._element));return L.trigger(this._element,J,{relatedTarget:t,direction:e,from:i,to:n})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=H.findOne(".active",this._indicatorsElement);e.classList.remove(ht),e.removeAttribute("aria-current");const n=H.find("[data-bs-target]",this._indicatorsElement);for(let e=0;e<n.length;e++)if(Number.parseInt(n[e].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){n[e].classList.add(ht),n[e].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||H.findOne(ft,this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const n=this._directionToOrder(t),i=H.findOne(ft,this._element),s=this._getItemIndex(i),r=e||this._getItemByOrder(n,i),o=this._getItemIndex(r),a=Boolean(this._interval),l=n===z,c=l?"carousel-item-start":"carousel-item-end",u=l?"carousel-item-next":"carousel-item-prev",d=this._orderToDirection(n);if(r&&r.classList.contains(ht))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(r,d).defaultPrevented)return;if(!i||!r)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r;const h=()=>{L.trigger(this._element,tt,{relatedTarget:r,direction:d,from:s,to:o})};if(this._element.classList.contains("slide")){r.classList.add(u),(t=>{t.offsetHeight})(r),i.classList.add(c),r.classList.add(c);const t=()=>{r.classList.remove(c,u),r.classList.add(ht),i.classList.remove(ht,u,c),this._isSliding=!1,setTimeout(h,0)};this._queueCallback(t,i,!0)}else i.classList.remove(ht),r.classList.add(ht),this._isSliding=!1,h();a&&this.cycle()}_directionToOrder(t){return[Z,U].includes(t)?u()?t===U?F:z:t===U?z:F:t}_orderToDirection(t){return[z,F].includes(t)?u()?t===F?U:Z:t===F?Z:U:t}static carouselInterface(t,e){const n=mt.getOrCreateInstance(t,e);let{_config:i}=n;"object"==typeof e&&(i={...i,...e});const s="string"==typeof e?e:i.slide;if("number"==typeof e)n.to(e);else if("string"==typeof s){if(void 0===n[s])throw new TypeError(`No method named "${s}"`);n[s]()}else i.interval&&i.ride&&(n.pause(),n.cycle())}static jQueryInterface(t){return this.each((function(){mt.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=n(this);if(!e||!e.classList.contains("carousel"))return;const i={...B.getDataAttributes(e),...B.getDataAttributes(this)},s=this.getAttribute("data-bs-slide-to");s&&(i.interval=!1),mt.carouselInterface(e,i),s&&mt.getInstance(e).to(s),t.preventDefault()}}L.on(document,dt,"[data-bs-slide], [data-bs-slide-to]",mt.dataApiClickHandler),L.on(window,ut,(()=>{const t=H.find('[data-bs-ride="carousel"]');for(let e=0,n=t.length;e<n;e++)mt.carouselInterface(t[e],mt.getInstance(t[e]))})),d(mt)}));