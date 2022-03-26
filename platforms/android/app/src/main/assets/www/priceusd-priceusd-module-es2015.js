(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["priceusd-priceusd-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/priceusd/priceusd.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/priceusd/priceusd.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"content\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\" class=\"lightgreen\">\n  <div class=\"header-data green\"  style=\"min-height: 240px;\">\n        <div style=\"min-height: 80px\">\n            <ion-row >\n                <ion-col size=\"3\" align=\"center\">\n                    <div class=\"user-profile-icon\" (click)=\"gotoProfile()\">\n                        <span>{{ userFirstName | uppercase }}</span>\n                    </div>\n                </ion-col>\n                <ion-col size=\"6\" align=\"center\" class=\"font-lightgreen\">\n                    <!-- <h3>Dashboard</h3> -->\n                    <div *ngIf=\"restDays >= 0\">\n                        <p *ngIf=\"restDays <= 30\">\n                            {{restDays}} Days Left\n                        </p>\t\n                    </div>\n                    <p>\n                        <button (click)=\"showPaymentModel()\" *ngIf=\"restDays < 0\" style=\"color: #92b243; text-decoration: none; background: #fffbd6; padding: 5px; border-radius: 8px;\">Subscribe Now</button>\n                    </p>\n                </ion-col>\n                \n                <ion-col size=\"3\" align=\"right\" class=\"notification\" >\n                    <ion-icon name=\"refresh-outline\" (click)=\"refresh()\" style=\"font-size: 30px;\"></ion-icon>\n                    <ion-icon name=\"notifications\" (click)=\"getNotications()\" style=\"font-size: 30px;\"></ion-icon>\n                </ion-col>\n                \n            </ion-row>\n        </div>\n      <!-- <ion-row class=\"ion-padding title-padding \">\n          <ion-col class=\"title\" size=\"12\">\n              \n\n          </ion-col>\n      </ion-row> -->\n        <ion-row class=\"ion-padding rice-gallery\">\n            <ion-col>\n                <ion-slides pager=\"false\" [options]=\"slideOpts\">\n                    <ng-container *ngIf=\"currentPaidStatus == 'true'\">\n                        <ion-slide *ngFor=\"let slider of ImageGallerySlider\" (click)=\"showPaymentModel()\">\n                            <div class=\"background-image\">\n                                <img src=\"{{ imagePrefix }}uploads/gallery/{{ slider.attachment }}\" alt=\"\" style=\"width: 100%;height: 100%;\">\n                            </div>\n                        </ion-slide>\n                    </ng-container>\n                    <ng-container *ngIf=\"currentPaidStatus == 'false'\">\n                        <ion-slide *ngFor=\"let slider of ImageGallerySlider\" (click)=\"getGalleryData(slider.id)\">\n                            <div class=\"background-image\">\n                                <img src=\"{{ imagePrefix }}uploads/gallery/{{ slider.attachment }}\" alt=\"\" style=\"width: 100%;height: 100%;\">\n                            </div>\n                        </ion-slide>\n                    </ng-container>\n                </ion-slides>\n                <ion-row>\n                    <ion-col size=\"8\" style=\"text-align: right;margin-top: 5px;\">\n                        <img src=\"../../assets/sntc_rice_logo.png\" alt=\"\" style=\"width: 100px;margin-right: 1%;\">\n                       \n                    </ion-col>\n                    <ion-col size=\"4\" align=\"center\" class=\"notification\" >\n                        <ion-button (click)=\"changeAppType('OTHER')\"  size=\"small\" style=\"background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;margin-top: 7px;\">\n                            <p style=\"font-size: 11px;\">Prices in INR</p>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n  </div>\n\n  <div class=\"otherbackground\">\n        <div *ngIf=\"basmatiprice?.basmati != null\" style=\"text-align: right;\">\n            <span style=\"margin-right: 20px;font-size: 11px;\">last updated at: {{ lastupdatedDate }}</span>\n        </div>\n        <ion-row class=\"ion-padding title-padding \">\n            <ion-col class=\"title\" size=\"2.2\">\n                <img style=\"width: 40px;float: left\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n            </ion-col>\n            <ion-col class=\"title\" size=\"9.6\">\n                <h2 class=\"\" style=\"font-size: 17px; padding: 3px 7px; font-weight: bold\">\n                    Indian Basmati Live Price\n                </h2>\n            </ion-col>\n            <!-- <ion-col class=\"title\" size=\"2\">\n                <img style=\"width: 40px;float: left;\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n            </ion-col> -->\n        </ion-row>\n      <ion-row>\n          <p style=\"text-align: center;align-items: center;padding: 0;margin:0;width: 100%;\">(All Prices are in USD PMT)</p>\n      </ion-row>\n      \n      <ng-container *ngIf=\"listBasmatiStates == null\">\n          <div class=\"center\">\n              <p>No item found</p>\n          </div>\n      </ng-container>\n      \n      <ng-container *ngIf=\"listBasmatiStates != null\">\n          <ion-row class=\"ion-padding table-row padd-5\">\n              <ion-col class=\"price-table dashboard lightgreen\">\n                  <table class=\"table\" >\n                      <thead>\n                          <tr>\n\t\t\t\t\t\t\t<th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 45%\" >\n\t\t\t\t\t\t\t\t<ng-container   >\n\t\t\t\t\t\t\t\t\t<h6 class=\"black ricetype\" style=\"font-size: 13px;\">Quality</h6>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 60%\" >\n\t\t\t\t\t\t\t\t<ng-container  >\n\t\t\t\t\t\t\t\t\t<h4 class=\"black ricetype\" style=\"font-size: 13px;\">Packing</h4>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t  \t<th class=\"font-17 type-columns black\">\n                                  <ul class=\"table-filter\">\n                                      <li class=\"filter-content\" style=\"font-size: 13px;\">\n                                          FOB Mundra\n                                      </li>\n                                      <!-- <li class=\"filter\">\n                                          <ion-icon name=\"ellipsis-vertical-outline\" (click)=\"openPopup(convertToLowerCase(basmatiPrice.key))\"></ion-icon>\n                                          <div class=\"popover\" [id]=\"convertToLowerCase(basmatiPrice.key)\">\n                                              <ul>\n                                                  <li>\n                                                      <label for=\"price\"> Last price\n                                                      <input id=\"price\" class=\"priceRadio\" type=\"radio\" name=\"radio\" checked=\"checked\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_price')\"></label>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                  </li>\n                                                  <li>\n                                                      <label for=\"percentage\"> Percentage \n                                                      <input id=\"percentage\" type=\"radio\" name=\"radio\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_percentage')\"></label>\n                                                  </li>\n                                              </ul>\n                                          </div>\n                                      </li> -->\n                                  </ul>\n                              </th>\n\t\t\t\t\t\t\t  <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 60%\" >\n\t\t\t\t\t\t\t\t<ng-container  >\n\t\t\t\t\t\t\t\t\t<h4 class=\"black ricetype\" style=\"font-size: 13px;text-align: center;\">CIF <br> Jebel Ali </h4>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</th>\n                          </tr>\n                          <div class=\"popoverley\" (click)=\"removePopover()\"></div>\n                      </thead>\n                      <!-- <button id=\"getCurrentStatus\" style=\"height: 1px;width: 1px;color: red;background: transparent;padding: 0;margin: 0;\" (click)=\"getCurrentPaidStatus()\" ></button> -->\n                      <tbody >\n                        <tr *ngFor=\"let basmati of listBasmatiStates\" (click)=\"openQuality(basmati?.rice)\">\n                            <td class=\"sticky-col bg-transparent first-col left pl-10\"  >\n                                <p style=\"font-size: 19px; padding: 0px;margin: 0px;font-weight: bold;\">{{basmati?.quality}}</p>\n                                <p style=\"padding: 0px;margin: 0px;    font-size: 12px;\">{{basmati?.quality_name}}</p>\n                            </td>\n\n                            <td class=\"sticky-col bg-transparent first-col left pl-10\" style=\"font-size: 13px !important;font-weight: bold;\"  >\n                                50kg PP <img src=\"./../../assets/RINGH.png\" alt=\"\" style=\"width: 8px;transform: rotate(90deg);\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                            </td>\n                            <td class=\"type-columns\">\n                                <!-- <div class=\"priceVal\" style=\"font-size: 12px !important;\">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                                <div class=\"priceVal\" style=\"font-size: 12px !important;\">${{ basmati?.fobmin }}-{{ basmati?.fobmax }} </div> \n                            </td>\n\n                            <td class=\"type-columns\">\n                                <!-- <div class=\"priceVal\" style=\"font-size: 12px !important;\">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                                <div class=\"priceVal\" style=\"font-size: 12px !important;\">${{ ((basmati?.fobmin) + defaultCIFPrice) }}-{{ (basmati?.fobmax + defaultCIFPrice) }} <img src=\"./../../assets/RINGH.png\" alt=\"\" style=\"    width: 8px;transform: rotate(90deg);\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\"></div>\n                            </td>\n                        </tr>\n                      </tbody>\n                  </table>\n      \n              </ion-col>\n          </ion-row>\n      </ng-container>\n\n      <!-- non basmati -->\n      <ion-row class=\"ion-padding title-padding \">\n        <ion-col class=\"title\" size=\"2.2\">\n            <img style=\"width: 40px;float: left\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n          </ion-col>\n          <ion-col class=\"title\" size=\"9.6\">\n                <h2 class=\"\" style=\"font-size: 17px;float: left;padding: 3px 7px;font-weight: bold\">\n                    Indian Non-Basmati Live Price\n                </h2>\n          </ion-col>\n          <!-- <ion-col class=\"title\" size=\"2\">\n            <img style=\"width: 40px;float: left;\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n          </ion-col> -->\n    </ion-row>\n    \n    <ng-container *ngIf=\"listNONBasmatiStates == null\">\n        <div class=\"center\">\n            <p>No item found</p>\n        </div>\n    </ng-container>\n    \n    <ng-container *ngIf=\"listNONBasmatiStates != null\">\n        <ion-row class=\"ion-padding table-row padd-5\">\n            <ion-col class=\"price-table dashboard lightgreen\">\n                <table class=\"table\" >\n                    <thead>\n                        <tr>\n                          <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 45%\" >\n                              <ng-container   >\n                                  <h6 class=\"black ricetype\" style=\"font-size: 13px;\">Quality</h6>\n                              </ng-container>\n                          </th>\n                          <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 60%\" >\n                              <ng-container  >\n                                  <h4 class=\"black ricetype\" style=\"font-size: 13px;\">Packing</h4>\n                              </ng-container>\n                          </th>\n                          \n                            <th class=\"font-17 type-columns black\">\n                                <ul class=\"table-filter\">\n                                    <li class=\"filter-content\" style=\"font-size: 13px;\">\n                                        FOB Mundra\n                                    </li>\n                                    <!-- <li class=\"filter\">\n                                        <ion-icon name=\"ellipsis-vertical-outline\" (click)=\"openPopup(convertToLowerCase(basmatiPrice.key))\"></ion-icon>\n                                        <div class=\"popover\" [id]=\"convertToLowerCase(basmatiPrice.key)\">\n                                            <ul>\n                                                <li>\n                                                    <label for=\"price\"> Last price\n                                                    <input id=\"price\" class=\"priceRadio\" type=\"radio\" name=\"radio\" checked=\"checked\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_price')\"></label>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                </li>\n                                                <li>\n                                                    <label for=\"percentage\"> Percentage \n                                                    <input id=\"percentage\" type=\"radio\" name=\"radio\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_percentage')\"></label>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </li> -->\n                                </ul>\n                            </th>\n                            <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 60%\" >\n                              <ng-container  >\n                                  <h4 class=\"black ricetype\" style=\"font-size: 13px;text-align: center;\">CIF <br> Jebel Ali </h4>\n                              </ng-container>\n                          </th>\n                        </tr>\n                        <div class=\"popoverley\" (click)=\"removePopover()\"></div>\n                    </thead>\n                    <!-- <button id=\"getCurrentStatus\" style=\"height: 1px;width: 1px;color: red;background: transparent;padding: 0;margin: 0;\" (click)=\"getCurrentPaidStatus()\" ></button> -->\n                    <tbody >\n                      <tr *ngFor=\"let nonbasmati of listNONBasmatiStates\"  (click)=\"openQuality(nonbasmati?.rice)\">\n                          <td class=\"sticky-col bg-transparent first-col left pl-10\"  >\n                              <p style=\"font-size: 19px; padding: 0px;margin: 0px;font-weight: bold;\">{{nonbasmati?.quality}}</p>\n                              <p style=\"padding: 0px;margin: 0px;    font-size: 12px;\">{{nonbasmati?.quality_name}}</p>\n                          </td>\n\n                          <td class=\"sticky-col bg-transparent first-col left pl-10\" style=\"font-size: 13px !important;font-weight: bold;\"  >\n                              50kg PP <img src=\"./../../assets/RINGH.png\" alt=\"\" style=\"    width: 8px;transform: rotate(90deg);\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                          </td>\n                          <td class=\"type-columns\">\n                              <!-- <div class=\"priceVal\" style=\"font-size: 12px !important;\">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                              <div class=\"priceVal\" style=\"font-size: 12px !important;\">${{ nonbasmati?.fobmin }}-{{ nonbasmati?.fobmax }} </div> \n                          </td>\n\n                          <td class=\"type-columns\">\n                              <!-- <div class=\"priceVal\" style=\"font-size: 12px !important;\">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                              <div class=\"priceVal\" style=\"font-size: 12px !important;\">${{ ((nonbasmati?.fobmin) + defaultCIFPrice) }}-{{ (nonbasmati?.fobmax + defaultCIFPrice) }} <img src=\"./../../assets/RINGH.png\" alt=\"\" style=\"    width: 8px;transform: rotate(90deg);\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\"></div> \n                          </td>\n                      </tr>\n                    </tbody>\n                </table>\n    \n            </ion-col>\n        </ion-row>\n    </ng-container>\n  </div>\n    <app-menu></app-menu>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"GlacialIndifference-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('GlacialIndifference-Regular.otf');\n}\n@font-face {\n  font-family: \"GlacialIndifference-Italic\";\n  font-style: italic;\n  font-weight: normal;\n  src: url('GlacialIndifference-Italic.otf');\n}\nion-content {\n  --padding-bottom: 81px;\n}\n.user-profile-icon {\n  width: 50px;\n  background-color: #606060;\n  border-radius: 50px;\n  height: 50px;\n  line-height: 50px;\n  margin-left: 15px;\n  margin-top: 10px;\n  padding: 20;\n}\n.user-profile-icon span {\n  color: #FFF;\n  font-size: 30px;\n}\n.notification img {\n  width: 22px;\n  margin-right: 10px;\n  margin-top: 18px;\n}\n.notification ion-icon {\n  font-size: 38px;\n  margin-top: 15px;\n  margin-right: 10px;\n}\n.notification .badge {\n  background-color: #ad362d;\n  height: 17px;\n  width: 17px;\n  color: #FFF;\n  border-radius: 50px;\n  display: inline-block;\n  font-size: 12px;\n  text-align: center;\n  line-height: 17px;\n  right: 16px;\n  position: absolute;\n  top: 19px;\n}\n.slider img {\n  width: 80px;\n}\n.title-padding {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.title-padding h2 {\n  margin: 0px;\n}\n.priceData {\n  text-align: left;\n  margin-left: 10px;\n}\n.popoverley {\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999999;\n  display: none;\n}\n#brown_percentage {\n  display: none;\n}\n#creamy_sella_percentage {\n  display: none;\n}\n#golden_selle_percentage {\n  display: none;\n}\n#raw_percentage {\n  display: none;\n}\n#steam_percentage {\n  display: none;\n}\n.popover {\n  box-shadow: 2px 2px 9px 0px #888;\n  border-radius: 5px;\n  position: absolute;\n  right: 0;\n  z-index: 99999999;\n  background: #fff;\n  display: none;\n  height: 88px;\n  width: 150px;\n}\n.popover ul {\n  list-style: none;\n  padding: 0;\n  margin: 0px;\n}\n.popover ul li {\n  padding: 10px 10px;\n  text-align: left;\n}\n.popover ul li label {\n  font-size: 18px;\n}\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: #eeeeee !important;\n}\n.price-table table thead tr th {\n  background-color: #eeeeee !important;\n  border-right: 1px solid #dfdfdf;\n}\n.price-table table tbody tr {\n  height: 35px;\n}\n.price-table table tbody tr td {\n  font-size: 12px;\n  border-bottom: 1px solid #dfdfdf;\n  border-right: 1px solid #dfdfdf;\n}\n.table-row {\n  margin-top: 0px;\n  padding-top: 0px;\n}\n.table-row tr td {\n  text-align: center;\n}\n.wrapper {\n  position: relative;\n  overflow: auto;\n  padding: 0px;\n  box-shadow: 1px 4px 6px #CCC;\n  border-radius: 3px;\n}\n.sticky-col {\n  position: sticky;\n  position: -webkit-sticky;\n  background-color: white;\n  border-right: 1px solid #dfdfdf;\n  z-index: 99999;\n}\n.first-col {\n  width: auto;\n  min-width: 66px;\n  max-width: 100px;\n  left: 0px;\n  border-right: 1px solid #dfdfdf;\n}\n.second-col {\n  width: 150px;\n  min-width: 150px;\n  max-width: 150px;\n  left: 100px;\n}\n.red-price {\n  color: red;\n  font-weight: 600;\n}\n.green-price {\n  color: green;\n  font-weight: 600;\n}\n.black-price {\n  color: #000;\n  font-weight: 600;\n}\n.bg-white {\n  background-color: #FFF;\n}\n.transport-card {\n  margin-top: -5px;\n}\n.trasnport-image {\n  width: 50px;\n}\n.dotted-border {\n  border-bottom: 2px dotted #000;\n  margin: 19px auto;\n  width: 81%;\n}\n.transport-state {\n  margin-top: -10px;\n  display: block;\n  font-size: 13px;\n}\n.price-col {\n  color: #000;\n  font-size: 13px;\n  padding-top: 14px;\n}\n.transport-row {\n  border-bottom: 1px solid #CCC;\n}\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n.scroll-arrow {\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n.sntc-slider img {\n  width: 250px;\n  margin-top: 2px;\n  margin-left: -16px;\n}\n.sntc-slider h1 {\n  font-size: 37px;\n  margin: 0px;\n  padding: 0px;\n  margin-top: 25px;\n  color: green;\n}\n.sntc-slider p {\n  margin: 0px;\n  padding: 0px;\n}\n.type-columns {\n  min-width: 90px;\n}\n.slide-image {\n  width: 90%;\n  border-radius: 6px;\n}\n.rice-gallery {\n  padding-top: 0px;\n}\n.logo-text {\n  font-family: \"Monotype Corsiva\";\n}\n.header-segment {\n  height: 32px;\n  --padding-end: 0px;\n  margin-right: 0px;\n  margin: 0 auto;\n}\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 0px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  --min-width: auto;\n  min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n.header-segment ion-segment-button.segment-button-checked {\n  background: #92b244;\n  --background: #92b244;\n}\n.header-segment ion-segment-button.segment-button-checked ion-label {\n  margin: 0px;\n  padding: 0px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 100%;\n}\n.header-segment ion-label.sc-ion-label-md-s md {\n  font-size: 60%;\n}\n.header-segment ion-label {\n  margin: 0px;\n  padding: 0px;\n  color: #000;\n  font-weight: 600;\n  font-size: 100%;\n}\n.viewtrans {\n  height: 0px;\n  margin-top: 8px;\n  border-radius: 100px;\n  min-height: 36px;\n  margin-left: 2px;\n  margin-right: 2px;\n  box-shadow: -1px 1px 9px 0px #CCC;\n  width: 33%;\n  color: #000;\n  font-size: 12px;\n  text-decoration: none;\n  padding: 10px;\n}\n.center {\n  text-align: center;\n}\n.center p {\n  padding: 15px 0px 15px 0px;\n  margin: 0;\n  margin-bottom: 20px;\n}\n.rice-gallery {\n  padding-bottom: 0;\n}\n.pt0 {\n  padding-top: 0;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.pb0 {\n  padding-bottom: 0;\n}\n.scroll-arrow {\n  position: absolute;\n  margin-top: 1%;\n}\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n.ricetitle {\n  font-size: 27px;\n  font-family: Arial;\n  text-align: center;\n}\n.basmatiState {\n  margin: 0 30px;\n}\ntable {\n  width: 100%;\n}\ntable .right {\n  text-align: right;\n}\ntable .left {\n  text-align: left !important;\n}\n.pl-10 {\n  padding-left: 10px;\n}\n.p05 {\n  padding: 0px 5px;\n}\n.font-green {\n  color: #0DCC18;\n}\n.red {\n  color: #FB5000;\n}\n.grey {\n  color: grey;\n}\n.dashboard table,\n.dashboard thead,\n.dashboard th,\n.dashboard tr,\n.dashboard td,\n.dashboard td {\n  border: 0px;\n}\n.ricetype {\n  font-size: 30px;\n  font-family: Arial;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n  font-weight: bold;\n}\n.font-17 {\n  font-size: 14px;\n  font-family: Arial;\n}\n.font-14 {\n  font-size: 14px;\n}\n.right {\n  text-align: right !important;\n  padding-right: 10px !important;\n}\n.dashboard table tbody tr td {\n  font-size: 18px !important;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.padd-5 {\n  padding: 5px;\n}\n.pt-10 {\n  padding-top: 10px;\n}\n.pt-5 {\n  padding-top: 5px;\n}\n.table-filter {\n  list-style: none;\n  padding: 0;\n  display: inline-flex;\n  padding: 0px;\n  margin: 0px;\n}\n.table-filter .filter {\n  font-size: 20px;\n}\n.table-filter .filter-content {\n  margin-top: 3px;\n}\n.black {\n  color: #000;\n}\n.riceDisplayType .filterRice {\n  padding: 0;\n  margin: 0;\n  text-align: right;\n}\n.riceDisplayType ul {\n  padding: 0;\n  margin: 0;\n  display: inline-flex;\n  list-style: none;\n}\n.riceDisplayType ul li {\n  padding: 10px 20px;\n  border: 1px solid #ededed;\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 1px 7px 1px #ededed;\n  float: right;\n  display: none;\n}\n.riceDisplayType ul .show {\n  display: block;\n}\n.dashboard table thead,\n.dashboard table tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 2px solid #cfcaab !important;\n}\n.dashboard table thead tr,\n.dashboard table tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 2px solid #cfcaab !important;\n  font-family: \"GlacialIndifference-Regular\";\n}\n.dashboard table thead tr th,\n.dashboard table tbody tr th {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-right: 0px !important;\n}\n.dashboard table thead tr td,\n.dashboard table tbody tr td {\n  border-right: 0px !important;\n  font-size: 18px !important;\n}\n.percentage {\n  display: none;\n}\n.hide,\n.hidecontent {\n  display: none;\n}\n.show {\n  display: block;\n}\nion-segment ion-segment-button ion-label {\n  margin: 0 !important;\n  padding: 0 !important;\n  margin-top: -2px !important;\n}\n.background-image {\n  width: 100px;\n  height: 94px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.background-image img {\n  width: 100%;\n}\n.ios .header-segment {\n  height: 40px;\n}\n.ios .header-segment ion-segment-button {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9yaWNlX21vYmlsZS9zcmMvYXBwL3ByaWNldXNkL3ByaWNldXNkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJpY2V1c2QvcHJpY2V1c2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRFFBO0VBQ0kseUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUNOSjtBRFNBO0VBRUksc0JBQUE7QUNSSjtBRFdBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1JKO0FEU0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ1BSO0FEWUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1RSO0FEV0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1RSO0FEV0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNUUjtBRGlCSTtFQUNJLFdBQUE7QUNkUjtBRGtCQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNmSjtBRGdCSTtFQUNJLFdBQUE7QUNkUjtBRGtCQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNmSjtBRGtCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ2ZKO0FEa0JBO0VBQ0ksYUFBQTtBQ2ZKO0FEa0JBO0VBQ0ksYUFBQTtBQ2ZKO0FEa0JBO0VBQ0ksYUFBQTtBQ2ZKO0FEa0JBO0VBQ0ksYUFBQTtBQ2ZKO0FEa0JBO0VBQ0ksYUFBQTtBQ2ZKO0FEa0JBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNmSjtBRGdCSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNkUjtBRGVRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ2JaO0FEY1k7RUFDSSxlQUFBO0FDWmhCO0FEb0JJO0VBQ0ksV0FBQTtFQXNCQSxlQUFBO0FDdENSO0FEa0JZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ2hCaEI7QURpQmdCO0VBQ0ksb0NBQUE7RUFDQSwrQkFBQTtBQ2ZwQjtBRG9CWTtFQUNJLFlBQUE7QUNsQmhCO0FEbUJnQjtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FDakJwQjtBRHlCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ3RCSjtBRHdCUTtFQUNJLGtCQUFBO0FDdEJaO0FEMkJBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUN6Qko7QUQ0QkE7RUFDSSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUN6Qko7QUQ0QkE7RUFJSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0FDNUJKO0FEK0JBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDNUJKO0FEK0JBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDNUJKO0FEK0JBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDNUJKO0FEK0JBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDNUJKO0FEK0JBO0VBQ0ksc0JBQUE7QUM1Qko7QUQrQkE7RUFDSSxnQkFBQTtBQzVCSjtBRCtCQTtFQUNJLFdBQUE7QUM1Qko7QUQrQkE7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQzVCSjtBRCtCQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUM1Qko7QUQrQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDNUJKO0FEK0JBO0VBQ0ksNkJBQUE7QUM1Qko7QUQrQkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDNUJKO0FEK0JBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQzVCSjtBRGdDSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM3QlI7QUQrQkk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUM3QlI7QUQrQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQzdCUjtBRGlDQTtFQUtJLGVBQUE7QUNsQ0o7QURxQ0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNsQ0o7QURxQ0E7RUFDSSxnQkFBQTtBQ2xDSjtBRHFDQTtFQUNJLCtCQUFBO0FDbENKO0FEcUNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDbENKO0FEbUNJO0VBQ0kseUNBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ25DUjtBRHFDSTtFQUVJLG1CQUFBO0VBQ0EscUJBQUE7QUNwQ1I7QURxQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNuQ1o7QURzQ0k7RUFDSSxjQUFBO0FDcENSO0FEc0NJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDcENSO0FEd0NBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FDckNKO0FEd0NBO0VBQ0ksa0JBQUE7QUNyQ0o7QURzQ0k7RUFDSSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ3BDUjtBRHlDQTtFQUNJLGlCQUFBO0FDdENKO0FEeUNBO0VBQ0ksY0FBQTtBQ3RDSjtBRHlDQTtFQUNJLGdCQUFBO0FDdENKO0FEeUNBO0VBQ0ksaUJBQUE7QUN0Q0o7QUR5Q0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUN0Q0o7QUR1Q0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsUUFBQTtBQ3RDUjtBRHdDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxRQUFBO0FDdkNSO0FEMkNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxjQUFBO0FDeENKO0FEMkNBO0VBQ0ksV0FBQTtBQ3hDSjtBRHlDSTtFQUNJLGlCQUFBO0FDdkNSO0FEeUNJO0VBQ0ksMkJBQUE7QUN2Q1I7QUQyQ0E7RUFDSSxrQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLGdCQUFBO0FDeENKO0FEMkNBO0VBQ0ksY0FBQTtBQ3hDSjtBRDJDQTtFQUNJLGNBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxXQUFBO0FDeENKO0FEMkNBOzs7Ozs7RUFNSSxXQUFBO0FDeENKO0FEMkNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDeENKO0FEMkNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDeENKO0FEMkNBO0VBQ0ksZUFBQTtBQ3hDSjtBRDJDQTtFQUNJLDRCQUFBO0VBQ0EsOEJBQUE7QUN4Q0o7QUQyQ0E7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxZQUFBO0FDeENKO0FEMkNBO0VBQ0ksaUJBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxnQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUN4Q0o7QUR5Q0k7RUFDSSxlQUFBO0FDdkNSO0FEeUNJO0VBQ0ksZUFBQTtBQ3ZDUjtBRDJDQTtFQUNJLFdBQUE7QUN4Q0o7QUQ0Q0k7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDekNSO0FEMkNJO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDekNSO0FEMENRO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUN4Q1o7QUQwQ1E7RUFDSSxjQUFBO0FDeENaO0FEK0NROztFQUVJLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQ0FBQTtBQzVDWjtBRDZDWTs7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQ0FBQTtBQzFDaEI7QUQyQ2dCOztFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtBQ3hDcEI7QUQwQ2dCOztFQUNJLDRCQUFBO0VBQ0EsMEJBQUE7QUN2Q3BCO0FEOENBO0VBQ0ksYUFBQTtBQzNDSjtBRDhDQTs7RUFFSSxhQUFBO0FDM0NKO0FEOENBO0VBQ0ksY0FBQTtBQzNDSjtBRGdEUTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQzdDWjtBRGtEQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQy9DSjtBRGdESTtFQUNJLFdBQUE7QUM5Q1I7QURrREk7RUFDSSxZQUFBO0FDL0NSO0FEZ0RRO0VBQ0ksa0JBQUE7QUM5Q1oiLCJmaWxlIjoic3JjL2FwcC9wcmljZXVzZC9wcmljZXVzZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0dsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhcic7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9nbGFjaWFsL0dsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhci5vdGYnKTtcbn1cblxuLy8gQGZvbnQtZmFjZSB7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4vLyAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvZ2xhY2lhbC9BcmlhbC5vdGYnKTtcbi8vIH1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnR2xhY2lhbEluZGlmZmVyZW5jZS1JdGFsaWMnO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvZ2xhY2lhbC9HbGFjaWFsSW5kaWZmZXJlbmNlLUl0YWxpYy5vdGYnKTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC8vIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDgxcHg7XG59XG5cbi51c2VyLXByb2ZpbGUtaWNvbiB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjA2MDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwO1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICB9XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLmJhZGdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FkMzYyZDtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDE5cHg7XG4gICAgfVxufVxuXG4uc2xpZGVyIHtcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgIH1cbn1cblxuLnRpdGxlLXBhZGRpbmcge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbn1cblxuLnByaWNlRGF0YSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnBvcG92ZXJsZXkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNicm93bl9wZXJjZW50YWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jY3JlYW15X3NlbGxhX3BlcmNlbnRhZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNnb2xkZW5fc2VsbGVfcGVyY2VudGFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI3Jhd19wZXJjZW50YWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jc3RlYW1fcGVyY2VudGFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBvcG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggOXB4IDBweCAjODg4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogOTk5OTk5OTk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGhlaWdodDogODhweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wcmljZS10YWJsZSB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxufVxuXG4udGFibGUtcm93IHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICB0ciB7XG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLndyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBib3gtc2hhZG93OiAxcHggNHB4IDZweCAjQ0NDO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnN0aWNreS1jb2wge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgei1pbmRleDogOTk5OTk7XG59XG5cbi5maXJzdC1jb2wge1xuICAgIC8vIHdpZHRoOiA5MHB4O1xuICAgIC8vIG1pbi13aWR0aDogMTAwcHg7XG4gICAgLy8gbWF4LXdpZHRoOiAxMDBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IDY2cHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cblxuLnNlY29uZC1jb2wge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbGVmdDogMTAwcHg7XG59XG5cbi5yZWQtcHJpY2Uge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmdyZWVuLXByaWNlIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJsYWNrLXByaWNlIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYmctd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbi50cmFuc3BvcnQtY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnRyYXNucG9ydC1pbWFnZSB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5kb3R0ZWQtYm9yZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggZG90dGVkICMwMDA7XG4gICAgbWFyZ2luOiAxOXB4IGF1dG87XG4gICAgd2lkdGg6IDgxJTtcbn1cblxuLnRyYW5zcG9ydC1zdGF0ZSB7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucHJpY2UtY29sIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDE0cHg7XG59XG5cbi50cmFuc3BvcnQtcm93IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbn1cblxuLnJpcHBsZS1wYXJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNudGMtc2xpZGVyIHtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzdweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG59XG5cbi50eXBlLWNvbHVtbnMge1xuICAgIC8vIHdpZHRoOiAzMDBweDtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAvLyBtaW4td2lkdGg6IDEyMHB4O1xuICAgIC8vIG1pbi13aWR0aDogNzVweDtcbiAgICBtaW4td2lkdGg6IDkwcHg7XG59XG5cbi5zbGlkZS1pbWFnZSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5yaWNlLWdhbGxlcnkge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5sb2dvLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9ub3R5cGUgQ29yc2l2YSc7XG59XG5cbi5oZWFkZXItc2VnbWVudCB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzMXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgLS13aWR0aDogYXV0bztcbiAgICAgICAgLS1taW4td2lkdGg6IGF1dG87XG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0MztcbiAgICB9XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTJiMjQ0O1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM5MmIyNDQ7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tbGFiZWwuc2MtaW9uLWxhYmVsLW1kLXMgbWQge1xuICAgICAgICBmb250LXNpemU6IDYwJTtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB9XG59XG5cbi52aWV3dHJhbnMge1xuICAgIGhlaWdodDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgIHdpZHRoOiAzMyU7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gICAgfVxufVxuXG4ucmljZS1nYWxsZXJ5IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnB0MCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5tdC0yMCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnBiMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5zY3JvbGwtYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICAubGVmdGljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIHRvcDogMHB4O1xuICAgIH1cbiAgICAucmlnaHRpY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgei1pbmRleDogOTk5OTk5O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgfVxufVxuXG4ucmljZXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4uYmFzbWF0aVN0YXRlIHtcbiAgICBtYXJnaW46IDAgMzBweFxufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLnJpZ2h0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC5sZWZ0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnBsLTEwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5wMDUge1xuICAgIHBhZGRpbmc6IDBweCA1cHg7XG59XG5cbi5mb250LWdyZWVuIHtcbiAgICBjb2xvcjogIzBEQ0MxODtcbn1cblxuLnJlZCB7XG4gICAgY29sb3I6ICNGQjUwMDA7XG59XG5cbi5ncmV5IHtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuLmRhc2hib2FyZCB0YWJsZSxcbi5kYXNoYm9hcmQgdGhlYWQsXG4uZGFzaGJvYXJkIHRoLFxuLmRhc2hib2FyZCB0cixcbi5kYXNoYm9hcmQgdGQsXG4uZGFzaGJvYXJkIHRkIHtcbiAgICBib3JkZXI6IDBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkXG59XG5cbi5mb250LTE3IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xufVxuXG4uZm9udC0xNCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50XG59XG5cbi5kYXNoYm9hcmQgdGFibGUgdGJvZHkgdHIgdGQge1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucGFkZC01IHtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wdC0xMCB7XG4gICAgcGFkZGluZy10b3A6IDEwcHhcbn1cblxuLnB0LTUge1xuICAgIHBhZGRpbmctdG9wOiA1cHhcbn1cblxuLnRhYmxlLWZpbHRlciB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICAuZmlsdGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuZmlsdGVyLWNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHhcbiAgICB9XG59XG5cbi5ibGFjayB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5yaWNlRGlzcGxheVR5cGUge1xuICAgIC5maWx0ZXJSaWNlIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMXB4IDdweCAxcHggI2VkZWRlZDtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnNob3cge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kYXNoYm9hcmQge1xuICAgIHRhYmxlIHtcbiAgICAgICAgdGhlYWQsXG4gICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhcic7XG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucGVyY2VudGFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGUsXG4uaGlkZWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDk0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbi5pb3N7XG4gICAgLmhlYWRlci1zZWdtZW50e1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvZ2xhY2lhbC9HbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXIub3RmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdsYWNpYWxJbmRpZmZlcmVuY2UtSXRhbGljXCI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvZ2xhY2lhbC9HbGFjaWFsSW5kaWZmZXJlbmNlLUl0YWxpYy5vdGZcIik7XG59XG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDgxcHg7XG59XG5cbi51c2VyLXByb2ZpbGUtaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMjA7XG59XG4udXNlci1wcm9maWxlLWljb24gc3BhbiB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5ub3RpZmljYXRpb24gaW1nIHtcbiAgd2lkdGg6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cbi5ub3RpZmljYXRpb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDM4cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ub3RpZmljYXRpb24gLmJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkMzYyZDtcbiAgaGVpZ2h0OiAxN3B4O1xuICB3aWR0aDogMTdweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICByaWdodDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE5cHg7XG59XG5cbi5zbGlkZXIgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi50aXRsZS1wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi50aXRsZS1wYWRkaW5nIGgyIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5wcmljZURhdGEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnBvcG92ZXJsZXkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2Jyb3duX3BlcmNlbnRhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jY3JlYW15X3NlbGxhX3BlcmNlbnRhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZ29sZGVuX3NlbGxlX3BlcmNlbnRhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jcmF3X3BlcmNlbnRhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jc3RlYW1fcGVyY2VudGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wb3BvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA5cHggMHB4ICM4ODg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5OTk5OTk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogODhweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLnBvcG92ZXIgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDBweDtcbn1cbi5wb3BvdmVyIHVsIGxpIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnBvcG92ZXIgdWwgbGkgbGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wcmljZS10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIge1xuICBoZWlnaHQ6IDM0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cblxuLnRhYmxlLXJvdyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cbi50YWJsZS1yb3cgdHIgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2hhZG93OiAxcHggNHB4IDZweCAjQ0NDO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5zdGlja3ktY29sIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgei1pbmRleDogOTk5OTk7XG59XG5cbi5maXJzdC1jb2wge1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiA2NnB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG5cbi5zZWNvbmQtY29sIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBsZWZ0OiAxMDBweDtcbn1cblxuLnJlZC1wcmljZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ncmVlbi1wcmljZSB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJsYWNrLXByaWNlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbi50cmFuc3BvcnQtY2FyZCB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi50cmFzbnBvcnQtaW1hZ2Uge1xuICB3aWR0aDogNTBweDtcbn1cblxuLmRvdHRlZC1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAycHggZG90dGVkICMwMDA7XG4gIG1hcmdpbjogMTlweCBhdXRvO1xuICB3aWR0aDogODElO1xufVxuXG4udHJhbnNwb3J0LXN0YXRlIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5wcmljZS1jb2wge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogMTRweDtcbn1cblxuLnRyYW5zcG9ydC1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbn1cblxuLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zY3JvbGwtYXJyb3cge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc250Yy1zbGlkZXIgaW1nIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbn1cbi5zbnRjLXNsaWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMzdweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgY29sb3I6IGdyZWVuO1xufVxuLnNudGMtc2xpZGVyIHAge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udHlwZS1jb2x1bW5zIHtcbiAgbWluLXdpZHRoOiA5MHB4O1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5yaWNlLWdhbGxlcnkge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ubG9nby10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3R5cGUgQ29yc2l2YVwiO1xufVxuXG4uaGVhZGVyLXNlZ21lbnQge1xuICBoZWlnaHQ6IDMycHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtaW4taGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgd2lkdGg6IGF1dG87XG4gIC0td2lkdGg6IGF1dG87XG4gIC0tbWluLXdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IGF1dG87XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG4uaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjOTJiMjQ0O1xuICAtLWJhY2tncm91bmQ6ICM5MmIyNDQ7XG59XG4uaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cbi5oZWFkZXItc2VnbWVudCBpb24tbGFiZWwuc2MtaW9uLWxhYmVsLW1kLXMgbWQge1xuICBmb250LXNpemU6IDYwJTtcbn1cbi5oZWFkZXItc2VnbWVudCBpb24tbGFiZWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4udmlld3RyYW5zIHtcbiAgaGVpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gIHdpZHRoOiAzMyU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jZW50ZXIgcCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5yaWNlLWdhbGxlcnkge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnB0MCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubXQtMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucGIwIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5zY3JvbGwtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuLnNjcm9sbC1hcnJvdyAubGVmdGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHRvcDogMHB4O1xufVxuLnNjcm9sbC1hcnJvdyAucmlnaHRpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogOTk5OTk5O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMnB4O1xuICB3aWR0aDogMThweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5yaWNldGl0bGUge1xuICBmb250LXNpemU6IDI3cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFzbWF0aVN0YXRlIHtcbiAgbWFyZ2luOiAwIDMwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSAucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbnRhYmxlIC5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4ucGwtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5wMDUge1xuICBwYWRkaW5nOiAwcHggNXB4O1xufVxuXG4uZm9udC1ncmVlbiB7XG4gIGNvbG9yOiAjMERDQzE4O1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNGQjUwMDA7XG59XG5cbi5ncmV5IHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5kYXNoYm9hcmQgdGFibGUsXG4uZGFzaGJvYXJkIHRoZWFkLFxuLmRhc2hib2FyZCB0aCxcbi5kYXNoYm9hcmQgdHIsXG4uZGFzaGJvYXJkIHRkLFxuLmRhc2hib2FyZCB0ZCB7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvbnQtMTcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLmZvbnQtMTQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5wYWRkLTUge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wdC0xMCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ucHQtNSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi50YWJsZS1maWx0ZXIge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi50YWJsZS1maWx0ZXIgLmZpbHRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi50YWJsZS1maWx0ZXIgLmZpbHRlci1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uYmxhY2sge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnJpY2VEaXNwbGF5VHlwZSAuZmlsdGVyUmljZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucmljZURpc3BsYXlUeXBlIHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5yaWNlRGlzcGxheVR5cGUgdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDJweCAxcHggN3B4IDFweCAjZWRlZGVkO1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucmljZURpc3BsYXlUeXBlIHVsIC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kYXNoYm9hcmQgdGFibGUgdGhlYWQsXG4uZGFzaGJvYXJkIHRhYmxlIHRib2R5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQgdGFibGUgdGhlYWQgdHIsXG4uZGFzaGJvYXJkIHRhYmxlIHRib2R5IHRyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyXCI7XG59XG4uZGFzaGJvYXJkIHRhYmxlIHRoZWFkIHRyIHRoLFxuLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB0ciB0aCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGFzaGJvYXJkIHRhYmxlIHRoZWFkIHRyIHRkLFxuLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4ucGVyY2VudGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRlLFxuLmhpZGVjb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0ycHggIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogOTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iYWNrZ3JvdW5kLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW9zIC5oZWFkZXItc2VnbWVudCB7XG4gIGhlaWdodDogNDBweDtcbn1cbi5pb3MgLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

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
        console.log(typeof localStorage.getItem('isExpired'));
        if (localStorage.getItem('isExpired') == 'true') {
            this.navCtrl.navigateRoot('planpage', { animationDirection: 'forward' });
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
        this.componentService.differanceTwoDate(todayDate, ExpiredDateDate).then((res) => {
            this.restDays = res;
        });
        this.componentService.isUserExpired.subscribe((res) => {
            this.currentPaidStatus = res;
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
    }
    ionViewDidLoad() {
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
        if (this.route.url == "/prices") {
            console.log(localStorage.getItem("popupCanceled"));
            if (localStorage.getItem("popupCanceled") == null) {
                this.myVar = setTimeout(() => {
                    this.showCOntactModal();
                }, 30000);
            }
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
            localStorage.setItem('expired_on', res.data);
            this.componentService.compareTwoDates(localStorage.getItem('expired_on'));
        }, (err) => {
        });
        this.imagePrefix = this.restService.imageUrl;
        this.getSlider();
        this.username = localStorage.getItem("name");
        this.userFirstName = localStorage.getItem("name")[0];
        // this.getBasmatiState();
        // this.getNONBasmatiState();
        // this.getPlans();
        this.getUSDPrices();
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
        this.restService.getLatestVersion().then((res) => {
            console.log(res.data.version);
            let elemem = this;
            if ('1.0.0' != res.data.version) {
                setTimeout(function () { elemem.showVersionModal(); }, 8000);
            }
        }, (err) => {
            console.log(err);
        }).catch((err) => {
            console.log(err);
        });
    }
    refresh() {
        // this.getBasmatiState();
        // this.getNONBasmatiState();
        // this.getPlans();
        this.getUSDPrices();
    }
    ngOnInit() {
        this.platform.ready().then(() => {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#brown_percentage").css({ display: "none" });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#creamy_sella_percentage").css({ display: "none" });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#golden_selle_percentage").css({ display: "none" });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#raw_percentage").css({ display: "none" });
            jquery__WEBPACK_IMPORTED_MODULE_5__("#steam_percentage").css({ display: "none" });
            let api = this.restService;
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
                console.log('res here');
                console.log(res);
                this.componentService.loadingController.dismiss();
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
        this.navCtrl.navigateForward(['profile']);
    }
    changeStateNONBasmati(event) {
        this.selectedNONBasmatiState = event.detail.value;
        this.selectedBasmatiState = event.detail.value;
        this.fetchRiceForm(event.detail.value, "non-basmati").then((res) => {
            // this.componentService.loadingController.dismiss();
            console.log(res);
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
                this.lastupdatedDate = res.latest;
                console.log("here data");
                // this.componentService.loadingController.dismiss();
                resolve(res.prices);
            }, (err) => {
                reject(err);
                // this.componentService.loadingController.dismiss();
            });
            // });
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
        if (this.currentPaidStatus == 'true') {
            this.showPaymentModel();
        }
        else {
            console.log(riceName);
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
    getUSDPrices() {
        this.restService.getUSDPrice().then((res) => {
            this.listBasmatiStates = Object.values(res.basmatiPrices);
            this.listNONBasmatiStates = Object.values(res.nonbasmatiPrices);
            this.defaultCIFPrice = parseFloat(res.defaultCIFPrice);
        }, (err) => {
        });
    }
    // getPriceNONBasmatiState(){
    // 	this.restService.getPriceNONBasmatiState().then((res:any) => {
    // 		this.listBasmatiStates = res;
    // 	} , (err:any) => {
    // 	} );
    // }
    changeAppType() {
        // console.log("jk");
        localStorage.setItem('apptype', 'OTHER');
        this.navCtrl.navigateForward(['prices']);
    }
    openQuality(id) {
        this.navCtrl.navigateForward(['quality-details', { riceQuality: id }]);
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