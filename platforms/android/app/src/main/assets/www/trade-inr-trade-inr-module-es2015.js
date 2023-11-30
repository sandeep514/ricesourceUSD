(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trade-inr-trade-inr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trade-inr/trade-inr.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trade-inr/trade-inr.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"green\">\n\t<ion-toolbar mode=\"ios\" style=\"background: transparent; --background: transparent\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Trade</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content id=\"content\" class=\"lightgreen\" style=\"height: 100%;\">\n\t<div style=\"height: 90%;overflow: scroll;\">\n\t\t<div>\n\t\t\t<ul style=\"padding: 10px;\">\n\t\t\t\t<li *ngFor=\"let bids of mybids\" class=\"demandedData\" style=\"border-bottom: 2px solid #ededed;\">\n\t\t\t\t\t<div\n\t\t\t\t\t\tstyle=\"margin: 0;border: 3px solid #92b243;border-radius: 20px;margin-bottom: 20px;overflow: hidden;\">\n\t\t\t\t\t\t<ion-row style=\"background: #92b243;\">\n\t\t\t\t\t\t\t<ion-col size=\"10\">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\tstyle=\"margin: 0px;color: #fffbd6;padding: 10px 0px;font-weight: bold;margin-left: 10px;\">\n\t\t\t\t\t\t\t\t\tTRADE-{{ (bids?.id + 1) }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"2\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px;color: #fffbd6;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"bids?.tradeType == 1\"\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"(bids?.tradeType == 1)?{'background-color': 'green'} : {'background-color': '#324ab2'}\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 5px 10px;margin-top: 5px;border-radius: 5px;\">Sell</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"bids?.tradeType == 2\"\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"(bids?.tradeType == 1)?{'background-color': 'green'} : {'background-color': '#324ab2'}\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 5px 10px;margin-top: 5px;border-radius: 5px;\">Buy</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Rice</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t{{ bids?.rice_quality_master.quality }} {{ bids?.rice_form_milestone3.name }} {{\n\t\t\t\t\t\t\t\t\tbids?.rice_grade.get_wand_type[0].type }}\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"bids?.quality_type == 1 \"> Basmati Rice</ng-container>\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"bids?.quality_type == 2 \"> Non-Basmati Rice</ng-container>\n\t\t\t\t\t\t\t\t\t({{ bids?.rice_grade.value }})\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<!-- <ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Rice Form</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t{{ bids?.rice_form_milestone3.name }} \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Grade</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t{{ bids?.rice_grade.get_wand_type[0].type }}:\n\t\t\t\t\t\t\t\t\t{{ bids?.rice_grade.value }} \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row> -->\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Packing</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t{{ bids?.rice_packing.packing }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Quantity(MT)</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t{{ bids?.quantity }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Price (PMT)\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t₹{{ bids?.offerPrice }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Ex-Warehouse</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px;text-transform: capitalize;\">\n\t\t\t\t\t\t\t\t\t{{ bids?.location }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Validity</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t{{ generateDate(bids?.validDays) }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"6\"\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/{{ bids?.cooked_file }}\"\n\t\t\t\t\t\t\t\t\tstyle=\"width: 190px;height: 130px;padding: 0 5px;\" alt=\"cooked\"\n\t\t\t\t\t\t\t\t\t(click)=\"openModal(imagePre+'uploads/'+bids?.cooked_file)\"\n\t\t\t\t\t\t\t\t\tonerror=\"this.src='../../assets/img/No_image_available.svg.png';\">\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"6\"\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/{{ bids?.uncooked_file }}\"\n\t\t\t\t\t\t\t\t\tstyle=\"width: 190px;height: 130px;padding: 0 5px;\" alt=\"cooked\"\n\t\t\t\t\t\t\t\t\t(click)=\"openModal(imagePre+'uploads/'+bids?.uncooked_file)\"\n\t\t\t\t\t\t\t\t\tonerror=\"this.src='../../assets/img/No_image_available.svg.png';\">\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row *ngIf=\"bids?.status == 3 && bids?.status == '3'\">\n\t\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row *ngIf=\"bids?.status == 2 && bids?.status == '3'\">\n\t\t\t\t\t\t\t<ion-col size=\"12\"\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;\">\n\t\t\t\t\t\t\t\t<!-- Deal is taken -->\n\t\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<div style=\"text-align: center;padding: 10px;background: #92b243;\">\n\t\t\t\t\t\t\t<div class=\"blink_me\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"call-outline\" style=\"color: #fff;\"></ion-icon>\n\t\t\t\t\t\t\t\t<a href=\"tel:+919877092004\" class=\"contactuser\"\n\t\t\t\t\t\t\t\t\tstyle=\"text-decoration: none;background: #92b243;color: #ffff;font-weight: bold;font-size: 17px;margin-left: 5px;\">Call\n\t\t\t\t\t\t\t\t\tSNTC</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/trade-inr/trade-inr-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/trade-inr/trade-inr-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TradeINRPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeINRPageRoutingModule", function() { return TradeINRPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trade_inr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trade-inr.page */ "./src/app/trade-inr/trade-inr.page.ts");




const routes = [
    {
        path: '',
        component: _trade_inr_page__WEBPACK_IMPORTED_MODULE_3__["TradeINRPage"]
    }
];
let TradeINRPageRoutingModule = class TradeINRPageRoutingModule {
};
TradeINRPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TradeINRPageRoutingModule);



