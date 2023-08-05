function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changepassword-changepassword-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.page.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChangepasswordChangepasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content class=\"register lightgreen\">\n\t<ion-row>\n\t\t<ion-col class=\"h-260 green brlb-30\">\n\t\t\t<img src=\"../../assets/sntc_nobackground.png\" class=\"registerlogo\" alt=\"\">\t\t\t\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<h3>\n\t\t\t\tChange Password\n\t\t\t</h3>\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row class=\"formData\">\n\t\t<ion-col class=\"form\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Password</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"password\" [type]=\"passwordType\" name=\"password\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()' style=\"font-size: 1px;\"></ion-icon>\n\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Confirm Password</ion-label>\n\t\t\t\t<ion-input [type]=\"password1Type\" name='confpassword' [(ngModel)]=\"confpassword\"></ion-input>\n\t\t\t\t<ion-icon slot=\"end\" [name]=\"password1Icon\" class=\"passwordIcon\" (click)='hideShowPassword1()' style=\"font-size: 1px;\"></ion-icon>\n\t\t\t\t<img src=\"../../assets/svg/key-outline.svg\" style=\"width: 8%;margin-top: 18px;\" slot=\"start\" alt=\"\">\n\t\t\t</ion-item>\n\n\t\t\t<div class=\"center mt10\">\n\t\t\t\t<ion-button class=\"green\" (click)=\"changePassword()\">Change Password</ion-button>\n\t\t\t</div>\n\t\t\t<p class=\"center w-100\"><a href=\"javascript:void(0)\" class=\"nounderline\" (click)=\"login()\">Go to login</a></p>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"center\">\n\t\t\n\t</ion-row>\n</ion-content>";

    /***/
  },

  /***/"./src/app/changepassword/changepassword-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/changepassword/changepassword-routing.module.ts ***!
    \*****************************************************************/
  /*! exports provided: ChangepasswordPageRoutingModule */
  /***/
  function srcAppChangepasswordChangepasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChangepasswordPageRoutingModule", function () {
      return ChangepasswordPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _changepassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./changepassword.page */"./src/app/changepassword/changepassword.page.ts");
    var routes = [{
      path: '',
      component: _changepassword_page__WEBPACK_IMPORTED_MODULE_3__["ChangepasswordPage"]
    }];
    var ChangepasswordPageRoutingModule = /*#__PURE__*/_createClass(function ChangepasswordPageRoutingModule() {
      _classCallCheck(this, ChangepasswordPageRoutingModule);
    });
    ChangepasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChangepasswordPageRoutingModule);

    /***/
  },

  /***/"./src/app/changepassword/changepassword.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/changepassword/changepassword.module.ts ***!
    \*********************************************************/
  /*! exports provided: ChangepasswordPageModule */
  /***/
  function srcAppChangepasswordChangepasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function () {
      return ChangepasswordPageModule;
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
    var _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./changepassword-routing.module */"./src/app/changepassword/changepassword-routing.module.ts");
    /* harmony import */
    var _changepassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./changepassword.page */"./src/app/changepassword/changepassword.page.ts");
    var ChangepasswordPageModule = /*#__PURE__*/_createClass(function ChangepasswordPageModule() {
      _classCallCheck(this, ChangepasswordPageModule);
    });
    ChangepasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangepasswordPageRoutingModule"]],
      declarations: [_changepassword_page__WEBPACK_IMPORTED_MODULE_6__["ChangepasswordPage"]]
    })], ChangepasswordPageModule);

    /***/
  },

  /***/"./src/app/changepassword/changepassword.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/changepassword/changepassword.page.scss ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppChangepasswordChangepasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".register {\n  text-align: center;\n}\n.register h3 {\n  color: #000000;\n}\n.register .registerlogo {\n  width: 34%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.formData {\n  padding: 0px 20px;\n}\n.form ion-item {\n  background: transparent;\n  --background: transparent;\n}\n.form ion-item .item-native {\n  background: transparent;\n  --background: transparent;\n}\n.form button {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  background-color: #92B243 !important;\n  --background-color: #92B243 !important;\n}\n.activeTab {\n  --background: #92B243 !important;\n  background: #92B243 !important;\n  color: white;\n}\n.userType ul {\n  list-style: none;\n  width: 100%;\n  display: inline-flex;\n  padding: 15px;\n  margin: 0;\n}\n.userType ul li {\n  padding: 5px 15px;\n  border: 2px solid #92B243;\n  border-radius: 7px;\n  margin-right: 10px;\n}\n.userTitle {\n  text-align: left !important;\n  padding-left: 20px !important;\n}\n.nounderline {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9jaGFuZ2VwYXNzd29yZC9jaGFuZ2VwYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURBSTtFQUNJLGNBQUE7QUNFUjtBREVJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRElBO0VBQ0ksaUJBQUE7QUNESjtBREtJO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQ0ZSO0FER1E7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0FDRFo7QURJSTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0FDRlI7QURLQTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDRko7QURLSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNGUjtBRElRO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNGWjtBRE1BO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtBQ0hKO0FES0E7RUFDSSxxQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlcGFzc3dvcmQvY2hhbmdlcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoM3tcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIC8vIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgfVxuICAgIC5yZWdpc3RlcmxvZ297XG4gICAgICAgIHdpZHRoOiAzNCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuXG4uZm9ybURhdGF7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5mb3Jte1xuICAgIGlvbi1pdGVte1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLml0ZW0tbmF0aXZle1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLmFjdGl2ZVRhYntcbiAgICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi51c2VyVHlwZXtcbiAgICB1bHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4udXNlclRpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cbi5ub3VuZGVybGluZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiLnJlZ2lzdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlZ2lzdGVyIGgzIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ucmVnaXN0ZXIgLnJlZ2lzdGVybG9nbyB7XG4gIHdpZHRoOiAzNCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtRGF0YSB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZm9ybSBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmZvcm0gaW9uLWl0ZW0gLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybSBidXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzkyQjI0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlVGFiIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTJCMjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udXNlclR5cGUgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cbi51c2VyVHlwZSB1bCBsaSB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnVzZXJUaXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3VuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/changepassword/changepassword.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/changepassword/changepassword.page.ts ***!
    \*******************************************************/
  /*! exports provided: ChangepasswordPage */
  /***/
  function srcAppChangepasswordChangepasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChangepasswordPage", function () {
      return ChangepasswordPage;
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
    var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    var ChangepasswordPage = /*#__PURE__*/function () {
      function ChangepasswordPage(restSer, actRoute, navCtrl) {
        _classCallCheck(this, ChangepasswordPage);
        this.restSer = restSer;
        this.actRoute = actRoute;
        this.navCtrl = navCtrl;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.password1Type = 'password';
        this.password1Icon = 'eye-off';
        this.number = this.actRoute.snapshot.paramMap.get('number');
      }
      _createClass(ChangepasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "hideShowPassword",
        value: function hideShowPassword() {
          this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
          this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
        }
      }, {
        key: "hideShowPassword1",
        value: function hideShowPassword1() {
          this.password1Type = this.password1Type === 'text' ? 'password' : 'text';
          this.password1Icon = this.password1Icon === 'eye-off' ? 'eye' : 'eye-off';
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          var _this = this;
          var formData = {
            number: this.number,
            password: this.password
          };
          this.restSer.presentLoader('Please wait...');
          if (this.password == this.confpassword) {
            this.restSer.changePassword(formData).then(function (res) {
              _this.navCtrl.navigateForward(['login']);
              _this.restSer.loaderCtrl.dismiss();
              _this.restSer.presentToast('Password change successfully.');
            }, function (err) {
              _this.restSer.loaderCtrl.dismiss();
              _this.restSer.presentToast('Something went wrong.');
            });
          } else {
            this.restSer.presentToast('Password and confirm password is not correct.');
          }
        }
      }, {
        key: "login",
        value: function login() {
          this.navCtrl.navigateForward(['login']);
        }
      }]);
      return ChangepasswordPage;
    }();
    ChangepasswordPage.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };
    ChangepasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-changepassword',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./changepassword.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./changepassword.page.scss */"./src/app/changepassword/changepassword.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], ChangepasswordPage);

    /***/
  }
}]);
//# sourceMappingURL=changepassword-changepassword-module-es5.js.map