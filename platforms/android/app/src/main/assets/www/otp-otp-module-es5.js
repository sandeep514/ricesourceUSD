function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-otp-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp.page.html": (
  /*!*************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp.page.html ***!
    \*************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOtpOtpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content class=\"register bg-lightgreen\">\n\t<ion-row>\n\t\t<ion-col class=\"h-260 green brlb-30\">\n\t\t\t<!-- <h3 class=\"userTitle\">\n\t\t\t\tRegister\n\t\t\t</h3> -->\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\">\n\t\t\t<!-- <h3>\n\t\t\t\tOTP\n\t\t\t</h3> -->\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row class=\"formData mt-50 \">\n\t\t<div id=\"wrapper\">\n\t\t\t<div id=\"dialog\">\n\t\t\t\t<div *ngIf=\"hasError\">\n\t\t\t\t\t{{ errorMessage }}\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"!hasError\">\n\t\t\t\t\t<span>Please enter OTP that is sent to your registered\n\t\t\t\t\t\t{{(userType == 'international')? 'email' : 'mobile' }} {{sendOn}}\n\t\t\t\t\t</span>\n\t\t\t\t\t<div id=\"form\">\n\t\t\t\t\t\t<input type=\"number\" [(ngModel)]=\"text1\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\"\n\t\t\t\t\t\t\tpattern=\"[0-9]{1}\" style=\"background: black;background-color: black;color: #fff;\" />\n\t\t\t\t\t\t<!-- <input type=\"number\" [(ngModel)]=\"text2\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" pattern=\"[0-9]{1}\" />\n\t\t\t\t\t\t<input type=\"number\" [(ngModel)]=\"text3\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" pattern=\"[0-9]{1}\" />\n\t\t\t\t\t\t<input type=\"number\" [(ngModel)]=\"text4\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" pattern=\"[0-9]{1}\" /> -->\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"10\">\n\t\t\t\t\t\t\t\t<ion-button expand=\"block\" class=\"green mt-20\" (click)=\"checkOTP()\">Verify</ion-button>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t\t\t\t<img (click)=\"sendOTP()\" src=\"../../assets/svg/refresh-outline.svg\"\n\t\t\t\t\t\t\t\t\tstyle=\"width: 100%;margin-top: 20px;\" alt=\"\">\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<p class=\"center w-100\" style=\"font-size: 17px;\"><a href=\"javascript:void(0)\"\n\t\t\t\t\t\t\t\tclass=\"nounderline\" (click)=\"login()\">Go to login</a></p>\n\t\t\t\t\t\t<ul class=\"verifylistitem\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n\t\t\t</div>\n\t\t</div>\n\t</ion-row>\n\t<ion-row class=\"center\">\n\n\t</ion-row>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/otp/otp-routing.module.ts": (
  /*!*******************************************!*\
    !*** ./src/app/otp/otp-routing.module.ts ***!
    \*******************************************/
  /*! exports provided: OtpPageRoutingModule */
  /***/
  function srcAppOtpOtpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function () {
      return OtpPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./otp.page */"./src/app/otp/otp.page.ts");
    var routes = [{
      path: '',
      component: _otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
    }];
    var OtpPageRoutingModule = /*#__PURE__*/_createClass(function OtpPageRoutingModule() {
      _classCallCheck(this, OtpPageRoutingModule);
    });
    OtpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OtpPageRoutingModule);

    /***/
  }),
  /***/"./src/app/otp/otp.module.ts": (
  /*!***********************************!*\
    !*** ./src/app/otp/otp.module.ts ***!
    \***********************************/
  /*! exports provided: OtpPageModule */
  /***/
  function srcAppOtpOtpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OtpPageModule", function () {
      return OtpPageModule;
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
    var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./otp-routing.module */"./src/app/otp/otp-routing.module.ts");
    /* harmony import */
    var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./otp.page */"./src/app/otp/otp.page.ts");
    var OtpPageModule = /*#__PURE__*/_createClass(function OtpPageModule() {
      _classCallCheck(this, OtpPageModule);
    });
    OtpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"]],
      declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
    })], OtpPageModule);

    /***/
  }),
  /***/"./src/app/otp/otp.page.scss": (
  /*!***********************************!*\
    !*** ./src/app/otp/otp.page.scss ***!
    \***********************************/
  /*! exports provided: default */
  /***/
  function srcAppOtpOtpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "#wrapper {\n  font-family: Lato;\n  font-size: 1.5rem;\n  text-align: center;\n  box-sizing: border-box;\n  color: #333;\n}\n#wrapper #dialog h3 {\n  margin: 0 0 10px;\n  padding: 0;\n  line-height: 1.25;\n}\n#wrapper #dialog span {\n  font-size: 90%;\n}\n#wrapper #dialog #form {\n  max-width: 240px;\n  margin: 25px auto 0;\n}\n#wrapper #dialog #form input {\n  margin: 0 5px;\n  text-align: center;\n  line-height: 80px;\n  font-size: 50px;\n  border: solid 1px #ccc;\n  box-shadow: 0 0 5px #ccc inset;\n  outline: none;\n  width: 93%;\n  transition: all 0.2s ease-in-out;\n  border-radius: 3px;\n}\n#wrapper #dialog #form input:focus {\n  border-color: purple;\n  box-shadow: 0 0 5px purple inset;\n}\n#wrapper #dialog #form input::-moz-selection {\n  background: transparent;\n}\n#wrapper #dialog #form input::selection {\n  background: transparent;\n}\n#wrapper #dialog #form button {\n  margin: 30px 0 50px;\n  width: 100%;\n  padding: 6px;\n  background-color: #B85FC6;\n  border: none;\n  text-transform: uppercase;\n}\n#wrapper #dialog button.close {\n  border: solid 2px;\n  border-radius: 30px;\n  line-height: 19px;\n  font-size: 120%;\n  width: 22px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n#wrapper #dialog div {\n  position: relative;\n  z-index: 1;\n}\n#wrapper #dialog img {\n  position: absolute;\n  bottom: -70px;\n  right: -63px;\n}\n.register {\n  text-align: center;\n}\n.register h3 {\n  color: white;\n  text-align: right;\n  margin-right: 25px;\n}\n.register .registerlogo {\n  width: 40%;\n  margin-top: 35px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\n.verifylistitem {\n  display: inline-flex;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.verifylistitem li img {\n  position: inherit;\n}\n#wrapper #dialog img {\n  position: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9vdHAvb3RwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3RwL290cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNDSjtBRFlNO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNWUjtBRGFNO0VBQ0UsY0FBQTtBQ1hSO0FEY007RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDWlI7QURjUTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUNaVjtBRGNVO0VBQ0Usb0JBQUE7RUFDQSxnQ0FBQTtBQ1paO0FEZVU7RUFDRSx1QkFBQTtBQ2JaO0FEWVU7RUFDRSx1QkFBQTtBQ2JaO0FEaUJRO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDZlY7QURvQlE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNsQlY7QURzQk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNwQlI7QUR1Qk07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDckJSO0FEK0JBO0VBQ0ksa0JBQUE7QUM1Qko7QUQ2Qkk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQzNCUjtBRDZCSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQzNCUjtBRCtCQTtFQUNJLGlCQUFBO0FDNUJKO0FEZ0NJO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQzdCUjtBRDhCUTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7QUM1Qlo7QUQrQkk7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtBQzdCUjtBRGdDQTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDN0JKO0FEZ0NJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQzdCUjtBRCtCUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDN0JaO0FEaUNBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtBQzlCSjtBRGdDQTtFQUNJLHFCQUFBO0FDN0JKO0FEK0JBO0VBQ0ksb0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDNUJKO0FEOEJRO0VBQ0ksaUJBQUE7QUM1Qlo7QURnQ0E7RUFDSSw0QkFBQTtBQzdCSiIsImZpbGUiOiJzcmMvYXBwL290cC9vdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXIge1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIFxuICAgICNkaWFsb2cge1xuICAgIC8vICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgICAvLyAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIC8vICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgIC8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC8vICAgYm94LXNoYWRvdzogMCAwIDRweCAjY2NjO1xuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjhGODtcbiAgICAvLyAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgXG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgfVxuICAgICAgXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNmb3JtIHtcbiAgICAgICAgbWF4LXdpZHRoOiAyNDBweDtcbiAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG8gMDtcbiAgICAgICAgXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2MgaW5zZXQ7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB3aWR0aDogOTMlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBwdXJwbGU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHB1cnBsZSBpbnNldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJjo6c2VsZWN0aW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46ICAzMHB4IDAgNTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0I4NUZDNjtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBidXR0b24ge1xuICAgICAgICAmLmNsb3NlIHtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgfSAgICAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGRpdiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC03MHB4O1xuICAgICAgICByaWdodDogLTYzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuLy8gICAuYnJsYi0zMHtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAzMCU7XG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxNXB4IDJweCBncmVlbjtcbi8vIH1cbi5yZWdpc3RlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaDN7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB9XG4gICAgLnJlZ2lzdGVybG9nb3tcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICB9XG59XG5cbi5mb3JtRGF0YXtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLmZvcm17XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAuaXRlbS1uYXRpdmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9ue1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICB9XG59XG4uYWN0aXZlVGFie1xuICAgIC0tYmFja2dyb3VuZDogIzkyQjI0MyAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnVzZXJUeXBle1xuICAgIHVse1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICBsaXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi51c2VyVGl0bGV7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuLm5vdW5kZXJsaW5le1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi52ZXJpZnlsaXN0aXRlbXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGxpe1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiN3cmFwcGVyICNkaWFsb2cgaW1nIHtcbiAgICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xufSIsIiN3cmFwcGVyIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjMzMzO1xufVxuI3dyYXBwZXIgI2RpYWxvZyBoMyB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuI3dyYXBwZXIgI2RpYWxvZyBzcGFuIHtcbiAgZm9udC1zaXplOiA5MCU7XG59XG4jd3JhcHBlciAjZGlhbG9nICNmb3JtIHtcbiAgbWF4LXdpZHRoOiAyNDBweDtcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMDtcbn1cbiN3cmFwcGVyICNkaWFsb2cgI2Zvcm0gaW5wdXQge1xuICBtYXJnaW46IDAgNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICBmb250LXNpemU6IDUwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggI2NjYyBpbnNldDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDkzJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbiN3cmFwcGVyICNkaWFsb2cgI2Zvcm0gaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHB1cnBsZTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCBwdXJwbGUgaW5zZXQ7XG59XG4jd3JhcHBlciAjZGlhbG9nICNmb3JtIGlucHV0OjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiN3cmFwcGVyICNkaWFsb2cgI2Zvcm0gYnV0dG9uIHtcbiAgbWFyZ2luOiAzMHB4IDAgNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I4NUZDNjtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuI3dyYXBwZXIgI2RpYWxvZyBidXR0b24uY2xvc2Uge1xuICBib3JkZXI6IHNvbGlkIDJweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgd2lkdGg6IDIycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4jd3JhcHBlciAjZGlhbG9nIGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbiN3cmFwcGVyICNkaWFsb2cgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC03MHB4O1xuICByaWdodDogLTYzcHg7XG59XG5cbi5yZWdpc3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3RlciBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5yZWdpc3RlciAucmVnaXN0ZXJsb2dvIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLmZvcm1EYXRhIHtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5mb3JtIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybSBpb24taXRlbSAuaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtIGJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmVUYWIge1xuICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyVHlwZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxuLnVzZXJUeXBlIHVsIGxpIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udXNlclRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLm5vdW5kZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udmVyaWZ5bGlzdGl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnZlcmlmeWxpc3RpdGVtIGxpIGltZyB7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xufVxuXG4jd3JhcHBlciAjZGlhbG9nIGltZyB7XG4gIHBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/otp/otp.page.ts": (
  /*!*********************************!*\
    !*** ./src/app/otp/otp.page.ts ***!
    \*********************************/
  /*! exports provided: OtpPage */
  /***/
  function srcAppOtpOtpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OtpPage", function () {
      return OtpPage;
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
    var OtpPage = /*#__PURE__*/function () {
      function OtpPage(activeRoute, restSer, navCtrl) {
        _classCallCheck(this, OtpPage);
        this.activeRoute = activeRoute;
        this.restSer = restSer;
        this.navCtrl = navCtrl;
        this.userType = '';
        this.sendOn = '';
        this.hasError = false;
        this.errorMessage = '';
        this.number = this.activeRoute.snapshot.paramMap.get('number');
        this.sendOTP();
      }
      return _createClass(OtpPage, [{
        key: "sendOTP",
        value: function sendOTP() {
          var _this = this;
          this.restSer.presentLoader('Please wait...');
          this.restSer.sendOTP(this.number).then(function (res) {
            _this.restSer.loaderCtrl.dismiss();
            _this.hasError = false;
            if (res.user.role == 0) {
              _this.userType = 'international';
              _this.sendOn = res.user.email;
            } else {
              _this.userType = 'domestic';
              _this.sendOn = res.user.mobile;
            }
          }, function (err) {
            _this.restSer.loaderCtrl.dismiss();
            console.log(err);
            _this.hasError = true;
            _this.errorMessage = err.error.error;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "checkOTP",
        value: function checkOTP() {
          var _this2 = this;
          var otp = this.text1;
          this.restSer.verifyOTP(this.number, otp).then(function (res) {
            _this2.navCtrl.navigateForward(['changepassword', {
              number: _this2.number
            }]);
          }, function (err) {});
        }
      }, {
        key: "login",
        value: function login() {
          this.navCtrl.navigateForward(['login']);
        }
      }]);
    }();
    OtpPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };
    OtpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-otp',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./otp.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./otp.page.scss */"./src/app/otp/otp.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], OtpPage);

    /***/
  })
}]);
//# sourceMappingURL=otp-otp-module-es5.js.map