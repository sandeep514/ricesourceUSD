function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aboutus-aboutus-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html ***!
    \*********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutusAboutusPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar class=\"green center white\">\n\t\t<ion-buttons slot=\"start\" style=\"font-size: 30px\" (click)=\"goBack()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title>About Us</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"lightgreen\">\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<p><strong>Who Are We?</strong></p>\n\t\t\t<p>We are your rice sourcing and branding partner that connects like-minded buyers and suppliers and helps meet their demands by acting as an intermediary between the two.</p>\n\t\t\t<p>We pride ourselves as the industry leaders in bulk rice sourcing, branding, packaging and PAN India Networking of both Basmati and Non Basmati rice in India.</p>\n\t\t\t<p>We provide you with true and reliable market insights about live rice pricing, rice quotes, and offer a 360 degree outlook on all your rice needs.</p>\n\t\t\t<p><strong>Our Services-</strong></p>\n\t\t\t<p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><strong>Live Rice Pricing</strong></li>\n\t\t\t\t\t<li><strong>Bulk Rice Sourcing (Basmati and Non-Basmati)</strong></li>\n\t\t\t\t\t<li><strong>PAN India freight charges</strong></li>\n\t\t\t\t\t<li><strong>Rice Branding & Packaging</strong></li>\n\t\t\t\t\t<li><strong>Market Insights</strong></li>\n\t\t\t\t\t<li><strong>Professional Guidance</strong></li>\n\t\t\t\t\t<li><strong>Personalization</strong></li>\n\t\t\t\t</ul>\n\t\t\t<p>Our mission is to create a reliable and trustworthy environment for both buyers and sellers by providing them exceptional services in the field of bulk rice sourcing and branding.</p>\n\t\t\t<p><strong>Our Legacy-</strong></p>\n\t\t\t<p>SNTC is your rice sourcing and branding partner that connects like-minded buyers and suppliers and helps meet their rice demands by acting as an intermediary between the two.  Our story originated from the year 1942 when the earliest generation of the family arrived in Amritsar, India with a vision to mark a strong presence in the rice industry. The company transformed into Shree Nath Jee Trading Company (SNTC) in the year 1977. We pride ourselves as industry leaders in bulk rice sourcing, branding, international indenting, customised packaging and PAN India Network of both basmati and non-basmati buyers and suppliers. We provide you with true & reliable market insights about live rice pricing and best rice quotes.</p>\n\t\t</ion-col>\n\t</ion-row>\n</ion-content>";

    /***/
  },

  /***/"./src/app/aboutus/aboutus-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/aboutus/aboutus-routing.module.ts ***!
    \***************************************************/
  /*! exports provided: AboutusPageRoutingModule */
  /***/
  function srcAppAboutusAboutusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AboutusPageRoutingModule", function () {
      return AboutusPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _aboutus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./aboutus.page */"./src/app/aboutus/aboutus.page.ts");
    var routes = [{
      path: '',
      component: _aboutus_page__WEBPACK_IMPORTED_MODULE_3__["AboutusPage"]
    }];
    var AboutusPageRoutingModule = /*#__PURE__*/_createClass(function AboutusPageRoutingModule() {
      _classCallCheck(this, AboutusPageRoutingModule);
    });
    AboutusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutusPageRoutingModule);

    /***/
  },

  /***/"./src/app/aboutus/aboutus.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/aboutus/aboutus.module.ts ***!
    \*******************************************/
  /*! exports provided: AboutusPageModule */
  /***/
  function srcAppAboutusAboutusModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function () {
      return AboutusPageModule;
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
    var _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./aboutus-routing.module */"./src/app/aboutus/aboutus-routing.module.ts");
    /* harmony import */
    var _aboutus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./aboutus.page */"./src/app/aboutus/aboutus.page.ts");
    var AboutusPageModule = /*#__PURE__*/_createClass(function AboutusPageModule() {
      _classCallCheck(this, AboutusPageModule);
    });
    AboutusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutusPageRoutingModule"]],
      declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_6__["AboutusPage"]]
    })], AboutusPageModule);

    /***/
  },

  /***/"./src/app/aboutus/aboutus.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/aboutus/aboutus.page.scss ***!
    \*******************************************/
  /*! exports provided: default */
  /***/
  function srcAppAboutusAboutusPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "p {\n  text-align: justify;\n  padding: 0 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9hYm91dHVzL2Fib3V0dXMucGFnZS5zY3NzIiwic3JjL2FwcC9hYm91dHVzL2Fib3V0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hYm91dHVzL2Fib3V0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHBhZGRpbmc6IDAgMTNweDtcbn0iLCJwIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZzogMCAxM3B4O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/aboutus/aboutus.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/aboutus/aboutus.page.ts ***!
    \*****************************************/
  /*! exports provided: AboutusPage */
  /***/
  function srcAppAboutusAboutusPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AboutusPage", function () {
      return AboutusPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AboutusPage = /*#__PURE__*/function () {
      function AboutusPage(location) {
        _classCallCheck(this, AboutusPage);
        this.location = location;
      }
      _createClass(AboutusPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }]);
      return AboutusPage;
    }();
    AboutusPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
      }];
    };
    AboutusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-aboutus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./aboutus.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./aboutus.page.scss */"./src/app/aboutus/aboutus.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])], AboutusPage);

    /***/
  }
}]);
//# sourceMappingURL=aboutus-aboutus-module-es5.js.map