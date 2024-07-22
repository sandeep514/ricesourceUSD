(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["priceusd-priceusd-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/priceusd/priceusd.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/priceusd/priceusd.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"content\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\" class=\"\">\n    <div>\n        <div class=\"header-data green\"\n            style=\"min-height: 150px;max-height: 150px;border-radius: 0px 0px 35px 35px;margin-bottom: 50px;\">\n            <div style=\"min-height: 80px;display: flex;align-items: center;width: 100%;\">\n                <ion-row style=\"justify-content: space-between;width: 100%;padding: 0px 20px;\">\n                    <ion-col size=\"4\" align=\"center\" class=\"noPaddingMargin\">\n                        <div class=\"noPaddingMargin\" (click)=\"gotoProfile()\">\n                            <p class=\"noPaddingMargin avatar\">{{ userFirstName | uppercase }}</p>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"4\" align=\"center\" style=\"align-self: center;\">\n                        <!-- <h3>Dashboard</h3> -->\n                        <!-- <div *ngIf=\"restDays > 0\">\n                                <p *ngIf=\"restDays <= 10\">\n                                    {{restDays}} Days Left\n                                </p>\n                            </div> -->\n                        <!-- <p>\n                                <button (click)=\"showPaymentModel()\" *ngIf=\"restDays < 0\" style=\"color: #92b243; text-decoration: none; background: #fffbd6; padding: 5px; border-radius: 8px;\">Subscribe Now</button>\n                            </p> -->\n                        <img src=\"../../assets/sntc_rice_logo.png\" alt=\"\" style=\"width: 90px;\">\n                    </ion-col>\n                    <ion-col size=\"4\" align=\"right\" class=\"notification\" style=\"align-self: center;\">\n                        <ion-icon class=\"noPaddingMargin\" name=\"refresh-outline\" (click)=\"refresh()\"\n                            style=\"font-size: 25px;color: #fff;margin-right: 20px !important;\"></ion-icon>\n                        <div *ngIf=\"isNotifAvailable == 'true' \"\n                            style=\"height: 10px;width: 10px;background-color: red;position: absolute;right: 5px;top: 5px;z-index: 99999;border-radius: 100px;\">\n                        </div>\n                        <ion-icon class=\"noPaddingMargin\" name=\"notifications\" (click)=\"getNotications()\"\n                            style=\"font-size: 25px;color: #fff\"></ion-icon>\n                    </ion-col>\n\n                </ion-row>\n            </div>\n            <!-- <ion-row class=\"ion-padding title-padding \">\n                    <ion-col class=\"title\" size=\"12\">\n                        \n        \n                    </ion-col>\n                </ion-row> -->\n            <ion-row class=\"ion-padding rice-gallery\">\n                <ion-col>\n                    <ion-slides pager=\"false\" [options]=\"slideOpts\">\n                        <ion-slide *ngFor=\"let slider of ImageGallerySlider\" (click)=\"getGalleryData(slider.id)\">\n                            <div class=\"background-image\">\n                                <img src=\"{{ imagePrefix }}uploads/gallery/{{ slider.attachment }}\" alt=\"\"\n                                    style=\"width: 65%;height: 65%;\">\n                            </div>\n                        </ion-slide>\n                    </ion-slides>\n                    <ion-row>\n                        <!-- <ion-col size=\"8\" style=\"text-align: center;margin-top: 5px;text-align: right;\">\n                                <img src=\"../../assets/sntc_rice_logo.png\" alt=\"\" style=\"width: 100px;\">\n                            </ion-col> -->\n                        <ion-col>\n\n                            <!-- <ion-button (click)=\"tradeBack()\" size=\"small\"\n                                    style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                                    <p style=\"font-size: 11px;\">trade</p>\n                                </ion-button> -->\n                            <!-- <ion-button (click)=\"BuyINR()\" size=\"small\" style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                                    <p style=\"font-size: 11px;\">Buy INR</p>\n                                </ion-button> -->\n                            <!-- <ion-button (click)=\"tradeINR()\" size=\"small\"\n                                    style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                                    <p style=\"font-size: 11px;\">Trade INR</p>\n                                </ion-button> -->\n                            <!-- <ion-button (click)=\"sellerINR()\" size=\"small\"\n                                    style=\"text-transform: inherit;background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;\">\n                                    <p style=\"font-size: 11px;\">INR seller</p>\n                                </ion-button> -->\n\n                        </ion-col>\n                        <!-- <p style=\"padding: 0;margin: 0;text-align: center;width: 100%;color: #fffbd6;\">Pull to refresh</p> -->\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n        </div>\n\n\n        <div class=\"convertButtonParent\">\n            <button (click)=\"changeAppType()\"\n                style=\"background: #92b243;border-radius: 27px;padding: 13px 30px;margin: 10px 0px\">\n                <p style=\"padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: #fff;font-size: 14px;\">Convert\n                    to INR</p>\n            </button>\n        </div>\n\n\n        <div class=\"otherbackground\">\n            <div *ngIf=\"lastupdatedDate != null\" style=\"text-align: center;\">\n                <span style=\"font-size: 11px;\">Last updated at: {{ lastupdatedDate }} (IST)</span>\n            </div>\n\n            <ion-row class=\"ion-padding title-padding \" style=\"align-items: center;\">\n                <ion-col class=\"title\" size=\"2\">\n                    <img style=\"width: 100%;float: left\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\" alt=\"\"\n                        (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                </ion-col>\n\n                <ion-col class=\"title\" size=\"8\" style=\"text-align: center;\">\n                    <h2 class=\"\" style=\"font-size: 17px; padding: 3px 0px; font-family: 'Poppins-SemiBold'\">\n                        Indian Basmati Live Price\n                    </h2>\n                    <ion-row>\n                        <p style=\"padding: 0;margin:0;width: 100%;font-size: 12px;\">(All Prices are in USD PMT)</p>\n                    </ion-row>\n                </ion-col>\n                <ion-col class=\"title\" size=\"2\">\n\n                </ion-col>\n\n                <!-- <ion-col class=\"title\" size=\"2\">\n                    <img style=\"width: 40px;float: left;\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                </ion-col> -->\n            </ion-row>\n\n\n            <ng-container *ngIf=\"listBasmatiStates == null\">\n                <div class=\"center\">\n                    <!-- <p>No item found</p> -->\n                </div>\n            </ng-container>\n\n            <ng-container *ngIf=\"listBasmatiStates != null\"\n                style=\"padding-bottom: 20px;margin-bottom: 30px;width: 100%;\">\n                <ion-row class=\"table-row padd-5\" [ngClass]=\"(height==true)?'height200':'heightAuto'\"\n                    style=\"padding: 0px;margin: 0px;\">\n                    <ion-col class=\"price-table dashboard\" style=\"padding: 0px;margin: 0px;\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th class=\"sticky-col first-col left pl-10\" style=\"width: 20%\">\n                                        <ng-container>\n                                            <h6 class=\"black ricetype\"\n                                                style=\"font-size: 12px;font-family: 'Poppins-SemiBold';\">Quality</h6>\n                                        </ng-container>\n                                    </th>\n                                    <th class=\"sticky-col first-col left pl-10\" style=\"width: 20%\">\n                                        <ng-container>\n                                            <h4 class=\"black ricetype\"\n                                                style=\"font-size: 12px;font-family: 'Poppins-SemiBold';\">Packing\n                                                <ion-icon name=\"caret-down-outline\"></ion-icon>\n                                            </h4>\n                                        </ng-container>\n                                    </th>\n\n                                    <th class=\"font-17 type-columns black\" style=\"width: 20%\">\n                                        <ul class=\"table-filter\">\n                                            <li class=\"filter-content\"\n                                                style=\"font-size: 12px;font-family: 'Poppins-SemiBold';\">\n                                                FOB (FCL)<br>Mundra\n                                            </li>\n                                            <!-- <li class=\"filter\">\n                                            <ion-icon name=\"ellipsis-vertical-outline\" (click)=\"openPopup(convertToLowerCase(basmatiPrice.key))\"></ion-icon>\n                                            <div class=\"popover\" [id]=\"convertToLowerCase(basmatiPrice.key)\">\n                                                <ul>\n                                                    <li>\n                                                        <label for=\"price\"> Last price\n                                                        <input id=\"price\" class=\"priceRadio\" type=\"radio\" name=\"radio\" checked=\"checked\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_price')\"></label>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                    </li>\n                                                    <li>\n                                                        <label for=\"percentage\"> Percentage \n                                                        <input id=\"percentage\" type=\"radio\" name=\"radio\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_percentage')\"></label>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </li> -->\n                                        </ul>\n                                    </th>\n                                    <th class=\"sticky-col first-col left font-17 type-columns black\" style=\"width: 20%\"\n                                        (click)=\"openProfile()\">\n                                        <ul class=\"table-filter\">\n                                            <li class=\"filter-content\"\n                                                style=\"font-size: 12px;font-family: 'Poppins-SemiBold';\">\n                                                CIF (FCL)<br> {{defalutPort}}\n                                            </li>\n                                            <li style=\"align-self: center;\">\n                                                <ion-icon name=\"caret-down-outline\"></ion-icon>\n                                            </li>\n                                        </ul>\n                                    </th>\n                                </tr>\n                                <div class=\"popoverley\" (click)=\"removePopover()\"></div>\n                            </thead>\n                            <!-- <button id=\"getCurrentStatus\" style=\"height: 1px;width: 1px;color: red;background: transparent;padding: 0;margin: 0;\" (click)=\"getCurrentPaidStatus()\" ></button> -->\n                            <tbody class=\"priceusd\">\n                                <tr *ngFor=\"let basmati of listBasmatiStates\" (click)=\"openQuality(basmati?.rice)\">\n                                    <td class=\"sticky-col bg-transparent first-col left pl-10\">\n                                        <p style=\"font-size: 16px; padding: 0px;margin: 0px;font-weight: bold;\">\n                                            {{basmati?.get_rice_quality?.quality}}\n                                        </p>\n                                        <p\n                                            style=\"padding: 0px;margin: 0px;font-size: 12px;display: inline-block;max-width: min-content;\">\n                                            {{basmati?.get_rice_quality?.quality_name}}\n                                        </p>\n                                    </td>\n\n                                    <td class=\"sticky-col bg-transparent first-col left pl-10\"\n                                        style=\"font-size: 12px !important;font-weight: bold;\">\n                                        50kg PP\n                                    </td>\n                                    <td class=\"type-columns\">\n                                        <!-- <div class=\"priceVal\" style=\"font-size: 12px !important;\">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                                        <div class=\"priceVal\" style=\"font-size: 12px !important; font-weight: bold;\"\n                                            [ngClass]=\"basmati?.color_status == 3 ? 'black-price' : ( basmati?.color_status == 2 ) ? 'red-price' :  (basmati?.color_status == 1)? 'green-price': '' \">\n                                            ${{ basmati?.fobmin }}-{{ basmati?.fobmax }}</div>\n                                    </td>\n\n                                    <td class=\"type-columns\">\n                                        <!-- <div class=\"priceVal\" style=\"font-size: 12px !important; font-weight: bold;\" [ngClass]=\"basmati?.color_status == 3 ? 'black-price' : ( basmati?.color_status == 2 ) ? 'red-price' :  'green-price' \">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                                        <div class=\"priceVal\" style=\"font-size: 12px !important; font-weight: bold;\"\n                                            [ngClass]=\"basmati?.color_status == 3 ? 'black-price' : ( basmati?.color_status == 2 ) ? 'red-price' :  (basmati?.color_status == 1)? 'green-price': '' \">\n                                            ${{ ((basmati?.fobmin) + defaultCIFPrice) }}-{{ (basmati?.fobmax +\n                                            defaultCIFPrice) }} </div>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                    </ion-col>\n                </ion-row>\n                <ion-row style=\"justify-content: center;margin: 0 auto;width: 100%;z-index: 99999999;\">\n                    <button (click)=\"changeHeight()\"\n                        style=\"font-size: 35px;padding: 0;margin: 0;border-radius: 0px 0px 10px 10px;height: 35px;width: 100px;background-color: #92b243;\">\n                        <ion-icon *ngIf=\"(height == true)\" name=\"chevron-down-outline\"\n                            style=\"background: #92b243;overflow: hidden;border-radius: 100px;font-size: 30px;padding: 0;margin: 0;border-radius: 100px;height: 35px;\"></ion-icon>\n                        <ion-icon *ngIf=\"(height != true)\" name=\"chevron-up-outline\"\n                            style=\"background: #92b243;overflow: hidden;border-radius: 100px;font-size: 30px;padding: 0;margin: 0;border-radius: 100px;height: 35px;\"></ion-icon>\n                    </button>\n                </ion-row>\n            </ng-container>\n\n            <div style=\"margin-top: 20px\">\n                <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n                    <ion-refresher-content>\n                    </ion-refresher-content>\n                </ion-refresher> -->\n                <!-- non basmati -->\n                <ion-row class=\"ion-padding title-padding \">\n                    <ion-col class=\"title\" size=\"2\">\n                        <img style=\"width: 100%;float: left\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\"\n                            alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                    </ion-col>\n                    <ion-col class=\"title\" size=\"10\">\n                        <h2 class=\"\" style=\"font-size: 17px;float: left;padding: 3px 7px;font-weight: bold\">\n                            Indian Non-Basmati Live Price\n                        </h2>\n                    </ion-col>\n                    <!-- <ion-col class=\"title\" size=\"2\">\n                        <img style=\"width: 40px;float: left;\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                    </ion-col> -->\n                </ion-row>\n\n                <ng-container *ngIf=\"listNONBasmatiStates == null\">\n                    <div class=\"center\">\n                        <!-- <p>No item found</p> -->\n                    </div>\n                </ng-container>\n\n                <ng-container *ngIf=\"listNONBasmatiStates != null\">\n                    <ion-row class=\"ion-padding table-row padd-5\" style=\"padding: 0px;margin: 0px;\">\n                        <ion-col class=\"price-table dashboard\" style=\"padding: 0px;margin: 0px;\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"sticky-col first-col left pl-10\" style=\"width: 20%\">\n                                            <ng-container>\n                                                <h6 class=\"black ricetype\" style=\"font-size: 12px;\">Quality</h6>\n                                            </ng-container>\n                                        </th>\n                                        <th class=\"sticky-col first-col left pl-10\" style=\"width: 20%\">\n                                            <ng-container>\n                                                <h4 class=\"black ricetype\" style=\"font-size: 12px;\">Packing <ion-icon\n                                                        name=\"caret-down-outline\"></ion-icon></h4>\n                                            </ng-container>\n                                        </th>\n\n                                        <th class=\"font-17 type-columns black\" style=\"width: 20%\">\n                                            <ul class=\"table-filter\">\n                                                <li class=\"filter-content\" style=\"font-size: 12px;\">\n                                                    FOB (FCL)<br>Mundra\n                                                </li>\n                                                <!-- <li class=\"filter\">\n                                                    <ion-icon name=\"ellipsis-vertical-outline\" (click)=\"openPopup(convertToLowerCase(basmatiPrice.key))\"></ion-icon>\n                                                    <div class=\"popover\" [id]=\"convertToLowerCase(basmatiPrice.key)\">\n                                                        <ul>\n                                                            <li>\n                                                                <label for=\"price\"> Last price\n                                                                <input id=\"price\" class=\"priceRadio\" type=\"radio\" name=\"radio\" checked=\"checked\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_price')\"></label>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                            </li>\n                                                            <li>\n                                                                <label for=\"percentage\"> Percentage \n                                                                <input id=\"percentage\" type=\"radio\" name=\"radio\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_percentage')\"></label>\n                                                            </li>\n                                                        </ul>\n                                                    </div>\n                                                </li> -->\n                                            </ul>\n                                        </th>\n                                        <th class=\"sticky-col first-col left pl-10 font-17 type-columns black\"\n                                            style=\"width: 20%\">\n                                            <ul class=\"table-filter\">\n                                                <li class=\"filter-content\" style=\"font-size: 12px;\">\n                                                    CIF (FCL)<br> {{defalutPort}}\n                                                </li>\n                                                <li style=\"align-self: center;\">\n                                                    <ion-icon name=\"caret-down-outline\"></ion-icon>\n                                                </li>\n                                            </ul>\n                                        </th>\n                                    </tr>\n                                    <div class=\"popoverley\" (click)=\"removePopover()\"></div>\n                                </thead>\n                                <!-- <button id=\"getCurrentStatus\" style=\"height: 1px;width: 1px;color: red;background: transparent;padding: 0;margin: 0;\" (click)=\"getCurrentPaidStatus()\" ></button> -->\n                                <tbody>\n                                    <tr *ngFor=\"let nonbasmati of listNONBasmatiStates\"\n                                        (click)=\"openQuality(nonbasmati?.rice)\">\n                                        <td class=\"sticky-col bg-transparent first-col left pl-10\">\n                                            <p style=\"font-size: 16px; padding: 0px;margin: 0px;font-weight: bold;\">\n                                                {{nonbasmati?.get_rice_quality.quality}}</p>\n                                            <p\n                                                style=\"padding: 0px;margin: 0px;font-size: 12px;display: inline-block;max-width: min-content;\">\n                                                {{nonbasmati?.get_rice_quality.quality_name}}</p>\n                                        </td>\n\n                                        <td class=\"sticky-col bg-transparent first-col left pl-10\"\n                                            style=\"font-size: 12px !important;font-weight: bold;\">\n                                            50kg PP\n                                        </td>\n                                        <td class=\"type-columns\">\n                                            <!-- <div class=\"priceVal\" style=\"font-size: 12px !important;\">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                                            <div class=\"priceVal\" style=\"font-size: 12px !important;\"\n                                                [ngClass]=\"nonbasmati?.color_status == 3 ? 'black-price' : ( nonbasmati?.color_status == 2 ) ? 'red-price' : (nonbasmati?.color_status == 1)? 'green-price': '' \">\n                                                ${{ nonbasmati?.fobmin }}-{{ nonbasmati?.fobmax }} </div>\n                                        </td>\n\n                                        <td class=\"type-columns\">\n                                            <!-- <div class=\"priceVal\" style=\"font-size: 12px !important;\">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                                            <div class=\"priceVal\" style=\"font-size: 12px !important;\"\n                                                [ngClass]=\"nonbasmati?.color_status == 3 ? 'black-price' : ( nonbasmati?.color_status == 2 ) ? 'red-price' : (nonbasmati?.color_status == 1)? 'green-price': '' \">\n                                                ${{ ((nonbasmati?.fobmin) + defaultCIFPrice) }}-{{ (nonbasmati?.fobmax +\n                                                defaultCIFPrice) }}\n                                                <!-- <ion-icon name=\"caret-down-outline\"></ion-icon> -->\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n\n                        </ion-col>\n                    </ion-row>\n                </ng-container>\n            </div>\n\n        </div>\n    </div>\n    <app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/priceusd/priceusd-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/priceusd/priceusd-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PriceusdPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceusdPageRoutingModule", function() { return PriceusdPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _priceusd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priceusd.page */ "./src/app/priceusd/priceusd.page.ts");




const routes = [
    {
        path: '',
        component: _priceusd_page__WEBPACK_IMPORTED_MODULE_3__["PriceusdPage"]
    }
];
let PriceusdPageRoutingModule = class PriceusdPageRoutingModule {
};
PriceusdPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PriceusdPageRoutingModule);



/***/ }),

