(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quality-details-quality-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quality-details/quality-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quality-details/quality-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"\">\n\t<ion-toolbar mode=\"ios\" style=\"background: transparent; --background: transparent;padding: 0px;\">\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"closeModal()\">\n\t\t\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t\t\t</ion-buttons>\n\t\t\t</div>\n\n\t\t</div>\n\n\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"\">\n\t<div style=\"margin-bottom: 50px; padding: 0px 20px;\">\n\n\t\t<div style=\"border-bottom: 2px solid #000;margin: 20px 0px\">\n\t\t\t<div style=\"text-align: center;font-weight: bold;font-size: 20px\">\n\t\t\t\t{{ riceQuality?.quality }} {{ riceQuality?.quality_name }}\n\t\t\t</div>\n\t\t\t<!-- <p style=\"font-size: 18px;font-weight: bold;text-align: center;\">Customised Packing Price</p> -->\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"12\" style=\"font-size: 20px;line-height: 2.5;\">Packing: </ion-col>\n\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;\">\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<ion-item class=\"select\">\n\t\t\t\t\t\t\t\t<!-- <ion-label style=\"font-size: 15px;\">Packing</ion-label> -->\n\n\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeBag($event)\">\n\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let bag of packing\" value=\"{{ bag?.id }}\">\n\t\t\t\t\t\t\t\t\t\t{{bag?.bag_size }} <div></div> {{ bag?.bag_type }}\n\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<!-- <ion-row style=\"width: 100%;\">\n\t\t\t\t\t\t<ion-col style=\"text-align: right;margin-right: 15px;\">{{ selectedPackage }}</ion-col>\n\t\t\t\t\t</ion-row> -->\n\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"12\" style=\"font-size: 20px;line-height: 2.5\">FOB Price: </ion-col>\n\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;\">\n\t\t\t\t\t<ion-item class=\"select\" style=\"\">\n\t\t\t\t\t\t<!-- <ion-label style=\"font-size: 15px;\">region</ion-label> -->\n\t\t\t\t\t\t<h4 style=\"padding: 0;margin: 0;width: 100%;text-align: left;\">${{ fobminDataUpdated }} - ${{\n\t\t\t\t\t\t\tfobmaxDataUpdated }} PMT</h4>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"12\" style=\"font-size: 20px;line-height: 2.5\">Port: </ion-col>\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;margin-bottom: 15px;\">\n\t\t\t\t\t\t\t<ion-item class=\"select\" style=\"\">\n\t\t\t\t\t\t\t\t<ion-label style=\"font-size: 15px;\">REGION</ion-label>\n\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select\" [(ngModel)]=\"selectedUserRegion\"\n\t\t\t\t\t\t\t\t\t(ionChange)=\"changeRegion($event)\">\n\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let region of regions\">{{ region }}</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;float: right;margin-right: 10px;\">{{ selectedUserRegion }}</p> -->\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;margin-bottom: 15px;\">\n\t\t\t\t\t\t\t<ion-item class=\"select\" style=\"\">\n\t\t\t\t\t\t\t\t<ion-label style=\"font-size: 15px;\">COUNTRY</ion-label>\n\n\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeCountry($event)\">\n\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let ctry of country\">{{ ctry }}</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;float: right;margin-right: 10px;\">{{ selectedUserCountry }}</p> -->\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;margin-bottom: 15px;\">\n\t\t\t\t\t\t\t<ion-item class=\"select\" style=\"\">\n\t\t\t\t\t\t\t\t<ion-label style=\"font-size: 15px;\">PORT</ion-label>\n\n\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePort($event)\">\n\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let ctry of selectedPorts\">{{ ctry }}</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;float: right;margin-right: 10px;\">{{ defalutPort }}</p> -->\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<p style=\"margin-left: 5px;font-size: 14px;padding: 0px\">Ocean Freight PMT: </p>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<p\n\t\t\t\t\t\tstyle=\"font-size: 14px; text-transform: uppercase; font-weight: bold; list-style: none; padding: 0; text-align: right;margin-right: 14px;color: rgba(119, 154, 32, 1)\">\n\t\t\t\t\t\t{{ defalutPort }} (${{ defalutPortPrice }})</p>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<p style=\"margin-left: 5px;font-size: 14px;padding: 0px\">CIF Price:</p>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\" 6\">\n\t\t\t\t\t<p\n\t\t\t\t\t\tstyle=\"font-size: 14px; text-transform: uppercase; font-weight: bold; list-style: none; padding: 0; text-align: right;margin-right: 14px;color: rgba(119, 154, 32, 1);\">\n\t\t\t\t\t\t${{CIFminData}} - ${{CIFmaxData}} PMT</p>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\t\t<!-- <div>\n\t\t\t{{ riceQuality?.quality }} {{ riceQuality?.quality_name }}\n\t\t</div> -->\n\t\t<div style=\"text-align: center;font-size: 20px;\">\n\t\t\tRice Graph\n\t\t</div>\n\t\t<ion-row style=\"margin-bottom: 100px;\">\n\t\t\t<ion-col size=\"0.5\">\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<div id=\"highcharts\" style=\"width: 100%; height:300\"></div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"0.5\">\n\t\t\t</ion-col>\n\n\t\t</ion-row>\n\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/quality-details/quality-details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/quality-details/quality-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: QualityDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityDetailsPageRoutingModule", function() { return QualityDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quality_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quality-details.page */ "./src/app/quality-details/quality-details.page.ts");




const routes = [
    {
        path: '',
        component: _quality_details_page__WEBPACK_IMPORTED_MODULE_3__["QualityDetailsPage"]
    }
];
let QualityDetailsPageRoutingModule = class QualityDetailsPageRoutingModule {
};
QualityDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QualityDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/quality-details/quality-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/quality-details/quality-details.module.ts ***!
  \***********************************************************/
/*! exports provided: QualityDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityDetailsPageModule", function() { return QualityDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _quality_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quality-details-routing.module */ "./src/app/quality-details/quality-details-routing.module.ts");
/* harmony import */ var _quality_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quality-details.page */ "./src/app/quality-details/quality-details.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








