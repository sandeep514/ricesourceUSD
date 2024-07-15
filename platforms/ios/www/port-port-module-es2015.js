(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["port-port-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/port/port.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/port/port.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"\" style=\"background-color: #ECECEC;\">\n\t<ion-toolbar mode=\"ios\" style=\"background: transparent; --background: transparent\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"closeModal()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Freight</ion-title>\n\t</ion-toolbar>\n\t<ion-row class=\"here\" *ngIf=\"portImages != undefined\">\n\t\t<img src=\"{{imagePre}}uploads/port/{{ portImages.attachment }}\" class=\"app-logo\" style=\"width: 100%;\" />\n\t</ion-row>\n\n</ion-header>\n\n<ion-content class=\"\" style=\"border: 2px solid red;\">\n\t<div style=\"margin-bottom: 55px;\">\n\t\t<ion-row style=\"padding-top: 14px;height: auto;\">\n\t\t\t<ion-col class=\"pt0 pb0 \" style=\"padding: 0px;\">\n\t\t\t\t<!-- <div class=\"scroll-arrow\">\n\t\t\t\t\t<img src=\"./../../assets/RINGH.png\" alt=\"\" (click)=\"scroll('left','table-responsive-1')\" class=\"righticon\">\n\t\t\t\t\t&nbsp;&nbsp;\n\t\t\t\t\t<img src=\"./../../assets/LEFT.png\" alt=\"\" (click)=\"scroll('right','table-responsive-1')\" class=\"lefticon\">\n\t\t\t\t</div> -->\n\t\t\t\t<ion-segment scrollable (click)=\"getPortDetails($event)\" value=\"{{ states }}\"\n\t\t\t\t\tclass=\"header-segment table-responsive-1 basmatiState\">\n\t\t\t\t\t<ng-container *ngFor=\"let data of listStates | keyvalue\">\n\t\t\t\t\t\t<ion-segment-button id=\"{{ lowerCase(states.key) }}\" value=\"{{ states.key }}\"\n\t\t\t\t\t\t\t[class.active]=\"lowerCase(states.key) == selectedTransportState\"\n\t\t\t\t\t\t\t*ngFor=\"let states of data.value | keyvalue\">\n\t\t\t\t\t\t\t<ion-label style=\"margin-top: -2px\"> {{ states.key }}</ion-label>\n\t\t\t\t\t\t</ion-segment-button>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ion-segment>\n\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ng-container>\n\t\t\t<ion-row class=\"ion-padding table-row padd-5 paddingBottom100\" style=\"padding: 0px 10px;\">\n\t\t\t\t<ion-col class=\"price-table dashboard\">\n\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th class=\"sticky-col first-col left pl-10\" style=\"width:60%\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"black ricetype\" style=\"font-family: 'Poppins-SemiBold';font-size: 16px;\">\n\t\t\t\t\t\t\t\t\t\tDestination</h4>\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class=\"sticky-col first-col left pl-10\" style=\"width:60%\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"black ricetype\" style=\"font-family: 'Poppins-SemiBold';font-size: 16px;\">\n\t\t\t\t\t\t\t\t\t\tPrices in Qtls</h4>\n\t\t\t\t\t\t\t\t</th>\n\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<div class=\"popoverley\" (click)=\"removePopover()\"></div>\n\t\t\t\t\t\t</thead>\n\n\t\t\t\t\t\t<tbody class=\"user_price\">\n\t\t\t\t\t\t\t<tr *ngFor=\"let list of selectedPortData\" class=\"green\">\n\t\t\t\t\t\t\t\t<td class=\"sticky-col first-col left pl-10\"\n\t\t\t\t\t\t\t\t\tstyle=\"font-size: 14px !important;color: #464646;font-family: 'Poppins-Regular';\">\n\t\t\t\t\t\t\t\t\t{{ list.route.replace('_' , ' ') }}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"type-columns\"\n\t\t\t\t\t\t\t\t\tstyle=\"width:180px;border: none ;--border: none;color: #232000;font-size: 16px !important;font-family: 'Poppins-SemiBold';\">\n\t\t\t\t\t\t\t\t\t₹ {{ list.price }}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr *ngIf=\"isNull == true\">\n\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\tNo port found\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ng-container>\n\t</div>\n\t<button id=\"details\" (click)=\"Details()\"></button>\n\t<app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/port/port-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/port/port-routing.module.ts ***!
  \*********************************************/
/*! exports provided: PortPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortPageRoutingModule", function() { return PortPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _port_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./port.page */ "./src/app/port/port.page.ts");




const routes = [
    {
        path: '',
        component: _port_page__WEBPACK_IMPORTED_MODULE_3__["PortPage"]
    }
];
let PortPageRoutingModule = class PortPageRoutingModule {
};
PortPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PortPageRoutingModule);



