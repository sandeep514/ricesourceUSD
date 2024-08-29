function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html": (
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content class=\"register green\">\n\n\t<ion-row>\n\t\t<ion-col class=\"h-160  brlb-30\">\n\t\t\t<!-- <h3 class=\"userTitle\">\n\t\t\t\tRegister\n\t\t\t</h3> -->\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\" >\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col size=\"12\">\n\t\t\t<h3 style=\"font-family: 'Poppins-SemiBold';font-weight: 500;color: #fff;font-size: 35px;margin: 0px;padding: 0px;\">\n\t\t\t\tWelcome back\n\t\t\t</h3>\n\t\t</ion-col>\n\t\t<ion-col size=\"12\">\n\t\t\t<p style=\"font-family: 'Poppins-Regular';font-weight: 500;color: #fff;font-size: 16px;margin: 0px;padding: 0px;\">\n\t\t\t\tLogin To Access Your Account\n\t\t\t</p>\n\t\t</ion-col>\n\t</ion-row>\n\t\n\t<ion-row class=\"formData \">\n\t\t<ion-col class=\"form\">\n\t\t\t<ion-item no-lines lines=\"none\" style=\"background: rgba(255,255,255, 0.3);border-radius: 8px;\">\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff;margin: 0px;\">Email or Mobile number</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Email or Mobile number\" [(ngModel)]=\"email\" name=\"email\" style=\"font-family: 'Poppins-SemiBold';color: #fff;\"></ion-input>\n\t\t\t\t<!-- <img src=\"../../assets/svg/mail-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\t\t\t<ion-item no-lines lines=\"none\" style=\"background: rgba(255,255,255, 0.3);border-radius: 8px;margin-top: 20px;\">\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff;margin: 0px;\">Password</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Password\" [type]=\"passwordType\" name='password' [(ngModel)]=\"password\" style=\"width: 100%;font-family: 'Poppins-SemiBold';color: #fff;\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()' style=\"font-size: 1px;\"></ion-icon>\n\t\t\t\t<!-- <img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\t\t\t<ion-item no-lines lines=\"none\">\n\t\t\t\t<p class=\" w-100\" style=\"text-align: center;\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nounderline\" (click)=\"forgotpassword()\" style=\"color: #fff;font-family: 'Poppins-Regular';font-size: 14px;\">Forgot Password?</a>\n\t\t\t\t</p>\n\t\t\t</ion-item>\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<!-- <p class=\"center w-100\">Not a member ? <a href=\"javascript:void(0)\" class=\"nounderline\" (click)=\"registernow()\">Register now</a></p> -->\n\t\t\t</div>\n\t\t\t<div class=\"center mt10\">\t\t\t\t\n\t\t\t\t<button (click)=\"loginNow()\" size=\"large\" expand=\"full\" style=\"background: #fff;border-radius: 27px;padding: 18px;width: 100%;\"> <p style=\"padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: #677435;font-size: 16px;\">Sign in</p> </button>\n\t\t\t\t<p style=\"color: #fff;\">OR</p>\n\t\t\t\t<button (click)=\"registernow()\" expand=\"full\" style=\"background: #fff;border-radius: 27px;padding: 18px;width: 100%;\"><p style=\"padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: #677435;font-size: 16px;\">Register</p> </button>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"center\">\n\t\t\n\t</ion-row>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/login/login-routing.module.ts": (
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/
  /*! exports provided: LoginPageRoutingModule */
  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./login.page */"./src/app/login/login.page.ts");
    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];
    var LoginPageRoutingModule = /*#__PURE__*/_createClass(function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    });
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);

    /***/
  }),
  /***/"./src/app/login/login.module.ts": (
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/
  /*! exports provided: LoginPageModule */
  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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
    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./login-routing.module */"./src/app/login/login-routing.module.ts");
    /* harmony import */
    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./login.page */"./src/app/login/login.page.ts");
    var LoginPageModule = /*#__PURE__*/_createClass(function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    });
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);

    /***/
  }),
  /***/"./src/app/login/login.page.scss": (
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/
  /*! exports provided: default */
  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".register {\n  text-align: center;\n}\n.register h3 {\n  color: #000000;\n}\n.register .registerlogo {\n  width: 80px;\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n  border: 0px;\n}\n.form button {\n  --background: #fff !important;\n  background: #fff !important;\n  background-color: #fff !important;\n  --background-color: #fff !important;\n  padding: 25px;\n}\n.item-native {\n  border: 0px;\n  padding: 0px;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\nion-input {\n  padding: 0px !important;\n  --padding: 0px !important;\n  --padding-top: 0px !important;\n  --padding-bottom: 0px !important;\n  --padding-start: 0px !important;\n  --placeholder-color: #fff;\n  --placeholder-opacity: 1;\n  font-size: 14px;\n  font-family: \"Poppins-Regular\";\n}\nion-item {\n  min-height: 55px;\n  --min-height: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRUE7RUFDSSxrQkFBQTtBQ2hFSjtBRGlFSTtFQUNJLGNBQUE7QUMvRFI7QURtRUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2pFUjtBRHFFQTtFQUNJLGlCQUFBO0FDbEVKO0FEc0VJO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQ25FUjtBRG9FUTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDbEVaO0FEcUVJO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0FDbkVSO0FEc0VBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNuRUo7QURxRUE7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ2xFSjtBRHFFSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNsRVI7QURvRVE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2xFWjtBRHNFQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUNuRUo7QURxRUE7RUFDSSxxQkFBQTtBQ2xFSjtBRHVFQTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDcEVKO0FEc0VBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ25FSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50e1xuLy8gICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvbG9naW4tYmcuanBnJykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcbi8vIH1cblxuLy8gLmhlYWRlci1sb2dve1xuLy8gICAgIG1hcmdpbi10b3A6IDUwcHg7XG4vLyAgICAgaW1ne1xuLy8gICAgICAgICB3aWR0aDogMjUwcHg7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAubG9naW4tYm94e1xuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgICAgaW9uLWxpc3R7XG4vLyAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBcbi8vICAgICAgICAgaW9uLWl0ZW17XG4vLyAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAuc2lnbi1pbi1pY29ue1xuLy8gICAgIHdpZHRoOiA5MHB4O1xuLy8gfVxuXG4vLyAuYnV0dG9uLXJpcHBsZXtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuLy8gfVxuXG4vLyAuZm9yZ290LXBhc3N7XG4vLyAgICAgZm9udC1zaXplOiAxNXB4O1xuLy8gfVxuXG4vLyAuZm9yZ2V0LXBhc3Mtcm93e1xuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyB9XG5cbi8vIC5sb2dpbi1mb290ZXJ7XG4vLyAgICAgaGVpZ2h0OiAyMHB4O1xuLy8gICAgIGJhY2tncm91bmQ6ICNlZmVjZWM7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBwe1xuLy8gICAgICAgICBtYXJnaW46IDBweDtcbi8vICAgICAgICAgcGFkZGluZzogMHB4O1xuLy8gICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuLy8gICAgICAgICBjb2xvcjogIzAwMFxuLy8gICAgIH1cbi8vIH1cblxuLy8gLmxvZ2luLWJ1dHRvbntcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbi8vICAgICAtLWJvcmRlci1yYWRpdXM6IDEwMHB4O1xuLy8gICAgIHdpZHRoOiAyMDBweDtcbi8vICAgICAtLWJhY2tncm91bmQ6IGdyZWVuO1xuLy8gfVxuXG4uYnJsYi0zMHtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAzMCU7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDFweCAxNXB4IDJweCBncmVlbjtcbn1cbi5yZWdpc3RlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaDN7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAvLyB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIH1cbiAgICAucmVnaXN0ZXJsb2dve1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG59XG5cbi5mb3JtRGF0YXtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLmZvcm17XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAuaXRlbS1uYXRpdmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidXR0b257XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6MjVweFxuICAgIH1cbn1cbi5pdGVtLW5hdGl2ZXtcbiAgICBib3JkZXI6MHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5hY3RpdmVUYWJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udXNlclR5cGV7XG4gICAgdWx7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnVzZXJUaXRsZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4ubm91bmRlcmxpbmV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuaW9uLWJ1dHRvbntcblxufVxuaW9uLWlucHV0e1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVJlZ3VsYXInO1xufVxuaW9uLWl0ZW17XG4gICAgbWluLWhlaWdodDogNTVweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDU1cHg7XG59IiwiLnJlZ2lzdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlZ2lzdGVyIGgzIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ucmVnaXN0ZXIgLnJlZ2lzdGVybG9nbyB7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybURhdGEge1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLmZvcm0gaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtIGlvbi1pdGVtIC5pdGVtLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbn1cbi5mb3JtIGJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIGJvcmRlcjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5hY3RpdmVUYWIge1xuICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyVHlwZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxuLnVzZXJUeXBlIHVsIGxpIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udXNlclRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLm5vdW5kZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24taW5wdXQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWluLWhlaWdodDogNTVweDtcbiAgLS1taW4taGVpZ2h0OiA1NXB4O1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/login/login.page.ts": (
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/
  /*! exports provided: LoginPage */
  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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
    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(menu, navCtrl, componentService, restService) {
        _classCallCheck(this, LoginPage);
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.componentService = componentService;
        this.restService = restService;
        this.email = '';
        this.password = '';
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.menu.enable(false);
      }
      return _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registernow",
        value: function registernow() {
          this.navCtrl.navigateForward(['pre-register']);
          // this.navCtrl.navigateForward(['register']);
        }
      }, {
        key: "loginNow",
        value: function loginNow() {
          var _this = this;
          if (this.email == undefined || this.email == '' || this.password == '' || this.password == undefined) {
            this.componentService.presentToastWithOptions('Please fill email and password');
            return false;
          }
          this.componentService.presentLoading();
          var userDetails = {
            email: this.email.replaceAll(' ', ''),
            password: this.password
          };
          this.restService.login(userDetails).then(function (res) {
            _this.componentService.loadingController.dismiss();
            console.log(res);
            if (res.status == 'success') {
              var createdOn = res.user.created_at;
              var year = new Date(createdOn).getFullYear().toString();
              var month = (new Date(createdOn).getMonth() + 1).toString();
              var date = new Date(createdOn).getDate().toString();
              if (month.length == 1) {
                month = '0' + month;
              }
              var concatDate = year + '-' + month + '-' + date;
              localStorage.setItem('id', res.user.id);
              localStorage.setItem('created_on', concatDate);
              localStorage.setItem('name', res.user.name);
              localStorage.setItem('email', res.user.email);
              localStorage.setItem('mobile', res.user.mobile);
              localStorage.setItem('role', res.user.role == 0 ? res.user.usd_role : res.user.role);
              localStorage.setItem('role_name', res.user.role_rel != null ? res.user.role_rel.role_name : res.user.role_rel_usd.role_name);
              localStorage.setItem('companyname', res.user.companyname);
              localStorage.setItem('status', res.user.status);
              localStorage.setItem('expired_on', res.user.expired_on);
              localStorage.setItem('is_usd_active', res.user.is_usd_active);
              _this.componentService.compareTwoDates(res.user.expired_on);
              localStorage.setItem('user', JSON.stringify(res.user));
              localStorage.setItem('token', res.user.user_token);
              localStorage.setItem('is_INR_active', res.user.is_INR_active);
              localStorage.setItem('usd_role', res.user.usd_role);
              localStorage.setItem('transaction_id', res.user.transaction_id);
              localStorage.setItem('isUserActivatedUSD', res.user.is_usd_active);
              _this.componentService.loginUser.next(res.user.name);
              _this.componentService.firePushNotif.next(res.user.name);
              if (res.user.status == 0) {
                _this.navCtrl.navigateForward(['verifyotp']);
              } else {
                if (localStorage.getItem('role') == '2') {
                  _this.navCtrl.navigateForward(['admin/chat']);
                } else {
                  if (res.user.is_usd_active == '1') {
                    localStorage.setItem('apptype', 'USD');
                    if (localStorage.getItem('isExpired') == 'false') {
                      _this.navCtrl.navigateRoot('priceusd', {
                        animationDirection: 'forward'
                      });
                    } else {
                      console.log("jjnjkn");
                      if (localStorage.getItem('is_INR_active') != '1' && localStorage.getItem('isExpired') == 'true' && localStorage.getItem('transaction_id') != null) {
                        _this.navCtrl.navigateRoot('planpage', {
                          animationDirection: 'forward'
                        });
                      } else {
                        localStorage.setItem('apptype', 'OTHER');
                        _this.navCtrl.navigateRoot('prices', {
                          animationDirection: 'forward'
                        });
                      }
                      // this.navCtrl.navigateRoot('planpage',{animationDirection: 'forward'});
                    }
                  } else {
                    localStorage.setItem('apptype', 'OTHER');
                    _this.navCtrl.navigateRoot('prices', {
                      animationDirection: 'forward'
                    });
                  }
                }
              }
            } else {
              _this.componentService.presentToastWithOptions('Wrong User details!');
              return false;
            }
          });
        }
      }, {
        key: "forgotpassword",
        value: function forgotpassword() {
          this.navCtrl.navigateForward(['forgotpassword']);
        }
      }, {
        key: "hideShowPassword",
        value: function hideShowPassword() {
          this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
          this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
        }
      }]);
    }();
    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
      }];
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./login.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./login.page.scss */"./src/app/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"], _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]])], LoginPage);

    /***/
  })
}]);
//# sourceMappingURL=login-login-module-es5.js.map