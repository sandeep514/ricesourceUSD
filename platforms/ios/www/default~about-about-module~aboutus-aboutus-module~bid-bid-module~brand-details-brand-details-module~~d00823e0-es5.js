function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html": (
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
    \********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-row class=\"ion-no-padding footer-tabs\">\n\t<ion-col class=\"ion-no-padding\">\n\t\t<div class=\"example1\" style=\"background: #92B243;padding-top: 2px;height: 21px;\">\n\t\t\t<h3 style=\"color: #fff;min-width: 100%;\" [ngStyle]='{ width : newsWidth }'>{{news}} </h3>\n\t\t</div>\n\t\t<ion-row class=\"tabs-row\">\n\t\t\t<ng-container *ngIf=\"apptype == 'OTHER' \">\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo((apptype != 'USD')? 'prices' :'priceusd' )\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/liveprice.svg\" *ngIf=\"apptype != 'USD'\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t\t<img src=\"../../assets/menu/livePriceUSD.svg\" *ngIf=\"apptype == 'USD'\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Live Prices</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo('buy-inr')\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/buy.svg\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Buy</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='goTo(\"trade-inr-list\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/trade.svg\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Trade</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='goTo(\"selling-inr\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/chat.svg\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Sell</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='goTo(\"brands\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/brand.svg\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Brand</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='openModel()'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/menu.svg\" style=\"width: auto; height: 100%;padding: 7px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Menu</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t</ng-container>\n\t\t\t<ng-container *ngIf=\"apptype == 'USD' && seledctedRole == 5\">\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo((apptype != 'USD')? 'prices' :'priceusd' )\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<!-- <img src=\"../../assets/menu/live prices.png\" *ngIf=\"apptype != 'USD'\" />\n\t\t\t\t\t<img src=\"../../assets/menu/doller.png\" /> -->\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/liveprice.svg\" *ngIf=\"apptype != 'USD'\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t\t<img src=\"../../assets/menu/livePriceUSD.svg\" *ngIf=\"apptype == 'USD'\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Live Prices</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo('oceanfreights')\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/oceanfreight.svg\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Ocean Freight</h5>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='goTo(\"buy\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img style=\"width: auto; height: 100%;padding: 5px;\" src=\"../../assets/menu/buy.svg\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Buy </h5>\n\t\t\t\t</ion-col>\n\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='goTo(\"trade-list-usd\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/trade.svg\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Trade</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<!-- <ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\" isCurrentUser == 'false' \" (click)='goTo(\"gallery\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/gallery.png\" />\n\t\t\t\t\t<h5>Gallery</h5>\n\t\t\t\t</ion-col> -->\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo('otherservices')\" menuToggle>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/otherservices.svg\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Services</h5>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='openModel()'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/menu.svg\" style=\"width: auto; height: 100%;padding: 7px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Menu</h5>\n\t\t\t\t</ion-col>\n\t\t\t</ng-container>\n\t\t\t<ng-container\n\t\t\t\t*ngIf=\"apptype == 'USD' && seledctedRole == 4 || apptype == 'USD' && seledctedRole == 6 || apptype == 'USD' && seledctedRole == 7  \">\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo((apptype != 'USD')? 'prices' :'priceusd' )\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<!-- <img src=\"../../assets/menu/live prices.png\" *ngIf=\"apptype != 'USD'\" />\n\t\t\t\t\t<img src=\"../../assets/menu/doller.png\" *ngIf=\"apptype == 'USD'\" /> -->\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/liveprice.svg\" *ngIf=\"apptype != 'USD'\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t\t<img src=\"../../assets/menu/livePriceUSD.svg\" *ngIf=\"apptype == 'USD'\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Live Prices</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo('oceanfreights')\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/oceanfreight.svg\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Ocean Freight</h5>\n\t\t\t\t</ion-col>\n\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='goTo(\"calculator\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/calculator.png\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Calculator</h5>\n\t\t\t\t</ion-col>\n\n\n\n\t\t\t\t<!-- <ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\" isCurrentUser == 'false' \" (click)='goTo(\"gallery\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/gallery.png\" />\n\t\t\t\t\t<h5>Gallery</h5>\n\t\t\t\t</ion-col> -->\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='goToBids()'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/offers.png\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Offer</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo('otherservices')\" menuToggle>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/otherservices.svg\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Services</h5>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='openModel()'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/menu.svg\" style=\"width: auto; height: 100%;padding: 7px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Menu</h5>\n\t\t\t\t</ion-col>\n\t\t\t</ng-container>\n\n\t\t</ion-row>\n\t\t<button style=\"display: none;\" id=\"clickButton\" (click)=\"updateNotification()\">kjhnj</button>\n\t\t<button style=\"display: none;\" id=\"clickButtonforPayment\" (click)=\"clickButtonforPayment()\">kjhnj</button>\n\t</ion-col>\n</ion-row>";

    /***/
  }),
  /***/"./src/app/components/components.module.ts": (
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/
  /*! exports provided: ComponentsModule */
  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../menu/menu.component */"./src/app/menu/menu.component.ts");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var ComponentsModule = /*#__PURE__*/_createClass(function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    });
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      exports: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]],
      entryComponents: []
    })], ComponentsModule);

    /***/
  }),
  /***/"./src/app/menu/menu.component.scss": (
  /*!******************************************!*\
    !*** ./src/app/menu/menu.component.scss ***!
    \******************************************/
  /*! exports provided: default */
  /***/
  function srcAppMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".footer-tabs {\n  position: fixed;\n  height: 90px;\n  bottom: -8px;\n  width: 100%;\n  z-index: 9999999;\n  background-color: #fffbd6;\n  padding-top: 0px;\n}\n\n.tab-icon img {\n  width: 25px;\n}\n\n.tab-icon h5 {\n  margin: 0px;\n  font-size: 9.9px;\n  color: #5f5f5f;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.truck {\n  width: 53px !important;\n  margin-top: 5px !important;\n}\n\n.unseenmessage {\n  position: absolute;\n  top: 5px;\n  border-radius: 100%;\n  width: 15px;\n  background: #92B243;\n  color: #FFFBD6;\n  font-size: 0px;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdJO0VBQ0ksV0FBQTtBQ0FSOztBREVJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FSOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksc0JBQUE7RUFDQSwwQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItdGFic3tcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJvdHRvbTogLThweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk5OTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZDY7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLnRhYi1pY29ue1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgfVxuICAgIGg1e1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiA5LjlweDtcbiAgICAgICAgY29sb3I6ICM1ZjVmNWY7XG4gICAgfVxufVxuXG4ucmlwcGxlLXBhcmVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50cnVja3tcbiAgICB3aWR0aDogNTNweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG4udW5zZWVubWVzc2FnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICAgIGNvbG9yOiAjRkZGQkQ2O1xuICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgIGhlaWdodDogMTVweDtcbn0iLCIuZm9vdGVyLXRhYnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogOTBweDtcbiAgYm90dG9tOiAtOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk5OTk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJkNjtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLnRhYi1pY29uIGltZyB7XG4gIHdpZHRoOiAyNXB4O1xufVxuLnRhYi1pY29uIGg1IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogOS45cHg7XG4gIGNvbG9yOiAjNWY1ZjVmO1xufVxuXG4ucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRydWNrIHtcbiAgd2lkdGg6IDUzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51bnNlZW5tZXNzYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gIGNvbG9yOiAjRkZGQkQ2O1xuICBmb250LXNpemU6IDBweDtcbiAgaGVpZ2h0OiAxNXB4O1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/menu/menu.component.ts": (
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/
  /*! exports provided: MenuComponent */
  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
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
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(compSer, navCtrl, menuCtrl, restApi, ModelCtrl, toastCtrl, router) {
        var _this = this;
        _classCallCheck(this, MenuComponent);
        this.compSer = compSer;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.restApi = restApi;
        this.ModelCtrl = ModelCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.hasMessage = 0;
        this.isUserExpire = 'true';
        this.isCurrentUser = 'false';
        this.newsWidth = '100%';
        this.route = this.router.url;
        this.getNewsRunner();
        this.compSer.hasMessage.subscribe(function (data) {
          if (data == 1) {
            // this.hasMessage = 1;
            document.getElementById('clickButton').click();
          } else {
            _this.hasMessage = 0;
          }
        });
        this.compSer.isUserExpired.subscribe(function (res) {
          _this.isUserExpire = res;
          if (document.getElementById('clickButtonforPayment') != undefined) {
            document.getElementById('clickButtonforPayment').click();
          }
          if (localStorage.getItem('apptype') == 'USD') {
            _this.apptype = localStorage.getItem('apptype');
            _this.seledctedRole = localStorage.getItem('usd_role');
          } else {
            _this.apptype = localStorage.getItem('apptype');
            _this.seledctedRole = localStorage.getItem('role');
          }
          console.log(_this.seledctedRole);
          console.log(_this.apptype);
          // this.getNewsRunner()
        });
        this.getChatStatus();
        setTimeout(function () {
          _this.apptype = localStorage.getItem('apptype');
          console.log(_this.apptype);
        }, 1000);
      }
      return _createClass(MenuComponent, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.apptype = localStorage.getItem('apptype');
          console.log(this.apptype);
        }
      }, {
        key: "updateNotification",
        value: function updateNotification() {
          this.hasMessage = this.hasMessage + 1;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('apptype') == 'USD') {
            this.seledctedRole = localStorage.getItem('usd_role');
          } else {
            this.seledctedRole = localStorage.getItem('role');
          }
        }
      }, {
        key: "showChatUnavailableModal",
        value: function showChatUnavailableModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var presentToast;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.toastCtrl.create({
                    message: "No chat executive is available right now , Please contact later.",
                    duration: 4000,
                    position: 'bottom'
                  });
                case 2:
                  presentToast = _context.sent;
                  presentToast.present();
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "goTo",
        value: function goTo(page) {
          // this.compSer.compareTwoDates(localStorage.getItem('expired_on'));
          if (localStorage.getItem('apptype') == 'OTHER') {
            this.navCtrl.navigateRoot(page, {
              animationDirection: 'forward'
            });
          } else {
            if (localStorage.getItem('isExpired') == 'false') {
              this.navCtrl.navigateRoot(page, {
                animationDirection: 'forward'
              });
            } else {
              this.navCtrl.navigateRoot('planpage', {
                animationDirection: 'forward'
              });
            }
          }
          if (localStorage.getItem('transaction_id') == undefined || localStorage.getItem('transaction_id') == null) {} else {}
        }
      }, {
        key: "clickButtonforPayment",
        value: function clickButtonforPayment() {
          this.isCurrentUser = this.isUserExpire;
        }
      }, {
        key: "goToBids",
        value: function goToBids() {
          this.navCtrl.navigateForward('mybids');
        }
      }, {
        key: "goToChat",
        value: function goToChat() {
          var _this2 = this;
          this.restApi.getChatStatus().then(function (res) {
            _this2.chatStatus = res.data;
            _this2.chat();
          }, function (err) {});
        }
      }, {
        key: "openModel",
        value: function openModel() {
          this.compSer.reRenderSideMenu.next();
          this.menuCtrl.enable(true);
          this.menuCtrl.open();
        }
      }, {
        key: "chat",
        value: function chat() {
          this.navCtrl.navigateForward(['chat-detail']);
        }
      }, {
        key: "getChatStatus",
        value: function getChatStatus() {
          var _this3 = this;
          this.restApi.getChatStatus().then(function (res) {
            _this3.chatStatus = res.data;
          }, function (err) {});
        }
      }, {
        key: "getChatCount",
        value: function getChatCount() {
          var _this4 = this;
          this.restApi.getChatCount().then(function (res) {
            _this4.hasMessage = res.data;
          }, function (err) {});
        }
      }, {
        key: "getNewsRunner",
        value: function getNewsRunner() {
          var _this5 = this;
          this.restApi.getNewsRunner().then(function (res) {
            console.log(_this5.apptype);
            console.log(res.data);
            if (localStorage.getItem('apptype') == 'USD') {
              _this5.news = res.data['usd'][0].title;
              _this5.newsWidth = _this5.news.length * 4 + 'px';
            } else {
              _this5.news = res.data['inr'][0].title;
              _this5.newsWidth = _this5.news.length * 4 + 'px';
            }
          }, function (err) {});
        }
      }, {
        key: "showPaymentModel",
        value: function showPaymentModel() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.compSer.showPaymentModal.next();
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }]);
    }();
    MenuComponent.ctorParameters = function () {
      return [{
        type: _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./menu.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./menu.component.scss */"./src/app/menu/menu.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], MenuComponent);

    /***/
  })
}]);
//# sourceMappingURL=default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0-es5.js.map