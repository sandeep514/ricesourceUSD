function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive": (
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  }),
  /***/"./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$": (
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/
  /*! no static exports found */
  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };
    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }
      var ids = map[req],
        id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }
    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };
    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-app>\n    <ion-split-pane contentId=\"main-content\">\n        <ion-menu contentId=\"main-content\" type=\"overlay\">\n            <ion-content class=\"menu-settings\"\n                style=\"background-color: rgba(255, 251, 214, 1);background: rgba(255, 251, 214, 1);--background: rgba(255, 251, 214, 1);\">\n\n                <ion-row class=\"menu-header ion-no-padding green\" (click)=\"showProfile()\" style=\"height: 150px\">\n                    <ion-col class=\"user-profile\" size=\"8\" style=\"margin-top: 40px;padding-left: 20px;\">\n                        <ion-row>\n                            <ion-col size=\"5\">\n                                <div>\n                                    <img src=\"../assets/logo.png\" class=\"user-icon\"\n                                        style=\"width: 60px;float: left;margin-right: 20px;margin-top: 0px;\" />\n                                </div>\n                            </ion-col>\n                            <ion-col size=\"7\">\n                                <div>\n                                    <img src=\"../assets/img/Vector.png\" class=\"user-icon\"\n                                        style=\"width: 100%;float: left;margin-right: 20px;margin-top: 15px;\" />\n                                </div>\n                            </ion-col>\n\n                        </ion-row>\n                    </ion-col>\n                    <ion-col size=\"4\" style=\"margin-top: 40px;\">\n                        <img src=\"../assets/img/Group.png\" class=\"user-icon\"\n                            style=\"width: 100px;float: right;margin-top: 0px;\" />\n                    </ion-col>\n\n                    <div class=\"waveheader\">\n                        <svg class=\"waves\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                            viewBox=\"0 24 150 28\" preserveAspectRatio=\"none\" shape-rendering=\"auto\">\n                            <defs>\n                                <path id=\"gentle-wave\"\n                                    d=\"M-160 44c30 40 28-18 70-18s 58 18 98 18 58-18 88-18 58 18 88 18 v44h-352z\" />\n                            </defs>\n                            <g class=\"parallax\">\n                                <use xlink:href=\"#gentle-wave\" x=\"98\" y=\"0\" fill=\"rgba(255,255,255,0.7\" />\n                                <use xlink:href=\"#gentle-wave\" x=\"98\" y=\"3\" fill=\"rgba(255, 251, 214, 1)\" />\n                            </g>\n                        </svg>\n\n                    </div>\n                </ion-row>\n                <!-- <ion-row class=\"menu-header ion-no-padding\" (click)=\"showProfile()\"> -->\n                <!-- <ion-row style=\"width: 100%\">\n                        <ion-col style=\"text-align: right;\">\n                            <ion-label>V 2.0.18 </ion-label>\n                        </ion-col>\n                    </ion-row> -->\n                <!-- <ion-col class=\"user-profile\">\n\t\t\t\t\t\t<img src=\"../assets/user.png\" class=\"user-icon\" /> <br/>\n\t\t\t\t\t\t<ion-label>Welcome {{ hasUser }}</ion-label>\n\t\t\t\t\t</ion-col> -->\n                <!-- </ion-row> -->\n\n                <ion-row style=\"margin-top: 20px;\">\n                    <ion-col size=\"4\">\n                        <div\n                            style=\"width: 70px;height: 70px;border-radius: 100%;overflow: hidden;background: #92b243;display: flex;justify-content: center;align-items: center;\">\n                            <div>\n                                <p style=\"color: #fff;font-size: 30px;\">{{ hasUser.charAt(0) }}</p>\n                            </div>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"8\" style=\"align-self: center;\">\n                        <div>\n                            <h3 style=\"padding: 0px;margin: 0px;color: rgba(145, 178, 67, 1);font-size: 14px;\">Welcome\n                            </h3>\n                            <h3 style=\"padding: 0px;margin: 0px;font-size: 18px;\">{{ hasUser }} </h3>\n                        </div>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item (click)=\"home()\"\n                            style=\"--background: rgba(255, 251, 214, 1) !important;background: rgba(255, 251, 214, 1) !important;\">\n                            <ion-icon src=\"../assets/sidemenu/home.svg\" color=\"primary\"\n                                style=\"margin-right: 20px;\"></ion-icon>\n                            <ion-label style=\"color: #616e7e !important;\">Home</ion-label>\n                        </ion-item>\n                        <ion-item (click)=\"port()\" *ngIf=\"appType =='OTHER' \"\n                            style=\"--background: rgba(255, 251, 214, 1) !important;background: rgba(255, 251, 214, 1) !important;\">\n                            <ion-icon src=\"../assets/sidemenu/home.svg\" color=\"primary\"\n                                style=\"margin-right: 20px;\"></ion-icon>\n                            <ion-label style=\"color: #616e7e !important;\">Transport</ion-label>\n                        </ion-item>\n\n                        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n                            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\"\n                                lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\"\n                                style=\"--background: rgba(255, 251, 214, 1) !important;background: rgba(255, 251, 214, 1) !important;\">\n                                <!-- <img src=\"../assets/sidemenu/{{p.icon}}\" alt=\"\"> -->\n                                <ion-icon src=\"../assets/sidemenu/{{p.icon}}\"\n                                    style=\"color: #000;fill: #000;\"></ion-icon>\n                                <ion-label>{{ p.title }}</ion-label>\n                            </ion-item>\n                        </ion-menu-toggle>\n\n                        <ion-item (click)=\"logout()\"\n                            style=\"--background: rgba(255, 251, 214, 1) !important;background: rgba(255, 251, 214, 1) !important;\">\n                            <ion-icon slot=\"start\" name=\"lock-closed-outline\"\n                                style=\"margin-right: 20px;color: #000;\"></ion-icon>\n                            <ion-label style=\"color: #616e7e !important;\">Logout</ion-label>\n                        </ion-item>\n                        <ion-item (click)=\"deleteaccount()\" style=\"--background: red;--border-color: transparent\">\n                            <ion-icon slot=\"start\" name=\"lock-closed-outline\" style=\"color: #fff\"></ion-icon>\n                            <ion-label style=\"color: #fff !important;\">Delete Account</ion-label>\n                        </ion-item>\n\n                        <!-- <div style=\"--background: #92B243;width: 47%;--min-height: 40px;padding: 10px;background: #92B243;text-align: center;border-radius: 10px;\" *ngIf=\"appType == 'USD' \" (click)=\"goToUSD()\">\n                            <ion-label style=\"color: #fff !important;padding: 0;margin: 0;text-align: center;\">Switch to Rupee</ion-label>\n                        </div>\n\n                        <div style=\"--background: #92B243;width: 47%;--min-height: 40px;padding: 10px;background: #92B243;text-align: center;border-radius: 10px;\" *ngIf=\"appType != 'USD' \" (click)=\"goToUSD()\">\n                            <ion-label style=\"color: #fff !important;padding: 0;margin: 0;text-align: center;\">Switch to USD</ion-label>\n                        </div> -->\n                    </ion-col>\n                </ion-row>\n\n                <!-- <ion-list id=\"inbox-list\">\n                    <ion-list-header>Inbox</ion-list-header>\n                    <ion-note>hi@ionicframework.com</ion-note>\n\n                    <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n                        <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n                            <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n                            <ion-label>{{ p.title }}</ion-label>\n                        </ion-item>\n                    </ion-menu-toggle>\n                </ion-list> -->\n\n                <!-- <ion-list id=\"labels-list\">\n                    <ion-list-header>Labels</ion-list-header>\n\n                    <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n                        <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n                        <ion-label>{{ label }}</ion-label>\n                    </ion-item>\n                </ion-list> -->\n            </ion-content>\n        </ion-menu>\n        <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n    </ion-split-pane>\n</ion-app>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/brok-login/brok-login.component.html": (
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brok-login/brok-login.component.html ***!
    \********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBrokLoginBrokLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content>\n\t<ion-row class=\"logo-row\">\n\t\t<ion-col align=\"center\">\n\t\t\t<img src=\"../../assets/SNTC LOGO (1).png\" class=\"logo\" />\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col align=\"center\">\n\t\t\t<ion-item class=\"login-fields\">\n\t\t\t\t<img src=\"../../assets/user-icon.png\" slot=\"start\" class=\"user-icon\" />\n\t\t\t\t<ion-label position=\"floating\">Email</ion-label>\n\t\t\t\t<ion-input></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"login-fields\">\n\t\t\t\t<img src=\"../../assets/pass-icon.png\" slot=\"start\" class=\"user-icon\" />\n\t\t\t\t<ion-label position=\"floating\">Password</ion-label>\n\t\t\t\t<ion-input></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"login-button\">\n\t\t<ion-col align=\"center\">\n\t\t\t<ion-button class=\"login-now\">Login Now</ion-button>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col align=\"center\" class=\"or-text\">\n\t\t\t<h5>OR</h5>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"social-row\">\n\t\t<ion-col align=\"right\">\n\t\t\t<img src=\"../../assets/fb-icon.png\" />\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t<img src=\"../../assets/gmail-icon.png\" />\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"create-account\">\n\t\t<ion-col align=\"center\">\n\t\t\t<h4>Create account</h4>\n\t\t</ion-col>\n\t</ion-row>\n</ion-content>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/imageprev/imageprev.page.html": (
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imageprev/imageprev.page.html ***!
    \*************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppImageprevImageprevPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content>\n\t\n\t<ion-slides pager=\"false\" [options]=\"slideOpts\" style=\"position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;height: 450px\">\n\t\t<ion-slide >\n\t\t\t<div class=\"crossModal\" (click)=\"closeModal()\" style=\"position: absolute;top: 15px;right: 10px;z-index: 999999;\">\n\t\t\t\tX\n\t\t\t</div>\n\t\t\t<img src=\"{{ image }}\" class=\"slide-image\">\n\t\t</ion-slide>\n\t\t\n\t</ion-slides>\n    <!-- <img src=\"\" alt=\"here\" style=\"position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;\"> -->\n</ion-content>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/loader-component/loader-component.page.html": (
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loader-component/loader-component.page.html ***!
    \***************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoaderComponentLoaderComponentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content>\n  <p>hello</p>\n</ion-content>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/mill-status/mill-status.component.html": (
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mill-status/mill-status.component.html ***!
    \**********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMillStatusMillStatusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t  \t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"closeModal()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t  \t</ion-buttons>\n\t  \t<ion-title class=\"header-title\">Mill Status</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-row>\n\t\t<ion-col size=\"12\">\n\t\t\t<ion-list>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Date</ion-label>\n\t\t\t\t\t<ion-datetime displayFormat=\"DD-MMMM-YYYY\" value=\"\" [(ngModel)]=\"formData['date']\"></ion-datetime>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Select Seller</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" interface=\"popover\" [(ngModel)]=\"formData['seller']\">\n\t\t\t\t\t  \t<ion-select-option value=\"{{ seller.key }}\" *ngFor=\"let seller of sellers | keyvalue\">{{ seller.value }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Visited</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" interface=\"popover\" [(ngModel)]=\"formData['visit_status']\">\n\t\t\t\t\t  \t<ion-select-option value=\"1\">Yes</ion-select-option>\n\t\t\t\t\t  \t<ion-select-option value=\"0\">No</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Remarks if visited</ion-label>\n\t\t\t\t\t<ion-textarea clearOnEdit=\"true\" rows=\"6\" [(ngModel)]=\"formData['remarks']\"></ion-textarea>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<ion-button expand=\"block\" class=\"primary-button\" (click)=\"saveMillStatus()\">Save Mill Status</ion-button>\n\t\t</ion-col>\n\t</ion-row>\n</ion-content>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/planpage/planpage.page.html": (
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/planpage/planpage.page.html ***!
    \***********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlanpagePlanpagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\" style=\"color: #fff \" (click)='openModel()'>\n\t\t\t<img src=\"../../assets/menu/whitemenu.png\" style=\"width: 25px;margin-left: 10px;\" />\n\t\t\t<!-- Menu -->\n\t\t</ion-buttons>\n\n\t\t<ion-title>Available Plans</ion-title>\n\n\t\t<ion-buttons slot=\"end\" (click)=\"closeme()\">\n\t\t\t<a href=\"javascript:void(0);\"\n\t\t\t\tstyle=\"color:black;text-decoration: none;padding-right: 10px;color: #FFFBD6 ;\">Back</a>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"\">\n\n\t<!-- <div *ngFor=\"let plan of listPlans | keyvalue\">\n\t\t<div>\n\t\t\t<h2 class=\"planName green font-lightgreen\" >{{ plan.key }}</h2>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"4\" size-md *ngFor=\"let subPlan of plan.value.SubPlan | keyvalue\">\n\n\t\t\t\t\t<h5 class=\"planName font-darkgreen\">{{ subPlan.value.data.name }}</h5>\n\t\t\t\t\t<div class=\"price green\">\n\t\t\t\t\t\t<h5 class=\"planName font-lightgreen\" style=\"padding-bottom: 0; margin-bottom: 0;text-decoration: line-through\">₨ {{ subPlan.value.price.actualPrice }}</h5>\n\t\t\t\t\t\t<h5 class=\"planName font-lightgreen\" style=\"padding-top: 0; margin-top: 0;font-weight: 600;margin-bottom: 0px;\">₨ {{ subPlan.value.price.offerPrice }}</h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<p class=\"font-darkgreen\" style=\"font-size: 20px;text-align: center;padding-bottom: 0;margin-bottom: 10px;\">Launch Offer</p>\n\t\t\t\t\t<p style=\"text-align: center;padding-top: 0;margin-top: 0;\" class=\"font-darkgreen\">\n\t\t\t\t\t\t<small style=\"font-size: 100%;\">Save {{ floatingTwo(subPlan.value.price.offerPrice , subPlan.value.price.actualPrice) }}%</small>\n\t\t\t\t\t</p>\n\t\t\t\t\t{{ getSplitsValue( subPlan.value.price.feature ) }}\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"benefits\">\n\t\t\t\t\t\t<p>Benefits</p>\n\t\t\t\t\t\t<p *ngFor=\"let featureSpl of featureSplit\" style=\"margin-bottom: 0;font-size: 13px;margin-top: 3px;\">\n\t\t\t\t\t\t\t{{ featureSpl }}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<ion-button class=\"buynow\" fill=\"outline\" (click)=\"buynow( plan.value.plan.id , subPlan.value.data.id ,subPlan.value.price )\">Subscribe</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\t</div> -->\n\n\t<div>\n\t\t<div>\n\t\t\t<ion-row style=\"padding: 0px 10px\">\n\t\t\t\t<ion-row style=\"width: 100%;\">\n\t\t\t\t\t<ion-col size=\"8\"></ion-col>\n\t\t\t\t\t<ng-container *ngIf=\"showScreenshotStatus == 0\">\n\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t<p (click)=\"showScreenshot()\" style=\"padding: 10px;background: #92b243;color: white;border-radius: 10px;width: 100%;text-align: center;font-size: 20px;\n\t\t\t\t\t\t\tfont-weight: bold;\">Demo</p>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t<ng-container *ngIf=\"showScreenshotStatus == 1\">\n\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t<p (click)=\"showScreenshot()\" style=\"padding: 10px;background: #92b243;color: white;border-radius: 10px;width: 100%;text-align: center;font-size: 20px;\n\t\t\t\t\t\t\tfont-weight: bold;\">Back</p>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ng-container *ngIf=\"showScreenshotStatus == 1\">\n\t\t\t\t\t<div style=\"position: absolute;top: 36%;left: 16px;font-size: 25px;z-index: 2;\"\n\t\t\t\t\t\t(click)=\"slidePrev()\">\n\t\t\t\t\t\t<ion-icon name=\"arrow-back\" style=\"font-size: 30px\"> </ion-icon>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div style=\"position: absolute;top: 36%;right: 16px;font-size: 25px;z-index: 2;\"\n\t\t\t\t\t\t(click)=\"slideNext()\">\n\t\t\t\t\t\t<ion-icon name=\"arrow-forward\" style=\"font-size: 30px\"> </ion-icon>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"height: auto;\" #slides>\n\t\t\t\t\t\t<ion-slide style=\"width: 260px;margin-right: 1px;height: 485px;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/img/demo/prices.png\" style=\"width: 80%\" />\n\t\t\t\t\t\t</ion-slide>\n\n\t\t\t\t\t\t<ion-slide style=\"width: 260px;margin-right: 1px;height: 485px;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/img/demo/ocean.png\" style=\"width: 80%\" />\n\t\t\t\t\t\t</ion-slide>\n\n\t\t\t\t\t\t<ion-slide style=\"width: 260px;margin-right: 1px;height: 485px;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/img/demo/detail.png\" style=\"width: 80%\" />\n\t\t\t\t\t\t</ion-slide>\n\n\t\t\t\t\t\t<ion-slide style=\"width: 260px;margin-right: 1px;height: 485px;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/img/demo/buyquery.png\" style=\"width: 80%\" />\n\t\t\t\t\t\t</ion-slide>\n\n\t\t\t\t\t\t<ion-slide style=\"width: 260px;margin-right: 1px;height: 485px;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/img/demo/calculator.png\" style=\"width: 80%\" />\n\t\t\t\t\t\t</ion-slide>\n\n\t\t\t\t\t\t<ion-slide style=\"width: 260px;margin-right: 1px;height: 485px;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/img/demo/bids.png\" style=\"width: 80%\" />\n\t\t\t\t\t\t</ion-slide>\n\n\t\t\t\t\t\t<ion-slide style=\"width: 260px;margin-right: 1px;height: 485px;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/img/demo/hotdeals.png\" style=\"width: 80%\" />\n\t\t\t\t\t\t</ion-slide>\n\n\t\t\t\t\t\t<ion-slide style=\"width: 260px;margin-right: 1px;height: 485px;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/img/demo/otherservices.png\" style=\"width: 80%\" />\n\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t</ion-slides>\n\t\t\t\t</ng-container>\n\t\t\t\t<!-- <p class=\"font-darkgreen\" style=\"font-size: 18px;text-align: center;padding-bottom: 0;margin-bottom: 10px;padding: 0 10px; \">This is a paid Service, But Relax you can access this by subscribing Following Plan.</p> -->\n\n\t\t\t\t<ion-row style=\"width: 100%;text-align: center;\" *ngIf=\"showTrialPeriod == true\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\tUse 30 days free trial period <button\n\t\t\t\t\t\t\tstyle=\"background: #92b245;padding: 10px 12px;border-radius: 20px;font-size: 17px;width: auto;text-transform: capitalize;\"\n\t\t\t\t\t\t\t(click)=\"startTrial()\">Activate Now</button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row style=\"width: 100%;justify-content: center;\" *ngIf=\"isUSDRoleAvailable != true\">\n\t\t\t\t\t<ion-col size=\"6\" size-md *ngFor=\"let plan of listUSDPlans\">\n\t\t\t\t\t\t<div style=\"border: 1px solid #92B242;border-radius: 10px;overflow: hidden;\"\n\t\t\t\t\t\t\t[class.activeCurrentPlan]=\"selectedPlanId == plan.id\" (click)=\"updateSelectedPlan(plan)\">\n\t\t\t\t\t\t\t<h2 class=\"planName green font-lightgreen\" style=\"text-transform: uppercase;padding: 0;margin: 0px 0px;\n\t\t\t\t\t\t\tpadding: 7px;\">{{ plan.plan_name }}</h2>\n\t\t\t\t\t\t\t<h5 class=\"planName font-darkgreen\"></h5>\n\n\t\t\t\t\t\t\t<div class=\"price green\" style=\"padding: 7px 0px\">\n\t\t\t\t\t\t\t\t<h5 class=\"planName font-lightgreen\"\n\t\t\t\t\t\t\t\t\tstyle=\"padding-bottom: 0; margin-bottom: 0;text-decoration: line-through;padding: 0;margin: 0px\">\n\t\t\t\t\t\t\t\t\t₨ {{ plan.actual_price }}\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<h5 class=\"planName font-lightgreen\"\n\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 0;margin-top: 0;font-weight: 600;margin-bottom: 0px;\">\n\t\t\t\t\t\t\t\t\t₨ {{ plan.discounted_prie }}\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p style=\"text-align: center;padding-top: 0;margin-top: 0;padding: 0 10px;\"\n\t\t\t\t\t\t\t\tclass=\"font-darkgreen\">\n\t\t\t\t\t\t\t\t<small style=\"font-size: 14px;\">{{ plan.plan_desc }}</small>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<!-- <p class=\"font-darkgreen\" style=\"font-size: 20px;text-align: center;padding-bottom: 0;margin-bottom: 10px;\">Launch Offer</p> -->\n\t\t\t\t\t\t\t<!-- <p style=\"text-align: center;padding-top: 0;margin-top: 0;\" class=\"font-darkgreen\">\n\t\t\t\t\t\t\t\t<small style=\"font-size: 100%;\">Valid for: {{plan.valid_months}} Months</small>\n\t\t\t\t\t\t\t</p> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row style=\"width: 100%;justify-content: center;\" *ngIf=\"isUSDRoleAvailable == true\">\n\t\t\t\t\t<ion-col size=\"6\" size-md *ngFor=\"let plan of listUSDPlans\">\n\t\t\t\t\t\t<div style=\"border: 1px solid #92B242;border-radius: 10px;overflow: hidden;\"\n\t\t\t\t\t\t\t[class.activeCurrentPlan]=\"selectedPlanId == plan.id\" (click)=\"updateSelectedPlan(plan)\">\n\t\t\t\t\t\t\t<h2 class=\"planName green font-lightgreen\" style=\"text-transform: uppercase;padding: 0;margin: 0px 0px;\n\t\t\t\t\t\t\tpadding: 7px;\">{{ plan.plan_name }}</h2>\n\t\t\t\t\t\t\t<h5 class=\"planName font-darkgreen\"></h5>\n\n\t\t\t\t\t\t\t<div class=\"price green\" style=\"padding: 7px 0px\">\n\t\t\t\t\t\t\t\t<h5 class=\"planName font-lightgreen\"\n\t\t\t\t\t\t\t\t\tstyle=\"padding-bottom: 0; margin-bottom: 0;text-decoration: line-through;padding: 0;margin: 0px\">\n\t\t\t\t\t\t\t\t\t${{ plan.actual_price_usd }}\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<h5 class=\"planName font-lightgreen\"\n\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 0;margin-top: 0;font-weight: 600;margin-bottom: 0px;\">\n\t\t\t\t\t\t\t\t\t${{ plan.discounted_price_usd }}\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p style=\"text-align: center;padding-top: 0;margin-top: 0;padding: 0 10px;\"\n\t\t\t\t\t\t\t\tclass=\"font-darkgreen\">\n\t\t\t\t\t\t\t\t<small style=\"font-size: 14px;\">{{ plan.plan_desc }}</small>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<!-- <p class=\"font-darkgreen\" style=\"font-size: 20px;text-align: center;padding-bottom: 0;margin-bottom: 10px;\">Launch Offer</p> -->\n\t\t\t\t\t\t\t<!-- <p style=\"text-align: center;padding-top: 0;margin-top: 0;\" class=\"font-darkgreen\">\n\t\t\t\t\t\t\t\t<small style=\"font-size: 100%;\">Valid for: {{plan.valid_months}} Months</small>\n\t\t\t\t\t\t\t</p> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\n\t\t\t\t</ion-row>\n\n\t\t\t</ion-row>\n\n\t\t\t<p style=\"text-align: center; font-size: 12px; padding: 0; margin: 0; color: #92b243; font-weight: bold;\">\n\t\t\t\t*Inclusive of GST</p>\n\n\t\t\t<div>\n\t\t\t\t<ul style=\"list-style: none;\" *ngIf=\"isUSDRoleAvailable != true\">\n\t\t\t\t\t<li style=\"float: left;width: 70%;text-align: right;margin-top: 5px;\">Total in INR: </li>\n\t\t\t\t\t<li style=\"width: 30%;float: left;\">\n\t\t\t\t\t\t<h2\n\t\t\t\t\t\t\tstyle=\"text-align: right;margin-right: 20px; padding: 0;margin: 0;margin-left: 10px;text-align: left;\">\n\t\t\t\t\t\t\t₹{{ selectedPlanDiscountedAmountINR }}</h2>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul style=\"list-style: none;\" *ngIf=\"isUSDRoleAvailable == true\">\n\t\t\t\t\t<li style=\"float: left;width: 70%;text-align: right;margin-top: 5px;\">Total in USD: </li>\n\t\t\t\t\t<li style=\"width: 30%;float: left;\">\n\t\t\t\t\t\t<h2\n\t\t\t\t\t\t\tstyle=\"text-align: right;margin-right: 20px; padding: 0;margin: 0;margin-left: 10px;text-align: left;\">\n\t\t\t\t\t\t\t${{ selectedPlanDiscountedAmountUSD }}</h2>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"testing\"></div>\n\n\t\t\t<ion-button *ngIf=\"isDomesticRoleAvailable == true && isUSDRoleAvailable != true\" fill=\"outline\"\n\t\t\t\t(click)=\"buynow( )\"\n\t\t\t\tstyle=\"background-color: #fff;--background-color: #fff;min-height: 43px;margin: 10px 6px;\">\n\t\t\t\t<img src=\"../../assets/rzp-logo-positive-padding.png\" style=\"width: 50%\" />\n\t\t\t</ion-button>\n\t\t\t<!-- <ion-button class=\"buynow\" fill=\"outline\" (click)=\"buynow( plan )\" style=\"width: 40%;float: left;\"><img src=\"../../assets/rzp-logo-positive-padding.png\" /></ion-button> -->\n\t\t\t<ng-container *ngIf=\"isUSDRoleAvailable == true\">\n\t\t\t\t<ion-button #stripeButton style=\"width: 1px;padding: 0;margin: 0px;height: 0px;\"></ion-button>\n\n\t\t\t\t<ion-card class=\"welcome-card\">\n\t\t\t\t\t<ion-img\n\t\t\t\t\t\tsrc=\"../../assets/png-clipart-earring-necklace-gemstone-logo-glass-visa-logo-gemstone-glass-removebg-preview.png\"></ion-img>\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-subtitle>SNTC</ion-card-subtitle>\n\t\t\t\t\t\t<ion-card-title></ion-card-title>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col>Total Payment</ion-col>\n\t\t\t\t\t\t\t<ion-col> {{currencyIcon}}{{ selectedPlanDiscountedAmountUSD }} </ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t<form action=\"/\" method=\"post\" id=\"payment-form\">\n\t\t\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t\t\t<div id=\"card-element\"> <!-- a Stripe Element will be inserted here. --> </div>\n\t\t\t\t\t\t\t\t<!-- Used to display Element errors -->\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ion-button type=\"submit\" color=\"success\" expand=\"full\">Make Payment</ion-button>\n\t\t\t\t\t\t\t<div id=\"card-errors\" role=\"alert\" style=\"color: red;\"></div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t</ion-card>\n\n\t\t\t</ng-container>\n\n\n\t\t\t<p style=\"font-size: 0px\">{{ isUSDRoleAvailable }}</p>\n\t\t</div>\n\t</div>\n\n\n\n\n</ion-content>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.component.html": (
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.component.html ***!
    \**************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPopoverPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-list class=\"no-lines\">\n\t<ion-item button lines=\"none\" (click)=\"logout()\">\n\t\tLogout\n\t</ion-item>\n</ion-list>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/sample-entry/sample-entry.component.html": (
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sample-entry/sample-entry.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSampleEntrySampleEntryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t  \t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"closeModal()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t  \t</ion-buttons>\n\t  \t<ion-title class=\"header-title\">Sample Entry</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-row>\n\t\t<ion-col size=\"12\">\n\t\t\t<ion-list>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Date</ion-label>\n\t\t\t\t\t<ion-datetime displayFormat=\"DD-MMMM-YYYY\" value=\"\" [(ngModel)]=\"formData['date']\"></ion-datetime>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Select Seller</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"formData['seller']\">\n\t\t\t\t\t  \t<ion-select-option value=\"{{ seller.key }}\" *ngFor=\"let seller of sellers | keyvalue\">{{ seller.value }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Select Quality</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"formData['quality']\">\n\t\t\t\t\t\t<ion-select-option value=\"{{ quality.key }}\" *ngFor=\"let quality of qualities | keyvalue\">{{ quality.value }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Select Packing</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"formData['packing']\">\n\t\t\t\t\t\t<ion-select-option value=\"{{ packing.key }}\" *ngFor=\"let packing of packings | keyvalue\">{{ packing.value }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Select Packing Type</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"formData['packing_type']\">\n\t\t\t\t\t\t<ion-select-option value=\"{{ packingType.key }}\" *ngFor=\"let packingType of packingTypes | keyvalue\">{{ packingType.value }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">No. of Bags</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"formData['no_of_bags']\">\n\t\t\t\t\t\t<ion-select-option value=\"{{ noOfBag.key }}\" *ngFor=\"let noOfBag of noOfBags\">{{ noOfBag.value }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item *ngIf=\"formData['no_of_bags'] == 'manual'\">\n\t\t\t\t\t<ion-label position=\"floating\">Enter Bags Qty</ion-label>\n\t\t\t\t\t<ion-input [(ngModel)]=\"formData['bags_qty']\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Qty</ion-label>\n\t\t\t\t\t<ion-input [(ngModel)]=\"formData['qty']\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t</ion-col>\n\t\t<ion-col align=\"center\">\n\t\t\t<img [src]=\"sampleImage\" (click)=\"getPicture()\" />\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<ion-button expand=\"block\" class=\"primary-button\" (click)=\"saveSample()\">Save Sample</ion-button>\n\t\t</ion-col>\n\t</ion-row>\n</ion-content>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/send-courier/send-courier.component.html": (
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/send-courier/send-courier.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSendCourierSendCourierComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t  \t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"closeModal()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t  \t</ion-buttons>\n\t  \t<ion-title class=\"header-title\">Send Courier</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-row>\n\t\t<ion-col size=\"12\">\n\t\t\t<ion-list>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Date</ion-label>\n\t\t\t\t\t<ion-datetime displayFormat=\"DD-MMMM-YYYY\" value=\"\" [(ngModel)]=\"formData['date']\"></ion-datetime>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Sent Via</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"formData['sent_via']\">\n\t\t\t\t\t  \t<ion-select-option value=\"{{ sent.key }}\" *ngFor=\"let sent of sentVia | keyvalue\">{{ sent.value }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Details/AWB no/Person Name</ion-label>\n\t\t\t\t\t<ion-input [(ngModel)]=\"formData['details']\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label>Pending Courier Samples</ion-label>\n\t\t\t\t\t<ion-select value=\"brown\" interface=\"popover\" multiple [(ngModel)]=\"formData['sample']\">\t\n\t\t\t\t\t  \t<ion-select-option value=\"{{ sample.id }}\" *ngFor=\"let sample of samples\">{{ sample?.quality_rel.name }} ({{ sample?.supplier_rel.name }})</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<ion-button expand=\"block\" class=\"primary-button\" (click)=\"saveCourier()\">Save Courier</ion-button>\n\t\t</ion-col>\n\t</ion-row>\n</ion-content>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/splashscreen/splashscreen.page.html": (
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splashscreen/splashscreen.page.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSplashscreenSplashscreenPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content style=\"--background: #92B243\">\n\t<div class=\"gif\">\n\t\t<div style=\"text-align: center\">\n\t\t\t<img src=\"./../../assets/sntcsplashscreen.jpeg\" style=\"width: 100%\" alt=\"\">\n\t\t</div>\n\t\t<!-- <img src=\"\" alt=\"\" style=\"width: 100%;\"> -->\n\t</div>\n</ion-content>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/trialperiod/trialperiod.page.html": (
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trialperiod/trialperiod.page.html ***!
    \*****************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTrialperiodTrialperiodPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content class=\"bg-lightgreen\">\n\t<div class=\"logo\">\n\t\t<img src=\"../../assets/icon_logo.png\" class=\"app-logo\"/>\n\t</div>\n\t<a href=\"javascript:void(0);\" (click)=\"closeModal()\" class=\"closeModal\"> X </a>\n\t<div class=\"content\">\n\t\t<p style=\"padding-bottom: 10px;\"> Would you like to use One Month Trail period. </p>\n\t\t<button style=\"background: #92b245;padding: 10px 20px;border-radius: 20px;font-size: 15px;\" onclick=\"startTrialPeriod()\"> Use Trial Period Now </button>\n\t</div>\n</ion-content>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/usdconvertmodal/usdconvertmodal.page.html": (
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usdconvertmodal/usdconvertmodal.page.html ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsdconvertmodalUsdconvertmodalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content class=\"bg-lightgreen\">\n\t<div class=\"logo\">\n\t\t<img src=\"../../assets/icon_logo.png\" class=\"app-logo\"/>\n\t</div>\n\t<a href=\"javascript:void(0);\" (click)=\"closeModal()\" class=\"closeModal\"> X </a>\n\t<div class=\"content\">\n\t\t<p style=\"padding-bottom: 10px;\">Upgrade to USD pricing app for added on features today. </p>\n\t</div>\n</ion-content>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/versionmodal/versionmodal.page.html": (
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/versionmodal/versionmodal.page.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVersionmodalVersionmodalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content class=\"bg-lightgreen\">\n\t<div class=\"logo\">\n\t\t<img src=\"../../assets/icon_logo.png\" class=\"app-logo\"/>\n\t</div>\n\t<a href=\"javascript:void(0);\" (click)=\"closeModal()\" class=\"closeModal\"> X </a>\n\t<div class=\"content\">\n\t\t<p style=\"padding-bottom: 10px;\">You are using an older version of SNTC app. Please update to get latest Verison. </p>\n\t\t<div>\n\t\t\t<p (click)=\"redirectToPlaystore()\" style=\"color: green\">Update Now</p>\n\t\t</div>\n\t</div>\n</ion-content>";

    /***/
  }),
  /***/"./node_modules/tslib/tslib.es6.js": (
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  }),
  /***/"./src/app/app-routing.module.ts": (
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _islogin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./islogin.guard */"./src/app/islogin.guard.ts");
    var routes = [{
      path: '',
      redirectTo: 'prices',
      pathMatch: 'full'
    }, {
      path: 'folder/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | folder-folder-module */"folder-folder-module").then(__webpack_require__.bind(null, /*! ./folder/folder.module */"./src/app/folder/folder.module.ts")).then(function (m) {
          return m.FolderPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | login-login-module */"login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */"./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | dashboard-dashboard-module */"dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */"./src/app/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardPageModule;
        });
      }
    }, {
      path: 'prices',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | prices-prices-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("default~port-port-module~prices-prices-module~priceusd-priceusd-module~quality-details-quality-detai~d1daa1b6"), __webpack_require__.e("common"), __webpack_require__.e("prices-prices-module")]).then(__webpack_require__.bind(null, /*! ./prices/prices.module */"./src/app/prices/prices.module.ts")).then(function (m) {
          return m.PricesPageModule;
        });
      },
      canActivate: [_islogin_guard__WEBPACK_IMPORTED_MODULE_3__["IsloginGuard"]]
    }, {
      path: 'about',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | about-about-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("about-about-module")]).then(__webpack_require__.bind(null, /*! ./about/about.module */"./src/app/about/about.module.ts")).then(function (m) {
          return m.AboutPageModule;
        });
      }
    }, {
      path: 'port',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | port-port-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("default~port-port-module~prices-prices-module~priceusd-priceusd-module~quality-details-quality-detai~d1daa1b6"), __webpack_require__.e("port-port-module")]).then(__webpack_require__.bind(null, /*! ./port/port.module */"./src/app/port/port.module.ts")).then(function (m) {
          return m.PortPageModule;
        });
      }
    }, {
      path: 'contactmodal',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | contactmodal-contactmodal-module */"common").then(__webpack_require__.bind(null, /*! ./contactmodal/contactmodal.module */"./src/app/contactmodal/contactmodal.module.ts")).then(function (m) {
          return m.ContactmodalPageModule;
        });
      }
    }, {
      path: 'ricechart',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | ricechart-ricechart-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("default~port-port-module~prices-prices-module~priceusd-priceusd-module~quality-details-quality-detai~d1daa1b6"), __webpack_require__.e("ricechart-ricechart-module")]).then(__webpack_require__.bind(null, /*! ./ricechart/ricechart.module */"./src/app/ricechart/ricechart.module.ts")).then(function (m) {
          return m.RicechartPageModule;
        });
      }
    }, {
      path: 'splashscreen',
      loadChildren: function loadChildren() {
        return Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./splashscreen/splashscreen.module */"./src/app/splashscreen/splashscreen.module.ts")).then(function (m) {
          return m.SplashscreenPageModule;
        });
      }
    }, {
      path: 'gallery',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | gallery-gallery-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("gallery-gallery-module")]).then(__webpack_require__.bind(null, /*! ./gallery/gallery.module */"./src/app/gallery/gallery.module.ts")).then(function (m) {
          return m.GalleryPageModule;
        });
      }
    }, {
      path: 'gallerydetails',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | gallerydetails-gallerydetails-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("gallerydetails-gallerydetails-module")]).then(__webpack_require__.bind(null, /*! ./gallerydetails/gallerydetails.module */"./src/app/gallerydetails/gallerydetails.module.ts")).then(function (m) {
          return m.GallerydetailsPageModule;
        });
      }
    }, {
      path: 'imageprev',
      loadChildren: function loadChildren() {
        return Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./imageprev/imageprev.module */"./src/app/imageprev/imageprev.module.ts")).then(function (m) {
          return m.ImageprevPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | register-register-module */"register-register-module").then(__webpack_require__.bind(null, /*! ./register/register.module */"./src/app/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'otp',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | otp-otp-module */"otp-otp-module").then(__webpack_require__.bind(null, /*! ./otp/otp.module */"./src/app/otp/otp.module.ts")).then(function (m) {
          return m.OtpPageModule;
        });
      }
    }, {
      path: 'forgotpassword',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | forgotpassword-forgotpassword-module */"forgotpassword-forgotpassword-module").then(__webpack_require__.bind(null, /*! ./forgotpassword/forgotpassword.module */"./src/app/forgotpassword/forgotpassword.module.ts")).then(function (m) {
          return m.ForgotpasswordPageModule;
        });
      }
    }, {
      path: 'aboutus',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | aboutus-aboutus-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("aboutus-aboutus-module")]).then(__webpack_require__.bind(null, /*! ./aboutus/aboutus.module */"./src/app/aboutus/aboutus.module.ts")).then(function (m) {
          return m.AboutusPageModule;
        });
      }
    }, {
      path: 'termsandcondition',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | termsandcondition-termsandcondition-module */"termsandcondition-termsandcondition-module").then(__webpack_require__.bind(null, /*! ./termsandcondition/termsandcondition.module */"./src/app/termsandcondition/termsandcondition.module.ts")).then(function (m) {
          return m.TermsandconditionPageModule;
        });
      }
    }, {
      path: 'changepassword',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | changepassword-changepassword-module */"changepassword-changepassword-module").then(__webpack_require__.bind(null, /*! ./changepassword/changepassword.module */"./src/app/changepassword/changepassword.module.ts")).then(function (m) {
          return m.ChangepasswordPageModule;
        });
      }
    }, {
      path: 'verifyotp',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | verifyotp-verifyotp-module */"verifyotp-verifyotp-module").then(__webpack_require__.bind(null, /*! ./verifyotp/verifyotp.module */"./src/app/verifyotp/verifyotp.module.ts")).then(function (m) {
          return m.VerifyotpPageModule;
        });
      }
    }, {
      path: 'chat-detail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | chat-detail-chat-detail-module */"chat-detail-chat-detail-module").then(__webpack_require__.bind(null, /*! ./chat-detail/chat-detail.module */"./src/app/chat-detail/chat-detail.module.ts")).then(function (m) {
          return m.ChatDetailPageModule;
        });
      }
    }, {
      path: 'admin/chat',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | admin-chat-chat-module */"admin-chat-chat-module").then(__webpack_require__.bind(null, /*! ./admin/chat/chat.module */"./src/app/admin/chat/chat.module.ts")).then(function (m) {
          return m.ChatPageModule;
        });
      }
    }, {
      path: 'admin/chatdetails',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | admin-chatdetails-chatdetails-module */"admin-chatdetails-chatdetails-module").then(__webpack_require__.bind(null, /*! ./admin/chatdetails/chatdetails.module */"./src/app/admin/chatdetails/chatdetails.module.ts")).then(function (m) {
          return m.ChatdetailsPageModule;
        });
      }
    }, {
      path: 'planpage',
      loadChildren: function loadChildren() {
        return Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./planpage/planpage.module */"./src/app/planpage/planpage.module.ts")).then(function (m) {
          return m.PlanpagePageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | profile-profile-module */[__webpack_require__.e("default~editprofile-editprofile-module~profile-profile-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */"./src/app/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'notifications',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | notifications-notifications-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("notifications-notifications-module")]).then(__webpack_require__.bind(null, /*! ./notifications/notifications.module */"./src/app/notifications/notifications.module.ts")).then(function (m) {
          return m.NotificationsPageModule;
        });
      }
    }, {
      path: 'updatepassword',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | updatepassword-updatepassword-module */"updatepassword-updatepassword-module").then(__webpack_require__.bind(null, /*! ./updatepassword/updatepassword.module */"./src/app/updatepassword/updatepassword.module.ts")).then(function (m) {
          return m.UpdatepasswordPageModule;
        });
      }
    }, {
      path: 'editprofile',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | editprofile-editprofile-module */[__webpack_require__.e("default~editprofile-editprofile-module~profile-profile-module"), __webpack_require__.e("editprofile-editprofile-module")]).then(__webpack_require__.bind(null, /*! ./editprofile/editprofile.module */"./src/app/editprofile/editprofile.module.ts")).then(function (m) {
          return m.EditprofilePageModule;
        });
      }
    }, {
      path: 'versionmodal',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | versionmodal-versionmodal-module */"common").then(__webpack_require__.bind(null, /*! ./versionmodal/versionmodal.module */"./src/app/versionmodal/versionmodal.module.ts")).then(function (m) {
          return m.VersionmodalPageModule;
        });
      }
    }, {
      path: 'priceusd',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | priceusd-priceusd-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("default~port-port-module~prices-prices-module~priceusd-priceusd-module~quality-details-quality-detai~d1daa1b6"), __webpack_require__.e("common"), __webpack_require__.e("priceusd-priceusd-module")]).then(__webpack_require__.bind(null, /*! ./priceusd/priceusd.module */"./src/app/priceusd/priceusd.module.ts")).then(function (m) {
          return m.PriceusdPageModule;
        });
      }
    }, {
      path: 'oceanfreights',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | oceanfreights-oceanfreights-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("oceanfreights-oceanfreights-module")]).then(__webpack_require__.bind(null, /*! ./oceanfreights/oceanfreights.module */"./src/app/oceanfreights/oceanfreights.module.ts")).then(function (m) {
          return m.OceanfreightsPageModule;
        });
      }
    }, {
      path: 'quality-details',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | quality-details-quality-details-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("default~port-port-module~prices-prices-module~priceusd-priceusd-module~quality-details-quality-detai~d1daa1b6"), __webpack_require__.e("quality-details-quality-details-module")]).then(__webpack_require__.bind(null, /*! ./quality-details/quality-details.module */"./src/app/quality-details/quality-details.module.ts")).then(function (m) {
          return m.QualityDetailsPageModule;
        });
      }
    }, {
      path: 'buy',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | buy-buy-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("buy-buy-module")]).then(__webpack_require__.bind(null, /*! ./buy/buy.module */"./src/app/buy/buy.module.ts")).then(function (m) {
          return m.BuyPageModule;
        });
      }
    }, {
      path: 'bid',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | bid-bid-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("bid-bid-module")]).then(__webpack_require__.bind(null, /*! ./bid/bid.module */"./src/app/bid/bid.module.ts")).then(function (m) {
          return m.BidPageModule;
        });
      }
    }, {
      path: 'calculator',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | calculator-calculator-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("calculator-calculator-module")]).then(__webpack_require__.bind(null, /*! ./calculator/calculator.module */"./src/app/calculator/calculator.module.ts")).then(function (m) {
          return m.CalculatorPageModule;
        });
      }
    }, {
      path: 'mybids',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | mybids-mybids-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("mybids-mybids-module")]).then(__webpack_require__.bind(null, /*! ./mybids/mybids.module */"./src/app/mybids/mybids.module.ts")).then(function (m) {
          return m.MybidsPageModule;
        });
      }
    }, {
      path: 'otherservices',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | otherservices-otherservices-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("otherservices-otherservices-module")]).then(__webpack_require__.bind(null, /*! ./otherservices/otherservices.module */"./src/app/otherservices/otherservices.module.ts")).then(function (m) {
          return m.OtherservicesPageModule;
        });
      }
    }, {
      path: 'contact',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | contact-contact-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("contact-contact-module")]).then(__webpack_require__.bind(null, /*! ./contact/contact.module */"./src/app/contact/contact.module.ts")).then(function (m) {
          return m.ContactPageModule;
        });
      }
    }, {
      path: 'hotdeals',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | hotdeals-hotdeals-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("hotdeals-hotdeals-module")]).then(__webpack_require__.bind(null, /*! ./hotdeals/hotdeals.module */"./src/app/hotdeals/hotdeals.module.ts")).then(function (m) {
          return m.HotdealsPageModule;
        });
      }
    }, {
      path: 'pre-register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | pre-register-pre-register-module */"pre-register-pre-register-module").then(__webpack_require__.bind(null, /*! ./pre-register/pre-register.module */"./src/app/pre-register/pre-register.module.ts")).then(function (m) {
          return m.PreRegisterPageModule;
        });
      }
    }, {
      path: 'usdconvertmodal',
      loadChildren: function loadChildren() {
        return Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./usdconvertmodal/usdconvertmodal.module */"./src/app/usdconvertmodal/usdconvertmodal.module.ts")).then(function (m) {
          return m.UsdconvertmodalPageModule;
        });
      }
    }, {
      path: 'trialperiod',
      loadChildren: function loadChildren() {
        return Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./trialperiod/trialperiod.module */"./src/app/trialperiod/trialperiod.module.ts")).then(function (m) {
          return m.TrialperiodPageModule;
        });
      }
    }, {
      path: 'thankyou',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | thankyou-thankyou-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("thankyou-thankyou-module")]).then(__webpack_require__.bind(null, /*! ./thankyou/thankyou.module */"./src/app/thankyou/thankyou.module.ts")).then(function (m) {
          return m.ThankyouPageModule;
        });
      }
    }, {
      path: 'privatepolicy',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | privatepolicy-privatepolicy-module */"privatepolicy-privatepolicy-module").then(__webpack_require__.bind(null, /*! ./privatepolicy/privatepolicy.module */"./src/app/privatepolicy/privatepolicy.module.ts")).then(function (m) {
          return m.PrivatepolicyPageModule;
        });
      }
    }, {
      path: 'refund',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | refund-refund-module */"refund-refund-module").then(__webpack_require__.bind(null, /*! ./refund/refund.module */"./src/app/refund/refund.module.ts")).then(function (m) {
          return m.RefundPageModule;
        });
      }
    }, {
      path: 'disclaimer',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | disclaimer-disclaimer-module */"disclaimer-disclaimer-module").then(__webpack_require__.bind(null, /*! ./disclaimer/disclaimer.module */"./src/app/disclaimer/disclaimer.module.ts")).then(function (m) {
          return m.DisclaimerPageModule;
        });
      }
    }, {
      path: 'payment-success',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | payment-success-payment-success-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("payment-success-payment-success-module")]).then(__webpack_require__.bind(null, /*! ./payment-success/payment-success.module */"./src/app/payment-success/payment-success.module.ts")).then(function (m) {
          return m.PaymentSuccessPageModule;
        });
      }
    }, {
      path: 'cancel-success',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | cancel-success-cancel-success-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("cancel-success-cancel-success-module")]).then(__webpack_require__.bind(null, /*! ./cancel-success/cancel-success.module */"./src/app/cancel-success/cancel-success.module.ts")).then(function (m) {
          return m.CancelSuccessPageModule;
        });
      }
    }, {
      path: 'payment-cancel',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | payment-cancel-payment-cancel-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("payment-cancel-payment-cancel-module")]).then(__webpack_require__.bind(null, /*! ./payment-cancel/payment-cancel.module */"./src/app/payment-cancel/payment-cancel.module.ts")).then(function (m) {
          return m.PaymentCancelPageModule;
        });
      }
    }, {
      path: 'deleteaccount',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | deleteaccount-deleteaccount-module */"deleteaccount-deleteaccount-module").then(__webpack_require__.bind(null, /*! ./deleteaccount/deleteaccount.module */"./src/app/deleteaccount/deleteaccount.module.ts")).then(function (m) {
          return m.DeleteaccountPageModule;
        });
      }
    }, {
      path: 'selling-inr',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | selling-inr-selling-inr-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("selling-inr-selling-inr-module")]).then(__webpack_require__.bind(null, /*! ./selling-inr/selling-inr.module */"./src/app/selling-inr/selling-inr.module.ts")).then(function (m) {
          return m.SellingINRPageModule;
        });
      }
    }, {
      path: 'brands',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | brands-brands-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("brands-brands-module")]).then(__webpack_require__.bind(null, /*! ./brands/brands.module */"./src/app/brands/brands.module.ts")).then(function (m) {
          return m.BrandsPageModule;
        });
      }
    }, {
      path: 'brand-details',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | brand-details-brand-details-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("brand-details-brand-details-module")]).then(__webpack_require__.bind(null, /*! ./brand-details/brand-details.module */"./src/app/brand-details/brand-details.module.ts")).then(function (m) {
          return m.BrandDetailsPageModule;
        });
      }
    }, {
      path: 'trade-inr',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | trade-inr-trade-inr-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("trade-inr-trade-inr-module")]).then(__webpack_require__.bind(null, /*! ./trade-inr/trade-inr.module */"./src/app/trade-inr/trade-inr.module.ts")).then(function (m) {
          return m.TradeINRPageModule;
        });
      }
    }, {
      path: 'buy-inr',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | buy-inr-buy-inr-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("buy-inr-buy-inr-module")]).then(__webpack_require__.bind(null, /*! ./buy-inr/buy-inr.module */"./src/app/buy-inr/buy-inr.module.ts")).then(function (m) {
          return m.BuyInrPageModule;
        });
      }
    }, {
      path: 'trade-inr-list',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | trade-inr-list-trade-inr-list-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("trade-inr-list-trade-inr-list-module")]).then(__webpack_require__.bind(null, /*! ./trade-inr-list/trade-inr-list.module */"./src/app/trade-inr-list/trade-inr-list.module.ts")).then(function (m) {
          return m.TradeInrListPageModule;
        });
      }
    }, {
      path: 'welcome1',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | welcome1-welcome1-module */"welcome1-welcome1-module").then(__webpack_require__.bind(null, /*! ./welcome1/welcome1.module */"./src/app/welcome1/welcome1.module.ts")).then(function (m) {
          return m.Welcome1PageModule;
        });
      }
    }, {
      path: 'welcome2',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | welcome2-welcome2-module */"welcome2-welcome2-module").then(__webpack_require__.bind(null, /*! ./welcome2/welcome2.module */"./src/app/welcome2/welcome2.module.ts")).then(function (m) {
          return m.Welcome2PageModule;
        });
      }
    }, {
      path: 'welcome3',
      loadChildren: function loadChildren() {
        return __webpack_require__.e( /*! import() | welcome3-welcome3-module */"welcome3-welcome3-module").then(__webpack_require__.bind(null, /*! ./welcome3/welcome3.module */"./src/app/welcome3/welcome3.module.ts")).then(function (m) {
          return m.Welcome3PageModule;
        });
      }
    }, {
      path: 'trade-detail',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | trade-detail-trade-detail-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("trade-detail-trade-detail-module")]).then(__webpack_require__.bind(null, /*! ./trade-detail/trade-detail.module */"./src/app/trade-detail/trade-detail.module.ts")).then(function (m) {
          return m.TradeDetailPageModule;
        });
      }
    }, {
      path: 'loader-component',
      loadChildren: function loadChildren() {
        return Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./loader-component/loader-component.module */"./src/app/loader-component/loader-component.module.ts")).then(function (m) {
          return m.LoaderComponentPageModule;
        });
      }
    }, {
      path: 'trade-list-usd',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | trade-list-usd-trade-list-usd-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("trade-list-usd-trade-list-usd-module")]).then(__webpack_require__.bind(null, /*! ./trade-list-usd/trade-list-usd.module */"./src/app/trade-list-usd/trade-list-usd.module.ts")).then(function (m) {
          return m.TradeListUsdPageModule;
        });
      }
    }, {
      path: 'trade-usd-details',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | trade-usd-details-trade-usd-details-module */[__webpack_require__.e("default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"), __webpack_require__.e("trade-usd-details-trade-usd-details-module")]).then(__webpack_require__.bind(null, /*! ./trade-usd-details/trade-usd-details.module */"./src/app/trade-usd-details/trade-usd-details.module.ts")).then(function (m) {
          return m.TradeUsdDetailsPageModule;
        });
      }
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  }),
  /***/"./src/app/app.component.scss": (
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.menu-header {\n  background: #ffffff;\n  color: #FFF;\n  height: 230px;\n}\n\n.inner-scroll {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.menu-settings {\n  --padding-top: 0px !important;\n  --padding-start: 0px !important;\n  --padding-end: 0px !important;\n}\n\n.user-icon {\n  width: 136px;\n  margin-top: 15px;\n}\n\n.switch .item-inner {\n  padding: 0;\n  margin: 0;\n}\n\n@font-face {\n  font-family: \"Poppins-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('Poppins-Regular.ttf');\n}\n\n@font-face {\n  font-family: \"Poppins-Bold\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('Poppins-Bold.ttf');\n}\n\n@font-face {\n  font-family: \"Poppins-SemiBold\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('Poppins-SemiBold.ttf');\n}\n\nion-menu-toggle ion-icon {\n  margin-right: 20px;\n}\n\nion-menu-toggle ion-icon svg path {\n  color: \"#000\" !important;\n  fill: \"#000\" !important;\n}\n\n.waves {\n  position: relative;\n  width: 100%;\n  height: 15vh;\n  margin-bottom: -7px;\n  /*Fix for safari gap*/\n  min-height: 100px;\n  max-height: 150px;\n}\n\n/*Shrinking for mobile*/\n\n@media (max-width: 768px) {\n  .waves {\n    height: 40px;\n    min-height: 40px;\n  }\n}\n\n.waveheader {\n  position: relative;\n  text-align: center;\n  background: #91b142;\n  color: white;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBOztFQUVFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyREFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxzREFBQTtBQ0hGOztBRE1BO0VBQ0UsK0JBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsK0JBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQ0pGOztBRE9BO0VBQ0UsaUNBQUE7QUNKRjs7QURPQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNKRjs7QURPQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7QUNKRjs7QURPQTtFQUNFLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ0pGOztBRE9BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDSkY7O0FEZ0JFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNiSjs7QURpQkE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQ2RGOztBRGlCQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDZkY7O0FEa0JBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNoQkY7O0FEcUJFO0VBQ0Usa0JBQUE7QUNuQko7O0FEc0JNO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtBQ3BCUjs7QUQ0QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUN6QkY7O0FENkJBLHVCQUFBOztBQUNBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUMxQkY7QUFDRjs7QUQ2QkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQzNCRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tZW51LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjRkZGO1xuICBoZWlnaHQ6IDIzMHB4O1xufVxuXG4uaW5uZXItc2Nyb2xsIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51LXNldHRpbmdzIHtcbiAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udXNlci1pY29uIHtcbiAgd2lkdGg6IDEzNnB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4vLyAudXNlci1wcm9maWxle1xuLy8gXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbi8vIFx0aW9uLWxhYmVse1xuLy8gXHRcdG1hcmdpbi10b3A6IDEzcHg7XG4vLyBcdFx0ZGlzcGxheTogYmxvY2s7XG4vLyBcdH1cbi8vIH1cbi5zd2l0Y2gge1xuICAuaXRlbS1pbm5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1SZWd1bGFyJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1BvcHBpbnMvUG9wcGlucy1SZWd1bGFyLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLUJvbGQnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMtU2VtaUJvbGQnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZicpO1xufVxuXG5cbmlvbi1tZW51LXRvZ2dsZSB7XG4gIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbiAgICBzdmcge1xuICAgICAgcGF0aCB7XG4gICAgICAgIGNvbG9yOiAnIzAwMCcgIWltcG9ydGFudDtcbiAgICAgICAgZmlsbDogJyMwMDAnICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxufVxuXG4ud2F2ZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1dmg7XG4gIG1hcmdpbi1ib3R0b206IC03cHg7XG4gIC8qRml4IGZvciBzYWZhcmkgZ2FwKi9cbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG5cbi8qU2hyaW5raW5nIGZvciBtb2JpbGUqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53YXZlcyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIH1cbn1cblxuLndhdmVoZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzkxYjE0MjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbn0iLCJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tZW51LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjRkZGO1xuICBoZWlnaHQ6IDIzMHB4O1xufVxuXG4uaW5uZXItc2Nyb2xsIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51LXNldHRpbmdzIHtcbiAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udXNlci1pY29uIHtcbiAgd2lkdGg6IDEzNnB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc3dpdGNoIC5pdGVtLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtQm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL1BvcHBpbnMvUG9wcGlucy1Cb2xkLnR0ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVNlbWlCb2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZlwiKTtcbn1cbmlvbi1tZW51LXRvZ2dsZSBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbmlvbi1tZW51LXRvZ2dsZSBpb24taWNvbiBzdmcgcGF0aCB7XG4gIGNvbG9yOiBcIiMwMDBcIiAhaW1wb3J0YW50O1xuICBmaWxsOiBcIiMwMDBcIiAhaW1wb3J0YW50O1xufVxuXG4ud2F2ZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1dmg7XG4gIG1hcmdpbi1ib3R0b206IC03cHg7XG4gIC8qRml4IGZvciBzYWZhcmkgZ2FwKi9cbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4vKlNocmlua2luZyBmb3IgbW9iaWxlKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAud2F2ZXMge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICB9XG59XG4ud2F2ZWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjOTFiMTQyO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/app.component.ts": (
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ionic-native/splash-screen/ngx */"./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */
    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ionic-native/status-bar/ngx */"./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */
    var _ionic_native_theme_detection_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ionic-native/theme-detection/ngx */"./node_modules/@ionic-native/theme-detection/ngx/index.js");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./rest.service */"./src/app/rest.service.ts");
    /* harmony import */
    var _splashscreen_splashscreen_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./splashscreen/splashscreen.page */"./src/app/splashscreen/splashscreen.page.ts");
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./components.service */"./src/app/components.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _planpage_planpage_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./planpage/planpage.page */"./src/app/planpage/planpage.page.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @ionic-native/firebase-messaging/ngx */"./node_modules/@ionic-native/firebase-messaging/ngx/index.js");
    /* harmony import */
    var _usdconvertmodal_usdconvertmodal_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./usdconvertmodal/usdconvertmodal.page */"./src/app/usdconvertmodal/usdconvertmodal.page.ts");

    // import { Facebook } from '@ionic-native/facebook/ngx';
    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, themeDetection, apiser, modalCtrl, navCtrl, componentSer, menuCtrl, toastCtrl, alertController, route, location, firebase) {
        var _this2 = this;
        _classCallCheck(this, AppComponent);
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.themeDetection = themeDetection;
        this.apiser = apiser;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.componentSer = componentSer;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.route = route;
        this.location = location;
        this.firebase = firebase;
        this.selectedIndex = 0;
        this.user = '';
        this.hasUser = '';
        this.cancelPopup = 'true';
        this.appPages = [
        // {
        // 	title: 'Home',
        // 	url: '/prices',
        // 	icon: 'home.svg'
        // },
        {
          title: 'Edit Profile',
          url: '/editprofile',
          icon: 'profile.svg'
        }, {
          title: 'About us',
          url: '/aboutus',
          icon: 'about.svg'
        }, {
          title: 'Terms and conditions',
          url: '/termsandcondition',
          icon: 'terms.svg'
        }, {
          title: 'Private Policy',
          url: '/privatepolicy',
          icon: 'privacy.svg'
        }, {
          title: 'Disclaimer',
          url: '/disclaimer',
          icon: 'disclaimer.svg'
        }, {
          title: 'Change Password',
          url: '/updatepassword',
          icon: 'changepassword.svg'
        }, {
          title: 'Return & Refund Policy',
          url: '/refund',
          icon: 'terms.svg'
        }, {
          title: 'Gallery',
          url: '/gallery',
          icon: 'gallery.svg'
        }, {
          title: 'Chat',
          url: '/chat-detail',
          icon: 'chat.svg'
        },
        // {
        // 	title: 'Trade',
        // 	url: '/trade-inr',
        // 	icon: 'albums'
        // },
        // {
        // 	title: 'Trade list',
        // 	url: '/trade-inr-list',
        // 	icon: 'albums'
        // },
        // {
        // 	title: 'Gallery',
        // 	url: '/gallery',
        // 	icon: 'albums'
        // },
        {
          title: 'Contact us',
          url: '/contact',
          icon: 'contactus.svg'
        }];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        this.razor_key = 'rzp_test_eBPImORw1zmU8F';
        this.razorSecret = 'QAhUguSrbOIcflzHikLToMuw';
        this.paymentAmount = 100;
        this.currency = "INR";
        platform.ready().then(function () {})["catch"](function () {});
        // if(FacebookAds)
        // {
        // 	let options = {
        // 		adId: '763416880384578_1088816394511290',
        // 		adSize: 'SMART_BANNER',
        // 		isTesting: false,
        // 		autoShow: true
        // 	};
        // 	FacebookAds.getAttributionDetails().then((res:any) => {
        // 		console.log(res);
        // 	}).catch((err:any) => {
        // 		console.log(err);
        // 	})
        // 	FacebookAds.createBanner(options, function(data){
        // 	FacebookAds.showBanner(8);
        // 	}, function(err){});
        // }
        this.initializeApp();
        this.menuCtrl.open();
        this.user = localStorage.getItem('prices');
        this.hasUser = localStorage.getItem('name');
        this.componentSer.loginUser.subscribe(function (userName) {
          console.log("kjnk");
          this.user = userName;
        });
        this.componentSer.firePushNotif.subscribe(function () {
          var _this = this;
          // this.firebasepushnotif()
          this.firebase.requestPermission().then(function () {
            _this.firebase.getToken().then(function (token) {
              if (localStorage.getItem('id') != null) {
                this.apiser.updateToken(localStorage.getItem('id'), token);
              }
            });
            setInterval(function () {
              _this.firebase.onTokenRefresh().subscribe(function (token) {
                console.log("hello i am here 2");
                if (localStorage.getItem('id') != null) {
                  this.apiser.updateToken(localStorage.getItem('id'), token);
                }
              });
            }, 600000);
            _this.firebase.onTokenRefresh().subscribe(function (token) {
              console.log("hello i am here 2");
              if (localStorage.getItem('id') != null) {
                this.apiser.updateToken(localStorage.getItem('id'), token);
              }
            });
            _this.firebase.onBackgroundMessage().subscribe(function (payload) {});
            _this.firebase.onMessage().subscribe(function (payload) {
              _this.componentSer.hasMessage.next(1);
              var routee = _this.route.url.split('/');
              var routeArray = [];
              for (var i = 0; i < routee.length; i++) {
                var rout = routee[i].split(';');
                if (rout) {
                  routeArray.push(rout[0]);
                } else {
                  routeArray.push(routee[i]);
                }
              }
              if (routeArray.indexOf('chat-detail')) {
                // if (localStorage.getItem('id') == payload.messageFrom) {
                // this.navCtrl.navigateForward(['chat-detail', { 'id': payload.messageFrom }])
                _this.componentSer.newRecieveMessageForUser.next(payload.body);
                // }
              }
              if (routeArray.indexOf('prices') || routeArray.indexOf('port') || routeArray.indexOf('ricechart') || routeArray.indexOf('gallery') || routeArray.indexOf('gallerydetails')) {
                _this.componentSer.hasMessage.next(1);
              }
              if (routeArray.indexOf('chatdetails')) {
                if (localStorage.getItem('selectedChatUserId') == payload.messageFrom) {
                  // this.navCtrl.navigateForward(['admin/chatdetails', { 'contactId': payload.id }])
                  _this.componentSer.newRecieveMessage.next(payload.body);
                }
              }
              // if( localStorage.getItem('id') == '1' ){
              // 	if (localStorage.getItem('selectedChatUserId') == payload.messageFrom) {
              // 		this.componentSer.newRecieveMessage.next(payload.message);
              // 	}
              // }
            });
          });
        });
        setTimeout(function () {
          _this2.componentSer.compareTwoDates(localStorage.getItem('expired_on'));
          _this2.appType = localStorage.getItem('apptype');
        }, 1000);
        // this.componentSer.showPaymentModal.subscribe((res: any) => {
        // 	this.presentModel();
        // });
      }
      return _createClass(AppComponent, [{
        key: "home",
        value: function home() {
          if (localStorage.getItem('is_INR_active') == '1') {
            this.navCtrl.navigateForward('prices');
          } else {
            if (localStorage.getItem('isExpiryUSD') == 'true') {
              // this.navCtrl.navigateForward(['planpage']);
            } else {
              if (localStorage.getItem('apptype') == 'USD') {
                console.log("i am here");
                this.navCtrl.navigateForward('priceusd');
              } else {
                this.navCtrl.navigateForward('prices');
              }
            }
          }
          this.menuCtrl.close();
        }
      }, {
        key: "port",
        value: function port() {
          this.navCtrl.navigateRoot('port', {
            animationDirection: 'forward'
          });
          this.menuCtrl.close();
        }
      }, {
        key: "firebasepushnotif",
        value: function firebasepushnotif() {
          var _this3 = this;
          var apiHn = this.apiser;
          var navigation = this.navCtrl;
          this.firebase.requestPermission().then(function () {
            _this3.firebase.getToken().then(function (token) {
              if (localStorage.getItem('id') != null) {
                apiHn.updateToken(localStorage.getItem('id'), token);
              }
            });
            setInterval(function () {
              _this3.firebase.onTokenRefresh().subscribe(function (token) {
                console.log("hello i am here 2");
                if (localStorage.getItem('id') != null) {
                  apiHn.updateToken(localStorage.getItem('id'), token);
                }
              });
            }, 600000);
            _this3.firebase.onTokenRefresh().subscribe(function (token) {
              console.log("hello i am here 2");
              if (localStorage.getItem('id') != null) {
                apiHn.updateToken(localStorage.getItem('id'), token);
              }
            });
            _this3.firebase.onBackgroundMessage().subscribe(function (payload) {
              if ('extra' in payload) {
                var jsonDecodedPayload = JSON.parse(payload.extra);
                if ('hotDealId' in jsonDecodedPayload) {
                  if (jsonDecodedPayload.hotDealId != null) {
                    navigation.navigateRoot(['hotdeals']);
                    return false;
                  }
                }
              }
            });
            _this3.firebase.onMessage().subscribe(function (payload) {
              _this3.componentSer.hasMessage.next(1);
              var routee = _this3.route.url.split('/');
              var routeArray = [];
              for (var i = 0; i < routee.length; i++) {
                var rout = routee[i].split(';');
                if (rout) {
                  routeArray.push(rout[0]);
                } else {
                  routeArray.push(routee[i]);
                }
              }
              if (routeArray.indexOf('chat-detail')) {
                // if (localStorage.getItem('id') == payload.messageFrom) {
                // this.navCtrl.navigateForward(['chat-detail', { 'id': payload.messageFrom }])
                _this3.componentSer.newRecieveMessageForUser.next(payload.body);
                // }
              }
              if (routeArray.indexOf('prices') || routeArray.indexOf('port') || routeArray.indexOf('ricechart') || routeArray.indexOf('gallery') || routeArray.indexOf('gallerydetails')) {
                _this3.componentSer.hasMessage.next(1);
              }
              if (routeArray.indexOf('chatdetails')) {
                if (localStorage.getItem('selectedChatUserId') == payload.messageFrom) {
                  // this.navCtrl.navigateForward(['admin/chatdetails', { 'contactId': payload.id }])
                  _this3.componentSer.newRecieveMessage.next(payload.body);
                }
              }
              // if( localStorage.getItem('id') == '1' ){
              // 	if (localStorage.getItem('selectedChatUserId') == payload.messageFrom) {
              // 		this.componentSer.newRecieveMessage.next(payload.message);
              // 	}
              // }
            });
          });
        }
      }, {
        key: "presentModel",
        value: function presentModel() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var model;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.log("Hey i am here");
                  _context.next = 3;
                  return this.modalCtrl.create({
                    component: _planpage_planpage_page__WEBPACK_IMPORTED_MODULE_10__["PlanpagePage"],
                    animated: true
                  });
                case 3:
                  model = _context.sent;
                  _context.next = 6;
                  return model.present();
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showExitConfirm",
        value: function showExitConfirm() {
          this.alertController.create({
            header: 'Alert',
            message: 'Do you want to close the app?',
            backdropDismiss: false,
            buttons: [{
              text: 'Stay',
              role: 'cancel',
              handler: function handler() {}
            }, {
              text: 'Exit',
              handler: function handler() {
                navigator['app'].exitApp();
              }
            }]
          }).then(function (alert) {
            alert.present();
          });
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this4 = this;
          this.platform.ready().then(function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this5 = this;
              var classThis, ifUsdActive, isExpiredUsd, splash, apiPre, navigation;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    this.hasUser = localStorage.getItem('name');
                    this.appType = localStorage.getItem('apptype');
                    this.componentSer.compareTwoDates(localStorage.getItem('ExpiryUSDDate'));
                    this.getlatestNotifCount();
                    this.platform.ready().then(function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        var model;
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              if (!(localStorage.getItem('id') != undefined)) {
                                _context2.next = 7;
                                break;
                              }
                              if (!(localStorage.getItem('is_usd_active') == undefined || localStorage.getItem('usd_role') == '0')) {
                                _context2.next = 7;
                                break;
                              }
                              _context2.next = 4;
                              return this.modalCtrl.create({
                                component: _usdconvertmodal_usdconvertmodal_page__WEBPACK_IMPORTED_MODULE_13__["UsdconvertmodalPage"],
                                animated: true,
                                cssClass: "contactModal"
                              });
                            case 4:
                              model = _context2.sent;
                              _context2.next = 7;
                              return model.present();
                            case 7:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2, this);
                      }));
                    });
                    console.log('Width: ' + this.platform.width());
                    console.log('Height: ' + this.platform.height());
                    this.apiser.CheckUserExpired().then(function (res) {
                      console.log(res);
                      if (localStorage.getItem('is_usd_active') != '0') {
                        localStorage.setItem('isExpiryUSD', res.isExpiry);
                        localStorage.setItem('ExpiryUSDDate', res.data);
                      } else {
                        localStorage.setItem('isExpiryUSD', 'true');
                        localStorage.setItem('ExpiryUSDDate', null);
                      }
                      localStorage.setItem('expired_on', res.data);
                      console.log("i m here");
                      _this5.componentSer.compareTwoDates(localStorage.getItem('expired_on'));
                      _this5.componentSer.isUserExpired.next('true');
                    }, function (err) {});
                    console.log(new Date());
                    classThis = this;
                    this.componentSer.firePushNotif.subscribe(function () {
                      classThis.firebasepushnotif();
                    });
                    if (localStorage.getItem('id') != undefined || localStorage.getItem('id') != '') {
                      ifUsdActive = localStorage.getItem('is_usd_active');
                      if (localStorage.getItem('is_INR_active') == '1') {
                        console.log("kjhnijk");
                        console.log("apptype OTHER");
                        localStorage.setItem('apptype', 'OTHER');
                      }
                      if (ifUsdActive == '0') {
                        console.log("kjhnijk");
                        console.log("apptype OTHER");
                        localStorage.setItem('apptype', 'OTHER');
                      } else {
                        console.log("apptype USD");
                        localStorage.setItem('apptype', 'USD');
                      }
                    }
                    isExpiredUsd = localStorage.getItem('isExpiryUSD');
                    this.statusBar.styleDefault();
                    this.statusBar.overlaysWebView(false);
                    this.statusBar.backgroundColorByHexString('#92B243');
                    this.platform.backButton.subscribeWithPriority(10, function (processNextHandler) {
                      if (_this5.location.isCurrentPathEqualTo('/prices')) {
                        _this5.showExitConfirm();
                        processNextHandler();
                      } else {
                        // Navigate to back page
                        _this5.location.back();
                      }
                    });
                    this.platform.backButton.subscribeWithPriority(5, function () {
                      _this5.alertController.getTop().then(function (r) {
                        if (r) {
                          navigator['app'].exitApp();
                        }
                      })["catch"](function (e) {});
                    });
                    localStorage.removeItem("popupCanceled");
                    setTimeout(function () {
                      _this5.componentSer.compareTwoDates(localStorage.getItem('expired_on'));
                    }, 1000);
                    _context6.next = 22;
                    return this.modalCtrl.create({
                      component: _splashscreen_splashscreen_page__WEBPACK_IMPORTED_MODULE_7__["SplashscreenPage"]
                    });
                  case 22:
                    splash = _context6.sent;
                    splash.present();
                    if (localStorage.getItem('role') != null && localStorage.getItem('role') != undefined) {
                      if (localStorage.getItem('role') == '2') {
                        setTimeout(function () {
                          splash.dismiss();
                          _this5.navCtrl.navigateForward(['admin/chat']);
                        }, 4000);
                      } else {
                        setTimeout(function () {
                          splash.dismiss();
                          var navigation = _this5.navCtrl;
                          // this.navCtrl.navigateForward(['quality-details']);
                          if (_this5.appType == 'USD') {
                            // this.navCtrl.navigateForward(['quality-details']);
                            _this5.firebase.onBackgroundMessage().subscribe(function (payload) {
                              if ('buyerQuery' in payload) {
                                navigation.navigateForward(['bid', {
                                  'buy_query': payload.buyerQuery
                                }]);
                                return false;
                              }
                              if ('extra' in payload) {
                                var jsonDecodedPayload = JSON.parse(payload.extra);
                                if ('hotDealId' in jsonDecodedPayload) {
                                  if (payload.extra.hotDealId != null) {
                                    navigation.navigateForward(['hotdeals']);
                                    return false;
                                  }
                                }
                              }
                            });
                            if (isExpiredUsd == 'true') {
                              if (localStorage.getItem('is_INR_active') == '0') {
                                console.log("hey i am here");
                                // this.navCtrl.navigateRoot(['planpage']);
                              } else {
                                _this5.platform.ready().then(function () {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                                    var model;
                                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                                      while (1) switch (_context3.prev = _context3.next) {
                                        case 0:
                                          if (!(localStorage.getItem('id') != undefined)) {
                                            _context3.next = 7;
                                            break;
                                          }
                                          if (!(localStorage.getItem('is_usd_active') == undefined || localStorage.getItem('usd_role') == '0')) {
                                            _context3.next = 7;
                                            break;
                                          }
                                          _context3.next = 4;
                                          return this.modalCtrl.create({
                                            component: _usdconvertmodal_usdconvertmodal_page__WEBPACK_IMPORTED_MODULE_13__["UsdconvertmodalPage"],
                                            animated: true,
                                            cssClass: "contactModal"
                                          });
                                        case 4:
                                          model = _context3.sent;
                                          _context3.next = 7;
                                          return model.present();
                                        case 7:
                                        case "end":
                                          return _context3.stop();
                                      }
                                    }, _callee3, this);
                                  }));
                                });
                                console.log("apptype OTHER");
                                localStorage.setItem('apptype', 'OTHER');
                                console.log("i am here");
                                _this5.navCtrl.navigateForward(['prices']);
                                console.log("kjhnijk");
                              }
                            } else {
                              _this5.firebase.onBackgroundMessage().subscribe(function (payload) {
                                if ('extra' in payload) {
                                  var jsonDecodedPayload = JSON.parse(payload.extra);
                                  if ('hotDealId' in jsonDecodedPayload) {
                                    if (jsonDecodedPayload.hotDealId != null) {
                                      navigation.navigateRoot(['hotdeals']);
                                      return false;
                                    }
                                  }
                                }
                              });
                              if (localStorage.getItem('isUserActivatedUSD') == '0') {
                                if (localStorage.getItem('is_INR_active') == '1') {
                                  localStorage.setItem('apptype', 'OTHER');
                                  _this5.navCtrl.navigateRoot('prices');
                                } else {
                                  // this.navCtrl.navigateRoot('planpage');
                                }
                              } else {
                                if (localStorage.getItem('status') != '0') {
                                  if (localStorage.getItem('is_INR_active') == '0' && localStorage.getItem('transaction_id') == 'null') {
                                    // this.navCtrl.navigateRoot('planpage');
                                  } else {
                                    _this5.navCtrl.navigateForward(['prices']);
                                    localStorage.setItem('apptype', 'OTHER');
                                  }
                                } else {
                                  _this5.navCtrl.navigateForward(['verifyotp']);
                                }
                              }
                            }
                          } else {
                            _this5.firebase.onBackgroundMessage().subscribe(function (payload) {
                              if ('buyerQuery' in payload) {
                                navigation.navigateForward(['bid', {
                                  'buy_query': payload.buyerQuery
                                }]);
                                return false;
                              }
                            });
                            console.log("kjhink");
                            if (localStorage.getItem('is_INR_active') == '1') {
                              _this5.platform.ready().then(function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                                  var model;
                                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                                    while (1) switch (_context4.prev = _context4.next) {
                                      case 0:
                                        if (!(localStorage.getItem('id') != undefined)) {
                                          _context4.next = 7;
                                          break;
                                        }
                                        if (!(localStorage.getItem('is_usd_active') == undefined || localStorage.getItem('usd_role') == '0')) {
                                          _context4.next = 7;
                                          break;
                                        }
                                        _context4.next = 4;
                                        return this.modalCtrl.create({
                                          component: _usdconvertmodal_usdconvertmodal_page__WEBPACK_IMPORTED_MODULE_13__["UsdconvertmodalPage"],
                                          animated: true,
                                          cssClass: "contactModal"
                                        });
                                      case 4:
                                        model = _context4.sent;
                                        _context4.next = 7;
                                        return model.present();
                                      case 7:
                                      case "end":
                                        return _context4.stop();
                                    }
                                  }, _callee4, this);
                                }));
                              });
                              console.log("apptype OTHER");
                              localStorage.setItem('apptype', 'OTHER');
                              console.log("i am here");
                              _this5.navCtrl.navigateForward(['prices']);
                              console.log("kjhnijk");
                            }
                            if (localStorage.getItem('is_usd_active') == undefined || localStorage.getItem('is_usd_active') == '0') {
                              if (localStorage.getItem('is_INR_active') == undefined || localStorage.getItem('is_INR_active') == '0') {
                                localStorage.setItem('is_INR_active', '1');
                                console.log("apptype OTHER");
                                localStorage.setItem('apptype', 'OTHER');
                                _this5.platform.ready().then(function () {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                                    var model;
                                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                                      while (1) switch (_context5.prev = _context5.next) {
                                        case 0:
                                          if (!(localStorage.getItem('id') != undefined)) {
                                            _context5.next = 7;
                                            break;
                                          }
                                          if (!(localStorage.getItem('is_usd_active') == undefined || localStorage.getItem('usd_role') == '0')) {
                                            _context5.next = 7;
                                            break;
                                          }
                                          _context5.next = 4;
                                          return this.modalCtrl.create({
                                            component: _usdconvertmodal_usdconvertmodal_page__WEBPACK_IMPORTED_MODULE_13__["UsdconvertmodalPage"],
                                            animated: true,
                                            cssClass: "contactModal"
                                          });
                                        case 4:
                                          model = _context5.sent;
                                          _context5.next = 7;
                                          return model.present();
                                        case 7:
                                        case "end":
                                          return _context5.stop();
                                      }
                                    }, _callee5, this);
                                  }));
                                });
                                console.log("i am here");
                                _this5.navCtrl.navigateForward(['prices']);
                              }
                            }
                            if (localStorage.getItem('is_INR_active') == '0' && localStorage.getItem('isUserActivatedUSD') == '1' && localStorage.getItem('isExpired') != 'true') {
                              if (localStorage.getItem('is_INR_active') == '0' && localStorage.getItem('transaction_id') == null) {
                                console.log("hey i am here");
                                // this.navCtrl.navigateRoot('planpage');
                              } else {
                                console.log("i am here");
                                _this5.navCtrl.navigateForward(['priceusd']);
                                console.log("apptype USD");
                                localStorage.setItem('apptype', 'USD');
                              }
                            }
                            if (localStorage.getItem('is_INR_active') == '0' && localStorage.getItem('isUserActivatedUSD') == '1' && localStorage.getItem('isExpired') != 'false') {
                              console.log("hey i am here");
                              // this.navCtrl.navigateForward(['planpage']);
                            }
                          }
                        }, 4000);
                      }
                    } else {
                      setTimeout(function () {
                        splash.dismiss();
                        // this.navCtrl.navigateForward(['forgotpassword']);
                        _this5.navCtrl.navigateForward(['pre-register']);
                      }, 4000);
                    }
                    this.isDarkModeEnabled();
                    apiPre = this.apiser;
                    navigation = this.navCtrl;
                    this.firebasepushnotif();
                    this.firebase.requestPermission().then(function () {
                      _this5.firebase.getToken().then(function (token) {
                        if (localStorage.getItem('id') != null) {
                          apiPre.updateToken(localStorage.getItem('id'), token);
                        }
                      });
                      setInterval(function () {
                        _this5.firebase.onTokenRefresh().subscribe(function (token) {
                          console.log("hello i am here 2");
                          if (localStorage.getItem('id') != null) {
                            apiPre.updateToken(localStorage.getItem('id'), token);
                          }
                        });
                      }, 600000);
                      _this5.firebase.onTokenRefresh().subscribe(function (token) {
                        console.log("hello i am here 2");
                        if (localStorage.getItem('id') != null) {
                          apiPre.updateToken(localStorage.getItem('id'), token);
                        }
                      });
                      _this5.firebase.onBackgroundMessage().subscribe(function (payload) {
                        if ('extra' in payload) {
                          var jsonDecodedPayload = JSON.parse(payload.extra);
                          if ('hotDealId' in jsonDecodedPayload) {
                            if (payload.extra.hotDealId != null) {
                              this.navCtrl.navigateForward(['hotdeals']);
                              return false;
                            }
                          }
                        }
                        if ('buyerQuery' in payload) {
                          navigation.navigateForward(['bid', {
                            'buy_query': payload.buyerQuery
                          }]);
                        }
                      });
                      _this5.firebase.onMessage().subscribe(function (payload) {
                        if ('extra' in payload) {
                          var jsonDecodedPayload = JSON.parse(payload.extra);
                          if ('hotDealId' in jsonDecodedPayload) {
                            if (payload.extra.hotDealId != null) {
                              _this5.navCtrl.navigateForward(['hotdeals']);
                              return false;
                            }
                          }
                        }
                        _this5.componentSer.hasMessage.next(1);
                        var routee = _this5.route.url.split('/');
                        var routeArray = [];
                        for (var i = 0; i < routee.length; i++) {
                          var rout = routee[i].split(';');
                          if (rout) {
                            routeArray.push(rout[0]);
                          } else {
                            routeArray.push(routee[i]);
                          }
                        }
                        if (routeArray.indexOf('chat-detail')) {
                          // if (localStorage.getItem('id') == payload.messageFrom) {
                          // this.navCtrl.navigateForward(['chat-detail', { 'id': payload.messageFrom }])
                          _this5.componentSer.newRecieveMessageForUser.next(payload.body);
                          // }
                        }
                        if (routeArray.indexOf('prices') || routeArray.indexOf('port') || routeArray.indexOf('ricechart') || routeArray.indexOf('gallery') || routeArray.indexOf('gallerydetails')) {
                          _this5.componentSer.hasMessage.next(1);
                        }
                        if (routeArray.indexOf('chatdetails')) {
                          if (localStorage.getItem('selectedChatUserId') == payload.messageFrom) {
                            // this.navCtrl.navigateForward(['admin/chatdetails', { 'contactId': payload.id }])
                            _this5.componentSer.newRecieveMessage.next(payload.body);
                          }
                        }
                        // if( localStorage.getItem('id') == '1' ){
                        // 	if (localStorage.getItem('selectedChatUserId') == payload.messageFrom) {
                        // 		this.componentSer.newRecieveMessage.next(payload.message);
                        // 	}
                        // }
                      });
                    });
                    // if(localStorage.getItem('isExpiryUSD') == 'true' ){
                    // 	if( localStorage.getItem('is_INR_active') == '0' ){
                    // 		this.navCtrl.navigateRoot(['prices']);
                    // 	}
                    // }
                    // if(this.platform.is('ios')){
                    // 	this.firebase.hasPermission().then( () => {
                    // 		this.firebase.grantPermission().then(() => {
                    // 			this.firebase.getToken().then(function(token) {
                    // 				if( localStorage.getItem('id') != null ){
                    // 					this.apiser.updateToken(localStorage.getItem('id') , token);
                    // 				}
                    // 			});
                    // 			this.firebase.onTokenRefresh().subscribe(function(token) {
                    console.log("hello i am here 2");
                    // 				if( localStorage.getItem('id') != null ){
                    // 					this.apiser.updateToken(localStorage.getItem('id') , token);
                    // 				}
                    // 			});
                    // 			this.firebase.onMessageReceived().subscribe((payload) => {
                    // 				let routee = this.route.url.split('/')[1].split(';');
                    // 				if (routee[0] == 'chat-detail') {
                    // 					if (localStorage.getItem('userId') == payload.messageTo) {
                    // 						// this.navCtrl.navigateForward(['chat-detail', { 'contactId': payload.id }])
                    // 					}
                    // 				}
                    // 				if (routee[0] == 'admin/chatdetails') {
                    // 					if (localStorage.getItem('userId') == payload.messageTo) {
                    // 						// this.navCtrl.navigateForward(['admin/chatdetails', { 'contactId': payload.id }])
                    // 					}
                    // 				}
                    // 			});
                    // 		});
                    // 	});
                    // }
                    this.appType = localStorage.getItem('apptype');
                  case 32:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          });
          this.componentSer.reRenderSideMenu.subscribe(function (data) {
            _this4.appType = localStorage.getItem('apptype');
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.menuCtrl.close();
          this.navCtrl.navigateForward(['login']);
        }
      }, {
        key: "deleteaccount",
        value: function deleteaccount() {
          this.menuCtrl.close();
          this.navCtrl.navigateForward(['deleteaccount']);
        }
      }, {
        key: "isDarkModeEnabled",
        value: function isDarkModeEnabled() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var dark_mode_enabled;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  _context7.next = 3;
                  return this.themeDetection.isDarkModeEnabled();
                case 3:
                  dark_mode_enabled = _context7.sent;
                  if (dark_mode_enabled.value == true) {
                    //document.body.classList.toggle('dark', true);
                  }
                  _context7.next = 9;
                  break;
                case 7:
                  _context7.prev = 7;
                  _context7.t0 = _context7["catch"](0);
                case 9:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this, [[0, 7]]);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.selectedIndex);
          this.appType = localStorage.getItem('apptype');
          var path = window.location.pathname.split('folder/')[1];
          if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(function (page) {
              return page.title.toLowerCase() === path.toLowerCase();
            });
          }
        }
      }, {
        key: "payWithRazor",
        value: function payWithRazor() {
          var options = {
            description: 'Rice Data',
            image: 'https://ricebrok-staging.webcooks.in/images/sitelogo.png',
            currency: 'INR',
            key: 'rzp_test_LA2o3rFXhgtfmS',
            amount: this.paymentAmount,
            name: 'SNTC',
            prefill: {
              email: localStorage.getItem('email'),
              contact: localStorage.getItem('mobile'),
              name: localStorage.getItem('name')
            },
            theme: {
              color: '#F37254'
            },
            modal: {
              ondismiss: function ondismiss() {
                alert('dismissed');
              }
            }
          };
          var successCallback = function successCallback(payment_id) {
            // let tran_id = payment_id
            // let userId = localStorage.getItem('id');
            // let plan_id
          };
          var cancelCallback = function cancelCallback(error) {
            // this.compSer.chartInterval.next("15_Days");
          };
          RazorpayCheckout.open(options, successCallback, cancelCallback);
        }
      }, {
        key: "showProfile",
        value: function showProfile() {
          this.navCtrl.navigateForward(['profile']);
          this.menuCtrl.close();
        }
      }, {
        key: "goToUSD",
        value: function goToUSD() {
          this.menuCtrl.close();
          console.log('i am here');
          console.log("jnk,s");
          console.log("hey i am here");
          // this.navCtrl.navigateForward(['planpage'])
          console.log("apptype USD");
          localStorage.setItem('apptype', 'USD');
        }
      }, {
        key: "getlatestNotifCount",
        value: function getlatestNotifCount() {
          var userId = localStorage.getItem('id');
          this.apiser.userNotification(userId).then(function (res) {
            console.log(res.data);
            if (res.data > 0) {
              localStorage.setItem('isNewNotification', 'true');
            } else {
              localStorage.setItem('isNewNotification', 'false');
            }
          }, function (err) {
            console.log(err);
          });
        }
      }]);
    }();
    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_native_theme_detection_ngx__WEBPACK_IMPORTED_MODULE_5__["ThemeDetection"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_8__["ComponentsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]
      }, {
        type: _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_12__["FirebaseMessaging"]
      }];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.scss */"./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_native_theme_detection_ngx__WEBPACK_IMPORTED_MODULE_5__["ThemeDetection"], _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _components_service__WEBPACK_IMPORTED_MODULE_8__["ComponentsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_12__["FirebaseMessaging"]])], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ionic-native/splash-screen/ngx */"./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */
    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ionic-native/status-bar/ngx */"./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _ionic_native_theme_detection_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @ionic-native/theme-detection/ngx */"./node_modules/@ionic-native/theme-detection/ngx/index.js");
    /* harmony import */
    var _sample_entry_sample_entry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./sample-entry/sample-entry.component */"./src/app/sample-entry/sample-entry.component.ts");
    /* harmony import */
    var _send_courier_send_courier_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./send-courier/send-courier.component */"./src/app/send-courier/send-courier.component.ts");
    /* harmony import */
    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @ionic-native/camera/ngx */"./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */
    var _mill_status_mill_status_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./mill-status/mill-status.component */"./src/app/mill-status/mill-status.component.ts");
    /* harmony import */
    var _popover_popover_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./popover/popover.component */"./src/app/popover/popover.component.ts");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _custom_http_interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./custom-http-interceptor.service */"./src/app/custom-http-interceptor.service.ts");
    /* harmony import */
    var _brok_login_brok_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./brok-login/brok-login.component */"./src/app/brok-login/brok-login.component.ts");
    /* harmony import */
    var _splashscreen_splashscreen_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./splashscreen/splashscreen.module */"./src/app/splashscreen/splashscreen.module.ts");
    /* harmony import */
    var _imageprev_imageprev_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ./imageprev/imageprev.module */"./src/app/imageprev/imageprev.module.ts");
    /* harmony import */
    var _planpage_planpage_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ./planpage/planpage.module */"./src/app/planpage/planpage.module.ts");
    /* harmony import */
    var _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! @ionic-native/firebase-messaging/ngx */"./node_modules/@ionic-native/firebase-messaging/ngx/index.js");
    /* harmony import */
    var _versionmodal_versionmodal_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! ./versionmodal/versionmodal.page */"./src/app/versionmodal/versionmodal.page.ts");
    /* harmony import */
    var ionic_selectable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! ionic-selectable */"./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
    /* harmony import */
    var _usdconvertmodal_usdconvertmodal_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! ./usdconvertmodal/usdconvertmodal.module */"./src/app/usdconvertmodal/usdconvertmodal.module.ts");
    /* harmony import */
    var _trialperiod_trialperiod_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! ./trialperiod/trialperiod.module */"./src/app/trialperiod/trialperiod.module.ts");
    /* harmony import */
    var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! @ionic-native/stripe/ngx */"./node_modules/@ionic-native/stripe/ngx/index.js");
    /* harmony import */
    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__( /*! @ionic-native/file/ngx */"./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */
    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__( /*! @ionic-native/file-transfer/ngx */"./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */
    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__( /*! @ionic-native/file-chooser/ngx */"./node_modules/@ionic-native/file-chooser/ngx/index.js");
    /* harmony import */
    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__( /*! @ionic-native/file-path/ngx */"./node_modules/@ionic-native/file-path/ngx/index.js");
    /* harmony import */
    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__( /*! @ionic-native/image-picker/ngx */"./node_modules/@ionic-native/image-picker/ngx/index.js");
    /* harmony import */
    var _loader_component_loader_component_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__( /*! ./loader-component/loader-component.module */"./src/app/loader-component/loader-component.module.ts");

    // import { Facebook } from '@ionic-native/facebook/ngx';
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _sample_entry_sample_entry_component__WEBPACK_IMPORTED_MODULE_10__["SampleEntryComponent"], _send_courier_send_courier_component__WEBPACK_IMPORTED_MODULE_11__["SendCourierComponent"], _mill_status_mill_status_component__WEBPACK_IMPORTED_MODULE_13__["MillStatusComponent"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_14__["PopoverComponent"], _brok_login_brok_login_component__WEBPACK_IMPORTED_MODULE_18__["BrokLoginComponent"]],
      entryComponents: [_sample_entry_sample_entry_component__WEBPACK_IMPORTED_MODULE_10__["SampleEntryComponent"], _send_courier_send_courier_component__WEBPACK_IMPORTED_MODULE_11__["SendCourierComponent"], _mill_status_mill_status_component__WEBPACK_IMPORTED_MODULE_13__["MillStatusComponent"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_14__["PopoverComponent"], _brok_login_brok_login_component__WEBPACK_IMPORTED_MODULE_18__["BrokLoginComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _splashscreen_splashscreen_module__WEBPACK_IMPORTED_MODULE_19__["SplashscreenPageModule"], _imageprev_imageprev_module__WEBPACK_IMPORTED_MODULE_20__["ImageprevPageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_24__["IonicSelectableModule"], _planpage_planpage_module__WEBPACK_IMPORTED_MODULE_21__["PlanpagePageModule"], _usdconvertmodal_usdconvertmodal_module__WEBPACK_IMPORTED_MODULE_25__["UsdconvertmodalPageModule"], _trialperiod_trialperiod_module__WEBPACK_IMPORTED_MODULE_26__["TrialperiodPageModule"], _loader_component_loader_component_module__WEBPACK_IMPORTED_MODULE_33__["LoaderComponentPageModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
        scrollPadding: false,
        scrollAssist: true
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_32__["ImagePicker"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_theme_detection_ngx__WEBPACK_IMPORTED_MODULE_9__["ThemeDetection"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"], _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_22__["FirebaseMessaging"], _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_27__["Stripe"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_30__["FileChooser"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_31__["FilePath"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_29__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_28__["File"], _versionmodal_versionmodal_page__WEBPACK_IMPORTED_MODULE_23__["VersionmodalPage"],
      // Facebook,
      {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
        useClass: _custom_http_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["CustomHttpInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);

    /***/
  }),
  /***/"./src/app/brok-login/brok-login.component.scss": (
  /*!******************************************************!*\
    !*** ./src/app/brok-login/brok-login.component.scss ***!
    \******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppBrokLoginBrokLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "ion-content {\n  --background: url('sntc_field_runner-Recoveredlogin.png') no-repeat center/cover fixed;\n}\n\n.logo {\n  width: 230px;\n}\n\n.logo-row {\n  margin-top: 27px;\n  margin-bottom: 32px;\n}\n\n.user-icon {\n  width: 19px;\n  margin-top: 14px;\n  margin-left: 10px;\n}\n\n.login-fields {\n  border-radius: 100px;\n  box-shadow: -2px 4px 11px 0px #CCC;\n  width: 92%;\n  margin: 0 auto;\n  margin-top: 27px;\n  margin-bottom: 48px;\n}\n\n.login-now {\n  width: 68%;\n  height: 44px;\n  --background: #FFF;\n  color: #53b769;\n  text-transform: none;\n  --border-radius: 100px;\n  font-size: 16px;\n}\n\n.login-button {\n  margin-top: -16px;\n}\n\n.or-text {\n  color: #53b769;\n}\n\n.social-row img {\n  width: 63px;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.create-account {\n  color: #53b769;\n}\n\n.create-account h4 {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2Jyb2stbG9naW4vYnJvay1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnJvay1sb2dpbi9icm9rLWxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0ZBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBREVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDUjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURDSTtFQUNJLGVBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2Jyb2stbG9naW4vYnJvay1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9zbnRjX2ZpZWxkX3J1bm5lci1SZWNvdmVyZWRsb2dpbi5wbmcpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7XG59XG5cbi5sb2dve1xuICAgIHdpZHRoOiAyMzBweDtcbn1cblxuLmxvZ28tcm93e1xuICAgIG1hcmdpbi10b3A6IDI3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLnVzZXItaWNvbntcbiAgICB3aWR0aDogMTlweDtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubG9naW4tZmllbGRze1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJveC1zaGFkb3c6IC0ycHggNHB4IDExcHggMHB4ICNDQ0M7XG4gICAgd2lkdGg6IDkyJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG5cbi5sb2dpbi1ub3d7XG4gICAgd2lkdGg6IDY4JTtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZGO1xuICAgIGNvbG9yOiAjNTNiNzY5O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubG9naW4tYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IC0xNnB4O1xufVxuLm9yLXRleHR7XG4gICAgY29sb3I6ICM1M2I3Njk7XG59XG5cbi5zb2NpYWwtcm93e1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDYzcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxufVxuXG4uY3JlYXRlLWFjY291bnR7XG4gICAgY29sb3I6ICM1M2I3Njk7XG4gICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvc250Y19maWVsZF9ydW5uZXItUmVjb3ZlcmVkbG9naW4ucG5nKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAyMzBweDtcbn1cblxuLmxvZ28tcm93IHtcbiAgbWFyZ2luLXRvcDogMjdweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLnVzZXItaWNvbiB7XG4gIHdpZHRoOiAxOXB4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxvZ2luLWZpZWxkcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3gtc2hhZG93OiAtMnB4IDRweCAxMXB4IDBweCAjQ0NDO1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjdweDtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn1cblxuLmxvZ2luLW5vdyB7XG4gIHdpZHRoOiA2OCU7XG4gIGhlaWdodDogNDRweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZGO1xuICBjb2xvcjogIzUzYjc2OTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxvZ2luLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xufVxuXG4ub3ItdGV4dCB7XG4gIGNvbG9yOiAjNTNiNzY5O1xufVxuXG4uc29jaWFsLXJvdyBpbWcge1xuICB3aWR0aDogNjNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmNyZWF0ZS1hY2NvdW50IHtcbiAgY29sb3I6ICM1M2I3Njk7XG59XG4uY3JlYXRlLWFjY291bnQgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/brok-login/brok-login.component.ts": (
  /*!****************************************************!*\
    !*** ./src/app/brok-login/brok-login.component.ts ***!
    \****************************************************/
  /*! exports provided: BrokLoginComponent */
  /***/
  function srcAppBrokLoginBrokLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BrokLoginComponent", function () {
      return BrokLoginComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var BrokLoginComponent = /*#__PURE__*/function () {
      function BrokLoginComponent() {
        _classCallCheck(this, BrokLoginComponent);
      }
      return _createClass(BrokLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    BrokLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-brok-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./brok-login.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/brok-login/brok-login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./brok-login.component.scss */"./src/app/brok-login/brok-login.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BrokLoginComponent);

    /***/
  }),
  /***/"./src/app/components.service.ts": (
  /*!***************************************!*\
    !*** ./src/app/components.service.ts ***!
    \***************************************/
  /*! exports provided: ComponentsService */
  /***/
  function srcAppComponentsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ComponentsService", function () {
      return ComponentsService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ionic-native/camera/ngx */"./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */
    var _popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./popover/popover.component */"./src/app/popover/popover.component.ts");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    var ComponentsService = /*#__PURE__*/function () {
      function ComponentsService(modalCtrl, camera, popoverController, loadingController, toastController) {
        _classCallCheck(this, ComponentsService);
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.popoverController = popoverController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.loginUser = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.cancelPopup = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.chartInterval = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.sendMessage = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.newRecieveMessage = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.newRecieveMessageForUser = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.chatOpen = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.hasMessage = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.firePushNotif = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.isUserExpired = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.showPaymentModal = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.selectedPort = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.reRenderFooterMenu = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.reRenderSideMenu = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }
      return _createClass(ComponentsService, [{
        key: "openModal",
        value: function openModal(component) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var modal;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return this.modalCtrl.create({
                    component: component
                  });
                case 2:
                  modal = _context8.sent;
                  _context8.next = 5;
                  return modal.present();
                case 5:
                  return _context8.abrupt("return", _context8.sent);
                case 6:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "takePicture",
        value: function takePicture() {
          var options = {
            quality: 20,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          return this.camera.getPicture(options);
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var popover;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return this.popoverController.create({
                    component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"],
                    event: ev,
                    translucent: true
                  });
                case 2:
                  popover = _context9.sent;
                  _context9.next = 5;
                  return popover.present();
                case 5:
                  return _context9.abrupt("return", _context9.sent);
                case 6:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var loading;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return this.loadingController.create({
                    spinner: null,
                    message: "<div><img src=\"../assets/img/loading.gif\" style=\"height: 35px\"/><p>Please wait</p></div>",
                    cssClass: 'loadingPopup'
                    // content: `<img src="../assets/img/loading.gif" />`,
                  });
                case 2:
                  loading = _context10.sent;
                  _context10.next = 5;
                  return loading.present();
                case 5:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "presentToastWithOptions",
        value: function presentToastWithOptions(message) {
          var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Error';
          var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'top';
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return this.toastController.create({
                    header: header,
                    message: message,
                    position: position,
                    duration: 2000
                  });
                case 2:
                  toast = _context11.sent;
                  toast.present();
                case 4:
                case "end":
                  return _context11.stop();
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "validateInput",
        value: function validateInput(formData, requiredFields) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
            var isValid;
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  isValid = true;
                  _context12.next = 3;
                  return requiredFields.forEach(function (key) {
                    if (formData[key] != undefined && formData[key] != '' && formData[key] != null) {
                      if (typeof formData[key] === 'object') {
                        if (Object.keys(formData[key]).length == 0) {
                          isValid = false;
                        }
                      }
                    } else {
                      isValid = false;
                    }
                  });
                case 3:
                  return _context12.abrupt("return", isValid);
                case 4:
                case "end":
                  return _context12.stop();
              }
            }, _callee12);
          }));
        }
      }, {
        key: "compareTwoDates",
        value: function compareTwoDates(date2) {
          var todayDate = new Date();
          var expiredDate = new Date(date2);
          if (todayDate >= expiredDate) {
            localStorage.setItem('isExpired', 'true');
            this.isUserExpired.next('true');
          } else {
            localStorage.setItem('isExpired', 'false');
            this.isUserExpired.next('false');
          }
        }
      }, {
        key: "differanceTwoDate",
        value: function differanceTwoDate(todaydate, ExpiredDate) {
          return new Promise(function (resolve, reject) {
            var date1 = new Date(todaydate);
            var date2 = new Date(ExpiredDate);
            var start = Math.floor(date1.getTime() / (3600 * 24 * 1000));
            var end = Math.floor(date2.getTime() / (3600 * 24 * 1000));
            var daysDiff = end - start;
            resolve(daysDiff);
          });
        }
      }]);
    }();
    ComponentsService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };
    ComponentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], ComponentsService);

    /***/
  }),
  /***/"./src/app/custom-http-interceptor.service.ts": (
  /*!****************************************************!*\
    !*** ./src/app/custom-http-interceptor.service.ts ***!
    \****************************************************/
  /*! exports provided: CustomHttpInterceptorService */
  /***/
  function srcAppCustomHttpInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CustomHttpInterceptorService", function () {
      return CustomHttpInterceptorService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var CustomHttpInterceptorService = /*#__PURE__*/function () {
      function CustomHttpInterceptorService() {
        _classCallCheck(this, CustomHttpInterceptorService);
      }
      return _createClass(CustomHttpInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          request = request.clone({
            headers: request.headers.set('Content-Type', 'application/json')
          });
          return next.handle(request);
        }
      }]);
    }();
    CustomHttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CustomHttpInterceptorService);

    /***/
  }),
  /***/"./src/app/imageprev/imageprev-routing.module.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/imageprev/imageprev-routing.module.ts ***!
    \*******************************************************/
  /*! exports provided: ImageprevPageRoutingModule */
  /***/
  function srcAppImageprevImageprevRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ImageprevPageRoutingModule", function () {
      return ImageprevPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _imageprev_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./imageprev.page */"./src/app/imageprev/imageprev.page.ts");
    var routes = [{
      path: '',
      component: _imageprev_page__WEBPACK_IMPORTED_MODULE_3__["ImageprevPage"]
    }];
    var ImageprevPageRoutingModule = /*#__PURE__*/_createClass(function ImageprevPageRoutingModule() {
      _classCallCheck(this, ImageprevPageRoutingModule);
    });
    ImageprevPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ImageprevPageRoutingModule);

    /***/
  }),
  /***/"./src/app/imageprev/imageprev.module.ts": (
  /*!***********************************************!*\
    !*** ./src/app/imageprev/imageprev.module.ts ***!
    \***********************************************/
  /*! exports provided: ImageprevPageModule */
  /***/
  function srcAppImageprevImageprevModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ImageprevPageModule", function () {
      return ImageprevPageModule;
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
    var _imageprev_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./imageprev-routing.module */"./src/app/imageprev/imageprev-routing.module.ts");
    /* harmony import */
    var _imageprev_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./imageprev.page */"./src/app/imageprev/imageprev.page.ts");
    var ImageprevPageModule = /*#__PURE__*/_createClass(function ImageprevPageModule() {
      _classCallCheck(this, ImageprevPageModule);
    });
    ImageprevPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _imageprev_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageprevPageRoutingModule"]],
      declarations: [_imageprev_page__WEBPACK_IMPORTED_MODULE_6__["ImageprevPage"]]
    })], ImageprevPageModule);

    /***/
  }),
  /***/"./src/app/imageprev/imageprev.page.scss": (
  /*!***********************************************!*\
    !*** ./src/app/imageprev/imageprev.page.scss ***!
    \***********************************************/
  /*! exports provided: default */
  /***/
  function srcAppImageprevImageprevPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "app-imageprev {\n  --background: transparent !important ;\n}\n\nion-modal {\n  background: transparent !important;\n  --background: transparent !important;\n}\n\nion-modal .modal-wrapper {\n  background: transparent !important;\n  --background: transparent !important;\n}\n\nion-content {\n  background: transparent !important;\n  --background: transparent !important;\n}\n\n.sc-ion-modal-md-h {\n  background: transparent !important;\n  --background: transparent !important;\n}\n\n.modal-wrapper {\n  background: transparent !important;\n  --background: transparent !important;\n}\n\nion-content {\n  --background: transparent;\n}\n\n.crossModal {\n  font-size: 17px;\n  background: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  color: red;\n  margin: 0 auto;\n  align-items: center;\n  text-align: center;\n  align-self: center;\n  font-weight: bold;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2ltYWdlcHJldi9pbWFnZXByZXYucGFnZS5zY3NzIiwic3JjL2FwcC9pbWFnZXByZXYvaW1hZ2VwcmV2LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDRUo7O0FEREk7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR1I7O0FEQUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDSUo7O0FEREE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDSUo7O0FERkE7RUFDSSx5QkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9pbWFnZXByZXYvaW1hZ2VwcmV2LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZXByZXZ7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50XG59XG5pb24tbW9kYWx7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLm1vZGFsLXdyYXBwZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG59XG5pb24tY29udGVudHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgICAgXG59XG4uc2MtaW9uLW1vZGFsLW1kLWh7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7ICAgIFxufVxuXG4ubW9kYWwtd3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgICAgXG59XG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmNyb3NzTW9kYWx7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59IiwiYXBwLWltYWdlcHJldiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudCA7XG59XG5cbmlvbi1tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmlvbi1tb2RhbCAubW9kYWwtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5zYy1pb24tbW9kYWwtbWQtaCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmNyb3NzTW9kYWwge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/imageprev/imageprev.page.ts": (
  /*!*********************************************!*\
    !*** ./src/app/imageprev/imageprev.page.ts ***!
    \*********************************************/
  /*! exports provided: ImageprevPage */
  /***/
  function srcAppImageprevImageprevPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ImageprevPage", function () {
      return ImageprevPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var ImageprevPage = /*#__PURE__*/function () {
      function ImageprevPage(navParams, modalCtrl) {
        _classCallCheck(this, ImageprevPage);
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.slideOpts = {
          initialSlide: 1,
          slidesPerView: 1,
          spaceBetween: 5,
          freeMode: true,
          pagination: false,
          speed: 600,
          autoplay: true,
          loop: false
        };
      }
      return _createClass(ImageprevPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.image = this.navParams.get('img');
          console.log(this.image);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalCtrl.dismiss();
        }
      }]);
    }();
    ImageprevPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };
    ImageprevPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-imageprev',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./imageprev.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/imageprev/imageprev.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./imageprev.page.scss */"./src/app/imageprev/imageprev.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ImageprevPage);

    /***/
  }),
  /***/"./src/app/islogin.guard.ts": (
  /*!**********************************!*\
    !*** ./src/app/islogin.guard.ts ***!
    \**********************************/
  /*! exports provided: IsloginGuard */
  /***/
  function srcAppIsloginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "IsloginGuard", function () {
      return IsloginGuard;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var IsloginGuard = /*#__PURE__*/function () {
      function IsloginGuard(navCtrl) {
        _classCallCheck(this, IsloginGuard);
        this.navCtrl = navCtrl;
      }
      return _createClass(IsloginGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var isLogin = localStorage.getItem('id');
          var isActive = localStorage.getItem('status');
          if (isActive == null) {
            this.navCtrl.navigateRoot(['login']);
          }
          if (isLogin == null) {
            if (isActive == null) {
              this.navCtrl.navigateRoot(['register']);
            } else {
              return true;
            }
          } else {
            return true;
          }
        }
      }]);
    }();
    IsloginGuard.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };
    IsloginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], IsloginGuard);

    /***/
  }),
  /***/"./src/app/loader-component/loader-component-routing.module.ts": (
  /*!*********************************************************************!*\
    !*** ./src/app/loader-component/loader-component-routing.module.ts ***!
    \*********************************************************************/
  /*! exports provided: LoaderComponentPageRoutingModule */
  /***/
  function srcAppLoaderComponentLoaderComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoaderComponentPageRoutingModule", function () {
      return LoaderComponentPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _loader_component_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./loader-component.page */"./src/app/loader-component/loader-component.page.ts");
    var routes = [{
      path: '',
      component: _loader_component_page__WEBPACK_IMPORTED_MODULE_3__["LoaderComponentPage"]
    }];
    var LoaderComponentPageRoutingModule = /*#__PURE__*/_createClass(function LoaderComponentPageRoutingModule() {
      _classCallCheck(this, LoaderComponentPageRoutingModule);
    });
    LoaderComponentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoaderComponentPageRoutingModule);

    /***/
  }),
  /***/"./src/app/loader-component/loader-component.module.ts": (
  /*!*************************************************************!*\
    !*** ./src/app/loader-component/loader-component.module.ts ***!
    \*************************************************************/
  /*! exports provided: LoaderComponentPageModule */
  /***/
  function srcAppLoaderComponentLoaderComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoaderComponentPageModule", function () {
      return LoaderComponentPageModule;
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
    var _loader_component_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./loader-component-routing.module */"./src/app/loader-component/loader-component-routing.module.ts");
    /* harmony import */
    var _loader_component_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./loader-component.page */"./src/app/loader-component/loader-component.page.ts");
    var LoaderComponentPageModule = /*#__PURE__*/_createClass(function LoaderComponentPageModule() {
      _classCallCheck(this, LoaderComponentPageModule);
    });
    LoaderComponentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _loader_component_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoaderComponentPageRoutingModule"]],
      declarations: [_loader_component_page__WEBPACK_IMPORTED_MODULE_6__["LoaderComponentPage"]]
    })], LoaderComponentPageModule);

    /***/
  }),
  /***/"./src/app/loader-component/loader-component.page.scss": (
  /*!*************************************************************!*\
    !*** ./src/app/loader-component/loader-component.page.scss ***!
    \*************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppLoaderComponentLoaderComponentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci1jb21wb25lbnQvbG9hZGVyLWNvbXBvbmVudC5wYWdlLnNjc3MifQ== */";

    /***/
  }),
  /***/"./src/app/loader-component/loader-component.page.ts": (
  /*!***********************************************************!*\
    !*** ./src/app/loader-component/loader-component.page.ts ***!
    \***********************************************************/
  /*! exports provided: LoaderComponentPage */
  /***/
  function srcAppLoaderComponentLoaderComponentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoaderComponentPage", function () {
      return LoaderComponentPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var LoaderComponentPage = /*#__PURE__*/function () {
      function LoaderComponentPage() {
        _classCallCheck(this, LoaderComponentPage);
      }
      return _createClass(LoaderComponentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    LoaderComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loader-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./loader-component.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/loader-component/loader-component.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./loader-component.page.scss */"./src/app/loader-component/loader-component.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LoaderComponentPage);

    /***/
  }),
  /***/"./src/app/mill-status/mill-status.component.scss": (
  /*!********************************************************!*\
    !*** ./src/app/mill-status/mill-status.component.scss ***!
    \********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppMillStatusMillStatusComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n.back-button ion-icon {\n  font-size: 23px;\n}\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n.header-title {\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL21pbGwtc3RhdHVzL21pbGwtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9taWxsLXN0YXR1cy9taWxsLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0o7QURBSTtFQUNJLGVBQUE7QUNFUjtBRENBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDRUo7QURDQTtFQUNJLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21pbGwtc3RhdHVzL21pbGwtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9ue1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cbmlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci10aXRsZXtcbiAgICBjb2xvcjogI0ZGRjtcbn0iLCIuYmFjay1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5iYWNrLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM0OTRmNTg7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6ICNGRkY7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/mill-status/mill-status.component.ts": (
  /*!******************************************************!*\
    !*** ./src/app/mill-status/mill-status.component.ts ***!
    \******************************************************/
  /*! exports provided: MillStatusComponent */
  /***/
  function srcAppMillStatusMillStatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MillStatusComponent", function () {
      return MillStatusComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../components.service */"./src/app/components.service.ts");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    var MillStatusComponent = /*#__PURE__*/function () {
      function MillStatusComponent(componentService, restService) {
        _classCallCheck(this, MillStatusComponent);
        this.componentService = componentService;
        this.restService = restService;
        this.sellers = [];
        this.formData = {};
      }
      return _createClass(MillStatusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.componentService.modalCtrl.dismiss();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this6 = this;
          this.componentService.presentLoading().then(function () {
            _this6.restService.sampleEntryPreLoaddata().then(function (res) {
              _this6.componentService.loadingController.dismiss();
              _this6.sellers = res.seller;
            });
          });
        }
      }, {
        key: "saveMillStatus",
        value: function saveMillStatus() {
          var _this7 = this;
          this.componentService.validateInput(this.formData, ['date', 'remarks', 'seller', 'visit_status']).then(function (isValid) {
            if (isValid) {
              _this7.componentService.presentLoading().then(function () {
                _this7.restService.saveMillStatus(_this7.formData).then(function (res) {
                  _this7.componentService.loadingController.dismiss();
                  _this7.componentService.loadingController.dismiss();
                  _this7.componentService.presentToastWithOptions('Mill status saved successfully!', 'Success');
                  _this7.componentService.modalCtrl.dismiss();
                });
              });
            } else {
              _this7.componentService.presentToastWithOptions('Please select required fileds');
            }
          });
          console.log(this.formData);
        }
      }]);
    }();
    MillStatusComponent.ctorParameters = function () {
      return [{
        type: _components_service__WEBPACK_IMPORTED_MODULE_2__["ComponentsService"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
      }];
    };
    MillStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mill-status',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./mill-status.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/mill-status/mill-status.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./mill-status.component.scss */"./src/app/mill-status/mill-status.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_service__WEBPACK_IMPORTED_MODULE_2__["ComponentsService"], _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]])], MillStatusComponent);

    /***/
  }),
  /***/"./src/app/planpage/planpage-routing.module.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/planpage/planpage-routing.module.ts ***!
    \*****************************************************/
  /*! exports provided: PlanpagePageRoutingModule */
  /***/
  function srcAppPlanpagePlanpageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PlanpagePageRoutingModule", function () {
      return PlanpagePageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _planpage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./planpage.page */"./src/app/planpage/planpage.page.ts");
    var routes = [{
      path: '',
      component: _planpage_page__WEBPACK_IMPORTED_MODULE_3__["PlanpagePage"]
    }];
    var PlanpagePageRoutingModule = /*#__PURE__*/_createClass(function PlanpagePageRoutingModule() {
      _classCallCheck(this, PlanpagePageRoutingModule);
    });
    PlanpagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlanpagePageRoutingModule);

    /***/
  }),
  /***/"./src/app/planpage/planpage.module.ts": (
  /*!*********************************************!*\
    !*** ./src/app/planpage/planpage.module.ts ***!
    \*********************************************/
  /*! exports provided: PlanpagePageModule */
  /***/
  function srcAppPlanpagePlanpageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PlanpagePageModule", function () {
      return PlanpagePageModule;
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
    var _planpage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./planpage-routing.module */"./src/app/planpage/planpage-routing.module.ts");
    /* harmony import */
    var _planpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./planpage.page */"./src/app/planpage/planpage.page.ts");
    var PlanpagePageModule = /*#__PURE__*/_createClass(function PlanpagePageModule() {
      _classCallCheck(this, PlanpagePageModule);
    });
    PlanpagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _planpage_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlanpagePageRoutingModule"]],
      declarations: [_planpage_page__WEBPACK_IMPORTED_MODULE_6__["PlanpagePage"]]
    })], PlanpagePageModule);

    /***/
  }),
  /***/"./src/app/planpage/planpage.page.scss": (
  /*!*********************************************!*\
    !*** ./src/app/planpage/planpage.page.scss ***!
    \*********************************************/
  /*! exports provided: default */
  /***/
  function srcAppPlanpagePlanpagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".planName {\n  text-align: center;\n  font-size: 17px;\n  font-weight: bold;\n}\n\n.bar {\n  border-left: 1px solid green;\n  height: 500px;\n  display: inline;\n}\n\n.subPlan {\n  padding: 20px;\n  display: inline;\n}\n\n.title {\n  display: block;\n}\n\n@font-face {\n  font-family: \"GlacialIndifference-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('GlacialIndifference-Regular.otf');\n}\n\n@font-face {\n  font-family: \"GlacialIndifference-Italic\";\n  font-style: italic;\n  font-weight: normal;\n  src: url('GlacialIndifference-Italic.otf');\n}\n\nion-card {\n  font-family: initial;\n}\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 90px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background-color: #92B243 !important;\n  color: #FFFBD6 !important;\n}\n\nion-content {\n  --padding-bottom: 81px;\n}\n\n.buynow {\n  --color: white !important;\n  --background: #92B243 !important ;\n  --border: 2px solid #92B243 !important;\n  --border-color: #92B243 !important;\n  width: 100%;\n  color: white !important;\n  background: #92B243 !important;\n  border: 2px solid #92B243 !important;\n  border-radius: 5px;\n}\n\n.benefits {\n  background: #92b243;\n  text-align: center;\n  color: #fcf9d1;\n  padding-top: 1px;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n\n.activeCurrentPlan {\n  border: 4px solid #92B242 !important;\n}\n\n.showScreenshot {\n  visibility: visible;\n}\n\n.hideScreenshot {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3BsYW5wYWdlL3BsYW5wYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGxhbnBhZ2UvcGxhbnBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkE7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQ0tKOztBRE1BO0VBQ0kseUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUNKSjs7QURPQTtFQUdJLG9CQUFBO0FDUEo7O0FEVUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQ1BKOztBRFVBO0VBRUksc0JBQUE7QUNSSjs7QURXQTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBRUEsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FDVEo7O0FEWUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ1RKOztBRFlBO0VBQ0ksb0NBQUE7QUNUSjs7QURXQTtFQUNJLG1CQUFBO0FDUko7O0FEVUE7RUFDSSxrQkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvcGxhbnBhZ2UvcGxhbnBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYW5OYW1le1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5iYXJ7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmVlbjtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuLnN1YlBsYW57XG4gICAgcGFkZGluZzoyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cbi50aXRsZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyLm90ZicpO1xufVxuXG5cbi8vIEBmb250LWZhY2Uge1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuLy8gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvQXJpYWwub3RmJyk7XG4vLyB9XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnR2xhY2lhbEluZGlmZmVyZW5jZS1JdGFsaWMnO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvZ2xhY2lhbC9HbGFjaWFsSW5kaWZmZXJlbmNlLUl0YWxpYy5vdGYnKTtcbn1cblxuaW9uLWNhcmR7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0RGRUM1MSAwJSwgIzczQUEwQSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC8vIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiBpbml0aWFsO1xufVxuXG5pb24tdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAwIDkwcHggMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjRkZGQkQ2ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50e1xuICAgIC8vIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDgxcHg7XG59XG5cbi5idXlub3d7XG4gICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudCA7XG4gICAgLS1ib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDsgXG5cbiAgICB3aWR0aDoxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudCA7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJlbmVmaXRze1xuICAgIGJhY2tncm91bmQ6ICM5MmIyNDM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmNmOWQxOyAgIFxuICAgIHBhZGRpbmctdG9wOiAxcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXG59XG5cbi5hY3RpdmVDdXJyZW50UGxhbntcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjOTJCMjQyICFpbXBvcnRhbnQ7XG59XG4uc2hvd1NjcmVlbnNob3R7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5oaWRlU2NyZWVuc2hvdHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59IiwiLnBsYW5OYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmFyIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmVlbjtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uc3ViUGxhbiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9nbGFjaWFsL0dsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhci5vdGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR2xhY2lhbEluZGlmZmVyZW5jZS1JdGFsaWNcIjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9nbGFjaWFsL0dsYWNpYWxJbmRpZmZlcmVuY2UtSXRhbGljLm90ZlwiKTtcbn1cbmlvbi1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IGluaXRpYWw7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAwIDkwcHggMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkZCRDYgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiA4MXB4O1xufVxuXG4uYnV5bm93IHtcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQgO1xuICAtLWJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYmVuZWZpdHMge1xuICBiYWNrZ3JvdW5kOiAjOTJiMjQzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmNmOWQxO1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmFjdGl2ZUN1cnJlbnRQbGFuIHtcbiAgYm9yZGVyOiA0cHggc29saWQgIzkyQjI0MiAhaW1wb3J0YW50O1xufVxuXG4uc2hvd1NjcmVlbnNob3Qge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uaGlkZVNjcmVlbnNob3Qge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59Il19 */";

    /***/
  }),
  /***/"./src/app/planpage/planpage.page.ts": (
  /*!*******************************************!*\
    !*** ./src/app/planpage/planpage.page.ts ***!
    \*******************************************/
  /*! exports provided: PlanpagePage */
  /***/
  function srcAppPlanpagePlanpagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PlanpagePage", function () {
      return PlanpagePage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../components.service */"./src/app/components.service.ts");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    /* harmony import */
    var _trialperiod_trialperiod_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../trialperiod/trialperiod.page */"./src/app/trialperiod/trialperiod.page.ts");
    var PlanpagePage = /*#__PURE__*/function () {
      function PlanpagePage(menuCtrl, apiser, modelController, compSer, navCtrl, location, route) {
        var _this8 = this;
        _classCallCheck(this, PlanpagePage);
        this.menuCtrl = menuCtrl;
        this.apiser = apiser;
        this.modelController = modelController;
        this.compSer = compSer;
        this.navCtrl = navCtrl;
        this.location = location;
        this.route = route;
        this.paymentAmount = '3.33';
        this.currency = 'USD';
        this.currencyIcon = "$";
        this.stripe = Stripe('pk_live_tAcok0RjcD3tnKONwKRegMYp');
        // stripe = Stripe('pk_test_FyOvOhn86f8G1k2NHetJVJrz');
        this.cardDetails = {};
        this.featureSplit = [];
        this.slideOpts = {
          initialSlide: 0,
          slidesPerView: 1,
          spaceBetween: 1,
          freeMode: true,
          pagination: true,
          speed: 600,
          autoplay: false,
          loop: false
        };
        this.showScreenshotStatus = 0;
        this.priceToPay = 10;
        this.isDomesticRoleAvailable = false;
        this.isUSDRoleAvailable = false;
        this.showTrialPeriod = false;
        console.log('order_' + Math.floor(Math.random() * 30000000) + '_' + localStorage.getItem('id') + '_' + Math.floor(Math.random() * 30000000));
        this.getUSDPlans();
        // this.presentModel()
        if (localStorage.getItem('role') != '' && localStorage.getItem('role') != undefined && localStorage.getItem('role') != '0') {
          console.log("knjk");
          this.isDomesticRoleAvailable = true;
        }
        if (localStorage.getItem('usd_role') != '' && localStorage.getItem('usd_role') != undefined && localStorage.getItem('usd_role') != '0' && localStorage.getItem('is_INR_active') != '1') {
          console.log("ljmk");
          this.isUSDRoleAvailable = true;
        }
        // if( localStorage.getItem('ExpiryUSDDate') != undefined && localStorage.getItem('ExpiryUSDDate') != '' && localStorage.getItem('ExpiryUSDDate') != 'null' ) {
        // 	this.showTrialPeriod = true
        // }
        console.log(localStorage.getItem('ExpiryUSDDate'));
        console.log(localStorage.getItem('created_on'));
        console.log(typeof localStorage.getItem('transaction_id'));
        if (localStorage.getItem('transaction_id') == undefined || localStorage.getItem('transaction_id') == null || localStorage.getItem('transaction_id') == 'null') {
          console.log("jkni");
          this.showTrialPeriod = true;
        } else {
          console.log("jkni");
          this.showTrialPeriod = false;
        }
        // if( localStorage.getItem('ExpiryUSDDate') == localStorage.getItem('created_on') ){
        // 	this.showTrialPeriod = true
        // 	console.log('i am here');
        // }
        setTimeout(function () {
          _this8.apiser.dismissLoader();
        }, 10000);
        console.log(this.showTrialPeriod);
      }
      return _createClass(PlanpagePage, [{
        key: "slidePrev",
        value: function slidePrev() {
          this.slides.slidePrev();
        }
      }, {
        key: "slideNext",
        value: function slideNext() {
          this.slides.slideNext();
        }
        // ionViewDidLoad() {
        // 	alert(this.isUSDRoleAvailable);
        // 	if( this.isUSDRoleAvailable ){
        // 		setTimeout(() => {
        // 			this.setupStripe();
        // 		} ,5000)
        // 	}
        // 	console.log("jnknk");
        // }
      }, {
        key: "setupStripe",
        value: function setupStripe() {
          var _this9 = this;
          var elements = this.stripe.elements();
          console.log('elements');
          console.log(elements);
          var style = {
            base: {
              color: '#32325d',
              lineHeight: '24px',
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSmoothing: 'antialiased',
              fontSize: '16px',
              '::placeholder': {
                color: '#aab7c4'
              }
            },
            invalid: {
              color: '#fa755a',
              iconColor: '#fa755a'
            }
          };
          this.card = elements.create('card', {
            style: style
          });
          this.card.mount('#card-element');
          this.paymentAmount = this.selectedPlanDiscountedAmountUSD;
          this.card.addEventListener('change', function (event) {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
              displayError.textContent = event.error.message;
            } else {
              displayError.textContent = '';
            }
          });
          var form = document.getElementById('payment-form');
          console.log(form);
          form.addEventListener('submit', function (event) {
            _this9.apiser.presentLoader('Please wait...');
            event.preventDefault();
            _this9.stripe.createSource(_this9.card).then(function (result) {
              if ('error' in result) {
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
                _this9.apiser.presentToast(result.error.message);
                _this9.apiser.dismissLoader();
              } else {
                _this9.stripe.createToken(_this9.card).then(function (data) {
                  var cardId = data.token.card.id;
                  _this9.stripe.createPaymentMethod({
                    type: 'card',
                    card: _this9.card
                  }).then(function (res) {
                    var paymentMethodId = res.paymentMethod.id;
                    // this.stripe.paymentMethod()
                    _this9.apiser.getCustomerStripe({
                      'paymentMethodId': paymentMethodId,
                      'email': localStorage.getItem('email'),
                      'source': result.source.id
                    }).then(function (res) {
                      console.log(res);
                      _this9.stripeCustomerId = res.stripeCustomer;
                    })["catch"](function (err) {
                      console.log(err);
                    });
                  })["catch"](function (err) {
                    console.log(err);
                  });
                  console.log(data);
                  var myData = {
                    'amount': _this9.selectedPlanDiscountedAmountUSD,
                    'currency': 'usd',
                    'description': 'Example charge',
                    'stripeToken': data.token.id,
                    'source': result.source.id,
                    'email': localStorage.getItem('email')
                  };
                  _this9.apiser.chargeStripe(myData).then(function (res) {
                    console.log(res);
                    if (res.data.captured == true && res.data.paid == true) {
                      var plan_id = _this9.selectedPlanId;
                      _this9.apiser.addOrder({
                        transaction_id: 'stripe',
                        user_id: localStorage.getItem('id'),
                        plan_id: plan_id
                      }).then(function (apires) {
                        localStorage.setItem('expired_on', apires.userDetails[0]['expired_on']);
                        localStorage.setItem('apptype', 'USD');
                        localStorage.setItem('is_usd_active', '1');
                        localStorage.setItem('isExpired', 'false');
                        localStorage.setItem('usd_role', apires.userDetails[0]['usd_role']);
                        localStorage.setItem('transaction_id', res.data.balance_transaction);
                        localStorage.setItem('isUserActivatedUSD', '1');
                        _this9.compSer.isUserExpired.next('false');
                        _this9.navCtrl.navigateForward(['payment-success']);
                        _this9.apiser.presentToast('Payment successful.');
                        // this.closeme();
                      }, function (err) {
                        _this9.navCtrl.navigateForward(['payment-cancel']);
                        _this9.apiser.presentToast('Something went wrong.');
                      });
                    }
                    _this9.apiser.dismissLoader();
                  })["catch"](function (err) {
                    console.log(err);
                    var errorElement = document.getElementById('card-errors');
                    errorElement.textContent = err.error.message;
                    _this9.apiser.presentToast(err.error.message);
                    _this9.apiser.dismissLoader();
                  });
                })["catch"](function () {
                  console.log("error");
                  _this9.apiser.dismissLoader();
                });
              }
              return false;
              if (result.error) {} else {
                // stripe.charges.create({
                // 	amount: req.body.amount,
                // 	currency: req.body.currency,
                // 	source: req.body.token,
                // 	description: 'My First Test Charge (created for API docs)',
                // 	  }).then((charge) => {
                // 		console.log(charge);
                // 		res.status(200).json(charge);
                // 	  })
                // 	  .catch((err) => {
                // 		console.log(err);
                // 		res.send(err);
                // 	  });
                console.log(result);
              }
            });
          });
        }
      }, {
        key: "makepaymentButton",
        value: function makepaymentButton() {
          // this.stripe.charges.create({
          // 	amount: 100,
          // 	currency: 'USD',
          // 	source: req.body.token,
          // 	description: 'My First Test Charge (created for API docs)',
          // 	  }).then((charge) => {
          // 		console.log(charge);
          // 		// res.status(200).json(charge);
          // 	  })
          // 	  .catch((err) => {
          // 		console.log(err);
          // 		// res.send(err);
          // 	  });
        }
        // payWithStripe() {
        // 	this.stripe.setPublishableKey(this.stripe_Key);
        // 	this.cardDetails = {
        // 		number: '4242424242424242',
        // 		expMonth: 12,
        // 		expYear: 2025,
        // 		cvc: '220'
        // 	}
        // 	this.stripe.createCardToken(this.cardDetails)
        // 	  .then(token => {
        // 		console.log(token);
        // 		// this.makePayment(token.id);
        // 	  })
        // 	  .catch(error => console.error(error));
        //   }
      }, {
        key: "presentModel",
        value: function presentModel() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
            var model;
            return _regeneratorRuntime().wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return this.modelController.create({
                    component: _trialperiod_trialperiod_page__WEBPACK_IMPORTED_MODULE_7__["TrialperiodPage"],
                    cssClass: "contactModal",
                    animated: true
                  });
                case 2:
                  model = _context13.sent;
                  _context13.next = 5;
                  return model.present();
                case 5:
                case "end":
                  return _context13.stop();
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('role') != '' && localStorage.getItem('role') != undefined && localStorage.getItem('role') != '0') {
            this.isUSDRoleAvailable = false;
          }
          if (localStorage.getItem('usd_role') != '' && localStorage.getItem('usd_role') != undefined && localStorage.getItem('usd_role') != '0' && localStorage.getItem('is_INR_active') != '1') {
            console.log("ljmk");
            this.isUSDRoleAvailable = true;
          }
          this.price = this.selectedPlanDiscountedAmountUSD + " $";
          var enviroment = "";
          // if( this.isUSDRoleAvailable ){
          // 	setTimeout(() => {
          // 		this.setupStripe();
          // 	} ,5000)
          // }
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this10 = this;
          if (this.isUSDRoleAvailable) {
            setTimeout(function () {
              _this10.setupStripe();
              console.log("i runned");
            }, 2000);
          }
          console.log("jnknk");
          if (localStorage.getItem('usd_role')) {
            // paypal.Buttons(this.payPalConfig).render('#paypal-button');
          }
        }
      }, {
        key: "closeme",
        value: function closeme() {
          if (localStorage.getItem('is_INR_active') == "1") {
            this.modelController.dismiss();
            localStorage.setItem('apptype', 'OTHER');
            this.navCtrl.navigateForward(['prices']);
          } else {
            if (localStorage.getItem('isExpiryUSD') == "true") {
              this.navCtrl.navigateForward(['planpage']);
            } else {
              this.modelController.dismiss();
              // localStorage.setItem('apptype' , 'OTHER');
              // this.navCtrl.navigateForward(['prices']);
              // return false;
              if (localStorage.getItem('is_INR_active') == '1') {
                localStorage.setItem('apptype', 'OTHER');
                this.navCtrl.navigateForward(['prices']);
              } else if (localStorage.getItem('isUserActivatedUSD') == '1') {
                localStorage.setItem('apptype', 'USD');
                this.navCtrl.navigateForward(['priceusd']);
              }
            }
          }
        }
      }, {
        key: "validPurchase",
        value: function validPurchase(id) {
          // Purchase confirm 
          //Do whatever you want to do
        }
      }, {
        key: "getPlans",
        value: function getPlans() {
          var _this11 = this;
          this.apiser.getPlans().then(function (res) {
            _this11.listPlans = res.plans;
            _this11.apiser.loaderCtrl.dismiss();
          }, function (err) {
            _this11.apiser.loaderCtrl.dismiss();
          });
        }
      }, {
        key: "floatingTwo",
        value: function floatingTwo(offerPrice, actualPrice) {
          var percentageValue = 100 - offerPrice * 100 / actualPrice;
          return percentageValue.toFixed(2);
        }
      }, {
        key: "getSplitsValue",
        value: function getSplitsValue(feature) {
          this.featureSplit = feature.split(',');
        }
      }, {
        key: "startTrial",
        value: function startTrial() {
          var _this12 = this;
          this.apiser.presentLoader('Please wait...');
          var userEmail = localStorage.getItem('user');
          var userId = JSON.parse(userEmail).id;
          this.apiser.startTrialPeriod(userId).then(function (res) {
            localStorage.setItem('transaction_id', 'trial');
            localStorage.setItem('is_usd_active', '1');
            localStorage.setItem('usd_role', res.data.usd_role);
            localStorage.setItem('isExpired', 'false');
            localStorage.setItem('isExpiryUSD', 'false');
            localStorage.setItem('isUserActivatedUSD', '1');
            localStorage.setItem('expired_on', res.data.expired_on);
            localStorage.setItem('ExpiryUSDDate', res.data.expired_on);
            localStorage.setItem('apptype', 'USD');
            setTimeout(function () {
              _this12.apiser.dismissLoader();
              _this12.closeme();
              _this12.navCtrl.navigateForward(['priceusd']);
            }, 2000);
          }, function (err) {
            _this12.apiser.dismissLoader();
            console.log(err);
          });
        }
      }, {
        key: "buynow",
        value: function buynow() {
          var _this13 = this;
          // key: 'rzp_test_LA2o3rFXhgtfmS',
          // key: 'rzp_live_igtbdlPLfbiw6d',
          var paymentAmount = this.selectedPlanDiscountedAmountINR;
          var planid = this.selectedPlanId;
          var data = {
            'amount': paymentAmount * 100
          };
          this.apiser.getOrderIdFromRazorpay(data).then(function (res) {
            var options = {
              description: ' Plan',
              image: 'https://ricebrok-staging.webcooks.in/images/sitelogo.png',
              currency: 'INR',
              // key: 'rzp_test_dvU9zyoVzyzTb5',
              key: 'rzp_live_NY1vm28wpcuCKf',
              // secret: 'eTqutKKKWKjyq28vTsahFIcl',
              payment_capture: 1,
              amount: paymentAmount * 100,
              order_id: JSON.parse(res.data).id,
              name: 'SNTC',
              prefill: {
                email: localStorage.getItem('email'),
                contact: localStorage.getItem('mobile'),
                name: localStorage.getItem('name')
              },
              theme: {
                color: '#F37254'
              },
              modal: {
                ondismiss: function ondismiss() {
                  console.log('dismissed');
                }
              }
            };
            var successCallback = function successCallback(payment_id) {
              var tran_id = payment_id;
              var userId = localStorage.getItem('id');
              var plan_id = _this13.selectedPlanId;
              _this13.apiser.addOrder({
                transaction_id: tran_id,
                user_id: localStorage.getItem('id'),
                plan_id: plan_id
              }).then(function (res) {
                localStorage.setItem('expired_on', res.userDetails[0]['expired_on']);
                // alert("payment successfull");
                localStorage.setItem('apptype', 'USD');
                localStorage.setItem('is_usd_active', '1');
                localStorage.setItem('isExpired', 'false');
                localStorage.setItem('usd_role', res.userDetails[0]['usd_role']);
                localStorage.setItem('transaction_id', res.userDetails[0]['transaction_id']);
                localStorage.setItem('isUserActivatedUSD', '1');
                _this13.compSer.isUserExpired.next('false');
                _this13.navCtrl.navigateForward(['payment-success']);
                // this.closeme();
              }, function (err) {
                console.log("kjniknk");
              });
            };
            var cancelCallback = function cancelCallback(error) {
              // alert(JSON.stringify(error));
              _this13.navCtrl.navigateForward(['payment-cancel']);
              console.log(error);
              // this.compSer.chartInterval.next("15 Days");
            };
            RazorpayCheckout.open(options, successCallback, cancelCallback);
          })["catch"](function (err) {
            console.log(err);
          });
          return false;
        }
      }, {
        key: "getUSDPlans",
        value: function getUSDPlans() {
          var _this14 = this;
          this.apiser.getUSDPlan().then(function (res) {
            console.log(res.plans[0]);
            _this14.listUSDPlans = res.plans;
            _this14.selectedPlanId = res.plans[0].id;
            console.log(res.plans[0].discounted_prie);
            _this14.selectedPlanDiscountedAmountINR = res.plans[0].discounted_prie;
            _this14.selectedPlanDiscountedAmountUSD = res.plans[0].discounted_price_usd;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "updateSelectedPlan",
        value: function updateSelectedPlan(PlanDetails) {
          this.selectedPlanId = PlanDetails.id;
          this.selectedPlanDiscountedAmountINR = PlanDetails.discounted_prie;
          this.selectedPlanDiscountedAmountUSD = PlanDetails.discounted_price_usd;
        }
      }, {
        key: "showScreenshot",
        value: function showScreenshot() {
          if (this.showScreenshotStatus == 0) {
            this.showScreenshotStatus = 1;
          } else {
            this.showScreenshotStatus = 0;
          }
          console.log(this.showScreenshotStatus);
        }
      }, {
        key: "openModel",
        value: function openModel() {
          this.menuCtrl.enable(true);
          this.menuCtrl.open();
        }
      }]);
    }();
    PlanpagePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('slides', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])], PlanpagePage.prototype, "slides", void 0);
    PlanpagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-planpage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./planpage.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/planpage/planpage.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./planpage.page.scss */"./src/app/planpage/planpage.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], PlanpagePage);

    /***/
  }),
  /***/"./src/app/popover/popover.component.scss": (
  /*!************************************************!*\
    !*** ./src/app/popover/popover.component.scss ***!
    \************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPopoverPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  }),
  /***/"./src/app/popover/popover.component.ts": (
  /*!**********************************************!*\
    !*** ./src/app/popover/popover.component.ts ***!
    \**********************************************/
  /*! exports provided: PopoverComponent */
  /***/
  function srcAppPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
      return PopoverComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var PopoverComponent = /*#__PURE__*/function () {
      function PopoverComponent(navCtrl, popoverController) {
        _classCallCheck(this, PopoverComponent);
        this.navCtrl = navCtrl;
        this.popoverController = popoverController;
      }
      return _createClass(PopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.popoverController.dismiss();
          this.navCtrl.navigateRoot('login', {
            animationDirection: 'forward'
          });
        }
      }]);
    }();
    PopoverComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };
    PopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./popover.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./popover.component.scss */"./src/app/popover/popover.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], PopoverComponent);

    /***/
  }),
  /***/"./src/app/rest.service.ts": (
  /*!*********************************!*\
    !*** ./src/app/rest.service.ts ***!
    \*********************************/
  /*! exports provided: RestService */
  /***/
  function srcAppRestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RestService", function () {
      return RestService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var RestService = /*#__PURE__*/function () {
      function RestService(http, modalController, loaderCtrl, toastCtrl) {
        _classCallCheck(this, RestService);
        this.http = http;
        this.modalController = modalController;
        this.loaderCtrl = loaderCtrl;
        this.toastCtrl = toastCtrl;
        // public APIURL:any = 'http://localhost/rice/rice_brokerage/public/api/';
        this.APIURL = "https://snjtradelink.com/staging/public/api/";
        this.imageUrl = "https://snjtradelink.com/staging/public/";
      }
      return _createClass(RestService, [{
        key: "presentLoader",
        value: function presentLoader(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
            var loading;
            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return this.loaderCtrl.create({
                    spinner: null,
                    message: "<div><img src=\"../assets/img/loading.gif\" style=\"height: 35px\"/><p>Please wait</p></div>",
                    cssClass: 'loadingPopup'
                    // content: `<img src="../assets/img/loading.gif" />`,
                  });
                case 2:
                  loading = _context14.sent;
                  _context14.next = 5;
                  return loading.present();
                case 5:
                case "end":
                  return _context14.stop();
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee15$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return this.toastCtrl.create({
                    message: message,
                    duration: 2000,
                    position: "bottom"
                  });
                case 2:
                  toast = _context15.sent;
                  toast.present();
                case 4:
                case "end":
                  return _context15.stop();
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "dismissLoader",
        value: function dismissLoader() {
          this.loaderCtrl.dismiss();
        }
        //contactmodal
      }, {
        key: "login",
        value: function login(userDetails) {
          var _this15 = this;
          return new Promise(function (resolve, reject) {
            _this15.http.post(_this15.APIURL + "login", userDetails).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "sampleEntryPreLoaddata",
        value: function sampleEntryPreLoaddata() {
          var _this16 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this16.http.get(_this16.APIURL + "pre-load-sample-data?api_token=" + token).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getBrandList",
        value: function getBrandList() {
          var _this17 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this17.http.get(_this17.APIURL + "get/brand/list?api_token=" + token).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getSellerINRPacking",
        value: function getSellerINRPacking() {
          var _this18 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this18.http.get(_this18.APIURL + "get/seller/inr/packing?api_token=" + token).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getBuyerINRPacking",
        value: function getBuyerINRPacking() {
          var _this19 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this19.http.get(_this19.APIURL + "get/buyer/inr/packing?api_token=" + token).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getLatestNotifications",
        value: function getLatestNotifications() {
          var _this20 = this;
          var id = localStorage.getItem("id");
          return new Promise(function (resolve, reject) {
            _this20.http.get(_this20.APIURL + "get/user/notification/" + id).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getTransportStates",
        value: function getTransportStates() {
          var _this21 = this;
          return new Promise(function (resolve, reject) {
            _this21.http.get(_this21.APIURL + "get/transport/states").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "saveSampleEntry",
        value: function saveSampleEntry(formData) {
          var _this22 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this22.http.post(_this22.APIURL + "sample/save?api_token=" + token, JSON.stringify(formData)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getCustomerStripe",
        value: function getCustomerStripe(postedData) {
          var _this23 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this23.http.post(_this23.APIURL + "check/customer?api_token=" + token, JSON.stringify(postedData)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "pubdingCourierSamples",
        value: function pubdingCourierSamples() {
          var _this24 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this24.http.get(_this24.APIURL + "pending/courier/samples?api_token=" + token).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "listPorts",
        value: function listPorts() {
          var _this25 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this25.http.get(_this25.APIURL + "list/port").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getImagesForDashboard",
        value: function getImagesForDashboard() {
          var _this26 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this26.http.get(_this26.APIURL + "get/images/for/dashboard").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "saveCourier",
        value: function saveCourier(formData) {
          var _this27 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this27.http.post(_this27.APIURL + "courier/save?api_token=" + token, JSON.stringify(formData)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "saveMillStatus",
        value: function saveMillStatus(formData) {
          var _this28 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this28.http.post(_this28.APIURL + "millstatus/save?api_token=" + token, JSON.stringify(formData)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "saveRiceQuery",
        value: function saveRiceQuery(formData) {
          var _this29 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this29.http.post(_this29.APIURL + "add/rice/query?api_token=" + token, JSON.stringify(formData)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "updateCounterStatus",
        value: function updateCounterStatus(formData) {
          var _this30 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this30.http.post(_this30.APIURL + "update/counter/status?api_token=" + token, JSON.stringify(formData)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "presentModal",
        value: function presentModal(modalPage) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
            var modal;
            return _regeneratorRuntime().wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return this.modalController.create({
                    component: modalPage,
                    cssClass: "my-custom-class"
                  });
                case 2:
                  modal = _context16.sent;
                  _context16.next = 5;
                  return modal.present();
                case 5:
                  return _context16.abrupt("return", _context16.sent);
                case 6:
                case "end":
                  return _context16.stop();
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "getPrices",
        value: function getPrices(state, type) {
          var _this31 = this;
          return new Promise(function (resolve, reject) {
            if (state != undefined) {
              _this31.http.get(_this31.APIURL + "prices/" + state + "/" + type).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            }
          });
        }
      }, {
        key: "getChartData",
        value: function getChartData(state, riceType, rice, timePeriod) {
          var _this32 = this;
          timePeriod = timePeriod.split(" ").join("_");
          return new Promise(function (resolve, reject) {
            _this32.http.get(_this32.APIURL + "get/price/" + btoa(state) + "/" + btoa(riceType) + "/" + btoa(rice) + "/" + btoa(timePeriod)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getPlans",
        value: function getPlans() {
          var _this33 = this;
          return new Promise(function (resolve, reject) {
            _this33.http.get(_this33.APIURL + "get/plans").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "checkUserPlan",
        value: function checkUserPlan() {
          var _this34 = this;
          return new Promise(function (resolve, reject) {
            _this34.http.get(_this34.APIURL + "check/user/plan/" + localStorage.getItem("id")).subscribe(function (res) {
              resolve(res.data);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getOrderIdFromRazorpay",
        value: function getOrderIdFromRazorpay(jsonData) {
          var _this35 = this;
          return new Promise(function (resolve, reject) {
            _this35.http.post(_this35.APIURL + "get/orderid/razorpay", JSON.stringify(jsonData)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "chargeStripe",
        value: function chargeStripe(jsonData) {
          var _this36 = this;
          return new Promise(function (resolve, reject) {
            _this36.http.post(_this36.APIURL + "stripe-payment", JSON.stringify(jsonData)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "addOrder",
        value: function addOrder(jsonData) {
          var _this37 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this37.http.post(_this37.APIURL + "save/order?api_token=" + token, JSON.stringify(jsonData)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getGallery",
        value: function getGallery() {
          var _this38 = this;
          return new Promise(function (resolve, reject) {
            _this38.http.get(_this38.APIURL + "get/gallery/list").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getGalleryData",
        value: function getGalleryData(_getGalleryData) {
          var _this39 = this;
          return new Promise(function (resolve, reject) {
            _this39.http.get(_this39.APIURL + "get/gallery/details/" + _getGalleryData).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getTradeData",
        value: function getTradeData(tradeId) {
          var _this40 = this;
          return new Promise(function (resolve, reject) {
            _this40.http.get(_this40.APIURL + "get/trade/details/" + tradeId).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "regsiterUser",
        value: function regsiterUser(formdata) {
          var _this41 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this41.http.post(_this41.APIURL + "save/user?api_token=" + token, JSON.stringify(formdata)).subscribe(function (res) {
              console.log(res);
              resolve(res);
            }, function (err) {
              console.log(err);
              reject(err);
            });
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser(formdata) {
          var _this42 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this42.http.post(_this42.APIURL + "update/user?api_token=" + token, JSON.stringify(formdata)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "verifyUser",
        value: function verifyUser(formdata) {
          var _this43 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this43.http.post(_this43.APIURL + "verify/user?api_token=" + token, JSON.stringify(formdata)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "sendOTP",
        value: function sendOTP(number) {
          var _this44 = this;
          return new Promise(function (resolve, reject) {
            _this44.http.get(_this44.APIURL + "send/otp/" + number).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "resendOTP",
        value: function resendOTP(number) {
          var _this45 = this;
          return new Promise(function (resolve, reject) {
            _this45.http.get(_this45.APIURL + "resend/otp/" + number).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "verifyOTP",
        value: function verifyOTP(number, otp) {
          var _this46 = this;
          return new Promise(function (resolve, reject) {
            _this46.http.get(_this46.APIURL + "verify/otp/" + number + "/" + otp).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "changePassword",
        value: function changePassword(formData) {
          var _this47 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this47.http.post(_this47.APIURL + "change/password?api_token=" + token, JSON.stringify(formData)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getBasmatiState",
        value: function getBasmatiState() {
          var _this48 = this;
          return new Promise(function (resolve, reject) {
            _this48.http.get(_this48.APIURL + "get/basmati/state").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getNONBasmatiState",
        value: function getNONBasmatiState() {
          var _this49 = this;
          return new Promise(function (resolve, reject) {
            _this49.http.get(_this49.APIURL + "get/nonbasmati/state").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getChartInterval",
        value: function getChartInterval() {
          var _this50 = this;
          return new Promise(function (resolve, reject) {
            _this50.http.get(_this50.APIURL + "get/chartinterval").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(userDetails) {
          var _this51 = this;
          return new Promise(function (resolve, reject) {
            _this51.http.post(_this51.APIURL + "save/message", userDetails).subscribe(function (res) {
              console.log("jnhjkn");
              resolve(res);
            }, function (err) {
              console.log("lnhjnk");
              reject(err);
            });
          });
        }
      }, {
        key: "updateToken",
        value: function updateToken(id, token) {
          var _this52 = this;
          return new Promise(function (resolve, reject) {
            _this52.http.post(_this52.APIURL + "update/user/token", JSON.stringify({
              id: id,
              user_token: token
            })).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getMessages",
        value: function getMessages(from, to) {
          var _this53 = this;
          return new Promise(function (resolve, reject) {
            _this53.http.get(_this53.APIURL + "get/message/" + from + "/" + to).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getChatPerson",
        value: function getChatPerson() {
          var _this54 = this;
          return new Promise(function (resolve, reject) {
            _this54.http.get(_this54.APIURL + "get/message/contacts/list").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getChatCount",
        value: function getChatCount() {
          var _this55 = this;
          return new Promise(function (resolve, reject) {
            _this55.http.get(_this55.APIURL + "get/user/messages/count/" + localStorage.getItem("id")).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getNewsRunner",
        value: function getNewsRunner() {
          var _this56 = this;
          return new Promise(function (resolve, reject) {
            _this56.http.get(_this56.APIURL + "get/news/runner").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "CheckUserExpired",
        value: function CheckUserExpired() {
          var _this57 = this;
          return new Promise(function (resolve, reject) {
            _this57.http.get(_this57.APIURL + "check/user/expired/" + localStorage.getItem("id")).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getPriceBasmatiState",
        value: function getPriceBasmatiState() {
          var _this58 = this;
          return new Promise(function (resolve, reject) {
            _this58.http.get(_this58.APIURL + "get/price/states").subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          });
        }
        // getPriceNONBasmatiState(){
        // 	return new Promise((resolve , reject) => {
        // 		this.http.get(this.APIURL+'get/price/states').subscribe( (res:any) => {
        // 			console.log(res);
        // 		} ,(err:any) => {
        // 			console.log(err);
        // 		});
        // 	});
        // }
      }, {
        key: "getPortDetails",
        value: function getPortDetails(state) {
          var _this59 = this;
          return new Promise(function (resolve, reject) {
            _this59.http.get(_this59.APIURL + "get/port/details/" + state).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getUserPlanDetails",
        value: function getUserPlanDetails() {
          var _this60 = this;
          return new Promise(function (resolve, reject) {
            _this60.http.get(_this60.APIURL + "get/user/plan/" + localStorage.getItem("id")).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getChatStatus",
        value: function getChatStatus() {
          var _this61 = this;
          return new Promise(function (resolve, reject) {
            _this61.http.get(_this61.APIURL + "get/chat/status").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getLatestVersion",
        value: function getLatestVersion() {
          var _this62 = this;
          return new Promise(function (resolve, reject) {
            _this62.http.get(_this62.APIURL + "get/latest/version").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getUSDPrice",
        value: function getUSDPrice(userId) {
          var _this63 = this;
          return new Promise(function (resolve, reject) {
            _this63.http.get(_this63.APIURL + "get/usd/prices/" + userId).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getOceanPorts",
        value: function getOceanPorts() {
          var _this64 = this;
          return new Promise(function (resolve, reject) {
            _this64.http.get(_this64.APIURL + "get/distinct/region").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getAllPorts",
        value: function getAllPorts(riceQualityId) {
          var _this65 = this;
          return new Promise(function (resolve, reject) {
            _this65.http.get(_this65.APIURL + "get/all/ports/" + riceQualityId + "/" + localStorage.getItem("id")).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getDataForBuyer",
        value: function getDataForBuyer() {
          var _this66 = this;
          return new Promise(function (resolve, reject) {
            _this66.http.get(_this66.APIURL + "get/data/for/buyer").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getRiceQualities",
        value: function getRiceQualities(type) {
          var _this67 = this;
          // type = 1 or 2 ( basmati or non -basmati )
          return new Promise(function (resolve, reject) {
            _this67.http.get(_this67.APIURL + "get/rice/qualities/" + type).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getRiceQualitiesForms",
        value: function getRiceQualitiesForms(riceNameId) {
          var _this68 = this;
          // type = 1 or 2 ( basmati or non -basmati )
          return new Promise(function (resolve, reject) {
            _this68.http.get(_this68.APIURL + "get/rice/qualities/name/" + riceNameId).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getRiceWand",
        value: function getRiceWand(riceNameId) {
          var _this69 = this;
          return new Promise(function (resolve, reject) {
            _this69.http.get(_this69.APIURL + "get/rice/wand/" + riceNameId).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getBuyerDetails",
        value: function getBuyerDetails(queryId) {
          var _this70 = this;
          return new Promise(function (resolve, reject) {
            _this70.http.get(_this70.APIURL + "get/buyer/details/" + queryId).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "saveUserBid",
        value: function saveUserBid(postedData) {
          var _this71 = this;
          return new Promise(function (resolve, reject) {
            _this71.http.post(_this71.APIURL + "save/bid", JSON.stringify(postedData)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getCalculatorDetails",
        value: function getCalculatorDetails() {
          var _this72 = this;
          return new Promise(function (resolve, reject) {
            _this72.http.get(_this72.APIURL + "get/calculator/data").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "saveUSDPrices",
        value: function saveUSDPrices(postedData) {
          var _this73 = this;
          return new Promise(function (resolve, reject) {
            _this73.http.post(_this73.APIURL + "save/usd/prices", postedData).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "addBidOnBuyerQuery",
        value: function addBidOnBuyerQuery(postedData) {
          var _this74 = this;
          return new Promise(function (resolve, reject) {
            _this74.http.post(_this74.APIURL + "save/user/bid", postedData).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getMyBids",
        value: function getMyBids(userid) {
          var _this75 = this;
          return new Promise(function (resolve, reject) {
            _this75.http.get(_this75.APIURL + "get/my/bids/" + userid).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getTrades",
        value: function getTrades(userid) {
          var _this76 = this;
          return new Promise(function (resolve, reject) {
            _this76.http.get(_this76.APIURL + "get/trades/" + userid).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getBuyerList",
        value: function getBuyerList() {
          var _this77 = this;
          return new Promise(function (resolve, reject) {
            _this77.http.get(_this77.APIURL + "get/buyer/list").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getUSDPlan",
        value: function getUSDPlan() {
          var _this78 = this;
          return new Promise(function (resolve, reject) {
            _this78.http.get(_this78.APIURL + "get/usd/plans").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getUSDCounties",
        value: function getUSDCounties() {
          var _this79 = this;
          return new Promise(function (resolve, reject) {
            _this79.http.get(_this79.APIURL + "get/countries/list").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getBagVendors",
        value: function getBagVendors() {
          var _this80 = this;
          return new Promise(function (resolve, reject) {
            _this80.http.get(_this80.APIURL + "get/bag/vendors").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "contact",
        value: function contact() {
          var _this81 = this;
          return new Promise(function (resolve, reject) {
            _this81.http.get(_this81.APIURL + "get/contact/details").subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getHotDeals",
        value: function getHotDeals(userId) {
          var _this82 = this;
          return new Promise(function (resolve, reject) {
            _this82.http.get(_this82.APIURL + "get/hot/deals/" + userId).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "startTrialPeriod",
        value: function startTrialPeriod(userId) {
          var _this83 = this;
          return new Promise(function (resolve, reject) {
            _this83.http.get(_this83.APIURL + "start/trial/period/" + userId).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "updatePort",
        value: function updatePort(postedData) {
          var _this84 = this;
          return new Promise(function (resolve, reject) {
            _this84.http.post(_this84.APIURL + "update/port", postedData).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "acceptHotDeal",
        value: function acceptHotDeal(postedData) {
          var _this85 = this;
          return new Promise(function (resolve, reject) {
            _this85.http.post(_this85.APIURL + "accept/hot/deal/notification", postedData).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "updateUserPlan",
        value: function updateUserPlan(postedData) {
          var _this86 = this;
          return new Promise(function (resolve, reject) {
            _this86.http.post(_this86.APIURL + "payment/success", postedData).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "userNotification",
        value: function userNotification(userId) {
          var _this87 = this;
          return new Promise(function (resolve, reject) {
            _this87.http.get(_this87.APIURL + "user/notification/" + userId).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "clearNotification",
        value: function clearNotification(userId) {
          var _this88 = this;
          return new Promise(function (resolve, reject) {
            _this88.http.get(_this88.APIURL + "clear/notification/" + userId).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(userId) {
          var _this89 = this;
          return new Promise(function (resolve, reject) {
            _this89.http.get(_this89.APIURL + "delete/user/" + userId).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "likeTrade",
        value: function likeTrade(formData) {
          var _this90 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this90.http.post(_this90.APIURL + "like/trade?api_token=" + token, JSON.stringify(formData)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "tradeInterest",
        value: function tradeInterest(formData) {
          var _this91 = this;
          var token = localStorage.getItem("token");
          return new Promise(function (resolve, reject) {
            _this91.http.post(_this91.APIURL + "intrested/trade?api_token=" + token, JSON.stringify(formData)).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }]);
    }();
    RestService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };
    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], RestService);

    /***/
  }),
  /***/"./src/app/sample-entry/sample-entry.component.scss": (
  /*!**********************************************************!*\
    !*** ./src/app/sample-entry/sample-entry.component.scss ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSampleEntrySampleEntryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n.back-button ion-icon {\n  font-size: 23px;\n}\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n.header-title {\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3NhbXBsZS1lbnRyeS9zYW1wbGUtZW50cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NhbXBsZS1lbnRyeS9zYW1wbGUtZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0FDRVI7QURDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0VKO0FEQ0E7RUFDSSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zYW1wbGUtZW50cnkvc2FtcGxlLWVudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9ue1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cbmlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci10aXRsZXtcbiAgICBjb2xvcjogI0ZGRjtcbn0iLCIuYmFjay1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5iYWNrLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM0OTRmNTg7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6ICNGRkY7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/sample-entry/sample-entry.component.ts": (
  /*!********************************************************!*\
    !*** ./src/app/sample-entry/sample-entry.component.ts ***!
    \********************************************************/
  /*! exports provided: SampleEntryComponent */
  /***/
  function srcAppSampleEntrySampleEntryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SampleEntryComponent", function () {
      return SampleEntryComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../components.service */"./src/app/components.service.ts");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    var SampleEntryComponent = /*#__PURE__*/function () {
      function SampleEntryComponent(componentService, restService) {
        _classCallCheck(this, SampleEntryComponent);
        this.componentService = componentService;
        this.restService = restService;
        this.sampleImage = 'https://via.placeholder.com/300x200&text=Select%20%20sample%20image';
        this.formData = {};
        this.selectedImage = "";
        this.noOfBags = [{
          "value": "Enter Manually",
          "key": "manual"
        }, {
          "value": "Runing",
          "key": "runing"
        }];
      }
      return _createClass(SampleEntryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.componentService.modalCtrl.dismiss();
        }
      }, {
        key: "getPicture",
        value: function getPicture() {
          var _this92 = this;
          this.componentService.takePicture().then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this92.sampleImage = base64Image;
            _this92.selectedImage = base64Image;
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this93 = this;
          this.componentService.presentLoading().then(function () {
            _this93.restService.sampleEntryPreLoaddata().then(function (res) {
              _this93.componentService.loadingController.dismiss();
              _this93.sellers = res.seller;
              _this93.qualities = res.quality;
              _this93.packings = res.packing;
              _this93.packingTypes = res.packing_type;
            });
          });
        }
      }, {
        key: "saveSample",
        value: function saveSample() {
          var _this94 = this;
          this.componentService.validateInput(this.formData, ['date', 'seller', 'packing', 'packing_type', 'qty']).then(function (isValid) {
            if (isValid) {
              if (_this94.selectedImage == '') {
                _this94.componentService.presentToastWithOptions('Please capture the sample image!');
              } else {
                _this94.formData['image'] = _this94.selectedImage;
                _this94.componentService.presentLoading().then(function () {
                  _this94.restService.saveSampleEntry(_this94.formData).then(function (res) {
                    _this94.componentService.loadingController.dismiss();
                    _this94.componentService.presentToastWithOptions('Sample entry saved successfully!', 'Success');
                    _this94.componentService.modalCtrl.dismiss();
                  });
                });
              }
            } else {
              _this94.componentService.presentToastWithOptions('Please fill all fields!');
            }
          });
        }
      }]);
    }();
    SampleEntryComponent.ctorParameters = function () {
      return [{
        type: _components_service__WEBPACK_IMPORTED_MODULE_2__["ComponentsService"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
      }];
    };
    SampleEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sample-entry',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./sample-entry.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/sample-entry/sample-entry.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./sample-entry.component.scss */"./src/app/sample-entry/sample-entry.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_service__WEBPACK_IMPORTED_MODULE_2__["ComponentsService"], _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]])], SampleEntryComponent);

    /***/
  }),
  /***/"./src/app/send-courier/send-courier.component.scss": (
  /*!**********************************************************!*\
    !*** ./src/app/send-courier/send-courier.component.scss ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSendCourierSendCourierComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n.back-button ion-icon {\n  font-size: 23px;\n}\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n.header-title {\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3NlbmQtY291cmllci9zZW5kLWNvdXJpZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlbmQtY291cmllci9zZW5kLWNvdXJpZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0FDRVI7QURDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0VKO0FEQ0E7RUFDSSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zZW5kLWNvdXJpZXIvc2VuZC1jb3VyaWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9ue1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cbmlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci10aXRsZXtcbiAgICBjb2xvcjogI0ZGRjtcbn0iLCIuYmFjay1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5iYWNrLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM0OTRmNTg7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6ICNGRkY7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/send-courier/send-courier.component.ts": (
  /*!********************************************************!*\
    !*** ./src/app/send-courier/send-courier.component.ts ***!
    \********************************************************/
  /*! exports provided: SendCourierComponent */
  /***/
  function srcAppSendCourierSendCourierComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SendCourierComponent", function () {
      return SendCourierComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../components.service */"./src/app/components.service.ts");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    var SendCourierComponent = /*#__PURE__*/function () {
      function SendCourierComponent(componentService, restService) {
        _classCallCheck(this, SendCourierComponent);
        this.componentService = componentService;
        this.restService = restService;
        this.samples = [];
        this.sentVia = [];
        this.formData = {};
        this.courierImage = 'https://via.placeholder.com/300x200&text=Select%20%20sample%20image';
        this.selectedImage = '';
      }
      return _createClass(SendCourierComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.componentService.modalCtrl.dismiss();
        }
      }, {
        key: "getPicture",
        value: function getPicture() {
          var _this95 = this;
          this.componentService.takePicture().then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this95.courierImage = base64Image;
            _this95.selectedImage = base64Image;
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this96 = this;
          this.componentService.presentLoading().then(function () {
            _this96.restService.pubdingCourierSamples().then(function (res) {
              _this96.componentService.loadingController.dismiss();
              _this96.samples = res.samples;
              _this96.sentVia = res.sent_via;
            });
          });
        }
      }, {
        key: "saveCourier",
        value: function saveCourier() {
          var _this97 = this;
          this.componentService.validateInput(this.formData, ['date', 'details', 'sent_via', 'sample']).then(function (isValid) {
            if (isValid) {
              var samples = _this97.formData.sample;
              var arrangedSamples = {};
              samples.forEach(function (sample) {
                arrangedSamples[sample] = 'on';
              });
              _this97.formData['sample'] = arrangedSamples;
              _this97.componentService.presentLoading().then(function () {
                _this97.restService.saveCourier(_this97.formData).then(function (res) {
                  _this97.componentService.loadingController.dismiss();
                  _this97.componentService.modalCtrl.dismiss();
                  _this97.componentService.presentToastWithOptions('Courier saved successfully!', 'Success');
                });
              });
            } else {
              _this97.componentService.presentToastWithOptions('Please fill required fileds');
            }
          });
        }
      }]);
    }();
    SendCourierComponent.ctorParameters = function () {
      return [{
        type: _components_service__WEBPACK_IMPORTED_MODULE_2__["ComponentsService"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
      }];
    };
    SendCourierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-send-courier',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./send-courier.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/send-courier/send-courier.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./send-courier.component.scss */"./src/app/send-courier/send-courier.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_service__WEBPACK_IMPORTED_MODULE_2__["ComponentsService"], _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]])], SendCourierComponent);

    /***/
  }),
  /***/"./src/app/splashscreen/splashscreen-routing.module.ts": (
  /*!*************************************************************!*\
    !*** ./src/app/splashscreen/splashscreen-routing.module.ts ***!
    \*************************************************************/
  /*! exports provided: SplashscreenPageRoutingModule */
  /***/
  function srcAppSplashscreenSplashscreenRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SplashscreenPageRoutingModule", function () {
      return SplashscreenPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _splashscreen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./splashscreen.page */"./src/app/splashscreen/splashscreen.page.ts");
    var routes = [{
      path: '',
      component: _splashscreen_page__WEBPACK_IMPORTED_MODULE_3__["SplashscreenPage"]
    }];
    var SplashscreenPageRoutingModule = /*#__PURE__*/_createClass(function SplashscreenPageRoutingModule() {
      _classCallCheck(this, SplashscreenPageRoutingModule);
    });
    SplashscreenPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SplashscreenPageRoutingModule);

    /***/
  }),
  /***/"./src/app/splashscreen/splashscreen.module.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/splashscreen/splashscreen.module.ts ***!
    \*****************************************************/
  /*! exports provided: SplashscreenPageModule */
  /***/
  function srcAppSplashscreenSplashscreenModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SplashscreenPageModule", function () {
      return SplashscreenPageModule;
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
    var _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./splashscreen-routing.module */"./src/app/splashscreen/splashscreen-routing.module.ts");
    /* harmony import */
    var _splashscreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./splashscreen.page */"./src/app/splashscreen/splashscreen.page.ts");
    var SplashscreenPageModule = /*#__PURE__*/_createClass(function SplashscreenPageModule() {
      _classCallCheck(this, SplashscreenPageModule);
    });
    SplashscreenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashscreenPageRoutingModule"]],
      declarations: [_splashscreen_page__WEBPACK_IMPORTED_MODULE_6__["SplashscreenPage"]]
    })], SplashscreenPageModule);

    /***/
  }),
  /***/"./src/app/splashscreen/splashscreen.page.scss": (
  /*!*****************************************************!*\
    !*** ./src/app/splashscreen/splashscreen.page.scss ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSplashscreenSplashscreenPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "@media only screen and (max-width: 600px) {\n  .gif div {\n    width: 100%;\n    height: 100%;\n    background-position: center;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    overflow: hidden;\n  }\n}\n@media only screen and (min-width: 600px) {\n  .gif {\n    margin: 0 auto;\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3NwbGFzaHNjcmVlbi9zcGxhc2hzY3JlZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9zcGxhc2hzY3JlZW4vc3BsYXNoc2NyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtRO0lBRUksV0FBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtJQUNBLHFCQUFBO0lBQ0EsNEJBQUE7SUFDQSxnQkFBQTtFQ0pWO0FBQ0Y7QURPQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLFVBQUE7RUNMTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3BsYXNoc2NyZWVuL3NwbGFzaHNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmdpZntcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogNTAlO1xuICAgICAgICAvLyBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXZ7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vYXNzZXRzL3NudGNzcGxhc2hzY3JlZW4uanBlZycpOztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgLmdpZntcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOjQwJTtcbiAgICAgICBcbiAgICB9XG59IiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZ2lmIGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5naWYge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/splashscreen/splashscreen.page.ts": (
  /*!***************************************************!*\
    !*** ./src/app/splashscreen/splashscreen.page.ts ***!
    \***************************************************/
  /*! exports provided: SplashscreenPage */
  /***/
  function srcAppSplashscreenSplashscreenPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SplashscreenPage", function () {
      return SplashscreenPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var SplashscreenPage = /*#__PURE__*/function () {
      function SplashscreenPage(navCtrl) {
        _classCallCheck(this, SplashscreenPage);
        this.navCtrl = navCtrl;
      }
      return _createClass(SplashscreenPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          console.log('njkn');
        }
      }]);
    }();
    SplashscreenPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };
    SplashscreenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-splashscreen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./splashscreen.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/splashscreen/splashscreen.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./splashscreen.page.scss */"./src/app/splashscreen/splashscreen.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], SplashscreenPage);

    /***/
  }),
  /***/"./src/app/trialperiod/trialperiod-routing.module.ts": (
  /*!***********************************************************!*\
    !*** ./src/app/trialperiod/trialperiod-routing.module.ts ***!
    \***********************************************************/
  /*! exports provided: TrialperiodPageRoutingModule */
  /***/
  function srcAppTrialperiodTrialperiodRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TrialperiodPageRoutingModule", function () {
      return TrialperiodPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _trialperiod_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./trialperiod.page */"./src/app/trialperiod/trialperiod.page.ts");
    var routes = [{
      path: '',
      component: _trialperiod_page__WEBPACK_IMPORTED_MODULE_3__["TrialperiodPage"]
    }];
    var TrialperiodPageRoutingModule = /*#__PURE__*/_createClass(function TrialperiodPageRoutingModule() {
      _classCallCheck(this, TrialperiodPageRoutingModule);
    });
    TrialperiodPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TrialperiodPageRoutingModule);

    /***/
  }),
  /***/"./src/app/trialperiod/trialperiod.module.ts": (
  /*!***************************************************!*\
    !*** ./src/app/trialperiod/trialperiod.module.ts ***!
    \***************************************************/
  /*! exports provided: TrialperiodPageModule */
  /***/
  function srcAppTrialperiodTrialperiodModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TrialperiodPageModule", function () {
      return TrialperiodPageModule;
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
    var _trialperiod_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./trialperiod-routing.module */"./src/app/trialperiod/trialperiod-routing.module.ts");
    /* harmony import */
    var _trialperiod_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./trialperiod.page */"./src/app/trialperiod/trialperiod.page.ts");
    var TrialperiodPageModule = /*#__PURE__*/_createClass(function TrialperiodPageModule() {
      _classCallCheck(this, TrialperiodPageModule);
    });
    TrialperiodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _trialperiod_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrialperiodPageRoutingModule"]],
      declarations: [_trialperiod_page__WEBPACK_IMPORTED_MODULE_6__["TrialperiodPage"]]
    })], TrialperiodPageModule);

    /***/
  }),
  /***/"./src/app/trialperiod/trialperiod.page.scss": (
  /*!***************************************************!*\
    !*** ./src/app/trialperiod/trialperiod.page.scss ***!
    \***************************************************/
  /*! exports provided: default */
  /***/
  function srcAppTrialperiodTrialperiodPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".logo {\n  text-align: center;\n}\n\n.app-logo {\n  width: 32%;\n  padding: 10px;\n  border-radius: 20px;\n}\n\n.closeModal {\n  position: absolute;\n  text-decoration: none;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  background: red;\n  color: white;\n}\n\n.content {\n  text-align: center;\n}\n\n.content p {\n  text-align: center;\n}\n\n.contactuser {\n  height: 0px;\n  margin-top: 8px;\n  border-radius: 100px;\n  min-height: 36px;\n  margin-left: 2px;\n  margin-right: 2px;\n  box-shadow: -1px 1px 9px 0px #CCC;\n  width: 33%;\n  color: #000;\n  font-size: 12px;\n  text-decoration: none;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3RyaWFscGVyaW9kL3RyaWFscGVyaW9kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHJpYWxwZXJpb2QvdHJpYWxwZXJpb2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7QUNJSjs7QURISTtFQUNJLGtCQUFBO0FDS1I7O0FEREE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3RyaWFscGVyaW9kL3RyaWFscGVyaW9kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHAtbG9nb3tcbiAgICB3aWR0aDogMzIlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jbG9zZU1vZGFse1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250ZW50e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG59XG4uY29udGFjdHVzZXJ7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59IiwiLmxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcHAtbG9nbyB7XG4gIHdpZHRoOiAzMiU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5jbG9zZU1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWN0dXNlciB7XG4gIGhlaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICB3aWR0aDogMzMlO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/trialperiod/trialperiod.page.ts": (
  /*!*************************************************!*\
    !*** ./src/app/trialperiod/trialperiod.page.ts ***!
    \*************************************************/
  /*! exports provided: TrialperiodPage */
  /***/
  function srcAppTrialperiodTrialperiodPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TrialperiodPage", function () {
      return TrialperiodPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../components.service */"./src/app/components.service.ts");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    var TrialperiodPage = /*#__PURE__*/function () {
      function TrialperiodPage(modalctrl, componentserv, resService) {
        _classCallCheck(this, TrialperiodPage);
        this.modalctrl = modalctrl;
        this.componentserv = componentserv;
        this.resService = resService;
      }
      return _createClass(TrialperiodPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalctrl.dismiss();
        }
      }, {
        key: "startTrialPeriod",
        value: function startTrialPeriod() {
          console.log("jnk");
          var userEmail = localStorage.getItem('email');
          this.resService.startTrialPeriod(userEmail).then(function (res) {
            console.log(res);
          }, function (err) {
            console.log(err);
          });
        }
      }]);
    }();
    TrialperiodPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
      }];
    };
    TrialperiodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-trialperiod',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./trialperiod.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/trialperiod/trialperiod.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./trialperiod.page.scss */"./src/app/trialperiod/trialperiod.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"], _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]])], TrialperiodPage);

    /***/
  }),
  /***/"./src/app/usdconvertmodal/usdconvertmodal-routing.module.ts": (
  /*!*******************************************************************!*\
    !*** ./src/app/usdconvertmodal/usdconvertmodal-routing.module.ts ***!
    \*******************************************************************/
  /*! exports provided: UsdconvertmodalPageRoutingModule */
  /***/
  function srcAppUsdconvertmodalUsdconvertmodalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UsdconvertmodalPageRoutingModule", function () {
      return UsdconvertmodalPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _usdconvertmodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./usdconvertmodal.page */"./src/app/usdconvertmodal/usdconvertmodal.page.ts");
    var routes = [{
      path: '',
      component: _usdconvertmodal_page__WEBPACK_IMPORTED_MODULE_3__["UsdconvertmodalPage"]
    }];
    var UsdconvertmodalPageRoutingModule = /*#__PURE__*/_createClass(function UsdconvertmodalPageRoutingModule() {
      _classCallCheck(this, UsdconvertmodalPageRoutingModule);
    });
    UsdconvertmodalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UsdconvertmodalPageRoutingModule);

    /***/
  }),
  /***/"./src/app/usdconvertmodal/usdconvertmodal.module.ts": (
  /*!***********************************************************!*\
    !*** ./src/app/usdconvertmodal/usdconvertmodal.module.ts ***!
    \***********************************************************/
  /*! exports provided: UsdconvertmodalPageModule */
  /***/
  function srcAppUsdconvertmodalUsdconvertmodalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UsdconvertmodalPageModule", function () {
      return UsdconvertmodalPageModule;
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
    var _usdconvertmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./usdconvertmodal-routing.module */"./src/app/usdconvertmodal/usdconvertmodal-routing.module.ts");
    /* harmony import */
    var _usdconvertmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./usdconvertmodal.page */"./src/app/usdconvertmodal/usdconvertmodal.page.ts");
    var UsdconvertmodalPageModule = /*#__PURE__*/_createClass(function UsdconvertmodalPageModule() {
      _classCallCheck(this, UsdconvertmodalPageModule);
    });
    UsdconvertmodalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _usdconvertmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsdconvertmodalPageRoutingModule"]],
      declarations: [_usdconvertmodal_page__WEBPACK_IMPORTED_MODULE_6__["UsdconvertmodalPage"]]
    })], UsdconvertmodalPageModule);

    /***/
  }),
  /***/"./src/app/usdconvertmodal/usdconvertmodal.page.scss": (
  /*!***********************************************************!*\
    !*** ./src/app/usdconvertmodal/usdconvertmodal.page.scss ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUsdconvertmodalUsdconvertmodalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".logo {\n  text-align: center;\n}\n\n.app-logo {\n  width: 32%;\n  padding: 10px;\n  border-radius: 20px;\n}\n\n.closeModal {\n  position: absolute;\n  text-decoration: none;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  background: red;\n  color: white;\n}\n\n.content {\n  text-align: center;\n}\n\n.content p {\n  text-align: center;\n}\n\n.contactuser {\n  height: 0px;\n  margin-top: 8px;\n  border-radius: 100px;\n  min-height: 36px;\n  margin-left: 2px;\n  margin-right: 2px;\n  box-shadow: -1px 1px 9px 0px #CCC;\n  width: 33%;\n  color: #000;\n  font-size: 12px;\n  text-decoration: none;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3VzZGNvbnZlcnRtb2RhbC91c2Rjb252ZXJ0bW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC91c2Rjb252ZXJ0bW9kYWwvdXNkY29udmVydG1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0FDSUo7O0FESEk7RUFDSSxrQkFBQTtBQ0tSOztBRERBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC91c2Rjb252ZXJ0bW9kYWwvdXNkY29udmVydG1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHAtbG9nb3tcbiAgICB3aWR0aDogMzIlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jbG9zZU1vZGFse1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250ZW50e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG59XG4uY29udGFjdHVzZXJ7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59IiwiLmxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcHAtbG9nbyB7XG4gIHdpZHRoOiAzMiU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5jbG9zZU1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWN0dXNlciB7XG4gIGhlaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICB3aWR0aDogMzMlO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/usdconvertmodal/usdconvertmodal.page.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/usdconvertmodal/usdconvertmodal.page.ts ***!
    \*********************************************************/
  /*! exports provided: UsdconvertmodalPage */
  /***/
  function srcAppUsdconvertmodalUsdconvertmodalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UsdconvertmodalPage", function () {
      return UsdconvertmodalPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../components.service */"./src/app/components.service.ts");
    var UsdconvertmodalPage = /*#__PURE__*/function () {
      function UsdconvertmodalPage(modalctrl, componentserv) {
        _classCallCheck(this, UsdconvertmodalPage);
        this.modalctrl = modalctrl;
        this.componentserv = componentserv;
      }
      return _createClass(UsdconvertmodalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalctrl.dismiss();
          localStorage.setItem('popupCanceledversion', 'true');
          this.componentserv.cancelPopup.next('true');
        }
      }]);
    }();
    UsdconvertmodalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]
      }];
    };
    UsdconvertmodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-usdconvertmodal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./usdconvertmodal.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/usdconvertmodal/usdconvertmodal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./usdconvertmodal.page.scss */"./src/app/usdconvertmodal/usdconvertmodal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]])], UsdconvertmodalPage);

    /***/
  }),
  /***/"./src/app/versionmodal/versionmodal.page.scss": (
  /*!*****************************************************!*\
    !*** ./src/app/versionmodal/versionmodal.page.scss ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppVersionmodalVersionmodalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".logo {\n  text-align: center;\n}\n\n.app-logo {\n  width: 32%;\n  padding: 10px;\n  border-radius: 20px;\n}\n\n.closeModal {\n  position: absolute;\n  text-decoration: none;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  background: red;\n  color: white;\n}\n\n.content {\n  text-align: center;\n}\n\n.content p {\n  text-align: center;\n}\n\n.contactuser {\n  height: 0px;\n  margin-top: 8px;\n  border-radius: 100px;\n  min-height: 36px;\n  margin-left: 2px;\n  margin-right: 2px;\n  box-shadow: -1px 1px 9px 0px #CCC;\n  width: 33%;\n  color: #000;\n  font-size: 12px;\n  text-decoration: none;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3ZlcnNpb25tb2RhbC92ZXJzaW9ubW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC92ZXJzaW9ubW9kYWwvdmVyc2lvbm1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0FDSUo7O0FESEk7RUFDSSxrQkFBQTtBQ0tSOztBRERBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC92ZXJzaW9ubW9kYWwvdmVyc2lvbm1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHAtbG9nb3tcbiAgICB3aWR0aDogMzIlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jbG9zZU1vZGFse1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250ZW50e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG59XG4uY29udGFjdHVzZXJ7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59IiwiLmxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcHAtbG9nbyB7XG4gIHdpZHRoOiAzMiU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5jbG9zZU1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWN0dXNlciB7XG4gIGhlaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICB3aWR0aDogMzMlO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/versionmodal/versionmodal.page.ts": (
  /*!***************************************************!*\
    !*** ./src/app/versionmodal/versionmodal.page.ts ***!
    \***************************************************/
  /*! exports provided: VersionmodalPage */
  /***/
  function srcAppVersionmodalVersionmodalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "VersionmodalPage", function () {
      return VersionmodalPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../components.service */"./src/app/components.service.ts");
    var VersionmodalPage = /*#__PURE__*/function () {
      function VersionmodalPage(modalctrl, componentserv, platform) {
        _classCallCheck(this, VersionmodalPage);
        this.modalctrl = modalctrl;
        this.componentserv = componentserv;
        this.platform = platform;
        // this.oldVersionModel();
      }
      return _createClass(VersionmodalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "oldVersionModel",
        value: function oldVersionModel() {
          this.roleTitle = "You are using a older version of app, Would you like to update?";
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalctrl.dismiss();
          localStorage.setItem('popupCanceledversion', 'true');
          this.componentserv.cancelPopup.next('true');
        }
      }, {
        key: "redirectToPlaystore",
        value: function redirectToPlaystore() {
          if (this.platform.is('android')) {
            window.open("https://play.google.com/store/apps/details?id=app.sntcrice.sourcing", "_system");
          }
          if (this.platform.is('ios')) {
            window.open("https://apps.apple.com/in/app/sntc-rice-sourcing/id1562015927", "_system");
          }
        }
      }]);
    }();
    VersionmodalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };
    VersionmodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-versionmodal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./versionmodal.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/versionmodal/versionmodal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./versionmodal.page.scss */"./src/app/versionmodal/versionmodal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], VersionmodalPage);

    /***/
  }),
  /***/"./src/environments/environment.ts": (
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! /Users/sandeep/Desktop/ricesourceUSD/src/main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map