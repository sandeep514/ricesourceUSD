(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome1-welcome1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome1/welcome1.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome1/welcome1.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\t<div class=\"body\">\n\t\t<div style=\"height: 100%;\">\n\t\t\t<div style=\"height: 55%;padding-top: 20px;\">\n\t\t\t\t<div>\n\t\t\t\t\t<img src=\"../../assets/welcome1icon.png\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div style=\"padding-left: 20px;\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p style=\"font-family: 'Poppins-Bold';font-size: 22px;padding:0px;margin: 0px\">Real Time</p>\n\t\t\t\t\t\t<p style=\"font-family: 'Poppins-Regular';font-size: 22px;padding:0px;margin: 0px\">Indian Basmati And\n\t\t\t\t\t\t\tNon-Basmati</p>\n\t\t\t\t\t\t<p style=\"font-family: 'Poppins-Bold';font-size: 22px;padding:0px;margin: 0px\">Rice Prices</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div style=\"margin-top: 20px;\">\n\t\t\t\t\t\t\t<div class=\"roundNextButton\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"arrow-forward-outline\"\n\t\t\t\t\t\t\t\t\tstyle=\"height: 73px;font-size: 25px;color: #fff;    text-align: center;\"></ion-icon>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div style=\"height: 45%; background-image: url('../../assets/welcome1Image.png');background-repeat: no-repeat;background-size: cover;background-position: top;\">\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/welcome1/welcome1-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/welcome1/welcome1-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: Welcome1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Welcome1PageRoutingModule", function() { return Welcome1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome1.page */ "./src/app/welcome1/welcome1.page.ts");




const routes = [
    {
        path: '',
        component: _welcome1_page__WEBPACK_IMPORTED_MODULE_3__["Welcome1Page"]
    }
];
let Welcome1PageRoutingModule = class Welcome1PageRoutingModule {
};
Welcome1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Welcome1PageRoutingModule);



/***/ }),

/***/ "./src/app/welcome1/welcome1.module.ts":
/*!*********************************************!*\
  !*** ./src/app/welcome1/welcome1.module.ts ***!
  \*********************************************/
/*! exports provided: Welcome1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Welcome1PageModule", function() { return Welcome1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _welcome1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome1-routing.module */ "./src/app/welcome1/welcome1-routing.module.ts");
/* harmony import */ var _welcome1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome1.page */ "./src/app/welcome1/welcome1.page.ts");







let Welcome1PageModule = class Welcome1PageModule {
};
Welcome1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _welcome1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Welcome1PageRoutingModule"]
        ],
        declarations: [_welcome1_page__WEBPACK_IMPORTED_MODULE_6__["Welcome1Page"]]
    })
], Welcome1PageModule);



/***/ }),

/***/ "./src/app/welcome1/welcome1.page.scss":
/*!*********************************************!*\
  !*** ./src/app/welcome1/welcome1.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  background-color: #FFFBD6;\n  background: #FFFBD6;\n  --background-color: #FFFBD6;\n  --background: #FFFBD6;\n  width: 100%;\n  height: 100%;\n}\n\n.roundNextButton {\n  height: 73px;\n  width: 73px;\n  background-color: #91B243;\n  border-radius: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC93ZWxjb21lMS93ZWxjb21lMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3dlbGNvbWUxL3dlbGNvbWUxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lMS93ZWxjb21lMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkQ2O1xuICAgIGJhY2tncm91bmQ6ICNGRkZCRDY7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkQ2O1xuICAgIC0tYmFja2dyb3VuZDogI0ZGRkJENjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCVcbn1cbi5yb3VuZE5leHRCdXR0b257XG4gICAgaGVpZ2h0OiA3M3B4O1xuICAgIHdpZHRoOiA3M3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MUIyNDM7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkQ2O1xuICBiYWNrZ3JvdW5kOiAjRkZGQkQ2O1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNGRkZCRDY7XG4gIC0tYmFja2dyb3VuZDogI0ZGRkJENjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJvdW5kTmV4dEJ1dHRvbiB7XG4gIGhlaWdodDogNzNweDtcbiAgd2lkdGg6IDczcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MUIyNDM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/welcome1/welcome1.page.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome1/welcome1.page.ts ***!
  \*******************************************/
/*! exports provided: Welcome1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Welcome1Page", function() { return Welcome1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Welcome1Page = class Welcome1Page {
    constructor() { }
    ngOnInit() {
    }
};
Welcome1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome1/welcome1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome1.page.scss */ "./src/app/welcome1/welcome1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Welcome1Page);



/***/ })

}]);
//# sourceMappingURL=welcome1-welcome1-module-es2015.js.map