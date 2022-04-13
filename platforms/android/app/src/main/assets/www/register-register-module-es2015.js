(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"register lightgreen\">\n\t<ion-row>\n\t\t<ion-col class=\"h-200 green brlb-30\">\n\t\t\t<!-- <h3 class=\"userTitle\">\n\t\t\t\tRegister\n\t\t\t</h3> -->\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\">\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<h3>\n\t\t\t\tRegister\n\t\t\t</h3>\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row style=\"margin-bottom: 15px;\">\n\t\t<ion-col>\n\t\t\t<ion-button class=\"green\" [ngClass]=\"(registerForm == 'domestic') ? 'activeFormType' : 'formType'\" (click)=\"registerFormType('domestic')\" style=\"color: white;font-size: 12px;\">Domestic</ion-button>\n\t\t\t<p style=\"padding: 0;margin: 0;font-size: 14px;\" >Prices IN INR</p>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t<ion-button class=\"green\" [ngClass]=\"(registerForm == 'international') ? 'activeFormType' : 'formType'\" (click)=\"registerFormType('international')\" style=\"color: white;font-size: 12px;\">International</ion-button>\n\t\t\t<p style=\"padding: 0;margin: 0;font-size: 14px;\">Prices IN USD</p>\n\t\t</ion-col>\n\t</ion-row>\n\n\t<!-- <ion-row>\n\t\t<ion-col *ngIf=\"registerForm == 'domestic' \">\n\t\t\t<p style=\"padding: 0;margin: 0;\">Prices IN INR</p>\n\t\t</ion-col>\n\t\t<ion-col *ngIf=\"registerForm == 'international' \">\n\t\t\t<p style=\"padding: 0;margin: 0;\">Prices IN USD</p>\n\t\t</ion-col>\n\t</ion-row> -->\n\n\t<ion-row class=\"userType\">\n\t\t<ul>\n\t\t\t<ion-col>\n\t\t\t\t<li (click)=\"changeState('supplier')\" [class.activeTab]=\"userState == 'supplier' \">\n\t\t\t\t\tSupplier \n\t\t\t\t</li>\n\t\t\t</ion-col>\n\t\t\t\n\t\t\t<ion-col>\n\t\t\t\t<li (click)=\"changeState('buyer')\" [class.activeTab]=\"userState == 'buyer' \">\n\t\t\t\t\tBuyer\n\t\t\t\t</li>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col *ngIf=\"registerForm == 'domestic' \" >\n\t\t\t\t<li (click)=\"changeState('broker')\" [class.activeTab]=\"userState == 'broker' \">\n\t\t\t\t\tBroker\n\t\t\t\t</li>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col>\n\t\t\t\t<li (click)=\"changeState('guest')\" [class.activeTab]=\"userState == 'guest' \">\n\t\t\t\t\t{{ ( registerForm == 'domestic' ) ? 'Guest' : 'Other User'  }}\n\t\t\t\t</li>\n\t\t\t</ion-col>\n\t\t</ul>\n\t</ion-row>\n\t\n\t<ion-row class=\"formData\">\n\n\t\t<ion-col class=\"form\" *ngIf=\"registerForm == 'domestic' \" >\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Username</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"username\" name=\"username\"></ion-input>\n\t\t\t\t<!-- <ion-icon name=\"person\" slot=\"start\"></ion-icon> -->\n\t\t\t\t<img src=\"../../assets/svg/person-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Email</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"email\" name=\"email\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/mail-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Mobile no</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"mobile\" name=\"mobile\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/call-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Company name</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"companyname\" name=\"companyname\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/business-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Password</ion-label>\n\t\t\t\t<ion-input [type]=\"password1Type\" name='password' [(ngModel)]=\"password\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password1Icon\" class=\"passwordIcon\" (click)='hideShowPassword1()'></ion-icon>\n\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Confirm Password</ion-label>\n\t\t\t\t<ion-input [type]=\"password2Type\" name='confpassword' [(ngModel)]=\"confpassword\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password2Icon\" class=\"passwordIcon\" (click)='hideShowPassword2()'></ion-icon>\n\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<!-- <p class=\"center w-100\">Already a user ? <a href=\"javascript:void(0)\" class=\"nounderline\" (click)=\"signin()\">Sign in</a></p> -->\n\t\t\t\t<label for=\"\">\n\t\t\t\t\t<input type=\"checkbox\" (click)=\"changetermsandcondition($event)\" >Agree with \n\t\t\t\t\t<a class=\"nounderline\" href=\"javascript:void(0)\" (click)=\"termsandcondition()\">terms and condition</a>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<ion-button class=\"green\" (click)=\"registerUser()\" expand=\"full\"> Register </ion-button>\n\t\t\t\t<p>OR</p>\n\t\t\t\t<ion-button class=\"green\" (click)=\"signin()\" expand=\"full\"> Sign In </ion-button>\n\t\t\t</div>\n\t\t</ion-col>\n\n\t\t<ion-col class=\"form\" *ngIf=\"registerForm == 'international' \">\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Username</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"username\" name=\"username\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/person-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Email</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"email\" name=\"email\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/mail-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Company name</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"companyname\" name=\"companyname\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/business-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Address</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"address\" name=\"address\"></ion-input>\n\t\t\t\t<ion-icon slot=\"start\" name=\"map-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon>\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-item style=\"width: 100%\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-label position=\"floating\">Country</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\"  [(ngModel)]=\"country\" name=\"country\" (ionChange)=\"changeCountry($event)\">\n\t\t\t\t\t  \t<ion-select-option value=\"{{ country }}\" *ngFor=\"let country of listCountries\">{{country}}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t  </ion-item>\n\t\t\t\t<ion-icon slot=\"start\" name=\"earth-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Zip Code</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"zipcode\" name=\"zipcode\"></ion-input>\n\t\t\t\t<ion-icon slot=\"start\" name=\"globe-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon>\n\t\t\t</ion-item>\n\t\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-item style=\"width: 100%\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-label position=\"floating\">Import Port</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"import\" name=\"import\" (ionChange)=\"changePort($event)\">\n\t\t\t\t\t\t\t<ion-select-option value=\"{{ country.port }}\" *ngFor=\"let country of selectedPort\">{{country.port}}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t\t</ion-item>\n\t\t\t\t<ion-icon slot=\"start\" name=\"earth-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Contact Person</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"contactperson\" name=\"contactperson\"></ion-input>\n\t\t\t\t<ion-icon  slot=\"start\" name=\"person-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Mobile no</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"mobile\" name=\"mobile\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/call-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Password</ion-label>\n\t\t\t\t<ion-input [type]=\"password1Type\" name='password' [(ngModel)]=\"password\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password1Icon\" class=\"passwordIcon\" (click)='hideShowPassword1()'></ion-icon>\n\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Confirm Password</ion-label>\n\t\t\t\t<ion-input [type]=\"password2Type\" name='confpassword' [(ngModel)]=\"confpassword\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password2Icon\" class=\"passwordIcon\" (click)='hideShowPassword2()'></ion-icon>\n\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<label for=\"\">\n\t\t\t\t\t<input type=\"checkbox\" (click)=\"changetermsandcondition($event)\" >Agree with \n\t\t\t\t\t<a class=\"nounderline\" href=\"javascript:void(0)\" (click)=\"termsandcondition()\">terms and condition</a>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<ion-button class=\"green\" (click)=\"registerUser()\" expand=\"full\"> Register </ion-button>\n\t\t\t\t<p>OR</p>\n\t\t\t\t<ion-button class=\"green\" (click)=\"signin()\" expand=\"full\"> Sign in </ion-button>\n\t\t\t\t<!-- <a href=\"javascript:void(0)\" class=\"nounderline\" (click)=\"signin()\"></a> -->\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t\n\t<ion-row class=\"center\"></ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register {\n  text-align: center;\n}\n.register h3 {\n  color: black;\n}\n.register .registerlogo {\n  width: 31%;\n  margin-top: 12px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n  padding: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\n.formType {\n  color: white;\n  font-size: 12px;\n  border: 2px solid #92B243;\n  margin-right: 10px;\n  background: transparent !important;\n  --background: transparent !important;\n  color: #000 !important;\n}\n.activeFormType {\n  background: #92B243 !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9yaWNlX21vYmlsZS9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FERUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBRElBO0VBQ0ksaUJBQUE7QUNESjtBREtJO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQ0ZSO0FER1E7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0FDRFo7QURJSTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0FDRlI7QURNQTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDSEo7QURRSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDTFI7QURPUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0xaO0FEWUE7RUFDSSwyQkFBQTtFQUNBLDZCQUFBO0FDVEo7QURZQTtFQUNJLHFCQUFBO0FDVEo7QURZQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQ1RKO0FEWUE7RUFDSSw4QkFBQTtFQUNBLHVCQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGgze1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgLy8gdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB9XG4gICAgLnJlZ2lzdGVybG9nb3tcbiAgICAgICAgd2lkdGg6IDMxJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG59XG5cbi5mb3JtRGF0YXtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLmZvcm17XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAuaXRlbS1uYXRpdmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9ue1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5hY3RpdmVUYWJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyVHlwZXtcbiAgICAgICAgXG4gICAgdWx7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi51c2VyVGl0bGV7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubm91bmRlcmxpbmV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9ybVR5cGV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlRm9ybVR5cGUge1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbiAgICBcbiIsIi5yZWdpc3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3RlciBoMyB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5yZWdpc3RlciAucmVnaXN0ZXJsb2dvIHtcbiAgd2lkdGg6IDMxJTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmZvcm1EYXRhIHtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5mb3JtIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybSBpb24taXRlbSAuaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtIGJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmVUYWIge1xuICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyVHlwZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnVzZXJUeXBlIHVsIGxpIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnVzZXJUaXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3VuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZvcm1UeXBlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlRm9ybVR5cGUge1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components.service */ "./src/app/components.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");





let RegisterPage = class RegisterPage {
    constructor(api, navCtrl, componentSer) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.componentSer = componentSer;
        this.termsAndConditions = false;
        this.password1Type = 'password';
        this.password1Icon = 'eye-off';
        this.registerForm = 'domestic';
        this.password2Type = 'password';
        this.password2Icon = 'eye-off';
    }
    hideShowPassword1() {
        this.password1Type = this.password1Type === 'text' ? 'password' : 'text';
        this.password1Icon = this.password1Icon === 'eye-off' ? 'eye' : 'eye-off';
    }
    hideShowPassword2() {
        this.password2Type = this.password2Type === 'text' ? 'password' : 'text';
        this.password2Icon = this.password2Icon === 'eye-off' ? 'eye' : 'eye-off';
    }
    ngOnInit() {
        this.userState = "supplier";
        this.getCountries();
    }
    changeState(state) {
        this.userState = state;
    }
    isValidEmail(value) {
        return /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test(value);
    }
    termsandcondition() {
        this.navCtrl.navigateForward(['termsandcondition']);
    }
    registerUser() {
        var form = new FormData();
        if (this.termsAndConditions == true) {
            if (this.zipcode != undefined) {
                if (this.username != undefined && this.email != undefined && this.companyname != undefined && this.address != undefined && this.country != undefined && this.zipcode != undefined && this.contactperson != undefined && this.mobile != undefined && this.password != undefined && this.confpassword != undefined && this.mySelectedPort != undefined && this.selectedCountry != undefined) {
                    let postData = {
                        'username': this.username,
                        'email': this.email,
                        'companyname': this.companyname,
                        'address': this.address,
                        'country': this.country,
                        'zipcode': this.zipcode,
                        'contactperson': this.contactperson,
                        'mobile': this.mobile,
                        'password': this.password,
                        'import_port': this.mySelectedPort,
                        'userState': this.userState
                    };
                    this.api.regsiterUser(postData).then((res) => {
                        localStorage.setItem('id', res.data.id);
                        localStorage.setItem('name', res.data.name);
                        localStorage.setItem('email', res.data.email);
                        localStorage.setItem('mobile', res.data.mobile);
                        localStorage.setItem('role', res.data.role);
                        localStorage.setItem('companyname', res.data.companyname);
                        localStorage.setItem('expired_on', res.data.expired_on);
                        localStorage.setItem('apptype', 'USD');
                        this.componentSer.compareTwoDates(res.data.expired_on);
                        this.navCtrl.navigateForward(['verifyotp']);
                        this.api.loaderCtrl.dismiss();
                    }, (err) => {
                        this.api.presentToast(err.error.error);
                        this.api.loaderCtrl.dismiss();
                    });
                }
                else {
                    this.api.presentToast('Data not correct');
                }
            }
            else {
                if (this.username != '' && this.email != '' && this.mobile != '' && this.password != '' && this.confpassword != '') {
                    if (this.isValidEmail(this.email) == true) {
                        if (this.mobile.length == 10 || this.mobile.length == 11 || this.mobile.length == 12) {
                            if (this.password == this.confpassword) {
                                let postData = {
                                    'username': this.username,
                                    'email': this.email,
                                    'mobile': this.mobile,
                                    'companyname': this.companyname,
                                    'password': this.password,
                                    'userState': this.userState
                                };
                                this.api.presentLoader('Please wait...');
                                this.api.regsiterUser(postData).then((res) => {
                                    localStorage.setItem('id', res.data.id);
                                    localStorage.setItem('name', res.data.name);
                                    localStorage.setItem('email', res.data.email);
                                    localStorage.setItem('mobile', res.data.mobile);
                                    localStorage.setItem('role', res.data.role);
                                    localStorage.setItem('companyname', res.data.companyname);
                                    localStorage.setItem('expired_on', res.data.expired_on);
                                    this.componentSer.compareTwoDates(res.data.expired_on);
                                    this.navCtrl.navigateForward(['verifyotp']);
                                    // this.navCtrl.navigateForward(['prices']);
                                    // this.api.presentToast('User register successfully.');
                                    this.api.loaderCtrl.dismiss();
                                }, (err) => {
                                    this.api.presentToast(err.error.error);
                                    this.api.loaderCtrl.dismiss();
                                });
                            }
                            else {
                                this.api.presentToast('Password and Confirm Password is invalid.');
                            }
                        }
                        else {
                            this.api.presentToast('Mobile number is invalid.');
                        }
                    }
                    else {
                        this.api.presentToast('Email is invalid.');
                    }
                }
                else {
                    this.api.presentToast('Required field are missing.');
                }
            }
        }
        else {
            this.api.presentToast("Terms and condition must be checked");
        }
    }
    changetermsandcondition(e) {
        this.termsAndConditions = e.currentTarget.checked;
    }
    signin() {
        console.log("nkjnk");
        this.navCtrl.navigateRoot(['login']);
    }
    registerFormType(formtype) {
        this.registerForm = formtype;
    }
    getCountries() {
        this.api.getUSDCounties().then((res) => {
            this.listCountries = (Object.keys(res.countries).sort());
            this.data = res.countries;
        }, (err) => {
            console.log(err);
        });
    }
    changeCountry(event) {
        this.selectedCountry = event.detail.value;
        this.selectedPort = this.data[this.selectedCountry];
    }
    changePort(event) {
        this.mySelectedPort = event.detail.value;
    }
};
RegisterPage.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map