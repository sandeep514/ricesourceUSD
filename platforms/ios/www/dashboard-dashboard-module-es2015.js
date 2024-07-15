(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-no-padding dashboard-bg\">\n\t<ion-row class=\"header-bg ion-no-padding\">\n\t\t<ion-col class=\"ion-no-padding\">\n\t\t\t<img src=\"../../assets/SNTC LOGO (1).png\" class=\"sntc-logo\" />\n\t\t\t<img src=\"../../assets/dashboard-1.png\" class=\"bg-header\" />\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"dashboard-header\">\n\t\t<ion-col align=\"left\">\n\t\t\t<ion-menu-button class=\"menu-button\"></ion-menu-button>\n\t\t</ion-col>\n\t\t<ion-col align=\"center\" class=\"dashboard-title\">\n\t\t\t\n\t\t</ion-col>\n\t\t<ion-col align=\"right\" class=\"pop-menu\">\n\t\t\t<ion-icon name=\"ellipsis-vertical\" (click)=\"popMenu($event)\"></ion-icon>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"header-icons\">\n\t\t<ion-col class=\"ion-activatable ripple-parent\" (click)=\"sampleEntry()\">\n\t\t\t<ion-icon name=\"albums-outline\"></ion-icon> <br/>\n\t\t\t<ion-label>Sample Entry</ion-label>\n\t\t\t<ion-ripple-effect></ion-ripple-effect>\n\t\t</ion-col>\n\t\t<ion-col class=\"ion-activatable ripple-parent\">\n\t\t\t<ion-icon name=\"send-outline\"></ion-icon> <br/>\n\t\t\t<ion-label>Send Courier</ion-label>\n\t\t\t<ion-ripple-effect></ion-ripple-effect>\n\t\t</ion-col>\n\t\t<ion-col class=\"ion-activatable ripple-parent\">\n\t\t\t<ion-icon name=\"clipboard-outline\"></ion-icon> <br/>\n\t\t\t<ion-label>Mill Status</ion-label>\n\t\t\t<ion-ripple-effect></ion-ripple-effect>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<ion-card class=\"progress-card\">\n\t\t\t\t<ion-item>\n\t\t\t\t  \t<h4>Total Progress</h4>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-card-content>\n\t\t\t\t\t<ion-row class=\"progress-count\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<h1>520</h1>\n\t\t\t\t\t\t\t<ion-label>Total Samples</ion-label>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<h1>520</h1>\n\t\t\t\t\t\t\t<ion-label>Pending Courier</ion-label>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-col>\n\t</ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard-bg {\n  background-color: #FFF;\n}\n\n.header-bg {\n  position: absolute;\n}\n\n.header-bg .bg-header {\n  width: 100%;\n  height: 243px;\n}\n\n.dashboard-header {\n  color: #FFF;\n}\n\n.menu-button {\n  position: relative;\n  left: -39px;\n  top: 8px;\n  font-size: 28px;\n}\n\n.dashboard-title {\n  padding-top: 19px;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.pop-menu {\n  padding-top: 18px;\n  padding-right: 13px;\n  font-size: 25px;\n}\n\n.header-icons {\n  margin-top: 102px;\n  text-align: center;\n  color: #FFF;\n  height: 85px;\n}\n\n.header-icons ion-icon {\n  font-size: 38px;\n  color: #FFF;\n}\n\n.header-icons ion-label {\n  font-size: 15px;\n}\n\n.header-icons ion-col {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  padding-top: 10px;\n}\n\n.progress-count ion-col {\n  text-align: center;\n}\n\n.progress-count ion-col h1 {\n  font-weight: 600;\n}\n\n.progress-count ion-col:nth-child(1) {\n  border-right: 1px solid #CCC;\n}\n\n.progress-count ion-col:nth-child(1) h1 {\n  color: green;\n}\n\n.progress-count ion-col:nth-child(2) h1 {\n  color: red;\n}\n\n.progress-card {\n  box-shadow: 0px 5px 9px 4px #CCC;\n}\n\n.sntc-logo {\n  position: absolute;\n  top: 4px;\n  z-index: 9999;\n  width: 169px;\n  left: 34%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNFUjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRERJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNHUjs7QURESTtFQUNJLGVBQUE7QUNHUjs7QURESTtFQUNJLG9DQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpQkFBQTtBQ0dSOztBREVJO0VBQ0ksa0JBQUE7QUNDUjs7QURBUTtFQUNJLGdCQUFBO0FDRVo7O0FERUk7RUFJSSw0QkFBQTtBQ0hSOztBREFRO0VBQ0ksWUFBQTtBQ0VaOztBREdRO0VBQ0ksVUFBQTtBQ0RaOztBRE1BO0VBQ0ksZ0NBQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLWJne1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICBcbn1cbi5oZWFkZXItYmd7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC5iZy1oZWFkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDI0M3B4O1xuICAgIH1cbn1cbi5kYXNoYm9hcmQtaGVhZGVye1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4ubWVudS1idXR0b257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0zOXB4O1xuICAgIHRvcDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLmRhc2hib2FyZC10aXRsZXtcbiAgICBwYWRkaW5nLXRvcDogMTlweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnBvcC1tZW51e1xuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaGVhZGVyLWljb25ze1xuICAgIG1hcmdpbi10b3A6IDEwMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBoZWlnaHQ6IDg1cHg7XG4gICAgaW9uLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgfVxuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICBpb24tY29se1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG59XG5cbi5wcm9ncmVzcy1jb3VudHtcbiAgICBpb24tY29se1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGgxe1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1jb2w6bnRoLWNoaWxkKDEpe1xuICAgICAgICBoMXtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0NDO1xuICAgIH1cbiAgICBpb24tY29sOm50aC1jaGlsZCgyKXtcbiAgICAgICAgaDF7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJvZ3Jlc3MtY2FyZHtcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDlweCA0cHggI0NDQztcbn1cblxuLnNudGMtbG9nb3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0cHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB3aWR0aDogMTY5cHg7XG4gICAgbGVmdDogMzQlO1xufVxuIiwiLmRhc2hib2FyZC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaGVhZGVyLWJnIC5iZy1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNDNweDtcbn1cblxuLmRhc2hib2FyZC1oZWFkZXIge1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMzlweDtcbiAgdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLmRhc2hib2FyZC10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxOXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wb3AtbWVudSB7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5oZWFkZXItaWNvbnMge1xuICBtYXJnaW4tdG9wOiAxMDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRjtcbiAgaGVpZ2h0OiA4NXB4O1xufVxuLmhlYWRlci1pY29ucyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgY29sb3I6ICNGRkY7XG59XG4uaGVhZGVyLWljb25zIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5oZWFkZXItaWNvbnMgaW9uLWNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnByb2dyZXNzLWNvdW50IGlvbi1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZ3Jlc3MtY291bnQgaW9uLWNvbCBoMSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucHJvZ3Jlc3MtY291bnQgaW9uLWNvbDpudGgtY2hpbGQoMSkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0NDO1xufVxuLnByb2dyZXNzLWNvdW50IGlvbi1jb2w6bnRoLWNoaWxkKDEpIGgxIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuLnByb2dyZXNzLWNvdW50IGlvbi1jb2w6bnRoLWNoaWxkKDIpIGgxIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnByb2dyZXNzLWNhcmQge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDlweCA0cHggI0NDQztcbn1cblxuLnNudGMtbG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHdpZHRoOiAxNjlweDtcbiAgbGVmdDogMzQlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components.service */ "./src/app/components.service.ts");
/* harmony import */ var _sample_entry_sample_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sample-entry/sample-entry.component */ "./src/app/sample-entry/sample-entry.component.ts");
/* harmony import */ var _send_courier_send_courier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../send-courier/send-courier.component */ "./src/app/send-courier/send-courier.component.ts");
/* harmony import */ var _mill_status_mill_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mill-status/mill-status.component */ "./src/app/mill-status/mill-status.component.ts");







let DashboardPage = class DashboardPage {
    constructor(menu, componentService) {
        this.menu = menu;
        this.componentService = componentService;
        this.menu.enable(true);
    }
    ngOnInit() {
    }
    sampleEntry() {
        this.componentService.openModal(_sample_entry_sample_entry_component__WEBPACK_IMPORTED_MODULE_4__["SampleEntryComponent"]);
    }
    courierEntry() {
        this.componentService.openModal(_send_courier_send_courier_component__WEBPACK_IMPORTED_MODULE_5__["SendCourierComponent"]);
    }
    millStatus() {
        this.componentService.openModal(_mill_status_mill_status_component__WEBPACK_IMPORTED_MODULE_6__["MillStatusComponent"]);
    }
    popMenu(event) {
        this.componentService.presentPopover(event);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"] }
];
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]])
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map