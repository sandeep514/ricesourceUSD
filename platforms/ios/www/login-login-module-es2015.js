(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"register green\">\n\n\t<ion-row>\n\t\t<ion-col class=\"h-160  brlb-30\">\n\t\t\t<!-- <h3 class=\"userTitle\">\n\t\t\t\tRegister\n\t\t\t</h3> -->\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\" >\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col size=\"12\">\n\t\t\t<h3 style=\"font-family: 'Poppins-SemiBold';font-weight: 500;color: #fff;font-size: 35px;margin: 0px;padding: 0px;\">\n\t\t\t\tWelcome back\n\t\t\t</h3>\n\t\t</ion-col>\n\t\t<ion-col size=\"12\">\n\t\t\t<p style=\"font-family: 'Poppins-Regular';font-weight: 500;color: #fff;font-size: 16px;margin: 0px;padding: 0px;\">\n\t\t\t\tLogin To Access Your Account\n\t\t\t</p>\n\t\t</ion-col>\n\t</ion-row>\n\t\n\t<ion-row class=\"formData \">\n\t\t<ion-col class=\"form\">\n\t\t\t<ion-item no-lines lines=\"none\" style=\"background: rgba(255,255,255, 0.3);border-radius: 8px;\">\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff;margin: 0px;\">Email or Mobile number</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Email or Mobile number\" [(ngModel)]=\"email\" name=\"email\" style=\"font-family: 'Poppins-SemiBold';color: #fff;\"></ion-input>\n\t\t\t\t<!-- <img src=\"../../assets/svg/mail-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\t\t\t<ion-item no-lines lines=\"none\" style=\"background: rgba(255,255,255, 0.3);border-radius: 8px;margin-top: 20px;\">\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff;margin: 0px;\">Password</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Password\" [type]=\"passwordType\" name='password' [(ngModel)]=\"password\" style=\"width: 100%;font-family: 'Poppins-SemiBold';color: #fff;\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()' style=\"font-size: 1px;\"></ion-icon>\n\t\t\t\t<!-- <img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\t\t\t<ion-item no-lines lines=\"none\">\n\t\t\t\t<p class=\" w-100\" style=\"text-align: center;\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nounderline\" (click)=\"forgotpassword()\" style=\"color: #fff;font-family: 'Poppins-Regular';font-size: 14px;\">Forgot Password?</a>\n\t\t\t\t</p>\n\t\t\t</ion-item>\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<!-- <p class=\"center w-100\">Not a member ? <a href=\"javascript:void(0)\" class=\"nounderline\" (click)=\"registernow()\">Register now</a></p> -->\n\t\t\t</div>\n\t\t\t<div class=\"center mt10\">\t\t\t\t\n\t\t\t\t<button (click)=\"loginNow()\" size=\"large\" expand=\"full\" style=\"background: #fff;border-radius: 27px;padding: 18px;width: 100%;\"> <p style=\"padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: #677435;font-size: 16px;\">Sign in</p> </button>\n\t\t\t\t<p style=\"color: #fff;\">OR</p>\n\t\t\t\t<button (click)=\"registernow()\" expand=\"full\" style=\"background: #fff;border-radius: 27px;padding: 18px;width: 100%;\"><p style=\"padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: #677435;font-size: 16px;\">Register</p> </button>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"center\">\n\t\t\n\t</ion-row>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".register {\n  text-align: center;\n}\n.register h3 {\n  color: #000000;\n}\n.register .registerlogo {\n  width: 80px;\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n  border: 0px;\n}\n.form button {\n  --background: #fff !important;\n  background: #fff !important;\n  background-color: #fff !important;\n  --background-color: #fff !important;\n  padding: 25px;\n}\n.item-native {\n  border: 0px;\n  padding: 0px;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\nion-input {\n  padding: 0px !important;\n  --padding: 0px !important;\n  --padding-top: 0px !important;\n  --padding-bottom: 0px !important;\n  --padding-start: 0px !important;\n  --placeholder-color: #fff;\n  --placeholder-opacity: 1;\n  font-size: 14px;\n  font-family: \"Poppins-Regular\";\n}\nion-item {\n  min-height: 55px;\n  --min-height: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFQTtFQUNJLGtCQUFBO0FDaEVKO0FEaUVJO0VBQ0ksY0FBQTtBQy9EUjtBRG1FSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDakVSO0FEcUVBO0VBQ0ksaUJBQUE7QUNsRUo7QURzRUk7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0FDbkVSO0FEb0VRO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNsRVo7QURxRUk7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7QUNuRVI7QURzRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ25FSjtBRHFFQTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDbEVKO0FEcUVJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ2xFUjtBRG9FUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbEVaO0FEc0VBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtBQ25FSjtBRHFFQTtFQUNJLHFCQUFBO0FDbEVKO0FEdUVBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNwRUo7QURzRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDbkVKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnR7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbi1iZy5qcGcnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xuLy8gfVxuXG4vLyAuaGVhZGVyLWxvZ297XG4vLyAgICAgbWFyZ2luLXRvcDogNTBweDtcbi8vICAgICBpbWd7XG4vLyAgICAgICAgIHdpZHRoOiAyNTBweDtcbi8vICAgICB9XG4vLyB9XG5cbi8vIC5sb2dpbi1ib3h7XG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgICBpb24tbGlzdHtcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIFxuLy8gICAgICAgICBpb24taXRlbXtcbi8vICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbi8vIC5zaWduLWluLWljb257XG4vLyAgICAgd2lkdGg6IDkwcHg7XG4vLyB9XG5cbi8vIC5idXR0b24tcmlwcGxle1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4vLyB9XG5cbi8vIC5mb3Jnb3QtcGFzc3tcbi8vICAgICBmb250LXNpemU6IDE1cHg7XG4vLyB9XG5cbi8vIC5mb3JnZXQtcGFzcy1yb3d7XG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcbi8vIH1cblxuLy8gLmxvZ2luLWZvb3Rlcntcbi8vICAgICBoZWlnaHQ6IDIwcHg7XG4vLyAgICAgYmFja2dyb3VuZDogI2VmZWNlYztcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIHB7XG4vLyAgICAgICAgIG1hcmdpbjogMHB4O1xuLy8gICAgICAgICBwYWRkaW5nOiAwcHg7XG4vLyAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4vLyAgICAgICAgIGNvbG9yOiAjMDAwXG4vLyAgICAgfVxuLy8gfVxuXG4vLyAubG9naW4tYnV0dG9ue1xuLy8gICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuLy8gICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyAgICAgd2lkdGg6IDIwMHB4O1xuLy8gICAgIC0tYmFja2dyb3VuZDogZ3JlZW47XG4vLyB9XG5cbi5icmxiLTMwe1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDMwJTtcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMXB4IDE1cHggMnB4IGdyZWVuO1xufVxuLnJlZ2lzdGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoM3tcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIC8vIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgfVxuICAgIC5yZWdpc3RlcmxvZ297XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbn1cblxuLmZvcm1EYXRhe1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZm9ybXtcbiAgICBpb24taXRlbXtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC5pdGVtLW5hdGl2ZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzoyNXB4XG4gICAgfVxufVxuLml0ZW0tbmF0aXZle1xuICAgIGJvcmRlcjowcHg7XG4gICAgcGFkZGluZzogMHB4O1xufVxuLmFjdGl2ZVRhYntcbiAgICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi51c2VyVHlwZXtcbiAgICB1bHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4udXNlclRpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cbi5ub3VuZGVybGluZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5pb24tYnV0dG9ue1xuXG59XG5pb24taW5wdXR7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmY7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtUmVndWxhcic7XG59XG5pb24taXRlbXtcbiAgICBtaW4taGVpZ2h0OiA1NXB4O1xuICAgIC0tbWluLWhlaWdodDogNTVweDtcbn0iLCIucmVnaXN0ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXIgaDMge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5yZWdpc3RlciAucmVnaXN0ZXJsb2dvIHtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtRGF0YSB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZm9ybSBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmZvcm0gaW9uLWl0ZW0gLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMHB4O1xufVxuLmZvcm0gYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgYm9yZGVyOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmFjdGl2ZVRhYiB7XG4gIC0tYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXJUeXBlIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDA7XG59XG4udXNlclR5cGUgdWwgbGkge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MztcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi51c2VyVGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubm91bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmY7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbn1cblxuaW9uLWl0ZW0ge1xuICBtaW4taGVpZ2h0OiA1NXB4O1xuICAtLW1pbi1oZWlnaHQ6IDU1cHg7XG59Il19 */");

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
            email: (this.email).replaceAll(' ', ''),
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