function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
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
  },

  /***/"./src/app/components/components.module.ts":
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
  },

  /***/"./src/app/menu/menu.component.scss":
  /*!******************************************!*\
    !*** ./src/app/menu/menu.component.scss ***!
    \******************************************/
  /*! exports provided: default */
  /***/
  function srcAppMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".footer-tabs {\n  position: fixed;\n  height: 90px;\n  bottom: -8px;\n  width: 100%;\n  z-index: 9999999;\n  background-color: #fffbd6;\n  padding-top: 0px;\n}\n\n.tab-icon img {\n  width: 25px;\n}\n\n.tab-icon h5 {\n  margin: 0px;\n  font-size: 9.9px;\n  color: #5f5f5f;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.truck {\n  width: 53px !important;\n  margin-top: 5px !important;\n}\n\n.unseenmessage {\n  position: absolute;\n  top: 5px;\n  border-radius: 100%;\n  width: 15px;\n  background: #92B243;\n  color: #FFFBD6;\n  font-size: 0px;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNJLFdBQUE7QUNBUjs7QURFSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBUjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXRhYnN7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogOTBweDtcbiAgICBib3R0b206IC04cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTk5OTk5OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmQ2O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi50YWItaWNvbntcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgIH1cbiAgICBoNXtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogOS45cHg7XG4gICAgICAgIGNvbG9yOiAjNWY1ZjVmO1xuICAgIH1cbn1cblxuLnJpcHBsZS1wYXJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udHJ1Y2t7XG4gICAgd2lkdGg6IDUzcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLnVuc2Vlbm1lc3NhZ2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogIzkyQjI0MztcbiAgICBjb2xvcjogI0ZGRkJENjtcbiAgICBmb250LXNpemU6IDBweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG59IiwiLmZvb3Rlci10YWJzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvdHRvbTogLThweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTk5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZDY7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi50YWItaWNvbiBpbWcge1xuICB3aWR0aDogMjVweDtcbn1cbi50YWItaWNvbiBoNSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDkuOXB4O1xuICBjb2xvcjogIzVmNWY1Zjtcbn1cblxuLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50cnVjayB7XG4gIHdpZHRoOiA1M3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG4udW5zZWVubWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICBjb2xvcjogI0ZGRkJENjtcbiAgZm9udC1zaXplOiAwcHg7XG4gIGhlaWdodDogMTVweDtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/menu/menu.component.ts":
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
      _createClass(MenuComponent, [{
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
              _this5.newsWidth = _this5.news.length * 8 + 'px';
            } else {
              _this5.news = res.data['inr'][0].title;
              _this5.newsWidth = _this5.news.length * 8 + 'px';
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
      return MenuComponent;
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
  }
}]);
//# sourceMappingURL=default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0-es5.js.map