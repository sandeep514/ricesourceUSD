(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row class=\"ion-no-padding footer-tabs\">\n\t<ion-col class=\"ion-no-padding\">\n\t\t<div class=\"example1\" style=\"background: #92B243;padding-top: 2px;height: 25px;\">\n\t\t\t<!-- <h3 style=\"color:#fff;white-space: nowrap;width: 100%;\">{{news}} </h3> -->\n\t\t\t<!-- <h3 style=\"color: #fff;white-space: nowrap;\" [ngStyle]='{ width : newsWidth }'>{{news}} </h3> -->\n\t\t\t<!-- <marquee behavior=\"scroll\" direction=\"right\" style=\"color: red\"></marquee> -->\n\t\t\t<p class=\"marquee\">\n\t\t\t\t<span style=\"color: #fff;\">{{news}}</span>\n\t\t\t</p>\n\t\t</div>\n\t\t<ion-row class=\"tabs-row\">\n\t\t\t<ng-container *ngIf=\"apptype == 'OTHER' \">\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo((apptype != 'USD')? 'prices' :'priceusd' )\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/liveprice.svg\" *ngIf=\"apptype != 'USD'\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t\t<img src=\"../../assets/menu/livePriceUSD.svg\" *ngIf=\"apptype == 'USD'\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Live Prices</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo('buy-inr')\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/buy.svg\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Buy</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='goTo(\"trade-inr-list\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/trade.svg\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Trade</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='goTo(\"selling-inr\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/chat.svg\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Sell</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='goTo(\"brands\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/brand.svg\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Brand</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='openModel()'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/menu.svg\" style=\"width: auto; height: 100%;padding: 7px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Menu</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t</ng-container>\n\t\t\t<ng-container *ngIf=\"apptype == 'USD' && seledctedRole == 5\">\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo((apptype != 'USD')? 'prices' :'priceusd' )\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<!-- <img src=\"../../assets/menu/live prices.png\" *ngIf=\"apptype != 'USD'\" />\n\t\t\t\t\t<img src=\"../../assets/menu/doller.png\" /> -->\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/liveprice.svg\" *ngIf=\"apptype != 'USD'\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t\t<img src=\"../../assets/menu/livePriceUSD.svg\" *ngIf=\"apptype == 'USD'\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Live Prices</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo('oceanfreights')\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/oceanfreight.svg\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Ocean Freight</h5>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='goTo(\"buy\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img style=\"width: auto; height: 100%;padding: 5px;\" src=\"../../assets/menu/buy.svg\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Buy </h5>\n\t\t\t\t</ion-col>\n\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='goTo(\"trade-list-usd\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/trade.svg\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Trade</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<!-- <ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\" isCurrentUser == 'false' \" (click)='goTo(\"gallery\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/gallery.png\" />\n\t\t\t\t\t<h5>Gallery</h5>\n\t\t\t\t</ion-col> -->\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo('otherservices')\" menuToggle>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/otherservices.svg\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Services</h5>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='openModel()'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/menu.svg\" style=\"width: auto; height: 100%;padding: 7px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Menu</h5>\n\t\t\t\t</ion-col>\n\t\t\t</ng-container>\n\t\t\t<ng-container\n\t\t\t\t*ngIf=\"apptype == 'USD' && seledctedRole == 4 || apptype == 'USD' && seledctedRole == 6 || apptype == 'USD' && seledctedRole == 7  \">\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo((apptype != 'USD')? 'prices' :'priceusd' )\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<!-- <img src=\"../../assets/menu/live prices.png\" *ngIf=\"apptype != 'USD'\" />\n\t\t\t\t\t<img src=\"../../assets/menu/doller.png\" *ngIf=\"apptype == 'USD'\" /> -->\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/liveprice.svg\" *ngIf=\"apptype != 'USD'\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t\t<img src=\"../../assets/menu/livePriceUSD.svg\" *ngIf=\"apptype == 'USD'\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Live Prices</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo('oceanfreights')\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/oceanfreight.svg\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Ocean Freight</h5>\n\t\t\t\t</ion-col>\n\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='goTo(\"calculator\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/calculator.png\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Calculator</h5>\n\t\t\t\t</ion-col>\n\n\n\n\t\t\t\t<!-- <ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\" isCurrentUser == 'false' \" (click)='goTo(\"gallery\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/gallery.png\" />\n\t\t\t\t\t<h5>Gallery</h5>\n\t\t\t\t</ion-col> -->\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='goToBids()'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/offers.png\" style=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Offer</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)=\"goTo('otherservices')\" menuToggle>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/otherservices.svg\"\n\t\t\t\t\t\t\tstyle=\"width: auto; height: 100%;padding: 5px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Services</h5>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col style=\"padding: 0px;\" class=\"tab-icon ion-activatable ripple-parent\" align=\"center\"\n\t\t\t\t\t(click)='openModel()'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<div style=\"width: 100%;height: 35px; \">\n\t\t\t\t\t\t<img src=\"../../assets/menu/menu.svg\" style=\"width: auto; height: 100%;padding: 7px;\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>Menu</h5>\n\t\t\t\t</ion-col>\n\t\t\t</ng-container>\n\n\t\t</ion-row>\n\t\t<button style=\"display: none;\" id=\"clickButton\" (click)=\"updateNotification()\">kjhnj</button>\n\t\t<button style=\"display: none;\" id=\"clickButtonforPayment\" (click)=\"clickButtonforPayment()\">kjhnj</button>\n\t</ion-col>\n</ion-row>");

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        exports: [
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]
        ],
        entryComponents: []
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-tabs {\n  position: fixed;\n  height: 90px;\n  bottom: -8px;\n  width: 100%;\n  z-index: 9999999;\n  background-color: #fffbd6;\n  padding-top: 0px;\n}\n\n.tab-icon img {\n  width: 25px;\n}\n\n.tab-icon h5 {\n  margin: 0px;\n  font-size: 9.9px;\n  color: #5f5f5f;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.truck {\n  width: 53px !important;\n  margin-top: 5px !important;\n}\n\n.unseenmessage {\n  position: absolute;\n  top: 5px;\n  border-radius: 100%;\n  width: 15px;\n  background: #92B243;\n  color: #FFFBD6;\n  font-size: 0px;\n  height: 15px;\n}\n\n.marquee {\n  margin: 0 auto;\n  white-space: nowrap;\n  overflow: hidden;\n  position: absolute;\n}\n\n.marquee span {\n  display: inline-block;\n  padding-left: 20%;\n  -webkit-animation: marquee 40s linear infinite;\n          animation: marquee 40s linear infinite;\n}\n\n.marquee2 span {\n  -webkit-animation-delay: 10s;\n          animation-delay: 10s;\n}\n\n@-webkit-keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n\n@keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNJLFdBQUE7QUNBUjs7QURHSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNEUjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDRko7O0FETUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0hKOztBRE1BO0VBQ0ksNEJBQUE7VUFBQSxvQkFBQTtBQ0hKOztBRE1BO0VBQ0k7SUFDSSwwQkFBQTtFQ0hOO0VETUU7SUFDSSw4QkFBQTtFQ0pOO0FBQ0Y7O0FESEE7RUFDSTtJQUNJLDBCQUFBO0VDSE47RURNRTtJQUNJLDhCQUFBO0VDSk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItdGFicyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogOTBweDtcbiAgICBib3R0b206IC04cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTk5OTk5OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmQ2O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi50YWItaWNvbiB7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgfVxuXG4gICAgaDUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiA5LjlweDtcbiAgICAgICAgY29sb3I6ICM1ZjVmNWY7XG4gICAgfVxufVxuXG4ucmlwcGxlLXBhcmVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50cnVjayB7XG4gICAgd2lkdGg6IDUzcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLnVuc2Vlbm1lc3NhZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gICAgY29sb3I6ICNGRkZCRDY7XG4gICAgZm9udC1zaXplOiAwcHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xufVxuXG5cbi5tYXJxdWVlIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubWFycXVlZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XG4gICAgYW5pbWF0aW9uOiBtYXJxdWVlIDQwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5tYXJxdWVlMiBzcGFuIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDEwcztcbn1cblxuQGtleWZyYW1lcyBtYXJxdWVlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XG4gICAgfVxufSIsIi5mb290ZXItdGFicyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3R0b206IC04cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk5OTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmQ2O1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4udGFiLWljb24gaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG59XG4udGFiLWljb24gaDUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiA5LjlweDtcbiAgY29sb3I6ICM1ZjVmNWY7XG59XG5cbi5yaXBwbGUtcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udHJ1Y2sge1xuICB3aWR0aDogNTNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLnVuc2Vlbm1lc3NhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MztcbiAgY29sb3I6ICNGRkZCRDY7XG4gIGZvbnQtc2l6ZTogMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi5tYXJxdWVlIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm1hcnF1ZWUgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XG4gIGFuaW1hdGlvbjogbWFycXVlZSA0MHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4ubWFycXVlZTIgc3BhbiB7XG4gIGFuaW1hdGlvbi1kZWxheTogMTBzO1xufVxuXG5Aa2V5ZnJhbWVzIG1hcnF1ZWUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components.service */ "./src/app/components.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let MenuComponent = class MenuComponent {
    constructor(compSer, navCtrl, menuCtrl, restApi, ModelCtrl, toastCtrl, router) {
        this.compSer = compSer;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.restApi = restApi;
        this.ModelCtrl = ModelCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.hasMessage = 0;
        this.isUserExpire = 'true';
        this.isCurrentUser = 'false';
        this.newsWidth = '100%';
        this.route = this.router.url;
        this.getNewsRunner();
        this.compSer.hasMessage.subscribe((data) => {
            if (data == 1) {
                // this.hasMessage = 1;
                document.getElementById('clickButton').click();
            }
            else {
                this.hasMessage = 0;
            }
        });
        this.compSer.isUserExpired.subscribe((res) => {
            this.isUserExpire = res;
            if (document.getElementById('clickButtonforPayment') != undefined) {
                document.getElementById('clickButtonforPayment').click();
            }
            if (localStorage.getItem('apptype') == 'USD') {
                this.apptype = localStorage.getItem('apptype');
                this.seledctedRole = localStorage.getItem('usd_role');
            }
            else {
                this.apptype = localStorage.getItem('apptype');
                this.seledctedRole = localStorage.getItem('role');
            }
            console.log(this.seledctedRole);
            console.log(this.apptype);
            // this.getNewsRunner()
        });
        this.getChatStatus();
        setTimeout(() => {
            this.apptype = localStorage.getItem('apptype');
            console.log(this.apptype);
        }, 1000);
    }
    ionViewDidEnter() {
        this.apptype = localStorage.getItem('apptype');
        console.log(this.apptype);
    }
    updateNotification() {
        this.hasMessage = this.hasMessage + 1;
    }
    ngOnInit() {
        if (localStorage.getItem('apptype') == 'USD') {
            this.seledctedRole = localStorage.getItem('usd_role');
        }
        else {
            this.seledctedRole = localStorage.getItem('role');
        }
    }
    showChatUnavailableModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let presentToast = yield this.toastCtrl.create({
                message: "No chat executive is available right now , Please contact later.",
                duration: 4000,
                position: 'bottom'
            });
            presentToast.present();
        });
    }
    goTo(page) {
        // this.compSer.compareTwoDates(localStorage.getItem('expired_on'));
        if (localStorage.getItem('apptype') == 'OTHER') {
            this.navCtrl.navigateRoot(page, { animationDirection: 'forward' });
        }
        else {
            if (localStorage.getItem('isExpired') == 'false') {
                this.navCtrl.navigateRoot(page, { animationDirection: 'forward' });
            }
            else {
                this.navCtrl.navigateRoot('planpage', { animationDirection: 'forward' });
            }
        }
        if (localStorage.getItem('transaction_id') == undefined || localStorage.getItem('transaction_id') == null) {
        }
        else {
        }
    }
    clickButtonforPayment() {
        this.isCurrentUser = this.isUserExpire;
    }
    goToBids() {
        this.navCtrl.navigateForward('mybids');
    }
    goToChat() {
        this.restApi.getChatStatus().then((res) => {
            this.chatStatus = res.data;
            this.chat();
        }, (err) => {
        });
    }
    openModel() {
        this.compSer.reRenderSideMenu.next();
        this.menuCtrl.enable(true);
        this.menuCtrl.open();
    }
    chat() {
        this.navCtrl.navigateForward(['chat-detail']);
    }
    getChatStatus() {
        this.restApi.getChatStatus().then((res) => {
            this.chatStatus = res.data;
        }, (err) => {
        });
    }
    getChatCount() {
        this.restApi.getChatCount().then((res) => {
            this.hasMessage = res.data;
        }, (err) => {
        });
    }
    getNewsRunner() {
        this.restApi.getNewsRunner().then((res) => {
            console.log(this.apptype);
            console.log(res.data);
            if (localStorage.getItem('apptype') == 'USD') {
                this.news = res.data['usd'][0].title;
                this.newsWidth = (this.news.length * 7.5) + 'px';
            }
            else {
                this.news = res.data['inr'][0].title;
                this.newsWidth = (this.news.length * 7.5) + 'px';
            }
        }, (err) => {
        });
    }
    showPaymentModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.compSer.showPaymentModal.next();
        });
    }
};
MenuComponent.ctorParameters = () => [
    { type: _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], MenuComponent);



/***/ })

}]);
//# sourceMappingURL=default~about-about-module~aboutus-aboutus-module~bid-bid-module~brand-details-brand-details-module~~d00823e0-es2015.js.map