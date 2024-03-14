function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trade-detail-trade-detail-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/trade-detail/trade-detail.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trade-detail/trade-detail.page.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTradeDetailTradeDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content id=\"content\">\n\t<div style=\"margin-bottom: 100px;\">\n\t\t<div class=\"header-container\">\n\t\t\t<div class=\"\"></div>\n\t\t\t<div class=\"lightgreen\">\n\t\t\t\t<div style=\"margin-top: 0px;text-align: center;padding: 10px 0px;\">\n\t\t\t\t\t<ion-row style=\"margin: 0px 0px;\">\n\t\t\t\t\t\t<ion-col style=\"text-align: left;padding-left: 20px;\" (click)=\"back()\">\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-back-outline\" style=\"font-size: 20px;\"></ion-icon>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"6\" align=\"center\">\n\t\t\t\t\t\t\t<h4 style=\"padding: 0px;margin: 0px;\">Trade Detail</h4>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<ion-row class=\"rice-gallery\" *ngIf=\"tradeDetails != undefined && tradeDetails?.tradeType == 1\">\n\t\t\t<ion-col\n\t\t\t\tstyle=\"padding: 0px 0px 15px 0px;background-color: #fffbd6;border-radius: 0px 0px 25px 25px;overflow: hidden;\">\n\t\t\t\t<ion-slides pager=\"false\" [options]=\"slideOpts\">\n\t\t\t\t\t<ion-slide *ngIf=\"tradeDetails?.cooked_file != null\"\n\t\t\t\t\t\tstyle=\"width: 100%;padding: 15px;height: 200px;\">\n\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/'+tradeDetails?.cooked_file )\"\n\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/{{ tradeDetails?.cooked_file }}\" class=\"slide-image\">\n\t\t\t\t\t</ion-slide>\n\t\t\t\t\t<ion-slide *ngIf=\"tradeDetails?.uncooked_file != null\"\n\t\t\t\t\t\tstyle=\"width: 100%;padding: 15px;height: 200px;\">\n\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/'+tradeDetails?.uncooked_file)\"\n\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/{{ tradeDetails?.uncooked_file }}\" class=\"slide-image\">\n\t\t\t\t\t</ion-slide>\n\t\t\t\t</ion-slides>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\n\t\t<ng-container *ngIf=\"tradeDetails != undefined \">\n\t\t\t<div style=\"padding: 12px 5px;\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<p class=\"pt-0\" style=\"font-size: 12px;\">Valid Till: {{\n\t\t\t\t\t\t\t\tgenerateDateForValid(tradeDetails?.created_at ,\n\t\t\t\t\t\t\t\ttradeDetails?.validDays) }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<p class=\" pt-0\" style=\"font-size: 16px;font-weight: bold;\">\n\t\t\t\t\t\t\t\t{{tradeDetails?.rice_name_data?.name }}\n\t\t\t\t\t\t\t\t{{tradeDetails?.rice_form_milestone3?.name }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<p class=\" pt-0\" style=\"font-size: 14px;\">\n\t\t\t\t\t\t\t\t{{tradeDetails?.rice_grade?.get_wand_type?.type}}\n\t\t\t\t\t\t\t\t{{tradeDetails?.rice_grade?.value }} </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row *ngIf=\"tradeDetails?.tradeType == 1\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<p class=\" pt-0\" style=\"font-size: 16px;color: rgba(119, 154, 32, 1);font-weight: bold;\">₹\n\t\t\t\t\t\t\t\t{{tradeDetails?.offerPrice }} Price in Qtls (Ex. Factory) </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;;\">Packing</p>\n\t\t\t\t\t\t\t\t<p> : {{ (tradeDetails?.tradeType == 2) ? tradeDetails?.rice_packing_buyer?.packing+'\n\t\t\t\t\t\t\t\t\t'+tradeDetails?.rice_packing_buyer?.description :\n\t\t\t\t\t\t\t\t\ttradeDetails?.rice_packing_seller?.description }} </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;;\">Quantity</p>\n\t\t\t\t\t\t\t\t<p> : {{ tradeDetails?.quantity }} qtls </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\n\t\t\t\t<ion-row *ngIf=\"tradeDetails?.location && tradeDetails?.tradeType == 1\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Location</p>\n\t\t\t\t\t\t\t\t<p> : {{ tradeDetails?.location }} </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\n\t\t\t\t<ion-row *ngIf=\"tradeDetails?.additioanlInfo\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Additional Info</p>\n\t\t\t\t\t\t\t\t: {{tradeDetails?.additioanlInfo}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\n\n\t\t\t<div>\n\t\t\t\t<ion-row style=\"padding: 10px 20px;\" class=\"hide\" id=\"showingInterest\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>Thanks for showing your interest, Our team will contact you shortly.</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row style=\"padding: 10px 20px;\" *ngIf=\"tradeDetails?.trade_interest\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>Thanks for showing your interest, Our team will contact you shortly.</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row style=\"padding: 10px 20px;justify-content: center;\" *ngIf=\"tradeDetails?.status == 1\">\n\t\t\t\t\t<ion-col size=\"6\" class=\"interestedButton\" *ngIf=\"!tradeDetails?.trade_interest\"\n\t\t\t\t\t\t(click)=\"userShowInterest(tradeDetails?.id , $event)\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p>Interested</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\" class=\"callNowButton\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p><a href=\"tel:+919877092004\" class=\"contactuser\"\n\t\t\t\t\t\t\t\t\tstyle=\"text-decoration: none;color: #fff;\">Call now</a>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row style=\"padding: 10px 20px;\" *ngIf=\"tradeDetails?.status == 2\">\n\t\t\t\t\t<ion-col class=\"\">\n\t\t\t\t\t\t<div style=\"text-align: center;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP EXPIRED.png\" style=\"width: 200px;\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row style=\"padding: 10px 20px;\" *ngIf=\"tradeDetails?.status == 3\">\n\t\t\t\t\t<ion-col class=\"\">\n\t\t\t\t\t\t<div style=\"text-align: center;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 200px;\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\n\n\n\t\t</ng-container>\n\n\t\t<!-- <ion-row class=\"ion-padding table-row padd-5\" style=\"padding-top: 0px;\">\n\n\t\t\t<ion-col class=\"price-table dashboard\">\n\t\t\t\t<table class=\"table \">\n\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<ng-container *ngFor=\"let list of spec | keyvalue\">\n\t\t\t\t\t\t\t<tr *ngFor=\"let listitems of list.value | keyvalue\">\n\t\t\t\t\t\t\t\t<td class=\"sticky-col first-col left pl-10\"\n\t\t\t\t\t\t\t\t\tstyle=\"font-family: 'Poppins-SemiBold';\">\n\t\t\t\t\t\t\t\t\t{{ listitems.key }}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"type-columns pl-60\" style=\"width:180px\">\n\t\t\t\t\t\t\t\t\t<div class=\"priceData \" style=\"font-family: 'Poppins-Regular';\">\n\t\t\t\t\t\t\t\t\t\t{{ listitems.value }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</tbody>\n\n\t\t\t\t</table>\n\t\t\t</ion-col>\n\t\t</ion-row> -->\n\t</div>\n\n</ion-content>\n<div>\n\t<app-menu></app-menu>\n\n</div>";

    /***/
  },

  /***/"./src/app/trade-detail/trade-detail-routing.module.ts":
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
  },

  /***/"./src/app/trade-detail/trade-detail.module.ts":
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
  },

  /***/"./src/app/trade-detail/trade-detail.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/trade-detail/trade-detail.page.scss ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppTradeDetailTradeDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".galleryContent {\n  padding: 0px;\n}\n\n.ricetype {\n  font-size: 18px;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: transparent important;\n}\n\n.price-table table thead tr th {\n  background-color: transparent important;\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n}\n\ntable thead,\ntable tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 2px solid #ededed !important;\n}\n\n.specification ion-row {\n  padding: 0;\n}\n\n.specification ion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.specification thead th {\n  font-weight: inherit;\n  text-align: left;\n}\n\n.ricetype {\n  font-size: 24px;\n  font-family: Arial;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.ricetype .black {\n  color: #000;\n}\n\ntable tbody tr td {\n  color: #000;\n  font-size: 14px !important;\n}\n\n.card .image {\n  text-align: center;\n}\n\n.type-columns {\n  padding-left: 40px;\n}\n\n.pl-40 {\n  padding-left: 40px !important;\n}\n\n.pl-60 {\n  padding-left: 40px !important;\n}\n\ntable tbody {\n  border: 0px !important;\n}\n\n#card th {\n  background-color: transparent !important;\n  --background-color: transparent !important;\n}\n\n#card {\n  position: absolute;\n  width: -webkit-fill-available;\n  padding-bottom: 25px;\n  margin: 0px;\n  border-radius: 0px 0px 22px 22px;\n}\n\n.swiper-slide img {\n  border-radius: 25px;\n}\n\nion-toolbar {\n  --border-width: 0 0 0px !important;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0px !important;\n}\n\np {\n  padding: 0;\n  margin: 0;\n}\n\n.interestedButton {\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n  background-color: #000;\n  padding: 15px 0px;\n  text-transform: capitalize;\n  border-radius: 100px;\n  width: 40%;\n}\n\n.callNowButton {\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n  background-color: #91b243;\n  padding: 15px 0px;\n  text-transform: capitalize;\n  border-radius: 100px;\n  width: 40%;\n}\n\n.hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC90cmFkZS1kZXRhaWwvdHJhZGUtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHJhZGUtZGV0YWlsL3RyYWRlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FES0k7RUFDSSxXQUFBO0VBNEJBLGVBQUE7QUM3QlI7O0FESVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0FDRmhCOztBRElnQjtFQUNJLHVDQUFBO0VBQ0EsK0JBQUE7QUNGcEI7O0FEUVk7RUFDSSxZQUFBO0FDTmhCOztBRFFnQjtFQUNJLGVBQUE7QUNOcEI7O0FEa0JBOztFQUVJLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQ0FBQTtBQ2ZKOztBRG1CSTtFQUNJLFVBQUE7QUNoQlI7O0FEbUJJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNqQlI7O0FEcUJRO0VBRUksb0JBQUE7RUFDQSxnQkFBQTtBQ3BCWjs7QUQwQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FDdkJKOztBRHlCSTtFQUNJLFdBQUE7QUN2QlI7O0FENEJBO0VBRUksV0FBQTtFQUNBLDBCQUFBO0FDMUJKOztBRDhCSTtFQUNJLGtCQUFBO0FDM0JSOztBRCtCQTtFQUNJLGtCQUFBO0FDNUJKOztBRCtCQTtFQUNJLDZCQUFBO0FDNUJKOztBRCtCQTtFQUNJLDZCQUFBO0FDNUJKOztBRCtCQTtFQUNJLHNCQUFBO0FDNUJKOztBRG1DQTtFQUNJLHdDQUFBO0VBQ0EsMENBQUE7QUNoQ0o7O0FEbUNBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDaENKOztBRG9DSTtFQUNJLG1CQUFBO0FDakNSOztBRHFDQTtFQUNJLGtDQUFBO0FDbENKOztBRHFDQTtFQUNJLGtDQUFBO0FDbENKOztBRHFDQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FDbENKOztBRHFDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNsQ0o7O0FEc0NBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQ25DSjs7QURzQ0E7RUFDSSxhQUFBO0FDbkNKIiwiZmlsZSI6InNyYy9hcHAvdHJhZGUtZGV0YWlsL3RyYWRlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeUNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wcmljZS10YWJsZSB7XG5cbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgdGhlYWQge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCBpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcblxuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG59XG5cbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHkge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VkZWRlZCAhaW1wb3J0YW50O1xufVxuXG4uc3BlY2lmaWNhdGlvbiB7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgaW9uLWNvbCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMFxuICAgIH1cblxuICAgIHRoZWFkIHtcbiAgICAgICAgdGgge1xuICAgICAgICAgICAgLy8gZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucmljZXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAuYmxhY2sge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59XG5cblxudGFibGUgdGJvZHkgdHIgdGQge1xuICAgIC8vIGNvbG9yOiAjOTJCMjQzO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZCB7XG4gICAgLmltYWdlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLnR5cGUtY29sdW1ucyB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4XG59XG5cbi5wbC00MCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC02MCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRib2R5IHtcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xufVxuXG4vLyB0Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTliMTtcbi8vIH1cblxuI2NhcmQgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4jY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjJweCAyMnB4O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgICBpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggIWltcG9ydGFudDtcbn1cblxucCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5pbnRlcmVzdGVkQnV0dG9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jYWxsTm93QnV0dG9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ1LCAxNzgsIDY3LCAxKTtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB3aWR0aDogNDAlXG59XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmdhbGxlcnlDb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wcmljZS10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIge1xuICBoZWlnaHQ6IDM0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgaW1wb3J0YW50O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG50YWJsZSB0aGVhZCxcbnRhYmxlIHRib2R5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZGVkZWQgIWltcG9ydGFudDtcbn1cblxuLnNwZWNpZmljYXRpb24gaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDA7XG59XG4uc3BlY2lmaWNhdGlvbiBpb24tY29sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnNwZWNpZmljYXRpb24gdGhlYWQgdGgge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cbi5yaWNldHlwZSAuYmxhY2sge1xuICBjb2xvcjogIzAwMDtcbn1cblxudGFibGUgdGJvZHkgdHIgdGQge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIC5pbWFnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnR5cGUtY29sdW1ucyB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLnBsLTQwIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC02MCB7XG4gIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0Ym9keSB7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNjYXJkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4jY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMnB4IDIycHg7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufVxuXG5wIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW50ZXJlc3RlZEJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmNhbGxOb3dCdXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MWIyNDM7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/trade-detail/trade-detail.page.ts":
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
        this.generateDateForValid = function (date, days) {
          console.log(date);
          var result = new Date(date);
          console.log(result);
          console.log(result.getDate());
          console.log(result.getDay());
          console.log(parseInt(days));
          result.setDate(result.getDate() + parseInt(days));
          console.log(result);
          return result.getDate() + '/' + (result.getMonth() + 1) + '/' + result.getFullYear();
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
        this.imageUrl = this.apiser.imageUrl;
        // this.getTradeDetails(this.galleryId);
        this.userFirstName = localStorage.getItem('name')[0];
      }
      _createClass(TradeDetailPage, [{
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
      return TradeDetailPage;
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
  }
}]);
//# sourceMappingURL=trade-detail-trade-detail-module-es5.js.map