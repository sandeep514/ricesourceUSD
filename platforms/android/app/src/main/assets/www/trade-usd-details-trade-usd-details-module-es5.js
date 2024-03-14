function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trade-usd-details-trade-usd-details-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/trade-usd-details/trade-usd-details.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trade-usd-details/trade-usd-details.page.html ***!
    \*****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTradeUsdDetailsTradeUsdDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content id=\"content\">\n\t<div>\n\t\t<div class=\"lightgreen\">\n\t\t\t<div class=\"header-content\">\n\t\t\t\t<ion-row class=\"\">\n\t\t\t\t\t<ion-col size=\"3\" align=\"center\">\n\t\t\t\t\t\t<div class=\"user-profile-icon\">\n\t\t\t\t\t\t\t<span>{{ userFirstName }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\" align=\"center\">\n\t\t\t\t\t\t<h4>Product Details</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<ion-row class=\"rice-gallery\" *ngIf=\"tradeDetails != undefined \">\n\t\t\t<ion-col\n\t\t\t\tstyle=\"padding: 0px 0px 15px 0px;background-color: #fffbd6;border-radius: 0px 0px 25px 25px;overflow: hidden;\">\n\t\t\t\t<ion-slides pager=\"false\" [options]=\"slideOpts\">\n\t\t\t\t\t<ion-slide *ngIf=\"tradeDetails?.attachment1 != null\"\n\t\t\t\t\t\tstyle=\"width: 100%;padding: 15px;height: 200px;\">\n\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/notifications/'+tradeDetails?.attachment1 )\"\n\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/notifications/{{ tradeDetails?.attachment1 }}\"\n\t\t\t\t\t\t\tclass=\"slide-image\" onerror=\"this.src='../../assets/img/No_image_available.svg.png'\">\n\t\t\t\t\t</ion-slide>\n\t\t\t\t\t<ion-slide *ngIf=\"tradeDetails?.attachment2 != null\"\n\t\t\t\t\t\tstyle=\"width: 100%;padding: 15px;height: 200px;\">\n\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/notifications/'+tradeDetails?.attachment2)\"\n\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/notifications/{{ tradeDetails?.attachment2 }}\"\n\t\t\t\t\t\t\tclass=\"slide-image\" onerror=\"this.src='../../assets/img/No_image_available.svg.png'\">\n\t\t\t\t\t</ion-slide>\n\t\t\t\t</ion-slides>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\n\t\t<ng-container *ngIf=\"tradeDetails != undefined \">\n\t\t\t<ng-container>\n\t\t\t\t<div style=\"margin: 0;padding: 15px 0px;margin-bottom: 100px;\">\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.get_rice_quality?.quality != '' && tradeDetails?.get_rice_quality?.quality != null && tradeDetails?.get_rice_quality?.quality != undefined && tradeDetails?.get_rice_quality?.quality_name != '' && tradeDetails?.get_rice_quality?.quality_name != null && tradeDetails?.get_rice_quality?.quality_name != undefined \">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Quality</ion-col>\n\t\t\t\t\t\t<div style=\"margin-top: 5px; \">:</div>\n\t\t\t\t\t\t<ion-col> {{ tradeDetails?.get_rice_quality?.quality }} {{\n\t\t\t\t\t\t\ttradeDetails?.get_rice_quality?.quality_name\n\t\t\t\t\t\t\t}}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.get_u_s_d_default_master?.bag_size != '' && tradeDetails?.get_u_s_d_default_master?.bag_size != null && tradeDetails?.get_u_s_d_default_master?.bag_size != undefined && tradeDetails?.get_u_s_d_default_master?.bag_type != '' && tradeDetails?.get_u_s_d_default_master?.bag_type != null && tradeDetails?.get_u_s_d_default_master?.bag_type != undefined \">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Packing</ion-col>\n\t\t\t\t\t\t<ion-col>: {{ tradeDetails?.get_u_s_d_default_master?.bag_size }} {{\n\t\t\t\t\t\t\ttradeDetails?.get_u_s_d_default_master?.bag_type }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.qty != '' && tradeDetails?.qty != null && tradeDetails?.qty != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Quantity (MT)</ion-col>\n\t\t\t\t\t\t<ion-col>: {{ tradeDetails?.qty }}</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.fob != '' && tradeDetails?.fob != null && tradeDetails?.fob != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">FOB PMT</ion-col>\n\t\t\t\t\t\t<ion-col>: ${{ tradeDetails?.fob }}</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.message != '' && tradeDetails?.message != null && tradeDetails?.message != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Remarks</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">\n\t\t\t\t\t\t\t<div style=\"float: left;margin-right: 4px;height: 100%\">:</div> {{ tradeDetails?.message }}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.created_at != '' && tradeDetails?.created_at != null && tradeDetails?.created_at != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Posted on</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.created_at | date:'dd-MM-yyyy |\n\t\t\t\t\t\t\thh:mm a' }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.validDate != '' && tradeDetails?.validDate != null && tradeDetails?.validDate != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Valid Till</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.validDate | date:'dd-MM-yyyy |\n\t\t\t\t\t\t\thh:mm a' }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\n\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.length != '' && tradeDetails?.length != 0 && tradeDetails?.length != null || tradeDetails?.length != '' && tradeDetails?.length != 0 && tradeDetails?.length != null || tradeDetails?.purity != '' && tradeDetails?.purity != 0 && tradeDetails?.purity != null || tradeDetails?.moisture != '' && tradeDetails?.moisture != 0 && tradeDetails?.moisture != null || tradeDetails?.broken != '' && tradeDetails?.broken != 0 && tradeDetails?.broken != null || tradeDetails?.kett != '' && tradeDetails?.kett != 0 && tradeDetails?.kett != null || tradeDetails?.dd != '' && tradeDetails?.dd != 0 && tradeDetails?.dd != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\"\n\t\t\t\t\t\t\tstyle=\"font-size: 18px;font-weight: bold;\">Parameters</ion-col>\n\t\t\t\t\t\t<ion-col class=\"demandHeaders\"\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;font-size: 18px;font-weight: bold\">Specifications</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.length != '' && tradeDetails?.length != 0 && tradeDetails?.length != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Length</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.length }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.purity != '' && tradeDetails?.purity != 0 && tradeDetails?.purity != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Purity</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.purity }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.moisture != '' && tradeDetails?.moisture != 0 && tradeDetails?.moisture != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Moisture</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.moisture }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.broken != '' && tradeDetails?.broken != 0 && tradeDetails?.broken != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Broken</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.broken }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.kett != '' && tradeDetails?.kett != 0 && tradeDetails?.kett != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Kett</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.kett }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.dd != '' && tradeDetails?.dd != 0 && tradeDetails?.dd != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">DD</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.dd }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\t*ngIf=\"tradeDetails?.status == 0 && tradeDetails?.isExpired == 'true' || tradeDetails?.isExpired == 'true' && tradeDetails?.status == 1\"\n\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: red;font-weight: bold;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP EXPIRED.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.hot_deal_accept.length <= 0\">\n\t\t\t\t\t\t<ion-col *ngIf=\"tradeDetails?.isExpired == 'false' && tradeDetails?.status == 1\" size=\"12\"\n\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: red;\">\n\t\t\t\t\t\t\t<ion-button class=\"green\" style=\"color: #fff;border-radius: 12px;\"\n\t\t\t\t\t\t\t\t(click)=\"acceptHotDeal(tradeDetails?.id)\">Interested</ion-button>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ng-container *ngIf=\"tradeDetails?.status == 1 && tradeDetails?.isExpired != 'true'\">\n\t\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.hot_deal_accept.length > 0 \">\n\t\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">{{\n\t\t\t\t\t\t\t\ttradeDetails?.isDealAcceptedMessage }}\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ng-container>\n\n\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.status == 0 && tradeDetails?.isExpired != 'true'\">\n\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.status == 2 && tradeDetails?.isExpired != 'true'\">\n\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t<!-- Deal is taken -->\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\n\t\t</ng-container>\n\n\n\t\t<app-menu></app-menu>\n\t</div>\n</ion-content>";

    /***/
  },

  /***/"./src/app/trade-usd-details/trade-usd-details-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/trade-usd-details/trade-usd-details-routing.module.ts ***!
    \***********************************************************************/
  /*! exports provided: TradeUsdDetailsPageRoutingModule */
  /***/
  function srcAppTradeUsdDetailsTradeUsdDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TradeUsdDetailsPageRoutingModule", function () {
      return TradeUsdDetailsPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _trade_usd_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./trade-usd-details.page */"./src/app/trade-usd-details/trade-usd-details.page.ts");
    var routes = [{
      path: '',
      component: _trade_usd_details_page__WEBPACK_IMPORTED_MODULE_3__["TradeUsdDetailsPage"]
    }];
    var TradeUsdDetailsPageRoutingModule = /*#__PURE__*/_createClass(function TradeUsdDetailsPageRoutingModule() {
      _classCallCheck(this, TradeUsdDetailsPageRoutingModule);
    });
    TradeUsdDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TradeUsdDetailsPageRoutingModule);

    /***/
  },

  /***/"./src/app/trade-usd-details/trade-usd-details.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/trade-usd-details/trade-usd-details.module.ts ***!
    \***************************************************************/
  /*! exports provided: TradeUsdDetailsPageModule */
  /***/
  function srcAppTradeUsdDetailsTradeUsdDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TradeUsdDetailsPageModule", function () {
      return TradeUsdDetailsPageModule;
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
    var _trade_usd_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./trade-usd-details-routing.module */"./src/app/trade-usd-details/trade-usd-details-routing.module.ts");
    /* harmony import */
    var _trade_usd_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./trade-usd-details.page */"./src/app/trade-usd-details/trade-usd-details.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var TradeUsdDetailsPageModule = /*#__PURE__*/_createClass(function TradeUsdDetailsPageModule() {
      _classCallCheck(this, TradeUsdDetailsPageModule);
    });
    TradeUsdDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _trade_usd_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["TradeUsdDetailsPageRoutingModule"]],
      declarations: [_trade_usd_details_page__WEBPACK_IMPORTED_MODULE_6__["TradeUsdDetailsPage"]]
    })], TradeUsdDetailsPageModule);

    /***/
  },

  /***/"./src/app/trade-usd-details/trade-usd-details.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/trade-usd-details/trade-usd-details.page.scss ***!
    \***************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppTradeUsdDetailsTradeUsdDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "p {\n  padding: 0px;\n  margin: 0px;\n}\n\n.demandHeaders {\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC90cmFkZS11c2QtZGV0YWlscy90cmFkZS11c2QtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyYWRlLXVzZC1kZXRhaWxzL3RyYWRlLXVzZC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RyYWRlLXVzZC1kZXRhaWxzL3RyYWRlLXVzZC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmRlbWFuZEhlYWRlcnMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iLCJwIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmRlbWFuZEhlYWRlcnMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/trade-usd-details/trade-usd-details.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/trade-usd-details/trade-usd-details.page.ts ***!
    \*************************************************************/
  /*! exports provided: TradeUsdDetailsPage */
  /***/
  function srcAppTradeUsdDetailsTradeUsdDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TradeUsdDetailsPage", function () {
      return TradeUsdDetailsPage;
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
    var TradeUsdDetailsPage = /*#__PURE__*/function () {
      function TradeUsdDetailsPage(actRoute, apiser, modalCtrl, alertController, location) {
        var _this = this;
        _classCallCheck(this, TradeUsdDetailsPage);
        this.actRoute = actRoute;
        this.apiser = apiser;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.location = location;
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
        this.showImage = false;
        this.parseDate = function (date) {
          var someDate = new Date(date);
          // someDate.setTime(someDate.getTime() + (duration * 24 * 60 * 60 * 1000));
          return someDate.getDate() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear();
        };
        this.generateDate = function (date) {
          var someDate = new Date(date);
          return someDate.getDay() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear();
        };
        //intrested/trade
        this.userShowInterest = function (tradeId, $event) {
          $event.currentTarget.classList.add('hide');
          $event.currentTarget.parentNode.parentNode.children[1].classList.remove('hide');
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
        console.log(tradeData);
        this.tradeDetails = JSON.parse(tradeData);
        console.log(this.tradeDetails);
        this.imageUrl = this.apiser.imageUrl;
        // this.getTradeDetails(this.galleryId);
        this.userFirstName = localStorage.getItem('name')[0];
      }
      _createClass(TradeUsdDetailsPage, [{
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
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "acceptHotDeal",
        value: function acceptHotDeal(bidId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this3 = this;
            var alert;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.alertController.create({
                    message: 'Kindly confirm your interest',
                    buttons: [{
                      text: 'Yes',
                      role: 'confirm',
                      handler: function handler() {
                        _this3.apiser.presentLoader('Please wait');
                        _this3.apiser.acceptHotDeal({
                          'user_id': localStorage.getItem('id'),
                          'bid_id': bidId
                        }).then(function (res) {
                          // this.getListBids();
                          console.log(res);
                          _this3.apiser.dismissLoader();
                        }, function (err) {
                          console.log(err);
                          _this3.apiser.dismissLoader();
                        });
                      }
                    }, {
                      text: 'Cancel',
                      role: 'cancel',
                      handler: function handler() {
                        alert.dismiss();
                      }
                    }],
                    cssClass: "confirm"
                  });
                case 2:
                  alert = _context2.sent;
                  _context2.next = 5;
                  return alert.present();
                case 5:
                  return _context2.abrupt("return", false);
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "openImage",
        value: function openImage(imagePrefix, destination, image) {
          this.showImage = true;
          this.ShownImage = imagePrefix + '' + destination + '/' + image;
        }
      }, {
        key: "closeImage",
        value: function closeImage() {
          this.showImage = false;
        }
      }]);
      return TradeUsdDetailsPage;
    }();
    TradeUsdDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }];
    };
    TradeUsdDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-trade-usd-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./trade-usd-details.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/trade-usd-details/trade-usd-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./trade-usd-details.page.scss */"./src/app/trade-usd-details/trade-usd-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])], TradeUsdDetailsPage);

    /***/
  }
}]);
//# sourceMappingURL=trade-usd-details-trade-usd-details-module-es5.js.map