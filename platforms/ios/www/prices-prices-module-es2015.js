(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prices-prices-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/prices/prices.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prices/prices.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"content\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\" class=\"\">\n    <div class=\"header-data green\"\n        style=\"min-height: 150px;max-height: 150px;border-radius: 0px 0px 35px 35px;margin-bottom: 50px;\">\n        <div style=\"min-height: 80px;display: flex;align-items: center;width: 100%;\">\n            <ion-row style=\"justify-content: space-between;width: 100%;padding: 0px 20px;\">\n                <ion-col size=\"4\" align=\"center\" class=\"noPaddingMargin\">\n                    <div class=\"noPaddingMargin\" (click)=\"gotoProfile()\">\n                        <p class=\"noPaddingMargin avatar\">{{ userFirstName | uppercase }}</p>\n                    </div>\n                </ion-col>\n                <ion-col size=\"4\" align=\"center\" style=\"align-self: center;\">\n                    <!-- <h3>Dashboard</h3> -->\n                    <!-- <div *ngIf=\"restDays > 0\">\n                        <p *ngIf=\"restDays <= 10\">\n                            {{restDays}} Days Left\n                        </p>\n                    </div> -->\n                    <!-- <p>\n                        <button (click)=\"showPaymentModel()\" *ngIf=\"restDays < 0\" style=\"color: #92b243; text-decoration: none; background: #fffbd6; padding: 5px; border-radius: 8px;\">Subscribe Now</button>\n                    </p> -->\n                    <img src=\"../../assets/sntc_rice_logo.png\" alt=\"\" style=\"width: 90px;\">\n                </ion-col>\n                <ion-col size=\"4\" align=\"right\" class=\"notification\" style=\"align-self: center;\">\n                    <ion-icon class=\"noPaddingMargin\" name=\"refresh-outline\" (click)=\"refresh()\"\n                        style=\"font-size: 25px;color: #fff;margin-right: 20px !important;\"></ion-icon>\n                    <div *ngIf=\"isNotifAvailable == 'true' \"\n                        style=\"height: 10px;width: 10px;background-color: red;position: absolute;right: 5px;top: 5px;z-index: 99999;border-radius: 100px;\">\n                    </div>\n                    <ion-icon class=\"noPaddingMargin\" name=\"notifications\" (click)=\"getNotications()\"\n                        style=\"font-size: 25px;color: #fff\"></ion-icon>\n                </ion-col>\n\n            </ion-row>\n        </div>\n        <!-- <ion-row class=\"ion-padding title-padding \">\n            <ion-col class=\"title\" size=\"12\">\n                \n\n            </ion-col>\n        </ion-row> -->\n        <ion-row class=\"ion-padding rice-gallery\">\n            <ion-col>\n                <ion-slides pager=\"false\" [options]=\"slideOpts\">\n                    <ion-slide *ngFor=\"let slider of ImageGallerySlider\" (click)=\"getGalleryData(slider.id)\">\n                        <div class=\"background-image\">\n                            <img src=\"{{ imagePrefix }}uploads/gallery/{{ slider.attachment }}\" alt=\"\"\n                                style=\"width: 65%;height: 65%;\">\n                        </div>\n                    </ion-slide>\n                </ion-slides>\n                <ion-row>\n                    <!-- <ion-col size=\"8\" style=\"text-align: center;margin-top: 5px;text-align: right;\">\n                        <img src=\"../../assets/sntc_rice_logo.png\" alt=\"\" style=\"width: 100px;\">\n                    </ion-col> -->\n                    <ion-col>\n\n                        <!-- <ion-button (click)=\"tradeBack()\" size=\"small\"\n                            style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                            <p style=\"font-size: 11px;\">trade</p>\n                        </ion-button> -->\n                        <!-- <ion-button (click)=\"BuyINR()\" size=\"small\" style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                            <p style=\"font-size: 11px;\">Buy INR</p>\n                        </ion-button> -->\n                        <!-- <ion-button (click)=\"tradeINR()\" size=\"small\"\n                            style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                            <p style=\"font-size: 11px;\">Trade INR</p>\n                        </ion-button> -->\n                        <!-- <ion-button (click)=\"sellerINR()\" size=\"small\"\n                            style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                            <p style=\"font-size: 11px;\">INR seller</p>\n                        </ion-button> -->\n\n                    </ion-col>\n                    <!-- <p style=\"padding: 0;margin: 0;text-align: center;width: 100%;color: #fffbd6;\">Pull to refresh</p> -->\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class=\"convertButtonParent\">\n        <button (click)=\"changeAppType()\"\n            style=\"background: #92b243;border-radius: 27px;padding: 13px 30px;margin-top: 10px;\">\n            <p style=\"padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: #fff;font-size: 14px;\">Convert to\n                USD</p>\n        </button>\n    </div>\n\n    <div class=\"otherbackground\">\n        <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n            <ion-refresher-content>\n            </ion-refresher-content>\n          </ion-refresher> -->\n\n\n        <div *ngIf=\"basmatiprice?.basmati != null\" style=\"text-align: center;padding: 6px 0px;\">\n            <span style=\"font-size: 12px;\">Last updated at: {{ lastupdatedDate }} (IST)</span>\n        </div>\n        <ion-row class=\"ion-padding title-padding m\">\n            <ion-col class=\"title\" size=\"12\">\n                <h2 class=\"ricetitle\">Basmati Live Price</h2>\n            </ion-col>\n        </ion-row>\n\n        <ion-row style=\"margin-top: 10px\">\n            <!-- <div class=\"scroll-arrow\">\n                <img src=\"./../../assets/RINGH.png\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\"\n                    class=\"righticon\">\n                &nbsp;&nbsp;\n                <img src=\"./../../assets/LEFT.png\" alt=\"\" (click)=\"scroll('right','table-responsive-1')\"\n                    class=\"lefticon\">\n            </div> -->\n            <ion-col class=\"pt0 pb0 \">\n                <ion-segment scrollable (ionChange)=\"changeStateBasmati($event)\" value=\"{{ basmatiSt }}\"\n                    class=\"header-segment table-responsive-1 basmatiState\" style=\"padding: 0px;margin: 0px;height: 55px\">\n                    <ng-container *ngFor=\"let basmatiSt of basmatiState\">\n                        <ion-segment-button class=\"{{ basmatiSt }}\" id=\"{{ basmatiSt }}\" value=\"{{ basmatiSt }}\">\n                            <ion-label>{{ parseText(basmatiSt) }}</ion-label>\n                        </ion-segment-button>\n                    </ng-container>\n                </ion-segment>\n            </ion-col>\n        </ion-row>\n\n        <div style=\"margin-bottom: 50px;\">\n            <ng-container *ngIf=\"basmatiprice?.basmati == null\">\n                <div class=\"center\">\n                    <!-- <p>No item found</p> -->\n                </div>\n            </ng-container>\n\n            <ng-container *ngIf=\"basmatiprice?.basmati != null\">\n                <ion-row class=\"ion-padding table-row padd-5\">\n                    <ion-col class=\"price-table dashboard \">\n                        <table class=\"table\" *ngFor=\"let basmatiPrice of basmatiprice?.basmati | keyvalue\">\n                            <thead>\n                                <tr class=\"lightgreen\">\n                                    <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 50%\">\n                                        <ng-container *ngFor=\"let riceData of basmatiPrice.value | keyvalue\">\n                                            <h4 class=\"black ricetype\">{{ riceData.key }} </h4>\n                                        </ng-container>\n                                    </th>\n                                    <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 25%\">\n                                        <ng-container *ngFor=\"let riceData of basmatiPrice.value | keyvalue\">\n                                            <h4 class=\"black riceCrop\">Crop Year</h4>\n                                        </ng-container>\n                                    </th>\n                                    <th class=\"sticky-col bg-lightgreen first-col left pl-10\"\n                                        style=\"width: 25%;z-index: 1\">\n                                        <ng-container *ngFor=\"let riceData of basmatiPrice.value | keyvalue\">\n                                            <h4 class=\"black ricePrice\">Prices in Qtls</h4>\n                                        </ng-container>\n                                    </th>\n                                </tr>\n                                <div class=\"popoverley\" (click)=\"removePopover()\"></div>\n                            </thead>\n                            <button id=\"getCurrentStatus\"\n                                style=\"height: 1px;width: 1px;color: red;background: transparent;padding: 0;margin: 0;\"\n                                (click)=\"getCurrentPaidStatus()\"></button>\n                            <tbody [class.hide]=\"riceUserType == convertToLowerCase(basmatiPrice.key)+'_percentage'\"\n                                [id]=\"convertToLowerCase(basmatiPrice.key)+'_price'\">\n                                <ng-container *ngFor=\"let riceData of basmatiColumns[basmatiPrice.key] | keyvalue\">\n                                    <ng-container *ngFor=\"let riceValue of riceData.value | keyvalue\">\n                                        <ng-container *ngFor=\"let riceVal of riceValue.value | keyvalue\">\n                                            <tr\n                                                (click)=\"getRiceDetails(riceVal.key , riceVal.value[latestDateBasmati].state , riceData.key)\">\n                                                <td class=\"sticky-col bg-transparent first-col left pl-10 riceanmes\"\n                                                    style=\"text-transform: uppercase;padding: 0px;font-size: 12px !important;font-family: 'Poppins-Regular';\">\n                                                    {{ extractRiceName(riceVal?.key) | uppercase }}\n                                                </td>\n                                                <td class=\"sticky-col bg-transparent first-col left pl-10 riceanmes\"\n                                                    style=\"text-transform: uppercase;padding: 0px;font-size: 12px !important;text-align: center !important;color: black;font-family: 'Poppins-Regular';\"\n                                                    [ngStyle]=\"(currentYear == riceVal.value[latestDateBasmati]?.cropYear)?{'font-family': 'Poppins-Regular'} : {'font-family': 'Poppins-Bold'}\">\n                                                    {{\n                                                    riceVal.value[latestDateBasmati]?.cropYear }}\n\n                                                </td>\n                                                <td class=\"type-columns\"\n                                                    style=\"width:180px;padding: 0px;font-size: 12px !important;color: #82A42F;font-family: 'Poppins-Regular';\"\n                                                    [class.font-grey]=\"riceVal.value[latestDateBasmati].up_down == 'stable'\"\n                                                    [class.font-green]=\"riceVal.value[latestDateBasmati].up_down == 'up' \"\n                                                    [class.red]=\"riceVal.value[latestDateBasmati].up_down == 'down' \">\n                                                    <div class=\"priceVal\">&#8377; {{\n                                                        riceVal.value[latestDateBasmati].min_price }} - {{\n                                                        riceVal.value[latestDateBasmati].max_price }} </div>\n                                                </td>\n                                            </tr>\n                                        </ng-container>\n                                    </ng-container>\n                                </ng-container>\n\n                            </tbody>\n                        </table>\n\n                    </ion-col>\n                </ion-row>\n            </ng-container>\n\n            <ion-row class=\"ion-padding title-padding mt-20\">\n                <ion-col class=\"title\" size=\"12\">\n                    <h2 class=\"ricetitle\">Non - Basmati Live Price</h2>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <!-- <div class=\"scroll-arrow\">\n                            <img src=\"./../../assets/RINGH.png\" alt=\"\" (click)=\"scroll('left','table-responsive-2')\"\n                                class=\"righticon\">\n                            &nbsp;&nbsp;\n                            <img src=\"./../../assets/LEFT.png\" alt=\"\" (click)=\"scroll('right','table-responsive-2')\"\n                                class=\"lefticon\">\n                        </div> -->\n                <ion-col class=\"pt0 pb0 p05\">\n                    <ion-segment scrollable (ionChange)=\"changeStateNONBasmati($event)\" value=\"{{ nonbasmatists }}\"\n                        class=\"header-segment table-responsive-2 basmatiState\"  style=\"padding: 0px;margin: 0px;height: 55px\">\n\n                        <ng-container *ngFor=\"let nonbasmatists of NONbasmatiState\">\n                            <ion-segment-button value=\"{{ nonbasmatists }}\" class=\"{{ nonbasmatists }}\">\n                                <ion-label>{{ parseText(nonbasmatists) }}</ion-label>\n                            </ion-segment-button>\n                        </ng-container>\n\n                    </ion-segment>\n                </ion-col>\n            </ion-row>\n\n            <ng-container *ngIf=\"nonbasmatiprice?.non_basmati != null\">\n                <ion-row class=\"ion-padding table-row padd-5\">\n\n                    <ion-col class=\"price-table dashboard\">\n                        <table class=\"table\"\n                            *ngFor=\"let nonBas of nonbasmatiprice?.non_basmati | keyvalue : returnZero\">\n                            <thead>\n                                <tr>\n                                    <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width:50%\">\n                                        <ng-container *ngFor=\"let riceData of nonBas.value | keyvalue\">\n                                            <h4 class=\"black ricetype\">{{ riceData.key }} </h4>\n                                        </ng-container>\n                                    </th>\n                                    <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width:25%\">\n                                        <ng-container *ngFor=\"let riceData of nonBas.value | keyvalue\">\n                                            <h4 class=\"black riceCrop\">Crop Year</h4>\n                                        </ng-container>\n                                    </th>\n                                    <th class=\"sticky-col bg-lightgreen first-col left pl-10\"\n                                        style=\"width:25%;z-index: 1;\">\n                                        <ng-container *ngFor=\"let riceData of nonBas.value | keyvalue\">\n                                            <h4 class=\"black ricePrice\">Prices in Qtls</h4>\n                                        </ng-container>\n                                    </th>\n                                </tr>\n                                <div class=\"popoverley\" (click)=\"removePopover()\"></div>\n                            </thead>\n\n                            <tbody\n                                [class.hide]=\"riceUserType == convertToLowerCaseWithReplaceOfHighfn(nonBas.key)+'_percentage'\"\n                                [id]=\"convertToLowerCaseWithReplaceOfHighfn(nonBas.key)+'_price'\">\n                                <ng-container *ngFor=\"let riceData of nonBasmatiColumns[nonBas.key] | keyvalue\">\n                                    <ng-container *ngFor=\"let riceValue of riceData.value | keyvalue\">\n                                        <ng-container *ngFor=\"let riceVal of riceValue.value | keyvalue\">\n                                            <tr\n                                                (click)=\"getRiceDetails(riceVal.key , riceVal.value[latestDateBasmati].state , riceData.key)\">\n                                                <td class=\"sticky-col bg-transparent first-col left pl-10\"\n                                                    style=\"text-transform: uppercase;padding: 0px;font-size: 12px !important;\">\n                                                    {{ extractRiceName(riceVal.key) | uppercase }}\n                                                </td>\n                                                <td class=\"sticky-col bg-transparent first-col left pl-10 riceanmes\"\n                                                    style=\"text-transform: uppercase;padding: 0px;font-size: 12px !important;text-align: center !important;color: black;font-family: 'Poppins-Regular';\"\n                                                    [ngStyle]=\"(currentYear == riceVal.value[latestDateBasmati]?.cropYear)?{'font-family': 'Poppins-Regular'} : {'font-family': 'Poppins-Bold'}\">\n                                                    {{riceVal.value[latestDateBasmati]?.cropYear }}\n                                                </td>\n                                                <td class=\"type-columns\"\n                                                    style=\"width:180px;font-size: 12px !important;text-align: center !important;color: #82A42F;font-family: 'Poppins-Regular'\"\n                                                    [class.font-grey]=\"riceVal.value[latestDateBasmati].up_down == 'stable'\"\n                                                    [class.font-green]=\"riceVal.value[latestDateBasmati].up_down == 'up' \"\n                                                    [class.font-red]=\"riceVal.value[latestDateBasmati].up_down == 'down' \">\n                                                    <div class=\"priceVal\"\n                                                        [class.font-grey]=\"riceVal.value[latestDateBasmati].up_down == 'stable'\"\n                                                        [class.font-green]=\"riceVal.value[latestDateBasmati].up_down == 'up' \"\n                                                        [class.font-red]=\"riceVal.value[latestDateBasmati].up_down == 'down' \">\n                                                        &#8377;\n                                                        {{riceVal.value[latestDateBasmati].min_price }} -\n                                                        {{riceVal.value[latestDateBasmati].max_price }} </div>\n                                                </td>\n                                            </tr>\n                                        </ng-container>\n                                    </ng-container>\n                                </ng-container>\n                            </tbody>\n\n\n                        </table>\n                    </ion-col>\n                </ion-row>\n            </ng-container>\n\n            <ng-container *ngIf=\"nonbasmatiprice?.non_basmati == null\">\n                <div class=\"center\">\n                    <!-- <p>No item found</p> -->\n                </div>\n            </ng-container>\n        </div>\n\n        <!-- <ion-row class=\"ion-padding title-padding center\">\n            <ion-col class=\"title\">\n                <a href=\"javascript:void(0);\" class=\"viewtrans\" (click)=\"navToPort()\">View Transportation</a>\n            </ion-col>\n        </ion-row> -->\n        <div>\n            <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"\n                style=\"position: fixed;bottom: 13%;z-index: 99999999;\" (click)=\"scrollDown()\"\n                *ngIf=\"scrollPosition == 'top' \">\n                <ion-fab-button style=\"--background: black;height: 50px;width: 50px;\">\n                    <ion-icon name=\"chevron-down-outline\" style=\"color: #fff;\"></ion-icon>\n                </ion-fab-button>\n            </ion-fab>\n\n            <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"\n                style=\"position: fixed;bottom: 13%;z-index: 99999999\" (click)=\"scrollUp()\"\n                *ngIf=\"scrollPosition == 'bottom' \">\n                <ion-fab-button style=\"--background: black;height: 50px;width: 50px;\">\n                    <ion-icon name=\"chevron-up-outline\" style=\"color: #fff;\"></ion-icon>\n                </ion-fab-button>\n            </ion-fab>\n        </div>\n    </div>\n    <app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/prices/prices-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/prices/prices-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PricesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesPageRoutingModule", function() { return PricesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _prices_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prices.page */ "./src/app/prices/prices.page.ts");




const routes = [
    {
        path: '',
        component: _prices_page__WEBPACK_IMPORTED_MODULE_3__["PricesPage"]
    }
];
let PricesPageRoutingModule = class PricesPageRoutingModule {
};
PricesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PricesPageRoutingModule);



