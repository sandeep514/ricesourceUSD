function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updatepassword-updatepassword-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/updatepassword/updatepassword.page.html":
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
  },

  /***/"./src/app/updatepassword/updatepassword-routing.module.ts":
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
  },

  /***/"./src/app/updatepassword/updatepassword.module.ts":
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
  },

  /***/"./src/app/updatepassword/updatepassword.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/updatepassword/updatepassword.page.scss ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUpdatepasswordUpdatepasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".register {\n  text-align: center;\n}\n.register h3 {\n  color: black;\n}\n.register .registerlogo {\n  width: 31%;\n  margin-top: 12px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC91cGRhdGVwYXNzd29yZC91cGRhdGVwYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3VwZGF0ZXBhc3N3b3JkL3VwZGF0ZXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7QUNDUjtBRElJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDRlI7QURNQTtFQUNJLGlCQUFBO0FDSEo7QURPSTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7QUNKUjtBRE1RO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQ0paO0FEUUk7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtBQ05SO0FEVUE7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ1BKO0FEV0k7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDUlI7QURVUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDUlo7QURhQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUNWSjtBRGFBO0VBQ0kscUJBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZXBhc3N3b3JkL3VwZGF0ZXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaDMge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIC8vIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVybG9nbyB7XG4gICAgICAgIHdpZHRoOiAzMSU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxufVxuXG4uZm9ybURhdGEge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZm9ybSB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAuaXRlbS1uYXRpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5hY3RpdmVUYWIge1xuICAgIC0tYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyVHlwZSB7XG4gICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi51c2VyVGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLm5vdW5kZXJsaW5lIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiLnJlZ2lzdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlZ2lzdGVyIGgzIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnJlZ2lzdGVyIC5yZWdpc3RlcmxvZ28ge1xuICB3aWR0aDogMzElO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uZm9ybURhdGEge1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLmZvcm0gaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtIGlvbi1pdGVtIC5pdGVtLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmZvcm0gYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZVRhYiB7XG4gIC0tYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXJUeXBlIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDA7XG59XG4udXNlclR5cGUgdWwgbGkge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MztcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi51c2VyVGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubm91bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

    /***/
  },

  /***/"./src/app/updatepassword/updatepassword.page.ts":
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
      _createClass(UpdatepasswordPage, [{
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
      return UpdatepasswordPage;
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
  }
}]);
//# sourceMappingURL=updatepassword-updatepassword-module-es5.js.map