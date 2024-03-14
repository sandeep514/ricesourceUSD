(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editprofile-editprofile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"register \">\n\t<ion-row style=\"height: 30%;\">\n\t\t<!-- <ion-col class=\"h-230 green brlb-30\">\n      \t\t<p (click)=\"home()\" style=\"float: left;color: white;margin-right: 20px;\">\n\t\t\t\t<ion-icon name=\"chevron-back-outline\"  style=\"font-size: 22px ;\" class=\"lefticon\"></ion-icon>\n\t\t\t</p>\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\" style=\"margin-top: 20\">\n\t\t</ion-col> -->\n\t\t<div style=\"margin-top: 0px;text-align: center;width: 100%;\">\n\t\t\t<ion-row style=\"margin: 30px 0px;\">\n\t\t\t\t<ion-col style=\"text-align: left;padding-left: 20px;\" (click)=\"home()\">\n\t\t\t\t\t<ion-icon name=\"arrow-back-outline\" style=\"font-size: 20px;\"></ion-icon>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<h1 class=\"\" style=\"color: #000;font-size: 16px;margin: 0px;padding: 0px;\">Edit Profile</h1>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\n\t\t\t<img src=\"../../assets/img/avatars/7.jpg\" style=\"width: 100px;border-radius: 100%;\" />\n\t\t\t<h1 class=\"main-heading font-18\" style=\"color: #000;font-size: 18px\">{{ name | uppercase }}</h1>\n\t\t\t<!-- <span class=\"tag\" style=\"color: #000;font-size: 16px\">{{ email }}</span>\n\t\t\t\t\t\t\t<p style=\"color: #000;font-size: 16px\">Role: {{ userRole }}</p> -->\n\t\t</div>\n\t</ion-row>\n\n\t<!-- <ion-row>\n\t\t<ion-col class=\"h-300 green brlb-30\">\n\t\t\t<ion-row class=\"formData\">\n\t\t\t\t<ion-col class=\"form\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\tChange Password\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label position=\"floating\">New Password</ion-label>\n\t\t\t\t\t\t<ion-input type=\"password\" name='password' [(ngModel)]=\"password\" style=\" color: 'red' \" ></ion-input>\n\t\t\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label position=\"floating\" class=\"font-lightgreen\">Confirm Password</ion-label>\n\t\t\t\t\t\t<ion-input type=\"password\" name='confpassword' [(ngModel)]=\"confpassword\"></ion-input>\n\t\t\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t<div class=\"center\" style=\"margin-top: 20px;\">\n\t\t\t\t\t\t<ion-button class=\"lightgreen\" (click)=\"updatePassword()\"> Change Password </ion-button>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-col>\n\t</ion-row> -->\n\t<!-- <ion-row>\n\t\t<ion-col>\n\t\t\t<h3>\n\t\t\t\tEdit Profile\n\t\t\t</h3>\n\t\t</ion-col>\n\t</ion-row> -->\n\t<!-- <ion-row class=\"userType\">\n\t\t<ul style=\"justify-content: space-between;\">\n\t\t\t<li (click)=\"changeState('Supplier')\" [class.activeTab]=\"role == 'Supplier' \">\n\t\t\t\tSupplier \n\t\t\t</li>\n\t\t\t\n\t\t\t<li (click)=\"changeState('Buyer')\" [class.activeTab]=\"role == 'Buyer' \">\n\t\t\t\tBuyer\n\t\t\t</li> \n\t\t\t\n\t\t\t<li (click)=\"changeState('Broker')\" [class.activeTab]=\"role == 'Broker' \">\n\t\t\t\tBroker\n\t\t\t</li>\n\n\t\t\t<li (click)=\"changeState('Guest')\" [class.activeTab]=\"role == 'Guest' \">\n\t\t\t\tGuest\n\t\t\t</li>\t\n\t\t</ul>\n\t</ion-row> -->\n\n\t<ion-row class=\"formData lightgreen\" style=\"height: 70%;border-radius: 30px 30px 0px 0px;\">\n\t\t<ion-col class=\"form\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Username</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"username\" name=\"username\"></ion-input>\n\t\t\t\t<!-- <ion-icon name=\"person\" slot=\"start\"></ion-icon> -->\n\t\t\t\t<img src=\"../../assets/svg/person-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Email</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"email\" name=\"email\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/mail-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Mobile no</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"mobile\" name=\"mobile\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/call-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Company name</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"companyname\" name=\"companyname\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/business-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\"\n\t\t\t\t\talt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<ion-button class=\"green\" (click)=\"updateUserDetails()\"> Edit Profile </ion-button>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"center\">\n\n\t</ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/editprofile/editprofile-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/editprofile/editprofile-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EditprofilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageRoutingModule", function() { return EditprofilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editprofile.page */ "./src/app/editprofile/editprofile.page.ts");




const routes = [
    {
        path: '',
        component: _editprofile_page__WEBPACK_IMPORTED_MODULE_3__["EditprofilePage"]
    }
];
let EditprofilePageRoutingModule = class EditprofilePageRoutingModule {
};
EditprofilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditprofilePageRoutingModule);



