function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oceanfreights-oceanfreights-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/oceanfreights/oceanfreights.page.html": (
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oceanfreights/oceanfreights.page.html ***!
    \*********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOceanfreightsOceanfreightsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header class=\"\">\n\t<ion-toolbar mode=\"ios\" style=\"background: transparent; --background: transparent\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"close()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Freight</ion-title>\n\t</ion-toolbar>\n\t<!-- <ion-row >\n\t\t<ion-col style=\"padding: 0px;\">\n\t\t\t<div class=\"imageprev\" style=\"overflow: hidden;\">\n\t\t\t\t<div *ngIf=\"selectedPortData[0] != undefined \">\n\t\t\t\t\t<img src=\"{{ imagePre }}/uploads/banner/{{ selectedPortData[0].banner }}\" class=\"app-logo\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row> -->\n</ion-header>\n\n<ion-content class=\"\">\n\t<div style=\"height: 80%;overflow: scroll;\">\n\t\t<ion-row style=\"padding-top: 14px;\">\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item class=\"select\"\n\t\t\t\t\tstyle=\"background: rgba(238, 252, 206, 1);--background: rgba(238, 252, 206, 1);border-radius: 100px\">\n\t\t\t\t\t<ion-label>Region</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"\" (ionChange)=\"changecountry($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let region of regions\">{{ region }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-item class=\"select\"\n\t\t\t\t\tstyle=\"background: rgba(238, 252, 206, 1);--background: rgba(238, 252, 206, 1);border-radius: 100px\">\n\t\t\t\t\t<ion-label>Country</ion-label>\n\t\t\t\t\t<ion-select [(ngModel)]=\"selectedCoun\" placeholder=\"\" (ionChange)=\"getPortList($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let country of countries\">{{ country }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ng-container>\n\t\t\t<ion-row class=\"ion-padding table-row\" style=\"margin: 10px 0px;padding: 5px 0px;\">\n\t\t\t\t<ion-col class=\"price-table dashboard\">\n\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead style=\"background: rgba(255, 251, 214, 1) !important;\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th class=\" type-columns black\"\n\t\t\t\t\t\t\t\t\tstyle=\"font-weight: bold;width:40%;font-size: 14px;padding-left: 10px;text-align: left;font-family: 'Poppins-Regular'\">\n\t\t\t\t\t\t\t\t\tPorts\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class=\" type-columns black\"\n\t\t\t\t\t\t\t\t\tstyle=\"font-weight: bold;width:30%;font-size: 14px;font-family: 'Poppins-SemiBold'\">\n\t\t\t\t\t\t\t\t\t25MT Mundra\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\n\t\t\t\t\t\t<tbody class=\"user_price\">\n\t\t\t\t\t\t\t<tr *ngFor=\"let list of ports\" class=\"green\" style=\"height: 50px;\">\n\t\t\t\t\t\t\t\t<td class=\"sticky-col first-col left pl-10\"\n\t\t\t\t\t\t\t\t\tstyle=\"color: rgba(70, 70, 70, 1);font-size: 18px;width:40%;font-size: 14px !important;font-family: 'Poppins-Regular';text-align: left;padding-left: 20px;\">\n\t\t\t\t\t\t\t\t\t{{ list.port }}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"type-columns\"\n\t\t\t\t\t\t\t\t\tstyle=\"color: #000;width:30%;font-size: 16px !important;font-family: 'Poppins-SemiBold';text-align: center;padding: 0px\">\n\t\t\t\t\t\t\t\t\t$ {{ list.freight_21MT }} - {{ list.freight_25MT }}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr *ngIf=\"isNull == true\">\n\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\tNo port found\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ng-container>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/oceanfreights/oceanfreights-routing.module.ts": (
  /*!***************************************************************!*\
    !*** ./src/app/oceanfreights/oceanfreights-routing.module.ts ***!
    \***************************************************************/
  /*! exports provided: OceanfreightsPageRoutingModule */
  /***/
  function srcAppOceanfreightsOceanfreightsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OceanfreightsPageRoutingModule", function () {
      return OceanfreightsPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _oceanfreights_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./oceanfreights.page */"./src/app/oceanfreights/oceanfreights.page.ts");
    var routes = [{
      path: '',
      component: _oceanfreights_page__WEBPACK_IMPORTED_MODULE_3__["OceanfreightsPage"]
    }];
    var OceanfreightsPageRoutingModule = /*#__PURE__*/_createClass(function OceanfreightsPageRoutingModule() {
      _classCallCheck(this, OceanfreightsPageRoutingModule);
    });
    OceanfreightsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OceanfreightsPageRoutingModule);

    /***/
  }),
  /***/"./src/app/oceanfreights/oceanfreights.module.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/oceanfreights/oceanfreights.module.ts ***!
    \*******************************************************/
  /*! exports provided: OceanfreightsPageModule */
  /***/
  function srcAppOceanfreightsOceanfreightsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OceanfreightsPageModule", function () {
      return OceanfreightsPageModule;
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
    var _oceanfreights_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./oceanfreights-routing.module */"./src/app/oceanfreights/oceanfreights-routing.module.ts");
    /* harmony import */
    var _oceanfreights_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./oceanfreights.page */"./src/app/oceanfreights/oceanfreights.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var OceanfreightsPageModule = /*#__PURE__*/_createClass(function OceanfreightsPageModule() {
      _classCallCheck(this, OceanfreightsPageModule);
    });
    OceanfreightsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _oceanfreights_routing_module__WEBPACK_IMPORTED_MODULE_5__["OceanfreightsPageRoutingModule"]],
      declarations: [_oceanfreights_page__WEBPACK_IMPORTED_MODULE_6__["OceanfreightsPage"]]
    })], OceanfreightsPageModule);

    /***/
  }),
  /***/"./src/app/oceanfreights/oceanfreights.page.scss": (
  /*!*******************************************************!*\
    !*** ./src/app/oceanfreights/oceanfreights.page.scss ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppOceanfreightsOceanfreightsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\n.header-title {\n  color: #FFF;\n}\n\n.header-md::after {\n  background: none;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-toolbar ion-icon {\n  color: #000;\n}\n\n.header-title {\n  color: #000;\n}\n\nion-title {\n  padding: 0;\n  text-align: center;\n}\n\n.ion-card {\n  width: 900px;\n}\n\nion-card {\n  width: 17%;\n  text-align: center;\n  float: left;\n}\n\n.tf-tree {\n  clear: both;\n}\n\n.ioncard1 {\n  background: #d8f9fe;\n}\n\n.ioncard2 {\n  background: #d8f9fe;\n}\n\n.ioncard3 {\n  background: #d8f9fe;\n}\n\n.ioncard4 {\n  background: #d8f9fe;\n}\n\n.ioncard5 {\n  background: #d8f9fe;\n}\n\ntable,\nthead,\ntbody {\n  border: 1px solid #eeeeee;\n}\n\ntable {\n  width: 100%;\n}\n\ntable thead th {\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\ntable tbody tr {\n  border-bottom: 1px solid #ededed;\n}\n\ntable tbody td {\n  width: 50%;\n  text-align: center;\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.active {\n  background: #c9a27c;\n  --background: #c9a27c;\n  background-color: #c9a27c;\n  --background-color: #c9a27c;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 50px;\n  font-size: 12px;\n  background-color: #fffbd6 !important;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n}\n\ntable,\ntable thead,\ntable tbody,\ntable thead th,\ntable tbody tr,\ntable tbody tr td {\n  border: 0 !important;\n}\n\ntable thead,\ntable tbody,\ntable tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n\ntable tbody tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tr th {\n  padding: 0;\n  margin: 0;\n}\n\ntable tbody tr td {\n  text-align: left;\n  margin-left: 20px;\n  padding-left: 20px;\n}\n\n.pl-60 {\n  padding-left: 60px !important;\n}\n\n.pl-10 {\n  padding-left: 10px !important;\n}\n\n.left {\n  text-align: left;\n}\n\n.active {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.segment-button-checked {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.scroll-arrow {\n  position: absolute;\n  margin-top: 3.2%;\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 0px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.ios .header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 5px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.header-ios ion-toolbar {\n  border: 0px;\n  --border-width: 0px ;\n}\n\n.ios .type-columns {\n  border: 0px solid transparent !important;\n  --border: 0px solid transparent !important;\n}\n\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.basmatiState {\n  margin: 10px 30px 0px 30px;\n}\n\n.ricetype {\n  color: #000;\n  font-size: 30px;\n  font-family: GlacialIndifference-bold;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.font-17 {\n  font-size: 14px;\n  font-family: GlacialIndifference-bold;\n}\n\n.green {\n  color: #92B243;\n}\n\n.green td {\n  text-transform: capitalize;\n  font-size: 18px !important;\n}\n\n.porttitle {\n  font-size: 20px;\n}\n\nion-segment ion-segment-button ion-label {\n  margin: 0;\n  padding: 0;\n  margin-top: -2px;\n}\n\n.imageprev {\n  min-height: 200px;\n  max-height: 200px;\n  height: 200px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.paddingBottom100 {\n  padding-bottom: 100px;\n}\n\nlabel {\n  opacity: 1 !important;\n  --opacity: 1 !important;\n}\n\nion-select {\n  --placeholder-opacity: 1 !important;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9vY2VhbmZyZWlnaHRzL29jZWFuZnJlaWdodHMucGFnZS5zY3NzIiwic3JjL2FwcC9vY2VhbmZyZWlnaHRzL29jZWFuZnJlaWdodHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQUk7RUFDSSxlQUFBO0FDRVI7O0FERUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREFJO0VBQ0ksV0FBQTtBQ0VSOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTs7O0VBR0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURDUTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7QUNDWjs7QURHUTtFQUNJLGdDQUFBO0FDRFo7O0FER1E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDRFo7O0FETUE7RUFDSSwwQkFBQTtBQ0hKOztBRE1BO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUNISjs7QURRSTtFQUNJLFdBQUE7RUF3QkEsZUFBQTtBQzVCUjs7QURNWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNKaEI7O0FEYVk7RUFDSSxZQUFBO0FDWGhCOztBRFlnQjtFQUNJLGVBQUE7QUNWcEI7O0FEcUJBOzs7Ozs7RUFNSSxvQkFBQTtBQ2xCSjs7QURxQkE7OztFQUdJLGtDQUFBO0VBQ0Esd0NBQUE7QUNsQko7O0FEdUJBO0VBQ0ksMkNBQUE7QUNwQko7O0FEdUJBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUNwQko7O0FEMEJZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDdkJoQjs7QUQ2QkE7RUFDSSw2QkFBQTtBQzFCSjs7QUQ2QkE7RUFDSSw2QkFBQTtBQzFCSjs7QUQ2QkE7RUFDSSxnQkFBQTtBQzFCSjs7QUQ2QkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUMxQko7O0FENkJBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0FDMUJKOztBRDZCQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDMUJKOztBRDZCQTtFQUNJLHlDQUFBO0VBQ0EsaURBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUM1Qko7O0FEOEJBO0VBQ0kseUNBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQzdCSjs7QUQrQkE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUM1Qko7O0FEK0JJO0VBQ0ksd0NBQUE7RUFDQSwwQ0FBQTtBQzVCUjs7QURnQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsUUFBQTtBQzlCSjs7QURpQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsUUFBQTtBQy9CSjs7QURrQ0E7RUFDSSwwQkFBQTtBQy9CSjs7QURrQ0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQy9CSjs7QURrQ0E7RUFDSSxlQUFBO0VBQ0EscUNBQUE7QUMvQko7O0FEa0NBO0VBQ0ksY0FBQTtBQy9CSjs7QURnQ0k7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0FDOUJSOztBRGtDQTtFQUNJLGVBQUE7QUMvQko7O0FEb0NRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ2pDWjs7QURzQ0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ25DSjs7QURzQ0E7RUFDSSxhQUFBO0FDbkNKOztBRHNDQTtFQUNJLGNBQUE7QUNuQ0o7O0FEc0NBO0VBQ0kscUJBQUE7QUNuQ0o7O0FEcUNBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtBQ2xDSjs7QURvQ0E7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7QUNqQ0oiLCJmaWxlIjoic3JjL2FwcC9vY2VhbmZyZWlnaHRzL29jZWFuZnJlaWdodHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRmLXRyZWUuZXhhbXBsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICB9XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0OTRmNTg7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG5pb24tdGl0bGUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW9uLWNhcmQge1xuICAgIHdpZHRoOiA5MDBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIHdpZHRoOiAxNyU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udGYtdHJlZSB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5pb25jYXJkMSB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDMge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkNCB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQ1IHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG50YWJsZSxcbnRoZWFkLFxudGJvZHkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0aGVhZCB7XG4gICAgICAgIHRoIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0Ym9keSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xuICAgICAgICB9XG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWVlZWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2M5YTI3YztcbiAgICAtLWJhY2tncm91bmQ6ICNjOWEyN2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3YztcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNjOWEyN2M7XG59XG5cbi5wcmljZS10YWJsZSB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjUxLCAyMTQsIDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxufVxuXG50YWJsZSxcbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHksXG50YWJsZSB0aGVhZCB0aCxcbnRhYmxlIHRib2R5IHRyLFxudGFibGUgdGJvZHkgdHIgdGQge1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50XG59XG5cbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHksXG50YWJsZSB0Ym9keSB0ciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxudGFibGUgdGhlYWQgdHJ7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbn1cbnRhYmxlIHRib2R5IHRye1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRyIHRoIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxudGFibGUge1xuICAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucGwtNjAge1xuICAgIHBhZGRpbmctbGVmdDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4ucGwtMTAge1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzkyQjI0MztcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDMuMiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAzMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgLy8gYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIC0td2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIC0tbWluLXdpZHRoOiBhdXRvO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xufVxuLmlvcyAuaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWluLWhlaWdodDogMzFweDtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIC8vIGJveC1zaGFkb3c6IC0xcHggMXB4IDlweCAwcHggI0NDQztcbiAgICB3aWR0aDogYXV0bztcbiAgICAtLXdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAtLW1pbi13aWR0aDogYXV0bztcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0Mztcbn1cbi5oZWFkZXItaW9zIGlvbi10b29sYmFye1xuICAgIGJvcmRlcjogMHB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHhcbn1cbi5pb3N7XG4gICAgLnR5cGUtY29sdW1uc3tcbiAgICAgICAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgLS1ib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnNjcm9sbC1hcnJvdyAubGVmdGljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMThweDtcbiAgICB0b3A6IDBweDtcbn1cblxuLnNjcm9sbC1hcnJvdyAucmlnaHRpY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIHRvcDogMHB4O1xufVxuXG4uYmFzbWF0aVN0YXRlIHtcbiAgICBtYXJnaW46IDEwcHggMzBweCAwcHggMzBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IEdsYWNpYWxJbmRpZmZlcmVuY2UtYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZvbnQtMTcge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xufVxuXG4uZ3JlZW4ge1xuICAgIGNvbG9yOiAjOTJCMjQzO1xuICAgIHRkIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnBvcnR0aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4XG59ICAgXG5cbmlvbi1zZWdtZW50IHtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pbWFnZXByZXYge1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wYWRkaW5nQm90dG9tMTAwIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5sYWJlbHtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7ICAgXG4gICAgLS1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7ICAgXG59XG5pb24tc2VsZWN0IHtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2s7XG59IiwiLnRmLXRyZWUuZXhhbXBsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICNGRkY7XG59XG4uYmFjay1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDk0ZjU4O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbmlvbi10b29sYmFyIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW9uLWNhcmQge1xuICB3aWR0aDogOTAwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDE3JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRmLXRyZWUge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmlvbmNhcmQxIHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQyIHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQzIHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQ0IHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQ1IHtcbiAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxudGFibGUsXG50aGVhZCxcbnRib2R5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlIHRoZWFkIHRoIHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWVlZWU7XG59XG50YWJsZSB0Ym9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xufVxudGFibGUgdGJvZHkgdGQge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuXG4uY2FwaXRhbGl6ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2M5YTI3YztcbiAgLS1iYWNrZ3JvdW5kOiAjYzlhMjdjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlhMjdjO1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNjOWEyN2M7XG59XG5cbi5wcmljZS10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJkNiAhaW1wb3J0YW50O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG50YWJsZSxcbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHksXG50YWJsZSB0aGVhZCB0aCxcbnRhYmxlIHRib2R5IHRyLFxudGFibGUgdGJvZHkgdHIgdGQge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRib2R5IHRyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGJvZHkgdHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0ciB0aCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxudGFibGUgdGJvZHkgdHIgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ucGwtNjAge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLnBsLTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzkyQjI0MztcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMy4yJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtaW4taGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgd2lkdGg6IGF1dG87XG4gIC0td2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogYXV0bztcbiAgLS1taW4td2lkdGg6IGF1dG87XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG5cbi5pb3MgLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4taGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgd2lkdGg6IGF1dG87XG4gIC0td2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogYXV0bztcbiAgLS1taW4td2lkdGg6IGF1dG87XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgYm9yZGVyOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggO1xufVxuXG4uaW9zIC50eXBlLWNvbHVtbnMge1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGwtYXJyb3cgLmxlZnRpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxOHB4O1xuICB0b3A6IDBweDtcbn1cblxuLnNjcm9sbC1hcnJvdyAucmlnaHRpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogOTk5OTk5O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMnB4O1xuICB3aWR0aDogMThweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5iYXNtYXRpU3RhdGUge1xuICBtYXJnaW46IDEwcHggMzBweCAwcHggMzBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IEdsYWNpYWxJbmRpZmZlcmVuY2UtYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC0xNyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IEdsYWNpYWxJbmRpZmZlcmVuY2UtYm9sZDtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6ICM5MkIyNDM7XG59XG4uZ3JlZW4gdGQge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wb3J0dGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi5pbWFnZXByZXYge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZGRpbmdCb3R0b20xMDAge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbmxhYmVsIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAtLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/oceanfreights/oceanfreights.page.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/oceanfreights/oceanfreights.page.ts ***!
    \*****************************************************/
  /*! exports provided: OceanfreightsPage */
  /***/
  function srcAppOceanfreightsOceanfreightsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OceanfreightsPage", function () {
      return OceanfreightsPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../components.service */"./src/app/components.service.ts");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    var OceanfreightsPage = /*#__PURE__*/function () {
      function OceanfreightsPage(apiser, navCtrl, componentService, location) {
        _classCallCheck(this, OceanfreightsPage);
        this.apiser = apiser;
        this.navCtrl = navCtrl;
        this.componentService = componentService;
        this.location = location;
        this.selectedCoun = '';
      }
      return _createClass(OceanfreightsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTransportState();
        }
      }, {
        key: "getTransportState",
        value: function getTransportState() {
          var _this = this;
          this.componentService.presentLoading().then(function () {
            _this.apiser.getOceanPorts().then(function (res) {
              _this.componentService.loadingController.dismiss();
              _this.regions = Object.values(res.region).sort();
              _this.data = res.data;
              console.log(res.data);
            }, function (err) {
              _this.componentService.loadingController.dismiss();
            });
          });
        }
      }, {
        key: "changecountry",
        value: function changecountry(resign) {
          var resignValue = resign.detail.value;
          this.selectedResign = resignValue;
          this.countries = Object.keys(this.data[resignValue]).sort();
          this.ports = [];
          this.selectedCoun = '';
        }
      }, {
        key: "getPortList",
        value: function getPortList(resign) {
          var region = this.selectedResign;
          var countryName = resign.detail.value;
          var portsOfCountry = this.data[region][countryName];
          console.log(this.selectedCoun);
          this.ports = portsOfCountry;
          console.log(portsOfCountry);
        }
      }, {
        key: "close",
        value: function close() {
          this.location.back();
        }
      }]);
    }();
    OceanfreightsPage.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }];
    };
    OceanfreightsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-oceanfreights',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./oceanfreights.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/oceanfreights/oceanfreights.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./oceanfreights.page.scss */"./src/app/oceanfreights/oceanfreights.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])], OceanfreightsPage);

    /***/
  })
}]);
//# sourceMappingURL=oceanfreights-oceanfreights-module-es5.js.map