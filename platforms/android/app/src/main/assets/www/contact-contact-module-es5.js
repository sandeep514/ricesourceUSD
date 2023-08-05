function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
    \*********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content id=\"content\" class=\"bg-lightgreen\">\n\t<div class=\"green\" >\n\t\t<div class=\"header-content\">\n\t\t\t<ion-row class=\"\">\n\t\t\t\t<ion-col size=\"12\" align=\"center\">\n\t\t\t\t\t<h3>Contact us</h3>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\t</div>\n\t\n\t<ion-row  id='card'>\n\t\t<ion-col>\n\t\t\t<ion-row style=\"padding: 0;margin: 0;\">\n\t\t\t\t<ion-col style=\"list-style: none;background: lightgrey;text-align: center;padding: 20px 0px;border-radius: 20px;margin-right: 15px;\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<a href=\"https://api.whatsapp.com/send/?phone=[+919899330123]&text=Hi&app_absent=0&app_absent=0\">\n\t\t\t\t\t\t\t<ion-icon name=\"call-outline\" style=\"color: #c3bfbf;font-size: 40px;\"></ion-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</p>\n\t\t\t\t\t<!-- <p>{{phone}}</p> -->\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col style=\"list-style: none;background: lightblue;text-align: center;padding: 20px 0px;border-radius: 20px;margin-right: 15px;\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<a href=\"mailto:enquiry@sntcgroup.com\">\n\t\t\t\t\t\t\t<ion-icon name=\"mail-outline\" style=\"color: #c3bfbf;font-size: 40px;\"></ion-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</p>\n\t\t\t\t\t<!-- <p>{{email}}</p> -->\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-col>\n\t</ion-row>\n\t<app-menu></app-menu>\n</ion-content>";

    /***/
  },

  /***/"./src/app/contact/contact-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/contact/contact-routing.module.ts ***!
    \***************************************************/
  /*! exports provided: ContactPageRoutingModule */
  /***/
  function srcAppContactContactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function () {
      return ContactPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./contact.page */"./src/app/contact/contact.page.ts");
    var routes = [{
      path: '',
      component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }];
    var ContactPageRoutingModule = /*#__PURE__*/_createClass(function ContactPageRoutingModule() {
      _classCallCheck(this, ContactPageRoutingModule);
    });
    ContactPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactPageRoutingModule);

    /***/
  },

  /***/"./src/app/contact/contact.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/contact/contact.module.ts ***!
    \*******************************************/
  /*! exports provided: ContactPageModule */
  /***/
  function srcAppContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactPageModule", function () {
      return ContactPageModule;
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
    var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./contact-routing.module */"./src/app/contact/contact-routing.module.ts");
    /* harmony import */
    var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./contact.page */"./src/app/contact/contact.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var ContactPageModule = /*#__PURE__*/_createClass(function ContactPageModule() {
      _classCallCheck(this, ContactPageModule);
    });
    ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactPageRoutingModule"]],
      declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
    })], ContactPageModule);

    /***/
  },

  /***/"./src/app/contact/contact.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/contact/contact.page.scss ***!
    \*******************************************/
  /*! exports provided: default */
  /***/
  function srcAppContactContactPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".galleryContent {\n  padding: 0px;\n}\n\n.ricetype {\n  font-size: 18px;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n  background-color: transparent important;\n}\n\n.price-table table thead tr th {\n  background-color: transparent important;\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n  border-bottom: 1px solid #dfdfdf;\n  border-right: 1px solid #dfdfdf;\n}\n\ntable thead, table tbody {\n  background: transparent !important;\n  background-color: transparent !important;\n  border-bottom: 2px solid #ededed !important;\n}\n\n.specification ion-row {\n  padding: 0;\n}\n\n.specification ion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.specification thead th {\n  font-weight: inherit;\n  text-align: left;\n}\n\n.ricetype {\n  font-size: 24px;\n  font-family: Arial;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.ricetype .black {\n  color: #000;\n}\n\ntable tbody tr td {\n  color: #92B243;\n  font-size: 18px !important;\n}\n\n.card .image {\n  text-align: center;\n}\n\n.type-columns {\n  padding-left: 40px;\n}\n\n.pl-40 {\n  padding-left: 40px !important;\n}\n\n.pl-60 {\n  padding-left: 40px !important;\n}\n\ntable tbody {\n  border: 0px !important;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: #e4e9b1;\n}\n\n#card th {\n  background-color: transparent !important;\n  --background-color: transparent !important;\n}\n\n#card {\n  position: absolute;\n  width: -webkit-fill-available;\n  padding-bottom: 85px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBRElJO0VBQ0ksV0FBQTtFQXVCQSxlQUFBO0FDdkJSOztBREVZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtBQ0FoQjs7QURDZ0I7RUFDSSx1Q0FBQTtFQUNBLCtCQUFBO0FDQ3BCOztBRElZO0VBQ0ksWUFBQTtBQ0ZoQjs7QURHZ0I7RUFDSSxlQUFBO0VBRUEsZ0NBQUE7RUFDQSwrQkFBQTtBQ0ZwQjs7QURVQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQ0FBQTtBQ1BKOztBRFVJO0VBQ0ksVUFBQTtBQ1BSOztBRFNJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNQUjs7QURVUTtFQUVJLG9CQUFBO0VBQ0EsZ0JBQUE7QUNUWjs7QURjQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUNYSjs7QURZSTtFQUNJLFdBQUE7QUNWUjs7QURlQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQ1pKOztBRGVJO0VBQ0ksa0JBQUE7QUNaUjs7QURlQTtFQUNJLGtCQUFBO0FDWko7O0FEY0E7RUFDSSw2QkFBQTtBQ1hKOztBRGFBO0VBQ0ksNkJBQUE7QUNWSjs7QURZQTtFQUNJLHNCQUFBO0FDVEo7O0FEV0E7RUFDSSx5QkFBQTtBQ1JKOztBRFdBO0VBQ0Msd0NBQUE7RUFDQSwwQ0FBQTtBQ1JEOztBRFVBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnlDb250ZW50e1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnJpY2V0eXBle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnByaWNlLXRhYmxle1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgdGFibGV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0aGVhZHtcbiAgICAgICAgICAgIHRye1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRoe1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCBpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRib2R5e1xuICAgICAgICAgICAgdHJ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIHRke1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG59XG5cbnRhYmxlIHRoZWFkLHRhYmxlIHRib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZGVkZWQgIWltcG9ydGFudDtcbn1cbi5zcGVjaWZpY2F0aW9ue1xuICAgIGlvbi1yb3d7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIGlvbi1jb2x7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMFxuICAgIH1cbiAgICB0aGVhZHtcbiAgICAgICAgdGh7XG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgIHRleHQtYWxpZ24gOmxlZnQ7XG4gICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4ucmljZXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLmJsYWNre1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59XG5cblxudGFibGUgdGJvZHkgdHIgdGR7XG4gICAgY29sb3I6ICM5MkIyNDM7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZHtcbiAgICAuaW1hZ2V7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG4udHlwZS1jb2x1bW5ze1xuICAgIHBhZGRpbmctbGVmdDogNDBweFxufVxuLnBsLTQwe1xuICAgIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xufVxuLnBsLTYwe1xuICAgIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xufVxudGFibGUgdGJvZHl7XG4gICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbn1cbnRib2R5IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlOWIxO1xufVxuXG4jY2FyZCB0aHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0LS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuI2NhcmR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIHBhZGRpbmctYm90dG9tOiA4NXB4O1xufSIsIi5nYWxsZXJ5Q29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucHJpY2UtdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IGltcG9ydGFudDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IGltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB7XG4gIGhlaWdodDogMzVweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG5cbnRhYmxlIHRoZWFkLCB0YWJsZSB0Ym9keSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWRlZGVkICFpbXBvcnRhbnQ7XG59XG5cbi5zcGVjaWZpY2F0aW9uIGlvbi1yb3cge1xuICBwYWRkaW5nOiAwO1xufVxuLnNwZWNpZmljYXRpb24gaW9uLWNvbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5zcGVjaWZpY2F0aW9uIHRoZWFkIHRoIHtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5yaWNldHlwZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4ucmljZXR5cGUgLmJsYWNrIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgY29sb3I6ICM5MkIyNDM7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZCAuaW1hZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50eXBlLWNvbHVtbnMge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbi5wbC00MCB7XG4gIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4ucGwtNjAge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxudGFibGUgdGJvZHkge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xufVxuXG50Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU5YjE7XG59XG5cbiNjYXJkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4jY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIHBhZGRpbmctYm90dG9tOiA4NXB4O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/contact/contact.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/contact/contact.page.ts ***!
    \*****************************************/
  /*! exports provided: ContactPage */
  /***/
  function srcAppContactContactPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactPage", function () {
      return ContactPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    var ContactPage = /*#__PURE__*/function () {
      function ContactPage(apiser) {
        _classCallCheck(this, ContactPage);
        this.apiser = apiser;
      }
      _createClass(ContactPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getContactDetail();
        }
      }, {
        key: "getContactDetail",
        value: function getContactDetail() {
          var _this = this;
          this.apiser.contact().then(function (res) {
            _this.email = res.data.email;
            _this.phone = res.data.phone;
          })["catch"](function (err) {
            console.log(err);
          });
        }
      }, {
        key: "chat",
        value: function chat() {
          // window.open("https://api.whatsapp.com/send/?phone=[PHONENUMBER]&text=Hi,%20Test%20Message&app_absent=0");
        }
      }]);
      return ContactPage;
    }();
    ContactPage.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }];
    };
    ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./contact.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./contact.page.scss */"./src/app/contact/contact.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])], ContactPage);

    /***/
  }
}]);
//# sourceMappingURL=contact-contact-module-es5.js.map