/***/ }),

/***/ "./src/app/editprofile/editprofile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/editprofile/editprofile.module.ts ***!
  \***************************************************/
/*! exports provided: EditprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function() { return EditprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editprofile-routing.module */ "./src/app/editprofile/editprofile-routing.module.ts");
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editprofile.page */ "./src/app/editprofile/editprofile.page.ts");







let EditprofilePageModule = class EditprofilePageModule {
};
EditprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditprofilePageRoutingModule"]
        ],
        declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_6__["EditprofilePage"]]
    })
], EditprofilePageModule);



/***/ }),

/***/ "./src/app/editprofile/editprofile.page.scss":
/*!***************************************************!*\
  !*** ./src/app/editprofile/editprofile.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register {\n  text-align: center;\n}\n.register h3 {\n  color: black;\n}\n.register .registerlogo {\n  width: 31%;\n  margin-top: 12px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: #fff;\n  --background: #fff;\n  margin-top: 20px;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9lZGl0cHJvZmlsZS9lZGl0cHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLGtCQUFBO0FDSko7QURNSTtFQUNJLFlBQUE7QUNKUjtBRFNJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDUFI7QURXQTtFQUNJLGlCQUFBO0FDUko7QURZSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1RSO0FEV1E7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0FDVFo7QURhSTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0FDWFI7QURlQTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDWko7QURnQkk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDYlI7QURlUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDYlo7QURrQkE7RUFDSSwyQkFBQTtFQUNBLDZCQUFBO0FDZko7QURrQkE7RUFDSSxxQkFBQTtBQ2ZKIiwiZmlsZSI6InNyYy9hcHAvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJybGItMzAge1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDMwJTtcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMXB4IDE1cHggMnB4IGdyZWVuO1xufVxuXG4ucmVnaXN0ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGgzIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAvLyB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIH1cblxuICAgIC5yZWdpc3RlcmxvZ28ge1xuICAgICAgICB3aWR0aDogMzElO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cbn1cblxuLmZvcm1EYXRhIHtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLmZvcm0ge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgICAgIC5pdGVtLW5hdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmFjdGl2ZVRhYiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXJUeXBlIHtcbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnVzZXJUaXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubm91bmRlcmxpbmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iLCIucmVnaXN0ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXIgaDMge1xuICBjb2xvcjogYmxhY2s7XG59XG4ucmVnaXN0ZXIgLnJlZ2lzdGVybG9nbyB7XG4gIHdpZHRoOiAzMSU7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5mb3JtRGF0YSB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZm9ybSBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5mb3JtIGlvbi1pdGVtIC5pdGVtLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmZvcm0gYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZVRhYiB7XG4gIC0tYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXJUeXBlIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDA7XG59XG4udXNlclR5cGUgdWwgbGkge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MztcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi51c2VyVGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubm91bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/editprofile/editprofile.page.ts":
/*!*************************************************!*\
  !*** ./src/app/editprofile/editprofile.page.ts ***!
  \*************************************************/
/*! exports provided: EditprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePage", function() { return EditprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components.service */ "./src/app/components.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");







