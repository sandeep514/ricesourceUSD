(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trade-inr-list-trade-inr-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trade-inr-list/trade-inr-list.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trade-inr-list/trade-inr-list.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"green\">\n\t<ion-toolbar mode=\"ios\" style=\"background: transparent; --background: transparent\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Trade List</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content id=\"content\" class=\"lightgreen\" style=\"height: 100%;\">\n\t<div style=\"height: 90%;overflow: scroll;\">\n\t\t<div>\n\t\t\t<ul\n\t\t\t\tstyle=\"list-style: none;display: inline-flex;flex-direction: row;justify-content: space-evenly;width: 100%;\">\n\t\t\t\t<li>\n\t\t\t\t\t<a [ngClass]=\"(selectedTradeType == 'buy')? 'SelectButtonColumn': 'buttonColumn' \"\n\t\t\t\t\t\t(click)=\"updateSelectedTradeType('buy')\">Buy</a>\n\n\t\t\t\t</li>\n\n\t\t\t\t<li>\n\t\t\t\t\t<a [ngClass]=\"(selectedTradeType == 'sell')? 'SelectButtonColumn': 'buttonColumn' \"\n\t\t\t\t\t\t(click)=\"updateSelectedTradeType('sell')\">Sell</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<ul style=\"padding: 10px;list-style: none;\">\n\n\t\t\t\t<ng-container *ngIf=\"selectedTradeType == 'buy'\">\n\t\t\t\t\t<li *ngFor=\"let bids of buyData\" class=\"demandedData\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle=\"margin: 0;border: 2px solid #92b243;border-radius: 5px;margin-bottom: 10px;overflow: hidden;padding: 6px;\">\n\t\t\t\t\t\t\t<div style=\"width: 80%;float: left;\">\n\t\t\t\t\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t\t\t\t\t\t<!-- <div style=\"width: 40%;float: left;\" class=\"demandHeaders\">\n\t\t\t\t\t\t\t\t\t\t<p style=\"float: left;font-size: 13px;margin: 0px;font-weight: bold;padding: 3px\">Rice</p>\n\t\t\t\t\t\t\t\t\t\t<p style=\"float: right;width: 10px;margin: 0px;height: 25px\">:</p>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0px;font-size: 15px;padding:3px;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{ bids?.rice_quality_master.quality }} {{\n\t\t\t\t\t\t\t\t\t\t\t\tbids?.rice_form_milestone3.name\n\t\t\t\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"bids?.quality_type == 1 \"> Basmati\n\t\t\t\t\t\t\t\t\t\t\t\t\tRice</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"bids?.quality_type == 2 \"> Non-Basmati\n\t\t\t\t\t\t\t\t\t\t\t\t\tRice</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t\t\t\t\t\t<!-- <div style=\"width: 40%;float: left;\" class=\"demandHeaders\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"float: left;font-size: 13px;margin: 0px;font-weight: bold;padding: 3px\">Grade</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"float: right;width: 10px;margin: 0px;height: 25px\">:</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0px;font-size: 13px;padding:3px\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{bids?.rice_grade.get_wand_type[0].type }} ({{ bids?.rice_grade.value\n\t\t\t\t\t\t\t\t\t\t\t\t}})\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t\t\t\t\t\t<!-- <div style=\"width: 40%;float: left;\" class=\"demandHeaders\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"float: left;font-size: 13px;margin: 0px;font-weight: bold;padding: 3px\">\tValidity</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"float: right;width: 10px;margin: 0px;height: 25px\">:</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0px;font-size: 13px;padding:3px\">{{\n\t\t\t\t\t\t\t\t\t\t\t\t\tgenerateDate(bids?.validDays) }}</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style=\"width: 20%;float: left;\">\n\t\t\t\t\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin: 0px;font-size: 13px;padding:40% 0% 0% 0%;text-align: center;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t₹{{ bids?.offerPrice }}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"selectedTradeType == 'sell'\">\n\t\t\t\t\t<li *ngFor=\"let bids of sellData\" class=\"demandedData\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle=\"margin: 0;border: 2px solid #92b243;border-radius: 5px;margin-bottom: 10px;overflow: hidden;padding: 6px;\">\n\t\t\t\t\t\t\t<div style=\"width: 80%;float: left;\">\n\t\t\t\t\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t\t\t\t\t\t<!-- <div style=\"width: 40%;float: left;\" class=\"demandHeaders\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"float: left;font-size: 13px;margin: 0px;font-weight: bold;padding: 3px\">Rice</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"float: right;width: 10px;margin: 0px;height: 25px\">:</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0px;font-size: 15px;padding:3px;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{ bids?.rice_quality_master.quality }} {{\n\t\t\t\t\t\t\t\t\t\t\t\tbids?.rice_form_milestone3.name\n\t\t\t\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"bids?.quality_type == 1 \"> Basmati\n\t\t\t\t\t\t\t\t\t\t\t\t\tRice</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"bids?.quality_type == 2 \"> Non-Basmati\n\t\t\t\t\t\t\t\t\t\t\t\t\tRice</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t\t\t\t\t\t<!-- <div style=\"width: 40%;float: left;\" class=\"demandHeaders\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"float: left;font-size: 13px;margin: 0px;font-weight: bold;padding: 3px\">Grade</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"float: right;width: 10px;margin: 0px;height: 25px\">:</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0px;font-size: 13px;padding:3px\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{bids?.rice_grade.get_wand_type[0].type }} ({{ bids?.rice_grade.value\n\t\t\t\t\t\t\t\t\t\t\t\t}})\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t\t\t\t\t\t<!-- <div style=\"width: 40%;float: left;\" class=\"demandHeaders\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"float: left;font-size: 13px;margin: 0px;font-weight: bold;padding: 3px\">\tValidity</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"float: right;width: 10px;margin: 0px;height: 25px\">:</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0px;font-size: 13px;padding:3px\">{{\n\t\t\t\t\t\t\t\t\t\t\t\t\tgenerateDate(bids?.validDays) }}</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style=\"width: 20%;float: left;\">\n\t\t\t\t\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin: 0px;font-size: 13px;padding:40% 0% 0% 0%;text-align: center;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t₹{{ bids?.offerPrice }}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/trade-inr-list/trade-inr-list-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/trade-inr-list/trade-inr-list-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TradeInrListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeInrListPageRoutingModule", function() { return TradeInrListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trade_inr_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trade-inr-list.page */ "./src/app/trade-inr-list/trade-inr-list.page.ts");




const routes = [
    {
        path: '',
        component: _trade_inr_list_page__WEBPACK_IMPORTED_MODULE_3__["TradeInrListPage"]
    }
];
let TradeInrListPageRoutingModule = class TradeInrListPageRoutingModule {
};
TradeInrListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TradeInrListPageRoutingModule);



