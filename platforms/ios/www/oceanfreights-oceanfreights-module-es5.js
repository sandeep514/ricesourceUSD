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
    __webpack_exports__["default"] = ".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\n.header-title {\n  color: #FFF;\n}\n\n.header-md::after {\n  background: none;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-toolbar ion-icon {\n  color: #000;\n}\n\n.header-title {\n  color: #000;\n}\n\nion-title {\n  padding: 0;\n  text-align: center;\n}\n\n.ion-card {\n  width: 900px;\n}\n\nion-card {\n  width: 17%;\n  text-align: center;\n  float: left;\n}\n\n.tf-tree {\n  clear: both;\n}\n\n.ioncard1 {\n  background: #d8f9fe;\n}\n\n.ioncard2 {\n  background: #d8f9fe;\n}\n\n.ioncard3 {\n  background: #d8f9fe;\n}\n\n.ioncard4 {\n  background: #d8f9fe;\n}\n\n.ioncard5 {\n  background: #d8f9fe;\n}\n\ntable,\nthead,\ntbody {\n  border: 1px solid #eeeeee;\n}\n\ntable {\n  width: 100%;\n}\n\ntable thead th {\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\ntable tbody tr {\n  border-bottom: 1px solid #ededed;\n}\n\ntable tbody td {\n  width: 50%;\n  text-align: center;\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.active {\n  background: #c9a27c;\n  --background: #c9a27c;\n  background-color: #c9a27c;\n  --background-color: #c9a27c;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 50px;\n  font-size: 12px;\n  background-color: #fffbd6 !important;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n}\n\ntable,\ntable thead,\ntable tbody,\ntable thead th,\ntable tbody tr,\ntable tbody tr td {\n  border: 0 !important;\n}\n\ntable thead,\ntable tbody,\ntable tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n\ntable tbody tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tr th {\n  padding: 0;\n  margin: 0;\n}\n\ntable tbody tr td {\n  text-align: left;\n  margin-left: 20px;\n  padding-left: 20px;\n}\n\n.pl-60 {\n  padding-left: 60px !important;\n}\n\n.pl-10 {\n  padding-left: 10px !important;\n}\n\n.left {\n  text-align: left;\n}\n\n.active {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.segment-button-checked {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.scroll-arrow {\n  position: absolute;\n  margin-top: 3.2%;\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 0px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.ios .header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 5px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.header-ios ion-toolbar {\n  border: 0px;\n  --border-width: 0px ;\n}\n\n.ios .type-columns {\n  border: 0px solid transparent !important;\n  --border: 0px solid transparent !important;\n}\n\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.basmatiState {\n  margin: 10px 30px 0px 30px;\n}\n\n.ricetype {\n  color: #000;\n  font-size: 30px;\n  font-family: GlacialIndifference-bold;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.font-17 {\n  font-size: 14px;\n  font-family: GlacialIndifference-bold;\n}\n\n.green {\n  color: #92B243;\n}\n\n.green td {\n  text-transform: capitalize;\n  font-size: 18px !important;\n}\n\n.porttitle {\n  font-size: 20px;\n}\n\nion-segment ion-segment-button ion-label {\n  margin: 0;\n  padding: 0;\n  margin-top: -2px;\n}\n\n.imageprev {\n  min-height: 200px;\n  max-height: 200px;\n  height: 200px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.paddingBottom100 {\n  padding-bottom: 100px;\n}\n\nlabel {\n  opacity: 1 !important;\n  --opacity: 1 !important;\n}\n\nion-select {\n  --placeholder-opacity: 1 !important;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL29jZWFuZnJlaWdodHMvb2NlYW5mcmVpZ2h0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL29jZWFuZnJlaWdodHMvb2NlYW5mcmVpZ2h0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURBSTtFQUNJLGVBQUE7QUNFUjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQUk7RUFDSSxXQUFBO0FDRVI7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBOzs7RUFHSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBRENRO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtBQ0NaOztBREdRO0VBQ0ksZ0NBQUE7QUNEWjs7QURHUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNEWjs7QURNQTtFQUNJLDBCQUFBO0FDSEo7O0FETUE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ0hKOztBRFFJO0VBQ0ksV0FBQTtFQXdCQSxlQUFBO0FDNUJSOztBRE1ZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0poQjs7QURhWTtFQUNJLFlBQUE7QUNYaEI7O0FEWWdCO0VBQ0ksZUFBQTtBQ1ZwQjs7QURxQkE7Ozs7OztFQU1JLG9CQUFBO0FDbEJKOztBRHFCQTs7O0VBR0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ2xCSjs7QUR1QkE7RUFDSSwyQ0FBQTtBQ3BCSjs7QUR1QkE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ3BCSjs7QUQwQlk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUN2QmhCOztBRDZCQTtFQUNJLDZCQUFBO0FDMUJKOztBRDZCQTtFQUNJLDZCQUFBO0FDMUJKOztBRDZCQTtFQUNJLGdCQUFBO0FDMUJKOztBRDZCQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQzFCSjs7QUQ2QkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUMxQko7O0FENkJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUMxQko7O0FENkJBO0VBQ0kseUNBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQzVCSjs7QUQ4QkE7RUFDSSx5Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDN0JKOztBRCtCQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBQzVCSjs7QUQrQkk7RUFDSSx3Q0FBQTtFQUNBLDBDQUFBO0FDNUJSOztBRGdDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxRQUFBO0FDOUJKOztBRGlDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxRQUFBO0FDL0JKOztBRGtDQTtFQUNJLDBCQUFBO0FDL0JKOztBRGtDQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FDL0JKOztBRGtDQTtFQUNJLGVBQUE7RUFDQSxxQ0FBQTtBQy9CSjs7QURrQ0E7RUFDSSxjQUFBO0FDL0JKOztBRGdDSTtFQUNJLDBCQUFBO0VBQ0EsMEJBQUE7QUM5QlI7O0FEa0NBO0VBQ0ksZUFBQTtBQy9CSjs7QURvQ1E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDakNaOztBRHNDQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDbkNKOztBRHNDQTtFQUNJLGFBQUE7QUNuQ0o7O0FEc0NBO0VBQ0ksY0FBQTtBQ25DSjs7QURzQ0E7RUFDSSxxQkFBQTtBQ25DSjs7QURxQ0E7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0FDbENKOztBRG9DQTtFQUNJLG1DQUFBO0VBQ0EsWUFBQTtBQ2pDSiIsImZpbGUiOiJzcmMvYXBwL29jZWFuZnJlaWdodHMvb2NlYW5mcmVpZ2h0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGYtdHJlZS5leGFtcGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbn1cblxuLmhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pb24tY2FyZCB7XG4gICAgd2lkdGg6IDkwMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgd2lkdGg6IDE3JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50Zi10cmVlIHtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLmlvbmNhcmQxIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDIge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkMyB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQ0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDUge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbnRhYmxlLFxudGhlYWQsXG50Ym9keSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRoZWFkIHtcbiAgICAgICAgdGgge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGQge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcGl0YWxpemUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjYzlhMjdjO1xuICAgIC0tYmFja2dyb3VuZDogI2M5YTI3YztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlhMjdjO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3Yztcbn1cblxuLnByaWNlLXRhYmxlIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTEsIDIxNCwgMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG59XG5cbnRhYmxlLFxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRoZWFkIHRoLFxudGFibGUgdGJvZHkgdHIsXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnRcbn1cblxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRib2R5IHRyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG50YWJsZSB0aGVhZCB0cntcbiAgICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxudGFibGUgdGJvZHkgdHJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbn1cblxudGFibGUgdHIgdGgge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG50YWJsZSB7XG4gICAgdGJvZHkge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wbC02MCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0xMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMy4yJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAvLyBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgLS13aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgLS1taW4td2lkdGg6IGF1dG87XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG4uaW9zIC5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtaW4taGVpZ2h0OiAzMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgLy8gYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIC0td2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIC0tbWluLXdpZHRoOiBhdXRvO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xufVxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJ7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweFxufVxuLmlvc3tcbiAgICAudHlwZS1jb2x1bW5ze1xuICAgICAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uc2Nyb2xsLWFycm93IC5sZWZ0aWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIHRvcDogMHB4O1xufVxuXG4uc2Nyb2xsLWFycm93IC5yaWdodGljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgdG9wOiAwcHg7XG59XG5cbi5iYXNtYXRpU3RhdGUge1xuICAgIG1hcmdpbjogMTBweCAzMHB4IDBweCAzMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC0xNyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBHbGFjaWFsSW5kaWZmZXJlbmNlLWJvbGQ7XG59XG5cbi5ncmVlbiB7XG4gICAgY29sb3I6ICM5MkIyNDM7XG4gICAgdGQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ucG9ydHRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHhcbn0gICBcblxuaW9uLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmltYWdlcHJldiB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZGRpbmdCb3R0b20xMDAge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cbmxhYmVse1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDsgICBcbiAgICAtLW9wYWNpdHk6IDEgIWltcG9ydGFudDsgICBcbn1cbmlvbi1zZWxlY3Qge1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjaztcbn0iLCIudGYtdHJlZS5leGFtcGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5iYWNrLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM0OTRmNTg7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW9uLXRvb2xiYXIgaW9uLWljb24ge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5pb24tdGl0bGUge1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pb24tY2FyZCB7XG4gIHdpZHRoOiA5MDBweDtcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogMTclO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udGYtdHJlZSB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uaW9uY2FyZDEge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDIge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDMge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDQge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDUge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG50YWJsZSxcbnRoZWFkLFxudGJvZHkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGFibGUgdGhlYWQgdGgge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbn1cbnRhYmxlIHRib2R5IHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG59XG50YWJsZSB0Ym9keSB0ZCB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWVlZWU7XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjYzlhMjdjO1xuICAtLWJhY2tncm91bmQ6ICNjOWEyN2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWEyN2M7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3Yztcbn1cblxuLnByaWNlLXRhYmxlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmQ2ICFpbXBvcnRhbnQ7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGJvZHkgdHIge1xuICBoZWlnaHQ6IDM1cHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGJvZHkgdHIgdGQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbnRhYmxlLFxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRoZWFkIHRoLFxudGFibGUgdGJvZHkgdHIsXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0aGVhZCxcbnRhYmxlIHRib2R5LFxudGFibGUgdGJvZHkgdHIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0Ym9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2ZjYWFiICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRyIHRoIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5wbC02MCB7XG4gIHBhZGRpbmctbGVmdDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4ucGwtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzkyQjI0MztcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAzLjIlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDMxcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICB3aWR0aDogYXV0bztcbiAgLS13aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiBhdXRvO1xuICAtLW1pbi13aWR0aDogYXV0bztcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0Mztcbn1cblxuLmlvcyAuaGVhZGVyLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDMxcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICB3aWR0aDogYXV0bztcbiAgLS13aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiBhdXRvO1xuICAtLW1pbi13aWR0aDogYXV0bztcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0Mztcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICBib3JkZXI6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCA7XG59XG5cbi5pb3MgLnR5cGUtY29sdW1ucyB7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1hcnJvdyAubGVmdGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHRvcDogMHB4O1xufVxuXG4uc2Nyb2xsLWFycm93IC5yaWdodGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxOHB4O1xuICB0b3A6IDBweDtcbn1cblxuLmJhc21hdGlTdGF0ZSB7XG4gIG1hcmdpbjogMTBweCAzMHB4IDBweCAzMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LTE3IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogIzkyQjI0Mztcbn1cbi5ncmVlbiB0ZCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLnBvcnR0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxuLmltYWdlcHJldiB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGFkZGluZ0JvdHRvbTEwMCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxubGFiZWwge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIC0tb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */";

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