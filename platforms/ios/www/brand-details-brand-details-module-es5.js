function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brand-details-brand-details-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/brand-details/brand-details.page.html": (
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brand-details/brand-details.page.html ***!
    \*********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBrandDetailsBrandDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header class=\"\">\n\t<ion-toolbar mode=\"ios\" style=\"background: #fff; --background: #fff\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Rice Details</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content id=\"content\" [scrollEvents]=\"true\" class=\"\">\n\t<ion-grid>\n\n\t\t<ion-row>\n\n\t\t\t<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t\t\t\t<ion-slide *ngFor=\"let attachment of data\" style=\"width: 100%;\">\n\t\t\t\t\t<img src=\"{{imagePre}}uploads/brandlogo/brandAttachment/{{attachment.attachment}}\"\n\t\t\t\t\t\tonerror=\"this.src='../../assets/img/No_image_available.svg.png'\" alt=\"i am here\"\n\t\t\t\t\t\tstyle=\"padding: 15px;\">\n\t\t\t\t</ion-slide>\n\t\t\t</ion-slides>\n\t\t\t<!-- <ion-col size=\"12\" *ngFor=\"let attachment of data\">\n        <div (click)=\"getBrandDetail(brands)\" >\n          <div>\n            \n          </div>\n        </div>\n      </ion-col> -->\n\n\n\t\t</ion-row>\n\n\t</ion-grid>\n\t<app-menu></app-menu>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/brand-details/brand-details-routing.module.ts": (
  /*!***************************************************************!*\
    !*** ./src/app/brand-details/brand-details-routing.module.ts ***!
    \***************************************************************/
  /*! exports provided: BrandDetailsPageRoutingModule */
  /***/
  function srcAppBrandDetailsBrandDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BrandDetailsPageRoutingModule", function () {
      return BrandDetailsPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _brand_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./brand-details.page */"./src/app/brand-details/brand-details.page.ts");
    var routes = [{
      path: '',
      component: _brand_details_page__WEBPACK_IMPORTED_MODULE_3__["BrandDetailsPage"]
    }];
    var BrandDetailsPageRoutingModule = /*#__PURE__*/_createClass(function BrandDetailsPageRoutingModule() {
      _classCallCheck(this, BrandDetailsPageRoutingModule);
    });
    BrandDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BrandDetailsPageRoutingModule);

    /***/
  }),
  /***/"./src/app/brand-details/brand-details.module.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/brand-details/brand-details.module.ts ***!
    \*******************************************************/
  /*! exports provided: BrandDetailsPageModule */
  /***/
  function srcAppBrandDetailsBrandDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BrandDetailsPageModule", function () {
      return BrandDetailsPageModule;
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
    var _brand_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./brand-details-routing.module */"./src/app/brand-details/brand-details-routing.module.ts");
    /* harmony import */
    var _brand_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./brand-details.page */"./src/app/brand-details/brand-details.page.ts");
    /* harmony import */
    var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ionic-selectable */"./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var BrandDetailsPageModule = /*#__PURE__*/_createClass(function BrandDetailsPageModule() {
      _classCallCheck(this, BrandDetailsPageModule);
    });
    BrandDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _brand_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["BrandDetailsPageRoutingModule"]],
      declarations: [_brand_details_page__WEBPACK_IMPORTED_MODULE_6__["BrandDetailsPage"]]
    })], BrandDetailsPageModule);

    /***/
  }),
  /***/"./src/app/brand-details/brand-details.page.scss": (
  /*!*******************************************************!*\
    !*** ./src/app/brand-details/brand-details.page.scss ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppBrandDetailsBrandDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n\n.contactuser {\n  text-decoration: none;\n  color: #92b243;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2JyYW5kLWRldGFpbHMvYnJhbmQtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2JyYW5kLWRldGFpbHMvYnJhbmQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9icmFuZC1kZXRhaWxzL2JyYW5kLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFjdHVzZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzkyYjI0Mztcbn0iLCIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFjdHVzZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjOTJiMjQzO1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/brand-details/brand-details.page.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/brand-details/brand-details.page.ts ***!
    \*****************************************************/
  /*! exports provided: BrandDetailsPage */
  /***/
  function srcAppBrandDetailsBrandDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BrandDetailsPage", function () {
      return BrandDetailsPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var BrandDetailsPage = /*#__PURE__*/function () {
      function BrandDetailsPage(apiser, location, navCtrl, ActRoute) {
        _classCallCheck(this, BrandDetailsPage);
        this.apiser = apiser;
        this.location = location;
        this.navCtrl = navCtrl;
        this.ActRoute = ActRoute;
        this.party = localStorage.getItem("name");
        this.mobile = localStorage.getItem("mobile");
        this.remarks = "";
        this.validDays = 0;
        this.isError = false;
        this.errorMessage = "";
        this.brandList = "";
        this.slideOpts = {
          initialSlide: 1,
          speed: 400,
          pagination: true
        };
        this.data = JSON.parse(this.ActRoute.snapshot.params.data).get_attachments;
        console.log(this.data);
      }
      return _createClass(BrandDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.imagePre = this.apiser.imageUrl;
          // this.getData();
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
          this.navCtrl.navigateForward(["brand-details", {
            data: details
          }]);
        }
      }]);
    }();
    BrandDetailsPage.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };
    BrandDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-brand-details",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./brand-details.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/brand-details/brand-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./brand-details.page.scss */"./src/app/brand-details/brand-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], BrandDetailsPage);

    /***/
  })
}]);
//# sourceMappingURL=brand-details-brand-details-module-es5.js.map