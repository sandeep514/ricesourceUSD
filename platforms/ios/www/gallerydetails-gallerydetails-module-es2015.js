(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallerydetails-gallerydetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallerydetails/gallerydetails.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallerydetails/gallerydetails.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"content\">\n\t<div>\n\t\t<div style=\"height: 80%;\">\n\t\t\t<div class=\"lightgreen\">\n\t\t\t\t<div class=\"header-content\">\n\t\t\t\t\t<ion-row class=\"\">\n\t\t\t\t\t\t<ion-col size=\"3\" align=\"center\">\n\t\t\t\t\t\t\t<div class=\"user-profile-icon\">\n\t\t\t\t\t\t\t\t<span>{{ userFirstName }}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"6\" align=\"center\">\n\t\t\t\t\t\t\t<h4>Product Details</h4>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<ion-row class=\"rice-gallery\" *ngIf=\"galleryData != undefined \">\n\t\t\t\t<ion-col\n\t\t\t\t\tstyle=\"padding: 0px 0px 15px 0px;background-color: #fffbd6;border-radius: 0px 0px 25px 25px;overflow: hidden;\">\n\t\t\t\t\t<ion-slides pager=\"false\" [options]=\"slideOpts\">\n\t\t\t\t\t\t<ion-slide *ngIf=\"galleryData.attachment != null\" style=\"width: 100%;padding: 15px;\">\n\t\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/gallery/'+galleryData.attachment )\"\n\t\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/gallery/{{ galleryData.attachment }}\" class=\"slide-image\">\n\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t<ion-slide *ngIf=\"galleryData.attachment2 != null\" style=\"width: 100%;padding: 15px;\">\n\t\t\t\t\t\t\t<img (click)=\"openModal(imageUrl+'uploads/gallery/'+galleryData.attachment2)\"\n\t\t\t\t\t\t\t\tsrc=\"{{ imageUrl }}uploads/gallery/{{ galleryData.attachment2 }}\" class=\"slide-image\">\n\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t</ion-slides>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\n\t\t\t<ion-row *ngIf=\"galleryData != undefined \">\n\t\t\t\t<ion-col>\n\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t<h4 class=\"mt-2 pt-0\" style=\"text-align: center\">{{ galleryData.title }}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\n\t\t\t<ion-row class=\"ion-padding table-row padd-5\" style=\"padding-top: 0px;\">\n\n\t\t\t\t<ion-col class=\"price-table dashboard\">\n\t\t\t\t\t<table class=\"table \">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let list of spec | keyvalue\">\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let listitems of list.value | keyvalue\">\n\t\t\t\t\t\t\t\t\t<td class=\"sticky-col first-col left pl-10\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"font-family: 'Poppins-SemiBold';\">\n\t\t\t\t\t\t\t\t\t\t{{ listitems.key }}\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"type-columns pl-60\" style=\"width:180px\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"priceData \" style=\"font-family: 'Poppins-Regular';\">\n\t\t\t\t\t\t\t\t\t\t\t{{ listitems.value }}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t</table>\n\t\t\t\t\t<div style=\"height: 100px;\"></div>\n\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\t\t<app-menu></app-menu>\n\t</div>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".galleryContent {\n  padding: 0px;\n}\n\n.ricetype {\n  font-size: 18px;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: transparent important;\n}\n\n.price-table table thead tr th {\n  background-color: transparent important;\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n}\n\ntable thead, table tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 2px solid #ededed !important;\n}\n\n.specification ion-row {\n  padding: 0;\n}\n\n.specification ion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.specification thead th {\n  font-weight: inherit;\n  text-align: left;\n}\n\n.ricetype {\n  font-size: 24px;\n  font-family: Arial;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.ricetype .black {\n  color: #000;\n}\n\ntable tbody tr td {\n  color: #000;\n  font-size: 14px !important;\n}\n\n.card .image {\n  text-align: center;\n}\n\n.type-columns {\n  padding-left: 40px;\n}\n\n.pl-40 {\n  padding-left: 40px !important;\n}\n\n.pl-60 {\n  padding-left: 40px !important;\n}\n\ntable tbody {\n  border: 0px !important;\n}\n\n#card th {\n  background-color: transparent !important;\n  --background-color: transparent !important;\n}\n\n#card {\n  position: absolute;\n  width: -webkit-fill-available;\n  padding-bottom: 25px;\n  margin: 0px;\n  border-radius: 0px 0px 22px 22px;\n}\n\n.swiper-slide img {\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2dhbGxlcnlkZXRhaWxzL2dhbGxlcnlkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZ2FsbGVyeWRldGFpbHMvZ2FsbGVyeWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBRElJO0VBQ0ksV0FBQTtFQXdCQSxlQUFBO0FDeEJSOztBREVZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtBQ0FoQjs7QURDZ0I7RUFDSSx1Q0FBQTtFQUNBLCtCQUFBO0FDQ3BCOztBREtZO0VBQ0ksWUFBQTtBQ0hoQjs7QURJZ0I7RUFDSSxlQUFBO0FDRnBCOztBRGFBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDJDQUFBO0FDVko7O0FEYUk7RUFDSSxVQUFBO0FDVlI7O0FEWUk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ1ZSOztBRGFRO0VBRUksb0JBQUE7RUFDQSxnQkFBQTtBQ1paOztBRGlCQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUNkSjs7QURlSTtFQUNJLFdBQUE7QUNiUjs7QURrQkE7RUFFSSxXQUFBO0VBQ0EsMEJBQUE7QUNoQko7O0FEbUJJO0VBQ0ksa0JBQUE7QUNoQlI7O0FEbUJBO0VBQ0ksa0JBQUE7QUNoQko7O0FEa0JBO0VBQ0ksNkJBQUE7QUNmSjs7QURpQkE7RUFDSSw2QkFBQTtBQ2RKOztBRGdCQTtFQUNJLHNCQUFBO0FDYko7O0FEbUJBO0VBQ0Msd0NBQUE7RUFDQSwwQ0FBQTtBQ2hCRDs7QURrQkE7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUNmSjs7QURrQkk7RUFDSSxtQkFBQTtBQ2ZSIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeWRldGFpbHMvZ2FsbGVyeWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnlDb250ZW50e1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnJpY2V0eXBle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnByaWNlLXRhYmxle1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgdGFibGV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0aGVhZHtcbiAgICAgICAgICAgIHRye1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRoe1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCBpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGJvZHl7XG4gICAgICAgICAgICB0cntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgdGR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIH1cbn1cblxudGFibGUgdGhlYWQsdGFibGUgdGJvZHkge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VkZWRlZCAhaW1wb3J0YW50O1xufVxuLnNwZWNpZmljYXRpb257XG4gICAgaW9uLXJvd3tcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgaW9uLWNvbHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwXG4gICAgfVxuICAgIHRoZWFke1xuICAgICAgICB0aHtcbiAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1hbGlnbiA6bGVmdDtcbiAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5yaWNldHlwZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAuYmxhY2t7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbn1cblxuXG50YWJsZSB0Ym9keSB0ciB0ZHtcbiAgICAvLyBjb2xvcjogIzkyQjI0MztcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cbi5jYXJke1xuICAgIC5pbWFnZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cbi50eXBlLWNvbHVtbnN7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4XG59XG4ucGwtNDB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4ucGwtNjB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG50YWJsZSB0Ym9keXtcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xufVxuLy8gdGJvZHkgdHI6bnRoLWNoaWxkKG9kZCkge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU5YjE7XG4vLyB9XG5cbiNjYXJkIHRoe1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXHQtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4jY2FyZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMnB4IDIycHg7XG59XG4uc3dpcGVyLXNsaWRle1xuICAgIGltZ3tcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB9XG59IiwiLmdhbGxlcnlDb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wcmljZS10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ucHJpY2UtdGFibGUgdGFibGUgdGhlYWQgdHIge1xuICBoZWlnaHQ6IDM0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgaW1wb3J0YW50O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG50YWJsZSB0aGVhZCwgdGFibGUgdGJvZHkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VkZWRlZCAhaW1wb3J0YW50O1xufVxuXG4uc3BlY2lmaWNhdGlvbiBpb24tcm93IHtcbiAgcGFkZGluZzogMDtcbn1cbi5zcGVjaWZpY2F0aW9uIGlvbi1jb2wge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uc3BlY2lmaWNhdGlvbiB0aGVhZCB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucmljZXR5cGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuLnJpY2V0eXBlIC5ibGFjayB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQgLmltYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udHlwZS1jb2x1bW5zIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG4ucGwtNDAge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLnBsLTYwIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRib2R5IHtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbn1cblxuI2NhcmQgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbiNjYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIycHggMjJweDtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufSJdfQ== */");

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