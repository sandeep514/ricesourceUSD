function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-inr-buy-inr-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/buy-inr/buy-inr.page.html": (
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buy-inr/buy-inr.page.html ***!
    \*********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuyInrBuyInrPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header class=\"\">\n\t<ion-toolbar mode=\"ios\" style=\"background: #fff; --background: #fff\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Buy Query</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content id=\"content\" [scrollEvents]=\"true\" class=\"\">\n\t<div style=\"padding: 10px 20px;margin-bottom: 100px;\">\n\t\t<ion-item>\n\t\t\t<ion-label>Category*</ion-label>\n\t\t\t<!-- (ionChange)=\"changecountry($event)\" -->\n\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQualityType($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let qualityType of riceQualityType\" style=\"text-transform: capitalize;\">{{\n\t\t\t\t\tqualityType | uppercase }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;overflow: hidden;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Quality*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" id=\"quality\" (ionChange)=\"changeQuality($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let riceName of onlyRiceName\" value={{riceName.id}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ riceName.name }}</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option style=\"text-transform: capitalize;\">Other</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;margin-right: 15px;text-align: right;padding: 5px;\">{{quality}}</p> -->\n\t\t\t</ion-col>\n\n\t\t</ion-row>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;overflow: hidden;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Type*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" id=\"qualityForm\" (ionChange)=\"changeQualityForm($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let riceName of onlyRiceForms\" value={{riceName.id}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ riceName.name }}</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option style=\"text-transform: capitalize;\">Other</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;margin-right: 15px;text-align: right;padding: 5px;\">{{qualityForm}}</p> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<p style=\"padding: 0px;margin: 0px;text-align: right;\">{{ selectedRiceFormAndName?.quality }}{{\n\t\t\t\t\tselectedRiceFormAndName?.quality_name }}</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;overflow: hidden;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Grade*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" id=\"grade\" [(ngModel)]=\"selectedGrade\"\n\t\t\t\t\t\t(ionChange)=\"changeGrade($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let wand of riceWand\" value={{wand.id}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{\n\t\t\t\t\t\t\twand.get_wand_type.type }} {{ wand.value }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\n\t\t<!-- <ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div>\n\t\t\t\t\t<div *ngFor=\"let wand of riceWand\" style=\"padding: 0px 0px;\">\n\t\t\t\t\t\t<div (click)=\"selectedWand(wand)\" style=\"display: inline-block;width: 100%;padding: 0px 10px;border-radius: 14px;\" [ngStyle]=\"{'background': selectedGrade == wand.id ? '#92b243' : 'transparent' }\">\n\t\t\t\t\t\t\t<div style=\"width: 80%;float: left;\">\n\t\t\t\t\t\t\t\t<p style=\"margin: 10px 0px;\">{{ wand.get_wand_type.type }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style=\"width: 20%;float: left;\">\n\t\t\t\t\t\t\t\t<p style=\"margin: 10px 0px;\">{{ wand.value }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row> -->\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<!-- <ion-item class=\"packingSelect\" style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Packing*</ion-label> -->\n\t\t\t\t<!-- <ion-select placeholder=\"Select\" (ionChange)=\"changeBuyerPackingType($event)\">\n\t\t\t\t\t\t<ion-select-option value=\"0\"><p>Miller Packing</p></ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"1\"><p>Private Packing</p></ion-select-option>\n\t\t\t\t\t</ion-select> -->\n\n\t\t\t\t<ion-radio-group value=\"0\" (ionChange)=\"changeBuyerPackingType($event)\">\n\t\t\t\t\t<div style=\"\">\n\t\t\t\t\t\t<ion-label><ion-radio style=\"vertical-align: middle;\" value=\"0\">Miller Packing</ion-radio><span\n\t\t\t\t\t\t\t\tstyle=\"margin-left: 20px;\">Miller Packing</span></ion-label><br />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div style=\"\">\n\t\t\t\t\t\t<ion-label><ion-radio style=\"vertical-align: middle;\" value=\"1\">Private Packing\n\t\t\t\t\t\t\t</ion-radio><span style=\"margin-left: 20px;\">Private Packing</span></ion-label>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ion-radio-group>\n\t\t\t\t<!-- </ion-item> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"margin-bottom: 10px;\" *ngIf=\"changedBuyerPackingType == '0' \">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;overflow: hidden;\">\n\t\t\t\t<ion-item class=\"packingSelect\" style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Packing*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePacking($event)\">\n\t\t\t\t\t\t<ion-select-option value=\"{{ '0_50KG PP' }}\">\n\t\t\t\t\t\t\t<p>50KG PP</p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"{{ '1_55KG PP' }}\">\n\t\t\t\t\t\t\t<p>55KG PP</p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<p style=\"padding: 0;margin: 0;margin-left: 15px;text-align: left;padding: 5px;\">{{selectedPackageName}}\n\t\t\t\t</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"margin-bottom: 10px;\" *ngIf=\"changedBuyerPackingType == '1' \">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;overflow: hidden;\">\n\t\t\t\t<ion-item class=\"packingSelect\" style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Packing*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePacking($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let package of buyerPackingList\"\n\t\t\t\t\t\t\tvalue=\"{{ package.id+'_'+package.packing }}\">\n\t\t\t\t\t\t\t<p>{{package.packing}} {{ package?.description }}</p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<p style=\"padding: 0;margin: 0;margin-left: 15px;text-align: left;padding: 5px;\">{{selectedPackageName}}\n\t\t\t\t</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Quantity (Qtls)*</ion-label>\n\t\t\t<ion-input type=\"tel\" maxLength=\"5\" [(ngModel)]=\"quantity\" (ionChange)=\"textareaMaxLengthValidation()\"\n\t\t\t\tstyle=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\n\t\t<ion-label position=\"\">Additional Information*</ion-label>\n\t\t<ion-item>\n\t\t\t<ion-textarea rows=\"4\" [(ngModel)]=\"additionalinfo\" style=\"\"></ion-textarea>\n\t\t</ion-item>\n\n\n\t\t<div *ngIf=\"isError\" style=\"text-align: center;color: red;font-weight: 600\">\n\t\t\t<span>{{ errorMessage }}</span>\n\t\t</div>\n\t\t<ion-button expand=\"full\" shape=\"round\" (click)=\"save()\"\n\t\t\tstyle=\"--background: #000;color: #fff\">Submit</ion-button>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/buy-inr/buy-inr-routing.module.ts": (
  /*!***************************************************!*\
    !*** ./src/app/buy-inr/buy-inr-routing.module.ts ***!
    \***************************************************/
  /*! exports provided: BuyInrPageRoutingModule */
  /***/
  function srcAppBuyInrBuyInrRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BuyInrPageRoutingModule", function () {
      return BuyInrPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _buy_inr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./buy-inr.page */"./src/app/buy-inr/buy-inr.page.ts");
    var routes = [{
      path: '',
      component: _buy_inr_page__WEBPACK_IMPORTED_MODULE_3__["BuyInrPage"]
    }];
    var BuyInrPageRoutingModule = /*#__PURE__*/_createClass(function BuyInrPageRoutingModule() {
      _classCallCheck(this, BuyInrPageRoutingModule);
    });
    BuyInrPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BuyInrPageRoutingModule);

    /***/
  }),
  /***/"./src/app/buy-inr/buy-inr.module.ts": (
  /*!*******************************************!*\
    !*** ./src/app/buy-inr/buy-inr.module.ts ***!
    \*******************************************/
  /*! exports provided: BuyInrPageModule */
  /***/
  function srcAppBuyInrBuyInrModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BuyInrPageModule", function () {
      return BuyInrPageModule;
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
    var _buy_inr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./buy-inr-routing.module */"./src/app/buy-inr/buy-inr-routing.module.ts");
    /* harmony import */
    var _buy_inr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./buy-inr.page */"./src/app/buy-inr/buy-inr.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var BuyInrPageModule = /*#__PURE__*/_createClass(function BuyInrPageModule() {
      _classCallCheck(this, BuyInrPageModule);
    });
    BuyInrPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _buy_inr_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyInrPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_buy_inr_page__WEBPACK_IMPORTED_MODULE_6__["BuyInrPage"]]
    })], BuyInrPageModule);

    /***/
  }),
  /***/"./src/app/buy-inr/buy-inr.page.scss": (
  /*!*******************************************!*\
    !*** ./src/app/buy-inr/buy-inr.page.scss ***!
    \*******************************************/
  /*! exports provided: default */
  /***/
  function srcAppBuyInrBuyInrPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-item {\n  border: 1px solid #e1e1e1;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.item-native {\n  background: transparent;\n  background-color: transparent;\n  --background: transparent;\n  --background-color: transparent;\n}\n\n.packingSelect .select-text {\n  display: none;\n}\n\nion-radio::part(container) {\n  width: 20px;\n  height: 20px;\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #92b243;\n  border-color: transparent;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n\nion-toolbar {\n  --border-width: 0 0 0px !important;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2J1eS1pbnIvYnV5LWluci5wYWdlLnNjc3MiLCJzcmMvYXBwL2J1eS1pbnIvYnV5LWluci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVJO0VBQ0ksZUFBQTtBQ0FSOztBRFNBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTko7O0FEU0E7RUFDSSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBQ05KOztBRFVJO0VBQ0ksYUFBQTtBQ1BSOztBRFVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLHNCQUFBO0FDUko7O0FEV0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUko7O0FEV0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDUko7O0FEV0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUVBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLHdCQUFBO0FDVko7O0FEYUE7RUFDSSxrQ0FBQTtBQ1ZKOztBRFlBO0VBQ0ksa0NBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL2J1eS1pbnIvYnV5LWluci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGYtdHJlZS5leGFtcGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIC8vIGNvbG9yOiAjRkZGO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgfVxufVxuXG4vLyBpb24tdG9vbGJhciB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjNDk0ZjU4O1xuLy8gICAgIGNvbG9yOiAjRkZGO1xuLy8gfVxuXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjUsIDIyNSwgMjI1LCAxKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFja2luZ1NlbGVjdCB7XG4gICAgLnNlbGVjdC10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5pb24tcmFkaW86OnBhcnQoY29udGFpbmVyKSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG59XG5cbmlvbi1yYWRpbzo6cGFydChtYXJrKSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pb24tcmFkaW8ucmFkaW8tY2hlY2tlZDo6cGFydChjb250YWluZXIpIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTJiMjQzO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1yYWRpby5yYWRpby1jaGVja2VkOjpwYXJ0KG1hcmspIHtcbiAgICB3aWR0aDogNnB4O1xuICAgIGhlaWdodDogMTBweDtcblxuICAgIGJvcmRlci13aWR0aDogMHB4IDJweCAycHggMHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG5pb24tdG9vbGJhcntcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufVxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBle1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59IiwiLnRmLXRyZWUuZXhhbXBsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5iYWNrLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wYWNraW5nU2VsZWN0IC5zZWxlY3QtdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi1yYWRpbzo6cGFydChjb250YWluZXIpIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xufVxuXG5pb24tcmFkaW86OnBhcnQobWFyaykge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0cmFuc2l0aW9uOiBub25lO1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbmlvbi1yYWRpby5yYWRpby1jaGVja2VkOjpwYXJ0KGNvbnRhaW5lcikge1xuICBiYWNrZ3JvdW5kOiAjOTJiMjQzO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tcmFkaW8ucmFkaW8tY2hlY2tlZDo6cGFydChtYXJrKSB7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMnB4IDJweCAwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/buy-inr/buy-inr.page.ts": (
  /*!*****************************************!*\
    !*** ./src/app/buy-inr/buy-inr.page.ts ***!
    \*****************************************/
  /*! exports provided: BuyInrPage */
  /***/
  function srcAppBuyInrBuyInrPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BuyInrPage", function () {
      return BuyInrPage;
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
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ionic-native/file-chooser/ngx */"./node_modules/@ionic-native/file-chooser/ngx/index.js");
    /* harmony import */
    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ionic-native/file-path/ngx */"./node_modules/@ionic-native/file-path/ngx/index.js");
    /* harmony import */
    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ionic-native/file-transfer/ngx */"./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */
    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @ionic-native/file/ngx */"./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */
    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @ionic-native/camera/ngx */"./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var BuyInrPage = /*#__PURE__*/function () {
      function BuyInrPage(apiser, location, navCtrl, actionSheetController, transfer, file, filechooser, filePath, httpClient, loadCTRL, camera // public imgPicker: ImagePicker
      ) {
        _classCallCheck(this, BuyInrPage);
        this.apiser = apiser;
        this.location = location;
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
        this.transfer = transfer;
        this.file = file;
        this.filechooser = filechooser;
        this.filePath = filePath;
        this.httpClient = httpClient;
        this.loadCTRL = loadCTRL;
        this.camera = camera;
        this.validDays = 1;
        this.party = localStorage.getItem("name");
        this.mobile = localStorage.getItem("mobile");
        this.remarks = "";
        this.isError = false;
        this.errorMessage = "";
        this.qualityForm = "";
        this.selectedRiceFormAndName = "";
        this.selectedGrade = "";
        this.sellerPackingList = "";
        this.buyerPackingList = "";
        this.croppedImagepath = "";
        this.croppedBagImagepath = "";
        this.croppedUncookedImagepath = "";
        this.croppedCookedImagepath = "";
        this.fileTransfer = "";
        this.contactperson = "";
        this.contactMobile = "";
        this.isLoading = false;
        this.changedBuyerPackingType = "0";
        this.additionalinfo = "";
        this.user_id = "";
        this.imagePickerOptions = {
          maximumImagesCount: 1,
          quality: 50
        };
      }
      return _createClass(BuyInrPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
          this.getSellerINRPacking();
          this.getBuyerINRPacking();
          this.user_id = localStorage.getItem('id');
        }
      }, {
        key: "selectedWand",
        value: function selectedWand(selectedWantDetail) {
          this.selectedGrade = selectedWantDetail.id;
          console.log(selectedWantDetail);
        }
      }, {
        key: "packageImage",
        value: function packageImage(event) {
          this.packageImageFile = event.target.files[0];
          console.log(this.packageImageFile);
          console.log(event.target.files[0]);
          // this.croppedImagepath = photo;
          // this.imgPicker.getPictures(this.imagePickerOptions).then((res) => {
          // 	console.log(res)
          // }).catch((err) => {
          // 	console.log(err);
          // });
        }
      }, {
        key: "pickBagImage",
        value: function pickBagImage(sourceType) {
          var _this = this;
          var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.camera.getPicture(options).then(function (imageData) {
            _this.croppedBagImagepath = "data:image/jpeg;base64," + imageData;
            _this.uploadImage(imageData, "https://snjtradelink.com/staging/public/api/submit/sell/query");
          }, function (err) {
            // Handle error
          });
        }
      }, {
        key: "getFile",
        value: function getFile() {}
      }, {
        key: "pickUncookedImage",
        value: function pickUncookedImage(event) {
          this.uncookedFile = event.target.files[0];
          // console.log(photo);
          // const options: CameraOptions = {
          //   quality: 100,
          //   sourceType: sourceType,
          //   destinationType: this.camera.DestinationType.DATA_URL,
          //   encodingType: this.camera.EncodingType.JPEG,
          //   mediaType: this.camera.MediaType.PICTURE,
          // };
          // this.camera.getPicture(options).then(
          //   (imageData) => {
          //     // imageData is either a base64 encoded string or a file URI
          //     this.croppedUncookedImagepath = "data:image/jpeg;base64," + imageData;
          //   },
          //   (err) => {
          //     // Handle error
          //   }
          // );
        }
      }, {
        key: "pickCookedImage",
        value: function pickCookedImage(event) {
          this.cookedImageFile = event.target.files[0];
          // console.log(photo);
          // const options: CameraOptions = {
          //   quality: 100,
          //   sourceType: sourceType,
          //   destinationType: this.camera.DestinationType.DATA_URL,
          //   encodingType: this.camera.EncodingType.JPEG,
          //   mediaType: this.camera.MediaType.PICTURE,
          // };
          // this.camera.getPicture(options).then(
          //   (imageData) => {
          //     // imageData is either a base64 encoded string or a file URI
          //     this.croppedCookedImagepath = "data:image/jpeg;base64," + imageData;
          //   },
          //   (err) => {
          //     // Handle error
          //   }
          // );
        }
        // async selectImage() {
        //   const actionSheet = await this.actionSheetController.create({
        //     header: "Select Image source",
        //     buttons: [
        //       {
        //         text: "Load from Library",
        //         handler: () => {
        //           this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        //         },
        //       },
        //       {
        //         text: "Use Camera",
        //         handler: () => {
        //           this.pickImage(this.camera.PictureSourceType.CAMERA);
        //         },
        //       },
        //       {
        //         text: "Cancel",
        //         role: "cancel",
        //       },
        //     ],
        //   });
        //   await actionSheet.present();
        // }
      }, {
        key: "uploadImage",
        value: function uploadImage(imagePath, serverUrl) {
          var fileTransfer = this.transfer.create();
          var options = {
            fileKey: "file",
            fileName: "my_image.jpg",
            mimeType: "image/jpeg",
            params: {}
          };
          fileTransfer.upload(imagePath, serverUrl, options).then(function (data) {
            console.log("Image uploaded successfully:", data);
          })["catch"](function (error) {
            console.error("Error uploading image:", error);
          });
        }
      }, {
        key: "save",
        value: function save() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var headers, formData, posteddata;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.apiser.presentLoader('Please wait...');
                  if (!(this.selectedQualityTypeInt == undefined || this.selectedQualityTypeInt == 'undefined' || this.selectedQualityTypeInt == '' || this.quality == undefined || this.quality == 'undefined' || this.quality == '' || this.qualityForm == undefined || this.qualityForm == 'undefined' || this.qualityForm == '' || this.selectedGrade == undefined || this.selectedGrade == 'undefined' || this.selectedGrade == '' || this.changedBuyerPackingType == undefined || this.changedBuyerPackingType == 'undefined' || this.changedBuyerPackingType == '' || this.changePackingType == undefined || this.changePackingType == 'undefined' || this.changePackingType == '' || this.quantity == undefined || this.quantity == 'undefined' || this.quantity == '')) {
                    _context.next = 7;
                    break;
                  }
                  setTimeout(function () {
                    _this2.loadCTRL.dismiss();
                    _this2.apiser.dismissLoader();
                  }, 1000);
                  this.apiser.presentToast('All field are required...');
                  return _context.abrupt("return", false);
                case 7:
                  headers = {
                    enctype: "multipart/form-data;",
                    Accept: "application/json"
                  };
                  formData = new FormData();
                  formData.append("_method", "PATCH");
                  formData.append("selectedQualityTypeInt", this.selectedQualityTypeInt);
                  formData.append("quality", this.quality);
                  formData.append("qualityForm", this.qualityForm);
                  formData.append("selectedGrade", this.selectedGrade);
                  formData.append("changePackingType", this.changedBuyerPackingType);
                  formData.append("packing", this.changePackingType);
                  formData.append("quantity", this.quantity);
                  formData.append("additionalinfo", this.additionalinfo);
                  formData.append("user_id", this.user_id);
                  posteddata = {
                    method: "POST",
                    body: formData
                  };
                  fetch("https://snjtradelink.com/staging/public/api/submit/buy/query", posteddata).then(function (res) {
                    setTimeout(function () {
                      _this2.apiser.presentToast('We have received your buy query. SNTC will contact you shortly.');
                      _this2.loadCTRL.dismiss();
                      _this2.apiser.dismissLoader();
                      _this2.navCtrl.navigateForward('prices');
                    }, 1000);
                  })["catch"](function (err) {
                    setTimeout(function () {
                      _this2.loadCTRL.dismiss();
                      _this2.apiser.dismissLoader();
                    }, 1000);
                  });
                case 21:
                  return _context.abrupt("return", false);
                case 22:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this3 = this;
          this.apiser.getDataForBuyer().then(function (res) {
            _this3.riceQualityType = res.riceQualityType;
            _this3.riceQualityData = res.riceQualityData;
            _this3.riceQualityDataArray = res.riceQualityDataArray;
            _this3.ports = res.ports;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getCategoryQualities",
        value: function getCategoryQualities(selectedQualityTypeInit) {
          var _this4 = this;
          this.apiser.getRiceQualities(selectedQualityTypeInit).then(function (res) {
            _this4.onlyRiceName = res.data;
            console.log(res.data);
            // this.getCategoryQualitiesForm(res.data);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getCategoryQualitiesForm",
        value: function getCategoryQualitiesForm(riceNameId) {
          var _this5 = this;
          this.apiser.getRiceQualitiesForms(riceNameId).then(function (res) {
            _this5.onlyRiceForms = res.data;
            console.log("res");
            console.log(_this5.onlyRiceForms);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getRiceWand",
        value: function getRiceWand() {
          var _this6 = this;
          console.log(this.quality);
          this.apiser.getRiceWand(this.quality).then(function (res) {
            _this6.riceWand = res.data;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getSellerINRPacking",
        value: function getSellerINRPacking() {
          var _this7 = this;
          this.apiser.getSellerINRPacking().then(function (res) {
            // this.riceWand = res.data;
            console.log(res.data);
            _this7.sellerPackingList = res.data;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getBuyerINRPacking",
        value: function getBuyerINRPacking() {
          var _this8 = this;
          this.apiser.getBuyerINRPacking().then(function (res) {
            // this.riceWand = res.data;
            console.log(res.data);
            _this8.buyerPackingList = res.data;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "changeQualityType",
        value: function changeQualityType(data) {
          this.selectedQualityType = data.detail.value;
          var selectedQualityTypeInit = 2;
          if (this.selectedQualityType == "BASMATI") {
            selectedQualityTypeInit = 1;
          }
          this.selectedQualityTypeInt = selectedQualityTypeInit;
          this.getCategoryQualities(selectedQualityTypeInit);
          this.riceQualityDataSelectedArray = this.riceQualityDataArray[data.detail.value.toLowerCase()];
          document.getElementById('quality').click();
          // this.selectedPackageData =
          //   this.riceQualityData[data.detail.value.toLowerCase()];
        }
      }, {
        key: "changeQuality",
        value: function changeQuality(data) {
          console.log(data);
          this.quality = data.detail.value;
          this.getCategoryQualitiesForm(data.detail.value);
          document.getElementById('qualityForm').click();
          console.log(this.quality);
        }
      }, {
        key: "textareaMaxLengthValidation",
        value: function textareaMaxLengthValidation() {
          console.log(this.quantity.toString());
          console.log(this.quantity.length);
          if (this.quantity.length > 5) {
            this.quantity = this.quantity.slice(0, 5);
          }
        }
      }, {
        key: "changeQualityForm",
        value: function changeQualityForm(data) {
          this.selectedGrade = 0;
          console.log();
          this.qualityForm = data.detail.value;
          // this.getCategoryQualitiesForm(data.detail.value);
          for (var i = 0; i < this.onlyRiceForms.length; i++) {
            if (this.onlyRiceForms[i].id == this.qualityForm) {
              this.selectedRiceFormAndName = this.onlyRiceForms[i];
              console.log(this.selectedRiceFormAndName);
            }
          }
          this.getRiceWand();
          document.getElementById('grade').click();
        }
      }, {
        key: "changeGrade",
        value: function changeGrade(data) {
          this.selectedGrade = data.detail.value;
          console.log(data);
        }
      }, {
        key: "changePacking",
        value: function changePacking(data) {
          var unprocessdata = data.detail.value.split("_");
          this.changePackingType = unprocessdata[0];
          this.selectedPackageName = unprocessdata[1];
          console.log(this.changePackingType);
          console.log(this.selectedPackageName);
        }
      }, {
        key: "changeBuyerPackingType",
        value: function changeBuyerPackingType(event) {
          console.log(event.detail.value);
          this.changedBuyerPackingType = event.detail.value;
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "changePort",
        value: function changePort(data) {
          console.log(data);
          var myData = data.detail.value.split("_");
          var selectedPortName = myData[0];
          var portValue = parseFloat(data.freight_25MT).toFixed(2);
          this.portName = selectedPortName;
        }
      }, {
        key: "clicked",
        value: function clicked() {
          console.log("i am here");
        }
      }]);
    }();
    BuyInrPage.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"]
      }, {
        type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__["FileChooser"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] // public imgPicker: ImagePicker
      }];
    };
    BuyInrPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-buy-inr",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./buy-inr.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/buy-inr/buy-inr.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./buy-inr.page.scss */"./src/app/buy-inr/buy-inr.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__["FileChooser"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] // public imgPicker: ImagePicker
    ])], BuyInrPage);

    /***/
  })
}]);
//# sourceMappingURL=buy-inr-buy-inr-module-es5.js.map