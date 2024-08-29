function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculator-calculator-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.page.html": (
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.page.html ***!
    \***************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalculatorCalculatorPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header class=\"\">\n\t<ion-toolbar mode=\"ios\" style=\"background: transparent; --background: transparent\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Calculator (PMT)</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-row *ngIf=\"modalStatus == true\" class=\"overlay\"\n\tstyle=\"position: absolute;z-index: 9999;background: #000;height: 100%;width: 100%;top: 0;opacity: 0.7;\"></ion-row>\n<ion-row *ngIf=\"modalStatus == true\"\n\tstyle=\"background: #fffbd6;position: absolute;z-index: 9999999;top: 9%;width: 95%;height: 80%;border-radius: 23px;border: 2px solid #92b243;overflow: hidden;/* top: 5%; */margin: 0 auto;\">\n\t<ion-row style=\"width: 100%;\">\n\t\t<ion-row style=\"height: 40px;width: 100%;\">\n\t\t\t<p style=\"width: 100%;text-align: right;margin-right: 20px;font-weight: bold;color: #92b243;\"\n\t\t\t\t(click)=\"updateModel()\">Close</p>\n\t\t</ion-row>\n\t\t<ion-content class=\"\">\n\t\t\t<div>\n\t\t\t\t<ion-row style=\"padding-top: 14px;\">\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<ion-item class=\"select\"\n\t\t\t\t\t\t\tstyle=\"background: #fffbd6;--background: #fffbd6;border: 4px solid #92b243;border-radius: 9px;margin-right: 5px;\">\n\t\t\t\t\t\t\t<!-- <ion-label>Region</ion-label> -->\n\t\t\t\t\t\t\t<ion-select placeholder=\"Region\" (ionChange)=\"changecountry($event)\">\n\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let region of regions\">{{ region }}</ion-select-option>\n\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<ion-item class=\"select\"\n\t\t\t\t\t\t\tstyle=\"background: #fffbd6;--background: #fffbd6;border: 4px solid #92b243;border-radius: 9px;\">\n\t\t\t\t\t\t\t<!-- <ion-label>Country</ion-label> -->\n\t\t\t\t\t\t\t<ion-select placeholder=\"Country\" (ionChange)=\"getPortList($event)\">\n\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let country of countries\">{{ country }}</ion-select-option>\n\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ng-container>\n\t\t\t\t\t<ion-row class=\"ion-padding table-row padd-5 paddingBottom100\" style=\"padding: 0px;margin: 0px;\">\n\t\t\t\t\t\t<ion-col class=\"price-table dashboard\">\n\n\t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th class=\" type-columns black\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-weight: bold;width:37%;font-size: 14px !important;text-align: left;padding-left: 12px;\">\n\t\t\t\t\t\t\t\t\t\t\tPort\n\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\" type-columns black\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-weight: bold;width:30%;font-size: 14px !important;text-align: left;\">\n\t\t\t\t\t\t\t\t\t\t\tQTY(MT)\n\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\" type-columns black\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-weight: bold;width:30%;font-size: 14px !important\">\n\t\t\t\t\t\t\t\t\t\t\tFreight PMT\n\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\n\t\t\t\t\t\t\t\t<tbody class=\"user_price\">\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let list of ports\" class=\"green\">\n\t\t\t\t\t\t\t\t\t\t<td class=\"sticky-col first-col left pl-10\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 14px !important;width: 40%\">\n\t\t\t\t\t\t\t\t\t\t\t{{ list.port }}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"type-columns\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"width:180px;border: none ;--border: none;font-size: 14px !important;\">\n\t\t\t\t\t\t\t\t\t\t\t25\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"type-columns\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"width:180px;border: none ;--border: none;font-size: 14px !important;\">\n\t\t\t\t\t\t\t\t\t\t\t${{ (list.freight_21MT_1MT) }} - ${{ list.freight_25MT_1MT }}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr *ngIf=\"isNull == true\">\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\tNo port found\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</ion-content>\n\t</ion-row>\n</ion-row>\n<ion-content id=\"content\" class=\"\" style=\"height: 100%;\">\n\n\t<!-- <div style=\"height: 90%;overflow: scroll;\">\n\n\t\t<ion-item>\n\t\t\t<ion-label>Rice</ion-label>\n\t\t\t<ion-select placeholder=\"Select One\" (ionChange)=\"changeQuality($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let Qualities of QualityMaster\" value=\"{{ Qualities.id }}\">{{ Qualities.quality}} {{ Qualities?.quality_name }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label  class=\"inputlabel\">Cost of Rice Ex Mill Min Price*</ion-label>\n\t\t\t<ion-input placeholder=\"Cost of Rice Ex Mill Min Price\" [(ngModel)]=\"riceMinPrice\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label  class=\"inputlabel\">Cost of Rice Ex Mill Max Price*</ion-label>\n\t\t\t<ion-input placeholder=\"Cost of Rice Ex Mill Max Price\" [(ngModel)]=\"riceMaxPrice\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label  class=\"inputlabel\">Transport Min Price</ion-label>\n\t\t\t<ion-input placeholder=\"Transport Min Price\" [(ngModel)]=\"transportMin\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label  class=\"inputlabel\">Transport Max Price</ion-label>\n\t\t\t<ion-input placeholder=\"Transport Max Price\" [(ngModel)]=\"transportMax\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label  class=\"inputlabel\">Bag Cost including Sortexing & packing labour*</ion-label>\n\t\t\t<ion-input placeholder=\"Bag Cost including Sortexing & packing labour*\" [(ngModel)]=\"bagcost\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label  class=\"inputlabel\">All Local charges( CFS Handling, B/L, THC ), Finance cost*</ion-label>\n\t\t\t<ion-input placeholder=\"All Local charges( CFS Handling, B/L, THC ), Finance cost*\" [(ngModel)]=\"localCharges\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label  class=\"inputlabel\">Today's Dollar rate *</ion-label>\n\t\t\t<ion-input placeholder=\"Today's Dollar rate *\" [(ngModel)]=\"dollaerate\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label>Supplier Markup% +SNTC Service charge (1 - 20%)*</ion-label>\n\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"supplierCharge\">\n\t\t\t\t<ion-select-option value=\"1\">1</ion-select-option>\n\t\t\t\t<ion-select-option value=\"2\">2</ion-select-option>\n\t\t\t\t<ion-select-option value=\"3\">3</ion-select-option>\n\t\t\t\t<ion-select-option value=\"4\">4</ion-select-option>\n\t\t\t\t<ion-select-option value=\"5\">5</ion-select-option>\n\t\t\t\t<ion-select-option value=\"6\">6</ion-select-option>\n\t\t\t\t<ion-select-option value=\"7\">7</ion-select-option>\n\t\t\t\t<ion-select-option value=\"8\">8</ion-select-option>\n\t\t\t\t<ion-select-option value=\"9\">9</ion-select-option>\n\t\t\t\t<ion-select-option value=\"10\">10</ion-select-option>\n\t\t\t\t<ion-select-option value=\"11\">11</ion-select-option>\n\t\t\t\t<ion-select-option value=\"12\">12</ion-select-option>\n\t\t\t\t<ion-select-option value=\"13\">13</ion-select-option>\n\t\t\t\t<ion-select-option value=\"14\">14</ion-select-option>\n\t\t\t\t<ion-select-option value=\"15\">15</ion-select-option>\n\t\t\t\t<ion-select-option value=\"16\">16</ion-select-option>\n\t\t\t\t<ion-select-option value=\"17\">17</ion-select-option>\n\t\t\t\t<ion-select-option value=\"18\">18</ion-select-option>\n\t\t\t\t<ion-select-option value=\"19\">19</ion-select-option>\n\t\t\t\t<ion-select-option value=\"20\">20</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label>Bag size*</ion-label>\n\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"bagSize\" (ionChange)=\"bagChange($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let data of USD_master\" value=\"{{ data.bag_size }}_{{ data.bag_type }}_{{ data.PMT_USD }}\" >{{ data.bag_size }}_{{ data.bag_type }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t\n\t\t<div>\n\t\t\t<p>Total: (in ₹): {{total}}</p>\n\t\t\t<p>After exchange rate: (in $): {{exchange}}</p>\n\t\t\t<p>FOB Prices: {{FOB}}</p>\n\t\t</div>\n\t\t<ion-button color=\"success\" expand=\"full\" shape=\"round\" (click)=\"save()\">Calculate Now</ion-button>\n\t\t\n\t</div> -->\n\t<div style=\"height: 90%;overflow: scroll;\" class=\"calc\">\n\n\t\t<ion-row style=\"justify-content: center;\">\n\t\t\t<div style=\"font-weight: bold;\">Cost of Rice1: &nbsp;</div> ₹{{costOfRice1}}\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item style=\"margin-right: 10px;\">\n\t\t\t\t\t<ion-label class=\"inputlabel\">Rice cost 1 *</ion-label>\n\t\t\t\t\t<ion-input style=\"border-bottom: 0px; --border-bottom: 0px\" type=\"number\" placeholder=\"\"\n\t\t\t\t\t\t[(ngModel)]=\"riceone\" maxlength=\"5\" max=\"5\" [attr.maxlength]=\"5\"\n\t\t\t\t\t\t(ionChange)=\"checkInput($event , 'one')\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"inputlabel\">%</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"\" [(ngModel)]=\"riceonepercentage\" (ionChange)=\"calculateData()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"justify-content: center;font-weight: bold;color: red;\" *ngIf=\"blendError1 == true\">Cost Rice 1\n\t\t\tmust be in 5 Digit.</ion-row>\n\n\t\t<ion-row style=\"justify-content: center;\">\n\t\t\t<div style=\"font-weight: bold;\">Cost of Rice2: &nbsp;</div> ₹{{costOfRice2}}\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item style=\"margin-right: 10px;\">\n\t\t\t\t\t<ion-label class=\"inputlabel\">Blend Rice 2 *</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"\" [(ngModel)]=\"ricetwo\" maxlength=\"5\" type=\"number\" max=\"5\"\n\t\t\t\t\t\t[attr.maxlength]=\"5\" (ionChange)=\"checkInput($event , 'two')\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"inputlabel\">%</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"\" type=\"number\" [(ngModel)]=\"ricetwopercentage\"\n\t\t\t\t\t\t(ionChange)=\"calculateData()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"justify-content: center;font-weight: bold;color: red;\" *ngIf=\"blendError2\">Blend rice 2 must be\n\t\t\tin 5 Digit.</ion-row>\n\n\t\t<ion-row style=\"justify-content: center;\">\n\t\t\t<div style=\"font-weight: bold;\">Cost of Rice3: &nbsp;</div> ₹{{costOfRice3}}\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item style=\"margin-right: 10px;\">\n\t\t\t\t\t<ion-label class=\"inputlabel\">Blend Rice 3 *</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"\" type=\"number\" [(ngModel)]=\"ricethree\" maxlength=\"5\" max=\"5\"\n\t\t\t\t\t\t[attr.maxlength]=\"5\" (ionChange)=\"checkInput($event , 'three')\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"inputlabel\">%</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"\" type=\"number\" [(ngModel)]=\"ricethreepercentage\"\n\t\t\t\t\t\t(ionChange)=\"calculateData()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"justify-content: center;font-weight: bold;color: red;\" *ngIf=\"blendError3\">Blend rice 3 must be\n\t\t\tin 5 Digit.</ion-row>\n\n\t\t<ion-row style=\"justify-content: center;\">\n\t\t\t<div style=\"font-weight: bold;\">Cost of Rice4: &nbsp;</div> ₹{{costOfRice4}}\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item style=\"margin-right: 10px;\">\n\t\t\t\t\t<ion-label class=\"inputlabel\">Blend Rice 4 *</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"\" type=\"number\" [(ngModel)]=\"ricefour\" maxlength=\"5\" max=\"5\"\n\t\t\t\t\t\t[attr.maxlength]=\"5\" (ionChange)=\"checkInput($event , 'four')\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"inputlabel\">%</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"\" type=\"number\" [(ngModel)]=\"ricefourpercentage\"\n\t\t\t\t\t\t(ionChange)=\"calculateData()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"justify-content: center;font-weight: bold;color: red;\" *ngIf=\"blendError4\">Blend rice 4 must be\n\t\t\tin 5 Digit.</ion-row>\n\n\n\t\t<ion-row style=\"margin-bottom: 20px;\">\n\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t<li style=\"font-weight: bold;float: left;\">Avg. Rice Cost PMT: </li>\n\t\t\t\t<li style=\"float: right;\"> ₹{{ AverageRiceCostPMT }}</li>\n\t\t\t</ul>\n\t\t\t<!-- <div style=\"font-weight: bold;\">Avg. Rice Cost PMT</div>: {{AverageRiceCostPMT}} -->\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"inputlabel\">Processing Charges PMT</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"Processing Charges PMT\" type=\"number\" [(ngModel)]=\"processingCharges\"\n\t\t\t\t\t\t(ionChange)=\"calculateData()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label>Bag size*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"bagSize\" (ionChange)=\"bagChange($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let data of USD_master\"\n\t\t\t\t\t\t\tvalue=\"{{ data.bag_size }}_{{ data.bag_type }}_{{ data.bag_cost }}\">{{ data.bag_size }} {{\n\t\t\t\t\t\t\tdata.bag_type }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- <div>\n\t\t\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t\t\t<li style=\"font-weight: bold;float: left;\">Bag cost PMT: </li>\n\t\t\t\t\t\t<li style=\"float: right;\"> ₹{{ bagSizePrice }}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row style=\"margin-bottom: 20px;\">\n\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t<li style=\"font-weight: bold;float: left;\">Bag cost PMT: </li>\n\t\t\t\t<li style=\"float: right;\"> ₹{{ bagSizePrice }}</li>\n\t\t\t</ul>\n\t\t</ion-row>\n\n\t\t<ion-row style=\"margin-bottom: 20px;\">\n\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t<li style=\"font-weight: bold;float: left;\">PMT: </li>\n\t\t\t\t<li style=\"float: right;\"> ₹{{PMT}}</li>\n\t\t\t</ul>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"inputlabel\">Domestic Transport Upto Mundra PMT</ion-label>\n\t\t\t\t\t<ion-input type=\"number\" placeholder=\"Domestic Transport Upto Mundra PMT\"\n\t\t\t\t\t\t[(ngModel)]=\"domesticTransport\" (ionChange)=\"calculateData()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"margin-bottom: 20px;\">\n\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t<li style=\"font-weight: bold;float: left;\">Port exp (CHA, THC, B/l)) PMT: </li>\n\t\t\t\t<li style=\"float: right;\"> ₹{{DefaultValues?.localcharges}}</li>\n\t\t\t</ul>\n\t\t</ion-row>\n\t\t<ion-row style=\"margin-bottom: 20px;\">\n\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t<li style=\"font-weight: bold;float: left;\">Finance cost (Bank exp/Ins) PMT: </li>\n\t\t\t\t<li style=\"float: right;\"> ₹{{ DefaultValues?.financecost }}</li>\n\t\t\t</ul>\n\t\t</ion-row>\n\t\t<ion-row style=\"margin-bottom: 20px;\">\n\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t<li style=\"font-weight: bold;float: left;\">Total Cost upto Port: </li>\n\t\t\t\t<li style=\"float: right;\"> ₹{{ totalPriceINR }}</li>\n\t\t\t</ul>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"inputlabel\">Today's US Dollar Rate $</ion-label>\n\t\t\t\t\t<ion-input type=\"number\" (ionChange)=\"save()\" placeholder=\"Today's US Dollar Rate $\"\n\t\t\t\t\t\t[(ngModel)]=\"dollaerate\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t\t<li style=\"font-weight: bold;float: left;\">FOB in USD: </li>\n\t\t\t\t\t<li style=\"float: right;\"> ${{PMTusd}}</li>\n\t\t\t\t</ul>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"inputlabel\">LC Charges PMT in $ (Optional) </ion-label>\n\t\t\t\t\t<ion-input type=\"number\" (ionChange)=\"save()\" placeholder=\"L/C Charges\"\n\t\t\t\t\t\t[(ngModel)]=\"lccharges\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"9\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"inputlabel\">Ocean Freight PMT in $ (Optional)</ion-label>\n\t\t\t\t\t<ion-input type=\"number\" (ionChange)=\"save()\" placeholder=\"Ocean Freight Per MT\"\n\t\t\t\t\t\t[(ngModel)]=\"oceanfreight\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"3\">\n\t\t\t\t<p (click)=\"presentModel()\" style=\"padding: 0;margin: 0;float: right;color: #92b243;\">View All</p>\n\t\t\t</ion-col>\n\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"inputlabel\">Third Party Inspection PMT in $\n\t\t\t\t\t\t(Optional)</ion-label>\n\t\t\t\t\t<ion-input type=\"number\" (ionChange)=\"save()\" placeholder=\"Third Party Inspection\"\n\t\t\t\t\t\t[(ngModel)]=\"thirdpartyinspection\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"inputlabel\">Legalisation Charges PMT in $\n\t\t\t\t\t\t(Optional)</ion-label>\n\t\t\t\t\t<ion-input type=\"number\" (ionChange)=\"save()\" placeholder=\"Legalisation Charges\"\n\t\t\t\t\t\t[(ngModel)]=\"legalisationcharges\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"inputlabel\">COC PMT in $ (Optional)</ion-label>\n\t\t\t\t\t<ion-input type=\"number\" (ionChange)=\"save()\" placeholder=\"COC\" [(ngModel)]=\"coc\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"inputlabel\">EIA Cost PMT in $ (For EU Only) (Optional\n\t\t\t\t\t\t)</ion-label>\n\t\t\t\t\t<ion-input type=\"number\" (ionChange)=\"save()\" placeholder=\"EIA cost ( for EU Only )\"\n\t\t\t\t\t\t[(ngModel)]=\"eiacost\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label>Markup%*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"supplierCharge\" selectedText=\"{{supplierCharge}}\"\n\t\t\t\t\t\t(ionChange)=\"calculateData()\">\n\t\t\t\t\t\t<ion-select-option value=\"1\">1</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"2\">2</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"3\">3</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"4\">4</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"5\">5</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"6\">6</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"7\">7</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"8\">8</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"9\">9</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"10\">10</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ul style=\"padding: 0px;list-style: none;margin: 0px;width: 100%\">\n\t\t\t\t<li>\n\t\t\t\t\t<p style=\"font-weight: bold;padding: 0;margin: 0;margin-bottom: 5px;\">FINAL CIF</p>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<p style=\"width: 40%;float: left;padding: 0;margin: 0;;\">FOB Cost </p>:${{lastFOBAmount}}\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<p style=\"width: 40%;float: left;padding: 0;margin: 0;;\">CIF Cost </p>:${{finalCIFPrice}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</ion-row>\n\n\t\t<ion-row style=\"position: fixed;z-index: 9999999;bottom: 100px;right: 0;\">\n\t\t\t<ion-col style=\"text-align: center;\">\n\t\t\t\t<ion-button (click)=\"calculateData()\"\n\t\t\t\t\tstyle=\"font-size: 27px;height: 60px;width: 60px;--border-radius: 100px;color: white; --background: #92b243;\">=</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/calculator/calculator-routing.module.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/calculator/calculator-routing.module.ts ***!
    \*********************************************************/
  /*! exports provided: CalculatorPageRoutingModule */
  /***/
  function srcAppCalculatorCalculatorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CalculatorPageRoutingModule", function () {
      return CalculatorPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _calculator_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./calculator.page */"./src/app/calculator/calculator.page.ts");
    var routes = [{
      path: '',
      component: _calculator_page__WEBPACK_IMPORTED_MODULE_3__["CalculatorPage"]
    }];
    var CalculatorPageRoutingModule = /*#__PURE__*/_createClass(function CalculatorPageRoutingModule() {
      _classCallCheck(this, CalculatorPageRoutingModule);
    });
    CalculatorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CalculatorPageRoutingModule);

    /***/
  }),
  /***/"./src/app/calculator/calculator.module.ts": (
  /*!*************************************************!*\
    !*** ./src/app/calculator/calculator.module.ts ***!
    \*************************************************/
  /*! exports provided: CalculatorPageModule */
  /***/
  function srcAppCalculatorCalculatorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CalculatorPageModule", function () {
      return CalculatorPageModule;
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
    var _calculator_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./calculator-routing.module */"./src/app/calculator/calculator-routing.module.ts");
    /* harmony import */
    var _calculator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./calculator.page */"./src/app/calculator/calculator.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var CalculatorPageModule = /*#__PURE__*/_createClass(function CalculatorPageModule() {
      _classCallCheck(this, CalculatorPageModule);
    });
    CalculatorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _calculator_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalculatorPageRoutingModule"]],
      declarations: [_calculator_page__WEBPACK_IMPORTED_MODULE_6__["CalculatorPage"]]
    })], CalculatorPageModule);

    /***/
  }),
  /***/"./src/app/calculator/calculator.page.scss": (
  /*!*************************************************!*\
    !*** ./src/app/calculator/calculator.page.scss ***!
    \*************************************************/
  /*! exports provided: default */
  /***/
  function srcAppCalculatorCalculatorPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\nion-item {\n  border: 1px solid #e1e1e1;\n  border-radius: 100px;\n}\n\n.item-native {\n  background: transparent;\n  background-color: transparent;\n  --background: transparent;\n  --background-color: transparent;\n}\n\n.packingSelect .select-text {\n  display: none;\n}\n\nion-content {\n  padding: 10px;\n}\n\n.tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\n.header-title {\n  color: #FFF;\n}\n\n.header-md::after {\n  background: none;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-toolbar ion-icon {\n  color: #000;\n}\n\n.header-title {\n  color: #000;\n}\n\nion-title {\n  padding: 0;\n  text-align: center;\n}\n\n.ion-card {\n  width: 900px;\n}\n\nion-card {\n  width: 17%;\n  text-align: center;\n  float: left;\n}\n\n.tf-tree {\n  clear: both;\n}\n\n.ioncard1 {\n  background: #d8f9fe;\n}\n\n.ioncard2 {\n  background: #d8f9fe;\n}\n\n.ioncard3 {\n  background: #d8f9fe;\n}\n\n.ioncard4 {\n  background: #d8f9fe;\n}\n\n.ioncard5 {\n  background: #d8f9fe;\n}\n\ntable,\nthead,\ntbody {\n  border: 1px solid #eeeeee;\n}\n\ntable {\n  width: 100%;\n}\n\ntable thead th {\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\ntable tbody tr {\n  border-bottom: 1px solid #ededed;\n}\n\ntable tbody td {\n  width: 50%;\n  text-align: center;\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.active {\n  background: #c9a27c;\n  --background: #c9a27c;\n  background-color: #c9a27c;\n  --background-color: #c9a27c;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n}\n\n.price-table table thead tr th {\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n  color: #000;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n  border-right: 1px solid #dfdfdf;\n}\n\ntable,\ntable thead,\ntable tbody,\ntable thead th,\ntable tbody tr,\ntable tbody tr td {\n  border: 0 !important;\n}\n\ntable thead,\ntable tbody,\ntable tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n\ntable thead tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tbody tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tr th {\n  padding: 0;\n  margin: 0;\n}\n\ntable tbody tr td {\n  text-align: left;\n  margin-left: 20px;\n  padding-left: 20px;\n}\n\n.pl-60 {\n  padding-left: 60px !important;\n}\n\n.pl-10 {\n  padding-left: 10px !important;\n}\n\n.left {\n  text-align: left;\n}\n\n.active {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.segment-button-checked {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.scroll-arrow {\n  position: absolute;\n  margin-top: 3.2%;\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 0px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.ios .header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 5px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.header-ios ion-toolbar {\n  border: 0px;\n  --border-width: 0px ;\n}\n\n.ios .type-columns {\n  border: 0px solid transparent !important;\n  --border: 0px solid transparent !important;\n}\n\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.basmatiState {\n  margin: 10px 30px 0px 30px;\n}\n\n.ricetype {\n  color: #000;\n  font-size: 30px;\n  font-family: GlacialIndifference-bold;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.font-17 {\n  font-size: 14px;\n  font-family: GlacialIndifference-bold;\n}\n\n.green {\n  color: #92B243;\n}\n\n.green td {\n  text-transform: capitalize;\n  font-size: 18px !important;\n}\n\n.porttitle {\n  font-size: 20px;\n}\n\nion-segment ion-segment-button ion-label {\n  margin: 0;\n  padding: 0;\n  margin-top: -2px;\n}\n\n.imageprev {\n  min-height: 200px;\n  max-height: 200px;\n  height: 200px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.paddingBottom100 {\n  padding-bottom: 100px;\n}\n\n.alert-radio-label .sc-ion-alert-md {\n  --padding-left: 20px;\n}\n\n.calc {\n  padding: 0px 10px;\n}\n\n.calc ion-col {\n  padding: 0;\n}\n\n.calc ion-row {\n  margin: 7px 0px;\n}\n\n:host(.item-interactive.ion-valid) {\n  --highlight-background: transparent;\n  --highlight-background: transparent !important;\n}\n\nion-item {\n  --highlight-background: transparent;\n  --highlight-background: transparent !important;\n}\n\n.inputlabel {\n  font-size: 15px !important;\n}\n\nion-label {\n  margin-top: 0px;\n  padding-top: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9jYWxjdWxhdG9yL2NhbGN1bGF0b3IucGFnZS5zY3NzIiwic3JjL2FwcC9jYWxjdWxhdG9yL2NhbGN1bGF0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0k7RUFDSSxlQUFBO0FDQ1I7O0FER0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUtJLHlCQUFBO0VBQ0Esb0JBQUE7QUNKSjs7QURVQTtFQUNJLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDUEo7O0FEV0k7RUFDSSxhQUFBO0FDUlI7O0FEYUE7RUFDSSxhQUFBO0FDVko7O0FEY0E7RUFDSSxrQkFBQTtBQ1hKOztBRGNBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNYSjs7QURhSTtFQUNJLGVBQUE7QUNYUjs7QURlQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ1pKOztBRGVBO0VBQ0ksV0FBQTtBQ1pKOztBRGVBO0VBQ0ksZ0JBQUE7QUNaSjs7QURlQTtFQUNJLG1CQUFBO0FDWko7O0FEY0k7RUFDSSxXQUFBO0FDWlI7O0FEZ0JBO0VBQ0ksV0FBQTtBQ2JKOztBRGdCQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ2JKOztBRGdCQTtFQUNJLFlBQUE7QUNiSjs7QURnQkE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDYko7O0FEZ0JBO0VBQ0ksV0FBQTtBQ2JKOztBRGdCQTtFQUNJLG1CQUFBO0FDYko7O0FEZ0JBO0VBQ0ksbUJBQUE7QUNiSjs7QURnQkE7RUFDSSxtQkFBQTtBQ2JKOztBRGdCQTtFQUNJLG1CQUFBO0FDYko7O0FEZ0JBO0VBQ0ksbUJBQUE7QUNiSjs7QURnQkE7OztFQUdJLHlCQUFBO0FDYko7O0FEZ0JBO0VBQ0ksV0FBQTtBQ2JKOztBRGdCUTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7QUNkWjs7QURtQlE7RUFDSSxnQ0FBQTtBQ2pCWjs7QURvQlE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDbEJaOztBRHVCQTtFQUNJLDBCQUFBO0FDcEJKOztBRHVCQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDcEJKOztBRDBCSTtFQUNJLFdBQUE7RUE2QkEsZUFBQTtBQ25EUjs7QUR5Qlk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ3ZCaEI7O0FEMEJnQjtFQUVJLCtCQUFBO0FDekJwQjs7QUQrQlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQzdCaEI7O0FEK0JnQjtFQUNJLGVBQUE7RUFHQSwrQkFBQTtBQy9CcEI7O0FEd0NBOzs7Ozs7RUFNSSxvQkFBQTtBQ3JDSjs7QUR3Q0E7OztFQUdJLGtDQUFBO0VBQ0Esd0NBQUE7QUNyQ0o7O0FEd0NBO0VBQ0ksMkNBQUE7QUNyQ0o7O0FEd0NBO0VBQ0ksMkNBQUE7QUNyQ0o7O0FEd0NBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUNyQ0o7O0FEMkNZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDeENoQjs7QUQ4Q0E7RUFDSSw2QkFBQTtBQzNDSjs7QUQ4Q0E7RUFDSSw2QkFBQTtBQzNDSjs7QUQ4Q0E7RUFDSSxnQkFBQTtBQzNDSjs7QUQ4Q0E7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUMzQ0o7O0FEOENBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0FDM0NKOztBRDhDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDM0NKOztBRDhDQTtFQUNJLHlDQUFBO0VBQ0EsaURBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUM3Q0o7O0FEZ0RBO0VBQ0kseUNBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQy9DSjs7QURrREE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUMvQ0o7O0FEbURJO0VBQ0ksd0NBQUE7RUFDQSwwQ0FBQTtBQ2hEUjs7QURvREE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsUUFBQTtBQ2xESjs7QURxREE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsUUFBQTtBQ25ESjs7QURzREE7RUFDSSwwQkFBQTtBQ25ESjs7QURzREE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQ25ESjs7QURzREE7RUFDSSxlQUFBO0VBQ0EscUNBQUE7QUNuREo7O0FEc0RBO0VBQ0ksY0FBQTtBQ25ESjs7QURxREk7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0FDbkRSOztBRHVEQTtFQUNJLGVBQUE7QUNwREo7O0FEeURRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ3REWjs7QUQyREE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ3hESjs7QUQyREE7RUFDSSxhQUFBO0FDeERKOztBRDJEQTtFQUNJLGNBQUE7QUN4REo7O0FEMkRBO0VBQ0kscUJBQUE7QUN4REo7O0FENERJO0VBQ0ksb0JBQUE7QUN6RFI7O0FENkRBO0VBQ0ksaUJBQUE7QUMxREo7O0FENERJO0VBQ0ksVUFBQTtBQzFEUjs7QUQ2REk7RUFDSSxlQUFBO0FDM0RSOztBRCtEQTtFQUNJLG1DQUFBO0VBQ0EsOENBQUE7QUM1REo7O0FEK0RBO0VBQ0ksbUNBQUE7RUFDQSw4Q0FBQTtBQzVESjs7QUQrREE7RUFDSSwwQkFBQTtBQzVESjs7QUQrREE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQzVESiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGYtdHJlZS5leGFtcGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDk0ZjU4O1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG5pb24taXRlbSB7XG4gICAgLy8gYm9yZGVyOiAzcHggc29saWQgIzkyYjI0MztcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjZmZmYmQ2O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAvLyBtaW4taGVpZ2h0OiBhdXRvO1xuICAgIC8vIGhlaWdodDogYXV0bztcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wYWNraW5nU2VsZWN0IHtcbiAgICAuc2VsZWN0LXRleHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxufVxuXG5pb24tY29udGVudCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAvLyBib3JkZXI6IDEwcHggc29saWQgI2ZmZmJkNjtcbn1cblxuLnRmLXRyZWUuZXhhbXBsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogI0ZGRjtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlvbi1jYXJkIHtcbiAgICB3aWR0aDogOTAwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgICB3aWR0aDogMTclO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLnRmLXRyZWUge1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4uaW9uY2FyZDEge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkMiB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDQge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkNSB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxudGFibGUsXG50aGVhZCxcbnRib2R5IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICB0aGVhZCB7XG4gICAgICAgIHRoIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FwaXRhbGl6ZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNjOWEyN2M7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzlhMjdjO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWEyN2M7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjYzlhMjdjO1xufVxuXG4ucHJpY2UtdGFibGUge1xuXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG5cbiAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxufVxuXG50YWJsZSxcbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHksXG50YWJsZSB0aGVhZCB0aCxcbnRhYmxlIHRib2R5IHRyLFxudGFibGUgdGJvZHkgdHIgdGQge1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50XG59XG5cbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHksXG50YWJsZSB0Ym9keSB0ciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0aGVhZCB0ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGJvZHkgdHIge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRyIHRoIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxudGFibGUge1xuICAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucGwtNjAge1xuICAgIHBhZGRpbmctbGVmdDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4ucGwtMTAge1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzkyQjI0MztcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDMuMiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAzMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgLy8gYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIC0td2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIC0tbWluLXdpZHRoOiBhdXRvO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xufVxuXG4uaW9zIC5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtaW4taGVpZ2h0OiAzMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgLy8gYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIC0td2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIC0tbWluLXdpZHRoOiBhdXRvO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweFxufVxuXG4uaW9zIHtcbiAgICAudHlwZS1jb2x1bW5zIHtcbiAgICAgICAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgLS1ib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnNjcm9sbC1hcnJvdyAubGVmdGljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMThweDtcbiAgICB0b3A6IDBweDtcbn1cblxuLnNjcm9sbC1hcnJvdyAucmlnaHRpY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIHRvcDogMHB4O1xufVxuXG4uYmFzbWF0aVN0YXRlIHtcbiAgICBtYXJnaW46IDEwcHggMzBweCAwcHggMzBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IEdsYWNpYWxJbmRpZmZlcmVuY2UtYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZvbnQtMTcge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xufVxuXG4uZ3JlZW4ge1xuICAgIGNvbG9yOiAjOTJCMjQzO1xuXG4gICAgdGQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ucG9ydHRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHhcbn1cblxuaW9uLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmltYWdlcHJldiB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZGRpbmdCb3R0b20xMDAge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLmFsZXJ0LXJhZGlvLWxhYmVsIHtcbiAgICAuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgICAgICAgLS1wYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgfVxufVxuXG4uY2FsYyB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG5cbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMFxuICAgIH1cblxuICAgIGlvbi1yb3cge1xuICAgICAgICBtYXJnaW46IDdweCAwcHhcbiAgICB9XG59XG5cbjpob3N0KC5pdGVtLWludGVyYWN0aXZlLmlvbi12YWxpZCkge1xuICAgIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXRsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufSIsIi50Zi10cmVlLmV4YW1wbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmJhY2stYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgY29sb3I6ICNGRkY7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhY2tpbmdTZWxlY3QgLnNlbGVjdC10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udGYtdHJlZS5leGFtcGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5iYWNrLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM0OTRmNTg7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW9uLXRvb2xiYXIgaW9uLWljb24ge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5pb24tdGl0bGUge1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pb24tY2FyZCB7XG4gIHdpZHRoOiA5MDBweDtcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogMTclO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udGYtdHJlZSB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uaW9uY2FyZDEge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDIge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDMge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDQge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDUge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG50YWJsZSxcbnRoZWFkLFxudGJvZHkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGFibGUgdGhlYWQgdGgge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbn1cbnRhYmxlIHRib2R5IHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG59XG50YWJsZSB0Ym9keSB0ZCB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWVlZWU7XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjYzlhMjdjO1xuICAtLWJhY2tncm91bmQ6ICNjOWEyN2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWEyN2M7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3Yztcbn1cblxuLnByaWNlLXRhYmxlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB7XG4gIGhlaWdodDogMzRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6ICMwMDA7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGJvZHkgdHIgdGQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG5cbnRhYmxlLFxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRoZWFkIHRoLFxudGFibGUgdGJvZHkgdHIsXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0aGVhZCxcbnRhYmxlIHRib2R5LFxudGFibGUgdGJvZHkgdHIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0aGVhZCB0ciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRib2R5IHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbn1cblxudGFibGUgdHIgdGgge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnBsLTYwIHtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0xMCB7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGwtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDMuMiU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWluLWhlaWdodDogMzFweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHdpZHRoOiBhdXRvO1xuICAtLXdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IGF1dG87XG4gIC0tbWluLXdpZHRoOiBhdXRvO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xufVxuXG4uaW9zIC5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLWhlaWdodDogMzFweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHdpZHRoOiBhdXRvO1xuICAtLXdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IGF1dG87XG4gIC0tbWluLXdpZHRoOiBhdXRvO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIGJvcmRlcjogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4IDtcbn1cblxuLmlvcyAudHlwZS1jb2x1bW5zIHtcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1ib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsLWFycm93IC5sZWZ0aWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgei1pbmRleDogOTk5OTk5O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMnB4O1xuICB3aWR0aDogMThweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5zY3JvbGwtYXJyb3cgLnJpZ2h0aWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHRvcDogMHB4O1xufVxuXG4uYmFzbWF0aVN0YXRlIHtcbiAgbWFyZ2luOiAxMHB4IDMwcHggMHB4IDMwcHg7XG59XG5cbi5yaWNldHlwZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBHbGFjaWFsSW5kaWZmZXJlbmNlLWJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZvbnQtMTcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBHbGFjaWFsSW5kaWZmZXJlbmNlLWJvbGQ7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiAjOTJCMjQzO1xufVxuLmdyZWVuIHRkIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4ucG9ydHRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG4uaW1hZ2VwcmV2IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wYWRkaW5nQm90dG9tMTAwIHtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG4uYWxlcnQtcmFkaW8tbGFiZWwgLnNjLWlvbi1hbGVydC1tZCB7XG4gIC0tcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uY2FsYyB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuLmNhbGMgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2FsYyBpb24tcm93IHtcbiAgbWFyZ2luOiA3cHggMHB4O1xufVxuXG46aG9zdCguaXRlbS1pbnRlcmFjdGl2ZS5pb24tdmFsaWQpIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/calculator/calculator.page.ts": (
  /*!***********************************************!*\
    !*** ./src/app/calculator/calculator.page.ts ***!
    \***********************************************/
  /*! exports provided: CalculatorPage */
  /***/
  function srcAppCalculatorCalculatorPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CalculatorPage", function () {
      return CalculatorPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../components.service */"./src/app/components.service.ts");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    var CalculatorPage = /*#__PURE__*/function () {
      function CalculatorPage(apiService, navCtrl, location, modalCtrl, componentService) {
        _classCallCheck(this, CalculatorPage);
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.location = location;
        this.modalCtrl = modalCtrl;
        this.componentService = componentService;
        this.total = '';
        this.exchange = '';
        this.FOB = '';
        this.selectedFiftykg = '';
        this.updatedUserPrice = 0;
        this.selectedBagId = '';
        this.riceone = '';
        this.riceonepercentage = 100;
        this.ricetwo = '';
        this.ricetwopercentage = '';
        this.ricethree = '';
        this.ricethreepercentage = '';
        this.ricefour = '';
        this.ricefourpercentage = '';
        this.processingCharges = '';
        this.bagSize = 0;
        this.domesticTransport = '';
        this.lccharges = '';
        this.oceanfreight = '';
        this.thirdpartyinspection = '';
        this.legalisationcharges = '';
        this.coc = '';
        this.eiacost = '';
        this.supplierCharge = 0;
        this.financecost = 0;
        this.PMT = 0;
        this.lastFOBAmount = 0;
        this.bagSizePrice = 0;
        this.costOfRice1 = 0;
        this.costOfRice2 = 0;
        this.costOfRice3 = 0;
        this.costOfRice4 = 0;
        this.totalPriceINR = 0;
        this.PMTusd = 0;
        this.finalCIFPrice = 0;
        this.beforeMarkup = 0;
        this.modalStatus = false;
        this.AverageRiceCostPMT = 0;
        this.blendError1 = false;
        this.blendError2 = false;
        this.blendError3 = false;
        this.blendError4 = false;
      }
      return _createClass(CalculatorPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCalculatorData();
          this.getTransportState();
        }
      }, {
        key: "calculateData",
        value: function calculateData() {
          if (this.ricefour != '') {
            if (this.ricefour.length < 5) {
              this.blendError4 = true;
            } else {
              this.blendError4 = false;
            }
          }
          this.riceone.length != 0 || this.riceone != '' ? this.riceone.length > 4 ? this.blendError1 = false : this.blendError1 = true : '';
          this.ricetwo.length != 0 || this.ricetwo != '' ? this.ricetwo.length > 4 ? this.blendError2 = false : this.blendError2 = true : '';
          this.ricethree.length != 0 || this.ricethree != '' ? this.ricethree.length > 4 ? this.blendError3 = false : this.blendError3 = true : '';
          this.ricefour.length != 0 || this.ricefour != '' ? this.ricefour.length > 4 ? this.blendError4 = false : this.blendError4 = true : '';
          if (this.riceone != undefined && this.riceonepercentage != undefined) {
            this.costOfRice1 = parseFloat((this.riceone * this.riceonepercentage / 100).toFixed(2));
          }
          if (this.ricetwo != undefined && this.ricetwopercentage != undefined) {
            this.costOfRice2 = this.ricetwo * this.ricetwopercentage / 100;
          }
          if (this.ricethree != undefined && this.ricethreepercentage != undefined) {
            this.costOfRice3 = this.ricethree * this.ricethreepercentage / 100;
          }
          if (this.ricefour != undefined && this.ricefourpercentage != undefined) {
            this.costOfRice4 = this.ricefour * this.ricefourpercentage / 100;
          }
          if (this.processingCharges == '') {
            this.PMT = this.costOfRice1 + this.costOfRice2 + this.costOfRice3 + this.costOfRice4 + this.updatedUserPrice;
            if (this.domesticTransport == '') {
              this.totalPriceINR = parseFloat(this.costOfRice1) + parseFloat(this.costOfRice2) + parseFloat(this.costOfRice3) + parseFloat(this.costOfRice4) + parseFloat(this.updatedUserPrice) + parseFloat(this.localCharges) + parseFloat(this.financecost);
              console.log(this.totalPriceINR);
            } else {
              this.totalPriceINR = parseFloat(this.costOfRice1) + parseFloat(this.costOfRice2) + parseFloat(this.costOfRice3) + parseFloat(this.costOfRice4) + parseFloat(this.updatedUserPrice) + parseFloat(this.domesticTransport) + parseFloat(this.localCharges) + parseFloat(this.financecost);
              console.log(this.totalPriceINR);
            }
          } else {
            this.PMT = this.costOfRice1 + this.costOfRice2 + this.costOfRice3 + this.costOfRice4 + parseFloat(this.processingCharges) + this.updatedUserPrice;
            if (this.domesticTransport == '') {
              this.totalPriceINR = parseFloat(this.costOfRice1) + parseFloat(this.costOfRice2) + parseFloat(this.costOfRice3) + parseFloat(this.costOfRice4) + parseFloat(this.updatedUserPrice) + parseFloat(this.localCharges) + parseFloat(this.financecost);
              console.log(this.totalPriceINR);
            } else {
              this.totalPriceINR = parseFloat(this.costOfRice1) + parseFloat(this.costOfRice2) + parseFloat(this.processingCharges) + parseFloat(this.costOfRice3) + parseFloat(this.costOfRice4) + parseFloat(this.updatedUserPrice) + parseFloat(this.domesticTransport) + parseFloat(this.localCharges) + parseFloat(this.financecost);
              console.log(this.totalPriceINR);
            }
            // this.totalPriceINR = (parseFloat(this.costOfRice1)+parseFloat(this.costOfRice2)+parseFloat(this.costOfRice3)+parseFloat(this.costOfRice4)+parseFloat(this.processingCharges)+parseFloat(this.updatedUserPrice)+parseFloat(this.localCharges)+parseFloat(this.financecost) );
            console.log(this.totalPriceINR);
          }
          var dollaerateData = 0;
          if (this.dollaerate == '' || this.dollaerate == undefined) {
            dollaerateData = 0;
          } else {
            dollaerateData = this.dollaerate;
          }
          // this.PMTusd = ((((this.totalPriceINR/this.dollaerate)*this.supplierCharge)/100)+(this.totalPriceINR/this.dollaerate)).toFixed(2);
          if (this.totalPriceINR / dollaerateData == Infinity) {
            this.PMTusd = 0;
          } else {
            this.PMTusd = (this.totalPriceINR / dollaerateData).toFixed(2);
          }
          // if( isNaN(Number(this.lccharges)) ){
          // 	this.lccharges = 0;
          // }
          // if( isNaN(Number(this.lccharges)) ){
          // 	this.lccharges = 0;
          // }
          // if( isNaN(Number(this.oceanfreight)) ){
          // 	this.oceanfreight = 0;
          // }
          // if( isNaN(Number(this.thirdpartyinspection)) ){
          // 	this.thirdpartyinspection = 0;
          // }
          // if( isNaN(Number(this.legalisationcharges)) ){
          // 	this.legalisationcharges = 0;
          // }
          // if( isNaN(Number(this.coc)) ){
          // 	this.coc = 0;
          // }
          // if( isNaN(Number(this.eiacost)) ){
          // 	this.eiacost = 0;
          // }
          this.beforeMarkup = Math.floor(parseFloat(this.PMTusd));
          var processedAmount = 0;
          if (this.lccharges != '') {
            processedAmount = Math.floor(processedAmount + parseFloat(this.lccharges));
          }
          if (this.oceanfreight != '') {
            processedAmount = Math.floor(processedAmount + parseFloat(this.oceanfreight));
          }
          if (this.thirdpartyinspection != '') {
            processedAmount = Math.floor(processedAmount + parseFloat(this.thirdpartyinspection));
          }
          if (this.legalisationcharges != '') {
            processedAmount = Math.floor(processedAmount + parseFloat(this.legalisationcharges));
          }
          if (this.coc != '') {
            processedAmount = Math.floor(processedAmount + parseFloat(this.coc));
          }
          if (this.eiacost != '') {
            processedAmount = Math.floor(processedAmount + parseFloat(this.eiacost));
          }
          this.beforeMarkup = this.beforeMarkup + processedAmount;
          if (this.oceanfreight != '') {
            this.lastFOBAmount = Math.floor(this.beforeMarkup - parseFloat(this.oceanfreight));
          } else {
            this.lastFOBAmount = this.beforeMarkup;
          }
          // this.beforeMarkup = Math.floor((parseFloat(this.PMTusd)+parseFloat(this.lccharges)+parseFloat(this.oceanfreight)+parseFloat(this.thirdpartyinspection)+parseFloat(this.legalisationcharges)+parseFloat(this.coc)+parseFloat(this.eiacost)));
          if (this.supplierCharge != '' || this.supplierCharge != 0) {
            console.log(this.lastFOBAmount * this.supplierCharge / 100 + this.lastFOBAmount);
            console.log(this.beforeMarkup * this.supplierCharge / 100 + this.beforeMarkup);
            this.lastFOBAmount = Math.round(this.lastFOBAmount * this.supplierCharge / 100 + this.lastFOBAmount);
            this.finalCIFPrice = Math.round(this.beforeMarkup * this.supplierCharge / 100 + this.beforeMarkup);
          } else {
            this.finalCIFPrice = this.beforeMarkup;
          }
          this.AverageRiceCostPMT = (parseFloat(this.costOfRice1) + parseFloat(this.costOfRice2) + parseFloat(this.costOfRice3) + parseFloat(this.costOfRice4)).toFixed(2);
        }
      }, {
        key: "getCalculatorData",
        value: function getCalculatorData() {
          var _this = this;
          this.apiService.getCalculatorDetails().then(function (res) {
            _this.QualityMaster = res.qualityMaster;
            _this.DefaultValues = res.defaultValues;
            _this.dollaerate = res.defaultValues.dollarvalue;
            _this.bagcost = res.defaultValues.bagcost;
            _this.localCharges = res.defaultValues.localcharges;
            _this.financecost = res.defaultValues.financecost;
            _this.USD_master = res.USD_master;
            console.log(_this.USD_master);
            _this.selectedFiftykg = res.fiftykg.PMT_USD;
          }, function (err) {});
        }
      }, {
        key: "save",
        value: function save() {
          var dollaerateData = 0;
          if (this.riceMinPrice == '' || this.riceMinPrice == undefined) {
            this.riceMinPrice = 0;
          }
          if (this.riceMaxPrice == '' || this.riceMaxPrice == undefined) {
            this.riceMaxPrice = 0;
          }
          if (this.transportMin == '' || this.transportMin == undefined) {
            this.transportMin = 0;
          }
          if (this.transportMax == '' || this.transportMax == undefined) {
            this.transportMax = 0;
          }
          if (this.bagcost == '' || this.bagcost == undefined) {
            this.bagcost = 0;
          }
          if (this.localCharges == '' || this.localCharges == undefined) {
            this.localCharges = 0;
          }
          if (this.dollaerate == '' || this.dollaerate == undefined) {
            dollaerateData = 0;
          } else {
            dollaerateData = this.dollaerate;
          }
          if (this.supplierCharge == '' || this.supplierCharge == undefined) {
            this.supplierCharge = 0;
          }
          var minValue = (parseFloat(this.riceMinPrice) + parseFloat(this.bagcost) + parseFloat(this.transportMin) + parseFloat(this.localCharges)).toFixed(2);
          var maxValue = (parseFloat(this.riceMaxPrice) + parseFloat(this.bagcost) + parseFloat(this.transportMax) + parseFloat(this.localCharges)).toFixed(2);
          var exchangeRatemin = ((parseFloat(this.riceMinPrice) + parseFloat(this.bagcost) + parseFloat(this.transportMin)) / dollaerateData).toFixed(2);
          var exchangeRatemax = ((parseFloat(this.riceMaxPrice) + parseFloat(this.bagcost) + parseFloat(this.transportMax)) / dollaerateData).toFixed(2);
          var Fobmin = 0;
          var Fobmax = 0;
          if (this.supplierCharge != 0) {
            Fobmin = parseFloat(exchangeRatemin) * this.supplierCharge / 100 + parseFloat(exchangeRatemin) - parseFloat(this.selectedFiftykg) + parseFloat(this.updatedUserPrice);
            Fobmax = parseFloat(exchangeRatemax) * this.supplierCharge / 100 + parseFloat(exchangeRatemax) - parseFloat(this.selectedFiftykg) + parseFloat(this.updatedUserPrice);
          } else {
            Fobmin = parseFloat(exchangeRatemin) - parseFloat(this.selectedFiftykg) + parseFloat(this.updatedUserPrice);
            Fobmax = parseFloat(exchangeRatemax) - parseFloat(this.selectedFiftykg) + parseFloat(this.updatedUserPrice);
          }
          this.total = minValue + ' - ' + maxValue;
          this.exchange = '$' + exchangeRatemin + ' - $' + exchangeRatemax;
          this.FOB = '$' + Fobmin + ' - $' + Fobmax;
          // let postedData = JSON.stringify({ 
          // 	'rice' : this.selectedRice,
          // 	'ricemin' : this.riceMinPrice,
          // 	'ricemax' : this.riceMaxPrice,
          // 	'transportmin' : this.transportMin,
          // 	'transportmax' : this.transportMax,
          // 	'category' : this.bagcost,
          // 	'charges' : this.localCharges,
          // 	'dollarrate' : this.dollaerate,
          // 	'percentageValue' : this.supplierCharge,
          // 	'totalMin' : minValue,
          // 	'totalMax' : maxValue,
          // 	'exchangeRatemin' : exchangeRatemin,
          // 	'exchangeRatemax' : exchangeRatemax,
          // 	'fobmin' : Fobmin,
          // 	'fobmax' : Fobmax,
          // 	'user_id' : localStorage.getItem('id'),
          // 	'usd_defaultMaster_id' : this.selectedBagId
          // });
          // this.apiService.saveUSDPrices(postedData).then((res:any) => {
          // } , (err:any) => {
          // })
        }
      }, {
        key: "checkInput",
        value: function checkInput(event, riceType) {
          // if((event.detail.value).length >= 5){
          if (riceType == 'one') {
            this.riceone = event.detail.value.substring(0, 5);
          }
          if (riceType == 'two') {
            this.ricetwo = event.detail.value.substring(0, 5);
          }
          if (riceType == 'three') {
            this.ricethree = event.detail.value.substring(0, 5);
          }
          if (riceType == 'four') {
            this.ricefour = event.detail.value.substring(0, 5);
          }
          // }else{
          if (riceType == 'one') {
            if (this.ricetwopercentage == '') {
              this.ricetwopercentage = 0;
            }
            if (this.ricethreepercentage == '') {
              this.ricethreepercentage = 0;
            }
            if (this.ricefourpercentage == '') {
              this.ricefourpercentage = 0;
            }
            var percentage = parseFloat(this.ricetwopercentage) + parseFloat(this.ricethreepercentage) + parseFloat(this.ricefourpercentage);
            var totalPercentage = parseFloat(this.riceonepercentage) + parseFloat(this.ricetwopercentage) + parseFloat(this.ricethreepercentage) + parseFloat(this.ricefourpercentage);
            if (!isNaN(Number(totalPercentage))) {
              if (totalPercentage <= 100) {
                if (percentage == 0) {
                  this.riceonepercentage = 100;
                } else {
                  this.riceonepercentage = 100 - percentage;
                }
                console.log(this.riceone);
                this.costOfRice1 = (this.riceone * this.riceonepercentage / 100).toFixed(2);
                this.AverageRiceCostPMT = this.costOfRice1;
              } else {
                alert('Total Percentage should not > 100');
              }
            }
          }
          if (riceType == 'two') {
            if (this.riceone != '') {
              if (this.riceone.length < 5) {
                // alert('Blend rice 1 shoult be greater than 10,000.');
                this.blendError1 = true;
                return false;
              } else {
                this.blendError1 = false;
              }
            }
            if (this.riceonepercentage == '') {
              this.riceonepercentage = 0;
            }
            if (this.ricethreepercentage == '') {
              this.ricethreepercentage = 0;
            }
            if (this.ricefourpercentage == '') {
              this.ricefourpercentage = 0;
            }
            var _percentage = parseFloat(this.riceonepercentage) + parseFloat(this.ricethreepercentage) + parseFloat(this.ricefourpercentage);
            // this.costOfRice1 = (  this.riceonepercentage);
            var _totalPercentage = parseFloat(this.riceonepercentage) + parseFloat(this.ricetwopercentage) + parseFloat(this.ricethreepercentage) + parseFloat(this.ricefourpercentage);
            if (!isNaN(Number(_totalPercentage))) {
              if (_totalPercentage <= 100) {
                if (_percentage == 0) {
                  this.ricetwopercentage = 100;
                } else {
                  this.ricetwopercentage = 100 - _percentage;
                }
              } else {
                alert('Total Percentage should not > 100');
              }
            }
            this.costOfRice2 = this.ricetwo * this.ricetwopercentage / 100;
            this.AverageRiceCostPMT = (this.costOfRice1 + this.costOfRice2).toFixed(2);
          }
          if (riceType == 'three') {
            if (this.ricetwo != '') {
              if (this.ricetwo.length < 5) {
                this.blendError2 = true;
                return false;
              } else {
                this.blendError2 = false;
              }
            }
            if (this.riceonepercentage == '') {
              this.riceonepercentage = 0;
            }
            if (this.ricetwopercentage == '') {
              this.ricetwopercentage = 0;
            }
            if (this.ricefourpercentage == '') {
              this.ricefourpercentage = 0;
            }
            var _percentage2 = parseFloat(this.riceonepercentage) + parseFloat(this.ricetwopercentage) + parseFloat(this.ricefourpercentage);
            var _totalPercentage2 = parseFloat(this.riceonepercentage) + parseFloat(this.ricetwopercentage) + parseFloat(this.ricethreepercentage) + parseFloat(this.ricefourpercentage);
            if (!isNaN(Number(_totalPercentage2))) {
              if (_totalPercentage2 <= 100) {
                if (_percentage2 == 0) {
                  this.ricethreepercentage = 100;
                } else {
                  this.ricethreepercentage = 100 - _percentage2;
                }
              } else {
                alert('Total Percentage should not > 100');
              }
            }
            this.costOfRice3 = this.ricethree * this.ricethreepercentage / 100;
            this.AverageRiceCostPMT = (this.costOfRice1 + this.costOfRice3 + this.costOfRice3).toFixed(2);
          }
          if (riceType == 'four') {
            if (this.ricethree != '') {
              if (this.ricethree.length < 5) {
                // alert('Blend rice 3 shoult be greater than 10,000.');
                this.blendError3 = true;
                return false;
              } else {
                this.blendError3 = false;
              }
            }
            if (this.riceonepercentage == '') {
              this.riceonepercentage = 0;
            }
            if (this.ricetwopercentage == '') {
              this.ricetwopercentage = 0;
            }
            if (this.ricethreepercentage == '') {
              this.ricethreepercentage = 0;
            }
            var _percentage3 = parseFloat(this.riceonepercentage) + parseFloat(this.ricetwopercentage) + parseFloat(this.ricethreepercentage);
            var _totalPercentage3 = parseFloat(this.riceonepercentage) + parseFloat(this.ricetwopercentage) + parseFloat(this.ricethreepercentage) + parseFloat(this.ricefourpercentage);
            if (!isNaN(Number(_totalPercentage3))) {
              if (_totalPercentage3 <= 100) {
                if (_percentage3 == 0) {
                  this.ricefourpercentage = 100;
                } else {
                  this.ricefourpercentage = 100 - _percentage3;
                }
              } else {
                alert('Total Percentage should not > 100');
              }
            }
            this.costOfRice4 = this.ricefour * this.ricefourpercentage / 100;
            this.AverageRiceCostPMT = (this.costOfRice1 + this.costOfRice2 + this.costOfRice3 + this.costOfRice4).toFixed(2);
          }
          this.save();
          this.calculateData();
          // }
        }
      }, {
        key: "bagChange",
        value: function bagChange(event) {
          var value = event.detail.value;
          var splitedValue = value.split('_');
          var bagSize = splitedValue[0];
          var bagNme = splitedValue[1];
          var bagPrice = splitedValue[2];
          this.selectedBagId = splitedValue[3];
          var updatedPrice = parseFloat(bagPrice);
          this.bagSizePrice = updatedPrice;
          this.selectedBag = bagSize + '_' + bagNme;
          this.updatedUserPrice = updatedPrice;
          this.save();
          this.calculateData();
        }
      }, {
        key: "changeQuality",
        value: function changeQuality(event) {
          this.selectedRice = event.detail.value;
        }
      }, {
        key: "getLatestQueries",
        value: function getLatestQueries() {
          this.navCtrl.navigateForward('mybids');
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "presentModel",
        value: function presentModel() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // const model = await this.modalCtrl.create({
                  // 	component: OceanfreightsPage,
                  // 	animated: true
                  // })
                  // await model.present();
                  this.modalStatus = true;
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getTransportState",
        value: function getTransportState() {
          var _this2 = this;
          this.componentService.presentLoading().then(function () {
            _this2.apiService.getOceanPorts().then(function (res) {
              _this2.componentService.loadingController.dismiss();
              _this2.regions = Object.values(res.region).sort();
              console.log(res.data);
              _this2.data = res.data;
            }, function (err) {
              _this2.componentService.loadingController.dismiss();
            });
          });
        }
      }, {
        key: "changecountry",
        value: function changecountry(resign) {
          var resignValue = resign.detail.value;
          this.selectedResign = resignValue;
          this.countries = Object.keys(this.data[resignValue]).sort();
        }
      }, {
        key: "getPortList",
        value: function getPortList(resign) {
          var region = this.selectedResign;
          var countryName = resign.detail.value;
          var portsOfCountry = this.data[region][countryName];
          console.log(portsOfCountry);
          this.ports = portsOfCountry;
        }
      }, {
        key: "updateModel",
        value: function updateModel() {
          if (this.modalStatus == false) {
            this.modalStatus = true;
          }
          if (this.modalStatus == true) {
            this.modalStatus = false;
          }
        }
      }]);
    }();
    CalculatorPage.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_4__["ComponentsService"]
      }];
    };
    CalculatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-calculator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./calculator.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./calculator.page.scss */"./src/app/calculator/calculator.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _components_service__WEBPACK_IMPORTED_MODULE_4__["ComponentsService"]])], CalculatorPage);

    /***/
  })
}]);
//# sourceMappingURL=calculator-calculator-module-es5.js.map