/***/ }),

/***/ "./src/app/port/port.module.ts":
/*!*************************************!*\
  !*** ./src/app/port/port.module.ts ***!
  \*************************************/
/*! exports provided: PortPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortPageModule", function() { return PortPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _port_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./port-routing.module */ "./src/app/port/port-routing.module.ts");
/* harmony import */ var _port_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./port.page */ "./src/app/port/port.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let PortPageModule = class PortPageModule {
};
PortPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _port_routing_module__WEBPACK_IMPORTED_MODULE_5__["PortPageRoutingModule"]
        ],
        declarations: [_port_page__WEBPACK_IMPORTED_MODULE_6__["PortPage"]]
    })
], PortPageModule);



/***/ }),

/***/ "./src/app/port/port.page.scss":
/*!*************************************!*\
  !*** ./src/app/port/port.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\n.header-title {\n  color: #FFF;\n}\n\n.header-md::after {\n  background: none;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-toolbar ion-icon {\n  color: #000;\n}\n\n.header-title {\n  color: #000;\n}\n\nion-title {\n  padding: 0;\n  text-align: center;\n}\n\n.ion-card {\n  width: 900px;\n}\n\nion-card {\n  width: 17%;\n  text-align: center;\n  float: left;\n}\n\n.tf-tree {\n  clear: both;\n}\n\n.ioncard1 {\n  background: #d8f9fe;\n}\n\n.ioncard2 {\n  background: #d8f9fe;\n}\n\n.ioncard3 {\n  background: #d8f9fe;\n}\n\n.ioncard4 {\n  background: #d8f9fe;\n}\n\n.ioncard5 {\n  background: #d8f9fe;\n}\n\ntable,\nthead,\ntbody {\n  border: 1px solid #eeeeee;\n}\n\ntable {\n  width: 100%;\n}\n\ntable thead th {\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\ntable tbody tr {\n  border-bottom: 1px solid #ededed;\n}\n\ntable tbody td {\n  width: 50%;\n  text-align: center;\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.active {\n  background: #c9a27c;\n  --background: #c9a27c;\n  background-color: #c9a27c;\n  --background-color: #c9a27c;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n}\n\n.price-table table thead tr th {\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n  border-right: 1px solid #dfdfdf;\n}\n\ntable,\ntable thead,\ntable tbody,\ntable thead th,\ntable tbody tr,\ntable tbody tr td {\n  border: 0 !important;\n}\n\ntable thead,\ntable tbody,\ntable tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n\ntable thead tr {\n  border-bottom: 1px solid #cfcaab !important;\n}\n\ntable tbody tr {\n  border-bottom: 1px solid #cfcaab !important;\n}\n\ntable tr th {\n  padding: 0;\n  margin: 0;\n}\n\ntable tbody tr td {\n  text-align: left;\n  margin-left: 20px;\n  padding-left: 20px;\n}\n\n.pl-60 {\n  padding-left: 60px !important;\n}\n\n.pl-10 {\n  padding-left: 10px !important;\n}\n\n.left {\n  text-align: left;\n}\n\n.active {\n  background: #EEFCCE;\n  color: white !important;\n  border: 2px solid #EEFCCE !important;\n}\n\n.scroll-arrow {\n  position: absolute;\n  margin-top: 3.2%;\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 25px;\n  min-height: 40px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #E1E1E1;\n}\n\n.ios .header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 25px;\n  min-height: 40px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #E1E1E1;\n}\n\n.header-ios ion-toolbar {\n  border: 0px;\n  --border-width: 0px ;\n}\n\n.ios .type-columns {\n  border: 0px solid transparent !important;\n  --border: 0px solid transparent !important;\n}\n\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.basmatiState {\n  margin: 0px 10px 0px 10px;\n}\n\n.ricetype {\n  color: #000;\n  font-size: 30px;\n  font-family: GlacialIndifference-bold;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.font-17 {\n  font-size: 14px;\n  font-family: GlacialIndifference-bold;\n}\n\n.green {\n  color: #92B243;\n}\n\n.green td {\n  text-transform: capitalize;\n  font-size: 18px !important;\n}\n\n.porttitle {\n  font-size: 20px;\n}\n\n.segment-button-checked {\n  background: #EEFCCE;\n  color: white !important;\n  border: 2px solid #EEFCCE !important;\n}\n\n.segment-button-checked ion-label {\n  color: #779A20 !important;\n}\n\n.imageprev {\n  min-height: 200px;\n  max-height: 200px;\n  height: 200px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.paddingBottom100 {\n  padding-bottom: 100px;\n}\n\nion-segment {\n  height: 50px;\n}\n\nion-segment ion-segment-button ion-label {\n  margin: 0;\n  padding: 0;\n  margin-top: -2px;\n  color: #7b7966;\n  font-size: 14px;\n  font-family: \"Poppins-Bold\";\n  padding: 5px;\n}\n\nion-segment.active {\n  height: 50px;\n}\n\nion-segment.active ion-segment-button ion-label {\n  margin: 0;\n  padding: 0;\n  margin-top: -2px;\n  color: #779A20 !important;\n  font-size: 14px;\n  font-family: \"Poppins-Bold\";\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3BvcnQvcG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BvcnQvcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURBSTtFQUNJLGVBQUE7QUNFUjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQUk7RUFDSSxXQUFBO0FDRVI7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBOzs7RUFHSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBRENRO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtBQ0NaOztBREdRO0VBQ0ksZ0NBQUE7QUNEWjs7QURHUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNEWjs7QURNQTtFQUNJLDBCQUFBO0FDSEo7O0FETUE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ0hKOztBRFFJO0VBQ0ksV0FBQTtFQXVCQSxlQUFBO0FDM0JSOztBRE1ZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNKaEI7O0FETWdCO0VBRUksK0JBQUE7QUNMcEI7O0FEVVk7RUFDSSxZQUFBO0FDUmhCOztBRFNnQjtFQUNJLGVBQUE7RUFHQSwrQkFBQTtBQ1RwQjs7QURpQkE7Ozs7OztFQU1JLG9CQUFBO0FDZEo7O0FEaUJBOzs7RUFHSSxrQ0FBQTtFQUNBLHdDQUFBO0FDZEo7O0FEZ0JBO0VBQ0ksMkNBQUE7QUNiSjs7QURlQTtFQUNJLDJDQUFBO0FDWko7O0FEZUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ1pKOztBRGtCWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2ZoQjs7QURxQkE7RUFDSSw2QkFBQTtBQ2xCSjs7QURxQkE7RUFDSSw2QkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxnQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUNsQko7O0FEc0JBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNuQko7O0FEc0JBO0VBQ0kseUNBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ3JCSjs7QUR1QkE7RUFDSSx5Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDdEJKOztBRHdCQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBQ3JCSjs7QUR3Qkk7RUFDSSx3Q0FBQTtFQUNBLDBDQUFBO0FDckJSOztBRHlCQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxRQUFBO0FDdkJKOztBRDBCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxRQUFBO0FDeEJKOztBRDJCQTtFQUNJLHlCQUFBO0FDeEJKOztBRDJCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FDeEJKOztBRDJCQTtFQUNJLGVBQUE7RUFDQSxxQ0FBQTtBQ3hCSjs7QUQyQkE7RUFDSSxjQUFBO0FDeEJKOztBRHlCSTtFQUNJLDBCQUFBO0VBQ0EsMEJBQUE7QUN2QlI7O0FEMkJBO0VBQ0ksZUFBQTtBQ3hCSjs7QUQyQkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUN4Qko7O0FEeUJJO0VBQ0kseUJBQUE7QUN2QlI7O0FEMkJBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUN4Qko7O0FEMkJBO0VBQ0ksYUFBQTtBQ3hCSjs7QUQyQkE7RUFDSSxjQUFBO0FDeEJKOztBRDJCQTtFQUNJLHFCQUFBO0FDeEJKOztBRDBCQTtFQUNJLFlBQUE7QUN2Qko7O0FEeUJRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FDdkJaOztBRDJCQTtFQUNJLFlBQUE7QUN4Qko7O0FEMEJRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQ3hCWiIsImZpbGUiOiJzcmMvYXBwL3BvcnQvcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGYtdHJlZS5leGFtcGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbn1cblxuLmhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pb24tY2FyZCB7XG4gICAgd2lkdGg6IDkwMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgd2lkdGg6IDE3JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50Zi10cmVlIHtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLmlvbmNhcmQxIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDIge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkMyB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQ0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDUge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbnRhYmxlLFxudGhlYWQsXG50Ym9keSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRoZWFkIHtcbiAgICAgICAgdGgge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGQge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcGl0YWxpemUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjYzlhMjdjO1xuICAgIC0tYmFja2dyb3VuZDogI2M5YTI3YztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlhMjdjO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3Yztcbn1cblxuLnByaWNlLXRhYmxlIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIH1cbn1cblxudGFibGUsXG50YWJsZSB0aGVhZCxcbnRhYmxlIHRib2R5LFxudGFibGUgdGhlYWQgdGgsXG50YWJsZSB0Ym9keSB0cixcbnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudFxufVxuXG50YWJsZSB0aGVhZCxcbnRhYmxlIHRib2R5LFxudGFibGUgdGJvZHkgdHIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbnRhYmxlIHRoZWFkIHRye1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG59XG50YWJsZSB0Ym9keSB0cntcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0ciB0aCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbnRhYmxlIHtcbiAgICB0Ym9keSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBsLTYwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLnBsLTEwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNFRUZDQ0U7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0VFRkNDRSAhaW1wb3J0YW50O1xuICAgIFxufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMy4yJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgLy8gYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIC0td2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIC0tbWluLXdpZHRoOiBhdXRvO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTFFMUUxO1xufVxuLmlvcyAuaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAvLyBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgLS13aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgLS1taW4td2lkdGg6IGF1dG87XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMUUxRTE7XG59XG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcntcbiAgICBib3JkZXI6IDBweDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4XG59XG4uaW9ze1xuICAgIC50eXBlLWNvbHVtbnN7XG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5zY3JvbGwtYXJyb3cgLmxlZnRpY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTBweDtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgdG9wOiAwcHg7XG59XG5cbi5zY3JvbGwtYXJyb3cgLnJpZ2h0aWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMThweDtcbiAgICB0b3A6IDBweDtcbn1cblxuLmJhc21hdGlTdGF0ZSB7XG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IEdsYWNpYWxJbmRpZmZlcmVuY2UtYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZvbnQtMTcge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xufVxuXG4uZ3JlZW4ge1xuICAgIGNvbG9yOiAjOTJCMjQzO1xuICAgIHRkIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnBvcnR0aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4XG59ICAgXG5cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUVGQ0NFO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFRUZDQ0UgIWltcG9ydGFudDtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogIzc3OUEyMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmltYWdlcHJldiB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZGRpbmdCb3R0b20xMDAge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cbmlvbi1zZWdtZW50IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgICAgICAgICAgY29sb3I6ICM3Yjc5NjY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtQm9sZCc7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tc2VnbWVudC5hY3RpdmUge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgICAgICAgICBjb2xvcjogIzc3OUEyMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLUJvbGQnO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi50Zi10cmVlLmV4YW1wbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmJhY2stYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5pb24tdG9vbGJhciBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlvbi1jYXJkIHtcbiAgd2lkdGg6IDkwMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiAxNyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50Zi10cmVlIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5pb25jYXJkMSB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkMiB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkMyB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkNCB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkNSB7XG4gIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbnRhYmxlLFxudGhlYWQsXG50Ym9keSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSB0aGVhZCB0aCB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxudGFibGUgdGJvZHkgdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZDtcbn1cbnRhYmxlIHRib2R5IHRkIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNjOWEyN2M7XG4gIC0tYmFja2dyb3VuZDogI2M5YTI3YztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3YztcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjYzlhMjdjO1xufVxuXG4ucHJpY2UtdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIgdGgge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuXG50YWJsZSxcbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHksXG50YWJsZSB0aGVhZCB0aCxcbnRhYmxlIHRib2R5IHRyLFxudGFibGUgdGJvZHkgdHIgdGQge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRib2R5IHRyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGhlYWQgdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0Ym9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRyIHRoIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5wbC02MCB7XG4gIHBhZGRpbmctbGVmdDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4ucGwtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI0VFRkNDRTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFRUZDQ0UgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMy4yJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHdpZHRoOiBhdXRvO1xuICAtLXdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IGF1dG87XG4gIC0tbWluLXdpZHRoOiBhdXRvO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRTFFMUUxO1xufVxuXG4uaW9zIC5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICB3aWR0aDogYXV0bztcbiAgLS13aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiBhdXRvO1xuICAtLW1pbi13aWR0aDogYXV0bztcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgI0UxRTFFMTtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICBib3JkZXI6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCA7XG59XG5cbi5pb3MgLnR5cGUtY29sdW1ucyB7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1hcnJvdyAubGVmdGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHRvcDogMHB4O1xufVxuXG4uc2Nyb2xsLWFycm93IC5yaWdodGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxOHB4O1xuICB0b3A6IDBweDtcbn1cblxuLmJhc21hdGlTdGF0ZSB7XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDEwcHg7XG59XG5cbi5yaWNldHlwZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBHbGFjaWFsSW5kaWZmZXJlbmNlLWJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZvbnQtMTcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBHbGFjaWFsSW5kaWZmZXJlbmNlLWJvbGQ7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiAjOTJCMjQzO1xufVxuLmdyZWVuIHRkIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4ucG9ydHRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICNFRUZDQ0U7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRUVGQ0NFICFpbXBvcnRhbnQ7XG59XG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCBpb24tbGFiZWwge1xuICBjb2xvcjogIzc3OUEyMCAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2VwcmV2IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wYWRkaW5nQm90dG9tMTAwIHtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGhlaWdodDogNTBweDtcbn1cbmlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIGNvbG9yOiAjN2I3OTY2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtQm9sZFwiO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbmlvbi1zZWdtZW50LmFjdGl2ZSB7XG4gIGhlaWdodDogNTBweDtcbn1cbmlvbi1zZWdtZW50LmFjdGl2ZSBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBjb2xvcjogIzc3OUEyMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtQm9sZFwiO1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/port/port.page.ts":
/*!***********************************!*\
  !*** ./src/app/port/port.page.ts ***!
  \***********************************/
