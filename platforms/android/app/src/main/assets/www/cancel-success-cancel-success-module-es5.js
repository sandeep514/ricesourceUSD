function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cancel-success-cancel-success-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/cancel-success/cancel-success.page.html": (
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cancel-success/cancel-success.page.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCancelSuccessCancelSuccessPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>cancelSuccess</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

    /***/
  }),
  /***/"./src/app/cancel-success/cancel-success-routing.module.ts": (
  /*!*****************************************************************!*\
    !*** ./src/app/cancel-success/cancel-success-routing.module.ts ***!
    \*****************************************************************/
  /*! exports provided: CancelSuccessPageRoutingModule */
  /***/
  function srcAppCancelSuccessCancelSuccessRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CancelSuccessPageRoutingModule", function () {
      return CancelSuccessPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _cancel_success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./cancel-success.page */"./src/app/cancel-success/cancel-success.page.ts");
    var routes = [{
      path: '',
      component: _cancel_success_page__WEBPACK_IMPORTED_MODULE_3__["CancelSuccessPage"]
    }];
    var CancelSuccessPageRoutingModule = /*#__PURE__*/_createClass(function CancelSuccessPageRoutingModule() {
      _classCallCheck(this, CancelSuccessPageRoutingModule);
    });
    CancelSuccessPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CancelSuccessPageRoutingModule);

    /***/
  }),
  /***/"./src/app/cancel-success/cancel-success.module.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/cancel-success/cancel-success.module.ts ***!
    \*********************************************************/
  /*! exports provided: CancelSuccessPageModule */
  /***/
  function srcAppCancelSuccessCancelSuccessModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CancelSuccessPageModule", function () {
      return CancelSuccessPageModule;
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
    var _cancel_success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./cancel-success-routing.module */"./src/app/cancel-success/cancel-success-routing.module.ts");
    /* harmony import */
    var _cancel_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./cancel-success.page */"./src/app/cancel-success/cancel-success.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var CancelSuccessPageModule = /*#__PURE__*/_createClass(function CancelSuccessPageModule() {
      _classCallCheck(this, CancelSuccessPageModule);
    });
    CancelSuccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cancel_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["CancelSuccessPageRoutingModule"]],
      declarations: [_cancel_success_page__WEBPACK_IMPORTED_MODULE_6__["CancelSuccessPage"]]
    })], CancelSuccessPageModule);

    /***/
  }),
  /***/"./src/app/cancel-success/cancel-success.page.scss": (
  /*!*********************************************************!*\
    !*** ./src/app/cancel-success/cancel-success.page.scss ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppCancelSuccessCancelSuccessPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmNlbC1zdWNjZXNzL2NhbmNlbC1zdWNjZXNzLnBhZ2Uuc2NzcyJ9 */";

    /***/
  }),
  /***/"./src/app/cancel-success/cancel-success.page.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/cancel-success/cancel-success.page.ts ***!
    \*******************************************************/
  /*! exports provided: CancelSuccessPage */
  /***/
  function srcAppCancelSuccessCancelSuccessPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CancelSuccessPage", function () {
      return CancelSuccessPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var CancelSuccessPage = /*#__PURE__*/function () {
      function CancelSuccessPage() {
        _classCallCheck(this, CancelSuccessPage);
      }
      return _createClass(CancelSuccessPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    CancelSuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cancel-success',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./cancel-success.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/cancel-success/cancel-success.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./cancel-success.page.scss */"./src/app/cancel-success/cancel-success.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CancelSuccessPage);

    /***/
  })
}]);
//# sourceMappingURL=cancel-success-cancel-success-module-es5.js.map