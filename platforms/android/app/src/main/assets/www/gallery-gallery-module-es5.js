function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html ***!
    \*********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGalleryGalleryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content id=\"content\" class=\"bg-lightgreen\">\n\t<div class=\"header-data green\" >\n\n\t\t<div class=\"header-content\">\n\t\t\t<ion-row class=\"\">\n\t\t\t\t<ion-col size=\"3\" align=\"center\">\n\t\t\t\t\t<div class=\"user-profile-icon\">\n\t\t\t\t\t\t<span> {{ userFirstName }} </span>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" align=\"center\">\n\t\t\t\t\t<h3>Gallery</h3>\n\t\t\t\t</ion-col>\n\t\t\t\t<!-- <ion-col size=\"3\" align=\"right\" class=\"notification\">\n\t\t\t\t\t<ion-icon name=\"notifications\"></ion-icon>\n\t\t\t\t\t<span class=\"badge\">2</span>\n\t\t\t\t</ion-col> -->\n\t\t\t</ion-row>\n\t\t</div>\n\n\t\t<ion-row class=\"m020 mt30\">\n\t\t\t<ion-col size=\"12\" style=\"height: 70px;\">\n\t\t\t\t<ng-container>\n\t\t\t\t\t<ion-item class=\"green\">\n\t\t\t\t\t\t<ion-label>Rice Type</ion-label>\n\t\t\t\t\t\t<ion-select interface=\"popover\" (ionChange)=\"getRiceType($event)\" value=\"basmati\">\n\t\t\t\t\t\t\t<ion-select-option value=\"basmati\" selected=\"selected\">Basmati</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"nonbasmati\">Non Basmati</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ng-container>\t\t\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t</div>\n\t\n\t<ng-container>\n\t\t<div class=\"galleryImages m020 mt10\">\n\t\t\t\n\t\t\t<ion-row>\n\n\t\t\t\t<ng-container *ngIf=\"riceTypeAvailable == 'basmati' \">\n\t\t\t\t\t<ng-container *ngIf=\"basmartiGallery == '' \">\n\t\t\t\t\t\t<ion-col class=\"12\">\n\t\t\t\t\t\t\t<div class=\"center w-100 color-black\">\n\t\t\t\t\t\t\t\t<h3>Basmati gallery not available</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t\n\t\t\t\t\t<ng-container *ngIf=\"basmartiGallery != '' \">\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"galleycard\" *ngFor=\"let list of basmartiGallery\" (click)=\"getGalleryData(list.id)\">\n\t\t\t\t\t\t\t<div class=\"galleryImage h-200\" >\n\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/gallery/{{ list.attachment }}\" style=\"width: 190px;height: 130px;padding: 0 5px;\" alt=\"{{ list.title }}\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<p class=\"p0 m0 green center font-lightgreen m05\" style=\"padding: 5px;margin: 0px 5px 0px 4px;font-size: 13px\">{{ list.title | uppercase }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"galleryoverlay\">\n\t\t\t\t\t\t\t\t<div class=\"riceType\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"p0 m0 \">{{ list.type | uppercase }}</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"riceTypeAvailable == 'nonbasmati'\">\n\t\t\t\t\t<ng-container *ngIf=\"nonbasmartiGallery == '' \">\n\t\t\t\t\t\t<div class=\"center w-100 color-black\">\n\t\t\t\t\t\t\t<h3>Non Basmati gallery not available</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\n\t\t\t\t\t<ng-container *ngIf=\"nonbasmartiGallery != '' \">\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"galleycard\" *ngFor=\"let list of nonbasmartiGallery\" (click)=\"getGalleryData(list.id)\">\n\t\t\t\t\t\t\t<div class=\"galleryImage\" >\n\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/gallery/{{ list.attachment }}\" style=\"width: 190px;height: 130px;padding: 0 5px;\" alt=\"{{ list.title }}\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<p class=\"p0 m0 green center font-lightgreen m05\" style=\"padding: 5px;margin: 0px 5px 0px 4px;font-size: 13px\">{{ list.title }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"galleryoverlay\">\n\t\t\t\t\t\t\t\t<div class=\"riceType\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"p0 m0 \">{{ list.type | uppercase }}</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ng-container>\n\t\t\t</ion-row>\n\t\t</div>\n\t</ng-container>\n<app-menu></app-menu>\n</ion-content>";

    /***/
  },

  /***/"./src/app/gallery/gallery-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/gallery/gallery-routing.module.ts ***!
    \***************************************************/
  /*! exports provided: GalleryPageRoutingModule */
  /***/
  function srcAppGalleryGalleryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GalleryPageRoutingModule", function () {
      return GalleryPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _gallery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./gallery.page */"./src/app/gallery/gallery.page.ts");
    var routes = [{
      path: '',
      component: _gallery_page__WEBPACK_IMPORTED_MODULE_3__["GalleryPage"]
    }];
    var GalleryPageRoutingModule = /*#__PURE__*/_createClass(function GalleryPageRoutingModule() {
      _classCallCheck(this, GalleryPageRoutingModule);
    });
    GalleryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GalleryPageRoutingModule);

    /***/
  },

  /***/"./src/app/gallery/gallery.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/gallery/gallery.module.ts ***!
    \*******************************************/
  /*! exports provided: GalleryPageModule */
  /***/
  function srcAppGalleryGalleryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function () {
      return GalleryPageModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./gallery-routing.module */"./src/app/gallery/gallery-routing.module.ts");
    /* harmony import */
    var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./gallery.page */"./src/app/gallery/gallery.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");

    // import { ContactmodalPageModule } from '../contactmodal/contactmodal.module';

    var GalleryPageModule = /*#__PURE__*/_createClass(function GalleryPageModule() {
      _classCallCheck(this, GalleryPageModule);
    });
    GalleryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
      // ContactmodalPageModule,
      _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__["GalleryPageRoutingModule"]],
      declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
    })], GalleryPageModule);

    /***/
  },

  /***/"./src/app/gallery/gallery.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/gallery/gallery.page.scss ***!
    \*******************************************/
  /*! exports provided: default */
  /***/
  function srcAppGalleryGalleryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".user-profile-icon {\n  width: 50px;\n  background-color: #606060;\n  border-radius: 50px;\n  height: 50px;\n  line-height: 50px;\n  margin-left: 15px;\n  margin-top: 10px;\n}\n.user-profile-icon span {\n  color: #FFF;\n  font-size: 30px;\n}\n.notification ion-icon {\n  font-size: 38px;\n  margin-top: 15px;\n  margin-right: 10px;\n}\n.notification .badge {\n  background-color: #ad362d;\n  height: 17px;\n  width: 17px;\n  color: #FFF;\n  border-radius: 50px;\n  display: inline-block;\n  font-size: 12px;\n  text-align: center;\n  line-height: 17px;\n  right: 16px;\n  position: absolute;\n  top: 19px;\n}\n.galleryImages > ion-row {\n  height: 100%;\n  overflow: scroll;\n}\n.galleryImages {\n  width: 89%;\n  height: 68%;\n  padding-bottom: 14%;\n}\n.galleryImages ion-col {\n  padding: 2px;\n  margin: 0;\n  height: 134px;\n}\n.galleryImages .galleryoverlay {\n  background: #cdb58e;\n  color: white;\n  position: absolute;\n  z-index: 999;\n  top: 2px;\n  width: 92%;\n  text-align: center;\n  padding: 56px 0px;\n  opacity: 0.7;\n  left: 6px;\n}\n.p0 {\n  padding: 0;\n}\n.m0 {\n  margin: 0;\n}\nhr {\n  background: white;\n  margin: 2px 15px;\n}\n.galleryImage {\n  max-width: 100%;\n  margin: 0 auto;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.w-100 {\n  width: 100%;\n  color: white;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.galleycard {\n  margin-bottom: 55px !important;\n}\n.color-black {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkucGFnZS5zY3NzIiwic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRVI7QURHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURFSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0FSO0FESUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0RKO0FERUk7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNBUjtBREVJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNBUjtBREdBO0VBQ0ksVUFBQTtBQ0FKO0FERUE7RUFDSSxTQUFBO0FDQ0o7QURDQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0FKO0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0E7RUFDSSxnQkFBQTtBQ0VKO0FEQUE7RUFDSSw4QkFBQTtBQ0dKO0FEREE7RUFDSSxZQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItcHJvZmlsZS1pY29uIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5iYWRnZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDM2MmQ7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxOXB4O1xuICAgIH1cbn1cblxuLmdhbGxlcnlJbWFnZXMgPiBpb24tcm93e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uZ2FsbGVyeUltYWdlc3tcbiAgICB3aWR0aDogODklO1xuICAgIGhlaWdodDogNjglO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNCU7XG4gICAgaW9uLWNvbHtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogMTM0cHg7XG4gICAgfVxuICAgIC5nYWxsZXJ5b3ZlcmxheSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjZGI1OGU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIHRvcDogMnB4O1xuICAgICAgICB3aWR0aDogOTIlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDU2cHggMHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIGxlZnQ6IDZweDtcbiAgICB9XG59XG4ucDB7XG4gICAgcGFkZGluZzogMDtcbn1cbi5tMHtcbiAgICBtYXJnaW46IDA7XG59XG5ocntcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXJnaW46IDJweCAxNXB4O1xufVxuLy8gLmdyZWVue1xuLy8gICAgIC8vIGJhY2tncm91bmQ6ICMwRENDMThcbi8vIH1cbi5nYWxsZXJ5SW1hZ2V7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4udy0xMDB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLm10LTIwe1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZ2FsbGV5Y2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTVweCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWJsYWNre1xuICAgIGNvbG9yOiBibGFja1xufSIsIi51c2VyLXByb2ZpbGUtaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi51c2VyLXByb2ZpbGUtaWNvbiBzcGFuIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLm5vdGlmaWNhdGlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm5vdGlmaWNhdGlvbiAuYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQzNjJkO1xuICBoZWlnaHQ6IDE3cHg7XG4gIHdpZHRoOiAxN3B4O1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHJpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTlweDtcbn1cblxuLmdhbGxlcnlJbWFnZXMgPiBpb24tcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uZ2FsbGVyeUltYWdlcyB7XG4gIHdpZHRoOiA4OSU7XG4gIGhlaWdodDogNjglO1xuICBwYWRkaW5nLWJvdHRvbTogMTQlO1xufVxuLmdhbGxlcnlJbWFnZXMgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEzNHB4O1xufVxuLmdhbGxlcnlJbWFnZXMgLmdhbGxlcnlvdmVybGF5IHtcbiAgYmFja2dyb3VuZDogI2NkYjU4ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgdG9wOiAycHg7XG4gIHdpZHRoOiA5MiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTZweCAwcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgbGVmdDogNnB4O1xufVxuXG4ucDAge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubTAge1xuICBtYXJnaW46IDA7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMnB4IDE1cHg7XG59XG5cbi5nYWxsZXJ5SW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnctMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm10LTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmdhbGxleWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiA1NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1ibGFjayB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/gallery/gallery.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/gallery/gallery.page.ts ***!
    \*****************************************/
  /*! exports provided: GalleryPage */
  /***/
  function srcAppGalleryGalleryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GalleryPage", function () {
      return GalleryPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var GalleryPage = /*#__PURE__*/function () {
      function GalleryPage(restApi, navctrl) {
        _classCallCheck(this, GalleryPage);
        this.restApi = restApi;
        this.navctrl = navctrl;
        this.basmartiGallery = '';
        this.nonbasmartiGallery = '';
        this.getGallery();
        this.imagePre = this.restApi.imageUrl;
        this.riceTypeAvailable = 'basmati';
        this.userFirstName = localStorage.getItem('name')[0];
      }
      _createClass(GalleryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getGallery",
        value: function getGallery() {
          var _this = this;
          this.restApi.presentLoader('Loading gallery...');
          return new Promise(function (resolve, reject) {
            _this.restApi.getGallery().then(function (res) {
              if ('basmati' in res.data) {
                _this.basmartiGallery = res.data.basmati;
              }
              if ('nonbasmati' in res.data) {
                _this.nonbasmartiGallery = res.data.nonbasmati;
              }
              _this.listGallery = res.data;
              _this.restApi.loaderCtrl.dismiss();
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "getGalleryData",
        value: function getGalleryData(id) {
          this.navctrl.navigateForward(['gallerydetails', {
            galleryId: id
          }]);
        }
      }, {
        key: "getRiceType",
        value: function getRiceType(event) {
          this.riceTypeAvailable = event.detail.value;
        }
      }]);
      return GalleryPage;
    }();
    GalleryPage.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };
    GalleryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gallery',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./gallery.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./gallery.page.scss */"./src/app/gallery/gallery.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], GalleryPage);

    /***/
  }
}]);
//# sourceMappingURL=gallery-gallery-module-es5.js.map