// import { IonicSelectableModule } from 'ionic-selectable';
let QualityDetailsPageModule = class QualityDetailsPageModule {
};
QualityDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            // IonicSelectableModule,
            _quality_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["QualityDetailsPageRoutingModule"],
        ],
        declarations: [_quality_details_page__WEBPACK_IMPORTED_MODULE_6__["QualityDetailsPage"]]
    })
], QualityDetailsPageModule);



/***/ }),

/***/ "./src/app/quality-details/quality-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/quality-details/quality-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\n.header-title {\n  color: #FFF;\n}\n\n.header-md::after {\n  background: none;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-toolbar ion-icon {\n  color: #000;\n}\n\n.header-title {\n  color: #000;\n}\n\nion-title {\n  padding: 0;\n  text-align: center;\n}\n\n.ion-card {\n  width: 900px;\n}\n\nion-card {\n  width: 17%;\n  text-align: center;\n  float: left;\n}\n\n.tf-tree {\n  clear: both;\n}\n\n.ioncard1 {\n  background: #d8f9fe;\n}\n\n.ioncard2 {\n  background: #d8f9fe;\n}\n\n.ioncard3 {\n  background: #d8f9fe;\n}\n\n.ioncard4 {\n  background: #d8f9fe;\n}\n\n.ioncard5 {\n  background: #d8f9fe;\n}\n\ntable,\nthead,\ntbody {\n  border: 1px solid #eeeeee;\n}\n\ntable {\n  width: 100%;\n}\n\ntable thead th {\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\ntable tbody tr {\n  border-bottom: 1px solid #ededed;\n}\n\ntable tbody td {\n  width: 50%;\n  text-align: center;\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.active {\n  background: #c9a27c;\n  --background: #c9a27c;\n  background-color: #c9a27c;\n  --background-color: #c9a27c;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n}\n\n.price-table table thead tr th {\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n  border-right: 1px solid #dfdfdf;\n}\n\ntable,\ntable thead,\ntable tbody,\ntable thead th,\ntable tbody tr,\ntable tbody tr td {\n  border: 0 !important;\n}\n\ntable thead,\ntable tbody,\ntable tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n\ntable thead tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tbody tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tr th {\n  padding: 0;\n  margin: 0;\n}\n\ntable tbody tr td {\n  text-align: left;\n  margin-left: 20px;\n  padding-left: 20px;\n}\n\n.pl-60 {\n  padding-left: 60px !important;\n}\n\n.pl-10 {\n  padding-left: 10px !important;\n}\n\n.left {\n  text-align: left;\n}\n\n.active {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.segment-button-checked {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.scroll-arrow {\n  position: absolute;\n  margin-top: 3.2%;\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 0px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.ios .header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 5px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.header-ios ion-toolbar {\n  border: 0px;\n  --border-width: 0px ;\n}\n\n.ios .type-columns {\n  border: 0px solid transparent !important;\n  --border: 0px solid transparent !important;\n}\n\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.basmatiState {\n  margin: 10px 30px 0px 30px;\n}\n\n.ricetype {\n  color: #000;\n  font-size: 30px;\n  font-family: GlacialIndifference-bold;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.font-17 {\n  font-size: 14px;\n  font-family: GlacialIndifference-bold;\n}\n\n.green {\n  color: #92B243;\n}\n\n.green td {\n  text-transform: capitalize;\n  font-size: 18px !important;\n}\n\n.porttitle {\n  font-size: 20px;\n}\n\nion-segment ion-segment-button ion-label {\n  margin: 0;\n  padding: 0;\n  margin-top: -2px;\n}\n\n.imageprev {\n  min-height: 200px;\n  max-height: 200px;\n  height: 200px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.paddingBottom100 {\n  padding-bottom: 100px;\n}\n\n.item-native {\n  background-color: transparent;\n  --background-color: transparent;\n  background: transparent;\n  --background: transparent;\n}\n\n.item-ionic-selectable {\n  border: 2px solid #92b243;\n  border-radius: 10px;\n}\n\n.item-ionic-selectable .item-native {\n  background-color: transparent;\n  --background-color: transparent;\n  background: transparent;\n  --background: transparent;\n}\n\nion-col {\n  padding: 0px;\n}\n\nion-select {\n  width: 100%;\n}\n\n.select-placeholder {\n  color: #000;\n  --placeholder-color: #000 !important ;\n}\n\nion-select {\n  --placeholder-color: #000 !important;\n  --placeholder-opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3F1YWxpdHktZGV0YWlscy9xdWFsaXR5LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9xdWFsaXR5LWRldGFpbHMvcXVhbGl0eS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENJO0VBQ0ksZUFBQTtBQ0NSOztBREdBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURFSTtFQUNJLFdBQUE7QUNBUjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0FDREo7O0FESUE7OztFQUdJLHlCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FESVE7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0FDRlo7O0FET1E7RUFDSSxnQ0FBQTtBQ0xaOztBRFFRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQ05aOztBRFdBO0VBQ0ksMEJBQUE7QUNSSjs7QURXQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDUko7O0FEY0k7RUFDSSxXQUFBO0VBNEJBLGVBQUE7QUN0Q1I7O0FEYVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ1hoQjs7QURjZ0I7RUFFSSwrQkFBQTtBQ2JwQjs7QURtQlk7RUFDSSxZQUFBO0FDakJoQjs7QURtQmdCO0VBQ0ksZUFBQTtFQUdBLCtCQUFBO0FDbkJwQjs7QUQ0QkE7Ozs7OztFQU1JLG9CQUFBO0FDekJKOztBRDRCQTs7O0VBR0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ3pCSjs7QUQ0QkE7RUFDSSwyQ0FBQTtBQ3pCSjs7QUQ0QkE7RUFDSSwyQ0FBQTtBQ3pCSjs7QUQ0QkE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ3pCSjs7QUQrQlk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUM1QmhCOztBRGtDQTtFQUNJLDZCQUFBO0FDL0JKOztBRGtDQTtFQUNJLDZCQUFBO0FDL0JKOztBRGtDQTtFQUNJLGdCQUFBO0FDL0JKOztBRGtDQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQy9CSjs7QURrQ0E7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUMvQko7O0FEa0NBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUMvQko7O0FEa0NBO0VBQ0kseUNBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2pDSjs7QURvQ0E7RUFDSSx5Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDbkNKOztBRHNDQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBQ25DSjs7QUR1Q0k7RUFDSSx3Q0FBQTtFQUNBLDBDQUFBO0FDcENSOztBRHdDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxRQUFBO0FDdENKOztBRHlDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxRQUFBO0FDdkNKOztBRDBDQTtFQUNJLDBCQUFBO0FDdkNKOztBRDBDQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FDdkNKOztBRDBDQTtFQUNJLGVBQUE7RUFDQSxxQ0FBQTtBQ3ZDSjs7QUQwQ0E7RUFDSSxjQUFBO0FDdkNKOztBRHlDSTtFQUNJLDBCQUFBO0VBQ0EsMEJBQUE7QUN2Q1I7O0FEMkNBO0VBQ0ksZUFBQTtBQ3hDSjs7QUQ2Q1E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDMUNaOztBRCtDQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDNUNKOztBRCtDQTtFQUNJLGFBQUE7QUM1Q0o7O0FEK0NBO0VBQ0ksY0FBQTtBQzVDSjs7QUQrQ0E7RUFDSSxxQkFBQTtBQzVDSjs7QUQrQ0E7RUFDSSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQzVDSjs7QUQrQ0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FDNUNKOztBRDhDSTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDNUNSOztBRGdEQTtFQUNJLFlBQUE7QUM3Q0o7O0FEZ0RBO0VBQ0ksV0FBQTtBQzdDSjs7QURnREE7RUFDSSxXQUFBO0VBQ0EscUNBQUE7QUM3Q0o7O0FEZ0RBO0VBQ0ksb0NBQUE7RUFDQSxtQ0FBQTtBQzdDSiIsImZpbGUiOiJzcmMvYXBwL3F1YWxpdHktZGV0YWlscy9xdWFsaXR5LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRmLXRyZWUuZXhhbXBsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogI0ZGRjtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlvbi1jYXJkIHtcbiAgICB3aWR0aDogOTAwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgICB3aWR0aDogMTclO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLnRmLXRyZWUge1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4uaW9uY2FyZDEge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkMiB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDQge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkNSB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxudGFibGUsXG50aGVhZCxcbnRib2R5IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICB0aGVhZCB7XG4gICAgICAgIHRoIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FwaXRhbGl6ZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNjOWEyN2M7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzlhMjdjO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWEyN2M7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjYzlhMjdjO1xufVxuXG4ucHJpY2UtdGFibGUge1xuXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG5cbiAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxufVxuXG50YWJsZSxcbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHksXG50YWJsZSB0aGVhZCB0aCxcbnRhYmxlIHRib2R5IHRyLFxudGFibGUgdGJvZHkgdHIgdGQge1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50XG59XG5cbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHksXG50YWJsZSB0Ym9keSB0ciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0aGVhZCB0ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGJvZHkgdHIge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRyIHRoIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxudGFibGUge1xuICAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucGwtNjAge1xuICAgIHBhZGRpbmctbGVmdDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4ucGwtMTAge1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzkyQjI0MztcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDMuMiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAzMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgLy8gYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIC0td2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIC0tbWluLXdpZHRoOiBhdXRvO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xufVxuXG4uaW9zIC5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtaW4taGVpZ2h0OiAzMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgLy8gYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIC0td2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIC0tbWluLXdpZHRoOiBhdXRvO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweFxufVxuXG4uaW9zIHtcbiAgICAudHlwZS1jb2x1bW5zIHtcbiAgICAgICAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgLS1ib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnNjcm9sbC1hcnJvdyAubGVmdGljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMThweDtcbiAgICB0b3A6IDBweDtcbn1cblxuLnNjcm9sbC1hcnJvdyAucmlnaHRpY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIHRvcDogMHB4O1xufVxuXG4uYmFzbWF0aVN0YXRlIHtcbiAgICBtYXJnaW46IDEwcHggMzBweCAwcHggMzBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IEdsYWNpYWxJbmRpZmZlcmVuY2UtYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZvbnQtMTcge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xufVxuXG4uZ3JlZW4ge1xuICAgIGNvbG9yOiAjOTJCMjQzO1xuXG4gICAgdGQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ucG9ydHRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHhcbn1cblxuaW9uLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmltYWdlcHJldiB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZGRpbmdCb3R0b20xMDAge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pdGVtLWlvbmljLXNlbGVjdGFibGUge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIC5pdGVtLW5hdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbmlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMwMDAgIWltcG9ydGFudFxufVxuXG5pb24tc2VsZWN0IHtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59IiwiLnRmLXRyZWUuZXhhbXBsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICNGRkY7XG59XG4uYmFjay1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDk0ZjU4O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbmlvbi10b29sYmFyIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW9uLWNhcmQge1xuICB3aWR0aDogOTAwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDE3JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRmLXRyZWUge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmlvbmNhcmQxIHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQyIHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQzIHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQ0IHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQ1IHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxudGFibGUsXG50aGVhZCxcbnRib2R5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlIHRoZWFkIHRoIHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWVlZWU7XG59XG50YWJsZSB0Ym9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xufVxudGFibGUgdGJvZHkgdGQge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuXG4uY2FwaXRhbGl6ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2M5YTI3YztcbiAgLS1iYWNrZ3JvdW5kOiAjYzlhMjdjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlhMjdjO1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNjOWEyN2M7XG59XG5cbi5wcmljZS10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIge1xuICBoZWlnaHQ6IDM0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGJvZHkgdHIge1xuICBoZWlnaHQ6IDM1cHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGJvZHkgdHIgdGQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG5cbnRhYmxlLFxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRoZWFkIHRoLFxudGFibGUgdGJvZHkgdHIsXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0aGVhZCxcbnRhYmxlIHRib2R5LFxudGFibGUgdGJvZHkgdHIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0aGVhZCB0ciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRib2R5IHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbn1cblxudGFibGUgdHIgdGgge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnBsLTYwIHtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0xMCB7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGwtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDMuMiU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWluLWhlaWdodDogMzFweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHdpZHRoOiBhdXRvO1xuICAtLXdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IGF1dG87XG4gIC0tbWluLXdpZHRoOiBhdXRvO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xufVxuXG4uaW9zIC5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLWhlaWdodDogMzFweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHdpZHRoOiBhdXRvO1xuICAtLXdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IGF1dG87XG4gIC0tbWluLXdpZHRoOiBhdXRvO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIGJvcmRlcjogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4IDtcbn1cblxuLmlvcyAudHlwZS1jb2x1bW5zIHtcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1ib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsLWFycm93IC5sZWZ0aWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgei1pbmRleDogOTk5OTk5O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMnB4O1xuICB3aWR0aDogMThweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5zY3JvbGwtYXJyb3cgLnJpZ2h0aWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHRvcDogMHB4O1xufVxuXG4uYmFzbWF0aVN0YXRlIHtcbiAgbWFyZ2luOiAxMHB4IDMwcHggMHB4IDMwcHg7XG59XG5cbi5yaWNldHlwZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBHbGFjaWFsSW5kaWZmZXJlbmNlLWJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZvbnQtMTcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBHbGFjaWFsSW5kaWZmZXJlbmNlLWJvbGQ7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiAjOTJCMjQzO1xufVxuLmdyZWVuIHRkIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4ucG9ydHRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG4uaW1hZ2VwcmV2IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wYWRkaW5nQm90dG9tMTAwIHtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pdGVtLWlvbmljLXNlbGVjdGFibGUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLml0ZW0taW9uaWMtc2VsZWN0YWJsZSAuaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMDAwO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQgO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/quality-details/quality-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/quality-details/quality-details.page.ts ***!
  \*********************************************************/
