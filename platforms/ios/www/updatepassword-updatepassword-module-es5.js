function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updatepassword-updatepassword-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/updatepassword/updatepassword.page.html": (
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/updatepassword/updatepassword.page.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdatepasswordUpdatepasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content class=\"register lightgreen\">\n\t<ion-row>\n\t\t<ion-col class=\"h-230 green brlb-30\">\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\" style=\"margin-top: 20\">\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<h3>\n\t\t\t\tChange Password\n\t\t\t</h3>\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row class=\"formData\">\n\t\t<ion-col class=\"form\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">New Password</ion-label>\n\t\t\t\t<ion-input [type]=\"password1Type\" name='password' [(ngModel)]=\"password\" style=\" color: 'red' \" ></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password1Icon\" class=\"passwordIcon\" (click)='hideShowPassword1()'></ion-icon>\n\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\" class=\"font-lightgreen\">Confirm Password</ion-label>\n\t\t\t\t<ion-input [type]=\"password2Type\" name='confpassword' [(ngModel)]=\"confpassword\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password2Icon\" class=\"passwordIcon\" (click)='hideShowPassword2()'></ion-icon>\n\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<div class=\"center\" style=\"margin-top: 20px;\">\n\t\t\t\t<ion-button class=\"green\" (click)=\"updatePassword()\"> Change Password </ion-button>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t\n\t<ion-row class=\"center\">\t\n\t</ion-row>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/updatepassword/updatepassword-routing.module.ts": (
  /*!*****************************************************************!*\
    !*** ./src/app/updatepassword/updatepassword-routing.module.ts ***!
    \*****************************************************************/
  /*! exports provided: UpdatepasswordPageRoutingModule */
  /***/
  function srcAppUpdatepasswordUpdatepasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UpdatepasswordPageRoutingModule", function () {
      return UpdatepasswordPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _updatepassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./updatepassword.page */"./src/app/updatepassword/updatepassword.page.ts");
    var routes = [{
      path: '',
      component: _updatepassword_page__WEBPACK_IMPORTED_MODULE_3__["UpdatepasswordPage"]
    }];
    var UpdatepasswordPageRoutingModule = /*#__PURE__*/_createClass(function UpdatepasswordPageRoutingModule() {
      _classCallCheck(this, UpdatepasswordPageRoutingModule);
    });
    UpdatepasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UpdatepasswordPageRoutingModule);

    /***/
  }),
  /***/"./src/app/updatepassword/updatepassword.module.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/updatepassword/updatepassword.module.ts ***!
    \*********************************************************/
  /*! exports provided: UpdatepasswordPageModule */
  /***/
  function srcAppUpdatepasswordUpdatepasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UpdatepasswordPageModule", function () {
      return UpdatepasswordPageModule;
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
    var _updatepassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./updatepassword-routing.module */"./src/app/updatepassword/updatepassword-routing.module.ts");
    /* harmony import */
    var _updatepassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./updatepassword.page */"./src/app/updatepassword/updatepassword.page.ts");
    var UpdatepasswordPageModule = /*#__PURE__*/_createClass(function UpdatepasswordPageModule() {
      _classCallCheck(this, UpdatepasswordPageModule);
    });
    UpdatepasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _updatepassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdatepasswordPageRoutingModule"]],
      declarations: [_updatepassword_page__WEBPACK_IMPORTED_MODULE_6__["UpdatepasswordPage"]]
    })], UpdatepasswordPageModule);

    /***/
  }),
  /***/"./src/app/updatepassword/updatepassword.page.scss": (
  /*!*********************************************************!*\
    !*** ./src/app/updatepassword/updatepassword.page.scss ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUpdatepasswordUpdatepasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".register {\n  text-align: center;\n}\n.register h3 {\n  color: black;\n}\n.register .registerlogo {\n  width: 31%;\n  margin-top: 12px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL3VwZGF0ZXBhc3N3b3JkL3VwZGF0ZXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXBkYXRlcGFzc3dvcmQvdXBkYXRlcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtBQ0NSO0FESUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBRE1BO0VBQ0ksaUJBQUE7QUNISjtBRE9JO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQ0pSO0FETVE7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0FDSlo7QURRSTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0FDTlI7QURVQTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDUEo7QURXSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNSUjtBRFVRO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNSWjtBRGFBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtBQ1ZKO0FEYUE7RUFDSSxxQkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlcGFzc3dvcmQvdXBkYXRlcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBoMyB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgLy8gdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB9XG5cbiAgICAucmVnaXN0ZXJsb2dvIHtcbiAgICAgICAgd2lkdGg6IDMxJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG59XG5cbi5mb3JtRGF0YSB7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5mb3JtIHtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIC5pdGVtLW5hdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmFjdGl2ZVRhYiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXJUeXBlIHtcbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnVzZXJUaXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubm91bmRlcmxpbmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iLCIucmVnaXN0ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXIgaDMge1xuICBjb2xvcjogYmxhY2s7XG59XG4ucmVnaXN0ZXIgLnJlZ2lzdGVybG9nbyB7XG4gIHdpZHRoOiAzMSU7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5mb3JtRGF0YSB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZm9ybSBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmZvcm0gaW9uLWl0ZW0gLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybSBidXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlVGFiIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udXNlclR5cGUgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cbi51c2VyVHlwZSB1bCBsaSB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnVzZXJUaXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3VuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/updatepassword/updatepassword.page.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/updatepassword/updatepassword.page.ts ***!
    \*******************************************************/
  /*! exports provided: UpdatepasswordPage */
  /***/
  function srcAppUpdatepasswordUpdatepasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UpdatepasswordPage", function () {
      return UpdatepasswordPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    var UpdatepasswordPage = /*#__PURE__*/function () {
      function UpdatepasswordPage(restSer) {
        _classCallCheck(this, UpdatepasswordPage);
        this.restSer = restSer;
        this.password1Type = 'password';
        this.password1Icon = 'eye-off';
        this.password2Type = 'password';
        this.password2Icon = 'eye-off';
        this.mobile = localStorage.getItem('mobile');
      }
      return _createClass(UpdatepasswordPage, [{
        key: "hideShowPassword1",
        value: function hideShowPassword1() {
          this.password1Type = this.password1Type === 'text' ? 'password' : 'text';
          this.password1Icon = this.password1Icon === 'eye-off' ? 'eye' : 'eye-off';
        }
      }, {
        key: "hideShowPassword2",
        value: function hideShowPassword2() {
          this.password2Type = this.password2Type === 'text' ? 'password' : 'text';
          this.password2Icon = this.password2Icon === 'eye-off' ? 'eye' : 'eye-off';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
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
      }]);
    }();
    UpdatepasswordPage.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }];
    };
    UpdatepasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-updatepassword',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./updatepassword.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/updatepassword/updatepassword.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./updatepassword.page.scss */"./src/app/updatepassword/updatepassword.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])], UpdatepasswordPage);

    /***/
  })
}]);
//# sourceMappingURL=updatepassword-updatepassword-module-es5.js.map