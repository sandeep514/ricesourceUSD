function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pre-register-pre-register-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pre-register/pre-register.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-register/pre-register.page.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreRegisterPreRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content class=\"register lightgreen\">\n\n\t<ion-row>\n\t\t<ion-col class=\"h-260 green brlb-30\">\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\">\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<h3>\n\t\t\t\tRegister\n\t\t\t</h3>\n\t\t</ion-col>\n\t</ion-row>\n\t\n\t<ion-row class=\"formData \">\n\t\t<ion-col class=\"form\">\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-item style=\"width: 100%\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-label position=\"floating\">Region</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select One\" (ionChange)=\"registerUserAs($event)\">\n\t\t\t\t\t\t<ion-select-option value=\"domestic\">India</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"international\">Rest of the world</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t  </ion-item>\n\t\t\t\t<ion-icon slot=\"start\" name=\"earth-outline\" style=\"color: black; margin-top: 17px;\"></ion-icon>\n\t\t\t</ion-item>\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<p>OR</p>\n\t\t\t</div>\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<ion-button class=\"green\" (click)=\"signin()\" expand=\"full\"> Sign in </ion-button>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"center\">\n\t\t\n\t</ion-row>\n</ion-content>";

    /***/
  },

  /***/"./src/app/pre-register/pre-register-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pre-register/pre-register-routing.module.ts ***!
    \*************************************************************/
  /*! exports provided: PreRegisterPageRoutingModule */
  /***/
  function srcAppPreRegisterPreRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PreRegisterPageRoutingModule", function () {
      return PreRegisterPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _pre_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./pre-register.page */"./src/app/pre-register/pre-register.page.ts");
    var routes = [{
      path: '',
      component: _pre_register_page__WEBPACK_IMPORTED_MODULE_3__["PreRegisterPage"]
    }];
    var PreRegisterPageRoutingModule = /*#__PURE__*/_createClass(function PreRegisterPageRoutingModule() {
      _classCallCheck(this, PreRegisterPageRoutingModule);
    });
    PreRegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PreRegisterPageRoutingModule);

    /***/
  },

  /***/"./src/app/pre-register/pre-register.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pre-register/pre-register.module.ts ***!
    \*****************************************************/
  /*! exports provided: PreRegisterPageModule */
  /***/
  function srcAppPreRegisterPreRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PreRegisterPageModule", function () {
      return PreRegisterPageModule;
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
    var _pre_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./pre-register-routing.module */"./src/app/pre-register/pre-register-routing.module.ts");
    /* harmony import */
    var _pre_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./pre-register.page */"./src/app/pre-register/pre-register.page.ts");
    var PreRegisterPageModule = /*#__PURE__*/_createClass(function PreRegisterPageModule() {
      _classCallCheck(this, PreRegisterPageModule);
    });
    PreRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pre_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreRegisterPageRoutingModule"]],
      declarations: [_pre_register_page__WEBPACK_IMPORTED_MODULE_6__["PreRegisterPage"]]
    })], PreRegisterPageModule);

    /***/
  },

  /***/"./src/app/pre-register/pre-register.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pre-register/pre-register.page.scss ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPreRegisterPreRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".register {\n  text-align: center;\n}\n.register h3 {\n  color: #000000;\n}\n.register .registerlogo {\n  width: 34%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9wcmUtcmVnaXN0ZXIvcHJlLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJlLXJlZ2lzdGVyL3ByZS1yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVBO0VBQ0ksa0JBQUE7QUNoRUo7QURpRUk7RUFDSSxjQUFBO0FDL0RSO0FEbUVJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNqRVI7QURxRUE7RUFDSSxpQkFBQTtBQ2xFSjtBRHNFSTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7QUNuRVI7QURvRVE7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0FDbEVaO0FEcUVJO0VBQ0ksZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7QUNuRVI7QURzRUE7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ25FSjtBRHNFSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNuRVI7QURxRVE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ25FWjtBRHVFQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUNwRUo7QURzRUE7RUFDSSxxQkFBQTtBQ25FSiIsImZpbGUiOiJzcmMvYXBwL3ByZS1yZWdpc3Rlci9wcmUtcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnR7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbi1iZy5qcGcnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xuLy8gfVxuXG4vLyAuaGVhZGVyLWxvZ297XG4vLyAgICAgbWFyZ2luLXRvcDogNTBweDtcbi8vICAgICBpbWd7XG4vLyAgICAgICAgIHdpZHRoOiAyNTBweDtcbi8vICAgICB9XG4vLyB9XG5cbi8vIC5sb2dpbi1ib3h7XG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgICBpb24tbGlzdHtcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIFxuLy8gICAgICAgICBpb24taXRlbXtcbi8vICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbi8vIC5zaWduLWluLWljb257XG4vLyAgICAgd2lkdGg6IDkwcHg7XG4vLyB9XG5cbi8vIC5idXR0b24tcmlwcGxle1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4vLyB9XG5cbi8vIC5mb3Jnb3QtcGFzc3tcbi8vICAgICBmb250LXNpemU6IDE1cHg7XG4vLyB9XG5cbi8vIC5mb3JnZXQtcGFzcy1yb3d7XG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcbi8vIH1cblxuLy8gLmxvZ2luLWZvb3Rlcntcbi8vICAgICBoZWlnaHQ6IDIwcHg7XG4vLyAgICAgYmFja2dyb3VuZDogI2VmZWNlYztcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIHB7XG4vLyAgICAgICAgIG1hcmdpbjogMHB4O1xuLy8gICAgICAgICBwYWRkaW5nOiAwcHg7XG4vLyAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4vLyAgICAgICAgIGNvbG9yOiAjMDAwXG4vLyAgICAgfVxuLy8gfVxuXG4vLyAubG9naW4tYnV0dG9ue1xuLy8gICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuLy8gICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyAgICAgd2lkdGg6IDIwMHB4O1xuLy8gICAgIC0tYmFja2dyb3VuZDogZ3JlZW47XG4vLyB9XG5cbi5icmxiLTMwe1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDMwJTtcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMXB4IDE1cHggMnB4IGdyZWVuO1xufVxuLnJlZ2lzdGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoM3tcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIC8vIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgfVxuICAgIC5yZWdpc3RlcmxvZ297XG4gICAgICAgIHdpZHRoOiAzNCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuXG4uZm9ybURhdGF7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5mb3Jte1xuICAgIGlvbi1pdGVte1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLml0ZW0tbmF0aXZle1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLmFjdGl2ZVRhYntcbiAgICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi51c2VyVHlwZXtcbiAgICB1bHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4udXNlclRpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cbi5ub3VuZGVybGluZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiLnJlZ2lzdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlZ2lzdGVyIGgzIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ucmVnaXN0ZXIgLnJlZ2lzdGVybG9nbyB7XG4gIHdpZHRoOiAzNCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtRGF0YSB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZm9ybSBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmZvcm0gaW9uLWl0ZW0gLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybSBidXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlVGFiIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udXNlclR5cGUgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cbi51c2VyVHlwZSB1bCBsaSB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnVzZXJUaXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3VuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/pre-register/pre-register.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pre-register/pre-register.page.ts ***!
    \***************************************************/
  /*! exports provided: PreRegisterPage */
  /***/
  function srcAppPreRegisterPreRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PreRegisterPage", function () {
      return PreRegisterPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var PreRegisterPage = /*#__PURE__*/function () {
      function PreRegisterPage(navCtrl) {
        _classCallCheck(this, PreRegisterPage);
        this.navCtrl = navCtrl;
      }
      _createClass(PreRegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registerUserAs",
        value: function registerUserAs(registerType) {
          console.log(registerType.detail.value);
          localStorage.setItem('registerUserAs', registerType.detail.value);
          this.navCtrl.navigateRoot(['register']);
        }
      }, {
        key: "signin",
        value: function signin() {
          console.log("nkjnk");
          this.navCtrl.navigateRoot(['login']);
        }
      }]);
      return PreRegisterPage;
    }();
    PreRegisterPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };
    PreRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pre-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./pre-register.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pre-register/pre-register.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./pre-register.page.scss */"./src/app/pre-register/pre-register.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], PreRegisterPage);

    /***/
  }
}]);
//# sourceMappingURL=pre-register-pre-register-module-es5.js.map