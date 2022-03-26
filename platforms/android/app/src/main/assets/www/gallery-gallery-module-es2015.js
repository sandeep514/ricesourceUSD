(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"content\" class=\"bg-lightgreen\">\n\t<div class=\"header-data green\" >\n\n\t\t<div class=\"header-content\">\n\t\t\t<ion-row class=\"\">\n\t\t\t\t<ion-col size=\"3\" align=\"center\">\n\t\t\t\t\t<div class=\"user-profile-icon\">\n\t\t\t\t\t\t<span> {{ userFirstName }} </span>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" align=\"center\">\n\t\t\t\t\t<h3>Gallery</h3>\n\t\t\t\t</ion-col>\n\t\t\t\t<!-- <ion-col size=\"3\" align=\"right\" class=\"notification\">\n\t\t\t\t\t<ion-icon name=\"notifications\"></ion-icon>\n\t\t\t\t\t<span class=\"badge\">2</span>\n\t\t\t\t</ion-col> -->\n\t\t\t</ion-row>\n\t\t</div>\n\n\t\t<ion-row class=\"m020 mt30\">\n\t\t\t<ion-col size=\"12\" style=\"height: 70px;\">\n\t\t\t\t<ng-container>\n\t\t\t\t\t<ion-item class=\"green\">\n\t\t\t\t\t\t<ion-label>Rice Type</ion-label>\n\t\t\t\t\t\t<ion-select interface=\"popover\" (ionChange)=\"getRiceType($event)\" value=\"basmati\">\n\t\t\t\t\t\t\t<ion-select-option value=\"basmati\" selected=\"selected\">Basmati</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"nonbasmati\">Non Basmati</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ng-container>\t\t\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t</div>\n\t\n\t<ng-container>\n\t\t<div class=\"galleryImages m020 mt10\">\n\t\t\t\n\t\t\t<ion-row>\n\n\t\t\t\t<ng-container *ngIf=\"riceTypeAvailable == 'basmati' \">\n\t\t\t\t\t<ng-container *ngIf=\"basmartiGallery == '' \">\n\t\t\t\t\t\t<ion-col class=\"12\">\n\t\t\t\t\t\t\t<div class=\"center w-100 color-black\">\n\t\t\t\t\t\t\t\t<h3>Basmati gallery not available</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t\n\t\t\t\t\t<ng-container *ngIf=\"basmartiGallery != '' \">\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"galleycard\" *ngFor=\"let list of basmartiGallery\" (click)=\"getGalleryData(list.id)\">\n\t\t\t\t\t\t\t<div class=\"galleryImage h-200\" >\n\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/gallery/{{ list.attachment }}\" style=\"width: 190px;height: 130px;padding: 0 5px;\" alt=\"{{ list.title }}\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<p class=\"p0 m0 green center font-lightgreen m05\" style=\"padding: 5px;margin: 0px 5px 0px 4px;font-size: 13px\">{{ list.title | uppercase }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"galleryoverlay\">\n\t\t\t\t\t\t\t\t<div class=\"riceType\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"p0 m0 \">{{ list.type | uppercase }}</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"riceTypeAvailable == 'nonbasmati'\">\n\t\t\t\t\t<ng-container *ngIf=\"nonbasmartiGallery == '' \">\n\t\t\t\t\t\t<div class=\"center w-100 color-black\">\n\t\t\t\t\t\t\t<h3>Non Basmati gallery not available</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\n\t\t\t\t\t<ng-container *ngIf=\"nonbasmartiGallery != '' \">\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"galleycard\" *ngFor=\"let list of nonbasmartiGallery\" (click)=\"getGalleryData(list.id)\">\n\t\t\t\t\t\t\t<div class=\"galleryImage\" >\n\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/gallery/{{ list.attachment }}\" style=\"width: 190px;height: 130px;padding: 0 5px;\" alt=\"{{ list.title }}\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<p class=\"p0 m0 green center font-lightgreen m05\" style=\"padding: 5px;margin: 0px 5px 0px 4px;font-size: 13px\">{{ list.title }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"galleryoverlay\">\n\t\t\t\t\t\t\t\t<div class=\"riceType\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"p0 m0 \">{{ list.type | uppercase }}</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ng-container>\n\t\t\t</ion-row>\n\t\t</div>\n\t</ng-container>\n<app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/gallery/gallery-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/gallery/gallery-routing.module.ts ***!
  \***************************************************/
/*! exports provided: GalleryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageRoutingModule", function() { return GalleryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery.page */ "./src/app/gallery/gallery.page.ts");




