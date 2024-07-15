function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brands-brands-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/brands/brands.page.html": (
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brands/brands.page.html ***!
    \*******************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBrandsBrandsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header class=\"\">\n\t<ion-toolbar mode=\"ios\" style=\"background: #fff; --background: #fff\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Rice Brands</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content id=\"content\" [scrollEvents]=\"true\" class=\"\">\n\n\t<div style=\"height: 88%;\">\n\t\t<div style=\"height: 16%;\">\n\t\t\t<ion-row class=\"center\" style=\"padding: 10px 0px\">\n\t\t\t\t<ion-col style=\"font-size: 22px;font-weight: bold;\">For Distributorship</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row class=\"center\">\n\t\t\t\t<ion-col style=\"font-size: 22px;font-weight: bold;\"><a href=\"tel:+919877092004\" class=\"contactuser\"\n\t\t\t\t\t\tstyle=\"font-size: 18px;background: #92b243;padding: 5px 20px;color: #fff;text-decoration: none;border-radius: 10px;\">Call\n\t\t\t\t\t\tnow</a></ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\t\t<div style=\"height: 84% ;overflow: scroll;margin: 35px 0px;padding-bottom: 50px;\">\n\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"6\" *ngFor=\"let brands of brandList\">\n\t\t\t\t\t\t<div (click)=\"getBrandDetail(brands)\"\n\t\t\t\t\t\t\tstyle=\"border-radius: 20px;overflow: hidden;box-shadow: 1px 0px 14px 5px #ededed;\">\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle=\"width: 200px;height: 200px;background-image: url({{imagePre}}uploads/{{brands.image}});\">\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div style=\"height: 170px;width: 100%;\">\n\t\t\t\t\t\t\t\t<img src=\"{{imagePre}}uploads/brandlogo/{{brands.image}}\"\n\t\t\t\t\t\t\t\t\tonerror=\"this.src='../../assets/img/No_image_available.svg.png'\" alt=\"i am here\"\n\t\t\t\t\t\t\t\t\tstyle=\"padding: 15px;width: 100%;\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\tstyle=\"text-align: left;font-weight: bold;font-size: 12px;padding: 0px;margin: 0px;padding: 10px;text-transform: capitalize;text-align: center;\">\n\t\t\t\t\t\t\t\t{{brands.name}}</p>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t</ion-grid>\n\n\t\t</div>\n\t</div>\n\n\t<app-menu></app-menu>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/brands/brands-routing.module.ts": (
  /*!*************************************************!*\
    !*** ./src/app/brands/brands-routing.module.ts ***!
    \*************************************************/
  /*! exports provided: BrandsPageRoutingModule */
  /***/
  function srcAppBrandsBrandsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BrandsPageRoutingModule", function () {
      return BrandsPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _brands_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./brands.page */"./src/app/brands/brands.page.ts");
    var routes = [{
      path: '',
      component: _brands_page__WEBPACK_IMPORTED_MODULE_3__["BrandsPage"]
    }];
    var BrandsPageRoutingModule = /*#__PURE__*/_createClass(function BrandsPageRoutingModule() {
      _classCallCheck(this, BrandsPageRoutingModule);
    });
    BrandsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BrandsPageRoutingModule);

    /***/
  }),
  /***/"./src/app/brands/brands.module.ts": (
  /*!*****************************************!*\
    !*** ./src/app/brands/brands.module.ts ***!
    \*****************************************/
  /*! exports provided: BrandsPageModule */
  /***/
  function srcAppBrandsBrandsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BrandsPageModule", function () {
      return BrandsPageModule;
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
    var _brands_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./brands-routing.module */"./src/app/brands/brands-routing.module.ts");
    /* harmony import */
    var _brands_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./brands.page */"./src/app/brands/brands.page.ts");
    /* harmony import */
    var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ionic-selectable */"./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var BrandsPageModule = /*#__PURE__*/_createClass(function BrandsPageModule() {
      _classCallCheck(this, BrandsPageModule);
    });
    BrandsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"], _brands_routing_module__WEBPACK_IMPORTED_MODULE_5__["BrandsPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_brands_page__WEBPACK_IMPORTED_MODULE_6__["BrandsPage"]]
    })], BrandsPageModule);

    /***/
  }),
  /***/"./src/app/brands/brands.page.scss": (
  /*!*****************************************!*\
    !*** ./src/app/brands/brands.page.scss ***!
    \*****************************************/
  /*! exports provided: default */
  /***/
  function srcAppBrandsBrandsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 0 0px !important;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2JyYW5kcy9icmFuZHMucGFnZS5zY3NzIiwic3JjL2FwcC9icmFuZHMvYnJhbmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYnJhbmRzL2JyYW5kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufSIsImlvbi10b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggIWltcG9ydGFudDtcbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/brands/brands.page.ts": (
  /*!***************************************!*\
    !*** ./src/app/brands/brands.page.ts ***!
    \***************************************/
  /*! exports provided: BrandsPage */
  /***/
  function srcAppBrandsBrandsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BrandsPage", function () {
      return BrandsPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var BrandsPage = /*#__PURE__*/function () {
      function BrandsPage(apiser, location, navCtrl) {
        _classCallCheck(this, BrandsPage);
        this.apiser = apiser;
        this.location = location;
        this.navCtrl = navCtrl;
        this.party = localStorage.getItem("name");
        this.mobile = localStorage.getItem("mobile");
        this.remarks = "";
        this.validDays = 0;
        this.isError = false;
        this.errorMessage = "";
        this.brandList = "";
      }
      return _createClass(BrandsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.imagePre = this.apiser.imageUrl;
          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this = this;
          this.apiser.getBrandList().then(function (res) {
            console.log("res");
            console.log(res);
            _this.brandList = res.data;
            // this.riceQualityType = res.riceQualityType;
            // this.riceQualityData = res.riceQualityData;
            // this.riceQualityDataArray = res.riceQualityDataArray;
            // this.ports = res.ports;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "getBrandDetail",
        value: function getBrandDetail(details) {
          console.log(" i am here");
          console.log(details);
          this.navCtrl.navigateForward(['brand-details', {
            data: JSON.stringify(details)
          }]);
        }
      }]);
    }();
    BrandsPage.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };
    BrandsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-brands",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./brands.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/brands/brands.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./brands.page.scss */"./src/app/brands/brands.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], BrandsPage);

    /***/
  })
}]);
//# sourceMappingURL=brands-brands-module-es5.js.map