/***/ }),

/***/ "./src/app/trade-inr-list/trade-inr-list.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/trade-inr-list/trade-inr-list.module.ts ***!
  \*********************************************************/
/*! exports provided: TradeInrListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeInrListPageModule", function() { return TradeInrListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _trade_inr_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trade-inr-list-routing.module */ "./src/app/trade-inr-list/trade-inr-list-routing.module.ts");
/* harmony import */ var _trade_inr_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trade-inr-list.page */ "./src/app/trade-inr-list/trade-inr-list.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let TradeInrListPageModule = class TradeInrListPageModule {
};
TradeInrListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _trade_inr_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TradeInrListPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_trade_inr_list_page__WEBPACK_IMPORTED_MODULE_6__["TradeInrListPage"]]
    })
], TradeInrListPageModule);



/***/ }),

/***/ "./src/app/trade-inr-list/trade-inr-list.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/trade-inr-list/trade-inr-list.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes blinker {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.SelectButtonColumn {\n  text-decoration: none;\n  padding: 10px 15px;\n  border: 2px solid #92b243;\n  border-radius: 10px;\n  color: #fff;\n  background-color: #92b243;\n}\n\n.buttonColumn {\n  text-decoration: none;\n  padding: 10px 15px;\n  border: 2px solid #92b243;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC90cmFkZS1pbnItbGlzdC90cmFkZS1pbnItbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyYWRlLWluci1saXN0L3RyYWRlLWluci1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZDQUFBO1VBQUEscUNBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksVUFBQTtFQ0NOO0VESUU7SUFDSSxZQUFBO0VDRk47RURPRTtJQUNJLFVBQUE7RUNMTjtBQUNGOztBRFZBO0VBQ0k7SUFDSSxVQUFBO0VDQ047RURJRTtJQUNJLFlBQUE7RUNGTjtFRE9FO0lBQ0ksVUFBQTtFQ0xOO0FBQ0Y7O0FEVUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ1JKOztBRFdBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3RyYWRlLWluci1saXN0L3RyYWRlLWluci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibGlua19tZSB7XG4gICAgYW5pbWF0aW9uOiBibGlua2VyIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGlua2VyIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgO1xuXG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cblxuICAgIDtcblxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIDtcbn1cblxuLlNlbGVjdEJ1dHRvbkNvbHVtbntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJiMjQzO1xuXG59XG4uYnV0dG9uQ29sdW1ue1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0MztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSIsIi5ibGlua19tZSB7XG4gIGFuaW1hdGlvbjogYmxpbmtlciAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmtlciB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5TZWxlY3RCdXR0b25Db2x1bW4ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0MztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MmIyNDM7XG59XG5cbi5idXR0b25Db2x1bW4ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0MztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/trade-inr-list/trade-inr-list.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/trade-inr-list/trade-inr-list.page.ts ***!
  \*******************************************************/
