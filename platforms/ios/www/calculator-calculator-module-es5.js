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
    __webpack_exports__["default"] = ".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\nion-item {\n  border: 1px solid #e1e1e1;\n  border-radius: 100px;\n}\n\n.item-native {\n  background: transparent;\n  background-color: transparent;\n  --background: transparent;\n  --background-color: transparent;\n}\n\n.packingSelect .select-text {\n  display: none;\n}\n\nion-content {\n  padding: 10px;\n}\n\n.tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\n.header-title {\n  color: #FFF;\n}\n\n.header-md::after {\n  background: none;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-toolbar ion-icon {\n  color: #000;\n}\n\n.header-title {\n  color: #000;\n}\n\nion-title {\n  padding: 0;\n  text-align: center;\n}\n\n.ion-card {\n  width: 900px;\n}\n\nion-card {\n  width: 17%;\n  text-align: center;\n  float: left;\n}\n\n.tf-tree {\n  clear: both;\n}\n\n.ioncard1 {\n  background: #d8f9fe;\n}\n\n.ioncard2 {\n  background: #d8f9fe;\n}\n\n.ioncard3 {\n  background: #d8f9fe;\n}\n\n.ioncard4 {\n  background: #d8f9fe;\n}\n\n.ioncard5 {\n  background: #d8f9fe;\n}\n\ntable,\nthead,\ntbody {\n  border: 1px solid #eeeeee;\n}\n\ntable {\n  width: 100%;\n}\n\ntable thead th {\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\ntable tbody tr {\n  border-bottom: 1px solid #ededed;\n}\n\ntable tbody td {\n  width: 50%;\n  text-align: center;\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.active {\n  background: #c9a27c;\n  --background: #c9a27c;\n  background-color: #c9a27c;\n  --background-color: #c9a27c;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n}\n\n.price-table table thead tr th {\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n  color: #000;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n  border-right: 1px solid #dfdfdf;\n}\n\ntable,\ntable thead,\ntable tbody,\ntable thead th,\ntable tbody tr,\ntable tbody tr td {\n  border: 0 !important;\n}\n\ntable thead,\ntable tbody,\ntable tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n\ntable thead tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tbody tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tr th {\n  padding: 0;\n  margin: 0;\n}\n\ntable tbody tr td {\n  text-align: left;\n  margin-left: 20px;\n  padding-left: 20px;\n}\n\n.pl-60 {\n  padding-left: 60px !important;\n}\n\n.pl-10 {\n  padding-left: 10px !important;\n}\n\n.left {\n  text-align: left;\n}\n\n.active {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.segment-button-checked {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.scroll-arrow {\n  position: absolute;\n  margin-top: 3.2%;\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 0px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.ios .header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 5px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.header-ios ion-toolbar {\n  border: 0px;\n  --border-width: 0px ;\n}\n\n.ios .type-columns {\n  border: 0px solid transparent !important;\n  --border: 0px solid transparent !important;\n}\n\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.basmatiState {\n  margin: 10px 30px 0px 30px;\n}\n\n.ricetype {\n  color: #000;\n  font-size: 30px;\n  font-family: GlacialIndifference-bold;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.font-17 {\n  font-size: 14px;\n  font-family: GlacialIndifference-bold;\n}\n\n.green {\n  color: #92B243;\n}\n\n.green td {\n  text-transform: capitalize;\n  font-size: 18px !important;\n}\n\n.porttitle {\n  font-size: 20px;\n}\n\nion-segment ion-segment-button ion-label {\n  margin: 0;\n  padding: 0;\n  margin-top: -2px;\n}\n\n.imageprev {\n  min-height: 200px;\n  max-height: 200px;\n  height: 200px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.paddingBottom100 {\n  padding-bottom: 100px;\n}\n\n.alert-radio-label .sc-ion-alert-md {\n  --padding-left: 20px;\n}\n\n.calc {\n  padding: 0px 10px;\n}\n\n.calc ion-col {\n  padding: 0;\n}\n\n.calc ion-row {\n  margin: 7px 0px;\n}\n\n:host(.item-interactive.ion-valid) {\n  --highlight-background: transparent;\n  --highlight-background: transparent !important;\n}\n\nion-item {\n  --highlight-background: transparent;\n  --highlight-background: transparent !important;\n}\n\n.inputlabel {\n  font-size: 15px !important;\n}\n\nion-label {\n  margin-top: 0px;\n  padding-top: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDSTtFQUNJLGVBQUE7QUNDUjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBS0kseUJBQUE7RUFDQSxvQkFBQTtBQ0pKOztBRFVBO0VBQ0ksdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUNQSjs7QURXSTtFQUNJLGFBQUE7QUNSUjs7QURhQTtFQUNJLGFBQUE7QUNWSjs7QURjQTtFQUNJLGtCQUFBO0FDWEo7O0FEY0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1hKOztBRGFJO0VBQ0ksZUFBQTtBQ1hSOztBRGVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDWko7O0FEZUE7RUFDSSxXQUFBO0FDWko7O0FEZUE7RUFDSSxnQkFBQTtBQ1pKOztBRGVBO0VBQ0ksbUJBQUE7QUNaSjs7QURjSTtFQUNJLFdBQUE7QUNaUjs7QURnQkE7RUFDSSxXQUFBO0FDYko7O0FEZ0JBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDYko7O0FEZ0JBO0VBQ0ksWUFBQTtBQ2JKOztBRGdCQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNiSjs7QURnQkE7RUFDSSxXQUFBO0FDYko7O0FEZ0JBO0VBQ0ksbUJBQUE7QUNiSjs7QURnQkE7RUFDSSxtQkFBQTtBQ2JKOztBRGdCQTtFQUNJLG1CQUFBO0FDYko7O0FEZ0JBO0VBQ0ksbUJBQUE7QUNiSjs7QURnQkE7RUFDSSxtQkFBQTtBQ2JKOztBRGdCQTs7O0VBR0kseUJBQUE7QUNiSjs7QURnQkE7RUFDSSxXQUFBO0FDYko7O0FEZ0JRO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtBQ2RaOztBRG1CUTtFQUNJLGdDQUFBO0FDakJaOztBRG9CUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNsQlo7O0FEdUJBO0VBQ0ksMEJBQUE7QUNwQko7O0FEdUJBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUNwQko7O0FEMEJJO0VBQ0ksV0FBQTtFQTZCQSxlQUFBO0FDbkRSOztBRHlCWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDdkJoQjs7QUQwQmdCO0VBRUksK0JBQUE7QUN6QnBCOztBRCtCWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDN0JoQjs7QUQrQmdCO0VBQ0ksZUFBQTtFQUdBLCtCQUFBO0FDL0JwQjs7QUR3Q0E7Ozs7OztFQU1JLG9CQUFBO0FDckNKOztBRHdDQTs7O0VBR0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ3JDSjs7QUR3Q0E7RUFDSSwyQ0FBQTtBQ3JDSjs7QUR3Q0E7RUFDSSwyQ0FBQTtBQ3JDSjs7QUR3Q0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ3JDSjs7QUQyQ1k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUN4Q2hCOztBRDhDQTtFQUNJLDZCQUFBO0FDM0NKOztBRDhDQTtFQUNJLDZCQUFBO0FDM0NKOztBRDhDQTtFQUNJLGdCQUFBO0FDM0NKOztBRDhDQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQzNDSjs7QUQ4Q0E7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUMzQ0o7O0FEOENBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUMzQ0o7O0FEOENBO0VBQ0kseUNBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQzdDSjs7QURnREE7RUFDSSx5Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDL0NKOztBRGtEQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBQy9DSjs7QURtREk7RUFDSSx3Q0FBQTtFQUNBLDBDQUFBO0FDaERSOztBRG9EQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxRQUFBO0FDbERKOztBRHFEQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxRQUFBO0FDbkRKOztBRHNEQTtFQUNJLDBCQUFBO0FDbkRKOztBRHNEQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FDbkRKOztBRHNEQTtFQUNJLGVBQUE7RUFDQSxxQ0FBQTtBQ25ESjs7QURzREE7RUFDSSxjQUFBO0FDbkRKOztBRHFESTtFQUNJLDBCQUFBO0VBQ0EsMEJBQUE7QUNuRFI7O0FEdURBO0VBQ0ksZUFBQTtBQ3BESjs7QUR5RFE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDdERaOztBRDJEQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDeERKOztBRDJEQTtFQUNJLGFBQUE7QUN4REo7O0FEMkRBO0VBQ0ksY0FBQTtBQ3hESjs7QUQyREE7RUFDSSxxQkFBQTtBQ3hESjs7QUQ0REk7RUFDSSxvQkFBQTtBQ3pEUjs7QUQ2REE7RUFDSSxpQkFBQTtBQzFESjs7QUQ0REk7RUFDSSxVQUFBO0FDMURSOztBRDZESTtFQUNJLGVBQUE7QUMzRFI7O0FEK0RBO0VBQ0ksbUNBQUE7RUFDQSw4Q0FBQTtBQzVESjs7QUQrREE7RUFDSSxtQ0FBQTtFQUNBLDhDQUFBO0FDNURKOztBRCtEQTtFQUNJLDBCQUFBO0FDNURKOztBRCtEQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDNURKIiwiZmlsZSI6InNyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50Zi10cmVlLmV4YW1wbGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICNGRkY7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICB9XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0OTRmNTg7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjOTJiMjQzO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAvLyAtLWJhY2tncm91bmQ6ICNmZmZiZDY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC8vIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgLy8gaGVpZ2h0OiBhdXRvO1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhY2tpbmdTZWxlY3Qge1xuICAgIC5zZWxlY3QtdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC8vIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmYmQ2O1xufVxuXG4udGYtdHJlZS5leGFtcGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDk0ZjU4O1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG5pb24tdGl0bGUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW9uLWNhcmQge1xuICAgIHdpZHRoOiA5MDBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIHdpZHRoOiAxNyU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udGYtdHJlZSB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5pb25jYXJkMSB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDMge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkNCB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQ1IHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG50YWJsZSxcbnRoZWFkLFxudGJvZHkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHRoZWFkIHtcbiAgICAgICAgdGgge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGJvZHkge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWVlZWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2M5YTI3YztcbiAgICAtLWJhY2tncm91bmQ6ICNjOWEyN2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3YztcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNjOWEyN2M7XG59XG5cbi5wcmljZS10YWJsZSB7XG5cbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgdGhlYWQge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcblxuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG59XG5cbnRhYmxlLFxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRoZWFkIHRoLFxudGFibGUgdGJvZHkgdHIsXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnRcbn1cblxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRib2R5IHRyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRoZWFkIHRyIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0Ym9keSB0ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbn1cblxudGFibGUgdHIgdGgge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG50YWJsZSB7XG4gICAgdGJvZHkge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wbC02MCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0xMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMy4yJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAvLyBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgLS13aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgLS1taW4td2lkdGg6IGF1dG87XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG5cbi5pb3MgLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDMxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAvLyBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgLS13aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgLS1taW4td2lkdGg6IGF1dG87XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgICBib3JkZXI6IDBweDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4XG59XG5cbi5pb3Mge1xuICAgIC50eXBlLWNvbHVtbnMge1xuICAgICAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uc2Nyb2xsLWFycm93IC5sZWZ0aWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIHRvcDogMHB4O1xufVxuXG4uc2Nyb2xsLWFycm93IC5yaWdodGljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgdG9wOiAwcHg7XG59XG5cbi5iYXNtYXRpU3RhdGUge1xuICAgIG1hcmdpbjogMTBweCAzMHB4IDBweCAzMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC0xNyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBHbGFjaWFsSW5kaWZmZXJlbmNlLWJvbGQ7XG59XG5cbi5ncmVlbiB7XG4gICAgY29sb3I6ICM5MkIyNDM7XG5cbiAgICB0ZCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5wb3J0dGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweFxufVxuXG5pb24tc2VnbWVudCB7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW1hZ2VwcmV2IHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGFkZGluZ0JvdHRvbTEwMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG4uYWxlcnQtcmFkaW8tbGFiZWwge1xuICAgIC5zYy1pb24tYWxlcnQtbWQge1xuICAgICAgICAtLXBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG59XG5cbi5jYWxjIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcblxuICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwXG4gICAgfVxuXG4gICAgaW9uLXJvdyB7XG4gICAgICAgIG1hcmdpbjogN3B4IDBweFxuICAgIH1cbn1cblxuOmhvc3QoLml0ZW0taW50ZXJhY3RpdmUuaW9uLXZhbGlkKSB7XG4gICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59IiwiLnRmLXRyZWUuZXhhbXBsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICNGRkY7XG59XG4uYmFjay1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDk0ZjU4O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFja2luZ1NlbGVjdCAuc2VsZWN0LXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50Zi10cmVlLmV4YW1wbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmJhY2stYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5pb24tdG9vbGJhciBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlvbi1jYXJkIHtcbiAgd2lkdGg6IDkwMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiAxNyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50Zi10cmVlIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5pb25jYXJkMSB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkMiB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkMyB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkNCB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkNSB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbnRhYmxlLFxudGhlYWQsXG50Ym9keSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSB0aGVhZCB0aCB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxudGFibGUgdGJvZHkgdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZDtcbn1cbnRhYmxlIHRib2R5IHRkIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNjOWEyN2M7XG4gIC0tYmFja2dyb3VuZDogI2M5YTI3YztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3YztcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjYzlhMjdjO1xufVxuXG4ucHJpY2UtdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIgdGgge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogIzAwMDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cblxudGFibGUsXG50YWJsZSB0aGVhZCxcbnRhYmxlIHRib2R5LFxudGFibGUgdGhlYWQgdGgsXG50YWJsZSB0Ym9keSB0cixcbnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHksXG50YWJsZSB0Ym9keSB0ciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRoZWFkIHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGJvZHkgdHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0ciB0aCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxudGFibGUgdGJvZHkgdHIgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ucGwtNjAge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLnBsLTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzkyQjI0MztcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMy4yJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtaW4taGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgd2lkdGg6IGF1dG87XG4gIC0td2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogYXV0bztcbiAgLS1taW4td2lkdGg6IGF1dG87XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG5cbi5pb3MgLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4taGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgd2lkdGg6IGF1dG87XG4gIC0td2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogYXV0bztcbiAgLS1taW4td2lkdGg6IGF1dG87XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgYm9yZGVyOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggO1xufVxuXG4uaW9zIC50eXBlLWNvbHVtbnMge1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGwtYXJyb3cgLmxlZnRpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxOHB4O1xuICB0b3A6IDBweDtcbn1cblxuLnNjcm9sbC1hcnJvdyAucmlnaHRpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogOTk5OTk5O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMnB4O1xuICB3aWR0aDogMThweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5iYXNtYXRpU3RhdGUge1xuICBtYXJnaW46IDEwcHggMzBweCAwcHggMzBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IEdsYWNpYWxJbmRpZmZlcmVuY2UtYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC0xNyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IEdsYWNpYWxJbmRpZmZlcmVuY2UtYm9sZDtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6ICM5MkIyNDM7XG59XG4uZ3JlZW4gdGQge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wb3J0dGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi5pbWFnZXByZXYge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZGRpbmdCb3R0b20xMDAge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbi5hbGVydC1yYWRpby1sYWJlbCAuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgLS1wYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5jYWxjIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG4uY2FsYyBpb24tY29sIHtcbiAgcGFkZGluZzogMDtcbn1cbi5jYWxjIGlvbi1yb3cge1xuICBtYXJnaW46IDdweCAwcHg7XG59XG5cbjpob3N0KC5pdGVtLWludGVyYWN0aXZlLmlvbi12YWxpZCkge1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmlucHV0bGFiZWwge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */";

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