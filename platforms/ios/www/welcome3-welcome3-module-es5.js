function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome3-welcome3-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/welcome3/welcome3.page.html": (
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome3/welcome3.page.html ***!
    \***********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWelcome3Welcome3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"body\">\n    <div style=\"height: 100%;\">\n      <div style=\"height: 55%;padding-top: 20px;\">\n        <div>\n          <img src=\"../../assets/welcome1icon.png\" />\n        </div>\n\n        <div style=\"padding-left: 20px;\">\n          <div>\n            <p style=\"font-family: 'Poppins-Bold';font-size: 22px;padding:0px;margin: 0px\"><span\n                style=\"font-family: 'Poppins-Regular';\">At</span> SNTC</p>\n            <p style=\"font-family: 'Poppins-Regular';font-size: 22px;padding:0px;margin: 0px\">We Take Care Of All Your Rice Needs</p>\n          </div>\n          <div>\n            <div style=\"margin-top: 20px;\">\n              <div class=\"roundNextButton\">\n                <ion-icon name=\"arrow-forward-outline\"\n                  style=\"height: 73px;font-size: 25px;color: #fff;    text-align: center;\"></ion-icon>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div\n        style=\"height: 45%; background-image: url('../../assets/welcome3image.png');background-repeat: no-repeat;background-size: cover;background-position: top;\">\n\n      </div>\n    </div>\n  </div>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/welcome3/welcome3-routing.module.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/welcome3/welcome3-routing.module.ts ***!
    \*****************************************************/
  /*! exports provided: Welcome3PageRoutingModule */
  /***/
  function srcAppWelcome3Welcome3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Welcome3PageRoutingModule", function () {
      return Welcome3PageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _welcome3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./welcome3.page */"./src/app/welcome3/welcome3.page.ts");
    var routes = [{
      path: '',
      component: _welcome3_page__WEBPACK_IMPORTED_MODULE_3__["Welcome3Page"]
    }];
    var Welcome3PageRoutingModule = /*#__PURE__*/_createClass(function Welcome3PageRoutingModule() {
      _classCallCheck(this, Welcome3PageRoutingModule);
    });
    Welcome3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Welcome3PageRoutingModule);

    /***/
  }),
  /***/"./src/app/welcome3/welcome3.module.ts": (
  /*!*********************************************!*\
    !*** ./src/app/welcome3/welcome3.module.ts ***!
    \*********************************************/
  /*! exports provided: Welcome3PageModule */
  /***/
  function srcAppWelcome3Welcome3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Welcome3PageModule", function () {
      return Welcome3PageModule;
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
    var _welcome3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./welcome3-routing.module */"./src/app/welcome3/welcome3-routing.module.ts");
    /* harmony import */
    var _welcome3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./welcome3.page */"./src/app/welcome3/welcome3.page.ts");
    var Welcome3PageModule = /*#__PURE__*/_createClass(function Welcome3PageModule() {
      _classCallCheck(this, Welcome3PageModule);
    });
    Welcome3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _welcome3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Welcome3PageRoutingModule"]],
      declarations: [_welcome3_page__WEBPACK_IMPORTED_MODULE_6__["Welcome3Page"]]
    })], Welcome3PageModule);

    /***/
  }),
  /***/"./src/app/welcome3/welcome3.page.scss": (
  /*!*********************************************!*\
    !*** ./src/app/welcome3/welcome3.page.scss ***!
    \*********************************************/
  /*! exports provided: default */
  /***/
  function srcAppWelcome3Welcome3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".body {\n  background-color: #FFFBD6;\n  background: #FFFBD6;\n  --background-color: #FFFBD6;\n  --background: #FFFBD6;\n  width: 100%;\n  height: 100%;\n}\n\n.roundNextButton {\n  height: 73px;\n  width: 73px;\n  background-color: #91B243;\n  border-radius: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3dlbGNvbWUzL3dlbGNvbWUzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2VsY29tZTMvd2VsY29tZTMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUzL3dlbGNvbWUzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkQ2O1xuICAgIGJhY2tncm91bmQ6ICNGRkZCRDY7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkQ2O1xuICAgIC0tYmFja2dyb3VuZDogI0ZGRkJENjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCVcbn1cblxuLnJvdW5kTmV4dEJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA3M3B4O1xuICAgIHdpZHRoOiA3M3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MUIyNDM7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkQ2O1xuICBiYWNrZ3JvdW5kOiAjRkZGQkQ2O1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNGRkZCRDY7XG4gIC0tYmFja2dyb3VuZDogI0ZGRkJENjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJvdW5kTmV4dEJ1dHRvbiB7XG4gIGhlaWdodDogNzNweDtcbiAgd2lkdGg6IDczcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MUIyNDM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/welcome3/welcome3.page.ts": (
  /*!*******************************************!*\
    !*** ./src/app/welcome3/welcome3.page.ts ***!
    \*******************************************/
  /*! exports provided: Welcome3Page */
  /***/
  function srcAppWelcome3Welcome3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Welcome3Page", function () {
      return Welcome3Page;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var Welcome3Page = /*#__PURE__*/function () {
      function Welcome3Page() {
        _classCallCheck(this, Welcome3Page);
      }
      return _createClass(Welcome3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    Welcome3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./welcome3.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/welcome3/welcome3.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./welcome3.page.scss */"./src/app/welcome3/welcome3.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Welcome3Page);

    /***/
  })
}]);
//# sourceMappingURL=welcome3-welcome3-module-es5.js.map