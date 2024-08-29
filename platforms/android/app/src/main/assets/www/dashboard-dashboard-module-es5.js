function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html": (
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
    \*************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content class=\"ion-no-padding dashboard-bg\">\n\t<ion-row class=\"header-bg ion-no-padding\">\n\t\t<ion-col class=\"ion-no-padding\">\n\t\t\t<img src=\"../../assets/SNTC LOGO (1).png\" class=\"sntc-logo\" />\n\t\t\t<img src=\"../../assets/dashboard-1.png\" class=\"bg-header\" />\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"dashboard-header\">\n\t\t<ion-col align=\"left\">\n\t\t\t<ion-menu-button class=\"menu-button\"></ion-menu-button>\n\t\t</ion-col>\n\t\t<ion-col align=\"center\" class=\"dashboard-title\">\n\t\t\t\n\t\t</ion-col>\n\t\t<ion-col align=\"right\" class=\"pop-menu\">\n\t\t\t<ion-icon name=\"ellipsis-vertical\" (click)=\"popMenu($event)\"></ion-icon>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"header-icons\">\n\t\t<ion-col class=\"ion-activatable ripple-parent\" (click)=\"sampleEntry()\">\n\t\t\t<ion-icon name=\"albums-outline\"></ion-icon> <br/>\n\t\t\t<ion-label>Sample Entry</ion-label>\n\t\t\t<ion-ripple-effect></ion-ripple-effect>\n\t\t</ion-col>\n\t\t<ion-col class=\"ion-activatable ripple-parent\">\n\t\t\t<ion-icon name=\"send-outline\"></ion-icon> <br/>\n\t\t\t<ion-label>Send Courier</ion-label>\n\t\t\t<ion-ripple-effect></ion-ripple-effect>\n\t\t</ion-col>\n\t\t<ion-col class=\"ion-activatable ripple-parent\">\n\t\t\t<ion-icon name=\"clipboard-outline\"></ion-icon> <br/>\n\t\t\t<ion-label>Mill Status</ion-label>\n\t\t\t<ion-ripple-effect></ion-ripple-effect>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<ion-card class=\"progress-card\">\n\t\t\t\t<ion-item>\n\t\t\t\t  \t<h4>Total Progress</h4>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-card-content>\n\t\t\t\t\t<ion-row class=\"progress-count\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<h1>520</h1>\n\t\t\t\t\t\t\t<ion-label>Total Samples</ion-label>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<h1>520</h1>\n\t\t\t\t\t\t\t<ion-label>Pending Courier</ion-label>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-col>\n\t</ion-row>\n</ion-content>\n";

    /***/
  }),
  /***/"./src/app/dashboard/dashboard-routing.module.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
    \*******************************************************/
  /*! exports provided: DashboardPageRoutingModule */
  /***/
  function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./dashboard.page */"./src/app/dashboard/dashboard.page.ts");
    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }];
    var DashboardPageRoutingModule = /*#__PURE__*/_createClass(function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    });
    DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);

    /***/
  }),
  /***/"./src/app/dashboard/dashboard.module.ts": (
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/
  /*! exports provided: DashboardPageModule */
  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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
    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./dashboard-routing.module */"./src/app/dashboard/dashboard-routing.module.ts");
    /* harmony import */
    var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./dashboard.page */"./src/app/dashboard/dashboard.page.ts");
    var DashboardPageModule = /*#__PURE__*/_createClass(function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    });
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })], DashboardPageModule);

    /***/
  }),
  /***/"./src/app/dashboard/dashboard.page.scss": (
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.scss ***!
    \***********************************************/
  /*! exports provided: default */
  /***/
  function srcAppDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".dashboard-bg {\n  background-color: #FFF;\n}\n\n.header-bg {\n  position: absolute;\n}\n\n.header-bg .bg-header {\n  width: 100%;\n  height: 243px;\n}\n\n.dashboard-header {\n  color: #FFF;\n}\n\n.menu-button {\n  position: relative;\n  left: -39px;\n  top: 8px;\n  font-size: 28px;\n}\n\n.dashboard-title {\n  padding-top: 19px;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.pop-menu {\n  padding-top: 18px;\n  padding-right: 13px;\n  font-size: 25px;\n}\n\n.header-icons {\n  margin-top: 102px;\n  text-align: center;\n  color: #FFF;\n  height: 85px;\n}\n\n.header-icons ion-icon {\n  font-size: 38px;\n  color: #FFF;\n}\n\n.header-icons ion-label {\n  font-size: 15px;\n}\n\n.header-icons ion-col {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  padding-top: 10px;\n}\n\n.progress-count ion-col {\n  text-align: center;\n}\n\n.progress-count ion-col h1 {\n  font-weight: 600;\n}\n\n.progress-count ion-col:nth-child(1) {\n  border-right: 1px solid #CCC;\n}\n\n.progress-count ion-col:nth-child(1) h1 {\n  color: green;\n}\n\n.progress-count ion-col:nth-child(2) h1 {\n  color: red;\n}\n\n.progress-card {\n  box-shadow: 0px 5px 9px 4px #CCC;\n}\n\n.sntc-logo {\n  position: absolute;\n  top: 4px;\n  z-index: 9999;\n  width: 169px;\n  left: 34%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURBSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDRVI7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFSjs7QURESTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDR1I7O0FEREk7RUFDSSxlQUFBO0FDR1I7O0FEREk7RUFDSSxvQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsaUJBQUE7QUNHUjs7QURFSTtFQUNJLGtCQUFBO0FDQ1I7O0FEQVE7RUFDSSxnQkFBQTtBQ0VaOztBREVJO0VBSUksNEJBQUE7QUNIUjs7QURBUTtFQUNJLFlBQUE7QUNFWjs7QURHUTtFQUNJLFVBQUE7QUNEWjs7QURNQTtFQUNJLGdDQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1iZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgXG59XG4uaGVhZGVyLWJne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAuYmctaGVhZGVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyNDNweDtcbiAgICB9XG59XG4uZGFzaGJvYXJkLWhlYWRlcntcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLm1lbnUtYnV0dG9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMzlweDtcbiAgICB0b3A6IDhweDtcbiAgICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5kYXNoYm9hcmQtdGl0bGV7XG4gICAgcGFkZGluZy10b3A6IDE5cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wb3AtbWVudXtcbiAgICBwYWRkaW5nLXRvcDogMThweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmhlYWRlci1pY29uc3tcbiAgICBtYXJnaW4tdG9wOiAxMDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgaGVpZ2h0OiA4NXB4O1xuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgIH1cbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgaW9uLWNvbHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxufVxuXG4ucHJvZ3Jlc3MtY291bnR7XG4gICAgaW9uLWNvbHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoMXtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tY29sOm50aC1jaGlsZCgxKXtcbiAgICAgICAgaDF7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0NDQztcbiAgICB9XG4gICAgaW9uLWNvbDpudGgtY2hpbGQoMil7XG4gICAgICAgIGgxe1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnByb2dyZXNzLWNhcmR7XG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA5cHggNHB4ICNDQ0M7XG59XG5cbi5zbnRjLWxvZ297XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNHB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgd2lkdGg6IDE2OXB4O1xuICAgIGxlZnQ6IDM0JTtcbn1cbiIsIi5kYXNoYm9hcmQtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLWJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmhlYWRlci1iZyAuYmctaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjQzcHg7XG59XG5cbi5kYXNoYm9hcmQtaGVhZGVyIHtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5tZW51LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTM5cHg7XG4gIHRvcDogOHB4O1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5kYXNoYm9hcmQtdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucG9wLW1lbnUge1xuICBwYWRkaW5nLXRvcDogMThweDtcbiAgcGFkZGluZy1yaWdodDogMTNweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaGVhZGVyLWljb25zIHtcbiAgbWFyZ2luLXRvcDogMTAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkY7XG4gIGhlaWdodDogODVweDtcbn1cbi5oZWFkZXItaWNvbnMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDM4cHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmhlYWRlci1pY29ucyBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uaGVhZGVyLWljb25zIGlvbi1jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5wcm9ncmVzcy1jb3VudCBpb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2dyZXNzLWNvdW50IGlvbi1jb2wgaDEge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnByb2dyZXNzLWNvdW50IGlvbi1jb2w6bnRoLWNoaWxkKDEpIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0NDQztcbn1cbi5wcm9ncmVzcy1jb3VudCBpb24tY29sOm50aC1jaGlsZCgxKSBoMSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5wcm9ncmVzcy1jb3VudCBpb24tY29sOm50aC1jaGlsZCgyKSBoMSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wcm9ncmVzcy1jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA5cHggNHB4ICNDQ0M7XG59XG5cbi5zbnRjLWxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICB6LWluZGV4OiA5OTk5O1xuICB3aWR0aDogMTY5cHg7XG4gIGxlZnQ6IDM0JTtcbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/dashboard/dashboard.page.ts": (
  /*!*********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.ts ***!
    \*********************************************/
  /*! exports provided: DashboardPage */
  /***/
  function srcAppDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../components.service */"./src/app/components.service.ts");
    /* harmony import */
    var _sample_entry_sample_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../sample-entry/sample-entry.component */"./src/app/sample-entry/sample-entry.component.ts");
    /* harmony import */
    var _send_courier_send_courier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../send-courier/send-courier.component */"./src/app/send-courier/send-courier.component.ts");
    /* harmony import */
    var _mill_status_mill_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../mill-status/mill-status.component */"./src/app/mill-status/mill-status.component.ts");
    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage(menu, componentService) {
        _classCallCheck(this, DashboardPage);
        this.menu = menu;
        this.componentService = componentService;
        this.menu.enable(true);
      }
      return _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sampleEntry",
        value: function sampleEntry() {
          this.componentService.openModal(_sample_entry_sample_entry_component__WEBPACK_IMPORTED_MODULE_4__["SampleEntryComponent"]);
        }
      }, {
        key: "courierEntry",
        value: function courierEntry() {
          this.componentService.openModal(_send_courier_send_courier_component__WEBPACK_IMPORTED_MODULE_5__["SendCourierComponent"]);
        }
      }, {
        key: "millStatus",
        value: function millStatus() {
          this.componentService.openModal(_mill_status_mill_status_component__WEBPACK_IMPORTED_MODULE_6__["MillStatusComponent"]);
        }
      }, {
        key: "popMenu",
        value: function popMenu(event) {
          this.componentService.presentPopover(event);
        }
      }]);
    }();
    DashboardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]
      }];
    };
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./dashboard.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./dashboard.page.scss */"./src/app/dashboard/dashboard.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]])], DashboardPage);

    /***/
  })
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map