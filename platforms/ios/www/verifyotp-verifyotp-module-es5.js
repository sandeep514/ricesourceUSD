function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verifyotp-verifyotp-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/verifyotp/verifyotp.page.html": (
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
  }),
  /***/"./src/app/verifyotp/verifyotp-routing.module.ts": (
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
  }),
  /***/"./src/app/verifyotp/verifyotp.module.ts": (
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
  }),
  /***/"./src/app/verifyotp/verifyotp.page.scss": (
  /*!***********************************************!*\
    !*** ./src/app/verifyotp/verifyotp.page.scss ***!
    \***********************************************/
  /*! exports provided: default */
  /***/
  function srcAppVerifyotpVerifyotpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "#wrapper {\n  font-family: Lato;\n  font-size: 1.5rem;\n  text-align: center;\n  box-sizing: border-box;\n  color: #333;\n}\n#wrapper #dialog h3 {\n  margin: 0 0 10px;\n  padding: 0;\n  line-height: 1.25;\n}\n#wrapper #dialog span {\n  font-size: 90%;\n}\n#wrapper #dialog #form {\n  max-width: 240px;\n  margin: 25px auto 0;\n}\n#wrapper #dialog #form input {\n  margin: 0 5px;\n  text-align: center;\n  line-height: 80px;\n  font-size: 50px;\n  border: solid 1px #ccc;\n  box-shadow: 0 0 5px #ccc inset;\n  outline: none;\n  width: 93%;\n  transition: all 0.2s ease-in-out;\n  border-radius: 3px;\n}\n#wrapper #dialog #form input:focus {\n  border-color: purple;\n  box-shadow: 0 0 5px purple inset;\n}\n#wrapper #dialog #form input::-moz-selection {\n  background: transparent;\n}\n#wrapper #dialog #form input::selection {\n  background: transparent;\n}\n#wrapper #dialog #form button {\n  margin: 30px 0 50px;\n  width: 100%;\n  padding: 6px;\n  background-color: #B85FC6;\n  border: none;\n  text-transform: uppercase;\n}\n#wrapper #dialog button.close {\n  border: solid 2px;\n  border-radius: 30px;\n  line-height: 19px;\n  font-size: 120%;\n  width: 22px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n#wrapper #dialog div {\n  position: relative;\n  z-index: 1;\n}\n#wrapper #dialog img {\n  position: absolute;\n  bottom: -70px;\n  right: -63px;\n}\n.register {\n  text-align: center;\n}\n.register h3 {\n  color: white;\n  text-align: right;\n  margin-right: 25px;\n}\n.register .registerlogo {\n  width: 40%;\n  margin-top: 35px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\n.verifylistitem {\n  display: inline-flex;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.verifylistitem li img {\n  position: inherit;\n}\n#wrapper #dialog img {\n  position: inherit !important;\n}\n.bullets li {\n  text-align: left;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3ZlcmlmeW90cC92ZXJpZnlvdHAucGFnZS5zY3NzIiwic3JjL2FwcC92ZXJpZnlvdHAvdmVyaWZ5b3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEWU07RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ1ZSO0FEYU07RUFDRSxjQUFBO0FDWFI7QURjTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNaUjtBRGNRO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ1pWO0FEY1U7RUFDRSxvQkFBQTtFQUNBLGdDQUFBO0FDWlo7QURlVTtFQUNFLHVCQUFBO0FDYlo7QURZVTtFQUNFLHVCQUFBO0FDYlo7QURpQlE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNmVjtBRG9CUTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ2xCVjtBRHNCTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ3BCUjtBRHVCTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNyQlI7QUQrQkE7RUFDSSxrQkFBQTtBQzVCSjtBRDZCSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDM0JSO0FENkJJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDM0JSO0FEK0JBO0VBQ0ksaUJBQUE7QUM1Qko7QURnQ0k7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0FDN0JSO0FEOEJRO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQzVCWjtBRCtCSTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0FDN0JSO0FEZ0NBO0VBQ0ksZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUM3Qko7QURnQ0k7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDN0JSO0FEK0JRO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUM3Qlo7QURpQ0E7RUFDSSwyQkFBQTtFQUNBLDZCQUFBO0FDOUJKO0FEZ0NBO0VBQ0kscUJBQUE7QUM3Qko7QUQrQkE7RUFDSSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUM1Qko7QUQ4QlE7RUFDSSxpQkFBQTtBQzVCWjtBRGdDQTtFQUNJLDRCQUFBO0FDN0JKO0FEZ0NFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDN0JKIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZ5b3RwL3ZlcmlmeW90cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlciB7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgXG4gICAgI2RpYWxvZyB7XG4gICAgLy8gICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgIC8vICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgLy8gICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLy8gICBib3gtc2hhZG93OiAwIDAgNHB4ICNjY2M7XG4gICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGOEY4O1xuICAgIC8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgICBcbiAgICAgIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgI2Zvcm0ge1xuICAgICAgICBtYXgtd2lkdGg6IDI0MHB4O1xuICAgICAgICBtYXJnaW46IDI1cHggYXV0byAwO1xuICAgICAgICBcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2NjYyBpbnNldDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIHdpZHRoOiA5MyU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcHVycGxlIGluc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmOjpzZWxlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbjogIDMwcHggMCA1MHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjg1RkM2O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgICYuY2xvc2Uge1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMjAlO1xuICAgICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICB9ICAgICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZGl2IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTcwcHg7XG4gICAgICAgIHJpZ2h0OiAtNjNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4vLyAgIC5icmxiLTMwe1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDMwJTtcbi8vICAgICBib3gtc2hhZG93OiAwcHggMXB4IDE1cHggMnB4IGdyZWVuO1xuLy8gfVxuLnJlZ2lzdGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoM3tcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIH1cbiAgICAucmVnaXN0ZXJsb2dve1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIH1cbn1cblxuLmZvcm1EYXRhe1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZm9ybXtcbiAgICBpb24taXRlbXtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC5pdGVtLW5hdGl2ZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidXR0b257XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzkyQjI0MyAgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5hY3RpdmVUYWJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udXNlclR5cGV7XG4gICAgdWx7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnVzZXJUaXRsZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4ubm91bmRlcmxpbmV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnZlcmlmeWxpc3RpdGVte1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbGl7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgfVxufVxuI3dyYXBwZXIgI2RpYWxvZyBpbWcge1xuICAgIHBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG4uYnVsbGV0c3tcbiAgbGl7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgfVxufSIsIiN3cmFwcGVyIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjMzMzO1xufVxuI3dyYXBwZXIgI2RpYWxvZyBoMyB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuI3dyYXBwZXIgI2RpYWxvZyBzcGFuIHtcbiAgZm9udC1zaXplOiA5MCU7XG59XG4jd3JhcHBlciAjZGlhbG9nICNmb3JtIHtcbiAgbWF4LXdpZHRoOiAyNDBweDtcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMDtcbn1cbiN3cmFwcGVyICNkaWFsb2cgI2Zvcm0gaW5wdXQge1xuICBtYXJnaW46IDAgNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICBmb250LXNpemU6IDUwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggI2NjYyBpbnNldDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDkzJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbiN3cmFwcGVyICNkaWFsb2cgI2Zvcm0gaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHB1cnBsZTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCBwdXJwbGUgaW5zZXQ7XG59XG4jd3JhcHBlciAjZGlhbG9nICNmb3JtIGlucHV0OjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiN3cmFwcGVyICNkaWFsb2cgI2Zvcm0gYnV0dG9uIHtcbiAgbWFyZ2luOiAzMHB4IDAgNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I4NUZDNjtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuI3dyYXBwZXIgI2RpYWxvZyBidXR0b24uY2xvc2Uge1xuICBib3JkZXI6IHNvbGlkIDJweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgd2lkdGg6IDIycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4jd3JhcHBlciAjZGlhbG9nIGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbiN3cmFwcGVyICNkaWFsb2cgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC03MHB4O1xuICByaWdodDogLTYzcHg7XG59XG5cbi5yZWdpc3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3RlciBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5yZWdpc3RlciAucmVnaXN0ZXJsb2dvIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLmZvcm1EYXRhIHtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5mb3JtIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybSBpb24taXRlbSAuaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtIGJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmVUYWIge1xuICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyVHlwZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxuLnVzZXJUeXBlIHVsIGxpIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udXNlclRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLm5vdW5kZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udmVyaWZ5bGlzdGl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnZlcmlmeWxpc3RpdGVtIGxpIGltZyB7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xufVxuXG4jd3JhcHBlciAjZGlhbG9nIGltZyB7XG4gIHBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbi5idWxsZXRzIGxpIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/verifyotp/verifyotp.page.ts": (
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
      return _createClass(VerifyotpPage, [{
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
  })
}]);
//# sourceMappingURL=verifyotp-verifyotp-module-es5.js.map