/***/ }),

/***/ "./src/app/trade-inr/trade-inr.module.ts":
/*!***********************************************!*\
  !*** ./src/app/trade-inr/trade-inr.module.ts ***!
  \***********************************************/
/*! exports provided: TradeINRPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeINRPageModule", function() { return TradeINRPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _trade_inr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trade-inr-routing.module */ "./src/app/trade-inr/trade-inr-routing.module.ts");
/* harmony import */ var _trade_inr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trade-inr.page */ "./src/app/trade-inr/trade-inr.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let TradeINRPageModule = class TradeINRPageModule {
};
TradeINRPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _trade_inr_routing_module__WEBPACK_IMPORTED_MODULE_5__["TradeINRPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ],
        declarations: [_trade_inr_page__WEBPACK_IMPORTED_MODULE_6__["TradeINRPage"]],
    })
], TradeINRPageModule);



/***/ }),

/***/ "./src/app/trade-inr/trade-inr.page.scss":
/*!***********************************************!*\
  !*** ./src/app/trade-inr/trade-inr.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes blinker {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC90cmFkZS1pbnIvdHJhZGUtaW5yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHJhZGUtaW5yL3RyYWRlLWluci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2Q0FBQTtVQUFBLHFDQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLFVBQUE7RUNDTjtFRENFO0lBQ0ksWUFBQTtFQ0NOO0VEQ0U7SUFDSSxVQUFBO0VDQ047QUFDRjs7QURWQTtFQUNJO0lBQ0ksVUFBQTtFQ0NOO0VEQ0U7SUFDSSxZQUFBO0VDQ047RURDRTtJQUNJLFVBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdHJhZGUtaW5yL3RyYWRlLWluci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxpbmtfbWUge1xuICAgIGFuaW1hdGlvbjogYmxpbmtlciAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmtlciB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH07XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH07XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfTtcbn0iLCIuYmxpbmtfbWUge1xuICBhbmltYXRpb246IGJsaW5rZXIgMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/trade-inr/trade-inr.page.ts":
/*!*********************************************!*\
  !*** ./src/app/trade-inr/trade-inr.page.ts ***!
  \*********************************************/
/*! exports provided: TradeINRPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeINRPage", function() { return TradeINRPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _imageprev_imageprev_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imageprev/imageprev.page */ "./src/app/imageprev/imageprev.page.ts");






let TradeINRPage = class TradeINRPage {
    constructor(apiService, location, modalCtrl) {
        this.apiService = apiService;
        this.location = location;
        this.modalCtrl = modalCtrl;
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
            console.log('res 67');
            console.log(res);
            this.mybids = res.data;
            console.log(res);
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
TradeINRPage.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
TradeINRPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-trade-inr",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trade-inr.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trade-inr/trade-inr.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trade-inr.page.scss */ "./src/app/trade-inr/trade-inr.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], TradeINRPage);



/***/ })

}]);
//# sourceMappingURL=trade-inr-trade-inr-module-es2015.js.map