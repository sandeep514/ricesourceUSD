function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quality-details-quality-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/quality-details/quality-details.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quality-details/quality-details.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQualityDetailsQualityDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"green\">\n\t<ion-toolbar  mode=\"ios\"  style=\"background: transparent; --background: transparent\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"closeModal()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">\n\t\t\t{{ riceQuality?.quality }} {{ riceQuality?.quality_name }}\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"lightgreen\">\n\t<div style=\"margin-bottom: 50px;\">\n\n\t\t<div style=\"border-bottom: 2px solid #000;margin: 20px 0px\">\t\t\t\n\t\t\t<p style=\"font-size: 18px;font-weight: bold;text-align: center;\">Customised Packing Price</p>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"3\" style=\"font-size: 20px;line-height: 2.6\">Packing: </ion-col>\n\t\t\t\t<ion-col size=\"9\" >\n\t\t\t\t\t<ion-item class=\"select\" style=\"background: #fffbd6;--background: #fffbd6;border: 2px solid #92b243;border-radius: 9px\">\n\t\t\t\t\t\t<ion-label>Packing</ion-label>\n\t\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeBag($event)\">\n\t\t\t\t\t\t  \t<ion-select-option *ngFor=\"let bag of packing\" value=\"{{ bag?.PMT_USD }}\">\n\t\t\t\t\t\t\t\t<p style=\"width: 200px;height: 200px;\">{{ bag?.bag_size }}</p>&nbsp; &nbsp; &nbsp; &nbsp; <p>({{ bag?.bag_type }})</p>\n\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t  </ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\n\t\t\t<ion-row >\n\t\t\t\t<ion-col size=\"4\" style=\"font-size: 20px;line-height: 2.5\">FOB Price: </ion-col>\n\t\t\t\t<ion-col size=\"8\" >\n\t\t\t\t\t<ion-item class=\"select\" style=\"background: #fffbd6;--background: #fffbd6\">\n\t\t\t\t\t\t<!-- <ion-label>region</ion-label> -->\n\t\t\t\t\t\t<h4 style=\"padding: 0;margin: 0;width: 100%;text-align: right;\">${{ fobminData }} - ${{ fobmaxData }} PMT</h4>\n\t\t\t\t\t  </ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t\n\t\t\t<ion-row >\n\t\t\t\t<ion-col size=\"3\" style=\"font-size: 20px;line-height: 2.6\">Port: </ion-col>\n\t\t\t\t<ion-col size=\"9\">\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"12\" >\n\t\t\t\t\t\t\t<ion-item class=\"select\" style=\"background: #fffbd6;--background: #fffbd6;border: 2px solid #92b243;border-radius: 9px\">\n\t\t\t\t\t\t\t\t<ion-label>REGION</ion-label>\n\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeRegion($event)\">\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let region of regions\">{{ region }}</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"12\" >\n\t\t\t\t\t\t\t<ion-item class=\"select\" style=\"background: #fffbd6;--background: #fffbd6;border: 2px solid #92b243;border-radius: 9px\">\n\t\t\t\t\t\t\t\t<ion-label>COUNTRY</ion-label>\n\t\t\n\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeCountry($event)\">\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let ctry of country\">{{ ctry }}</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"12\" >\n\t\t\t\t\t\t\t<ion-item class=\"select\" style=\"background: #fffbd6;--background: #fffbd6;border: 2px solid #92b243;border-radius: 9px\">\n\t\t\t\t\t\t\t\t<ion-label>PORT</ion-label>\n\t\t\n\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePort($event)\">\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let ctry of selectedPorts\">{{ ctry }}</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<p style=\"margin-left: 5px;font-size: 20px;\">Ocean Freight PMT: </p>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col  size=\"7\">\n\t\t\t\t\t<p style=\"font-size: 18px; text-transform: uppercase; font-weight: bold; list-style: none; padding: 0; margin: 0; margin-top: 15px;text-align: right;margin-right: 14px;\">{{ defalutPort }} (${{ defalutPortPrice }})</p>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row >\n\t\t\t\t<ion-col size=\"4\" style=\"font-size: 20px;line-height: 2.5\">CIF Price:</ion-col>\n\t\t\t\t<ion-col size=\"8\" >\n\t\t\t\t\t<ion-item class=\"select\" style=\"background: #fffbd6;--background: #fffbd6\">\n\t\t\t\t\t\t<h4 style=\"padding: 0;margin: 0;width: 100%;text-align: right;\">${{CIFminData}} - ${{ CIFmaxData }} PMT</h4>\n\t\t\t\t\t  </ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\t\t<!-- <div>\n\t\t\t{{ riceQuality?.quality }} {{ riceQuality?.quality_name }}\n\t\t</div> -->\n\t\t<div style=\"text-align: center;font-size: 20px;\">\n\t\t\tRice Graph\n\t\t</div>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div id=\"highcharts\" style=\"width: 100%; height:300\"></div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/quality-details/quality-details-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/quality-details/quality-details-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: QualityDetailsPageRoutingModule */

  /***/
  function srcAppQualityDetailsQualityDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QualityDetailsPageRoutingModule", function () {
      return QualityDetailsPageRoutingModule;
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


    var _quality_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quality-details.page */
    "./src/app/quality-details/quality-details.page.ts");

    var routes = [{
      path: '',
      component: _quality_details_page__WEBPACK_IMPORTED_MODULE_3__["QualityDetailsPage"]
    }];

    var QualityDetailsPageRoutingModule = function QualityDetailsPageRoutingModule() {
      _classCallCheck(this, QualityDetailsPageRoutingModule);
    };

    QualityDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QualityDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/quality-details/quality-details.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/quality-details/quality-details.module.ts ***!
    \***********************************************************/

  /*! exports provided: QualityDetailsPageModule */

  /***/
  function srcAppQualityDetailsQualityDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QualityDetailsPageModule", function () {
      return QualityDetailsPageModule;
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


    var _quality_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quality-details-routing.module */
    "./src/app/quality-details/quality-details-routing.module.ts");
    /* harmony import */


    var _quality_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./quality-details.page */
    "./src/app/quality-details/quality-details.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts"); // import { IonicSelectableModule } from 'ionic-selectable';


    var QualityDetailsPageModule = function QualityDetailsPageModule() {
      _classCallCheck(this, QualityDetailsPageModule);
    };

    QualityDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], // IonicSelectableModule,
      _quality_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["QualityDetailsPageRoutingModule"]],
      declarations: [_quality_details_page__WEBPACK_IMPORTED_MODULE_6__["QualityDetailsPage"]]
    })], QualityDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/quality-details/quality-details.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/quality-details/quality-details.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQualityDetailsQualityDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\n.header-title {\n  color: #FFF;\n}\n\n.header-md::after {\n  background: none;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-toolbar ion-icon {\n  color: #000;\n}\n\n.header-title {\n  color: #000;\n}\n\nion-title {\n  padding: 0;\n  text-align: center;\n}\n\n.ion-card {\n  width: 900px;\n}\n\nion-card {\n  width: 17%;\n  text-align: center;\n  float: left;\n}\n\n.tf-tree {\n  clear: both;\n}\n\n.ioncard1 {\n  background: #d8f9fe;\n}\n\n.ioncard2 {\n  background: #d8f9fe;\n}\n\n.ioncard3 {\n  background: #d8f9fe;\n}\n\n.ioncard4 {\n  background: #d8f9fe;\n}\n\n.ioncard5 {\n  background: #d8f9fe;\n}\n\ntable,\nthead,\ntbody {\n  border: 1px solid #eeeeee;\n}\n\ntable {\n  width: 100%;\n}\n\ntable thead th {\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\ntable tbody tr {\n  border-bottom: 1px solid #ededed;\n}\n\ntable tbody td {\n  width: 50%;\n  text-align: center;\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.active {\n  background: #c9a27c;\n  --background: #c9a27c;\n  background-color: #c9a27c;\n  --background-color: #c9a27c;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n}\n\n.price-table table thead tr th {\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n  border-right: 1px solid #dfdfdf;\n}\n\ntable,\ntable thead,\ntable tbody,\ntable thead th,\ntable tbody tr,\ntable tbody tr td {\n  border: 0 !important;\n}\n\ntable thead,\ntable tbody,\ntable tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n\ntable thead tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tbody tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tr th {\n  padding: 0;\n  margin: 0;\n}\n\ntable tbody tr td {\n  text-align: left;\n  margin-left: 20px;\n  padding-left: 20px;\n}\n\n.pl-60 {\n  padding-left: 60px !important;\n}\n\n.pl-10 {\n  padding-left: 10px !important;\n}\n\n.left {\n  text-align: left;\n}\n\n.active {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.segment-button-checked {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.scroll-arrow {\n  position: absolute;\n  margin-top: 3.2%;\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 0px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.ios .header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 5px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.header-ios ion-toolbar {\n  border: 0px;\n  --border-width: 0px ;\n}\n\n.ios .type-columns {\n  border: 0px solid transparent !important;\n  --border: 0px solid transparent !important;\n}\n\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.basmatiState {\n  margin: 10px 30px 0px 30px;\n}\n\n.ricetype {\n  color: #000;\n  font-size: 30px;\n  font-family: GlacialIndifference-bold;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.font-17 {\n  font-size: 14px;\n  font-family: GlacialIndifference-bold;\n}\n\n.green {\n  color: #92B243;\n}\n\n.green td {\n  text-transform: capitalize;\n  font-size: 18px !important;\n}\n\n.porttitle {\n  font-size: 20px;\n}\n\nion-segment ion-segment-button ion-label {\n  margin: 0;\n  padding: 0;\n  margin-top: -2px;\n}\n\n.imageprev {\n  min-height: 200px;\n  max-height: 200px;\n  height: 200px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.paddingBottom100 {\n  padding-bottom: 100px;\n}\n\n.item-native {\n  background-color: transparent;\n  --background-color: transparent;\n  background: transparent;\n  --background: transparent;\n}\n\n.item-ionic-selectable {\n  border: 2px solid #92b243;\n  border-radius: 10px;\n}\n\n.item-ionic-selectable .item-native {\n  background-color: transparent;\n  --background-color: transparent;\n  background: transparent;\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9yaWNlX21vYmlsZS9zcmMvYXBwL3F1YWxpdHktZGV0YWlscy9xdWFsaXR5LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9xdWFsaXR5LWRldGFpbHMvcXVhbGl0eS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREFJO0VBQ0ksZUFBQTtBQ0VSOztBREVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURBSTtFQUNJLFdBQUE7QUNFUjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7OztFQUdJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ1E7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0FDQ1o7O0FER1E7RUFDSSxnQ0FBQTtBQ0RaOztBREdRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQ0RaOztBRE1BO0VBQ0ksMEJBQUE7QUNISjs7QURNQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDSEo7O0FEUUk7RUFDSSxXQUFBO0VBdUJBLGVBQUE7QUMzQlI7O0FETVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0poQjs7QURNZ0I7RUFFSSwrQkFBQTtBQ0xwQjs7QURVWTtFQUNJLFlBQUE7QUNSaEI7O0FEU2dCO0VBQ0ksZUFBQTtFQUdBLCtCQUFBO0FDVHBCOztBRGlCQTs7Ozs7O0VBTUksb0JBQUE7QUNkSjs7QURpQkE7OztFQUdJLGtDQUFBO0VBQ0Esd0NBQUE7QUNkSjs7QURnQkE7RUFDSSwyQ0FBQTtBQ2JKOztBRGVBO0VBQ0ksMkNBQUE7QUNaSjs7QURlQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FDWko7O0FEa0JZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDZmhCOztBRHFCQTtFQUNJLDZCQUFBO0FDbEJKOztBRHFCQTtFQUNJLDZCQUFBO0FDbEJKOztBRHFCQTtFQUNJLGdCQUFBO0FDbEJKOztBRHFCQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQ2xCSjs7QURxQkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUNsQko7O0FEcUJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0kseUNBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ3BCSjs7QURzQkE7RUFDSSx5Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDckJKOztBRHVCQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBQ3BCSjs7QUR1Qkk7RUFDSSx3Q0FBQTtFQUNBLDBDQUFBO0FDcEJSOztBRHdCQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxRQUFBO0FDdEJKOztBRHlCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxRQUFBO0FDdkJKOztBRDBCQTtFQUNJLDBCQUFBO0FDdkJKOztBRDBCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FDdkJKOztBRDBCQTtFQUNJLGVBQUE7RUFDQSxxQ0FBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxjQUFBO0FDdkJKOztBRHdCSTtFQUNJLDBCQUFBO0VBQ0EsMEJBQUE7QUN0QlI7O0FEMEJBO0VBQ0ksZUFBQTtBQ3ZCSjs7QUQ0QlE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDekJaOztBRDhCQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDM0JKOztBRDhCQTtFQUNJLGFBQUE7QUMzQko7O0FEOEJBO0VBQ0ksY0FBQTtBQzNCSjs7QUQ4QkE7RUFDSSxxQkFBQTtBQzNCSjs7QUQ4QkE7RUFDSSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQzNCSjs7QUQ2QkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FDMUJKOztBRDJCSTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDekJSIiwiZmlsZSI6InNyYy9hcHAvcXVhbGl0eS1kZXRhaWxzL3F1YWxpdHktZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGYtdHJlZS5leGFtcGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbn1cblxuLmhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pb24tY2FyZCB7XG4gICAgd2lkdGg6IDkwMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgd2lkdGg6IDE3JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50Zi10cmVlIHtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLmlvbmNhcmQxIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDIge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkMyB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQ0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDUge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbnRhYmxlLFxudGhlYWQsXG50Ym9keSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRoZWFkIHtcbiAgICAgICAgdGgge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGQge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcGl0YWxpemUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjYzlhMjdjO1xuICAgIC0tYmFja2dyb3VuZDogI2M5YTI3YztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlhMjdjO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3Yztcbn1cblxuLnByaWNlLXRhYmxlIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIH1cbn1cblxudGFibGUsXG50YWJsZSB0aGVhZCxcbnRhYmxlIHRib2R5LFxudGFibGUgdGhlYWQgdGgsXG50YWJsZSB0Ym9keSB0cixcbnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudFxufVxuXG50YWJsZSB0aGVhZCxcbnRhYmxlIHRib2R5LFxudGFibGUgdGJvZHkgdHIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbnRhYmxlIHRoZWFkIHRye1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG59XG50YWJsZSB0Ym9keSB0cntcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0ciB0aCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbnRhYmxlIHtcbiAgICB0Ym9keSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBsLTYwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLnBsLTEwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZDogIzkyQjI0MztcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGwtYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAzLjIlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWluLWhlaWdodDogMzFweDtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIC8vIGJveC1zaGFkb3c6IC0xcHggMXB4IDlweCAwcHggI0NDQztcbiAgICB3aWR0aDogYXV0bztcbiAgICAtLXdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAtLW1pbi13aWR0aDogYXV0bztcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0Mztcbn1cbi5pb3MgLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDMxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAvLyBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgLS13aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgLS1taW4td2lkdGg6IGF1dG87XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcntcbiAgICBib3JkZXI6IDBweDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4XG59XG4uaW9ze1xuICAgIC50eXBlLWNvbHVtbnN7XG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5zY3JvbGwtYXJyb3cgLmxlZnRpY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTBweDtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgdG9wOiAwcHg7XG59XG5cbi5zY3JvbGwtYXJyb3cgLnJpZ2h0aWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMThweDtcbiAgICB0b3A6IDBweDtcbn1cblxuLmJhc21hdGlTdGF0ZSB7XG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMHB4IDMwcHg7XG59XG5cbi5yaWNldHlwZSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBHbGFjaWFsSW5kaWZmZXJlbmNlLWJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LTE3IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IEdsYWNpYWxJbmRpZmZlcmVuY2UtYm9sZDtcbn1cblxuLmdyZWVuIHtcbiAgICBjb2xvcjogIzkyQjI0MztcbiAgICB0ZCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5wb3J0dGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweFxufSAgIFxuXG5pb24tc2VnbWVudCB7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW1hZ2VwcmV2IHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGFkZGluZ0JvdHRvbTEwMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG4uaXRlbS1uYXRpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLml0ZW0taW9uaWMtc2VsZWN0YWJsZXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLml0ZW0tbmF0aXZle1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufSIsIi50Zi10cmVlLmV4YW1wbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmJhY2stYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5pb24tdG9vbGJhciBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlvbi1jYXJkIHtcbiAgd2lkdGg6IDkwMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiAxNyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50Zi10cmVlIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5pb25jYXJkMSB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkMiB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkMyB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkNCB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkNSB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbnRhYmxlLFxudGhlYWQsXG50Ym9keSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSB0aGVhZCB0aCB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxudGFibGUgdGJvZHkgdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZDtcbn1cbnRhYmxlIHRib2R5IHRkIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNjOWEyN2M7XG4gIC0tYmFja2dyb3VuZDogI2M5YTI3YztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3YztcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjYzlhMjdjO1xufVxuXG4ucHJpY2UtdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIgdGgge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuXG50YWJsZSxcbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHksXG50YWJsZSB0aGVhZCB0aCxcbnRhYmxlIHRib2R5IHRyLFxudGFibGUgdGJvZHkgdHIgdGQge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRib2R5IHRyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGhlYWQgdHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0Ym9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRyIHRoIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5wbC02MCB7XG4gIHBhZGRpbmctbGVmdDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4ucGwtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzkyQjI0MztcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAzLjIlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDMxcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICB3aWR0aDogYXV0bztcbiAgLS13aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiBhdXRvO1xuICAtLW1pbi13aWR0aDogYXV0bztcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0Mztcbn1cblxuLmlvcyAuaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDMxcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICB3aWR0aDogYXV0bztcbiAgLS13aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiBhdXRvO1xuICAtLW1pbi13aWR0aDogYXV0bztcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0Mztcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICBib3JkZXI6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCA7XG59XG5cbi5pb3MgLnR5cGUtY29sdW1ucyB7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1hcnJvdyAubGVmdGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHRvcDogMHB4O1xufVxuXG4uc2Nyb2xsLWFycm93IC5yaWdodGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxOHB4O1xuICB0b3A6IDBweDtcbn1cblxuLmJhc21hdGlTdGF0ZSB7XG4gIG1hcmdpbjogMTBweCAzMHB4IDBweCAzMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LTE3IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogIzkyQjI0Mztcbn1cbi5ncmVlbiB0ZCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLnBvcnR0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxuLmltYWdlcHJldiB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGFkZGluZ0JvdHRvbTEwMCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaXRlbS1pb25pYy1zZWxlY3RhYmxlIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0MztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5pdGVtLWlvbmljLXNlbGVjdGFibGUgLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/quality-details/quality-details.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/quality-details/quality-details.page.ts ***!
    \*********************************************************/

  /*! exports provided: QualityDetailsPage */

  /***/
  function srcAppQualityDetailsQualityDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QualityDetailsPage", function () {
      return QualityDetailsPage;
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


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components.service */
    "./src/app/components.service.ts");
    /* harmony import */


    var _planpage_planpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../planpage/planpage.page */
    "./src/app/planpage/planpage.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var QualityDetailsPage = /*#__PURE__*/function () {
      function QualityDetailsPage(navCtrl, apiser, loading, compSer, ModelCtrl, componentService, activRoute) {
        var _this = this;

        _classCallCheck(this, QualityDetailsPage);

        this.navCtrl = navCtrl;
        this.apiser = apiser;
        this.loading = loading;
        this.compSer = compSer;
        this.ModelCtrl = ModelCtrl;
        this.componentService = componentService;
        this.activRoute = activRoute;
        this.selectedChartData = "15_Days";
        this.scrollDepthTriggered = false;
        this.scrollLength = 0;
        this.scrollPosition = 'top';
        this.ricename = '';
        this.rice = '';
        this.userFirstName = '';
        this.paymentAmount = 1000;
        this.currency = "INR";
        this.selectedstate = localStorage.getItem('state');
        this.selectedriceType = localStorage.getItem('riceType');
        this.chartInt = localStorage.getItem('chartInt');
        this.selectedChartData = "15_Days";
        this.getChartInterval();
        this.compSer.isUserExpired.subscribe(function (res) {
          if (localStorage.getItem('isExpired') == 'true') {
            _this.presentModel();
          }
        });
        this.ports = [{
          id: 1,
          name: 'Tokai'
        }, {
          id: 2,
          name: 'Vladivostok'
        }, {
          id: 3,
          name: 'Navlakhi'
        }];
        activRoute.params.subscribe(function (params) {
          _this.riceQualityId = params.riceQuality;

          _this.getAllCountryPorts(params.riceQuality);
        });
      }

      _createClass(QualityDetailsPage, [{
        key: "presentModel",
        value: function presentModel() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var model;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.ModelCtrl.create({
                      component: _planpage_planpage_page__WEBPACK_IMPORTED_MODULE_6__["PlanpagePage"],
                      animated: true
                    });

                  case 2:
                    model = _context.sent;
                    _context.next = 5;
                    return model.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "gotoProfile",
        value: function gotoProfile() {
          this.navCtrl.navigateForward(['profile']);
        }
      }, {
        key: "parseValue",
        value: function parseValue(value) {
          return value.split(' ').join('_');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userFirstName = localStorage.getItem('name')[0];
        }
      }, {
        key: "getChartInterval",
        value: function getChartInterval() {// this.apiser.getChartInterval().then((res:any) => {
          // 	this.chartIntervals = res.chartinterval;
          // });
        }
      }, {
        key: "presentLoader",
        value: function presentLoader(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loading.create({
                      message: message
                    });

                  case 2:
                    this.loader = _context2.sent;
                    _context2.next = 5;
                    return this.loader.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "loginProfile",
        value: function loginProfile() {}
      }, {
        key: "scroll",
        value: function scroll(direction, className) {
          if (direction == 'left') {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + className).animate({
              scrollLeft: "-=135px"
            }, "slow");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + className).animate({
              scrollLeft: "+=135px"
            }, "slow");
          }
        }
      }, {
        key: "changeName",
        value: function changeName(name) {
          var newname = name.split('_').join(' ').toUpperCase();
          return newname;
        }
      }, {
        key: "getAllCountryPorts",
        value: function getAllCountryPorts(riceQualityId) {
          var _this2 = this;

          this.componentService.presentLoading().then(function () {
            _this2.apiser.getAllPorts(riceQualityId).then(function (res) {
              Highcharts.stockChart('highcharts', {
                chart: {
                  alignTicks: false,
                  backgroundColor: '#fffbd6',
                  marginLeft: 40
                },
                yAxis: {
                  opposite: false,
                  labels: {
                    align: 'left'
                  },
                  title: {
                    text: "Price in $",
                    x: -12
                  }
                },
                rangeSelector: {
                  selected: 0,
                  inputEnabled: false,
                  buttons: [{
                    type: 'week',
                    count: 1,
                    text: '1W'
                  }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                  }, {
                    type: 'month',
                    count: 2,
                    text: '2m'
                  }, {
                    type: 'month',
                    count: 3,
                    text: '3m'
                  }, {
                    type: 'month',
                    count: 4,
                    text: '4m'
                  }, {
                    type: 'month',
                    count: 5,
                    text: '5m'
                  }, {
                    type: 'month',
                    count: 6,
                    text: '6m'
                  }, {
                    type: 'month',
                    count: 7,
                    text: '7m'
                  }, {
                    type: 'month',
                    count: 8,
                    text: '8m'
                  }, {
                    type: 'month',
                    count: 9,
                    text: '9m'
                  }, {
                    type: 'month',
                    count: 10,
                    text: '10m'
                  }, {
                    type: 'month',
                    count: 11,
                    text: '11m'
                  }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                  }]
                },
                series: [{
                  fontSize: '11px',
                  color: '#92b243',
                  type: 'line',
                  name: '$',
                  data: res.chartData.combinedData,
                  dataGrouping: {
                    units: [['week', [1] // allowed multiples
                    ], ['month', [1, 2, 3, 4, 6]]]
                  }
                }]
              });

              _this2.componentService.loadingController.dismiss();

              _this2.packing = res.packing;
              _this2.FOB = res.FOB;
              _this2.fobminData = res.FOB.fobmin;
              _this2.fobmaxData = res.FOB.fobmax;
              _this2.ports = res.ports;
              _this2.regions = Object.keys(res.ports).sort();
              console.log(_this2.regions);
              _this2.portsArray = Object.values(res.ports);
              _this2.riceQuality = res.riceQuality;
              _this2.fiftykgMaster = res.fiftykgMaster;
              _this2.defalutPort = res.defalutPort;
              _this2.defalutPortPrice = parseFloat(res.defalutPortPrice);
              _this2.CIFminData = parseFloat(res.FOB.fobmin) + _this2.defalutPortPrice;
              _this2.CIFmaxData = parseFloat(res.FOB.fobmax) + _this2.defalutPortPrice;
            }, function (err) {
              _this2.componentService.loadingController.dismiss();
            });
          });
        }
      }, {
        key: "changeBag",
        value: function changeBag(data) {
          var modifiedAmount = parseFloat(data.detail.value).toFixed(2);
          var fobmin = parseFloat(this.fobminData).toFixed(2);
          var fobmax = parseFloat(this.fobmaxData).toFixed(2);
          var fiftyKGBagSize = parseFloat(this.fiftykgMaster.PMT_USD).toFixed(2);
          var removedMinFiftyKgBag = fobmin - fiftyKGBagSize;
          var removedMaxFiftyKgBag = fobmax - fiftyKGBagSize;
          var newFOBminDATA = parseFloat(removedMinFiftyKgBag + parseFloat(modifiedAmount));
          var newFOBmaxDATA = parseFloat(removedMaxFiftyKgBag + parseFloat(modifiedAmount));
          this.fobminData = newFOBminDATA;
          this.fobmaxData = newFOBmaxDATA;
          this.CIFminData = newFOBminDATA + this.defalutPortPrice;
          this.CIFmaxData = newFOBmaxDATA + this.defalutPortPrice;
        }
      }, {
        key: "changeRegion",
        value: function changeRegion(data) {
          var region = data.detail.value;
          this.selectedRegion = region;
          this.country = Object.keys(this.ports[region]).sort();
        }
      }, {
        key: "changeCountry",
        value: function changeCountry(data) {
          var countries = data.detail.value;
          this.selectedCountry = countries;
          this.selectedPorts = this.ports[this.selectedRegion][this.selectedCountry];
          this.selectedPorts = Object.keys(this.selectedPorts).sort();
        }
      }, {
        key: "changePort",
        value: function changePort(data) {
          var oldDefaultPortName = this.defalutPort;
          var oldReplacedWithUnderscore = oldDefaultPortName.split(' ').join('_');
          var OldportPrice = this.defalutPortPrice;
          this.defalutPort = data.detail.value;
          var portData = this.ports[this.selectedRegion][this.selectedCountry][data.detail.value];
          this.defalutPortPrice = portData[0].freight_25MT_1MT;
          this.CIFminData = parseFloat(this.CIFminData) - OldportPrice + parseFloat(portData[0].freight_25MT_1MT);
          this.CIFmaxData = parseFloat(this.CIFmaxData) - OldportPrice + parseFloat(portData[0].freight_25MT_1MT);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.navCtrl.pop();
        }
      }]);

      return QualityDetailsPage;
    }();

    QualityDetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }];
    };

    QualityDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quality-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quality-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/quality-details/quality-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quality-details.page.scss */
      "./src/app/quality-details/quality-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])], QualityDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=quality-details-quality-details-module-es5.js.map