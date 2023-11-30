function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trade-inr-trade-inr-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/trade-inr/trade-inr.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trade-inr/trade-inr.page.html ***!
    \*************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTradeInrTradeInrPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header class=\"green\">\n\t<ion-toolbar mode=\"ios\" style=\"background: transparent; --background: transparent\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Trade</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content id=\"content\" class=\"lightgreen\" style=\"height: 100%;\">\n\t<div style=\"height: 90%;overflow: scroll;\">\n\t\t<div>\n\t\t\t<ul style=\"padding: 10px;\">\n\t\t\t\t<li *ngFor=\"let bids of mybids\" class=\"demandedData\" style=\"border-bottom: 2px solid #ededed;\">\n\t\t\t\t\t<div\n\t\t\t\t\t\tstyle=\"margin: 0;border: 3px solid #92b243;border-radius: 20px;margin-bottom: 20px;overflow: hidden;\">\n\t\t\t\t\t\t<ion-row style=\"background: #92b243;\">\n\t\t\t\t\t\t\t<ion-col size=\"10\">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\tstyle=\"margin: 0px;color: #fffbd6;padding: 10px 0px;font-weight: bold;margin-left: 10px;\">\n\t\t\t\t\t\t\t\t\tTRADE-{{ (bids?.id + 1) }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"2\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px;color: #fffbd6;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"bids?.tradeType == 1\"\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"(bids?.tradeType == 1)?{'background-color': 'green'} : {'background-color': '#324ab2'}\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 5px 10px;margin-top: 5px;border-radius: 5px;\">Sell</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"bids?.tradeType == 2\"\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"(bids?.tradeType == 1)?{'background-color': 'green'} : {'background-color': '#324ab2'}\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 5px 10px;margin-top: 5px;border-radius: 5px;\">Buy</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Rice</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t{{ bids?.rice_quality_master.quality }} {{ bids?.rice_form_milestone3.name }} {{\n\t\t\t\t\t\t\t\t\tbids?.rice_grade.get_wand_type[0].type }}\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"bids?.quality_type == 1 \"> Basmati Rice</ng-container>\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"bids?.quality_type == 2 \"> Non-Basmati Rice</ng-container>\n\t\t\t\t\t\t\t\t\t({{ bids?.rice_grade.value }})\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<!-- <ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Rice Form</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t{{ bids?.rice_form_milestone3.name }} \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Grade</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t{{ bids?.rice_grade.get_wand_type[0].type }}:\n\t\t\t\t\t\t\t\t\t{{ bids?.rice_grade.value }} \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row> -->\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Packing</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t{{ bids?.rice_packing.packing }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Quantity(MT)</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t{{ bids?.quantity }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Price (PMT)\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t₹{{ bids?.offerPrice }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Ex-Warehouse</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px;text-transform: capitalize;\">\n\t\t\t\t\t\t\t\t\t{{ bids?.location }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Validity</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t{{ generateDate(bids?.validDays) }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"6\"\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/{{ bids?.cooked_file }}\"\n\t\t\t\t\t\t\t\t\tstyle=\"width: 190px;height: 130px;padding: 0 5px;\" alt=\"cooked\"\n\t\t\t\t\t\t\t\t\t(click)=\"openModal(imagePre+'uploads/'+bids?.cooked_file)\"\n\t\t\t\t\t\t\t\t\tonerror=\"this.src='../../assets/img/No_image_available.svg.png';\">\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"6\"\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/{{ bids?.uncooked_file }}\"\n\t\t\t\t\t\t\t\t\tstyle=\"width: 190px;height: 130px;padding: 0 5px;\" alt=\"cooked\"\n\t\t\t\t\t\t\t\t\t(click)=\"openModal(imagePre+'uploads/'+bids?.uncooked_file)\"\n\t\t\t\t\t\t\t\t\tonerror=\"this.src='../../assets/img/No_image_available.svg.png';\">\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row *ngIf=\"bids?.status == 3 && bids?.status == '3'\">\n\t\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row *ngIf=\"bids?.status == 2 && bids?.status == '3'\">\n\t\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t\t<!-- Deal is taken -->\n\t\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<div style=\"text-align: center;padding: 10px;background: #92b243;\">\n\t\t\t\t\t\t\t<div class=\"blink_me\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"call-outline\" style=\"color: #fff;\"></ion-icon>\n\t\t\t\t\t\t\t\t<a href=\"tel:+919877092004\" class=\"contactuser\"\n\t\t\t\t\t\t\t\t\tstyle=\"text-decoration: none;background: #92b243;color: #ffff;font-weight: bold;font-size: 17px;margin-left: 5px;\">Call\n\t\t\t\t\t\t\t\t\tSNTC</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>";

    /***/
  },

  /***/"./src/app/trade-inr/trade-inr-routing.module.ts":
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
  },

  /***/"./src/app/trade-inr/trade-inr.module.ts":
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
  },

  /***/"./src/app/trade-inr/trade-inr.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/trade-inr/trade-inr.page.scss ***!
    \***********************************************/
  /*! exports provided: default */
  /***/
  function srcAppTradeInrTradeInrPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes blinker {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC90cmFkZS1pbnIvdHJhZGUtaW5yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHJhZGUtaW5yL3RyYWRlLWluci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2Q0FBQTtVQUFBLHFDQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLFVBQUE7RUNDTjtFRENFO0lBQ0ksWUFBQTtFQ0NOO0VEQ0U7SUFDSSxVQUFBO0VDQ047QUFDRjs7QURWQTtFQUNJO0lBQ0ksVUFBQTtFQ0NOO0VEQ0U7SUFDSSxZQUFBO0VDQ047RURDRTtJQUNJLFVBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdHJhZGUtaW5yL3RyYWRlLWluci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxpbmtfbWUge1xuICAgIGFuaW1hdGlvbjogYmxpbmtlciAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmtlciB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH07XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH07XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfTtcbn0iLCIuYmxpbmtfbWUge1xuICBhbmltYXRpb246IGJsaW5rZXIgMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */";

    /***/
  },

  /***/"./src/app/trade-inr/trade-inr.page.ts":
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
      _createClass(TradeINRPage, [{
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
      return TradeINRPage;
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
  }
}]);
//# sourceMappingURL=trade-inr-trade-inr-module-es5.js.map