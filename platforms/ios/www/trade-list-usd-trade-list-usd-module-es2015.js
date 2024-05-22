(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trade-list-usd-trade-list-usd-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trade-list-usd/trade-list-usd.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trade-list-usd/trade-list-usd.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"\">\n\t<ion-toolbar mode=\"ios\" style=\"background: #fff; --background: #fff\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Trade List</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content id=\"content\" class=\"\" style=\"height: 100%;\">\n\t<div style=\"height: 90%;overflow: scroll;\">\n\t\t<div>\n\t\t\t<!-- <ul\n\t\t\t\tstyle=\"list-style: none;display: inline-flex;flex-direction: row;justify-content: space-evenly;width: 100%;padding: 0px;\">\n\t\t\t\t<li>\n\t\t\t\t\t<a [ngClass]=\"(selectedTradeType == 'all')? 'SelectButtonColumn': 'buttonColumn' \"\n\t\t\t\t\t\t(click)=\"updateSelectedTradeType('all')\">All</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a [ngClass]=\"(selectedTradeType == 'buy')? 'SelectButtonColumn': 'buttonColumn' \"\n\t\t\t\t\t\t(click)=\"updateSelectedTradeType('buy')\">Buy</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a [ngClass]=\"(selectedTradeType == 'sell')? 'SelectButtonColumn': 'buttonColumn' \"\n\t\t\t\t\t\t(click)=\"updateSelectedTradeType('sell')\">Sell</a>\n\t\t\t\t</li>\n\t\t\t</ul> -->\n\t\t\t<ul style=\"padding: 0px 15px;list-style: none\">\n\n\t\t\t\t<ng-container *ngIf=\"selectedTradeType == 'all'\">\n\t\t\t\t\t<li *ngFor=\"let bids of buyData\" class=\"demandedData\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle=\"margin: 0;border-radius: 5px;margin-bottom: 10px;overflow: hidden;padding: 12px 10px;background-color: rgba(226, 227, 228, 0.2);box-shadow: 1px 3px 12px lightgray;\">\n\n\t\t\t\t\t\t\t<div style=\"width: 70%;float: left;\">\n\t\t\t\t\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t\t\t\t\t\t<div style=\"width: 20%;float: left;margin-right: 10px;\">\n\t\t\t\t\t\t\t\t\t\t<div style=\"position: relative;\">\n\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"background: url('../../assets/img/refe 1.png');height: 50px;width: 50px;background-repeat: no-repeat;background-position: center;background-size: contain;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/notifications/{{ bids?.attachment1 }}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"height: 30px;width: 30px;margin-left: 21%;border-radius: 100%;margin-top: 11px;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tonerror=\"this.src='../../assets/img/No_image_available.svg.png'\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div style=\"width: 75%;float: left;\">\n\t\t\t\t\t\t\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0px;font-size: 12px;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ bids?.get_rice_quality?.quality}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{bids?.get_rice_quality?.quality_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container>{{bids?.get_rice_quality?.quality_type}}</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0px;font-size: 13px;padding:3px\">Valid\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTill: {{ parseDate(bids?.validDate) }}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style=\"width: 30%;float: left;margin-bottom: 20px;\">\n\t\t\t\t\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin: 0px;font-size: 14px;text-align: right;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{bids?.qty }} MT</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"text-align: right;float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"bids?.status == 0 && bids.isExpired == 'true' || bids.isExpired == 'true' && bids.status == 1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"width: 50px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../../assets/STAMP EXPIRED.png\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"text-align: right;float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"bids?.status == 0 && bids.isExpired != 'true' || bids?.status == 2 && bids.isExpired != 'true'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"width: 50px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"../../assets/sales-sold-business-postage-stamps-rubber-stamp-sold-out-removebg-preview (1).png\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div style=\"display: inline-flex;float: right;\">\n\t\t\t\t\t\t\t\t\t<!-- <div style=\"text-align: right\">\n\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"likeTrade(bids?.id , $event)\" *ngIf=\"bids?.trade_like == null\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"heart-outline\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"display: inline-flex;float: right;color: #000;font-size: 20px;margin-right: 10px;\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"hide\" name=\"heart\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"display: inline-flex;float: right;color: red;font-size: 20px;margin-right: 10px;\"></ion-icon>\n\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon *ngIf=\"bids?.trade_like != null\" name=\"heart\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"display: inline-flex;float: right;color: red;font-size: 20px;margin-right: 10px;\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div style=\"text-align: right\">\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"navigateToDetailPage(bids)\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"list-style: none;text-decoration: none;color: #000;background: #fff;padding: 5px 10px;border-radius: 10px;box-shadow: 4px 2px 8px 2px #ededed;font-size: 12px\">View\n\t\t\t\t\t\t\t\t\t\t\tDetails</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/trade-list-usd/trade-list-usd-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/trade-list-usd/trade-list-usd-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TradeListUsdPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeListUsdPageRoutingModule", function() { return TradeListUsdPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trade_list_usd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trade-list-usd.page */ "./src/app/trade-list-usd/trade-list-usd.page.ts");




const routes = [
    {
        path: '',
        component: _trade_list_usd_page__WEBPACK_IMPORTED_MODULE_3__["TradeListUsdPage"]
    }
];
let TradeListUsdPageRoutingModule = class TradeListUsdPageRoutingModule {
};
TradeListUsdPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TradeListUsdPageRoutingModule);



