(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"content\" class=\"\">\n\t<div class=\"header-data\" style=\"height: auto;\">\n\n\t\t<div class=\"header-content\">\n\t\t\t<ion-row class=\"\">\n\t\t\t\t<ion-col size=\"3\" align=\"center\">\n\t\t\t\t\t<div class=\"user-profile-icon\">\n\t\t\t\t\t\t<span> {{ userFirstName }} </span>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" align=\"center\">\n\t\t\t\t\t<h3>Gallery</h3>\n\t\t\t\t</ion-col>\n\t\t\t\t<!-- <ion-col size=\"3\" align=\"right\" class=\"notification\">\n\t\t\t\t\t<ion-icon name=\"notifications\"></ion-icon>\n\t\t\t\t\t<span class=\"badge\">2</span>\n\t\t\t\t</ion-col> -->\n\t\t\t</ion-row>\n\t\t</div>\n\n\t\t<ion-row class=\"m020 mt30\">\n\t\t\t<ion-col size=\"12\" style=\"height: 70px;\">\n\t\t\t\t<ng-container>\n\t\t\t\t\t<ion-item class=\"\" style=\"--background: #EEFCCE;border-radius: 100px;\">\n\t\t\t\t\t\t<ion-label>Rice Type</ion-label>\n\t\t\t\t\t\t<ion-select  (ionChange)=\"getRiceType($event)\" value=\"basmati\">\n\t\t\t\t\t\t\t<ion-select-option value=\"basmati\" selected=\"selected\">Basmati</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"nonbasmati\">Non Basmati</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ng-container>\t\t\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t</div>\n\t\n\t<ng-container>\n\t\t<div class=\"galleryImages\">\n\t\t\t\n\t\t\t<ion-row style=\"justify-content: space-around;padding-bottom: 100px;\">\n\n\t\t\t\t<ng-container *ngIf=\"riceTypeAvailable == 'basmati' \">\n\t\t\t\t\t<ng-container *ngIf=\"basmartiGallery == '' \">\n\t\t\t\t\t\t<ion-col class=\"12\">\n\t\t\t\t\t\t\t<div class=\"center w-100 color-black\">\n\t\t\t\t\t\t\t\t<h3>Basmati gallery not available</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t\n\t\t\t\t\t<ng-container *ngIf=\"basmartiGallery != '' \">\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"galleycard\" *ngFor=\"let list of basmartiGallery\" (click)=\"getGalleryData(list.id)\">\n\t\t\t\t\t\t\t<div class=\"\" >\n\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/gallery/{{ list.attachment }}\" style=\"width: 190px;height: 130px;border-radius: 15px;overflow: hidden;\" alt=\"{{ list.title }}\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<p style=\"padding: 0;margin: 0;font-family: 'Poppins-Regular';margin-top: 5px;\" class=\"\">{{list.title | uppercase }}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- <div class=\"galleryoverlay\">\n\t\t\t\t\t\t\t\t<div class=\"riceType\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"p0 m0 \">{{ list.type | uppercase }}</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"riceTypeAvailable == 'nonbasmati'\">\n\t\t\t\t\t<ng-container *ngIf=\"nonbasmartiGallery == '' \">\n\t\t\t\t\t\t<div class=\"center w-100 color-black\">\n\t\t\t\t\t\t\t<h3>Non Basmati gallery not available</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\n\t\t\t\t\t<ng-container *ngIf=\"nonbasmartiGallery != '' \">\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"galleycard\" *ngFor=\"let list of nonbasmartiGallery\" (click)=\"getGalleryData(list.id)\">\n\t\t\t\t\t\t\t<div class=\"galleryImage\" >\n\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/gallery/{{ list.attachment }}\" style=\"width: 190px;height: 130px;border-radius: 15px;overflow: hidden;\" alt=\"{{ list.title }}\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<p style=\"padding: 0;margin: 0;font-family: 'Poppins-Regular';margin-top: 5px;\" class=\"\">{{list.title | uppercase }}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- <div class=\"galleryoverlay\">\n\t\t\t\t\t\t\t\t<div class=\"riceType\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"p0 m0 \">{{ list.type | uppercase }}</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ng-container>\n\t\t\t</ion-row>\n\t\t</div>\n\t</ng-container>\n\t<ng-container>\n\t\t<app-menu></app-menu>\n\t</ng-container>\n\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".user-profile-icon {\n  width: 50px;\n  background-color: #606060;\n  border-radius: 50px;\n  height: 50px;\n  line-height: 50px;\n  margin-left: 15px;\n  margin-top: 10px;\n}\n.user-profile-icon span {\n  color: #FFF;\n  font-size: 30px;\n}\n.notification ion-icon {\n  font-size: 38px;\n  margin-top: 15px;\n  margin-right: 10px;\n}\n.notification .badge {\n  background-color: #ad362d;\n  height: 17px;\n  width: 17px;\n  color: #FFF;\n  border-radius: 50px;\n  display: inline-block;\n  font-size: 12px;\n  text-align: center;\n  line-height: 17px;\n  right: 16px;\n  position: absolute;\n  top: 19px;\n}\n.galleryImages > ion-row {\n  height: 100%;\n  overflow: scroll;\n}\n.galleryImages {\n  width: 100%;\n}\n.galleryImages ion-col {\n  margin: 0;\n  padding: 10px;\n  border-radius: 15px;\n  width: 45% !important;\n  max-width: 45% !important;\n  box-shadow: 0px 5px 19px 0px rgba(0, 0, 0, 0.102);\n}\n.galleryImages .galleryoverlay {\n  background: #cdb58e;\n  color: white;\n  position: absolute;\n  z-index: 999;\n  top: 2px;\n  width: 92%;\n  text-align: center;\n  padding: 56px 0px;\n  opacity: 0.7;\n  left: 6px;\n}\n.p0 {\n  padding: 0;\n}\n.m0 {\n  margin: 0;\n}\nhr {\n  background: white;\n  margin: 2px 15px;\n}\n.galleryImage {\n  max-width: 100%;\n  margin: 0 auto;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.w-100 {\n  width: 100%;\n  color: white;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.galleycard {\n  margin-bottom: 10px !important;\n}\n.color-black {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNFUjtBREdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQVI7QURJQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxXQUFBO0FDREo7QURHSTtFQUNJLFNBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaURBQUE7QUNGUjtBREtJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNIUjtBRE1BO0VBQ0ksVUFBQTtBQ0hKO0FES0E7RUFDSSxTQUFBO0FDRko7QURJQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRE1BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0hKO0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUE7RUFDSSxnQkFBQTtBQ0RKO0FER0E7RUFDSSw4QkFBQTtBQ0FKO0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItcHJvZmlsZS1pY29uIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5iYWRnZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDM2MmQ7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxOXB4O1xuICAgIH1cbn1cblxuLmdhbGxlcnlJbWFnZXMgPiBpb24tcm93e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uZ2FsbGVyeUltYWdlc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDY4JTtcbiAgICBpb24tY29se1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDE5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDIpO1xuICAgICAgICAvLyBoZWlnaHQ6IDEzNHB4O1xuICAgIH1cbiAgICAuZ2FsbGVyeW92ZXJsYXkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2RiNThlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1NnB4IDBweDtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICBsZWZ0OiA2cHg7XG4gICAgfVxufVxuLnAwe1xuICAgIHBhZGRpbmc6IDA7XG59XG4ubTB7XG4gICAgbWFyZ2luOiAwO1xufVxuaHJ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luOiAycHggMTVweDtcbn1cbi8vIC5ncmVlbntcbi8vICAgICAvLyBiYWNrZ3JvdW5kOiAjMERDQzE4XG4vLyB9XG4uZ2FsbGVyeUltYWdle1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnctMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5tdC0yMHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmdhbGxleWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cbi5jb2xvci1ibGFja3tcbiAgICBjb2xvcjogYmxhY2tcbn0iLCIudXNlci1wcm9maWxlLWljb24ge1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjA2MDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udXNlci1wcm9maWxlLWljb24gc3BhbiB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5ub3RpZmljYXRpb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDM4cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ub3RpZmljYXRpb24gLmJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkMzYyZDtcbiAgaGVpZ2h0OiAxN3B4O1xuICB3aWR0aDogMTdweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICByaWdodDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE5cHg7XG59XG5cbi5nYWxsZXJ5SW1hZ2VzID4gaW9uLXJvdyB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmdhbGxlcnlJbWFnZXMge1xuICB3aWR0aDogMTAwJTtcbn1cbi5nYWxsZXJ5SW1hZ2VzIGlvbi1jb2wge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA0NSUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTAyKTtcbn1cbi5nYWxsZXJ5SW1hZ2VzIC5nYWxsZXJ5b3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6ICNjZGI1OGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRvcDogMnB4O1xuICB3aWR0aDogOTIlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDU2cHggMHB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIGxlZnQ6IDZweDtcbn1cblxuLnAwIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm0wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ociB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDJweCAxNXB4O1xufVxuXG4uZ2FsbGVyeUltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi53LTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tdC0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5nYWxsZXljYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYmxhY2sge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */");

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