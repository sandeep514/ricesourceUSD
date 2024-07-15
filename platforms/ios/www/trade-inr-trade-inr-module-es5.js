function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trade-inr-trade-inr-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/trade-inr/trade-inr.page.html": (
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trade-inr/trade-inr.page.html ***!
    \*************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTradeInrTradeInrPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header class=\"\">\n\t<ion-toolbar mode=\"ios\" style=\"background: #fff; --background: #fff\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Trade</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content id=\"content\" class=\"\" style=\"height: 100%;\">\n\t<div style=\"height: 90%;overflow: scroll;\">\n\t\t<div>\n\t\t\t<ul style=\"padding: 10px;\">\n\t\t\t\t<li *ngFor=\"let bids of mybids\" class=\"demandedData\">\n\t\t\t\t\t<div\n\t\t\t\t\t\tstyle=\"margin: 0;border: 1px solid #ededed;border-radius: 10px;margin-bottom: 20px;overflow: hidden;box-shadow: 1px 4px 6px 2px #ededed;\">\n\t\t\t\t\t\t<ion-row style=\"\">\n\t\t\t\t\t\t\t<!-- <ion-col size=\"10\">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\tstyle=\"margin: 0px;color: #92b243;padding: 10px 0px;font-weight: bold;margin-left: 10px;\">\n\t\t\t\t\t\t\t\t\tTRADE-{{ (bids?.id + 1) }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col> -->\n\t\t\t\t\t\t\t<ion-col size=\"2\" style=\"text-align: center;margin: 0px;padding: 0px;\">\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px;color: #fffbd6;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"bids?.tradeType == 1\"\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"(bids?.tradeType == 1)?{'background-color': 'green'} : {'background-color': '#324ab2'}\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 5px 10px;border-radius: 0px 0px 0px 5px;\">Sell</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"bids?.tradeType == 2\"\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"(bids?.tradeType == 1)?{'background-color': 'green'} : {'background-color': '#324ab2'}\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 5px 10px;border-radius: 0px 0px 0px 5px;\">Buy</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Rice</ion-col>\n\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t\t{{bids?.rice_quality_master.quality}} {{bids?.rice_form_milestone3.name}}\n\t\t\t\t\t\t\t\t\t\t{{bids?.rice_grade.get_wand_type.type}}\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"bids?.quality_type == 1 \"> Basmati Rice</ng-container>\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"bids?.quality_type == 2 \"> Non-Basmati Rice</ng-container>\n\t\t\t\t\t\t\t\t\t\t({{ bids?.rice_grade.value }})\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<!-- <ion-row>\n\t\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Rice Form</ion-col>\n\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t\t{{ bids?.rice_form_milestone3.name }} \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Grade</ion-col>\n\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t\t{{ bids?.rice_grade.get_wand_type.type }}:\n\t\t\t\t\t\t\t\t\t\t{{ bids?.rice_grade.value }} \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row> -->\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Packing</ion-col>\n\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t\t{{ bids?.rice_packing.packing }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Quantity(MT)</ion-col>\n\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t\t{{ bids?.quantity }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Price (PMT)\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t\t₹{{ bids?.offerPrice }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Ex-Warehouse</ion-col>\n\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t\t<div style=\"margin: 0px;text-transform: capitalize;\">\n\t\t\t\t\t\t\t\t\t\t{{ bids?.location }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Validity</ion-col>\n\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t\t{{ generateDate(bids?.validDays) }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col size=\"6\"\n\t\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/{{ bids?.cooked_file }}\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"width: 200px;padding: 0 5px;\" alt=\"cooked\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"openModal(imagePre+'uploads/'+bids?.cooked_file)\"\n\t\t\t\t\t\t\t\t\t\tonerror=\"this.src='../../assets/img/No_image_available.svg.png';\">\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"6\"\n\t\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/{{ bids?.uncooked_file }}\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"width: 200px;padding: 0 5px;\" alt=\"cooked\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"openModal(imagePre+'uploads/'+bids?.uncooked_file)\"\n\t\t\t\t\t\t\t\t\t\tonerror=\"this.src='../../assets/img/No_image_available.svg.png';\">\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t<ion-row *ngIf=\"bids?.status == 3 && bids?.status == '3'\">\n\t\t\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t<ion-row *ngIf=\"bids?.status == 2 && bids?.status == '3'\">\n\t\t\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t<!-- Deal is taken -->\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style=\"text-align: center;padding: 10px;\">\n\t\t\t\t\t\t\t<div class=\"blink_me\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"call-outline\" style=\"color: #000;\"></ion-icon>\n\t\t\t\t\t\t\t\t<a href=\"tel:+919877092004\" class=\"contactuser\"\n\t\t\t\t\t\t\t\t\tstyle=\"text-decoration: none;color: #000;font-weight: bold;font-size: 17px;margin-left: 5px;\">Call\n\t\t\t\t\t\t\t\t\tSNTC</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/trade-inr/trade-inr-routing.module.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/trade-inr/trade-inr-routing.module.ts ***!
    \*******************************************************/
  /*! exports provided: TradeINRPageRoutingModule */
  /***/
  function srcAppTradeInrTradeInrRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TradeINRPageRoutingModule", function () {
      return TradeINRPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _trade_inr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./trade-inr.page */"./src/app/trade-inr/trade-inr.page.ts");
    var routes = [{
      path: '',
      component: _trade_inr_page__WEBPACK_IMPORTED_MODULE_3__["TradeINRPage"]
    }];
    var TradeINRPageRoutingModule = /*#__PURE__*/_createClass(function TradeINRPageRoutingModule() {
      _classCallCheck(this, TradeINRPageRoutingModule);
    });
    TradeINRPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TradeINRPageRoutingModule);

    /***/
  }),
  /***/"./src/app/trade-inr/trade-inr.module.ts": (
  /*!***********************************************!*\
    !*** ./src/app/trade-inr/trade-inr.module.ts ***!
    \***********************************************/
  /*! exports provided: TradeINRPageModule */
  /***/
  function srcAppTradeInrTradeInrModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TradeINRPageModule", function () {
      return TradeINRPageModule;
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
    var _trade_inr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./trade-inr-routing.module */"./src/app/trade-inr/trade-inr-routing.module.ts");
    /* harmony import */
    var _trade_inr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./trade-inr.page */"./src/app/trade-inr/trade-inr.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var TradeINRPageModule = /*#__PURE__*/_createClass(function TradeINRPageModule() {
      _classCallCheck(this, TradeINRPageModule);
    });
    TradeINRPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _trade_inr_routing_module__WEBPACK_IMPORTED_MODULE_5__["TradeINRPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_trade_inr_page__WEBPACK_IMPORTED_MODULE_6__["TradeINRPage"]]
    })], TradeINRPageModule);

    /***/
  }),
  /***/"./src/app/trade-inr/trade-inr.page.scss": (
  /*!***********************************************!*\
    !*** ./src/app/trade-inr/trade-inr.page.scss ***!
    \***********************************************/
  /*! exports provided: default */
  /***/
  function srcAppTradeInrTradeInrPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes blinker {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\nion-toolbar {\n  --border-width: 0 0 0px !important;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3RyYWRlLWluci90cmFkZS1pbnIucGFnZS5zY3NzIiwic3JjL2FwcC90cmFkZS1pbnIvdHJhZGUtaW5yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZDQUFBO1VBQUEscUNBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksVUFBQTtFQ0NOO0VEQ0U7SUFDSSxZQUFBO0VDQ047RURDRTtJQUNJLFVBQUE7RUNDTjtBQUNGOztBRFZBO0VBQ0k7SUFDSSxVQUFBO0VDQ047RURDRTtJQUNJLFlBQUE7RUNDTjtFRENFO0lBQ0ksVUFBQTtFQ0NOO0FBQ0Y7O0FEQ0E7RUFDSSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RyYWRlLWluci90cmFkZS1pbnIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsaW5rX21lIHtcbiAgICBhbmltYXRpb246IGJsaW5rZXIgMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9O1xuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9O1xuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH07XG59XG5pb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufSIsIi5ibGlua19tZSB7XG4gIGFuaW1hdGlvbjogYmxpbmtlciAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmtlciB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbmlvbi10b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggIWltcG9ydGFudDtcbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/trade-inr/trade-inr.page.ts": (
  /*!*********************************************!*\
    !*** ./src/app/trade-inr/trade-inr.page.ts ***!
    \*********************************************/
  /*! exports provided: TradeINRPage */
  /***/
  function srcAppTradeInrTradeInrPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TradeINRPage", function () {
      return TradeINRPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _imageprev_imageprev_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../imageprev/imageprev.page */"./src/app/imageprev/imageprev.page.ts");
    var TradeINRPage = /*#__PURE__*/function () {
      function TradeINRPage(apiService, location, modalCtrl) {
        _classCallCheck(this, TradeINRPage);
        this.apiService = apiService;
        this.location = location;
        this.modalCtrl = modalCtrl;
        this.generateDate = function (days) {
          var someDate = new Date();
          var duration = days;
          someDate.setTime(someDate.getTime() + duration * 24 * 60 * 60 * 1000);
          return someDate.getDate() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear();
        };
        var today = new Date();
        // this.mindate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        this.mindate = new Date(today.setDate(today.getDate() + 2)).toISOString();
        this.maxDate = today.setFullYear(today.getFullYear() + 2);
        this.lastDate = new Date(this.maxDate).toISOString();
        this.imagePre = this.apiService.imageUrl;
      }
      return _createClass(TradeINRPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getListBids();
        }
      }, {
        key: "changed",
        value: function changed(event) {
          var todayDate = new Date();
          var todayFormatedDate = todayDate.getDate() + "/" + todayDate.getMonth() + "/" + todayDate.getFullYear();
          var selectedDate = new Date(event.detail.value);
          var getFullYear = selectedDate.getFullYear();
          var getDate = selectedDate.getDate();
          var getMonth = selectedDate.getMonth();
          var selectedFormatedDate = getDate + "/" + getMonth + "/" + getFullYear;
          var date1 = todayDate;
          var date2 = selectedDate;
          var diffDays = date2.getDate() - date1.getDate();
          this.validTill = diffDays;
          // console.log(diffDays);
        }
      }, {
        key: "getListBids",
        value: function getListBids() {
          var _this = this;
          var userid = localStorage.getItem("id");
          this.apiService.presentLoader("Please wait...");
          this.apiService.getTrades(userid).then(function (res) {
            console.log('res 67');
            console.log(res);
            _this.mybids = res.data;
            console.log(res);
            setTimeout(function () {
              _this.apiService.dismissLoader();
            }, 1000);
          }, function (err) {
            setTimeout(function () {
              _this.apiService.dismissLoader();
            }, 1000);
          });
        }
      }, {
        key: "yourbidfunction",
        value: function yourbidfunction(event, buyQueryId) {
          this.mybid = event.detail.value;
          this.QueryId = buyQueryId;
        }
      }, {
        key: "validDays",
        value: function validDays(event, buyQueryId) {
          this.validTill = event.detail.value;
          this.QueryId = buyQueryId;
        }
      }, {
        key: "saveUserBid",
        value: function saveUserBid(buyQueryId) {
          var _this2 = this;
          this.QueryId = buyQueryId;
          if (this.QueryId != undefined && this.mybid != undefined && this.validTill != undefined) {
            this.apiService.presentLoader("Please Wait...");
            this.apiService.addBidOnBuyerQuery({
              buyQueryId: this.QueryId,
              validTill: this.validTill,
              amount: this.mybid,
              userid: localStorage.getItem("id")
            }).then(function (res) {
              _this2.apiService.dismissLoader();
              _this2.getListBids();
            }, function (err) {
              _this2.apiService.dismissLoader();
            });
          } else {
            this.apiService.presentToast("Bid amount & Bid expired date is required...");
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "accept",
        value: function accept(bid_id) {
          var _this3 = this;
          this.apiService.presentLoader("Please Wait...");
          var postedData = {
            bid_id: bid_id,
            counter_status: 1
          };
          this.apiService.updateCounterStatus(postedData).then(function (res) {
            _this3.apiService.dismissLoader();
            console.log(res);
            _this3.getListBids();
          })["catch"](function (err) {
            _this3.apiService.dismissLoader();
            _this3.getListBids();
            console.log(err);
          });
        }
      }, {
        key: "reject",
        value: function reject(bid_id) {
          var _this4 = this;
          this.apiService.presentLoader("Please Wait...");
          var postedData = {
            bid_id: bid_id,
            counter_status: 2
          };
          this.apiService.updateCounterStatus(postedData).then(function (res) {
            _this4.apiService.dismissLoader();
            console.log(res);
            _this4.getListBids();
          })["catch"](function (err) {
            _this4.getListBids();
            _this4.apiService.dismissLoader();
            console.log(err);
          });
        }
      }, {
        key: "openModal",
        value: function openModal(image) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var modal;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.log(image);
                  _context.next = 3;
                  return this.modalCtrl.create({
                    component: _imageprev_imageprev_page__WEBPACK_IMPORTED_MODULE_5__["ImageprevPage"],
                    componentProps: {
                      img: image
                    }
                  });
                case 3:
                  modal = _context.sent;
                  _context.next = 6;
                  return modal.present();
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }]);
    }();
    TradeINRPage.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };
    TradeINRPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-trade-inr",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./trade-inr.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/trade-inr/trade-inr.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./trade-inr.page.scss */"./src/app/trade-inr/trade-inr.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], TradeINRPage);

    /***/
  })
}]);
//# sourceMappingURL=trade-inr-trade-inr-module-es5.js.map