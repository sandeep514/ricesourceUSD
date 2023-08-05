function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verifyotp-verifyotp-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/verifyotp/verifyotp.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verifyotp/verifyotp.page.html ***!
    \*************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVerifyotpVerifyotpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content class=\"register bg-lightgreen\">\n\t<ion-row>\n\t\t<ion-col class=\"h-260 green brlb-30\">\n\t\t\t<!-- <h3 class=\"userTitle\">\n\t\t\t\tRegister\n\t\t\t</h3> -->\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\">\n\t\t\t<!-- <h3>\n\t\t\t\tOTP\n\t\t\t</h3> -->\n\t\t</ion-col>\n\t</ion-row>\n\t\n\t<ion-row class=\"formData mt-50 \">\n\t\t<div id=\"wrapper\">\n\t\t\t<div id=\"dialog\">\n\t\t\t\t<span>OTP has been sent to your registered mobile number/ e-mail for authentication.</span>\n\t\t\t\t<ul class=\"bullets\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\tSMS for Indian Users\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\tEmail for International Users\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div id=\"form\">\n\t\t\t\t\t<input type=\"number\" [(ngModel)]=\"otp\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" pattern=\"[0-9]{1}\" style='background-color: black;background: black;color: white' />\n\t\t\t\t\t<!-- <input type=\"number\" [(ngModel)]=\"text2\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" pattern=\"[0-9]{1}\" />\n\t\t\t\t\t<input type=\"number\" [(ngModel)]=\"text3\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" pattern=\"[0-9]{1}\" />\n\t\t\t\t\t<input type=\"number\" [(ngModel)]=\"text4\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" pattern=\"[0-9]{1}\" /> -->\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t\t<ion-button expand=\"block\" class=\"green mt-20\" (click)=\"checkOTP()\">Verify</ion-button>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<!-- <ion-col size=\"2\">\n\t\t\t\t\t\t\t<img (click)=\"sendOTP()\" src=\"../../assets/svg/refresh-outline.svg\" style=\"width: 100%;margin-top: 20px;\" alt=\"\">\n\t\t\t\t\t\t</ion-col> -->\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<p class=\"center w-100\" style=\"font-size: 17px;\"><a href=\"javascript:void(0)\" class=\"nounderline\" (click)=\"sendOTP()\">Resend OTP</a></p>\n\t\t\t\t\t<p class=\"center w-100\" style=\"font-size: 17px;\"><a href=\"javascript:void(0)\" class=\"nounderline\" (click)=\"login()\">Go to login</a></p>\n\t\t\t\t\t<ul class=\"verifylistitem\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ion-row>\n\t<ion-row class=\"center\">\n\t\t\n\t</ion-row>\n</ion-content>";

    /***/
  },

  /***/"./src/app/verifyotp/verifyotp-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/verifyotp/verifyotp-routing.module.ts ***!
    \*******************************************************/
  /*! exports provided: VerifyotpPageRoutingModule */
  /***/
  function srcAppVerifyotpVerifyotpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "VerifyotpPageRoutingModule", function () {
      return VerifyotpPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _verifyotp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./verifyotp.page */"./src/app/verifyotp/verifyotp.page.ts");
    var routes = [{
      path: '',
      component: _verifyotp_page__WEBPACK_IMPORTED_MODULE_3__["VerifyotpPage"]
    }];
    var VerifyotpPageRoutingModule = /*#__PURE__*/_createClass(function VerifyotpPageRoutingModule() {
      _classCallCheck(this, VerifyotpPageRoutingModule);
    });
    VerifyotpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerifyotpPageRoutingModule);

    /***/
  },

  /***/"./src/app/verifyotp/verifyotp.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/verifyotp/verifyotp.module.ts ***!
    \***********************************************/
  /*! exports provided: VerifyotpPageModule */
  /***/
  function srcAppVerifyotpVerifyotpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "VerifyotpPageModule", function () {
      return VerifyotpPageModule;
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
    var _verifyotp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./verifyotp-routing.module */"./src/app/verifyotp/verifyotp-routing.module.ts");
    /* harmony import */
    var _verifyotp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./verifyotp.page */"./src/app/verifyotp/verifyotp.page.ts");
    var VerifyotpPageModule = /*#__PURE__*/_createClass(function VerifyotpPageModule() {
      _classCallCheck(this, VerifyotpPageModule);
    });
    VerifyotpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verifyotp_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyotpPageRoutingModule"]],
      declarations: [_verifyotp_page__WEBPACK_IMPORTED_MODULE_6__["VerifyotpPage"]]
    })], VerifyotpPageModule);

    /***/
  },

  /***/"./src/app/verifyotp/verifyotp.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/verifyotp/verifyotp.page.scss ***!
    \***********************************************/
  /*! exports provided: default */
  /***/
  function srcAppVerifyotpVerifyotpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "#wrapper {\n  font-family: Lato;\n  font-size: 1.5rem;\n  text-align: center;\n  box-sizing: border-box;\n  color: #333;\n}\n#wrapper #dialog h3 {\n  margin: 0 0 10px;\n  padding: 0;\n  line-height: 1.25;\n}\n#wrapper #dialog span {\n  font-size: 90%;\n}\n#wrapper #dialog #form {\n  max-width: 240px;\n  margin: 25px auto 0;\n}\n#wrapper #dialog #form input {\n  margin: 0 5px;\n  text-align: center;\n  line-height: 80px;\n  font-size: 50px;\n  border: solid 1px #ccc;\n  box-shadow: 0 0 5px #ccc inset;\n  outline: none;\n  width: 93%;\n  transition: all 0.2s ease-in-out;\n  border-radius: 3px;\n}\n#wrapper #dialog #form input:focus {\n  border-color: purple;\n  box-shadow: 0 0 5px purple inset;\n}\n#wrapper #dialog #form input::-moz-selection {\n  background: transparent;\n}\n#wrapper #dialog #form input::selection {\n  background: transparent;\n}\n#wrapper #dialog #form button {\n  margin: 30px 0 50px;\n  width: 100%;\n  padding: 6px;\n  background-color: #B85FC6;\n  border: none;\n  text-transform: uppercase;\n}\n#wrapper #dialog button.close {\n  border: solid 2px;\n  border-radius: 30px;\n  line-height: 19px;\n  font-size: 120%;\n  width: 22px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n#wrapper #dialog div {\n  position: relative;\n  z-index: 1;\n}\n#wrapper #dialog img {\n  position: absolute;\n  bottom: -70px;\n  right: -63px;\n}\n.register {\n  text-align: center;\n}\n.register h3 {\n  color: white;\n  text-align: right;\n  margin-right: 25px;\n}\n.register .registerlogo {\n  width: 40%;\n  margin-top: 35px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\n.verifylistitem {\n  display: inline-flex;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.verifylistitem li img {\n  position: inherit;\n}\n#wrapper #dialog img {\n  position: inherit !important;\n}\n.bullets li {\n  text-align: left;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC92ZXJpZnlvdHAvdmVyaWZ5b3RwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmVyaWZ5b3RwL3ZlcmlmeW90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNDSjtBRFlNO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNWUjtBRGFNO0VBQ0UsY0FBQTtBQ1hSO0FEY007RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDWlI7QURjUTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUNaVjtBRGNVO0VBQ0Usb0JBQUE7RUFDQSxnQ0FBQTtBQ1paO0FEZVU7RUFDRSx1QkFBQTtBQ2JaO0FEWVU7RUFDRSx1QkFBQTtBQ2JaO0FEaUJRO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDZlY7QURvQlE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNsQlY7QURzQk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNwQlI7QUR1Qk07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDckJSO0FEK0JBO0VBQ0ksa0JBQUE7QUM1Qko7QUQ2Qkk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQzNCUjtBRDZCSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQzNCUjtBRCtCQTtFQUNJLGlCQUFBO0FDNUJKO0FEZ0NJO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQzdCUjtBRDhCUTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7QUM1Qlo7QUQrQkk7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtBQzdCUjtBRGdDQTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDN0JKO0FEZ0NJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQzdCUjtBRCtCUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDN0JaO0FEaUNBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtBQzlCSjtBRGdDQTtFQUNJLHFCQUFBO0FDN0JKO0FEK0JBO0VBQ0ksb0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDNUJKO0FEOEJRO0VBQ0ksaUJBQUE7QUM1Qlo7QURnQ0E7RUFDSSw0QkFBQTtBQzdCSjtBRGdDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQzdCSiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeW90cC92ZXJpZnlvdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXIge1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIFxuICAgICNkaWFsb2cge1xuICAgIC8vICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgICAvLyAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIC8vICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgIC8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC8vICAgYm94LXNoYWRvdzogMCAwIDRweCAjY2NjO1xuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjhGODtcbiAgICAvLyAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgXG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgfVxuICAgICAgXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNmb3JtIHtcbiAgICAgICAgbWF4LXdpZHRoOiAyNDBweDtcbiAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG8gMDtcbiAgICAgICAgXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2MgaW5zZXQ7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB3aWR0aDogOTMlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBwdXJwbGU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHB1cnBsZSBpbnNldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJjo6c2VsZWN0aW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46ICAzMHB4IDAgNTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0I4NUZDNjtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBidXR0b24ge1xuICAgICAgICAmLmNsb3NlIHtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgfSAgICAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGRpdiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC03MHB4O1xuICAgICAgICByaWdodDogLTYzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuLy8gICAuYnJsYi0zMHtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAzMCU7XG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxNXB4IDJweCBncmVlbjtcbi8vIH1cbi5yZWdpc3RlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaDN7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB9XG4gICAgLnJlZ2lzdGVybG9nb3tcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICB9XG59XG5cbi5mb3JtRGF0YXtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLmZvcm17XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAuaXRlbS1uYXRpdmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9ue1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICB9XG59XG4uYWN0aXZlVGFie1xuICAgIC0tYmFja2dyb3VuZDogIzkyQjI0MyAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnVzZXJUeXBle1xuICAgIHVse1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICBsaXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi51c2VyVGl0bGV7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuLm5vdW5kZXJsaW5le1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi52ZXJpZnlsaXN0aXRlbXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGxpe1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiN3cmFwcGVyICNkaWFsb2cgaW1nIHtcbiAgICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuLmJ1bGxldHN7XG4gIGxpe1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuXG4gIH1cbn0iLCIjd3JhcHBlciB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogIzMzMztcbn1cbiN3cmFwcGVyICNkaWFsb2cgaDMge1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbiN3cmFwcGVyICNkaWFsb2cgc3BhbiB7XG4gIGZvbnQtc2l6ZTogOTAlO1xufVxuI3dyYXBwZXIgI2RpYWxvZyAjZm9ybSB7XG4gIG1heC13aWR0aDogMjQwcHg7XG4gIG1hcmdpbjogMjVweCBhdXRvIDA7XG59XG4jd3JhcHBlciAjZGlhbG9nICNmb3JtIGlucHV0IHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogODBweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2MgaW5zZXQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiA5MyU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4jd3JhcHBlciAjZGlhbG9nICNmb3JtIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiBwdXJwbGU7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcHVycGxlIGluc2V0O1xufVxuI3dyYXBwZXIgI2RpYWxvZyAjZm9ybSBpbnB1dDo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4jd3JhcHBlciAjZGlhbG9nICNmb3JtIGJ1dHRvbiB7XG4gIG1hcmdpbjogMzBweCAwIDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCODVGQzY7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiN3cmFwcGVyICNkaWFsb2cgYnV0dG9uLmNsb3NlIHtcbiAgYm9yZGVyOiBzb2xpZCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBmb250LXNpemU6IDEyMCU7XG4gIHdpZHRoOiAyMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuI3dyYXBwZXIgI2RpYWxvZyBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4jd3JhcHBlciAjZGlhbG9nIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNzBweDtcbiAgcmlnaHQ6IC02M3B4O1xufVxuXG4ucmVnaXN0ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXIgaDMge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG4ucmVnaXN0ZXIgLnJlZ2lzdGVybG9nbyB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbi5mb3JtRGF0YSB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZm9ybSBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmZvcm0gaW9uLWl0ZW0gLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybSBidXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlVGFiIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udXNlclR5cGUgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cbi51c2VyVHlwZSB1bCBsaSB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnVzZXJUaXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3VuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnZlcmlmeWxpc3RpdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi52ZXJpZnlsaXN0aXRlbSBsaSBpbWcge1xuICBwb3NpdGlvbjogaW5oZXJpdDtcbn1cblxuI3dyYXBwZXIgI2RpYWxvZyBpbWcge1xuICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4uYnVsbGV0cyBsaSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/verifyotp/verifyotp.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/verifyotp/verifyotp.page.ts ***!
    \*********************************************/
  /*! exports provided: VerifyotpPage */
  /***/
  function srcAppVerifyotpVerifyotpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "VerifyotpPage", function () {
      return VerifyotpPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    var VerifyotpPage = /*#__PURE__*/function () {
      function VerifyotpPage(navCtrl, restAPI) {
        _classCallCheck(this, VerifyotpPage);
        this.navCtrl = navCtrl;
        this.restAPI = restAPI;
        this.userType = '';
      }
      _createClass(VerifyotpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('registerUserAs') == 'international') {
            this.userType = 'USD';
          } else {
            this.userType = 'Domestic';
          }
        }
      }, {
        key: "checkOTP",
        value: function checkOTP() {
          var _this = this;
          var data = {
            mobile: localStorage.getItem('mobile'),
            otp: this.otp
          };
          this.restAPI.presentLoader('Please wait...');
          this.restAPI.verifyUser(data).then(function (res) {
            _this.restAPI.loaderCtrl.dismiss();
            localStorage.setItem('status', '1');
            if (localStorage.getItem('registerUserAs') == 'international') {
              if (localStorage.getItem('isExpiryUSD') == 'true' || localStorage.getItem('isExpired') == 'true') {
                _this.navCtrl.navigateForward(['planpage']);
              } else {
                localStorage.setItem('apptype', 'USD');
                _this.navCtrl.navigateForward(['priceusd']);
              }
            } else {
              localStorage.setItem('apptype', 'OTHER');
              _this.navCtrl.navigateRoot(['prices']);
            }
          }, function (err) {
            _this.restAPI.presentToast(err.error.error);
            _this.restAPI.loaderCtrl.dismiss();
          });
        }
      }, {
        key: "sendOTP",
        value: function sendOTP() {
          var _this2 = this;
          this.restAPI.presentLoader('Please wait...');
          this.restAPI.resendOTP(localStorage.getItem('mobile')).then(function (res) {
            _this2.restAPI.presentToast("OTP send successfully");
            _this2.restAPI.loaderCtrl.dismiss();
          }, function (err) {
            console.log(err);
            _this2.restAPI.presentToast(err.error.error);
            _this2.restAPI.loaderCtrl.dismiss();
          });
        }
      }, {
        key: "login",
        value: function login() {
          this.navCtrl.navigateForward(['login']);
        }
      }]);
      return VerifyotpPage;
    }();
    VerifyotpPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
      }];
    };
    VerifyotpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verifyotp',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./verifyotp.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/verifyotp/verifyotp.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./verifyotp.page.scss */"./src/app/verifyotp/verifyotp.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]])], VerifyotpPage);

    /***/
  }
}]);
//# sourceMappingURL=verifyotp-verifyotp-module-es5.js.map