(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deleteaccount-deleteaccount-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deleteaccount/deleteaccount.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deleteaccount/deleteaccount.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"container\">\n    <div class=\"header-container\">\n\t\t<div class=\"\"></div>\n\t\t\t<div class=\"header green\">\n\t\t\t\t<!-- <ion-button (click)=\"showMenu()\" style=\"background-color: transparent;box-shadow: none;\">\n\t\t\t\t\t<ion-icon name=\"menu-outline\" style=\"font-size: 30px;\"></ion-icon>\n\t\t\t\t</ion-button> -->\n\t\t\t\t\t<ion-buttons slot=\"start\" style=\"color: #fff \" (click)='openModel()'>\n\t\t\t\t\t\t<img src=\"../../assets/menu/whitemenu.png\" style=\"width: 25px;margin-left: 10px;\" />\n\t\t\t\t\t\t<!-- Menu -->\n\t\t\t\t\t</ion-buttons>\n\n\t\t\t\t<div style=\"margin-top: 0px;\">\n\t\t\t\t\t<h1 class=\"main-heading font-30\">{{ name | uppercase }}</h1>\n\t\t\t\t\t<!-- <span class=\"tag\">{{ email }}</span> -->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"stats\">\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n    \n    \t<!-- <div class=\"overlay-header\"></div> -->\n    \n    \t<div class=\"body\">\n\t\t\t<div class=\"u-clearfix\"></div>\n\t\t\t<ion-row style=\"padding-top: 14px;clear: both;\" > \n\t\t\t\t<div style=\"text-align: center;\">\n\t\t\t\t\t<h5 style=\"width: 80%;margin: 0 auto;padding: 15px 0px\">Please let us know why you are leaving us.</h5>\n\t\t\t\t</div>\n\t\t\t\t<ul style=\"padding: 0;margin: 0;\">\n\t\t\t\t\t<li (click)=\"uninstallReason(reason.key)\" [ngClass]=\"(selectedReasonIndex == reason.key)? 'active' : '' \" *ngFor=\"let reason of reasons | keyvalue\">{{reason.value}}</li>\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t\t<ion-item size=\"12\">\n\t\t\t\t\t<ion-label position=\"floating\">Re-confirm Email / Mobile</ion-label>\n\t\t\t\t\t<ion-input [(ngModel)]=\"email\" name=\"email\"></ion-input>\n\t\t\t\t\t<img src=\"../../assets/svg/mail-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t\t</ion-item>\n\t\t\t\t\n\t\t\t\t<ion-col style=\"text-align: center;\">\n\t\t\t\t\t<ion-label style=\"font-size: 18px;\">{{ selectedCity }}</ion-label>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"12\" style=\"text-align: center;\">\n\t\t\t\t\t<ion-button style=\"--background: #92b243\" (click)=\"deleteAccount()\">Delete Account</ion-button>\n\t\t\t\t</ion-col>\t\n\t\t\t</ion-row>\n    \t</div>    \n  </div>\n</ion-content>\n<ion-footer>\n\t<ion-button expand=\"block\" class=\"footerbutton\" (click)=\"gotohome()\">Go to home</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/deleteaccount/deleteaccount-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/deleteaccount/deleteaccount-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DeleteaccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteaccountPageRoutingModule", function() { return DeleteaccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _deleteaccount_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteaccount.page */ "./src/app/deleteaccount/deleteaccount.page.ts");




const routes = [
    {
        path: '',
        component: _deleteaccount_page__WEBPACK_IMPORTED_MODULE_3__["DeleteaccountPage"]
    }
];
let DeleteaccountPageRoutingModule = class DeleteaccountPageRoutingModule {
};
DeleteaccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeleteaccountPageRoutingModule);



/***/ }),

/***/ "./src/app/deleteaccount/deleteaccount.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/deleteaccount/deleteaccount.module.ts ***!
  \*******************************************************/
/*! exports provided: DeleteaccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteaccountPageModule", function() { return DeleteaccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _deleteaccount_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deleteaccount-routing.module */ "./src/app/deleteaccount/deleteaccount-routing.module.ts");
/* harmony import */ var _deleteaccount_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deleteaccount.page */ "./src/app/deleteaccount/deleteaccount.page.ts");







let DeleteaccountPageModule = class DeleteaccountPageModule {
};
DeleteaccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _deleteaccount_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeleteaccountPageRoutingModule"]
        ],
        declarations: [_deleteaccount_page__WEBPACK_IMPORTED_MODULE_6__["DeleteaccountPage"]]
    })
], DeleteaccountPageModule);



/***/ }),