let EditprofilePage = class EditprofilePage {
    constructor(route, restSer, navCtrl, menuCtrl, componentSer) {
        this.route = route;
        this.restSer = restSer;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.componentSer = componentSer;
        this.availableRoles = { 4: 'Seller', 5: 'Buyer', 6: 'Supplier', 7: 'Broker', 8: 'Guest' };
        this.userId = this.route.snapshot.paramMap.get('id');
        this.username = localStorage.getItem('name');
        this.email = localStorage.getItem('email');
        this.mobile = localStorage.getItem('mobile');
        this.role = this.availableRoles[localStorage.getItem('role')];
        this.companyname = localStorage.getItem('companyname');
        this.expired_on = localStorage.getItem('expired_on');
        this.isExpired = localStorage.getItem('isExpired');
        this.userRole = this.availableRoles[localStorage.getItem('role')];
        console.log(this.userRole);
        this.userState = this.role;
    }
    isValidEmail(value) {
        return /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test(value);
    }
    changeState(state) {
        console.log(state);
        this.userState = state;
        this.role = state;
    }
    updatePassword() {
        if (this.password != undefined && this.password != undefined) {
            if (this.password == this.confpassword) {
                let formData = {
                    number: this.mobile,
                    password: this.password
                };
                this.restSer.presentLoader('Please wait...');
                if (this.password == this.confpassword) {
                    this.restSer.changePassword(formData).then((res) => {
                        this.restSer.loaderCtrl.dismiss();
                        this.restSer.presentToast('Password change successfully.');
                    }, (err) => {
                        this.restSer.loaderCtrl.dismiss();
                        this.restSer.presentToast('Something went wrong.');
                    });
                }
                else {
                    this.restSer.presentToast('Password and confirm password is not correct.');
                }
            }
            else {
                this.restSer.presentToast('Password and confirm password should same.');
            }
        }
    }
    home() {
        if (localStorage.getItem('apptype') == 'USD') {
            this.navCtrl.navigateForward('priceusd');
        }
        else {
            this.navCtrl.navigateForward('prices');
        }
    }
    updateUserDetails() {
        if (this.username != undefined && this.email != undefined && this.mobile != undefined && this.companyname != undefined) {
            if (this.username != '' && this.email != '' && this.mobile != '' && this.password != '' && this.confpassword != '') {
                if (this.isValidEmail(this.email) == true) {
                    // if(this.mobile.length == 10 || this.mobile.length == 11 || this.mobile.length == 12){
                    let postData = {
                        'username': this.username,
                        'email': this.email,
                        'mobile': this.mobile,
                        'companyname': this.companyname,
                        // 'userState' : this.userState,
                        'userId': localStorage.getItem('id')
                    };
                    this.restSer.presentLoader('Please wait...');
                    this.restSer.updateUser(postData).then((res) => {
                        localStorage.setItem('id', res.data.id);
                        localStorage.setItem('name', res.data.name);
                        localStorage.setItem('email', res.data.email);
                        localStorage.setItem('mobile', res.data.mobile);
                        // localStorage.setItem('role' , res.data.role);
                        localStorage.setItem('companyname', res.data.companyname);
                        localStorage.setItem('expired_on', res.data.expired_on);
                        this.restSer.presentToast('Profile updated successfully.');
                        this.restSer.loaderCtrl.dismiss();
                    }, (err) => {
                        this.restSer.presentToast(err.error.error);
                        this.restSer.loaderCtrl.dismiss();
                    });
                    // }else{
                    // 	this.restSer.presentToast('Password and confirm password should be valid.');
                    // }
                }
                else {
                    this.restSer.presentToast('Please enter a valid email address.');
                }
            }
            else {
                this.restSer.presentToast('Missing required fields.');
            }
        }
        else {
            this.restSer.presentToast('Missing required fields.');
        }
    }
    getProfileDetails() {
    }
    showMenu() {
        this.menuCtrl.open();
    }
    ngOnInit() {
        this.getPlanDetails();
    }
    getPlanDetails() {
        this.restSer.getUserPlanDetails().then((res) => {
            console.log(res);
            if (res.data.length == 0) {
                this.planName = "Trial Period";
                this.planMonths = "3 Months";
            }
            else {
                this.planName = res.data.plan;
                this.planMonths = res.data.sub_plan_name;
            }
            console.log(res.data.length);
        }, (err) => {
            console.log(util__WEBPACK_IMPORTED_MODULE_4__["error"]);
        });
    }
    gotohome() {
        localStorage.setItem('apptype', 'OTHER');
        this.navCtrl.navigateForward(['prices']);
    }
};
EditprofilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"] }
];
EditprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editprofile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editprofile.page.scss */ "./src/app/editprofile/editprofile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"]])
], EditprofilePage);



/***/ })

}]);
//# sourceMappingURL=editprofile-editprofile-module-es2015.js.map