/***/ }),

/***/ "./src/app/trade-list-usd/trade-list-usd.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/trade-list-usd/trade-list-usd.module.ts ***!
  \*********************************************************/
/*! exports provided: TradeListUsdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeListUsdPageModule", function() { return TradeListUsdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _trade_list_usd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trade-list-usd-routing.module */ "./src/app/trade-list-usd/trade-list-usd-routing.module.ts");
/* harmony import */ var _trade_list_usd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trade-list-usd.page */ "./src/app/trade-list-usd/trade-list-usd.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let TradeListUsdPageModule = class TradeListUsdPageModule {
};
TradeListUsdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _trade_list_usd_routing_module__WEBPACK_IMPORTED_MODULE_5__["TradeListUsdPageRoutingModule"]
        ],
        declarations: [_trade_list_usd_page__WEBPACK_IMPORTED_MODULE_6__["TradeListUsdPage"]]
    })
], TradeListUsdPageModule);



/***/ }),

/***/ "./src/app/trade-list-usd/trade-list-usd.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/trade-list-usd/trade-list-usd.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes blinker {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.SelectButtonColumn {\n  text-decoration: none;\n  padding: 5px 25px;\n  border: 1px solid #eefcce;\n  border-radius: 100px;\n  color: #779a20;\n  background-color: #eefcce;\n}\n\n.buttonColumn {\n  text-decoration: none;\n  padding: 5px 25px;\n  border: 1px solid #ededed;\n  border-radius: 100px;\n  color: #232000;\n}\n\nion-toolbar {\n  --border-width: 0 0 0px !important;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0px !important;\n}\n\n.hide {\n  display: none !important;\n}\n\n.inprocess {\n  background-color: rgba(0, 0, 0, 0.4) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC90cmFkZS1saXN0LXVzZC90cmFkZS1saXN0LXVzZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyYWRlLWxpc3QtdXNkL3RyYWRlLWxpc3QtdXNkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZDQUFBO1VBQUEscUNBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksVUFBQTtFQ0NOO0VESUU7SUFDSSxZQUFBO0VDRk47RURPRTtJQUNJLFVBQUE7RUNMTjtBQUNGOztBRFZBO0VBQ0k7SUFDSSxVQUFBO0VDQ047RURJRTtJQUNJLFlBQUE7RUNGTjtFRE9FO0lBQ0ksVUFBQTtFQ0xOO0FBQ0Y7O0FEVUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ1JKOztBRFlBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDVEo7O0FEWUE7RUFDSSxrQ0FBQTtBQ1RKOztBRFlBO0VBQ0ksa0NBQUE7QUNUSjs7QURZQTtFQUNJLHdCQUFBO0FDVEo7O0FEWUE7RUFDSSwrQ0FBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvdHJhZGUtbGlzdC11c2QvdHJhZGUtbGlzdC11c2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsaW5rX21lIHtcbiAgICBhbmltYXRpb246IGJsaW5rZXIgMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICA7XG5cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuXG4gICAgO1xuXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgO1xufVxuXG4uU2VsZWN0QnV0dG9uQ29sdW1uIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDI1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzgsIDI1MiwgMjA2LCAxKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBjb2xvcjogcmdiYSgxMTksIDE1NCwgMzIsIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyNTIsIDIwNiwgMSk7XG5cbn1cblxuLmJ1dHRvbkNvbHVtbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAyNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgY29sb3I6IHJnYmEoMzUsIDMyLCAwLCAxKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggIWltcG9ydGFudDtcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudFxufVxuXG4uaW5wcm9jZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCkgIWltcG9ydGFudDtcbn0iLCIuYmxpbmtfbWUge1xuICBhbmltYXRpb246IGJsaW5rZXIgMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uU2VsZWN0QnV0dG9uQ29sdW1uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHggMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZmNjZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGNvbG9yOiAjNzc5YTIwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmY2NlO1xufVxuXG4uYnV0dG9uQ29sdW1uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHggMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWRlZDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGNvbG9yOiAjMjMyMDAwO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW5wcm9jZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/trade-list-usd/trade-list-usd.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/trade-list-usd/trade-list-usd.page.ts ***!
  \*******************************************************/