/*! exports provided: QualityDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityDetailsPage", function() { return QualityDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components.service */ "./src/app/components.service.ts");
/* harmony import */ var _planpage_planpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../planpage/planpage.page */ "./src/app/planpage/planpage.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let QualityDetailsPage = class QualityDetailsPage {
    constructor(navCtrl, apiser, loading, compSer, ModelCtrl, componentService, activRoute) {
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
        this.compSer.isUserExpired.subscribe((res) => {
            if (localStorage.getItem('isExpired') == 'true') {
                this.presentModel();
            }
        });
        this.ports = [
            { id: 1, name: 'Tokai' },
            { id: 2, name: 'Vladivostok' },
            { id: 3, name: 'Navlakhi' }
        ];
        this.activRoute.params.subscribe((params) => {
            this.riceQualityId = params.riceQuality;
            this.getAllCountryPorts();
        });
    }
    presentModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const model = yield this.ModelCtrl.create({
                component: _planpage_planpage_page__WEBPACK_IMPORTED_MODULE_6__["PlanpagePage"],
                animated: true
            });
            yield model.present();
        });
    }
    gotoProfile() {
        this.navCtrl.navigateForward(['profile']);
    }
    parseValue(value) {
        return value.split(' ').join('_');
    }
    ngOnInit() {
        this.userFirstName = localStorage.getItem('name')[0];
    }
    getChartInterval() {
        // this.apiser.getChartInterval().then((res:any) => {
        // 	this.chartIntervals = res.chartinterval;
        // });
    }
    presentLoader(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loading.create({
                message: message
            });
            yield this.loader.present();
        });
    }
    loginProfile() {
    }
    scroll(direction, className) {
        if (direction == 'left') {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + className).animate({
                scrollLeft: "-=135px"
            }, "slow");
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + className).animate({
                scrollLeft: "+=135px"
            }, "slow");
        }
    }
    changeName(name) {
        let newname = name.split('_').join(' ').toUpperCase();
        return newname;
    }
    getAllCountryPorts() {
        this.componentService.presentLoading().then(() => {
            this.apiser.getAllPorts(this.riceQualityId).then((res) => {
                console.log('combinedData');
                console.log(res.chartData.combinedData);
                this.packing = res.packing;
                this.FOB = res.FOB;
                this.fobminData = res.FOB.fobmin;
                this.fobmaxData = res.FOB.fobmax;
                this.ports = res.ports;
                this.regions = (Object.keys(res.ports)).sort();
                this.portsArray = Object.values(res.ports);
                this.riceQuality = res.riceQuality;
                this.fiftykgMaster = res.fiftykgMaster;
                this.defalutPort = res.defalutPort;
                this.selectedUserCountry = res.defalutPortDetail[0].country;
                this.selectedUserRegion = res.defalutPortDetail[0].region;
                console.log(this.defalutPort);
                this.defalutPortPrice = parseFloat(res.defalutPortPrice);
                this.CIFminData = (parseFloat(res.FOB.fobmin) + (this.defalutPortPrice));
                this.CIFmaxData = (parseFloat(res.FOB.fobmax) + (this.defalutPortPrice));
                this.selectedPackage = res.fiftykgMaster.bag_size + ' ' + res.fiftykgMaster.bag_type;
                // Data retrieved from https://www.vikjavev.no/ver/#2020-04-15,2020-04-16
                Highcharts.chart('highcharts', {
                    chart: {
                        type: 'spline',
                        scrollablePlotArea: {
                            minWidth: 600,
                            scrollPositionX: 1
                        }
                    },
                    yAxis: {
                        opposite: false,
                        labels: {
                            align: 'left',
                        },
                        title: {
                            text: "Price( per Quintal )",
                            x: -12
                        }
                    },
                    title: {
                        text: 'Rice Graph',
                        align: 'left'
                    },
                    // subtitle: {
                    // 	text: '15th & 16th of April, 2020 at two locations in Vik i Sogn, Norway',
                    // 	align: 'left'
                    // },
                    xAxis: {
                        type: 'datetime',
                        labels: {
                            overflow: 'justify'
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
                            }],
                    },
                    tooltip: {
                        valueSuffix: ''
                    },
                    plotOptions: {
                        spline: {
                            lineWidth: 4,
                            states: {
                                hover: {
                                    lineWidth: 5
                                }
                            },
                            marker: {
                                enabled: false
                            },
                            pointInterval: 3600000,
                            pointStart: Date.UTC(2020, 3, 15, 0, 0, 0)
                        }
                    },
                    series: [{
                            name: 'Price',
                            data: res.chartData.combinedData
                        }],
                    navigation: {
                        menuItemStyle: {
                            fontSize: '10px'
                        }
                    }
                });
                console.log("kjnk");
                this.componentService.loadingController.dismiss();
            }, (err) => {
                this.componentService.loadingController.dismiss();
            });
        });
    }
    getbagIndex(selectedData) {
        let packingList = this.packing;
        return new Promise(function (resolve, reject) {
            if (packingList.length == 0) {
                reject(false);
            }
            else {
                for (let i = 0; i < packingList.length; i++) {
                    if (selectedData == packingList[i].id) {
                        resolve(i);
                    }
                }
            }
        });
    }
    changeBag(data) {
        this.getbagIndex(data.detail.value).then((res) => {
            let bag_size = this.packing[res]['bag_size'];
            let bag_type = this.packing[res]['bag_type'];
            let bag_PMT_USD = this.packing[res]['PMT_USD'];
            this.selectedPackage = bag_size + ' ' + bag_type;
            let packingPMT_USD = bag_PMT_USD;
            let modifiedAmount = parseFloat(packingPMT_USD).toFixed(2);
            let fobmin = parseFloat(this.fobminData).toFixed(2);
            let fobmax = parseFloat(this.fobmaxData).toFixed(2);
            console.log(fobmin);
            console.log(fobmax);
            let fiftyKGBagSize = parseFloat(this.fiftykgMaster.PMT_USD).toFixed(2);
            let removedMinFiftyKgBag = (fobmin - fiftyKGBagSize);
            let removedMaxFiftyKgBag = (fobmax - fiftyKGBagSize);
            console.log(fiftyKGBagSize);
            console.log(removedMinFiftyKgBag);
            console.log(removedMaxFiftyKgBag);
            let newFOBminDATA = parseFloat((removedMinFiftyKgBag) + parseFloat(modifiedAmount));
            let newFOBmaxDATA = parseFloat(removedMaxFiftyKgBag + parseFloat(modifiedAmount));
            this.fobminDataUpdated = newFOBminDATA;
            this.fobmaxDataUpdated = newFOBmaxDATA;
            console.log(parseFloat(modifiedAmount));
            console.log(newFOBminDATA);
            console.log(newFOBmaxDATA);
            console.log(this.defalutPortPrice);
            this.CIFminData = ((newFOBminDATA) + (Number(this.defalutPortPrice)));
            this.CIFmaxData = (newFOBmaxDATA + (Number(this.defalutPortPrice)));
        }, (err) => {
            console.log(err);
        });
    }
    changeRegion(data) {
        let region = data.detail.value;
        this.selectedRegion = region;
        this.country = ((Object.keys(this.ports[region])).sort());
        this.defalutPort = '';
        this.selectedUserCountry = '';
    }
    changeCountry(data) {
        let countries = data.detail.value;
        this.selectedCountry = countries;
        this.selectedPorts = this.ports[this.selectedRegion][this.selectedCountry];
        this.selectedPorts = (Object.keys(this.selectedPorts).sort());
        this.selectedUserCountry = this.selectedCountry;
    }
    changePort(data) {
        let oldDefaultPortName = this.defalutPort;
        let oldReplacedWithUnderscore = oldDefaultPortName.split(' ').join('_');
        let OldportPrice = this.defalutPortPrice;
        this.defalutPort = data.detail.value;
        let portData = (this.ports[this.selectedRegion][this.selectedCountry][data.detail.value]);
        this.defalutPortPrice = portData[0].freight_25MT_1MT;
        this.CIFminData = ((parseFloat(this.CIFminData) - OldportPrice) + parseFloat(portData[0].freight_25MT_1MT));
        this.CIFmaxData = ((parseFloat(this.CIFmaxData) - OldportPrice) + parseFloat(portData[0].freight_25MT_1MT));
    }
    closeModal() {
        this.navCtrl.pop();
        if (localStorage.getItem('apptype') == 'OTHER') {
            this.navCtrl.navigateForward(['prices']);
        }
        else {
            this.navCtrl.navigateForward(['priceusd']);
        }
    }
};
QualityDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
QualityDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quality-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quality-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quality-details/quality-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quality-details.page.scss */ "./src/app/quality-details/quality-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], QualityDetailsPage);



/***/ })

}]);
//# sourceMappingURL=quality-details-quality-details-module-es2015.js.map