const routes = [
    {
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_3__["GalleryPage"]
    }
];
let GalleryPageRoutingModule = class GalleryPageRoutingModule {
};
GalleryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GalleryPageRoutingModule);



/***/ }),

/***/ "./src/app/gallery/gallery.module.ts":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.module.ts ***!
  \*******************************************/
/*! exports provided: GalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery-routing.module */ "./src/app/gallery/gallery-routing.module.ts");
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery.page */ "./src/app/gallery/gallery.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");







// import { ContactmodalPageModule } from '../contactmodal/contactmodal.module';

let GalleryPageModule = class GalleryPageModule {
};
GalleryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            // ContactmodalPageModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__["GalleryPageRoutingModule"]
        ],
        declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
    })
], GalleryPageModule);



/***/ }),

/***/ "./src/app/gallery/gallery.page.scss":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-profile-icon {\n  width: 50px;\n  background-color: #606060;\n  border-radius: 50px;\n  height: 50px;\n  line-height: 50px;\n  margin-left: 15px;\n  margin-top: 10px;\n}\n.user-profile-icon span {\n  color: #FFF;\n  font-size: 30px;\n}\n.notification ion-icon {\n  font-size: 38px;\n  margin-top: 15px;\n  margin-right: 10px;\n}\n.notification .badge {\n  background-color: #ad362d;\n  height: 17px;\n  width: 17px;\n  color: #FFF;\n  border-radius: 50px;\n  display: inline-block;\n  font-size: 12px;\n  text-align: center;\n  line-height: 17px;\n  right: 16px;\n  position: absolute;\n  top: 19px;\n}\n.galleryImages > ion-row {\n  height: 100%;\n  overflow: scroll;\n}\n.galleryImages {\n  width: 89%;\n  height: 68%;\n  padding-bottom: 14%;\n}\n.galleryImages ion-col {\n  padding: 2px;\n  margin: 0;\n  height: 134px;\n}\n.galleryImages .galleryoverlay {\n  background: #cdb58e;\n  color: white;\n  position: absolute;\n  z-index: 999;\n  top: 2px;\n  width: 92%;\n  text-align: center;\n  padding: 56px 0px;\n  opacity: 0.7;\n  left: 6px;\n}\n.p0 {\n  padding: 0;\n}\n.m0 {\n  margin: 0;\n}\nhr {\n  background: white;\n  margin: 2px 15px;\n}\n.galleryImage {\n  max-width: 100%;\n  margin: 0 auto;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.w-100 {\n  width: 100%;\n  color: white;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.galleycard {\n  margin-bottom: 55px !important;\n}\n.color-black {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9yaWNlX21vYmlsZS9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNFUjtBREdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQVI7QURJQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDREo7QURFSTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ0FSO0FERUk7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0FSO0FER0E7RUFDSSxVQUFBO0FDQUo7QURFQTtFQUNJLFNBQUE7QUNDSjtBRENBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0VKO0FER0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDQUo7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QURDQTtFQUNJLGdCQUFBO0FDRUo7QURBQTtFQUNJLDhCQUFBO0FDR0o7QUREQTtFQUNJLFlBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1wcm9maWxlLWljb24ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLmJhZGdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FkMzYyZDtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDE5cHg7XG4gICAgfVxufVxuXG4uZ2FsbGVyeUltYWdlcyA+IGlvbi1yb3d7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5nYWxsZXJ5SW1hZ2Vze1xuICAgIHdpZHRoOiA4OSU7XG4gICAgaGVpZ2h0OiA2OCU7XG4gICAgcGFkZGluZy1ib3R0b206IDE0JTtcbiAgICBpb24tY29se1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAxMzRweDtcbiAgICB9XG4gICAgLmdhbGxlcnlvdmVybGF5IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2NkYjU4ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIHdpZHRoOiA5MiU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNTZweCAwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgbGVmdDogNnB4O1xuICAgIH1cbn1cbi5wMHtcbiAgICBwYWRkaW5nOiAwO1xufVxuLm0we1xuICAgIG1hcmdpbjogMDtcbn1cbmhye1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbjogMnB4IDE1cHg7XG59XG4vLyAuZ3JlZW57XG4vLyAgICAgLy8gYmFja2dyb3VuZDogIzBEQ0MxOFxuLy8gfVxuLmdhbGxlcnlJbWFnZXtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi53LTEwMHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubXQtMjB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5nYWxsZXljYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1NXB4ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItYmxhY2t7XG4gICAgY29sb3I6IGJsYWNrXG59IiwiLnVzZXItcHJvZmlsZS1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnVzZXItcHJvZmlsZS1pY29uIHNwYW4ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubm90aWZpY2F0aW9uIC5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDM2MmQ7XG4gIGhlaWdodDogMTdweDtcbiAgd2lkdGg6IDE3cHg7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgcmlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xufVxuXG4uZ2FsbGVyeUltYWdlcyA+IGlvbi1yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5nYWxsZXJ5SW1hZ2VzIHtcbiAgd2lkdGg6IDg5JTtcbiAgaGVpZ2h0OiA2OCU7XG4gIHBhZGRpbmctYm90dG9tOiAxNCU7XG59XG4uZ2FsbGVyeUltYWdlcyBpb24tY29sIHtcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTM0cHg7XG59XG4uZ2FsbGVyeUltYWdlcyAuZ2FsbGVyeW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiAjY2RiNThlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICB0b3A6IDJweDtcbiAgd2lkdGg6IDkyJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1NnB4IDBweDtcbiAgb3BhY2l0eTogMC43O1xuICBsZWZ0OiA2cHg7XG59XG5cbi5wMCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tMCB7XG4gIG1hcmdpbjogMDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAycHggMTVweDtcbn1cblxuLmdhbGxlcnlJbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4udy0xMDAge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubXQtMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZ2FsbGV5Y2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDU1cHggIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJsYWNrIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/gallery/gallery.page.ts":
/*!*****************************************!*\
  !*** ./src/app/gallery/gallery.page.ts ***!
  \*****************************************/
/*! exports provided: GalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPage", function() { return GalleryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let GalleryPage = class GalleryPage {
    constructor(restApi, navctrl) {
        this.restApi = restApi;
        this.navctrl = navctrl;
        this.basmartiGallery = '';
        this.nonbasmartiGallery = '';
        this.getGallery();
        this.imagePre = this.restApi.imageUrl;
        this.riceTypeAvailable = 'basmati';
        this.userFirstName = localStorage.getItem('name')[0];
    }
    ngOnInit() {
    }
    getGallery() {
        this.restApi.presentLoader('Loading gallery...');
        return new Promise((resolve, reject) => {
            this.restApi.getGallery().then((res) => {
                if ('basmati' in res.data) {
                    this.basmartiGallery = res.data.basmati;
                }
                if ('nonbasmati' in res.data) {
                    this.nonbasmartiGallery = res.data.nonbasmati;
                }
                this.listGallery = res.data;
                this.restApi.loaderCtrl.dismiss();
            }, (err) => {
                console.log(err);
            });
        });
    }
    getGalleryData(id) {
        this.navctrl.navigateForward(['gallerydetails', { galleryId: id }]);
    }
    getRiceType(event) {
        this.riceTypeAvailable = event.detail.value;
    }
};
GalleryPage.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
GalleryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery.page.scss */ "./src/app/gallery/gallery.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], GalleryPage);



/***/ })

}]);
//# sourceMappingURL=gallery-gallery-module-es2015.js.map