/***/ "./src/app/deleteaccount/deleteaccount.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/deleteaccount/deleteaccount.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  background-color: #fefefe;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\n.u-float-right {\n  float: right;\n}\n\n.u-flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.u-clearfix:before,\n.u-clearfix:after {\n  content: \" \";\n  display: table;\n}\n\n.u-clearfix:after {\n  clear: both;\n}\n\n.u-clearfix {\n  *zoom: 1;\n}\n\n.font-30 {\n  font-size: 35px !important;\n}\n\n.font-13 {\n  font-size: 13px !important;\n}\n\n.container {\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);\n  margin: 0px auto;\n  overflow: scroll;\n  width: 100%;\n  height: 100%;\n}\n\n.userCaps {\n  padding: 40px;\n  background: aliceblue;\n  font-size: 50px;\n  color: #92b243;\n}\n\n.header-container {\n  position: relative;\n}\n\n.header-image {\n  left: 0;\n  position: absolute;\n  top: 0;\n  z-index: -1;\n  height: auto;\n  -webkit-animation: zoomEffect 35s infinite;\n          animation: zoomEffect 35s infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n@-webkit-keyframes zoomEffect {\n  0% {\n    transform: scale(1) translateX(0);\n  }\n  100% {\n    transform: scale(1.2) translateX(-360px) translateY(-80px);\n  }\n}\n\n@keyframes zoomEffect {\n  0% {\n    transform: scale(1) translateX(0) translateY(0);\n  }\n  100% {\n    transform: scale(1.2) translateX(-360px) translateY(-80px);\n  }\n}\n\n.header {\n  color: #fff;\n  padding: 15px;\n  height: 220px;\n}\n\n.header > svg {\n  cursor: pointer;\n}\n\n.main-heading {\n  color: #fff;\n  font-size: 26px;\n  font-weight: 300;\n  margin-bottom: 12px;\n}\n\n.tag {\n  background-color: rgba(255, 255, 255, 0.35);\n  border-radius: 20px;\n  font-size: 16px;\n  margin-right: 8px;\n  padding: 4px 10px;\n  text-transform: lowercase;\n}\n\n.stats {\n  margin-top: 35px;\n}\n\n.stat-module {\n  display: inline-block;\n  font-size: 12px;\n  margin-right: 20px;\n  text-transform: uppercase;\n}\n\n.stat-number {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 4px;\n}\n\n.overlay-header {\n  background-color: #eee;\n  height: 100px;\n  margin: -50px 0 0 -25%;\n  width: 150%;\n  z-index: 0;\n}\n\n.body {\n  background-color: #eee;\n  color: #555;\n  margin-top: -50px;\n  padding: 0 15px 15px;\n  position: relative;\n  height: 100%;\n}\n\n.body-image {\n  border-radius: 100%;\n  box-shadow: 5px 10px 75px rgba(0, 0, 0, 0.4);\n  float: left;\n  margin: -90px 0 20px;\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  padding: 20px 34px;\n}\n\n.body-action-button {\n  background-color: #383838;\n  border-radius: 50%;\n  box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n  height: 40px;\n  position: absolute;\n  right: 15px;\n  top: -97px;\n  width: 40px;\n}\n\n.body-stats {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 700;\n  margin: -14px 0 0 23px;\n  position: relative;\n  text-transform: uppercase;\n  width: 24%;\n}\n\n.body-stats > span {\n  display: inline-block;\n  font-weight: 900;\n  margin-top: 8px;\n}\n\n.body-info {\n  clear: left;\n  position: relative;\n  max-height: 100px;\n  overflow: hidden;\n  transition: all 600ms ease-out;\n}\n\n.body-more {\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #eeeeee 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00000000\", endColorstr=\"#eeeeee\",GradientType=0 );\n  cursor: pointer;\n  margin: -57px auto 0px;\n  padding: 20px 0 20px;\n  position: relative;\n  text-align: center;\n}\n\n.body-more span {\n  background-color: #fff;\n  border-radius: 50%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);\n  display: inline-block;\n  height: 6px;\n  margin-right: 2px;\n  width: 6px;\n}\n\n.card {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n  margin-top: 15px;\n  padding: 10px;\n}\n\n.card-heading {\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.card-more {\n  cursor: pointer;\n  float: right;\n}\n\n.card-list {\n  list-style-type: none;\n  margin: 10px 0 0;\n  overflow-x: scroll;\n  padding: 0;\n  white-space: nowrap;\n}\n\n.card-list::-webkit-scrollbar-track {\n  border-radius: 2px;\n  background-color: #F5F5F5;\n}\n\n.card-list::-webkit-scrollbar {\n  height: 3px;\n  background-color: #F5F5F5;\n}\n\n.card-list::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #ddd;\n}\n\n.card-list li {\n  display: inline;\n  margin-left: 10px;\n}\n\n.card-list li:first-child {\n  margin-left: 0;\n}\n\n.footerbutton {\n  color: white;\n  --background: #92b243;\n  height: 55px;\n}\n\nul li {\n  list-style: none;\n}\n\nul {\n  padding: 0px;\n  width: 100%;\n  margin: 0px;\n}\n\nul li.active {\n  padding: 10px 20px;\n  background: #92b243;\n  border-radius: 20px;\n  margin-bottom: 10px;\n  color: white;\n}\n\nul li {\n  padding: 10px 20px;\n  border: 2px solid #92b243;\n  border-radius: 20px;\n  margin-bottom: 10px;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2RlbGV0ZWFjY291bnQvZGVsZXRlYWNjb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2RlbGV0ZWFjY291bnQvZGVsZXRlYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFFSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBOztFQUVJLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7R0FDSSxPQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQkFBQTtBQ0VKOztBREFBO0VBQ0ksMEJBQUE7QUNHSjs7QUREQTtFQUNJLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkE7RUFFSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7QUNLSjs7QURGQTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNLSjs7QURGQTtFQUNJO0lBQ0ksaUNBQUE7RUNLTjtFREhFO0lBQ0ksMERBQUE7RUNLTjtBQUNGOztBREZBO0VBQ0k7SUFDSSwrQ0FBQTtFQ0lOO0VERkU7SUFDSSwwREFBQTtFQ0lOO0FBQ0Y7O0FEREE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNHSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFBO0VBQ0ksMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNHSjs7QURBQTtFQUNJLGdCQUFBO0FDR0o7O0FEQUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDR0o7O0FEQUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURBQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsV0FBQTtFQUNBLFVBQUE7QUNFSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEY0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDWEo7O0FEY0E7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNYSjs7QURlQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDWko7O0FEZUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUNaSjs7QURlQTtFQUdJLHlFQUFBO0VBQ0EscUhBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNaSjs7QURlQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ1pKOztBRGVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDWko7O0FEZUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNaSjs7QURlQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDWko7O0FEZUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNaSjs7QURlQTtFQUVJLGtCQUFBO0VBQ0EseUJBQUE7QUNiSjs7QURnQkE7RUFFSSxXQUFBO0VBQ0EseUJBQUE7QUNkSjs7QURpQkE7RUFFSSxtQkFBQTtFQUNBLHNCQUFBO0FDZko7O0FEa0JBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDZko7O0FEa0JBO0VBQ0ksY0FBQTtBQ2ZKOztBRGlCQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNkSjs7QURrQkk7RUFDSSxnQkFBQTtBQ2ZSOztBRGtCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ2ZKOztBRGdCSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ2RSOztBRGdCSTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ2RSIiwiZmlsZSI6InNyYy9hcHAvZGVsZXRlYWNjb3VudC9kZWxldGVhY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG4udS1mbG9hdC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udS1mbGV4LWNlbnRlciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiAgICBcbi51LWNsZWFyZml4OmJlZm9yZSxcbi51LWNsZWFyZml4OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnUtY2xlYXJmaXg6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4udS1jbGVhcmZpeCB7XG4gICAgKnpvb206IDE7XG59XG4uZm9udC0zMHtcbiAgICBmb250LXNpemU6IDM1cHggIWltcG9ydGFudDtcbn1cbi5mb250LTEze1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi51c2VyQ2Fwc3tcbiAgICAvLyBwYWRkaW5nOiAzMXB4IDUwcHg7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiAjOTJiMjQzO1xufVxuLmhlYWRlci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRlci1pbWFnZSB7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBhbmltYXRpb246IHpvb21FZmZlY3QgMzVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUVmZmVjdCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMikgdHJhbnNsYXRlWCgtMzYwcHgpIHRyYW5zbGF0ZVkoLTgwcHgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyB6b29tRWZmZWN0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHRyYW5zbGF0ZVgoLTM2MHB4KSB0cmFuc2xhdGVZKC04MHB4KTtcbiAgICB9XG59XG5cbi5oZWFkZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiAyMjBweDtcbn1cblxuLmhlYWRlciA+IHN2ZyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFpbi1oZWFkaW5nIHtcbiAgICBjb2xvcjogI2ZmZjsgIFxuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi50YWcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjM1KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG4uc3RhdHMge1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbi5zdGF0LW1vZHVsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnN0YXQtbnVtYmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ub3ZlcmxheS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IC01MHB4IDAgMCAtMjUlO1xuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gICAgd2lkdGg6IDE1MCU7XG4gICAgei1pbmRleDogMDtcbiAgICBcbn1cblxuLmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgcGFkZGluZzogMCAxNXB4IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmJvZHktaW1hZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggNzVweCByZ2IoMCAwIDAgLyA0MCUpO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogLTkwcHggMCAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDM0cHg7XG59XG5cbi8vIC5ib2R5LWltYWdlIHtcbi8vIFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcbi8vIFx0Ym94LXNoYWRvdzogNXB4IDEwcHggNzVweCByZ2JhKDAsIDAsIDAsIC40KTtcbi8vIFx0ZmxvYXQ6IGxlZnQ7XG4vLyBcdG1hcmdpbjogLTkwcHggMCAyMHB4O1xuLy8gXHRwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyBcdHotaW5kZXg6IDI7XG4vLyBcdGhlaWdodDogNDBweDtcbi8vIFx0d2lkdGg6IDQwcHg7XG4vLyBcdHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cblxuLmJvZHktYWN0aW9uLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxMnB4IHJnYmEoMCwwLDAsLjQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHRvcDogLTk3cHg7XG4gICAgd2lkdGg6IDQwcHg7XG59XG5cbi5ib2R5LXN0YXRzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAtMTRweCAwIDAgMjNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB3aWR0aDogMjQlO1xuICAgIC8vIGZsb2F0OiBsZWZ0O1xufVxuXG4uYm9keS1zdGF0cyA+IHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmJvZHktaW5mbyB7XG4gICAgY2xlYXI6IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDYwMG1zIGVhc2Utb3V0O1xufVxuXG4uYm9keS1tb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDIzOCwyMzgsMjM4LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMCwwLDAsMCkgMCUscmdiYSgyMzgsMjM4LDIzOCwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgcmdiYSgwLDAsMCwwKSAwJSxyZ2JhKDIzOCwyMzgsMjM4LDEpIDEwMCUpO1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDAwMDAwMDAnLCBlbmRDb2xvcnN0cj0nI2VlZWVlZScsR3JhZGllbnRUeXBlPTAgKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAtNTdweCBhdXRvIDBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9keS1tb3JlIHNwYW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwwLDAsLjMpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICB3aWR0aDogNnB4O1xufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZC1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcmQtbW9yZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmNhcmQtbGlzdCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNhcmQtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcbntcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmNhcmQtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXJcbntcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG4uY2FyZC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYlxue1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmNhcmQtbGlzdCBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2FyZC1saXN0IGxpOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbn1cbi5mb290ZXJidXR0b257XG4gICAgY29sb3I6ICB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQ6ICM5MmIyNDM7XG4gICAgaGVpZ2h0OiA1NXB4O1xufVxuXG51bCB7XG4gICAgbGl7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxufVxudWx7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGxpLmFjdGl2ZXtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTJiMjQzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGxpe1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbn0iLCJodG1sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG4udS1mbG9hdC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnUtZmxleC1jZW50ZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udS1jbGVhcmZpeDpiZWZvcmUsXG4udS1jbGVhcmZpeDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnUtY2xlYXJmaXg6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnUtY2xlYXJmaXgge1xuICAqem9vbTogMTtcbn1cblxuLmZvbnQtMzAge1xuICBmb250LXNpemU6IDM1cHggIWltcG9ydGFudDtcbn1cblxuLmZvbnQtMTMge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDAgMCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnVzZXJDYXBzIHtcbiAgcGFkZGluZzogNDBweDtcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiAjOTJiMjQzO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRlci1pbWFnZSB7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAtMTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBhbmltYXRpb246IHpvb21FZmZlY3QgMzVzIGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUVmZmVjdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHRyYW5zbGF0ZVgoLTM2MHB4KSB0cmFuc2xhdGVZKC04MHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyB6b29tRWZmZWN0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSB0cmFuc2xhdGVYKC0zNjBweCkgdHJhbnNsYXRlWSgtODBweCk7XG4gIH1cbn1cbi5oZWFkZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweDtcbiAgaGVpZ2h0OiAyMjBweDtcbn1cblxuLmhlYWRlciA+IHN2ZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haW4taGVhZGluZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi50YWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cblxuLnN0YXRzIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLnN0YXQtbW9kdWxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnN0YXQtbnVtYmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ub3ZlcmxheS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IC01MHB4IDAgMCAtMjUlO1xuICB3aWR0aDogMTUwJTtcbiAgei1pbmRleDogMDtcbn1cblxuLmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzU1NTtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIHBhZGRpbmc6IDAgMTVweCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJvZHktaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3gtc2hhZG93OiA1cHggMTBweCA3NXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogLTkwcHggMCAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAzNHB4O1xufVxuXG4uYm9keS1hY3Rpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAtOTdweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5ib2R5LXN0YXRzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogLTE0cHggMCAwIDIzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lkdGg6IDI0JTtcbn1cblxuLmJvZHktc3RhdHMgPiBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5ib2R5LWluZm8ge1xuICBjbGVhcjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDYwMG1zIGVhc2Utb3V0O1xufVxuXG4uYm9keS1tb3JlIHtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDApIDAlLCAjZWVlZWVlIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMCkgMCUsICNlZWVlZWUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCkgMCUsICNlZWVlZWUgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiIzAwMDAwMDAwXCIsIGVuZENvbG9yc3RyPVwiI2VlZWVlZVwiLEdyYWRpZW50VHlwZT0wICk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAtNTdweCBhdXRvIDBweDtcbiAgcGFkZGluZzogMjBweCAwIDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9keS1tb3JlIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkLWhlYWRpbmcge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXJkLW1vcmUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNhcmQtbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBwYWRkaW5nOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2FyZC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmNhcmQtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmNhcmQtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uY2FyZC1saXN0IGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmNhcmQtbGlzdCBsaTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uZm9vdGVyYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICM5MmIyNDM7XG4gIGhlaWdodDogNTVweDtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG51bCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xufVxudWwgbGkuYWN0aXZlIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTJiMjQzO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG51bCBsaSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyYjI0MztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMwMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/deleteaccount/deleteaccount.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/deleteaccount/deleteaccount.page.ts ***!
  \*****************************************************/
