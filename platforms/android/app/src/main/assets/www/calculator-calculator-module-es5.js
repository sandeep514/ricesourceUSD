function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculator-calculator-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.page.html ***!
    \***************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalculatorCalculatorPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header class=\"green\">\n\t<ion-toolbar  mode=\"ios\"  style=\"background: transparent; --background: transparent\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t\t<ion-title class=\"header-title porttitle\">Calculator (PMT)</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-row *ngIf=\"modalStatus == true\" class=\"overlay\" style=\"position: absolute;z-index: 9999;background: #000;height: 100%;width: 100%;top: 0;opacity: 0.7;\"></ion-row>\n\t<ion-row *ngIf=\"modalStatus == true\" style=\"background: #fffbd6;position: absolute;z-index: 9999999;top: 9%;width: 95%;height: 80%;border-radius: 23px;border: 2px solid #92b243;overflow: hidden;/* top: 5%; */margin: 0 auto;left: 2%;\">\n\t\t<ion-row style=\"width: 100%;\">\n\t\t\t<ion-row style=\"height: 40px;width: 100%;\">\n\t\t\t\t<p style=\"width: 100%;text-align: right;margin-right: 20px;font-weight: bold;color: #92b243;\" (click)=\"updateModel()\" >Close</p>\n\t\t\t</ion-row>\n\t\t\t<ion-content class=\"lightgreen\">\n\t\t\t\t<div>\n\t\t\t\t\t<ion-row style=\"padding-top: 14px;\">\n\t\t\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t\t\t<ion-item class=\"select\" style=\"background: #fffbd6;--background: #fffbd6;border: 4px solid #92b243;border-radius: 9px;margin-right: 5px;\">\n\t\t\t\t\t\t\t\t<!-- <ion-label>Region</ion-label> -->\n\t\t\t\t\t\t\t\t<ion-select placeholder=\"Region\" (ionChange)=\"changecountry($event)\">\n\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let region of regions\">{{ region }}</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t\t\t<ion-item class=\"select\" style=\"background: #fffbd6;--background: #fffbd6;border: 4px solid #92b243;border-radius: 9px;\">\n\t\t\t\t\t\t\t\t<!-- <ion-label>Country</ion-label> -->\n\t\t\t\t\t\t\t\t<ion-select placeholder=\"Country\" (ionChange)=\"getPortList($event)\">\n\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let country of countries\">{{ country }}</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\n\t\t\t\t\t<ng-container >\n\t\t\t\t\t\t<ion-row class=\"ion-padding table-row padd-5 paddingBottom100\" style=\"padding: 0px;margin: 0px;\">\n\t\t\t\t\t\t\t<ion-col class=\"price-table dashboard\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<table class=\"table\" >\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th class=\" type-columns black\" style=\"font-weight: bold;width:37%;font-size: 14px !important;text-align: left;padding-left: 12px;\" >\n\t\t\t\t\t\t\t\t\t\t\t\tPort\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th class=\" type-columns black\" style=\"font-weight: bold;width:30%;font-size: 14px !important;text-align: left;\">\n\t\t\t\t\t\t\t\t\t\t\t\tQTY(MT)\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th class=\" type-columns black\" style=\"font-weight: bold;width:30%;font-size: 14px !important\">\n\t\t\t\t\t\t\t\t\t\t\t\tFreight PMT\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\n\t\t\t\t\t\t\t\t\t<tbody class=\"user_price\" >\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let list of ports\" class=\"green\">\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"sticky-col first-col left pl-10\" style=\"font-size: 14px !important;width: 40%\" >\n\t\t\t\t\t\t\t\t\t\t\t\t{{ list.port }}\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"type-columns\" style=\"width:180px;border: none ;--border: none;font-size: 14px !important;\" >\n\t\t\t\t\t\t\t\t\t\t\t\t25\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"type-columns\" style=\"width:180px;border: none ;--border: none;font-size: 14px !important;\" >\n\t\t\t\t\t\t\t\t\t\t\t\t${{ (list.freight_21MT_1MT) }} - ${{ list.freight_25MT_1MT }}\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"isNull == true\" >\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\tNo port found\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</ion-content>\n\t\t</ion-row>\n\t</ion-row>\n<ion-content id=\"content\" class=\"lightgreen\"  style=\"height: 100%;\">\n\n\t<!-- <div style=\"height: 90%;overflow: scroll;\">\n\n\t\t<ion-item>\n\t\t\t<ion-label>Rice</ion-label>\n\t\t\t<ion-select placeholder=\"Select One\" (ionChange)=\"changeQuality($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let Qualities of QualityMaster\" value=\"{{ Qualities.id }}\">{{ Qualities.quality}} {{ Qualities?.quality_name }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Cost of Rice Ex Mill Min Price*</ion-label>\n\t\t\t<ion-input placeholder=\"Cost of Rice Ex Mill Min Price\" [(ngModel)]=\"riceMinPrice\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Cost of Rice Ex Mill Max Price*</ion-label>\n\t\t\t<ion-input placeholder=\"Cost of Rice Ex Mill Max Price\" [(ngModel)]=\"riceMaxPrice\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Transport Min Price</ion-label>\n\t\t\t<ion-input placeholder=\"Transport Min Price\" [(ngModel)]=\"transportMin\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Transport Max Price</ion-label>\n\t\t\t<ion-input placeholder=\"Transport Max Price\" [(ngModel)]=\"transportMax\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Bag Cost including Sortexing & packing labour*</ion-label>\n\t\t\t<ion-input placeholder=\"Bag Cost including Sortexing & packing labour*\" [(ngModel)]=\"bagcost\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">All Local charges( CFS Handling, B/L, THC ), Finance cost*</ion-label>\n\t\t\t<ion-input placeholder=\"All Local charges( CFS Handling, B/L, THC ), Finance cost*\" [(ngModel)]=\"localCharges\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Today's Dollar rate *</ion-label>\n\t\t\t<ion-input placeholder=\"Today's Dollar rate *\" [(ngModel)]=\"dollaerate\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label>Supplier Markup% +SNTC Service charge (1 - 20%)*</ion-label>\n\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"supplierCharge\">\n\t\t\t\t<ion-select-option value=\"1\">1</ion-select-option>\n\t\t\t\t<ion-select-option value=\"2\">2</ion-select-option>\n\t\t\t\t<ion-select-option value=\"3\">3</ion-select-option>\n\t\t\t\t<ion-select-option value=\"4\">4</ion-select-option>\n\t\t\t\t<ion-select-option value=\"5\">5</ion-select-option>\n\t\t\t\t<ion-select-option value=\"6\">6</ion-select-option>\n\t\t\t\t<ion-select-option value=\"7\">7</ion-select-option>\n\t\t\t\t<ion-select-option value=\"8\">8</ion-select-option>\n\t\t\t\t<ion-select-option value=\"9\">9</ion-select-option>\n\t\t\t\t<ion-select-option value=\"10\">10</ion-select-option>\n\t\t\t\t<ion-select-option value=\"11\">11</ion-select-option>\n\t\t\t\t<ion-select-option value=\"12\">12</ion-select-option>\n\t\t\t\t<ion-select-option value=\"13\">13</ion-select-option>\n\t\t\t\t<ion-select-option value=\"14\">14</ion-select-option>\n\t\t\t\t<ion-select-option value=\"15\">15</ion-select-option>\n\t\t\t\t<ion-select-option value=\"16\">16</ion-select-option>\n\t\t\t\t<ion-select-option value=\"17\">17</ion-select-option>\n\t\t\t\t<ion-select-option value=\"18\">18</ion-select-option>\n\t\t\t\t<ion-select-option value=\"19\">19</ion-select-option>\n\t\t\t\t<ion-select-option value=\"20\">20</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label>Bag size*</ion-label>\n\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"bagSize\" (ionChange)=\"bagChange($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let data of USD_master\" value=\"{{ data.bag_size }}_{{ data.bag_type }}_{{ data.PMT_USD }}\" >{{ data.bag_size }}_{{ data.bag_type }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t\n\t\t<div>\n\t\t\t<p>Total: (in ₹): {{total}}</p>\n\t\t\t<p>After exchange rate: (in $): {{exchange}}</p>\n\t\t\t<p>FOB Prices: {{FOB}}</p>\n\t\t</div>\n\t\t<ion-button color=\"success\" expand=\"full\" shape=\"round\" (click)=\"save()\">Calculate Now</ion-button>\n\t\t\n\t</div> -->\n\t<div style=\"height: 90%;overflow: scroll;\" class=\"calc\">\n\t\t<ion-row style=\"justify-content: center;\"><div style=\"font-weight: bold;\">Cost of Rice1: &nbsp;</div> ₹{{costOfRice1}}</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item style=\"margin-right: 10px;\">\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Rice cost 1 *</ion-label>\n\t\t\t\t\t<ion-input style=\"border-bottom: 0px; --border-bottom: 0px\" type=\"number\" placeholder=\"\" [(ngModel)]=\"riceone\" maxlength=\"5\" max=\"5\" [attr.maxlength]=\"5\" (ionChange)=\"checkInput($event , 'one')\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">%</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"\" [(ngModel)]=\"riceonepercentage\" (ionChange)=\"calculateData()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"justify-content: center;font-weight: bold;color: red;\" *ngIf=\"blendError1 == true\">Cost Rice 1 must be in 5 Digit.</ion-row>\n\n\t\t<ion-row style=\"justify-content: center;\"><div style=\"font-weight: bold;\">Cost of Rice2: &nbsp;</div> ₹{{costOfRice2}}</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item style=\"margin-right: 10px;\">\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Blend Rice 2 *</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"\" [(ngModel)]=\"ricetwo\" maxlength=\"5\" type=\"number\" max=\"5\" [attr.maxlength]=\"5\" (ionChange)=\"checkInput($event , 'two')\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">%</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"\" type=\"number\" [(ngModel)]=\"ricetwopercentage\" (ionChange)=\"calculateData()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"justify-content: center;font-weight: bold;color: red;\" *ngIf=\"blendError2\">Blend rice 2 must be in 5 Digit.</ion-row>\n\n\t\t<ion-row style=\"justify-content: center;\"><div style=\"font-weight: bold;\">Cost of Rice3: &nbsp;</div> ₹{{costOfRice3}} </ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item style=\"margin-right: 10px;\">\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Blend Rice 3 *</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"\" type=\"number\" [(ngModel)]=\"ricethree\" maxlength=\"5\" max=\"5\" [attr.maxlength]=\"5\" (ionChange)=\"checkInput($event , 'three')\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">%</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"\" type=\"number\" [(ngModel)]=\"ricethreepercentage\" (ionChange)=\"calculateData()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"justify-content: center;font-weight: bold;color: red;\" *ngIf=\"blendError3\">Blend rice 3 must be in 5 Digit.</ion-row>\n\n\t\t<ion-row style=\"justify-content: center;\"><div style=\"font-weight: bold;\">Cost of Rice4: &nbsp;</div> ₹{{costOfRice4}}</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item style=\"margin-right: 10px;\">\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Blend Rice 4 *</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"\" type=\"number\" [(ngModel)]=\"ricefour\" maxlength=\"5\" max=\"5\" [attr.maxlength]=\"5\" (ionChange)=\"checkInput($event , 'four')\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">%</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"\" type=\"number\" [(ngModel)]=\"ricefourpercentage\" (ionChange)=\"calculateData()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"justify-content: center;font-weight: bold;color: red;\" *ngIf=\"blendError4\">Blend rice 4 must be in 5 Digit.</ion-row>\n\n\n\t\t<ion-row>\n\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t<li style=\"font-weight: bold;float: left;\">Avg. Rice Cost PMT: </li>\n\t\t\t\t<li style=\"float: right;\"> ₹{{ AverageRiceCostPMT }}</li>\n\t\t\t</ul>\n\t\t\t<!-- <div style=\"font-weight: bold;\">Avg. Rice Cost PMT</div>: {{AverageRiceCostPMT}} -->\n\t\t</ion-row>\n\t\t\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Processing Charges PMT</ion-label>\n\t\t\t\t\t<ion-input placeholder=\"Processing Charges PMT\" type=\"number\" [(ngModel)]=\"processingCharges\" (ionChange)=\"calculateData()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row >\n\t\t\t<ion-col>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label>Bag size*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"bagSize\" (ionChange)=\"bagChange($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let data of USD_master\" value=\"{{ data.bag_size }}_{{ data.bag_type }}_{{ data.bag_cost }}\" >{{ data.bag_size }} {{ data.bag_type }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t\t\t\t<li style=\"font-weight: bold;float: left;\">Bag cost PMT: </li>\n\t\t\t\t\t\t\t<li style=\"float: right;\"> ₹{{ bagSizePrice }}</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t<li style=\"font-weight: bold;float: left;\">PMT: </li>\n\t\t\t\t<li style=\"float: right;\"> ₹{{PMT}}</li>\n\t\t\t</ul>\n\t\t</ion-row>\n\t\t\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Domestic Transport Upto Mundra PMT</ion-label>\n\t\t\t\t\t<ion-input type=\"number\" placeholder=\"Domestic Transport Upto Mundra PMT\" [(ngModel)]=\"domesticTransport\"  (ionChange)=\"calculateData()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t<li style=\"font-weight: bold;float: left;\">Port exp (CHA, THC, B/l)) PMT: </li>\n\t\t\t\t<li style=\"float: right;\"> ₹{{DefaultValues?.localcharges}}</li>\n\t\t\t</ul>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t<li style=\"font-weight: bold;float: left;\">Finance cost (Bank exp/Ins) PMT: </li>\n\t\t\t\t<li style=\"float: right;\"> ₹{{ DefaultValues?.financecost }}</li>\n\t\t\t</ul>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t<li style=\"font-weight: bold;float: left;\">Total Cost upto Port: </li>\n\t\t\t\t<li style=\"float: right;\"> ₹{{ totalPriceINR }}</li>\n\t\t\t</ul>\n\t\t</ion-row>\n\t\t\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Today's US Dollar Rate $</ion-label>\n\t\t\t\t\t<ion-input type=\"number\" (ionChange)=\"save()\" placeholder=\"Today's US Dollar Rate $\" [(ngModel)]=\"dollaerate\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ul style=\"list-style: none;padding: 0;margin: 0;width: 100%\">\n\t\t\t\t\t<li style=\"font-weight: bold;float: left;\">FOB in USD: </li>\n\t\t\t\t\t<li style=\"float: right;\"> ${{PMTusd}}</li>\n\t\t\t\t</ul>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">LC Charges PMT in $ (Optional) </ion-label>\n\t\t\t\t\t<ion-input type=\"number\" (ionChange)=\"save()\" placeholder=\"L/C Charges\" [(ngModel)]=\"lccharges\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"9\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Ocean Freight PMT in $ (Optional)</ion-label>\n\t\t\t\t\t<ion-input type=\"number\" (ionChange)=\"save()\" placeholder=\"Ocean Freight Per MT\" [(ngModel)]=\"oceanfreight\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"3\">\n\t\t\t\t<p (click)=\"presentModel()\" style=\"padding: 0;margin: 0;float: right;color: #92b243;\">View All</p>\n\t\t\t</ion-col>\n\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Third Party Inspection PMT in $ (Optional)</ion-label>\n\t\t\t\t\t<ion-input type=\"number\" (ionChange)=\"save()\" placeholder=\"Third Party Inspection\" [(ngModel)]=\"thirdpartyinspection\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">Legalisation Charges PMT in $ (Optional)</ion-label>\n\t\t\t\t\t<ion-input type=\"number\" (ionChange)=\"save()\" placeholder=\"Legalisation Charges\" [(ngModel)]=\"legalisationcharges\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">COC PMT in $ (Optional)</ion-label>\n\t\t\t\t\t<ion-input type=\"number\" (ionChange)=\"save()\" placeholder=\"COC\" [(ngModel)]=\"coc\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\" class=\"inputlabel\">EIA Cost PMT in $ (For EU Only) (Optional )</ion-label>\n\t\t\t\t\t<ion-input type=\"number\" (ionChange)=\"save()\" placeholder=\"EIA cost ( for EU Only )\" [(ngModel)]=\"eiacost\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label>Markup%*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"supplierCharge\" selectedText=\"{{supplierCharge}}\" (ionChange)=\"calculateData()\">\n\t\t\t\t\t\t<ion-select-option value=\"1\" >1</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"2\">2</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"3\">3</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"4\">4</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"5\">5</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"6\">6</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"7\">7</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"8\">8</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"9\">9</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"10\">10</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ul style=\"padding: 0px;list-style: none;margin: 0px;width: 100%\">\n\t\t\t\t<li><p style=\"font-weight: bold;padding: 0;margin: 0;margin-bottom: 5px;\">FINAL CIF</p></li>\n\t\t\t\t<li><p style=\"width: 40%;float: left;padding: 0;margin: 0;;\">FOB Cost </p>:${{lastFOBAmount}}</li>\n\t\t\t\t<li><p style=\"width: 40%;float: left;padding: 0;margin: 0;;\">CIF Cost </p>:${{finalCIFPrice}}</li>\n\t\t\t</ul>\n\t\t</ion-row>\n\n\t\t<ion-row style=\"position: fixed;z-index: 9999999;bottom: 60px;right: 0;\">\n\t\t\t<ion-col style=\"text-align: center;\" >\n\t\t\t\t<ion-button (click)=\"calculateData()\" style=\"font-size: 27px;height: 60px;width: 60px;--border-radius: 100px;color: white; --background: #92b243;\">=</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t</div>\n\t<app-menu></app-menu>\n</ion-content> ";

    /***/
  },

  /***/"./src/app/calculator/calculator-routing.module.ts":
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
  },

  /***/"./src/app/calculator/calculator.module.ts":
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
  },

  /***/"./src/app/calculator/calculator.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/calculator/calculator.page.scss ***!
    \*************************************************/
  /*! exports provided: default */
  /***/
  function srcAppCalculatorCalculatorPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\nion-item {\n  border: 3px solid #92b243;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  --background: #fffbd6;\n}\n\n.item-native {\n  background: transparent;\n  background-color: transparent;\n  --background: transparent;\n  --background-color: transparent;\n}\n\n.packingSelect .select-text {\n  display: none;\n}\n\nion-content {\n  padding: 10px;\n  border: 10px solid #fffbd6;\n}\n\n.tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\n.header-title {\n  color: #FFF;\n}\n\n.header-md::after {\n  background: none;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-toolbar ion-icon {\n  color: #000;\n}\n\n.header-title {\n  color: #000;\n}\n\nion-title {\n  padding: 0;\n  text-align: center;\n}\n\n.ion-card {\n  width: 900px;\n}\n\nion-card {\n  width: 17%;\n  text-align: center;\n  float: left;\n}\n\n.tf-tree {\n  clear: both;\n}\n\n.ioncard1 {\n  background: #d8f9fe;\n}\n\n.ioncard2 {\n  background: #d8f9fe;\n}\n\n.ioncard3 {\n  background: #d8f9fe;\n}\n\n.ioncard4 {\n  background: #d8f9fe;\n}\n\n.ioncard5 {\n  background: #d8f9fe;\n}\n\ntable,\nthead,\ntbody {\n  border: 1px solid #eeeeee;\n}\n\ntable {\n  width: 100%;\n}\n\ntable thead th {\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\ntable tbody tr {\n  border-bottom: 1px solid #ededed;\n}\n\ntable tbody td {\n  width: 50%;\n  text-align: center;\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.active {\n  background: #c9a27c;\n  --background: #c9a27c;\n  background-color: #c9a27c;\n  --background-color: #c9a27c;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n}\n\n.price-table table thead tr th {\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n  color: #000;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n  border-right: 1px solid #dfdfdf;\n}\n\ntable,\ntable thead,\ntable tbody,\ntable thead th,\ntable tbody tr,\ntable tbody tr td {\n  border: 0 !important;\n}\n\ntable thead,\ntable tbody,\ntable tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n\ntable thead tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tbody tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tr th {\n  padding: 0;\n  margin: 0;\n}\n\ntable tbody tr td {\n  text-align: left;\n  margin-left: 20px;\n  padding-left: 20px;\n}\n\n.pl-60 {\n  padding-left: 60px !important;\n}\n\n.pl-10 {\n  padding-left: 10px !important;\n}\n\n.left {\n  text-align: left;\n}\n\n.active {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.segment-button-checked {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.scroll-arrow {\n  position: absolute;\n  margin-top: 3.2%;\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 0px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.ios .header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 5px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.header-ios ion-toolbar {\n  border: 0px;\n  --border-width: 0px ;\n}\n\n.ios .type-columns {\n  border: 0px solid transparent !important;\n  --border: 0px solid transparent !important;\n}\n\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.basmatiState {\n  margin: 10px 30px 0px 30px;\n}\n\n.ricetype {\n  color: #000;\n  font-size: 30px;\n  font-family: GlacialIndifference-bold;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.font-17 {\n  font-size: 14px;\n  font-family: GlacialIndifference-bold;\n}\n\n.green {\n  color: #92B243;\n}\n\n.green td {\n  text-transform: capitalize;\n  font-size: 18px !important;\n}\n\n.porttitle {\n  font-size: 20px;\n}\n\nion-segment ion-segment-button ion-label {\n  margin: 0;\n  padding: 0;\n  margin-top: -2px;\n}\n\n.imageprev {\n  min-height: 200px;\n  max-height: 200px;\n  height: 200px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.paddingBottom100 {\n  padding-bottom: 100px;\n}\n\n.alert-radio-label .sc-ion-alert-md {\n  --padding-left: 20px;\n}\n\n.calc {\n  padding: 0px 10px;\n}\n\n.calc ion-col {\n  padding: 0;\n}\n\n.calc ion-row {\n  margin: 7px 0px;\n}\n\n:host(.item-interactive.ion-valid) {\n  --highlight-background: transparent;\n  --highlight-background: transparent !important;\n}\n\nion-item {\n  --highlight-background: transparent;\n  --highlight-background: transparent !important;\n}\n\n.inputlabel {\n  font-size: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9jYWxjdWxhdG9yL2NhbGN1bGF0b3IucGFnZS5zY3NzIiwic3JjL2FwcC9jYWxjdWxhdG9yL2NhbGN1bGF0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQUk7RUFDSSxlQUFBO0FDRVI7O0FERUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBQ0VKOztBRENJO0VBQ0ksYUFBQTtBQ0VSOztBREVBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURESTtFQUNJLGVBQUE7QUNHUjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEREk7RUFDSSxXQUFBO0FDR1I7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBRENBOzs7RUFHSSx5QkFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFRO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtBQ0VaOztBREVRO0VBQ0ksZ0NBQUE7QUNBWjs7QURFUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNBWjs7QURLQTtFQUNJLDBCQUFBO0FDRko7O0FES0E7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ0ZKOztBRE9JO0VBQ0ksV0FBQTtFQXdCQSxlQUFBO0FDM0JSOztBREtZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNIaEI7O0FES2dCO0VBRUksK0JBQUE7QUNKcEI7O0FEU1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ1BoQjs7QURRZ0I7RUFDSSxlQUFBO0VBR0EsK0JBQUE7QUNScEI7O0FEZ0JBOzs7Ozs7RUFNSSxvQkFBQTtBQ2JKOztBRGdCQTs7O0VBR0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ2JKOztBRGVBO0VBQ0ksMkNBQUE7QUNaSjs7QURjQTtFQUNJLDJDQUFBO0FDWEo7O0FEY0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ1hKOztBRGlCWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2RoQjs7QURvQkE7RUFDSSw2QkFBQTtBQ2pCSjs7QURvQkE7RUFDSSw2QkFBQTtBQ2pCSjs7QURvQkE7RUFDSSxnQkFBQTtBQ2pCSjs7QURvQkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUNqQko7O0FEb0JBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0FDakJKOztBRG9CQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDakJKOztBRG9CQTtFQUNJLHlDQUFBO0VBQ0EsaURBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNuQko7O0FEcUJBO0VBQ0kseUNBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ3BCSjs7QURzQkE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUNuQko7O0FEc0JJO0VBQ0ksd0NBQUE7RUFDQSwwQ0FBQTtBQ25CUjs7QUR1QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsUUFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsUUFBQTtBQ3RCSjs7QUR5QkE7RUFDSSwwQkFBQTtBQ3RCSjs7QUR5QkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQ3RCSjs7QUR5QkE7RUFDSSxlQUFBO0VBQ0EscUNBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksY0FBQTtBQ3RCSjs7QUR1Qkk7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0FDckJSOztBRHlCQTtFQUNJLGVBQUE7QUN0Qko7O0FEMkJRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ3hCWjs7QUQ2QkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQzFCSjs7QUQ2QkE7RUFDSSxhQUFBO0FDMUJKOztBRDZCQTtFQUNJLGNBQUE7QUMxQko7O0FENkJBO0VBQ0kscUJBQUE7QUMxQko7O0FEOEJJO0VBQ0ksb0JBQUE7QUMzQlI7O0FEOEJBO0VBQ0ksaUJBQUE7QUMzQko7O0FENEJJO0VBQ0ksVUFBQTtBQzFCUjs7QUQ0Qkk7RUFDSSxlQUFBO0FDMUJSOztBRDhCQTtFQUNJLG1DQUFBO0VBQ0EsOENBQUE7QUMzQko7O0FEOEJBO0VBQ0ksbUNBQUE7RUFDQSw4Q0FBQTtBQzNCSjs7QUQ4QkE7RUFDSSwwQkFBQTtBQzNCSiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGYtdHJlZS5leGFtcGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuaW9uLWl0ZW17XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzkyYjI0MztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmYmQ2O1xufVxuLml0ZW0tbmF0aXZle1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5wYWNraW5nU2VsZWN0e1xuICAgIC5zZWxlY3QtdGV4dHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbn1cbmlvbi1jb250ZW50e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICNmZmZiZDY7XG59XG4udGYtdHJlZS5leGFtcGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbn1cblxuLmhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pb24tY2FyZCB7XG4gICAgd2lkdGg6IDkwMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgd2lkdGg6IDE3JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50Zi10cmVlIHtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLmlvbmNhcmQxIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDIge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkMyB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQ0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDUge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbnRhYmxlLFxudGhlYWQsXG50Ym9keSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRoZWFkIHtcbiAgICAgICAgdGgge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGQge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcGl0YWxpemUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjYzlhMjdjO1xuICAgIC0tYmFja2dyb3VuZDogI2M5YTI3YztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlhMjdjO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3Yztcbn1cblxuLnByaWNlLXRhYmxlIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogICMwMDA7XG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG59XG5cbnRhYmxlLFxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRoZWFkIHRoLFxudGFibGUgdGJvZHkgdHIsXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnRcbn1cblxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRib2R5IHRyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG50YWJsZSB0aGVhZCB0cntcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxudGFibGUgdGJvZHkgdHJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbn1cblxudGFibGUgdHIgdGgge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG50YWJsZSB7XG4gICAgdGJvZHkge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wbC02MCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0xMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMy4yJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAvLyBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgLS13aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgLS1taW4td2lkdGg6IGF1dG87XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG4uaW9zIC5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtaW4taGVpZ2h0OiAzMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgLy8gYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIC0td2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIC0tbWluLXdpZHRoOiBhdXRvO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xufVxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJ7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweFxufVxuLmlvc3tcbiAgICAudHlwZS1jb2x1bW5ze1xuICAgICAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uc2Nyb2xsLWFycm93IC5sZWZ0aWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIHRvcDogMHB4O1xufVxuXG4uc2Nyb2xsLWFycm93IC5yaWdodGljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgdG9wOiAwcHg7XG59XG5cbi5iYXNtYXRpU3RhdGUge1xuICAgIG1hcmdpbjogMTBweCAzMHB4IDBweCAzMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC0xNyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBHbGFjaWFsSW5kaWZmZXJlbmNlLWJvbGQ7XG59XG5cbi5ncmVlbiB7XG4gICAgY29sb3I6ICM5MkIyNDM7XG4gICAgdGQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ucG9ydHRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHhcbn0gICBcblxuaW9uLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmltYWdlcHJldiB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZGRpbmdCb3R0b20xMDAge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLmFsZXJ0LXJhZGlvLWxhYmVsIHtcbiAgICAuc2MtaW9uLWFsZXJ0LW1ke1xuICAgICAgICAtLXBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG59XG4uY2FsY3tcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBpb24tY29se1xuICAgICAgICBwYWRkaW5nOiAwXG4gICAgfVxuICAgIGlvbi1yb3d7XG4gICAgICAgIG1hcmdpbjogN3B4IDBweFxuICAgIH1cbn1cblxuOmhvc3QoLml0ZW0taW50ZXJhY3RpdmUuaW9uLXZhbGlkKSB7XG4gICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW17XG4gICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmlucHV0bGFiZWx7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59IiwiLnRmLXRyZWUuZXhhbXBsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICNGRkY7XG59XG4uYmFjay1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDk0ZjU4O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXI6IDNweCBzb2xpZCAjOTJiMjQzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZiZDY7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhY2tpbmdTZWxlY3QgLnNlbGVjdC10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDEwcHggc29saWQgI2ZmZmJkNjtcbn1cblxuLnRmLXRyZWUuZXhhbXBsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICNGRkY7XG59XG4uYmFjay1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDk0ZjU4O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbmlvbi10b29sYmFyIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW9uLWNhcmQge1xuICB3aWR0aDogOTAwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDE3JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRmLXRyZWUge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmlvbmNhcmQxIHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQyIHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQzIHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQ0IHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQ1IHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxudGFibGUsXG50aGVhZCxcbnRib2R5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlIHRoZWFkIHRoIHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWVlZWU7XG59XG50YWJsZSB0Ym9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xufVxudGFibGUgdGJvZHkgdGQge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuXG4uY2FwaXRhbGl6ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2M5YTI3YztcbiAgLS1iYWNrZ3JvdW5kOiAjYzlhMjdjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlhMjdjO1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNjOWEyN2M7XG59XG5cbi5wcmljZS10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIge1xuICBoZWlnaHQ6IDM0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGJvZHkgdHIge1xuICBoZWlnaHQ6IDM1cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuXG50YWJsZSxcbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHksXG50YWJsZSB0aGVhZCB0aCxcbnRhYmxlIHRib2R5IHRyLFxudGFibGUgdGJvZHkgdHIgdGQge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRib2R5IHRyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGhlYWQgdHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0Ym9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRyIHRoIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5wbC02MCB7XG4gIHBhZGRpbmctbGVmdDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4ucGwtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzkyQjI0MztcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAzLjIlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDMxcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICB3aWR0aDogYXV0bztcbiAgLS13aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiBhdXRvO1xuICAtLW1pbi13aWR0aDogYXV0bztcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0Mztcbn1cblxuLmlvcyAuaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDMxcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICB3aWR0aDogYXV0bztcbiAgLS13aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiBhdXRvO1xuICAtLW1pbi13aWR0aDogYXV0bztcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0Mztcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICBib3JkZXI6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCA7XG59XG5cbi5pb3MgLnR5cGUtY29sdW1ucyB7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1hcnJvdyAubGVmdGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHRvcDogMHB4O1xufVxuXG4uc2Nyb2xsLWFycm93IC5yaWdodGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxOHB4O1xuICB0b3A6IDBweDtcbn1cblxuLmJhc21hdGlTdGF0ZSB7XG4gIG1hcmdpbjogMTBweCAzMHB4IDBweCAzMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LTE3IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogIzkyQjI0Mztcbn1cbi5ncmVlbiB0ZCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLnBvcnR0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxuLmltYWdlcHJldiB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGFkZGluZ0JvdHRvbTEwMCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLmFsZXJ0LXJhZGlvLWxhYmVsIC5zYy1pb24tYWxlcnQtbWQge1xuICAtLXBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNhbGMge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cbi5jYWxjIGlvbi1jb2wge1xuICBwYWRkaW5nOiAwO1xufVxuLmNhbGMgaW9uLXJvdyB7XG4gIG1hcmdpbjogN3B4IDBweDtcbn1cblxuOmhvc3QoLml0ZW0taW50ZXJhY3RpdmUuaW9uLXZhbGlkKSB7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXRsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/calculator/calculator.page.ts":
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
      _createClass(CalculatorPage, [{
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
            } else {
              this.totalPriceINR = parseFloat(this.costOfRice1) + parseFloat(this.costOfRice2) + parseFloat(this.costOfRice3) + parseFloat(this.costOfRice4) + parseFloat(this.updatedUserPrice) + parseFloat(this.domesticTransport) + parseFloat(this.localCharges) + parseFloat(this.financecost);
            }
          } else {
            this.PMT = this.costOfRice1 + this.costOfRice2 + this.costOfRice3 + this.costOfRice4 + parseFloat(this.processingCharges) + this.updatedUserPrice;
            if (this.domesticTransport == '') {
              this.totalPriceINR = parseFloat(this.costOfRice1) + parseFloat(this.costOfRice2) + parseFloat(this.costOfRice3) + parseFloat(this.costOfRice4) + parseFloat(this.updatedUserPrice) + parseFloat(this.localCharges) + parseFloat(this.financecost);
            } else {
              this.totalPriceINR = parseFloat(this.costOfRice1) + parseFloat(this.costOfRice2) + parseFloat(this.processingCharges) + parseFloat(this.costOfRice3) + parseFloat(this.costOfRice4) + parseFloat(this.updatedUserPrice) + parseFloat(this.domesticTransport) + parseFloat(this.localCharges) + parseFloat(this.financecost);
            }
            // this.totalPriceINR = (parseFloat(this.costOfRice1)+parseFloat(this.costOfRice2)+parseFloat(this.costOfRice3)+parseFloat(this.costOfRice4)+parseFloat(this.processingCharges)+parseFloat(this.updatedUserPrice)+parseFloat(this.localCharges)+parseFloat(this.financecost) );
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
      return CalculatorPage;
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
  }
}]);
//# sourceMappingURL=calculator-calculator-module-es5.js.map