/***/ "./src/app/priceusd/priceusd.module.ts":
/*!*********************************************!*\
  !*** ./src/app/priceusd/priceusd.module.ts ***!
  \*********************************************/
/*! exports provided: PriceusdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceusdPageModule", function() { return PriceusdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _priceusd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./priceusd-routing.module */ "./src/app/priceusd/priceusd-routing.module.ts");
/* harmony import */ var _priceusd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./priceusd.page */ "./src/app/priceusd/priceusd.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _contactmodal_contactmodal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contactmodal/contactmodal.module */ "./src/app/contactmodal/contactmodal.module.ts");
/* harmony import */ var _versionmodal_versionmodal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../versionmodal/versionmodal.module */ "./src/app/versionmodal/versionmodal.module.ts");










let PriceusdPageModule = class PriceusdPageModule {
};
PriceusdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _priceusd_routing_module__WEBPACK_IMPORTED_MODULE_5__["PriceusdPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _contactmodal_contactmodal_module__WEBPACK_IMPORTED_MODULE_8__["ContactmodalPageModule"],
            _versionmodal_versionmodal_module__WEBPACK_IMPORTED_MODULE_9__["VersionmodalPageModule"]
        ],
        declarations: [_priceusd_page__WEBPACK_IMPORTED_MODULE_6__["PriceusdPage"]]
    })
], PriceusdPageModule);



