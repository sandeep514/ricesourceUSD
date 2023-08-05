(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallerydetails-gallerydetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallerydetails/gallerydetails.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallerydetails/gallerydetails.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"content\" class=\"bg-lightgreen\">\n\t<div class=\"header-data green\" >\n\t\t<div class=\"header-content\">\n\t\t\t<ion-row class=\"\">\n\t\t\t\t<ion-col size=\"3\" align=\"center\">\n\t\t\t\t\t<div class=\"user-profile-icon\">\n\t\t\t\t\t\t<span>{{ userFirstName }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" align=\"center\">\n\t\t\t\t\t<h3>Gallery Details</h3>\n\t\t\t\t</ion-col>\n\t\t\t\t<!-- <ion-col size=\"3\" align=\"right\" class=\"notification\">\n\t\t\t\t\t<ion-icon name=\"notifications\"></ion-icon>\n\t\t\t\t\t<span class=\"badge\">2</span>\n\t\t\t\t</ion-col> -->\n\t\t\t</ion-row>\n\t\t</div>\n\t</div>\n\t\n\t<ion-row  id='card'>\n\t\t<ion-col>\n\t\t\t<div class=\"card\" *ngIf=\"galleryData != undefined \">\n\t\t\t\t<!-- <div class=\"image\">\n\t\t\t\t\t<img src=\"{{ imageUrl }}uploads/gallery/{{ galleryData.attachment }}\" alt=\"\">\n\t\t\t\t</div> -->\n\t\t\t\t<ion-row class=\"rice-gallery\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-slides pager=\"false\" [options]=\"slideOpts\">\n\t\t\t\t\t\t\t<ion-slide *ngIf=\"galleryData.attachment != null\">\n\t\t\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/gallery/'+galleryData.attachment )\" src=\"{{ imageUrl }}uploads/gallery/{{ galleryData.attachment }}\" class=\"slide-image\">\n\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t<ion-slide *ngIf=\"galleryData.attachment2 != null\">\n\t\t\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/gallery/'+galleryData.attachment2)\" src=\"{{ imageUrl }}uploads/gallery/{{ galleryData.attachment2 }}\" class=\"slide-image\">\n\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t</ion-slides>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<div class=\"galleryContent\" >\n\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t<h3 class=\"mt-0 pt-0\" style=\"text-align: center\">{{ galleryData.title }}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t<p>{{ galleryData.description }}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"specification\">\t\t\t\t\t\n\t\t\t\t\t\t<ion-row class=\"ion-padding table-row padd-5\"> \n\t\t\t\t\t\n\t\t\t\t\t\t\t<ion-col class=\"price-table dashboard\">\n\t\t\t\t\t\t\t\t<table class=\"table \">\n\t\t\t\n\t\t\t\t\t\t\t\t\t<tbody >\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let list of spec | keyvalue\">\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let listitems of list.value | keyvalue\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"sticky-col first-col left pl-10\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ listitems.key }}\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"type-columns pl-60\" style=\"width:180px\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"priceData \" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ listitems.value }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t<app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/gallerydetails/gallerydetails-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/gallerydetails/gallerydetails-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: GallerydetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerydetailsPageRoutingModule", function() { return GallerydetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gallerydetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallerydetails.page */ "./src/app/gallerydetails/gallerydetails.page.ts");




const routes = [
    {
        path: '',
        component: _gallerydetails_page__WEBPACK_IMPORTED_MODULE_3__["GallerydetailsPage"]
    }
];
let GallerydetailsPageRoutingModule = class GallerydetailsPageRoutingModule {
};
GallerydetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GallerydetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/gallerydetails/gallerydetails.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/gallerydetails/gallerydetails.module.ts ***!
  \*********************************************************/
