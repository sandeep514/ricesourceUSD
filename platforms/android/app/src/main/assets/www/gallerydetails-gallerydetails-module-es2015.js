(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallerydetails-gallerydetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallerydetails/gallerydetails.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallerydetails/gallerydetails.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"content\" >\n\t<div>\n\t\t<div class=\"lightgreen\" >\n\t\t\t<div class=\"header-content\">\n\t\t\t\t<ion-row class=\"\">\n\t\t\t\t\t<ion-col size=\"3\" align=\"center\">\n\t\t\t\t\t\t<div class=\"user-profile-icon\">\n\t\t\t\t\t\t\t<span>{{ userFirstName }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\" align=\"center\">\n\t\t\t\t\t\t<h4>Product Details</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</div>\n\n\t\n\t\t<ion-row class=\"rice-gallery\" *ngIf=\"galleryData != undefined \">\n\t\t\t<ion-col\n\t\t\t\tstyle=\"padding: 0px 0px 15px 0px;background-color: #fffbd6;border-radius: 0px 0px 25px 25px;overflow: hidden;\">\n\t\t\t\t<ion-slides pager=\"false\" [options]=\"slideOpts\">\n\t\t\t\t\t<ion-slide *ngIf=\"galleryData.attachment != null\" style=\"width: 100%;padding: 15px;\">\n\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/gallery/'+galleryData.attachment )\"\n\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/gallery/{{ galleryData.attachment }}\" class=\"slide-image\">\n\t\t\t\t\t</ion-slide>\n\t\t\t\t\t<ion-slide *ngIf=\"galleryData.attachment2 != null\" style=\"width: 100%;padding: 15px;\">\n\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/gallery/'+galleryData.attachment2)\"\n\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/gallery/{{ galleryData.attachment2 }}\" class=\"slide-image\">\n\t\t\t\t\t</ion-slide>\n\t\t\t\t</ion-slides>\n\t\t\t</ion-col>\n\t\t</ion-row>\t\t\n\t\t\n\t\t<ion-row *ngIf=\"galleryData != undefined \">\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h4 class=\"mt-2 pt-0\" style=\"text-align: center\">{{ galleryData.title }}</h4>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t\n\t\t<ion-row class=\"ion-padding table-row padd-5\" style=\"padding-top: 0px;\">\n\t\t\n\t\t\t<ion-col class=\"price-table dashboard\">\n\t\t\t\t<table class=\"table \">\n\t\t\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<ng-container *ngFor=\"let list of spec | keyvalue\">\n\t\t\t\t\t\t\t<tr *ngFor=\"let listitems of list.value | keyvalue\">\n\t\t\t\t\t\t\t\t<td class=\"sticky-col first-col left pl-10\" style=\"font-family: 'Poppins-SemiBold';\">\n\t\t\t\t\t\t\t\t\t{{ listitems.key }}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"type-columns pl-60\" style=\"width:180px\">\n\t\t\t\t\t\t\t\t\t<div class=\"priceData \" style=\"font-family: 'Poppins-Regular';\">\n\t\t\t\t\t\t\t\t\t\t{{ listitems.value }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</tbody>\n\t\t\n\t\t\t\t</table>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<app-menu></app-menu>\n\t</div>\n</ion-content>\n\t");

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
/* harmony default export */ __webpack_exports__["default"] = (".galleryContent {\n  padding: 0px;\n}\n\n.ricetype {\n  font-size: 18px;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: transparent important;\n}\n\n.price-table table thead tr th {\n  background-color: transparent important;\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n}\n\ntable thead, table tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 2px solid #ededed !important;\n}\n\n.specification ion-row {\n  padding: 0;\n}\n\n.specification ion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.specification thead th {\n  font-weight: inherit;\n  text-align: left;\n}\n\n.ricetype {\n  font-size: 24px;\n  font-family: Arial;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.ricetype .black {\n  color: #000;\n}\n\ntable tbody tr td {\n  color: #000;\n  font-size: 14px !important;\n}\n\n.card .image {\n  text-align: center;\n}\n\n.type-columns {\n  padding-left: 40px;\n}\n\n.pl-40 {\n  padding-left: 40px !important;\n}\n\n.pl-60 {\n  padding-left: 40px !important;\n}\n\ntable tbody {\n  border: 0px !important;\n}\n\n#card th {\n  background-color: transparent !important;\n  --background-color: transparent !important;\n}\n\n#card {\n  position: absolute;\n  width: -webkit-fill-available;\n  padding-bottom: 25px;\n  margin: 0px;\n  border-radius: 0px 0px 22px 22px;\n}\n\n.swiper-slide img {\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9nYWxsZXJ5ZGV0YWlscy9nYWxsZXJ5ZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2dhbGxlcnlkZXRhaWxzL2dhbGxlcnlkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURJSTtFQUNJLFdBQUE7RUF3QkEsZUFBQTtBQ3hCUjs7QURFWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7QUNBaEI7O0FEQ2dCO0VBQ0ksdUNBQUE7RUFDQSwrQkFBQTtBQ0NwQjs7QURLWTtFQUNJLFlBQUE7QUNIaEI7O0FESWdCO0VBQ0ksZUFBQTtBQ0ZwQjs7QURhQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQ0FBQTtBQ1ZKOztBRGFJO0VBQ0ksVUFBQTtBQ1ZSOztBRFlJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNWUjs7QURhUTtFQUVJLG9CQUFBO0VBQ0EsZ0JBQUE7QUNaWjs7QURpQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FDZEo7O0FEZUk7RUFDSSxXQUFBO0FDYlI7O0FEa0JBO0VBRUksV0FBQTtFQUNBLDBCQUFBO0FDaEJKOztBRG1CSTtFQUNJLGtCQUFBO0FDaEJSOztBRG1CQTtFQUNJLGtCQUFBO0FDaEJKOztBRGtCQTtFQUNJLDZCQUFBO0FDZko7O0FEaUJBO0VBQ0ksNkJBQUE7QUNkSjs7QURnQkE7RUFDSSxzQkFBQTtBQ2JKOztBRG1CQTtFQUNDLHdDQUFBO0VBQ0EsMENBQUE7QUNoQkQ7O0FEa0JBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDZko7O0FEa0JJO0VBQ0ksbUJBQUE7QUNmUiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnlkZXRhaWxzL2dhbGxlcnlkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5Q29udGVudHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5yaWNldHlwZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wcmljZS10YWJsZXtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHRhYmxle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGhlYWR7XG4gICAgICAgICAgICB0cntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IGltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0aHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRib2R5e1xuICAgICAgICAgICAgdHJ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIHRke1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG59XG5cbnRhYmxlIHRoZWFkLHRhYmxlIHRib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZGVkZWQgIWltcG9ydGFudDtcbn1cbi5zcGVjaWZpY2F0aW9ue1xuICAgIGlvbi1yb3d7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIGlvbi1jb2x7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMFxuICAgIH1cbiAgICB0aGVhZHtcbiAgICAgICAgdGh7XG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgIHRleHQtYWxpZ24gOmxlZnQ7XG4gICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4ucmljZXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLmJsYWNre1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59XG5cblxudGFibGUgdGJvZHkgdHIgdGR7XG4gICAgLy8gY29sb3I6ICM5MkIyNDM7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZHtcbiAgICAuaW1hZ2V7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG4udHlwZS1jb2x1bW5ze1xuICAgIHBhZGRpbmctbGVmdDogNDBweFxufVxuLnBsLTQwe1xuICAgIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xufVxuLnBsLTYwe1xuICAgIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xufVxudGFibGUgdGJvZHl7XG4gICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbn1cbi8vIHRib2R5IHRyOm50aC1jaGlsZChvZGQpIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlOWIxO1xuLy8gfVxuXG4jY2FyZCB0aHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0LS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuI2NhcmR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjJweCAyMnB4O1xufVxuLnN3aXBlci1zbGlkZXtcbiAgICBpbWd7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgfVxufSIsIi5nYWxsZXJ5Q29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucHJpY2UtdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IGltcG9ydGFudDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IGltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB7XG4gIGhlaWdodDogMzVweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxudGFibGUgdGhlYWQsIHRhYmxlIHRib2R5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZGVkZWQgIWltcG9ydGFudDtcbn1cblxuLnNwZWNpZmljYXRpb24gaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDA7XG59XG4uc3BlY2lmaWNhdGlvbiBpb24tY29sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnNwZWNpZmljYXRpb24gdGhlYWQgdGgge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cbi5yaWNldHlwZSAuYmxhY2sge1xuICBjb2xvcjogIzAwMDtcbn1cblxudGFibGUgdGJvZHkgdHIgdGQge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIC5pbWFnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnR5cGUtY29sdW1ucyB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLnBsLTQwIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC02MCB7XG4gIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0Ym9keSB7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNjYXJkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4jY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMnB4IDIycHg7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn0iXX0= */");

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