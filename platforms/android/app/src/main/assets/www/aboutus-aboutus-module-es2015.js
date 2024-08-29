(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aboutus-aboutus-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"\">\n\n\n\t<div style=\"height: 90%;overflow: scroll;\">\n\t\t<div class=\"header-container\">\n\t\t\t<div class=\"\"></div>\n\t\t\t<div class=\"\">\n\t\t\t\t<div style=\"margin-top: 0px;text-align: center;\">\n\t\t\t\t\t<ion-row style=\"margin: 30px 0px;\">\n\t\t\t\t\t\t<ion-col style=\"text-align: left;padding-left: 20px;\" (click)=\"gotohome()\">\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-back-outline\" style=\"font-size: 20px;\"></ion-icon>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<h1 class=\"\" style=\"color: #000;font-size: 16px;margin: 0px;padding: 0px;\">About Us</h1>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<p><strong>Who Are We?</strong></p>\n\t\t\t\t<p>We are your rice sourcing and branding partner that connects like-minded buyers and suppliers and\n\t\t\t\t\thelps meet\n\t\t\t\t\ttheir demands by acting as an intermediary between the two.</p>\n\t\t\t\t<p>We pride ourselves as the industry leaders in bulk rice sourcing, branding, packaging and PAN India\n\t\t\t\t\tNetworking of both Basmati and Non Basmati rice in India.</p>\n\t\t\t\t<p>We provide you with true and reliable market insights about live rice pricing, rice quotes, and offer\n\t\t\t\t\ta 360\n\t\t\t\t\tdegree outlook on all your rice needs.</p>\n\t\t\t\t<p><strong>Our Services-</strong></p>\n\t\t\t\t<p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Live Rice Pricing</li>\n\t\t\t\t\t<li>Bulk Rice Sourcing (Basmati and Non-Basmati)</li>\n\t\t\t\t\t<li>PAN India freight charges</li>\n\t\t\t\t\t<li>Rice Branding & Packaging</li>\n\t\t\t\t\t<li>Market Insights</li>\n\t\t\t\t\t<li>Professional Guidance</li>\n\t\t\t\t\t<li>Personalization</li>\n\t\t\t\t</ul>\n\t\t\t\t<p>Our mission is to create a reliable and trustworthy environment for both buyers and sellers by\n\t\t\t\t\tproviding them\n\t\t\t\t\texceptional services in the field of bulk rice sourcing and branding.</p>\n\t\t\t\t<p><strong>Our Legacy-</strong></p>\n\t\t\t\t<p>SNTC is your rice sourcing and branding partner that connects like-minded buyers and suppliers and\n\t\t\t\t\thelps meet\n\t\t\t\t\ttheir rice demands by acting as an intermediary between the two. Our story originated from the year\n\t\t\t\t\t1942\n\t\t\t\t\twhen the earliest generation of the family arrived in Amritsar, India with a vision to mark a strong\n\t\t\t\t\tpresence in the rice industry. The company transformed into Shree Nath Jee Trading Company (SNTC) in\n\t\t\t\t\tthe\n\t\t\t\t\tyear 1977. We pride ourselves as industry leaders in bulk rice sourcing, branding, international\n\t\t\t\t\tindenting,\n\t\t\t\t\tcustomised packaging and PAN India Network of both basmati and non-basmati buyers and suppliers. We\n\t\t\t\t\tprovide\n\t\t\t\t\tyou with true & reliable market insights about live rice pricing and best rice quotes.</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n\n\t<app-menu></app-menu>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/aboutus/aboutus-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/aboutus/aboutus-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AboutusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageRoutingModule", function() { return AboutusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutus.page */ "./src/app/aboutus/aboutus.page.ts");




const routes = [
    {
        path: '',
        component: _aboutus_page__WEBPACK_IMPORTED_MODULE_3__["AboutusPage"]
    }
];
let AboutusPageRoutingModule = class AboutusPageRoutingModule {
};
AboutusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutusPageRoutingModule);



/***/ }),

/***/ "./src/app/aboutus/aboutus.module.ts":
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.module.ts ***!
  \*******************************************/
/*! exports provided: AboutusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function() { return AboutusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutus-routing.module */ "./src/app/aboutus/aboutus-routing.module.ts");
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aboutus.page */ "./src/app/aboutus/aboutus.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let AboutusPageModule = class AboutusPageModule {
};
AboutusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutusPageRoutingModule"]
        ],
        declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_6__["AboutusPage"]]
    })
], AboutusPageModule);



/***/ }),

/***/ "./src/app/aboutus/aboutus.page.scss":
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  text-align: justify;\n  padding: 0 13px;\n  margin: 0px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9hYm91dHVzL2Fib3V0dXMucGFnZS5zY3NzIiwic3JjL2FwcC9hYm91dHVzL2Fib3V0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hYm91dHVzL2Fib3V0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHBhZGRpbmc6IDAgMTNweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSIsInAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nOiAwIDEzcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/aboutus/aboutus.page.ts":
/*!*****************************************!*\
  !*** ./src/app/aboutus/aboutus.page.ts ***!
  \*****************************************/
/*! exports provided: AboutusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPage", function() { return AboutusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let AboutusPage = class AboutusPage {
    constructor(location, navCtrl) {
        this.location = location;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    gotohome() {
        if (localStorage.getItem("usd_role") != "0" &&
            localStorage.getItem("is_usd_active") != "0" &&
            localStorage.getItem("isExpiryUSD") == "false") {
            localStorage.setItem("apptype", "USD");
            this.navCtrl.navigateForward(["priceusd"]);
        }
        else {
            localStorage.setItem("apptype", "OTHER");
            this.navCtrl.navigateForward(["prices"]);
        }
    }
};
AboutusPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
AboutusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-aboutus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aboutus.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aboutus.page.scss */ "./src/app/aboutus/aboutus.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], AboutusPage);



/***/ })

}]);
//# sourceMappingURL=aboutus-aboutus-module-es2015.js.map