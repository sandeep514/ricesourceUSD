function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editprofile-editprofile-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.page.html": (
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.page.html ***!
    \*****************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditprofileEditprofilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content class=\"register \">\n\t<ion-row style=\"height: 30%;\">\n\t\t<!-- <ion-col class=\"h-230 green brlb-30\">\n      \t\t<p (click)=\"home()\" style=\"float: left;color: white;margin-right: 20px;\">\n\t\t\t\t<ion-icon name=\"chevron-back-outline\"  style=\"font-size: 22px ;\" class=\"lefticon\"></ion-icon>\n\t\t\t</p>\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\" style=\"margin-top: 20\">\n\t\t</ion-col> -->\n\t\t<div style=\"margin-top: 0px;text-align: center;width: 100%;\">\n\t\t\t<ion-row style=\"margin: 30px 0px;\">\n\t\t\t\t<ion-col style=\"text-align: left;padding-left: 20px;\" (click)=\"home()\">\n\t\t\t\t\t<ion-icon name=\"arrow-back-outline\" style=\"font-size: 20px;\"></ion-icon>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<h1 class=\"\" style=\"color: #000;font-size: 16px;margin: 0px;padding: 0px;\">Edit Profile</h1>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\n\t\t\t<img src=\"../../assets/img/avatars/7.jpg\" style=\"width: 100px;border-radius: 100%;\" />\n\t\t\t<h1 class=\"main-heading font-18\" style=\"color: #000;font-size: 18px\">{{ name | uppercase }}</h1>\n\t\t\t<!-- <span class=\"tag\" style=\"color: #000;font-size: 16px\">{{ email }}</span>\n\t\t\t\t\t\t\t<p style=\"color: #000;font-size: 16px\">Role: {{ userRole }}</p> -->\n\t\t</div>\n\t</ion-row>\n\n\t<!-- <ion-row>\n\t\t<ion-col class=\"h-300 green brlb-30\">\n\t\t\t<ion-row class=\"formData\">\n\t\t\t\t<ion-col class=\"form\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\tChange Password\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label position=\"floating\">New Password</ion-label>\n\t\t\t\t\t\t<ion-input type=\"password\" name='password' [(ngModel)]=\"password\" style=\" color: 'red' \" ></ion-input>\n\t\t\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label position=\"floating\" class=\"font-lightgreen\">Confirm Password</ion-label>\n\t\t\t\t\t\t<ion-input type=\"password\" name='confpassword' [(ngModel)]=\"confpassword\"></ion-input>\n\t\t\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t<div class=\"center\" style=\"margin-top: 20px;\">\n\t\t\t\t\t\t<ion-button class=\"lightgreen\" (click)=\"updatePassword()\"> Change Password </ion-button>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-col>\n\t</ion-row> -->\n\t<!-- <ion-row>\n\t\t<ion-col>\n\t\t\t<h3>\n\t\t\t\tEdit Profile\n\t\t\t</h3>\n\t\t</ion-col>\n\t</ion-row> -->\n\t<!-- <ion-row class=\"userType\">\n\t\t<ul style=\"justify-content: space-between;\">\n\t\t\t<li (click)=\"changeState('Supplier')\" [class.activeTab]=\"role == 'Supplier' \">\n\t\t\t\tSupplier \n\t\t\t</li>\n\t\t\t\n\t\t\t<li (click)=\"changeState('Buyer')\" [class.activeTab]=\"role == 'Buyer' \">\n\t\t\t\tBuyer\n\t\t\t</li> \n\t\t\t\n\t\t\t<li (click)=\"changeState('Broker')\" [class.activeTab]=\"role == 'Broker' \">\n\t\t\t\tBroker\n\t\t\t</li>\n\n\t\t\t<li (click)=\"changeState('Guest')\" [class.activeTab]=\"role == 'Guest' \">\n\t\t\t\tGuest\n\t\t\t</li>\t\n\t\t</ul>\n\t</ion-row> -->\n\n\t<ion-row class=\"formData lightgreen\" style=\"height: 70%;border-radius: 30px 30px 0px 0px;\">\n\t\t<ion-col class=\"form\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Username</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"username\" name=\"username\"></ion-input>\n\t\t\t\t<!-- <ion-icon name=\"person\" slot=\"start\"></ion-icon> -->\n\t\t\t\t<img src=\"../../assets/svg/person-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Email</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"email\" name=\"email\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/mail-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Mobile no</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"mobile\" name=\"mobile\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/call-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Company name</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"companyname\" name=\"companyname\"></ion-input>\n\t\t\t\t<img src=\"../../assets/svg/business-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\"\n\t\t\t\t\talt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<ion-button class=\"green\" (click)=\"updateUserDetails()\"> Edit Profile </ion-button>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"center\">\n\n\t</ion-row>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/editprofile/editprofile-routing.module.ts": (
  /*!***********************************************************!*\
    !*** ./src/app/editprofile/editprofile-routing.module.ts ***!
    \***********************************************************/
  /*! exports provided: EditprofilePageRoutingModule */
  /***/
  function srcAppEditprofileEditprofileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EditprofilePageRoutingModule", function () {
      return EditprofilePageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _editprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./editprofile.page */"./src/app/editprofile/editprofile.page.ts");
    var routes = [{
      path: '',
      component: _editprofile_page__WEBPACK_IMPORTED_MODULE_3__["EditprofilePage"]
    }];
    var EditprofilePageRoutingModule = /*#__PURE__*/_createClass(function EditprofilePageRoutingModule() {
      _classCallCheck(this, EditprofilePageRoutingModule);
    });
    EditprofilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditprofilePageRoutingModule);

    /***/
  }),
  /***/"./src/app/editprofile/editprofile.module.ts": (
  /*!***************************************************!*\
    !*** ./src/app/editprofile/editprofile.module.ts ***!
    \***************************************************/
  /*! exports provided: EditprofilePageModule */
  /***/
  function srcAppEditprofileEditprofileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function () {
      return EditprofilePageModule;
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
    var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./editprofile-routing.module */"./src/app/editprofile/editprofile-routing.module.ts");
    /* harmony import */
    var _editprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./editprofile.page */"./src/app/editprofile/editprofile.page.ts");
    var EditprofilePageModule = /*#__PURE__*/_createClass(function EditprofilePageModule() {
      _classCallCheck(this, EditprofilePageModule);
    });
    EditprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditprofilePageRoutingModule"]],
      declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_6__["EditprofilePage"]]
    })], EditprofilePageModule);

    /***/
  }),
  /***/"./src/app/editprofile/editprofile.page.scss": (
  /*!***************************************************!*\
    !*** ./src/app/editprofile/editprofile.page.scss ***!
    \***************************************************/
  /*! exports provided: default */
  /***/
  function srcAppEditprofileEditprofilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".register {\n  text-align: center;\n}\n.register h3 {\n  color: black;\n}\n.register .registerlogo {\n  width: 31%;\n  margin-top: 12px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: #fff;\n  --background: #fff;\n  margin-top: 20px;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksa0JBQUE7QUNKSjtBRE1JO0VBQ0ksWUFBQTtBQ0pSO0FEU0k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNQUjtBRFdBO0VBQ0ksaUJBQUE7QUNSSjtBRFlJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDVFI7QURXUTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7QUNUWjtBRGFJO0VBQ0ksZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7QUNYUjtBRGVBO0VBQ0ksZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNaSjtBRGdCSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNiUjtBRGVRO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNiWjtBRGtCQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUNmSjtBRGtCQTtFQUNJLHFCQUFBO0FDZkoiLCJmaWxlIjoic3JjL2FwcC9lZGl0cHJvZmlsZS9lZGl0cHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJsYi0zMCB7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMzAlO1xuICAgIC8vIGJveC1zaGFkb3c6IDBweCAxcHggMTVweCAycHggZ3JlZW47XG59XG5cbi5yZWdpc3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaDMge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIC8vIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVybG9nbyB7XG4gICAgICAgIHdpZHRoOiAzMSU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxufVxuXG4uZm9ybURhdGEge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZm9ybSB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAgICAgLml0ZW0tbmF0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uYWN0aXZlVGFiIHtcbiAgICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udXNlclR5cGUge1xuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udXNlclRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3VuZGVybGluZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSIsIi5yZWdpc3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3RlciBoMyB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5yZWdpc3RlciAucmVnaXN0ZXJsb2dvIHtcbiAgd2lkdGg6IDMxJTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmZvcm1EYXRhIHtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5mb3JtIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmZvcm0gaW9uLWl0ZW0gLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybSBidXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlVGFiIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udXNlclR5cGUgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cbi51c2VyVHlwZSB1bCBsaSB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnVzZXJUaXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3VuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/editprofile/editprofile.page.ts": (
  /*!*************************************************!*\
    !*** ./src/app/editprofile/editprofile.page.ts ***!
    \*************************************************/
  /*! exports provided: EditprofilePage */
  /***/
  function srcAppEditprofileEditprofilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EditprofilePage", function () {
      return EditprofilePage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */
    var _components_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../components.service */"./src/app/components.service.ts");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    var EditprofilePage = /*#__PURE__*/function () {
      function EditprofilePage(route, restSer, navCtrl, menuCtrl, componentSer) {
        _classCallCheck(this, EditprofilePage);
        this.route = route;
        this.restSer = restSer;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.componentSer = componentSer;
        this.availableRoles = {
          4: 'Seller',
          5: 'Buyer',
          6: 'Supplier',
          7: 'Broker',
          8: 'Guest'
        };
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
      return _createClass(EditprofilePage, [{
        key: "isValidEmail",
        value: function isValidEmail(value) {
          return /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test(value);
        }
      }, {
        key: "changeState",
        value: function changeState(state) {
          console.log(state);
          this.userState = state;
          this.role = state;
        }
      }, {
        key: "updatePassword",
        value: function updatePassword() {
          var _this = this;
          if (this.password != undefined && this.password != undefined) {
            if (this.password == this.confpassword) {
              var formData = {
                number: this.mobile,
                password: this.password
              };
              this.restSer.presentLoader('Please wait...');
              if (this.password == this.confpassword) {
                this.restSer.changePassword(formData).then(function (res) {
                  _this.restSer.loaderCtrl.dismiss();
                  _this.restSer.presentToast('Password change successfully.');
                }, function (err) {
                  _this.restSer.loaderCtrl.dismiss();
                  _this.restSer.presentToast('Something went wrong.');
                });
              } else {
                this.restSer.presentToast('Password and confirm password is not correct.');
              }
            } else {
              this.restSer.presentToast('Password and confirm password should same.');
            }
          }
        }
      }, {
        key: "home",
        value: function home() {
          if (localStorage.getItem('apptype') == 'USD') {
            this.navCtrl.navigateForward('priceusd');
          } else {
            this.navCtrl.navigateForward('prices');
          }
        }
      }, {
        key: "updateUserDetails",
        value: function updateUserDetails() {
          var _this2 = this;
          if (this.username != undefined && this.email != undefined && this.mobile != undefined && this.companyname != undefined) {
            if (this.username != '' && this.email != '' && this.mobile != '' && this.password != '' && this.confpassword != '') {
              if (this.isValidEmail(this.email) == true) {
                // if(this.mobile.length == 10 || this.mobile.length == 11 || this.mobile.length == 12){
                var postData = {
                  'username': this.username,
                  'email': this.email,
                  'mobile': this.mobile,
                  'companyname': this.companyname,
                  // 'userState' : this.userState,
                  'userId': localStorage.getItem('id')
                };
                this.restSer.presentLoader('Please wait...');
                this.restSer.updateUser(postData).then(function (res) {
                  localStorage.setItem('id', res.data.id);
                  localStorage.setItem('name', res.data.name);
                  localStorage.setItem('email', res.data.email);
                  localStorage.setItem('mobile', res.data.mobile);
                  // localStorage.setItem('role' , res.data.role);
                  localStorage.setItem('companyname', res.data.companyname);
                  localStorage.setItem('expired_on', res.data.expired_on);
                  _this2.restSer.presentToast('Profile updated successfully.');
                  _this2.restSer.loaderCtrl.dismiss();
                }, function (err) {
                  _this2.restSer.presentToast(err.error.error);
                  _this2.restSer.loaderCtrl.dismiss();
                });
                // }else{
                // 	this.restSer.presentToast('Password and confirm password should be valid.');
                // }
              } else {
                this.restSer.presentToast('Please enter a valid email address.');
              }
            } else {
              this.restSer.presentToast('Missing required fields.');
            }
          } else {
            this.restSer.presentToast('Missing required fields.');
          }
        }
      }, {
        key: "getProfileDetails",
        value: function getProfileDetails() {}
      }, {
        key: "showMenu",
        value: function showMenu() {
          this.menuCtrl.open();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPlanDetails();
        }
      }, {
        key: "getPlanDetails",
        value: function getPlanDetails() {
          var _this3 = this;
          this.restSer.getUserPlanDetails().then(function (res) {
            console.log(res);
            if (res.data.length == 0) {
              _this3.planName = "Trial Period";
              _this3.planMonths = "3 Months";
            } else {
              _this3.planName = res.data.plan;
              _this3.planMonths = res.data.sub_plan_name;
            }
            console.log(res.data.length);
          }, function (err) {
            console.log(util__WEBPACK_IMPORTED_MODULE_4__["error"]);
          });
        }
      }, {
        key: "gotohome",
        value: function gotohome() {
          localStorage.setItem('apptype', 'OTHER');
          this.navCtrl.navigateForward(['prices']);
        }
      }]);
    }();
    EditprofilePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"]
      }];
    };
    EditprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editprofile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./editprofile.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./editprofile.page.scss */"./src/app/editprofile/editprofile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _components_service__WEBPACK_IMPORTED_MODULE_5__["ComponentsService"]])], EditprofilePage);

    /***/
  })
}]);
//# sourceMappingURL=editprofile-editprofile-module-es5.js.map