/*! exports provided: GallerydetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerydetailsPageModule", function() { return GallerydetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _gallerydetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallerydetails-routing.module */ "./src/app/gallerydetails/gallerydetails-routing.module.ts");
/* harmony import */ var _gallerydetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallerydetails.page */ "./src/app/gallerydetails/gallerydetails.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let GallerydetailsPageModule = class GallerydetailsPageModule {
};
GallerydetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gallerydetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["GallerydetailsPageRoutingModule"]
        ],
        declarations: [_gallerydetails_page__WEBPACK_IMPORTED_MODULE_6__["GallerydetailsPage"]]
    })
], GallerydetailsPageModule);



/***/ }),

/***/ "./src/app/gallerydetails/gallerydetails.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/gallerydetails/gallerydetails.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".galleryContent {\n  padding: 0px;\n}\n\n.ricetype {\n  font-size: 18px;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: transparent important;\n}\n\n.price-table table thead tr th {\n  background-color: transparent important;\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n  border-bottom: 1px solid #dfdfdf;\n  border-right: 1px solid #dfdfdf;\n}\n\ntable thead, table tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 2px solid #ededed !important;\n}\n\n.specification ion-row {\n  padding: 0;\n}\n\n.specification ion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.specification thead th {\n  font-weight: inherit;\n  text-align: left;\n}\n\n.ricetype {\n  font-size: 24px;\n  font-family: Arial;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.ricetype .black {\n  color: #000;\n}\n\ntable tbody tr td {\n  color: #92B243;\n  font-size: 18px !important;\n}\n\n.card .image {\n  text-align: center;\n}\n\n.type-columns {\n  padding-left: 40px;\n}\n\n.pl-40 {\n  padding-left: 40px !important;\n}\n\n.pl-60 {\n  padding-left: 40px !important;\n}\n\ntable tbody {\n  border: 0px !important;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: #e4e9b1;\n}\n\n#card th {\n  background-color: transparent !important;\n  --background-color: transparent !important;\n}\n\n#card {\n  position: absolute;\n  width: -webkit-fill-available;\n  padding-bottom: 85px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9nYWxsZXJ5ZGV0YWlscy9nYWxsZXJ5ZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2dhbGxlcnlkZXRhaWxzL2dhbGxlcnlkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURJSTtFQUNJLFdBQUE7RUF1QkEsZUFBQTtBQ3ZCUjs7QURFWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7QUNBaEI7O0FEQ2dCO0VBQ0ksdUNBQUE7RUFDQSwrQkFBQTtBQ0NwQjs7QURJWTtFQUNJLFlBQUE7QUNGaEI7O0FER2dCO0VBQ0ksZUFBQTtFQUVBLGdDQUFBO0VBQ0EsK0JBQUE7QUNGcEI7O0FEVUE7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsMkNBQUE7QUNQSjs7QURVSTtFQUNJLFVBQUE7QUNQUjs7QURTSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDUFI7O0FEVVE7RUFFSSxvQkFBQTtFQUNBLGdCQUFBO0FDVFo7O0FEY0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FDWEo7O0FEWUk7RUFDSSxXQUFBO0FDVlI7O0FEZUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNaSjs7QURlSTtFQUNJLGtCQUFBO0FDWlI7O0FEZUE7RUFDSSxrQkFBQTtBQ1pKOztBRGNBO0VBQ0ksNkJBQUE7QUNYSjs7QURhQTtFQUNJLDZCQUFBO0FDVko7O0FEWUE7RUFDSSxzQkFBQTtBQ1RKOztBRFdBO0VBQ0kseUJBQUE7QUNSSjs7QURXQTtFQUNDLHdDQUFBO0VBQ0EsMENBQUE7QUNSRDs7QURVQTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeWRldGFpbHMvZ2FsbGVyeWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnlDb250ZW50e1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnJpY2V0eXBle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnByaWNlLXRhYmxle1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgdGFibGV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0aGVhZHtcbiAgICAgICAgICAgIHRye1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRoe1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCBpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRib2R5e1xuICAgICAgICAgICAgdHJ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIHRke1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG59XG5cbnRhYmxlIHRoZWFkLHRhYmxlIHRib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZGVkZWQgIWltcG9ydGFudDtcbn1cbi5zcGVjaWZpY2F0aW9ue1xuICAgIGlvbi1yb3d7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIGlvbi1jb2x7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMFxuICAgIH1cbiAgICB0aGVhZHtcbiAgICAgICAgdGh7XG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgIHRleHQtYWxpZ24gOmxlZnQ7XG4gICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4ucmljZXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLmJsYWNre1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59XG5cblxudGFibGUgdGJvZHkgdHIgdGR7XG4gICAgY29sb3I6ICM5MkIyNDM7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZHtcbiAgICAuaW1hZ2V7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG4udHlwZS1jb2x1bW5ze1xuICAgIHBhZGRpbmctbGVmdDogNDBweFxufVxuLnBsLTQwe1xuICAgIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xufVxuLnBsLTYwe1xuICAgIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xufVxudGFibGUgdGJvZHl7XG4gICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbn1cbnRib2R5IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlOWIxO1xufVxuXG4jY2FyZCB0aHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0LS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuI2NhcmR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIHBhZGRpbmctYm90dG9tOiA4NXB4O1xufSIsIi5nYWxsZXJ5Q29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucHJpY2UtdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IGltcG9ydGFudDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IGltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB7XG4gIGhlaWdodDogMzVweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG5cbnRhYmxlIHRoZWFkLCB0YWJsZSB0Ym9keSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWRlZGVkICFpbXBvcnRhbnQ7XG59XG5cbi5zcGVjaWZpY2F0aW9uIGlvbi1yb3cge1xuICBwYWRkaW5nOiAwO1xufVxuLnNwZWNpZmljYXRpb24gaW9uLWNvbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5zcGVjaWZpY2F0aW9uIHRoZWFkIHRoIHtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5yaWNldHlwZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4ucmljZXR5cGUgLmJsYWNrIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgY29sb3I6ICM5MkIyNDM7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZCAuaW1hZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50eXBlLWNvbHVtbnMge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbi5wbC00MCB7XG4gIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4ucGwtNjAge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxudGFibGUgdGJvZHkge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xufVxuXG50Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU5YjE7XG59XG5cbiNjYXJkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4jY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIHBhZGRpbmctYm90dG9tOiA4NXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/gallerydetails/gallerydetails.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/gallerydetails/gallerydetails.page.ts ***!
  \*******************************************************/
/*! exports provided: GallerydetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerydetailsPage", function() { return GallerydetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _imageprev_imageprev_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imageprev/imageprev.page */ "./src/app/imageprev/imageprev.page.ts");






