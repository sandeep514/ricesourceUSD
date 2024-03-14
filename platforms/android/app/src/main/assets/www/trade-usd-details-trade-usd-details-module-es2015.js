(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trade-usd-details-trade-usd-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trade-usd-details/trade-usd-details.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trade-usd-details/trade-usd-details.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"content\">\n\t<div>\n\t\t<div class=\"lightgreen\">\n\t\t\t<div class=\"header-content\">\n\t\t\t\t<ion-row class=\"\">\n\t\t\t\t\t<ion-col size=\"3\" align=\"center\">\n\t\t\t\t\t\t<div class=\"user-profile-icon\">\n\t\t\t\t\t\t\t<span>{{ userFirstName }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\" align=\"center\">\n\t\t\t\t\t\t<h4>Product Details</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<ion-row class=\"rice-gallery\" *ngIf=\"tradeDetails != undefined \">\n\t\t\t<ion-col\n\t\t\t\tstyle=\"padding: 0px 0px 15px 0px;background-color: #fffbd6;border-radius: 0px 0px 25px 25px;overflow: hidden;\">\n\t\t\t\t<ion-slides pager=\"false\" [options]=\"slideOpts\">\n\t\t\t\t\t<ion-slide *ngIf=\"tradeDetails?.attachment1 != null\"\n\t\t\t\t\t\tstyle=\"width: 100%;padding: 15px;height: 200px;\">\n\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/notifications/'+tradeDetails?.attachment1 )\"\n\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/notifications/{{ tradeDetails?.attachment1 }}\"\n\t\t\t\t\t\t\tclass=\"slide-image\" onerror=\"this.src='../../assets/img/No_image_available.svg.png'\">\n\t\t\t\t\t</ion-slide>\n\t\t\t\t\t<ion-slide *ngIf=\"tradeDetails?.attachment2 != null\"\n\t\t\t\t\t\tstyle=\"width: 100%;padding: 15px;height: 200px;\">\n\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/notifications/'+tradeDetails?.attachment2)\"\n\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/notifications/{{ tradeDetails?.attachment2 }}\"\n\t\t\t\t\t\t\tclass=\"slide-image\" onerror=\"this.src='../../assets/img/No_image_available.svg.png'\">\n\t\t\t\t\t</ion-slide>\n\t\t\t\t</ion-slides>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\n\t\t<ng-container *ngIf=\"tradeDetails != undefined \">\n\t\t\t<ng-container>\n\t\t\t\t<div style=\"margin: 0;padding: 15px 0px;margin-bottom: 100px;\">\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.get_rice_quality?.quality != '' && tradeDetails?.get_rice_quality?.quality != null && tradeDetails?.get_rice_quality?.quality != undefined && tradeDetails?.get_rice_quality?.quality_name != '' && tradeDetails?.get_rice_quality?.quality_name != null && tradeDetails?.get_rice_quality?.quality_name != undefined \">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Quality</ion-col>\n\t\t\t\t\t\t<div style=\"margin-top: 5px; \">:</div>\n\t\t\t\t\t\t<ion-col> {{ tradeDetails?.get_rice_quality?.quality }} {{\n\t\t\t\t\t\t\ttradeDetails?.get_rice_quality?.quality_name\n\t\t\t\t\t\t\t}}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.get_u_s_d_default_master?.bag_size != '' && tradeDetails?.get_u_s_d_default_master?.bag_size != null && tradeDetails?.get_u_s_d_default_master?.bag_size != undefined && tradeDetails?.get_u_s_d_default_master?.bag_type != '' && tradeDetails?.get_u_s_d_default_master?.bag_type != null && tradeDetails?.get_u_s_d_default_master?.bag_type != undefined \">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Packing</ion-col>\n\t\t\t\t\t\t<ion-col>: {{ tradeDetails?.get_u_s_d_default_master?.bag_size }} {{\n\t\t\t\t\t\t\ttradeDetails?.get_u_s_d_default_master?.bag_type }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.qty != '' && tradeDetails?.qty != null && tradeDetails?.qty != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Quantity (MT)</ion-col>\n\t\t\t\t\t\t<ion-col>: {{ tradeDetails?.qty }}</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.fob != '' && tradeDetails?.fob != null && tradeDetails?.fob != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">FOB PMT</ion-col>\n\t\t\t\t\t\t<ion-col>: ${{ tradeDetails?.fob }}</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.message != '' && tradeDetails?.message != null && tradeDetails?.message != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Remarks</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">\n\t\t\t\t\t\t\t<div style=\"float: left;margin-right: 4px;height: 100%\">:</div> {{ tradeDetails?.message }}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.created_at != '' && tradeDetails?.created_at != null && tradeDetails?.created_at != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Posted on</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.created_at | date:'dd-MM-yyyy |\n\t\t\t\t\t\t\thh:mm a' }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.validDate != '' && tradeDetails?.validDate != null && tradeDetails?.validDate != undefined\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Valid Till</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.validDate | date:'dd-MM-yyyy |\n\t\t\t\t\t\t\thh:mm a' }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\n\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.length != '' && tradeDetails?.length != 0 && tradeDetails?.length != null || tradeDetails?.length != '' && tradeDetails?.length != 0 && tradeDetails?.length != null || tradeDetails?.purity != '' && tradeDetails?.purity != 0 && tradeDetails?.purity != null || tradeDetails?.moisture != '' && tradeDetails?.moisture != 0 && tradeDetails?.moisture != null || tradeDetails?.broken != '' && tradeDetails?.broken != 0 && tradeDetails?.broken != null || tradeDetails?.kett != '' && tradeDetails?.kett != 0 && tradeDetails?.kett != null || tradeDetails?.dd != '' && tradeDetails?.dd != 0 && tradeDetails?.dd != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\"\n\t\t\t\t\t\t\tstyle=\"font-size: 18px;font-weight: bold;\">Parameters</ion-col>\n\t\t\t\t\t\t<ion-col class=\"demandHeaders\"\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;font-size: 18px;font-weight: bold\">Specifications</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.length != '' && tradeDetails?.length != 0 && tradeDetails?.length != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Length</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.length }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.purity != '' && tradeDetails?.purity != 0 && tradeDetails?.purity != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Purity</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.purity }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.moisture != '' && tradeDetails?.moisture != 0 && tradeDetails?.moisture != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Moisture</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.moisture }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row\n\t\t\t\t\t\t*ngIf=\"tradeDetails?.broken != '' && tradeDetails?.broken != 0 && tradeDetails?.broken != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Broken</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.broken }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.kett != '' && tradeDetails?.kett != 0 && tradeDetails?.kett != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Kett</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.kett }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.dd != '' && tradeDetails?.dd != 0 && tradeDetails?.dd != null\">\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">DD</ion-col>\n\t\t\t\t\t\t<ion-col style=\"text-transform: capitalize;\">: {{ tradeDetails?.dd }}</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\t*ngIf=\"tradeDetails?.status == 0 && tradeDetails?.isExpired == 'true' || tradeDetails?.isExpired == 'true' && tradeDetails?.status == 1\"\n\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: red;font-weight: bold;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP EXPIRED.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.hot_deal_accept.length <= 0\">\n\t\t\t\t\t\t<ion-col *ngIf=\"tradeDetails?.isExpired == 'false' && tradeDetails?.status == 1\" size=\"12\"\n\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: red;\">\n\t\t\t\t\t\t\t<ion-button class=\"green\" style=\"color: #fff;border-radius: 12px;\"\n\t\t\t\t\t\t\t\t(click)=\"acceptHotDeal(tradeDetails?.id)\">Interested</ion-button>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ng-container *ngIf=\"tradeDetails?.status == 1 && tradeDetails?.isExpired != 'true'\">\n\t\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.hot_deal_accept.length > 0 \">\n\t\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">{{\n\t\t\t\t\t\t\t\ttradeDetails?.isDealAcceptedMessage }}\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ng-container>\n\n\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.status == 0 && tradeDetails?.isExpired != 'true'\">\n\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.status == 2 && tradeDetails?.isExpired != 'true'\">\n\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t<!-- Deal is taken -->\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\n\t\t</ng-container>\n\n\n\t\t<app-menu></app-menu>\n\t</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/trade-usd-details/trade-usd-details-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/trade-usd-details/trade-usd-details-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: TradeUsdDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeUsdDetailsPageRoutingModule", function() { return TradeUsdDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trade_usd_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trade-usd-details.page */ "./src/app/trade-usd-details/trade-usd-details.page.ts");




const routes = [
    {
        path: '',
        component: _trade_usd_details_page__WEBPACK_IMPORTED_MODULE_3__["TradeUsdDetailsPage"]
    }
];
let TradeUsdDetailsPageRoutingModule = class TradeUsdDetailsPageRoutingModule {
};
TradeUsdDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TradeUsdDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/trade-usd-details/trade-usd-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/trade-usd-details/trade-usd-details.module.ts ***!
  \***************************************************************/
/*! exports provided: TradeUsdDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeUsdDetailsPageModule", function() { return TradeUsdDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _trade_usd_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trade-usd-details-routing.module */ "./src/app/trade-usd-details/trade-usd-details-routing.module.ts");
/* harmony import */ var _trade_usd_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trade-usd-details.page */ "./src/app/trade-usd-details/trade-usd-details.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let TradeUsdDetailsPageModule = class TradeUsdDetailsPageModule {
};
TradeUsdDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _trade_usd_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["TradeUsdDetailsPageRoutingModule"]
        ],
        declarations: [_trade_usd_details_page__WEBPACK_IMPORTED_MODULE_6__["TradeUsdDetailsPage"]]
    })
], TradeUsdDetailsPageModule);