/*! exports provided: DeleteaccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteaccountPage", function() { return DeleteaccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");





let DeleteaccountPage = class DeleteaccountPage {
    constructor(route, restSer, navCtrl, menuCtrl) {
        this.route = route;
        this.restSer = restSer;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.availableRoles = {
            4: "Seller",
            5: "Buyer",
            6: "Supplier",
            7: "Broker",
            8: "Guest",
        };
        this.error = "false";
        this.reasons = {
            0: "Tedious Sign-up process",
            1: "Installed a Competitor's App",
            2: "Addictive App",
            3: "Unused App",
        };
        this.selectedReasonIndex = '';
        this.userId = this.route.snapshot.paramMap.get("id");
        this.name = localStorage.getItem("name");
        // this.email = localStorage.getItem("email");
        this.expired_on = localStorage.getItem("expired_on");
        this.isExpired = localStorage.getItem("isExpired");
        if (localStorage.getItem("apptype") == "USD") {
            this.userRole = this.availableRoles[localStorage.getItem("usd_role")];
        }
        else {
            this.userRole = this.availableRoles[localStorage.getItem("role")];
        }
        this.apptype = localStorage.getItem("apptype");
        this.defaultPort = localStorage.getItem("defalutPort");
        console.log(this.userRole);
    }
    getProfileDetails() { }
    showMenu() {
        console.log("jknk");
        this.menuCtrl.close();
        this.menuCtrl.open();
    }
    ngOnInit() {
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
    openModel() {
        this.menuCtrl.enable(true);
        this.menuCtrl.open();
    }
    uninstallReason(reasonIndex) {
        this.selectedReasonIndex = reasonIndex;
    }
    deleteAccount() {
        if (this.selectedReasonIndex != undefined && this.selectedReasonIndex != '' && this.selectedReasonIndex != null) {
            if (this.email != undefined && this.email != '' && this.email != null) {
                if (this.email == localStorage.getItem("email")) {
                    this.restSer.deleteUser(localStorage.getItem("id")).then((res) => {
                        if (res.status == true) {
                            this.defaultPort = this.selectedCity;
                            localStorage.clear();
                            this.menuCtrl.close();
                            this.navCtrl.navigateForward(['login']);
                            this.restSer.presentToast("Account deleted successfully.");
                        }
                    }, (err) => {
                        console.log(err);
                    });
                }
                else {
                    this.restSer.presentToast("Please check your email id and try again.");
                }
            }
            else {
                this.restSer.presentToast("Please confirm your email id.");
            }
        }
        else {
            this.restSer.presentToast("Please select a reason.");
        }
    }
};
DeleteaccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
DeleteaccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-deleteaccount",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deleteaccount.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deleteaccount/deleteaccount.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deleteaccount.page.scss */ "./src/app/deleteaccount/deleteaccount.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], DeleteaccountPage);



/***/ })

}]);
//# sourceMappingURL=deleteaccount-deleteaccount-module-es2015.js.map