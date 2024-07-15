(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"content\" class=\"bg-lightgreen\">\n\t<div class=\"green\" >\n\t\t<div class=\"header-content\">\n\t\t\t<ion-row class=\"\">\n\t\t\t\t<ion-col size=\"12\" align=\"center\">\n\t\t\t\t\t<h3>Contact us</h3>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\t</div>\n\t\n\t<ion-row  id='card'>\n\t\t<ion-col>\n\t\t\t<ion-row style=\"padding: 0;margin: 0;\">\n\t\t\t\t<ion-col style=\"list-style: none;background: lightgrey;text-align: center;padding: 20px 0px;border-radius: 20px;margin-right: 15px;\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<a href=\"https://api.whatsapp.com/send/?phone=[+919899330123]&text=Hi&app_absent=0&app_absent=0\">\n\t\t\t\t\t\t\t<ion-icon name=\"call-outline\" style=\"color: #c3bfbf;font-size: 40px;\"></ion-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</p>\n\t\t\t\t\t<!-- <p>{{phone}}</p> -->\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col style=\"list-style: none;background: lightblue;text-align: center;padding: 20px 0px;border-radius: 20px;margin-right: 15px;\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<a href=\"mailto:enquiry@sntcgroup.com\">\n\t\t\t\t\t\t\t<ion-icon name=\"mail-outline\" style=\"color: #c3bfbf;font-size: 40px;\"></ion-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</p>\n\t\t\t\t\t<!-- <p>{{email}}</p> -->\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-col>\n\t</ion-row>\n\t<app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/contact/contact-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/contact/contact-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function() { return ContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.page */ "./src/app/contact/contact.page.ts");




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/contact/contact-routing.module.ts");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.page */ "./src/app/contact/contact.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let ContactPageModule = class ContactPageModule {
};
ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactPageRoutingModule"]
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
    })
], ContactPageModule);



/***/ }),

