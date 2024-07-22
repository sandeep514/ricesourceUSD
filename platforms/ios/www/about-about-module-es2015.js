(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\t<ion-row>\n\t\t<ion-col align=\"center\" class=\"logo-col\">\n\t\t\t<img src=\"../../assets/SNTC LOGO (1).png\" />\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col align=\"center\" class=\"sntc-details\">\n\t\t\t<h1>SNTC</h1>\n\t\t\t<small>Your rice sourcing partners!</small>\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium eleifend mollis. Duis suscipit non elit id aliquam. Vivamus mattis vitae erat sit amet finibus. Suspendisse tristique facilisis viverra. Nunc convallis blandit magna, a consectetur erat pellentesque eget. Proin cursus tortor quis tempor pulvinar. Proin bibendum felis mauris, at luctus tellus sagittis a. Nam id dapibus magna, a semper nulla. Quisque eu vestibulum lectus, sit amet porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec justo a nisi consequat vehicula. Curabitur facilisis sed dolor varius imperdiet. Sed eget consequat diam, quis egestas nulla.</p>\n\t\t</ion-col>\n\t</ion-row>\n\t<app-menu></app-menu>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let AboutPageModule = class AboutPageModule {
};
AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-col img {\n  width: 223px;\n  margin-top: 91px;\n}\n\nion-content {\n  --background: url('login-bg.jpg') no-repeat center/cover fixed;\n}\n\n.sntc-details h1 {\n  font-size: 40px;\n}\n\n.sntc-details small {\n  font-size: 14px;\n}\n\n.sntc-details p {\n  text-align: justify;\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQVI7O0FESUE7RUFDSSw4REFBQTtBQ0RKOztBREtJO0VBQ0ksZUFBQTtBQ0ZSOztBREtJO0VBQ0ksZUFBQTtBQ0hSOztBREtJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1jb2x7XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMjIzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDkxcHg7XG4gICAgfVxufVxuXG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ2luLWJnLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7XG59XG5cbi5zbnRjLWRldGFpbHN7XG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB9XG5cbiAgICBzbWFsbHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbn0iLCIubG9nby1jb2wgaW1nIHtcbiAgd2lkdGg6IDIyM3B4O1xuICBtYXJnaW4tdG9wOiA5MXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2xvZ2luLWJnLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xufVxuXG4uc250Yy1kZXRhaWxzIGgxIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuLnNudGMtZGV0YWlscyBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zbnRjLWRldGFpbHMgcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmc6IDE2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutPage = class AboutPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutPage);



/***/ })

}]);
//# sourceMappingURL=about-about-module-es2015.js.map