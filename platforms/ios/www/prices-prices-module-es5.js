function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prices-prices-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/prices/prices.page.html": (
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prices/prices.page.html ***!
    \*******************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPricesPricesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content id=\"content\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\" class=\"\">\n    <div class=\"header-data green\"\n        style=\"min-height: 150px;max-height: 150px;border-radius: 0px 0px 35px 35px;margin-bottom: 50px;\">\n        <div style=\"min-height: 80px;display: flex;align-items: center;width: 100%;\">\n            <ion-row style=\"justify-content: space-between;width: 100%;padding: 0px 20px;\">\n                <ion-col size=\"4\" align=\"center\" class=\"noPaddingMargin\">\n                    <div class=\"noPaddingMargin\" (click)=\"gotoProfile()\">\n                        <p class=\"noPaddingMargin avatar\">{{ userFirstName | uppercase }}</p>\n                    </div>\n                </ion-col>\n                <ion-col size=\"4\" align=\"center\" style=\"align-self: center;\">\n                    <!-- <h3>Dashboard</h3> -->\n                    <!-- <div *ngIf=\"restDays > 0\">\n                        <p *ngIf=\"restDays <= 10\">\n                            {{restDays}} Days Left\n                        </p>\n                    </div> -->\n                    <!-- <p>\n                        <button (click)=\"showPaymentModel()\" *ngIf=\"restDays < 0\" style=\"color: #92b243; text-decoration: none; background: #fffbd6; padding: 5px; border-radius: 8px;\">Subscribe Now</button>\n                    </p> -->\n                    <img src=\"../../assets/sntc_rice_logo.png\" alt=\"\" style=\"width: 90px;\">\n                </ion-col>\n                <ion-col size=\"4\" align=\"right\" class=\"notification\" style=\"align-self: center;\">\n                    <ion-icon class=\"noPaddingMargin\" name=\"refresh-outline\" (click)=\"refresh()\"\n                        style=\"font-size: 25px;color: #fff;margin-right: 20px !important;\"></ion-icon>\n                    <div *ngIf=\"isNotifAvailable == 'true' \"\n                        style=\"height: 10px;width: 10px;background-color: red;position: absolute;right: 5px;top: 5px;z-index: 99999;border-radius: 100px;\">\n                    </div>\n                    <ion-icon class=\"noPaddingMargin\" name=\"notifications\" (click)=\"getNotications()\"\n                        style=\"font-size: 25px;color: #fff\"></ion-icon>\n                </ion-col>\n\n            </ion-row>\n        </div>\n        <!-- <ion-row class=\"ion-padding title-padding \">\n            <ion-col class=\"title\" size=\"12\">\n                \n\n            </ion-col>\n        </ion-row> -->\n        <ion-row class=\"ion-padding rice-gallery\">\n            <ion-col>\n                <ion-slides pager=\"false\" [options]=\"slideOpts\">\n                    <ion-slide *ngFor=\"let slider of ImageGallerySlider\" (click)=\"getGalleryData(slider.id)\">\n                        <div class=\"background-image\">\n                            <img src=\"{{ imagePrefix }}uploads/gallery/{{ slider.attachment }}\" alt=\"\"\n                                style=\"width: 65%;height: 65%;\">\n                        </div>\n                    </ion-slide>\n                </ion-slides>\n                <ion-row>\n                    <!-- <ion-col size=\"8\" style=\"text-align: center;margin-top: 5px;text-align: right;\">\n                        <img src=\"../../assets/sntc_rice_logo.png\" alt=\"\" style=\"width: 100px;\">\n                    </ion-col> -->\n                    <ion-col>\n\n                        <!-- <ion-button (click)=\"tradeBack()\" size=\"small\"\n                            style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                            <p style=\"font-size: 11px;\">trade</p>\n                        </ion-button> -->\n                        <!-- <ion-button (click)=\"BuyINR()\" size=\"small\" style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                            <p style=\"font-size: 11px;\">Buy INR</p>\n                        </ion-button> -->\n                        <!-- <ion-button (click)=\"tradeINR()\" size=\"small\"\n                            style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                            <p style=\"font-size: 11px;\">Trade INR</p>\n                        </ion-button> -->\n                        <!-- <ion-button (click)=\"sellerINR()\" size=\"small\"\n                            style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                            <p style=\"font-size: 11px;\">INR seller</p>\n                        </ion-button> -->\n\n                    </ion-col>\n                    <!-- <p style=\"padding: 0;margin: 0;text-align: center;width: 100%;color: #fffbd6;\">Pull to refresh</p> -->\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class=\"convertButtonParent\">\n        <button (click)=\"changeAppType()\"\n            style=\"background: #92b243;border-radius: 27px;padding: 13px 30px;margin-top: 10px;\">\n            <p style=\"padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: #fff;font-size: 14px;\">Convert to\n                USD</p>\n        </button>\n    </div>\n\n    <div class=\"otherbackground\">\n        <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n            <ion-refresher-content>\n            </ion-refresher-content>\n          </ion-refresher> -->\n\n\n        <div *ngIf=\"basmatiprice?.basmati != null\" style=\"text-align: center;padding: 6px 0px;\">\n            <span style=\"font-size: 12px;\">Last updated at: {{ lastupdatedDate }} (IST)</span>\n        </div>\n        <ion-row class=\"ion-padding title-padding m\">\n            <ion-col class=\"title\" size=\"12\">\n                <h2 class=\"ricetitle\">Basmati Live Price</h2>\n            </ion-col>\n        </ion-row>\n\n        <ion-row style=\"margin-top: 10px\">\n            <!-- <div class=\"scroll-arrow\">\n                <img src=\"./../../assets/RINGH.png\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\"\n                    class=\"righticon\">\n                &nbsp;&nbsp;\n                <img src=\"./../../assets/LEFT.png\" alt=\"\" (click)=\"scroll('right','table-responsive-1')\"\n                    class=\"lefticon\">\n            </div> -->\n            <ion-col class=\"pt0 pb0 \">\n                <ion-segment scrollable (ionChange)=\"changeStateBasmati($event)\" value=\"{{ basmatiSt }}\"\n                    class=\"header-segment table-responsive-1 basmatiState\" style=\"padding: 0px;margin: 0px;height: 55px\">\n                    <ng-container *ngFor=\"let basmatiSt of basmatiState\">\n                        <ion-segment-button class=\"{{ basmatiSt }}\" id=\"{{ basmatiSt }}\" value=\"{{ basmatiSt }}\">\n                            <ion-label>{{ parseText(basmatiSt) }}</ion-label>\n                        </ion-segment-button>\n                    </ng-container>\n                </ion-segment>\n            </ion-col>\n        </ion-row>\n\n        <div style=\"margin-bottom: 50px;\">\n            <ng-container *ngIf=\"basmatiprice?.basmati == null\">\n                <div class=\"center\">\n                    <!-- <p>No item found</p> -->\n                </div>\n            </ng-container>\n\n            <ng-container *ngIf=\"basmatiprice?.basmati != null\">\n                <ion-row class=\"ion-padding table-row padd-5\">\n                    <ion-col class=\"price-table dashboard \">\n                        <table class=\"table\" *ngFor=\"let basmatiPrice of basmatiprice?.basmati | keyvalue\">\n                            <thead>\n                                <tr class=\"lightgreen\">\n                                    <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 50%\">\n                                        <ng-container *ngFor=\"let riceData of basmatiPrice.value | keyvalue\">\n                                            <h4 class=\"black ricetype\">{{ riceData.key }} </h4>\n                                        </ng-container>\n                                    </th>\n                                    <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 25%\">\n                                        <ng-container *ngFor=\"let riceData of basmatiPrice.value | keyvalue\">\n                                            <h4 class=\"black riceCrop\">Crop Year</h4>\n                                        </ng-container>\n                                    </th>\n                                    <th class=\"sticky-col bg-lightgreen first-col left pl-10\"\n                                        style=\"width: 25%;z-index: 1\">\n                                        <ng-container *ngFor=\"let riceData of basmatiPrice.value | keyvalue\">\n                                            <h4 class=\"black ricePrice\">Prices in Qtls</h4>\n                                        </ng-container>\n                                    </th>\n                                </tr>\n                                <div class=\"popoverley\" (click)=\"removePopover()\"></div>\n                            </thead>\n                            <button id=\"getCurrentStatus\"\n                                style=\"height: 1px;width: 1px;color: red;background: transparent;padding: 0;margin: 0;\"\n                                (click)=\"getCurrentPaidStatus()\"></button>\n                            <tbody [class.hide]=\"riceUserType == convertToLowerCase(basmatiPrice.key)+'_percentage'\"\n                                [id]=\"convertToLowerCase(basmatiPrice.key)+'_price'\">\n                                <ng-container *ngFor=\"let riceData of basmatiColumns[basmatiPrice.key] | keyvalue\">\n                                    <ng-container *ngFor=\"let riceValue of riceData.value | keyvalue\">\n                                        <ng-container *ngFor=\"let riceVal of riceValue.value | keyvalue\">\n                                            <tr\n                                                (click)=\"getRiceDetails(riceVal.key , riceVal.value[latestDateBasmati].state , riceData.key)\">\n                                                <td class=\"sticky-col bg-transparent first-col left pl-10 riceanmes\"\n                                                    style=\"text-transform: uppercase;padding: 0px;font-size: 12px !important;font-family: 'Poppins-Regular';\">\n                                                    {{ extractRiceName(riceVal?.key) | uppercase }}\n                                                </td>\n                                                <td class=\"sticky-col bg-transparent first-col left pl-10 riceanmes\"\n                                                    style=\"text-transform: uppercase;padding: 0px;font-size: 12px !important;text-align: center !important;color: black;font-family: 'Poppins-Regular';\"\n                                                    [ngStyle]=\"(currentYear == riceVal.value[latestDateBasmati]?.cropYear)?{'font-family': 'Poppins-Regular'} : {'font-family': 'Poppins-Bold'}\">\n                                                    {{\n                                                    riceVal.value[latestDateBasmati]?.cropYear }}\n\n                                                </td>\n                                                <td class=\"type-columns\"\n                                                    style=\"width:180px;padding: 0px;font-size: 12px !important;color: #82A42F;font-family: 'Poppins-Regular';\"\n                                                    [class.font-grey]=\"riceVal.value[latestDateBasmati].up_down == 'stable'\"\n                                                    [class.font-green]=\"riceVal.value[latestDateBasmati].up_down == 'up' \"\n                                                    [class.red]=\"riceVal.value[latestDateBasmati].up_down == 'down' \">\n                                                    <div class=\"priceVal\">&#8377; {{\n                                                        riceVal.value[latestDateBasmati].min_price }} - {{\n                                                        riceVal.value[latestDateBasmati].max_price }} </div>\n                                                </td>\n                                            </tr>\n                                        </ng-container>\n                                    </ng-container>\n                                </ng-container>\n\n                            </tbody>\n                        </table>\n\n                    </ion-col>\n                </ion-row>\n            </ng-container>\n\n            <ion-row class=\"ion-padding title-padding mt-20\">\n                <ion-col class=\"title\" size=\"12\">\n                    <h2 class=\"ricetitle\">Non - Basmati Live Price</h2>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <!-- <div class=\"scroll-arrow\">\n                            <img src=\"./../../assets/RINGH.png\" alt=\"\" (click)=\"scroll('left','table-responsive-2')\"\n                                class=\"righticon\">\n                            &nbsp;&nbsp;\n                            <img src=\"./../../assets/LEFT.png\" alt=\"\" (click)=\"scroll('right','table-responsive-2')\"\n                                class=\"lefticon\">\n                        </div> -->\n                <ion-col class=\"pt0 pb0 p05\">\n                    <ion-segment scrollable (ionChange)=\"changeStateNONBasmati($event)\" value=\"{{ nonbasmatists }}\"\n                        class=\"header-segment table-responsive-2 basmatiState\"  style=\"padding: 0px;margin: 0px;height: 55px\">\n\n                        <ng-container *ngFor=\"let nonbasmatists of NONbasmatiState\">\n                            <ion-segment-button value=\"{{ nonbasmatists }}\" class=\"{{ nonbasmatists }}\">\n                                <ion-label>{{ parseText(nonbasmatists) }}</ion-label>\n                            </ion-segment-button>\n                        </ng-container>\n\n                    </ion-segment>\n                </ion-col>\n            </ion-row>\n\n            <ng-container *ngIf=\"nonbasmatiprice?.non_basmati != null\">\n                <ion-row class=\"ion-padding table-row padd-5\">\n\n                    <ion-col class=\"price-table dashboard\">\n                        <table class=\"table\"\n                            *ngFor=\"let nonBas of nonbasmatiprice?.non_basmati | keyvalue : returnZero\">\n                            <thead>\n                                <tr>\n                                    <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width:50%\">\n                                        <ng-container *ngFor=\"let riceData of nonBas.value | keyvalue\">\n                                            <h4 class=\"black ricetype\">{{ riceData.key }} </h4>\n                                        </ng-container>\n                                    </th>\n                                    <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width:25%\">\n                                        <ng-container *ngFor=\"let riceData of nonBas.value | keyvalue\">\n                                            <h4 class=\"black riceCrop\">Crop Year</h4>\n                                        </ng-container>\n                                    </th>\n                                    <th class=\"sticky-col bg-lightgreen first-col left pl-10\"\n                                        style=\"width:25%;z-index: 1;\">\n                                        <ng-container *ngFor=\"let riceData of nonBas.value | keyvalue\">\n                                            <h4 class=\"black ricePrice\">Prices in Qtls</h4>\n                                        </ng-container>\n                                    </th>\n                                </tr>\n                                <div class=\"popoverley\" (click)=\"removePopover()\"></div>\n                            </thead>\n\n                            <tbody\n                                [class.hide]=\"riceUserType == convertToLowerCaseWithReplaceOfHighfn(nonBas.key)+'_percentage'\"\n                                [id]=\"convertToLowerCaseWithReplaceOfHighfn(nonBas.key)+'_price'\">\n                                <ng-container *ngFor=\"let riceData of nonBasmatiColumns[nonBas.key] | keyvalue\">\n                                    <ng-container *ngFor=\"let riceValue of riceData.value | keyvalue\">\n                                        <ng-container *ngFor=\"let riceVal of riceValue.value | keyvalue\">\n                                            <tr\n                                                (click)=\"getRiceDetails(riceVal.key , riceVal.value[latestDateBasmati].state , riceData.key)\">\n                                                <td class=\"sticky-col bg-transparent first-col left pl-10\"\n                                                    style=\"text-transform: uppercase;padding: 0px;font-size: 12px !important;\">\n                                                    {{ extractRiceName(riceVal.key) | uppercase }}\n                                                </td>\n                                                <td class=\"sticky-col bg-transparent first-col left pl-10 riceanmes\"\n                                                    style=\"text-transform: uppercase;padding: 0px;font-size: 12px !important;text-align: center !important;color: black;font-family: 'Poppins-Regular';\"\n                                                    [ngStyle]=\"(currentYear == riceVal.value[latestDateBasmati]?.cropYear)?{'font-family': 'Poppins-Regular'} : {'font-family': 'Poppins-Bold'}\">\n                                                    {{riceVal.value[latestDateBasmati]?.cropYear }}\n                                                </td>\n                                                <td class=\"type-columns\"\n                                                    style=\"width:180px;font-size: 12px !important;text-align: center !important;color: #82A42F;font-family: 'Poppins-Regular'\"\n                                                    [class.font-grey]=\"riceVal.value[latestDateBasmati].up_down == 'stable'\"\n                                                    [class.font-green]=\"riceVal.value[latestDateBasmati].up_down == 'up' \"\n                                                    [class.font-red]=\"riceVal.value[latestDateBasmati].up_down == 'down' \">\n                                                    <div class=\"priceVal\"\n                                                        [class.font-grey]=\"riceVal.value[latestDateBasmati].up_down == 'stable'\"\n                                                        [class.font-green]=\"riceVal.value[latestDateBasmati].up_down == 'up' \"\n                                                        [class.font-red]=\"riceVal.value[latestDateBasmati].up_down == 'down' \">\n                                                        &#8377;\n                                                        {{riceVal.value[latestDateBasmati].min_price }} -\n                                                        {{riceVal.value[latestDateBasmati].max_price }} </div>\n                                                </td>\n                                            </tr>\n                                        </ng-container>\n                                    </ng-container>\n                                </ng-container>\n                            </tbody>\n\n\n                        </table>\n                    </ion-col>\n                </ion-row>\n            </ng-container>\n\n            <ng-container *ngIf=\"nonbasmatiprice?.non_basmati == null\">\n                <div class=\"center\">\n                    <!-- <p>No item found</p> -->\n                </div>\n            </ng-container>\n        </div>\n\n        <!-- <ion-row class=\"ion-padding title-padding center\">\n            <ion-col class=\"title\">\n                <a href=\"javascript:void(0);\" class=\"viewtrans\" (click)=\"navToPort()\">View Transportation</a>\n            </ion-col>\n        </ion-row> -->\n        <div>\n            <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"\n                style=\"position: fixed;bottom: 13%;z-index: 99999999;\" (click)=\"scrollDown()\"\n                *ngIf=\"scrollPosition == 'top' \">\n                <ion-fab-button style=\"--background: black;height: 50px;width: 50px;\">\n                    <ion-icon name=\"chevron-down-outline\" style=\"color: #fff;\"></ion-icon>\n                </ion-fab-button>\n            </ion-fab>\n\n            <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"\n                style=\"position: fixed;bottom: 13%;z-index: 99999999\" (click)=\"scrollUp()\"\n                *ngIf=\"scrollPosition == 'bottom' \">\n                <ion-fab-button style=\"--background: black;height: 50px;width: 50px;\">\n                    <ion-icon name=\"chevron-up-outline\" style=\"color: #fff;\"></ion-icon>\n                </ion-fab-button>\n            </ion-fab>\n        </div>\n    </div>\n    <app-menu></app-menu>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/prices/prices-routing.module.ts": (
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
  }),
  /***/"./src/app/prices/prices.module.ts": (
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
  }),
  /***/"./src/app/prices/prices.page.scss": (
  /*!*****************************************!*\
    !*** ./src/app/prices/prices.page.scss ***!
    \*****************************************/
  /*! exports provided: default */
  /***/
  function srcAppPricesPricesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "@font-face {\n  font-family: \"GlacialIndifference-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('GlacialIndifference-Regular.otf');\n}\n@font-face {\n  font-family: \"GlacialIndifference-Italic\";\n  font-style: italic;\n  font-weight: normal;\n  src: url('GlacialIndifference-Italic.otf');\n}\nion-content {\n  --padding-bottom: 81px;\n}\n.user-profile-icon {\n  width: 40px;\n  background-color: #606060;\n  border-radius: 50px;\n  height: 40px;\n  line-height: 50px;\n  margin-left: 15px;\n  margin-top: 10px;\n}\n.user-profile-icon span {\n  color: #FFF;\n  font-size: 30px;\n}\n.notification img {\n  width: 22px;\n  margin-right: 10px;\n  margin-top: 18px;\n}\n.notification ion-icon {\n  font-size: 25px;\n  margin-top: 15px;\n  margin-right: 10px;\n}\n.notification .badge {\n  background-color: #ad362d;\n  height: 17px;\n  width: 17px;\n  color: #FFF;\n  border-radius: 50px;\n  display: inline-block;\n  font-size: 12px;\n  text-align: center;\n  line-height: 17px;\n  right: 16px;\n  position: absolute;\n  top: 19px;\n}\n.slider img {\n  width: 80px;\n}\n.title-padding {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.title-padding h2 {\n  margin: 0px;\n}\n.priceData {\n  text-align: left;\n  margin-left: 10px;\n}\n.popoverley {\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999999;\n  display: none;\n}\n#brown_percentage {\n  display: none;\n}\n#creamy_sella_percentage {\n  display: none;\n}\n#golden_selle_percentage {\n  display: none;\n}\n#raw_percentage {\n  display: none;\n}\n#steam_percentage {\n  display: none;\n}\n.popover {\n  box-shadow: 2px 2px 9px 0px #888;\n  border-radius: 5px;\n  position: absolute;\n  right: 0;\n  z-index: 99999999;\n  background: #fff;\n  display: none;\n  height: 88px;\n  width: 150px;\n}\n.popover ul {\n  list-style: none;\n  padding: 0;\n  margin: 0px;\n}\n.popover ul li {\n  padding: 10px 10px;\n  text-align: left;\n}\n.popover ul li label {\n  font-size: 18px;\n}\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: #eeeeee !important;\n}\n.price-table table thead tr th {\n  background-color: #eeeeee !important;\n  border-right: 1px solid #dfdfdf;\n}\n.price-table table tbody tr {\n  height: 35px;\n}\n.price-table table tbody tr td {\n  font-size: 12px;\n  border-right: 1px solid #dfdfdf;\n}\n.table-row {\n  margin-top: 0px;\n  padding-top: 0px;\n}\n.table-row tr td {\n  text-align: center;\n}\n.wrapper {\n  position: relative;\n  overflow: auto;\n  padding: 0px;\n  box-shadow: 1px 4px 6px #CCC;\n  border-radius: 3px;\n}\n.sticky-col {\n  position: sticky;\n  position: -webkit-sticky;\n  background-color: white;\n  border-right: 1px solid #dfdfdf;\n  z-index: 99999;\n}\n.first-col {\n  width: auto;\n  min-width: 66px;\n  max-width: 100px;\n  left: 0px;\n  border-right: 1px solid #dfdfdf;\n}\n.second-col {\n  width: 150px;\n  min-width: 150px;\n  max-width: 150px;\n  left: 100px;\n}\n.red-price {\n  color: red;\n  font-weight: 600;\n}\n.green-price {\n  color: green;\n  font-weight: 600;\n}\n.black-price {\n  color: #000;\n  font-weight: 600;\n}\n.bg-white {\n  background-color: #FFF;\n}\n.transport-card {\n  margin-top: -5px;\n}\n.trasnport-image {\n  width: 50px;\n}\n.dotted-border {\n  border-bottom: 2px dotted #000;\n  margin: 19px auto;\n  width: 81%;\n}\n.transport-state {\n  margin-top: -10px;\n  display: block;\n  font-size: 13px;\n}\n.price-col {\n  color: #000;\n  font-size: 13px;\n  padding-top: 14px;\n}\n.transport-row {\n  border-bottom: 1px solid #CCC;\n}\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n.scroll-arrow {\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n.sntc-slider img {\n  width: 250px;\n  margin-top: 2px;\n  margin-left: -16px;\n}\n.sntc-slider h1 {\n  font-size: 37px;\n  margin: 0px;\n  padding: 0px;\n  margin-top: 25px;\n  color: green;\n}\n.sntc-slider p {\n  margin: 0px;\n  padding: 0px;\n}\n.type-columns {\n  min-width: 75px;\n}\n.slide-image {\n  width: 90%;\n  border-radius: 6px;\n}\n.rice-gallery {\n  padding-top: 0px;\n}\n.logo-text {\n  font-family: \"Monotype Corsiva\";\n}\n.header-segment {\n  height: 45px;\n  --padding-end: 0px;\n  margin-right: 0px;\n  margin: 0 auto;\n}\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 100px;\n  min-height: auto;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  --min-width: auto;\n  min-width: auto;\n  color: #000;\n  font-size: 14px;\n  padding: 8px;\n  border: 2px solid #E1E1E1;\n}\n.header-segment ion-segment-button.segment-button-checked {\n  background: #EEFCCE;\n  --background: #EEFCCE;\n}\n.header-segment ion-segment-button.segment-button-checked ion-label {\n  margin: 0px;\n  padding: 0px;\n  color: #779A20;\n  font-weight: 600;\n  font-size: 100%;\n}\n.header-segment ion-label.sc-ion-label-md-s md {\n  font-size: 60%;\n}\n.header-segment ion-label {\n  margin: 0px;\n  padding: 0px;\n  color: #000;\n  font-weight: 600;\n  font-size: 100%;\n}\n.viewtrans {\n  height: 0px;\n  margin-top: 8px;\n  border-radius: 100px;\n  min-height: 36px;\n  margin-left: 2px;\n  margin-right: 2px;\n  box-shadow: -1px 1px 9px 0px #CCC;\n  width: 33%;\n  color: #000;\n  font-size: 12px;\n  text-decoration: none;\n  padding: 10px;\n}\n.center {\n  text-align: center;\n}\n.center p {\n  padding: 15px 0px 15px 0px;\n  margin: 0;\n  margin-bottom: 20px;\n}\n.rice-gallery {\n  padding-bottom: 0;\n}\n.pt0 {\n  padding-top: 0;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.pb0 {\n  padding-bottom: 0;\n}\n.scroll-arrow {\n  position: absolute;\n  margin-top: 1%;\n}\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n.ricetitle {\n  font-size: 22px;\n  font-family: \"Poppins-SemiBold\";\n  text-align: center;\n}\ntable {\n  width: 100%;\n}\ntable .right {\n  text-align: right;\n}\ntable .left {\n  text-align: left !important;\n}\n.pl-10 {\n  padding-left: 10px;\n}\n.p05 {\n  padding: 0px 5px;\n}\n.font-green {\n  color: #0DCC18 !important;\n}\n.red {\n  color: #FB5000 !important;\n}\n.grey {\n  color: grey !important;\n}\n.dashboard table,\n.dashboard thead,\n.dashboard th,\n.dashboard tr,\n.dashboard td,\n.dashboard td {\n  border: 0px;\n}\n.ricetype {\n  font-size: 16px;\n  font-family: \"Poppins-SemiBold\";\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n  font-weight: bold;\n}\n.riceyear {\n  font-size: 14px;\n  font-family: \"Poppins-SemiBold\";\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n  font-weight: bold;\n}\n.priceinQtls {\n  font-size: 14px;\n  font-family: \"Poppins-SemiBold\";\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n  font-weight: bold;\n}\n.font-17 {\n  font-size: 14px;\n  font-family: Arial;\n}\n.font-14 {\n  font-size: 14px;\n}\n.right {\n  text-align: right !important;\n  padding-right: 10px !important;\n}\n.dashboard table tbody tr td {\n  font-size: 18px !important;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.padd-5 {\n  padding: 5px;\n}\n.pt-10 {\n  padding-top: 10px;\n}\n.pt-5 {\n  padding-top: 5px;\n}\n.table-filter {\n  list-style: none;\n  padding: 0;\n  display: inline-flex;\n  padding: 0px;\n  margin: 0px;\n}\n.table-filter .filter {\n  font-size: 20px;\n}\n.table-filter .filter-content {\n  margin-top: 3px;\n}\n.black {\n  color: #000 !important;\n}\n.riceDisplayType .filterRice {\n  padding: 0;\n  margin: 0;\n  text-align: right;\n}\n.riceDisplayType ul {\n  padding: 0;\n  margin: 0;\n  display: inline-flex;\n  list-style: none;\n}\n.riceDisplayType ul li {\n  padding: 10px 20px;\n  border: 1px solid #ededed;\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 1px 7px 1px #ededed;\n  float: right;\n  display: none;\n}\n.riceDisplayType ul .show {\n  display: block;\n}\n.dashboard table thead,\n.dashboard table tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n.dashboard table thead tr,\n.dashboard table tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 1px solid #ededed !important;\n  font-family: \"GlacialIndifference-Regular\";\n}\n.dashboard table thead tr th,\n.dashboard table tbody tr th {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-right: 0px !important;\n}\n.dashboard table thead tr td,\n.dashboard table tbody tr td {\n  border-right: 0px !important;\n  font-size: 18px !important;\n}\n.dashboard table thead {\n  border: 0px !important;\n}\n.dashboard table thead tr {\n  border: 0px !important;\n  background-color: #FFFBD6 !important;\n  --background-color: #FFFBD6 !important;\n}\n.percentage {\n  display: none;\n}\n.hide,\n.hidecontent {\n  display: none;\n}\n.show {\n  display: block;\n}\nion-segment ion-segment-button ion-label {\n  margin: 0 !important;\n  padding: 0 !important;\n  margin-top: -2px !important;\n}\n.background-image {\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n  overflow: hidden;\n  background-image: url('refe 1.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n  display: flex;\n  align-items: center;\n}\n.background-image img {\n  width: 100%;\n  margin: 0 auto;\n  border-radius: 100px;\n}\n.ios .header-segment {\n  height: 40px;\n}\n.ios .header-segment ion-segment-button {\n  border-radius: 100px;\n}\n.avatar {\n  height: 50px;\n  width: 50px;\n  background: #FFFBD6;\n  justify-content: center;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  border-radius: 100%;\n  font-size: 27px;\n  color: #92b243;\n  font-family: \"Poppins-SemiBold\";\n}\n.convertButtonParent {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n}\n.riceCrop,\n.ricePrice {\n  font-size: 12px;\n  font-family: \"Poppins-SemiBold\";\n  text-align: center;\n}\nion-fab-button {\n  height: 35px;\n  width: 100px;\n  border-radius: 0px !important;\n  --border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9wcmljZXMvcHJpY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJpY2VzL3ByaWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQ0NSO0FEUUk7RUFDSSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ05SO0FEU0k7RUFFSSxzQkFBQTtBQ1JSO0FEV0k7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNSUjtBRFVRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNSWjtBRGFRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNWWjtBRGFRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNYWjtBRGNRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDWlo7QURxQlE7RUFDSSxXQUFBO0FDbEJaO0FEc0JJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ25CUjtBRHFCUTtFQUNJLFdBQUE7QUNuQlo7QUR1Qkk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDcEJSO0FEdUJJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDcEJSO0FEdUJJO0VBQ0ksYUFBQTtBQ3BCUjtBRHVCSTtFQUNJLGFBQUE7QUNwQlI7QUR1Qkk7RUFDSSxhQUFBO0FDcEJSO0FEdUJJO0VBQ0ksYUFBQTtBQ3BCUjtBRHVCSTtFQUNJLGFBQUE7QUNwQlI7QUR1Qkk7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3BCUjtBRHNCUTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNwQlo7QURzQlk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDcEJoQjtBRHNCZ0I7RUFDSSxlQUFBO0FDcEJwQjtBRDZCUTtFQUNJLFdBQUE7RUEyQkEsZUFBQTtBQ3BEWjtBRDRCZ0I7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDMUJwQjtBRDRCb0I7RUFDSSxvQ0FBQTtFQUNBLCtCQUFBO0FDMUJ4QjtBRGdDZ0I7RUFDSSxZQUFBO0FDOUJwQjtBRGdDb0I7RUFDSSxlQUFBO0VBRUEsK0JBQUE7QUMvQnhCO0FEd0NJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDckNSO0FEd0NZO0VBQ0ksa0JBQUE7QUN0Q2hCO0FEMkNJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUN6Q1I7QUQ0Q0k7RUFDSSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUN6Q1I7QUQ0Q0k7RUFJSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0FDNUNSO0FEK0NJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDNUNSO0FEK0NJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDNUNSO0FEK0NJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDNUNSO0FEK0NJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDNUNSO0FEK0NJO0VBQ0ksc0JBQUE7QUM1Q1I7QUQrQ0k7RUFDSSxnQkFBQTtBQzVDUjtBRCtDSTtFQUNJLFdBQUE7QUM1Q1I7QUQrQ0k7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQzVDUjtBRCtDSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUM1Q1I7QUQrQ0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDNUNSO0FEK0NJO0VBQ0ksNkJBQUE7QUM1Q1I7QUQrQ0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDNUNSO0FEK0NJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQzVDUjtBRGdEUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM3Q1o7QURnRFE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUM5Q1o7QURpRFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQy9DWjtBRG1ESTtFQUlJLGVBQUE7QUNuRFI7QURzREk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNuRFI7QURzREk7RUFDSSxnQkFBQTtBQ25EUjtBRHNESTtFQUNJLCtCQUFBO0FDbkRSO0FEc0RJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDbkRSO0FEcURRO0VBQ0kseUNBQUE7RUFDQSxpREFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUVBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ3JEWjtBRHdEUTtFQUVJLG1CQUFBO0VBQ0EscUJBQUE7QUN2RFo7QUR5RFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUN2RGhCO0FEMkRRO0VBQ0ksY0FBQTtBQ3pEWjtBRDREUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQzFEWjtBRDhESTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQzNEUjtBRDhESTtFQUNJLGtCQUFBO0FDM0RSO0FENkRRO0VBQ0ksMEJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUMzRFo7QURnRUk7RUFDSSxpQkFBQTtBQzdEUjtBRGdFSTtFQUNJLGNBQUE7QUM3RFI7QURnRUk7RUFDSSxnQkFBQTtBQzdEUjtBRGdFSTtFQUNJLGlCQUFBO0FDN0RSO0FEZ0VJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDN0RSO0FEK0RRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsV0FBQTtFQUNBLFFBQUE7QUM5RFo7QURpRVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsUUFBQTtBQ2hFWjtBRG9FSTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FDakVSO0FEd0VJO0VBQ0ksV0FBQTtBQ3JFUjtBRHVFUTtFQUNJLGlCQUFBO0FDckVaO0FEd0VRO0VBQ0ksMkJBQUE7QUN0RVo7QUQwRUk7RUFDSSxrQkFBQTtBQ3ZFUjtBRDBFSTtFQUNJLGdCQUFBO0FDdkVSO0FEMEVJO0VBQ0kseUJBQUE7QUN2RVI7QUQwRUk7RUFDSSx5QkFBQTtBQ3ZFUjtBRDBFSTtFQUNJLHNCQUFBO0FDdkVSO0FEMEVJOzs7Ozs7RUFNSSxXQUFBO0FDdkVSO0FEMEVJO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDdkVSO0FEMEVJO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDdkVSO0FEMEVJO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDdkVSO0FEMEVJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDdkVSO0FEMEVJO0VBQ0ksZUFBQTtBQ3ZFUjtBRDBFSTtFQUNJLDRCQUFBO0VBQ0EsOEJBQUE7QUN2RVI7QUQwRUk7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUN2RVI7QUQwRUk7RUFDSSxZQUFBO0FDdkVSO0FEMEVJO0VBQ0ksaUJBQUE7QUN2RVI7QUQwRUk7RUFDSSxnQkFBQTtBQ3ZFUjtBRDBFSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUN2RVI7QUR5RVE7RUFDSSxlQUFBO0FDdkVaO0FEMEVRO0VBQ0ksZUFBQTtBQ3hFWjtBRDRFSTtFQUNJLHNCQUFBO0FDekVSO0FENkVRO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQzFFWjtBRDZFUTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQzNFWjtBRDZFWTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDM0VoQjtBRDhFWTtFQUNJLGNBQUE7QUM1RWhCO0FEb0ZZOztFQUVJLGtDQUFBO0VBQ0Esd0NBQUE7QUNqRmhCO0FEb0ZnQjs7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQ0FBQTtBQ2pGcEI7QURtRm9COztFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtBQ2hGeEI7QURtRm9COztFQUNJLDRCQUFBO0VBQ0EsMEJBQUE7QUNoRnhCO0FEcUZZO0VBQ0ksc0JBQUE7QUNuRmhCO0FEcUZnQjtFQUNJLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtBQ25GcEI7QUR5Rkk7RUFDSSxhQUFBO0FDdEZSO0FEeUZJOztFQUVJLGFBQUE7QUN0RlI7QUR5Rkk7RUFDSSxjQUFBO0FDdEZSO0FEMkZZO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDeEZoQjtBRDZGSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDMUZSO0FENEZRO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQzFGWjtBRCtGUTtFQUNJLFlBQUE7QUM1Rlo7QUQ4Rlk7RUFDSSxvQkFBQTtBQzVGaEI7QURpR0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQzlGUjtBRGlHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUM5RlI7QURpR0k7O0VBRUksZUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUM5RlI7QURzR0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUNuR1IiLCJmaWxlIjoic3JjL2FwcC9wcmljZXMvcHJpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXInO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvZ2xhY2lhbC9HbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXIub3RmJyk7XG4gICAgfVxuXG4gICAgLy8gQGZvbnQtZmFjZSB7XG4gICAgLy8gICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgIC8vICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vICAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvQXJpYWwub3RmJyk7XG4gICAgLy8gfVxuICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ0dsYWNpYWxJbmRpZmZlcmVuY2UtSXRhbGljJztcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvR2xhY2lhbEluZGlmZmVyZW5jZS1JdGFsaWMub3RmJyk7XG4gICAgfVxuXG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nJykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogODFweDtcbiAgICB9XG5cbiAgICAudXNlci1wcm9maWxlLWljb24ge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjA2MDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWRnZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQzNjJkO1xuICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxOXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNsaWRlciB7XG5cbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGl0bGUtcGFkZGluZyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucHJpY2VEYXRhIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLnBvcG92ZXJsZXkge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAjYnJvd25fcGVyY2VudGFnZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgI2NyZWFteV9zZWxsYV9wZXJjZW50YWdlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAjZ29sZGVuX3NlbGxlX3BlcmNlbnRhZ2Uge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICNyYXdfcGVyY2VudGFnZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgI3N0ZWFtX3BlcmNlbnRhZ2Uge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5wb3BvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA5cHggMHB4ICM4ODg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogOTk5OTk5OTk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGhlaWdodDogODhweDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wcmljZS10YWJsZSB7XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRhYmxlLXJvdyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcblxuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLndyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCA0cHggNnB4ICNDQ0M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG5cbiAgICAuc3RpY2t5LWNvbCB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIH1cblxuICAgIC5maXJzdC1jb2wge1xuICAgICAgICAvLyB3aWR0aDogOTBweDtcbiAgICAgICAgLy8gbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgLy8gbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIG1pbi13aWR0aDogNjZweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgIH1cblxuICAgIC5zZWNvbmQtY29sIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICBsZWZ0OiAxMDBweDtcbiAgICB9XG5cbiAgICAucmVkLXByaWNlIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAuZ3JlZW4tcHJpY2Uge1xuICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmJsYWNrLXByaWNlIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmJnLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICB9XG5cbiAgICAudHJhbnNwb3J0LWNhcmQge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIH1cblxuICAgIC50cmFzbnBvcnQtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICB9XG5cbiAgICAuZG90dGVkLWJvcmRlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgIzAwMDtcbiAgICAgICAgbWFyZ2luOiAxOXB4IGF1dG87XG4gICAgICAgIHdpZHRoOiA4MSU7XG4gICAgfVxuXG4gICAgLnRyYW5zcG9ydC1zdGF0ZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cblxuICAgIC5wcmljZS1jb2wge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICB9XG5cbiAgICAudHJhbnNwb3J0LXJvdyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xuICAgIH1cblxuICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5zY3JvbGwtYXJyb3cge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5zbnRjLXNsaWRlciB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM3cHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnR5cGUtY29sdW1ucyB7XG4gICAgICAgIC8vIHdpZHRoOiAzMDBweDtcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vIG1pbi13aWR0aDogMTIwcHg7XG4gICAgICAgIG1pbi13aWR0aDogNzVweDtcbiAgICB9XG5cbiAgICAuc2xpZGUtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxuXG4gICAgLnJpY2UtZ2FsbGVyeSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgfVxuXG4gICAgLmxvZ28tdGV4dCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9ub3R5cGUgQ29yc2l2YSc7XG4gICAgfVxuXG4gICAgLmhlYWRlci1zZWdtZW50IHtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IC0xcHggMXB4IDlweCAwcHggI0NDQztcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgLS13aWR0aDogYXV0bztcbiAgICAgICAgICAgIC0tbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRTFFMUUxO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFRUZDQ0U7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNFRUZDQ0U7XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc5QTIwO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsLnNjLWlvbi1sYWJlbC1tZC1zIG1kIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnZpZXd0cmFucyB7XG4gICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgLmNlbnRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmljZS1nYWxsZXJ5IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLnB0MCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cblxuICAgIC5tdC0yMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLnBiMCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5zY3JvbGwtYXJyb3cge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDElO1xuXG4gICAgICAgIC5sZWZ0aWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgei1pbmRleDogOTk5OTk5O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWdodGljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJpY2V0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVNlbWlCb2xkJztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgfVxuXG4gICAgLmJhc21hdGlTdGF0ZSB7XG4gICAgICAgIC8vIG1hcmdpbjogMCAzMHB4XG4gICAgfVxuXG4gICAgdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAubGVmdCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucGwtMTAge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLnAwNSB7XG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgfVxuXG4gICAgLmZvbnQtZ3JlZW4ge1xuICAgICAgICBjb2xvcjogIzBEQ0MxOCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5yZWQge1xuICAgICAgICBjb2xvcjogI0ZCNTAwMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5ncmV5IHtcbiAgICAgICAgY29sb3I6IGdyZXkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZGFzaGJvYXJkIHRhYmxlLFxuICAgIC5kYXNoYm9hcmQgdGhlYWQsXG4gICAgLmRhc2hib2FyZCB0aCxcbiAgICAuZGFzaGJvYXJkIHRyLFxuICAgIC5kYXNoYm9hcmQgdGQsXG4gICAgLmRhc2hib2FyZCB0ZCB7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuICAgIH1cblxuICAgIC5yaWNldHlwZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVNlbWlCb2xkJztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAucmljZXllYXIge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1TZW1pQm9sZCc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLnByaWNlaW5RdGxzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtU2VtaUJvbGQnO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5mb250LTE3IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgfVxuXG4gICAgLmZvbnQtMTQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLnJpZ2h0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50XG4gICAgfVxuXG4gICAgLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLnBhZGQtNSB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG5cbiAgICAucHQtMTAge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweFxuICAgIH1cblxuICAgIC5wdC01IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweFxuICAgIH1cblxuICAgIC50YWJsZS1maWx0ZXIge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcblxuICAgICAgICAuZmlsdGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXItY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHhcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ibGFjayB7XG4gICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnJpY2VEaXNwbGF5VHlwZSB7XG4gICAgICAgIC5maWx0ZXJSaWNlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWRlZDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDFweCA3cHggMXB4ICNlZGVkZWQ7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaG93IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kYXNoYm9hcmQge1xuICAgICAgICB0YWJsZSB7XG5cbiAgICAgICAgICAgIHRoZWFkLFxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhcic7XG5cbiAgICAgICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkQ2ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJENiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wZXJjZW50YWdlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuaGlkZSxcbiAgICAuaGlkZWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5zaG93IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgaW9uLXNlZ21lbnQge1xuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvcmVmZSAxLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmlvcyB7XG4gICAgICAgIC5oZWFkZXItc2VnbWVudCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG5cbiAgICAgICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYXZhdGFyIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkJENjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAyN3B4O1xuICAgICAgICBjb2xvcjogIzkyYjI0MztcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVNlbWlCb2xkJztcbiAgICB9XG5cbiAgICAuY29udmVydEJ1dHRvblBhcmVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnJpY2VDcm9wLFxuICAgIC5yaWNlUHJpY2Uge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1TZW1pQm9sZCc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cblxuICAgIC8vIGlvbi1zbGlkZXMgaW9uLXNsaWRlOm50aC1jaGlsZCgyKSB7XG5cbiAgICAvLyAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIC8vIH1cbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIH0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvZ2xhY2lhbC9HbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXIub3RmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdsYWNpYWxJbmRpZmZlcmVuY2UtSXRhbGljXCI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvZ2xhY2lhbC9HbGFjaWFsSW5kaWZmZXJlbmNlLUl0YWxpYy5vdGZcIik7XG59XG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDgxcHg7XG59XG5cbi51c2VyLXByb2ZpbGUtaWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi51c2VyLXByb2ZpbGUtaWNvbiBzcGFuIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLm5vdGlmaWNhdGlvbiBpbWcge1xuICB3aWR0aDogMjJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuLm5vdGlmaWNhdGlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm5vdGlmaWNhdGlvbiAuYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQzNjJkO1xuICBoZWlnaHQ6IDE3cHg7XG4gIHdpZHRoOiAxN3B4O1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHJpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTlweDtcbn1cblxuLnNsaWRlciBpbWcge1xuICB3aWR0aDogODBweDtcbn1cblxuLnRpdGxlLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLnRpdGxlLXBhZGRpbmcgaDIge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnByaWNlRGF0YSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ucG9wb3ZlcmxleSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5OTk5O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jYnJvd25fcGVyY2VudGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNjcmVhbXlfc2VsbGFfcGVyY2VudGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNnb2xkZW5fc2VsbGVfcGVyY2VudGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNyYXdfcGVyY2VudGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNzdGVhbV9wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBvcG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDlweCAwcHggIzg4ODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTk5OTk5OTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiA4OHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG4ucG9wb3ZlciB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMHB4O1xufVxuLnBvcG92ZXIgdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucG9wb3ZlciB1bCBsaSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnByaWNlLXRhYmxlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB7XG4gIGhlaWdodDogMzRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGJvZHkgdHIge1xuICBoZWlnaHQ6IDM1cHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGJvZHkgdHIgdGQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG5cbi50YWJsZS1yb3cge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG4udGFibGUtcm93IHRyIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDBweDtcbiAgYm94LXNoYWRvdzogMXB4IDRweCA2cHggI0NDQztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc3RpY2t5LWNvbCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gIHotaW5kZXg6IDk5OTk5O1xufVxuXG4uZmlyc3QtY29sIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogNjZweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbGVmdDogMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuXG4uc2Vjb25kLWNvbCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgbGVmdDogMTAwcHg7XG59XG5cbi5yZWQtcHJpY2Uge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZ3JlZW4tcHJpY2Uge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ibGFjay1wcmljZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufVxuXG4udHJhbnNwb3J0LWNhcmQge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4udHJhc25wb3J0LWltYWdlIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5kb3R0ZWQtYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCAjMDAwO1xuICBtYXJnaW46IDE5cHggYXV0bztcbiAgd2lkdGg6IDgxJTtcbn1cblxuLnRyYW5zcG9ydC1zdGF0ZSB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucHJpY2UtY29sIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG59XG5cbi50cmFuc3BvcnQtcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG59XG5cbi5yaXBwbGUtcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNudGMtc2xpZGVyIGltZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG59XG4uc250Yy1zbGlkZXIgaDEge1xuICBmb250LXNpemU6IDM3cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5zbnRjLXNsaWRlciBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnR5cGUtY29sdW1ucyB7XG4gIG1pbi13aWR0aDogNzVweDtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ucmljZS1nYWxsZXJ5IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLmxvZ28tdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm90eXBlIENvcnNpdmFcIjtcbn1cblxuLmhlYWRlci1zZWdtZW50IHtcbiAgaGVpZ2h0OiA0NXB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICB3aWR0aDogYXV0bztcbiAgLS13aWR0aDogYXV0bztcbiAgLS1taW4td2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogYXV0bztcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRTFFMUUxO1xufVxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogI0VFRkNDRTtcbiAgLS1iYWNrZ3JvdW5kOiAjRUVGQ0NFO1xufVxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiAjNzc5QTIwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEwMCU7XG59XG4uaGVhZGVyLXNlZ21lbnQgaW9uLWxhYmVsLnNjLWlvbi1sYWJlbC1tZC1zIG1kIHtcbiAgZm9udC1zaXplOiA2MCU7XG59XG4uaGVhZGVyLXNlZ21lbnQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLnZpZXd0cmFucyB7XG4gIGhlaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICB3aWR0aDogMzMlO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2VudGVyIHAge1xuICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucmljZS1nYWxsZXJ5IHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5wdDAge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLm10LTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnBiMCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxJTtcbn1cbi5zY3JvbGwtYXJyb3cgLmxlZnRpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxOHB4O1xuICB0b3A6IDBweDtcbn1cbi5zY3JvbGwtYXJyb3cgLnJpZ2h0aWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHRvcDogMHB4O1xufVxuXG4ucmljZXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVNlbWlCb2xkXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlIC5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxudGFibGUgLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0xMCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnAwNSB7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG59XG5cbi5mb250LWdyZWVuIHtcbiAgY29sb3I6ICMwRENDMTggIWltcG9ydGFudDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjRkI1MDAwICFpbXBvcnRhbnQ7XG59XG5cbi5ncmV5IHtcbiAgY29sb3I6IGdyZXkgIWltcG9ydGFudDtcbn1cblxuLmRhc2hib2FyZCB0YWJsZSxcbi5kYXNoYm9hcmQgdGhlYWQsXG4uZGFzaGJvYXJkIHRoLFxuLmRhc2hib2FyZCB0cixcbi5kYXNoYm9hcmQgdGQsXG4uZGFzaGJvYXJkIHRkIHtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5yaWNldHlwZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1TZW1pQm9sZFwiO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmljZXllYXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtU2VtaUJvbGRcIjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByaWNlaW5RdGxzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVNlbWlCb2xkXCI7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb250LTE3IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbi5mb250LTE0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoYm9hcmQgdGFibGUgdGJvZHkgdHIgdGQge1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucGFkZC01IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucHQtMTAge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnB0LTUge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4udGFibGUtZmlsdGVyIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4udGFibGUtZmlsdGVyIC5maWx0ZXIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4udGFibGUtZmlsdGVyIC5maWx0ZXItY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmJsYWNrIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLnJpY2VEaXNwbGF5VHlwZSAuZmlsdGVyUmljZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucmljZURpc3BsYXlUeXBlIHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5yaWNlRGlzcGxheVR5cGUgdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDJweCAxcHggN3B4IDFweCAjZWRlZGVkO1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucmljZURpc3BsYXlUeXBlIHVsIC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kYXNoYm9hcmQgdGFibGUgdGhlYWQsXG4uZGFzaGJvYXJkIHRhYmxlIHRib2R5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQgdGFibGUgdGhlYWQgdHIsXG4uZGFzaGJvYXJkIHRhYmxlIHRib2R5IHRyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyXCI7XG59XG4uZGFzaGJvYXJkIHRhYmxlIHRoZWFkIHRyIHRoLFxuLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB0ciB0aCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGFzaGJvYXJkIHRhYmxlIHRoZWFkIHRyIHRkLFxuLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuLmRhc2hib2FyZCB0YWJsZSB0aGVhZCB7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGFzaGJvYXJkIHRhYmxlIHRoZWFkIHRyIHtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJENiAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNGRkZCRDYgIWltcG9ydGFudDtcbn1cblxuLnBlcmNlbnRhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZSxcbi5oaWRlY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9yZWZlIDEucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5iYWNrZ3JvdW5kLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5pb3MgLmhlYWRlci1zZWdtZW50IHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmlvcyAuaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5hdmF0YXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGQkQ2O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBmb250LXNpemU6IDI3cHg7XG4gIGNvbG9yOiAjOTJiMjQzO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVNlbWlCb2xkXCI7XG59XG5cbi5jb252ZXJ0QnV0dG9uUGFyZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJpY2VDcm9wLFxuLnJpY2VQcmljZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1TZW1pQm9sZFwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/prices/prices.page.ts": (
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
        this.isNotifAvailable = "false";
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
        if (localStorage.getItem("is_INR_active") == "0") {
          console.log("jknk");
          this.navCtrl.navigateRoot(["planpage"]);
        }
        this.isNotifAvailable = localStorage.getItem("isNewNotification");
        // this.componentService.compareTwoDates( localStorage.getItem('expired_on') );
        // if( localStorage.getItem('isExpired') == 'true' ){
        console.log("jknk");
        // 	this.navCtrl.navigateRoot( 'planpage', { animationDirection : 'forward' } );
        // }
        this.componentService.reRenderFooterMenu.next();
        this.componentService.reRenderSideMenu.next();
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();
        this.currentYear = yyyy;
        var todayDate = mm + "/" + dd + "/" + yyyy;
        var ExpiredDate = new Date(localStorage.getItem("expired_on"));
        var Expireddd = String(ExpiredDate.getDate()).padStart(2, "0");
        var Expiredmm = String(ExpiredDate.getMonth() + 1).padStart(2, "0"); //January is 0!
        var Expiredyyyy = ExpiredDate.getFullYear();
        var ExpiredDateDate = Expiredmm + "/" + Expireddd + "/" + Expiredyyyy;
        this.componentService.isUserExpired.subscribe(function (res) {
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, "0");
          var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
          var yyyy = today.getFullYear();
          var todayDate = mm + "/" + dd + "/" + yyyy;
          console.log(localStorage.getItem("expired_on"));
          if (localStorage.getItem("expired_on") != null && localStorage.getItem("expired_on") != "null") {
            var ExpiredDate = new Date(localStorage.getItem("expired_on"));
            var Expireddd = String(ExpiredDate.getDate()).padStart(2, "0");
            var Expiredmm = String(ExpiredDate.getMonth() + 1).padStart(2, "0"); //January is 0!
            var Expiredyyyy = ExpiredDate.getFullYear();
            var ExpiredDateDate = Expiredmm + "/" + Expireddd + "/" + Expiredyyyy;
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
          if (localStorage.getItem("apptype") == "USD") {
            _this.appType = "usd";
          } else {
            _this.appType = "other";
          }
          setTimeout(function () {
            // document.getElementById('getCurrentStatus').click();
          }, 3000);
        });
        this.getVersion();
        if (localStorage.getItem("apptype") == "USD") {
          this.appType = "usd";
        } else {
          this.appType = "other";
        }
      }
      return _createClass(PricesPage, [{
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
              document.getElementById("getCurrentStatus").click();
            }, 1000);
          });
          this.componentService.isUserExpired.subscribe(function (res) {
            _this3.currentPaidStatus = res;
            setTimeout(function () {
              document.getElementById("getCurrentStatus").click();
              _this3.componentService.loadingController.dismiss();
            }, 1500);
          });
          console.log("i am here in view load");
          this.componentService.reRenderFooterMenu.next();
        }
      }, {
        key: "getNotications",
        value: function getNotications() {
          this.navCtrl.navigateForward(["notifications"]);
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
          this.navCtrl.navigateForward(["brands"]);
        }
      }, {
        key: "getGallery",
        value: function getGallery() {
          this.restService.getImagesForDashboard().then(function (res) {}, function (err) {});
        }
      }, {
        key: "getBasmatiState",
        value: function getBasmatiState() {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            _this4.componentService.presentLoading().then(function () {
              _this4.restService.getBasmatiState().then(function (res) {
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
          if (localStorage.getItem("is_INR_active") == "0") {
            console.log("jknk");
            this.navCtrl.navigateRoot(["planpage"]);
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
            if (localStorage.getItem("is_usd_active") != "0") {
              localStorage.setItem("isExpiryUSD", res.isExpiry);
              localStorage.setItem("ExpiryUSDDate", res.data);
            } else {
              localStorage.setItem("isExpiryUSD", "true");
              localStorage.setItem("ExpiryUSDDate", null);
            }
            console.log("mbnjkjbj");
            // if( res.isExpiry == false ){
            // 	localStorage.setItem('apptype' , 'USD');
            // }else{
            // 	localStorage.setItem('apptype' , 'OTHER');
            // }
            localStorage.setItem("expired_on", res.data);
            _this8.componentService.compareTwoDates(localStorage.getItem("expired_on"));
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
            console.log("i am here 2");
            var elemem = _this9;
            if ("1.0.0" != res.data.version) {
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
          this.fetchRiceForm('PUNJAB-HARYANA', 'basmati');
          this.fetchRiceForm('PUNJAB-HARYANA', 'non-basmati');
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
            if (localStorage.getItem("is_usd_active") == "1") {
              _this10.USDActive = 1;
            } else {
              _this10.USDActive = 0;
            }
            if (localStorage.getItem("is_INR_active") == "1") {
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
          console.log("i am here 2");
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
          this.navCtrl.navigateForward(["profile"]);
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
              console.log("i am here 2");
              // this.componentService.loadingController.dismiss();
              // this.componentService.loadingController.dismiss();
              _this13.latestDateBasmati = res.latest;
              console.log(type);
              if (type == "basmati") {
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
          if (this.currentPaidStatus == "true") {
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
        key: "tradeINR",
        value: function tradeINR() {
          console.log("i am here");
          this.navCtrl.navigateForward(["trade-inr"]);
        }
      }, {
        key: "tradeBack",
        value: function tradeBack() {
          this.navCtrl.navigateForward(["trade-inr-list"]);
        }
      }, {
        key: "BuyINR",
        value: function BuyINR() {
          console.log("i am here");
          this.navCtrl.navigateForward(["buy-inr"]);
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
            console.log("i am here 2");
            _this14.listBasmatiStates = res;
          }, function (err) {});
        }
      }, {
        key: "changeAppType",
        value: function changeAppType() {
          var isUSDActive = localStorage.getItem("is_usd_active");
          var isUserExpiredStatus = localStorage.getItem("isExpiryUSD");
          console.log("kjnk");
          if (isUSDActive != "0") {
            if (isUserExpiredStatus == "true") {
              console.log("jknk");
              this.navCtrl.navigateForward(["planpage"]);
            } else {
              console.log("mnk n ");
              localStorage.setItem("apptype", "USD");
              this.navCtrl.navigateForward(["priceusd"]);
            }
          } else {
            console.log("jknk");
            this.navCtrl.navigateForward(["planpage"]);
          }
          return false;
          localStorage.setItem("apptype", "USD");
          this.navCtrl.navigateForward(["priceusd"]);
        }
      }]);
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
  })
}]);
//# sourceMappingURL=prices-prices-module-es5.js.map