/***/ }),

/***/ "./src/app/priceusd/priceusd.page.scss":
/*!*********************************************!*\
  !*** ./src/app/priceusd/priceusd.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"GlacialIndifference-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('GlacialIndifference-Regular.otf');\n}\n@font-face {\n  font-family: \"GlacialIndifference-Italic\";\n  font-style: italic;\n  font-weight: normal;\n  src: url('GlacialIndifference-Italic.otf');\n}\nion-content {\n  --padding-bottom: 81px;\n}\n.user-profile-icon {\n  width: 50px;\n  background-color: #606060;\n  border-radius: 50px;\n  height: 50px;\n  line-height: 50px;\n  margin-left: 15px;\n  margin-top: 10px;\n  padding: 20;\n}\n.user-profile-icon span {\n  color: #FFF;\n  font-size: 30px;\n}\n.notification img {\n  width: 22px;\n  margin-right: 10px;\n  margin-top: 18px;\n}\n.notification ion-icon {\n  font-size: 38px;\n  margin-top: 15px;\n  margin-right: 10px;\n}\n.notification .badge {\n  background-color: #ad362d;\n  height: 17px;\n  width: 17px;\n  color: #FFF;\n  border-radius: 50px;\n  display: inline-block;\n  font-size: 12px;\n  text-align: center;\n  line-height: 17px;\n  right: 16px;\n  position: absolute;\n  top: 19px;\n}\n.slider img {\n  width: 80px;\n}\n.title-padding {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.title-padding h2 {\n  margin: 0px;\n}\n.priceData {\n  text-align: left;\n  margin-left: 10px;\n}\n.popoverley {\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999999;\n  display: none;\n}\n#brown_percentage {\n  display: none;\n}\n#creamy_sella_percentage {\n  display: none;\n}\n#golden_selle_percentage {\n  display: none;\n}\n#raw_percentage {\n  display: none;\n}\n#steam_percentage {\n  display: none;\n}\n.popover {\n  box-shadow: 2px 2px 9px 0px #888;\n  border-radius: 5px;\n  position: absolute;\n  right: 0;\n  z-index: 99999999;\n  background: #fff;\n  display: none;\n  height: 88px;\n  width: 150px;\n}\n.popover ul {\n  list-style: none;\n  padding: 0;\n  margin: 0px;\n}\n.popover ul li {\n  padding: 10px 10px;\n  text-align: left;\n}\n.popover ul li label {\n  font-size: 18px;\n}\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: #eeeeee !important;\n}\n.price-table table thead tr th {\n  background-color: #eeeeee !important;\n  border-right: 1px solid #dfdfdf;\n}\n.price-table table tbody tr {\n  height: 35px;\n}\n.price-table table tbody tr td {\n  font-size: 12px;\n  border-bottom: 1px solid #ededed;\n  border-right: 1px solid #ededed;\n}\n.table-row {\n  margin-top: 0px;\n  padding-top: 0px;\n}\n.table-row tr td {\n  text-align: center;\n}\n.wrapper {\n  position: relative;\n  overflow: auto;\n  padding: 0px;\n  box-shadow: 1px 4px 6px #CCC;\n  border-radius: 3px;\n}\n.sticky-col {\n  position: sticky;\n  position: -webkit-sticky;\n  background-color: white;\n  border-right: 1px solid #dfdfdf;\n  z-index: 99999;\n}\n.first-col {\n  width: auto;\n  min-width: 66px;\n  max-width: 100px;\n  left: 0px;\n  border-right: 1px solid #dfdfdf;\n}\n.second-col {\n  width: 150px;\n  min-width: 150px;\n  max-width: 150px;\n  left: 100px;\n}\n.red-price {\n  color: red;\n  font-weight: 600;\n}\n.green-price {\n  color: green;\n  font-weight: 600;\n}\n.black-price {\n  color: #000;\n  font-weight: 600;\n}\n.bg-white {\n  background-color: #FFF;\n}\n.transport-card {\n  margin-top: -5px;\n}\n.trasnport-image {\n  width: 50px;\n}\n.dotted-border {\n  border-bottom: 2px dotted #000;\n  margin: 19px auto;\n  width: 81%;\n}\n.transport-state {\n  margin-top: -10px;\n  display: block;\n  font-size: 13px;\n}\n.price-col {\n  color: #000;\n  font-size: 13px;\n  padding-top: 14px;\n}\n.transport-row {\n  border-bottom: 1px solid #CCC;\n}\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n.scroll-arrow {\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n.sntc-slider img {\n  width: 250px;\n  margin-top: 2px;\n  margin-left: -16px;\n}\n.sntc-slider h1 {\n  font-size: 37px;\n  margin: 0px;\n  padding: 0px;\n  margin-top: 25px;\n  color: green;\n}\n.sntc-slider p {\n  margin: 0px;\n  padding: 0px;\n}\n.type-columns {\n  min-width: 80px;\n}\n.slide-image {\n  width: 90%;\n  border-radius: 6px;\n}\n.rice-gallery {\n  padding-top: 0px;\n}\n.logo-text {\n  font-family: \"Monotype Corsiva\";\n}\n.header-segment {\n  height: 32px;\n  --padding-end: 0px;\n  margin-right: 0px;\n  margin: 0 auto;\n}\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 0px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  --min-width: auto;\n  min-width: auto;\n  color: #000;\n  font-size: 12px;\n}\n.header-segment ion-segment-button.segment-button-checked {\n  background: #92b244;\n  --background: #92b244;\n}\n.header-segment ion-segment-button.segment-button-checked ion-label {\n  margin: 0px;\n  padding: 0px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 100%;\n}\n.header-segment ion-label.sc-ion-label-md-s md {\n  font-size: 60%;\n}\n.header-segment ion-label {\n  margin: 0px;\n  padding: 0px;\n  color: #000;\n  font-weight: 600;\n  font-size: 100%;\n}\n.viewtrans {\n  height: 0px;\n  margin-top: 8px;\n  border-radius: 100px;\n  min-height: 36px;\n  margin-left: 2px;\n  margin-right: 2px;\n  box-shadow: -1px 1px 9px 0px #CCC;\n  width: 33%;\n  color: #000;\n  font-size: 12px;\n  text-decoration: none;\n  padding: 10px;\n}\n.center {\n  text-align: center;\n}\n.center p {\n  padding: 15px 0px 15px 0px;\n  margin: 0;\n  margin-bottom: 20px;\n}\n.rice-gallery {\n  padding-bottom: 0;\n}\n.pt0 {\n  padding-top: 0;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.pb0 {\n  padding-bottom: 0;\n}\n.scroll-arrow {\n  position: absolute;\n  margin-top: 1%;\n}\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n.ricetitle {\n  font-size: 27px;\n  font-family: Arial;\n  text-align: center;\n}\n.basmatiState {\n  margin: 0 30px;\n}\ntable {\n  width: 100%;\n}\ntable .right {\n  text-align: right;\n}\ntable .left {\n  text-align: left !important;\n}\n.pl-10 {\n  padding-left: 10px;\n}\n.p05 {\n  padding: 0px 5px;\n}\n.font-green {\n  color: #0DCC18;\n}\n.red {\n  color: #FB5000;\n}\n.grey {\n  color: grey;\n}\n.dashboard table,\n.dashboard thead,\n.dashboard th,\n.dashboard tr,\n.dashboard td,\n.dashboard td {\n  border: 0px;\n}\n.ricetype {\n  font-size: 30px;\n  font-family: Arial;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n  font-weight: bold;\n}\n.font-17 {\n  font-size: 14px;\n  font-family: Arial;\n}\n.font-14 {\n  font-size: 14px;\n}\n.right {\n  text-align: right !important;\n  padding-right: 10px !important;\n}\n.dashboard table tbody tr td {\n  font-size: 18px !important;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.padd-5 {\n  padding: 5px;\n}\n.pt-10 {\n  padding-top: 10px;\n}\n.pt-5 {\n  padding-top: 5px;\n}\n.table-filter {\n  list-style: none;\n  padding: 0;\n  display: inline-flex;\n  padding: 0px;\n  margin: 0px;\n}\n.table-filter .filter {\n  font-size: 20px;\n}\n.table-filter .filter-content {\n  margin-top: 3px;\n}\n.black {\n  color: #000;\n}\n.riceDisplayType .filterRice {\n  padding: 0;\n  margin: 0;\n  text-align: right;\n}\n.riceDisplayType ul {\n  padding: 0;\n  margin: 0;\n  display: inline-flex;\n  list-style: none;\n}\n.riceDisplayType ul li {\n  padding: 10px 20px;\n  border: 1px solid #ededed;\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 1px 7px 1px #ededed;\n  float: right;\n  display: none;\n}\n.riceDisplayType ul .show {\n  display: block;\n}\n.dashboard table thead,\n.dashboard table tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n.dashboard table thead tr,\n.dashboard table tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n  font-family: \"GlacialIndifference-Regular\";\n}\n.dashboard table thead tr th,\n.dashboard table tbody tr th {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-right: 0px !important;\n}\n.dashboard table thead tr td,\n.dashboard table tbody tr td {\n  border-right: 0px !important;\n  font-size: 18px !important;\n}\n.dashboard table thead {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n.dashboard table thead tr {\n  background: #fffbd6 !important;\n  background-color: #fffbd6 !important;\n  font-family: \"GlacialIndifference-Regular\";\n}\n.dashboard table thead tr th {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-right: 0px !important;\n}\n.dashboard table thead tr td {\n  border-right: 0px !important;\n  font-size: 18px !important;\n}\n.percentage {\n  display: none;\n}\n.hide,\n.hidecontent {\n  display: none;\n}\n.show {\n  display: block;\n}\nion-segment ion-segment-button ion-label {\n  margin: 0 !important;\n  padding: 0 !important;\n  margin-top: -2px !important;\n}\n.background-image {\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n  overflow: hidden;\n  background-image: url('refe 1.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n  display: flex;\n  align-items: center;\n}\n.background-image img {\n  width: 100%;\n  margin: 0 auto;\n  border-radius: 100px;\n}\n.ios .header-segment {\n  height: 40px;\n}\n.ios .header-segment ion-segment-button {\n  border-radius: 5px;\n}\n.height200 {\n  height: 220px;\n  overflow: hidden;\n}\n.heightAuto {\n  height: auto;\n}\n.riceTypeName {\n  font-size: 19px;\n  padding: 0px;\n  margin: 0px;\n  font-weight: bold;\n}\n.riceQualityName {\n  padding: 0px;\n  margin: 0px;\n  font-size: 12px;\n}\n.bagSize {\n  font-size: 13px !important;\n}\n.priceVal {\n  font-size: 13px !important;\n  font-weight: bold;\n}\n.avatar {\n  height: 50px;\n  width: 50px;\n  background: #FFFBD6;\n  justify-content: center;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  border-radius: 100%;\n  font-size: 27px;\n  color: #92b243;\n  font-family: \"Poppins-SemiBold\";\n}\n.convertButtonParent {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n}\n.riceCrop,\n.ricePrice {\n  font-size: 12px;\n  font-family: \"Poppins-SemiBold\";\n  text-align: center;\n}\n.priceusd tr td {\n  border-right: 1px solid #ededed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3ByaWNldXNkL3ByaWNldXNkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJpY2V1c2QvcHJpY2V1c2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRFFBO0VBQ0kseUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUNOSjtBRFNBO0VBRUksc0JBQUE7QUNSSjtBRFdBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1JKO0FEVUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ1JSO0FEYUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1ZSO0FEYUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1hSO0FEY0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNaUjtBRHFCSTtFQUNJLFdBQUE7QUNsQlI7QURzQkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDbkJKO0FEcUJJO0VBQ0ksV0FBQTtBQ25CUjtBRHVCQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNwQko7QUR1QkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNwQko7QUR1QkE7RUFDSSxhQUFBO0FDcEJKO0FEdUJBO0VBQ0ksYUFBQTtBQ3BCSjtBRHVCQTtFQUNJLGFBQUE7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QUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDL0ZKO0FEaUdJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQy9GUjtBRG9HSTtFQUNJLFlBQUE7QUNqR1I7QURtR1E7RUFDSSxrQkFBQTtBQ2pHWjtBRHNHQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ25HSjtBRHNHQTtFQUNJLFlBQUE7QUNuR0o7QURzR0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ25HSjtBRHNHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ25HSjtBRHNHQTtFQUNJLDBCQUFBO0FDbkdKO0FEc0dBO0VBQ0ksMEJBQUE7RUFDQSxpQkFBQTtBQ25HSjtBRHNHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FDbkdKO0FEc0dBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ25HSjtBRHNHQTs7RUFFSSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQ25HSjtBRHdHUTtFQUNJLDBDQUFBO0FDckdaIiwiZmlsZSI6InNyYy9hcHAvcHJpY2V1c2QvcHJpY2V1c2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdHbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXInO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvZ2xhY2lhbC9HbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXIub3RmJyk7XG59XG5cbi8vIEBmb250LWZhY2Uge1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuLy8gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvQXJpYWwub3RmJyk7XG4vLyB9XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0dsYWNpYWxJbmRpZmZlcmVuY2UtSXRhbGljJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvR2xhY2lhbEluZGlmZmVyZW5jZS1JdGFsaWMub3RmJyk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nJykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4MXB4O1xufVxuXG4udXNlci1wcm9maWxlLWljb24ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiAyMDtcblxuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIC5iYWRnZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDM2MmQ7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxOXB4O1xuICAgIH1cbn1cblxuLnNsaWRlciB7XG5cbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgIH1cbn1cblxuLnRpdGxlLXBhZGRpbmcge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxufVxuXG4ucHJpY2VEYXRhIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ucG9wb3ZlcmxleSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI2Jyb3duX3BlcmNlbnRhZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNjcmVhbXlfc2VsbGFfcGVyY2VudGFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI2dvbGRlbl9zZWxsZV9wZXJjZW50YWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jcmF3X3BlcmNlbnRhZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNzdGVhbV9wZXJjZW50YWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ucG9wb3ZlciB7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA5cHggMHB4ICM4ODg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIHdpZHRoOiAxNTBweDtcblxuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnByaWNlLXRhYmxlIHtcblxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuXG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWRlZGVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG59XG5cbi50YWJsZS1yb3cge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuXG4gICAgdHIge1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi53cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDRweCA2cHggI0NDQztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5zdGlja3ktY29sIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgIHotaW5kZXg6IDk5OTk5O1xufVxuXG4uZmlyc3QtY29sIHtcbiAgICAvLyB3aWR0aDogOTBweDtcbiAgICAvLyBtaW4td2lkdGg6IDEwMHB4O1xuICAgIC8vIG1heC13aWR0aDogMTAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiA2NnB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG5cbi5zZWNvbmQtY29sIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIGxlZnQ6IDEwMHB4O1xufVxuXG4ucmVkLXByaWNlIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ncmVlbi1wcmljZSB7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ibGFjay1wcmljZSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufVxuXG4udHJhbnNwb3J0LWNhcmQge1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi50cmFzbnBvcnQtaW1hZ2Uge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4uZG90dGVkLWJvcmRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCAjMDAwO1xuICAgIG1hcmdpbjogMTlweCBhdXRvO1xuICAgIHdpZHRoOiA4MSU7XG59XG5cbi50cmFuc3BvcnQtc3RhdGUge1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnByaWNlLWNvbCB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xufVxuXG4udHJhbnNwb3J0LXJvdyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG59XG5cbi5yaXBwbGUtcGFyZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNjcm9sbC1hcnJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zbnRjLXNsaWRlciB7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzdweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbn1cblxuLnR5cGUtY29sdW1ucyB7XG4gICAgLy8gd2lkdGg6IDMwMHB4O1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIC8vIG1pbi13aWR0aDogMTIwcHg7XG4gICAgLy8gbWluLXdpZHRoOiA3NXB4O1xuICAgIG1pbi13aWR0aDogODBweDtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnJpY2UtZ2FsbGVyeSB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLmxvZ28tdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6ICdNb25vdHlwZSBDb3JzaXZhJztcbn1cblxuLmhlYWRlci1zZWdtZW50IHtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgbWluLWhlaWdodDogMzFweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IC0xcHggMXB4IDlweCAwcHggI0NDQztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIC0td2lkdGg6IGF1dG87XG4gICAgICAgIC0tbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG4gICAgfVxuXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTJiMjQ0O1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM5MmIyNDQ7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsLnNjLWlvbi1sYWJlbC1tZC1zIG1kIHtcbiAgICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB9XG59XG5cbi52aWV3dHJhbnMge1xuICAgIGhlaWdodDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgIHdpZHRoOiAzMyU7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBwIHtcbiAgICAgICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgICB9XG59XG5cbi5yaWNlLWdhbGxlcnkge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4ucHQwIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLm10LTIwIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucGIwIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnNjcm9sbC1hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDElO1xuXG4gICAgLmxlZnRpY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICB9XG5cbiAgICAucmlnaHRpY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgei1pbmRleDogOTk5OTk5O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgfVxufVxuXG4ucmljZXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4uYmFzbWF0aVN0YXRlIHtcbiAgICBtYXJnaW46IDAgMzBweFxufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAucmlnaHQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAubGVmdCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5wbC0xMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ucDA1IHtcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xufVxuXG4uZm9udC1ncmVlbiB7XG4gICAgY29sb3I6ICMwRENDMTg7XG59XG5cbi5yZWQge1xuICAgIGNvbG9yOiAjRkI1MDAwO1xufVxuXG4uZ3JleSB7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi5kYXNoYm9hcmQgdGFibGUsXG4uZGFzaGJvYXJkIHRoZWFkLFxuLmRhc2hib2FyZCB0aCxcbi5kYXNoYm9hcmQgdHIsXG4uZGFzaGJvYXJkIHRkLFxuLmRhc2hib2FyZCB0ZCB7XG4gICAgYm9yZGVyOiAwcHg7XG59XG5cbi5yaWNldHlwZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuXG4uZm9udC0xNyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLmZvbnQtMTQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudFxufVxuXG4uZGFzaGJvYXJkIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnBhZGQtNSB7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4ucHQtMTAge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4XG59XG5cbi5wdC01IHtcbiAgICBwYWRkaW5nLXRvcDogNXB4XG59XG5cbi50YWJsZS1maWx0ZXIge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG5cbiAgICAuZmlsdGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC5maWx0ZXItY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweFxuICAgIH1cbn1cblxuLmJsYWNrIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLnJpY2VEaXNwbGF5VHlwZSB7XG4gICAgLmZpbHRlclJpY2Uge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMXB4IDdweCAxcHggI2VkZWRlZDtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2hvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRhc2hib2FyZCB7XG4gICAgdGFibGUge1xuXG4gICAgICAgIHRoZWFkLFxuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhcic7XG5cbiAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRhYmxlIHtcblxuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjUxLCAyMTQsIDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1MSwgMjE0LCAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXInO1xuXG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wZXJjZW50YWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZSxcbi5oaWRlY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tc2VnbWVudCB7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvcmVmZSAxLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIH1cbn1cblxuLmlvcyB7XG4gICAgLmhlYWRlci1zZWdtZW50IHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuXG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5oZWlnaHQyMDAge1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlaWdodEF1dG8ge1xuICAgIGhlaWdodDogYXV0b1xufVxuXG4ucmljZVR5cGVOYW1lIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmljZVF1YWxpdHlOYW1lIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYmFnU2l6ZSB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmljZVZhbCB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hdmF0YXIge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGQkQ2O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgY29sb3I6ICM5MmIyNDM7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVNlbWlCb2xkJztcbn1cblxuLmNvbnZlcnRCdXR0b25QYXJlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yaWNlQ3JvcCxcbi5yaWNlUHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtU2VtaUJvbGQnO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByaWNldXNkIHtcbiAgICB0ciB7XG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZGVkZWQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvZ2xhY2lhbC9HbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXIub3RmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdsYWNpYWxJbmRpZmZlcmVuY2UtSXRhbGljXCI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvZ2xhY2lhbC9HbGFjaWFsSW5kaWZmZXJlbmNlLUl0YWxpYy5vdGZcIik7XG59XG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDgxcHg7XG59XG5cbi51c2VyLXByb2ZpbGUtaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMjA7XG59XG4udXNlci1wcm9maWxlLWljb24gc3BhbiB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5ub3RpZmljYXRpb24gaW1nIHtcbiAgd2lkdGg6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cbi5ub3RpZmljYXRpb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDM4cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ub3RpZmljYXRpb24gLmJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkMzYyZDtcbiAgaGVpZ2h0OiAxN3B4O1xuICB3aWR0aDogMTdweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICByaWdodDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE5cHg7XG59XG5cbi5zbGlkZXIgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi50aXRsZS1wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi50aXRsZS1wYWRkaW5nIGgyIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5wcmljZURhdGEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnBvcG92ZXJsZXkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2Jyb3duX3BlcmNlbnRhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jY3JlYW15X3NlbGxhX3BlcmNlbnRhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZ29sZGVuX3NlbGxlX3BlcmNlbnRhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jcmF3X3BlcmNlbnRhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jc3RlYW1fcGVyY2VudGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wb3BvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA5cHggMHB4ICM4ODg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5OTk5OTk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogODhweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLnBvcG92ZXIgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDBweDtcbn1cbi5wb3BvdmVyIHVsIGxpIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnBvcG92ZXIgdWwgbGkgbGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wcmljZS10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIge1xuICBoZWlnaHQ6IDM0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VkZWRlZDtcbn1cblxuLnRhYmxlLXJvdyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cbi50YWJsZS1yb3cgdHIgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2hhZG93OiAxcHggNHB4IDZweCAjQ0NDO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5zdGlja3ktY29sIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgei1pbmRleDogOTk5OTk7XG59XG5cbi5maXJzdC1jb2wge1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiA2NnB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG5cbi5zZWNvbmQtY29sIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBsZWZ0OiAxMDBweDtcbn1cblxuLnJlZC1wcmljZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ncmVlbi1wcmljZSB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJsYWNrLXByaWNlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbi50cmFuc3BvcnQtY2FyZCB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi50cmFzbnBvcnQtaW1hZ2Uge1xuICB3aWR0aDogNTBweDtcbn1cblxuLmRvdHRlZC1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAycHggZG90dGVkICMwMDA7XG4gIG1hcmdpbjogMTlweCBhdXRvO1xuICB3aWR0aDogODElO1xufVxuXG4udHJhbnNwb3J0LXN0YXRlIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5wcmljZS1jb2wge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogMTRweDtcbn1cblxuLnRyYW5zcG9ydC1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbn1cblxuLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zY3JvbGwtYXJyb3cge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc250Yy1zbGlkZXIgaW1nIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbn1cbi5zbnRjLXNsaWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMzdweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgY29sb3I6IGdyZWVuO1xufVxuLnNudGMtc2xpZGVyIHAge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udHlwZS1jb2x1bW5zIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5yaWNlLWdhbGxlcnkge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ubG9nby10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3R5cGUgQ29yc2l2YVwiO1xufVxuXG4uaGVhZGVyLXNlZ21lbnQge1xuICBoZWlnaHQ6IDMycHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtaW4taGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgd2lkdGg6IGF1dG87XG4gIC0td2lkdGg6IGF1dG87XG4gIC0tbWluLXdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IGF1dG87XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjOTJiMjQ0O1xuICAtLWJhY2tncm91bmQ6ICM5MmIyNDQ7XG59XG4uaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cbi5oZWFkZXItc2VnbWVudCBpb24tbGFiZWwuc2MtaW9uLWxhYmVsLW1kLXMgbWQge1xuICBmb250LXNpemU6IDYwJTtcbn1cbi5oZWFkZXItc2VnbWVudCBpb24tbGFiZWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4udmlld3RyYW5zIHtcbiAgaGVpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gIHdpZHRoOiAzMyU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jZW50ZXIgcCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5yaWNlLWdhbGxlcnkge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnB0MCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubXQtMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucGIwIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5zY3JvbGwtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuLnNjcm9sbC1hcnJvdyAubGVmdGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHRvcDogMHB4O1xufVxuLnNjcm9sbC1hcnJvdyAucmlnaHRpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogOTk5OTk5O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMnB4O1xuICB3aWR0aDogMThweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5yaWNldGl0bGUge1xuICBmb250LXNpemU6IDI3cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFzbWF0aVN0YXRlIHtcbiAgbWFyZ2luOiAwIDMwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSAucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbnRhYmxlIC5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4ucGwtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5wMDUge1xuICBwYWRkaW5nOiAwcHggNXB4O1xufVxuXG4uZm9udC1ncmVlbiB7XG4gIGNvbG9yOiAjMERDQzE4O1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNGQjUwMDA7XG59XG5cbi5ncmV5IHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5kYXNoYm9hcmQgdGFibGUsXG4uZGFzaGJvYXJkIHRoZWFkLFxuLmRhc2hib2FyZCB0aCxcbi5kYXNoYm9hcmQgdHIsXG4uZGFzaGJvYXJkIHRkLFxuLmRhc2hib2FyZCB0ZCB7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvbnQtMTcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLmZvbnQtMTQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5wYWRkLTUge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wdC0xMCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ucHQtNSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi50YWJsZS1maWx0ZXIge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi50YWJsZS1maWx0ZXIgLmZpbHRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi50YWJsZS1maWx0ZXIgLmZpbHRlci1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uYmxhY2sge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnJpY2VEaXNwbGF5VHlwZSAuZmlsdGVyUmljZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucmljZURpc3BsYXlUeXBlIHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5yaWNlRGlzcGxheVR5cGUgdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDJweCAxcHggN3B4IDFweCAjZWRlZGVkO1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucmljZURpc3BsYXlUeXBlIHVsIC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kYXNoYm9hcmQgdGFibGUgdGhlYWQsXG4uZGFzaGJvYXJkIHRhYmxlIHRib2R5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQgdGFibGUgdGhlYWQgdHIsXG4uZGFzaGJvYXJkIHRhYmxlIHRib2R5IHRyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyXCI7XG59XG4uZGFzaGJvYXJkIHRhYmxlIHRoZWFkIHRyIHRoLFxuLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB0ciB0aCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGFzaGJvYXJkIHRhYmxlIHRoZWFkIHRyIHRkLFxuLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuLmRhc2hib2FyZCB0YWJsZSB0aGVhZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uZGFzaGJvYXJkIHRhYmxlIHRoZWFkIHRyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmJkNiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmQ2ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkdsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhclwiO1xufVxuLmRhc2hib2FyZCB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGFzaGJvYXJkIHRhYmxlIHRoZWFkIHRyIHRkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGUsXG4uaGlkZWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTJweCAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZC1pbWFnZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvcmVmZSAxLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYmFja2dyb3VuZC1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4uaW9zIC5oZWFkZXItc2VnbWVudCB7XG4gIGhlaWdodDogNDBweDtcbn1cbi5pb3MgLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmhlaWdodDIwMCB7XG4gIGhlaWdodDogMjIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZWlnaHRBdXRvIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmljZVR5cGVOYW1lIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJpY2VRdWFsaXR5TmFtZSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJhZ1NpemUge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuLnByaWNlVmFsIHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYXZhdGFyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZDogI0ZGRkJENjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBjb2xvcjogIzkyYjI0MztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1TZW1pQm9sZFwiO1xufVxuXG4uY29udmVydEJ1dHRvblBhcmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yaWNlQ3JvcCxcbi5yaWNlUHJpY2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtU2VtaUJvbGRcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJpY2V1c2QgdHIgdGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWRlZGVkICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/priceusd/priceusd.page.ts":
/*!*******************************************!*\
  !*** ./src/app/priceusd/priceusd.page.ts ***!
  \*******************************************/