/***/ }),

/***/ "./src/app/prices/prices.module.ts":
/*!*****************************************!*\
  !*** ./src/app/prices/prices.module.ts ***!
  \*****************************************/
/*! exports provided: PricesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesPageModule", function() { return PricesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _prices_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prices-routing.module */ "./src/app/prices/prices-routing.module.ts");
/* harmony import */ var _prices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prices.page */ "./src/app/prices/prices.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _contactmodal_contactmodal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contactmodal/contactmodal.module */ "./src/app/contactmodal/contactmodal.module.ts");
/* harmony import */ var _versionmodal_versionmodal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../versionmodal/versionmodal.module */ "./src/app/versionmodal/versionmodal.module.ts");










let PricesPageModule = class PricesPageModule {
};
PricesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prices_routing_module__WEBPACK_IMPORTED_MODULE_5__["PricesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _contactmodal_contactmodal_module__WEBPACK_IMPORTED_MODULE_8__["ContactmodalPageModule"],
            _versionmodal_versionmodal_module__WEBPACK_IMPORTED_MODULE_9__["VersionmodalPageModule"]
        ],
        declarations: [_prices_page__WEBPACK_IMPORTED_MODULE_6__["PricesPage"]]
    })
], PricesPageModule);



/***/ }),

/***/ "./src/app/prices/prices.page.scss":
/*!*****************************************!*\
  !*** ./src/app/prices/prices.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"GlacialIndifference-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('GlacialIndifference-Regular.otf');\n}\n@font-face {\n  font-family: \"GlacialIndifference-Italic\";\n  font-style: italic;\n  font-weight: normal;\n  src: url('GlacialIndifference-Italic.otf');\n}\nion-content {\n  --padding-bottom: 81px;\n}\n.user-profile-icon {\n  width: 40px;\n  background-color: #606060;\n  border-radius: 50px;\n  height: 40px;\n  line-height: 50px;\n  margin-left: 15px;\n  margin-top: 10px;\n}\n.user-profile-icon span {\n  color: #FFF;\n  font-size: 30px;\n}\n.notification img {\n  width: 22px;\n  margin-right: 10px;\n  margin-top: 18px;\n}\n.notification ion-icon {\n  font-size: 25px;\n  margin-top: 15px;\n  margin-right: 10px;\n}\n.notification .badge {\n  background-color: #ad362d;\n  height: 17px;\n  width: 17px;\n  color: #FFF;\n  border-radius: 50px;\n  display: inline-block;\n  font-size: 12px;\n  text-align: center;\n  line-height: 17px;\n  right: 16px;\n  position: absolute;\n  top: 19px;\n}\n.slider img {\n  width: 80px;\n}\n.title-padding {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.title-padding h2 {\n  margin: 0px;\n}\n.priceData {\n  text-align: left;\n  margin-left: 10px;\n}\n.popoverley {\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999999;\n  display: none;\n}\n#brown_percentage {\n  display: none;\n}\n#creamy_sella_percentage {\n  display: none;\n}\n#golden_selle_percentage {\n  display: none;\n}\n#raw_percentage {\n  display: none;\n}\n#steam_percentage {\n  display: none;\n}\n.popover {\n  box-shadow: 2px 2px 9px 0px #888;\n  border-radius: 5px;\n  position: absolute;\n  right: 0;\n  z-index: 99999999;\n  background: #fff;\n  display: none;\n  height: 88px;\n  width: 150px;\n}\n.popover ul {\n  list-style: none;\n  padding: 0;\n  margin: 0px;\n}\n.popover ul li {\n  padding: 10px 10px;\n  text-align: left;\n}\n.popover ul li label {\n  font-size: 18px;\n}\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: #eeeeee !important;\n}\n.price-table table thead tr th {\n  background-color: #eeeeee !important;\n  border-right: 1px solid #dfdfdf;\n}\n.price-table table tbody tr {\n  height: 35px;\n}\n.price-table table tbody tr td {\n  font-size: 12px;\n  border-right: 1px solid #dfdfdf;\n}\n.table-row {\n  margin-top: 0px;\n  padding-top: 0px;\n}\n.table-row tr td {\n  text-align: center;\n}\n.wrapper {\n  position: relative;\n  overflow: auto;\n  padding: 0px;\n  box-shadow: 1px 4px 6px #CCC;\n  border-radius: 3px;\n}\n.sticky-col {\n  position: sticky;\n  position: -webkit-sticky;\n  background-color: white;\n  border-right: 1px solid #dfdfdf;\n  z-index: 99999;\n}\n.first-col {\n  width: auto;\n  min-width: 66px;\n  max-width: 100px;\n  left: 0px;\n  border-right: 1px solid #dfdfdf;\n}\n.second-col {\n  width: 150px;\n  min-width: 150px;\n  max-width: 150px;\n  left: 100px;\n}\n.red-price {\n  color: red;\n  font-weight: 600;\n}\n.green-price {\n  color: green;\n  font-weight: 600;\n}\n.black-price {\n  color: #000;\n  font-weight: 600;\n}\n.bg-white {\n  background-color: #FFF;\n}\n.transport-card {\n  margin-top: -5px;\n}\n.trasnport-image {\n  width: 50px;\n}\n.dotted-border {\n  border-bottom: 2px dotted #000;\n  margin: 19px auto;\n  width: 81%;\n}\n.transport-state {\n  margin-top: -10px;\n  display: block;\n  font-size: 13px;\n}\n.price-col {\n  color: #000;\n  font-size: 13px;\n  padding-top: 14px;\n}\n.transport-row {\n  border-bottom: 1px solid #CCC;\n}\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n.scroll-arrow {\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n.sntc-slider img {\n  width: 250px;\n  margin-top: 2px;\n  margin-left: -16px;\n}\n.sntc-slider h1 {\n  font-size: 37px;\n  margin: 0px;\n  padding: 0px;\n  margin-top: 25px;\n  color: green;\n}\n.sntc-slider p {\n  margin: 0px;\n  padding: 0px;\n}\n.type-columns {\n  min-width: 75px;\n}\n.slide-image {\n  width: 90%;\n  border-radius: 6px;\n}\n.rice-gallery {\n  padding-top: 0px;\n}\n.logo-text {\n  font-family: \"Monotype Corsiva\";\n}\n.header-segment {\n  height: 45px;\n  --padding-end: 0px;\n  margin-right: 0px;\n  margin: 0 auto;\n}\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 100px;\n  min-height: auto;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  --min-width: auto;\n  min-width: auto;\n  color: #000;\n  font-size: 14px;\n  padding: 8px;\n  border: 2px solid #E1E1E1;\n}\n.header-segment ion-segment-button.segment-button-checked {\n  background: #EEFCCE;\n  --background: #EEFCCE;\n}\n.header-segment ion-segment-button.segment-button-checked ion-label {\n  margin: 0px;\n  padding: 0px;\n  color: #779A20;\n  font-weight: 600;\n  font-size: 100%;\n}\n.header-segment ion-label.sc-ion-label-md-s md {\n  font-size: 60%;\n}\n.header-segment ion-label {\n  margin: 0px;\n  padding: 0px;\n  color: #000;\n  font-weight: 600;\n  font-size: 100%;\n}\n.viewtrans {\n  height: 0px;\n  margin-top: 8px;\n  border-radius: 100px;\n  min-height: 36px;\n  margin-left: 2px;\n  margin-right: 2px;\n  box-shadow: -1px 1px 9px 0px #CCC;\n  width: 33%;\n  color: #000;\n  font-size: 12px;\n  text-decoration: none;\n  padding: 10px;\n}\n.center {\n  text-align: center;\n}\n.center p {\n  padding: 15px 0px 15px 0px;\n  margin: 0;\n  margin-bottom: 20px;\n}\n.rice-gallery {\n  padding-bottom: 0;\n}\n.pt0 {\n  padding-top: 0;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.pb0 {\n  padding-bottom: 0;\n}\n.scroll-arrow {\n  position: absolute;\n  margin-top: 1%;\n}\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n.ricetitle {\n  font-size: 22px;\n  font-family: \"Poppins-SemiBold\";\n  text-align: center;\n}\ntable {\n  width: 100%;\n}\ntable .right {\n  text-align: right;\n}\ntable .left {\n  text-align: left !important;\n}\n.pl-10 {\n  padding-left: 10px;\n}\n.p05 {\n  padding: 0px 5px;\n}\n.font-green {\n  color: #0DCC18 !important;\n}\n.red {\n  color: #FB5000 !important;\n}\n.grey {\n  color: grey !important;\n}\n.dashboard table,\n.dashboard thead,\n.dashboard th,\n.dashboard tr,\n.dashboard td,\n.dashboard td {\n  border: 0px;\n}\n.ricetype {\n  font-size: 16px;\n  font-family: \"Poppins-SemiBold\";\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n  font-weight: bold;\n}\n.riceyear {\n  font-size: 14px;\n  font-family: \"Poppins-SemiBold\";\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n  font-weight: bold;\n}\n.priceinQtls {\n  font-size: 14px;\n  font-family: \"Poppins-SemiBold\";\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n  font-weight: bold;\n}\n.font-17 {\n  font-size: 14px;\n  font-family: Arial;\n}\n.font-14 {\n  font-size: 14px;\n}\n.right {\n  text-align: right !important;\n  padding-right: 10px !important;\n}\n.dashboard table tbody tr td {\n  font-size: 18px !important;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.padd-5 {\n  padding: 5px;\n}\n.pt-10 {\n  padding-top: 10px;\n}\n.pt-5 {\n  padding-top: 5px;\n}\n.table-filter {\n  list-style: none;\n  padding: 0;\n  display: inline-flex;\n  padding: 0px;\n  margin: 0px;\n}\n.table-filter .filter {\n  font-size: 20px;\n}\n.table-filter .filter-content {\n  margin-top: 3px;\n}\n.black {\n  color: #000 !important;\n}\n.riceDisplayType .filterRice {\n  padding: 0;\n  margin: 0;\n  text-align: right;\n}\n.riceDisplayType ul {\n  padding: 0;\n  margin: 0;\n  display: inline-flex;\n  list-style: none;\n}\n.riceDisplayType ul li {\n  padding: 10px 20px;\n  border: 1px solid #ededed;\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 1px 7px 1px #ededed;\n  float: right;\n  display: none;\n}\n.riceDisplayType ul .show {\n  display: block;\n}\n.dashboard table thead,\n.dashboard table tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n.dashboard table thead tr,\n.dashboard table tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 1px solid #ededed !important;\n  font-family: \"GlacialIndifference-Regular\";\n}\n.dashboard table thead tr th,\n.dashboard table tbody tr th {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-right: 0px !important;\n}\n.dashboard table thead tr td,\n.dashboard table tbody tr td {\n  border-right: 0px !important;\n  font-size: 18px !important;\n}\n.dashboard table thead {\n  border: 0px !important;\n}\n.dashboard table thead tr {\n  border: 0px !important;\n  background-color: #FFFBD6 !important;\n  --background-color: #FFFBD6 !important;\n}\n.percentage {\n  display: none;\n}\n.hide,\n.hidecontent {\n  display: none;\n}\n.show {\n  display: block;\n}\nion-segment ion-segment-button ion-label {\n  margin: 0 !important;\n  padding: 0 !important;\n  margin-top: -2px !important;\n}\n.background-image {\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n  overflow: hidden;\n  background-image: url('refe 1.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n  display: flex;\n  align-items: center;\n}\n.background-image img {\n  width: 100%;\n  margin: 0 auto;\n  border-radius: 100px;\n}\n.ios .header-segment {\n  height: 40px;\n}\n.ios .header-segment ion-segment-button {\n  border-radius: 100px;\n}\n.avatar {\n  height: 50px;\n  width: 50px;\n  background: #FFFBD6;\n  justify-content: center;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  border-radius: 100%;\n  font-size: 27px;\n  color: #92b243;\n  font-family: \"Poppins-SemiBold\";\n}\n.convertButtonParent {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n}\n.riceCrop,\n.ricePrice {\n  font-size: 12px;\n  font-family: \"Poppins-SemiBold\";\n  text-align: center;\n}\nion-fab-button {\n  height: 35px;\n  width: 100px;\n  border-radius: 0px !important;\n  --border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3ByaWNlcy9wcmljZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wcmljZXMvcHJpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FDQ1I7QURRSTtFQUNJLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDTlI7QURTSTtFQUVJLHNCQUFBO0FDUlI7QURXSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1JSO0FEVVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ1JaO0FEYVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1ZaO0FEYVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1haO0FEY1E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNaWjtBRHFCUTtFQUNJLFdBQUE7QUNsQlo7QURzQkk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDbkJSO0FEcUJRO0VBQ0ksV0FBQTtBQ25CWjtBRHVCSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNwQlI7QUR1Qkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNwQlI7QUR1Qkk7RUFDSSxhQUFBO0FDcEJSO0FEdUJJO0VBQ0ksYUFBQTtBQ3BCUjtBRHVCSTtFQUNJLGFBQUE7QUNwQlI7QUR1Qkk7RUFDSSxh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SSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUN4RmhCO0FENkZJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUMxRlI7QUQ0RlE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDMUZaO0FEK0ZRO0VBQ0ksWUFBQTtBQzVGWjtBRDhGWTtFQUNJLG9CQUFBO0FDNUZoQjtBRGlHSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FDOUZSO0FEaUdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQzlGUjtBRGlHSTs7RUFFSSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQzlGUjtBRHNHSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQ25HUiIsImZpbGUiOiJzcmMvYXBwL3ByaWNlcy9wcmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ0dsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhcic7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9nbGFjaWFsL0dsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhci5vdGYnKTtcbiAgICB9XG5cbiAgICAvLyBAZm9udC1mYWNlIHtcbiAgICAvLyAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgLy8gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAvLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvZ2xhY2lhbC9BcmlhbC5vdGYnKTtcbiAgICAvLyB9XG4gICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2xhY2lhbEluZGlmZmVyZW5jZS1JdGFsaWMnO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvZ2xhY2lhbC9HbGFjaWFsSW5kaWZmZXJlbmNlLUl0YWxpYy5vdGYnKTtcbiAgICB9XG5cbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA4MXB4O1xuICAgIH1cblxuICAgIC51c2VyLXByb2ZpbGUtaWNvbiB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhZGdlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDM2MmQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDE5cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2xpZGVyIHtcblxuICAgICAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDExcHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50aXRsZS1wYWRkaW5nIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wcmljZURhdGEge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICAucG9wb3ZlcmxleSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogOTk5OTk5O1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICNicm93bl9wZXJjZW50YWdlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAjY3JlYW15X3NlbGxhX3BlcmNlbnRhZ2Uge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICNnb2xkZW5fc2VsbGVfcGVyY2VudGFnZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgI3Jhd19wZXJjZW50YWdlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAjc3RlYW1fcGVyY2VudGFnZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnBvcG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDlweCAwcHggIzg4ODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiA5OTk5OTk5OTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiA4OHB4O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByaWNlLXRhYmxlIHtcblxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgdGhlYWQge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGFibGUtcm93IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuXG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAud3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDRweCA2cHggI0NDQztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cblxuICAgIC5zdGlja3ktY29sIHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgfVxuXG4gICAgLmZpcnN0LWNvbCB7XG4gICAgICAgIC8vIHdpZHRoOiA5MHB4O1xuICAgICAgICAvLyBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAvLyBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWluLXdpZHRoOiA2NnB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgfVxuXG4gICAgLnNlY29uZC1jb2wge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgICAgIGxlZnQ6IDEwMHB4O1xuICAgIH1cblxuICAgIC5yZWQtcHJpY2Uge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5ncmVlbi1wcmljZSB7XG4gICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAuYmxhY2stcHJpY2Uge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAuYmctd2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIH1cblxuICAgIC50cmFuc3BvcnQtY2FyZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgfVxuXG4gICAgLnRyYXNucG9ydC1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cblxuICAgIC5kb3R0ZWQtYm9yZGVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCAjMDAwO1xuICAgICAgICBtYXJnaW46IDE5cHggYXV0bztcbiAgICAgICAgd2lkdGg6IDgxJTtcbiAgICB9XG5cbiAgICAudHJhbnNwb3J0LXN0YXRlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG4gICAgLnByaWNlLWNvbCB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuICAgIH1cblxuICAgIC50cmFuc3BvcnQtcm93IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG4gICAgfVxuXG4gICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLnNjcm9sbC1hcnJvdyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgLnNudGMtc2xpZGVyIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzdweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudHlwZS1jb2x1bW5zIHtcbiAgICAgICAgLy8gd2lkdGg6IDMwMHB4O1xuICAgICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgbWluLXdpZHRoOiA3NXB4O1xuICAgIH1cblxuICAgIC5zbGlkZS1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG5cbiAgICAucmljZS1nYWxsZXJ5IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICB9XG5cbiAgICAubG9nby10ZXh0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb25vdHlwZSBDb3JzaXZhJztcbiAgICB9XG5cbiAgICAuaGVhZGVyLXNlZ21lbnQge1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAtLXdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgLS1taW4td2lkdGg6IGF1dG87XG4gICAgICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMUUxRTE7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VFRkNDRTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0VFRkNDRTtcblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3NzlBMjA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWwuc2MtaW9uLWxhYmVsLW1kLXMgbWQge1xuICAgICAgICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudmlld3RyYW5zIHtcbiAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAuY2VudGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yaWNlLWdhbGxlcnkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAucHQwIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuXG4gICAgLm10LTIwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAucGIwIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLnNjcm9sbC1hcnJvdyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMSU7XG5cbiAgICAgICAgLmxlZnRpY29uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJpZ2h0aWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmljZXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtU2VtaUJvbGQnO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB9XG5cbiAgICAuYmFzbWF0aVN0YXRlIHtcbiAgICAgICAgLy8gbWFyZ2luOiAwIDMwcHhcbiAgICB9XG5cbiAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wbC0xMCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICAucDA1IHtcbiAgICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICB9XG5cbiAgICAuZm9udC1ncmVlbiB7XG4gICAgICAgIGNvbG9yOiAjMERDQzE4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnJlZCB7XG4gICAgICAgIGNvbG9yOiAjRkI1MDAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmdyZXkge1xuICAgICAgICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5kYXNoYm9hcmQgdGFibGUsXG4gICAgLmRhc2hib2FyZCB0aGVhZCxcbiAgICAuZGFzaGJvYXJkIHRoLFxuICAgIC5kYXNoYm9hcmQgdHIsXG4gICAgLmRhc2hib2FyZCB0ZCxcbiAgICAuZGFzaGJvYXJkIHRkIHtcbiAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgfVxuXG4gICAgLnJpY2V0eXBlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtU2VtaUJvbGQnO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5yaWNleWVhciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVNlbWlCb2xkJztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAucHJpY2VpblF0bHMge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1TZW1pQm9sZCc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmZvbnQtMTcge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICB9XG5cbiAgICAuZm9udC0xNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAucmlnaHQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnRcbiAgICB9XG5cbiAgICAuZGFzaGJvYXJkIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAucGFkZC01IHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cblxuICAgIC5wdC0xMCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4XG4gICAgfVxuXG4gICAgLnB0LTUge1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4XG4gICAgfVxuXG4gICAgLnRhYmxlLWZpbHRlciB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgICAgIC5maWx0ZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlci1jb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJsYWNrIHtcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucmljZURpc3BsYXlUeXBlIHtcbiAgICAgICAgLmZpbHRlclJpY2Uge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMXB4IDdweCAxcHggI2VkZWRlZDtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNob3cge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRhc2hib2FyZCB7XG4gICAgICAgIHRhYmxlIHtcblxuICAgICAgICAgICAgdGhlYWQsXG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyJztcblxuICAgICAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhlYWQge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZCRDYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkQ2ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnBlcmNlbnRhZ2Uge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5oaWRlLFxuICAgIC5oaWRlY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnNob3cge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBpb24tc2VnbWVudCB7XG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9yZWZlIDEucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW9zIHtcbiAgICAgICAgLmhlYWRlci1zZWdtZW50IHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcblxuICAgICAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hdmF0YXIge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGQkQ2O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDI3cHg7XG4gICAgICAgIGNvbG9yOiAjOTJiMjQzO1xuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtU2VtaUJvbGQnO1xuICAgIH1cblxuICAgIC5jb252ZXJ0QnV0dG9uUGFyZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucmljZUNyb3AsXG4gICAgLnJpY2VQcmljZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVNlbWlCb2xkJztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuXG4gICAgLy8gaW9uLXNsaWRlcyBpb24tc2xpZGU6bnRoLWNoaWxkKDIpIHtcblxuICAgIC8vICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgLy8gfVxuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgfSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9nbGFjaWFsL0dsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhci5vdGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR2xhY2lhbEluZGlmZmVyZW5jZS1JdGFsaWNcIjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9nbGFjaWFsL0dsYWNpYWxJbmRpZmZlcmVuY2UtSXRhbGljLm90ZlwiKTtcbn1cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogODFweDtcbn1cblxuLnVzZXItcHJvZmlsZS1pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnVzZXItcHJvZmlsZS1pY29uIHNwYW4ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uIGltZyB7XG4gIHdpZHRoOiAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG4ubm90aWZpY2F0aW9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubm90aWZpY2F0aW9uIC5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDM2MmQ7XG4gIGhlaWdodDogMTdweDtcbiAgd2lkdGg6IDE3cHg7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgcmlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xufVxuXG4uc2xpZGVyIGltZyB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4udGl0bGUtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4udGl0bGUtcGFkZGluZyBoMiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucHJpY2VEYXRhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5wb3BvdmVybGV5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNicm93bl9wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NyZWFteV9zZWxsYV9wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2dvbGRlbl9zZWxsZV9wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3Jhd19wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3N0ZWFtX3BlcmNlbnRhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucG9wb3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggOXB4IDBweCAjODg4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTk5OTk5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDg4cHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5wb3BvdmVyIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwcHg7XG59XG4ucG9wb3ZlciB1bCBsaSB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wb3BvdmVyIHVsIGxpIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucHJpY2UtdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB7XG4gIGhlaWdodDogMzVweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cblxuLnRhYmxlLXJvdyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cbi50YWJsZS1yb3cgdHIgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2hhZG93OiAxcHggNHB4IDZweCAjQ0NDO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5zdGlja3ktY29sIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgei1pbmRleDogOTk5OTk7XG59XG5cbi5maXJzdC1jb2wge1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiA2NnB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG5cbi5zZWNvbmQtY29sIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBsZWZ0OiAxMDBweDtcbn1cblxuLnJlZC1wcmljZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ncmVlbi1wcmljZSB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJsYWNrLXByaWNlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbi50cmFuc3BvcnQtY2FyZCB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi50cmFzbnBvcnQtaW1hZ2Uge1xuICB3aWR0aDogNTBweDtcbn1cblxuLmRvdHRlZC1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAycHggZG90dGVkICMwMDA7XG4gIG1hcmdpbjogMTlweCBhdXRvO1xuICB3aWR0aDogODElO1xufVxuXG4udHJhbnNwb3J0LXN0YXRlIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5wcmljZS1jb2wge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogMTRweDtcbn1cblxuLnRyYW5zcG9ydC1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbn1cblxuLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zY3JvbGwtYXJyb3cge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc250Yy1zbGlkZXIgaW1nIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbn1cbi5zbnRjLXNsaWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMzdweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgY29sb3I6IGdyZWVuO1xufVxuLnNudGMtc2xpZGVyIHAge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udHlwZS1jb2x1bW5zIHtcbiAgbWluLXdpZHRoOiA3NXB4O1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5yaWNlLWdhbGxlcnkge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ubG9nby10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3R5cGUgQ29yc2l2YVwiO1xufVxuXG4uaGVhZGVyLXNlZ21lbnQge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHdpZHRoOiBhdXRvO1xuICAtLXdpZHRoOiBhdXRvO1xuICAtLW1pbi13aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFMUUxRTE7XG59XG4uaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjRUVGQ0NFO1xuICAtLWJhY2tncm91bmQ6ICNFRUZDQ0U7XG59XG4uaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6ICM3NzlBMjA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cbi5oZWFkZXItc2VnbWVudCBpb24tbGFiZWwuc2MtaW9uLWxhYmVsLW1kLXMgbWQge1xuICBmb250LXNpemU6IDYwJTtcbn1cbi5oZWFkZXItc2VnbWVudCBpb24tbGFiZWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4udmlld3RyYW5zIHtcbiAgaGVpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gIHdpZHRoOiAzMyU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jZW50ZXIgcCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5yaWNlLWdhbGxlcnkge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnB0MCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubXQtMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucGIwIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5zY3JvbGwtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuLnNjcm9sbC1hcnJvdyAubGVmdGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHRvcDogMHB4O1xufVxuLnNjcm9sbC1hcnJvdyAucmlnaHRpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogOTk5OTk5O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMnB4O1xuICB3aWR0aDogMThweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5yaWNldGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtU2VtaUJvbGRcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGFibGUgLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG50YWJsZSAubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLnBsLTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ucDA1IHtcbiAgcGFkZGluZzogMHB4IDVweDtcbn1cblxuLmZvbnQtZ3JlZW4ge1xuICBjb2xvcjogIzBEQ0MxOCAhaW1wb3J0YW50O1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNGQjUwMDAgIWltcG9ydGFudDtcbn1cblxuLmdyZXkge1xuICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xufVxuXG4uZGFzaGJvYXJkIHRhYmxlLFxuLmRhc2hib2FyZCB0aGVhZCxcbi5kYXNoYm9hcmQgdGgsXG4uZGFzaGJvYXJkIHRyLFxuLmRhc2hib2FyZCB0ZCxcbi5kYXNoYm9hcmQgdGQge1xuICBib3JkZXI6IDBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVNlbWlCb2xkXCI7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yaWNleWVhciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1TZW1pQm9sZFwiO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJpY2VpblF0bHMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtU2VtaUJvbGRcIjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvbnQtMTcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLmZvbnQtMTQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5wYWRkLTUge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wdC0xMCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ucHQtNSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi50YWJsZS1maWx0ZXIge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi50YWJsZS1maWx0ZXIgLmZpbHRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi50YWJsZS1maWx0ZXIgLmZpbHRlci1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uYmxhY2sge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4ucmljZURpc3BsYXlUeXBlIC5maWx0ZXJSaWNlIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5yaWNlRGlzcGxheVR5cGUgdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnJpY2VEaXNwbGF5VHlwZSB1bCBsaSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWRlZDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDFweCA3cHggMXB4ICNlZGVkZWQ7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yaWNlRGlzcGxheVR5cGUgdWwgLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRhc2hib2FyZCB0YWJsZSB0aGVhZCxcbi5kYXNoYm9hcmQgdGFibGUgdGJvZHkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLmRhc2hib2FyZCB0YWJsZSB0aGVhZCB0cixcbi5kYXNoYm9hcmQgdGFibGUgdGJvZHkgdHIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJHbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXJcIjtcbn1cbi5kYXNoYm9hcmQgdGFibGUgdGhlYWQgdHIgdGgsXG4uZGFzaGJvYXJkIHRhYmxlIHRib2R5IHRyIHRoIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQgdGFibGUgdGhlYWQgdHIgdGQsXG4uZGFzaGJvYXJkIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG4uZGFzaGJvYXJkIHRhYmxlIHRoZWFkIHtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQgdGFibGUgdGhlYWQgdHIge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkQ2ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJENiAhaW1wb3J0YW50O1xufVxuXG4ucGVyY2VudGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRlLFxuLmhpZGVjb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0ycHggIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL3JlZmUgMS5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJhY2tncm91bmQtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLmlvcyAuaGVhZGVyLXNlZ21lbnQge1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uaW9zIC5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLmF2YXRhciB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZCRDY7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgY29sb3I6ICM5MmIyNDM7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtU2VtaUJvbGRcIjtcbn1cblxuLmNvbnZlcnRCdXR0b25QYXJlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmljZUNyb3AsXG4ucmljZVByaWNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVNlbWlCb2xkXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/prices/prices.page.ts":
/*!***************************************!*\
  !*** ./src/app/prices/prices.page.ts ***!
  \***************************************/