/*! exports provided: TradeInrListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeInrListPage", function() { return TradeInrListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _imageprev_imageprev_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imageprev/imageprev.page */ "./src/app/imageprev/imageprev.page.ts");






let TradeInrListPage = class TradeInrListPage {
    constructor(apiService, location, modalCtrl) {
        this.apiService = apiService;
        this.location = location;
        this.modalCtrl = modalCtrl;
        this.selectedTradeType = 'buy';
        this.generateDate = (days) => {
            var someDate = new Date();
            var duration = days;
            someDate.setTime(someDate.getTime() + (duration * 24 * 60 * 60 * 1000));
            return (someDate.getDate() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear());
        };
        var today = new Date();
        // this.mindate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        this.mindate = new Date(today.setDate(today.getDate() + 2)).toISOString();
        this.maxDate = today.setFullYear(today.getFullYear() + 2);
        this.lastDate = new Date(this.maxDate).toISOString();
        this.imagePre = this.apiService.imageUrl;
    }
    ngOnInit() {
        this.getListBids();
    }
    updateSelectedTradeType(selectedTrade) {
        console.log(selectedTrade);
        this.selectedTradeType = selectedTrade;
    }
    changed(event) {
        let todayDate = new Date();
        let todayFormatedDate = todayDate.getDate() +
            "/" +
            todayDate.getMonth() +
            "/" +
            todayDate.getFullYear();
        let selectedDate = new Date(event.detail.value);
        let getFullYear = selectedDate.getFullYear();
        let getDate = selectedDate.getDate();
        let getMonth = selectedDate.getMonth();
        let selectedFormatedDate = getDate + "/" + getMonth + "/" + getFullYear;
        var date1 = todayDate;
        var date2 = selectedDate;
        var diffDays = date2.getDate() - date1.getDate();
        this.validTill = diffDays;
        // console.log(diffDays);
    }
    getListBids() {
        let userid = localStorage.getItem("id");
        this.apiService.presentLoader("Please wait...");
        this.apiService.getTrades(userid).then((res) => {
            console.log(res);
            this.buyData = res.data[0];
            console.log(this.buyData);
            this.sellData = res.data[1];
            console.log(this.sellData);
            setTimeout(() => {
                this.apiService.dismissLoader();
            }, 1000);
        }, (err) => {
            setTimeout(() => {
                this.apiService.dismissLoader();
            }, 1000);
        });
    }
    yourbidfunction(event, buyQueryId) {
        this.mybid = event.detail.value;
        this.QueryId = buyQueryId;
    }
    validDays(event, buyQueryId) {
        this.validTill = event.detail.value;
        this.QueryId = buyQueryId;
    }
    saveUserBid(buyQueryId) {
        this.QueryId = buyQueryId;
        if (this.QueryId != undefined &&
            this.mybid != undefined &&
            this.validTill != undefined) {
            this.apiService.presentLoader("Please Wait...");
            this.apiService
                .addBidOnBuyerQuery({
                buyQueryId: this.QueryId,
                validTill: this.validTill,
                amount: this.mybid,
                userid: localStorage.getItem("id"),
            })
                .then((res) => {
                this.apiService.dismissLoader();
                this.getListBids();
            }, (err) => {
                this.apiService.dismissLoader();
            });
        }
        else {
            this.apiService.presentToast("Bid amount & Bid expired date is required...");
        }
    }
    back() {
        this.location.back();
    }
    accept(bid_id) {
        this.apiService.presentLoader("Please Wait...");
        let postedData = { bid_id: bid_id, counter_status: 1 };
        this.apiService
            .updateCounterStatus(postedData)
            .then((res) => {
            this.apiService.dismissLoader();
            console.log(res);
            this.getListBids();
        })
            .catch((err) => {
            this.apiService.dismissLoader();
            this.getListBids();
            console.log(err);
        });
    }
    reject(bid_id) {
        this.apiService.presentLoader("Please Wait...");
        let postedData = { bid_id: bid_id, counter_status: 2 };
        this.apiService
            .updateCounterStatus(postedData)
            .then((res) => {
            this.apiService.dismissLoader();
            console.log(res);
            this.getListBids();
        })
            .catch((err) => {
            this.getListBids();
            this.apiService.dismissLoader();
            console.log(err);
        });
    }
    openModal(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(image);
            let modal = yield this.modalCtrl.create({
                component: _imageprev_imageprev_page__WEBPACK_IMPORTED_MODULE_5__["ImageprevPage"],
                componentProps: { img: image },
            });
            yield modal.present();
        });
    }
};
TradeInrListPage.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
TradeInrListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trade-inr-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trade-inr-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trade-inr-list/trade-inr-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trade-inr-list.page.scss */ "./src/app/trade-inr-list/trade-inr-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], TradeInrListPage);



/***/ })

}]);
//# sourceMappingURL=trade-inr-list-trade-inr-list-module-es2015.js.map