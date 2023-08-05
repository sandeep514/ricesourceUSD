(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"register lightgreen\">\n\t<ion-row>\n\t\t<ion-col class=\"h-200 green brlb-30\">\n\t\t\t<!-- <h3 class=\"userTitle\">\n\t\t\t\tRegister\n\t\t\t</h3> -->\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\">\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<h3>\n\t\t\t\tRegister\n\t\t\t</h3>\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row style=\"margin-bottom: 15px;\">\n\t\t<ion-col *ngIf=\"registerForm == 'domestic' \">\n\t\t\t<ion-button class=\"green\" [ngClass]='((registerForm == \"domestic\") ? \"activeFormType\" : \"formType\")' (click)=\"registerFormType('domestic')\" style=\"color: white;font-size: 12px;\">Domestic</ion-button>\n\t\t\t<p style=\"padding: 0;margin: 0;font-size: 14px;\" >Prices in INR</p>\n\t\t</ion-col>\n\t\t<ion-col *ngIf=\"registerForm == 'international' \">\n\t\t\t<ion-button class=\"green\" [ngClass]='((registerForm == \"international\") ? \"activeFormType\" : \"formType\")' (click)=\"registerFormType('international')\" style=\"color: white;font-size: 12px;\">International</ion-button>\n\t\t\t<p style=\"padding: 0;margin: 0;font-size: 14px;\">Prices in USD</p>\n\t\t</ion-col>\n\t</ion-row>\n\n\t<div>\n\t\t<div *ngIf=\"registerForm == 'international'\">\n\t\t\t<p style=\"padding-top: 0; margin-top: 0; font-weight: bold\">Real Time Indian Rice Prices in USD !</p>\n\t\t</div>\n\t</div>\n\t\n\t<!-- <ion-row>\n\t\t<ion-col *ngIf=\"registerForm == 'domestic' \">\n\t\t\t<p style=\"padding: 0;margin: 0;\">Prices IN INR</p>\n\t\t</ion-col>\n\t\t<ion-col *ngIf=\"registerForm == 'international' \">\n\t\t\t<p style=\"padding: 0;margin: 0;\">Prices IN USD</p>\n\t\t</ion-col>\n\t</ion-row> -->\n\n\t<ion-row class=\"userType\">\n\t\t<ul>\n\t\t\t<ion-col *ngIf=\"registerForm == 'domestic' \" >\n\t\t\t\t<li (click)=\"changeState('supplier')\" [class.activeTab]=\"userState == 'supplier' \">\n\t\t\t\t\tSupplier \n\t\t\t\t</li>\n\t\t\t</ion-col>\n\t\t\t\n\t\t\t<ion-col>\n\t\t\t\t<li (click)=\"changeState('buyer')\" [class.activeTab]=\"userState == 'buyer' \">\n\t\t\t\t\tBuyer\n\t\t\t\t</li>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col *ngIf=\"registerForm == 'domestic' \" >\n\t\t\t\t<li (click)=\"changeState('broker')\" [class.activeTab]=\"userState == 'broker' \">\n\t\t\t\t\tBroker\n\t\t\t\t</li>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col>\n\t\t\t\t<li (click)=\"changeState('guest')\" [class.activeTab]=\"userState == 'guest' \">\n\t\t\t\t\t{{ ( registerForm == 'domestic' ) ? 'Guest' : 'Other User'  }}\n\t\t\t\t</li>\n\t\t\t</ion-col>\n\t\t</ul>\n\t</ion-row>\n\t\n\t<ion-row class=\"formData\">\n\n\t\t<ion-col class=\"form\" *ngIf=\"registerForm == 'domestic' \" >\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Username</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"username\" name=\"username\"></ion-input>\n\t\t\t\t<!-- <ion-icon name=\"person\" slot=\"start\"></ion-icon> -->\n\t\t\t\t<img src=\"../../assets/svg/person-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Email</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"email\" name=\"email\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/mail-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Mobile no</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"mobile\" name=\"mobile\" type=\"number\" ></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/call-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Company name</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"companyname\" name=\"companyname\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/business-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Password</ion-label>\n\t\t\t\t<ion-input [type]=\"password1Type\" name='password' [(ngModel)]=\"password\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password1Icon\" class=\"passwordIcon\" (click)='hideShowPassword1()'></ion-icon>\n\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Confirm Password</ion-label>\n\t\t\t\t<ion-input [type]=\"password2Type\" name='confpassword' [(ngModel)]=\"confpassword\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password2Icon\" class=\"passwordIcon\" (click)='hideShowPassword2()'></ion-icon>\n\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<label for=\"\" style=\"display: inline-flex;\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<label class=\"checkbox\">\n\t\t\t\t\t\t\t<ion-checkbox (ionChange)=\"checkboxClick($event)\" slot=\"end\"></ion-checkbox>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div style=\"margin-left: 10px;\">\n\t\t\t\t\t\tAgree with \n\t\t\t\t\t\t<a class=\"nounderline\" href=\"javascript:void(0)\" (click)=\"termsandcondition()\">terms and condition</a>\t\n\t\t\t\t\t</div>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<ion-button class=\"green\" (click)=\"registerUser()\" expand=\"full\"> Register </ion-button>\n\t\t\t\t<p>OR</p>\n\t\t\t\t<ion-button class=\"green\" (click)=\"signin()\" expand=\"full\"> Sign In </ion-button>\n\t\t\t</div>\n\t\t</ion-col>\n\n\t\t<ion-col class=\"form\" *ngIf=\"registerForm == 'international' \">\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Username</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"username\" name=\"username\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/person-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Email</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"email\" name=\"email\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/mail-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Company name</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"companyname\" name=\"companyname\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/business-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Address</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"address\" name=\"address\"></ion-input>\n\t\t\t\t<ion-icon slot=\"start\" name=\"map-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon>\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item *ngIf=\"userState != 'guest' \">\n\t\t\t\t<ion-item style=\"width: 100%\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Country</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\"  [(ngModel)]=\"country\" name=\"country\" (ionChange)=\"changeCountry($event)\">\n\t\t\t\t\t  \t<ion-select-option value=\"{{ country }}\" *ngFor=\"let country of listCountries\">{{country}}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-icon slot=\"start\" name=\"earth-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item *ngIf=\"userState == 'guest' \">\n\t\t\t\t<ion-item style=\"width: 100%\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Vendor Type</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\"  [(ngModel)]=\"bagVendor\" name=\"bagVendor\" (ionChange)=\"changebagVendor($event)\">\n\t\t\t\t\t  \t<ion-select-option value=\"{{ vendors.id }}\" *ngFor=\"let vendors of bagVendorCategory\">{{ vendors.name }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t  </ion-item>\n\t\t\t\t<ion-icon slot=\"start\" name=\"people\" style=\"color: black; margin-top: 17px;\"></ion-icon>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item *ngIf=\"userState != 'guest' \">\n\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Zip Code</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"zipcode\" name=\"zipcode\"></ion-input>\n\t\t\t\t<!-- <ion-icon slot=\"start\" name=\"globe-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon> -->\n\t\t\t\t<img slot=\"start\" src=\"../../assets/menu/zipcode1.png\" style=\"width: 7%;margin-top: 13px;\"/>\n\n\t\t\t</ion-item>\n\t\t\t\t\n\t\t\t<ion-item  *ngIf=\"userState != 'guest' \">\n\t\t\t\t<ion-item style=\"width: 100%\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Import Port</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"import\" name=\"import\" (ionChange)=\"changePort($event)\">\n\t\t\t\t\t\t<ion-select-option value=\"{{ country.port }}\" *ngFor=\"let country of selectedPort\">{{country.port}}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<img slot=\"start\" src=\"../../assets/menu/images-removebg-preview.png\" style=\"width: 8%;\"/>\n\t\t\t\t<!-- <ion-icon slot=\"start\" name=\"earth-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon> -->\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Contact Person</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"contactperson\" name=\"contactperson\"></ion-input>\n\t\t\t\t<ion-icon  slot=\"start\" name=\"person-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"\">Mobile no: {{ selectedCountryMobileCode }}</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"mobile\" name=\"mobile\" type=\"number\" ></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/call-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Password</ion-label>\n\t\t\t\t<ion-input [type]=\"password1Type\" name='password' [(ngModel)]=\"password\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password1Icon\" class=\"passwordIcon\" (click)='hideShowPassword1()'></ion-icon>\n\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\" style=\"padding: 0;margin: 0;\">Confirm Password</ion-label>\n\t\t\t\t<ion-input [type]=\"password2Type\" name='confpassword' [(ngModel)]=\"confpassword\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password2Icon\" class=\"passwordIcon\" (click)='hideShowPassword2()'></ion-icon>\n\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<label for=\"\" style=\"display: inline-flex;\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<label class=\"checkbox\">\n\t\t\t\t\t\t\t<ion-checkbox (ionChange)=\"checkboxClick($event)\" slot=\"end\"></ion-checkbox>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div style=\"margin-left: 10px;\">\n\t\t\t\t\t\tAgree with \n\t\t\t\t\t\t<a class=\"nounderline\" href=\"javascript:void(0)\" (click)=\"termsandcondition()\">terms and condition</a>\t\n\t\t\t\t\t</div>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<ion-button class=\"green\" (click)=\"registerUser()\" expand=\"full\"> Register </ion-button>\n\t\t\t\t<p>OR</p>\n\t\t\t\t<ion-button class=\"green\" (click)=\"signin()\" expand=\"full\"> Sign in </ion-button>\n\t\t\t\t<!-- <a href=\"javascript:void(0)\" class=\"nounderline\" (click)=\"signin()\"></a> -->\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t\n\t<ion-row class=\"center\"></ion-row>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".register {\n  text-align: center;\n}\n.register h3 {\n  color: black;\n}\n.register .registerlogo {\n  width: 31%;\n  margin-top: 12px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n  padding: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\n.formType {\n  color: white;\n  font-size: 12px;\n  border: 2px solid #92B243;\n  margin-right: 10px;\n  background: transparent !important;\n  --background: transparent !important;\n  color: #000 !important;\n}\n.activeFormType {\n  background: #92B243 !important;\n  color: white !important;\n}\n.checkbox-icon {\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBREVJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDQVI7QURJQTtFQUNJLGlCQUFBO0FDREo7QURLSTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7QUNGUjtBREdRO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQ0RaO0FESUk7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtBQ0ZSO0FETUE7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ0hKO0FEUUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0xSO0FET1E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNMWjtBRFlBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtBQ1RKO0FEWUE7RUFDSSxxQkFBQTtBQ1RKO0FEWUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUNUSjtBRFlBO0VBQ0ksOEJBQUE7RUFDQSx1QkFBQTtBQ1RKO0FEWUE7RUFDSSxlQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGgze1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgLy8gdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB9XG4gICAgLnJlZ2lzdGVybG9nb3tcbiAgICAgICAgd2lkdGg6IDMxJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG59XG5cbi5mb3JtRGF0YXtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLmZvcm17XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAuaXRlbS1uYXRpdmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9ue1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5hY3RpdmVUYWJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyVHlwZXtcbiAgICAgICAgXG4gICAgdWx7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi51c2VyVGl0bGV7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubm91bmRlcmxpbmV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9ybVR5cGV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlRm9ybVR5cGUge1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbiBcbi5jaGVja2JveC1pY29ue1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn0iLCIucmVnaXN0ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXIgaDMge1xuICBjb2xvcjogYmxhY2s7XG59XG4ucmVnaXN0ZXIgLnJlZ2lzdGVybG9nbyB7XG4gIHdpZHRoOiAzMSU7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5mb3JtRGF0YSB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZm9ybSBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmZvcm0gaW9uLWl0ZW0gLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybSBidXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlVGFiIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udXNlclR5cGUgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi51c2VyVHlwZSB1bCBsaSB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi51c2VyVGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubm91bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JtVHlwZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZUZvcm1UeXBlIHtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmNoZWNrYm94LWljb24ge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59Il19 */");

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
        this.selectedBagVendorCategory = 0;
        this.selectedCountryMobileCode = '';
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
        this.getBagVendors();
        if (localStorage.getItem('registerUserAs') != null) {
            this.registerForm = localStorage.getItem('registerUserAs');
            if (localStorage.getItem('registerUserAs') == 'international') {
                this.userState = "buyer";
            }
            else {
                this.userState = "supplier";
            }
        }
    }
    changeState(state) {
        this.userState = state;
        console.log(state);
    }
    isValidEmail(value) {
        return /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test(value);
    }
    termsandcondition() {
        this.navCtrl.navigateForward(['termsandcondition']);
    }
    registerUser() {
        if (this.termsAndConditions == true) {
            var form = new FormData();
            if (this.registerForm == 'international' && this.userState == 'guest') {
                if (this.username != undefined && this.email && this.companyname && this.address && this.contactperson && this.mobile && this.password && this.userState && this.selectedBagVendorCategory) {
                    let postData = {
                        'username': this.username,
                        'email': this.email,
                        'companyname': this.companyname,
                        'address': this.address,
                        'contactperson': this.contactperson,
                        'mobile': this.mobile,
                        'password': this.password,
                        'userState': this.userState,
                        'bagCategory': this.selectedBagVendorCategory,
                        'registerForm': this.registerForm
                    };
                    this.api.presentLoader('Please wait...');
                    this.api.regsiterUser(postData).then((res) => {
                        console.log(res);
                        let createdOn = res.data.created_at;
                        let year = new Date(createdOn).getFullYear().toString();
                        let month = (new Date(createdOn).getMonth() + 1).toString();
                        let date = new Date(createdOn).getDate().toString();
                        if (month.length == 1) {
                            month = '0' + month;
                        }
                        let concatDate = year + '-' + month + '-' + date;
                        localStorage.setItem('id', res.data.id);
                        localStorage.setItem('created_on', concatDate);
                        localStorage.setItem('name', res.data.name);
                        localStorage.setItem('email', res.data.email);
                        localStorage.setItem('mobile', res.data.mobile);
                        localStorage.setItem('role', res.data.role);
                        localStorage.setItem('companyname', res.data.companyname);
                        localStorage.setItem('expired_on', res.data.expired_on);
                        localStorage.setItem('apptype', 'USD');
                        localStorage.setItem('isUserActivatedUSD', res.data.is_usd_active);
                        localStorage.setItem('status', (res.data.status).toString());
                        localStorage.setItem('user', JSON.stringify(res.data));
                        localStorage.setItem('token', res.data.user_token);
                        localStorage.setItem('is_INR_active', res.data.is_INR_active);
                        localStorage.setItem('usd_role', res.data.usd_role);
                        this.componentSer.compareTwoDates(res.data.expired_on);
                        this.navCtrl.navigateForward(['verifyotp']);
                        this.api.loaderCtrl.dismiss();
                    }, (err) => {
                        this.api.presentToast(err.error.error);
                        this.api.loaderCtrl.dismiss();
                        this.api.loaderCtrl.dismiss();
                    });
                }
                else {
                    this.api.presentToast('Data not correct');
                    this.api.loaderCtrl.dismiss();
                }
            }
            else {
                if (this.mySelectedPort != undefined) {
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
                            'userState': this.userState,
                            'bagCategory': this.selectedBagVendorCategory
                        };
                        this.api.presentLoader('Please wait...');
                        this.api.regsiterUser(postData).then((res) => {
                            console.log(res);
                            let createdOn = res.data.created_at;
                            let year = new Date(createdOn).getFullYear().toString();
                            let month = (new Date(createdOn).getMonth() + 1).toString();
                            let date = new Date(createdOn).getDate().toString();
                            if (month.length == 1) {
                                month = '0' + month;
                            }
                            let concatDate = year + '-' + month + '-' + date;
                            localStorage.setItem('id', res.data.id);
                            localStorage.setItem('created_on', concatDate);
                            localStorage.setItem('name', res.data.name);
                            localStorage.setItem('email', res.data.email);
                            localStorage.setItem('mobile', res.data.mobile);
                            localStorage.setItem('role', res.data.role);
                            localStorage.setItem('companyname', res.data.companyname);
                            localStorage.setItem('expired_on', res.data.expired_on);
                            localStorage.setItem('apptype', 'USD');
                            localStorage.setItem('isUserActivatedUSD', res.data.is_usd_active);
                            localStorage.setItem('status', (res.data.status).toString());
                            localStorage.setItem('user', JSON.stringify(res.data));
                            localStorage.setItem('token', res.data.user_token);
                            localStorage.setItem('is_INR_active', res.data.is_INR_active);
                            localStorage.setItem('usd_role', res.data.usd_role);
                            this.componentSer.compareTwoDates(res.data.expired_on);
                            this.navCtrl.navigateForward(['verifyotp']);
                            this.api.loaderCtrl.dismiss();
                        }, (err) => {
                            this.api.presentToast(err.error.error);
                            this.api.loaderCtrl.dismiss();
                            this.api.loaderCtrl.dismiss();
                        });
                    }
                    else {
                        this.api.presentToast('Required field missing.');
                        this.api.loaderCtrl.dismiss();
                    }
                }
                else {
                    if (this.username != '' && this.email != '' && this.mobile != '' && this.password != '' && this.confpassword != '' && this.username != undefined && this.email != undefined && this.mobile != undefined && this.password != undefined && this.confpassword != undefined) {
                        if (this.isValidEmail(this.email) == true) {
                            if (this.mobile.toString().length == 10) {
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
                                        let createdOn = res.data.created_at;
                                        let year = new Date(createdOn).getFullYear().toString();
                                        let month = (new Date(createdOn).getMonth() + 1).toString();
                                        let date = new Date(createdOn).getDate().toString();
                                        if (month.length == 1) {
                                            month = '0' + month;
                                        }
                                        let concatDate = year + '-' + month + '-' + date;
                                        localStorage.setItem('id', res.data.id);
                                        localStorage.setItem('created_on', concatDate);
                                        localStorage.setItem('name', res.data.name);
                                        localStorage.setItem('email', res.data.email);
                                        localStorage.setItem('mobile', res.data.mobile);
                                        localStorage.setItem('role', res.data.role);
                                        localStorage.setItem('companyname', res.data.companyname);
                                        localStorage.setItem('expired_on', res.data.expired_on);
                                        this.componentSer.compareTwoDates(res.data.expired_on);
                                        localStorage.setItem('apptype', 'OTHER');
                                        localStorage.setItem('isUserActivatedUSD', res.data.is_usd_active);
                                        localStorage.setItem('status', (res.data.status).toString());
                                        localStorage.setItem('user', JSON.stringify(res.data));
                                        localStorage.setItem('token', res.data.user_token);
                                        localStorage.setItem('is_INR_active', res.data.is_INR_active);
                                        localStorage.setItem('usd_role', res.data.usd_role);
                                        localStorage.setItem('transaction_id', res.data.transaction_id);
                                        this.componentSer.compareTwoDates(res.data.expired_on);
                                        this.navCtrl.navigateForward(['verifyotp']);
                                        // this.navCtrl.navigateForward(['prices']);
                                        // this.api.presentToast('User register successfully.');
                                        this.api.loaderCtrl.dismiss();
                                        this.api.loaderCtrl.dismiss();
                                    }, (err) => {
                                        this.api.presentToast(err.error.error);
                                        this.api.loaderCtrl.dismiss();
                                        this.api.loaderCtrl.dismiss();
                                    });
                                }
                                else {
                                    this.api.presentToast('Password and Confirm Password is invalid.');
                                    this.api.loaderCtrl.dismiss();
                                }
                            }
                            else {
                                this.api.presentToast('Mobile number is invalid.');
                                this.api.loaderCtrl.dismiss();
                            }
                        }
                        else {
                            this.api.presentToast('Email is invalid or empty.');
                            this.api.loaderCtrl.dismiss();
                        }
                    }
                    else {
                        this.api.presentToast('Required field are missing.');
                        this.api.loaderCtrl.dismiss();
                    }
                }
            }
            // setTimeout(() => {
            // 	this.api.loaderCtrl.dismiss();
            // }, 2000);
        }
        else {
            this.api.presentToast("Terms and condition must be checked");
            this.api.loaderCtrl.dismiss();
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
        console.log(formtype);
        this.registerForm = formtype;
        if (formtype == 'international') {
            this.userState = "buyer";
        }
        else {
            this.userState = "supplier";
        }
    }
    getCountries() {
        this.api.getUSDCounties().then((res) => {
            this.listCountries = (Object.keys(res.countries).sort());
            this.data = res.countries;
        }, (err) => {
            console.log(err);
        });
    }
    changebagVendor(event) {
        this.selectedBagVendorCategory = event.detail.value;
    }
    getBagVendors() {
        this.api.getBagVendors().then((res) => {
            console.log(res);
            this.bagVendorCategory = res.data;
        }, (err) => {
            console.log(err);
        });
    }
    changeCountry(event) {
        this.selectedCountry = event.detail.value;
        this.selectedPort = this.data[this.selectedCountry];
        console.log(this.data[this.selectedCountry]);
        console.log(this.data);
        this.selectedCountryMobileCode = (this.data[this.selectedCountry][0].mobile_code);
    }
    changePort(event) {
        this.mySelectedPort = event.detail.value;
    }
    checkboxClick(e) {
        // console.log(e.detail.checked)
        this.termsAndConditions = e.detail.checked;
        // var statement = true;
        // if(statement){
        //   	e.checked = true;
        // }
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