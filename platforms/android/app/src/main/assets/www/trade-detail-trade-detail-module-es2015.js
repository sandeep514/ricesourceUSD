(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trade-detail-trade-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trade-detail/trade-detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trade-detail/trade-detail.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"content\">\n\t<div style=\"margin-bottom: 100px;\">\n\t\t<div class=\"header-container\">\n\t\t\t<div class=\"\"></div>\n\t\t\t<div class=\"lightgreen\">\n\t\t\t\t<div style=\"margin-top: 0px;text-align: center;padding: 10px 0px;\">\n\t\t\t\t\t<ion-row style=\"margin: 0px 0px;\">\n\t\t\t\t\t\t<ion-col style=\"text-align: left;padding-left: 20px;\" (click)=\"back()\">\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-back-outline\" style=\"font-size: 20px;\"></ion-icon>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"6\" align=\"center\">\n\t\t\t\t\t\t\t<h4 style=\"padding: 0px;margin: 0px;\">Trade Detail</h4>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<ion-row class=\"rice-gallery\" *ngIf=\"tradeDetails != undefined \">\n\t\t\t<ion-col\n\t\t\t\tstyle=\"padding: 0px 0px 15px 0px;background-color: #fffbd6;border-radius: 0px 0px 25px 25px;overflow: hidden;\">\n\t\t\t\t<ion-slides pager=\"false\" [options]=\"slideOpts\">\n\t\t\t\t\t<ion-slide *ngIf=\"tradeDetails?.cooked_file != null\"\n\t\t\t\t\t\tstyle=\"width: 100%;padding: 15px;height: 200px;\">\n\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/'+tradeDetails?.cooked_file )\"\n\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/{{ tradeDetails?.cooked_file }}\" class=\"slide-image\">\n\t\t\t\t\t</ion-slide>\n\t\t\t\t\t<ion-slide *ngIf=\"tradeDetails?.uncooked_file != null\"\n\t\t\t\t\t\tstyle=\"width: 100%;padding: 15px;height: 200px;\">\n\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/'+tradeDetails?.uncooked_file)\"\n\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/{{ tradeDetails?.uncooked_file }}\" class=\"slide-image\">\n\t\t\t\t\t</ion-slide>\n\t\t\t\t</ion-slides>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\n\t\t<ng-container *ngIf=\"tradeDetails != undefined \">\n\t\t\t<div style=\"padding: 12px 5px;\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<p class=\"pt-0\" style=\"font-size: 12px;\">Valid Till:\n\t\t\t\t\t\t\t\t{{generateDateForValid(tradeDetails?.validDays)}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<p class=\" pt-0\" style=\"font-size: 16px;font-weight: bold;\">\n\t\t\t\t\t\t\t\t{{tradeDetails?.rice_name_data?.name }}\n\t\t\t\t\t\t\t\t{{tradeDetails?.rice_form_milestone3?.name }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<p class=\" pt-0\" style=\"font-size: 14px;\">\n\t\t\t\t\t\t\t\t{{tradeDetails?.rice_grade?.get_wand_type?.type}}\n\t\t\t\t\t\t\t\t{{tradeDetails?.rice_grade?.value }} </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row *ngIf=\"tradeDetails?.tradeType == 1\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<p class=\" pt-0\" style=\"font-size: 16px;color: rgba(119, 154, 32, 1);font-weight: bold;\">₹\n\t\t\t\t\t\t\t\t{{tradeDetails?.offerPrice }} Price in Qtls (Ex. Factory) </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;;\">Packing</p>\n\t\t\t\t\t\t\t\t<p> : {{ (tradeDetails?.tradeType == 2) ? tradeDetails?.rice_packing_buyer?.packing+'\n\t\t\t\t\t\t\t\t\t'+tradeDetails?.rice_packing_buyer?.description :\n\t\t\t\t\t\t\t\t\ttradeDetails?.rice_packing_seller?.description }} </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;;\">Quantity</p>\n\t\t\t\t\t\t\t\t<p> : {{ tradeDetails?.quantity }} qtls </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\n\t\t\t\t<ion-row *ngIf=\"tradeDetails?.location && tradeDetails?.tradeType == 1\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Location</p>\n\t\t\t\t\t\t\t\t<p> : {{ tradeDetails?.location }} </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row\n\t\t\t\t\t*ngIf=\"tradeDetails?.moisture || tradeDetails?.kett || tradeDetails?.broken || tradeDetails?.dd || tradeDetails?.admixture || tradeDetails?.elongation\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<h4>Specification</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\n\t\t\t\t<div class=\"specRice\">\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.moisture\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Moisture</p>\n\t\t\t\t\t\t\t\t\t<p>: {{tradeDetails?.moisture}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.kett\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Kett</p>\n\t\t\t\t\t\t\t\t\t<p>: {{tradeDetails?.kett}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.broken\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Broken</p>\n\t\t\t\t\t\t\t\t\t<p>: {{tradeDetails?.broken}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.dd\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">DD</p>\n\t\t\t\t\t\t\t\t\t<p>: {{tradeDetails?.dd}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.admixture\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Admixture</p>\n\t\t\t\t\t\t\t\t\t<p>: {{tradeDetails?.admixture}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.elongation\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Elongation</p>\n\n\t\t\t\t\t\t\t\t\t<p>: {{tradeDetails?.elongation}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row *ngIf=\"tradeDetails?.additioanlInfo\" style=\"margin-top: 20px;\">\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\" pt-0\" style=\"display: flex;font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-weight: bold;width: 40%;\">Additional Info</p>\n\t\t\t\t\t\t\t\t\t:\n\t\t\t\t\t\t\t\t\t<!-- <ul style=\"padding: 0;margin: 0;list-style: none;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let info of addInfo\"> {{info}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul> -->\n\t\t\t\t\t\t\t\t\t<p>{{ tradeDetails?.additioanlInfo }}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\n\t\t\t<div>\n\t\t\t\t<ion-row style=\"padding: 10px 20px;\" class=\"hide\" id=\"showingInterest\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>Thanks for showing your interest, Our team will contact you shortly.</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row style=\"padding: 10px 20px;\" *ngIf=\"tradeDetails?.trade_interest\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>Thanks for showing your interest, Our team will contact you shortly.</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row style=\"padding: 10px 20px;justify-content: center;\"\n\t\t\t\t\t*ngIf=\"tradeDetails?.status == 1 || tradeDetails?.status == 6\">\n\t\t\t\t\t<ion-col size=\"6\" class=\"interestedButton\" *ngIf=\"!tradeDetails?.trade_interest\"\n\t\t\t\t\t\t(click)=\"userShowInterest(tradeDetails?.id , $event)\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p>Interested</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\" class=\"callNowButton\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p><a href=\"tel:+919877092004\" class=\"contactuser\"\n\t\t\t\t\t\t\t\t\tstyle=\"text-decoration: none;color: #fff;\">Call now</a>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row style=\"padding: 10px 20px;\" *ngIf=\"tradeDetails?.status == 2\">\n\t\t\t\t\t<ion-col class=\"\">\n\t\t\t\t\t\t<div style=\"text-align: center;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP EXPIRED.png\" style=\"width: 200px;\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row style=\"padding: 10px 20px;\" *ngIf=\"tradeDetails?.status == 3\">\n\t\t\t\t\t<ion-col class=\"\">\n\t\t\t\t\t\t<div style=\"text-align: center;\">\n\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 200px;\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\n\n\n\t\t</ng-container>\n\n\t\t<!-- <ion-row class=\"ion-padding table-row padd-5\" style=\"padding-top: 0px;\">\n\n\t\t\t<ion-col class=\"price-table dashboard\">\n\t\t\t\t<table class=\"table \">\n\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<ng-container *ngFor=\"let list of spec | keyvalue\">\n\t\t\t\t\t\t\t<tr *ngFor=\"let listitems of list.value | keyvalue\">\n\t\t\t\t\t\t\t\t<td class=\"sticky-col first-col left pl-10\"\n\t\t\t\t\t\t\t\t\tstyle=\"font-family: 'Poppins-SemiBold';\">\n\t\t\t\t\t\t\t\t\t{{ listitems.key }}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"type-columns pl-60\" style=\"width:180px\">\n\t\t\t\t\t\t\t\t\t<div class=\"priceData \" style=\"font-family: 'Poppins-Regular';\">\n\t\t\t\t\t\t\t\t\t\t{{ listitems.value }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</tbody>\n\n\t\t\t\t</table>\n\t\t\t</ion-col>\n\t\t</ion-row> -->\n\t</div>\n\n</ion-content>\n<div>\n\t<app-menu></app-menu>\n\n</div>");

/***/ }),

/***/ "./src/app/trade-detail/trade-detail-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/trade-detail/trade-detail-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TradeDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeDetailPageRoutingModule", function() { return TradeDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trade_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trade-detail.page */ "./src/app/trade-detail/trade-detail.page.ts");




const routes = [
    {
        path: '',
        component: _trade_detail_page__WEBPACK_IMPORTED_MODULE_3__["TradeDetailPage"]
    }
];
let TradeDetailPageRoutingModule = class TradeDetailPageRoutingModule {
};
TradeDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TradeDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/trade-detail/trade-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/trade-detail/trade-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: TradeDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeDetailPageModule", function() { return TradeDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _trade_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trade-detail-routing.module */ "./src/app/trade-detail/trade-detail-routing.module.ts");
/* harmony import */ var _trade_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trade-detail.page */ "./src/app/trade-detail/trade-detail.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let TradeDetailPageModule = class TradeDetailPageModule {
};
TradeDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _trade_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TradeDetailPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_trade_detail_page__WEBPACK_IMPORTED_MODULE_6__["TradeDetailPage"]]
    })
], TradeDetailPageModule);



