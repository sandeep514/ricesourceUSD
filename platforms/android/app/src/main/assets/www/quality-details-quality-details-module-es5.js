function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quality-details-quality-details-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/quality-details/quality-details.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quality-details/quality-details.page.html ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQualityDetailsQualityDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header class=\"green\">\n\t<ion-toolbar mode=\"ios\" style=\"background: transparent; --background: transparent;padding: 0px;\" >\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"closeModal()\">\n\t\t\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t\t\t</ion-buttons>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t\n\t\t\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"lightgreen\">\n\t<div style=\"margin-bottom: 50px;\">\n\n\t\t<div style=\"border-bottom: 2px solid #000;margin: 20px 0px\">\t\n\t\t\t<div style=\"text-align: center;font-weight: bold;font-size: 20px;color: #92b243;\">\n\t\t\t\t\t{{ riceQuality?.quality }} {{ riceQuality?.quality_name }}\n\t\t\t</div>\t\t\n\t\t\t<p style=\"font-size: 18px;font-weight: bold;text-align: center;\">Customised Packing Price</p>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"3\" style=\"font-size: 20px;line-height: 2.6\">Packing: </ion-col>\n\t\t\t\t<ion-col size=\"8.5\" style=\"border: 2px solid #92b243;border-radius: 9px\">\n\t\t\t\t\t<ion-row >\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<ion-item class=\"select\" style=\"background: #fffbd6;--background: #fffbd6;\">\n\t\t\t\t\t\t\t\t<ion-label>Packing</ion-label>\n\n\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeBag($event)\">\n\t\t  \t\t\t\t\t\t\t<ion-select-option *ngFor=\"let bag of packing\" value=\"{{ bag?.id }}\"> {{ bag?.bag_size }} <div></div> {{ bag?.bag_type }}\n\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\n\t\t\t\t\t\t\t  </ion-item>\t\t\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row style=\"width: 100%;\">\n\t\t\t\t\t\t<ion-col style=\"text-align: right;margin-right: 15px;\">{{ selectedPackage }}</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t  \n\t\t\t\t</ion-col>\n\t\t\t\t\n\t\t\t</ion-row>\n\n\t\t\t<ion-row >\n\t\t\t\t<ion-col size=\"4\" style=\"font-size: 20px;line-height: 2.5\">FOB Price: </ion-col>\n\t\t\t\t<ion-col size=\"8\" >\n\t\t\t\t\t<ion-item class=\"select\" style=\"background: #fffbd6;--background: #fffbd6\">\n\t\t\t\t\t\t<!-- <ion-label>region</ion-label> -->\n\t\t\t\t\t\t<h4 style=\"padding: 0;margin: 0;width: 100%;text-align: right;\">${{ fobminData }} - ${{ fobmaxData }} PMT</h4>\n\t\t\t\t\t  </ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t\n\t\t\t<ion-row >\n\t\t\t\t<ion-col size=\"3\" style=\"font-size: 20px;line-height: 2.6\">Port: </ion-col>\n\t\t\t\t<ion-col size=\"8.5\">\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"12\" style=\"background: #fffbd6;--background: #fffbd6;border: 2px solid #92b243;border-radius: 9px;margin-top: 15px;\">\n\t\t\t\t\t\t\t<ion-item class=\"select\" style=\"background: #fffbd6;--background: #fffbd6\">\n\t\t\t\t\t\t\t\t<ion-label>REGION</ion-label>\n\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select\" [(ngModel)]=\"selectedUserRegion\" (ionChange)=\"changeRegion($event)\">\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let region of regions\">{{ region }}</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<p style=\"padding: 0;margin: 0;float: right;margin-right: 10px;\">{{ selectedUserRegion }}</p>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"12\" style=\"background: #fffbd6;--background: #fffbd6;border: 2px solid #92b243;border-radius: 9px;margin-top: 15px;\">\n\t\t\t\t\t\t\t<ion-item class=\"select\" style=\"background: #fffbd6;--background: #fffbd6\">\n\t\t\t\t\t\t\t\t<ion-label>COUNTRY</ion-label>\n\t\t\n\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeCountry($event)\">\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let ctry of country\">{{ ctry }}</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<p style=\"padding: 0;margin: 0;float: right;margin-right: 10px;\">{{  selectedUserCountry }}</p>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"12\" style=\"background: #fffbd6;--background: #fffbd6;border: 2px solid #92b243;border-radius: 9px;margin-top: 15px;\">\n\t\t\t\t\t\t\t<ion-item class=\"select\" style=\"background: #fffbd6;--background: #fffbd6\">\n\t\t\t\t\t\t\t\t<ion-label>PORT</ion-label>\n\t\t\n\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePort($event)\">\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let ctry of selectedPorts\">{{ ctry }}</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<p style=\"padding: 0;margin: 0;float: right;margin-right: 10px;\">{{  defalutPort }}</p>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<p style=\"margin-left: 5px;font-size: 20px;\">Ocean Freight PMT: </p>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col  size=\"7\">\n\t\t\t\t\t<p style=\"font-size: 18px; text-transform: uppercase; font-weight: bold; list-style: none; padding: 0; margin: 0; margin-top: 15px;text-align: right;margin-right: 14px;\">{{ defalutPort }} (${{ defalutPortPrice }})</p>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row >\n\t\t\t\t<ion-col size=\"4\" style=\"font-size: 20px;line-height: 2.5\">CIF Price:</ion-col>\n\t\t\t\t<ion-col size=\"8\" >\n\t\t\t\t\t<ion-item class=\"select\" style=\"background: #fffbd6;--background: #fffbd6\">\n\t\t\t\t\t\t<h4 style=\"padding: 0;margin: 0;width: 100%;text-align: right;\">${{CIFminData}} - ${{ CIFmaxData }} PMT</h4>\n\t\t\t\t\t  </ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\t\t<!-- <div>\n\t\t\t{{ riceQuality?.quality }} {{ riceQuality?.quality_name }}\n\t\t</div> -->\n\t\t<div style=\"text-align: center;font-size: 20px;\">\n\t\t\tRice Graph\n\t\t</div>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"0.5\">\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<div id=\"highcharts\" style=\"width: 100%; height:300\"></div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"0.5\">\n\t\t\t</ion-col>\n\t\t\t\n\t\t</ion-row>\n\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>";

    /***/
  },

  /***/"./src/app/quality-details/quality-details-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/quality-details/quality-details-routing.module.ts ***!
    \*******************************************************************/
  /*! exports provided: QualityDetailsPageRoutingModule */
  /***/
  function srcAppQualityDetailsQualityDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QualityDetailsPageRoutingModule", function () {
      return QualityDetailsPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _quality_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./quality-details.page */"./src/app/quality-details/quality-details.page.ts");
    var routes = [{
      path: '',
      component: _quality_details_page__WEBPACK_IMPORTED_MODULE_3__["QualityDetailsPage"]
    }];
    var QualityDetailsPageRoutingModule = /*#__PURE__*/_createClass(function QualityDetailsPageRoutingModule() {
      _classCallCheck(this, QualityDetailsPageRoutingModule);
    });
    QualityDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QualityDetailsPageRoutingModule);

    /***/
  },

  /***/"./src/app/quality-details/quality-details.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/quality-details/quality-details.module.ts ***!
    \***********************************************************/
  /*! exports provided: QualityDetailsPageModule */
  /***/
  function srcAppQualityDetailsQualityDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QualityDetailsPageModule", function () {
      return QualityDetailsPageModule;
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
    var _quality_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./quality-details-routing.module */"./src/app/quality-details/quality-details-routing.module.ts");
    /* harmony import */
    var _quality_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./quality-details.page */"./src/app/quality-details/quality-details.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");

    // import { IonicSelectableModule } from 'ionic-selectable';
    var QualityDetailsPageModule = /*#__PURE__*/_createClass(function QualityDetailsPageModule() {
      _classCallCheck(this, QualityDetailsPageModule);
    });
    QualityDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
      // IonicSelectableModule,
      _quality_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["QualityDetailsPageRoutingModule"]],
      declarations: [_quality_details_page__WEBPACK_IMPORTED_MODULE_6__["QualityDetailsPage"]]
    })], QualityDetailsPageModule);

    /***/
  },

  /***/"./src/app/quality-details/quality-details.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/quality-details/quality-details.page.scss ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppQualityDetailsQualityDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\n.header-title {\n  color: #FFF;\n}\n\n.header-md::after {\n  background: none;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-toolbar ion-icon {\n  color: #000;\n}\n\n.header-title {\n  color: #000;\n}\n\nion-title {\n  padding: 0;\n  text-align: center;\n}\n\n.ion-card {\n  width: 900px;\n}\n\nion-card {\n  width: 17%;\n  text-align: center;\n  float: left;\n}\n\n.tf-tree {\n  clear: both;\n}\n\n.ioncard1 {\n  background: #d8f9fe;\n}\n\n.ioncard2 {\n  background: #d8f9fe;\n}\n\n.ioncard3 {\n  background: #d8f9fe;\n}\n\n.ioncard4 {\n  background: #d8f9fe;\n}\n\n.ioncard5 {\n  background: #d8f9fe;\n}\n\ntable,\nthead,\ntbody {\n  border: 1px solid #eeeeee;\n}\n\ntable {\n  width: 100%;\n}\n\ntable thead th {\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\ntable tbody tr {\n  border-bottom: 1px solid #ededed;\n}\n\ntable tbody td {\n  width: 50%;\n  text-align: center;\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.active {\n  background: #c9a27c;\n  --background: #c9a27c;\n  background-color: #c9a27c;\n  --background-color: #c9a27c;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n}\n\n.price-table table thead tr th {\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n  border-right: 1px solid #dfdfdf;\n}\n\ntable,\ntable thead,\ntable tbody,\ntable thead th,\ntable tbody tr,\ntable tbody tr td {\n  border: 0 !important;\n}\n\ntable thead,\ntable tbody,\ntable tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n\ntable thead tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tbody tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tr th {\n  padding: 0;\n  margin: 0;\n}\n\ntable tbody tr td {\n  text-align: left;\n  margin-left: 20px;\n  padding-left: 20px;\n}\n\n.pl-60 {\n  padding-left: 60px !important;\n}\n\n.pl-10 {\n  padding-left: 10px !important;\n}\n\n.left {\n  text-align: left;\n}\n\n.active {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.segment-button-checked {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.scroll-arrow {\n  position: absolute;\n  margin-top: 3.2%;\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 0px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.ios .header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 5px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.header-ios ion-toolbar {\n  border: 0px;\n  --border-width: 0px ;\n}\n\n.ios .type-columns {\n  border: 0px solid transparent !important;\n  --border: 0px solid transparent !important;\n}\n\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.basmatiState {\n  margin: 10px 30px 0px 30px;\n}\n\n.ricetype {\n  color: #000;\n  font-size: 30px;\n  font-family: GlacialIndifference-bold;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.font-17 {\n  font-size: 14px;\n  font-family: GlacialIndifference-bold;\n}\n\n.green {\n  color: #92B243;\n}\n\n.green td {\n  text-transform: capitalize;\n  font-size: 18px !important;\n}\n\n.porttitle {\n  font-size: 20px;\n}\n\nion-segment ion-segment-button ion-label {\n  margin: 0;\n  padding: 0;\n  margin-top: -2px;\n}\n\n.imageprev {\n  min-height: 200px;\n  max-height: 200px;\n  height: 200px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.paddingBottom100 {\n  padding-bottom: 100px;\n}\n\n.item-native {\n  background-color: transparent;\n  --background-color: transparent;\n  background: transparent;\n  --background: transparent;\n}\n\n.item-ionic-selectable {\n  border: 2px solid #92b243;\n  border-radius: 10px;\n}\n\n.item-ionic-selectable .item-native {\n  background-color: transparent;\n  --background-color: transparent;\n  background: transparent;\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9xdWFsaXR5LWRldGFpbHMvcXVhbGl0eS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcXVhbGl0eS1kZXRhaWxzL3F1YWxpdHktZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURBSTtFQUNJLGVBQUE7QUNFUjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQUk7RUFDSSxXQUFBO0FDRVI7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBOzs7RUFHSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBRENRO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtBQ0NaOztBREdRO0VBQ0ksZ0NBQUE7QUNEWjs7QURHUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNEWjs7QURNQTtFQUNJLDBCQUFBO0FDSEo7O0FETUE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ0hKOztBRFFJO0VBQ0ksV0FBQTtFQXVCQSxlQUFBO0FDM0JSOztBRE1ZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNKaEI7O0FETWdCO0VBRUksK0JBQUE7QUNMcEI7O0FEVVk7RUFDSSxZQUFBO0FDUmhCOztBRFNnQjtFQUNJLGVBQUE7RUFHQSwrQkFBQTtBQ1RwQjs7QURpQkE7Ozs7OztFQU1JLG9CQUFBO0FDZEo7O0FEaUJBOzs7RUFHSSxrQ0FBQTtFQUNBLHdDQUFBO0FDZEo7O0FEZ0JBO0VBQ0ksMkNBQUE7QUNiSjs7QURlQTtFQUNJLDJDQUFBO0FDWko7O0FEZUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ1pKOztBRGtCWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2ZoQjs7QURxQkE7RUFDSSw2QkFBQTtBQ2xCSjs7QURxQkE7RUFDSSw2QkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxnQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUNsQko7O0FEcUJBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0FDbEJKOztBRHFCQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLHlDQUFBO0VBQ0EsaURBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEc0JBO0VBQ0kseUNBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ3JCSjs7QUR1QkE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUNwQko7O0FEdUJJO0VBQ0ksd0NBQUE7RUFDQSwwQ0FBQTtBQ3BCUjs7QUR3QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsUUFBQTtBQ3RCSjs7QUR5QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsUUFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSwwQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxlQUFBO0VBQ0EscUNBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksY0FBQTtBQ3ZCSjs7QUR3Qkk7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0FDdEJSOztBRDBCQTtFQUNJLGVBQUE7QUN2Qko7O0FENEJRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ3pCWjs7QUQ4QkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQzNCSjs7QUQ4QkE7RUFDSSxhQUFBO0FDM0JKOztBRDhCQTtFQUNJLGNBQUE7QUMzQko7O0FEOEJBO0VBQ0kscUJBQUE7QUMzQko7O0FEOEJBO0VBQ0ksNkJBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUMzQko7O0FENkJBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQzFCSjs7QUQyQkk7RUFDSSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ3pCUiIsImZpbGUiOiJzcmMvYXBwL3F1YWxpdHktZGV0YWlscy9xdWFsaXR5LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRmLXRyZWUuZXhhbXBsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICB9XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0OTRmNTg7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG5pb24tdGl0bGUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW9uLWNhcmQge1xuICAgIHdpZHRoOiA5MDBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIHdpZHRoOiAxNyU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udGYtdHJlZSB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5pb25jYXJkMSB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDMge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkNCB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQ1IHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG50YWJsZSxcbnRoZWFkLFxudGJvZHkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0aGVhZCB7XG4gICAgICAgIHRoIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0Ym9keSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xuICAgICAgICB9XG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWVlZWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2M5YTI3YztcbiAgICAtLWJhY2tncm91bmQ6ICNjOWEyN2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3YztcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNjOWEyN2M7XG59XG5cbi5wcmljZS10YWJsZSB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG59XG5cbnRhYmxlLFxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRoZWFkIHRoLFxudGFibGUgdGJvZHkgdHIsXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnRcbn1cblxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRib2R5IHRyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG50YWJsZSB0aGVhZCB0cntcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxudGFibGUgdGJvZHkgdHJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbn1cblxudGFibGUgdHIgdGgge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG50YWJsZSB7XG4gICAgdGJvZHkge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wbC02MCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0xMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMy4yJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAvLyBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgLS13aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgLS1taW4td2lkdGg6IGF1dG87XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG4uaW9zIC5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtaW4taGVpZ2h0OiAzMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgLy8gYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIC0td2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIC0tbWluLXdpZHRoOiBhdXRvO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xufVxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJ7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweFxufVxuLmlvc3tcbiAgICAudHlwZS1jb2x1bW5ze1xuICAgICAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uc2Nyb2xsLWFycm93IC5sZWZ0aWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIHRvcDogMHB4O1xufVxuXG4uc2Nyb2xsLWFycm93IC5yaWdodGljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgdG9wOiAwcHg7XG59XG5cbi5iYXNtYXRpU3RhdGUge1xuICAgIG1hcmdpbjogMTBweCAzMHB4IDBweCAzMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC0xNyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBHbGFjaWFsSW5kaWZmZXJlbmNlLWJvbGQ7XG59XG5cbi5ncmVlbiB7XG4gICAgY29sb3I6ICM5MkIyNDM7XG4gICAgdGQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ucG9ydHRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHhcbn0gICBcblxuaW9uLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmltYWdlcHJldiB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZGRpbmdCb3R0b20xMDAge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLml0ZW0tbmF0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5pdGVtLWlvbmljLXNlbGVjdGFibGV7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0MztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5pdGVtLW5hdGl2ZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn0iLCIudGYtdHJlZS5leGFtcGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5iYWNrLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM0OTRmNTg7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW9uLXRvb2xiYXIgaW9uLWljb24ge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5pb24tdGl0bGUge1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pb24tY2FyZCB7XG4gIHdpZHRoOiA5MDBweDtcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogMTclO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udGYtdHJlZSB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uaW9uY2FyZDEge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDIge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDMge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDQge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDUge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG50YWJsZSxcbnRoZWFkLFxudGJvZHkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGFibGUgdGhlYWQgdGgge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbn1cbnRhYmxlIHRib2R5IHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG59XG50YWJsZSB0Ym9keSB0ZCB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWVlZWU7XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjYzlhMjdjO1xuICAtLWJhY2tncm91bmQ6ICNjOWEyN2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWEyN2M7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3Yztcbn1cblxuLnByaWNlLXRhYmxlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB7XG4gIGhlaWdodDogMzRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB7XG4gIGhlaWdodDogMzVweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cblxudGFibGUsXG50YWJsZSB0aGVhZCxcbnRhYmxlIHRib2R5LFxudGFibGUgdGhlYWQgdGgsXG50YWJsZSB0Ym9keSB0cixcbnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHksXG50YWJsZSB0Ym9keSB0ciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRoZWFkIHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGJvZHkgdHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0ciB0aCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxudGFibGUgdGJvZHkgdHIgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ucGwtNjAge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLnBsLTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzkyQjI0MztcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMy4yJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtaW4taGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgd2lkdGg6IGF1dG87XG4gIC0td2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogYXV0bztcbiAgLS1taW4td2lkdGg6IGF1dG87XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG5cbi5pb3MgLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4taGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgd2lkdGg6IGF1dG87XG4gIC0td2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogYXV0bztcbiAgLS1taW4td2lkdGg6IGF1dG87XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgYm9yZGVyOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggO1xufVxuXG4uaW9zIC50eXBlLWNvbHVtbnMge1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGwtYXJyb3cgLmxlZnRpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxOHB4O1xuICB0b3A6IDBweDtcbn1cblxuLnNjcm9sbC1hcnJvdyAucmlnaHRpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogOTk5OTk5O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMnB4O1xuICB3aWR0aDogMThweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5iYXNtYXRpU3RhdGUge1xuICBtYXJnaW46IDEwcHggMzBweCAwcHggMzBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IEdsYWNpYWxJbmRpZmZlcmVuY2UtYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC0xNyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IEdsYWNpYWxJbmRpZmZlcmVuY2UtYm9sZDtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6ICM5MkIyNDM7XG59XG4uZ3JlZW4gdGQge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wb3J0dGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi5pbWFnZXByZXYge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZGRpbmdCb3R0b20xMDAge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLml0ZW0taW9uaWMtc2VsZWN0YWJsZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uaXRlbS1pb25pYy1zZWxlY3RhYmxlIC5pdGVtLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/quality-details/quality-details.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/quality-details/quality-details.page.ts ***!
    \*********************************************************/
  /*! exports provided: QualityDetailsPage */
  /***/
  function srcAppQualityDetailsQualityDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QualityDetailsPage", function () {
      return QualityDetailsPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! jquery */"./node_modules/jquery/dist/jquery.js");
    /* harmony import */
    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../components.service */"./src/app/components.service.ts");
    /* harmony import */
    var _planpage_planpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../planpage/planpage.page */"./src/app/planpage/planpage.page.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var QualityDetailsPage = /*#__PURE__*/function () {
      function QualityDetailsPage(navCtrl, apiser, loading, compSer, ModelCtrl, componentService, activRoute) {
        var _this = this;
        _classCallCheck(this, QualityDetailsPage);
        this.navCtrl = navCtrl;
        this.apiser = apiser;
        this.loading = loading;
        this.compSer = compSer;
        this.ModelCtrl = ModelCtrl;
        this.componentService = componentService;
        this.activRoute = activRoute;
        this.selectedChartData = "15_Days";
        this.scrollDepthTriggered = false;
        this.scrollLength = 0;
        this.scrollPosition = 'top';
        this.ricename = '';
        this.rice = '';
        this.userFirstName = '';
        this.paymentAmount = 1000;
        this.currency = "INR";
        this.selectedstate = localStorage.getItem('state');
        this.selectedriceType = localStorage.getItem('riceType');
        this.chartInt = localStorage.getItem('chartInt');
        this.selectedChartData = "15_Days";
        this.getChartInterval();
        this.compSer.isUserExpired.subscribe(function (res) {
          if (localStorage.getItem('isExpired') == 'true') {
            _this.presentModel();
          }
        });
        this.ports = [{
          id: 1,
          name: 'Tokai'
        }, {
          id: 2,
          name: 'Vladivostok'
        }, {
          id: 3,
          name: 'Navlakhi'
        }];
        this.activRoute.params.subscribe(function (params) {
          _this.riceQualityId = params.riceQuality;
          _this.getAllCountryPorts();
        });
      }
      _createClass(QualityDetailsPage, [{
        key: "presentModel",
        value: function presentModel() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var model;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.ModelCtrl.create({
                    component: _planpage_planpage_page__WEBPACK_IMPORTED_MODULE_6__["PlanpagePage"],
                    animated: true
                  });
                case 2:
                  model = _context.sent;
                  _context.next = 5;
                  return model.present();
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "gotoProfile",
        value: function gotoProfile() {
          this.navCtrl.navigateForward(['profile']);
        }
      }, {
        key: "parseValue",
        value: function parseValue(value) {
          return value.split(' ').join('_');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userFirstName = localStorage.getItem('name')[0];
        }
      }, {
        key: "getChartInterval",
        value: function getChartInterval() {
          // this.apiser.getChartInterval().then((res:any) => {
          // 	this.chartIntervals = res.chartinterval;
          // });
        }
      }, {
        key: "presentLoader",
        value: function presentLoader(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.loading.create({
                    message: message
                  });
                case 2:
                  this.loader = _context2.sent;
                  _context2.next = 5;
                  return this.loader.present();
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "loginProfile",
        value: function loginProfile() {}
      }, {
        key: "scroll",
        value: function scroll(direction, className) {
          if (direction == 'left') {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + className).animate({
              scrollLeft: "-=135px"
            }, "slow");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + className).animate({
              scrollLeft: "+=135px"
            }, "slow");
          }
        }
      }, {
        key: "changeName",
        value: function changeName(name) {
          var newname = name.split('_').join(' ').toUpperCase();
          return newname;
        }
      }, {
        key: "getAllCountryPorts",
        value: function getAllCountryPorts() {
          var _this2 = this;
          this.componentService.presentLoading().then(function () {
            _this2.apiser.getAllPorts(_this2.riceQualityId).then(function (res) {
              _this2.packing = res.packing;
              _this2.FOB = res.FOB;
              _this2.fobminData = res.FOB.fobmin;
              _this2.fobmaxData = res.FOB.fobmax;
              _this2.ports = res.ports;
              _this2.regions = Object.keys(res.ports).sort();
              _this2.portsArray = Object.values(res.ports);
              _this2.riceQuality = res.riceQuality;
              _this2.fiftykgMaster = res.fiftykgMaster;
              _this2.defalutPort = res.defalutPort;
              _this2.selectedUserCountry = res.defalutPortDetail[0].country;
              _this2.selectedUserRegion = res.defalutPortDetail[0].region;
              console.log(_this2.defalutPort);
              _this2.defalutPortPrice = parseFloat(res.defalutPortPrice);
              _this2.CIFminData = parseFloat(res.FOB.fobmin) + _this2.defalutPortPrice;
              _this2.CIFmaxData = parseFloat(res.FOB.fobmax) + _this2.defalutPortPrice;
              _this2.selectedPackage = res.fiftykgMaster.bag_size + ' ' + res.fiftykgMaster.bag_type;
              Highcharts.stockChart('highcharts', {
                chart: {
                  alignTicks: false,
                  backgroundColor: '#fffbd6',
                  marginLeft: 40
                },
                yAxis: {
                  opposite: false,
                  labels: {
                    align: 'left'
                  },
                  title: {
                    text: "Price in $",
                    x: -12
                  }
                },
                rangeSelector: {
                  selected: 0,
                  inputEnabled: false,
                  buttons: [{
                    type: 'week',
                    count: 1,
                    text: '1W'
                  }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                  }, {
                    type: 'month',
                    count: 2,
                    text: '2m'
                  }, {
                    type: 'month',
                    count: 3,
                    text: '3m'
                  }, {
                    type: 'month',
                    count: 4,
                    text: '4m'
                  }, {
                    type: 'month',
                    count: 5,
                    text: '5m'
                  }, {
                    type: 'month',
                    count: 6,
                    text: '6m'
                  }, {
                    type: 'month',
                    count: 7,
                    text: '7m'
                  }, {
                    type: 'month',
                    count: 8,
                    text: '8m'
                  }, {
                    type: 'month',
                    count: 9,
                    text: '9m'
                  }, {
                    type: 'month',
                    count: 10,
                    text: '10m'
                  }, {
                    type: 'month',
                    count: 11,
                    text: '11m'
                  }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                  }]
                },
                series: [{
                  fontSize: '11px',
                  color: '#92b243',
                  type: 'line',
                  name: '$',
                  data: res.chartData.combinedData,
                  dataGrouping: {
                    units: [['week', [1] // allowed multiples
                    ], ['month', [1, 2, 3, 4, 6]]]
                  }
                }]
              });
              console.log("kjnk");
              _this2.componentService.loadingController.dismiss();
            }, function (err) {
              _this2.componentService.loadingController.dismiss();
            });
          });
        }
      }, {
        key: "getbagIndex",
        value: function getbagIndex(selectedData) {
          var packingList = this.packing;
          return new Promise(function (resolve, reject) {
            if (packingList.length == 0) {
              reject(false);
            } else {
              for (var i = 0; i < packingList.length; i++) {
                if (selectedData == packingList[i].id) {
                  resolve(i);
                }
              }
            }
          });
        }
      }, {
        key: "changeBag",
        value: function changeBag(data) {
          var _this3 = this;
          this.getbagIndex(data.detail.value).then(function (res) {
            var bag_size = _this3.packing[res]['bag_size'];
            var bag_type = _this3.packing[res]['bag_type'];
            var bag_PMT_USD = _this3.packing[res]['PMT_USD'];
            _this3.selectedPackage = bag_size + ' ' + bag_type;
            var packingPMT_USD = bag_PMT_USD;
            var modifiedAmount = parseFloat(packingPMT_USD).toFixed(2);
            var fobmin = parseFloat(_this3.fobminData).toFixed(2);
            var fobmax = parseFloat(_this3.fobmaxData).toFixed(2);
            var fiftyKGBagSize = parseFloat(_this3.fiftykgMaster.PMT_USD).toFixed(2);
            var removedMinFiftyKgBag = fobmin - fiftyKGBagSize;
            var removedMaxFiftyKgBag = fobmax - fiftyKGBagSize;
            var newFOBminDATA = parseFloat(removedMinFiftyKgBag + parseFloat(modifiedAmount));
            var newFOBmaxDATA = parseFloat(removedMaxFiftyKgBag + parseFloat(modifiedAmount));
            _this3.fobminData = newFOBminDATA;
            _this3.fobmaxData = newFOBmaxDATA;
            console.log(newFOBminDATA);
            console.log(newFOBmaxDATA);
            console.log(_this3.defalutPortPrice);
            _this3.CIFminData = newFOBminDATA + Number(_this3.defalutPortPrice);
            _this3.CIFmaxData = newFOBmaxDATA + Number(_this3.defalutPortPrice);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "changeRegion",
        value: function changeRegion(data) {
          var region = data.detail.value;
          this.selectedRegion = region;
          this.country = Object.keys(this.ports[region]).sort();
          this.defalutPort = '';
          this.selectedUserCountry = '';
        }
      }, {
        key: "changeCountry",
        value: function changeCountry(data) {
          var countries = data.detail.value;
          this.selectedCountry = countries;
          this.selectedPorts = this.ports[this.selectedRegion][this.selectedCountry];
          this.selectedPorts = Object.keys(this.selectedPorts).sort();
          this.selectedUserCountry = this.selectedCountry;
        }
      }, {
        key: "changePort",
        value: function changePort(data) {
          var oldDefaultPortName = this.defalutPort;
          var oldReplacedWithUnderscore = oldDefaultPortName.split(' ').join('_');
          var OldportPrice = this.defalutPortPrice;
          this.defalutPort = data.detail.value;
          var portData = this.ports[this.selectedRegion][this.selectedCountry][data.detail.value];
          this.defalutPortPrice = portData[0].freight_25MT_1MT;
          this.CIFminData = parseFloat(this.CIFminData) - OldportPrice + parseFloat(portData[0].freight_25MT_1MT);
          this.CIFmaxData = parseFloat(this.CIFmaxData) - OldportPrice + parseFloat(portData[0].freight_25MT_1MT);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.navCtrl.pop();
          if (localStorage.getItem('apptype') == 'OTHER') {
            this.navCtrl.navigateForward(['prices']);
          } else {
            this.navCtrl.navigateForward(['priceusd']);
          }
        }
      }]);
      return QualityDetailsPage;
    }();
    QualityDetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }];
    };
    QualityDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quality-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./quality-details.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/quality-details/quality-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./quality-details.page.scss */"./src/app/quality-details/quality-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])], QualityDetailsPage);

    /***/
  }
}]);
//# sourceMappingURL=quality-details-quality-details-module-es5.js.map