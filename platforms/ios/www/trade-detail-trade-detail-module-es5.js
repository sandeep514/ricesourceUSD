function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trade-detail-trade-detail-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/trade-detail/trade-detail.page.html": (
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trade-detail/trade-detail.page.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTradeDetailTradeDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content id=\"content\">\n\t<div style=\"margin-bottom: 100px;\">\n\t\t<div class=\"header-container\">\n\t\t\t<div class=\"\"></div>\n\t\t\t<div class=\"lightgreen\">\n\t\t\t\t<div style=\"margin-top: 0px;text-align: center;padding: 10px 0px;\">\n\t\t\t\t\t<ion-row style=\"margin: 0px 0px;\">\n\t\t\t\t\t\t<ion-col style=\"text-align: left;padding-left: 20px;\" (click)=\"back()\">\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-back-outline\" style=\"font-size: 20px;\"></ion-icon>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"6\" align=\"center\">\n\t\t\t\t\t\t\t<h4 style=\"padding: 0px;margin: 0px;\">Trade Detail</h4>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<ion-row class=\"rice-gallery\" *ngIf=\"tradeDetails != undefined && tradeDetails?.tradeType == 1\">\n\t\t\t<ion-col\n\t\t\t\tstyle=\"padding: 0px 0px 15px 0px;background-color: #fffbd6;border-radius: 0px 0px 25px 25px;overflow: hidden;\">\n\t\t\t\t<ion-slides pager=\"false\" [options]=\"slideOpts\">\n\t\t\t\t\t<ion-slide *ngIf=\"tradeDetails?.cooked_file != null\"\n\t\t\t\t\t\tstyle=\"width: 100%;padding: 15px;height: 200px;\">\n\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/'+tradeDetails?.cooked_file )\"\n\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/{{ tradeDetails?.cooked_file }}\" class=\"slide-image\">\n\t\t\t\t\t</ion-slide>\n\t\t\t\t\t<ion-slide *ngIf=\"tradeDetails?.uncooked_file != null\"\n\t\t\t\t\t\tstyle=\"width: 100%;padding: 15px;height: 200px;\">\n\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/'+tradeDetails?.uncooked_file)\"\n\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/{{ tradeDetails?.uncooked_file }}\" class=\"slide-image\">\n\t\t\t\t\t</ion-slide>\n\t\t\t\t</ion-slides>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\n\t\t<ng-container *ngIf=\"tradeDetails != undefined \">\n\t\t\t<div style=\"padding: 12px 5px;\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<p class=\"pt-0\" style=\"font-size: 12px;\">Valid Till:\n\t\t\t\t\t\t\t\t{{generateDateForValid(tradeDetails?.validDays)}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<p class=\" pt-0\" style=\"font-size: 16px;font-weight: bold;\">\n\t\t\t\t\t\t\t\t{{tradeDetails?.rice_name_data?.name }}\n\t\t\t\t\t\t\t\t{{tradeDetails?.rice_form_milestone3?.name }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<p class=\" pt-0\" style=\"font-size: 14px;\">\n\t\t\t\t\t\t\t\t{{tradeDetails?.rice_grade?.get_wand_type?.type}}\n\t\t\t\t\t\t\t\t{{tradeDetails?.rice_grade?.value }} </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row *ngIf=\"tradeDetails?.tradeType == 1\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<p class=\" pt-0\" style=\"font-size: 16px;color: rgba(119, 154, 32, 1);font-weight: bold;\">₹\n\t\t\t\t\t\t\t\t{{tradeDetails?.offerPrice }} Price in Qtls (Ex. Factory) </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;;\">Packing</p>\n\t\t\t\t\t\t\t\t<p> : {{ (tradeDetails?.tradeType == 2) ? tradeDetails?.rice_packing_buyer?.packing+'\n\t\t\t\t\t\t\t\t\t'+tradeDetails?.rice_packing_buyer?.description :\n\t\t\t\t\t\t\t\t\ttradeDetails?.rice_packing_seller?.description }} </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;;\">Quantity</p>\n\t\t\t\t\t\t\t\t<p> : {{ tradeDetails?.quantity }} qtls </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\n\t\t\t\t<ion-row *ngIf=\"tradeDetails?.location && tradeDetails?.tradeType == 1\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Location</p>\n\t\t\t\t\t\t\t\t<p> : {{ tradeDetails?.location }} </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row\n\t\t\t\t\t*ngIf=\"tradeDetails?.moisture || tradeDetails?.kett || tradeDetails?.broken || tradeDetails?.dd || tradeDetails?.admixture || tradeDetails?.elongation\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<h4>Specification</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\n\t\t\t\t<div class=\"specRice\">\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.moisture\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Moisture</p>\n\t\t\t\t\t\t\t\t\t<p>: {{tradeDetails?.moisture}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.kett\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Kett</p>\n\t\t\t\t\t\t\t\t\t<p>: {{tradeDetails?.kett}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.broken\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Broken</p>\n\t\t\t\t\t\t\t\t\t<p>: {{tradeDetails?.broken}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.dd\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">DD</p>\n\t\t\t\t\t\t\t\t\t<p>: {{tradeDetails?.dd}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.admixture\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Admixture</p>\n\t\t\t\t\t\t\t\t\t<p>: {{tradeDetails?.admixture}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.elongation\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Elongation</p>\n\n\t\t\t\t\t\t\t\t\t<p>: {{tradeDetails?.elongation}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.additioanlInfo\" style=\"margin-top: 20px;\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Additional Info</p>\n\t\t\t\t\t\t\t\t\t:\n\t\t\t\t\t\t\t\t\t<!-- <ul style=\"padding: 0;margin: 0;list-style: none;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let info of addInfo\"> {{info}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul> -->\n\t\t\t\t\t\t\t\t\t<p>{{ tradeDetails?.additioanlInfo }}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\n\t\t\t<div>\n\t\t\t\t<ion-row style=\"padding: 10px 20px;\" class=\"hide\" id=\"showingInterest\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>Thanks for showing your interest, Our team will contact you shortly.</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row style=\"padding: 10px 20px;\" *ngIf=\"tradeDetails?.trade_interest\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>Thanks for showing your interest, Our team will contact you shortly.</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row style=\"padding: 10px 20px;justify-content: center;\"\n\t\t\t\t\t*ngIf=\"tradeDetails?.status == 1 || tradeDetails?.status == 6\">\n\t\t\t\t\t<ion-col size=\"6\" class=\"interestedButton\" *ngIf=\"!tradeDetails?.trade_interest\"\n\t\t\t\t\t\t(click)=\"userShowInterest(tradeDetails?.id , $event)\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p>Interested</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\" class=\"callNowButton\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p><a href=\"tel:+919877092004\" class=\"contactuser\"\n\t\t\t\t\t\t\t\t\tstyle=\"text-decoration: none;color: #fff;\">Call now</a>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row style=\"padding: 10px 20px;\" *ngIf=\"tradeDetails?.status == 2\">\n\t\t\t\t\t<ion-col class=\"\">\n\t\t\t\t\t\t<div style=\"text-align: center;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP EXPIRED.png\" style=\"width: 200px;\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row style=\"padding: 10px 20px;\" *ngIf=\"tradeDetails?.status == 3\">\n\t\t\t\t\t<ion-col class=\"\">\n\t\t\t\t\t\t<div style=\"text-align: center;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 200px;\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\n\n\n\t\t</ng-container>\n\n\t\t<!-- <ion-row class=\"ion-padding table-row padd-5\" style=\"padding-top: 0px;\">\n\n\t\t\t<ion-col class=\"price-table dashboard\">\n\t\t\t\t<table class=\"table \">\n\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<ng-container *ngFor=\"let list of spec | keyvalue\">\n\t\t\t\t\t\t\t<tr *ngFor=\"let listitems of list.value | keyvalue\">\n\t\t\t\t\t\t\t\t<td class=\"sticky-col first-col left pl-10\"\n\t\t\t\t\t\t\t\t\tstyle=\"font-family: 'Poppins-SemiBold';\">\n\t\t\t\t\t\t\t\t\t{{ listitems.key }}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"type-columns pl-60\" style=\"width:180px\">\n\t\t\t\t\t\t\t\t\t<div class=\"priceData \" style=\"font-family: 'Poppins-Regular';\">\n\t\t\t\t\t\t\t\t\t\t{{ listitems.value }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</tbody>\n\n\t\t\t\t</table>\n\t\t\t</ion-col>\n\t\t</ion-row> -->\n\t</div>\n\n</ion-content>\n<div>\n\t<app-menu></app-menu>\n\n</div>";

    /***/
  }),
  /***/"./src/app/trade-detail/trade-detail-routing.module.ts": (
  /*!*************************************************************!*\
    !*** ./src/app/trade-detail/trade-detail-routing.module.ts ***!
    \*************************************************************/
  /*! exports provided: TradeDetailPageRoutingModule */
  /***/
  function srcAppTradeDetailTradeDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TradeDetailPageRoutingModule", function () {
      return TradeDetailPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _trade_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./trade-detail.page */"./src/app/trade-detail/trade-detail.page.ts");
    var routes = [{
      path: '',
      component: _trade_detail_page__WEBPACK_IMPORTED_MODULE_3__["TradeDetailPage"]
    }];
    var TradeDetailPageRoutingModule = /*#__PURE__*/_createClass(function TradeDetailPageRoutingModule() {
      _classCallCheck(this, TradeDetailPageRoutingModule);
    });
    TradeDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TradeDetailPageRoutingModule);

    /***/
  }),
  /***/"./src/app/trade-detail/trade-detail.module.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/trade-detail/trade-detail.module.ts ***!
    \*****************************************************/
  /*! exports provided: TradeDetailPageModule */
  /***/
  function srcAppTradeDetailTradeDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TradeDetailPageModule", function () {
      return TradeDetailPageModule;
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
    var _trade_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./trade-detail-routing.module */"./src/app/trade-detail/trade-detail-routing.module.ts");
    /* harmony import */
    var _trade_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./trade-detail.page */"./src/app/trade-detail/trade-detail.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var TradeDetailPageModule = /*#__PURE__*/_createClass(function TradeDetailPageModule() {
      _classCallCheck(this, TradeDetailPageModule);
    });
    TradeDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _trade_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TradeDetailPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_trade_detail_page__WEBPACK_IMPORTED_MODULE_6__["TradeDetailPage"]]
    })], TradeDetailPageModule);

    /***/
  }),
  /***/"./src/app/trade-detail/trade-detail.page.scss": (
  /*!*****************************************************!*\
    !*** ./src/app/trade-detail/trade-detail.page.scss ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppTradeDetailTradeDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".galleryContent {\n  padding: 0px;\n}\n\n.ricetype {\n  font-size: 18px;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: transparent important;\n}\n\n.price-table table thead tr th {\n  background-color: transparent important;\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n}\n\ntable thead,\ntable tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 2px solid #ededed !important;\n}\n\n.specification ion-row {\n  padding: 0;\n}\n\n.specification ion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.specification thead th {\n  font-weight: inherit;\n  text-align: left;\n}\n\n.ricetype {\n  font-size: 24px;\n  font-family: Arial;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.ricetype .black {\n  color: #000;\n}\n\ntable tbody tr td {\n  color: #000;\n  font-size: 14px !important;\n}\n\n.card .image {\n  text-align: center;\n}\n\n.type-columns {\n  padding-left: 40px;\n}\n\n.pl-40 {\n  padding-left: 40px !important;\n}\n\n.pl-60 {\n  padding-left: 40px !important;\n}\n\ntable tbody {\n  border: 0px !important;\n}\n\n#card th {\n  background-color: transparent !important;\n  --background-color: transparent !important;\n}\n\n#card {\n  position: absolute;\n  width: -webkit-fill-available;\n  padding-bottom: 25px;\n  margin: 0px;\n  border-radius: 0px 0px 22px 22px;\n}\n\n.swiper-slide img {\n  border-radius: 25px;\n}\n\nion-toolbar {\n  --border-width: 0 0 0px !important;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0px !important;\n}\n\np {\n  padding: 0;\n  margin: 0;\n}\n\n.interestedButton {\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n  background-color: #000;\n  padding: 15px 0px;\n  text-transform: capitalize;\n  border-radius: 100px;\n  width: 40%;\n}\n\n.callNowButton {\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n  background-color: #91b243;\n  padding: 15px 0px;\n  text-transform: capitalize;\n  border-radius: 100px;\n  width: 40%;\n}\n\n.hide {\n  display: none;\n}\n\n.specRice {\n  margin-left: 10px;\n}\n\n.specRice ion-col {\n  padding: 0px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3RyYWRlLWRldGFpbC90cmFkZS1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC90cmFkZS1kZXRhaWwvdHJhZGUtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURLSTtFQUNJLFdBQUE7RUE0QkEsZUFBQTtBQzdCUjs7QURJWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7QUNGaEI7O0FESWdCO0VBQ0ksdUNBQUE7RUFDQSwrQkFBQTtBQ0ZwQjs7QURRWTtFQUNJLFlBQUE7QUNOaEI7O0FEUWdCO0VBQ0ksZUFBQTtBQ05wQjs7QURrQkE7O0VBRUksa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDJDQUFBO0FDZko7O0FEbUJJO0VBQ0ksVUFBQTtBQ2hCUjs7QURtQkk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ2pCUjs7QURxQlE7RUFFSSxvQkFBQTtFQUNBLGdCQUFBO0FDcEJaOztBRDBCQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUN2Qko7O0FEeUJJO0VBQ0ksV0FBQTtBQ3ZCUjs7QUQ0QkE7RUFFSSxXQUFBO0VBQ0EsMEJBQUE7QUMxQko7O0FEOEJJO0VBQ0ksa0JBQUE7QUMzQlI7O0FEK0JBO0VBQ0ksa0JBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksNkJBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksNkJBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksc0JBQUE7QUM1Qko7O0FEbUNBO0VBQ0ksd0NBQUE7RUFDQSwwQ0FBQTtBQ2hDSjs7QURtQ0E7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUNoQ0o7O0FEb0NJO0VBQ0ksbUJBQUE7QUNqQ1I7O0FEcUNBO0VBQ0ksa0NBQUE7QUNsQ0o7O0FEcUNBO0VBQ0ksa0NBQUE7QUNsQ0o7O0FEcUNBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUNsQ0o7O0FEcUNBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQ2xDSjs7QURzQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDbkNKOztBRHNDQTtFQUNJLGFBQUE7QUNuQ0o7O0FEc0NBO0VBQ0ksaUJBQUE7QUNuQ0o7O0FEc0NBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNuQ0oiLCJmaWxlIjoic3JjL2FwcC90cmFkZS1kZXRhaWwvdHJhZGUtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5Q29udGVudCB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnByaWNlLXRhYmxlIHtcblxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCBpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IGltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuXG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIH1cbn1cblxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWRlZGVkICFpbXBvcnRhbnQ7XG59XG5cbi5zcGVjaWZpY2F0aW9uIHtcbiAgICBpb24tcm93IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICBpb24tY29sIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwXG4gICAgfVxuXG4gICAgdGhlYWQge1xuICAgICAgICB0aCB7XG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yaWNldHlwZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcblxuICAgIC5ibGFjayB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbn1cblxuXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgLy8gY29sb3I6ICM5MkIyNDM7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIHtcbiAgICAuaW1hZ2Uge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4udHlwZS1jb2x1bW5zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHhcbn1cblxuLnBsLTQwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLnBsLTYwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxudGFibGUgdGJvZHkge1xuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8vIHRib2R5IHRyOm50aC1jaGlsZChvZGQpIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlOWIxO1xuLy8gfVxuXG4jY2FyZCB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbiNjYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMnB4IDIycHg7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufVxuXG5wIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmludGVyZXN0ZWRCdXR0b24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB3aWR0aDogNDAlO1xuICAgIC8vIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmNhbGxOb3dCdXR0b24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDUsIDE3OCwgNjcsIDEpO1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHdpZHRoOiA0MCVcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLnNwZWNSaWNlIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnNwZWNSaWNlIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn0iLCIuZ2FsbGVyeUNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5yaWNldHlwZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnByaWNlLXRhYmxlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB7XG4gIGhlaWdodDogMzRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCBpbXBvcnRhbnQ7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCBpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGJvZHkgdHIge1xuICBoZWlnaHQ6IDM1cHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGJvZHkgdHIgdGQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VkZWRlZCAhaW1wb3J0YW50O1xufVxuXG4uc3BlY2lmaWNhdGlvbiBpb24tcm93IHtcbiAgcGFkZGluZzogMDtcbn1cbi5zcGVjaWZpY2F0aW9uIGlvbi1jb2wge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uc3BlY2lmaWNhdGlvbiB0aGVhZCB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucmljZXR5cGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuLnJpY2V0eXBlIC5ibGFjayB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQgLmltYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udHlwZS1jb2x1bW5zIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG4ucGwtNDAge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLnBsLTYwIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRib2R5IHtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbn1cblxuI2NhcmQgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbiNjYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIycHggMjJweDtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5pbnRlcmVzdGVkQnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogNDAlO1xufVxuXG4uY2FsbE5vd0J1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxYjI0MztcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc3BlY1JpY2Uge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnNwZWNSaWNlIGlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/trade-detail/trade-detail.page.ts": (
  /*!***************************************************!*\
    !*** ./src/app/trade-detail/trade-detail.page.ts ***!
    \***************************************************/
  /*! exports provided: TradeDetailPage */
  /***/
  function srcAppTradeDetailTradeDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TradeDetailPage", function () {
      return TradeDetailPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _imageprev_imageprev_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../imageprev/imageprev.page */"./src/app/imageprev/imageprev.page.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    var TradeDetailPage = /*#__PURE__*/function () {
      function TradeDetailPage(location, actRoute, apiser, modalCtrl) {
        var _this = this;
        _classCallCheck(this, TradeDetailPage);
        this.location = location;
        this.actRoute = actRoute;
        this.apiser = apiser;
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
        this.generateDate = function (date) {
          var someDate = new Date(date);
          return someDate.getDay() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear();
        };
        this.generateDateForValid = function (validDate) {
          var createddate = new Date(validDate);
          var ddate = createddate.getDate();
          var month = createddate.getMonth() + 1;
          var year = createddate.getFullYear();
          var hours = createddate.getHours().toString();
          var minutes = createddate.getMinutes().toString();
          // var ampm = hours >= 12 ? 'pm' : 'am';
          // hours = hours % 12;
          hours = hours ? hours.toString() : '12'; // the hour '0' should be '12'
          hours = hours.length == 1 ? '0' + hours : hours;
          console.log('minutes');
          console.log(minutes);
          minutes = minutes < '10' ? '0' + minutes : minutes;
          var strTime = ddate + '/' + month + '/' + year + ' (' + hours + ':' + minutes + ')';
          return strTime;
        };
        //intrested/trade
        this.userShowInterest = function (tradeId, $event) {
          $event.currentTarget.classList.add('hide');
          $event.currentTarget.parentNode.parentNode.children[1].classList.remove('hide');
          document.getElementById('showingInterest').classList.remove('hide');
          // $event.currentTarget.parentNode.parentNode.children[2].classList.remove('hide');
          // return false;
          var postedData = {
            tradeId: tradeId,
            userId: localStorage.getItem('id')
          };
          _this.apiser.tradeInterest(postedData).then(function (res) {
            console.log(res);
          })["catch"](function (err) {
            console.log(err);
          });
        };
        var tradeData = this.actRoute.snapshot.paramMap.get('tradeDetail');
        this.tradeDetails = JSON.parse(tradeData);
        console.log(this.tradeDetails);
        var specialCharacter = ',';
        var additionalIn = this.tradeDetails.additioanlInfo;
        if (additionalIn) {
          this.addInfo = additionalIn.split(specialCharacter);
        }
        this.imageUrl = this.apiser.imageUrl;
        // this.getTradeDetails(this.galleryId);
        this.userFirstName = localStorage.getItem('name')[0];
      }
      return _createClass(TradeDetailPage, [{
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getTradeDetails",
        value: function getTradeDetails(galleryId) {
          var _this2 = this;
          this.apiser.presentLoader("Loading trade details...");
          this.apiser.getTradeData(galleryId).then(function (res) {
            console.log('trade details');
            console.log(res);
            _this2.apiser.loaderCtrl.dismiss();
            _this2.galleryData = res.data;
            _this2.spec = res.data.specification;
            console.log(_this2.spec);
          }, function (err) {});
        }
      }, {
        key: "openModal",
        value: function openModal(image) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var modal;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.modalCtrl.create({
                    component: _imageprev_imageprev_page__WEBPACK_IMPORTED_MODULE_5__["ImageprevPage"],
                    componentProps: {
                      img: image
                    }
                  });
                case 2:
                  modal = _context.sent;
                  _context.next = 5;
                  return modal.present();
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }]);
    }();
    TradeDetailPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };
    TradeDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-trade-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./trade-detail.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/trade-detail/trade-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./trade-detail.page.scss */"./src/app/trade-detail/trade-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], TradeDetailPage);

    /***/
  })
}]);
//# sourceMappingURL=trade-detail-trade-detail-module-es5.js.map