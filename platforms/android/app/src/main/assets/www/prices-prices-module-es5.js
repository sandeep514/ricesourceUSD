function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prices-prices-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/prices/prices.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prices/prices.page.html ***!
    \*******************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPricesPricesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content id=\"content\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\" class=\"lightgreen\">\n    <div class=\"header-data green\"  style=\"min-height: 240px;\">\n        <div style=\"min-height: 80px\">\n            <ion-row >\n                <ion-col size=\"4\" align=\"center\">\n                    <div class=\"user-profile-icon\" (click)=\"gotoProfile()\">\n                        <span>{{ userFirstName | uppercase }}</span>\n                    </div>\n                </ion-col>\n                <ion-col size=\"4\" align=\"center\" class=\"font-lightgreen\">\n                    <!-- <h3>Dashboard</h3> -->\n                    <div *ngIf=\"restDays > 0\">\n                        <p *ngIf=\"restDays <= 10\">\n                            {{restDays}} Days Left\n                        </p>\t\n                    </div>\n                    <!-- <p>\n                        <button (click)=\"showPaymentModel()\" *ngIf=\"restDays < 0\" style=\"color: #92b243; text-decoration: none; background: #fffbd6; padding: 5px; border-radius: 8px;\">Subscribe Now</button>\n                    </p> -->\n                </ion-col>\n                <ion-col size=\"4\" align=\"right\" class=\"notification\" >\n                    <ion-icon name=\"refresh-outline\" (click)=\"refresh()\" style=\"font-size: 30px;\"></ion-icon>\n                    <div *ngIf=\"isNotifAvailable == 'true' \" style=\"height: 10px;width: 10px;background-color: red;position: absolute;right: 20px;top: 20px;z-index: 99999;border-radius: 100px;\"></div>\n                    <ion-icon name=\"notifications\" (click)=\"getNotications()\" style=\"font-size: 30px;\"></ion-icon>\n                </ion-col>\n                \n            </ion-row>\n        </div>\n        <!-- <ion-row class=\"ion-padding title-padding \">\n            <ion-col class=\"title\" size=\"12\">\n                \n\n            </ion-col>\n        </ion-row> -->\n        <ion-row class=\"ion-padding rice-gallery\">\n            <ion-col>\n                <ion-slides pager=\"false\" [options]=\"slideOpts\">\n                    <ion-slide *ngFor=\"let slider of ImageGallerySlider\" (click)=\"getGalleryData(slider.id)\">\n                        <div class=\"background-image\">\n                            <img src=\"{{ imagePrefix }}uploads/gallery/{{ slider.attachment }}\" alt=\"\" style=\"width: 100%;height: 100%;\">\n                        </div>\n                    </ion-slide>\n                </ion-slides>\n                <ion-row>\n                    <ion-col size=\"8\" style=\"text-align: center;margin-top: 5px;text-align: right;\">\n                        <img src=\"../../assets/sntc_rice_logo.png\" alt=\"\" style=\"width: 100px;\">\n                    </ion-col>\n                    <ion-col size=\"4\" align=\"center\" class=\"notification\" style=\"margin-top: 5px;\">\n                        <ion-button (click)=\"changeAppType()\" size=\"small\" style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                        <!-- <ion-button (click)=\"changeAppType()\" *ngIf=\"INRActive == 1\"  size=\"small\" style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\"> -->\n                            <p style=\"font-size: 11px;\">Convert to USD</p>\n                        </ion-button>\n                        <!-- <ion-button (click)=\"brand()\" size=\"small\"\n                            style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                            <p style=\"font-size: 11px;\">Brand</p>\n                        </ion-button> -->\n                        <ion-button (click)=\"sellerINR()\" size=\"small\"\n                            style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                            <!-- <ion-button (click)=\"changeAppType()\" *ngIf=\"INRActive == 1\"  size=\"small\" style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\"> -->\n                            <p style=\"font-size: 11px;\">INR seller</p>\n                        </ion-button>\n                       \n                    </ion-col>\n                    <!-- <p style=\"padding: 0;margin: 0;text-align: center;width: 100%;color: #fffbd6;\">Pull to refresh</p> -->\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class=\"otherbackground\">\n            <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n            <ion-refresher-content>\n            </ion-refresher-content>\n          </ion-refresher> -->\n\n\n        <div *ngIf=\"basmatiprice?.basmati != null\" style=\"text-align: right;\">\n            <span style=\"margin-right: 20px;font-size: 11px;\">Last updated at: {{ lastupdatedDate }} (IST)</span>\n        </div>\n        <ion-row class=\"ion-padding title-padding \">\n            <ion-col class=\"title\" size=\"12\">\n                <h2 class=\"ricetitle\">Basmati Live Price</h2>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <div class=\"scroll-arrow\">\n                <img src=\"./../../assets/RINGH.png\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                &nbsp;&nbsp;\n                <img src=\"./../../assets/LEFT.png\" alt=\"\" (click)=\"scroll('right','table-responsive-1')\" class=\"lefticon\">\n            </div>\n            <ion-col class=\"pt0 pb0 \">\n                <ion-segment scrollable (ionChange)=\"changeStateBasmati($event)\" value=\"{{ basmatiSt }}\" class=\"header-segment table-responsive-1 basmatiState\">\t\t\t\t\t\t\n                    <ng-container *ngFor=\"let basmatiSt of basmatiState\">\n                        <ion-segment-button class=\"{{ basmatiSt }}\" id=\"{{ basmatiSt }}\" value=\"{{ basmatiSt }}\">\n                            <ion-label>{{ parseText(basmatiSt) }}</ion-label>\n                        </ion-segment-button>\n                    </ng-container>\n                </ion-segment>\n            </ion-col>\n        </ion-row>\n        \n        <ng-container *ngIf=\"basmatiprice?.basmati == null\">\n            <div class=\"center\">\n                <p>No item found</p>\n            </div>\n        </ng-container>\n        \n        <ng-container *ngIf=\"basmatiprice?.basmati != null\">\n            <ion-row class=\"ion-padding table-row padd-5\">\n                <ion-col class=\"price-table dashboard lightgreen\">\n                    <table class=\"table\" *ngFor=\"let basmatiPrice of basmatiprice?.basmati | keyvalue\">\n                        <thead>\n                            <tr>\n                                <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 60%\" >\n                                    <ng-container *ngFor=\"let riceData of basmatiPrice.value | keyvalue\"  >\n                                        <h4 class=\"black ricetype\">{{ riceData.key }} </h4>\n                                    </ng-container>\n                                </th>\n                                <th class=\"font-17 type-columns black\">\n                                    <ul class=\"table-filter\">\n                                        <li class=\"filter-content\">\n                                            Prices in quintals\n                                        </li>\n                                        <li class=\"filter\">\n                                            <ion-icon name=\"ellipsis-vertical-outline\" (click)=\"openPopup(convertToLowerCase(basmatiPrice.key))\"></ion-icon>\n                                            <div class=\"popover\" [id]=\"convertToLowerCase(basmatiPrice.key)\">\n                                                <ul>\n                                                    <li>\n                                                        <label for=\"price\"> Last price\n                                                        <input id=\"price\" class=\"priceRadio\" type=\"radio\" name=\"radio\" checked=\"checked\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_price')\"></label>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                    </li>\n                                                    <li>\n                                                        <label for=\"percentage\"> Percentage \n                                                        <input id=\"percentage\" type=\"radio\" name=\"radio\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_percentage')\"></label>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </th>\n                            </tr>\n                            <div class=\"popoverley\" (click)=\"removePopover()\"></div>\n                        </thead>\n                        <button id=\"getCurrentStatus\" style=\"height: 1px;width: 1px;color: red;background: transparent;padding: 0;margin: 0;\" (click)=\"getCurrentPaidStatus()\" ></button>\n                        <tbody [class.hide]=\"riceUserType == convertToLowerCase(basmatiPrice.key)+'_percentage'\" [id]=\"convertToLowerCase(basmatiPrice.key)+'_price'\">\n                            <ng-container *ngFor=\"let riceData of basmatiColumns[basmatiPrice.key] | keyvalue\" >\n                                <ng-container *ngFor=\"let riceValue of riceData.value | keyvalue\" >\n                                    <ng-container *ngFor=\"let riceVal of riceValue.value | keyvalue\" >\n                                        <tr (click)=\"getRiceDetails(riceVal.key , riceVal.value[latestDateBasmati].state , riceData.key)\">\n                                            <td class=\"sticky-col bg-transparent first-col left pl-10 riceanmes\" style=\"text-transform: uppercase;\" >\n                                                {{ extractRiceName(riceVal.key) | uppercase }}\n                                            </td>\n                                            <td class=\"type-columns\" style=\"width:180px\"  [class.font-grey]=\"riceVal.value[latestDateBasmati].up_down == 'stable'\" [class.font-green]=\"riceVal.value[latestDateBasmati].up_down == 'up' \" [class.red]=\"riceVal.value[latestDateBasmati].up_down == 'down' \">\n                                                <div class=\"priceVal\">&#8377; {{ riceVal.value[latestDateBasmati].min_price }} - {{ riceVal.value[latestDateBasmati].max_price }} </div> \n                                            </td>\n                                        </tr>\n                                    </ng-container>\n                                </ng-container>\n                            </ng-container>\n\n                        </tbody>\n                    </table>\n        \n                </ion-col>\n            </ion-row>\n        </ng-container>\n\n        <ion-row class=\"ion-padding title-padding mt-20\">\n            <ion-col class=\"title\" size=\"12\">\n                <h2 class=\"ricetitle\">Non - Basmati Live Price</h2>\n            </ion-col>\n        </ion-row>\n        \n        <ion-row>\n            <div class=\"scroll-arrow\">\n                <!-- <ion-icon name=\"chevron-back-outline\" (click)=\"scroll('left','table-responsive-1')\" class=\"lefticon\"></ion-icon> -->\n                <img src=\"./../../assets/RINGH.png\" alt=\"\" (click)=\"scroll('left','table-responsive-2')\" class=\"righticon\">\n                &nbsp;&nbsp;\n                <!-- <ion-icon name=\"chevron-forward-outline\" (click)=\"scroll('right','table-responsive-1')\" class=\"righticon\"></ion-icon> -->\n                <img src=\"./../../assets/LEFT.png\" alt=\"\" (click)=\"scroll('right','table-responsive-2')\" class=\"lefticon\">\n            </div>\n            <ion-col class=\"pt0 pb0 p05\">\n                <ion-segment scrollable (ionChange)=\"changeStateNONBasmati($event)\" value=\"{{ nonbasmatists }}\" class=\"header-segment table-responsive-2 basmatiState\">\n\n                    <ng-container *ngFor=\"let nonbasmatists of NONbasmatiState\">\n                        <ion-segment-button value=\"{{ nonbasmatists }}\" class=\"{{ nonbasmatists }}\" >\n                            <ion-label>{{ parseText(nonbasmatists) }}</ion-label>\n                        </ion-segment-button>\n                    </ng-container>\n                    \n                </ion-segment>\n            </ion-col>\n        </ion-row>\n\n        <ng-container *ngIf=\"nonbasmatiprice?.non_basmati != null\">\n            <ion-row class=\"ion-padding table-row padd-5\"> \n                \n                <ion-col class=\"price-table dashboard\">\n                    <table class=\"table\" *ngFor=\"let nonBas of nonbasmatiprice?.non_basmati | keyvalue : returnZero\">\n                        <thead>\n                            <tr>\n                                <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width:60%\" >\n                                    <ng-container *ngFor=\"let riceData of nonBas.value | keyvalue\"  >\n                                        <h4 class=\"black ricetype\">{{ riceData.key }} </h4>\n                                    </ng-container>\n                                </th>\n                                <th class=\"font-17 type-columns black\">\n                                    <ul class=\"table-filter\">\n                                        <li class=\"filter-content\">\n                                            Prices in quintals\n                                        </li>\n                                    </ul> \n                                </th>\n                            </tr>\n                            <div class=\"popoverley\" (click)=\"removePopover()\"></div>\n                        </thead>\n        \n                        <tbody [class.hide]=\"riceUserType == convertToLowerCaseWithReplaceOfHighfn(nonBas.key)+'_percentage'\" [id]=\"convertToLowerCaseWithReplaceOfHighfn(nonBas.key)+'_price'\">\n                            <ng-container *ngFor=\"let riceData of nonBasmatiColumns[nonBas.key] | keyvalue\" >\n                                <ng-container *ngFor=\"let riceValue of riceData.value | keyvalue\" >\n                                    <ng-container *ngFor=\"let riceVal of riceValue.value | keyvalue\" >\n                                        <tr (click)=\"getRiceDetails(riceVal.key , riceVal.value[latestDateBasmati].state , riceData.key)\">\n                                            <td class=\"sticky-col bg-transparent first-col left pl-10\" style=\"text-transform: uppercase;\" >\n                                                {{ extractRiceName(riceVal.key) | uppercase }}\n                                            </td>\n                                            <td class=\"type-columns\" style=\"width:180px\"  [class.font-grey]=\"riceVal.value[latestDateBasmati].up_down == 'stable'\" [class.font-green]=\"riceVal.value[latestDateBasmati].up_down == 'up' \" [class.font-red]=\"riceVal.value[latestDateBasmati].up_down == 'down' \">\n                                                <div class=\"priceVal\">&#8377; {{ riceVal.value[latestDateBasmati].min_price }} - {{ riceVal.value[latestDateBasmati].max_price }} </div> \n                                            </td>\n                                        </tr>\n                                    </ng-container>\n                                </ng-container>\n                            </ng-container>\n                        </tbody>\n        \n                        \n                    </table>\n                </ion-col>\n            </ion-row>\n        </ng-container>\n\n        <ng-container *ngIf=\"nonbasmatiprice?.non_basmati == null\">\n            <div class=\"center\">\n                <p>No item found</p>\n            </div>\n        </ng-container>\n\n        <ion-row class=\"ion-padding title-padding center\">\n            <ion-col class=\"title\">\n                <a href=\"javascript:void(0);\" class=\"viewtrans\" (click)=\"navToPort()\">View Transportation</a>\n            </ion-col>\n        </ion-row>\n\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" style=\"position: fixed;bottom: 70px\" (click)=\"scrollDown()\" *ngIf=\"scrollPosition == 'top' \">\n            <ion-fab-button>\n                <ion-icon name=\"chevron-down-outline\"></ion-icon>\n            </ion-fab-button>\n        </ion-fab>\n        \n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" style=\"position: fixed;bottom: 70px\" (click)=\"scrollUp()\" *ngIf=\"scrollPosition == 'bottom' \">\n            <ion-fab-button>\n                <ion-icon name=\"chevron-up-outline\"></ion-icon>\n            </ion-fab-button>\n        </ion-fab>\n    </div>\n<app-menu></app-menu>\n</ion-content>";

    /***/
  },

  /***/"./src/app/prices/prices-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/prices/prices-routing.module.ts ***!
    \*************************************************/
  /*! exports provided: PricesPageRoutingModule */
  /***/
  function srcAppPricesPricesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PricesPageRoutingModule", function () {
      return PricesPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _prices_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./prices.page */"./src/app/prices/prices.page.ts");
    var routes = [{
      path: '',
      component: _prices_page__WEBPACK_IMPORTED_MODULE_3__["PricesPage"]
    }];
    var PricesPageRoutingModule = /*#__PURE__*/_createClass(function PricesPageRoutingModule() {
      _classCallCheck(this, PricesPageRoutingModule);
    });
    PricesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PricesPageRoutingModule);

    /***/
  },

  /***/"./src/app/prices/prices.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/prices/prices.module.ts ***!
    \*****************************************/
  /*! exports provided: PricesPageModule */
  /***/
  function srcAppPricesPricesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PricesPageModule", function () {
      return PricesPageModule;
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
    var _prices_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./prices-routing.module */"./src/app/prices/prices-routing.module.ts");
    /* harmony import */
    var _prices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./prices.page */"./src/app/prices/prices.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    /* harmony import */
    var _contactmodal_contactmodal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../contactmodal/contactmodal.module */"./src/app/contactmodal/contactmodal.module.ts");
    /* harmony import */
    var _versionmodal_versionmodal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../versionmodal/versionmodal.module */"./src/app/versionmodal/versionmodal.module.ts");
    var PricesPageModule = /*#__PURE__*/_createClass(function PricesPageModule() {
      _classCallCheck(this, PricesPageModule);
    });
    PricesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _prices_routing_module__WEBPACK_IMPORTED_MODULE_5__["PricesPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _contactmodal_contactmodal_module__WEBPACK_IMPORTED_MODULE_8__["ContactmodalPageModule"], _versionmodal_versionmodal_module__WEBPACK_IMPORTED_MODULE_9__["VersionmodalPageModule"]],
      declarations: [_prices_page__WEBPACK_IMPORTED_MODULE_6__["PricesPage"]]
    })], PricesPageModule);

    /***/
  },

  /***/"./src/app/prices/prices.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/prices/prices.page.scss ***!
    \*****************************************/
  /*! exports provided: default */
  /***/
  function srcAppPricesPricesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "@font-face {\n  font-family: \"GlacialIndifference-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('GlacialIndifference-Regular.otf');\n}\n@font-face {\n  font-family: \"GlacialIndifference-Italic\";\n  font-style: italic;\n  font-weight: normal;\n  src: url('GlacialIndifference-Italic.otf');\n}\nion-content {\n  --padding-bottom: 81px;\n}\n.user-profile-icon {\n  width: 50px;\n  background-color: #606060;\n  border-radius: 50px;\n  height: 50px;\n  line-height: 50px;\n  margin-left: 15px;\n  margin-top: 10px;\n  padding: 20;\n}\n.user-profile-icon span {\n  color: #FFF;\n  font-size: 30px;\n}\n.notification img {\n  width: 22px;\n  margin-right: 10px;\n  margin-top: 18px;\n}\n.notification ion-icon {\n  font-size: 25px;\n  margin-top: 15px;\n  margin-right: 10px;\n}\n.notification .badge {\n  background-color: #ad362d;\n  height: 17px;\n  width: 17px;\n  color: #FFF;\n  border-radius: 50px;\n  display: inline-block;\n  font-size: 12px;\n  text-align: center;\n  line-height: 17px;\n  right: 16px;\n  position: absolute;\n  top: 19px;\n}\n.slider img {\n  width: 80px;\n}\n.title-padding {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.title-padding h2 {\n  margin: 0px;\n}\n.priceData {\n  text-align: left;\n  margin-left: 10px;\n}\n.popoverley {\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999999;\n  display: none;\n}\n#brown_percentage {\n  display: none;\n}\n#creamy_sella_percentage {\n  display: none;\n}\n#golden_selle_percentage {\n  display: none;\n}\n#raw_percentage {\n  display: none;\n}\n#steam_percentage {\n  display: none;\n}\n.popover {\n  box-shadow: 2px 2px 9px 0px #888;\n  border-radius: 5px;\n  position: absolute;\n  right: 0;\n  z-index: 99999999;\n  background: #fff;\n  display: none;\n  height: 88px;\n  width: 150px;\n}\n.popover ul {\n  list-style: none;\n  padding: 0;\n  margin: 0px;\n}\n.popover ul li {\n  padding: 10px 10px;\n  text-align: left;\n}\n.popover ul li label {\n  font-size: 18px;\n}\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: #eeeeee !important;\n}\n.price-table table thead tr th {\n  background-color: #eeeeee !important;\n  border-right: 1px solid #dfdfdf;\n}\n.price-table table tbody tr {\n  height: 35px;\n}\n.price-table table tbody tr td {\n  font-size: 12px;\n  border-bottom: 1px solid #dfdfdf;\n  border-right: 1px solid #dfdfdf;\n}\n.table-row {\n  margin-top: 0px;\n  padding-top: 0px;\n}\n.table-row tr td {\n  text-align: center;\n}\n.wrapper {\n  position: relative;\n  overflow: auto;\n  padding: 0px;\n  box-shadow: 1px 4px 6px #CCC;\n  border-radius: 3px;\n}\n.sticky-col {\n  position: sticky;\n  position: -webkit-sticky;\n  background-color: white;\n  border-right: 1px solid #dfdfdf;\n  z-index: 99999;\n}\n.first-col {\n  width: auto;\n  min-width: 66px;\n  max-width: 100px;\n  left: 0px;\n  border-right: 1px solid #dfdfdf;\n}\n.second-col {\n  width: 150px;\n  min-width: 150px;\n  max-width: 150px;\n  left: 100px;\n}\n.red-price {\n  color: red;\n  font-weight: 600;\n}\n.green-price {\n  color: green;\n  font-weight: 600;\n}\n.black-price {\n  color: #000;\n  font-weight: 600;\n}\n.bg-white {\n  background-color: #FFF;\n}\n.transport-card {\n  margin-top: -5px;\n}\n.trasnport-image {\n  width: 50px;\n}\n.dotted-border {\n  border-bottom: 2px dotted #000;\n  margin: 19px auto;\n  width: 81%;\n}\n.transport-state {\n  margin-top: -10px;\n  display: block;\n  font-size: 13px;\n}\n.price-col {\n  color: #000;\n  font-size: 13px;\n  padding-top: 14px;\n}\n.transport-row {\n  border-bottom: 1px solid #CCC;\n}\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n.scroll-arrow {\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n.sntc-slider img {\n  width: 250px;\n  margin-top: 2px;\n  margin-left: -16px;\n}\n.sntc-slider h1 {\n  font-size: 37px;\n  margin: 0px;\n  padding: 0px;\n  margin-top: 25px;\n  color: green;\n}\n.sntc-slider p {\n  margin: 0px;\n  padding: 0px;\n}\n.type-columns {\n  min-width: 75px;\n}\n.slide-image {\n  width: 90%;\n  border-radius: 6px;\n}\n.rice-gallery {\n  padding-top: 0px;\n}\n.logo-text {\n  font-family: \"Monotype Corsiva\";\n}\n.header-segment {\n  height: 32px;\n  --padding-end: 0px;\n  margin-right: 0px;\n  margin: 0 auto;\n}\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 0px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  --min-width: auto;\n  min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n.header-segment ion-segment-button.segment-button-checked {\n  background: #92b244;\n  --background: #92b244;\n}\n.header-segment ion-segment-button.segment-button-checked ion-label {\n  margin: 0px;\n  padding: 0px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 100%;\n}\n.header-segment ion-label.sc-ion-label-md-s md {\n  font-size: 60%;\n}\n.header-segment ion-label {\n  margin: 0px;\n  padding: 0px;\n  color: #000;\n  font-weight: 600;\n  font-size: 100%;\n}\n.viewtrans {\n  height: 0px;\n  margin-top: 8px;\n  border-radius: 100px;\n  min-height: 36px;\n  margin-left: 2px;\n  margin-right: 2px;\n  box-shadow: -1px 1px 9px 0px #CCC;\n  width: 33%;\n  color: #000;\n  font-size: 12px;\n  text-decoration: none;\n  padding: 10px;\n}\n.center {\n  text-align: center;\n}\n.center p {\n  padding: 15px 0px 15px 0px;\n  margin: 0;\n  margin-bottom: 20px;\n}\n.rice-gallery {\n  padding-bottom: 0;\n}\n.pt0 {\n  padding-top: 0;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.pb0 {\n  padding-bottom: 0;\n}\n.scroll-arrow {\n  position: absolute;\n  margin-top: 1%;\n}\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n.ricetitle {\n  font-size: 27px;\n  font-family: Arial;\n  text-align: center;\n}\n.basmatiState {\n  margin: 0 30px;\n}\ntable {\n  width: 100%;\n}\ntable .right {\n  text-align: right;\n}\ntable .left {\n  text-align: left !important;\n}\n.pl-10 {\n  padding-left: 10px;\n}\n.p05 {\n  padding: 0px 5px;\n}\n.font-green {\n  color: #0DCC18;\n}\n.red {\n  color: #FB5000;\n}\n.grey {\n  color: grey;\n}\n.dashboard table,\n.dashboard thead,\n.dashboard th,\n.dashboard tr,\n.dashboard td,\n.dashboard td {\n  border: 0px;\n}\n.ricetype {\n  font-size: 30px;\n  font-family: Arial;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n  font-weight: bold;\n}\n.font-17 {\n  font-size: 14px;\n  font-family: Arial;\n}\n.font-14 {\n  font-size: 14px;\n}\n.right {\n  text-align: right !important;\n  padding-right: 10px !important;\n}\n.dashboard table tbody tr td {\n  font-size: 18px !important;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.padd-5 {\n  padding: 5px;\n}\n.pt-10 {\n  padding-top: 10px;\n}\n.pt-5 {\n  padding-top: 5px;\n}\n.table-filter {\n  list-style: none;\n  padding: 0;\n  display: inline-flex;\n  padding: 0px;\n  margin: 0px;\n}\n.table-filter .filter {\n  font-size: 20px;\n}\n.table-filter .filter-content {\n  margin-top: 3px;\n}\n.black {\n  color: #000;\n}\n.riceDisplayType .filterRice {\n  padding: 0;\n  margin: 0;\n  text-align: right;\n}\n.riceDisplayType ul {\n  padding: 0;\n  margin: 0;\n  display: inline-flex;\n  list-style: none;\n}\n.riceDisplayType ul li {\n  padding: 10px 20px;\n  border: 1px solid #ededed;\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 1px 7px 1px #ededed;\n  float: right;\n  display: none;\n}\n.riceDisplayType ul .show {\n  display: block;\n}\n.dashboard table thead,\n.dashboard table tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 2px solid #cfcaab !important;\n}\n.dashboard table thead tr,\n.dashboard table tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 2px solid #cfcaab !important;\n  font-family: \"GlacialIndifference-Regular\";\n}\n.dashboard table thead tr th,\n.dashboard table tbody tr th {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-right: 0px !important;\n}\n.dashboard table thead tr td,\n.dashboard table tbody tr td {\n  border-right: 0px !important;\n  font-size: 18px !important;\n}\n.percentage {\n  display: none;\n}\n.hide,\n.hidecontent {\n  display: none;\n}\n.show {\n  display: block;\n}\nion-segment ion-segment-button ion-label {\n  margin: 0 !important;\n  padding: 0 !important;\n  margin-top: -2px !important;\n}\n.background-image {\n  width: 100px;\n  height: 94px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.background-image img {\n  width: 100%;\n}\n.ios .header-segment {\n  height: 40px;\n}\n.ios .header-segment ion-segment-button {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9wcmljZXMvcHJpY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJpY2VzL3ByaWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQ0NSO0FEUUk7RUFDSSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ05SO0FEU0k7RUFFSSxzQkFBQTtBQ1JSO0FEV0k7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDUlI7QURTUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDUFo7QURZUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDVFo7QURXUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDVFo7QURXUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ1RaO0FEaUJRO0VBQ0ksV0FBQTtBQ2RaO0FEa0JJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ2ZSO0FEZ0JRO0VBQ0ksV0FBQTtBQ2RaO0FEa0JJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ2ZSO0FEa0JJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDZlI7QURrQkk7RUFDSSxhQUFBO0FDZlI7QURrQkk7RUFDSSxhQUFBO0FDZlI7QURrQkk7RUFDSSxhQUFBO0FD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cGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ0dsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhcic7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9nbGFjaWFsL0dsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhci5vdGYnKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQGZvbnQtZmFjZSB7XG4gICAgLy8gICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgIC8vICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vICAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvQXJpYWwub3RmJyk7XG4gICAgLy8gfVxuICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ0dsYWNpYWxJbmRpZmZlcmVuY2UtSXRhbGljJztcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvR2xhY2lhbEluZGlmZmVyZW5jZS1JdGFsaWMub3RmJyk7XG4gICAgfVxuICAgIFxuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDgxcHg7XG4gICAgfVxuICAgIFxuICAgIC51c2VyLXByb2ZpbGUtaWNvbiB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZzogMjA7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuYmFkZ2Uge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FkMzYyZDtcbiAgICAgICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTlweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuc2xpZGVyIHtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnRpdGxlLXBhZGRpbmcge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAucHJpY2VEYXRhIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5wb3BvdmVybGV5IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgICNicm93bl9wZXJjZW50YWdlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgI2NyZWFteV9zZWxsYV9wZXJjZW50YWdlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgI2dvbGRlbl9zZWxsZV9wZXJjZW50YWdlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgI3Jhd19wZXJjZW50YWdlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgI3N0ZWFtX3BlcmNlbnRhZ2Uge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbiAgICAucG9wb3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggOXB4IDBweCAjODg4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDk5OTk5OTk5O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBoZWlnaHQ6IDg4cHg7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnByaWNlLXRhYmxlIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnRhYmxlLXJvdyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAud3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDRweCA2cHggI0NDQztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgICBcbiAgICAuc3RpY2t5LWNvbCB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIH1cbiAgICBcbiAgICAuZmlyc3QtY29sIHtcbiAgICAgICAgLy8gd2lkdGg6IDkwcHg7XG4gICAgICAgIC8vIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIC8vIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtaW4td2lkdGg6IDY2cHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICB9XG4gICAgXG4gICAgLnNlY29uZC1jb2wge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgICAgIGxlZnQ6IDEwMHB4O1xuICAgIH1cbiAgICBcbiAgICAucmVkLXByaWNlIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgXG4gICAgLmdyZWVuLXByaWNlIHtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBcbiAgICAuYmxhY2stcHJpY2Uge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgXG4gICAgLmJnLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICB9XG4gICAgXG4gICAgLnRyYW5zcG9ydC1jYXJkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICB9XG4gICAgXG4gICAgLnRyYXNucG9ydC1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cbiAgICBcbiAgICAuZG90dGVkLWJvcmRlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgIzAwMDtcbiAgICAgICAgbWFyZ2luOiAxOXB4IGF1dG87XG4gICAgICAgIHdpZHRoOiA4MSU7XG4gICAgfVxuICAgIFxuICAgIC50cmFuc3BvcnQtc3RhdGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgXG4gICAgLnByaWNlLWNvbCB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuICAgIH1cbiAgICBcbiAgICAudHJhbnNwb3J0LXJvdyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xuICAgIH1cbiAgICBcbiAgICAucmlwcGxlLXBhcmVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgXG4gICAgLnNjcm9sbC1hcnJvdyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIFxuICAgIC5zbnRjLXNsaWRlciB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzN3B4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnR5cGUtY29sdW1ucyB7XG4gICAgICAgIC8vIHdpZHRoOiAzMDBweDtcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vIG1pbi13aWR0aDogMTIwcHg7XG4gICAgICAgIG1pbi13aWR0aDogNzVweDtcbiAgICB9XG4gICAgXG4gICAgLnNsaWRlLWltYWdlIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbiAgICBcbiAgICAucmljZS1nYWxsZXJ5IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICB9XG4gICAgXG4gICAgLmxvZ28tdGV4dCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9ub3R5cGUgQ29yc2l2YSc7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXItc2VnbWVudCB7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMxcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgICAgICAvLyBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIC0td2lkdGg6IGF1dG87XG4gICAgICAgICAgICAtLW1pbi13aWR0aDogYXV0bztcbiAgICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0MztcbiAgICAgICAgfVxuICAgICAgICBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzkyYjI0NDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzkyYjI0NDtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbC5zYy1pb24tbGFiZWwtbWQtcyBtZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDYwJTtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnZpZXd0cmFucyB7XG4gICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5jZW50ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAucmljZS1nYWxsZXJ5IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICAgIFxuICAgIC5wdDAge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG4gICAgXG4gICAgLm10LTIwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgXG4gICAgLnBiMCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbiAgICBcbiAgICAuc2Nyb2xsLWFycm93IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICAgICAgLmxlZnRpY29uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yaWdodGljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5yaWNldGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI3cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgfVxuICAgIFxuICAgIC5iYXNtYXRpU3RhdGUge1xuICAgICAgICBtYXJnaW46IDAgMzBweFxuICAgIH1cbiAgICBcbiAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmxlZnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5wbC0xMCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLnAwNSB7XG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgfVxuICAgIFxuICAgIC5mb250LWdyZWVuIHtcbiAgICAgICAgY29sb3I6ICMwRENDMTg7XG4gICAgfVxuICAgIFxuICAgIC5yZWQge1xuICAgICAgICBjb2xvcjogI0ZCNTAwMDtcbiAgICB9XG4gICAgXG4gICAgLmdyZXkge1xuICAgICAgICBjb2xvcjogZ3JleTtcbiAgICB9XG4gICAgXG4gICAgLmRhc2hib2FyZCB0YWJsZSxcbiAgICAuZGFzaGJvYXJkIHRoZWFkLFxuICAgIC5kYXNoYm9hcmQgdGgsXG4gICAgLmRhc2hib2FyZCB0cixcbiAgICAuZGFzaGJvYXJkIHRkLFxuICAgIC5kYXNoYm9hcmQgdGQge1xuICAgICAgICBib3JkZXI6IDBweDtcbiAgICB9XG4gICAgXG4gICAgLnJpY2V0eXBlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgICB9XG4gICAgXG4gICAgLmZvbnQtMTcge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICB9XG4gICAgXG4gICAgLmZvbnQtMTQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIFxuICAgIC5yaWdodCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudFxuICAgIH1cbiAgICBcbiAgICAuZGFzaGJvYXJkIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLnBhZGQtNSB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG4gICAgXG4gICAgLnB0LTEwIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHhcbiAgICB9XG4gICAgXG4gICAgLnB0LTUge1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1maWx0ZXIge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgLmZpbHRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbHRlci1jb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5ibGFjayB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgICBcbiAgICAucmljZURpc3BsYXlUeXBlIHtcbiAgICAgICAgLmZpbHRlclJpY2Uge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggN3B4IDFweCAjZWRlZGVkO1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNob3cge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5kYXNoYm9hcmQge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aGVhZCxcbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyJztcbiAgICAgICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5wZXJjZW50YWdlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmhpZGUsXG4gICAgLmhpZGVjb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLnNob3cge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgXG4gICAgaW9uLXNlZ21lbnQge1xuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDk0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaW9ze1xuICAgICAgICAuaGVhZGVyLXNlZ21lbnR7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBpb24tc2VnbWVudC1idXR0b257XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9nbGFjaWFsL0dsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhci5vdGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR2xhY2lhbEluZGlmZmVyZW5jZS1JdGFsaWNcIjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9nbGFjaWFsL0dsYWNpYWxJbmRpZmZlcmVuY2UtSXRhbGljLm90ZlwiKTtcbn1cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogODFweDtcbn1cblxuLnVzZXItcHJvZmlsZS1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAyMDtcbn1cbi51c2VyLXByb2ZpbGUtaWNvbiBzcGFuIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLm5vdGlmaWNhdGlvbiBpbWcge1xuICB3aWR0aDogMjJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuLm5vdGlmaWNhdGlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm5vdGlmaWNhdGlvbiAuYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQzNjJkO1xuICBoZWlnaHQ6IDE3cHg7XG4gIHdpZHRoOiAxN3B4O1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHJpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTlweDtcbn1cblxuLnNsaWRlciBpbWcge1xuICB3aWR0aDogODBweDtcbn1cblxuLnRpdGxlLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLnRpdGxlLXBhZGRpbmcgaDIge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnByaWNlRGF0YSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ucG9wb3ZlcmxleSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5OTk5O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jYnJvd25fcGVyY2VudGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNjcmVhbXlfc2VsbGFfcGVyY2VudGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNnb2xkZW5fc2VsbGVfcGVyY2VudGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNyYXdfcGVyY2VudGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNzdGVhbV9wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBvcG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDlweCAwcHggIzg4ODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTk5OTk5OTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiA4OHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG4ucG9wb3ZlciB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMHB4O1xufVxuLnBvcG92ZXIgdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucG9wb3ZlciB1bCBsaSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnByaWNlLXRhYmxlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB7XG4gIGhlaWdodDogMzRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGJvZHkgdHIge1xuICBoZWlnaHQ6IDM1cHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGJvZHkgdHIgdGQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZmRmO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuXG4udGFibGUtcm93IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuLnRhYmxlLXJvdyB0ciB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJveC1zaGFkb3c6IDFweCA0cHggNnB4ICNDQ0M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnN0aWNreS1jb2wge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICB6LWluZGV4OiA5OTk5OTtcbn1cblxuLmZpcnN0LWNvbCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDY2cHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cblxuLnNlY29uZC1jb2wge1xuICB3aWR0aDogMTUwcHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIGxlZnQ6IDEwMHB4O1xufVxuXG4ucmVkLXByaWNlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmdyZWVuLXByaWNlIHtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYmxhY2stcHJpY2Uge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cblxuLnRyYW5zcG9ydC1jYXJkIHtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnRyYXNucG9ydC1pbWFnZSB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uZG90dGVkLWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgIzAwMDtcbiAgbWFyZ2luOiAxOXB4IGF1dG87XG4gIHdpZHRoOiA4MSU7XG59XG5cbi50cmFuc3BvcnQtc3RhdGUge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnByaWNlLWNvbCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xufVxuXG4udHJhbnNwb3J0LXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xufVxuXG4ucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNjcm9sbC1hcnJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zbnRjLXNsaWRlciBpbWcge1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xufVxuLnNudGMtc2xpZGVyIGgxIHtcbiAgZm9udC1zaXplOiAzN3B4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBjb2xvcjogZ3JlZW47XG59XG4uc250Yy1zbGlkZXIgcCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi50eXBlLWNvbHVtbnMge1xuICBtaW4td2lkdGg6IDc1cHg7XG59XG5cbi5zbGlkZS1pbWFnZSB7XG4gIHdpZHRoOiA5MCU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnJpY2UtZ2FsbGVyeSB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5sb2dvLXRleHQge1xuICBmb250LWZhbWlseTogXCJNb25vdHlwZSBDb3JzaXZhXCI7XG59XG5cbi5oZWFkZXItc2VnbWVudCB7XG4gIGhlaWdodDogMzJweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDMxcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICB3aWR0aDogYXV0bztcbiAgLS13aWR0aDogYXV0bztcbiAgLS1taW4td2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogYXV0bztcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0Mztcbn1cbi5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICM5MmIyNDQ7XG4gIC0tYmFja2dyb3VuZDogIzkyYjI0NDtcbn1cbi5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCBpb24tbGFiZWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuLmhlYWRlci1zZWdtZW50IGlvbi1sYWJlbC5zYy1pb24tbGFiZWwtbWQtcyBtZCB7XG4gIGZvbnQtc2l6ZTogNjAlO1xufVxuLmhlYWRlci1zZWdtZW50IGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbi52aWV3dHJhbnMge1xuICBoZWlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGJveC1zaGFkb3c6IC0xcHggMXB4IDlweCAwcHggI0NDQztcbiAgd2lkdGg6IDMzJTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNlbnRlciBwIHtcbiAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnJpY2UtZ2FsbGVyeSB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4ucHQwIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5tdC0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5wYjAge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnNjcm9sbC1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMSU7XG59XG4uc2Nyb2xsLWFycm93IC5sZWZ0aWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgei1pbmRleDogOTk5OTk5O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMnB4O1xuICB3aWR0aDogMThweDtcbiAgdG9wOiAwcHg7XG59XG4uc2Nyb2xsLWFycm93IC5yaWdodGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxOHB4O1xuICB0b3A6IDBweDtcbn1cblxuLnJpY2V0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYXNtYXRpU3RhdGUge1xuICBtYXJnaW46IDAgMzBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlIC5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxudGFibGUgLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0xMCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnAwNSB7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG59XG5cbi5mb250LWdyZWVuIHtcbiAgY29sb3I6ICMwRENDMTg7XG59XG5cbi5yZWQge1xuICBjb2xvcjogI0ZCNTAwMDtcbn1cblxuLmdyZXkge1xuICBjb2xvcjogZ3JleTtcbn1cblxuLmRhc2hib2FyZCB0YWJsZSxcbi5kYXNoYm9hcmQgdGhlYWQsXG4uZGFzaGJvYXJkIHRoLFxuLmRhc2hib2FyZCB0cixcbi5kYXNoYm9hcmQgdGQsXG4uZGFzaGJvYXJkIHRkIHtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5yaWNldHlwZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9udC0xNyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xufVxuXG4uZm9udC0xNCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZGFzaGJvYXJkIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnBhZGQtNSB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnB0LTEwIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5wdC01IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnRhYmxlLWZpbHRlciB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLnRhYmxlLWZpbHRlciAuZmlsdGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnRhYmxlLWZpbHRlciAuZmlsdGVyLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5ibGFjayB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ucmljZURpc3BsYXlUeXBlIC5maWx0ZXJSaWNlIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5yaWNlRGlzcGxheVR5cGUgdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnJpY2VEaXNwbGF5VHlwZSB1bCBsaSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWRlZDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDFweCA3cHggMXB4ICNlZGVkZWQ7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yaWNlRGlzcGxheVR5cGUgdWwgLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRhc2hib2FyZCB0YWJsZSB0aGVhZCxcbi5kYXNoYm9hcmQgdGFibGUgdGJvZHkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxuLmRhc2hib2FyZCB0YWJsZSB0aGVhZCB0cixcbi5kYXNoYm9hcmQgdGFibGUgdGJvZHkgdHIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJHbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXJcIjtcbn1cbi5kYXNoYm9hcmQgdGFibGUgdGhlYWQgdHIgdGgsXG4uZGFzaGJvYXJkIHRhYmxlIHRib2R5IHRyIHRoIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQgdGFibGUgdGhlYWQgdHIgdGQsXG4uZGFzaGJvYXJkIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGUsXG4uaGlkZWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTJweCAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZC1pbWFnZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA5NHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJhY2tncm91bmQtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pb3MgLmhlYWRlci1zZWdtZW50IHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmlvcyAuaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/prices/prices.page.ts":
  /*!***************************************!*\
    !*** ./src/app/prices/prices.page.ts ***!
    \***************************************/
  /*! exports provided: PricesPage */
  /***/
  function srcAppPricesPricesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PricesPage", function () {
      return PricesPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    /* harmony import */
    var _brok_login_brok_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../brok-login/brok-login.component */"./src/app/brok-login/brok-login.component.ts");
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../components.service */"./src/app/components.service.ts");
    /* harmony import */
    var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! jquery */"./node_modules/jquery/dist/jquery.js");
    /* harmony import */
    var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _contactmodal_contactmodal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../contactmodal/contactmodal.page */"./src/app/contactmodal/contactmodal.page.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _versionmodal_versionmodal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../versionmodal/versionmodal.page */"./src/app/versionmodal/versionmodal.page.ts");
    var PricesPage = /*#__PURE__*/function () {
      function PricesPage(platform, restService, componentService, modalController, navCtrl, route, versionMdel) {
        var _this = this;
        _classCallCheck(this, PricesPage);
        this.platform = platform;
        this.restService = restService;
        this.componentService = componentService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.versionMdel = versionMdel;
        this.scrollLength = 0;
        this.scrollDepthTriggered = false;
        this.scrollPosition = "top";
        this.isNotifAvailable = 'false';
        this.selectedBasmatiState = "punjab_haryana";
        this.selectedNONBasmatiState = "punjab_haryana";
        this.riceTypeData = "price";
        this.slideOpts = {
          initialSlide: 0,
          slidesPerView: 3,
          spaceBetween: 1,
          freeMode: true,
          pagination: false,
          speed: 600,
          autoplay: true,
          loop: true
        };
        this.basmatiSt = "punjab_haryana";
        this.nonbasmatists = "punjab_haryana";
        this.restDays = 0;
        if (localStorage.getItem('is_INR_active') == '0') {
          console.log("jknk");
          this.navCtrl.navigateRoot(['planpage']);
        }
        this.isNotifAvailable = localStorage.getItem('isNewNotification');
        // this.componentService.compareTwoDates( localStorage.getItem('expired_on') );
        // if( localStorage.getItem('isExpired') == 'true' ){
        console.log("jknk");
        // 	this.navCtrl.navigateRoot( 'planpage', { animationDirection : 'forward' } );
        // }
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var todayDate = mm + '/' + dd + '/' + yyyy;
        var ExpiredDate = new Date(localStorage.getItem('expired_on'));
        var Expireddd = String(ExpiredDate.getDate()).padStart(2, '0');
        var Expiredmm = String(ExpiredDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        var Expiredyyyy = ExpiredDate.getFullYear();
        var ExpiredDateDate = Expiredmm + '/' + Expireddd + '/' + Expiredyyyy;
        this.componentService.isUserExpired.subscribe(function (res) {
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          var yyyy = today.getFullYear();
          var todayDate = mm + '/' + dd + '/' + yyyy;
          console.log(localStorage.getItem('expired_on'));
          if (localStorage.getItem('expired_on') != null && localStorage.getItem('expired_on') != 'null') {
            var ExpiredDate = new Date(localStorage.getItem('expired_on'));
            var Expireddd = String(ExpiredDate.getDate()).padStart(2, '0');
            var Expiredmm = String(ExpiredDate.getMonth() + 1).padStart(2, '0'); //January is 0!
            var Expiredyyyy = ExpiredDate.getFullYear();
            var ExpiredDateDate = Expiredmm + '/' + Expireddd + '/' + Expiredyyyy;
            _this.componentService.differanceTwoDate(todayDate, ExpiredDateDate).then(function (res) {
              _this.restDays = res;
            });
          } else {
            _this.restDays = -1;
          }
          console.log(_this.restDays);
        });
        this.componentService.isUserExpired.subscribe(function (res) {
          _this.currentPaidStatus = res;
          if (localStorage.getItem('apptype') == 'USD') {
            _this.appType = "usd";
          } else {
            _this.appType = 'other';
          }
          setTimeout(function () {
            // document.getElementById('getCurrentStatus').click();
          }, 3000);
        });
        this.getVersion();
        if (localStorage.getItem('apptype') == 'USD') {
          this.appType = "usd";
        } else {
          this.appType = 'other';
        }
      }
      _createClass(PricesPage, [{
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this2 = this;
          setTimeout(function () {
            _this2.refresh();
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          var _this3 = this;
          this.componentService.isUserExpired.subscribe(function (res) {
            _this3.currentPaidStatus = res;
            setTimeout(function () {
              document.getElementById('getCurrentStatus').click();
            }, 1000);
          });
          this.componentService.isUserExpired.subscribe(function (res) {
            _this3.currentPaidStatus = res;
            setTimeout(function () {
              document.getElementById('getCurrentStatus').click();
              _this3.componentService.loadingController.dismiss();
            }, 1500);
          });
        }
      }, {
        key: "getNotications",
        value: function getNotications() {
          this.navCtrl.navigateForward(['notifications']);
        }
      }, {
        key: "getCurrentPaidStatus",
        value: function getCurrentPaidStatus() {
          this.currentPaidStatus = this.currentPaidStatus;
        }
      }, {
        key: "getPlans",
        value: function getPlans() {
          this.restService.checkUserPlan().then(function (res) {
            localStorage.setItem("chartInt", "true");
          }, function (err) {
            localStorage.setItem("chartInt", "false");
          });
        }
      }, {
        key: "brand",
        value: function brand() {
          console.log("hjnjk");
          this.navCtrl.navigateForward(['brands']);
        }
      }, {
        key: "getGallery",
        value: function getGallery() {
          this.restService.getImagesForDashboard().then(function (res) {
            console.log('i am here 2');
          }, function (err) {});
        }
      }, {
        key: "getBasmatiState",
        value: function getBasmatiState() {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            _this4.componentService.presentLoading().then(function () {
              _this4.restService.getBasmatiState().then(function (res) {
                console.log('i am here 2');
                if (res.data.length > 0) {
                  _this4.firstBasmatiState = res.data[0];
                  _this4.lastBasmatiState = res.data[res.data.length - 1];
                  _this4.basmatiState = res.data;
                }
                _this4.componentService.loadingController.dismiss();
                resolve(true);
              }, function (err) {
                _this4.componentService.loadingController.dismiss();
                reject(false);
              });
            });
          });
        }
      }, {
        key: "getNONBasmatiState",
        value: function getNONBasmatiState() {
          var _this5 = this;
          this.restService.getNONBasmatiState().then(function (res) {
            _this5.NONbasmatiState = res.data;
          }, function (err) {});
        }
      }, {
        key: "getSlider",
        value: function getSlider() {
          var _this6 = this;
          this.restService.getGallery().then(function (res) {
            _this6.ImageGallerySlider = res.data.basmati;
          }, function (err) {});
        }
      }, {
        key: "changeState",
        value: function changeState(data) {
          this.riceUserType = data;
          if (data.split("_").includes("percentage")) {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + this.riceUserType).css({
              display: "contents"
            });
            var classData = data.split("_");
            delete classData[classData.length - 1];
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + classData.join("_") + "price").css({
              display: "none"
            });
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + this.riceUserType).css({
              display: "contents"
            });
            var _classData = data.split("_");
            delete _classData[_classData.length - 1];
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + _classData.join("_") + "percentage").css({
              display: "none"
            });
          }
          this.removePopover();
        }
      }, {
        key: "getLoadedData",
        value: function getLoadedData(type) {
          var _this7 = this;
          return new Promise(function (resolve, reject) {
            _this7.restService.getPrices(_this7.firstBasmatiState, type).then(function (res) {
              // if( type = 'basmati' ){
              // 	let basmatiColumns = res.prices.basmati;
              // 	if (basmatiColumns != undefined) {
              // 		this.latestDateBasmati = res.latest;
              // 		this.oldDateBasmati = res.oldDate;
              // 		this.basmatiColumns = basmatiColumns;
              // 		// 	basmatiColumns = Object.keys(basmatiColumns);
              // 		// 	if (basmatiColumns.length != 0) {
              // 		// 		basmatiColumns = Object.keys(res.prices.basmati[basmatiColumns[0]]);
              // 		// 		this.basmatiColumns = basmatiColumns;
              // 		// 	}
              // 	}
              // }else{
              // 	let nonBasmati = res.prices["non_basmati"];
              // 	if (nonBasmati != undefined) {
              // 		this.nonBasmatiColumns = nonBasmati;
              // 		this.latestDateNONBasmati = res.oldDate;
              // 		this.oldDateNONBasmati = res.latest;
              // 		// nonBasmati = Object.keys(nonBasmati);
              // 		// if (nonBasmati.length != 0) {
              // 		// 	nonBasmati = Object.keys(res.prices.non_basmati[nonBasmati[0]]);
              // 		// 	this.nonBasmatiColumns = nonBasmati;
              // 		// }
              // 	}
              // }
              _this7.myContent.getScrollElement().then(function (res) {
                if (res != null) {
                  _this7.fullScrollHeight = res.scrollHeight + 400;
                }
              });
              resolve(res.prices);
              _this7.getContentScrollLength();
            });
          });
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          clearTimeout(this.myVar);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this8 = this;
          if (localStorage.getItem('is_INR_active') == '0') {
            console.log("jknk");
            this.navCtrl.navigateRoot(['planpage']);
          }
          if (this.route.url == "/prices") {
            // if (localStorage.getItem("popupCanceled") == null) {
            this.myVar = setTimeout(function () {
              _this8.showCOntactModal();
            }, 30000);
            // }
            this.componentService.cancelPopup.subscribe(function () {
              if (localStorage.getItem("popupCanceled") != "true") {
                _this8.myVar = setTimeout(function () {
                  _this8.showCOntactModal();
                }, 30000);
              }
            });
          }
          this.getLoadedData("basmati").then(function (res) {
            _this8.basmatiprice = res;
          }, function (err) {});
          this.getLoadedData("non-basmati").then(function (res) {
            _this8.nonbasmatiprice = res;
          }, function (err) {});
          this.restService.CheckUserExpired().then(function (res) {
            // localStorage.setItem('isExpiryUSD' , res.isExpiry)
            // localStorage.setItem('ExpiryUSDDate' , res.data)
            if (localStorage.getItem('is_usd_active') != '0') {
              localStorage.setItem('isExpiryUSD', res.isExpiry);
              localStorage.setItem('ExpiryUSDDate', res.data);
            } else {
              localStorage.setItem('isExpiryUSD', 'true');
              localStorage.setItem('ExpiryUSDDate', null);
            }
            console.log("mbnjkjbj");
            // if( res.isExpiry == false ){
            // 	localStorage.setItem('apptype' , 'USD');
            // }else{
            // 	localStorage.setItem('apptype' , 'OTHER');
            // }
            localStorage.setItem('expired_on', res.data);
            _this8.componentService.compareTwoDates(localStorage.getItem('expired_on'));
          }, function (err) {});
          this.imagePrefix = this.restService.imageUrl;
          this.getSlider();
          this.username = localStorage.getItem("name");
          this.userFirstName = localStorage.getItem("name")[0];
          this.getBasmatiState().then(function (res) {
            // setTimeout( () =>{
            // 	console.log(this.firstBasmatiState);
            // 	document.getElementById(this.lastBasmatiState).click();
            // },1000)
            setTimeout(function () {
              document.getElementById(_this8.firstBasmatiState).click();
            }, 1500);
          })["catch"](function (err) {});
          this.getNONBasmatiState();
          this.getPlans();
          this.getPriceBasmatiState();
          // this.getGallery();
        }
      }, {
        key: "showVersionModal",
        value: function showVersionModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var modal;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.modalController.create({
                    component: _versionmodal_versionmodal_page__WEBPACK_IMPORTED_MODULE_9__["VersionmodalPage"],
                    cssClass: "contactModal"
                  });
                case 2:
                  modal = _context.sent;
                  _context.next = 5;
                  return modal.present();
                case 5:
                  return _context.abrupt("return", _context.sent);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          var _this9 = this;
          this.restService.getLatestVersion().then(function (res) {
            console.log('i am here 2');
            var elemem = _this9;
            if ('1.0.0' != res.data.version) {
              setTimeout(function () {
                elemem.showVersionModal();
              }, 8000);
            }
          }, function (err) {})["catch"](function (err) {});
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.getBasmatiState();
          this.getNONBasmatiState();
          this.getPlans();
          this.getPriceBasmatiState();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;
          this.platform.ready().then(function () {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#brown_percentage").css({
              display: "none"
            });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#creamy_sella_percentage").css({
              display: "none"
            });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#golden_selle_percentage").css({
              display: "none"
            });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#raw_percentage").css({
              display: "none"
            });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#steam_percentage").css({
              display: "none"
            });
            var api = _this10.restService;
            if (localStorage.getItem('is_usd_active') == '1') {
              _this10.USDActive = 1;
            } else {
              _this10.USDActive = 0;
            }
            if (localStorage.getItem('is_INR_active') == '1') {
              _this10.INRActive = 1;
            } else {
              _this10.INRActive = 0;
            }
            setTimeout(function () {
              // this.componentService.loadingController.dismiss();
            }, 4000);
            setTimeout(function () {
              // this.componentService.loadingController.dismiss();
            }, 10000);
          });
        }
      }, {
        key: "showPaymentModel",
        value: function showPaymentModel() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.componentService.showPaymentModal.next();
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "showCOntactModal",
        value: function showCOntactModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var modal;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.modalController.create({
                    component: _contactmodal_contactmodal_page__WEBPACK_IMPORTED_MODULE_7__["ContactmodalPage"],
                    cssClass: "contactModal"
                  });
                case 2:
                  modal = _context3.sent;
                  _context3.next = 5;
                  return modal.present();
                case 5:
                  return _context3.abrupt("return", _context3.sent);
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "replaceText",
        value: function replaceText(column) {
          var text = column.replace("Basamti Rice", "");
          text = text.replace("Basmati Rice", "");
          return text;
        }
      }, {
        key: "toArray",
        value: function toArray(answers) {
          return Object.keys(answers).map(function (key) {
            return Object.assign({
              key: key
            }, answers[key]);
          });
        }
      }, {
        key: "parseText",
        value: function parseText(text) {
          var arrayText = text.split("_");
          if (arrayText.length == 1) {
            return arrayText[0];
          } else {
            return arrayText[0] + " " + arrayText[1];
          }
        }
      }, {
        key: "loginProfile",
        value: function loginProfile() {
          this.restService.presentModal(_brok_login_brok_login_component__WEBPACK_IMPORTED_MODULE_3__["BrokLoginComponent"]).then(function () {});
          console.log('i am here 2');
        }
      }, {
        key: "scroll",
        value: function scroll(direction, className) {
          if (direction == "left") {
            jquery__WEBPACK_IMPORTED_MODULE_5__("." + className).animate({
              scrollLeft: "-=135px"
            }, "slow");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_5__("." + className).animate({
              scrollLeft: "+=135px"
            }, "slow");
          }
        }
      }, {
        key: "getGalleryData",
        value: function getGalleryData(id) {
          this.navCtrl.navigateForward(["gallerydetails", {
            galleryId: id
          }]);
        }
      }, {
        key: "changeStateBasmati",
        value: function changeStateBasmati(event) {
          var _this11 = this;
          this.selectedBasmatiState = event.detail.value;
          this.selectedNONBasmatiState = event.detail.value;
          this.componentService.presentLoading().then(function () {
            _this11.fetchRiceForm(event.detail.value, "basmati").then(function (res) {
              _this11.componentService.loadingController.dismiss();
              _this11.basmatiprice = res;
              console.log(res);
            });
          });
          if (event.detail.value == "kota_bundi") {
            jquery__WEBPACK_IMPORTED_MODULE_5__(".rajasthan").click();
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_5__("." + event.detail.value).click();
          }
        }
      }, {
        key: "gotoProfile",
        value: function gotoProfile() {
          this.navCtrl.navigateForward(['profile']);
        }
      }, {
        key: "changeStateNONBasmati",
        value: function changeStateNONBasmati(event) {
          var _this12 = this;
          this.selectedNONBasmatiState = event.detail.value;
          this.selectedBasmatiState = event.detail.value;
          this.fetchRiceForm(event.detail.value, "non-basmati").then(function (res) {
            // this.componentService.loadingController.dismiss();
            _this12.nonbasmatiprice = res;
          });
          if (event.detail.value == "kota_bundi") {
            jquery__WEBPACK_IMPORTED_MODULE_5__(".rajasthan").click();
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_5__("." + event.detail.value).click();
          }
        }
      }, {
        key: "fetchRiceForm",
        value: function fetchRiceForm(event, type) {
          var _this13 = this;
          return new Promise(function (resolve, reject) {
            // this.componentService.presentLoading().then(() => {
            _this13.restService.getPrices(event, type).then(function (res) {
              console.log('i am here 2');
              // this.componentService.loadingController.dismiss();
              // this.componentService.loadingController.dismiss();
              _this13.latestDateBasmati = res.latest;
              console.log(type);
              if (type == 'basmati') {
                _this13.basmatiColumns = res.prices.basmati;
              } else {
                _this13.nonBasmatiColumns = res.prices["non_basmati"];
                _this13.lastupdatedDate = res.lastUpdatedDate;
              }
              // if (basmatiColumns != undefined) {
              // 	this.basmatiColumns = basmatiColumns;
              // }
              // if (nonBasmati != undefined) {
              // 	this.nonBasmatiColumns = nonBasmati;
              // }
              resolve(res.prices);
              // } , (err:any) => {
              // 	// this.componentService.loadingController.dismiss();
              // 	reject(err)
              // });
            })["catch"](function () {
              // this.componentService.loadingController.dismiss();
            });
          });
        }
      }, {
        key: "navToPort",
        value: function navToPort() {
          this.navCtrl.navigateForward(["port"]);
        }
      }, {
        key: "getContentScrollLength",
        value: function getContentScrollLength() {
          // setTimeout(() => {
          // 	var elmnt = document.getElementById("content");
          // 	var y = elmnt.scrollHeight;
          // 	var x = elmnt.scrollWidth;
          // }, 2500);
        }
      }, {
        key: "scrollDown",
        value: function scrollDown() {
          this.scrollLength = this.scrollLength + this.fullScrollHeight / 4;
          if (this.fullScrollHeight >= this.scrollLength) {
            this.scrollPosition = "bottom";
          } else {
            this.scrollPosition = "top";
          }
          this.myContent.scrollToPoint(0, this.scrollLength);
        }
      }, {
        key: "scrollUp",
        value: function scrollUp() {
          this.myContent.scrollToTop();
          this.scrollPosition = "top";
          this.scrollLength = 0;
        }
      }, {
        key: "logScrolling",
        value: function logScrolling($event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var scrollElement, scrollHeight, currentScrollDepth, targetPercent, triggerDepth;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (!this.scrollDepthTriggered) {
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return");
                case 2:
                  if (!($event.target.localName != "ion-content")) {
                    _context4.next = 4;
                    break;
                  }
                  return _context4.abrupt("return");
                case 4:
                  _context4.next = 6;
                  return $event.target.getScrollElement();
                case 6:
                  scrollElement = _context4.sent;
                  scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
                  currentScrollDepth = $event.detail.scrollTop;
                  this.scrollLength = currentScrollDepth;
                  targetPercent = 80;
                  triggerDepth = scrollHeight / 100 * targetPercent;
                  if (currentScrollDepth >= triggerDepth) {
                    this.scrollPosition = "bottom";
                    // this.scrollDepthTriggered = true;
                  } else {
                    this.scrollPosition = "top";
                    // this.scrollDepthTriggered = false;
                  }
                case 13:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getRiceDetails",
        value: function getRiceDetails(riceType, state, riceName) {
          if (this.currentPaidStatus == 'true') {
            this.showPaymentModel();
          } else {
            var newRiceName = riceName.split(" ");
            newRiceName = newRiceName.join("_");
            localStorage.setItem("riceType", riceType.split(" ").join("_").toLowerCase());
            localStorage.setItem("state", state.split(" ").join("_").toLowerCase());
            localStorage.setItem("ricename", newRiceName);
            this.navCtrl.navigateForward(["ricechart"]);
          }
        }
      }, {
        key: "extractRiceName",
        value: function extractRiceName(riceName) {
          var riceNameArray = riceName.split(" ");
          if (riceNameArray[1] == "Basmati" || riceNameArray[1] == "non-basmati" || riceNameArray[1] == "rice" || riceNameArray[1] == "Rice") {
            return riceNameArray[0];
          }
          if (riceNameArray[2] == "Basmati" || riceNameArray[2] == "non-basmati" || riceNameArray[2] == "rice" || riceNameArray[2] == "Rice") {
            return riceNameArray[0] + " " + riceNameArray[1];
          }
          if (riceNameArray[3] == "Basmati" || riceNameArray[3] == "non-basmati" || riceNameArray[3] == "rice" || riceNameArray[3] == "Rice") {
            return riceNameArray[0] + " " + riceNameArray[1] + " " + riceNameArray[2];
          }
          return riceNameArray.join(" ");
        }
      }, {
        key: "convertToLowerCase",
        value: function convertToLowerCase(string) {
          return string.split(" ").join("_").toLowerCase();
        }
      }, {
        key: "convertToLowerCaseWithReplaceOfHighfn",
        value: function convertToLowerCaseWithReplaceOfHighfn(string) {
          var str = string.split(" ").join("_").toLowerCase();
          var str2 = str.split("-").join("_");
          return str2.split("/").join("_");
        }
      }, {
        key: "checkIfValueIsNeg",
        value: function checkIfValueIsNeg(newValue, oldValue) {
          var data = (newValue - oldValue) / 100;
          return Math.sign(data);
        }
      }, {
        key: "sellerINR",
        value: function sellerINR() {
          console.log("i am here");
          this.navCtrl.navigateForward(["selling-inr"]);
        }
      }, {
        key: "openPopup",
        value: function openPopup(key) {
          jquery__WEBPACK_IMPORTED_MODULE_5__(".popover").hide();
          jquery__WEBPACK_IMPORTED_MODULE_5__(".popoverley").show();
          jquery__WEBPACK_IMPORTED_MODULE_5__("#" + key).show();
        }
      }, {
        key: "removePopover",
        value: function removePopover() {
          jquery__WEBPACK_IMPORTED_MODULE_5__(".popover").hide();
          jquery__WEBPACK_IMPORTED_MODULE_5__(".popoverley").hide();
        }
      }, {
        key: "returnZero",
        value: function returnZero() {
          return 0;
        }
      }, {
        key: "getPriceBasmatiState",
        value: function getPriceBasmatiState() {
          var _this14 = this;
          this.restService.getPriceBasmatiState().then(function (res) {
            console.log('i am here 2');
            _this14.listBasmatiStates = res;
          }, function (err) {});
        }
      }, {
        key: "changeAppType",
        value: function changeAppType() {
          var isUSDActive = localStorage.getItem('is_usd_active');
          var isUserExpiredStatus = localStorage.getItem('isExpiryUSD');
          console.log("kjnk");
          if (isUSDActive != '0') {
            if (isUserExpiredStatus == 'true') {
              console.log("jknk");
              this.navCtrl.navigateForward(['planpage']);
            } else {
              console.log("mnk n ");
              localStorage.setItem('apptype', 'USD');
              this.navCtrl.navigateForward(['priceusd']);
            }
          } else {
            console.log("jknk");
            this.navCtrl.navigateForward(['planpage']);
          }
          return false;
          localStorage.setItem('apptype', 'USD');
          this.navCtrl.navigateForward(['priceusd']);
        }
      }]);
      return PricesPage;
    }();
    PricesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_4__["ComponentsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _versionmodal_versionmodal_page__WEBPACK_IMPORTED_MODULE_9__["VersionmodalPage"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])], PricesPage.prototype, "myContent", void 0);
    PricesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-prices",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./prices.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/prices/prices.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./prices.page.scss */"./src/app/prices/prices.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _components_service__WEBPACK_IMPORTED_MODULE_4__["ComponentsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _versionmodal_versionmodal_page__WEBPACK_IMPORTED_MODULE_9__["VersionmodalPage"]])], PricesPage);

    /***/
  }
}]);
//# sourceMappingURL=prices-prices-module-es5.js.map