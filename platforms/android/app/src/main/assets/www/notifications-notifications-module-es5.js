function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
    \*********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content id=\"content\" [scrollEvents]=\"true\" class=\"lightgreen\">\n    <div class=\"header-data green\" style=\"min-height: 80px;height: 80px\">\n        <div style=\"min-height: 80px\">\n            <ion-row>\n                <ion-col size=\"4\" align=\"center\">\n                    <div class=\"user-profile-icon\" (click)=\"gotoProfile()\">\n                        <span>{{ userFirstName | uppercase }}</span>\n                    </div>\n                </ion-col>\n                <ion-col size=\"4\" align=\"center\" class=\"notification\" style=\"margin-top: 25px ;font-size: 20px;font-weight: 700;\">\n                    Notification\n                </ion-col>\n                <ion-col size=\"4\" align=\"right\" class=\"notification\">\n                    <ion-icon name=\"notifications\"></ion-icon>\n                    <!-- <span class=\"badge\">2</span> -->\n                </ion-col>\n            </ion-row>\n        </div>\n        <ng-container>\n            <ion-row *ngFor=\"let data of ListNotif\" style=\"padding: 10px;border-bottom: 1px solid #ededed\">\n                <ion-col>\n                    <ul style=\"list-style: none;display: flex;width: 100%;padding-left: 0;justify-content: space-between;margin-top: 0;\">\n                        <li style=\"font-weight: 700;\">\n                            {{ data.title }}\n                        </li>\n                        <li>\n                            {{ data.created_at | date: 'dd/MM/yyyy H:mm' }}\n                        </li>\n                    </ul>\n                    <p style=\"margin: 0\">{{ data.message }}</p>\n                </ion-col>\n            </ion-row>\n            <ion-row style=\"height: 100px\">\n\n            </ion-row>\n        </ng-container>\n    </div>\n    <app-menu></app-menu>\n</ion-content>";

    /***/
  },

  /***/"./src/app/notifications/notifications-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/notifications/notifications-routing.module.ts ***!
    \***************************************************************/
  /*! exports provided: NotificationsPageRoutingModule */
  /***/
  function srcAppNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function () {
      return NotificationsPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./notifications.page */"./src/app/notifications/notifications.page.ts");
    var routes = [{
      path: '',
      component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
    }];
    var NotificationsPageRoutingModule = /*#__PURE__*/_createClass(function NotificationsPageRoutingModule() {
      _classCallCheck(this, NotificationsPageRoutingModule);
    });
    NotificationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationsPageRoutingModule);

    /***/
  },

  /***/"./src/app/notifications/notifications.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/notifications/notifications.module.ts ***!
    \*******************************************************/
  /*! exports provided: NotificationsPageModule */
  /***/
  function srcAppNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
      return NotificationsPageModule;
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
    var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./notifications-routing.module */"./src/app/notifications/notifications-routing.module.ts");
    /* harmony import */
    var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./notifications.page */"./src/app/notifications/notifications.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var NotificationsPageModule = /*#__PURE__*/_createClass(function NotificationsPageModule() {
      _classCallCheck(this, NotificationsPageModule);
    });
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]],
      declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })], NotificationsPageModule);

    /***/
  },

  /***/"./src/app/notifications/notifications.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/notifications/notifications.page.scss ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppNotificationsNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MifQ== */";

    /***/
  },

  /***/"./src/app/notifications/notifications.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/notifications/notifications.page.ts ***!
    \*****************************************************/
  /*! exports provided: NotificationsPage */
  /***/
  function srcAppNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
      return NotificationsPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    var NotificationsPage = /*#__PURE__*/function () {
      function NotificationsPage(restService, navCtrl) {
        _classCallCheck(this, NotificationsPage);
        this.restService = restService;
        this.navCtrl = navCtrl;
        this.userFirstName = localStorage.getItem("name")[0];
      }
      _createClass(NotificationsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.restService.getLatestNotifications().then(function (res) {
            _this.ListNotif = res.data;
            console.log(res.data);
            _this.clearNotif();
          }, function (err) {});
        }
      }, {
        key: "clearNotif",
        value: function clearNotif() {
          var userid = localStorage.getItem('id');
          this.restService.clearNotification(userid).then(function (res) {
            localStorage.setItem('isNewNotification', 'false');
          }, function (err) {});
        }
      }, {
        key: "gotoProfile",
        value: function gotoProfile() {
          localStorage.setItem('apptype', 'OTHER');
          this.navCtrl.navigateForward('prices');
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          return new Date(date).toLocaleString();
        }
      }]);
      return NotificationsPage;
    }();
    NotificationsPage.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./notifications.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./notifications.page.scss */"./src/app/notifications/notifications.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], NotificationsPage);

    /***/
  }
}]);
//# sourceMappingURL=notifications-notifications-module-es5.js.map