!function(){"use strict";function u(e){return"function"==typeof e||"[object Function]"===t.call(e)}function d(e){var t,n=(t=Number(e),isNaN(t)?0:0!==t&&isFinite(t)?(0<t?1:-1)*Math.floor(Math.abs(t)):t);return Math.min(Math.max(n,0),o)}var t,o;function n(){this.classList[this.value?"remove":"add"]("placeholder-shown")}function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),Array.from||(Array.from=(t=Object.prototype.toString,o=Math.pow(2,53)-1,function(e,t,n){var o=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var r,i=1<arguments.length?t:void 0;if(void 0!==i){if(!u(i))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(r=n)}for(var s,c=d(o.length),a=u(this)?Object(new this(c)):new Array(c),l=0;l<c;)s=o[l],a[l]=i?void 0===r?i(s,l):i.call(r,s,l):s,l+=1;return a.length=c,a})),document.querySelectorAll("[placeholder]").forEach(function(e){e.classList[e.value?"remove":"add"]("placeholder-shown"),e.addEventListener("change",n),e.addEventListener("keyup",n)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0==o)return!1;var r,i,s=0|t,c=Math.max(0<=s?s:o-Math.abs(s),0);for(;c<o;){if((r=n[c])===(i=e)||"number"==typeof r&&"number"==typeof i&&isNaN(r)&&isNaN(i))return!0;c++}return!1}}),"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var r=t,i=0;i<o;){var s=n[i];if(e.call(r,s,i,n))return s;i++}},configurable:!0,writable:!0}),function(){if("object"===("undefined"==typeof window?"undefined":r(window)))if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}});else{var v=window.document;e.prototype.THROTTLE_TIMEOUT=100,e.prototype.POLL_INTERVAL=null,e.prototype.USE_MUTATION_OBSERVER=!0,e.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},e.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},e.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},e.prototype.takeRecords=function(){var e=this._queuedEntries.slice();return this._queuedEntries=[],e},e.prototype._initThresholds=function(e){var t=e||[0];return Array.isArray(t)||(t=[t]),t.sort().filter(function(e,t,n){if("number"!=typeof e||isNaN(e)||e<0||1<e)throw new Error("threshold must be a number between 0 and 1 inclusively");return e!==n[t-1]})},e.prototype._parseRootMargin=function(e){var t=(e||"0px").split(/\s+/).map(function(e){var t=/^(-?\d*\.?\d+)(px|%)$/.exec(e);if(!t)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(t[1]),unit:t[2]}});return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},e.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(t(window,"resize",this._checkForIntersections,!0),t(v,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(v,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},e.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,n(window,"resize",this._checkForIntersections,!0),n(v,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},e.prototype._checkForIntersections=function(){var c=this._rootIsInDom(),a=c?this._getRootRect():i();this._observationTargets.forEach(function(e){var t=e.element,n=m(t),o=this._rootContainsTarget(t),r=e.entry,i=c&&o&&this._computeTargetAndRootIntersection(t,a),s=e.entry=new l({time:window.performance&&performance.now&&performance.now(),target:t,boundingClientRect:n,rootBounds:a,intersectionRect:i});r?c&&o?this._hasCrossedThreshold(r,s)&&this._queuedEntries.push(s):r&&r.isIntersecting&&this._queuedEntries.push(s):this._queuedEntries.push(s)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},e.prototype._computeTargetAndRootIntersection=function(e,t){if("none"!=window.getComputedStyle(e).display){for(var n,o,r,i,s,c,a,l,u=m(e),d=y(e),f=!1;!f;){var p=null,h=1==d.nodeType?window.getComputedStyle(d):{};if("none"==h.display)return;if(d==this.root||d==v?(f=!0,p=t):d!=v.body&&d!=v.documentElement&&"visible"!=h.overflow&&(p=m(d)),p&&(n=p,o=u,0,r=Math.max(n.top,o.top),i=Math.min(n.bottom,o.bottom),s=Math.max(n.left,o.left),c=Math.min(n.right,o.right),l=i-r,!(u=0<=(a=c-s)&&0<=l&&{top:r,bottom:i,left:s,right:c,width:a,height:l})))break;d=y(d)}return u}},e.prototype._getRootRect=function(){var e;if(this.root)e=m(this.root);else{var t=v.documentElement,n=v.body;e={top:0,left:0,right:t.clientWidth||n.clientWidth,width:t.clientWidth||n.clientWidth,bottom:t.clientHeight||n.clientHeight,height:t.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(e)},e.prototype._expandRectByRootMargin=function(n){var e=this._rootMarginValues.map(function(e,t){return"px"==e.unit?e.value:e.value*(t%2?n.width:n.height)/100}),t={top:n.top-e[0],right:n.right+e[1],bottom:n.bottom+e[2],left:n.left-e[3]};return t.width=t.right-t.left,t.height=t.bottom-t.top,t},e.prototype._hasCrossedThreshold=function(e,t){var n=e&&e.isIntersecting?e.intersectionRatio||0:-1,o=t.isIntersecting?t.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},e.prototype._rootIsInDom=function(){return!this.root||o(v,this.root)},e.prototype._rootContainsTarget=function(e){return o(this.root||v,e)},e.prototype._registerInstance=function(){},e.prototype._unregisterInstance=function(){},window.IntersectionObserver=e,window.IntersectionObserverEntry=l}function l(e){this.time=e.time,this.target=e.target,this.rootBounds=e.rootBounds,this.boundingClientRect=e.boundingClientRect,this.intersectionRect=e.intersectionRect||i(),this.isIntersecting=!!e.intersectionRect;var t=this.boundingClientRect,n=t.width*t.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function e(e,t){var n,o,r,i=t||{};if("function"!=typeof e)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,r=null,function(){r=r||setTimeout(function(){n(),r=null},o)}),this._callback=e,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map(function(e){return e.value+e.unit}).join(" ")}function t(e,t,n,o){"function"==typeof e.addEventListener?e.addEventListener(t,n,o||!1):"function"==typeof e.attachEvent&&e.attachEvent("on".concat(t),n)}function n(e,t,n,o){"function"==typeof e.removeEventListener?e.removeEventListener(t,n,o||!1):"function"==typeof e.detatchEvent&&e.detatchEvent("on".concat(t),n)}function m(e){var t;try{t=e.getBoundingClientRect()}catch(e){}return t?(t.width&&t.height||(t={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.right-t.left,height:t.bottom-t.top}),t):i()}function i(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function o(e,t){for(var n=t;n;){if(n==e)return!0;n=y(n)}return!1}function y(e){var t=e.parentNode;return t&&11==t.nodeType&&t.host?t.host:t&&t.assignedSlot?t.assignedSlot.parentNode:t}}();var c=!1;if("undefined"!=typeof window){var i={get passive(){c=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}function a(t){return q.some(function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))})}function l(e){var t=e||window.event;return!!a(t.target)||(1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1))}function f(){setTimeout(function(){void 0!==v&&(document.body.style.paddingRight=v,v=void 0),void 0!==h&&(document.body.style.overflow=h,h=void 0)})}function w(i,e){if(I){if(!i)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(i&&!q.some(function(e){return e.targetElement===i})){var t={targetElement:i,options:e||{}};q=[].concat(s(q),[t]),i.ontouchstart=function(e){1===e.targetTouches.length&&(j=e.targetTouches[0].clientY)},i.ontouchmove=function(e){var t,n,o,r;1===e.targetTouches.length&&(n=i,r=(t=e).targetTouches[0].clientY-j,a(t.target)||(n&&0===n.scrollTop&&0<r||(o=n)&&o.scrollHeight-o.scrollTop<=o.clientHeight&&r<0?l(t):t.stopPropagation()))},T||(document.addEventListener("touchmove",l,c?{passive:!1}:void 0),T=!0)}}else{o=e,setTimeout(function(){if(void 0===v){var e=!!o&&!0===o.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(v=document.body.style.paddingRight,document.body.style.paddingRight="".concat(t,"px"))}void 0===h&&(h=document.body.style.overflow,document.body.style.overflow="hidden")});var n={targetElement:i,options:e||{}};q=[].concat(s(q),[n])}var o}function g(){I?(q.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),T&&(document.removeEventListener("touchmove",l,c?{passive:!1}:void 0),T=!1),q=[],j=-1):(f(),q=[])}function p(t){if(I){if(!t)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");t.ontouchstart=null,t.ontouchmove=null,q=q.filter(function(e){return e.targetElement!==t}),T&&0===q.length&&(document.removeEventListener("touchmove",l,c?{passive:!1}:void 0),T=!1)}else(q=q.filter(function(e){return e.targetElement!==t})).length||f()}var h,v,m,y,b,E,_,L,S,k,I="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),q=[],T=!1,j=-1;function R(e,t,n){document.body.clientHeight<e.clientHeight||document.body.clientHeight<t?(e.classList.add(E),S=n-e.clientWidth,L=!0):(e.classList.remove(E),L=!1,S=0),e.style.width=L?"".concat(n+S,"px"):""}0!==(m=document.querySelectorAll(".js-form-input")).length&&m.forEach(function(e){e.addEventListener("focus",function(){e.closest(".form-input").classList.remove("error")})}),b="enabled",E="scrolled",_=document.querySelector(".js-modal-overlay"),L=!1,S=0,window.openPopup=function(e,t){var n=document.getElementById(e),o=n.querySelector(".js-modal-close"),r=0,i=0;function s(){clearTimeout(y),y=setTimeout(function(){n.style.width="",r=n.clientWidth+S,R(n,i,r)},300)}function c(){t(),n.classList.remove(E),n.style.width="",n.classList.remove(b),_.classList.remove(b),document.removeEventListener("keydown",a),_.removeEventListener("click",c),o.removeEventListener("click",c),window.removeEventListener("resize",s)}var a=function(e){"Escape"===e.key&&(e.preventDefault(),c())};n.classList.add(b),_.classList.add(b),i=n.clientHeight,r=n.clientWidth,R(n,i,r),o.addEventListener("click",c),document.addEventListener("keydown",a),setTimeout(function(){_.addEventListener("click",c)},1e3),window.addEventListener("resize",s)},function(){var t=document.querySelector(".gager-modal");if(t){var e=document.querySelectorAll(".js-gager-open");if(e){var n=document.querySelector(".js-gmf"),o=n.querySelector(".js-gmf-phone input"),r=n.querySelector(".js-gmf-name input"),i=(new Cleave(o,{numericOnly:!0,prefix:"+7",noImmediatePrefix:!0,delimiters:[" ( "," ) "," - "," - "],blocks:[2,3,3,2,2]}),function(){o.value="",r.value="",r.removeEventListener("keypress",s),p(t)});e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),window.openPopup("gager-modal",i),r.addEventListener("keypress",s),w(t,{reserveScrollBarGap:!0})})})}}function s(e){if(e.key){var t=new RegExp("^[a-zA-Z ]+$"),n=new RegExp("^[а-яА-Я ]+$");t.test(e.key)||n.test(e.key)||e.preventDefault()}}}(),function(){var t=document.querySelector(".discount-modal");if(t){var e=document.querySelectorAll(".js-discount-open");if(e){var n=t.querySelector(".js-modal-close span");n.classList.remove("visually-hidden"),n.classList.add("discount-modal__close-label");var o=document.querySelector(".js-dmf"),r=o.querySelector(".js-dmf-phone input"),i=o.querySelector(".js-dmf-name input"),s=(new Cleave(r,{numericOnly:!0,prefix:"+7",noImmediatePrefix:!0,delimiters:[" ( "," ) "," - "," - "],blocks:[2,3,3,2,2]}),function(){r.value="",i.value="",i.removeEventListener("keypress",c),p(t)});e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),window.openPopup("discount-modal",s),i.addEventListener("keypress",c),w(t,{reserveScrollBarGap:!0})})})}}function c(e){if(e.key){var t=new RegExp("^[a-zA-Z ]+$"),n=new RegExp("^[а-яА-Я ]+$");t.test(e.key)||n.test(e.key)||e.preventDefault()}}}(),function(){var t=document.querySelector(".call-request-modal");if(t){var e=document.querySelectorAll(".js-call-request-open");if(e){var n=document.querySelector(".js-crmf").querySelector(".js-crmf-phone input"),o=(new Cleave(n,{numericOnly:!0,prefix:"+7",noImmediatePrefix:!0,delimiters:[" ( "," ) "," - "," - "],blocks:[2,3,3,2,2]}),function(){n.value="",p(t)});e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),window.openPopup("call-request-modal",o),w(t,{reserveScrollBarGap:!0})})})}}}(),function(){var t=1024,n=1023,o=320,r=document.querySelector(".header"),e="header--menu-opened";if(r){var i=r.querySelector(".header__toggle"),s=r.querySelector(".header__dropdown"),c=r.querySelector(".header__main-nav-wrap"),a=r.querySelector(".header__main-nav"),l=r.querySelector(".header__calculator"),u=r.querySelector(".header__schedule-wrap");l.addEventListener("click",function(){console.log("Открыть калькулятор")});var d,f=function(){var e=r.getBoundingClientRect();s.style.maxHeight="calc(100vh - ".concat(e.bottom,"px)")},p=-1,h=function(){var e=window.matchMedia("(min-width: ".concat(t,"px)")).matches?t:window.matchMedia("(min-width: ".concat(n,"px)")).matches?n:o;if(p!==e){switch(e){case o:!function(){r.classList.contains("header--menu-opened")&&w(r);var e=new DocumentFragment;e.appendChild(u),e.appendChild(a),s.appendChild(e)}();break;case n:!function(){r.classList.contains("header--menu-opened")&&w(r);var e=new DocumentFragment;e.appendChild(u),e.appendChild(a),s.appendChild(e)}();break;default:g(),c.prepend(a)}p=e}};i.addEventListener("click",function(){r.classList.contains(e)?(r.classList.remove(e),g()):(f(),r.classList.add(e),h(),w(s))}),window.addEventListener("resize",function(){d=d||setTimeout(function(){d=null,h(),f()},10)},!1),h();var v="header__dropdown--window",m="header__dropdown--sub-catalog",y="nav-window__item--active";r.querySelector(".main-nav__item--window .main-nav__link").addEventListener("click",function(){s.classList.contains(v)?s.classList.remove(v):s.classList.add(v)}),r.querySelectorAll(".nav-window__link").forEach(function(e){e.addEventListener("click",function(e){var t=e.target.parentElement;if(t.classList.contains(y))t.classList.remove(y);else{var n=r.querySelector(".".concat(y));n&&n.classList.remove(y),t.classList.add(y)}s.classList.contains(m)?r.querySelector(".".concat(y))||s.classList.remove(m):s.classList.add(m)})})}}(),(k=document.querySelectorAll(".page-pagination__elem")).forEach(function(e){e.addEventListener("click",function(e){k.forEach(function(e){e.classList.remove("page-pagination__elem--active")}),e.target.classList.add("page-pagination__elem--active")})}),function(){var e=document.querySelector(".profile-systems");if(e){var s,t=e.querySelector(".js-pswc-button"),n=e.querySelector(".js-pswc-content"),o=e.querySelector(".js-pswac-button"),r=e.querySelector(".js-pswac-content"),i="active",c="disabled",a=n,l=e.querySelector(".profile-systems__wood-windows"),u=e.querySelectorAll(".profile-systems__wood-windows .products-set__product"),d=e.querySelector(".js-pswc-nav"),f=r,p=e.querySelector(".profile-systems__wood-aluminum-windows"),h=e.querySelectorAll(".profile-systems__wood-aluminum-windows .products-set__product"),v=e.querySelector(".js-pswac-nav");t.addEventListener("click",function(){o.classList.remove(i),t.classList.add(i),r.classList.add(c),n.classList.remove(c),s&&(y(f,p,h),v.classList.add(c)),m(a,l,u,d),d.classList.remove(c)}),o.addEventListener("click",function(){o.classList.add(i),t.classList.remove(i),r.classList.remove(c),n.classList.add(c),y(a,l,u),d.classList.add(c),m(f,p,h,v),v.classList.remove(c)}),t.click()}function m(e,t,n,o){var r,i;e.classList.add("swiper-container"),t.classList.add("swiper-wrapper"),n.forEach(function(e){e.classList.add("swiper-slide")}),o&&(r=o.classList.contains("js-pswc-nav")?".js-pswc-nav .slider-navigation__btn--next":".js-pswac-nav .slider-navigation__btn--next",i=o.classList.contains("js-pswc-nav")?".js-pswc-nav .slider-navigation__btn--prev":".js-pswac-nav .slider-navigation__btn--prev"),s=new Swiper(e,{direction:"horizontal",loop:!0,preloadImages:!0,loadPrevNext:!0,loadPrevNextAmount:3,watchSlidesVisibility:!0,slidesPerView:3,spaceBetween:0,breakpoints:{1023:{slidesPerView:2,loadPrevNextAmount:2,spaceBetween:40,slidesOffsetBefore:0,slidesOffsetAfter:0},767:{slidesPerView:1,loadPrevNextAmount:2,spaceBetween:20,slidesOffsetBefore:0,slidesOffsetAfter:0}},navigation:{nextEl:r,prevEl:i},on:{beforeResize:function(){window.innerWidth<=767&&s.slides.css("width","")}}})}function y(e,t,n){s.destroy(),e.classList.remove("swiper-container"),t.classList.remove("swiper-wrapper"),n.forEach(function(e){e.classList.remove("swiper-slide")})}}(),function(){var e=document.querySelector(".js-wsrf");if(e){var t,n=document.querySelector(".js-wsrf-phone input"),o=document.querySelector(".js-wsrf-name input"),r=document.querySelector(".js-wsrf-submit");new Cleave(n,{numericOnly:!0,prefix:"+7",noImmediatePrefix:!0,delimiters:[" ( "," ) "," - "," - "],blocks:[2,3,3,2,2]});n.dataset.parsleyMinlength="24",o.addEventListener("keypress",function(e){if(e.key){var t=new RegExp("^[a-zA-Z ]+$"),n=new RegExp("^[а-яА-Я ]+$");t.test(e.key)||n.test(e.key)||e.preventDefault()}}),r.addEventListener("click",function(e){e.preventDefault(),t.validate()}),(t=new Parsley.Factory(e,{uiEnabled:!1,focus:"none"})).on("form:success",function(){o.value="",n.value=""}),t.on("field:error",function(e){e.element.closest(".js-wsrf-validate").classList.add("error")}),t.on("field:success",function(e){e.element.closest(".js-wsrf-validate").classList.remove("error")})}}(),function(){var e=document.querySelector(".js-grf");if(e){var t,n=document.querySelector(".js-grf-phone input"),o=document.querySelector(".js-grf-name input"),r=document.querySelector(".js-grf-submit");new Cleave(n,{numericOnly:!0,prefix:"+7",noImmediatePrefix:!0,delimiters:[" ( "," ) "," - "," - "],blocks:[2,3,3,2,2]});n.dataset.parsleyMinlength="24",o.addEventListener("keypress",function(e){if(e.key){var t=new RegExp("^[a-zA-Z ]+$"),n=new RegExp("^[а-яА-Я ]+$");t.test(e.key)||n.test(e.key)||e.preventDefault()}}),r.addEventListener("click",function(e){e.preventDefault(),t.validate()}),(t=new Parsley.Factory(e,{uiEnabled:!1,focus:"none"})).on("form:success",function(){o.value="",n.value=""}),t.on("field:error",function(e){e.element.closest(".js-grf-validate").classList.add("error")}),t.on("field:success",function(e){e.element.closest(".js-grf-validate").classList.remove("error")})}}(),function(){var e=document.querySelector(".reviews-section__container");if(e){var t=e.querySelector(".reviews-section__wrapper"),n=e.querySelectorAll(".review-card");e.classList.add("swiper-container"),t.classList.add("swiper-wrapper"),n.forEach(function(e){e.classList.add("swiper-slide")}),new Swiper(e,{direction:"horizontal",loop:!0,preloadImages:!0,loadPrevNext:!0,loadPrevNextAmount:2,slidesPerView:2,spaceBetween:45,slidesOffsetBefore:0,slidesOffsetAfter:0,breakpoints:{1199:{centeredSlides:!0,slidesPerView:1}},navigation:{nextEl:".reviews-section__navigation-btn-next",prevEl:".reviews-section__navigation-btn-prev"}})}}()}();
//# sourceMappingURL=main.js.map
