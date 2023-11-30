function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-inr-selling-inr-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/selling-inr/selling-inr.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selling-inr/selling-inr.page.html ***!
    \*****************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSellingInrSellingInrPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header class=\"green\">\n\t<ion-toolbar mode=\"ios\" style=\"background: transparent; --background: transparent\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Sell Query</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content id=\"content\" [scrollEvents]=\"true\" class=\"lightgreen\">\n\t<div style=\"padding: 10px 10px;margin-bottom: 100px;\">\n\t\t<ion-item>\n\t\t\t<ion-label>Category*</ion-label>\n\t\t\t<!-- (ionChange)=\"changecountry($event)\" -->\n\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQualityType($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let qualityType of riceQualityType\" style=\"text-transform: capitalize;\">{{\n\t\t\t\t\tqualityType | uppercase }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 3px solid #92b243;border-radius: 10px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Quality*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQuality($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let riceName of onlyRiceName | keyvalue\" value={{riceName.value}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ riceName.key }}</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option style=\"text-transform: capitalize;\">Other</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;margin-right: 15px;text-align: right;padding: 5px;\">{{quality}}</p> -->\n\t\t\t</ion-col>\n\n\t\t</ion-row>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 3px solid #92b243;border-radius: 10px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Form*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQualityForm($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let riceName of onlyRiceForms\" value={{riceName.id}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ riceName.name }}</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option style=\"text-transform: capitalize;\">Other</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;margin-right: 15px;text-align: right;padding: 5px;\">{{qualityForm}}</p> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<p style=\"padding: 0px;margin: 0px;text-align: right;\">{{ selectedRiceFormAndName?.quality }}{{\n\t\t\t\t\tselectedRiceFormAndName?.quality_name }}</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 3px solid #92b243;border-radius: 10px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Grade*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeGrade($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let wand of riceWand\" value={{wand.id}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ wand.get_wand_type[0].type }} {{ wand.value }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\n\t\t<!-- <ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div>\n\t\t\t\t\t<div *ngFor=\"let wand of riceWand\" style=\"padding: 0px 0px;\">\n\t\t\t\t\t\t<div (click)=\"selectedWand(wand)\" style=\"display: inline-block;width: 100%;padding: 0px 10px;border-radius: 14px;\" [ngStyle]=\"{'background': selectedGrade == wand.id ? '#92b243' : 'transparent' }\">\n\t\t\t\t\t\t\t<div style=\"width: 80%;float: left;\">\n\t\t\t\t\t\t\t\t<p style=\"margin: 10px 0px;\">{{ wand.get_wand_type[0].type }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style=\"width: 20%;float: left;\">\n\t\t\t\t\t\t\t\t<p style=\"margin: 10px 0px;\">{{ wand.value }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row> -->\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 3px solid #92b243;border-radius: 10px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item class=\"packingSelect\" style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Packing*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePacking($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let package of sellerPackingList\"\n\t\t\t\t\t\t\tvalue=\"{{ package.id+'_'+package.packing }}\">\n\t\t\t\t\t\t\t<p>{{package.packing}} </p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"other\">\n\t\t\t\t\t\t\t<p>Any Other</p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<p style=\"padding: 0;margin: 0;margin-left: 15px;text-align: left;padding: 5px;\">{{selectedPackageName}}\n\t\t\t\t</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row *ngIf=\"selectedPackageName == '26KG BOPP' || selectedPackageName == '30KG BOPP' \">\n\t\t\t<!-- <ion-col>\n\t\t\t\t<button (click)=\"pickBagImage()\" style=\"padding: 10px;background-color: #92b243;border-radius: 5px;\">Pick packing image</button>\n\t\t\t</ion-col> -->\n\t\t\t<!-- <ion-col text-center>\n\t\t\t\t<ion-button (click)=\"imagePicker()\">Select Images</ion-button>\n\t\t\t</ion-col> -->\n\t\t\t\t<ion-label position=\"\" style=\"\">Packing Bag Image</ion-label>\n\t\t\t\t<input type=\"file\" (change)=\"packageImage($event)\" style=\"background: #91b247;--background: #91b247;padding: 10px;margin-bottom: 10px;border-radius: 5px;\"/>\n\t\t</ion-row>\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Quantity (Qtls)*</ion-label>\n\t\t\t<ion-input type=\"tel\" maxLength=\"5\" [(ngModel)]=\"quantity\" (ionChange)=\"textareaMaxLengthValidation()\" style=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Ex-factory price ₹(Qtls)*</ion-label>\n\t\t\t<ion-input type=\"tel\" maxLength=\"5\" [(ngModel)]=\"offerPrice\" style=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Validity (Days)*</ion-label>\n\t\t\t<ion-input type=\"tel\" maxLength=\"5\" [(ngModel)]=\"validDays\" style=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Warehouse Location*</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"warehouselocation\" style=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\n\t\t<ion-row>\n\t\t\t<ion-col text-center>\n\t\t\t\t<!-- <ion-button (click)=\"pickUncookedImage($event)\">Uncooked Rice Image</ion-button> -->\n\t\t\t\t<ion-label position=\"\" style=\"\">Rice Image*</ion-label>\n\t\t\t\t<input type=\"file\" (change)=\"pickUncookedImage($event)\" style=\"    background: #91b247;--background: #91b247;padding: 10px;margin-bottom: 10px;border-radius: 5px;\"/>\n\n\t\t\t</ion-col>\n\t\t\t<ion-col text-center>\n\t\t\t\t<!-- <ion-button (click)=\"pickCookedImage($event)\">Select Images</ion-button> -->\n\t\t\t\t<ion-label position=\"\" style=\"\">Cooked Image*</ion-label>\n\t\t\t\t<input type=\"file\" (change)=\"pickCookedImage($event)\" style=\"    background: #91b247;--background: #91b247;padding: 10px;margin-bottom: 10px;border-radius: 5px;\"/>\n\n\t\t\t</ion-col>\n\t\t\t<!-- <ion-col>\n\t\t\t\t<button (click)=\"pickUncookedImage()\" style=\"padding: 10px;background-color: #92b243;border-radius: 5px;\">Uncooked Rice Image </button>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<button (click)=\"pickCookedImage()\" style=\"padding: 10px;background-color: #92b243;border-radius: 5px;\">Cooked Rice Image</button>\n\t\t\t</ion-col> -->\n\t\t</ion-row>\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Contact Person*</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"contactperson\" style=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Contact Mobile*</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"contactMobile\" style=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\t\n\t\t<div *ngIf=\"isError\" style=\"text-align: center;color: red;font-weight: 600\">\n\t\t\t<span>{{ errorMessage }}</span>\n\t\t</div>\n\t\t<ion-button color=\"success\" expand=\"full\" shape=\"round\" (click)=\"save()\">Submit</ion-button>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>";

    /***/
  },

  /***/"./src/app/selling-inr/selling-inr-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/selling-inr/selling-inr-routing.module.ts ***!
    \***********************************************************/
  /*! exports provided: SellingINRPageRoutingModule */
  /***/
  function srcAppSellingInrSellingInrRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SellingINRPageRoutingModule", function () {
      return SellingINRPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _selling_inr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./selling-inr.page */"./src/app/selling-inr/selling-inr.page.ts");
    var routes = [{
      path: '',
      component: _selling_inr_page__WEBPACK_IMPORTED_MODULE_3__["SellingINRPage"]
    }];
    var SellingINRPageRoutingModule = /*#__PURE__*/_createClass(function SellingINRPageRoutingModule() {
      _classCallCheck(this, SellingINRPageRoutingModule);
    });
    SellingINRPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SellingINRPageRoutingModule);

    /***/
  },

  /***/"./src/app/selling-inr/selling-inr.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/selling-inr/selling-inr.module.ts ***!
    \***************************************************/
  /*! exports provided: SellingINRPageModule */
  /***/
  function srcAppSellingInrSellingInrModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SellingINRPageModule", function () {
      return SellingINRPageModule;
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
    var _selling_inr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./selling-inr-routing.module */"./src/app/selling-inr/selling-inr-routing.module.ts");
    /* harmony import */
    var _selling_inr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./selling-inr.page */"./src/app/selling-inr/selling-inr.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var SellingINRPageModule = /*#__PURE__*/_createClass(function SellingINRPageModule() {
      _classCallCheck(this, SellingINRPageModule);
    });
    SellingINRPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _selling_inr_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellingINRPageRoutingModule"]],
      declarations: [_selling_inr_page__WEBPACK_IMPORTED_MODULE_6__["SellingINRPage"]],
      providers: []
    })], SellingINRPageModule);

    /***/
  },

  /***/"./src/app/selling-inr/selling-inr.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/selling-inr/selling-inr.page.scss ***!
    \***************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSellingInrSellingInrPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\nion-item {\n  border: 3px solid #92b243;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.item-native {\n  background: transparent;\n  background-color: transparent;\n  --background: transparent;\n  --background-color: transparent;\n}\n\n.packingSelect .select-text {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9zZWxsaW5nLWluci9zZWxsaW5nLWluci5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlbGxpbmctaW5yL3NlbGxpbmctaW5yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENJO0VBQ0ksZUFBQTtBQ0NSOztBREdBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDQUo7O0FESUk7RUFDSSxhQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9zZWxsaW5nLWluci9zZWxsaW5nLWluci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGYtdHJlZS5leGFtcGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDk0ZjU4O1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzkyYjI0MztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFja2luZ1NlbGVjdCB7XG4gICAgLnNlbGVjdC10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59IiwiLnRmLXRyZWUuZXhhbXBsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICNGRkY7XG59XG4uYmFjay1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDk0ZjU4O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXI6IDNweCBzb2xpZCAjOTJiMjQzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wYWNraW5nU2VsZWN0IC5zZWxlY3QtdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */";

    /***/
  },

  /***/"./src/app/selling-inr/selling-inr.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/selling-inr/selling-inr.page.ts ***!
    \*************************************************/
  /*! exports provided: SellingINRPage */
  /***/
  function srcAppSellingInrSellingInrPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SellingINRPage", function () {
      return SellingINRPage;
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
    var SellingINRPage = /*#__PURE__*/function () {
      function SellingINRPage(apiser, location, navCtrl, actionSheetController, transfer, file, filechooser, filePath, httpClient, loaderCtrl, camera // public imgPicker: ImagePicker
      ) {
        _classCallCheck(this, SellingINRPage);
        this.apiser = apiser;
        this.location = location;
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
        this.transfer = transfer;
        this.file = file;
        this.filechooser = filechooser;
        this.filePath = filePath;
        this.httpClient = httpClient;
        this.loaderCtrl = loaderCtrl;
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
        this.croppedImagepath = "";
        this.croppedBagImagepath = "";
        this.croppedUncookedImagepath = "";
        this.croppedCookedImagepath = "";
        this.fileTransfer = "";
        this.contactperson = "";
        this.contactMobile = "";
        this.isLoading = false;
        this.imagePickerOptions = {
          maximumImagesCount: 1,
          quality: 50
        };
      }
      _createClass(SellingINRPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
          this.getSellerINRPacking();
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
          // this.filechooser.open().then((uri: any) => {
          // 	this.filePath.resolveNativePath(uri).then((nativePath) => {
          // 		this.uploadImage(nativePath,"https://snjtradelink.com/staging/public/api/submit/sell/query");
          // 	})
          // });
          // return false;
          var options = {
            quality: 100,
            sourceType: sourceType,
            //   destinationType: this.camera.DestinationType.DATA_URL, //base64
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            _this.croppedBagImagepath = "data:image/jpeg;base64," + imageData;
            _this.uploadImage(imageData, "https://snjtradelink.com/staging/public/api/submit/sell/query");
            console.log(imageData);
          }, function (err) {
            // Handle error
          });
        }
      }, {
        key: "getFile",
        value: function getFile() {
          // 	this.file.checkDir(this.file.dataDirectory, 'mydir').then((res) => console.log('Directory exists')).catch(err =>
          //   console.log('Directory doesnt exist'));
        }
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
            var headers, formData, posteddata, postedData;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.apiser.presentLoader('Please wait...');
                  headers = {
                    enctype: "multipart/form-data;",
                    Accept: "application/json"
                  };
                  console.log(this.selectedQualityTypeInt);
                  console.log(this.quality);
                  console.log(this.qualityForm);
                  console.log(this.selectedGrade);
                  console.log(this.changePackingType);
                  console.log(this.warehouselocation);
                  console.log(this.contactperson);
                  console.log(this.contactMobile);
                  console.log(this.quantity);
                  console.log(this.offerPrice);
                  console.log(this.validDays);
                  console.log(this.uncookedFile);
                  console.log(this.cookedImageFile);
                  if (!(this.selectedQualityTypeInt != undefined || this.selectedQualityTypeInt != 'undefined' || this.quality != undefined || this.quality != 'undefined' || this.qualityForm != undefined || this.qualityForm != 'undefined' || this.selectedGrade != undefined || this.selectedGrade != 'undefined' || this.changePackingType != undefined || this.changePackingType != 'undefined' || this.warehouselocation != undefined || this.warehouselocation != 'undefined' || this.contactperson != undefined || this.contactperson != 'undefined' || this.contactMobile != undefined || this.contactMobile != 'undefined' || this.quantity != undefined || this.quantity != 'undefined' || this.offerPrice != undefined || this.offerPrice != 'undefined' || this.uncookedFile != undefined || this.uncookedFile != 'undefined' || this.cookedImageFile != undefined || this.cookedImageFile != 'undefined')) {
                    _context.next = 20;
                    break;
                  }
                  this.apiser.presentToast('Required fields are missing..');
                  setTimeout(function () {
                    _this2.loaderCtrl.dismiss();
                    _this2.apiser.dismissLoader();
                  }, 1000);
                  _context.next = 41;
                  break;
                case 20:
                  formData = new FormData();
                  formData.append("_method", "PATCH");
                  formData.append("selectedQualityTypeInt", this.selectedQualityTypeInt);
                  formData.append("quality", this.quality);
                  formData.append("qualityForm", this.qualityForm);
                  formData.append("selectedGrade", this.selectedGrade);
                  formData.append("changePackingType", this.changePackingType);
                  formData.append("warehouselocation", this.warehouselocation);
                  formData.append("contactperson", this.contactperson);
                  formData.append("contactMobile", this.contactMobile);
                  if (this.packageImageFile != undefined) {
                    formData.append("packageImageFile", this.packageImageFile, this.packageImageFile.name);
                  }
                  formData.append("quantity", this.quantity);
                  formData.append("offerPrice", this.offerPrice);
                  formData.append("validDays", this.validDays);
                  formData.append("uncookedFile", this.uncookedFile, this.uncookedFile.name);
                  formData.append("cookedImageFile", this.cookedImageFile, this.cookedImageFile.name);
                  posteddata = {
                    method: "POST",
                    body: formData
                  };
                  fetch("https://snjtradelink.com/staging/public/api/submit/sell/query", posteddata).then(function () {
                    setTimeout(function () {
                      _this2.apiser.dismissLoader();
                    }, 1000);
                  })["catch"](function () {
                    setTimeout(function () {
                      _this2.apiser.dismissLoader();
                    });
                  });
                  return _context.abrupt("return", false);
                case 41:
                  return _context.abrupt("return", false);
                case 42:
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
          // this.selectedPackageData =
          //   this.riceQualityData[data.detail.value.toLowerCase()];
        }
      }, {
        key: "changeQuality",
        value: function changeQuality(data) {
          console.log(data);
          this.quality = data.detail.value;
          this.getCategoryQualitiesForm(data.detail.value);
          console.log(this.quality);
          this.onlyRiceName.forEach(function (data) {
            console.log(data);
          });
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
      }]);
      return SellingINRPage;
    }();
    SellingINRPage.ctorParameters = function () {
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

    SellingINRPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-selling-inr",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./selling-inr.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/selling-inr/selling-inr.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./selling-inr.page.scss */"./src/app/selling-inr/selling-inr.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__["FileChooser"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] // public imgPicker: ImagePicker
    ])], SellingINRPage);

    /***/
  }
}]);
//# sourceMappingURL=selling-inr-selling-inr-module-es5.js.map