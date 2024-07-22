function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-buy-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/buy/buy.page.html": (
  /*!*************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buy/buy.page.html ***!
    \*************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuyBuyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header class=\"\">\n\t<ion-toolbar mode=\"ios\" style=\"background: #fff; --background: #fff\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\" style=\"color: #000;\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\" style=\"color: #000;\">Buy Query</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content id=\"content\" [scrollEvents]=\"true\" class=\"\">\n\t<div style=\"padding: 10px 10px;margin-bottom: 100px;\">\n\t\t<ion-item>\n\t\t\t<ion-label>Category</ion-label>\n\t\t\t<!-- (ionChange)=\"changecountry($event)\" -->\n\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQualityType($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let qualityType of riceQualityType\" style=\"text-transform: capitalize;\">{{\n\t\t\t\t\tqualityType | uppercase }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid #ededed;;border-radius: 10px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Quality</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQuality($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let qualityType of riceQualityDataSelectedArray\"\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ qualityType.quality }} {{ qualityType.quality_name\n\t\t\t\t\t\t\t}}</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option style=\"text-transform: capitalize;\">Other</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<p style=\"padding: 0;margin: 0;margin-right: 15px;text-align: right;padding: 5px;\">{{quality}}</p>\n\t\t\t</ion-col>\n\n\t\t</ion-row>\n\n\t\t<!-- <ion-item>\n\t\t\t<ion-label position=\"\">Quality</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"quality\" type=\"text\"></ion-input>\n\t\t</ion-item> -->\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid #ededed;;border-radius: 10px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item class=\"packingSelect\" style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Packing</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePacking($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let package of selectedPackageData\"\n\t\t\t\t\t\t\tvalue=\"{{ package.id+'_'+package.bag_size+'_'+package.bag_type }}\">\n\t\t\t\t\t\t\t<p>{{package.bag_size}} </p>\n\t\t\t\t\t\t\t<p>{{package.bag_type}}</p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<p style=\"padding: 0;margin: 0;margin-left: 15px;text-align: left;padding: 5px;\">{{selectedPackageName}}\n\t\t\t\t</p>\n\t\t\t</ion-col>\n\n\t\t</ion-row>\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Quantity (MT)</ion-label>\n\t\t\t<ion-input type=\"number\" [(ngModel)]=\"quantity\" style=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label>Port</ion-label>\n\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePort($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let port of ports\" value=\"{{ port.port+'_'+port.freight_25MT }}\">{{ port.port\n\t\t\t\t\t}}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\n\t\t<!-- <ion-item>\n\t\t\t<ion-label>Port</ion-label>\n\t\t\t<ionic-selectable\n\t\t\t\t[(ngModel)]=\"port\"\n\t\t\t\t[items]=\"ports\"\n\t\t\t\titemValueField=\"id\"\n\t\t\t\titemTextField=\"port\"\n\t\t\t\t[canSearch]=\"true\"\n\t\t\t\t(onChange)=\"changePort($event)\"\n\t\t\t\t(ionChange)=\"changePort($event)\"\n\t\t\t>\n\t\t\t</ionic-selectable>\n\t\t</ion-item> -->\n\n\t\t<!-- <ion-item>\n\t\t\t<ion-label position=\"\">Buyer Name</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"party\" type=\"text\" style=\"text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Contact No.</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"mobile\" type=\"text\" style=\"text-align: right;\"></ion-input>\n\t\t</ion-item> -->\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"stacked\">Additional Information: </ion-label>\n\t\t\t<ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"remarks\"></ion-textarea>\n\t\t</ion-item>\n\n\t\t<!-- <ion-item>\n\t\t\t<ion-label position=\"\">Deal Valid for days</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"validDays\" type=\"text\" style=\" text-align: right;\" placeholder=\"2\"></ion-input>\n\t\t</ion-item> -->\n\n\t\t<div *ngIf=\"isError\" style=\"text-align: center;color: red;font-weight: 600\">\n\t\t\t<span>{{ errorMessage }}</span>\n\t\t</div>\n\t\t<ion-button style=\"--background: #000;color: #fff\" expand=\"full\" shape=\"round\"\n\t\t\t(click)=\"save()\">Submit</ion-button>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/buy/buy-routing.module.ts": (
  /*!*******************************************!*\
    !*** ./src/app/buy/buy-routing.module.ts ***!
    \*******************************************/
  /*! exports provided: BuyPageRoutingModule */
  /***/
  function srcAppBuyBuyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BuyPageRoutingModule", function () {
      return BuyPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _buy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./buy.page */"./src/app/buy/buy.page.ts");
    var routes = [{
      path: '',
      component: _buy_page__WEBPACK_IMPORTED_MODULE_3__["BuyPage"]
    }];
    var BuyPageRoutingModule = /*#__PURE__*/_createClass(function BuyPageRoutingModule() {
      _classCallCheck(this, BuyPageRoutingModule);
    });
    BuyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BuyPageRoutingModule);

    /***/
  }),
  /***/"./src/app/buy/buy.module.ts": (
  /*!***********************************!*\
    !*** ./src/app/buy/buy.module.ts ***!
    \***********************************/
  /*! exports provided: BuyPageModule */
  /***/
  function srcAppBuyBuyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BuyPageModule", function () {
      return BuyPageModule;
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
    var _buy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./buy-routing.module */"./src/app/buy/buy-routing.module.ts");
    /* harmony import */
    var _buy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./buy.page */"./src/app/buy/buy.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    /* harmony import */
    var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ionic-selectable */"./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
    var BuyPageModule = /*#__PURE__*/_createClass(function BuyPageModule() {
      _classCallCheck(this, BuyPageModule);
    });
    BuyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _buy_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyPageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]],
      declarations: [_buy_page__WEBPACK_IMPORTED_MODULE_6__["BuyPage"]]
    })], BuyPageModule);

    /***/
  }),
  /***/"./src/app/buy/buy.page.scss": (
  /*!***********************************!*\
    !*** ./src/app/buy/buy.page.scss ***!
    \***********************************/
  /*! exports provided: default */
  /***/
  function srcAppBuyBuyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\nion-item {\n  border: 1px solid #ededed;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.item-native {\n  background: transparent;\n  background-color: transparent;\n  --background: transparent;\n  --background-color: transparent;\n}\n\n.packingSelect .select-text {\n  display: none;\n}\n\nion-toolbar {\n  --border-width: 0 0 0px !important;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2J1eS9idXkucGFnZS5zY3NzIiwic3JjL2FwcC9idXkvYnV5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREFJO0VBQ0ksZUFBQTtBQ0VSOztBREVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQ0k7RUFDSSxhQUFBO0FDRVI7O0FEQ0E7RUFDSSxrQ0FBQTtBQ0VKOztBRENBO0VBQ0ksa0NBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2J1eS9idXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRmLXRyZWUuZXhhbXBsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICB9XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0OTRmNTg7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbmlvbi1pdGVte1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLml0ZW0tbmF0aXZle1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5wYWNraW5nU2VsZWN0e1xuICAgIC5zZWxlY3QtdGV4dHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5pb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufSIsIi50Zi10cmVlLmV4YW1wbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmJhY2stYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgY29sb3I6ICNGRkY7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWRlZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFja2luZ1NlbGVjdCAuc2VsZWN0LXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/buy/buy.page.ts": (
  /*!*********************************!*\
    !*** ./src/app/buy/buy.page.ts ***!
    \*********************************/
  /*! exports provided: BuyPage */
  /***/
  function srcAppBuyBuyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BuyPage", function () {
      return BuyPage;
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
    var BuyPage = /*#__PURE__*/function () {
      function BuyPage(apiser, location, navCtrl) {
        _classCallCheck(this, BuyPage);
        this.apiser = apiser;
        this.location = location;
        this.navCtrl = navCtrl;
        this.party = localStorage.getItem('name');
        this.mobile = localStorage.getItem('mobile');
        this.remarks = '';
        this.validDays = 0;
        this.isError = false;
        this.errorMessage = '';
      }
      return _createClass(BuyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "save",
        value: function save() {
          var _this = this;
          this.isError = false;
          if (this.quality != undefined && this.quantity != undefined && this.party != undefined && this.mobile != undefined && this.portName != '' && this.portName != undefined) {
            this.apiser.presentLoader('Please wait...');
            var postedData = {
              'selectedQualityType': this.selectedQualityType,
              'quality': this.quality,
              'changePackingType': this.changePackingType,
              'quantity': this.quantity,
              'validDays': this.validDays,
              'portName': this.portName,
              'party': this.party,
              'mobile': this.mobile,
              'remarks': this.remarks,
              'user': localStorage.getItem('id')
            };
            this.apiser.saveRiceQuery(postedData).then(function (res) {
              _this.apiser.loaderCtrl.dismiss();
              _this.apiser.presentToast('your query has been submitted successfully, Our team will contact you shortly.');
              _this.navCtrl.navigateRoot(['priceusd']);
            }, function (err) {
              console.log(err);
            });
          } else {
            this.isError = true;
            this.errorMessage = "Required fields are missing";
            console.log('validate fails');
            console.log("here");
          }
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this2 = this;
          this.apiser.getDataForBuyer().then(function (res) {
            _this2.riceQualityType = res.riceQualityType;
            _this2.riceQualityData = res.riceQualityData;
            _this2.riceQualityDataArray = res.riceQualityMasterArray;
            _this2.ports = res.ports;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "changeQualityType",
        value: function changeQualityType(data) {
          this.selectedQualityType = data.detail.value;
          this.riceQualityDataSelectedArray = this.riceQualityDataArray[data.detail.value.toLowerCase()];
          this.selectedPackageData = this.riceQualityData[data.detail.value.toLowerCase()];
        }
      }, {
        key: "changeQuality",
        value: function changeQuality(data) {
          this.quality = data.detail.value;
          console.log(this.quality);
        }
      }, {
        key: "changePacking",
        value: function changePacking(data) {
          var unprocessdata = data.detail.value.split('_');
          this.changePackingType = unprocessdata[0];
          this.selectedPackageName = unprocessdata[1] + ' ' + unprocessdata[2];
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "changePort",
        value: function changePort(data) {
          console.log(data);
          var myData = data.detail.value.split('_');
          var selectedPortName = myData[0];
          var portValue = parseFloat(data.freight_25MT).toFixed(2);
          this.portName = selectedPortName;
        }
      }]);
    }();
    BuyPage.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };
    BuyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-buy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./buy.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/buy/buy.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./buy.page.scss */"./src/app/buy/buy.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], BuyPage);

    /***/
  })
}]);
//# sourceMappingURL=buy-buy-module-es5.js.map