/*! exports provided: PriceusdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceusdPage", function() { return PriceusdPage; });
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











let PriceusdPage = class PriceusdPage {
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
            loop: true,
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
                this.navCtrl.navigateRoot('prices', { animationDirection: 'forward' });
            }
            else {
                console.log("iukhjik");
                this.navCtrl.navigateRoot('planpage', { animationDirection: 'forward' });
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
        this.componentService.isUserExpired.subscribe((res) => {
            this.componentService.differanceTwoDate(todayDate, ExpiredDateDate).then((res) => {
                this.restDays = res;
            });
        });
        this.componentService.isUserExpired.subscribe((res) => {
            this.currentPaidStatus = res;
            if (localStorage.getItem('apptype') == 'USD') {
                this.appType = "usd";
            }
            else {
                this.appType = 'other';
            }
            setTimeout(() => {
                // document.getElementById('getCurrentStatus').clic k();
            }, 3000);
        });
        this.getVersion();
        // this.fetchRiceForm()
        if (localStorage.getItem('apptype') == 'USD') {
            this.appType = "usd";
        }
        else {
            this.appType = 'other';
        }
        this.componentService.reRenderFooterMenu.next();
    }
    doRefresh(event) {
        this.componentService.presentLoading().then(() => {
            setTimeout(() => {
                this.refresh();
                event.target.complete();
                this.componentService.loadingController.dismiss();
            }, 2000);
        }).catch(() => {
            this.componentService.loadingController.dismiss();
        });
    }
    ionViewDidLoad() {
        if (localStorage.getItem('apptype') == 'USD') {
            this.appType = "usd";
        }
        else {
            this.appType = 'other';
        }
        this.componentService.isUserExpired.subscribe((res) => {
            this.currentPaidStatus = res;
            setTimeout(() => {
                document.getElementById('getCurrentStatus').click();
            }, 1000);
        });
        this.componentService.isUserExpired.subscribe((res) => {
            this.currentPaidStatus = res;
            setTimeout(() => {
                document.getElementById('getCurrentStatus').click();
                this.componentService.loadingController.dismiss();
            }, 1500);
        });
    }
    getNotications() {
        this.navCtrl.navigateForward(['notifications']);
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
    openProfile() {
        this.navCtrl.navigateForward('profile');
    }
    getGallery() {
        this.restService.getImagesForDashboard().then((res) => {
        }, (err) => {
        });
    }
    getBasmatiState() {
        this.componentService.presentLoading().then(() => {
            this.restService.getBasmatiState().then((res) => {
                if (res.data.length > 0) {
                    this.firstBasmatiState = res.data[0];
                    setTimeout(() => {
                        document.getElementById(this.firstBasmatiState).click();
                    }, 1000);
                }
                this.basmatiState = res.data;
                this.componentService.loadingController.dismiss();
            }, (err) => {
                this.componentService.loadingController.dismiss();
            });
        }).catch(() => {
            this.componentService.loadingController.dismiss();
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
            this.restService.getPrices(this.firstBasmatiState, type).then((res) => {
                let basmatiColumns = res.prices.basmati;
                if (basmatiColumns != undefined) {
                    this.latestDateBasmati = res.latest;
                    this.oldDateBasmati = res.oldDate;
                    this.basmatiColumns = basmatiColumns;
                    // 	basmatiColumns = Object.keys(basmatiColumns);
                    // 	if (basmatiColumns.length != 0) {
                    // 		basmatiColumns = Object.keys(res.prices.basmati[basmatiColumns[0]]);
                    // 		this.basmatiColumns = basmatiColumns;
                    // 	}
                }
                let nonBasmati = res.prices["non_basmati"];
                if (nonBasmati != undefined) {
                    this.nonBasmatiColumns = nonBasmati;
                    this.latestDateNONBasmati = res.oldDate;
                    this.oldDateNONBasmati = res.latest;
                    // nonBasmati = Object.keys(nonBasmati);
                    // if (nonBasmati.length != 0) {
                    // 	nonBasmati = Object.keys(res.prices.non_basmati[nonBasmati[0]]);
                    // 	this.nonBasmatiColumns = nonBasmati;
                    // }
                }
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
        this.isNotifAvailable = localStorage.getItem('isNewNotification');
        console.log(this.isNotifAvailable);
        console.log(this.route.url);
        if (this.route.url == "/priceusd") {
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
        }, (err) => {
        });
        this.getLoadedData("non-basmati").then((res) => {
            this.nonbasmatiprice = res;
        }, (err) => {
        });
        // });
        this.restService.CheckUserExpired().then((res) => {
            // localStorage.setItem('isExpiryUSD' , res.isExpiry)
            // localStorage.setItem('ExpiryUSDDate' , res.data)
            if (localStorage.getItem('is_usd_active') != '0') {
                localStorage.setItem('isExpiryUSD', res.isExpiry);
                localStorage.setItem('ExpiryUSDDate', res.data);
            }
            else {
                localStorage.setItem('isExpiryUSD', 'true');
                localStorage.setItem('ExpiryUSDDate', null);
            }
            localStorage.setItem('expired_on', res.data);
            let isUserExpiredStatus = localStorage.getItem('isExpiryUSD');
            if (isUserExpiredStatus == 'true') {
                localStorage.setItem('apptype', 'OTHER');
                this.navCtrl.navigateForward(['prices']);
            }
            this.componentService.compareTwoDates(localStorage.getItem('expired_on'));
        }, (err) => {
        });
        this.imagePrefix = this.restService.imageUrl;
        this.getSlider();
        this.username = localStorage.getItem("name");
        this.userFirstName = localStorage.getItem("name")[0];
        this.getUSDPrices(localStorage.getItem('id'));
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
        this.restService.getLatestVersion().then((res) => {
            let elemem = this;
            if ('1.0.0' != res.data.version) {
                setTimeout(function () { elemem.showVersionModal(); }, 8000);
            }
        }, (err) => {
        }).catch((err) => {
        });
    }
    refresh() {
        // this.getBasmatiState();
        // this.getNONBasmatiState();
        // this.getPlans();
        this.getUSDPrices(localStorage.getItem('id'));
    }
    ngOnInit() {
        this.platform.ready().then(() => {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#brown_percentage").css({ display: "none" });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#creamy_sella_percentage").css({ display: "none" });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#golden_selle_percentage").css({ display: "none" });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#raw_percentage").css({ display: "none" });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#steam_percentage").css({ display: "none" });
            let api = this.restService;
            if (localStorage.getItem('is_usd_active') == '1') {
                this.USDActive = 1;
            }
            else {
                this.USDActive = 0;
            }
            if (localStorage.getItem('is_INR_active') == '1') {
                this.INRActive = 1;
            }
            else {
                this.INRActive = 0;
            }
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
                this.basmatiprice = res;
                console.log(res);
                this.componentService.loadingController.dismiss();
            });
        }).catch(() => {
            this.componentService.loadingController.dismiss();
        });
        if (event.detail.value == "kota_bundi") {
            jquery__WEBPACK_IMPORTED_MODULE_5__(".rajasthan").click();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_5__("." + event.detail.value).click();
        }
    }
    gotoProfile() {
        this.navCtrl.navigateForward(['profile']);
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
            this.restService.getPrices(event, type).then((res) => {
                let basmatiColumns = res.prices.basmati;
                this.latestDateBasmati = res.latest;
                if (basmatiColumns != undefined) {
                    this.basmatiColumns = basmatiColumns;
                }
                let nonBasmati = res.prices["non_basmati"];
                if (nonBasmati != undefined) {
                    this.nonBasmatiColumns = nonBasmati;
                }
                this.lastupdatedDate = res.latestDate;
                resolve(res.prices);
            }, (err) => {
                reject(err);
            });
            // });
        });
    }
    AddData(fob, defuaultValue) {
        console.log(fob);
        // return (parseFloat(fob) + parseFloat(defuaultValue))
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
        if (this.currentPaidStatus == 'true') {
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
    getUSDPrices(userId) {
        this.componentService.presentLoading().then(() => {
            this.restService.getUSDPrice(userId).then((res) => {
                this.listBasmatiStates = Object.values(res.basmatiPrices);
                this.listNONBasmatiStates = Object.values(res.nonbasmatiPrices);
                this.defaultCIFPrice = parseFloat(res.defaultCIFPrice);
                this.defalutPort = res.defalutPort;
                this.lastupdatedDate = res.latestDate;
                localStorage.setItem('defalutPort', res.defalutPort);
                this.componentService.loadingController.dismiss();
            }, (err) => {
                this.componentService.loadingController.dismiss();
            });
        }).catch(() => {
            this.componentService.loadingController.dismiss();
        });
    }
    // getPriceNONBasmatiState(){
    // 	this.restService.getPriceNONBasmatiState().then((res:any) => {
    // 		this.listBasmatiStates = res;
    // 	} , (err:any) => {
    // 	} );
    // }
    changeAppType() {
        localStorage.setItem('apptype', 'OTHER');
        this.navCtrl.navigateForward(['prices']);
    }
    openQuality(id) {
        this.navCtrl.navigateForward(['quality-details', { riceQuality: id }]);
    }
    changeHeight() {
        if (this.height == true) {
            this.height = false;
        }
        else {
            this.height = true;
        }
    }
    gotoPlan() {
        console.log("iukhjik");
        this.navCtrl.navigateForward('planpage');
    }
};
PriceusdPage.ctorParameters = () => [
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
], PriceusdPage.prototype, "myContent", void 0);
PriceusdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-priceusd",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./priceusd.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/priceusd/priceusd.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./priceusd.page.scss */ "./src/app/priceusd/priceusd.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _components_service__WEBPACK_IMPORTED_MODULE_4__["ComponentsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _versionmodal_versionmodal_page__WEBPACK_IMPORTED_MODULE_9__["VersionmodalPage"]])
], PriceusdPage);



/***/ })

}]);
//# sourceMappingURL=priceusd-priceusd-module-es2015.js.map