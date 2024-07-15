function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trade-usd-details-trade-usd-details-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/trade-usd-details/trade-usd-details.page.html": (
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trade-usd-details/trade-usd-details.page.html ***!
    \*****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTradeUsdDetailsTradeUsdDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content id=\"content\">\n\t<div>\n\t\t<div class=\"lightgreen\">\n\t\t\t<div class=\"header-content\">\n\t\t\t\t<ion-row class=\"\">\n\t\t\t\t\t<ion-col size=\"3\" align=\"center\">\n\t\t\t\t\t\t<div class=\"user-profile-icon\">\n\t\t\t\t\t\t\t<span>{{ userFirstName }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\" align=\"center\">\n\t\t\t\t\t\t<h4>Product Details</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<ion-row class=\"rice-gallery\" *ngIf=\"tradeDetails != undefined \">\n\t\t\t<ion-col\n\t\t\t\tstyle=\"padding: 0px 0px 15px 0px;background-color: #fffbd6;border-radius: 0px 0px 25px 25px;overflow: hidden;\">\n\t\t\t\t<ion-slides pager=\"false\" [options]=\"slideOpts\">\n\t\t\t\t\t<ion-slide *ngIf=\"tradeDetails?.attachment1 != null\"\n\t\t\t\t\t\tstyle=\"width: 100%;padding: 15px;height: 200px;\">\n\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/notifications/'+tradeDetails?.attachment1 )\"\n\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/notifications/{{ tradeDetails?.attachment1 }}\"\n\t\t\t\t\t\t\tclass=\"slide-image\" onerror=\"this.src='../../assets/img/No_image_available.svg.png'\">\n\t\t\t\t\t</ion-slide>\n\t\t\t\t\t<ion-slide *ngIf=\"tradeDetails?.attachment2 != null\"\n\t\t\t\t\t\tstyle=\"width: 100%;padding: 15px;height: 200px;\">\n\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/notifications/'+tradeDetails?.attachment2)\"\n\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/notifications/{{ tradeDetails?.attachment2 }}\"\n\t\t\t\t\t\t\tclass=\"slide-image\" onerror=\"this.src='../../assets/img/No_image_available.svg.png'\">\n\t\t\t\t\t</ion-slide>\n\t\t\t\t</ion-slides>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\n\t\t<ng-container *ngIf=\"tradeDetails != undefined \">\n\t\t\t<ng-container>\n\t\t\t\t<div style=\"margin: 0;padding: 15px 0px;margin-bottom: 100px;\">\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.get_rice_quality?.quality != '' && tradeDetails?.get_rice_quality?.quality != null && tradeDetails?.get_rice_quality?.quality != undefined && tradeDetails?.get_rice_quality?.quality_name != '' && tradeDetails?.get_rice_quality?.quality_name != null && tradeDetails?.get_rice_quality?.quality_name != undefined \">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Quality</ion-col>\n\t\t\t\t\t\t<div style=\"margin-top: 5px; \">:</div>\n\t\t\t\t\t\t<ion-col> {{ tradeDetails?.get_rice_quality?.quality }} {{\n\t\t\t\t\t\t\ttradeDetails?.get_rice_quality?.quality_name\n\t\t\t\t\t\t\t}}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.get_u_s_d_default_master?.bag_size != '' && tradeDetails?.get_u_s_d_default_master?.bag_size != null && tradeDetails?.get_u_s_d_default_master?.bag_size != undefined && tradeDetails?.get_u_s_d_default_master?.bag_type != '' && tradeDetails?.get_u_s_d_default_master?.bag_type != null && tradeDetails?.get_u_s_d_default_master?.bag_type != undefined \">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Packing</ion-col>\n\t\t\t\t\t\t<ion-col>: {{ tradeDetails?.get_u_s_d_default_master?.bag_size }} {{\n\t\t\t\t\t\t\ttradeDetails?.get_u_s_d_default_master?.bag_type }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.qty != '' && tradeDetails?.qty != null && tradeDetails?.qty != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Quantity (MT)</ion-col>\n\t\t\t\t\t\t<ion-col>: {{ tradeDetails?.qty }}</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.fob != '' && tradeDetails?.fob != null && tradeDetails?.fob != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">FOB PMT</ion-col>\n\t\t\t\t\t\t<ion-col>: ${{ tradeDetails?.fob }}</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.message != '' && tradeDetails?.message != null && tradeDetails?.message != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Remarks</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">\n\t\t\t\t\t\t\t<div style=\"float: left;margin-right: 4px;height: 100%\">:</div> {{ tradeDetails?.message }}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.created_at != '' && tradeDetails?.created_at != null && tradeDetails?.created_at != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Posted on</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.created_at | date:'dd-MM-yyyy |\n\t\t\t\t\t\t\thh:mm a' }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.validDate != '' && tradeDetails?.validDate != null && tradeDetails?.validDate != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Valid Till</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.validDate | date:'dd-MM-yyyy |\n\t\t\t\t\t\t\thh:mm a' }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\n\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.length != '' && tradeDetails?.length != 0 && tradeDetails?.length != null || tradeDetails?.length != '' && tradeDetails?.length != 0 && tradeDetails?.length != null || tradeDetails?.purity != '' && tradeDetails?.purity != 0 && tradeDetails?.purity != null || tradeDetails?.moisture != '' && tradeDetails?.moisture != 0 && tradeDetails?.moisture != null || tradeDetails?.broken != '' && tradeDetails?.broken != 0 && tradeDetails?.broken != null || tradeDetails?.kett != '' && tradeDetails?.kett != 0 && tradeDetails?.kett != null || tradeDetails?.dd != '' && tradeDetails?.dd != 0 && tradeDetails?.dd != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\"\n\t\t\t\t\t\t\tstyle=\"font-size: 18px;font-weight: bold;\">Parameters</ion-col>\n\t\t\t\t\t\t<ion-col class=\"demandHeaders\"\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;font-size: 18px;font-weight: bold\">Specifications</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.length != '' && tradeDetails?.length != 0 && tradeDetails?.length != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Length</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.length }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.purity != '' && tradeDetails?.purity != 0 && tradeDetails?.purity != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Purity</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.purity }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.moisture != '' && tradeDetails?.moisture != 0 && tradeDetails?.moisture != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Moisture</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.moisture }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.broken != '' && tradeDetails?.broken != 0 && tradeDetails?.broken != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Broken</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.broken }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.kett != '' && tradeDetails?.kett != 0 && tradeDetails?.kett != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Kett</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.kett }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.dd != '' && tradeDetails?.dd != 0 && tradeDetails?.dd != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">DD</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.dd }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\t*ngIf=\"tradeDetails?.status == 0 && tradeDetails?.isExpired == 'true' || tradeDetails?.isExpired == 'true' && tradeDetails?.status == 1\"\n\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: red;font-weight: bold;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP EXPIRED.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.hot_deal_accept.length <= 0\">\n\t\t\t\t\t\t<ion-col *ngIf=\"tradeDetails?.isExpired == 'false' && tradeDetails?.status == 1\" size=\"12\"\n\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: red;\">\n\t\t\t\t\t\t\t<ion-button class=\"green\" style=\"color: #fff;border-radius: 12px;\"\n\t\t\t\t\t\t\t\t(click)=\"acceptHotDeal(tradeDetails?.id)\">Interested</ion-button>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ng-container *ngIf=\"tradeDetails?.status == 1 && tradeDetails?.isExpired != 'true'\">\n\t\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.hot_deal_accept.length > 0 \">\n\t\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">{{\n\t\t\t\t\t\t\t\ttradeDetails?.isDealAcceptedMessage }}\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ng-container>\n\n\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.status == 0 && tradeDetails?.isExpired != 'true'\">\n\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.status == 2 && tradeDetails?.isExpired != 'true'\">\n\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t<!-- Deal is taken -->\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\n\t\t</ng-container>\n\n\n\t\t<app-menu></app-menu>\n\t</div>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/trade-usd-details/trade-usd-details-routing.module.ts": (
  /*!***********************************************************************!*\
    !*** ./src/app/trade-usd-details/trade-usd-details-routing.module.ts ***!
    \***********************************************************************/
  /*! exports provided: TradeUsdDetailsPageRoutingModule */
  /***/
  function srcAppTradeUsdDetailsTradeUsdDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TradeUsdDetailsPageRoutingModule", function () {
      return TradeUsdDetailsPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _trade_usd_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./trade-usd-details.page */"./src/app/trade-usd-details/trade-usd-details.page.ts");
    var routes = [{
      path: '',
      component: _trade_usd_details_page__WEBPACK_IMPORTED_MODULE_3__["TradeUsdDetailsPage"]
    }];
    var TradeUsdDetailsPageRoutingModule = /*#__PURE__*/_createClass(function TradeUsdDetailsPageRoutingModule() {
      _classCallCheck(this, TradeUsdDetailsPageRoutingModule);
    });
    TradeUsdDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TradeUsdDetailsPageRoutingModule);

    /***/
  }),
  /***/"./src/app/trade-usd-details/trade-usd-details.module.ts": (
  /*!***************************************************************!*\
    !*** ./src/app/trade-usd-details/trade-usd-details.module.ts ***!
    \***************************************************************/
  /*! exports provided: TradeUsdDetailsPageModule */
  /***/
  function srcAppTradeUsdDetailsTradeUsdDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TradeUsdDetailsPageModule", function () {
      return TradeUsdDetailsPageModule;
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
    var _trade_usd_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./trade-usd-details-routing.module */"./src/app/trade-usd-details/trade-usd-details-routing.module.ts");
    /* harmony import */
    var _trade_usd_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./trade-usd-details.page */"./src/app/trade-usd-details/trade-usd-details.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var TradeUsdDetailsPageModule = /*#__PURE__*/_createClass(function TradeUsdDetailsPageModule() {
      _classCallCheck(this, TradeUsdDetailsPageModule);
    });
    TradeUsdDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _trade_usd_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["TradeUsdDetailsPageRoutingModule"]],
      declarations: [_trade_usd_details_page__WEBPACK_IMPORTED_MODULE_6__["TradeUsdDetailsPage"]]
    })], TradeUsdDetailsPageModule);

    /***/
  }),
  /***/"./src/app/trade-usd-details/trade-usd-details.page.scss": (
  /*!***************************************************************!*\
    !*** ./src/app/trade-usd-details/trade-usd-details.page.scss ***!
    \***************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppTradeUsdDetailsTradeUsdDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "p {\n  padding: 0px;\n  margin: 0px;\n}\n\n.demandHeaders {\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3RyYWRlLXVzZC1kZXRhaWxzL3RyYWRlLXVzZC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHJhZGUtdXNkLWRldGFpbHMvdHJhZGUtdXNkLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdHJhZGUtdXNkLWRldGFpbHMvdHJhZGUtdXNkLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4uZGVtYW5kSGVhZGVycyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsInAge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZGVtYW5kSGVhZGVycyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/trade-usd-details/trade-usd-details.page.ts": (
  /*!*************************************************************!*\
    !*** ./src/app/trade-usd-details/trade-usd-details.page.ts ***!
    \*************************************************************/
  /*! exports provided: TradeUsdDetailsPage */
  /***/
  function srcAppTradeUsdDetailsTradeUsdDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TradeUsdDetailsPage", function () {
      return TradeUsdDetailsPage;
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
    var TradeUsdDetailsPage = /*#__PURE__*/function () {
      function TradeUsdDetailsPage(actRoute, apiser, modalCtrl, alertController, location) {
        var _this = this;
        _classCallCheck(this, TradeUsdDetailsPage);
        this.actRoute = actRoute;
        this.apiser = apiser;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.location = location;
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
        this.showImage = false;
        this.parseDate = function (date) {
          var someDate = new Date(date);
          // someDate.setTime(someDate.getTime() + (duration * 24 * 60 * 60 * 1000));
          return someDate.getDate() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear();
        };
        this.generateDate = function (date) {
          var someDate = new Date(date);
          return someDate.getDay() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear();
        };
        //intrested/trade
        this.userShowInterest = function (tradeId, $event) {
          $event.currentTarget.classList.add('hide');
          $event.currentTarget.parentNode.parentNode.children[1].classList.remove('hide');
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
        console.log(tradeData);
        this.tradeDetails = JSON.parse(tradeData);
        console.log(this.tradeDetails);
        this.imageUrl = this.apiser.imageUrl;
        // this.getTradeDetails(this.galleryId);
        this.userFirstName = localStorage.getItem('name')[0];
      }
      return _createClass(TradeUsdDetailsPage, [{
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
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "acceptHotDeal",
        value: function acceptHotDeal(bidId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this3 = this;
            var alert;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.alertController.create({
                    message: 'Kindly confirm your interest',
                    buttons: [{
                      text: 'Yes',
                      role: 'confirm',
                      handler: function handler() {
                        _this3.apiser.presentLoader('Please wait');
                        _this3.apiser.acceptHotDeal({
                          'user_id': localStorage.getItem('id'),
                          'bid_id': bidId
                        }).then(function (res) {
                          // this.getListBids();
                          console.log(res);
                          _this3.apiser.dismissLoader();
                        }, function (err) {
                          console.log(err);
                          _this3.apiser.dismissLoader();
                        });
                      }
                    }, {
                      text: 'Cancel',
                      role: 'cancel',
                      handler: function handler() {
                        alert.dismiss();
                      }
                    }],
                    cssClass: "confirm"
                  });
                case 2:
                  alert = _context2.sent;
                  _context2.next = 5;
                  return alert.present();
                case 5:
                  return _context2.abrupt("return", false);
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "openImage",
        value: function openImage(imagePrefix, destination, image) {
          this.showImage = true;
          this.ShownImage = imagePrefix + '' + destination + '/' + image;
        }
      }, {
        key: "closeImage",
        value: function closeImage() {
          this.showImage = false;
        }
      }]);
    }();
    TradeUsdDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }];
    };
    TradeUsdDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-trade-usd-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./trade-usd-details.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/trade-usd-details/trade-usd-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./trade-usd-details.page.scss */"./src/app/trade-usd-details/trade-usd-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])], TradeUsdDetailsPage);

    /***/
  })
}]);
//# sourceMappingURL=trade-usd-details-trade-usd-details-module-es5.js.map