/*! exports provided: TradeListUsdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeListUsdPage", function() { return TradeListUsdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _imageprev_imageprev_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imageprev/imageprev.page */ "./src/app/imageprev/imageprev.page.ts");






let TradeListUsdPage = class TradeListUsdPage {
    constructor(apiService, location, modalCtrl, navCtrl) {
        this.apiService = apiService;
        this.location = location;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.selectedTradeType = 'all';
        this.generateDate = (days) => {
            var someDate = new Date();
            var duration = days;
            someDate.setTime(someDate.getTime() + (duration * 24 * 60 * 60 * 1000));
            return (someDate.getDate() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear());
        };
        this.parseDate = (date) => {
            var someDate = new Date(date);
            // someDate.setTime(someDate.getTime() + (duration * 24 * 60 * 60 * 1000));
            return (someDate.getDate() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear());
        };
        this.navigateToDetailPage = (tradeDetail) => {
            this.navCtrl.navigateForward(['trade-usd-details', { tradeDetail: JSON.stringify(tradeDetail) }]);
        };
        var today = new Date();
        // this.mindate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        this.mindate = new Date(today.setDate(today.getDate() + 2)).toISOString();
        this.maxDate = today.setFullYear(today.getFullYear() + 2);
        this.lastDate = new Date(this.maxDate).toISOString();
        this.imagePre = this.apiService.imageUrl;
    }
    ngOnInit() {
        // this.getListBids();
    }
    ionViewDidEnter() {
        console.log("kjnkljonk");
        this.getListBids();
    }
    updateSelectedTradeType(selectedTrade) {
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
    // getListBids() {
    //   let userid = localStorage.getItem("id");
    //   this.apiService.presentLoader("Please wait...");
    //   this.apiService.getTrades(userid).then(
    //     (res: any) => {
    //       this.buyData = res.data[1];
    //       this.sellData = res.data[2];
    //       setTimeout(() => {
    //         this.apiService.dismissLoader();
    //       }, 1000);
    //     },
    //     (err: any) => {
    //       setTimeout(() => {
    //         this.apiService.dismissLoader();
    //       }, 1000);
    //     }
    //   );
    // }
    getListBids() {
        let userid = localStorage.getItem('id');
        this.apiService.presentLoader('Please wait');
        this.apiService.getHotDeals(userid).then((res) => {
            console.log("here");
            this.buyData = res.data;
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
    // back() {
    //   this.location.back();
    // }
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
    back() {
        this.location.back();
    }
    likeTrade(tradeId, $event) {
        $event.currentTarget.classList.add('hide');
        $event.currentTarget.parentNode.children[1].classList.remove('hide');
        let postedData = {
            tradeId: tradeId,
            userId: localStorage.getItem('id')
        };
        this.apiService.likeTrade(postedData).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }
};
TradeListUsdPage.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
TradeListUsdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trade-list-usd',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trade-list-usd.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trade-list-usd/trade-list-usd.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trade-list-usd.page.scss */ "./src/app/trade-list-usd/trade-list-usd.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], TradeListUsdPage);



/***/ })

}]);
//# sourceMappingURL=trade-list-usd-trade-list-usd-module-es2015.js.map