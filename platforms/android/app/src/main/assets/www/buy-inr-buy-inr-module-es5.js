function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-inr-buy-inr-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/buy-inr/buy-inr.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buy-inr/buy-inr.page.html ***!
    \*********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuyInrBuyInrPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header class=\"\">\n\t<ion-toolbar mode=\"ios\" style=\"background: #fff; --background: #fff\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Buy Query</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content id=\"content\" [scrollEvents]=\"true\" class=\"\">\n\t<div style=\"padding: 10px 20px;margin-bottom: 100px;\">\n\t\t<ion-item>\n\t\t\t<ion-label>Category*</ion-label>\n\t\t\t<!-- (ionChange)=\"changecountry($event)\" -->\n\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQualityType($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let qualityType of riceQualityType\" style=\"text-transform: capitalize;\">{{\n\t\t\t\t\tqualityType | uppercase }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Quality*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" id=\"quality\" (ionChange)=\"changeQuality($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let riceName of onlyRiceName\" value={{riceName.id}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ riceName.name }}</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option style=\"text-transform: capitalize;\">Other</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;margin-right: 15px;text-align: right;padding: 5px;\">{{quality}}</p> -->\n\t\t\t</ion-col>\n\n\t\t</ion-row>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Type*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" id=\"qualityForm\" (ionChange)=\"changeQualityForm($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let riceName of onlyRiceForms\" value={{riceName.id}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ riceName.name }}</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option style=\"text-transform: capitalize;\">Other</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;margin-right: 15px;text-align: right;padding: 5px;\">{{qualityForm}}</p> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<p style=\"padding: 0px;margin: 0px;text-align: right;\">{{ selectedRiceFormAndName?.quality }}{{\n\t\t\t\t\tselectedRiceFormAndName?.quality_name }}</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Grade*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" id=\"grade\" [(ngModel)]=\"selectedGrade\"\n\t\t\t\t\t\t(ionChange)=\"changeGrade($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let wand of riceWand\" value={{wand.id}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{\n\t\t\t\t\t\t\twand.get_wand_type.type }} {{ wand.value }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\n\t\t<!-- <ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div>\n\t\t\t\t\t<div *ngFor=\"let wand of riceWand\" style=\"padding: 0px 0px;\">\n\t\t\t\t\t\t<div (click)=\"selectedWand(wand)\" style=\"display: inline-block;width: 100%;padding: 0px 10px;border-radius: 14px;\" [ngStyle]=\"{'background': selectedGrade == wand.id ? '#92b243' : 'transparent' }\">\n\t\t\t\t\t\t\t<div style=\"width: 80%;float: left;\">\n\t\t\t\t\t\t\t\t<p style=\"margin: 10px 0px;\">{{ wand.get_wand_type.type }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style=\"width: 20%;float: left;\">\n\t\t\t\t\t\t\t\t<p style=\"margin: 10px 0px;\">{{ wand.value }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row> -->\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<!-- <ion-item class=\"packingSelect\" style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Packing*</ion-label> -->\n\t\t\t\t<!-- <ion-select placeholder=\"Select\" (ionChange)=\"changeBuyerPackingType($event)\">\n\t\t\t\t\t\t<ion-select-option value=\"0\"><p>Miller Packing</p></ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"1\"><p>Private Packing</p></ion-select-option>\n\t\t\t\t\t</ion-select> -->\n\n\t\t\t\t<ion-radio-group value=\"0\" (ionChange)=\"changeBuyerPackingType($event)\">\n\t\t\t\t\t<div style=\"\">\n\t\t\t\t\t\t<ion-label><ion-radio style=\"vertical-align: middle;\" value=\"0\">Miller Packing</ion-radio><span\n\t\t\t\t\t\t\t\tstyle=\"margin-left: 20px;\">Miller Packing</span></ion-label><br />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div style=\"\">\n\t\t\t\t\t\t<ion-label><ion-radio style=\"vertical-align: middle;\" value=\"1\">Private Packing\n\t\t\t\t\t\t\t</ion-radio><span style=\"margin-left: 20px;\">Private Packing</span></ion-label>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ion-radio-group>\n\t\t\t\t<!-- </ion-item> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"margin-bottom: 10px;\" *ngIf=\"changedBuyerPackingType == '0' \">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item class=\"packingSelect\" style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Packing*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePacking($event)\">\n\t\t\t\t\t\t<ion-select-option value=\"{{ '0_50KG PP' }}\">\n\t\t\t\t\t\t\t<p>50KG PP</p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"{{ '1_55KG PP' }}\">\n\t\t\t\t\t\t\t<p>55KG PP</p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<p style=\"padding: 0;margin: 0;margin-left: 15px;text-align: left;padding: 5px;\">{{selectedPackageName}}\n\t\t\t\t</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"margin-bottom: 10px;\" *ngIf=\"changedBuyerPackingType == '1' \">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item class=\"packingSelect\" style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Packing*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePacking($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let package of buyerPackingList\"\n\t\t\t\t\t\t\tvalue=\"{{ package.id+'_'+package.packing }}\">\n\t\t\t\t\t\t\t<p>{{package.packing}} {{ package?.description }}</p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<p style=\"padding: 0;margin: 0;margin-left: 15px;text-align: left;padding: 5px;\">{{selectedPackageName}}\n\t\t\t\t</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Quantity (Qtls)*</ion-label>\n\t\t\t<ion-input type=\"tel\" maxLength=\"5\" [(ngModel)]=\"quantity\" (ionChange)=\"textareaMaxLengthValidation()\"\n\t\t\t\tstyle=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\n\t\t<ion-label position=\"\">Additional Information*</ion-label>\n\t\t<ion-item>\n\t\t\t<ion-textarea rows=\"4\" [(ngModel)]=\"additionalinfo\" style=\"\"></ion-textarea>\n\t\t</ion-item>\n\n\n\t\t<div *ngIf=\"isError\" style=\"text-align: center;color: red;font-weight: 600\">\n\t\t\t<span>{{ errorMessage }}</span>\n\t\t</div>\n\t\t<ion-button expand=\"full\" shape=\"round\" (click)=\"save()\"\n\t\t\tstyle=\"--background: #000;color: #fff\">Submit</ion-button>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>";

    /***/
  },

  /***/"./src/app/buy-inr/buy-inr-routing.module.ts":
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
  },

  /***/"./src/app/buy-inr/buy-inr.module.ts":
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
  },

  /***/"./src/app/buy-inr/buy-inr.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/buy-inr/buy-inr.page.scss ***!
    \*******************************************/
  /*! exports provided: default */
  /***/
  function srcAppBuyInrBuyInrPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-item {\n  border: 1px solid #e1e1e1;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.item-native {\n  background: transparent;\n  background-color: transparent;\n  --background: transparent;\n  --background-color: transparent;\n}\n\n.packingSelect .select-text {\n  display: none;\n}\n\nion-radio::part(container) {\n  width: 20px;\n  height: 20px;\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #92b243;\n  border-color: transparent;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n\nion-toolbar {\n  --border-width: 0 0 0px !important;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9idXktaW5yL2J1eS1pbnIucGFnZS5zY3NzIiwic3JjL2FwcC9idXktaW5yL2J1eS1pbnIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFSTtFQUNJLGVBQUE7QUNBUjs7QURTQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNBO0VBQ0ksdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUNOSjs7QURVSTtFQUNJLGFBQUE7QUNQUjs7QURVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtBQ1JKOztBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1JKOztBRFdBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQ1JKOztBRFdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFFQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSx3QkFBQTtBQ1ZKOztBRGFBO0VBQ0ksa0NBQUE7QUNWSjs7QURZQTtFQUNJLGtDQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9idXktaW5yL2J1eS1pbnIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRmLXRyZWUuZXhhbXBsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvLyBjb2xvcjogI0ZGRjtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cblxuLy8gaW9uLXRvb2xiYXIge1xuLy8gICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbi8vICAgICBjb2xvcjogI0ZGRjtcbi8vIH1cblxuaW9uLWl0ZW0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjI1LCAyMjUsIDIyNSwgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhY2tpbmdTZWxlY3Qge1xuICAgIC5zZWxlY3QtdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuaW9uLXJhZGlvOjpwYXJ0KGNvbnRhaW5lcikge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xufVxuXG5pb24tcmFkaW86OnBhcnQobWFyaykge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuaW9uLXJhZGlvLnJhZGlvLWNoZWNrZWQ6OnBhcnQoY29udGFpbmVyKSB7XG4gICAgYmFja2dyb3VuZDogIzkyYjI0MztcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tcmFkaW8ucmFkaW8tY2hlY2tlZDo6cGFydChtYXJrKSB7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG5cbiAgICBib3JkZXItd2lkdGg6IDBweCAycHggMnB4IDBweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcblxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggIWltcG9ydGFudDtcbn1cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZXtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufSIsIi50Zi10cmVlLmV4YW1wbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYmFjay1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFja2luZ1NlbGVjdCAuc2VsZWN0LXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tcmFkaW86OnBhcnQoY29udGFpbmVyKSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcbn1cblxuaW9uLXJhZGlvOjpwYXJ0KG1hcmspIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pb24tcmFkaW8ucmFkaW8tY2hlY2tlZDo6cGFydChjb250YWluZXIpIHtcbiAgYmFja2dyb3VuZDogIzkyYjI0MztcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXJhZGlvLnJhZGlvLWNoZWNrZWQ6OnBhcnQobWFyaykge1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci13aWR0aDogMHB4IDJweCAycHggMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/buy-inr/buy-inr.page.ts":
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
      _createClass(BuyInrPage, [{
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
      return BuyInrPage;
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
  }
}]);
//# sourceMappingURL=buy-inr-buy-inr-module-es5.js.map