/***/ }),

/***/ "./src/app/trade-usd-details/trade-usd-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/trade-usd-details/trade-usd-details.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  padding: 0px;\n  margin: 0px;\n}\n\n.demandHeaders {\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC90cmFkZS11c2QtZGV0YWlscy90cmFkZS11c2QtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyYWRlLXVzZC1kZXRhaWxzL3RyYWRlLXVzZC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RyYWRlLXVzZC1kZXRhaWxzL3RyYWRlLXVzZC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmRlbWFuZEhlYWRlcnMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iLCJwIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmRlbWFuZEhlYWRlcnMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/trade-usd-details/trade-usd-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/trade-usd-details/trade-usd-details.page.ts ***!
  \*************************************************************/
/*! exports provided: TradeUsdDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeUsdDetailsPage", function() { return TradeUsdDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _imageprev_imageprev_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imageprev/imageprev.page */ "./src/app/imageprev/imageprev.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let TradeUsdDetailsPage = class TradeUsdDetailsPage {
    constructor(actRoute, apiser, modalCtrl, alertController, location) {
        this.actRoute = actRoute;
        this.apiser = apiser;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.location = location;
        this.slideOpts = {
            initialSlide: 1,
            slidesPerView: 1,
            spaceBetween: 5,
            freeMode: true,
            pagination: false,
            speed: 600,
            autoplay: true,
            loop: false
        };
        this.showImage = false;
        this.parseDate = (date) => {
            var someDate = new Date(date);
            // someDate.setTime(someDate.getTime() + (duration * 24 * 60 * 60 * 1000));
            return (someDate.getDate() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear());
        };
        this.generateDate = (date) => {
            var someDate = new Date(date);
            return someDate.getDay() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear();
        };
        //intrested/trade
        this.userShowInterest = (tradeId, $event) => {
            $event.currentTarget.classList.add('hide');
            $event.currentTarget.parentNode.parentNode.children[1].classList.remove('hide');
            // $event.currentTarget.parentNode.parentNode.children[2].classList.remove('hide');
            // return false;
            let postedData = {
                tradeId: tradeId,
                userId: localStorage.getItem('id')
            };
            this.apiser.tradeInterest(postedData).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
        };
        let tradeData = this.actRoute.snapshot.paramMap.get('tradeDetail');
        console.log(tradeData);
        this.tradeDetails = JSON.parse(tradeData);
        console.log(this.tradeDetails);
        this.imageUrl = this.apiser.imageUrl;
        // this.getTradeDetails(this.galleryId);
        this.userFirstName = localStorage.getItem('name')[0];
    }
    ngOnInit() {
    }
    getTradeDetails(galleryId) {
        this.apiser.presentLoader("Loading trade details...");
        this.apiser.getTradeData(galleryId).then((res) => {
            console.log('trade details');
            console.log(res);
            this.apiser.loaderCtrl.dismiss();
            this.galleryData = res.data;
            this.spec = res.data.specification;
            console.log(this.spec);
        }, (err) => {
        });
    }
    openModal(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _imageprev_imageprev_page__WEBPACK_IMPORTED_MODULE_5__["ImageprevPage"],
                componentProps: { img: image }
            });
            yield modal.present();
        });
    }
    back() {
        this.location.back();
    }
    acceptHotDeal(bidId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Kindly confirm your interest',
                buttons: [
                    {
                        text: 'Yes',
                        role: 'confirm',
                        handler: () => {
                            this.apiser.presentLoader('Please wait');
                            this.apiser.acceptHotDeal({ 'user_id': localStorage.getItem('id'), 'bid_id': bidId }).then((res) => {
                                // this.getListBids();
                                console.log(res);
                                this.apiser.dismissLoader();
                            }, (err) => {
                                console.log(err);
                                this.apiser.dismissLoader();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            alert.dismiss();
                        },
                    }
                ],
                cssClass: "confirm"
            });
            yield alert.present();
            return false;
        });
    }
    openImage(imagePrefix, destination, image) {
        this.showImage = true;
        this.ShownImage = imagePrefix + '' + destination + '/' + image;
    }
    closeImage() {
        this.showImage = false;
    }
};
TradeUsdDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
TradeUsdDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trade-usd-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trade-usd-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trade-usd-details/trade-usd-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trade-usd-details.page.scss */ "./src/app/trade-usd-details/trade-usd-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
], TradeUsdDetailsPage);



/***/ })

}]);
//# sourceMappingURL=trade-usd-details-trade-usd-details-module-es2015.js.map