/*! exports provided: PortPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortPage", function() { return PortPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components.service */ "./src/app/components.service.ts");






let PortPage = class PortPage {
    constructor(apiser, navCtrl, componentService) {
        this.apiser = apiser;
        this.navCtrl = navCtrl;
        this.componentService = componentService;
        this.areaData = "gujarat";
        this.selectedTransportState = '';
        this.selectedPortData = '';
        this.isNull = false;
        this.imagePre = this.apiser.imageUrl;
        this.getTransportState();
    }
    ngOnInit() {
        this.getTransportState();
        this.getTransportState();
        this.componentService.selectedPort.subscribe((data) => {
            this.selectedTransportState = data;
        });
    }
    getTransportState() {
        this.componentService.presentLoading().then(() => {
            this.apiser.getTransportStates().then((res) => {
                this.listStates = res.data;
                if (this.listStates.length > 0) {
                    let keys = Object.keys(this.listStates[0]);
                    let StateKeys = keys[0];
                    this.selectedTransportState = this.lowerCase(StateKeys);
                    console.log(this.selectedTransportState);
                }
                let inLowerCase = this.selectedTransportState.toLowerCase();
                console.log('inLowerCase');
                console.log(inLowerCase);
                this.getDetails(inLowerCase);
                this.componentService.loadingController.dismiss();
                setTimeout(() => {
                    this.componentService.loadingController.dismiss();
                }, 1000);
                setTimeout(() => {
                    document.getElementById(inLowerCase).click();
                    // document.getElementById(inLowerCase).classList.add('active');
                }, 1500);
            }, (err) => {
                this.componentService.loadingController.dismiss();
                setTimeout(() => {
                    this.componentService.loadingController.dismiss();
                }, 1000);
                this.componentService.loadingController.dismiss();
            });
        });
    }
    ionViewDidEnter() {
        this.getList().then((res) => {
            this.getDataDetails(this.areaData);
        }, (err) => {
        });
        // setTimeout(() => {
        // }, 7000);
    }
    scroll(direction, className) {
        if (direction == 'left') {
            jquery__WEBPACK_IMPORTED_MODULE_4__("." + className).animate({
                scrollLeft: "-=135px"
            }, "slow");
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_4__("." + className).animate({
                scrollLeft: "+=135px"
            }, "slow");
        }
    }
    removePopover() {
    }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiser.listPorts().then((res) => {
                this.listPort = res.list;
                resolve('true');
            }, (err) => {
                reject('false');
            });
        });
    }
    Details() {
    }
    explodeString(string) {
        let arrayLength = string.split(' ').length;
        console.log(string.split(' ')[(arrayLength - 1)]);
        return string.split(' ')[(arrayLength - 1)];
    }
    getPortDetails(area) {
        this.selectedTransportState = '';
        let targetName = area.target.innerText;
        let smallArea = targetName.toLowerCase();
        this.componentService.selectedPort.next(smallArea);
        // this.componentService.presentLoading().then(() => {
        this.apiser.getPortDetails(smallArea).then((res) => {
            this.selectedPortData = res.data;
            this.portImages = res.portImage;
            console.log(this.portImages);
            if (res.data.length == 0) {
                this.isNull = true;
            }
            else {
                this.isNull = false;
            }
            this.componentService.loadingController.dismiss();
            this.selectedTransportState = smallArea;
            console.log(smallArea);
            setTimeout(() => {
                this.componentService.loadingController.dismiss();
            }, 1000);
        }, (err) => {
            this.componentService.loadingController.dismiss();
            setTimeout(() => {
                this.componentService.loadingController.dismiss();
            }, 1000);
        });
        // });
    }
    getDetails(area) {
        if (area.target != undefined) {
            // this.componentService.presentLoading().then(() => {
            let targetName = area.target.innerText;
            let smallArea = targetName.toLowerCase();
            // document.getElementById(smallArea).click();
            this.apiser.getPortDetails(smallArea).then((res) => {
                this.selectedTransportState = smallArea;
                this.selectedPortData = res.data;
                this.portImages = res.portImage;
                console.log(this.portImages);
                this.componentService.loadingController.dismiss();
            }, (err) => {
                this.componentService.loadingController.dismiss();
            });
            // })
        }
        // this.listPortArea = this.listPort[area.detail.value];
        // var element1 = document.getElementById('bundi');
        // // element1.classList.remove("active");
        // var element2 = document.getElementById('gujrat');
        // // element2.classList.remove("active");
        // var element3 = document.getElementById('haryana');
        // // element3.classList.remove("active");
        // var element4 = document.getElementById('madhya_pradesh');
        // // element4.classList.remove("active");
        // var element5 = document.getElementById('punjab');
        // // element5.classList.remove("active");
        // var element = document.getElementById(area);
        // // element.classList.add("active");
        // this.areaData = area.detail.value;
    }
    getDataDetails(area) {
        this.listPortArea = this.listPort[area];
        this.areaData = area;
    }
    closeModal() {
        this.navCtrl.back();
    }
    lowerCase(string) {
        let str = string.toLowerCase();
        return str;
    }
    convertedToJson(string) {
        console.log(typeof string);
        console.log(string.banner);
        if (string != undefined) {
            if (typeof string == 'object') {
                return string.banner;
            }
        }
    }
};
PortPage.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"] }
];
PortPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-port',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./port.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/port/port.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./port.page.scss */ "./src/app/port/port.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"]])
], PortPage);



/***/ })

}]);
//# sourceMappingURL=port-port-module-es2015.js.map