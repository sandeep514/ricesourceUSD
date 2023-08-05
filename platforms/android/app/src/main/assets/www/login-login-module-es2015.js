(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-content>\n\t<ion-row class=\"ion-no-padding\">\n\t\t<ion-col class=\"ion-no-padding header-logo\" align=\"center\">\n\t\t\t<img src=\"../../assets/SNTC LOGO (1).png\" />\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"login-box ion-padding\">\n\t\t<ion-col>\n\t\t\t<ion-list>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Email</ion-label>\n\t\t\t\t\t<ion-input [(ngModel)]=\"email\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">Password</ion-label>\n\t\t\t\t\t<ion-input [(ngModel)]=\"password\" type=\"password\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"ion-padding\">\n\t\t<ion-col align=\"center\">\n\t\t\t<ion-button class=\"login-button\" (click)=\"loginNow()\">Login Now</ion-button>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"forget-pass-row\">\n\t\t<ion-col align=\"center\" class=\"forgot-pass\">\n\t\t\t<u>Forgot Password?</u>\n\t\t</ion-col>\n\t</ion-row>\n</ion-content>\n\n<ion-footer class=\"login-footer\">\n\t<p>Designed and Developed by Core Innovative Solutions</p>\n</ion-footer> -->\n\n<ion-content class=\"register lightgreen\">\n\n\t<ion-row>\n\t\t<ion-col class=\"h-260 green brlb-30\">\n\t\t\t<!-- <h3 class=\"userTitle\">\n\t\t\t\tRegister\n\t\t\t</h3> -->\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\">\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<h3>\n\t\t\t\tLogin\n\t\t\t</h3>\n\t\t</ion-col>\n\t</ion-row>\n\t\n\t<ion-row class=\"formData \">\n\t\t<ion-col class=\"form\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Email or Mobile number</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"email\" name=\"email\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/mail-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Password</ion-label>\n\t\t\t\t<ion-input [type]=\"passwordType\" name='password' [(ngModel)]=\"password\" style=\"width: 60%\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()' style=\"font-size: 1px;\"></ion-icon>\n\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<p class=\" w-100\" style=\"text-align: right;\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nounderline\" (click)=\"forgotpassword()\">Forgot Password?</a>\n\t\t\t\t</p>\n\t\t\t</ion-item>\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<!-- <p class=\"center w-100\">Not a member ? <a href=\"javascript:void(0)\" class=\"nounderline\" (click)=\"registernow()\">Register now</a></p> -->\n\t\t\t</div>\n\t\t\t<div class=\"center mt10\">\t\t\t\t\n\t\t\t\t<ion-button class=\"green\" (click)=\"loginNow()\" expand=\"full\"> Sign in </ion-button>\n\t\t\t\t<p>OR</p>\n\t\t\t\t<ion-button class=\"green\" (click)=\"registernow()\" expand=\"full\"> Register </ion-button>\n\n\t\t\t</div>\n\t\t\t\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"center\">\n\t\t\n\t</ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register {\n  text-align: center;\n}\n.register h3 {\n  color: #000000;\n}\n.register .registerlogo {\n  width: 34%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRUE7RUFDSSxrQkFBQTtBQ2hFSjtBRGlFSTtFQUNJLGNBQUE7QUMvRFI7QURtRUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2pFUjtBRHFFQTtFQUNJLGlCQUFBO0FDbEVKO0FEc0VJO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQ25FUjtBRG9FUTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7QUNsRVo7QURxRUk7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtBQ25FUjtBRHNFQTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDbkVKO0FEc0VJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ25FUjtBRHFFUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbkVaO0FEdUVBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtBQ3BFSjtBRHNFQTtFQUNJLHFCQUFBO0FDbkVKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnR7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbi1iZy5qcGcnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xuLy8gfVxuXG4vLyAuaGVhZGVyLWxvZ297XG4vLyAgICAgbWFyZ2luLXRvcDogNTBweDtcbi8vICAgICBpbWd7XG4vLyAgICAgICAgIHdpZHRoOiAyNTBweDtcbi8vICAgICB9XG4vLyB9XG5cbi8vIC5sb2dpbi1ib3h7XG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgICBpb24tbGlzdHtcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIFxuLy8gICAgICAgICBpb24taXRlbXtcbi8vICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbi8vIC5zaWduLWluLWljb257XG4vLyAgICAgd2lkdGg6IDkwcHg7XG4vLyB9XG5cbi8vIC5idXR0b24tcmlwcGxle1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4vLyB9XG5cbi8vIC5mb3Jnb3QtcGFzc3tcbi8vICAgICBmb250LXNpemU6IDE1cHg7XG4vLyB9XG5cbi8vIC5mb3JnZXQtcGFzcy1yb3d7XG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcbi8vIH1cblxuLy8gLmxvZ2luLWZvb3Rlcntcbi8vICAgICBoZWlnaHQ6IDIwcHg7XG4vLyAgICAgYmFja2dyb3VuZDogI2VmZWNlYztcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIHB7XG4vLyAgICAgICAgIG1hcmdpbjogMHB4O1xuLy8gICAgICAgICBwYWRkaW5nOiAwcHg7XG4vLyAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4vLyAgICAgICAgIGNvbG9yOiAjMDAwXG4vLyAgICAgfVxuLy8gfVxuXG4vLyAubG9naW4tYnV0dG9ue1xuLy8gICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuLy8gICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyAgICAgd2lkdGg6IDIwMHB4O1xuLy8gICAgIC0tYmFja2dyb3VuZDogZ3JlZW47XG4vLyB9XG5cbi5icmxiLTMwe1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDMwJTtcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMXB4IDE1cHggMnB4IGdyZWVuO1xufVxuLnJlZ2lzdGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoM3tcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIC8vIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgfVxuICAgIC5yZWdpc3RlcmxvZ297XG4gICAgICAgIHdpZHRoOiAzNCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuXG4uZm9ybURhdGF7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5mb3Jte1xuICAgIGlvbi1pdGVte1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLml0ZW0tbmF0aXZle1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLmFjdGl2ZVRhYntcbiAgICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi51c2VyVHlwZXtcbiAgICB1bHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4udXNlclRpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cbi5ub3VuZGVybGluZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iLCIucmVnaXN0ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXIgaDMge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5yZWdpc3RlciAucmVnaXN0ZXJsb2dvIHtcbiAgd2lkdGg6IDM0JTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm1EYXRhIHtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5mb3JtIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybSBpb24taXRlbSAuaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtIGJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmVUYWIge1xuICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyVHlwZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxuLnVzZXJUeXBlIHVsIGxpIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udXNlclRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLm5vdW5kZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components.service */ "./src/app/components.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");





let LoginPage = class LoginPage {
    constructor(menu, navCtrl, componentService, restService) {
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
    ngOnInit() {
    }
    registernow() {
        this.navCtrl.navigateForward(['pre-register']);
        // this.navCtrl.navigateForward(['register']);
    }
    loginNow() {
        if (this.email == undefined || this.email == '' || this.password == '' || this.password == undefined) {
            this.componentService.presentToastWithOptions('Please fill email and password');
            return false;
        }
        this.componentService.presentLoading();
        let userDetails = {
            email: this.email,
            password: this.password
        };
        this.restService.login(userDetails).then((res) => {
            this.componentService.loadingController.dismiss();
            console.log(res);
            if (res.status == 'success') {
                let createdOn = res.user.created_at;
                let year = new Date(createdOn).getFullYear().toString();
                let month = (new Date(createdOn).getMonth() + 1).toString();
                let date = new Date(createdOn).getDate().toString();
                if (month.length == 1) {
                    month = '0' + month;
                }
                let concatDate = year + '-' + month + '-' + date;
                localStorage.setItem('id', res.user.id);
                localStorage.setItem('created_on', concatDate);
                localStorage.setItem('name', res.user.name);
                localStorage.setItem('email', res.user.email);
                localStorage.setItem('mobile', res.user.mobile);
                localStorage.setItem('role', (res.user.role == 0) ? res.user.usd_role : res.user.role);
                localStorage.setItem('role_name', (res.user.role_rel != null) ? res.user.role_rel.role_name : res.user.role_rel_usd.role_name);
                localStorage.setItem('companyname', res.user.companyname);
                localStorage.setItem('status', res.user.status);
                localStorage.setItem('expired_on', res.user.expired_on);
                localStorage.setItem('is_usd_active', res.user.is_usd_active);
                this.componentService.compareTwoDates(res.user.expired_on);
                localStorage.setItem('user', JSON.stringify(res.user));
                localStorage.setItem('token', res.user.user_token);
                localStorage.setItem('is_INR_active', res.user.is_INR_active);
                localStorage.setItem('usd_role', res.user.usd_role);
                localStorage.setItem('transaction_id', res.user.transaction_id);
                localStorage.setItem('isUserActivatedUSD', res.user.is_usd_active);
                this.componentService.loginUser.next(res.user.name);
                this.componentService.firePushNotif.next(res.user.name);
                if (res.user.status == 0) {
                    this.navCtrl.navigateForward(['verifyotp']);
                }
                else {
                    if (localStorage.getItem('role') == '2') {
                        this.navCtrl.navigateForward(['admin/chat']);
                    }
                    else {
                        if (res.user.is_usd_active == '1') {
                            localStorage.setItem('apptype', 'USD');
                            if (localStorage.getItem('isExpired') == 'false') {
                                this.navCtrl.navigateRoot('priceusd', { animationDirection: 'forward' });
                            }
                            else {
                                console.log("jjnjkn");
                                if (localStorage.getItem('is_INR_active') != '1' && localStorage.getItem('isExpired') == 'true' && localStorage.getItem('transaction_id') != null) {
                                    this.navCtrl.navigateRoot('planpage', { animationDirection: 'forward' });
                                }
                                else {
                                    localStorage.setItem('apptype', 'OTHER');
                                    this.navCtrl.navigateRoot('prices', { animationDirection: 'forward' });
                                }
                                // this.navCtrl.navigateRoot('planpage',{animationDirection: 'forward'});
                            }
                        }
                        else {
                            localStorage.setItem('apptype', 'OTHER');
                            this.navCtrl.navigateRoot('prices', { animationDirection: 'forward' });
                        }
                    }
                }
            }
            else {
                this.componentService.presentToastWithOptions('Wrong User details!');
                return false;
            }
        });
    }
    forgotpassword() {
        this.navCtrl.navigateForward(['forgotpassword']);
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"], _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map