/***/ "./src/app/contact/contact.page.scss":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".galleryContent {\n  padding: 0px;\n}\n\n.ricetype {\n  font-size: 18px;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: transparent important;\n}\n\n.price-table table thead tr th {\n  background-color: transparent important;\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n  border-bottom: 1px solid #dfdfdf;\n  border-right: 1px solid #dfdfdf;\n}\n\ntable thead, table tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 2px solid #ededed !important;\n}\n\n.specification ion-row {\n  padding: 0;\n}\n\n.specification ion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.specification thead th {\n  font-weight: inherit;\n  text-align: left;\n}\n\n.ricetype {\n  font-size: 24px;\n  font-family: Arial;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.ricetype .black {\n  color: #000;\n}\n\ntable tbody tr td {\n  color: #92B243;\n  font-size: 18px !important;\n}\n\n.card .image {\n  text-align: center;\n}\n\n.type-columns {\n  padding-left: 40px;\n}\n\n.pl-40 {\n  padding-left: 40px !important;\n}\n\n.pl-60 {\n  padding-left: 40px !important;\n}\n\ntable tbody {\n  border: 0px !important;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: #e4e9b1;\n}\n\n#card th {\n  background-color: transparent !important;\n  --background-color: transparent !important;\n}\n\n#card {\n  position: absolute;\n  width: -webkit-fill-available;\n  padding-bottom: 85px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FESUk7RUFDSSxXQUFBO0VBdUJBLGVBQUE7QUN2QlI7O0FERVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0FDQWhCOztBRENnQjtFQUNJLHVDQUFBO0VBQ0EsK0JBQUE7QUNDcEI7O0FESVk7RUFDSSxZQUFBO0FDRmhCOztBREdnQjtFQUNJLGVBQUE7RUFFQSxnQ0FBQTtFQUNBLCtCQUFBO0FDRnBCOztBRFVBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDJDQUFBO0FDUEo7O0FEVUk7RUFDSSxVQUFBO0FDUFI7O0FEU0k7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ1BSOztBRFVRO0VBRUksb0JBQUE7RUFDQSxnQkFBQTtBQ1RaOztBRGNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQ1hKOztBRFlJO0VBQ0ksV0FBQTtBQ1ZSOztBRGVBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FDWko7O0FEZUk7RUFDSSxrQkFBQTtBQ1pSOztBRGVBO0VBQ0ksa0JBQUE7QUNaSjs7QURjQTtFQUNJLDZCQUFBO0FDWEo7O0FEYUE7RUFDSSw2QkFBQTtBQ1ZKOztBRFlBO0VBQ0ksc0JBQUE7QUNUSjs7QURXQTtFQUNJLHlCQUFBO0FDUko7O0FEV0E7RUFDQyx3Q0FBQTtFQUNBLDBDQUFBO0FDUkQ7O0FEVUE7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeUNvbnRlbnR7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4ucmljZXR5cGV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucHJpY2UtdGFibGV7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICB0YWJsZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRoZWFke1xuICAgICAgICAgICAgdHJ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCBpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdGh7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IGltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGJvZHl7XG4gICAgICAgICAgICB0cntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgdGR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIH1cbn1cblxudGFibGUgdGhlYWQsdGFibGUgdGJvZHkge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VkZWRlZCAhaW1wb3J0YW50O1xufVxuLnNwZWNpZmljYXRpb257XG4gICAgaW9uLXJvd3tcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgaW9uLWNvbHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwXG4gICAgfVxuICAgIHRoZWFke1xuICAgICAgICB0aHtcbiAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1hbGlnbiA6bGVmdDtcbiAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5yaWNldHlwZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAuYmxhY2t7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbn1cblxuXG50YWJsZSB0Ym9keSB0ciB0ZHtcbiAgICBjb2xvcjogIzkyQjI0MztcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cbi5jYXJke1xuICAgIC5pbWFnZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cbi50eXBlLWNvbHVtbnN7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4XG59XG4ucGwtNDB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4ucGwtNjB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG50YWJsZSB0Ym9keXtcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xufVxudGJvZHkgdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU5YjE7XG59XG5cbiNjYXJkIHRoe1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXHQtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4jY2FyZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgcGFkZGluZy1ib3R0b206IDg1cHg7XG59IiwiLmdhbGxlcnlDb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wcmljZS10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIge1xuICBoZWlnaHQ6IDM0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgaW1wb3J0YW50O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cblxudGFibGUgdGhlYWQsIHRhYmxlIHRib2R5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZGVkZWQgIWltcG9ydGFudDtcbn1cblxuLnNwZWNpZmljYXRpb24gaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDA7XG59XG4uc3BlY2lmaWNhdGlvbiBpb24tY29sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnNwZWNpZmljYXRpb24gdGhlYWQgdGgge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cbi5yaWNldHlwZSAuYmxhY2sge1xuICBjb2xvcjogIzAwMDtcbn1cblxudGFibGUgdGJvZHkgdHIgdGQge1xuICBjb2xvcjogIzkyQjI0MztcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIC5pbWFnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnR5cGUtY29sdW1ucyB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLnBsLTQwIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC02MCB7XG4gIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0Ym9keSB7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRib2R5IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTliMTtcbn1cblxuI2NhcmQgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbiNjYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgcGFkZGluZy1ib3R0b206IDg1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/contact/contact.page.ts":
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");



let ContactPage = class ContactPage {
    constructor(apiser) {
        this.apiser = apiser;
    }
    ngOnInit() {
        this.getContactDetail();
    }
    getContactDetail() {
        this.apiser.contact().then((res) => {
            this.email = res.data.email;
            this.phone = res.data.phone;
        }).catch((err) => {
            console.log(err);
        });
    }
    chat() {
        // window.open("https://api.whatsapp.com/send/?phone=[PHONENUMBER]&text=Hi,%20Test%20Message&app_absent=0");
    }
};
ContactPage.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
];
ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.page.scss */ "./src/app/contact/contact.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
], ContactPage);



/***/ })

}]);
//# sourceMappingURL=contact-contact-module-es2015.js.map