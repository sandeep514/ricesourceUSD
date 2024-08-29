function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html": (
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html ***!
    \*********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGalleryGalleryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content id=\"content\" class=\"\">\n\t<div class=\"header-data\" style=\"height: auto;\">\n\n\t\t<div class=\"header-content\">\n\t\t\t<ion-row class=\"\">\n\t\t\t\t<ion-col size=\"3\" align=\"center\">\n\t\t\t\t\t<div class=\"user-profile-icon\">\n\t\t\t\t\t\t<span> {{ userFirstName }} </span>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" align=\"center\">\n\t\t\t\t\t<h3>Gallery</h3>\n\t\t\t\t</ion-col>\n\t\t\t\t<!-- <ion-col size=\"3\" align=\"right\" class=\"notification\">\n\t\t\t\t\t<ion-icon name=\"notifications\"></ion-icon>\n\t\t\t\t\t<span class=\"badge\">2</span>\n\t\t\t\t</ion-col> -->\n\t\t\t</ion-row>\n\t\t</div>\n\n\t\t<ion-row class=\"m020 mt30\">\n\t\t\t<ion-col size=\"12\" style=\"height: 70px;\">\n\t\t\t\t<ng-container>\n\t\t\t\t\t<ion-item class=\"\" style=\"--background: #EEFCCE;border-radius: 100px;\">\n\t\t\t\t\t\t<ion-label>Rice Type</ion-label>\n\t\t\t\t\t\t<ion-select  (ionChange)=\"getRiceType($event)\" value=\"basmati\">\n\t\t\t\t\t\t\t<ion-select-option value=\"basmati\" selected=\"selected\">Basmati</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"nonbasmati\">Non Basmati</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ng-container>\t\t\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t</div>\n\t\n\t<ng-container>\n\t\t<div class=\"galleryImages\">\n\t\t\t\n\t\t\t<ion-row style=\"justify-content: space-around;padding-bottom: 100px;\">\n\n\t\t\t\t<ng-container *ngIf=\"riceTypeAvailable == 'basmati' \">\n\t\t\t\t\t<ng-container *ngIf=\"basmartiGallery == '' \">\n\t\t\t\t\t\t<ion-col class=\"12\">\n\t\t\t\t\t\t\t<div class=\"center w-100 color-black\">\n\t\t\t\t\t\t\t\t<h3>Basmati gallery not available</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t\n\t\t\t\t\t<ng-container *ngIf=\"basmartiGallery != '' \">\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"galleycard\" *ngFor=\"let list of basmartiGallery\" (click)=\"getGalleryData(list.id)\">\n\t\t\t\t\t\t\t<div class=\"\" >\n\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/gallery/{{ list.attachment }}\" style=\"width: 190px;height: 130px;border-radius: 15px;overflow: hidden;\" alt=\"{{ list.title }}\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<p style=\"padding: 0;margin: 0;font-family: 'Poppins-Regular';margin-top: 5px;\" class=\"\">{{list.title | uppercase }}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- <div class=\"galleryoverlay\">\n\t\t\t\t\t\t\t\t<div class=\"riceType\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"p0 m0 \">{{ list.type | uppercase }}</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"riceTypeAvailable == 'nonbasmati'\">\n\t\t\t\t\t<ng-container *ngIf=\"nonbasmartiGallery == '' \">\n\t\t\t\t\t\t<div class=\"center w-100 color-black\">\n\t\t\t\t\t\t\t<h3>Non Basmati gallery not available</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\n\t\t\t\t\t<ng-container *ngIf=\"nonbasmartiGallery != '' \">\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"galleycard\" *ngFor=\"let list of nonbasmartiGallery\" (click)=\"getGalleryData(list.id)\">\n\t\t\t\t\t\t\t<div class=\"galleryImage\" >\n\t\t\t\t\t\t\t\t<img src=\"{{ imagePre }}uploads/gallery/{{ list.attachment }}\" style=\"width: 190px;height: 130px;border-radius: 15px;overflow: hidden;\" alt=\"{{ list.title }}\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<p style=\"padding: 0;margin: 0;font-family: 'Poppins-Regular';margin-top: 5px;\" class=\"\">{{list.title | uppercase }}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- <div class=\"galleryoverlay\">\n\t\t\t\t\t\t\t\t<div class=\"riceType\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"p0 m0 \">{{ list.type | uppercase }}</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ng-container>\n\t\t\t</ion-row>\n\t\t</div>\n\t</ng-container>\n\t<ng-container>\n\t\t<app-menu></app-menu>\n\t</ng-container>\n\n</ion-content>";

    /***/
  }),
  /***/"./src/app/gallery/gallery-routing.module.ts": (
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
  }),
  /***/"./src/app/gallery/gallery.module.ts": (
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
  }),
  /***/"./src/app/gallery/gallery.page.scss": (
  /*!*******************************************!*\
    !*** ./src/app/gallery/gallery.page.scss ***!
    \*******************************************/
  /*! exports provided: default */
  /***/
  function srcAppGalleryGalleryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".user-profile-icon {\n  width: 50px;\n  background-color: #606060;\n  border-radius: 50px;\n  height: 50px;\n  line-height: 50px;\n  margin-left: 15px;\n  margin-top: 10px;\n}\n.user-profile-icon span {\n  color: #FFF;\n  font-size: 30px;\n}\n.notification ion-icon {\n  font-size: 38px;\n  margin-top: 15px;\n  margin-right: 10px;\n}\n.notification .badge {\n  background-color: #ad362d;\n  height: 17px;\n  width: 17px;\n  color: #FFF;\n  border-radius: 50px;\n  display: inline-block;\n  font-size: 12px;\n  text-align: center;\n  line-height: 17px;\n  right: 16px;\n  position: absolute;\n  top: 19px;\n}\n.galleryImages > ion-row {\n  height: 100%;\n  overflow: scroll;\n}\n.galleryImages {\n  width: 100%;\n}\n.galleryImages ion-col {\n  margin: 0;\n  padding: 10px;\n  border-radius: 15px;\n  width: 45% !important;\n  max-width: 45% !important;\n  box-shadow: 0px 5px 19px 0px rgba(0, 0, 0, 0.102);\n}\n.galleryImages .galleryoverlay {\n  background: #cdb58e;\n  color: white;\n  position: absolute;\n  z-index: 999;\n  top: 2px;\n  width: 92%;\n  text-align: center;\n  padding: 56px 0px;\n  opacity: 0.7;\n  left: 6px;\n}\n.p0 {\n  padding: 0;\n}\n.m0 {\n  margin: 0;\n}\nhr {\n  background: white;\n  margin: 2px 15px;\n}\n.galleryImage {\n  max-width: 100%;\n  margin: 0 auto;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.w-100 {\n  width: 100%;\n  color: white;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.galleycard {\n  margin-bottom: 10px !important;\n}\n.color-black {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkucGFnZS5zY3NzIiwic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRVI7QURHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURFSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0FSO0FESUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElBO0VBQ0ksV0FBQTtBQ0RKO0FER0k7RUFDSSxTQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlEQUFBO0FDRlI7QURLSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDSFI7QURNQTtFQUNJLFVBQUE7QUNISjtBREtBO0VBQ0ksU0FBQTtBQ0ZKO0FESUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDREo7QURNQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNISjtBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGSjtBRElBO0VBQ0ksZ0JBQUE7QUNESjtBREdBO0VBQ0ksOEJBQUE7QUNBSjtBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLXByb2ZpbGUtaWNvbiB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjA2MDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gICAgaW9uLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAuYmFkZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQzNjJkO1xuICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTlweDtcbiAgICB9XG59XG5cbi5nYWxsZXJ5SW1hZ2VzID4gaW9uLXJvd3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmdhbGxlcnlJbWFnZXN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gaGVpZ2h0OiA2OCU7XG4gICAgaW9uLWNvbHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcbiAgICAgICAgbWF4LXdpZHRoOiA0NSUgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAxOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTAyKTtcbiAgICAgICAgLy8gaGVpZ2h0OiAxMzRweDtcbiAgICB9XG4gICAgLmdhbGxlcnlvdmVybGF5IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2NkYjU4ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIHdpZHRoOiA5MiU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNTZweCAwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgbGVmdDogNnB4O1xuICAgIH1cbn1cbi5wMHtcbiAgICBwYWRkaW5nOiAwO1xufVxuLm0we1xuICAgIG1hcmdpbjogMDtcbn1cbmhye1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbjogMnB4IDE1cHg7XG59XG4vLyAuZ3JlZW57XG4vLyAgICAgLy8gYmFja2dyb3VuZDogIzBEQ0MxOFxuLy8gfVxuLmdhbGxlcnlJbWFnZXtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi53LTEwMHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubXQtMjB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5nYWxsZXljYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItYmxhY2t7XG4gICAgY29sb3I6IGJsYWNrXG59IiwiLnVzZXItcHJvZmlsZS1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnVzZXItcHJvZmlsZS1pY29uIHNwYW4ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubm90aWZpY2F0aW9uIC5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDM2MmQ7XG4gIGhlaWdodDogMTdweDtcbiAgd2lkdGg6IDE3cHg7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgcmlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xufVxuXG4uZ2FsbGVyeUltYWdlcyA+IGlvbi1yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5nYWxsZXJ5SW1hZ2VzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZ2FsbGVyeUltYWdlcyBpb24tY29sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNDUlICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEwMik7XG59XG4uZ2FsbGVyeUltYWdlcyAuZ2FsbGVyeW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiAjY2RiNThlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICB0b3A6IDJweDtcbiAgd2lkdGg6IDkyJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1NnB4IDBweDtcbiAgb3BhY2l0eTogMC43O1xuICBsZWZ0OiA2cHg7XG59XG5cbi5wMCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tMCB7XG4gIG1hcmdpbjogMDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAycHggMTVweDtcbn1cblxuLmdhbGxlcnlJbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4udy0xMDAge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubXQtMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZ2FsbGV5Y2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJsYWNrIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/gallery/gallery.page.ts": (
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
      return _createClass(GalleryPage, [{
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
  })
}]);
//# sourceMappingURL=gallery-gallery-module-es5.js.map