/***/ }),

/***/ "./src/app/trade-detail/trade-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/trade-detail/trade-detail.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".galleryContent {\n  padding: 0px;\n}\n\n.ricetype {\n  font-size: 18px;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: transparent important;\n}\n\n.price-table table thead tr th {\n  background-color: transparent important;\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n}\n\ntable thead,\ntable tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 2px solid #ededed !important;\n}\n\n.specification ion-row {\n  padding: 0;\n}\n\n.specification ion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.specification thead th {\n  font-weight: inherit;\n  text-align: left;\n}\n\n.ricetype {\n  font-size: 24px;\n  font-family: Arial;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.ricetype .black {\n  color: #000;\n}\n\ntable tbody tr td {\n  color: #000;\n  font-size: 14px !important;\n}\n\n.card .image {\n  text-align: center;\n}\n\n.type-columns {\n  padding-left: 40px;\n}\n\n.pl-40 {\n  padding-left: 40px !important;\n}\n\n.pl-60 {\n  padding-left: 40px !important;\n}\n\ntable tbody {\n  border: 0px !important;\n}\n\n#card th {\n  background-color: transparent !important;\n  --background-color: transparent !important;\n}\n\n#card {\n  position: absolute;\n  width: -webkit-fill-available;\n  padding-bottom: 25px;\n  margin: 0px;\n  border-radius: 0px 0px 22px 22px;\n}\n\n.swiper-slide img {\n  border-radius: 25px;\n}\n\nion-toolbar {\n  --border-width: 0 0 0px !important;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0px !important;\n}\n\np {\n  padding: 0;\n  margin: 0;\n}\n\n.interestedButton {\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n  background-color: #000;\n  padding: 15px 0px;\n  text-transform: capitalize;\n  border-radius: 100px;\n  width: 40%;\n}\n\n.callNowButton {\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n  background-color: #91b243;\n  padding: 15px 0px;\n  text-transform: capitalize;\n  border-radius: 100px;\n  width: 40%;\n}\n\n.hide {\n  display: none;\n}\n\n.specRice {\n  margin-left: 10px;\n}\n\n.specRice ion-col {\n  padding: 0px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC90cmFkZS1kZXRhaWwvdHJhZGUtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHJhZGUtZGV0YWlsL3RyYWRlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FES0k7RUFDSSxXQUFBO0VBNEJBLGVBQUE7QUM3QlI7O0FESVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0FDRmhCOztBRElnQjtFQUNJLHVDQUFBO0VBQ0EsK0JBQUE7QUNGcEI7O0FEUVk7RUFDSSxZQUFBO0FDTmhCOztBRFFnQjtFQUNJLGVBQUE7QUNOcEI7O0FEa0JBOztFQUVJLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQ0FBQTtBQ2ZKOztBRG1CSTtFQUNJLFVBQUE7QUNoQlI7O0FEbUJJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNqQlI7O0FEcUJRO0VBRUksb0JBQUE7RUFDQSxnQkFBQTtBQ3BCWjs7QUQwQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FDdkJKOztBRHlCSTtFQUNJLFdBQUE7QUN2QlI7O0FENEJBO0VBRUksV0FBQTtFQUNBLDBCQUFBO0FDMUJKOztBRDhCSTtFQUNJLGtCQUFBO0FDM0JSOztBRCtCQTtFQUNJLGtCQUFBO0FDNUJKOztBRCtCQTtFQUNJLDZCQUFBO0FDNUJKOztBRCtCQTtFQUNJLDZCQUFBO0FDNUJKOztBRCtCQTtFQUNJLHNCQUFBO0FDNUJKOztBRG1DQTtFQUNJLHdDQUFBO0VBQ0EsMENBQUE7QUNoQ0o7O0FEbUNBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDaENKOztBRG9DSTtFQUNJLG1CQUFBO0FDakNSOztBRHFDQTtFQUNJLGtDQUFBO0FDbENKOztBRHFDQTtFQUNJLGtDQUFBO0FDbENKOztBRHFDQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FDbENKOztBRHFDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNsQ0o7O0FEc0NBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQ25DSjs7QURzQ0E7RUFDSSxhQUFBO0FDbkNKOztBRHNDQTtFQUNJLGlCQUFBO0FDbkNKOztBRHNDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDbkNKIiwiZmlsZSI6InNyYy9hcHAvdHJhZGUtZGV0YWlsL3RyYWRlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeUNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wcmljZS10YWJsZSB7XG5cbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgdGhlYWQge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCBpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcblxuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG59XG5cbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHkge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VkZWRlZCAhaW1wb3J0YW50O1xufVxuXG4uc3BlY2lmaWNhdGlvbiB7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgaW9uLWNvbCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMFxuICAgIH1cblxuICAgIHRoZWFkIHtcbiAgICAgICAgdGgge1xuICAgICAgICAgICAgLy8gZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucmljZXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAuYmxhY2sge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59XG5cblxudGFibGUgdGJvZHkgdHIgdGQge1xuICAgIC8vIGNvbG9yOiAjOTJCMjQzO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZCB7XG4gICAgLmltYWdlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLnR5cGUtY29sdW1ucyB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4XG59XG5cbi5wbC00MCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC02MCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRib2R5IHtcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xufVxuXG4vLyB0Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTliMTtcbi8vIH1cblxuI2NhcmQgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4jY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjJweCAyMnB4O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgICBpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggIWltcG9ydGFudDtcbn1cblxucCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5pbnRlcmVzdGVkQnV0dG9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jYWxsTm93QnV0dG9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ1LCAxNzgsIDY3LCAxKTtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB3aWR0aDogNDAlXG59XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbi5zcGVjUmljZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5zcGVjUmljZSBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59IiwiLmdhbGxlcnlDb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wcmljZS10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIge1xuICBoZWlnaHQ6IDM0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgaW1wb3J0YW50O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG50YWJsZSB0aGVhZCxcbnRhYmxlIHRib2R5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZGVkZWQgIWltcG9ydGFudDtcbn1cblxuLnNwZWNpZmljYXRpb24gaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDA7XG59XG4uc3BlY2lmaWNhdGlvbiBpb24tY29sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnNwZWNpZmljYXRpb24gdGhlYWQgdGgge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cbi5yaWNldHlwZSAuYmxhY2sge1xuICBjb2xvcjogIzAwMDtcbn1cblxudGFibGUgdGJvZHkgdHIgdGQge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIC5pbWFnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnR5cGUtY29sdW1ucyB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLnBsLTQwIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC02MCB7XG4gIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0Ym9keSB7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNjYXJkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4jY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMnB4IDIycHg7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufVxuXG5wIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW50ZXJlc3RlZEJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmNhbGxOb3dCdXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MWIyNDM7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNwZWNSaWNlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5zcGVjUmljZSBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/trade-detail/trade-detail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/trade-detail/trade-detail.page.ts ***!
  \***************************************************/
