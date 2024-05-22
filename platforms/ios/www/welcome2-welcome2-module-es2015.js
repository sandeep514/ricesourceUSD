(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome2-welcome2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome2/welcome2.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome2/welcome2.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"body\">\n    <div style=\"height: 100%;\">\n      <div style=\"height: 55%;padding-top: 20px;\">\n        <div>\n          <img src=\"../../assets/welcome1icon.png\" />\n        </div>\n\n        <div style=\"padding-left: 20px;\">\n          <div>\n            <p style=\"font-family: 'Poppins-Bold';font-size: 22px;padding:0px;margin: 0px\"><span style=\"font-family: 'Poppins-Regular';\">Trusted</span> B2B</p>\n            <p style=\"font-family: 'Poppins-Regular';font-size: 22px;padding:0px;margin: 0px\"><span style=\"font-family: 'Poppins-Bold';\">Platform</span> for Buying and Selling Indian varieties of Rice</p>\n          </div>\n          <div>\n            <div style=\"margin-top: 20px;\">\n              <div class=\"roundNextButton\">\n                <ion-icon name=\"arrow-forward-outline\"\n                  style=\"height: 73px;font-size: 25px;color: #fff;    text-align: center;\"></ion-icon>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div\n        style=\"height: 45%; background-image: url('../../assets/welcome2image.png');background-repeat: no-repeat;background-size: cover;background-position: top;\">\n\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/welcome2/welcome2-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/welcome2/welcome2-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: Welcome2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Welcome2PageRoutingModule", function() { return Welcome2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome2.page */ "./src/app/welcome2/welcome2.page.ts");




const routes = [
    {
        path: '',
        component: _welcome2_page__WEBPACK_IMPORTED_MODULE_3__["Welcome2Page"]
    }
];
let Welcome2PageRoutingModule = class Welcome2PageRoutingModule {
};
Welcome2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Welcome2PageRoutingModule);



/***/ }),

/***/ "./src/app/welcome2/welcome2.module.ts":
/*!*********************************************!*\
  !*** ./src/app/welcome2/welcome2.module.ts ***!
  \*********************************************/
/*! exports provided: Welcome2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Welcome2PageModule", function() { return Welcome2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _welcome2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome2-routing.module */ "./src/app/welcome2/welcome2-routing.module.ts");
/* harmony import */ var _welcome2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome2.page */ "./src/app/welcome2/welcome2.page.ts");







let Welcome2PageModule = class Welcome2PageModule {
};
Welcome2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _welcome2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Welcome2PageRoutingModule"]
        ],
        declarations: [_welcome2_page__WEBPACK_IMPORTED_MODULE_6__["Welcome2Page"]]
    })
], Welcome2PageModule);



/***/ }),

/***/ "./src/app/welcome2/welcome2.page.scss":
/*!*********************************************!*\
  !*** ./src/app/welcome2/welcome2.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  background-color: #FFFBD6;\n  background: #FFFBD6;\n  --background-color: #FFFBD6;\n  --background: #FFFBD6;\n  width: 100%;\n  height: 100%;\n}\n\n.roundNextButton {\n  height: 73px;\n  width: 73px;\n  background-color: #91B243;\n  border-radius: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC93ZWxjb21lMi93ZWxjb21lMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3dlbGNvbWUyL3dlbGNvbWUyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lMi93ZWxjb21lMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJENjtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGQkQ2O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJENjtcbiAgICAtLWJhY2tncm91bmQ6ICNGRkZCRDY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlXG59XG5cbi5yb3VuZE5leHRCdXR0b24ge1xuICAgIGhlaWdodDogNzNweDtcbiAgICB3aWR0aDogNzNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTFCMjQzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIi5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJENjtcbiAgYmFja2dyb3VuZDogI0ZGRkJENjtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkQ2O1xuICAtLWJhY2tncm91bmQ6ICNGRkZCRDY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yb3VuZE5leHRCdXR0b24ge1xuICBoZWlnaHQ6IDczcHg7XG4gIHdpZHRoOiA3M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTFCMjQzO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/welcome2/welcome2.page.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome2/welcome2.page.ts ***!
  \*******************************************/
/*! exports provided: Welcome2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Welcome2Page", function() { return Welcome2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Welcome2Page = class Welcome2Page {
    constructor() { }
    ngOnInit() {
    }
};
Welcome2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome2/welcome2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome2.page.scss */ "./src/app/welcome2/welcome2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Welcome2Page);



/***/ })

}]);
//# sourceMappingURL=welcome2-welcome2-module-es2015.js.map