/*! exports provided: PricesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesPage", function() { return PricesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _brok_login_brok_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../brok-login/brok-login.component */ "./src/app/brok-login/brok-login.component.ts");
/* harmony import */ var _components_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components.service */ "./src/app/components.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contactmodal_contactmodal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contactmodal/contactmodal.page */ "./src/app/contactmodal/contactmodal.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _versionmodal_versionmodal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../versionmodal/versionmodal.page */ "./src/app/versionmodal/versionmodal.page.ts");











let PricesPage = class PricesPage {
    constructor(platform, restService, componentService, modalController, navCtrl, route, versionMdel) {
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
            loop: true,
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
        this.componentService.isUserExpired.subscribe((res) => {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, "0");
            var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
            var yyyy = today.getFullYear();
            var todayDate = mm + "/" + dd + "/" + yyyy;
            console.log(localStorage.getItem("expired_on"));
            if (localStorage.getItem("expired_on") != null &&
                localStorage.getItem("expired_on") != "null") {
                var ExpiredDate = new Date(localStorage.getItem("expired_on"));
                var Expireddd = String(ExpiredDate.getDate()).padStart(2, "0");
                var Expiredmm = String(ExpiredDate.getMonth() + 1).padStart(2, "0"); //January is 0!
                var Expiredyyyy = ExpiredDate.getFullYear();
                var ExpiredDateDate = Expiredmm + "/" + Expireddd + "/" + Expiredyyyy;
                this.componentService
                    .differanceTwoDate(todayDate, ExpiredDateDate)
                    .then((res) => {
                    this.restDays = res;
                });
            }
            else {
                this.restDays = -1;
            }
            console.log(this.restDays);
        });
        this.componentService.isUserExpired.subscribe((res) => {
            this.currentPaidStatus = res;
            if (localStorage.getItem("apptype") == "USD") {
                this.appType = "usd";
            }
            else {
                this.appType = "other";
            }
            setTimeout(() => {
                // document.getElementById('getCurrentStatus').click();
            }, 3000);
        });
        this.getVersion();
        if (localStorage.getItem("apptype") == "USD") {
            this.appType = "usd";
        }
        else {
            this.appType = "other";
        }
    }
    doRefresh(event) {
        setTimeout(() => {
            this.refresh();
            event.target.complete();
        }, 2000);
    }
    ionViewDidLoad() {
        this.componentService.isUserExpired.subscribe((res) => {
            this.currentPaidStatus = res;
            setTimeout(() => {
                document.getElementById("getCurrentStatus").click();
            }, 1000);
        });
        this.componentService.isUserExpired.subscribe((res) => {
            this.currentPaidStatus = res;
            setTimeout(() => {
                document.getElementById("getCurrentStatus").click();
                this.componentService.loadingController.dismiss();
            }, 1500);
        });
        console.log("i am here in view load");
        this.componentService.reRenderFooterMenu.next();
    }
    getNotications() {
        this.navCtrl.navigateForward(["notifications"]);
    }
    getCurrentPaidStatus() {
        this.currentPaidStatus = this.currentPaidStatus;
    }
    getPlans() {
        this.restService.checkUserPlan().then((res) => {
            localStorage.setItem("chartInt", "true");
        }, (err) => {
            localStorage.setItem("chartInt", "false");
        });
    }
    brand() {
        this.navCtrl.navigateForward(["brands"]);
    }
    getGallery() {
        this.restService.getImagesForDashboard().then((res) => {
        }, (err) => { });
    }
    getBasmatiState() {
        return new Promise((resolve, reject) => {
            this.componentService.presentLoading().then(() => {
                this.restService.getBasmatiState().then((res) => {
                    if (res.data.length > 0) {
                        this.firstBasmatiState = res.data[0];
                        this.lastBasmatiState = res.data[res.data.length - 1];
                        this.basmatiState = res.data;
                    }
                    this.componentService.loadingController.dismiss();
                    resolve(true);
                }, (err) => {
                    this.componentService.loadingController.dismiss();
                    reject(false);
                });
            });
        });
    }
    getNONBasmatiState() {
        this.restService.getNONBasmatiState().then((res) => {
            this.NONbasmatiState = res.data;
        }, (err) => { });
    }
    getSlider() {
        this.restService.getGallery().then((res) => {
            this.ImageGallerySlider = res.data.basmati;
        }, (err) => { });
    }
    changeState(data) {
        this.riceUserType = data;
        if (data.split("_").includes("percentage")) {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + this.riceUserType).css({ display: "contents" });
            let classData = data.split("_");
            delete classData[classData.length - 1];
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + classData.join("_") + "price").css({ display: "none" });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + this.riceUserType).css({ display: "contents" });
            let classData = data.split("_");
            delete classData[classData.length - 1];
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + classData.join("_") + "percentage").css({ display: "none" });
        }
        this.removePopover();
    }
    getLoadedData(type) {
        return new Promise((resolve, reject) => {
            this.restService
                .getPrices(this.firstBasmatiState, type)
                .then((res) => {
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
                this.myContent.getScrollElement().then((res) => {
                    if (res != null) {
                        this.fullScrollHeight = res.scrollHeight + 400;
                    }
                });
                resolve(res.prices);
                this.getContentScrollLength();
            });
        });
    }
    ionViewDidLeave() {
        clearTimeout(this.myVar);
    }
    ionViewDidEnter() {
        if (localStorage.getItem("is_INR_active") == "0") {
            console.log("jknk");
            this.navCtrl.navigateRoot(["planpage"]);
        }
        if (this.route.url == "/prices") {
            // if (localStorage.getItem("popupCanceled") == null) {
            this.myVar = setTimeout(() => {
                this.showCOntactModal();
            }, 30000);
            // }
            this.componentService.cancelPopup.subscribe(() => {
                if (localStorage.getItem("popupCanceled") != "true") {
                    this.myVar = setTimeout(() => {
                        this.showCOntactModal();
                    }, 30000);
                }
            });
        }
        this.getLoadedData("basmati").then((res) => {
            this.basmatiprice = res;
        }, (err) => { });
        this.getLoadedData("non-basmati").then((res) => {
            this.nonbasmatiprice = res;
        }, (err) => { });
        this.restService.CheckUserExpired().then((res) => {
            // localStorage.setItem('isExpiryUSD' , res.isExpiry)
            // localStorage.setItem('ExpiryUSDDate' , res.data)
            if (localStorage.getItem("is_usd_active") != "0") {
                localStorage.setItem("isExpiryUSD", res.isExpiry);
                localStorage.setItem("ExpiryUSDDate", res.data);
            }
            else {
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
            this.componentService.compareTwoDates(localStorage.getItem("expired_on"));
        }, (err) => { });
        this.imagePrefix = this.restService.imageUrl;
        this.getSlider();
        this.username = localStorage.getItem("name");
        this.userFirstName = localStorage.getItem("name")[0];
        this.getBasmatiState()
            .then((res) => {
            // setTimeout( () =>{
            // 	console.log(this.firstBasmatiState);
            // 	document.getElementById(this.lastBasmatiState).click();
            // },1000)
            setTimeout(() => {
                document.getElementById(this.firstBasmatiState).click();
            }, 1500);
        })
            .catch((err) => { });
        this.getNONBasmatiState();
        this.getPlans();
        this.getPriceBasmatiState();
        // this.getGallery();
    }
    showVersionModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _versionmodal_versionmodal_page__WEBPACK_IMPORTED_MODULE_9__["VersionmodalPage"],
                cssClass: "contactModal",
            });
            return yield modal.present();
        });
    }
    getVersion() {
        this.restService
            .getLatestVersion()
            .then((res) => {
            console.log("i am here 2");
            let elemem = this;
            if ("1.0.0" != res.data.version) {
                setTimeout(function () {
                    elemem.showVersionModal();
                }, 8000);
            }
        }, (err) => { })
            .catch((err) => { });
    }
    refresh() {
        this.getBasmatiState();
        this.getNONBasmatiState();
        this.getPlans();
        this.getPriceBasmatiState();
        this.fetchRiceForm('PUNJAB-HARYANA', 'basmati');
        this.fetchRiceForm('PUNJAB-HARYANA', 'non-basmati');
    }
    ngOnInit() {
        this.platform.ready().then(() => {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#brown_percentage").css({ display: "none" });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#creamy_sella_percentage").css({ display: "none" });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#golden_selle_percentage").css({ display: "none" });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#raw_percentage").css({ display: "none" });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#steam_percentage").css({ display: "none" });
            let api = this.restService;
            if (localStorage.getItem("is_usd_active") == "1") {
                this.USDActive = 1;
            }
            else {
                this.USDActive = 0;
            }
            if (localStorage.getItem("is_INR_active") == "1") {
                this.INRActive = 1;
            }
            else {
                this.INRActive = 0;
            }
            setTimeout(() => {
                // this.componentService.loadingController.dismiss();
            }, 4000);
            setTimeout(() => {
                // this.componentService.loadingController.dismiss();
            }, 10000);
        });
    }
    showPaymentModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.componentService.showPaymentModal.next();
        });
    }
    showCOntactModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _contactmodal_contactmodal_page__WEBPACK_IMPORTED_MODULE_7__["ContactmodalPage"],
                cssClass: "contactModal",
            });
            return yield modal.present();
        });
    }
    replaceText(column) {
        let text = column.replace("Basamti Rice", "");
        text = text.replace("Basmati Rice", "");
        return text;
    }
    toArray(answers) {
        return Object.keys(answers).map((key) => (Object.assign({ key }, answers[key])));
    }
    parseText(text) {
        let arrayText = text.split("_");
        if (arrayText.length == 1) {
            return arrayText[0];
        }
        else {
            return arrayText[0] + " " + arrayText[1];
        }
    }
    loginProfile() {
        this.restService.presentModal(_brok_login_brok_login_component__WEBPACK_IMPORTED_MODULE_3__["BrokLoginComponent"]).then(() => { });
        console.log("i am here 2");
    }
    scroll(direction, className) {
        if (direction == "left") {
            jquery__WEBPACK_IMPORTED_MODULE_5__("." + className).animate({
                scrollLeft: "-=135px",
            }, "slow");
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_5__("." + className).animate({
                scrollLeft: "+=135px",
            }, "slow");
        }
    }
    getGalleryData(id) {
        this.navCtrl.navigateForward(["gallerydetails", { galleryId: id }]);
    }
    changeStateBasmati(event) {
        this.selectedBasmatiState = event.detail.value;
        this.selectedNONBasmatiState = event.detail.value;
        this.componentService.presentLoading().then(() => {
            this.fetchRiceForm(event.detail.value, "basmati").then((res) => {
                this.componentService.loadingController.dismiss();
                this.basmatiprice = res;
                console.log(res);
            });
        });
        if (event.detail.value == "kota_bundi") {
            jquery__WEBPACK_IMPORTED_MODULE_5__(".rajasthan").click();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_5__("." + event.detail.value).click();
        }
    }
    gotoProfile() {
        this.navCtrl.navigateForward(["profile"]);
    }
    changeStateNONBasmati(event) {
        this.selectedNONBasmatiState = event.detail.value;
        this.selectedBasmatiState = event.detail.value;
        this.fetchRiceForm(event.detail.value, "non-basmati").then((res) => {
            // this.componentService.loadingController.dismiss();
            this.nonbasmatiprice = res;
        });
        if (event.detail.value == "kota_bundi") {
            jquery__WEBPACK_IMPORTED_MODULE_5__(".rajasthan").click();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_5__("." + event.detail.value).click();
        }
    }
    fetchRiceForm(event, type) {
        return new Promise((resolve, reject) => {
            // this.componentService.presentLoading().then(() => {
            this.restService
                .getPrices(event, type)
                .then((res) => {
                console.log("i am here 2");
                // this.componentService.loadingController.dismiss();
                // this.componentService.loadingController.dismiss();
                this.latestDateBasmati = res.latest;
                console.log(type);
                if (type == "basmati") {
                    this.basmatiColumns = res.prices.basmati;
                }
                else {
                    this.nonBasmatiColumns = res.prices["non_basmati"];
                    this.lastupdatedDate = res.lastUpdatedDate;
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
            })
                .catch(() => {
                // this.componentService.loadingController.dismiss();
            });
        });
    }
    navToPort() {
        this.navCtrl.navigateForward(["port"]);
    }
    getContentScrollLength() {
        // setTimeout(() => {
        // 	var elmnt = document.getElementById("content");
        // 	var y = elmnt.scrollHeight;
        // 	var x = elmnt.scrollWidth;
        // }, 2500);
    }
    scrollDown() {
        this.scrollLength = this.scrollLength + this.fullScrollHeight / 4;
        if (this.fullScrollHeight >= this.scrollLength) {
            this.scrollPosition = "bottom";
        }
        else {
            this.scrollPosition = "top";
        }
        this.myContent.scrollToPoint(0, this.scrollLength);
    }
    scrollUp() {
        this.myContent.scrollToTop();
        this.scrollPosition = "top";
        this.scrollLength = 0;
    }
    logScrolling($event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.scrollDepthTriggered) {
                return;
            }
            if ($event.target.localName != "ion-content") {
                return;
            }
            const scrollElement = yield $event.target.getScrollElement();
            const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
            const currentScrollDepth = $event.detail.scrollTop;
            this.scrollLength = currentScrollDepth;
            const targetPercent = 80;
            let triggerDepth = (scrollHeight / 100) * targetPercent;
            if (currentScrollDepth >= triggerDepth) {
                this.scrollPosition = "bottom";
                // this.scrollDepthTriggered = true;
            }
            else {
                this.scrollPosition = "top";
                // this.scrollDepthTriggered = false;
            }
        });
    }
    getRiceDetails(riceType, state, riceName) {
        if (this.currentPaidStatus == "true") {
            this.showPaymentModel();
        }
        else {
            let newRiceName = riceName.split(" ");
            newRiceName = newRiceName.join("_");
            localStorage.setItem("riceType", riceType.split(" ").join("_").toLowerCase());
            localStorage.setItem("state", state.split(" ").join("_").toLowerCase());
            localStorage.setItem("ricename", newRiceName);
            this.navCtrl.navigateForward(["ricechart"]);
        }
    }
    extractRiceName(riceName) {
        let riceNameArray = riceName.split(" ");
        if (riceNameArray[1] == "Basmati" ||
            riceNameArray[1] == "non-basmati" ||
            riceNameArray[1] == "rice" ||
            riceNameArray[1] == "Rice") {
            return riceNameArray[0];
        }
        if (riceNameArray[2] == "Basmati" ||
            riceNameArray[2] == "non-basmati" ||
            riceNameArray[2] == "rice" ||
            riceNameArray[2] == "Rice") {
            return riceNameArray[0] + " " + riceNameArray[1];
        }
        if (riceNameArray[3] == "Basmati" ||
            riceNameArray[3] == "non-basmati" ||
            riceNameArray[3] == "rice" ||
            riceNameArray[3] == "Rice") {
            return riceNameArray[0] + " " + riceNameArray[1] + " " + riceNameArray[2];
        }
        return riceNameArray.join(" ");
    }
    convertToLowerCase(string) {
        return string.split(" ").join("_").toLowerCase();
    }
    convertToLowerCaseWithReplaceOfHighfn(string) {
        let str = string.split(" ").join("_").toLowerCase();
        let str2 = str.split("-").join("_");
        return str2.split("/").join("_");
    }
    checkIfValueIsNeg(newValue, oldValue) {
        let data = (newValue - oldValue) / 100;
        return Math.sign(data);
    }
    tradeINR() {
        console.log("i am here");
        this.navCtrl.navigateForward(["trade-inr"]);
    }
    tradeBack() {
        this.navCtrl.navigateForward(["trade-inr-list"]);
    }
    BuyINR() {
        console.log("i am here");
        this.navCtrl.navigateForward(["buy-inr"]);
    }
    sellerINR() {
        console.log("i am here");
        this.navCtrl.navigateForward(["selling-inr"]);
    }
    openPopup(key) {
        jquery__WEBPACK_IMPORTED_MODULE_5__(".popover").hide();
        jquery__WEBPACK_IMPORTED_MODULE_5__(".popoverley").show();
        jquery__WEBPACK_IMPORTED_MODULE_5__("#" + key).show();
    }
    removePopover() {
        jquery__WEBPACK_IMPORTED_MODULE_5__(".popover").hide();
        jquery__WEBPACK_IMPORTED_MODULE_5__(".popoverley").hide();
    }
    returnZero() {
        return 0;
    }
    getPriceBasmatiState() {
        this.restService.getPriceBasmatiState().then((res) => {
            console.log("i am here 2");
            this.listBasmatiStates = res;
        }, (err) => { });
    }
    changeAppType() {
        let isUSDActive = localStorage.getItem("is_usd_active");
        let isUserExpiredStatus = localStorage.getItem("isExpiryUSD");
        console.log("kjnk");
        if (isUSDActive != "0") {
            if (isUserExpiredStatus == "true") {
                console.log("jknk");
                this.navCtrl.navigateForward(["planpage"]);
            }
            else {
                console.log("mnk n ");
                localStorage.setItem("apptype", "USD");
                this.navCtrl.navigateForward(["priceusd"]);
            }
        }
        else {
            console.log("jknk");
            this.navCtrl.navigateForward(["planpage"]);
        }
        return false;
        localStorage.setItem("apptype", "USD");
        this.navCtrl.navigateForward(["priceusd"]);
    }
};
PricesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _components_service__WEBPACK_IMPORTED_MODULE_4__["ComponentsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _versionmodal_versionmodal_page__WEBPACK_IMPORTED_MODULE_9__["VersionmodalPage"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
], PricesPage.prototype, "myContent", void 0);
PricesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-prices",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prices.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/prices/prices.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prices.page.scss */ "./src/app/prices/prices.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"],
        _components_service__WEBPACK_IMPORTED_MODULE_4__["ComponentsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _versionmodal_versionmodal_page__WEBPACK_IMPORTED_MODULE_9__["VersionmodalPage"]])
], PricesPage);



/***/ })

}]);
//# sourceMappingURL=prices-prices-module-es2015.js.map