let GallerydetailsPage = class GallerydetailsPage {
    constructor(actRoute, apiser, modalCtrl) {
        this.actRoute = actRoute;
        this.apiser = apiser;
        this.modalCtrl = modalCtrl;
        this.slideOpts = {
            initialSlide: 1,
            slidesPerView: 1,
            spaceBetween: 5,
            freeMode: true,
            pagination: false,
            speed: 600,
            autoplay: true,
            loop: false
        };
        this.galleryId = this.actRoute.snapshot.paramMap.get('galleryId');
        this.imageUrl = this.apiser.imageUrl;
        this.getGalleryDetails(this.galleryId);
        this.userFirstName = localStorage.getItem('name')[0];
    }
    ngOnInit() {
    }
    getGalleryDetails(galleryId) {
        this.apiser.presentLoader("Loading gallery details...");
        this.apiser.getGalleryData(galleryId).then((res) => {
            this.apiser.loaderCtrl.dismiss();
            this.galleryData = res.data;
            this.spec = res.data.specification;
            console.log(this.spec);
        }, (err) => {
        });
    }
    openModal(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _imageprev_imageprev_page__WEBPACK_IMPORTED_MODULE_5__["ImageprevPage"],
                componentProps: { img: image }
            });
            yield modal.present();
        });
    }
};
GallerydetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
GallerydetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallerydetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallerydetails.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallerydetails/gallerydetails.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallerydetails.page.scss */ "./src/app/gallerydetails/gallerydetails.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], GallerydetailsPage);



/***/ })

}]);
//# sourceMappingURL=gallerydetails-gallerydetails-module-es2015.js.map