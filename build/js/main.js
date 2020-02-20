!function(){"use strict";function d(e){return"function"==typeof e||"[object Function]"===t.call(e)}function u(e){var t,n=(t=Number(e),isNaN(t)?0:0!==t&&isFinite(t)?(0<t?1:-1)*Math.floor(Math.abs(t)):t);return Math.min(Math.max(n,0),r)}var t,r;function n(){this.classList[this.value?"remove":"add"]("placeholder-shown")}function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),Array.from||(Array.from=(t=Object.prototype.toString,r=Math.pow(2,53)-1,function(e,t,n){var r=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,i=1<arguments.length?t:void 0;if(void 0!==i){if(!d(i))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(o=n)}for(var s,a=u(r.length),c=d(this)?Object(new this(a)):new Array(a),l=0;l<a;)s=r[l],c[l]=i?void 0===o?i(s,l):i.call(o,s,l):s,l+=1;return c.length=a,c})),document.querySelectorAll("[placeholder]").forEach(function(e){e.classList[e.value?"remove":"add"]("placeholder-shown"),e.addEventListener("change",n),e.addEventListener("keyup",n)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0==r)return!1;var o,i,s=0|t,a=Math.max(0<=s?s:r-Math.abs(s),0);for(;a<r;){if((o=n[a])===(i=e)||"number"==typeof o&&"number"==typeof i&&isNaN(o)&&isNaN(i))return!0;a++}return!1}}),"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var o=t,i=0;i<r;){var s=n[i];if(e.call(o,s,i,n))return s;i++}},configurable:!0,writable:!0}),function(){if("object"===("undefined"==typeof window?"undefined":o(window)))if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}});else{var v=window.document;e.prototype.THROTTLE_TIMEOUT=100,e.prototype.POLL_INTERVAL=null,e.prototype.USE_MUTATION_OBSERVER=!0,e.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},e.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},e.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},e.prototype.takeRecords=function(){var e=this._queuedEntries.slice();return this._queuedEntries=[],e},e.prototype._initThresholds=function(e){var t=e||[0];return Array.isArray(t)||(t=[t]),t.sort().filter(function(e,t,n){if("number"!=typeof e||isNaN(e)||e<0||1<e)throw new Error("threshold must be a number between 0 and 1 inclusively");return e!==n[t-1]})},e.prototype._parseRootMargin=function(e){var t=(e||"0px").split(/\s+/).map(function(e){var t=/^(-?\d*\.?\d+)(px|%)$/.exec(e);if(!t)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(t[1]),unit:t[2]}});return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},e.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(t(window,"resize",this._checkForIntersections,!0),t(v,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(v,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},e.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,n(window,"resize",this._checkForIntersections,!0),n(v,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},e.prototype._checkForIntersections=function(){var a=this._rootIsInDom(),c=a?this._getRootRect():i();this._observationTargets.forEach(function(e){var t=e.element,n=h(t),r=this._rootContainsTarget(t),o=e.entry,i=a&&r&&this._computeTargetAndRootIntersection(t,c),s=e.entry=new l({time:window.performance&&performance.now&&performance.now(),target:t,boundingClientRect:n,rootBounds:c,intersectionRect:i});o?a&&r?this._hasCrossedThreshold(o,s)&&this._queuedEntries.push(s):o&&o.isIntersecting&&this._queuedEntries.push(s):this._queuedEntries.push(s)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},e.prototype._computeTargetAndRootIntersection=function(e,t){if("none"!=window.getComputedStyle(e).display){for(var n,r,o,i,s,a,c,l,d=h(e),u=w(e),p=!1;!p;){var f=null,m=1==u.nodeType?window.getComputedStyle(u):{};if("none"==m.display)return;if(u==this.root||u==v?(p=!0,f=t):u!=v.body&&u!=v.documentElement&&"visible"!=m.overflow&&(f=h(u)),f&&(n=f,r=d,0,o=Math.max(n.top,r.top),i=Math.min(n.bottom,r.bottom),s=Math.max(n.left,r.left),a=Math.min(n.right,r.right),l=i-o,!(d=0<=(c=a-s)&&0<=l&&{top:o,bottom:i,left:s,right:a,width:c,height:l})))break;u=w(u)}return d}},e.prototype._getRootRect=function(){var e;if(this.root)e=h(this.root);else{var t=v.documentElement,n=v.body;e={top:0,left:0,right:t.clientWidth||n.clientWidth,width:t.clientWidth||n.clientWidth,bottom:t.clientHeight||n.clientHeight,height:t.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(e)},e.prototype._expandRectByRootMargin=function(n){var e=this._rootMarginValues.map(function(e,t){return"px"==e.unit?e.value:e.value*(t%2?n.width:n.height)/100}),t={top:n.top-e[0],right:n.right+e[1],bottom:n.bottom+e[2],left:n.left-e[3]};return t.width=t.right-t.left,t.height=t.bottom-t.top,t},e.prototype._hasCrossedThreshold=function(e,t){var n=e&&e.isIntersecting?e.intersectionRatio||0:-1,r=t.isIntersecting?t.intersectionRatio||0:-1;if(n!==r)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==n||i==r||i<n!=i<r)return!0}},e.prototype._rootIsInDom=function(){return!this.root||r(v,this.root)},e.prototype._rootContainsTarget=function(e){return r(this.root||v,e)},e.prototype._registerInstance=function(){},e.prototype._unregisterInstance=function(){},window.IntersectionObserver=e,window.IntersectionObserverEntry=l}function l(e){this.time=e.time,this.target=e.target,this.rootBounds=e.rootBounds,this.boundingClientRect=e.boundingClientRect,this.intersectionRect=e.intersectionRect||i(),this.isIntersecting=!!e.intersectionRect;var t=this.boundingClientRect,n=t.width*t.height,r=this.intersectionRect,o=r.width*r.height;this.intersectionRatio=n?Number((o/n).toFixed(4)):this.isIntersecting?1:0}function e(e,t){var n,r,o,i=t||{};if("function"!=typeof e)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),r=this.THROTTLE_TIMEOUT,o=null,function(){o=o||setTimeout(function(){n(),o=null},r)}),this._callback=e,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map(function(e){return e.value+e.unit}).join(" ")}function t(e,t,n,r){"function"==typeof e.addEventListener?e.addEventListener(t,n,r||!1):"function"==typeof e.attachEvent&&e.attachEvent("on".concat(t),n)}function n(e,t,n,r){"function"==typeof e.removeEventListener?e.removeEventListener(t,n,r||!1):"function"==typeof e.detatchEvent&&e.detatchEvent("on".concat(t),n)}function h(e){var t;try{t=e.getBoundingClientRect()}catch(e){}return t?(t.width&&t.height||(t={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.right-t.left,height:t.bottom-t.top}),t):i()}function i(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function r(e,t){for(var n=t;n;){if(n==e)return!0;n=w(n)}return!1}function w(e){var t=e.parentNode;return t&&11==t.nodeType&&t.host?t.host:t&&t.assignedSlot?t.assignedSlot.parentNode:t}}();var a=!1;if("undefined"!=typeof window){var i={get passive(){a=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}function c(t){return O.some(function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))})}function l(e){var t=e||window.event;return!!c(t.target)||(1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1))}function p(){setTimeout(function(){void 0!==v&&(document.body.style.paddingRight=v,v=void 0),void 0!==m&&(document.body.style.overflow=m,m=void 0)})}function y(i,e){if(I){if(!i)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(i&&!O.some(function(e){return e.targetElement===i})){var t={targetElement:i,options:e||{}};O=[].concat(s(O),[t]),i.ontouchstart=function(e){1===e.targetTouches.length&&(P=e.targetTouches[0].clientY)},i.ontouchmove=function(e){var t,n,r,o;1===e.targetTouches.length&&(n=i,o=(t=e).targetTouches[0].clientY-P,c(t.target)||(n&&0===n.scrollTop&&0<o||(r=n)&&r.scrollHeight-r.scrollTop<=r.clientHeight&&o<0?l(t):t.stopPropagation()))},j||(document.addEventListener("touchmove",l,a?{passive:!1}:void 0),j=!0)}}else{r=e,setTimeout(function(){if(void 0===v){var e=!!r&&!0===r.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(v=document.body.style.paddingRight,document.body.style.paddingRight="".concat(t,"px"))}void 0===m&&(m=document.body.style.overflow,document.body.style.overflow="hidden")});var n={targetElement:i,options:e||{}};O=[].concat(s(O),[n])}var r}function g(){I?(O.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),j&&(document.removeEventListener("touchmove",l,a?{passive:!1}:void 0),j=!1),O=[],P=-1):(p(),O=[])}function f(t){if(I){if(!t)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");t.ontouchstart=null,t.ontouchmove=null,O=O.filter(function(e){return e.targetElement!==t}),j&&0===O.length&&(document.removeEventListener("touchmove",l,a?{passive:!1}:void 0),j=!1)}else(O=O.filter(function(e){return e.targetElement!==t})).length||p()}var m,v,h,w,_,b,E,S,q,x,k,A,I="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),O=[],j=!1,P=-1;function T(e,t,n){document.body.clientHeight<e.clientHeight||document.body.clientHeight<t?(e.classList.add(E),x=n-e.clientWidth,q=!0):(e.classList.remove(E),q=!1,x=0),e.style.width=q?"".concat(n+x,"px"):""}function R(e){e.key&&(new RegExp("^[0-9]+$").test(e.key)||e.preventDefault())}0!==(h=document.querySelectorAll(".js-form-input")).length&&h.forEach(function(e){e.addEventListener("focus",function(){e.closest(".form-input").classList.remove("error")})}),0!==(w=document.querySelectorAll(".js-form-textarea")).length&&w.forEach(function(e){e.addEventListener("focus",function(){e.closest(".form-textarea").classList.remove("error")})}),b="enabled",E="scrolled",S=document.querySelector(".js-modal-overlay"),q=!1,x=0,window.openPopup=function(e,t){var n=document.getElementById(e),r=n.querySelector(".js-modal-close"),o=0,i=0;function s(){clearTimeout(_),_=setTimeout(function(){n.style.width="",o=n.clientWidth+x,T(n,i,o)},300)}function a(){t(),n.classList.remove(E),n.style.width="",n.classList.remove(b),S.classList.remove(b),document.removeEventListener("keydown",c),S.removeEventListener("click",a),r.removeEventListener("click",a),window.removeEventListener("resize",s)}var c=function(e){"Escape"===e.key&&(e.preventDefault(),a())};n.classList.add(b),S.classList.add(b),i=n.clientHeight,o=n.clientWidth,T(n,i,o),r.addEventListener("click",a),document.addEventListener("keydown",c),setTimeout(function(){S.addEventListener("click",a)},1e3),window.addEventListener("resize",s)},function(){var t=document.querySelector(".gager-modal");if(t){var e=document.querySelectorAll(".js-gager-open");if(e){var n=document.querySelector(".js-gmf"),r=n.querySelector(".js-gmf-phone input"),o=n.querySelector(".js-gmf-name input"),i=(new Cleave(r,{numericOnly:!0,prefix:"+7",noImmediatePrefix:!0,delimiters:[" ( "," ) "," - "," - "],blocks:[2,3,3,2,2]}),function(){r.value="",o.value="",o.removeEventListener("keypress",s),f(t)});e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),window.openPopup("gager-modal",i),o.addEventListener("keypress",s),y(t,{reserveScrollBarGap:!0})})})}}function s(e){if(e.key){var t=new RegExp("^[a-zA-Z ]+$"),n=new RegExp("^[а-яА-Я ]+$");t.test(e.key)||n.test(e.key)||e.preventDefault()}}}(),function(){var t=document.querySelector(".discount-modal");if(t){var e=document.querySelectorAll(".js-discount-open");if(e){var n=t.querySelector(".js-modal-close span");n.classList.remove("visually-hidden"),n.classList.add("discount-modal__close-label");var r=document.querySelector(".js-dmf"),o=r.querySelector(".js-dmf-phone input"),i=r.querySelector(".js-dmf-name input"),s=(new Cleave(o,{numericOnly:!0,prefix:"+7",noImmediatePrefix:!0,delimiters:[" ( "," ) "," - "," - "],blocks:[2,3,3,2,2]}),function(){o.value="",i.value="",i.removeEventListener("keypress",a),f(t)});e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),window.openPopup("discount-modal",s),i.addEventListener("keypress",a),y(t,{reserveScrollBarGap:!0})})})}}function a(e){if(e.key){var t=new RegExp("^[a-zA-Z ]+$"),n=new RegExp("^[а-яА-Я ]+$");t.test(e.key)||n.test(e.key)||e.preventDefault()}}}(),function(){var t=document.querySelector(".call-request-modal");if(t){var e=document.querySelectorAll(".js-call-request-open");if(e){var n=document.querySelector(".js-crmf").querySelector(".js-crmf-phone input"),r=(new Cleave(n,{numericOnly:!0,prefix:"+7",noImmediatePrefix:!0,delimiters:[" ( "," ) "," - "," - "],blocks:[2,3,3,2,2]}),function(){n.value="",f(t)});e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),window.openPopup("call-request-modal",r),y(t,{reserveScrollBarGap:!0})})})}}}(),function(){var t=1024,n=1023,r=320,o=document.querySelector(".header"),e="header--menu-opened";if(o){var i=o.querySelector(".header__toggle"),s=o.querySelector(".header__dropdown"),a=o.querySelector(".header__main-nav-wrap"),c=o.querySelector(".header__main-nav"),l=o.querySelector(".header__calculator"),d=o.querySelector(".header__schedule-wrap");l.addEventListener("click",function(){console.log("Открыть калькулятор")});var u,p=function(){var e=o.getBoundingClientRect();s.style.maxHeight="calc(100vh - ".concat(e.bottom,"px)")},f=-1,m=function(){var e=window.matchMedia("(min-width: ".concat(t,"px)")).matches?t:window.matchMedia("(min-width: ".concat(n,"px)")).matches?n:r;if(f!==e){switch(e){case r:!function(){o.classList.contains("header--menu-opened")&&y(o);var e=new DocumentFragment;e.appendChild(d),e.appendChild(c),s.appendChild(e)}();break;case n:!function(){o.classList.contains("header--menu-opened")&&y(o);var e=new DocumentFragment;e.appendChild(d),e.appendChild(c),s.appendChild(e)}();break;default:g(),a.prepend(c)}f=e}};i.addEventListener("click",function(){o.classList.contains(e)?(o.classList.remove(e),g()):(p(),o.classList.add(e),m(),y(s))}),window.addEventListener("resize",function(){u=u||setTimeout(function(){u=null,m(),p()},10)},!1),m();var v="header__dropdown--window",h="header__dropdown--sub-catalog",w="nav-window__item--active";o.querySelector(".main-nav__item--window .main-nav__link").addEventListener("click",function(){s.classList.contains(v)?s.classList.remove(v):s.classList.add(v)}),o.querySelectorAll(".nav-window__link").forEach(function(e){e.addEventListener("click",function(e){var t=e.target.parentElement;if(t.classList.contains(w))t.classList.remove(w);else{var n=o.querySelector(".".concat(w));n&&n.classList.remove(w),t.classList.add(w)}s.classList.contains(h)?o.querySelector(".".concat(w))||s.classList.remove(h):s.classList.add(h)})})}}(),function(){var e=document.querySelector(".main-slider__container");if(e){var t=e.querySelector(".main-slider__wrapper"),n=e.querySelectorAll(".main-slider__slide");e.classList.add("swiper-container"),t.classList.add("swiper-wrapper"),n.forEach(function(e){e.classList.add("swiper-slide")}),new Swiper(e,{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:20,slidesOffsetBefore:0,slidesOffsetAfter:0,breakpoints:{},pagination:{el:".main-slider__pagination",type:"bullets",bulletElement:"span",bulletClass:"pagination-bullet",bulletActiveClass:"pagination-bullet--active",clickable:!0}})}}(),(k=document.querySelectorAll(".page-pagination__elem")).forEach(function(e){e.addEventListener("click",function(e){k.forEach(function(e){e.classList.remove("page-pagination__elem--active")}),e.target.classList.add("page-pagination__elem--active")})}),function(){var e=document.querySelector(".profile-systems");if(e){var s,t=e.querySelector(".js-pswc-button"),n=e.querySelector(".js-pswc-content"),r=e.querySelector(".js-pswac-button"),o=e.querySelector(".js-pswac-content"),i="active",a="disabled",c=n,l=e.querySelector(".profile-systems__wood-windows"),d=e.querySelectorAll(".profile-systems__wood-windows .products-set__product"),u=e.querySelector(".js-pswc-nav"),p=o,f=e.querySelector(".profile-systems__wood-aluminum-windows"),m=e.querySelectorAll(".profile-systems__wood-aluminum-windows .products-set__product"),v=e.querySelector(".js-pswac-nav");t.addEventListener("click",function(){r.classList.remove(i),t.classList.add(i),o.classList.add(a),n.classList.remove(a),s&&(w(p,f,m),v.classList.add(a)),h(c,l,d,u),u.classList.remove(a)}),r.addEventListener("click",function(){r.classList.add(i),t.classList.remove(i),o.classList.remove(a),n.classList.add(a),w(c,l,d),u.classList.add(a),h(p,f,m,v),v.classList.remove(a)}),t.click()}function h(e,t,n,r){var o,i;e.classList.add("swiper-container"),t.classList.add("swiper-wrapper"),n.forEach(function(e){e.classList.add("swiper-slide")}),r&&(o=r.classList.contains("js-pswc-nav")?".js-pswc-nav .slider-navigation__btn--next":".js-pswac-nav .slider-navigation__btn--next",i=r.classList.contains("js-pswc-nav")?".js-pswc-nav .slider-navigation__btn--prev":".js-pswac-nav .slider-navigation__btn--prev"),s=new Swiper(e,{direction:"horizontal",loop:!0,preloadImages:!0,loadPrevNext:!0,loadPrevNextAmount:3,watchSlidesVisibility:!0,slidesPerView:3,spaceBetween:0,breakpoints:{1023:{slidesPerView:2,loadPrevNextAmount:2,spaceBetween:40,slidesOffsetBefore:0,slidesOffsetAfter:0},767:{slidesPerView:1,loadPrevNextAmount:2,spaceBetween:20,slidesOffsetBefore:0,slidesOffsetAfter:0}},navigation:{nextEl:o,prevEl:i},on:{beforeResize:function(){window.innerWidth<=767&&s.slides.css("width","")}}})}function w(e,t,n){s.destroy(),e.classList.remove("swiper-container"),t.classList.remove("swiper-wrapper"),n.forEach(function(e){e.classList.remove("swiper-slide")})}}(),function(){var e=document.querySelector(".js-wsrf");if(e){var t,n=document.querySelector(".js-wsrf-phone input"),r=document.querySelector(".js-wsrf-name input"),o=document.querySelector(".js-wsrf-submit");new Cleave(n,{numericOnly:!0,prefix:"+7",noImmediatePrefix:!0,delimiters:[" ( "," ) "," - "," - "],blocks:[2,3,3,2,2]});n.dataset.parsleyMinlength="24",r.addEventListener("keypress",function(e){if(e.key){var t=new RegExp("^[a-zA-Z ]+$"),n=new RegExp("^[а-яА-Я ]+$");t.test(e.key)||n.test(e.key)||e.preventDefault()}}),o.addEventListener("click",function(e){e.preventDefault(),t.validate()}),(t=new Parsley.Factory(e,{uiEnabled:!1,focus:"none"})).on("form:success",function(){r.value="",n.value=""}),t.on("field:error",function(e){e.element.closest(".js-wsrf-validate").classList.add("error")}),t.on("field:success",function(e){e.element.closest(".js-wsrf-validate").classList.remove("error")})}}(),function(){var e=document.querySelector(".js-grf");if(e){var t,n=document.querySelector(".js-grf-phone input"),r=document.querySelector(".js-grf-name input"),o=document.querySelector(".js-grf-submit");new Cleave(n,{numericOnly:!0,prefix:"+7",noImmediatePrefix:!0,delimiters:[" ( "," ) "," - "," - "],blocks:[2,3,3,2,2]});n.dataset.parsleyMinlength="24",r.addEventListener("keypress",function(e){if(e.key){var t=new RegExp("^[a-zA-Z ]+$"),n=new RegExp("^[а-яА-Я ]+$");t.test(e.key)||n.test(e.key)||e.preventDefault()}}),o.addEventListener("click",function(e){e.preventDefault(),t.validate()}),(t=new Parsley.Factory(e,{uiEnabled:!1,focus:"none"})).on("form:success",function(){r.value="",n.value=""}),t.on("field:error",function(e){e.element.closest(".js-grf-validate").classList.add("error")}),t.on("field:success",function(e){e.element.closest(".js-grf-validate").classList.remove("error")})}}(),function(){var e=document.querySelector(".reviews-section__container");if(e){var t=e.querySelector(".reviews-section__wrapper"),n=e.querySelectorAll(".review-card");e.classList.add("swiper-container"),t.classList.add("swiper-wrapper"),n.forEach(function(e){e.classList.add("swiper-slide")}),new Swiper(e,{direction:"horizontal",loop:!0,preloadImages:!0,loadPrevNext:!0,loadPrevNextAmount:2,slidesPerView:2,spaceBetween:45,slidesOffsetBefore:0,slidesOffsetAfter:0,breakpoints:{1199:{centeredSlides:!0,slidesPerView:1}},navigation:{nextEl:".reviews-section__navigation-btn-next",prevEl:".reviews-section__navigation-btn-prev"}})}}(),function(){var e=document.querySelector(".work-report__slider-container");if(e){var t=e.querySelector(".work-report__slider-wrapper"),n=e.querySelectorAll(".work-report__slide");e.classList.add("swiper-container"),t.classList.add("swiper-wrapper"),n.forEach(function(e){e.classList.add("swiper-slide")}),new Swiper(e,{direction:"horizontal",loop:!0,preloadImages:!0,loadPrevNext:!0,loadPrevNextAmount:1,centeredSlides:!0,slidesPerView:1,spaceBetween:10,slidesOffsetBefore:0,slidesOffsetAfter:0,breakpoints:{},navigation:{nextEl:".work-report__navigation-btn-next",prevEl:".work-report__navigation-btn-prev"}})}}(),function(){var e=document.querySelector(".brands__container");if(e){var t=e.querySelector(".brands__list"),n=e.querySelectorAll(".brands__brand-item");e.classList.add("swiper-container"),t.classList.add("swiper-wrapper"),n.forEach(function(e){e.classList.add("swiper-slide")}),new Swiper(e,{direction:"horizontal",loop:!0,preloadImages:!0,loadPrevNext:!0,loadPrevNextAmount:2,slidesPerView:"auto",spaceBetween:30,slidesOffsetBefore:0,slidesOffsetAfter:0,breakpoints:{},navigation:{nextEl:".brands__navigation-btn-next",prevEl:".brands__navigation-btn-prev"}})}}(),function(){var e=document.querySelector(".examples");if(e){var t=e.querySelector(".examples__gallery-top"),n=t.querySelector(".examples__wrapper"),r=t.querySelectorAll(".examples__slide"),o=e.querySelector(".examples__gallery-thumbs"),i=o.querySelector(".thumbs__wrapper"),s=o.querySelectorAll(".thumbs__slide");!function(){t.classList.add("swiper-container"),o.classList.add("swiper-container"),n.classList.add("swiper-wrapper"),i.classList.add("swiper-wrapper"),r.forEach(function(e){e.classList.add("swiper-slide")}),s.forEach(function(e){e.classList.add("swiper-slide")});var e=new Swiper(o,{spaceBetween:8,slidesPerView:4,watchSlidesVisibility:!0,watchSlidesProgress:!0});new Swiper(t,{preloadImages:!0,loadPrevNext:!0,loadPrevNextAmount:2,spaceBetween:10,breakpoints:{},navigation:{nextEl:".examples__navigation-btn-next",prevEl:".examples__navigation-btn-prev"},thumbs:{swiper:e}})}()}}(),function(){var e=document.querySelector(".popular-windows");if(e){var n,t=e.querySelectorAll(".popular-windows__models-set"),r=e.querySelectorAll(".js-pwc-button"),o="active",i="disabled";r.forEach(function(t){t.addEventListener("click",function(e){e.preventDefault(),n.classList.remove(o),(n=t).classList.add(o),s()})}),r.forEach(function(e){e.classList.remove(o)}),(n=r[0]).classList.add(o),s(),r[0].click()}function s(){t.forEach(function(e){e.classList.add(i),e.dataset.pwc===n.dataset.pwc&&e.classList.remove(i)})}}(),function(){var e=document.querySelector(".promotions-section");if(e){var t=e.querySelector(".promotions-section__slider-container"),n=t.querySelector(".promotions-section__promo-list"),r=t.querySelectorAll(".promotions-section__promo-item"),o=e.querySelectorAll(".promotions-section__content"),i=t.querySelectorAll(".promotions-section__promo-item"),s="disabled";i.forEach(function(t){t.addEventListener("click",function(e){e.preventDefault(),a(t)})}),t.classList.add("swiper-container"),n.classList.add("swiper-wrapper"),r.forEach(function(e){e.classList.add("swiper-slide")}),new Swiper(t,{direction:"horizontal",loop:!1,preloadImages:!0,loadPrevNext:!0,loadPrevNextAmount:2,slidesPerView:3,spaceBetween:55,slidesOffsetBefore:20,slidesOffsetAfter:20,breakpoints:{1199:{spaceBetween:40},1023:{spaceBetween:30,slidesPerView:2,slidesOffsetBefore:0,slidesOffsetAfter:0},579:{spaceBetween:30,slidesPerView:1,slidesOffsetBefore:0,slidesOffsetAfter:0}},navigation:{nextEl:".promotions-section__navigation-btn-next",prevEl:".promotions-section__navigation-btn-prev"}}),a(i[0])}function a(t){o.forEach(function(e){e.classList.add(s),e.dataset.promoControl===t.dataset.promoControl&&e.classList.remove(s)})}}(),function(){if(document.querySelector("#map")){var e=L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}),t=L.latLng(55.859069,37.602726),n=L.map("map",{center:t,zoom:14,layers:[e]}),o=L.layerGroup(),i=new L.Icon({iconUrl:"img/logos/map-big-logo.png",shadowUrl:"img/logos/map-big-logo-shadow.png",iconSize:[85,26],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[85,26]});[[55.859069,37.602726,'<div><span class="img"><img src="img/logos/logo-footer.png" width="300" height="150"></span><br><h3>Наш офис:</h3><br>г. Москва, Отрадная, 2<br>ежедневно с 10:00 - 20:00<br><hr>e-mail: window@winfin.ru<br><b>+7 (499) 904 14 88  +7(499) 904 01 71</b><br>Viber / WhatsApp +79169495077</div>',"Офис компании WINFIN"]].forEach(function(e){var t=e[2],n=e[3],r=L.marker(new L.LatLng(e[0],e[1]),{icon:i,title:n});r.bindPopup(t),o.addLayer(r)}),n.addLayer(o)}}(),function(){var e=document.querySelector(".certificates");if(e){var t=e.querySelector(".certificates__container"),n=t.querySelector(".certificates__wrapper"),r=t.querySelectorAll(".certificates__slide");t.classList.add("swiper-container"),n.classList.add("swiper-wrapper"),r.forEach(function(e){e.classList.add("swiper-slide")}),new Swiper(t,{direction:"horizontal",loop:!0,preloadImages:!0,loadPrevNext:!0,loadPrevNextAmount:1,slidesPerView:5,spaceBetween:10,slidesOffsetBefore:0,slidesOffsetAfter:0,breakpoints:{1023:{slidesPerView:3,slidesOffsetBefore:0,slidesOffsetAfter:0},579:{slidesPerView:2}},navigation:{nextEl:".certificates__navigation-btn-next",prevEl:".certificates__navigation-btn-prev"}})}}(),(A=document.querySelector(".js-cf"))&&A.querySelectorAll(".js-cf-size input").forEach(function(e){e.addEventListener("keypress",R)}),function(){var e=document.querySelector(".js-omf");if(e){var t,n=document.querySelector(".js-omf-phone input"),r=document.querySelector(".js-omf-submit");new Cleave(n,{numericOnly:!0,prefix:"+7",noImmediatePrefix:!0,delimiters:[" ( "," ) "," - "," - "],blocks:[2,3,3,2,2]});n.dataset.parsleyMinlength="24",r.addEventListener("click",function(e){e.preventDefault(),t.validate()}),(t=new Parsley.Factory(e,{uiEnabled:!1,focus:"none"})).on("form:success",function(){}),t.on("field:error",function(e){e.element.closest(".js-omf-validate").classList.add("error")}),t.on("field:success",function(e){e.element.closest(".js-omf-validate").classList.remove("error")})}}(),function(){var e=document.querySelector(".multi-examples");if(e){var n,r,o,i,s,a,c,l,d,t=e.querySelectorAll(".multi-examples__set"),u=e.querySelectorAll(".js-mec-control-button"),p="active",f="disabled";u.forEach(function(t){t.addEventListener("click",function(e){e.preventDefault(),n.classList.remove(p),(n=t).classList.add(p),o.destroy(),r.destroy(),i.classList.remove("swiper-container"),s.classList.remove("swiper-wrapper"),a.forEach(function(e){e.classList.remove("swiper-slide")}),c.classList.remove("swiper-container"),l.classList.remove("swiper-wrapper"),d.forEach(function(e){e.classList.remove("swiper-slide")}),m()})}),u.forEach(function(e){e.classList.remove(p)}),(n=u[0]).classList.add(p),m(),u[0].click()}function m(){t.forEach(function(e){var t;e.classList.add(f),e.dataset.mecControl===n.dataset.mecControl&&(e.classList.remove(f),i=(t=e).querySelector(".multi-examples__gallery-top"),s=i.querySelector(".multi-examples__wrapper"),a=i.querySelectorAll(".multi-examples__slide"),c=t.querySelector(".multi-examples__gallery-thumbs"),l=c.querySelector(".multi-examples__thumbs-wrapper"),d=c.querySelectorAll(".multi-examples__thumbs-slide"),i.classList.add("swiper-container"),c.classList.add("swiper-container"),s.classList.add("swiper-wrapper"),l.classList.add("swiper-wrapper"),a.forEach(function(e){e.classList.add("swiper-slide")}),d.forEach(function(e){e.classList.add("swiper-slide")}),r=new Swiper(c,{spaceBetween:8,slidesPerView:4,watchSlidesVisibility:!0,watchSlidesProgress:!0}),o=new Swiper(i,{preloadImages:!0,loadPrevNext:!0,loadPrevNextAmount:2,spaceBetween:10,breakpoints:{},navigation:{nextEl:".multi-examples__navigation-btn-next",prevEl:".multi-examples__navigation-btn-prev"},thumbs:{swiper:r}}))})}}()}();
//# sourceMappingURL=main.js.map