/*! exports provided: TradeDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeDetailPage", function() { return TradeDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _imageprev_imageprev_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imageprev/imageprev.page */ "./src/app/imageprev/imageprev.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let TradeDetailPage = class TradeDetailPage {
    constructor(location, actRoute, apiser, modalCtrl) {
        this.location = location;
        this.actRoute = actRoute;
        this.apiser = apiser;
        this.modalCtrl = modalCtrl;
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
        this.generateDate = (date) => {
            var someDate = new Date(date);
            return someDate.getDay() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear();
        };
        this.generateDateForValid = (validDate) => {
            var createddate = new Date(validDate);
            var ddate = createddate.getDate();
            var month = createddate.getMonth() + 1;
            var year = createddate.getFullYear();
            var hours = createddate.getHours().toString();
            var minutes = createddate.getMinutes().toString();
            // var ampm = hours >= 12 ? 'pm' : 'am';
            // hours = hours % 12;
            hours = hours ? (hours).toString() : '12'; // the hour '0' should be '12'
            hours = (hours.length == 1) ? '0' + hours : hours;
            console.log('minutes');
            console.log(minutes);
            minutes = minutes < '10' ? '0' + minutes : minutes;
            var strTime = ddate + '/' + month + '/' + year + ' (' + hours + ':' + minutes + ')';
            return strTime;
        };
        //intrested/trade
        this.userShowInterest = (tradeId, $event) => {
            $event.currentTarget.classList.add('hide');
            $event.currentTarget.parentNode.parentNode.children[1].classList.remove('hide');
            document.getElementById('showingInterest').classList.remove('hide');
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
        this.tradeDetails = JSON.parse(tradeData);
        console.log(this.tradeDetails);
        var specialCharacter = ',';
        let additionalIn = this.tradeDetails.additioanlInfo;
        if (additionalIn) {
            this.addInfo = (additionalIn).split(specialCharacter);
        }
        this.imageUrl = this.apiser.imageUrl;
        // this.getTradeDetails(this.galleryId);
        this.userFirstName = localStorage.getItem('name')[0];
    }
    back() {
        this.location.back();
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
};
TradeDetailPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
TradeDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trade-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trade-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trade-detail/trade-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trade-detail.page.scss */ "./src/app/trade-detail/trade-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], TradeDetailPage);



/***/ })

}]);
//# sourceMappingURL=trade-detail-trade-detail-module-es2015.js.map