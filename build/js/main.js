(function () {
  'use strict';

  // region NodeList.forEach
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  } // endregion
  // region Element.matches


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  } // endregion
  // region Element.closest


  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  } // endregion
  // region Array.from


  if (!Array.from) {
    Array.from = function () {
      var toStr = Object.prototype.toString;

      var isCallable = function isCallable(fn) {
        return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
      };

      var toInteger = function toInteger(value) {
        var number = Number(value);

        if (isNaN(number)) {
          return 0;
        }

        if (number === 0 || !isFinite(number)) {
          return number;
        }

        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };

      var maxSafeInteger = Math.pow(2, 53) - 1;

      var toLength = function toLength(value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      }; // The length property of the from method is 1.


      return function from(arrayLike
      /* , mapFn, thisArg */
      ) {
        // 1. Let C be the this value.
        var C = this; // 2. Let items be ToObject(arrayLike).

        var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

        if (arrayLike == null) {
          throw new TypeError('Array.from requires an array-like object - not null or undefined');
        } // 4. If mapfn is undefined, then let mapping be false.


        var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
        var T;

        if (typeof mapFn !== 'undefined') {
          // 5. else
          // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
          if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
          } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


          if (arguments.length > 2) {
            T = arguments[2];
          }
        } // 10. Let lenValue be Get(items, "length").
        // 11. Let len be ToLength(lenValue).


        var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
        // 13. a. Let A be the result of calling the [[Construct]] internal method
        // of C with an argument list containing the single item len.
        // 14. a. Else, Let A be ArrayCreate(len).

        var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

        var k = 0; // 17. Repeat, while k < len… (also steps a - h)

        var kValue;

        while (k < len) {
          kValue = items[k];

          if (mapFn) {
            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
          } else {
            A[k] = kValue;
          }

          k += 1;
        } // 18. Let putStatus be Put(A, "length", len, true).


        A.length = len; // 20. Return A.

        return A;
      };
    }();
  } // endregion
  // region Placeholder support with .placeholder-shown


  function placeholderPolyfill() {
    this.classList[this.value ? 'remove' : 'add']('placeholder-shown');
  }

  document.querySelectorAll('[placeholder]').forEach(function (el) {
    el.classList[el.value ? 'remove' : 'add']('placeholder-shown');
    el.addEventListener('change', placeholderPolyfill);
    el.addEventListener('keyup', placeholderPolyfill);
  }); // endregion
  // region Array.prototype.includes
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#Polyfill

  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function value(valueToFind, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);
        var len = o.length >>> 0;

        if (len === 0) {
          return false;
        }

        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        }

        while (k < len) {
          if (sameValueZero(o[k], valueToFind)) {
            return true;
          }

          k++;
        }

        return false;
      }
    });
  } // endregion
  // region window.Event


  (function () {
    if (typeof window.CustomEvent === 'function') return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: null
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })(); // endregion
  // region Array.prototype.find


  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function value(predicate) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);
        var len = o.length >>> 0;

        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }

        var thisArg = arguments[1];
        var k = 0;

        while (k < len) {
          var kValue = o[k];

          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }

          k++;
        }

        return undefined;
      },
      configurable: true,
      writable: true
    });
  } // endregion

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /**
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
   *
   *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
   *
   */
  (function () {
    // Exit early if we're not running in a browser.
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object') {
      return;
    } // Exit early if all IntersectionObserver and IntersectionObserverEntry
    // features are natively supported.


    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
      // Minimal polyfill for Edge 15's lack of `isIntersecting`
      // See: https://github.com/w3c/IntersectionObserver/issues/211
      if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
        Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
          get: function get() {
            return this.intersectionRatio > 0;
          }
        });
      }

      return;
    }
    /**
     * A local reference to the document.
     */


    var _window = window,
        document = _window.document;
    /**
     * Creates the global IntersectionObserverEntry constructor.
     * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
     * @param {Object} entry A dictionary of instance properties.
     * @constructor
     */

    function IntersectionObserverEntry(entry) {
      this.time = entry.time;
      this.target = entry.target;
      this.rootBounds = entry.rootBounds;
      this.boundingClientRect = entry.boundingClientRect;
      this.intersectionRect = entry.intersectionRect || getEmptyRect();
      this.isIntersecting = !!entry.intersectionRect; // Calculates the intersection ratio.

      var targetRect = this.boundingClientRect;
      var targetArea = targetRect.width * targetRect.height;
      var intersectionRect = this.intersectionRect;
      var intersectionArea = intersectionRect.width * intersectionRect.height; // Sets intersection ratio.

      if (targetArea) {
        // Round the intersection ratio to avoid floating point math issues:
        // https://github.com/w3c/IntersectionObserver/issues/324
        this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
      } else {
        // If area is zero and is intersecting, sets to 1, otherwise to 0
        this.intersectionRatio = this.isIntersecting ? 1 : 0;
      }
    }
    /**
     * Creates the global IntersectionObserver constructor.
     * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
     * @param {Function} callback The function to be invoked after intersection
     *     changes have queued. The function is not invoked if the queue has
     *     been emptied by calling the `takeRecords` method.
     * @param {Object=} opt_options Optional configuration options.
     * @constructor
     */


    function IntersectionObserver(callback, opt_options) {
      var options = opt_options || {};

      if (typeof callback !== 'function') {
        throw new Error('callback must be a function');
      }

      if (options.root && options.root.nodeType != 1) {
        throw new Error('root must be an Element');
      } // Binds and throttles `this._checkForIntersections`.


      this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT); // Private properties.

      this._callback = callback;
      this._observationTargets = [];
      this._queuedEntries = [];
      this._rootMarginValues = this._parseRootMargin(options.rootMargin); // Public properties.

      this.thresholds = this._initThresholds(options.threshold);
      this.root = options.root || null;
      this.rootMargin = this._rootMarginValues.map(function (margin) {
        return margin.value + margin.unit;
      }).join(' ');
    }
    /**
     * The minimum interval within which the document will be checked for
     * intersection changes.
     */


    IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
    /**
     * The frequency in which the polyfill polls for intersection changes.
     * this can be updated on a per instance basis and must be set prior to
     * calling `observe` on the first target.
     */

    IntersectionObserver.prototype.POLL_INTERVAL = null;
    /**
     * Use a mutation observer on the root element
     * to detect intersection changes.
     */

    IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
    /**
     * Starts observing a target element for intersection changes based on
     * the thresholds values.
     * @param {Element} target The DOM element to observe.
     */

    IntersectionObserver.prototype.observe = function (target) {
      var isTargetAlreadyObserved = this._observationTargets.some(function (item) {
        return item.element == target;
      });

      if (isTargetAlreadyObserved) {
        return;
      }

      if (!(target && target.nodeType == 1)) {
        throw new Error('target must be an Element');
      }

      this._registerInstance();

      this._observationTargets.push({
        element: target,
        entry: null
      });

      this._monitorIntersections();

      this._checkForIntersections();
    };
    /**
     * Stops observing a target element for intersection changes.
     * @param {Element} target The DOM element to observe.
     */


    IntersectionObserver.prototype.unobserve = function (target) {
      this._observationTargets = this._observationTargets.filter(function (item) {
        return item.element != target;
      });

      if (!this._observationTargets.length) {
        this._unmonitorIntersections();

        this._unregisterInstance();
      }
    };
    /**
     * Stops observing all target elements for intersection changes.
     */


    IntersectionObserver.prototype.disconnect = function () {
      this._observationTargets = [];

      this._unmonitorIntersections();

      this._unregisterInstance();
    };
    /**
     * Returns any queue entries that have not yet been reported to the
     * callback and clears the queue. This can be used in conjunction with the
     * callback to obtain the absolute most up-to-date intersection information.
     * @return {Array} The currently queued entries.
     */


    IntersectionObserver.prototype.takeRecords = function () {
      var records = this._queuedEntries.slice();

      this._queuedEntries = [];
      return records;
    };
    /**
     * Accepts the threshold value from the user configuration object and
     * returns a sorted array of unique threshold values. If a value is not
     * between 0 and 1 and error is thrown.
     * @private
     * @param {Array|number=} opt_threshold An optional threshold value or
     *     a list of threshold values, defaulting to [0].
     * @return {Array} A sorted list of unique and valid threshold values.
     */


    IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
      var threshold = opt_threshold || [0];
      if (!Array.isArray(threshold)) threshold = [threshold];
      return threshold.sort().filter(function (t, i, a) {
        if (typeof t !== 'number' || isNaN(t) || t < 0 || t > 1) {
          throw new Error('threshold must be a number between 0 and 1 inclusively');
        }

        return t !== a[i - 1];
      });
    };
    /**
     * Accepts the rootMargin value from the user configuration object
     * and returns an array of the four margin values as an object containing
     * the value and unit properties. If any of the values are not properly
     * formatted or use a unit other than px or %, and error is thrown.
     * @private
     * @param {string=} opt_rootMargin An optional rootMargin value,
     *     defaulting to '0px'.
     * @return {Array<Object>} An array of margin objects with the keys
     *     value and unit.
     */


    IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
      var marginString = opt_rootMargin || '0px';
      var margins = marginString.split(/\s+/).map(function (margin) {
        var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);

        if (!parts) {
          throw new Error('rootMargin must be specified in pixels or percent');
        }

        return {
          value: parseFloat(parts[1]),
          unit: parts[2]
        };
      }); // Handles shorthand.

      margins[1] = margins[1] || margins[0];
      margins[2] = margins[2] || margins[0];
      margins[3] = margins[3] || margins[1];
      return margins;
    };
    /**
     * Starts polling for intersection changes if the polling is not already
     * happening, and if the page's visibility state is visible.
     * @private
     */


    IntersectionObserver.prototype._monitorIntersections = function () {
      if (!this._monitoringIntersections) {
        this._monitoringIntersections = true; // If a poll interval is set, use polling instead of listening to
        // resize and scroll events or DOM mutations.

        if (this.POLL_INTERVAL) {
          this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
        } else {
          addEvent(window, 'resize', this._checkForIntersections, true);
          addEvent(document, 'scroll', this._checkForIntersections, true);

          if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
            this._domObserver = new MutationObserver(this._checkForIntersections);

            this._domObserver.observe(document, {
              attributes: true,
              childList: true,
              characterData: true,
              subtree: true
            });
          }
        }
      }
    };
    /**
     * Stops polling for intersection changes.
     * @private
     */


    IntersectionObserver.prototype._unmonitorIntersections = function () {
      if (this._monitoringIntersections) {
        this._monitoringIntersections = false;
        clearInterval(this._monitoringInterval);
        this._monitoringInterval = null;
        removeEvent(window, 'resize', this._checkForIntersections, true);
        removeEvent(document, 'scroll', this._checkForIntersections, true);

        if (this._domObserver) {
          this._domObserver.disconnect();

          this._domObserver = null;
        }
      }
    };
    /**
     * Scans each observation target for intersection changes and adds them
     * to the internal entries queue. If new entries are found, it
     * schedules the callback to be invoked.
     * @private
     */


    IntersectionObserver.prototype._checkForIntersections = function () {
      var rootIsInDom = this._rootIsInDom();

      var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

      this._observationTargets.forEach(function (item) {
        var target = item.element;
        var targetRect = getBoundingClientRect(target);

        var rootContainsTarget = this._rootContainsTarget(target);

        var oldEntry = item.entry;

        var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);

        var newEntry = item.entry = new IntersectionObserverEntry({
          time: now(),
          target: target,
          boundingClientRect: targetRect,
          rootBounds: rootRect,
          intersectionRect: intersectionRect
        });

        if (!oldEntry) {
          this._queuedEntries.push(newEntry);
        } else if (rootIsInDom && rootContainsTarget) {
          // If the new entry intersection ratio has crossed any of the
          // thresholds, add a new entry.
          if (this._hasCrossedThreshold(oldEntry, newEntry)) {
            this._queuedEntries.push(newEntry);
          }
        } else {
          // If the root is not in the DOM or target is not contained within
          // root but the previous entry for this target had an intersection,
          // add a new record indicating removal.
          if (oldEntry && oldEntry.isIntersecting) {
            this._queuedEntries.push(newEntry);
          }
        }
      }, this);

      if (this._queuedEntries.length) {
        this._callback(this.takeRecords(), this);
      }
    };
    /**
     * Accepts a target and root rect computes the intersection between then
     * following the algorithm in the spec.
     * TODO(philipwalton): at this time clip-path is not considered.
     * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
     * @param {Element} target The target DOM element
     * @param {Object} rootRect The bounding rect of the root after being
     *     expanded by the rootMargin value.
     * @return {?Object} The final intersection rect object or undefined if no
     *     intersection is found.
     * @private
     */


    IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, rootRect) {
      // If the element isn't displayed, an intersection can't happen.
      if (window.getComputedStyle(target).display == 'none') return;
      var targetRect = getBoundingClientRect(target);
      var intersectionRect = targetRect;
      var parent = getParentNode(target);
      var atRoot = false;

      while (!atRoot) {
        var parentRect = null;
        var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {}; // If the parent isn't displayed, an intersection can't happen.

        if (parentComputedStyle.display == 'none') return;

        if (parent == this.root || parent == document) {
          atRoot = true;
          parentRect = rootRect;
        } else {
          // If the element has a non-visible overflow, and it's not the <body>
          // or <html> element, update the intersection rect.
          // Note: <body> and <html> cannot be clipped to a rect that's not also
          // the document rect, so no need to compute a new intersection.
          if (parent != document.body && parent != document.documentElement && parentComputedStyle.overflow != 'visible') {
            parentRect = getBoundingClientRect(parent);
          }
        } // If either of the above conditionals set a new parentRect,
        // calculate new intersection data.


        if (parentRect) {
          intersectionRect = computeRectIntersection(parentRect, intersectionRect);
          if (!intersectionRect) break;
        }

        parent = getParentNode(parent);
      }

      return intersectionRect;
    };
    /**
     * Returns the root rect after being expanded by the rootMargin value.
     * @return {Object} The expanded root rect.
     * @private
     */


    IntersectionObserver.prototype._getRootRect = function () {
      var rootRect;

      if (this.root) {
        rootRect = getBoundingClientRect(this.root);
      } else {
        // Use <html>/<body> instead of window since scroll bars affect size.
        var html = document.documentElement;
        var body = document.body;
        rootRect = {
          top: 0,
          left: 0,
          right: html.clientWidth || body.clientWidth,
          width: html.clientWidth || body.clientWidth,
          bottom: html.clientHeight || body.clientHeight,
          height: html.clientHeight || body.clientHeight
        };
      }

      return this._expandRectByRootMargin(rootRect);
    };
    /**
     * Accepts a rect and expands it by the rootMargin value.
     * @param {Object} rect The rect object to expand.
     * @return {Object} The expanded rect.
     * @private
     */


    IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
      var margins = this._rootMarginValues.map(function (margin, i) {
        return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
      });

      var newRect = {
        top: rect.top - margins[0],
        right: rect.right + margins[1],
        bottom: rect.bottom + margins[2],
        left: rect.left - margins[3]
      };
      newRect.width = newRect.right - newRect.left;
      newRect.height = newRect.bottom - newRect.top;
      return newRect;
    };
    /**
     * Accepts an old and new entry and returns true if at least one of the
     * threshold values has been crossed.
     * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
     *    particular target element or null if no previous entry exists.
     * @param {IntersectionObserverEntry} newEntry The current entry for a
     *    particular target element.
     * @return {boolean} Returns true if a any threshold has been crossed.
     * @private
     */


    IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {
      // To make comparing easier, an entry that has a ratio of 0
      // but does not actually intersect is given a value of -1
      var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
      var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1; // Ignore unchanged ratios

      if (oldRatio === newRatio) return;

      for (var i = 0; i < this.thresholds.length; i++) {
        var threshold = this.thresholds[i]; // Return true if an entry matches a threshold or if the new ratio
        // and the old ratio are on the opposite sides of a threshold.

        if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
          return true;
        }
      }
    };
    /**
     * Returns whether or not the root element is an element and is in the DOM.
     * @return {boolean} True if the root element is an element and is in the DOM.
     * @private
     */


    IntersectionObserver.prototype._rootIsInDom = function () {
      return !this.root || containsDeep(document, this.root);
    };
    /**
     * Returns whether or not the target element is a child of root.
     * @param {Element} target The target element to check.
     * @return {boolean} True if the target element is a child of root.
     * @private
     */


    IntersectionObserver.prototype._rootContainsTarget = function (target) {
      return containsDeep(this.root || document, target);
    };
    /**
     * Adds the instance to the global IntersectionObserver registry if it isn't
     * already present.
     * @private
     */


    IntersectionObserver.prototype._registerInstance = function () {
    };
    /**
     * Removes the instance from the global IntersectionObserver registry.
     * @private
     */


    IntersectionObserver.prototype._unregisterInstance = function () {
    };
    /**
     * Returns the result of the performance.now() method or null in browsers
     * that don't support the API.
     * @return {number} The elapsed time since the page was requested.
     */


    function now() {
      return window.performance && performance.now && performance.now();
    }
    /**
     * Throttles a function and delays its execution, so it's only called at most
     * once within a given time period.
     * @param {Function} fn The function to throttle.
     * @param {number} timeout The amount of time that must pass before the
     *     function can be called again.
     * @return {Function} The throttled function.
     */


    function throttle(fn, timeout) {
      var timer = null;
      return function () {
        if (!timer) {
          timer = setTimeout(function () {
            fn();
            timer = null;
          }, timeout);
        }
      };
    }
    /**
     * Adds an event handler to a DOM node ensuring cross-browser compatibility.
     * @param {Node} node The DOM node to add the event handler to.
     * @param {string} event The event name.
     * @param {Function} fn The event handler to add.
     * @param {boolean} opt_useCapture Optionally adds the even to the capture
     *     phase. Note: this only works in modern browsers.
     */


    function addEvent(node, event, fn, opt_useCapture) {
      if (typeof node.addEventListener === 'function') {
        node.addEventListener(event, fn, opt_useCapture || false);
      } else if (typeof node.attachEvent === 'function') {
        node.attachEvent("on".concat(event), fn);
      }
    }
    /**
     * Removes a previously added event handler from a DOM node.
     * @param {Node} node The DOM node to remove the event handler from.
     * @param {string} event The event name.
     * @param {Function} fn The event handler to remove.
     * @param {boolean} opt_useCapture If the event handler was added with this
     *     flag set to true, it should be set to true here in order to remove it.
     */


    function removeEvent(node, event, fn, opt_useCapture) {
      if (typeof node.removeEventListener === 'function') {
        node.removeEventListener(event, fn, opt_useCapture || false);
      } else if (typeof node.detatchEvent === 'function') {
        node.detatchEvent("on".concat(event), fn);
      }
    }
    /**
     * Returns the intersection between two rect objects.
     * @param {Object} rect1 The first rect.
     * @param {Object} rect2 The second rect.
     * @return {?Object} The intersection rect or undefined if no intersection
     *     is found.
     */


    function computeRectIntersection(rect1, rect2) {
      var top = Math.max(rect1.top, rect2.top);
      var bottom = Math.min(rect1.bottom, rect2.bottom);
      var left = Math.max(rect1.left, rect2.left);
      var right = Math.min(rect1.right, rect2.right);
      var width = right - left;
      var height = bottom - top;
      return width >= 0 && height >= 0 && {
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        width: width,
        height: height
      };
    }
    /**
     * Shims the native getBoundingClientRect for compatibility with older IE.
     * @param {Element} el The element whose bounding rect to get.
     * @return {Object} The (possibly shimmed) rect of the element.
     */


    function getBoundingClientRect(el) {
      var rect;

      try {
        rect = el.getBoundingClientRect();
      } catch (err) {// Ignore Windows 7 IE11 "Unspecified error"
        // https://github.com/w3c/IntersectionObserver/pull/205
      }

      if (!rect) return getEmptyRect(); // Older IE

      if (!(rect.width && rect.height)) {
        rect = {
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          left: rect.left,
          width: rect.right - rect.left,
          height: rect.bottom - rect.top
        };
      }

      return rect;
    }
    /**
     * Returns an empty rect object. An empty rect is returned when an element
     * is not in the DOM.
     * @return {Object} The empty rect.
     */


    function getEmptyRect() {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0
      };
    }
    /**
     * Checks to see if a parent element contains a child element (including inside
     * shadow DOM).
     * @param {Node} parent The parent element.
     * @param {Node} child The child element.
     * @return {boolean} True if the parent node contains the child node.
     */


    function containsDeep(parent, child) {
      var node = child;

      while (node) {
        if (node == parent) return true;
        node = getParentNode(node);
      }

      return false;
    }
    /**
     * Gets the parent node of an element or its host element if the parent node
     * is a shadow root.
     * @param {Node} node The node whose parent to get.
     * @return {Node|null} The parent node or null if no parent exists.
     */


    function getParentNode(node) {
      var parent = node.parentNode;

      if (parent && parent.nodeType == 11 && parent.host) {
        // If the parent is a shadow root, return the host element.
        return parent.host;
      }

      if (parent && parent.assignedSlot) {
        // If the parent is distributed in a <slot>, return the parent of a slot.
        return parent.assignedSlot.parentNode;
      }

      return parent;
    } // Exposes the constructors globally.


    window.IntersectionObserver = IntersectionObserver;
    window.IntersectionObserverEntry = IntersectionObserverEntry;
  })();

  var formInput = (function () {
    var inputs = document.querySelectorAll('.js-form-input');
    if (inputs.length === 0) return;
    inputs.forEach(function (input) {
      input.addEventListener('focus', function () {
        input.closest('.form-input').classList.remove('error');
      });
    });
  });

  var modal = (function () {
    var classEnabled = 'enabled';
    var classScrolled = 'scrolled';
    var overlay = document.querySelector('.js-modal-overlay');
    var timer;
    var isScroll = false;
    var deltaWidth = 0;

    function scrollReInit(modal, initHeight, initWidth) {
      if (document.body.clientHeight < modal.clientHeight || document.body.clientHeight < initHeight) {
        modal.classList.add(classScrolled);
        deltaWidth = initWidth - modal.clientWidth;
        isScroll = true;
      } else {
        modal.classList.remove(classScrolled);
        isScroll = false;
        deltaWidth = 0;
      }

      if (isScroll) {
        modal.style.width = "".concat(initWidth + deltaWidth, "px");
      } else {
        modal.style.width = '';
      }
    }

    function openPopup(id, callback) {
      var modal = document.getElementById(id);
      var close = modal.querySelector('.js-modal-close');
      var initWidth = 0;
      var initHeight = 0;

      function onResize() {
        clearTimeout(timer);
        timer = setTimeout(function () {
          modal.style.width = '';
          initWidth = modal.clientWidth + deltaWidth;
          scrollReInit(modal, initHeight, initWidth);
        }, 300);
      }

      var closeModal = function closeModal() {
        callback();
        modal.classList.remove(classScrolled);
        modal.style.width = '';
        modal.classList.remove(classEnabled);
        overlay.classList.remove(classEnabled);
        document.removeEventListener('keydown', onPopupKeydown);
        overlay.removeEventListener('click', closeModal);
        close.removeEventListener('click', closeModal);
        window.removeEventListener('resize', onResize);
      };

      var onPopupKeydown = function onPopupKeydown(evt) {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          closeModal();
        }
      };

      modal.classList.add(classEnabled);
      overlay.classList.add(classEnabled);
      initHeight = modal.clientHeight;
      initWidth = modal.clientWidth;
      scrollReInit(modal, initHeight, initWidth);
      close.addEventListener('click', closeModal);
      document.addEventListener('keydown', onPopupKeydown);
      setTimeout(function () {
        overlay.addEventListener('click', closeModal);
      }, 1000);
      window.addEventListener('resize', onResize);
    }

    window.openPopup = openPopup;
  });

  // Older browsers don't support event options, feature detect it.
  // Adopted and modified solution from Bohdan Didukh (2017)
  // https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi
  var hasPassiveEvents = false;

  if (typeof window !== 'undefined') {
    var passiveTestOptions = {
      get passive() {
        hasPassiveEvents = true;
        return undefined;
      }

    };
    window.addEventListener('testPassive', null, passiveTestOptions);
    window.removeEventListener('testPassive', null, passiveTestOptions);
  }

  var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform);
  var locks = [];
  var documentListenerAdded = false;
  var initialClientY = -1;
  var previousBodyOverflowSetting;
  var previousBodyPaddingRight; // returns true if `el` should be allowed to receive touchmove events

  var allowTouchMove = function allowTouchMove(el) {
    return locks.some(function (lock) {
      if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
        return true;
      }

      return false;
    });
  };

  var preventDefault = function preventDefault(rawEvent) {
    var e = rawEvent || window.event; // For the case whereby consumers adds a touchmove event listener to document.
    // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
    // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
    // the touchmove event on document will break.

    if (allowTouchMove(e.target)) {
      return true;
    } // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom)


    if (e.touches.length > 1) return true;
    if (e.preventDefault) e.preventDefault();
    return false;
  };

  var setOverflowHidden = function setOverflowHidden(options) {
    // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
    // the responsiveness for some reason. Setting within a setTimeout fixes this.
    setTimeout(function () {
      // If previousBodyPaddingRight is already set, don't set it again.
      if (previousBodyPaddingRight === undefined) {
        var reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
        var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

        if (reserveScrollBarGap && scrollBarGap > 0) {
          previousBodyPaddingRight = document.body.style.paddingRight;
          document.body.style.paddingRight = "".concat(scrollBarGap, "px");
        }
      } // If previousBodyOverflowSetting is already set, don't set it again.


      if (previousBodyOverflowSetting === undefined) {
        previousBodyOverflowSetting = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
    });
  };

  var restoreOverflowSetting = function restoreOverflowSetting() {
    // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
    // the responsiveness for some reason. Setting within a setTimeout fixes this.
    setTimeout(function () {
      if (previousBodyPaddingRight !== undefined) {
        document.body.style.paddingRight = previousBodyPaddingRight; // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
        // can be set again.

        previousBodyPaddingRight = undefined;
      }

      if (previousBodyOverflowSetting !== undefined) {
        document.body.style.overflow = previousBodyOverflowSetting; // Restore previousBodyOverflowSetting to undefined
        // so setOverflowHidden knows it can be set again.

        previousBodyOverflowSetting = undefined;
      }
    });
  }; // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions


  var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
    return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
  };

  var handleScroll = function handleScroll(event, targetElement) {
    var clientY = event.targetTouches[0].clientY - initialClientY;

    if (allowTouchMove(event.target)) {
      return false;
    }

    if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
      // element is at the top of its scroll
      return preventDefault(event);
    }

    if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
      // element is at the top of its scroll
      return preventDefault(event);
    }

    event.stopPropagation();
    return true;
  };

  var disableBodyScroll = function disableBodyScroll(targetElement, options) {
    if (isIosDevice) {
      // targetElement must be provided, and disableBodyScroll must not have been
      // called on this targetElement before.
      if (!targetElement) {
        // eslint-disable-next-line no-console
        console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
        return;
      }

      if (targetElement && !locks.some(function (lock) {
        return lock.targetElement === targetElement;
      })) {
        var lock = {
          targetElement: targetElement,
          options: options || {}
        };
        locks = [].concat(_toConsumableArray(locks), [lock]);

        targetElement.ontouchstart = function (event) {
          if (event.targetTouches.length === 1) {
            // detect single touch
            initialClientY = event.targetTouches[0].clientY;
          }
        };

        targetElement.ontouchmove = function (event) {
          if (event.targetTouches.length === 1) {
            // detect single touch
            handleScroll(event, targetElement);
          }
        };

        if (!documentListenerAdded) {
          document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? {
            passive: false
          } : undefined);
          documentListenerAdded = true;
        }
      }
    } else {
      setOverflowHidden(options);
      var _lock = {
        targetElement: targetElement,
        options: options || {}
      };
      locks = [].concat(_toConsumableArray(locks), [_lock]);
    }
  };
  var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
    if (isIosDevice) {
      // Clear all locks ontouchstart/ontouchmove handlers, and the references
      locks.forEach(function (lock) {
        lock.targetElement.ontouchstart = null;
        lock.targetElement.ontouchmove = null;
      });

      if (documentListenerAdded) {
        document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
          passive: false
        } : undefined);
        documentListenerAdded = false;
      }

      locks = []; // Reset initial clientY

      initialClientY = -1;
    } else {
      restoreOverflowSetting();
      locks = [];
    }
  };
  var enableBodyScroll = function enableBodyScroll(targetElement) {
    if (isIosDevice) {
      if (!targetElement) {
        // eslint-disable-next-line no-console
        console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
        return;
      }

      targetElement.ontouchstart = null;
      targetElement.ontouchmove = null;
      locks = locks.filter(function (lock) {
        return lock.targetElement !== targetElement;
      });

      if (documentListenerAdded && locks.length === 0) {
        document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
          passive: false
        } : undefined);
        documentListenerAdded = false;
      }
    } else {
      locks = locks.filter(function (lock) {
        return lock.targetElement !== targetElement;
      });

      if (!locks.length) {
        restoreOverflowSetting();
      }
    }
  };

  /* global Cleave */
  var gagerModal = (function () {
    var gagerPopup = document.querySelector('.gager-modal');
    if (!gagerPopup) return;
    var gagerPopapOpenControls = document.querySelectorAll('.js-gager-open');
    if (!gagerPopapOpenControls) return;
    var form = document.querySelector('.js-gmf');
    var phoneInput = form.querySelector('.js-gmf-phone input');
    var nameInput = form.querySelector('.js-gmf-name input');
    var cleave = new Cleave(phoneInput, {
      numericOnly: true,
      prefix: '+7',
      noImmediatePrefix: true,
      delimiters: [' ( ', ' ) ', ' - ', ' - '],
      blocks: [2, 3, 3, 2, 2]
    }); // +7 ( 337 ) 777 - 77 - 77   => length = '24';

    function inputKeyCheck(evt) {
      if (!evt.key) return;
      var en = new RegExp('^[a-zA-Z ]+$');
      var ru = new RegExp('^[а-яА-Я ]+$');

      if (!en.test(evt.key) && !ru.test(evt.key)) {
        evt.preventDefault();
      }
    }

    function setGagerPopapListeners() {
      nameInput.addEventListener('keypress', inputKeyCheck);
    }

    function removeGagerPopapListeners() {
      nameInput.removeEventListener('keypress', inputKeyCheck);
    }

    function clearInputFields() {
      phoneInput.value = '';
      nameInput.value = '';
    }

    var closePopup = function closePopup() {
      clearInputFields();
      removeGagerPopapListeners();
      enableBodyScroll(gagerPopup);
    };

    gagerPopapOpenControls.forEach(function (currentControl) {
      currentControl.addEventListener('click', function (evt) {
        evt.preventDefault();
        window.openPopup('gager-modal', closePopup);
        setGagerPopapListeners();
        disableBodyScroll(gagerPopup, {
          reserveScrollBarGap: true
        });
      });
    });
  });

  /* global Cleave */
  var callRequestModal = (function () {
    var callRequestPopup = document.querySelector('.call-request-modal');
    if (!callRequestPopup) return;
    var callRequestPopupOpenControls = document.querySelectorAll('.js-call-request-open');
    if (!callRequestPopupOpenControls) return;
    var form = document.querySelector('.js-crmf');
    var phoneInput = form.querySelector('.js-crmf-phone input');
    var cleave = new Cleave(phoneInput, {
      numericOnly: true,
      prefix: '+7',
      noImmediatePrefix: true,
      delimiters: [' ( ', ' ) ', ' - ', ' - '],
      blocks: [2, 3, 3, 2, 2]
    }); // +7 ( 337 ) 777 - 77 - 77   => length = '24';

    function clearInputFields() {
      phoneInput.value = '';
    }

    var closePopup = function closePopup() {
      clearInputFields();
      enableBodyScroll(callRequestPopup);
    };

    callRequestPopupOpenControls.forEach(function (currentControl) {
      currentControl.addEventListener('click', function (evt) {
        evt.preventDefault();
        window.openPopup('call-request-modal', closePopup);
        disableBodyScroll(callRequestPopup, {
          reserveScrollBarGap: true
        });
      });
    });
  });

  /* global Cleave */
  var discountModal = (function () {
    var discountPopup = document.querySelector('.discount-modal');
    if (!discountPopup) return;
    var discountPopapOpenControls = document.querySelectorAll('.js-discount-open');
    if (!discountPopapOpenControls) return;
    var discountPopupCloseLabel = discountPopup.querySelector('.js-modal-close span');
    discountPopupCloseLabel.classList.remove('visually-hidden');
    discountPopupCloseLabel.classList.add('discount-modal__close-label');
    var form = document.querySelector('.js-dmf');
    var phoneInput = form.querySelector('.js-dmf-phone input');
    var nameInput = form.querySelector('.js-dmf-name input');
    var cleave = new Cleave(phoneInput, {
      numericOnly: true,
      prefix: '+7',
      noImmediatePrefix: true,
      delimiters: [' ( ', ' ) ', ' - ', ' - '],
      blocks: [2, 3, 3, 2, 2]
    }); // +7 ( 337 ) 777 - 77 - 77   => length = '24';

    function inputKeyCheck(evt) {
      if (!evt.key) return;
      var en = new RegExp('^[a-zA-Z ]+$');
      var ru = new RegExp('^[а-яА-Я ]+$');

      if (!en.test(evt.key) && !ru.test(evt.key)) {
        evt.preventDefault();
      }
    }

    function setPopapListeners() {
      nameInput.addEventListener('keypress', inputKeyCheck);
    }

    function removePopapListeners() {
      nameInput.removeEventListener('keypress', inputKeyCheck);
    }

    function clearInputFields() {
      phoneInput.value = '';
      nameInput.value = '';
    }

    var closePopup = function closePopup() {
      clearInputFields();
      removePopapListeners();
      enableBodyScroll(discountPopup);
    };

    discountPopapOpenControls.forEach(function (currentControl) {
      currentControl.addEventListener('click', function (evt) {
        evt.preventDefault();
        window.openPopup('discount-modal', closePopup);
        setPopapListeners();
        disableBodyScroll(discountPopup, {
          reserveScrollBarGap: true
        });
      });
    });
  });

  var header = (function () {
    var WindowBreakpoints = {
      DESKTOP: 1024,
      TABLET: 1023,
      MOBILE: 320
    };
    var header = document.querySelector('.header');
    var headerOpenedClass = 'header--menu-opened';
    if (!header) return;
    var burgerToggle = header.querySelector('.header__toggle');
    var dropdown = header.querySelector('.header__dropdown');
    var mainNavWrap = header.querySelector('.header__main-nav-wrap');
    var mainNav = header.querySelector('.header__main-nav');
    var calculatorButton = header.querySelector('.header__calculator');
    var scheduleWrap = header.querySelector('.header__schedule-wrap');
    calculatorButton.addEventListener('click', function () {
      console.log('Открыть калькулятор');
    });

    var adjustDesktop = function adjustDesktop() {
      clearAllBodyScrollLocks();
      mainNavWrap.prepend(mainNav);
    };

    var adjustTablet = function adjustTablet() {
      if (header.classList.contains('header--menu-opened')) {
        disableBodyScroll(header);
      }

      var fragment = new DocumentFragment();
      fragment.appendChild(scheduleWrap);
      fragment.appendChild(mainNav);
      dropdown.appendChild(fragment);
    };

    var adjustMobile = function adjustMobile() {
      if (header.classList.contains('header--menu-opened')) {
        disableBodyScroll(header);
      }

      var fragment = new DocumentFragment();
      fragment.appendChild(scheduleWrap);
      fragment.appendChild(mainNav);
      dropdown.appendChild(fragment);
    };

    var checkWindowWidth = function checkWindowWidth() {
      if (window.matchMedia("(min-width: ".concat(WindowBreakpoints.DESKTOP, "px)")).matches) {
        return WindowBreakpoints.DESKTOP;
      }

      if (window.matchMedia("(min-width: ".concat(WindowBreakpoints.TABLET, "px)")).matches) {
        return WindowBreakpoints.TABLET;
      }

      return WindowBreakpoints.MOBILE;
    };

    var adjustDropdownMaxHeight = function adjustDropdownMaxHeight() {
      var rect = header.getBoundingClientRect();
      dropdown.style.maxHeight = "calc(100vh - ".concat(rect.bottom, "px)");
    };

    var lastWindowMode = -1;

    var adjustMenu = function adjustMenu() {
      var currentWindowMode = checkWindowWidth();

      if (lastWindowMode !== currentWindowMode) {
        switch (currentWindowMode) {
          case WindowBreakpoints.MOBILE:
            adjustMobile();
            break;

          case WindowBreakpoints.TABLET:
            adjustTablet();
            break;

          default:
            adjustDesktop();
            break;
        }

        lastWindowMode = currentWindowMode;
      }
    };

    var closeMenu = function closeMenu() {
      header.classList.remove(headerOpenedClass);
      clearAllBodyScrollLocks();
    };

    var openMenu = function openMenu() {
      adjustDropdownMaxHeight();
      header.classList.add(headerOpenedClass);
      adjustMenu();
      disableBodyScroll(dropdown);
    };

    burgerToggle.addEventListener('click', function () {
      if (header.classList.contains(headerOpenedClass)) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    var resizeTimeout;

    function resizeThrottler() {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          adjustMenu();
          adjustDropdownMaxHeight(); // The actualResizeHandler will execute at a rate of 15fps
        }, 10);
      }
    }

    window.addEventListener('resize', resizeThrottler, false);
    adjustMenu();
    /** ****************************************************************** */

    var CATALOG_MODE_CLASS = 'header__dropdown--window';
    var SUB_CATALOG_MODE_CLASS = 'header__dropdown--sub-catalog';
    var ACTIVE_CATALOG_LINK_CLASS = 'nav-window__item--active';
    var navCatalog = header.querySelector('.main-nav__item--window .main-nav__link');
    navCatalog.addEventListener('click', function () {
      if (dropdown.classList.contains(CATALOG_MODE_CLASS)) {
        dropdown.classList.remove(CATALOG_MODE_CLASS);
      } else {
        dropdown.classList.add(CATALOG_MODE_CLASS);
      }
    });
    var navCatalogLinks = header.querySelectorAll('.nav-window__link');
    navCatalogLinks.forEach(function (element) {
      element.addEventListener('click', function (e) {
        var parent = e.target.parentElement;

        if (parent.classList.contains(ACTIVE_CATALOG_LINK_CLASS)) {
          // надо схлопнуть секцию
          parent.classList.remove(ACTIVE_CATALOG_LINK_CLASS);
        } else {
          // надо найти открытую и закрыть, и затем открыть текущую
          var currentOpened = header.querySelector(".".concat(ACTIVE_CATALOG_LINK_CLASS));

          if (currentOpened) {
            currentOpened.classList.remove(ACTIVE_CATALOG_LINK_CLASS);
          }

          parent.classList.add(ACTIVE_CATALOG_LINK_CLASS);
        }

        if (dropdown.classList.contains(SUB_CATALOG_MODE_CLASS)) {
          var _currentOpened = header.querySelector(".".concat(ACTIVE_CATALOG_LINK_CLASS));

          if (!_currentOpened) {
            dropdown.classList.remove(SUB_CATALOG_MODE_CLASS);
          }
        } else {
          dropdown.classList.add(SUB_CATALOG_MODE_CLASS);
        }
      });
    });
  });

  var pagination = (function () {
    var paginationButtons = document.querySelectorAll('.page-pagination__elem');
    paginationButtons.forEach(function (it) {
      it.addEventListener('click', function (evt) {
        paginationButtons.forEach(function (pbtn) {
          pbtn.classList.remove('page-pagination__elem--active');
        });
        evt.target.classList.add('page-pagination__elem--active');
      });
    });
  });

  /* global Swiper */
  var profileSystem = (function () {
    var profileSystem = document.querySelector('.profile-systems');
    if (!profileSystem) return;
    var wcSystemControl = profileSystem.querySelector('.js-pswc-button');
    var wcSystemContent = profileSystem.querySelector('.js-pswc-content');
    var wacSystemControl = profileSystem.querySelector('.js-pswac-button');
    var wacSystemContent = profileSystem.querySelector('.js-pswac-content');
    var activeClass = 'active';
    var disabledClass = 'disabled';
    var slider;
    var wcSwiperContainer = wcSystemContent;
    var wcSwiperWrapper = profileSystem.querySelector('.profile-systems__wood-windows');
    var wcSwiperSlides = profileSystem.querySelectorAll('.profile-systems__wood-windows .products-set__product');
    var wcSliderNav = profileSystem.querySelector('.js-pswc-nav');
    var wacSwiperContainer = wacSystemContent;
    var wacSwiperWrapper = profileSystem.querySelector('.profile-systems__wood-aluminum-windows');
    var wacSwiperSlides = profileSystem.querySelectorAll('.profile-systems__wood-aluminum-windows .products-set__product');
    var wacSliderNav = profileSystem.querySelector('.js-pswac-nav');

    function sliderInit(container, wrapper, slides, nav) {
      container.classList.add('swiper-container');
      wrapper.classList.add('swiper-wrapper');
      slides.forEach(function (slide) {
        slide.classList.add('swiper-slide');
      });
      var navNextPrefix;
      var navPrevPrefix;

      if (nav) {
        navNextPrefix = nav.classList.contains('js-pswc-nav') ? '.js-pswc-nav .slider-navigation__btn--next' : '.js-pswac-nav .slider-navigation__btn--next';
        navPrevPrefix = nav.classList.contains('js-pswc-nav') ? '.js-pswc-nav .slider-navigation__btn--prev' : '.js-pswac-nav .slider-navigation__btn--prev';
      }

      slider = new Swiper(container, {
        direction: 'horizontal',
        loop: true,
        preloadImages: true,
        loadPrevNext: true,
        loadPrevNextAmount: 3,
        watchSlidesVisibility: true,
        slidesPerView: 3,
        spaceBetween: 0,
        breakpoints: {
          1023: {
            slidesPerView: 2,
            loadPrevNextAmount: 2,
            spaceBetween: 40,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0
          },
          767: {
            slidesPerView: 1,
            loadPrevNextAmount: 2,
            spaceBetween: 20,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0
          }
        },
        navigation: {
          nextEl: navNextPrefix,
          prevEl: navPrevPrefix
        },
        on: {
          beforeResize: function beforeResize() {
            if (window.innerWidth <= 767) {
              slider.slides.css('width', '');
            }
          }
        }
      });
    }

    function sliderDestroy(container, wrapper, slides) {
      slider.destroy();
      container.classList.remove('swiper-container');
      wrapper.classList.remove('swiper-wrapper');
      slides.forEach(function (slide) {
        slide.classList.remove('swiper-slide');
      });
    }

    wcSystemControl.addEventListener('click', function () {
      wacSystemControl.classList.remove(activeClass);
      wcSystemControl.classList.add(activeClass);
      wacSystemContent.classList.add(disabledClass);
      wcSystemContent.classList.remove(disabledClass);

      if (slider) {
        sliderDestroy(wacSwiperContainer, wacSwiperWrapper, wacSwiperSlides);
        wacSliderNav.classList.add(disabledClass);
      }

      sliderInit(wcSwiperContainer, wcSwiperWrapper, wcSwiperSlides, wcSliderNav);
      wcSliderNav.classList.remove(disabledClass);
    });
    wacSystemControl.addEventListener('click', function () {
      wacSystemControl.classList.add(activeClass);
      wcSystemControl.classList.remove(activeClass);
      wacSystemContent.classList.remove(disabledClass);
      wcSystemContent.classList.add(disabledClass);
      sliderDestroy(wcSwiperContainer, wcSwiperWrapper, wcSwiperSlides);
      wcSliderNav.classList.add(disabledClass);
      sliderInit(wacSwiperContainer, wacSwiperWrapper, wacSwiperSlides, wacSliderNav);
      wacSliderNav.classList.remove(disabledClass);
    });
    wcSystemControl.click();
  });

  /* global Parsley */

  /* global Cleave */
  var wsrForm = (function () {
    var form = document.querySelector('.js-wsrf');
    if (!form) return;
    var phoneInput = document.querySelector('.js-wsrf-phone input');
    var nameInput = document.querySelector('.js-wsrf-name input');
    var button = document.querySelector('.js-wsrf-submit');
    var parsleyForm;
    var parsleyOptions = {
      uiEnabled: false,
      focus: 'none'
    };
    var cleave = new Cleave(phoneInput, {
      numericOnly: true,
      prefix: '+7',
      noImmediatePrefix: true,
      delimiters: [' ( ', ' ) ', ' - ', ' - '],
      blocks: [2, 3, 3, 2, 2]
    }); // +7 ( 337 ) 777 - 77 - 77

    phoneInput.dataset.parsleyMinlength = '24';

    function inputKeyCheck(evt) {
      if (!evt.key) return;
      var en = new RegExp('^[a-zA-Z ]+$');
      var ru = new RegExp('^[а-яА-Я ]+$');

      if (!en.test(evt.key) && !ru.test(evt.key)) {
        evt.preventDefault();
      }
    }

    nameInput.addEventListener('keypress', inputKeyCheck);

    function submitButtonListener(evt) {
      evt.preventDefault();
      parsleyForm.validate();
    }

    function onSuccess() {
      // console.log('success');
      nameInput.value = '';
      phoneInput.value = '';
    }

    button.addEventListener('click', submitButtonListener);
    parsleyForm = new Parsley.Factory(form, parsleyOptions);
    parsleyForm.on('form:success', onSuccess);
    parsleyForm.on('field:error', function (evt) {
      evt.element.closest('.js-wsrf-validate').classList.add('error');
    });
    parsleyForm.on('field:success', function (evt) {
      evt.element.closest('.js-wsrf-validate').classList.remove('error');
    });
  });

  /* global Parsley */

  /* global Cleave */
  var grForm = (function () {
    var form = document.querySelector('.js-grf');
    if (!form) return;
    var phoneInput = document.querySelector('.js-grf-phone input');
    var nameInput = document.querySelector('.js-grf-name input');
    var button = document.querySelector('.js-grf-submit');
    var parsleyForm;
    var parsleyOptions = {
      uiEnabled: false,
      focus: 'none'
    };
    var cleave = new Cleave(phoneInput, {
      numericOnly: true,
      prefix: '+7',
      noImmediatePrefix: true,
      delimiters: [' ( ', ' ) ', ' - ', ' - '],
      blocks: [2, 3, 3, 2, 2]
    }); // +7 ( 337 ) 777 - 77 - 77

    phoneInput.dataset.parsleyMinlength = '24';

    function inputKeyCheck(evt) {
      if (!evt.key) return;
      var en = new RegExp('^[a-zA-Z ]+$');
      var ru = new RegExp('^[а-яА-Я ]+$');

      if (!en.test(evt.key) && !ru.test(evt.key)) {
        evt.preventDefault();
      }
    }

    nameInput.addEventListener('keypress', inputKeyCheck);

    function submitButtonListener(evt) {
      evt.preventDefault();
      parsleyForm.validate();
    }

    function onSuccess() {
      // console.log('success');
      nameInput.value = '';
      phoneInput.value = '';
    }

    button.addEventListener('click', submitButtonListener);
    parsleyForm = new Parsley.Factory(form, parsleyOptions);
    parsleyForm.on('form:success', onSuccess);
    parsleyForm.on('field:error', function (evt) {
      evt.element.closest('.js-grf-validate').classList.add('error');
    });
    parsleyForm.on('field:success', function (evt) {
      evt.element.closest('.js-grf-validate').classList.remove('error');
    });
  });

  /* global Swiper */
  var reviewsSection = (function () {
    var container = document.querySelector('.reviews-section__container');
    if (!container) return;
    var wrapper = container.querySelector('.reviews-section__wrapper');
    var slides = container.querySelectorAll('.review-card');

    function initializeReviews() {
      container.classList.add('swiper-container');
      wrapper.classList.add('swiper-wrapper');
      slides.forEach(function (slide) {
        slide.classList.add('swiper-slide');
      });
      var swiperReviews = new Swiper(container, {
        direction: 'horizontal',
        loop: true,
        preloadImages: true,
        loadPrevNext: true,
        loadPrevNextAmount: 2,
        slidesPerView: 2,
        spaceBetween: 45,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        breakpoints: {
          1199: {
            centeredSlides: true,
            slidesPerView: 1
          }
        },
        navigation: {
          nextEl: '.reviews-section__navigation-btn-next',
          prevEl: '.reviews-section__navigation-btn-prev'
        }
      });
    }

    initializeReviews();
  });

  /* global Swiper */
  var workReport = (function () {
    var container = document.querySelector('.work-report__slider-container');
    if (!container) return;
    var wrapper = container.querySelector('.work-report__slider-wrapper');
    var slides = container.querySelectorAll('.work-report__slide');

    function initializeSlider() {
      container.classList.add('swiper-container');
      wrapper.classList.add('swiper-wrapper');
      slides.forEach(function (slide) {
        slide.classList.add('swiper-slide');
      });
      var workReportSwiper = new Swiper(container, {
        direction: 'horizontal',
        loop: true,
        preloadImages: true,
        loadPrevNext: true,
        loadPrevNextAmount: 1,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 10,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        breakpoints: {},
        navigation: {
          nextEl: '.work-report__navigation-btn-next',
          prevEl: '.work-report__navigation-btn-prev'
        }
      });
    }

    initializeSlider();
  });

  /* global Swiper */
  var brands = (function () {
    var container = document.querySelector('.brands__container');
    if (!container) return;
    var wrapper = container.querySelector('.brands__list');
    var slides = container.querySelectorAll('.brands__brand-item');

    function sliderInit() {
      container.classList.add('swiper-container');
      wrapper.classList.add('swiper-wrapper');
      slides.forEach(function (slide) {
        slide.classList.add('swiper-slide');
      });
      var slider = new Swiper(container, {
        direction: 'horizontal',
        loop: true,
        preloadImages: true,
        loadPrevNext: true,
        loadPrevNextAmount: 2,
        slidesPerView: 'auto',
        spaceBetween: 30,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        breakpoints: {},
        navigation: {
          nextEl: '.brands__navigation-btn-next',
          prevEl: '.brands__navigation-btn-prev'
        }
      });
    }

    sliderInit();
  });

  var popularWindows = (function () {
    var container = document.querySelector('.popular-windows');
    if (!container) return;
    var contents = container.querySelectorAll('.popular-windows__models-set');
    var controls = container.querySelectorAll('.js-pwc-button');
    var activeClass = 'active';
    var disabledClass = 'disabled';
    var activeControl;

    function contentReset() {
      contents.forEach(function (set) {
        set.classList.add(disabledClass);

        if (set.dataset.pwc === activeControl.dataset.pwc) {
          set.classList.remove(disabledClass);
        }
      });
    }

    function sectionInit() {
      controls.forEach(function (btn) {
        btn.classList.remove(activeClass);
      });
      activeControl = controls[0];
      activeControl.classList.add(activeClass);
      contentReset();
      controls[0].click();
    }

    controls.forEach(function (btn) {
      btn.addEventListener('click', function (evt) {
        evt.preventDefault();
        activeControl.classList.remove(activeClass);
        activeControl = btn;
        activeControl.classList.add(activeClass);
        contentReset();
      });
    });
    sectionInit();
  });

  /* global Swiper */
  var promoSection = (function () {
    var promoSection = document.querySelector('.promotions-section');
    if (!promoSection) return;
    var container = promoSection.querySelector('.promotions-section__slider-container');
    var wrapper = container.querySelector('.promotions-section__promo-list');
    var slides = container.querySelectorAll('.promotions-section__promo-item');
    var contents = promoSection.querySelectorAll('.promotions-section__content');
    var controls = container.querySelectorAll('.promotions-section__promo-item');
    var disabledClass = 'disabled';

    function contentReset(activeControl) {
      contents.forEach(function (set) {
        set.classList.add(disabledClass);

        if (set.dataset.promoControl === activeControl.dataset.promoControl) {
          set.classList.remove(disabledClass);
        }
      });
    }

    function sectionInit() {
      contentReset(controls[0]);
    }

    controls.forEach(function (btn) {
      btn.addEventListener('click', function (evt) {
        evt.preventDefault();
        contentReset(btn);
      });
    });

    function sliderInit() {
      container.classList.add('swiper-container');
      wrapper.classList.add('swiper-wrapper');
      slides.forEach(function (slide) {
        slide.classList.add('swiper-slide');
      });
      var slider = new Swiper(container, {
        direction: 'horizontal',
        // width: 976,
        loop: false,
        preloadImages: true,
        loadPrevNext: true,
        loadPrevNextAmount: 2,
        slidesPerView: 3,
        spaceBetween: 55,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
        breakpoints: {
          1199: {
            spaceBetween: 40
          },
          1023: {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0
          },
          579: {
            spaceBetween: 30,
            slidesPerView: 1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0
          }
        },
        navigation: {
          nextEl: '.promotions-section__navigation-btn-next',
          prevEl: '.promotions-section__navigation-btn-prev'
        }
      });
    }

    sliderInit();
    sectionInit();
  });

  /* eslint-disable */

  formInput();
  modal();
  gagerModal();
  discountModal();
  callRequestModal();
  header();
  pagination();
  profileSystem();
  wsrForm();
  grForm();
  reviewsSection();
  workReport();
  brands();
  popularWindows();
  promoSection();

}());
//# sourceMappingURL=main.js.map
