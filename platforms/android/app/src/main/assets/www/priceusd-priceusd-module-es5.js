function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["priceusd-priceusd-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/priceusd/priceusd.page.html": (
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/priceusd/priceusd.page.html ***!
    \***********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPriceusdPriceusdPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content id=\"content\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\" class=\"\">\n    <div>\n        <div class=\"header-data green\"\n            style=\"min-height: 150px;max-height: 150px;border-radius: 0px 0px 35px 35px;margin-bottom: 50px;\">\n            <div style=\"min-height: 80px;display: flex;align-items: center;width: 100%;\">\n                <ion-row style=\"justify-content: space-between;width: 100%;padding: 0px 20px;\">\n                    <ion-col size=\"4\" align=\"center\" class=\"noPaddingMargin\">\n                        <div class=\"noPaddingMargin\" (click)=\"gotoProfile()\">\n                            <p class=\"noPaddingMargin avatar\">{{ userFirstName | uppercase }}</p>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"4\" align=\"center\" style=\"align-self: center;\">\n                        <!-- <h3>Dashboard</h3> -->\n                        <!-- <div *ngIf=\"restDays > 0\">\n                                <p *ngIf=\"restDays <= 10\">\n                                    {{restDays}} Days Left\n                                </p>\n                            </div> -->\n                        <!-- <p>\n                                <button (click)=\"showPaymentModel()\" *ngIf=\"restDays < 0\" style=\"color: #92b243; text-decoration: none; background: #fffbd6; padding: 5px; border-radius: 8px;\">Subscribe Now</button>\n                            </p> -->\n                        <img src=\"../../assets/sntc_rice_logo.png\" alt=\"\" style=\"width: 90px;\">\n                    </ion-col>\n                    <ion-col size=\"4\" align=\"right\" class=\"notification\" style=\"align-self: center;\">\n                        <ion-icon class=\"noPaddingMargin\" name=\"refresh-outline\" (click)=\"refresh()\"\n                            style=\"font-size: 25px;color: #fff;margin-right: 20px !important;\"></ion-icon>\n                        <div *ngIf=\"isNotifAvailable == 'true' \"\n                            style=\"height: 10px;width: 10px;background-color: red;position: absolute;right: 5px;top: 5px;z-index: 99999;border-radius: 100px;\">\n                        </div>\n                        <ion-icon class=\"noPaddingMargin\" name=\"notifications\" (click)=\"getNotications()\"\n                            style=\"font-size: 25px;color: #fff\"></ion-icon>\n                    </ion-col>\n\n                </ion-row>\n            </div>\n            <!-- <ion-row class=\"ion-padding title-padding \">\n                    <ion-col class=\"title\" size=\"12\">\n                        \n        \n                    </ion-col>\n                </ion-row> -->\n            <ion-row class=\"ion-padding rice-gallery\">\n                <ion-col>\n                    <ion-slides pager=\"false\" [options]=\"slideOpts\">\n                        <ion-slide *ngFor=\"let slider of ImageGallerySlider\" (click)=\"getGalleryData(slider.id)\">\n                            <div class=\"background-image\">\n                                <img src=\"{{ imagePrefix }}uploads/gallery/{{ slider.attachment }}\" alt=\"\"\n                                    style=\"width: 65%;height: 65%;\">\n                            </div>\n                        </ion-slide>\n                    </ion-slides>\n                    <ion-row>\n                        <!-- <ion-col size=\"8\" style=\"text-align: center;margin-top: 5px;text-align: right;\">\n                                <img src=\"../../assets/sntc_rice_logo.png\" alt=\"\" style=\"width: 100px;\">\n                            </ion-col> -->\n                        <ion-col>\n\n                            <!-- <ion-button (click)=\"tradeBack()\" size=\"small\"\n                                    style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                                    <p style=\"font-size: 11px;\">trade</p>\n                                </ion-button> -->\n                            <!-- <ion-button (click)=\"BuyINR()\" size=\"small\" style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                                    <p style=\"font-size: 11px;\">Buy INR</p>\n                                </ion-button> -->\n                            <!-- <ion-button (click)=\"tradeINR()\" size=\"small\"\n                                    style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                                    <p style=\"font-size: 11px;\">Trade INR</p>\n                                </ion-button> -->\n                            <!-- <ion-button (click)=\"sellerINR()\" size=\"small\"\n                                    style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                                    <p style=\"font-size: 11px;\">INR seller</p>\n                                </ion-button> -->\n\n                        </ion-col>\n                        <!-- <p style=\"padding: 0;margin: 0;text-align: center;width: 100%;color: #fffbd6;\">Pull to refresh</p> -->\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n        </div>\n\n\n        <div class=\"convertButtonParent\">\n            <button (click)=\"changeAppType()\"\n                style=\"background: #92b243;border-radius: 27px;padding: 13px 30px;margin: 10px 0px\">\n                <p style=\"padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: #fff;font-size: 14px;\">Convert\n                    to INR</p>\n            </button>\n        </div>\n\n\n        <div class=\"otherbackground\">\n            <div *ngIf=\"lastupdatedDate != null\" style=\"text-align: center;\">\n                <span style=\"font-size: 11px;\">Last updated at: {{ lastupdatedDate }} (IST)</span>\n            </div>\n\n            <ion-row class=\"ion-padding title-padding \" style=\"align-items: center;\">\n                <ion-col class=\"title\" size=\"2\">\n                    <img style=\"width: 100%;float: left\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\" alt=\"\"\n                        (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                </ion-col>\n\n                <ion-col class=\"title\" size=\"8\" style=\"text-align: center;\">\n                    <h2 class=\"\" style=\"font-size: 17px; padding: 3px 0px; font-family: 'Poppins-SemiBold'\">\n                        Indian Basmati Live Price\n                    </h2>\n                    <ion-row>\n                        <p style=\"padding: 0;margin:0;width: 100%;font-size: 12px;\">(All Prices are in USD PMT)</p>\n                    </ion-row>\n                </ion-col>\n                <ion-col class=\"title\" size=\"2\">\n\n                </ion-col>\n\n                <!-- <ion-col class=\"title\" size=\"2\">\n                    <img style=\"width: 40px;float: left;\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                </ion-col> -->\n            </ion-row>\n\n\n            <ng-container *ngIf=\"listBasmatiStates == null\">\n                <div class=\"center\">\n                    <!-- <p>No item found</p> -->\n                </div>\n            </ng-container>\n\n            <ng-container *ngIf=\"listBasmatiStates != null\"\n                style=\"padding-bottom: 20px;margin-bottom: 30px;width: 100%;\">\n                <ion-row class=\"table-row padd-5\" [ngClass]=\"(height==true)?'height200':'heightAuto'\"\n                    style=\"padding: 0px;margin: 0px;\">\n                    <ion-col class=\"price-table dashboard\" style=\"padding: 0px;margin: 0px;\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th class=\"sticky-col first-col left pl-10\" style=\"width: 20%\">\n                                        <ng-container>\n                                            <h6 class=\"black ricetype\"\n                                                style=\"font-size: 12px;font-family: 'Poppins-SemiBold';\">Quality</h6>\n                                        </ng-container>\n                                    </th>\n                                    <th class=\"sticky-col first-col left pl-10\" style=\"width: 20%\">\n                                        <ng-container>\n                                            <h4 class=\"black ricetype\"\n                                                style=\"font-size: 12px;font-family: 'Poppins-SemiBold';\">Packing\n                                                <ion-icon name=\"caret-down-outline\"></ion-icon>\n                                            </h4>\n                                        </ng-container>\n                                    </th>\n\n                                    <th class=\"font-17 type-columns black\" style=\"width: 20%\">\n                                        <ul class=\"table-filter\">\n                                            <li class=\"filter-content\"\n                                                style=\"font-size: 12px;font-family: 'Poppins-SemiBold';\">\n                                                FOB (FCL)<br>Mundra\n                                            </li>\n                                            <!-- <li class=\"filter\">\n                                            <ion-icon name=\"ellipsis-vertical-outline\" (click)=\"openPopup(convertToLowerCase(basmatiPrice.key))\"></ion-icon>\n                                            <div class=\"popover\" [id]=\"convertToLowerCase(basmatiPrice.key)\">\n                                                <ul>\n                                                    <li>\n                                                        <label for=\"price\"> Last price\n                                                        <input id=\"price\" class=\"priceRadio\" type=\"radio\" name=\"radio\" checked=\"checked\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_price')\"></label>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                    </li>\n                                                    <li>\n                                                        <label for=\"percentage\"> Percentage \n                                                        <input id=\"percentage\" type=\"radio\" name=\"radio\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_percentage')\"></label>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </li> -->\n                                        </ul>\n                                    </th>\n                                    <th class=\"sticky-col first-col left font-17 type-columns black\" style=\"width: 20%\"\n                                        (click)=\"openProfile()\">\n                                        <ul class=\"table-filter\">\n                                            <li class=\"filter-content\"\n                                                style=\"font-size: 12px;font-family: 'Poppins-SemiBold';\">\n                                                CIF (FCL)<br> {{defalutPort}}\n                                            </li>\n                                            <li style=\"align-self: center;\">\n                                                <ion-icon name=\"caret-down-outline\"></ion-icon>\n                                            </li>\n                                        </ul>\n                                    </th>\n                                </tr>\n                                <div class=\"popoverley\" (click)=\"removePopover()\"></div>\n                            </thead>\n                            <!-- <button id=\"getCurrentStatus\" style=\"height: 1px;width: 1px;color: red;background: transparent;padding: 0;margin: 0;\" (click)=\"getCurrentPaidStatus()\" ></button> -->\n                            <tbody class=\"priceusd\">\n                                <tr *ngFor=\"let basmati of listBasmatiStates\" (click)=\"openQuality(basmati?.rice)\">\n                                    <td class=\"sticky-col bg-transparent first-col left pl-10\">\n                                        <p style=\"font-size: 16px; padding: 0px;margin: 0px;font-weight: bold;\">\n                                            {{basmati?.get_rice_quality?.quality}}\n                                        </p>\n                                        <p\n                                            style=\"padding: 0px;margin: 0px;font-size: 12px;display: inline-block;max-width: min-content;\">\n                                            {{basmati?.get_rice_quality?.quality_name}}\n                                        </p>\n                                    </td>\n\n                                    <td class=\"sticky-col bg-transparent first-col left pl-10\"\n                                        style=\"font-size: 12px !important;font-weight: bold;\">\n                                        50kg PP\n                                    </td>\n                                    <td class=\"type-columns\">\n                                        <!-- <div class=\"priceVal\" style=\"font-size: 12px !important;\">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                                        <div class=\"priceVal\" style=\"font-size: 12px !important; font-weight: bold;\"\n                                            [ngClass]=\"basmati?.color_status == 3 ? 'black-price' : ( basmati?.color_status == 2 ) ? 'red-price' :  (basmati?.color_status == 1)? 'green-price': '' \">\n                                            ${{ basmati?.fobmin }}-{{ basmati?.fobmax }}</div>\n                                    </td>\n\n                                    <td class=\"type-columns\">\n                                        <!-- <div class=\"priceVal\" style=\"font-size: 12px !important; font-weight: bold;\" [ngClass]=\"basmati?.color_status == 3 ? 'black-price' : ( basmati?.color_status == 2 ) ? 'red-price' :  'green-price' \">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                                        <div class=\"priceVal\" style=\"font-size: 12px !important; font-weight: bold;\"\n                                            [ngClass]=\"basmati?.color_status == 3 ? 'black-price' : ( basmati?.color_status == 2 ) ? 'red-price' :  (basmati?.color_status == 1)? 'green-price': '' \">\n                                            ${{ ((basmati?.fobmin) + defaultCIFPrice) }}-{{ (basmati?.fobmax +\n                                            defaultCIFPrice) }} </div>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                    </ion-col>\n                </ion-row>\n                <ion-row style=\"justify-content: center;margin: 0 auto;width: 100%;z-index: 99999999;\">\n                    <button (click)=\"changeHeight()\"\n                        style=\"font-size: 35px;padding: 0;margin: 0;border-radius: 0px 0px 10px 10px;height: 35px;width: 100px;background-color: #92b243;\">\n                        <ion-icon *ngIf=\"(height == true)\" name=\"chevron-down-outline\"\n                            style=\"background: #92b243;overflow: hidden;border-radius: 100px;font-size: 30px;padding: 0;margin: 0;border-radius: 100px;height: 35px;\"></ion-icon>\n                        <ion-icon *ngIf=\"(height != true)\" name=\"chevron-up-outline\"\n                            style=\"background: #92b243;overflow: hidden;border-radius: 100px;font-size: 30px;padding: 0;margin: 0;border-radius: 100px;height: 35px;\"></ion-icon>\n                    </button>\n                </ion-row>\n            </ng-container>\n\n            <div style=\"margin-top: 20px\">\n                <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n                    <ion-refresher-content>\n                    </ion-refresher-content>\n                </ion-refresher> -->\n                <!-- non basmati -->\n                <ion-row class=\"ion-padding title-padding \">\n                    <ion-col class=\"title\" size=\"2\">\n                        <img style=\"width: 100%;float: left\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\"\n                            alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                    </ion-col>\n                    <ion-col class=\"title\" size=\"10\">\n                        <h2 class=\"\" style=\"font-size: 17px;float: left;padding: 3px 7px;font-weight: bold\">\n                            Indian Non-Basmati Live Price\n                        </h2>\n                    </ion-col>\n                    <!-- <ion-col class=\"title\" size=\"2\">\n                        <img style=\"width: 40px;float: left;\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                    </ion-col> -->\n                </ion-row>\n\n                <ng-container *ngIf=\"listNONBasmatiStates == null\">\n                    <div class=\"center\">\n                        <!-- <p>No item found</p> -->\n                    </div>\n                </ng-container>\n\n                <ng-container *ngIf=\"listNONBasmatiStates != null\">\n                    <ion-row class=\"ion-padding table-row padd-5\" style=\"padding: 0px;margin: 0px;\">\n                        <ion-col class=\"price-table dashboard\" style=\"padding: 0px;margin: 0px;\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"sticky-col first-col left pl-10\" style=\"width: 20%\">\n                                            <ng-container>\n                                                <h6 class=\"black ricetype\" style=\"font-size: 12px;\">Quality</h6>\n                                            </ng-container>\n                                        </th>\n                                        <th class=\"sticky-col first-col left pl-10\" style=\"width: 20%\">\n                                            <ng-container>\n                                                <h4 class=\"black ricetype\" style=\"font-size: 12px;\">Packing <ion-icon\n                                                        name=\"caret-down-outline\"></ion-icon></h4>\n                                            </ng-container>\n                                        </th>\n\n                                        <th class=\"font-17 type-columns black\" style=\"width: 20%\">\n                                            <ul class=\"table-filter\">\n                                                <li class=\"filter-content\" style=\"font-size: 12px;\">\n                                                    FOB (FCL)<br>Mundra\n                                                </li>\n                                                <!-- <li class=\"filter\">\n                                                    <ion-icon name=\"ellipsis-vertical-outline\" (click)=\"openPopup(convertToLowerCase(basmatiPrice.key))\"></ion-icon>\n                                                    <div class=\"popover\" [id]=\"convertToLowerCase(basmatiPrice.key)\">\n                                                        <ul>\n                                                            <li>\n                                                                <label for=\"price\"> Last price\n                                                                <input id=\"price\" class=\"priceRadio\" type=\"radio\" name=\"radio\" checked=\"checked\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_price')\"></label>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                            </li>\n                                                            <li>\n                                                                <label for=\"percentage\"> Percentage \n                                                                <input id=\"percentage\" type=\"radio\" name=\"radio\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_percentage')\"></label>\n                                                            </li>\n                                                        </ul>\n                                                    </div>\n                                                </li> -->\n                                            </ul>\n                                        </th>\n                                        <th class=\"sticky-col first-col left pl-10 font-17 type-columns black\"\n                                            style=\"width: 20%\">\n                                            <ul class=\"table-filter\">\n                                                <li class=\"filter-content\" style=\"font-size: 12px;\">\n                                                    CIF (FCL)<br> {{defalutPort}}\n                                                </li>\n                                                <li style=\"align-self: center;\">\n                                                    <ion-icon name=\"caret-down-outline\"></ion-icon>\n                                                </li>\n                                            </ul>\n                                        </th>\n                                    </tr>\n                                    <div class=\"popoverley\" (click)=\"removePopover()\"></div>\n                                </thead>\n                                <!-- <button id=\"getCurrentStatus\" style=\"height: 1px;width: 1px;color: red;background: transparent;padding: 0;margin: 0;\" (click)=\"getCurrentPaidStatus()\" ></button> -->\n                                <tbody>\n                                    <tr *ngFor=\"let nonbasmati of listNONBasmatiStates\"\n                                        (click)=\"openQuality(nonbasmati?.rice)\">\n                                        <td class=\"sticky-col bg-transparent first-col left pl-10\">\n                                            <p style=\"font-size: 16px; padding: 0px;margin: 0px;font-weight: bold;\">\n                                                {{nonbasmati?.get_rice_quality.quality}}</p>\n                                            <p\n                                                style=\"padding: 0px;margin: 0px;font-size: 12px;display: inline-block;max-width: min-content;\">\n                                                {{nonbasmati?.get_rice_quality.quality_name}}</p>\n                                        </td>\n\n                                        <td class=\"sticky-col bg-transparent first-col left pl-10\"\n                                            style=\"font-size: 12px !important;font-weight: bold;\">\n                                            50kg PP\n                                        </td>\n                                        <td class=\"type-columns\">\n                                            <!-- <div class=\"priceVal\" style=\"font-size: 12px !important;\">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                                            <div class=\"priceVal\" style=\"font-size: 12px !important;\"\n                                                [ngClass]=\"nonbasmati?.color_status == 3 ? 'black-price' : ( nonbasmati?.color_status == 2 ) ? 'red-price' : (nonbasmati?.color_status == 1)? 'green-price': '' \">\n                                                ${{ nonbasmati?.fobmin }}-{{ nonbasmati?.fobmax }} </div>\n                                        </td>\n\n                                        <td class=\"type-columns\">\n                                            <!-- <div class=\"priceVal\" style=\"font-size: 12px !important;\">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                                            <div class=\"priceVal\" style=\"font-size: 12px !important;\"\n                                                [ngClass]=\"nonbasmati?.color_status == 3 ? 'black-price' : ( nonbasmati?.color_status == 2 ) ? 'red-price' : (nonbasmati?.color_status == 1)? 'green-price': '' \">\n                                                ${{ ((nonbasmati?.fobmin) + defaultCIFPrice) }}-{{ (nonbasmati?.fobmax +\n                                                defaultCIFPrice) }}\n                                                <!-- <ion-icon name=\"caret-down-outline\"></ion-icon> -->\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n\n                        </ion-col>\n                    </ion-row>\n                </ng-container>\n            </div>\n\n        </div>\n    </div>\n    <app-menu></app-menu>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/priceusd/priceusd-routing.module.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/priceusd/priceusd-routing.module.ts ***!
    \*****************************************************/
  /*! exports provided: PriceusdPageRoutingModule */
  /***/
  function srcAppPriceusdPriceusdRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PriceusdPageRoutingModule", function () {
      return PriceusdPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _priceusd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./priceusd.page */"./src/app/priceusd/priceusd.page.ts");
    var routes = [{
      path: '',
      component: _priceusd_page__WEBPACK_IMPORTED_MODULE_3__["PriceusdPage"]
    }];
    var PriceusdPageRoutingModule = /*#__PURE__*/_createClass(function PriceusdPageRoutingModule() {
      _classCallCheck(this, PriceusdPageRoutingModule);
    });
    PriceusdPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PriceusdPageRoutingModule);

    /***/
  }),
  /***/"./src/app/priceusd/priceusd.module.ts": (
  /*!*********************************************!*\
    !*** ./src/app/priceusd/priceusd.module.ts ***!
    \*********************************************/
  /*! exports provided: PriceusdPageModule */
  /***/
  function srcAppPriceusdPriceusdModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PriceusdPageModule", function () {
      return PriceusdPageModule;
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
    var _priceusd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./priceusd-routing.module */"./src/app/priceusd/priceusd-routing.module.ts");
    /* harmony import */
    var _priceusd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./priceusd.page */"./src/app/priceusd/priceusd.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    /* harmony import */
    var _contactmodal_contactmodal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../contactmodal/contactmodal.module */"./src/app/contactmodal/contactmodal.module.ts");
    /* harmony import */
    var _versionmodal_versionmodal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../versionmodal/versionmodal.module */"./src/app/versionmodal/versionmodal.module.ts");
    var PriceusdPageModule = /*#__PURE__*/_createClass(function PriceusdPageModule() {
      _classCallCheck(this, PriceusdPageModule);
    });
    PriceusdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _priceusd_routing_module__WEBPACK_IMPORTED_MODULE_5__["PriceusdPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _contactmodal_contactmodal_module__WEBPACK_IMPORTED_MODULE_8__["ContactmodalPageModule"], _versionmodal_versionmodal_module__WEBPACK_IMPORTED_MODULE_9__["VersionmodalPageModule"]],
      declarations: [_priceusd_page__WEBPACK_IMPORTED_MODULE_6__["PriceusdPage"]]
    })], PriceusdPageModule);

    /***/
  }),
  /***/"./src/app/priceusd/priceusd.page.scss": (
  /*!*********************************************!*\
    !*** ./src/app/priceusd/priceusd.page.scss ***!
    \*********************************************/
  /*! exports provided: default */
  /***/
  function srcAppPriceusdPriceusdPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "@font-face {\n  font-family: \"GlacialIndifference-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('GlacialIndifference-Regular.otf');\n}\n@font-face {\n  font-family: \"GlacialIndifference-Italic\";\n  font-style: italic;\n  font-weight: normal;\n  src: url('GlacialIndifference-Italic.otf');\n}\nion-content {\n  --padding-bottom: 81px;\n}\n.user-profile-icon {\n  width: 50px;\n  background-color: #606060;\n  border-radius: 50px;\n  height: 50px;\n  line-height: 50px;\n  margin-left: 15px;\n  margin-top: 10px;\n  padding: 20;\n}\n.user-profile-icon span {\n  color: #FFF;\n  font-size: 30px;\n}\n.notification img {\n  width: 22px;\n  margin-right: 10px;\n  margin-top: 18px;\n}\n.notification ion-icon {\n  font-size: 38px;\n  margin-top: 15px;\n  margin-right: 10px;\n}\n.notification .badge {\n  background-color: #ad362d;\n  height: 17px;\n  width: 17px;\n  color: #FFF;\n  border-radius: 50px;\n  display: inline-block;\n  font-size: 12px;\n  text-align: center;\n  line-height: 17px;\n  right: 16px;\n  position: absolute;\n  top: 19px;\n}\n.slider img {\n  width: 80px;\n}\n.title-padding {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.title-padding h2 {\n  margin: 0px;\n}\n.priceData {\n  text-align: left;\n  margin-left: 10px;\n}\n.popoverley {\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999999;\n  display: none;\n}\n#brown_percentage {\n  display: none;\n}\n#creamy_sella_percentage {\n  display: none;\n}\n#golden_selle_percentage {\n  display: none;\n}\n#raw_percentage {\n  display: none;\n}\n#steam_percentage {\n  display: none;\n}\n.popover {\n  box-shadow: 2px 2px 9px 0px #888;\n  border-radius: 5px;\n  position: absolute;\n  right: 0;\n  z-index: 99999999;\n  background: #fff;\n  display: none;\n  height: 88px;\n  width: 150px;\n}\n.popover ul {\n  list-style: none;\n  padding: 0;\n  margin: 0px;\n}\n.popover ul li {\n  padding: 10px 10px;\n  text-align: left;\n}\n.popover ul li label {\n  font-size: 18px;\n}\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: #eeeeee !important;\n}\n.price-table table thead tr th {\n  background-color: #eeeeee !important;\n  border-right: 1px solid #dfdfdf;\n}\n.price-table table tbody tr {\n  height: 35px;\n}\n.price-table table tbody tr td {\n  font-size: 12px;\n  border-bottom: 1px solid #ededed;\n  border-right: 1px solid #ededed;\n}\n.table-row {\n  margin-top: 0px;\n  padding-top: 0px;\n}\n.table-row tr td {\n  text-align: center;\n}\n.wrapper {\n  position: relative;\n  overflow: auto;\n  padding: 0px;\n  box-shadow: 1px 4px 6px #CCC;\n  border-radius: 3px;\n}\n.sticky-col {\n  position: sticky;\n  position: -webkit-sticky;\n  background-color: white;\n  border-right: 1px solid #dfdfdf;\n  z-index: 99999;\n}\n.first-col {\n  width: auto;\n  min-width: 66px;\n  max-width: 100px;\n  left: 0px;\n  border-right: 1px solid #dfdfdf;\n}\n.second-col {\n  width: 150px;\n  min-width: 150px;\n  max-width: 150px;\n  left: 100px;\n}\n.red-price {\n  color: red;\n  font-weight: 600;\n}\n.green-price {\n  color: green;\n  font-weight: 600;\n}\n.black-price {\n  color: #000;\n  font-weight: 600;\n}\n.bg-white {\n  background-color: #FFF;\n}\n.transport-card {\n  margin-top: -5px;\n}\n.trasnport-image {\n  width: 50px;\n}\n.dotted-border {\n  border-bottom: 2px dotted #000;\n  margin: 19px auto;\n  width: 81%;\n}\n.transport-state {\n  margin-top: -10px;\n  display: block;\n  font-size: 13px;\n}\n.price-col {\n  color: #000;\n  font-size: 13px;\n  padding-top: 14px;\n}\n.transport-row {\n  border-bottom: 1px solid #CCC;\n}\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n.scroll-arrow {\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n.sntc-slider img {\n  width: 250px;\n  margin-top: 2px;\n  margin-left: -16px;\n}\n.sntc-slider h1 {\n  font-size: 37px;\n  margin: 0px;\n  padding: 0px;\n  margin-top: 25px;\n  color: green;\n}\n.sntc-slider p {\n  margin: 0px;\n  padding: 0px;\n}\n.type-columns {\n  min-width: 80px;\n}\n.slide-image {\n  width: 90%;\n  border-radius: 6px;\n}\n.rice-gallery {\n  padding-top: 0px;\n}\n.logo-text {\n  font-family: \"Monotype Corsiva\";\n}\n.header-segment {\n  height: 32px;\n  --padding-end: 0px;\n  margin-right: 0px;\n  margin: 0 auto;\n}\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 0px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  --min-width: auto;\n  min-width: auto;\n  color: #000;\n  font-size: 12px;\n}\n.header-segment ion-segment-button.segment-button-checked {\n  background: #92b244;\n  --background: #92b244;\n}\n.header-segment ion-segment-button.segment-button-checked ion-label {\n  margin: 0px;\n  padding: 0px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 100%;\n}\n.header-segment ion-label.sc-ion-label-md-s md {\n  font-size: 60%;\n}\n.header-segment ion-label {\n  margin: 0px;\n  padding: 0px;\n  color: #000;\n  font-weight: 600;\n  font-size: 100%;\n}\n.viewtrans {\n  height: 0px;\n  margin-top: 8px;\n  border-radius: 100px;\n  min-height: 36px;\n  margin-left: 2px;\n  margin-right: 2px;\n  box-shadow: -1px 1px 9px 0px #CCC;\n  width: 33%;\n  color: #000;\n  font-size: 12px;\n  text-decoration: none;\n  padding: 10px;\n}\n.center {\n  text-align: center;\n}\n.center p {\n  padding: 15px 0px 15px 0px;\n  margin: 0;\n  margin-bottom: 20px;\n}\n.rice-gallery {\n  padding-bottom: 0;\n}\n.pt0 {\n  padding-top: 0;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.pb0 {\n  padding-bottom: 0;\n}\n.scroll-arrow {\n  position: absolute;\n  margin-top: 1%;\n}\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n.ricetitle {\n  font-size: 27px;\n  font-family: Arial;\n  text-align: center;\n}\n.basmatiState {\n  margin: 0 30px;\n}\ntable {\n  width: 100%;\n}\ntable .right {\n  text-align: right;\n}\ntable .left {\n  text-align: left !important;\n}\n.pl-10 {\n  padding-left: 10px;\n}\n.p05 {\n  padding: 0px 5px;\n}\n.font-green {\n  color: #0DCC18;\n}\n.red {\n  color: #FB5000;\n}\n.grey {\n  color: grey;\n}\n.dashboard table,\n.dashboard thead,\n.dashboard th,\n.dashboard tr,\n.dashboard td,\n.dashboard td {\n  border: 0px;\n}\n.ricetype {\n  font-size: 30px;\n  font-family: Arial;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n  font-weight: bold;\n}\n.font-17 {\n  font-size: 14px;\n  font-family: Arial;\n}\n.font-14 {\n  font-size: 14px;\n}\n.right {\n  text-align: right !important;\n  padding-right: 10px !important;\n}\n.dashboard table tbody tr td {\n  font-size: 18px !important;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.padd-5 {\n  padding: 5px;\n}\n.pt-10 {\n  padding-top: 10px;\n}\n.pt-5 {\n  padding-top: 5px;\n}\n.table-filter {\n  list-style: none;\n  padding: 0;\n  display: inline-flex;\n  padding: 0px;\n  margin: 0px;\n}\n.table-filter .filter {\n  font-size: 20px;\n}\n.table-filter .filter-content {\n  margin-top: 3px;\n}\n.black {\n  color: #000;\n}\n.riceDisplayType .filterRice {\n  padding: 0;\n  margin: 0;\n  text-align: right;\n}\n.riceDisplayType ul {\n  padding: 0;\n  margin: 0;\n  display: inline-flex;\n  list-style: none;\n}\n.riceDisplayType ul li {\n  padding: 10px 20px;\n  border: 1px solid #ededed;\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 1px 7px 1px #ededed;\n  float: right;\n  display: none;\n}\n.riceDisplayType ul .show {\n  display: block;\n}\n.dashboard table thead,\n.dashboard table tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n.dashboard table thead tr,\n.dashboard table tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n  font-family: \"GlacialIndifference-Regular\";\n}\n.dashboard table thead tr th,\n.dashboard table tbody tr th {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-right: 0px !important;\n}\n.dashboard table thead tr td,\n.dashboard table tbody tr td {\n  border-right: 0px !important;\n  font-size: 18px !important;\n}\n.dashboard table thead {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n.dashboard table thead tr {\n  background: #fffbd6 !important;\n  background-color: #fffbd6 !important;\n  font-family: \"GlacialIndifference-Regular\";\n}\n.dashboard table thead tr th {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-right: 0px !important;\n}\n.dashboard table thead tr td {\n  border-right: 0px !important;\n  font-size: 18px !important;\n}\n.percentage {\n  display: none;\n}\n.hide,\n.hidecontent {\n  display: none;\n}\n.show {\n  display: block;\n}\nion-segment ion-segment-button ion-label {\n  margin: 0 !important;\n  padding: 0 !important;\n  margin-top: -2px !important;\n}\n.background-image {\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n  overflow: hidden;\n  background-image: url('refe 1.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n  display: flex;\n  align-items: center;\n}\n.background-image img {\n  width: 100%;\n  margin: 0 auto;\n  border-radius: 100px;\n}\n.ios .header-segment {\n  height: 40px;\n}\n.ios .header-segment ion-segment-button {\n  border-radius: 5px;\n}\n.height200 {\n  height: 220px;\n  overflow: hidden;\n}\n.heightAuto {\n  height: auto;\n}\n.riceTypeName {\n  font-size: 19px;\n  padding: 0px;\n  margin: 0px;\n  font-weight: bold;\n}\n.riceQualityName {\n  padding: 0px;\n  margin: 0px;\n  font-size: 12px;\n}\n.bagSize {\n  font-size: 13px !important;\n}\n.priceVal {\n  font-size: 13px !important;\n  font-weight: bold;\n}\n.avatar {\n  height: 50px;\n  width: 50px;\n  background: #FFFBD6;\n  justify-content: center;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  border-radius: 100%;\n  font-size: 27px;\n  color: #92b243;\n  font-family: \"Poppins-SemiBold\";\n}\n.convertButtonParent {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n}\n.riceCrop,\n.ricePrice {\n  font-size: 12px;\n  font-family: \"Poppins-SemiBold\";\n  text-align: center;\n}\n.priceusd tr td {\n  border-right: 1px solid #ededed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9wcmljZXVzZC9wcmljZXVzZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByaWNldXNkL3ByaWNldXNkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURRQTtFQUNJLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDTko7QURTQTtFQUVJLHNCQUFBO0FDUko7QURXQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNSSjtBRFVJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNSUjtBRGFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNWUjtBRGFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNYUjtBRGNJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDWlI7QURxQkk7RUFDSSxXQUFBO0FDbEJSO0FEc0JBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ25CSjtBRHFCSTtFQUNJLFdBQUE7QUNuQlI7QUR1QkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDcEJKO0FEdUJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDcEJKO0FEdUJBO0VBQ0ksYUFBQTtBQ3BCSjtBRHVCQTtFQUNJLGFBQUE7QUNwQko7QUR1QkE7RUFDSSxhQUFBO0FDcEJKO0FEdUJBO0VBQ0ksYUFBQTtBQ3BCSjtBRHVCQTtFQUNJLGFBQUE7QUNwQko7QUR1QkE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3BCSjtBRHNCSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNwQlI7QURzQlE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDcEJaO0FEc0JZO0VBQ0ksZUFBQTtBQ3BCaEI7QUQ2Qkk7RUFDSSxXQUFBO0VBMkJBLGVBQUE7QUNwRFI7QUQ0Qlk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDMUJoQjtBRDRCZ0I7RUFDSSxvQ0FBQTtFQUNBLCtCQUFBO0FDMUJwQjtBRGdDWTtFQUNJLFlBQUE7QUM5QmhCO0FEZ0NnQjtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FDOUJwQjtBRHVDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ3BDSjtBRHVDUTtFQUNJLGtCQUFBO0FDckNaO0FEMENBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUN4Q0o7QUQyQ0E7RUFJSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0FDM0NKO0FEOENBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDM0NKO0FEOENBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDM0NKO0FEOENBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDM0NKO0FEOENBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDM0NKO0FEOENBO0VBQ0ksc0JBQUE7QUMzQ0o7QUQ4Q0E7RUFDSSxnQkFBQTtBQzNDSjtBRDhDQTtFQUNJLFdBQUE7QUMzQ0o7QUQ4Q0E7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQzNDSjtBRDhDQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUMzQ0o7QUQ4Q0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDM0NKO0FEOENBO0VBQ0ksNkJBQUE7QUMzQ0o7QUQ4Q0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDM0NKO0FEOENBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQzNDSjtBRCtDSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM1Q1I7QUQrQ0k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUM3Q1I7QURnREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQzlDUjtBRGtEQTtFQUtJLGVBQUE7QUNuREo7QURzREE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNuREo7QURzREE7RUFDSSxnQkFBQTtBQ25ESjtBRHNEQTtFQUNJLCtCQUFBO0FDbkRKO0FEc0RBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDbkRKO0FEcURJO0VBQ0kseUNBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNyRFI7QUR5REk7RUFFSSxtQkFBQTtFQUNBLHFCQUFBO0FDeERSO0FEMERRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDeERaO0FENERJO0VBQ0ksY0FBQTtBQzFEUjtBRDZESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQzNEUjtBRCtEQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQzVESjtBRCtEQTtFQUNJLGtCQUFBO0FDNURKO0FEOERJO0VBQ0ksMEJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUM1RFI7QURpRUE7RUFDSSxpQkFBQTtBQzlESjtBRGlFQTtFQUNJLGNBQUE7QUM5REo7QURpRUE7RUFDSSxnQkFBQTtBQzlESjtBRGlFQTtFQUNJLGlCQUFBO0FDOURKO0FEaUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDOURKO0FEZ0VJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsV0FBQTtFQUNBLFFBQUE7QUMvRFI7QURrRUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsUUFBQTtBQ2pFUjtBRHFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbEVKO0FEcUVBO0VBQ0ksY0FBQTtBQ2xFSjtBRHFFQTtFQUNJLFdBQUE7QUNsRUo7QURvRUk7RUFDSSxpQkFBQTtBQ2xFUjtBRHFFSTtFQUNJLDJCQUFBO0FDbkVSO0FEdUVBO0VBQ0ksa0JBQUE7QUNwRUo7QUR1RUE7RUFDSSxnQkFBQTtBQ3BFSjtBRHVFQTtFQUNJLGNBQUE7QUNwRUo7QUR1RUE7RUFDSSxjQUFBO0FDcEVKO0FEdUVBO0VBQ0ksV0FBQTtBQ3BFSjtBRHVFQTs7Ozs7O0VBTUksV0FBQTtBQ3BFSjtBRHVFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQ3BFSjtBRHVFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ3BFSjtBRHVFQTtFQUNJLGVBQUE7QUNwRUo7QUR1RUE7RUFDSSw0QkFBQTtFQUNBLDhCQUFBO0FDcEVKO0FEdUVBO0VBQ0ksMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDcEVKO0FEdUVBO0VBQ0ksWUFBQTtBQ3BFSjtBRHVFQTtFQUNJLGlCQUFBO0FDcEVKO0FEdUVBO0VBQ0ksZ0JBQUE7QUNwRUo7QUR1RUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDcEVKO0FEc0VJO0VBQ0ksZUFBQTtBQ3BFUjtBRHVFSTtFQUNJLGVBQUE7QUNyRVI7QUR5RUE7RUFDSSxXQUFBO0FDdEVKO0FEMEVJO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ3ZFUjtBRDBFSTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ3hFUjtBRDBFUTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDeEVaO0FEMkVRO0VBQ0ksY0FBQTtBQ3pFWjtBRGlGUTs7RUFFSSxrQ0FBQTtFQUNBLHdDQUFBO0FDOUVaO0FEaUZZOztFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7RUFFQSwwQ0FBQTtBQy9FaEI7QURpRmdCOztFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtBQzlFcEI7QURpRmdCOztFQUNJLDRCQUFBO0VBQ0EsMEJBQUE7QUM5RXBCO0FEc0ZRO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ3BGWjtBRHVGWTtFQUNJLDhCQUFBO0VBQ0Esb0NBQUE7RUFFQSwwQ0FBQTtBQ3RGaEI7QUR3RmdCO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FDdEZwQjtBRHlGZ0I7RUFDSSw0QkFBQTtFQUNBLDBCQUFBO0FDdkZwQjtBRDhGQTtFQUNJLGFBQUE7QUMzRko7QUQ4RkE7O0VBRUksYUFBQTtBQzNGSjtBRDhGQTtFQUNJLGNBQUE7QUMzRko7QURnR1E7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUM3Rlo7QURrR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQy9GSjtBRGlHSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUMvRlI7QURvR0k7RUFDSSxZQUFBO0FDakdSO0FEbUdRO0VBQ0ksa0JBQUE7QUNqR1o7QURzR0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNuR0o7QURzR0E7RUFDSSxZQUFBO0FDbkdKO0FEc0dBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNuR0o7QURzR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNuR0o7QURzR0E7RUFDSSwwQkFBQTtBQ25HSjtBRHNHQTtFQUNJLDBCQUFBO0VBQ0EsaUJBQUE7QUNuR0o7QURzR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQ25HSjtBRHNHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNuR0o7QURzR0E7O0VBRUksZUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUNuR0o7QUR3R1E7RUFDSSwwQ0FBQTtBQ3JHWiIsImZpbGUiOiJzcmMvYXBwL3ByaWNldXNkL3ByaWNldXNkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyLm90ZicpO1xufVxuXG4vLyBAZm9udC1mYWNlIHtcbi8vICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbi8vICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9nbGFjaWFsL0FyaWFsLm90ZicpO1xuLy8gfVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdHbGFjaWFsSW5kaWZmZXJlbmNlLUl0YWxpYyc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9nbGFjaWFsL0dsYWNpYWxJbmRpZmZlcmVuY2UtSXRhbGljLm90ZicpO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogODFweDtcbn1cblxuLnVzZXItcHJvZmlsZS1pY29uIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogMjA7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAuYmFkZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQzNjJkO1xuICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTlweDtcbiAgICB9XG59XG5cbi5zbGlkZXIge1xuXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTFweDtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICB9XG59XG5cbi50aXRsZS1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbn1cblxuLnByaWNlRGF0YSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnBvcG92ZXJsZXkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNicm93bl9wZXJjZW50YWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jY3JlYW15X3NlbGxhX3BlcmNlbnRhZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNnb2xkZW5fc2VsbGVfcGVyY2VudGFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI3Jhd19wZXJjZW50YWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jc3RlYW1fcGVyY2VudGFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBvcG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggOXB4IDBweCAjODg4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogOTk5OTk5OTk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGhlaWdodDogODhweDtcbiAgICB3aWR0aDogMTUwcHg7XG5cbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wcmljZS10YWJsZSB7XG5cbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgdGhlYWQge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcblxuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VkZWRlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxufVxuXG4udGFibGUtcm93IHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcblxuICAgIHRyIHtcbiAgICAgICAgdGQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ud3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCA0cHggNnB4ICNDQ0M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc3RpY2t5LWNvbCB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICB6LWluZGV4OiA5OTk5OTtcbn1cblxuLmZpcnN0LWNvbCB7XG4gICAgLy8gd2lkdGg6IDkwcHg7XG4gICAgLy8gbWluLXdpZHRoOiAxMDBweDtcbiAgICAvLyBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogNjZweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuXG4uc2Vjb25kLWNvbCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBsZWZ0OiAxMDBweDtcbn1cblxuLnJlZC1wcmljZSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZ3JlZW4tcHJpY2Uge1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYmxhY2stcHJpY2Uge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5iZy13aGl0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cblxuLnRyYW5zcG9ydC1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4udHJhc25wb3J0LWltYWdlIHtcbiAgICB3aWR0aDogNTBweDtcbn1cblxuLmRvdHRlZC1ib3JkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgIzAwMDtcbiAgICBtYXJnaW46IDE5cHggYXV0bztcbiAgICB3aWR0aDogODElO1xufVxuXG4udHJhbnNwb3J0LXN0YXRlIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5wcmljZS1jb2wge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcbn1cblxuLnRyYW5zcG9ydC1yb3cge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xufVxuXG4ucmlwcGxlLXBhcmVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zY3JvbGwtYXJyb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc250Yy1zbGlkZXIge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDM3cHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG59XG5cbi50eXBlLWNvbHVtbnMge1xuICAgIC8vIHdpZHRoOiAzMDBweDtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAvLyBtaW4td2lkdGg6IDEyMHB4O1xuICAgIC8vIG1pbi13aWR0aDogNzVweDtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG59XG5cbi5zbGlkZS1pbWFnZSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5yaWNlLWdhbGxlcnkge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5sb2dvLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9ub3R5cGUgQ29yc2l2YSc7XG59XG5cbi5oZWFkZXItc2VnbWVudCB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMxcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgICAvLyBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAtLXdpZHRoOiBhdXRvO1xuICAgICAgICAtLW1pbi13aWR0aDogYXV0bztcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xuICAgIH1cblxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgICAgYmFja2dyb3VuZDogIzkyYjI0NDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjOTJiMjQ0O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1sYWJlbC5zYy1pb24tbGFiZWwtbWQtcyBtZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNjAlO1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgfVxufVxuXG4udmlld3RyYW5zIHtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgbWluLWhlaWdodDogMzZweDtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDlweCAwcHggI0NDQztcbiAgICB3aWR0aDogMzMlO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgcCB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gICAgfVxufVxuXG4ucmljZS1nYWxsZXJ5IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnB0MCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5tdC0yMCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnBiMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5zY3JvbGwtYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAxJTtcblxuICAgIC5sZWZ0aWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgei1pbmRleDogOTk5OTk5O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgfVxuXG4gICAgLnJpZ2h0aWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIHRvcDogMHB4O1xuICAgIH1cbn1cblxuLnJpY2V0aXRsZSB7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLmJhc21hdGlTdGF0ZSB7XG4gICAgbWFyZ2luOiAwIDMwcHhcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLnJpZ2h0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgLmxlZnQge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ucGwtMTAge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnAwNSB7XG4gICAgcGFkZGluZzogMHB4IDVweDtcbn1cblxuLmZvbnQtZ3JlZW4ge1xuICAgIGNvbG9yOiAjMERDQzE4O1xufVxuXG4ucmVkIHtcbiAgICBjb2xvcjogI0ZCNTAwMDtcbn1cblxuLmdyZXkge1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4uZGFzaGJvYXJkIHRhYmxlLFxuLmRhc2hib2FyZCB0aGVhZCxcbi5kYXNoYm9hcmQgdGgsXG4uZGFzaGJvYXJkIHRyLFxuLmRhc2hib2FyZCB0ZCxcbi5kYXNoYm9hcmQgdGQge1xuICAgIGJvcmRlcjogMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cblxuLmZvbnQtMTcge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbi5mb250LTE0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnRcbn1cblxuLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5wYWRkLTUge1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnB0LTEwIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweFxufVxuXG4ucHQtNSB7XG4gICAgcGFkZGluZy10b3A6IDVweFxufVxuXG4udGFibGUtZmlsdGVyIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuXG4gICAgLmZpbHRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAuZmlsdGVyLWNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHhcbiAgICB9XG59XG5cbi5ibGFjayB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5yaWNlRGlzcGxheVR5cGUge1xuICAgIC5maWx0ZXJSaWNlIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWRlZDtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDFweCA3cHggMXB4ICNlZGVkZWQ7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNob3cge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kYXNoYm9hcmQge1xuICAgIHRhYmxlIHtcblxuICAgICAgICB0aGVhZCxcbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXInO1xuXG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0YWJsZSB7XG5cbiAgICAgICAgdGhlYWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1MSwgMjE0LCAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTEsIDIxNCwgMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyJztcblxuICAgICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucGVyY2VudGFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGUsXG4uaGlkZWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL3JlZmUgMS5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB9XG59XG5cbi5pb3Mge1xuICAgIC5oZWFkZXItc2VnbWVudCB7XG4gICAgICAgIGhlaWdodDogNDBweDtcblxuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaGVpZ2h0MjAwIHtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZWlnaHRBdXRvIHtcbiAgICBoZWlnaHQ6IGF1dG9cbn1cblxuLnJpY2VUeXBlTmFtZSB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJpY2VRdWFsaXR5TmFtZSB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJhZ1NpemUge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG4ucHJpY2VWYWwge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYXZhdGFyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkJENjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICAgIGNvbG9yOiAjOTJiMjQzO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1TZW1pQm9sZCc7XG59XG5cbi5jb252ZXJ0QnV0dG9uUGFyZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmljZUNyb3AsXG4ucmljZVByaWNlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVNlbWlCb2xkJztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcmljZXVzZCB7XG4gICAgdHIge1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWRlZGVkICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhclwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyLm90ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHbGFjaWFsSW5kaWZmZXJlbmNlLUl0YWxpY1wiO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvR2xhY2lhbEluZGlmZmVyZW5jZS1JdGFsaWMub3RmXCIpO1xufVxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiA4MXB4O1xufVxuXG4udXNlci1wcm9maWxlLWljb24ge1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjA2MDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDIwO1xufVxuLnVzZXItcHJvZmlsZS1pY29uIHNwYW4ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uIGltZyB7XG4gIHdpZHRoOiAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG4ubm90aWZpY2F0aW9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubm90aWZpY2F0aW9uIC5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDM2MmQ7XG4gIGhlaWdodDogMTdweDtcbiAgd2lkdGg6IDE3cHg7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgcmlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xufVxuXG4uc2xpZGVyIGltZyB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4udGl0bGUtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4udGl0bGUtcGFkZGluZyBoMiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucHJpY2VEYXRhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5wb3BvdmVybGV5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNicm93bl9wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NyZWFteV9zZWxsYV9wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2dvbGRlbl9zZWxsZV9wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3Jhd19wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3N0ZWFtX3BlcmNlbnRhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucG9wb3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggOXB4IDBweCAjODg4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTk5OTk5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDg4cHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5wb3BvdmVyIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwcHg7XG59XG4ucG9wb3ZlciB1bCBsaSB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wb3BvdmVyIHVsIGxpIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucHJpY2UtdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB7XG4gIGhlaWdodDogMzVweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZGVkZWQ7XG59XG5cbi50YWJsZS1yb3cge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG4udGFibGUtcm93IHRyIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDBweDtcbiAgYm94LXNoYWRvdzogMXB4IDRweCA2cHggI0NDQztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc3RpY2t5LWNvbCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gIHotaW5kZXg6IDk5OTk5O1xufVxuXG4uZmlyc3QtY29sIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogNjZweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbGVmdDogMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuXG4uc2Vjb25kLWNvbCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgbGVmdDogMTAwcHg7XG59XG5cbi5yZWQtcHJpY2Uge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZ3JlZW4tcHJpY2Uge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ibGFjay1wcmljZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufVxuXG4udHJhbnNwb3J0LWNhcmQge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4udHJhc25wb3J0LWltYWdlIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5kb3R0ZWQtYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCAjMDAwO1xuICBtYXJnaW46IDE5cHggYXV0bztcbiAgd2lkdGg6IDgxJTtcbn1cblxuLnRyYW5zcG9ydC1zdGF0ZSB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucHJpY2UtY29sIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG59XG5cbi50cmFuc3BvcnQtcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG59XG5cbi5yaXBwbGUtcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNudGMtc2xpZGVyIGltZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG59XG4uc250Yy1zbGlkZXIgaDEge1xuICBmb250LXNpemU6IDM3cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5zbnRjLXNsaWRlciBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnR5cGUtY29sdW1ucyB7XG4gIG1pbi13aWR0aDogODBweDtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ucmljZS1nYWxsZXJ5IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLmxvZ28tdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm90eXBlIENvcnNpdmFcIjtcbn1cblxuLmhlYWRlci1zZWdtZW50IHtcbiAgaGVpZ2h0OiAzMnB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWluLWhlaWdodDogMzFweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHdpZHRoOiBhdXRvO1xuICAtLXdpZHRoOiBhdXRvO1xuICAtLW1pbi13aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzkyYjI0NDtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJiMjQ0O1xufVxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEwMCU7XG59XG4uaGVhZGVyLXNlZ21lbnQgaW9uLWxhYmVsLnNjLWlvbi1sYWJlbC1tZC1zIG1kIHtcbiAgZm9udC1zaXplOiA2MCU7XG59XG4uaGVhZGVyLXNlZ21lbnQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLnZpZXd0cmFucyB7XG4gIGhlaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICB3aWR0aDogMzMlO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2VudGVyIHAge1xuICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucmljZS1nYWxsZXJ5IHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5wdDAge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLm10LTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnBiMCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxJTtcbn1cbi5zY3JvbGwtYXJyb3cgLmxlZnRpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxOHB4O1xuICB0b3A6IDBweDtcbn1cbi5zY3JvbGwtYXJyb3cgLnJpZ2h0aWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHRvcDogMHB4O1xufVxuXG4ucmljZXRpdGxlIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhc21hdGlTdGF0ZSB7XG4gIG1hcmdpbjogMCAzMHB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGFibGUgLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG50YWJsZSAubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLnBsLTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ucDA1IHtcbiAgcGFkZGluZzogMHB4IDVweDtcbn1cblxuLmZvbnQtZ3JlZW4ge1xuICBjb2xvcjogIzBEQ0MxODtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjRkI1MDAwO1xufVxuXG4uZ3JleSB7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uZGFzaGJvYXJkIHRhYmxlLFxuLmRhc2hib2FyZCB0aGVhZCxcbi5kYXNoYm9hcmQgdGgsXG4uZGFzaGJvYXJkIHRyLFxuLmRhc2hib2FyZCB0ZCxcbi5kYXNoYm9hcmQgdGQge1xuICBib3JkZXI6IDBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb250LTE3IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbi5mb250LTE0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoYm9hcmQgdGFibGUgdGJvZHkgdHIgdGQge1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucGFkZC01IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucHQtMTAge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnB0LTUge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4udGFibGUtZmlsdGVyIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4udGFibGUtZmlsdGVyIC5maWx0ZXIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4udGFibGUtZmlsdGVyIC5maWx0ZXItY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmJsYWNrIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5yaWNlRGlzcGxheVR5cGUgLmZpbHRlclJpY2Uge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnJpY2VEaXNwbGF5VHlwZSB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucmljZURpc3BsYXlUeXBlIHVsIGxpIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMXB4IDdweCAxcHggI2VkZWRlZDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJpY2VEaXNwbGF5VHlwZSB1bCAuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGFzaGJvYXJkIHRhYmxlIHRoZWFkLFxuLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uZGFzaGJvYXJkIHRhYmxlIHRoZWFkIHRyLFxuLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB0ciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkdsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhclwiO1xufVxuLmRhc2hib2FyZCB0YWJsZSB0aGVhZCB0ciB0aCxcbi5kYXNoYm9hcmQgdGFibGUgdGJvZHkgdHIgdGgge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuLmRhc2hib2FyZCB0YWJsZSB0aGVhZCB0ciB0ZCxcbi5kYXNoYm9hcmQgdGFibGUgdGJvZHkgdHIgdGQge1xuICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQgdGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLmRhc2hib2FyZCB0YWJsZSB0aGVhZCB0ciB7XG4gIGJhY2tncm91bmQ6ICNmZmZiZDYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJkNiAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJHbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXJcIjtcbn1cbi5kYXNoYm9hcmQgdGFibGUgdGhlYWQgdHIgdGgge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuLmRhc2hib2FyZCB0YWJsZSB0aGVhZCB0ciB0ZCB7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4ucGVyY2VudGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRlLFxuLmhpZGVjb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0ycHggIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL3JlZmUgMS5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJhY2tncm91bmQtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLmlvcyAuaGVhZGVyLXNlZ21lbnQge1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uaW9zIC5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5oZWlnaHQyMDAge1xuICBoZWlnaHQ6IDIyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGVpZ2h0QXV0byB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnJpY2VUeXBlTmFtZSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yaWNlUXVhbGl0eU5hbWUge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5iYWdTaXplIHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmljZVZhbCB7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmF2YXRhciB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZCRDY7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgY29sb3I6ICM5MmIyNDM7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtU2VtaUJvbGRcIjtcbn1cblxuLmNvbnZlcnRCdXR0b25QYXJlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmljZUNyb3AsXG4ucmljZVByaWNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVNlbWlCb2xkXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByaWNldXNkIHRyIHRkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VkZWRlZCAhaW1wb3J0YW50O1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/priceusd/priceusd.page.ts": (
  /*!*******************************************!*\
    !*** ./src/app/priceusd/priceusd.page.ts ***!
    \*******************************************/
  /*! exports provided: PriceusdPage */
  /***/
  function srcAppPriceusdPriceusdPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PriceusdPage", function () {
      return PriceusdPage;
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
    var PriceusdPage = /*#__PURE__*/function () {
      function PriceusdPage(platform, restService, componentService, modalController, navCtrl, route, versionMdel) {
        var _this = this;
        _classCallCheck(this, PriceusdPage);
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
        this.height = true;
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
        // this.componentService.compareTwoDates( localStorage.getItem('expired_on') );
        if (localStorage.getItem('isUserActivatedUSD') == '0') {
          console.log("iukhjik");
          this.navCtrl.navigateRoot('planpage');
        }
        if (localStorage.getItem('isExpired') == 'true') {
          if (localStorage.getItem('is_INR_active') == '1') {
            this.navCtrl.navigateRoot('prices', {
              animationDirection: 'forward'
            });
          } else {
            console.log("iukhjik");
            this.navCtrl.navigateRoot('planpage', {
              animationDirection: 'forward'
            });
          }
        }
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
          _this.componentService.differanceTwoDate(todayDate, ExpiredDateDate).then(function (res) {
            _this.restDays = res;
          });
        });
        this.componentService.isUserExpired.subscribe(function (res) {
          _this.currentPaidStatus = res;
          if (localStorage.getItem('apptype') == 'USD') {
            _this.appType = "usd";
          } else {
            _this.appType = 'other';
          }
          setTimeout(function () {
            // document.getElementById('getCurrentStatus').clic k();
          }, 3000);
        });
        this.getVersion();
        // this.fetchRiceForm()
        if (localStorage.getItem('apptype') == 'USD') {
          this.appType = "usd";
        } else {
          this.appType = 'other';
        }
        this.componentService.reRenderFooterMenu.next();
      }
      return _createClass(PriceusdPage, [{
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this2 = this;
          this.componentService.presentLoading().then(function () {
            setTimeout(function () {
              _this2.refresh();
              event.target.complete();
              _this2.componentService.loadingController.dismiss();
            }, 2000);
          })["catch"](function () {
            _this2.componentService.loadingController.dismiss();
          });
        }
      }, {
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          var _this3 = this;
          if (localStorage.getItem('apptype') == 'USD') {
            this.appType = "usd";
          } else {
            this.appType = 'other';
          }
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
        key: "openProfile",
        value: function openProfile() {
          this.navCtrl.navigateForward('profile');
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
          this.componentService.presentLoading().then(function () {
            _this4.restService.getBasmatiState().then(function (res) {
              if (res.data.length > 0) {
                _this4.firstBasmatiState = res.data[0];
                setTimeout(function () {
                  document.getElementById(_this4.firstBasmatiState).click();
                }, 1000);
              }
              _this4.basmatiState = res.data;
              _this4.componentService.loadingController.dismiss();
            }, function (err) {
              _this4.componentService.loadingController.dismiss();
            });
          })["catch"](function () {
            _this4.componentService.loadingController.dismiss();
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
              var basmatiColumns = res.prices.basmati;
              if (basmatiColumns != undefined) {
                _this7.latestDateBasmati = res.latest;
                _this7.oldDateBasmati = res.oldDate;
                _this7.basmatiColumns = basmatiColumns;
                // 	basmatiColumns = Object.keys(basmatiColumns);
                // 	if (basmatiColumns.length != 0) {
                // 		basmatiColumns = Object.keys(res.prices.basmati[basmatiColumns[0]]);
                // 		this.basmatiColumns = basmatiColumns;
                // 	}
              }
              var nonBasmati = res.prices["non_basmati"];
              if (nonBasmati != undefined) {
                _this7.nonBasmatiColumns = nonBasmati;
                _this7.latestDateNONBasmati = res.oldDate;
                _this7.oldDateNONBasmati = res.latest;
                // nonBasmati = Object.keys(nonBasmati);
                // if (nonBasmati.length != 0) {
                // 	nonBasmati = Object.keys(res.prices.non_basmati[nonBasmati[0]]);
                // 	this.nonBasmatiColumns = nonBasmati;
                // }
              }
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
          this.isNotifAvailable = localStorage.getItem('isNewNotification');
          console.log(this.isNotifAvailable);
          console.log(this.route.url);
          if (this.route.url == "/priceusd") {
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
          // });
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
            localStorage.setItem('expired_on', res.data);
            var isUserExpiredStatus = localStorage.getItem('isExpiryUSD');
            if (isUserExpiredStatus == 'true') {
              localStorage.setItem('apptype', 'OTHER');
              _this8.navCtrl.navigateForward(['prices']);
            }
            _this8.componentService.compareTwoDates(localStorage.getItem('expired_on'));
          }, function (err) {});
          this.imagePrefix = this.restService.imageUrl;
          this.getSlider();
          this.username = localStorage.getItem("name");
          this.userFirstName = localStorage.getItem("name")[0];
          this.getUSDPrices(localStorage.getItem('id'));
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
          // this.getBasmatiState();
          // this.getNONBasmatiState();
          // this.getPlans();
          this.getUSDPrices(localStorage.getItem('id'));
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
              _this11.basmatiprice = res;
              console.log(res);
              _this11.componentService.loadingController.dismiss();
            });
          })["catch"](function () {
            _this11.componentService.loadingController.dismiss();
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
              var basmatiColumns = res.prices.basmati;
              _this13.latestDateBasmati = res.latest;
              if (basmatiColumns != undefined) {
                _this13.basmatiColumns = basmatiColumns;
              }
              var nonBasmati = res.prices["non_basmati"];
              if (nonBasmati != undefined) {
                _this13.nonBasmatiColumns = nonBasmati;
              }
              _this13.lastupdatedDate = res.latestDate;
              resolve(res.prices);
            }, function (err) {
              reject(err);
            });
            // });
          });
        }
      }, {
        key: "AddData",
        value: function AddData(fob, defuaultValue) {
          console.log(fob);
          // return (parseFloat(fob) + parseFloat(defuaultValue))
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
        key: "getUSDPrices",
        value: function getUSDPrices(userId) {
          var _this14 = this;
          this.componentService.presentLoading().then(function () {
            _this14.restService.getUSDPrice(userId).then(function (res) {
              _this14.listBasmatiStates = Object.values(res.basmatiPrices);
              _this14.listNONBasmatiStates = Object.values(res.nonbasmatiPrices);
              _this14.defaultCIFPrice = parseFloat(res.defaultCIFPrice);
              _this14.defalutPort = res.defalutPort;
              _this14.lastupdatedDate = res.latestDate;
              localStorage.setItem('defalutPort', res.defalutPort);
              _this14.componentService.loadingController.dismiss();
            }, function (err) {
              _this14.componentService.loadingController.dismiss();
            });
          })["catch"](function () {
            _this14.componentService.loadingController.dismiss();
          });
        }
        // getPriceNONBasmatiState(){
        // 	this.restService.getPriceNONBasmatiState().then((res:any) => {
        // 		this.listBasmatiStates = res;
        // 	} , (err:any) => {
        // 	} );
        // }
      }, {
        key: "changeAppType",
        value: function changeAppType() {
          localStorage.setItem('apptype', 'OTHER');
          this.navCtrl.navigateForward(['prices']);
        }
      }, {
        key: "openQuality",
        value: function openQuality(id) {
          this.navCtrl.navigateForward(['quality-details', {
            riceQuality: id
          }]);
        }
      }, {
        key: "changeHeight",
        value: function changeHeight() {
          if (this.height == true) {
            this.height = false;
          } else {
            this.height = true;
          }
        }
      }, {
        key: "gotoPlan",
        value: function gotoPlan() {
          console.log("iukhjik");
          this.navCtrl.navigateForward('planpage');
        }
      }]);
    }();
    PriceusdPage.ctorParameters = function () {
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])], PriceusdPage.prototype, "myContent", void 0);
    PriceusdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-priceusd",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./priceusd.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/priceusd/priceusd.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./priceusd.page.scss */"./src/app/priceusd/priceusd.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _components_service__WEBPACK_IMPORTED_MODULE_4__["ComponentsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _versionmodal_versionmodal_page__WEBPACK_IMPORTED_MODULE_9__["VersionmodalPage"]])], PriceusdPage);

    /***/
  })
}]);
//# sourceMappingURL=priceusd-priceusd-module-es5.js.map