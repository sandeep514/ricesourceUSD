function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pre-register-pre-register-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pre-register/pre-register.page.html": (
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-register/pre-register.page.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreRegisterPreRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content class=\"register lightgreen\">\n\n\t<ion-row>\n\t\t<ion-col class=\"h-260 green brlb-30\">\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\">\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<h3>\n\t\t\t\tRegister\n\t\t\t</h3>\n\t\t</ion-col>\n\t</ion-row>\n\t\n\t<ion-row class=\"formData lightgreen\">\n\t\t<ion-col class=\"form\">\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-item style=\"width: 100%\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-label position=\"floating\">Region</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" (ionChange)=\"registerUserAs($event)\">\n\t\t\t\t\t\t<ion-select-option value=\"domestic\">India</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"international\">Rest of the world</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t  </ion-item>\n\t\t\t\t<ion-icon slot=\"start\" name=\"earth-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon>\n\t\t\t</ion-item>\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<p>OR</p>\n\t\t\t</div>\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<ion-button class=\"green\" (click)=\"signin()\" expand=\"full\"> Sign in </ion-button>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"center\">\n\t\t\n\t</ion-row>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/pre-register/pre-register-routing.module.ts": (
  /*!*************************************************************!*\
    !*** ./src/app/pre-register/pre-register-routing.module.ts ***!
    \*************************************************************/
  /*! exports provided: PreRegisterPageRoutingModule */
  /***/
  function srcAppPreRegisterPreRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PreRegisterPageRoutingModule", function () {
      return PreRegisterPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _pre_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./pre-register.page */"./src/app/pre-register/pre-register.page.ts");
    var routes = [{
      path: '',
      component: _pre_register_page__WEBPACK_IMPORTED_MODULE_3__["PreRegisterPage"]
    }];
    var PreRegisterPageRoutingModule = /*#__PURE__*/_createClass(function PreRegisterPageRoutingModule() {
      _classCallCheck(this, PreRegisterPageRoutingModule);
    });
    PreRegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PreRegisterPageRoutingModule);

    /***/
  }),
  /***/"./src/app/pre-register/pre-register.module.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/pre-register/pre-register.module.ts ***!
    \*****************************************************/
  /*! exports provided: PreRegisterPageModule */
  /***/
  function srcAppPreRegisterPreRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PreRegisterPageModule", function () {
      return PreRegisterPageModule;
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
    var _pre_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./pre-register-routing.module */"./src/app/pre-register/pre-register-routing.module.ts");
    /* harmony import */
    var _pre_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./pre-register.page */"./src/app/pre-register/pre-register.page.ts");
    var PreRegisterPageModule = /*#__PURE__*/_createClass(function PreRegisterPageModule() {
      _classCallCheck(this, PreRegisterPageModule);
    });
    PreRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pre_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreRegisterPageRoutingModule"]],
      declarations: [_pre_register_page__WEBPACK_IMPORTED_MODULE_6__["PreRegisterPage"]]
    })], PreRegisterPageModule);

    /***/
  }),
  /***/"./src/app/pre-register/pre-register.page.scss": (
  /*!*****************************************************!*\
    !*** ./src/app/pre-register/pre-register.page.scss ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPreRegisterPreRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".register {\n  text-align: center;\n}\n.register h3 {\n  color: #000000;\n}\n.register .registerlogo {\n  width: 34%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\nion-input,\nion-select {\n  --placeholder-color: #92B243 !important;\n  --placeholder-opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3ByZS1yZWdpc3Rlci9wcmUtcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wcmUtcmVnaXN0ZXIvcHJlLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRUE7RUFDSSxrQkFBQTtBQ2hFSjtBRGlFSTtFQUNJLGNBQUE7QUMvRFI7QURtRUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2pFUjtBRHFFQTtFQUNJLGlCQUFBO0FDbEVKO0FEc0VJO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQ25FUjtBRG9FUTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7QUNsRVo7QURxRUk7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtBQ25FUjtBRHNFQTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDbkVKO0FEc0VJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ25FUjtBRHFFUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbkVaO0FEdUVBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtBQ3BFSjtBRHNFQTtFQUNJLHFCQUFBO0FDbkVKO0FEcUVBOztFQUVJLHVDQUFBO0VBQ0EsbUNBQUE7QUNsRUoiLCJmaWxlIjoic3JjL2FwcC9wcmUtcmVnaXN0ZXIvcHJlLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50e1xuLy8gICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvbG9naW4tYmcuanBnJykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcbi8vIH1cblxuLy8gLmhlYWRlci1sb2dve1xuLy8gICAgIG1hcmdpbi10b3A6IDUwcHg7XG4vLyAgICAgaW1ne1xuLy8gICAgICAgICB3aWR0aDogMjUwcHg7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAubG9naW4tYm94e1xuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgICAgaW9uLWxpc3R7XG4vLyAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBcbi8vICAgICAgICAgaW9uLWl0ZW17XG4vLyAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAuc2lnbi1pbi1pY29ue1xuLy8gICAgIHdpZHRoOiA5MHB4O1xuLy8gfVxuXG4vLyAuYnV0dG9uLXJpcHBsZXtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuLy8gfVxuXG4vLyAuZm9yZ290LXBhc3N7XG4vLyAgICAgZm9udC1zaXplOiAxNXB4O1xuLy8gfVxuXG4vLyAuZm9yZ2V0LXBhc3Mtcm93e1xuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyB9XG5cbi8vIC5sb2dpbi1mb290ZXJ7XG4vLyAgICAgaGVpZ2h0OiAyMHB4O1xuLy8gICAgIGJhY2tncm91bmQ6ICNlZmVjZWM7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBwe1xuLy8gICAgICAgICBtYXJnaW46IDBweDtcbi8vICAgICAgICAgcGFkZGluZzogMHB4O1xuLy8gICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuLy8gICAgICAgICBjb2xvcjogIzAwMFxuLy8gICAgIH1cbi8vIH1cblxuLy8gLmxvZ2luLWJ1dHRvbntcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbi8vICAgICAtLWJvcmRlci1yYWRpdXM6IDEwMHB4O1xuLy8gICAgIHdpZHRoOiAyMDBweDtcbi8vICAgICAtLWJhY2tncm91bmQ6IGdyZWVuO1xuLy8gfVxuXG4uYnJsYi0zMHtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAzMCU7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDFweCAxNXB4IDJweCBncmVlbjtcbn1cbi5yZWdpc3RlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaDN7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAvLyB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIH1cbiAgICAucmVnaXN0ZXJsb2dve1xuICAgICAgICB3aWR0aDogMzQlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbn1cblxuLmZvcm1EYXRhe1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZm9ybXtcbiAgICBpb24taXRlbXtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC5pdGVtLW5hdGl2ZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidXR0b257XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzkyQjI0MyAgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5hY3RpdmVUYWJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udXNlclR5cGV7XG4gICAgdWx7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnVzZXJUaXRsZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4ubm91bmRlcmxpbmV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuaW9uLWlucHV0LFxuaW9uLXNlbGVjdCB7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufSIsIi5yZWdpc3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3RlciBoMyB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnJlZ2lzdGVyIC5yZWdpc3RlcmxvZ28ge1xuICB3aWR0aDogMzQlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybURhdGEge1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLmZvcm0gaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtIGlvbi1pdGVtIC5pdGVtLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmZvcm0gYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZVRhYiB7XG4gIC0tYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXJUeXBlIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDA7XG59XG4udXNlclR5cGUgdWwgbGkge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MztcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi51c2VyVGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubm91bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1pbnB1dCxcbmlvbi1zZWxlY3Qge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/pre-register/pre-register.page.ts": (
  /*!***************************************************!*\
    !*** ./src/app/pre-register/pre-register.page.ts ***!
    \***************************************************/
  /*! exports provided: PreRegisterPage */
  /***/
  function srcAppPreRegisterPreRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PreRegisterPage", function () {
      return PreRegisterPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var PreRegisterPage = /*#__PURE__*/function () {
      function PreRegisterPage(navCtrl) {
        _classCallCheck(this, PreRegisterPage);
        this.navCtrl = navCtrl;
      }
      return _createClass(PreRegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registerUserAs",
        value: function registerUserAs(registerType) {
          console.log(registerType.detail.value);
          localStorage.setItem('registerUserAs', registerType.detail.value);
          this.navCtrl.navigateRoot(['register']);
        }
      }, {
        key: "signin",
        value: function signin() {
          console.log("nkjnk");
          this.navCtrl.navigateRoot(['login']);
        }
      }]);
    }();
    PreRegisterPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };
    PreRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pre-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./pre-register.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pre-register/pre-register.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./pre-register.page.scss */"./src/app/pre-register/pre-register.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], PreRegisterPage);

    /***/
  })
}]);
//# sourceMappingURL=pre-register-pre-register-module-es5.js.map