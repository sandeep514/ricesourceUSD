function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["priceusd-priceusd-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/priceusd/priceusd.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/priceusd/priceusd.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPriceusdPriceusdPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content id=\"content\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\" class=\"lightgreen\">\n  <div class=\"header-data green\"  style=\"min-height: 240px;\">\n        <div style=\"min-height: 80px\">\n            <ion-row >\n                <ion-col size=\"3\" align=\"center\">\n                    <div class=\"user-profile-icon\" (click)=\"gotoProfile()\">\n                        <span>{{ userFirstName | uppercase }}</span>\n                    </div>\n                </ion-col>\n                <ion-col size=\"6\" align=\"center\" class=\"font-lightgreen\">\n                    <!-- <h3>Dashboard</h3> -->\n                    <div *ngIf=\"restDays >= 0\">\n                        <p *ngIf=\"restDays <= 30\">\n                            {{restDays}} Days Left\n                        </p>\t\n                    </div>\n                    <p>\n                        <button (click)=\"showPaymentModel()\" *ngIf=\"restDays < 0\" style=\"color: #92b243; text-decoration: none; background: #fffbd6; padding: 5px; border-radius: 8px;\">Subscribe Now</button>\n                    </p>\n                </ion-col>\n                \n                <ion-col size=\"3\" align=\"right\" class=\"notification\" >\n                    <ion-icon name=\"refresh-outline\" (click)=\"refresh()\" style=\"font-size: 30px;\"></ion-icon>\n                    <ion-icon name=\"notifications\" (click)=\"getNotications()\" style=\"font-size: 30px;\"></ion-icon>\n                </ion-col>\n                \n            </ion-row>\n        </div>\n      <!-- <ion-row class=\"ion-padding title-padding \">\n          <ion-col class=\"title\" size=\"12\">\n              \n\n          </ion-col>\n      </ion-row> -->\n        <ion-row class=\"ion-padding rice-gallery\">\n            <ion-col>\n                <ion-slides pager=\"false\" [options]=\"slideOpts\">\n                    <ng-container *ngIf=\"currentPaidStatus == 'true'\">\n                        <ion-slide *ngFor=\"let slider of ImageGallerySlider\" (click)=\"showPaymentModel()\">\n                            <div class=\"background-image\">\n                                <img src=\"{{ imagePrefix }}uploads/gallery/{{ slider.attachment }}\" alt=\"\" style=\"width: 100%;height: 100%;\">\n                            </div>\n                        </ion-slide>\n                    </ng-container>\n                    <ng-container *ngIf=\"currentPaidStatus == 'false'\">\n                        <ion-slide *ngFor=\"let slider of ImageGallerySlider\" (click)=\"getGalleryData(slider.id)\">\n                            <div class=\"background-image\">\n                                <img src=\"{{ imagePrefix }}uploads/gallery/{{ slider.attachment }}\" alt=\"\" style=\"width: 100%;height: 100%;\">\n                            </div>\n                        </ion-slide>\n                    </ng-container>\n                </ion-slides>\n                <ion-row>\n                    <ion-col size=\"8\" style=\"text-align: right;margin-top: 5px;\">\n                        <img src=\"../../assets/sntc_rice_logo.png\" alt=\"\" style=\"width: 100px;margin-right: 1%;\">\n                       \n                    </ion-col>\n                    <ion-col size=\"4\" align=\"center\" class=\"notification\" >\n                        <ion-button (click)=\"changeAppType('OTHER')\"  size=\"small\" style=\"background-color: #fffbd6;--background: #fffbd6;border-radius: 5px;margin-top: 7px;\">\n                            <p style=\"font-size: 11px;\">Prices in INR</p>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n  </div>\n\n  <div class=\"otherbackground\">\n        <div *ngIf=\"lastupdatedDate != null\" style=\"text-align: right;\">\n            <span style=\"margin-right: 20px;font-size: 11px;\">last updated at: {{ lastupdatedDate }}</span>\n        </div>\n        <ion-row class=\"ion-padding title-padding \">\n            <ion-col class=\"title\" size=\"2.2\">\n                <img style=\"width: 40px;float: left\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n            </ion-col>\n            <ion-col class=\"title\" size=\"9.6\">\n                <h2 class=\"\" style=\"font-size: 17px; padding: 3px 7px; font-weight: bold\">\n                    Indian Basmati Live Price\n                </h2>\n            </ion-col>\n            <!-- <ion-col class=\"title\" size=\"2\">\n                <img style=\"width: 40px;float: left;\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n            </ion-col> -->\n        </ion-row>\n      <ion-row>\n          <p style=\"text-align: center;align-items: center;padding: 0;margin:0;width: 100%;\">(All Prices are in USD PMT)</p>\n      </ion-row>\n      \n      <ng-container *ngIf=\"listBasmatiStates == null\">\n          <div class=\"center\">\n              <p>No item found</p>\n          </div>\n      </ng-container>\n      \n      <ng-container *ngIf=\"listBasmatiStates != null\" style=\"padding-bottom: 20px;margin-bottom: 30px;\">\n          <ion-row class=\"ion-padding table-row padd-5\" [ngClass]=\"(height==true)?'height200':'heightAuto'\">\n              <ion-col class=\"price-table dashboard lightgreen\">\n                  <table class=\"table\" >\n                      <thead>\n                          <tr>\n\t\t\t\t\t\t\t<th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 45%\" >\n\t\t\t\t\t\t\t\t<ng-container   >\n\t\t\t\t\t\t\t\t\t<h6 class=\"black ricetype\" style=\"font-size: 13px;\">Quality</h6>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 60%\" >\n\t\t\t\t\t\t\t\t<ng-container  >\n\t\t\t\t\t\t\t\t\t<h4 class=\"black ricetype\" style=\"font-size: 13px;\">Packing</h4>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t  \t<th class=\"font-17 type-columns black\">\n                                  <ul class=\"table-filter\">\n                                      <li class=\"filter-content\" style=\"font-size: 13px;\">\n                                          FOB Mundra\n                                      </li>\n                                      <!-- <li class=\"filter\">\n                                          <ion-icon name=\"ellipsis-vertical-outline\" (click)=\"openPopup(convertToLowerCase(basmatiPrice.key))\"></ion-icon>\n                                          <div class=\"popover\" [id]=\"convertToLowerCase(basmatiPrice.key)\">\n                                              <ul>\n                                                  <li>\n                                                      <label for=\"price\"> Last price\n                                                      <input id=\"price\" class=\"priceRadio\" type=\"radio\" name=\"radio\" checked=\"checked\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_price')\"></label>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                  </li>\n                                                  <li>\n                                                      <label for=\"percentage\"> Percentage \n                                                      <input id=\"percentage\" type=\"radio\" name=\"radio\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_percentage')\"></label>\n                                                  </li>\n                                              </ul>\n                                          </div>\n                                      </li> -->\n                                  </ul>\n                              </th>\n\t\t\t\t\t\t\t  <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 60%\" >\n\t\t\t\t\t\t\t\t<ng-container  >\n\t\t\t\t\t\t\t\t\t<h4 class=\"black ricetype\" style=\"font-size: 13px;text-align: center;\">CIF <br> Jebel Ali </h4>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</th>\n                          </tr>\n                          <div class=\"popoverley\" (click)=\"removePopover()\"></div>\n                      </thead>\n                      <!-- <button id=\"getCurrentStatus\" style=\"height: 1px;width: 1px;color: red;background: transparent;padding: 0;margin: 0;\" (click)=\"getCurrentPaidStatus()\" ></button> -->\n                      <tbody >\n                        <tr *ngFor=\"let basmati of listBasmatiStates\" (click)=\"openQuality(basmati?.rice)\">\n                            <td class=\"sticky-col bg-transparent first-col left pl-10\"  >\n                                <p style=\"font-size: 19px; padding: 0px;margin: 0px;font-weight: bold;\">{{basmati?.quality}}</p>\n                                <p style=\"padding: 0px;margin: 0px;font-size: 13px;\">{{basmati?.quality_name}}</p>\n                            </td>\n\n                            <td class=\"sticky-col bg-transparent first-col left pl-10\" style=\"font-size: 13px !important;font-weight: bold;\"  >\n                                50kg PP <img src=\"./../../assets/RINGH.png\" alt=\"\" style=\"width: 8px;transform: rotate(90deg);\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                            </td>\n                            <td class=\"type-columns\">\n                                <!-- <div class=\"priceVal\" style=\"font-size: 13px !important;\">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                                <div class=\"priceVal\" style=\"font-size: 13px !important; font-weight: bold;\" [ngClass]=\"basmati?.color_status == 3 ? 'black-price' : basmati?.color_status == 2 ? 'red-price' : 'green-price' \">${{ basmati?.fobmin }}-{{ basmati?.fobmax }} </div> \n                            </td>\n\n                            <td class=\"type-columns\">\n                                <!-- <div class=\"priceVal\" style=\"font-size: 13px !important; font-weight: bold;\" [ngClass]=\"basmati?.color_status == 3 ? 'black-price' : basmati?.color_status == 2 ? 'red-price' : 'green-price' \">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                                <div class=\"priceVal\" style=\"font-size: 13px !important; font-weight: bold;\" [ngClass]=\"basmati?.color_status == 3 ? 'black-price' : basmati?.color_status == 2 ? 'red-price' : 'green-price' \">${{ ((basmati?.fobmin) + defaultCIFPrice) }}-{{ (basmati?.fobmax + defaultCIFPrice) }} <img src=\"./../../assets/RINGH.png\" alt=\"\" style=\"    width: 8px;transform: rotate(90deg);\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\"></div>\n                            </td>\n                        </tr>\n                      </tbody>\n                  </table>\n      \n              </ion-col>\n          </ion-row>\n          <ion-row style=\"justify-content: center;margin: 0 auto;width: 100%;z-index: 99999999;\">\n              <button (click)=\"changeHeight()\" style=\"font-size: 35px;padding: 0;margin: 0;border-radius: 0px 0px 10px 10px;height: 35px;width: 100px;background-color: #92b243;\">\n                <ion-icon name=\"chevron-up-outline\" style=\"background: #92b243;overflow: hidden;border-radius: 100px;font-size: 30px;padding: 0;margin: 0;border-radius: 100px;height: 35px;\"></ion-icon>\n              </button>\n          </ion-row>\n      </ng-container>\n\n        <div style=\"margin-top: 20px\">\n            <!-- non basmati -->\n            <ion-row class=\"ion-padding title-padding \">\n                <ion-col class=\"title\" size=\"2.2\">\n                    <img style=\"width: 40px;float: left\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                </ion-col>\n                <ion-col class=\"title\" size=\"9.6\">\n                        <h2 class=\"\" style=\"font-size: 17px;float: left;padding: 3px 7px;font-weight: bold\">\n                            Indian Non-Basmati Live Price\n                        </h2>\n                </ion-col>\n                <!-- <ion-col class=\"title\" size=\"2\">\n                    <img style=\"width: 40px;float: left;\" src=\"./../../assets/img/1350px-Flag_of_India.svg.webp\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                </ion-col> -->\n            </ion-row>\n            \n            <ng-container *ngIf=\"listNONBasmatiStates == null\">\n                <div class=\"center\">\n                    <p>No item found</p>\n                </div>\n            </ng-container>\n            \n            <ng-container *ngIf=\"listNONBasmatiStates != null\">\n                <ion-row class=\"ion-padding table-row padd-5\">\n                    <ion-col class=\"price-table dashboard lightgreen\">\n                        <table class=\"table\" >\n                            <thead>\n                                <tr>\n                                <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 45%\" >\n                                    <ng-container   >\n                                        <h6 class=\"black ricetype\" style=\"font-size: 13px;\">Quality</h6>\n                                    </ng-container>\n                                </th>\n                                <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 60%\" >\n                                    <ng-container  >\n                                        <h4 class=\"black ricetype\" style=\"font-size: 13px;\">Packing</h4>\n                                    </ng-container>\n                                </th>\n                                \n                                    <th class=\"font-17 type-columns black\">\n                                        <ul class=\"table-filter\">\n                                            <li class=\"filter-content\" style=\"font-size: 13px;\">\n                                                FOB Mundra\n                                            </li>\n                                            <!-- <li class=\"filter\">\n                                                <ion-icon name=\"ellipsis-vertical-outline\" (click)=\"openPopup(convertToLowerCase(basmatiPrice.key))\"></ion-icon>\n                                                <div class=\"popover\" [id]=\"convertToLowerCase(basmatiPrice.key)\">\n                                                    <ul>\n                                                        <li>\n                                                            <label for=\"price\"> Last price\n                                                            <input id=\"price\" class=\"priceRadio\" type=\"radio\" name=\"radio\" checked=\"checked\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_price')\"></label>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                        </li>\n                                                        <li>\n                                                            <label for=\"percentage\"> Percentage \n                                                            <input id=\"percentage\" type=\"radio\" name=\"radio\" (click)=\"changeState(convertToLowerCase(basmatiPrice.key)+'_percentage')\"></label>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </li> -->\n                                        </ul>\n                                    </th>\n                                    <th class=\"sticky-col bg-lightgreen first-col left pl-10\" style=\"width: 60%\" >\n                                    <ng-container  >\n                                        <h4 class=\"black ricetype\" style=\"font-size: 13px;text-align: center;\">CIF <br> Jebel Ali </h4>\n                                    </ng-container>\n                                </th>\n                                </tr>\n                                <div class=\"popoverley\" (click)=\"removePopover()\"></div>\n                            </thead>\n                            <!-- <button id=\"getCurrentStatus\" style=\"height: 1px;width: 1px;color: red;background: transparent;padding: 0;margin: 0;\" (click)=\"getCurrentPaidStatus()\" ></button> -->\n                            <tbody >\n                            <tr *ngFor=\"let nonbasmati of listNONBasmatiStates\"  (click)=\"openQuality(nonbasmati?.rice)\">\n                                <td class=\"sticky-col bg-transparent first-col left pl-10\"  >\n                                    <p style=\"font-size: 19px; padding: 0px;margin: 0px;font-weight: bold;\">{{nonbasmati?.quality}}</p>\n                                    <p style=\"padding: 0px;margin: 0px;    font-size: 13px;\">{{nonbasmati?.quality_name}}</p>\n                                </td>\n\n                                <td class=\"sticky-col bg-transparent first-col left pl-10\" style=\"font-size: 13px !important;font-weight: bold;\"  >\n                                    50kg PP <img src=\"./../../assets/RINGH.png\" alt=\"\" style=\"    width: 8px;transform: rotate(90deg);\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n                                </td>\n                                <td class=\"type-columns\">\n                                    <!-- <div class=\"priceVal\" style=\"font-size: 13px !important;\">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                                    <div class=\"priceVal\" style=\"font-size: 13px !important;\" [ngClass]=\"basmati?.color_status == 3 ? 'black-price' : basmati?.color_status == 2 ? 'red-price' : 'green-price' \">${{ nonbasmati?.fobmin }}-{{ nonbasmati?.fobmax }} </div> \n                                </td>\n\n                                <td class=\"type-columns\">\n                                    <!-- <div class=\"priceVal\" style=\"font-size: 13px !important;\">${{ ((riceVal.value[latestDateBasmati].min_price) / 74).toFixed(2) }} - {{ ((riceVal.value[latestDateBasmati].max_price) / 74).toFixed(2) }} </div>  -->\n                                    <div class=\"priceVal\" style=\"font-size: 13px !important;\" [ngClass]=\"basmati?.color_status == 3 ? 'black-price' : basmati?.color_status == 2 ? 'red-price' : 'green-price' \">${{ ((nonbasmati?.fobmin) + defaultCIFPrice) }}-{{ (nonbasmati?.fobmax + defaultCIFPrice) }} <img src=\"./../../assets/RINGH.png\" alt=\"\" style=\"    width: 8px;transform: rotate(90deg);\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\"></div> \n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n            \n                    </ion-col>\n                </ion-row>\n            </ng-container>\n        </div>\n     \n  </div>\n    <app-menu></app-menu>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/priceusd/priceusd-routing.module.ts":
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _priceusd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./priceusd.page */
    "./src/app/priceusd/priceusd.page.ts");

    var routes = [{
      path: '',
      component: _priceusd_page__WEBPACK_IMPORTED_MODULE_3__["PriceusdPage"]
    }];

    var PriceusdPageRoutingModule = function PriceusdPageRoutingModule() {
      _classCallCheck(this, PriceusdPageRoutingModule);
    };

    PriceusdPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PriceusdPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/priceusd/priceusd.module.ts":
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _priceusd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./priceusd-routing.module */
    "./src/app/priceusd/priceusd-routing.module.ts");
    /* harmony import */


    var _priceusd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./priceusd.page */
    "./src/app/priceusd/priceusd.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _contactmodal_contactmodal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../contactmodal/contactmodal.module */
    "./src/app/contactmodal/contactmodal.module.ts");
    /* harmony import */


    var _versionmodal_versionmodal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../versionmodal/versionmodal.module */
    "./src/app/versionmodal/versionmodal.module.ts");

    var PriceusdPageModule = function PriceusdPageModule() {
      _classCallCheck(this, PriceusdPageModule);
    };

    PriceusdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _priceusd_routing_module__WEBPACK_IMPORTED_MODULE_5__["PriceusdPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _contactmodal_contactmodal_module__WEBPACK_IMPORTED_MODULE_8__["ContactmodalPageModule"], _versionmodal_versionmodal_module__WEBPACK_IMPORTED_MODULE_9__["VersionmodalPageModule"]],
      declarations: [_priceusd_page__WEBPACK_IMPORTED_MODULE_6__["PriceusdPage"]]
    })], PriceusdPageModule);
    /***/
  },

  /***/
  "./src/app/priceusd/priceusd.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/priceusd/priceusd.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPriceusdPriceusdPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"GlacialIndifference-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('GlacialIndifference-Regular.otf');\n}\n@font-face {\n  font-family: \"GlacialIndifference-Italic\";\n  font-style: italic;\n  font-weight: normal;\n  src: url('GlacialIndifference-Italic.otf');\n}\nion-content {\n  --padding-bottom: 81px;\n}\n.user-profile-icon {\n  width: 50px;\n  background-color: #606060;\n  border-radius: 50px;\n  height: 50px;\n  line-height: 50px;\n  margin-left: 15px;\n  margin-top: 10px;\n  padding: 20;\n}\n.user-profile-icon span {\n  color: #FFF;\n  font-size: 30px;\n}\n.notification img {\n  width: 22px;\n  margin-right: 10px;\n  margin-top: 18px;\n}\n.notification ion-icon {\n  font-size: 38px;\n  margin-top: 15px;\n  margin-right: 10px;\n}\n.notification .badge {\n  background-color: #ad362d;\n  height: 17px;\n  width: 17px;\n  color: #FFF;\n  border-radius: 50px;\n  display: inline-block;\n  font-size: 12px;\n  text-align: center;\n  line-height: 17px;\n  right: 16px;\n  position: absolute;\n  top: 19px;\n}\n.slider img {\n  width: 80px;\n}\n.title-padding {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.title-padding h2 {\n  margin: 0px;\n}\n.priceData {\n  text-align: left;\n  margin-left: 10px;\n}\n.popoverley {\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999999;\n  display: none;\n}\n#brown_percentage {\n  display: none;\n}\n#creamy_sella_percentage {\n  display: none;\n}\n#golden_selle_percentage {\n  display: none;\n}\n#raw_percentage {\n  display: none;\n}\n#steam_percentage {\n  display: none;\n}\n.popover {\n  box-shadow: 2px 2px 9px 0px #888;\n  border-radius: 5px;\n  position: absolute;\n  right: 0;\n  z-index: 99999999;\n  background: #fff;\n  display: none;\n  height: 88px;\n  width: 150px;\n}\n.popover ul {\n  list-style: none;\n  padding: 0;\n  margin: 0px;\n}\n.popover ul li {\n  padding: 10px 10px;\n  text-align: left;\n}\n.popover ul li label {\n  font-size: 18px;\n}\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: #eeeeee !important;\n}\n.price-table table thead tr th {\n  background-color: #eeeeee !important;\n  border-right: 1px solid #dfdfdf;\n}\n.price-table table tbody tr {\n  height: 35px;\n}\n.price-table table tbody tr td {\n  font-size: 12px;\n  border-bottom: 1px solid #dfdfdf;\n  border-right: 1px solid #dfdfdf;\n}\n.table-row {\n  margin-top: 0px;\n  padding-top: 0px;\n}\n.table-row tr td {\n  text-align: center;\n}\n.wrapper {\n  position: relative;\n  overflow: auto;\n  padding: 0px;\n  box-shadow: 1px 4px 6px #CCC;\n  border-radius: 3px;\n}\n.sticky-col {\n  position: sticky;\n  position: -webkit-sticky;\n  background-color: white;\n  border-right: 1px solid #dfdfdf;\n  z-index: 99999;\n}\n.first-col {\n  width: auto;\n  min-width: 66px;\n  max-width: 100px;\n  left: 0px;\n  border-right: 1px solid #dfdfdf;\n}\n.second-col {\n  width: 150px;\n  min-width: 150px;\n  max-width: 150px;\n  left: 100px;\n}\n.red-price {\n  color: red;\n  font-weight: 600;\n}\n.green-price {\n  color: green;\n  font-weight: 600;\n}\n.black-price {\n  color: #000;\n  font-weight: 600;\n}\n.bg-white {\n  background-color: #FFF;\n}\n.transport-card {\n  margin-top: -5px;\n}\n.trasnport-image {\n  width: 50px;\n}\n.dotted-border {\n  border-bottom: 2px dotted #000;\n  margin: 19px auto;\n  width: 81%;\n}\n.transport-state {\n  margin-top: -10px;\n  display: block;\n  font-size: 13px;\n}\n.price-col {\n  color: #000;\n  font-size: 13px;\n  padding-top: 14px;\n}\n.transport-row {\n  border-bottom: 1px solid #CCC;\n}\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n.scroll-arrow {\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n.sntc-slider img {\n  width: 250px;\n  margin-top: 2px;\n  margin-left: -16px;\n}\n.sntc-slider h1 {\n  font-size: 37px;\n  margin: 0px;\n  padding: 0px;\n  margin-top: 25px;\n  color: green;\n}\n.sntc-slider p {\n  margin: 0px;\n  padding: 0px;\n}\n.type-columns {\n  min-width: 90px;\n}\n.slide-image {\n  width: 90%;\n  border-radius: 6px;\n}\n.rice-gallery {\n  padding-top: 0px;\n}\n.logo-text {\n  font-family: \"Monotype Corsiva\";\n}\n.header-segment {\n  height: 32px;\n  --padding-end: 0px;\n  margin-right: 0px;\n  margin: 0 auto;\n}\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 0px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  --min-width: auto;\n  min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n.header-segment ion-segment-button.segment-button-checked {\n  background: #92b244;\n  --background: #92b244;\n}\n.header-segment ion-segment-button.segment-button-checked ion-label {\n  margin: 0px;\n  padding: 0px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 100%;\n}\n.header-segment ion-label.sc-ion-label-md-s md {\n  font-size: 60%;\n}\n.header-segment ion-label {\n  margin: 0px;\n  padding: 0px;\n  color: #000;\n  font-weight: 600;\n  font-size: 100%;\n}\n.viewtrans {\n  height: 0px;\n  margin-top: 8px;\n  border-radius: 100px;\n  min-height: 36px;\n  margin-left: 2px;\n  margin-right: 2px;\n  box-shadow: -1px 1px 9px 0px #CCC;\n  width: 33%;\n  color: #000;\n  font-size: 12px;\n  text-decoration: none;\n  padding: 10px;\n}\n.center {\n  text-align: center;\n}\n.center p {\n  padding: 15px 0px 15px 0px;\n  margin: 0;\n  margin-bottom: 20px;\n}\n.rice-gallery {\n  padding-bottom: 0;\n}\n.pt0 {\n  padding-top: 0;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.pb0 {\n  padding-bottom: 0;\n}\n.scroll-arrow {\n  position: absolute;\n  margin-top: 1%;\n}\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n.ricetitle {\n  font-size: 27px;\n  font-family: Arial;\n  text-align: center;\n}\n.basmatiState {\n  margin: 0 30px;\n}\ntable {\n  width: 100%;\n}\ntable .right {\n  text-align: right;\n}\ntable .left {\n  text-align: left !important;\n}\n.pl-10 {\n  padding-left: 10px;\n}\n.p05 {\n  padding: 0px 5px;\n}\n.font-green {\n  color: #0DCC18;\n}\n.red {\n  color: #FB5000;\n}\n.grey {\n  color: grey;\n}\n.dashboard table,\n.dashboard thead,\n.dashboard th,\n.dashboard tr,\n.dashboard td,\n.dashboard td {\n  border: 0px;\n}\n.ricetype {\n  font-size: 30px;\n  font-family: Arial;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n  font-weight: bold;\n}\n.font-17 {\n  font-size: 14px;\n  font-family: Arial;\n}\n.font-14 {\n  font-size: 14px;\n}\n.right {\n  text-align: right !important;\n  padding-right: 10px !important;\n}\n.dashboard table tbody tr td {\n  font-size: 18px !important;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.padd-5 {\n  padding: 5px;\n}\n.pt-10 {\n  padding-top: 10px;\n}\n.pt-5 {\n  padding-top: 5px;\n}\n.table-filter {\n  list-style: none;\n  padding: 0;\n  display: inline-flex;\n  padding: 0px;\n  margin: 0px;\n}\n.table-filter .filter {\n  font-size: 20px;\n}\n.table-filter .filter-content {\n  margin-top: 3px;\n}\n.black {\n  color: #000;\n}\n.riceDisplayType .filterRice {\n  padding: 0;\n  margin: 0;\n  text-align: right;\n}\n.riceDisplayType ul {\n  padding: 0;\n  margin: 0;\n  display: inline-flex;\n  list-style: none;\n}\n.riceDisplayType ul li {\n  padding: 10px 20px;\n  border: 1px solid #ededed;\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 1px 7px 1px #ededed;\n  float: right;\n  display: none;\n}\n.riceDisplayType ul .show {\n  display: block;\n}\n.dashboard table thead,\n.dashboard table tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 2px solid #cfcaab !important;\n}\n.dashboard table thead tr,\n.dashboard table tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 2px solid #cfcaab !important;\n  font-family: \"GlacialIndifference-Regular\";\n}\n.dashboard table thead tr th,\n.dashboard table tbody tr th {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-right: 0px !important;\n}\n.dashboard table thead tr td,\n.dashboard table tbody tr td {\n  border-right: 0px !important;\n  font-size: 18px !important;\n}\n.percentage {\n  display: none;\n}\n.hide,\n.hidecontent {\n  display: none;\n}\n.show {\n  display: block;\n}\nion-segment ion-segment-button ion-label {\n  margin: 0 !important;\n  padding: 0 !important;\n  margin-top: -2px !important;\n}\n.background-image {\n  width: 100px;\n  height: 94px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.background-image img {\n  width: 100%;\n}\n.ios .header-segment {\n  height: 40px;\n}\n.ios .header-segment ion-segment-button {\n  border-radius: 5px;\n}\n.height200 {\n  height: 200px;\n  overflow: hidden;\n}\n.heightAuto {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9yaWNlX21vYmlsZS9zcmMvYXBwL3ByaWNldXNkL3ByaWNldXNkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJpY2V1c2QvcHJpY2V1c2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRFFBO0VBQ0kseUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUNOSjtBRFNBO0VBRUksc0JBQUE7QUNSSjtBRFdBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1JKO0FEU0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ1BSO0FEWUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1RSO0FEV0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1RSO0FEV0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNUUjtBRGlCSTtFQUNJLFdBQUE7QUNkUjtBRGtCQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNmSjtBRGdCSTtFQUNJLFdBQUE7QUNkUjtBRGtCQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNmSjtBRGtCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ2ZKO0FEa0JBO0VBQ0ksYUFBQTtBQ2ZKO0FEa0JBO0VBQ0ksYUFBQTtBQ2ZKO0FEa0JBO0VBQ0ksYUFBQTtBQ2ZKO0FEa0JB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L0NKIiwiZmlsZSI6InNyYy9hcHAvcHJpY2V1c2QvcHJpY2V1c2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdHbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXInO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvZ2xhY2lhbC9HbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXIub3RmJyk7XG59XG5cbi8vIEBmb250LWZhY2Uge1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuLy8gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvQXJpYWwub3RmJyk7XG4vLyB9XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0dsYWNpYWxJbmRpZmZlcmVuY2UtSXRhbGljJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvR2xhY2lhbEluZGlmZmVyZW5jZS1JdGFsaWMub3RmJyk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nJykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4MXB4O1xufVxuXG4udXNlci1wcm9maWxlLWljb24ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiAyMDtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5iYWRnZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDM2MmQ7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxOXB4O1xuICAgIH1cbn1cblxuLnNsaWRlciB7XG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTFweDtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICB9XG59XG5cbi50aXRsZS1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgaDIge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG59XG5cbi5wcmljZURhdGEge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5wb3BvdmVybGV5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jYnJvd25fcGVyY2VudGFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NyZWFteV9zZWxsYV9wZXJjZW50YWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jZ29sZGVuX3NlbGxlX3BlcmNlbnRhZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNyYXdfcGVyY2VudGFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI3N0ZWFtX3BlcmNlbnRhZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wb3BvdmVyIHtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDlweCAwcHggIzg4ODtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBoZWlnaHQ6IDg4cHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJpY2UtdGFibGUge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGhlYWQge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIH1cbn1cblxuLnRhYmxlLXJvdyB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgdHIge1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi53cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDRweCA2cHggI0NDQztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5zdGlja3ktY29sIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgIHotaW5kZXg6IDk5OTk5O1xufVxuXG4uZmlyc3QtY29sIHtcbiAgICAvLyB3aWR0aDogOTBweDtcbiAgICAvLyBtaW4td2lkdGg6IDEwMHB4O1xuICAgIC8vIG1heC13aWR0aDogMTAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiA2NnB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG5cbi5zZWNvbmQtY29sIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIGxlZnQ6IDEwMHB4O1xufVxuXG4ucmVkLXByaWNlIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ncmVlbi1wcmljZSB7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ibGFjay1wcmljZSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufVxuXG4udHJhbnNwb3J0LWNhcmQge1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi50cmFzbnBvcnQtaW1hZ2Uge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4uZG90dGVkLWJvcmRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCAjMDAwO1xuICAgIG1hcmdpbjogMTlweCBhdXRvO1xuICAgIHdpZHRoOiA4MSU7XG59XG5cbi50cmFuc3BvcnQtc3RhdGUge1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnByaWNlLWNvbCB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xufVxuXG4udHJhbnNwb3J0LXJvdyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG59XG5cbi5yaXBwbGUtcGFyZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNjcm9sbC1hcnJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zbnRjLXNsaWRlciB7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICB9XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDM3cHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxufVxuXG4udHlwZS1jb2x1bW5zIHtcbiAgICAvLyB3aWR0aDogMzAwcHg7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgLy8gbWluLXdpZHRoOiAxMjBweDtcbiAgICAvLyBtaW4td2lkdGg6IDc1cHg7XG4gICAgbWluLXdpZHRoOiA5MHB4O1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ucmljZS1nYWxsZXJ5IHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ubG9nby10ZXh0IHtcbiAgICBmb250LWZhbWlseTogJ01vbm90eXBlIENvcnNpdmEnO1xufVxuXG4uaGVhZGVyLXNlZ21lbnQge1xuICAgIGhlaWdodDogMzJweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgbWluLWhlaWdodDogMzFweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IC0xcHggMXB4IDlweCAwcHggI0NDQztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIC0td2lkdGg6IGF1dG87XG4gICAgICAgIC0tbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG4gICAgfVxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgICAgYmFja2dyb3VuZDogIzkyYjI0NDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjOTJiMjQ0O1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWxhYmVsLnNjLWlvbi1sYWJlbC1tZC1zIG1kIHtcbiAgICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgfVxufVxuXG4udmlld3RyYW5zIHtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgbWluLWhlaWdodDogMzZweDtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDlweCAwcHggI0NDQztcbiAgICB3aWR0aDogMzMlO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHAge1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICAgIH1cbn1cblxuLnJpY2UtZ2FsbGVyeSB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5wdDAge1xuICAgIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubXQtMjAge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5wYjAge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMSU7XG4gICAgLmxlZnRpY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICB9XG4gICAgLnJpZ2h0aWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIHRvcDogMHB4O1xuICAgIH1cbn1cblxuLnJpY2V0aXRsZSB7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLmJhc21hdGlTdGF0ZSB7XG4gICAgbWFyZ2luOiAwIDMwcHhcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5yaWdodCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgICAubGVmdCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5wbC0xMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ucDA1IHtcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xufVxuXG4uZm9udC1ncmVlbiB7XG4gICAgY29sb3I6ICMwRENDMTg7XG59XG5cbi5yZWQge1xuICAgIGNvbG9yOiAjRkI1MDAwO1xufVxuXG4uZ3JleSB7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi5kYXNoYm9hcmQgdGFibGUsXG4uZGFzaGJvYXJkIHRoZWFkLFxuLmRhc2hib2FyZCB0aCxcbi5kYXNoYm9hcmQgdHIsXG4uZGFzaGJvYXJkIHRkLFxuLmRhc2hib2FyZCB0ZCB7XG4gICAgYm9yZGVyOiAwcHg7XG59XG5cbi5yaWNldHlwZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuXG4uZm9udC0xNyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLmZvbnQtMTQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudFxufVxuXG4uZGFzaGJvYXJkIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnBhZGQtNSB7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4ucHQtMTAge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4XG59XG5cbi5wdC01IHtcbiAgICBwYWRkaW5nLXRvcDogNXB4XG59XG5cbi50YWJsZS1maWx0ZXIge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLmZpbHRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmZpbHRlci1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4XG4gICAgfVxufVxuXG4uYmxhY2sge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4ucmljZURpc3BsYXlUeXBlIHtcbiAgICAuZmlsdGVyUmljZSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWRlZDtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDFweCA3cHggMXB4ICNlZGVkZWQ7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5zaG93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGFzaGJvYXJkIHtcbiAgICB0YWJsZSB7XG4gICAgICAgIHRoZWFkLFxuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXInO1xuICAgICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBlcmNlbnRhZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRlLFxuLmhpZGVjb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA5NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4uaW9ze1xuICAgIC5oZWFkZXItc2VnbWVudHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBpb24tc2VnbWVudC1idXR0b257XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5oZWlnaHQyMDB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmhlaWdodEF1dG97XG4gICAgaGVpZ2h0OiBhdXRvXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhclwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyLm90ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHbGFjaWFsSW5kaWZmZXJlbmNlLUl0YWxpY1wiO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL2dsYWNpYWwvR2xhY2lhbEluZGlmZmVyZW5jZS1JdGFsaWMub3RmXCIpO1xufVxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiA4MXB4O1xufVxuXG4udXNlci1wcm9maWxlLWljb24ge1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjA2MDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDIwO1xufVxuLnVzZXItcHJvZmlsZS1pY29uIHNwYW4ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uIGltZyB7XG4gIHdpZHRoOiAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG4ubm90aWZpY2F0aW9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubm90aWZpY2F0aW9uIC5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDM2MmQ7XG4gIGhlaWdodDogMTdweDtcbiAgd2lkdGg6IDE3cHg7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgcmlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xufVxuXG4uc2xpZGVyIGltZyB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4udGl0bGUtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4udGl0bGUtcGFkZGluZyBoMiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucHJpY2VEYXRhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5wb3BvdmVybGV5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNicm93bl9wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NyZWFteV9zZWxsYV9wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2dvbGRlbl9zZWxsZV9wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3Jhd19wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3N0ZWFtX3BlcmNlbnRhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucG9wb3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggOXB4IDBweCAjODg4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTk5OTk5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDg4cHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5wb3BvdmVyIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwcHg7XG59XG4ucG9wb3ZlciB1bCBsaSB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wb3BvdmVyIHVsIGxpIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucHJpY2UtdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB7XG4gIGhlaWdodDogMzVweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG5cbi50YWJsZS1yb3cge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG4udGFibGUtcm93IHRyIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDBweDtcbiAgYm94LXNoYWRvdzogMXB4IDRweCA2cHggI0NDQztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc3RpY2t5LWNvbCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gIHotaW5kZXg6IDk5OTk5O1xufVxuXG4uZmlyc3QtY29sIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogNjZweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbGVmdDogMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuXG4uc2Vjb25kLWNvbCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgbGVmdDogMTAwcHg7XG59XG5cbi5yZWQtcHJpY2Uge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZ3JlZW4tcHJpY2Uge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ibGFjay1wcmljZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufVxuXG4udHJhbnNwb3J0LWNhcmQge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4udHJhc25wb3J0LWltYWdlIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5kb3R0ZWQtYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCAjMDAwO1xuICBtYXJnaW46IDE5cHggYXV0bztcbiAgd2lkdGg6IDgxJTtcbn1cblxuLnRyYW5zcG9ydC1zdGF0ZSB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucHJpY2UtY29sIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG59XG5cbi50cmFuc3BvcnQtcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG59XG5cbi5yaXBwbGUtcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNudGMtc2xpZGVyIGltZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG59XG4uc250Yy1zbGlkZXIgaDEge1xuICBmb250LXNpemU6IDM3cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5zbnRjLXNsaWRlciBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnR5cGUtY29sdW1ucyB7XG4gIG1pbi13aWR0aDogOTBweDtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ucmljZS1nYWxsZXJ5IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLmxvZ28tdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm90eXBlIENvcnNpdmFcIjtcbn1cblxuLmhlYWRlci1zZWdtZW50IHtcbiAgaGVpZ2h0OiAzMnB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWluLWhlaWdodDogMzFweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHdpZHRoOiBhdXRvO1xuICAtLXdpZHRoOiBhdXRvO1xuICAtLW1pbi13aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xufVxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzkyYjI0NDtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJiMjQ0O1xufVxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEwMCU7XG59XG4uaGVhZGVyLXNlZ21lbnQgaW9uLWxhYmVsLnNjLWlvbi1sYWJlbC1tZC1zIG1kIHtcbiAgZm9udC1zaXplOiA2MCU7XG59XG4uaGVhZGVyLXNlZ21lbnQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLnZpZXd0cmFucyB7XG4gIGhlaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICB3aWR0aDogMzMlO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2VudGVyIHAge1xuICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucmljZS1nYWxsZXJ5IHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5wdDAge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLm10LTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnBiMCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxJTtcbn1cbi5zY3JvbGwtYXJyb3cgLmxlZnRpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxOHB4O1xuICB0b3A6IDBweDtcbn1cbi5zY3JvbGwtYXJyb3cgLnJpZ2h0aWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHRvcDogMHB4O1xufVxuXG4ucmljZXRpdGxlIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhc21hdGlTdGF0ZSB7XG4gIG1hcmdpbjogMCAzMHB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGFibGUgLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG50YWJsZSAubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLnBsLTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ucDA1IHtcbiAgcGFkZGluZzogMHB4IDVweDtcbn1cblxuLmZvbnQtZ3JlZW4ge1xuICBjb2xvcjogIzBEQ0MxODtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjRkI1MDAwO1xufVxuXG4uZ3JleSB7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uZGFzaGJvYXJkIHRhYmxlLFxuLmRhc2hib2FyZCB0aGVhZCxcbi5kYXNoYm9hcmQgdGgsXG4uZGFzaGJvYXJkIHRyLFxuLmRhc2hib2FyZCB0ZCxcbi5kYXNoYm9hcmQgdGQge1xuICBib3JkZXI6IDBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb250LTE3IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbi5mb250LTE0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoYm9hcmQgdGFibGUgdGJvZHkgdHIgdGQge1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucGFkZC01IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucHQtMTAge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnB0LTUge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4udGFibGUtZmlsdGVyIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4udGFibGUtZmlsdGVyIC5maWx0ZXIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4udGFibGUtZmlsdGVyIC5maWx0ZXItY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmJsYWNrIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5yaWNlRGlzcGxheVR5cGUgLmZpbHRlclJpY2Uge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnJpY2VEaXNwbGF5VHlwZSB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucmljZURpc3BsYXlUeXBlIHVsIGxpIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMXB4IDdweCAxcHggI2VkZWRlZDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJpY2VEaXNwbGF5VHlwZSB1bCAuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGFzaGJvYXJkIHRhYmxlIHRoZWFkLFxuLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG59XG4uZGFzaGJvYXJkIHRhYmxlIHRoZWFkIHRyLFxuLmRhc2hib2FyZCB0YWJsZSB0Ym9keSB0ciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkdsYWNpYWxJbmRpZmZlcmVuY2UtUmVndWxhclwiO1xufVxuLmRhc2hib2FyZCB0YWJsZSB0aGVhZCB0ciB0aCxcbi5kYXNoYm9hcmQgdGFibGUgdGJvZHkgdHIgdGgge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuLmRhc2hib2FyZCB0YWJsZSB0aGVhZCB0ciB0ZCxcbi5kYXNoYm9hcmQgdGFibGUgdGJvZHkgdHIgdGQge1xuICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLnBlcmNlbnRhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZSxcbi5oaWRlY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDk0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmFja2dyb3VuZC1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlvcyAuaGVhZGVyLXNlZ21lbnQge1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uaW9zIC5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5oZWlnaHQyMDAge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGVpZ2h0QXV0byB7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/priceusd/priceusd.page.ts":
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _brok_login_brok_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../brok-login/brok-login.component */
    "./src/app/brok-login/brok-login.component.ts");
    /* harmony import */


    var _components_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components.service */
    "./src/app/components.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _contactmodal_contactmodal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../contactmodal/contactmodal.page */
    "./src/app/contactmodal/contactmodal.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _versionmodal_versionmodal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../versionmodal/versionmodal.page */
    "./src/app/versionmodal/versionmodal.page.ts");

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
        this.restDays = 0; // this.componentService.compareTwoDates( localStorage.getItem('expired_on') );

        console.log(typeof localStorage.getItem('isExpired'));

        if (localStorage.getItem('isExpired') == 'true') {
          this.navCtrl.navigateRoot('planpage', {
            animationDirection: 'forward'
          });
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
        this.componentService.differanceTwoDate(todayDate, ExpiredDateDate).then(function (res) {
          _this.restDays = res;
        });
        this.componentService.isUserExpired.subscribe(function (res) {
          _this.currentPaidStatus = res;
          setTimeout(function () {// document.getElementById('getCurrentStatus').clic k();
          }, 3000);
        });
        this.getVersion(); // this.fetchRiceForm()

        if (localStorage.getItem('apptype') == 'USD') {
          this.appType = "usd";
        } else {
          this.appType = 'other';
        }
      }

      _createClass(PriceusdPage, [{
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          var _this2 = this;

          this.componentService.isUserExpired.subscribe(function (res) {
            _this2.currentPaidStatus = res;
            setTimeout(function () {
              document.getElementById('getCurrentStatus').click();
            }, 1000);
          });
          this.componentService.isUserExpired.subscribe(function (res) {
            _this2.currentPaidStatus = res;
            setTimeout(function () {
              document.getElementById('getCurrentStatus').click();
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
        key: "getGallery",
        value: function getGallery() {
          this.restService.getImagesForDashboard().then(function (res) {}, function (err) {});
        }
      }, {
        key: "getBasmatiState",
        value: function getBasmatiState() {
          var _this3 = this;

          this.componentService.presentLoading().then(function () {
            _this3.restService.getBasmatiState().then(function (res) {
              if (res.data.length > 0) {
                _this3.firstBasmatiState = res.data[0];
                setTimeout(function () {
                  document.getElementById(_this3.firstBasmatiState).click();
                }, 1000);
              }

              _this3.basmatiState = res.data;

              _this3.componentService.loadingController.dismiss();
            }, function (err) {
              _this3.componentService.loadingController.dismiss();
            });
          });
        }
      }, {
        key: "getNONBasmatiState",
        value: function getNONBasmatiState() {
          var _this4 = this;

          this.restService.getNONBasmatiState().then(function (res) {
            _this4.NONbasmatiState = res.data;
          }, function (err) {});
        }
      }, {
        key: "getSlider",
        value: function getSlider() {
          var _this5 = this;

          this.restService.getGallery().then(function (res) {
            _this5.ImageGallerySlider = res.data.basmati;
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
          var _this6 = this;

          return new Promise(function (resolve, reject) {
            _this6.restService.getPrices(_this6.firstBasmatiState, type).then(function (res) {
              var basmatiColumns = res.prices.basmati;

              if (basmatiColumns != undefined) {
                _this6.latestDateBasmati = res.latest;
                _this6.oldDateBasmati = res.oldDate;
                _this6.basmatiColumns = basmatiColumns; // 	basmatiColumns = Object.keys(basmatiColumns);
                // 	if (basmatiColumns.length != 0) {
                // 		basmatiColumns = Object.keys(res.prices.basmati[basmatiColumns[0]]);
                // 		this.basmatiColumns = basmatiColumns;
                // 	}
              }

              var nonBasmati = res.prices["non_basmati"];

              if (nonBasmati != undefined) {
                _this6.nonBasmatiColumns = nonBasmati;
                _this6.latestDateNONBasmati = res.oldDate;
                _this6.oldDateNONBasmati = res.latest; // nonBasmati = Object.keys(nonBasmati);
                // if (nonBasmati.length != 0) {
                // 	nonBasmati = Object.keys(res.prices.non_basmati[nonBasmati[0]]);
                // 	this.nonBasmatiColumns = nonBasmati;
                // }
              }

              _this6.myContent.getScrollElement().then(function (res) {
                if (res != null) {
                  _this6.fullScrollHeight = res.scrollHeight + 400;
                }
              });

              resolve(res.prices);

              _this6.getContentScrollLength();
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
          var _this7 = this;

          if (this.route.url == "/prices") {
            console.log(localStorage.getItem("popupCanceled"));

            if (localStorage.getItem("popupCanceled") == null) {
              this.myVar = setTimeout(function () {
                _this7.showCOntactModal();
              }, 30000);
            }

            this.componentService.cancelPopup.subscribe(function () {
              if (localStorage.getItem("popupCanceled") != "true") {
                _this7.myVar = setTimeout(function () {
                  _this7.showCOntactModal();
                }, 30000);
              }
            });
          }

          this.getLoadedData("basmati").then(function (res) {
            _this7.basmatiprice = res;
          }, function (err) {});
          this.getLoadedData("non-basmati").then(function (res) {
            _this7.nonbasmatiprice = res;
          }, function (err) {}); // });

          this.restService.CheckUserExpired().then(function (res) {
            console.log(res);
            localStorage.setItem('isExpiryUSD', res.isExpiry);
            localStorage.setItem('ExpiryUSDDate', res.data);
            localStorage.setItem('expired_on', res.data);
            var isUserExpiredStatus = localStorage.getItem('isExpiryUSD');
            console.log(isUserExpiredStatus);

            if (isUserExpiredStatus == 'true') {
              _this7.navCtrl.navigateForward(['price']);
            }

            _this7.componentService.compareTwoDates(localStorage.getItem('expired_on'));
          }, function (err) {});
          this.imagePrefix = this.restService.imageUrl;
          this.getSlider();
          this.username = localStorage.getItem("name");
          this.userFirstName = localStorage.getItem("name")[0];
          this.getUSDPrices();
        }
      }, {
        key: "showVersionModal",
        value: function showVersionModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
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
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          var _this8 = this;

          this.restService.getLatestVersion().then(function (res) {
            console.log(res.data.version);
            var elemem = _this8;

            if ('1.0.0' != res.data.version) {
              setTimeout(function () {
                elemem.showVersionModal();
              }, 8000);
            }
          }, function (err) {
            console.log(err);
          })["catch"](function (err) {
            console.log(err);
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          // this.getBasmatiState();
          // this.getNONBasmatiState();
          // this.getPlans();
          this.getUSDPrices();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

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
            var api = _this9.restService;
          });
        }
      }, {
        key: "showPaymentModel",
        value: function showPaymentModel() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.componentService.showPaymentModal.next();

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "showCOntactModal",
        value: function showCOntactModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
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
          var _this10 = this;

          this.selectedBasmatiState = event.detail.value;
          this.selectedNONBasmatiState = event.detail.value;
          this.componentService.presentLoading().then(function () {
            _this10.fetchRiceForm(event.detail.value, "basmati").then(function (res) {
              _this10.basmatiprice = res;
              console.log('res here');
              console.log(res);

              _this10.componentService.loadingController.dismiss();
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
          var _this11 = this;

          this.selectedNONBasmatiState = event.detail.value;
          this.selectedBasmatiState = event.detail.value;
          this.fetchRiceForm(event.detail.value, "non-basmati").then(function (res) {
            // this.componentService.loadingController.dismiss();
            console.log(res);
            _this11.nonbasmatiprice = res;
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
          var _this12 = this;

          return new Promise(function (resolve, reject) {
            // this.componentService.presentLoading().then(() => {
            _this12.restService.getPrices(event, type).then(function (res) {
              var basmatiColumns = res.prices.basmati;
              _this12.latestDateBasmati = res.latest;

              if (basmatiColumns != undefined) {
                _this12.basmatiColumns = basmatiColumns;
              }

              var nonBasmati = res.prices["non_basmati"];

              if (nonBasmati != undefined) {
                _this12.nonBasmatiColumns = nonBasmati;
              }

              _this12.lastupdatedDate = res.latestDate;
              console.log("here data");
              resolve(res.prices);
            }, function (err) {
              reject(err);
            }); // });

          });
        }
      }, {
        key: "navToPort",
        value: function navToPort() {
          this.navCtrl.navigateForward(["port"]);
        }
      }, {
        key: "getContentScrollLength",
        value: function getContentScrollLength() {// setTimeout(() => {
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var scrollElement, scrollHeight, currentScrollDepth, targetPercent, triggerDepth;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
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
                      this.scrollPosition = "bottom"; // this.scrollDepthTriggered = true;
                    } else {
                      this.scrollPosition = "top"; // this.scrollDepthTriggered = false;
                    }

                  case 13:
                  case "end":
                    return _context4.stop();
                }
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
            console.log(riceName);
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
        value: function getUSDPrices() {
          var _this13 = this;

          this.restService.getUSDPrice().then(function (res) {
            console.log(res);
            _this13.listBasmatiStates = Object.values(res.basmatiPrices);
            _this13.listNONBasmatiStates = Object.values(res.nonbasmatiPrices);
            _this13.defaultCIFPrice = parseFloat(res.defaultCIFPrice);
            _this13.lastupdatedDate = res.latestDate;
          }, function (err) {});
        } // getPriceNONBasmatiState(){
        // 	this.restService.getPriceNONBasmatiState().then((res:any) => {
        // 		this.listBasmatiStates = res;
        // 	} , (err:any) => {
        // 	} );
        // }

      }, {
        key: "changeAppType",
        value: function changeAppType() {
          // console.log("jk");
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
      }]);

      return PriceusdPage;
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
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./priceusd.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/priceusd/priceusd.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./priceusd.page.scss */
      "./src/app/priceusd/priceusd.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _components_service__WEBPACK_IMPORTED_MODULE_4__["ComponentsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _versionmodal_versionmodal_page__WEBPACK_IMPORTED_MODULE_9__["VersionmodalPage"]])], PriceusdPage);
    /***/
  }
}]);
//# sourceMappingURL=priceusd-priceusd-module-es5.js.map