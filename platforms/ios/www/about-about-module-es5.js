function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html ***!
    \*****************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content>\n\t<ion-row>\n\t\t<ion-col align=\"center\" class=\"logo-col\">\n\t\t\t<img src=\"../../assets/SNTC LOGO (1).png\" />\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col align=\"center\" class=\"sntc-details\">\n\t\t\t<h1>SNTC</h1>\n\t\t\t<small>Your rice sourcing partners!</small>\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium eleifend mollis. Duis suscipit non elit id aliquam. Vivamus mattis vitae erat sit amet finibus. Suspendisse tristique facilisis viverra. Nunc convallis blandit magna, a consectetur erat pellentesque eget. Proin cursus tortor quis tempor pulvinar. Proin bibendum felis mauris, at luctus tellus sagittis a. Nam id dapibus magna, a semper nulla. Quisque eu vestibulum lectus, sit amet porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec justo a nisi consequat vehicula. Curabitur facilisis sed dolor varius imperdiet. Sed eget consequat diam, quis egestas nulla.</p>\n\t\t</ion-col>\n\t</ion-row>\n\t<app-menu></app-menu>\n</ion-content>\n\n";

    /***/
  },

  /***/"./src/app/about/about-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/about/about-routing.module.ts ***!
    \***********************************************/
  /*! exports provided: AboutPageRoutingModule */
  /***/
  function srcAppAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
      return AboutPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./about.page */"./src/app/about/about.page.ts");
    var routes = [{
      path: '',
      component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }];
    var AboutPageRoutingModule = /*#__PURE__*/_createClass(function AboutPageRoutingModule() {
      _classCallCheck(this, AboutPageRoutingModule);
    });
    AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutPageRoutingModule);

    /***/
  },

  /***/"./src/app/about/about.module.ts":
  /*!***************************************!*\
    !*** ./src/app/about/about.module.ts ***!
    \***************************************/
  /*! exports provided: AboutPageModule */
  /***/
  function srcAppAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
      return AboutPageModule;
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
    var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./about-routing.module */"./src/app/about/about-routing.module.ts");
    /* harmony import */
    var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./about.page */"./src/app/about/about.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var AboutPageModule = /*#__PURE__*/_createClass(function AboutPageModule() {
      _classCallCheck(this, AboutPageModule);
    });
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })], AboutPageModule);

    /***/
  },

  /***/"./src/app/about/about.page.scss":
  /*!***************************************!*\
    !*** ./src/app/about/about.page.scss ***!
    \***************************************/
  /*! exports provided: default */
  /***/
  function srcAppAboutAboutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".logo-col img {\n  width: 223px;\n  margin-top: 91px;\n}\n\nion-content {\n  --background: url('login-bg.jpg') no-repeat center/cover fixed;\n}\n\n.sntc-details h1 {\n  font-size: 40px;\n}\n\n.sntc-details small {\n  font-size: 14px;\n}\n\n.sntc-details p {\n  text-align: justify;\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0FSOztBRElBO0VBQ0ksOERBQUE7QUNESjs7QURLSTtFQUNJLGVBQUE7QUNGUjs7QURLSTtFQUNJLGVBQUE7QUNIUjs7QURLSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tY29se1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDIyM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiA5MXB4O1xuICAgIH1cbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbi1iZy5qcGcnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xufVxuXG4uc250Yy1kZXRhaWxze1xuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuXG4gICAgc21hbGx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG59IiwiLmxvZ28tY29sIGltZyB7XG4gIHdpZHRoOiAyMjNweDtcbiAgbWFyZ2luLXRvcDogOTFweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9sb2dpbi1iZy5qcGdcIikgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcbn1cblxuLnNudGMtZGV0YWlscyBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5zbnRjLWRldGFpbHMgc21hbGwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc250Yy1kZXRhaWxzIHAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nOiAxNnB4O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/about/about.page.ts":
  /*!*************************************!*\
    !*** ./src/app/about/about.page.ts ***!
    \*************************************/
  /*! exports provided: AboutPage */
  /***/
  function srcAppAboutAboutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
      return AboutPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AboutPage = /*#__PURE__*/function () {
      function AboutPage() {
        _classCallCheck(this, AboutPage);
      }
      _createClass(AboutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return AboutPage;
    }();
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./about.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./about.page.scss */"./src/app/about/about.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AboutPage);

    /***/
  }
}]);
//# sourceMappingURL=about-about-module-es5.js.map