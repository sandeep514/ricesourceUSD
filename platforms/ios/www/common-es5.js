function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/"./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js": (
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
    \*********************************************************************/
  /*! exports provided: c */
  /***/
  function node_modulesIonicCoreDistEsmButtonActiveD4bd4f74Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */
    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./index-7a8b7a1c.js */"./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */
    var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./haptic-27b3f981.js */"./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
    /* harmony import */
    var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./index-34cb2743.js */"./node_modules/@ionic/core/dist/esm/index-34cb2743.js");
    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var currentTouchedButton;
      var initialTouchedButton;
      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }
        var target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }
        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };
      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }
        var buttonToModify = currentTouchedButton;
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };
      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        if (!currentTouchedButton) {
          return;
        }
        var buttonToModify = currentTouchedButton;
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
          currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
      };
      return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
          initialTouchedButton = undefined;
        }
      });
    };

    /***/
  }),
  /***/"./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js": (
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
    \**************************************************************************/
  /*! exports provided: a, d */
  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegate94e770ccJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });
    /* harmony import */
    var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./helpers-1457892a.js */"./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");
    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!delegate) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));
            case 2:
              if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                _context.next = 4;
                break;
              }
              throw new Error('framework delegate is missing');
            case 4:
              el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;
              if (cssClasses) {
                cssClasses.forEach(function (c) {
                  return el.classList.add(c);
                });
              }
              if (componentProps) {
                Object.assign(el, componentProps);
              }
              container.appendChild(el);
              _context.next = 10;
              return new Promise(function (resolve) {
                return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
              });
            case 10:
              return _context.abrupt("return", el);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();
    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }
        element.remove();
      }
      return Promise.resolve();
    };

    /***/
  }),
  /***/"./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js": (
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
    \**************************************************************/
  /*! exports provided: a, b, c, d, h */
  /***/
  function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });
    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();
        if (!engine) {
          return;
        }
        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();
        if (!engine) {
          return;
        }
        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();
        if (!engine) {
          return;
        }
        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();
        if (!engine) {
          return;
        }
        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();
        if (!engine) {
          return;
        }
        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */
    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */
    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */
    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */
    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */
    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };

    /***/
  }),
  /***/"./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js": (
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
    \***********************************************************************/
  /*! exports provided: S */
  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });
    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;

    /***/
  }),
  /***/"./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js": (
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
    \*************************************************************/
  /*! exports provided: c, g, h, o */
  /***/
  function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });
    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */
    var createColorClasses = function createColorClasses(color, cssClassMap) {
      return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
    };
    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }
      return [];
    };
    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };
    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
    var openURL = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, ev, direction, animation) {
        var router;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                _context2.next = 5;
                break;
              }
              router = document.querySelector('ion-router');
              if (!router) {
                _context2.next = 5;
                break;
              }
              if (ev != null) {
                ev.preventDefault();
              }
              return _context2.abrupt("return", router.push(url, direction, animation));
            case 5:
              return _context2.abrupt("return", false);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref2.apply(this, arguments);
      };
    }();

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/contactmodal/contactmodal.page.html": (
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactmodal/contactmodal.page.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactmodalContactmodalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>contactmodal</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"bg-lightgreen\">\n\t<div class=\"logo\">\n\t\t<img src=\"../../assets/icon_logo.png\" class=\"app-logo\"/>\n\t</div>\n\t<a href=\"javascript:void(0);\" (click)=\"closeModal()\" class=\"closeModal\"> X </a>\n\t<div class=\"content\">\n\t\t<p style=\"padding-bottom: 10px;\">{{ roleTitle }}</p>\n\t\t<a href=\"tel:+919877092004\" class=\"contactuser\">Call now</a>\n\t\t<a href=\"mailto:rbajaj@sntcgroup.com\" class=\"contactuser\">Mail now</a>\n\t</div>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/contactmodal/contactmodal-routing.module.ts": (
  /*!*************************************************************!*\
    !*** ./src/app/contactmodal/contactmodal-routing.module.ts ***!
    \*************************************************************/
  /*! exports provided: ContactmodalPageRoutingModule */
  /***/
  function srcAppContactmodalContactmodalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactmodalPageRoutingModule", function () {
      return ContactmodalPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _contactmodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./contactmodal.page */"./src/app/contactmodal/contactmodal.page.ts");
    var routes = [{
      path: '',
      component: _contactmodal_page__WEBPACK_IMPORTED_MODULE_3__["ContactmodalPage"]
    }];
    var ContactmodalPageRoutingModule = /*#__PURE__*/_createClass(function ContactmodalPageRoutingModule() {
      _classCallCheck(this, ContactmodalPageRoutingModule);
    });
    ContactmodalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactmodalPageRoutingModule);

    /***/
  }),
  /***/"./src/app/contactmodal/contactmodal.module.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/contactmodal/contactmodal.module.ts ***!
    \*****************************************************/
  /*! exports provided: ContactmodalPageModule */
  /***/
  function srcAppContactmodalContactmodalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactmodalPageModule", function () {
      return ContactmodalPageModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _contactmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./contactmodal-routing.module */"./src/app/contactmodal/contactmodal-routing.module.ts");
    /* harmony import */
    var _contactmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./contactmodal.page */"./src/app/contactmodal/contactmodal.page.ts");
    var ContactmodalPageModule = /*#__PURE__*/_createClass(function ContactmodalPageModule() {
      _classCallCheck(this, ContactmodalPageModule);
    });
    ContactmodalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contactmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactmodalPageRoutingModule"]],
      declarations: [_contactmodal_page__WEBPACK_IMPORTED_MODULE_6__["ContactmodalPage"]]
    })], ContactmodalPageModule);

    /***/
  }),
  /***/"./src/app/contactmodal/contactmodal.page.scss": (
  /*!*****************************************************!*\
    !*** ./src/app/contactmodal/contactmodal.page.scss ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppContactmodalContactmodalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".logo {\n  text-align: center;\n}\n\n.app-logo {\n  width: 32%;\n  padding: 10px;\n  border-radius: 20px;\n}\n\n.closeModal {\n  position: absolute;\n  text-decoration: none;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  background: #92B243 !important;\n  color: white;\n}\n\n.content {\n  text-align: center;\n}\n\n.content p {\n  text-align: center;\n}\n\n.contactuser {\n  height: 0px;\n  margin-top: 8px;\n  border-radius: 100px;\n  min-height: 36px;\n  margin-left: 2px;\n  margin-right: 2px;\n  box-shadow: -1px 1px 9px 0px #CCC;\n  width: 33%;\n  color: #000;\n  font-size: 12px;\n  text-decoration: none;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2NvbnRhY3Rtb2RhbC9jb250YWN0bW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9jb250YWN0bW9kYWwvY29udGFjdG1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBRENJO0VBQ0ksa0JBQUE7QUNDUjs7QURJQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdG1vZGFsL2NvbnRhY3Rtb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXBwLWxvZ28ge1xuICAgIHdpZHRoOiAzMiU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY2xvc2VNb2RhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbn1cblxuLmNvbnRhY3R1c2VyIHtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgbWluLWhlaWdodDogMzZweDtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDlweCAwcHggI0NDQztcbiAgICB3aWR0aDogMzMlO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbn0iLCIubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFwcC1sb2dvIHtcbiAgd2lkdGg6IDMyJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmNsb3NlTW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhY3R1c2VyIHtcbiAgaGVpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gIHdpZHRoOiAzMyU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/contactmodal/contactmodal.page.ts": (
  /*!***************************************************!*\
    !*** ./src/app/contactmodal/contactmodal.page.ts ***!
    \***************************************************/
  /*! exports provided: ContactmodalPage */
  /***/
  function srcAppContactmodalContactmodalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactmodalPage", function () {
      return ContactmodalPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../components.service */"./src/app/components.service.ts");
    var ContactmodalPage = /*#__PURE__*/function () {
      function ContactmodalPage(modalctrl, componentserv, navCtrl) {
        _classCallCheck(this, ContactmodalPage);
        this.modalctrl = modalctrl;
        this.componentserv = componentserv;
        this.navCtrl = navCtrl;
        this.isBuyer();
      }
      return _createClass(ContactmodalPage, [{
        key: "closeModal",
        value: function closeModal() {
          this.modalctrl.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isBuyer",
        value: function isBuyer() {
          if (localStorage.getItem('apptype') == 'OTHER') {
            if ('5' == localStorage.getItem('role')) {
              this.roleTitle = "Are you looking to buy rice?";
            } else {
              this.isSupplier();
            }
          } else {
            if ('5' == localStorage.getItem('usd_role')) {
              this.roleTitle = "Are you looking to buy rice?";
            } else {
              this.isSupplier();
            }
          }
        }
      }, {
        key: "isSupplier",
        value: function isSupplier() {
          if (localStorage.getItem('apptype') == 'OTHER') {
            if ('6' == localStorage.getItem('role')) {
              this.roleTitle = "Are you looking to sell rice?";
            } else {
              this.isBroker();
            }
          } else {
            if ('6' == localStorage.getItem('usd_role')) {
              this.roleTitle = "Are you looking to sell rice?";
            } else {
              this.isBroker();
            }
          }
        }
      }, {
        key: "isBroker",
        value: function isBroker() {
          if (localStorage.getItem('apptype') == 'OTHER') {
            if ('7' == localStorage.getItem('role')) {
              this.roleTitle = "Are you looking to Buy/Sell rice?";
            } else {
              this.isGuest();
            }
          } else {
            if ('7' == localStorage.getItem('usd_role')) {
              this.roleTitle = "Are you looking to Buy/Sell rice?";
            } else {
              this.isGuest();
            }
          }
        }
      }, {
        key: "isGuest",
        value: function isGuest() {
          if (localStorage.getItem('apptype') == 'OTHER') {
            if ('8' == localStorage.getItem('role')) {
              this.roleTitle = "Are you looking to Buy/Sell rice?";
            } else {
              return false;
            }
          } else {
            if ('8' == localStorage.getItem('usd_role')) {
              this.roleTitle = "Are you looking to Buy/Sell rice?";
            } else {
              return false;
            }
          }
        }
      }, {
        key: "oldVersionModel",
        value: function oldVersionModel() {
          this.roleTitle = "You are using a older version of app, Would you like to update?";
        }
      }]);
    }();
    ContactmodalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };
    ContactmodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contactmodal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./contactmodal.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/contactmodal/contactmodal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./contactmodal.page.scss */"./src/app/contactmodal/contactmodal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], ContactmodalPage);

    /***/
  }),
  /***/"./src/app/versionmodal/versionmodal-routing.module.ts": (
  /*!*************************************************************!*\
    !*** ./src/app/versionmodal/versionmodal-routing.module.ts ***!
    \*************************************************************/
  /*! exports provided: VersionmodalPageRoutingModule */
  /***/
  function srcAppVersionmodalVersionmodalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "VersionmodalPageRoutingModule", function () {
      return VersionmodalPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _versionmodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./versionmodal.page */"./src/app/versionmodal/versionmodal.page.ts");
    var routes = [{
      path: '',
      component: _versionmodal_page__WEBPACK_IMPORTED_MODULE_3__["VersionmodalPage"]
    }];
    var VersionmodalPageRoutingModule = /*#__PURE__*/_createClass(function VersionmodalPageRoutingModule() {
      _classCallCheck(this, VersionmodalPageRoutingModule);
    });
    VersionmodalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VersionmodalPageRoutingModule);

    /***/
  }),
  /***/"./src/app/versionmodal/versionmodal.module.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/versionmodal/versionmodal.module.ts ***!
    \*****************************************************/
  /*! exports provided: VersionmodalPageModule */
  /***/
  function srcAppVersionmodalVersionmodalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "VersionmodalPageModule", function () {
      return VersionmodalPageModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _versionmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./versionmodal-routing.module */"./src/app/versionmodal/versionmodal-routing.module.ts");
    /* harmony import */
    var _versionmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./versionmodal.page */"./src/app/versionmodal/versionmodal.page.ts");
    var VersionmodalPageModule = /*#__PURE__*/_createClass(function VersionmodalPageModule() {
      _classCallCheck(this, VersionmodalPageModule);
    });
    VersionmodalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _versionmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["VersionmodalPageRoutingModule"]],
      declarations: [_versionmodal_page__WEBPACK_IMPORTED_MODULE_6__["VersionmodalPage"]]
    })], VersionmodalPageModule);

    /***/
  })
}]);
//# sourceMappingURL=common-es5.js.map