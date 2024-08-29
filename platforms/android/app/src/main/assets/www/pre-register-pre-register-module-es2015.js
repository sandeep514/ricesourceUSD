(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pre-register-pre-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-register/pre-register.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-register/pre-register.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"register lightgreen\">\n\n\t<ion-row>\n\t\t<ion-col class=\"h-260 green brlb-30\">\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\">\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<h3>\n\t\t\t\tRegister\n\t\t\t</h3>\n\t\t</ion-col>\n\t</ion-row>\n\t\n\t<ion-row class=\"formData lightgreen\">\n\t\t<ion-col class=\"form\">\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-item style=\"width: 100%\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-label position=\"floating\">Region</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" (ionChange)=\"registerUserAs($event)\">\n\t\t\t\t\t\t<ion-select-option value=\"domestic\">India</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"international\">Rest of the world</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t  </ion-item>\n\t\t\t\t<ion-icon slot=\"start\" name=\"earth-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon>\n\t\t\t</ion-item>\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<p>OR</p>\n\t\t\t</div>\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<ion-button class=\"green\" (click)=\"signin()\" expand=\"full\"> Sign in </ion-button>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"center\">\n\t\t\n\t</ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/pre-register/pre-register-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pre-register/pre-register-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PreRegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreRegisterPageRoutingModule", function() { return PreRegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pre_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pre-register.page */ "./src/app/pre-register/pre-register.page.ts");




const routes = [
    {
        path: '',
        component: _pre_register_page__WEBPACK_IMPORTED_MODULE_3__["PreRegisterPage"]
    }
];
let PreRegisterPageRoutingModule = class PreRegisterPageRoutingModule {
};
PreRegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PreRegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pre-register/pre-register.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pre-register/pre-register.module.ts ***!
  \*****************************************************/
/*! exports provided: PreRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreRegisterPageModule", function() { return PreRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _pre_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pre-register-routing.module */ "./src/app/pre-register/pre-register-routing.module.ts");
/* harmony import */ var _pre_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pre-register.page */ "./src/app/pre-register/pre-register.page.ts");







let PreRegisterPageModule = class PreRegisterPageModule {
};
PreRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pre_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreRegisterPageRoutingModule"]
        ],
        declarations: [_pre_register_page__WEBPACK_IMPORTED_MODULE_6__["PreRegisterPage"]]
    })
], PreRegisterPageModule);



/***/ }),

/***/ "./src/app/pre-register/pre-register.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pre-register/pre-register.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register {\n  text-align: center;\n}\n.register h3 {\n  color: #000000;\n}\n.register .registerlogo {\n  width: 34%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\nion-input,\nion-select {\n  --placeholder-color: #92B243 !important;\n  --placeholder-opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9wcmUtcmVnaXN0ZXIvcHJlLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJlLXJlZ2lzdGVyL3ByZS1yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVBO0VBQ0ksa0JBQUE7QUNoRUo7QURpRUk7RUFDSSxjQUFBO0FDL0RSO0FEbUVJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNqRVI7QURxRUE7RUFDSSxpQkFBQTtBQ2xFSjtBRHNFSTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7QUNuRVI7QURvRVE7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0FDbEVaO0FEcUVJO0VBQ0ksZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7QUNuRVI7QURzRUE7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ25FSjtBRHNFSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNuRVI7QURxRVE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ25FWjtBRHVFQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUNwRUo7QURzRUE7RUFDSSxxQkFBQTtBQ25FSjtBRHFFQTs7RUFFSSx1Q0FBQTtFQUNBLG1DQUFBO0FDbEVKIiwiZmlsZSI6InNyYy9hcHAvcHJlLXJlZ2lzdGVyL3ByZS1yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY29udGVudHtcbi8vICAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ2luLWJnLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7XG4vLyB9XG5cbi8vIC5oZWFkZXItbG9nb3tcbi8vICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuLy8gICAgIGltZ3tcbi8vICAgICAgICAgd2lkdGg6IDI1MHB4O1xuLy8gICAgIH1cbi8vIH1cblxuLy8gLmxvZ2luLWJveHtcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICAgIGlvbi1saXN0e1xuLy8gICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgXG4vLyAgICAgICAgIGlvbi1pdGVte1xuLy8gICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLy8gLnNpZ24taW4taWNvbntcbi8vICAgICB3aWR0aDogOTBweDtcbi8vIH1cblxuLy8gLmJ1dHRvbi1yaXBwbGV7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbi8vIH1cblxuLy8gLmZvcmdvdC1wYXNze1xuLy8gICAgIGZvbnQtc2l6ZTogMTVweDtcbi8vIH1cblxuLy8gLmZvcmdldC1wYXNzLXJvd3tcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gfVxuXG4vLyAubG9naW4tZm9vdGVye1xuLy8gICAgIGhlaWdodDogMjBweDtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZWZlY2VjO1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgcHtcbi8vICAgICAgICAgbWFyZ2luOiAwcHg7XG4vLyAgICAgICAgIHBhZGRpbmc6IDBweDtcbi8vICAgICAgICAgcGFkZGluZy10b3A6IDNweDtcbi8vICAgICAgICAgY29sb3I6ICMwMDBcbi8vICAgICB9XG4vLyB9XG5cbi8vIC5sb2dpbi1idXR0b257XG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAxMDBweDtcbi8vICAgICB3aWR0aDogMjAwcHg7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcbi8vIH1cblxuLmJybGItMzB7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMzAlO1xuICAgIC8vIGJveC1zaGFkb3c6IDBweCAxcHggMTVweCAycHggZ3JlZW47XG59XG4ucmVnaXN0ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGgze1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgLy8gdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB9XG4gICAgLnJlZ2lzdGVybG9nb3tcbiAgICAgICAgd2lkdGg6IDM0JTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG59XG5cbi5mb3JtRGF0YXtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLmZvcm17XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAuaXRlbS1uYXRpdmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9ue1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICB9XG59XG4uYWN0aXZlVGFie1xuICAgIC0tYmFja2dyb3VuZDogIzkyQjI0MyAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnVzZXJUeXBle1xuICAgIHVse1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICBsaXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi51c2VyVGl0bGV7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuLm5vdW5kZXJsaW5le1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmlvbi1pbnB1dCxcbmlvbi1zZWxlY3Qge1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn0iLCIucmVnaXN0ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXIgaDMge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5yZWdpc3RlciAucmVnaXN0ZXJsb2dvIHtcbiAgd2lkdGg6IDM0JTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm1EYXRhIHtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5mb3JtIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybSBpb24taXRlbSAuaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtIGJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmVUYWIge1xuICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyVHlwZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxuLnVzZXJUeXBlIHVsIGxpIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udXNlclRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLm5vdW5kZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24taW5wdXQsXG5pb24tc2VsZWN0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pre-register/pre-register.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pre-register/pre-register.page.ts ***!
  \***************************************************/
/*! exports provided: PreRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreRegisterPage", function() { return PreRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let PreRegisterPage = class PreRegisterPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    registerUserAs(registerType) {
        console.log(registerType.detail.value);
        localStorage.setItem('registerUserAs', registerType.detail.value);
        this.navCtrl.navigateRoot(['register']);
    }
    signin() {
        console.log("nkjnk");
        this.navCtrl.navigateRoot(['login']);
    }
};
PreRegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PreRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pre-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pre-register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-register/pre-register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pre-register.page.scss */ "./src/app/pre-register/pre-register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PreRegisterPage);



/***/ })

}]);
//# sourceMappingURL=pre-register-pre-register-module-es2015.js.map