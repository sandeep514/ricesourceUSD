function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html": (
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
    \***********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content class=\"register green\">\n\t<ion-row>\n\t\t<ion-col class=\"h-160  brlb-30\">\n\t\t\t<!-- <h3 class=\"userTitle\">\n\t\t\t\t\tRegister\n\t\t\t\t</h3> -->\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\">\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col size=\"12\">\n\t\t\t<h3\n\t\t\t\tstyle=\"font-family: 'Poppins-Regular';font-weight: 500;color: #fff;font-size: 35px;margin: 0px;padding: 0px;\">\n\t\t\t\tRegister\n\t\t\t</h3>\n\t\t</ion-col>\n\t\t<ion-col size=\"12\">\n\t\t\t<p\n\t\t\t\tstyle=\"font-family: 'Poppins-Regular';font-weight: 500;color: #fff;font-size: 16px;margin: 0px;padding: 0px;\">\n\t\t\t\tRegister Now To Create Your Account\n\t\t\t</p>\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row style=\"margin-bottom: 0px;\">\n\t\t<ion-col *ngIf='(registerForm == \"domestic\")'>\n\t\t\t<ion-button class=\"activeFormType\"  (click)=\"registerFormType('domestic')\" style=\"color: white;font-size: 12px;\">Domestic</ion-button>\n\t\t\t<!-- <p style=\"padding: 0;margin: 0;font-size: 14px;color: #fff;\" >Prices in INR</p> -->\n\t\t</ion-col>\n\t\t<ion-col  *ngIf='(registerForm == \"international\")'>\n\t\t\t<ion-button class=\"activeFormType\" (click)=\"registerFormType('international')\" style=\"color: white;font-size: 12px;\">International</ion-button>\n\t\t\t<!-- <p style=\"padding: 0;margin: 0;font-size: 14px;color: #fff;\">Prices in USD</p> -->\n\t\t</ion-col>\n\t</ion-row>\n\t<!-- <ion-row style=\"margin-bottom: 10px;\">\n\t\t<ion-col >\n\t\t\t<ion-button  [ngClass]='((registerForm == \"domestic\") ? \"activeFormType\" : \"formType\")' (click)=\"registerFormType('domestic')\" style=\"color: white;font-size: 12px;\">Domestic</ion-button>\n\t\t\t<p style=\"padding: 0;margin: 0;font-size: 14px;color: #fff;\" >Prices in INR</p>\n\t\t</ion-col>\n\t\t<ion-col >\n\t\t\t<ion-button  [ngClass]='((registerForm == \"international\") ? \"activeFormType\" : \"formType\")' (click)=\"registerFormType('international')\" style=\"color: white;font-size: 12px;\">International</ion-button>\n\t\t\t<p style=\"padding: 0;margin: 0;font-size: 14px;color: #fff;\">Prices in USD</p>\n\t\t</ion-col>\n\t</ion-row> -->\n\n\t<div>\n\t\t<div *ngIf=\"registerForm == 'domestic'\">\n\t\t\t<p style=\"padding-top: 0; margin-top: 0; font-weight: bold;padding: 0px;margin: 0px;color: #fff;font-size: 14px;font-family: 'Poppins-Regular' \">Real Time Indian Rice Prices in INR & USD !</p>\n\t\t</div>\n\t\t<div *ngIf=\"registerForm == 'international'\">\n\t\t\t<p style=\"padding-top: 0; margin-top: 0; font-weight: bold;padding: 0px;margin: 0px;color: #fff;font-size: 14px;font-family: 'Poppins-Regular' \">Real Time Indian Rice Prices in USD !</p>\n\t\t</div>\n\t</div>\n\t\n\t<!-- <ion-row>\n\t\t<ion-col *ngIf=\"registerForm == 'domestic' \">\n\t\t\t<p style=\"padding: 0;margin: 0;\">Prices IN INR</p>\n\t\t</ion-col>\n\t\t<ion-col *ngIf=\"registerForm == 'international' \">\n\t\t\t<p style=\"padding: 0;margin: 0;\">Prices IN USD</p>\n\t\t</ion-col>\n\t</ion-row> -->\n\n\t<ion-row class=\"userType\">\n\t\t<ul>\n\t\t\t<ion-col *ngIf=\"registerForm == 'domestic' \" >\n\t\t\t\t<li (click)=\"changeState('supplier')\" class=\"userRole\" [class.activeTab]=\"userState == 'supplier' \">\n\t\t\t\t\tSupplier \n\t\t\t\t</li>\n\t\t\t</ion-col>\n\t\t\t\n\t\t\t<ion-col>\n\t\t\t\t<li (click)=\"changeState('buyer')\" class=\"userRole\" [class.activeTab]=\"userState == 'buyer' \">\n\t\t\t\t\tBuyer\n\t\t\t\t</li>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col *ngIf=\"registerForm == 'domestic' \" >\n\t\t\t\t<li (click)=\"changeState('broker')\" class=\"userRole\" [class.activeTab]=\"userState == 'broker' \">\n\t\t\t\t\tBroker\n\t\t\t\t</li>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col>\n\t\t\t\t<li (click)=\"changeState('guest')\" class=\"userRole\" [class.activeTab]=\"userState == 'guest' \">\n\t\t\t\t\t{{ ( registerForm == 'domestic' ) ? 'Guest' : 'Other User'  }}\n\t\t\t\t</li>\n\t\t\t</ion-col>\n\t\t</ul>\n\t</ion-row>\n\t\n\t<ion-row class=\"formData\">\n\n\t\t<ion-col class=\"form\" *ngIf=\"registerForm == 'domestic' \" >\n\t\t\t<ion-item>\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Username</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\"></ion-input>\n\t\t\t\t<!-- <ion-icon name=\"person\" slot=\"start\"></ion-icon> -->\n\t\t\t\t<!-- <img src=\"../../assets/svg/person-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Email</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\n\t\t\t\t<!-- <img src=\"../../assets/svg/mail-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Mobile no</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Mobile no\" [(ngModel)]=\"mobile\" name=\"mobile\" type=\"number\" ></ion-input>\n\t\t\t\t<!-- <img src=\"../../assets/svg/call-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Company name</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Company name\" [(ngModel)]=\"companyname\" name=\"companyname\"></ion-input>\n\t\t\t\t<!-- <img src=\"../../assets/svg/business-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Password</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Password\" [type]=\"password1Type\" name='password' [(ngModel)]=\"password\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password1Icon\" class=\"passwordIcon\" (click)='hideShowPassword1()'></ion-icon>\n\t\t\t\t<!-- <img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Confirm Password</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Confirm Password\" [type]=\"password2Type\" name='confpassword' [(ngModel)]=\"confpassword\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password2Icon\" class=\"passwordIcon\" (click)='hideShowPassword2()'></ion-icon>\n\t\t\t\t<!-- <img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<label for=\"\" style=\"display: inline-flex;\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<label class=\"checkbox\">\n\t\t\t\t\t\t\t<ion-checkbox (ionChange)=\"checkboxClick($event)\" slot=\"end\"></ion-checkbox>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div style=\"margin-left: 10px;color: #fff;\">\n\t\t\t\t\t\tAgree with \n\t\t\t\t\t\t<a class=\"nounderline\" href=\"javascript:void(0)\" (click)=\"termsandcondition()\" style=\"color: #fff\">Terms & Condition</a>\t\n\t\t\t\t\t</div>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<!-- <ion-button class=\"green\" (click)=\"registerUser()\" expand=\"full\"> Register </ion-button> -->\n\t\t\t\t<button (click)=\"registerUser()\" size=\"large\" expand=\"full\"\n\t\t\t\t\tstyle=\"background: #fff !important;border-radius: 27px;padding: 18px;width: 100%;\">\n\t\t\t\t\t<p style=\"padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: #677435;font-size: 16px;\">Register</p>\n\t\t\t\t</button>\n\t\t\t\t<p style=\"font-family: 'Poppins-SemiBold';color: #fff;font-size: 16px;\" (click)=\"signin()\" >Already a Member? <span style=\"padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: \nrgba(248, 229, 57, 1);font-size: 16px;\">Login now</span></p>\n\t\t\t\t<!-- <button (click)=\"signin()\" size=\"large\" expand=\"full\"\n\t\t\t\t\tstyle=\"background: #fff !important;border-radius: 27px;padding: 18px;width: 100%;\">\n\t\t\t\t\t<p style=\"padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: #677435;font-size: 16px;\">Sign in</p>\n\t\t\t\t</button> -->\n\t\t\t\t<!-- <ion-button class=\"green\" (click)=\"signin()\" expand=\"full\"> Sign In </ion-button> -->\n\t\t\t</div>\n\t\t</ion-col>\n\n\t\t<ion-col class=\"form\" *ngIf=\"registerForm == 'international' \">\n\n\t\t\t<ion-item>\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Username</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\"></ion-input>\n\t\t\t\t<!-- <img src=\"../../assets/svg/person-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Email</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\n\t\t\t\t<!-- <img src=\"../../assets/svg/mail-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Company name</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Company name\" [(ngModel)]=\"companyname\" name=\"companyname\"></ion-input>\n\t\t\t\t<!-- <img src=\"../../assets/svg/business-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Address</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Address\" [(ngModel)]=\"address\" name=\"address\"></ion-input>\n\t\t\t\t<!-- <ion-icon slot=\"start\" name=\"map-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon> -->\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item *ngIf=\"userState != 'guest' \">\n\t\t\t\t<!-- <ion-item style=\"width: 100%\" class=\"ion-no-padding\"> -->\n\t\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Country</ion-label> -->\n\t\t\t\t\t<ion-select placeholder=\"Country\"  [(ngModel)]=\"country\" name=\"country\" (ionChange)=\"changeCountry($event)\">\n\t\t\t\t\t  \t<ion-select-option value=\"{{ country }}\" *ngFor=\"let country of listCountries\">{{country}}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t<!-- </ion-item> -->\n\t\t\t\t<!-- <ion-icon slot=\"start\" name=\"earth-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon> -->\n\t\t\t</ion-item>\n\n\t\t\t<ion-item *ngIf=\"userState == 'guest' \">\n\t\t\t\t<!-- <ion-item style=\"width: 100%\" class=\"ion-no-padding\"> -->\n\t\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Vendor Type</ion-label> -->\n\t\t\t\t\t<ion-select placeholder=\"Vendor Type\"  [(ngModel)]=\"bagVendor\" name=\"bagVendor\" (ionChange)=\"changebagVendor($event)\">\n\t\t\t\t\t  \t<ion-select-option value=\"{{ vendors.id }}\" *ngFor=\"let vendors of bagVendorCategory\">{{ vendors.name }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t  <!-- </ion-item> -->\n\t\t\t\t<!-- <ion-icon slot=\"start\" name=\"people\" style=\"color: black; margin-top: 17px;\"></ion-icon> -->\n\t\t\t</ion-item>\n\n\t\t\t<ion-item *ngIf=\"userState != 'guest' \">\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Zip Code</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Zip Code\" [(ngModel)]=\"zipcode\" name=\"zipcode\"></ion-input>\n\t\t\t\t<!-- <ion-icon slot=\"start\" name=\"globe-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon> -->\n\t\t\t\t<!-- <img slot=\"start\" src=\"../../assets/menu/zipcode1.png\" style=\"width: 7%;margin-top: 13px;\"/> -->\n\n\t\t\t</ion-item>\n\t\t\t\t\n\t\t\t<ion-item  *ngIf=\"userState != 'guest' \">\n\t\t\t\t<!-- <ion-item style=\"width: 100%\" class=\"ion-no-padding\"> -->\n\t\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Import Port</ion-label> -->\n\t\t\t\t\t<ion-select placeholder=\"Import Port\" [(ngModel)]=\"import\" name=\"import\" (ionChange)=\"changePort($event)\">\n\t\t\t\t\t\t<ion-select-option value=\"{{ country.port }}\" *ngFor=\"let country of selectedPort\">{{country.port}}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t<!-- </ion-item> -->\n\t\t\t\t\t<!-- <img slot=\"start\" src=\"../../assets/menu/images-removebg-preview.png\" style=\"width: 8%;\"/> -->\n\t\t\t\t<!-- <ion-icon slot=\"start\" name=\"earth-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon> -->\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Contact Person</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Contact Person\" [(ngModel)]=\"contactperson\" name=\"contactperson\"></ion-input>\n\t\t\t\t<!-- <ion-icon  slot=\"start\" name=\"person-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon> -->\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Mobile no: {{ selectedCountryMobileCode }}</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Mobile no: {{ selectedCountryMobileCode }}\" [(ngModel)]=\"mobile\" name=\"mobile\" type=\"number\" ></ion-input>\n\t\t\t\t<!-- <img src=\"../../assets/svg/call-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Password</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Password\" [type]=\"password1Type\" name='password' [(ngModel)]=\"password\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password1Icon\" class=\"passwordIcon\" (click)='hideShowPassword1()'></ion-icon>\n\t\t\t\t<!-- <img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<!-- <ion-label position=\"floating\" style=\"color: #fff; padding: 0;margin: 0;\">Confirm Password</ion-label> -->\n\t\t\t\t<ion-input placeholder=\"Confirm Password\" [type]=\"password2Type\" name='confpassword' [(ngModel)]=\"confpassword\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password2Icon\" class=\"passwordIcon\" (click)='hideShowPassword2()'></ion-icon>\n\t\t\t\t<!-- <img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\"> -->\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<div class=\"mt10\">\n\t\t\t\t<label for=\"\" style=\"display: inline-flex;\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<label class=\"checkbox\">\n\t\t\t\t\t\t\t<ion-checkbox (ionChange)=\"checkboxClick($event)\" slot=\"end\"></ion-checkbox>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div style=\"margin-left: 10px;\">\n\t\t\t\t\t\t<a class=\"nounderline\" href=\"javascript:void(0)\" (click)=\"termsandcondition()\" style=\"color: #fff;\"> Agree with Terms & Condition</a>\t\n\t\t\t\t\t</div>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<!-- <ion-button class=\"green\" (click)=\"registerUser()\" expand=\"full\"> Register </ion-button> -->\n\t\t\t\t<!-- <button (click)=\"registerUser()\" size=\"large\" expand=\"full\" style=\"background: #fff !important;border-radius: 27px;padding: 18px;width: 100%;\">\n\t\t\t\t\t<p style=\"padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: #677435;font-size: 16px;\">Register</p>\n\t\t\t\t</button> -->\n\t\t\t\t<button (click)=\"registerUser()\" size=\"large\" expand=\"full\"\n\t\t\t\t\tstyle=\"background: #fff !important;border-radius: 27px;padding: 18px;width: 100%;\">\n\t\t\t\t\t<p style=\"padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: #677435;font-size: 16px;\">Sign in</p>\n\t\t\t\t</button>\n\t\t\t\t<!-- <p>OR</p>\n\t\t\t\t<ion-button class=\"green\" (click)=\"signin()\" expand=\"full\"> Sign in </ion-button> -->\n\t\t\t\t<div style=\"padding: 10px 0px\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nounderline\" (click)=\"signin()\" style=\"color: #fff\">Already Member? <span style=\"color: #F8E539;font-weight: bold;\">Login Now</span></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t\n\t<ion-row class=\"center\"></ion-row>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/register/register-routing.module.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/register/register-routing.module.ts ***!
    \*****************************************************/
  /*! exports provided: RegisterPageRoutingModule */
  /***/
  function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./register.page */"./src/app/register/register.page.ts");
    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];
    var RegisterPageRoutingModule = /*#__PURE__*/_createClass(function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    });
    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);

    /***/
  }),
  /***/"./src/app/register/register.module.ts": (
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/
  /*! exports provided: RegisterPageModule */
  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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
    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./register-routing.module */"./src/app/register/register-routing.module.ts");
    /* harmony import */
    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./register.page */"./src/app/register/register.page.ts");
    var RegisterPageModule = /*#__PURE__*/_createClass(function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    });
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);

    /***/
  }),
  /***/"./src/app/register/register.page.scss": (
  /*!*********************************************!*\
    !*** ./src/app/register/register.page.scss ***!
    \*********************************************/
  /*! exports provided: default */
  /***/
  function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".register {\n  text-align: center;\n}\n.register h3 {\n  color: black;\n}\n.register .registerlogo {\n  width: 31%;\n  margin-top: 12px;\n}\n.formData {\n  padding: 0px 20px;\n}\nion-button {\n  --box-shadow: none ;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.userRole {\n  border: 2px solid rgba(244, 244, 244, 0.5) !important;\n  color: white !important;\n  border-radius: 100px !important;\n  overflow: hidden;\n  background-color: rgba(1, 0, 0, 0.3);\n  --background-color: rgba(1, 0, 0, 0.3);\n  background: rgba(1, 0, 0, 0.3);\n  --background: rgba(1, 0, 0, 0.3);\n}\n.activeTab {\n  border: 2px solid #eefcce !important;\n  color: #779a20 !important;\n  border-radius: 100px !important;\n  overflow: hidden;\n  background-color: #eefcce;\n  --background-color: rgba(238, 252, 206, 1);\n  background: #eefcce;\n  --background: rgba(238, 252, 206, 1);\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n  padding: 0;\n}\n.userType ul li {\n  padding: 10px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\n.formType {\n  border: 1px solid #fff !important;\n  color: white !important;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: #92b243;\n  --background-color: #92b243;\n  background: #92b243;\n  --background: #92b243;\n}\n.activeFormType {\n  border: 4px solid #fff !important;\n  color: #92b243 !important;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: #fff;\n  --background-color: #fff;\n  background: #fff;\n  --background: #fff;\n}\n.checkbox-icon {\n  margin-top: 3px;\n}\nion-item {\n  background: rgba(255, 255, 255, 0.3) !important;\n  border-radius: 8px;\n  margin-top: 20px;\n  --border: 0px !important;\n  --border-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtBQ0NSO0FESUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBRE1BO0VBQ0ksaUJBQUE7QUNISjtBRE1BO0VBQ0ksbUJBQUE7QUNISjtBRE9JO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQ0pSO0FETVE7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0FDSlo7QURRSTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0FDTlI7QURVQTtFQUlJLHFEQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFFQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUNYSjtBRGNBO0VBSUksb0NBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQ2RKO0FEa0NJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUMvQlI7QURpQ1E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUMvQlo7QURzQ0E7RUFDSSwyQkFBQTtFQUNBLDZCQUFBO0FDbkNKO0FEc0NBO0VBQ0kscUJBQUE7QUNuQ0o7QURzQ0E7RUFDSSxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDbkNKO0FEc0NBO0VBQ0ksaUNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ25DSjtBRHNDQTtFQUNJLGVBQUE7QUNuQ0o7QUR3Q0E7RUFDSSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FDckNKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBoMyB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgLy8gdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB9XG5cbiAgICAucmVnaXN0ZXJsb2dvIHtcbiAgICAgICAgd2lkdGg6IDMxJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG59XG5cbi5mb3JtRGF0YSB7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIC0tYm94LXNoYWRvdzogbm9uZVxufVxuXG4uZm9ybSB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAuaXRlbS1uYXRpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi51c2VyUm9sZSB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAvLyBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNDQsIDI0NCwgMjQ0LCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMCwgMCwgMC4zKTtcblxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAwLCAwLCAwLjMpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMSwgMCwgMCwgMC4zKTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMSwgMCwgMCwgMC4zKTtcbn1cblxuLmFjdGl2ZVRhYiB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAvLyBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMzgsIDI1MiwgMjA2LCAxKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZ2JhKDExOSwgMTU0LCAzMiwgMSkgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDI1MiwgMjA2LCAxKTtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyNTIsIDIwNiwgMSk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzgsIDI1MiwgMjA2LCAxKTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjM4LCAyNTIsIDIwNiwgMSk7XG59XG5cbi8vIC5hY3RpdmVUYWJ7XG4vLyAgICAgLy8gLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICAhaW1wb3J0YW50O1xuLy8gICAgIC8vIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbi8vICAgICAvLyBjb2xvcjogd2hpdGU7XG4vLyAgICAgYm9yZGVyOiAycHggc29saWQjMDAwICFpbXBvcnRhbnQ7XG4vLyAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTAwcHggIWltcG9ydGFudDtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4vLyAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuLy8gICAgIGJhY2tncm91bmQ6ICMwMDA7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xuLy8gfVxuXG5cbi51c2VyVHlwZSB7XG5cbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLnVzZXJUaXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubm91bmRlcmxpbmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZvcm1UeXBlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCNmZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyYjI0MztcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICM5MmIyNDM7XG4gICAgYmFja2dyb3VuZDogIzkyYjI0MztcbiAgICAtLWJhY2tncm91bmQ6ICM5MmIyNDM7XG59XG5cbi5hY3RpdmVGb3JtVHlwZSB7XG4gICAgYm9yZGVyOiA0cHggc29saWQjZmZmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM5MmIyNDMgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jaGVja2JveC1pY29uIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cblxuXG5pb24taXRlbSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLS1ib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iLCIucmVnaXN0ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXIgaDMge1xuICBjb2xvcjogYmxhY2s7XG59XG4ucmVnaXN0ZXIgLnJlZ2lzdGVybG9nbyB7XG4gIHdpZHRoOiAzMSU7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5mb3JtRGF0YSB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lIDtcbn1cblxuLmZvcm0gaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtIGlvbi1pdGVtIC5pdGVtLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmZvcm0gYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnVzZXJSb2xlIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNDQsIDI0NCwgMjQ0LCAwLjUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDAsIDAsIDAuMyk7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDAsIDAsIDAuMyk7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgxLCAwLCAwLCAwLjMpO1xufVxuXG4uYWN0aXZlVGFiIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2VlZmNjZSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzc3OWEyMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmY2NlO1xuICAtLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyNTIsIDIwNiwgMSk7XG4gIGJhY2tncm91bmQ6ICNlZWZjY2U7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMzgsIDI1MiwgMjA2LCAxKTtcbn1cblxuLnVzZXJUeXBlIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4udXNlclR5cGUgdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnVzZXJUaXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3VuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZvcm1UeXBlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyYjI0MztcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjOTJiMjQzO1xuICBiYWNrZ3JvdW5kOiAjOTJiMjQzO1xuICAtLWJhY2tncm91bmQ6ICM5MmIyNDM7XG59XG5cbi5hY3RpdmVGb3JtVHlwZSB7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICM5MmIyNDMgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jaGVja2JveC1pY29uIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG5pb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC0tYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/register/register.page.ts": (
  /*!*******************************************!*\
    !*** ./src/app/register/register.page.ts ***!
    \*******************************************/
  /*! exports provided: RegisterPage */
  /***/
  function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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
    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(api, navCtrl, componentSer) {
        _classCallCheck(this, RegisterPage);
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
      return _createClass(RegisterPage, [{
        key: "hideShowPassword1",
        value: function hideShowPassword1() {
          this.password1Type = this.password1Type === 'text' ? 'password' : 'text';
          this.password1Icon = this.password1Icon === 'eye-off' ? 'eye' : 'eye-off';
        }
      }, {
        key: "hideShowPassword2",
        value: function hideShowPassword2() {
          this.password2Type = this.password2Type === 'text' ? 'password' : 'text';
          this.password2Icon = this.password2Icon === 'eye-off' ? 'eye' : 'eye-off';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userState = "supplier";
          this.getCountries();
          this.getBagVendors();
          if (localStorage.getItem('registerUserAs') != null) {
            this.registerForm = localStorage.getItem('registerUserAs');
            if (localStorage.getItem('registerUserAs') == 'international') {
              this.userState = "buyer";
            } else {
              this.userState = "supplier";
            }
          }
        }
      }, {
        key: "changeState",
        value: function changeState(state) {
          this.userState = state;
          console.log(state);
        }
      }, {
        key: "isValidEmail",
        value: function isValidEmail(value) {
          return /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test(value);
        }
      }, {
        key: "termsandcondition",
        value: function termsandcondition() {
          this.navCtrl.navigateForward(['termsandcondition']);
        }
      }, {
        key: "registerUser",
        value: function registerUser() {
          var _this = this;
          if (this.termsAndConditions == true) {
            var form = new FormData();
            if (this.registerForm == 'international' && this.userState == 'guest') {
              if (this.username != undefined && this.email && this.companyname && this.address && this.contactperson && this.mobile && this.password && this.userState && this.selectedBagVendorCategory) {
                var postData = {
                  'username': this.username,
                  'email': this.email.replaceAll(' ', ''),
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
                this.api.regsiterUser(postData).then(function (res) {
                  console.log(res);
                  var createdOn = res.data.created_at;
                  var year = new Date(createdOn).getFullYear().toString();
                  var month = (new Date(createdOn).getMonth() + 1).toString();
                  var date = new Date(createdOn).getDate().toString();
                  if (month.length == 1) {
                    month = '0' + month;
                  }
                  var concatDate = year + '-' + month + '-' + date;
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
                  localStorage.setItem('status', res.data.status.toString());
                  localStorage.setItem('user', JSON.stringify(res.data));
                  localStorage.setItem('token', res.data.user_token);
                  localStorage.setItem('is_INR_active', res.data.is_INR_active);
                  localStorage.setItem('usd_role', res.data.usd_role);
                  _this.componentSer.compareTwoDates(res.data.expired_on);
                  _this.navCtrl.navigateForward(['verifyotp']);
                  _this.api.loaderCtrl.dismiss();
                }, function (err) {
                  _this.api.presentToast(err.error.error);
                  _this.api.loaderCtrl.dismiss();
                  _this.api.loaderCtrl.dismiss();
                });
              } else {
                this.api.presentToast('Data not correct');
                this.api.loaderCtrl.dismiss();
              }
            } else {
              if (this.mySelectedPort != undefined) {
                if (this.username != undefined && this.email != undefined && this.companyname != undefined && this.address != undefined && this.country != undefined && this.zipcode != undefined && this.contactperson != undefined && this.mobile != undefined && this.password != undefined && this.confpassword != undefined && this.mySelectedPort != undefined && this.selectedCountry != undefined) {
                  var _postData = {
                    'username': this.username,
                    'email': this.email.replaceAll(' ', ''),
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
                  this.api.regsiterUser(_postData).then(function (res) {
                    console.log(res);
                    var createdOn = res.data.created_at;
                    var year = new Date(createdOn).getFullYear().toString();
                    var month = (new Date(createdOn).getMonth() + 1).toString();
                    var date = new Date(createdOn).getDate().toString();
                    if (month.length == 1) {
                      month = '0' + month;
                    }
                    var concatDate = year + '-' + month + '-' + date;
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
                    localStorage.setItem('status', res.data.status.toString());
                    localStorage.setItem('user', JSON.stringify(res.data));
                    localStorage.setItem('token', res.data.user_token);
                    localStorage.setItem('is_INR_active', res.data.is_INR_active);
                    localStorage.setItem('usd_role', res.data.usd_role);
                    _this.componentSer.compareTwoDates(res.data.expired_on);
                    _this.navCtrl.navigateForward(['verifyotp']);
                    _this.api.loaderCtrl.dismiss();
                  }, function (err) {
                    _this.api.presentToast(err.error.error);
                    _this.api.loaderCtrl.dismiss();
                    _this.api.loaderCtrl.dismiss();
                  });
                } else {
                  this.api.presentToast('Required field missing.');
                  this.api.loaderCtrl.dismiss();
                }
              } else {
                if (this.username != '' && this.email != '' && this.mobile != '' && this.password != '' && this.confpassword != '' && this.username != undefined && this.email != undefined && this.mobile != undefined && this.password != undefined && this.confpassword != undefined) {
                  if (this.isValidEmail(this.email) == true) {
                    if (this.mobile.toString().length == 10) {
                      if (this.password == this.confpassword) {
                        var _postData2 = {
                          'username': this.username,
                          'email': this.email,
                          'mobile': this.mobile,
                          'companyname': this.companyname,
                          'password': this.password,
                          'userState': this.userState
                        };
                        this.api.presentLoader('Please wait...');
                        this.api.regsiterUser(_postData2).then(function (res) {
                          var createdOn = res.data.created_at;
                          var year = new Date(createdOn).getFullYear().toString();
                          var month = (new Date(createdOn).getMonth() + 1).toString();
                          var date = new Date(createdOn).getDate().toString();
                          if (month.length == 1) {
                            month = '0' + month;
                          }
                          var concatDate = year + '-' + month + '-' + date;
                          localStorage.setItem('id', res.data.id);
                          localStorage.setItem('created_on', concatDate);
                          localStorage.setItem('name', res.data.name);
                          localStorage.setItem('email', res.data.email);
                          localStorage.setItem('mobile', res.data.mobile);
                          localStorage.setItem('role', res.data.role);
                          localStorage.setItem('companyname', res.data.companyname);
                          localStorage.setItem('expired_on', res.data.expired_on);
                          _this.componentSer.compareTwoDates(res.data.expired_on);
                          localStorage.setItem('apptype', 'OTHER');
                          localStorage.setItem('isUserActivatedUSD', res.data.is_usd_active);
                          localStorage.setItem('status', res.data.status.toString());
                          localStorage.setItem('user', JSON.stringify(res.data));
                          localStorage.setItem('token', res.data.user_token);
                          localStorage.setItem('is_INR_active', res.data.is_INR_active);
                          localStorage.setItem('usd_role', res.data.usd_role);
                          localStorage.setItem('transaction_id', res.data.transaction_id);
                          _this.componentSer.compareTwoDates(res.data.expired_on);
                          _this.navCtrl.navigateForward(['verifyotp']);
                          // this.navCtrl.navigateForward(['prices']);
                          // this.api.presentToast('User register successfully.');
                          _this.api.loaderCtrl.dismiss();
                          _this.api.loaderCtrl.dismiss();
                        }, function (err) {
                          _this.api.presentToast(err.error.error);
                          _this.api.loaderCtrl.dismiss();
                          _this.api.loaderCtrl.dismiss();
                        });
                      } else {
                        this.api.presentToast('Password and Confirm Password is invalid.');
                        this.api.loaderCtrl.dismiss();
                      }
                    } else {
                      this.api.presentToast('Mobile number is invalid.');
                      this.api.loaderCtrl.dismiss();
                    }
                  } else {
                    this.api.presentToast('Email is invalid or empty.');
                    this.api.loaderCtrl.dismiss();
                  }
                } else {
                  this.api.presentToast('Required field are missing.');
                  this.api.loaderCtrl.dismiss();
                }
              }
            }
            // setTimeout(() => {
            // 	this.api.loaderCtrl.dismiss();
            // }, 2000);
          } else {
            this.api.presentToast("Terms and condition must be checked");
            this.api.loaderCtrl.dismiss();
          }
        }
      }, {
        key: "changetermsandcondition",
        value: function changetermsandcondition(e) {
          this.termsAndConditions = e.currentTarget.checked;
        }
      }, {
        key: "signin",
        value: function signin() {
          console.log("nkjnk");
          this.navCtrl.navigateRoot(['login']);
        }
      }, {
        key: "registerFormType",
        value: function registerFormType(formtype) {
          console.log(formtype);
          this.registerForm = formtype;
          if (formtype == 'international') {
            this.userState = "buyer";
          } else {
            this.userState = "supplier";
          }
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this2 = this;
          this.api.getUSDCounties().then(function (res) {
            _this2.listCountries = Object.keys(res.countries).sort();
            _this2.data = res.countries;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "changebagVendor",
        value: function changebagVendor(event) {
          this.selectedBagVendorCategory = event.detail.value;
        }
      }, {
        key: "getBagVendors",
        value: function getBagVendors() {
          var _this3 = this;
          this.api.getBagVendors().then(function (res) {
            console.log(res);
            _this3.bagVendorCategory = res.data;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "changeCountry",
        value: function changeCountry(event) {
          this.selectedCountry = event.detail.value;
          this.selectedPort = this.data[this.selectedCountry];
          console.log(this.data[this.selectedCountry]);
          console.log(this.data);
          this.selectedCountryMobileCode = this.data[this.selectedCountry][0].mobile_code;
        }
      }, {
        key: "changePort",
        value: function changePort(event) {
          this.mySelectedPort = event.detail.value;
        }
      }, {
        key: "checkboxClick",
        value: function checkboxClick(e) {
          // console.log(e.detail.checked)
          this.termsAndConditions = e.detail.checked;
          // var statement = true;
          // if(statement){
          //   	e.checked = true;
          // }
        }
      }]);
    }();
    RegisterPage.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]
      }];
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./register.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./register.page.scss */"./src/app/register/register.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]])], RegisterPage);

    /***/
  })
}]);
//# sourceMappingURL=register-register-module-es5.js.map