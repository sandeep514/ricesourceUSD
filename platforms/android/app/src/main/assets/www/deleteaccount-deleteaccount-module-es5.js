function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deleteaccount-deleteaccount-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/deleteaccount/deleteaccount.page.html": (
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deleteaccount/deleteaccount.page.html ***!
    \*********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDeleteaccountDeleteaccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"container\">\n    <div class=\"header-container\">\n\t\t<div class=\"\"></div>\n\t\t\t<div class=\"header green\">\n\t\t\t\t<!-- <ion-button (click)=\"showMenu()\" style=\"background-color: transparent;box-shadow: none;\">\n\t\t\t\t\t<ion-icon name=\"menu-outline\" style=\"font-size: 30px;\"></ion-icon>\n\t\t\t\t</ion-button> -->\n\t\t\t\t\t<ion-buttons slot=\"start\" style=\"color: #fff \" (click)='openModel()'>\n\t\t\t\t\t\t<img src=\"../../assets/menu/whitemenu.png\" style=\"width: 25px;margin-left: 10px;\" />\n\t\t\t\t\t\t<!-- Menu -->\n\t\t\t\t\t</ion-buttons>\n\n\t\t\t\t<div style=\"margin-top: 0px;\">\n\t\t\t\t\t<h1 class=\"main-heading font-30\">{{ name | uppercase }}</h1>\n\t\t\t\t\t<!-- <span class=\"tag\">{{ email }}</span> -->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"stats\">\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n    \n    \t<!-- <div class=\"overlay-header\"></div> -->\n    \n    \t<div class=\"body\">\n\t\t\t<div class=\"u-clearfix\"></div>\n\t\t\t<ion-row style=\"padding-top: 14px;clear: both;\" > \n\t\t\t\t<div style=\"text-align: center;\">\n\t\t\t\t\t<h5 style=\"width: 80%;margin: 0 auto;padding: 15px 0px\">Please let us know why you are leaving us.</h5>\n\t\t\t\t</div>\n\t\t\t\t<ul style=\"padding: 0;margin: 0;\">\n\t\t\t\t\t<li (click)=\"uninstallReason(reason.key)\" [ngClass]=\"(selectedReasonIndex == reason.key)? 'active' : '' \" *ngFor=\"let reason of reasons | keyvalue\">{{reason.value}}</li>\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t\t<ion-item size=\"12\">\n\t\t\t\t\t<ion-label position=\"floating\">Re-confirm Email / Mobile</ion-label>\n\t\t\t\t\t<ion-input [(ngModel)]=\"email\" name=\"email\"></ion-input>\n\t\t\t\t\t<img src=\"../../assets/svg/mail-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t\t</ion-item>\n\t\t\t\t\n\t\t\t\t<ion-col style=\"text-align: center;\">\n\t\t\t\t\t<ion-label style=\"font-size: 18px;\">{{ selectedCity }}</ion-label>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"12\" style=\"text-align: center;\">\n\t\t\t\t\t<ion-button style=\"--background: #92b243\" (click)=\"deleteAccount()\">Delete Account</ion-button>\n\t\t\t\t</ion-col>\t\n\t\t\t</ion-row>\n    \t</div>    \n  </div>\n</ion-content>\n<ion-footer>\n\t<ion-button expand=\"block\" class=\"footerbutton\" (click)=\"gotohome()\">Go to home</ion-button>\n</ion-footer>";

    /***/
  }),
  /***/"./src/app/deleteaccount/deleteaccount-routing.module.ts": (
  /*!***************************************************************!*\
    !*** ./src/app/deleteaccount/deleteaccount-routing.module.ts ***!
    \***************************************************************/
  /*! exports provided: DeleteaccountPageRoutingModule */
  /***/
  function srcAppDeleteaccountDeleteaccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DeleteaccountPageRoutingModule", function () {
      return DeleteaccountPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _deleteaccount_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./deleteaccount.page */"./src/app/deleteaccount/deleteaccount.page.ts");
    var routes = [{
      path: '',
      component: _deleteaccount_page__WEBPACK_IMPORTED_MODULE_3__["DeleteaccountPage"]
    }];
    var DeleteaccountPageRoutingModule = /*#__PURE__*/_createClass(function DeleteaccountPageRoutingModule() {
      _classCallCheck(this, DeleteaccountPageRoutingModule);
    });
    DeleteaccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeleteaccountPageRoutingModule);

    /***/
  }),
  /***/"./src/app/deleteaccount/deleteaccount.module.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/deleteaccount/deleteaccount.module.ts ***!
    \*******************************************************/
  /*! exports provided: DeleteaccountPageModule */
  /***/
  function srcAppDeleteaccountDeleteaccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DeleteaccountPageModule", function () {
      return DeleteaccountPageModule;
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
    var _deleteaccount_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./deleteaccount-routing.module */"./src/app/deleteaccount/deleteaccount-routing.module.ts");
    /* harmony import */
    var _deleteaccount_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./deleteaccount.page */"./src/app/deleteaccount/deleteaccount.page.ts");
    var DeleteaccountPageModule = /*#__PURE__*/_createClass(function DeleteaccountPageModule() {
      _classCallCheck(this, DeleteaccountPageModule);
    });
    DeleteaccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _deleteaccount_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeleteaccountPageRoutingModule"]],
      declarations: [_deleteaccount_page__WEBPACK_IMPORTED_MODULE_6__["DeleteaccountPage"]]
    })], DeleteaccountPageModule);

    /***/
  }),
  /***/"./src/app/deleteaccount/deleteaccount.page.scss": (
  /*!*******************************************************!*\
    !*** ./src/app/deleteaccount/deleteaccount.page.scss ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppDeleteaccountDeleteaccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "html {\n  background-color: #fefefe;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\n.u-float-right {\n  float: right;\n}\n\n.u-flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.u-clearfix:before,\n.u-clearfix:after {\n  content: \" \";\n  display: table;\n}\n\n.u-clearfix:after {\n  clear: both;\n}\n\n.u-clearfix {\n  *zoom: 1;\n}\n\n.font-30 {\n  font-size: 35px !important;\n}\n\n.font-13 {\n  font-size: 13px !important;\n}\n\n.container {\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);\n  margin: 0px auto;\n  overflow: scroll;\n  width: 100%;\n  height: 100%;\n}\n\n.userCaps {\n  padding: 40px;\n  background: aliceblue;\n  font-size: 50px;\n  color: #92b243;\n}\n\n.header-container {\n  position: relative;\n}\n\n.header-image {\n  left: 0;\n  position: absolute;\n  top: 0;\n  z-index: -1;\n  height: auto;\n  -webkit-animation: zoomEffect 35s infinite;\n          animation: zoomEffect 35s infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n@-webkit-keyframes zoomEffect {\n  0% {\n    transform: scale(1) translateX(0);\n  }\n  100% {\n    transform: scale(1.2) translateX(-360px) translateY(-80px);\n  }\n}\n\n@keyframes zoomEffect {\n  0% {\n    transform: scale(1) translateX(0) translateY(0);\n  }\n  100% {\n    transform: scale(1.2) translateX(-360px) translateY(-80px);\n  }\n}\n\n.header {\n  color: #fff;\n  padding: 15px;\n  height: 220px;\n}\n\n.header > svg {\n  cursor: pointer;\n}\n\n.main-heading {\n  color: #fff;\n  font-size: 26px;\n  font-weight: 300;\n  margin-bottom: 12px;\n}\n\n.tag {\n  background-color: rgba(255, 255, 255, 0.35);\n  border-radius: 20px;\n  font-size: 16px;\n  margin-right: 8px;\n  padding: 4px 10px;\n  text-transform: lowercase;\n}\n\n.stats {\n  margin-top: 35px;\n}\n\n.stat-module {\n  display: inline-block;\n  font-size: 12px;\n  margin-right: 20px;\n  text-transform: uppercase;\n}\n\n.stat-number {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 4px;\n}\n\n.overlay-header {\n  background-color: #eee;\n  height: 100px;\n  margin: -50px 0 0 -25%;\n  width: 150%;\n  z-index: 0;\n}\n\n.body {\n  background-color: #eee;\n  color: #555;\n  margin-top: -50px;\n  padding: 0 15px 15px;\n  position: relative;\n  height: 100%;\n}\n\n.body-image {\n  border-radius: 100%;\n  box-shadow: 5px 10px 75px rgba(0, 0, 0, 0.4);\n  float: left;\n  margin: -90px 0 20px;\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  padding: 20px 34px;\n}\n\n.body-action-button {\n  background-color: #383838;\n  border-radius: 50%;\n  box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n  height: 40px;\n  position: absolute;\n  right: 15px;\n  top: -97px;\n  width: 40px;\n}\n\n.body-stats {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 700;\n  margin: -14px 0 0 23px;\n  position: relative;\n  text-transform: uppercase;\n  width: 24%;\n}\n\n.body-stats > span {\n  display: inline-block;\n  font-weight: 900;\n  margin-top: 8px;\n}\n\n.body-info {\n  clear: left;\n  position: relative;\n  max-height: 100px;\n  overflow: hidden;\n  transition: all 600ms ease-out;\n}\n\n.body-more {\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #eeeeee 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00000000\", endColorstr=\"#eeeeee\",GradientType=0 );\n  cursor: pointer;\n  margin: -57px auto 0px;\n  padding: 20px 0 20px;\n  position: relative;\n  text-align: center;\n}\n\n.body-more span {\n  background-color: #fff;\n  border-radius: 50%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);\n  display: inline-block;\n  height: 6px;\n  margin-right: 2px;\n  width: 6px;\n}\n\n.card {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n  margin-top: 15px;\n  padding: 10px;\n}\n\n.card-heading {\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.card-more {\n  cursor: pointer;\n  float: right;\n}\n\n.card-list {\n  list-style-type: none;\n  margin: 10px 0 0;\n  overflow-x: scroll;\n  padding: 0;\n  white-space: nowrap;\n}\n\n.card-list::-webkit-scrollbar-track {\n  border-radius: 2px;\n  background-color: #F5F5F5;\n}\n\n.card-list::-webkit-scrollbar {\n  height: 3px;\n  background-color: #F5F5F5;\n}\n\n.card-list::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #ddd;\n}\n\n.card-list li {\n  display: inline;\n  margin-left: 10px;\n}\n\n.card-list li:first-child {\n  margin-left: 0;\n}\n\n.footerbutton {\n  color: white;\n  --background: #92b243;\n  height: 55px;\n}\n\nul li {\n  list-style: none;\n}\n\nul {\n  padding: 0px;\n  width: 100%;\n  margin: 0px;\n}\n\nul li.active {\n  padding: 10px 20px;\n  background: #92b243;\n  border-radius: 20px;\n  margin-bottom: 10px;\n  color: white;\n}\n\nul li {\n  padding: 10px 20px;\n  border: 2px solid #92b243;\n  border-radius: 20px;\n  margin-bottom: 10px;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9kZWxldGVhY2NvdW50L2RlbGV0ZWFjY291bnQucGFnZS5zY3NzIiwic3JjL2FwcC9kZWxldGVhY2NvdW50L2RlbGV0ZWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBRUksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTs7RUFFSSxZQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0dBQ0ksT0FBQTtBQ0NKOztBRENBO0VBQ0ksMEJBQUE7QUNFSjs7QURBQTtFQUNJLDBCQUFBO0FDR0o7O0FEREE7RUFDSSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBRUksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FERkE7RUFDSSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDS0o7O0FERkE7RUFDSTtJQUNJLGlDQUFBO0VDS047RURIRTtJQUNJLDBEQUFBO0VDS047QUFDRjs7QURGQTtFQUNJO0lBQ0ksK0NBQUE7RUNJTjtFREZFO0lBQ0ksMERBQUE7RUNJTjtBQUNGOztBRERBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDR0o7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBQTtFQUNJLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDR0o7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBREFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0dKOztBREFBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEQUE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFdBQUE7RUFDQSxVQUFBO0FDRUo7O0FERUE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRGNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ1hKOztBRGNBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDWEo7O0FEZUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1pKOztBRGVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDWko7O0FEZUE7RUFHSSx5RUFBQTtFQUNBLHFIQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDWko7O0FEZUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNaSjs7QURlQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ1pKOztBRGVBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDWko7O0FEZUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ1pKOztBRGVBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDWko7O0FEZUE7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0FDYko7O0FEZ0JBO0VBRUksV0FBQTtFQUNBLHlCQUFBO0FDZEo7O0FEaUJBO0VBRUksbUJBQUE7RUFDQSxzQkFBQTtBQ2ZKOztBRGtCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ2ZKOztBRGtCQTtFQUNJLGNBQUE7QUNmSjs7QURpQkE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDZEo7O0FEa0JJO0VBQ0ksZ0JBQUE7QUNmUjs7QURrQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNmSjs7QURnQkk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNkUjs7QURnQkk7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNkUiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZWFjY291bnQvZGVsZXRlYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuLnUtZmxvYXQtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLnUtZmxleC1jZW50ZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4gICAgXG4udS1jbGVhcmZpeDpiZWZvcmUsXG4udS1jbGVhcmZpeDphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG5cbi51LWNsZWFyZml4OmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLnUtY2xlYXJmaXgge1xuICAgICp6b29tOiAxO1xufVxuLmZvbnQtMzB7XG4gICAgZm9udC1zaXplOiAzNXB4ICFpbXBvcnRhbnQ7XG59XG4uZm9udC0xM3tcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCA1MHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4udXNlckNhcHN7XG4gICAgLy8gcGFkZGluZzogMzFweCA1MHB4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjogIzkyYjI0Mztcbn1cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYW5pbWF0aW9uOiB6b29tRWZmZWN0IDM1cyBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21FZmZlY3Qge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHRyYW5zbGF0ZVgoLTM2MHB4KSB0cmFuc2xhdGVZKC04MHB4KTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgem9vbUVmZmVjdCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSB0cmFuc2xhdGVYKC0zNjBweCkgdHJhbnNsYXRlWSgtODBweCk7XG4gICAgfVxufVxuXG4uaGVhZGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGhlaWdodDogMjIwcHg7XG59XG5cbi5oZWFkZXIgPiBzdmcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haW4taGVhZGluZyB7XG4gICAgY29sb3I6ICNmZmY7ICBcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4udGFnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cblxuLnN0YXRzIHtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuXG4uc3RhdC1tb2R1bGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zdGF0LW51bWJlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLm92ZXJsYXktaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luOiAtNTBweCAwIDAgLTI1JTtcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICAgIHdpZHRoOiAxNTAlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgXG59XG5cbi5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIHBhZGRpbmc6IDAgMTVweCAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ib2R5LWltYWdlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDc1cHggcmdiKDAgMCAwIC8gNDAlKTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IC05MHB4IDAgMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAzNHB4O1xufVxuXG4vLyAuYm9keS1pbWFnZSB7XG4vLyBcdGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyBcdGJveC1zaGFkb3c6IDVweCAxMHB4IDc1cHggcmdiYSgwLCAwLCAwLCAuNCk7XG4vLyBcdGZsb2F0OiBsZWZ0O1xuLy8gXHRtYXJnaW46IC05MHB4IDAgMjBweDtcbi8vIFx0cG9zaXRpb246IHJlbGF0aXZlO1xuLy8gXHR6LWluZGV4OiAyO1xuLy8gXHRoZWlnaHQ6IDQwcHg7XG4vLyBcdHdpZHRoOiA0MHB4O1xuLy8gXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG5cbi5ib2R5LWFjdGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTJweCByZ2JhKDAsMCwwLC40KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTVweDtcbiAgICB0b3A6IC05N3B4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4uYm9keS1zdGF0cyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogLTE0cHggMCAwIDIzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgd2lkdGg6IDI0JTtcbiAgICAvLyBmbG9hdDogbGVmdDtcbn1cblxuLmJvZHktc3RhdHMgPiBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5ib2R5LWluZm8ge1xuICAgIGNsZWFyOiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcyBlYXNlLW91dDtcbn1cblxuLmJvZHktbW9yZSB7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgyMzgsMjM4LDIzOCwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDApIDAlLHJnYmEoMjM4LDIzOCwyMzgsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHJnYmEoMCwwLDAsMCkgMCUscmdiYSgyMzgsMjM4LDIzOCwxKSAxMDAlKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwMDAwMDAwJywgZW5kQ29sb3JzdHI9JyNlZWVlZWUnLEdyYWRpZW50VHlwZT0wICk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogLTU3cHggYXV0byAwcHg7XG4gICAgcGFkZGluZzogMjBweCAwIDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvZHktbW9yZSBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsMCwwLC4zKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgd2lkdGg6IDZweDtcbn1cblxuLmNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAuMTUpO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNhcmQtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXJkLW1vcmUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jYXJkLWxpc3Qge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jYXJkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXG57XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jYXJkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyXG57XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmNhcmQtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcbntcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5jYXJkLWxpc3QgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmNhcmQtbGlzdCBsaTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uZm9vdGVyYnV0dG9ue1xuICAgIGNvbG9yOiAgd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTJiMjQzO1xuICAgIGhlaWdodDogNTVweDtcbn1cblxudWwge1xuICAgIGxpe1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cbn1cbnVse1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBsaS5hY3RpdmV7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzkyYjI0MztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBsaXtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59IiwiaHRtbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuLnUtZmxvYXQtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi51LWZsZXgtY2VudGVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnUtY2xlYXJmaXg6YmVmb3JlLFxuLnUtY2xlYXJmaXg6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi51LWNsZWFyZml4OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi51LWNsZWFyZml4IHtcbiAgKnpvb206IDE7XG59XG5cbi5mb250LTMwIHtcbiAgZm9udC1zaXplOiAzNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LTEzIHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwIDAgNTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi51c2VyQ2FwcyB7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogIzkyYjI0Mztcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTE7XG4gIGhlaWdodDogYXV0bztcbiAgYW5pbWF0aW9uOiB6b29tRWZmZWN0IDM1cyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21FZmZlY3Qge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSB0cmFuc2xhdGVYKC0zNjBweCkgdHJhbnNsYXRlWSgtODBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgem9vbUVmZmVjdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMikgdHJhbnNsYXRlWCgtMzYwcHgpIHRyYW5zbGF0ZVkoLTgwcHgpO1xuICB9XG59XG4uaGVhZGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGhlaWdodDogMjIwcHg7XG59XG5cbi5oZWFkZXIgPiBzdmcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWluLWhlYWRpbmcge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4udGFnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG5cbi5zdGF0cyB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbi5zdGF0LW1vZHVsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zdGF0LW51bWJlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLm92ZXJsYXktaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAtNTBweCAwIDAgLTI1JTtcbiAgd2lkdGg6IDE1MCU7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICM1NTU7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBwYWRkaW5nOiAwIDE1cHggMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ib2R5LWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggNzVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IC05MHB4IDAgMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMzRweDtcbn1cblxuLmJvZHktYWN0aW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogLTk3cHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4uYm9keS1zdGF0cyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IC0xNHB4IDAgMCAyM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAyNCU7XG59XG5cbi5ib2R5LXN0YXRzID4gc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uYm9keS1pbmZvIHtcbiAgY2xlYXI6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCA2MDBtcyBlYXNlLW91dDtcbn1cblxuLmJvZHktbW9yZSB7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgI2VlZWVlZSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDApIDAlLCAjZWVlZWVlIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApIDAlLCAjZWVlZWVlIDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj1cIiMwMDAwMDAwMFwiLCBlbmRDb2xvcnN0cj1cIiNlZWVlZWVcIixHcmFkaWVudFR5cGU9MCApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogLTU3cHggYXV0byAwcHg7XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvZHktbW9yZSBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA2cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICB3aWR0aDogNnB4O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZC1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FyZC1tb3JlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jYXJkLWxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgcGFkZGluZzogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNhcmQtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jYXJkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jYXJkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmNhcmQtbGlzdCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jYXJkLWxpc3QgbGk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmZvb3RlcmJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJiMjQzO1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxudWwge1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbn1cbnVsIGxpLmFjdGl2ZSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZDogIzkyYjI0MztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxudWwgbGkge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMDAwO1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/deleteaccount/deleteaccount.page.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/deleteaccount/deleteaccount.page.ts ***!
    \*****************************************************/
  /*! exports provided: DeleteaccountPage */
  /***/
  function srcAppDeleteaccountDeleteaccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DeleteaccountPage", function () {
      return DeleteaccountPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    var DeleteaccountPage = /*#__PURE__*/function () {
      function DeleteaccountPage(route, restSer, navCtrl, menuCtrl) {
        _classCallCheck(this, DeleteaccountPage);
        this.route = route;
        this.restSer = restSer;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.availableRoles = {
          4: "Seller",
          5: "Buyer",
          6: "Supplier",
          7: "Broker",
          8: "Guest"
        };
        this.error = "false";
        this.reasons = {
          0: "Tedious Sign-up process",
          1: "Installed a Competitor's App",
          2: "Addictive App",
          3: "Unused App"
        };
        this.selectedReasonIndex = '';
        this.userId = this.route.snapshot.paramMap.get("id");
        this.name = localStorage.getItem("name");
        // this.email = localStorage.getItem("email");
        this.expired_on = localStorage.getItem("expired_on");
        this.isExpired = localStorage.getItem("isExpired");
        if (localStorage.getItem("apptype") == "USD") {
          this.userRole = this.availableRoles[localStorage.getItem("usd_role")];
        } else {
          this.userRole = this.availableRoles[localStorage.getItem("role")];
        }
        this.apptype = localStorage.getItem("apptype");
        this.defaultPort = localStorage.getItem("defalutPort");
        console.log(this.userRole);
      }
      return _createClass(DeleteaccountPage, [{
        key: "getProfileDetails",
        value: function getProfileDetails() {}
      }, {
        key: "showMenu",
        value: function showMenu() {
          console.log("jknk");
          this.menuCtrl.close();
          this.menuCtrl.open();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "gotohome",
        value: function gotohome() {
          if (localStorage.getItem("usd_role") != "0" && localStorage.getItem("is_usd_active") != "0" && localStorage.getItem("isExpiryUSD") == "false") {
            localStorage.setItem("apptype", "USD");
            this.navCtrl.navigateForward(["priceusd"]);
          } else {
            localStorage.setItem("apptype", "OTHER");
            this.navCtrl.navigateForward(["prices"]);
          }
        }
      }, {
        key: "openModel",
        value: function openModel() {
          this.menuCtrl.enable(true);
          this.menuCtrl.open();
        }
      }, {
        key: "uninstallReason",
        value: function uninstallReason(reasonIndex) {
          this.selectedReasonIndex = reasonIndex;
        }
      }, {
        key: "deleteAccount",
        value: function deleteAccount() {
          var _this = this;
          if (this.selectedReasonIndex != undefined && this.selectedReasonIndex != '' && this.selectedReasonIndex != null) {
            if (this.email != undefined && this.email != '' && this.email != null) {
              if (this.email == localStorage.getItem("email")) {
                this.restSer.deleteUser(localStorage.getItem("id")).then(function (res) {
                  if (res.status == true) {
                    _this.defaultPort = _this.selectedCity;
                    localStorage.clear();
                    _this.menuCtrl.close();
                    _this.navCtrl.navigateForward(['login']);
                    _this.restSer.presentToast("Account deleted successfully.");
                  }
                }, function (err) {
                  console.log(err);
                });
              } else {
                this.restSer.presentToast("Please check your email id and try again.");
              }
            } else {
              this.restSer.presentToast("Please confirm your email id.");
            }
          } else {
            this.restSer.presentToast("Please select a reason.");
          }
        }
      }]);
    }();
    DeleteaccountPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }];
    };
    DeleteaccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-deleteaccount",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./deleteaccount.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/deleteaccount/deleteaccount.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./deleteaccount.page.scss */"./src/app/deleteaccount/deleteaccount.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])], DeleteaccountPage);

    /***/
  })
}]);
//# sourceMappingURL=deleteaccount-deleteaccount-module-es5.js.map