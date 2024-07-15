(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"register bg-lightgreen\">\n\t<ion-row>\n\t\t<ion-col class=\"h-260 green brlb-30\">\n\t\t\t<!-- <h3 class=\"userTitle\">\n\t\t\t\tRegister\n\t\t\t</h3> -->\n\t\t\t<img src=\"../../assets/sntc_nobackground_notitle.png\" class=\"registerlogo\" alt=\"\">\n\t\t\t\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<h3>\n\t\t\t\tForgot Password\n\t\t\t</h3>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"formData mt-50\">\n\t\t<ion-col class=\"form\">\n\t\t\t<span style=\"font-family: Lato;font-size: 22px;\">OTP has been sent to your registered mobile number/ e-mail for authentication.</span>\n\t\t\t<ul class=\"bullets\">\n\t\t\t\t<li style=\"font-family: Lato;font-size: 22px;\">\n\t\t\t\t\tSMS for Indian Users\n\t\t\t\t</li>\n\t\t\t\t<li style=\"font-family: Lato;font-size: 22px;\">\n\t\t\t\t\tEmail for International Users\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<ion-item style=\"border: 2px solid #92b243;border-radius: 10px;\">\n\t\t\t<ion-label position=\"floating\">Mobile Number</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"number\" type=\"number\" name=\"number\"></ion-input>\n\t\t\t\t<img style=\"width: 10%;margin-top: 4%;padding: 0;margin-right: 12px;;\" src=\"../../assets/svg/call-outline.svg\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<ion-button class=\"green\" (click)=\"sendOTP()\">Send OTP</ion-button>\n\t\t\t</div>\n\t\t\t<p class=\"center w-100\"><a href=\"javascript:void(0)\" class=\"nounderline\" (click)=\"login()\">Go Back</a></p>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"center\">\n\t\t\n\t</ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ForgotpasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageRoutingModule", function() { return ForgotpasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/forgotpassword/forgotpassword.page.ts");




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordPage"]
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotpasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassword-routing.module */ "./src/app/forgotpassword/forgotpassword-routing.module.ts");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/forgotpassword/forgotpassword.page.ts");







let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPageRoutingModule"]
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]]
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register {\n  text-align: center;\n}\n.register .registerlogo {\n  width: 40%;\n  margin-top: 35px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksa0JBQUE7QUNISjtBRFNJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDUFI7QURXQTtFQUNJLGlCQUFBO0FDUko7QURZSTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7QUNUUjtBRFVRO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQ1JaO0FEV0k7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtBQ1RSO0FEWUE7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ1RKO0FEWUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDVFI7QURXUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDVFo7QURhQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUNWSjtBRFlBO0VBQ0kscUJBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5icmxiLTMwe1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDMwJTtcbi8vICAgICBib3gtc2hhZG93OiAwcHggMXB4IDE1cHggMnB4IGdyZWVuO1xuLy8gfVxuLnJlZ2lzdGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoM3tcbiAgICAgICAgLy8gY29sb3I6IHdoaXRlO1xuICAgICAgICAvLyB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIH1cbiAgICAucmVnaXN0ZXJsb2dve1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIH1cbn1cblxuLmZvcm1EYXRhe1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZm9ybXtcbiAgICBpb24taXRlbXtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC5pdGVtLW5hdGl2ZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidXR0b257XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzkyQjI0MyAgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5hY3RpdmVUYWJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udXNlclR5cGV7XG4gICAgdWx7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnVzZXJUaXRsZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4ubm91bmRlcmxpbmV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSIsIi5yZWdpc3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3RlciAucmVnaXN0ZXJsb2dvIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLmZvcm1EYXRhIHtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5mb3JtIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybSBpb24taXRlbSAuaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtIGJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmVUYWIge1xuICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyVHlwZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxuLnVzZXJUeXBlIHVsIGxpIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udXNlclRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLm5vdW5kZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
  \*******************************************************/
/*! exports provided: ForgotpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest.service */ "./src/app/rest.service.ts");




let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(navCtrl, restAPI) {
        this.navCtrl = navCtrl;
        this.restAPI = restAPI;
    }
    ngOnInit() {
    }
    login() {
        this.navCtrl.navigateForward(['login']);
    }
    sendOTP() {
        if (this.number != '' && this.number != undefined) {
            this.navCtrl.navigateForward(['otp', { number: this.number }]);
        }
        else {
            this.restAPI.presentToast('Mobile number required');
        }
    }
    verifyForgotPassword() {
        this.navCtrl.navigateForward(['otp']);
    }
};
ForgotpasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] }
];
ForgotpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgotpassword.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgotpassword.page.scss */ "./src/app/forgotpassword/forgotpassword.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]])
], ForgotpasswordPage);



/***/ })

}]);
//# sourceMappingURL=forgotpassword-forgotpassword-module-es2015.js.map