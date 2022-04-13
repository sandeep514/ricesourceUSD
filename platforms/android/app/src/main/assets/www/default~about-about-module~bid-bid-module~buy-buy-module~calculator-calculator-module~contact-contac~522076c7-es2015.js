(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-about-module~bid-bid-module~buy-buy-module~calculator-calculator-module~contact-contac~522076c7"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row class=\"ion-no-padding footer-tabs\">\n\t<ion-col class=\"ion-no-padding\">\t\n\t\t<ion-row class=\"tabs-row\">\n\n\t\t\t<ng-container *ngIf=\"apptype == 'OTHER' \">\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" (click)=\"goTo((apptype != 'USD')? 'prices' :'priceusd' )\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/live prices.png\" />\n\t\t\t\t\t<h5>Live Pricess</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\" apptype != 'USD'\" (click)=\"goTo('port')\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/transport.png\" class=\"truck\" style=\"width: 60px !important\"/>\n\t\t\t\t\t<h5>Transport</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" (click)='goTo(\"gallery\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/gallery.png\" />\n\t\t\t\t\t<h5>Gallery</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" (click)='goTo(\"chat-detail\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/chaat.png\" />\n\t\t\t\t\t<h5>Chat</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" (click)='openModel()'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/menu.png\" />\n\t\t\t\t\t<h5>Menu</h5>\n\t\t\t\t</ion-col>\n\t\t\t</ng-container>\n\n\t\t\t<ng-container *ngIf=\"apptype != 'OTHER' \">\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" (click)=\"goTo((apptype != 'USD')? 'prices' :'priceusd' )\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/live prices.png\" />\n\t\t\t\t\t<h5>Live Prices</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\" isCurrentUser == 'false' && apptype == 'USD'\" (click)=\"goTo('oceanfreights')\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/images-removebg-preview.png\" class=\"truck\" style=\"width: 39px !important\"/>\n\t\t\t\t\t<h5>Ocean Freight</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" *ngIf=\"seledctedRole == 5 \" align=\"center\" (click)='goTo(\"buy\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/486-4865980_shopping-cart-png-vector-shopping-cart-png-transparent-removebg-preview.png\" style=\"width: 34px !important\" />\n\t\t\t\t\t<h5>Buy\t</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\"seledctedRole == 4 || seledctedRole == 6\" (click)='goTo(\"calculator\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/calculator.png\" style=\"width: 21px !important\" />\n\t\t\t\t\t<h5>Calculator</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<!-- <ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\" isCurrentUser == 'false' \" (click)='goTo(\"gallery\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/gallery.png\" />\n\t\t\t\t\t<h5>Gallery</h5>\n\t\t\t\t</ion-col> -->\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\"seledctedRole == 4 || seledctedRole == 6\" (click)='goToBids()'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/gallery.png\" />\n\t\t\t\t\t<h5>Bids</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" (click)=\"goTo('otherservices')\" menuToggle>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/images__1_-removebg-preview.png\" style=\"width: 27px;\" />\n\t\t\t\t\t<h5>Other services</h5>\n\t\t\t\t</ion-col>\n\t\t\t</ng-container>\n\n\t\t</ion-row>\n\t\t<button id=\"clickButton\" (click)=\"updateNotification()\">kjhnj</button>\n\t\t<button id=\"clickButtonforPayment\" (click)=\"clickButtonforPayment()\">kjhnj</button>\n\t</ion-col>\n</ion-row>");

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        exports: [
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]
        ],
        entryComponents: []
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-tabs {\n  position: fixed;\n  height: 69px;\n  bottom: -8px;\n  width: 100%;\n  z-index: 9999999;\n  background-color: #fffbd6;\n  padding-top: 4px;\n}\n\n.tab-icon img {\n  width: 25px;\n}\n\n.tab-icon h5 {\n  margin: 0px;\n  font-size: 9.9px;\n  color: #5f5f5f;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.truck {\n  width: 53px !important;\n  margin-top: 5px !important;\n}\n\n.unseenmessage {\n  position: absolute;\n  top: 5px;\n  border-radius: 100%;\n  width: 15px;\n  background: #92B243;\n  color: #FFFBD6;\n  font-size: 0px;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9yaWNlX21vYmlsZS9zcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdJO0VBQ0ksV0FBQTtBQ0FSOztBREVJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FSOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksc0JBQUE7RUFDQSwwQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItdGFic3tcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiA2OXB4O1xuICAgIGJvdHRvbTogLThweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk5OTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZDY7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLnRhYi1pY29ue1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgfVxuICAgIGg1e1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiA5LjlweDtcbiAgICAgICAgY29sb3I6ICM1ZjVmNWY7XG4gICAgfVxufVxuXG4ucmlwcGxlLXBhcmVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50cnVja3tcbiAgICB3aWR0aDogNTNweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG4udW5zZWVubWVzc2FnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICAgIGNvbG9yOiAjRkZGQkQ2O1xuICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgIGhlaWdodDogMTVweDtcbn0iLCIuZm9vdGVyLXRhYnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogNjlweDtcbiAgYm90dG9tOiAtOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk5OTk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJkNjtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLnRhYi1pY29uIGltZyB7XG4gIHdpZHRoOiAyNXB4O1xufVxuLnRhYi1pY29uIGg1IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogOS45cHg7XG4gIGNvbG9yOiAjNWY1ZjVmO1xufVxuXG4ucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRydWNrIHtcbiAgd2lkdGg6IDUzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51bnNlZW5tZXNzYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gIGNvbG9yOiAjRkZGQkQ2O1xuICBmb250LXNpemU6IDBweDtcbiAgaGVpZ2h0OiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components.service */ "./src/app/components.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");





let MenuComponent = class MenuComponent {
    constructor(compSer, navCtrl, menuCtrl, restApi, ModelCtrl, toastCtrl) {
        this.compSer = compSer;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.restApi = restApi;
        this.ModelCtrl = ModelCtrl;
        this.toastCtrl = toastCtrl;
        this.hasMessage = 0;
        this.isUserExpire = 'true';
        this.isCurrentUser = 'false';
        this.compSer.hasMessage.subscribe((data) => {
            if (data == 1) {
                // this.hasMessage = 1;
                document.getElementById('clickButton').click();
            }
            else {
                this.hasMessage = 0;
            }
        });
        this.compSer.isUserExpired.subscribe((res) => {
            console.log(res);
            this.isUserExpire = res;
            if (document.getElementById('clickButtonforPayment') != undefined) {
                document.getElementById('clickButtonforPayment').click();
            }
        });
        this.getChatStatus();
        this.apptype = localStorage.getItem('apptype');
    }
    updateNotification() {
        this.hasMessage = this.hasMessage + 1;
    }
    ngOnInit() {
        this.seledctedRole = localStorage.getItem('role');
    }
    showChatUnavailableModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let presentToast = yield this.toastCtrl.create({
                message: "No chat executive is available right now , Please contact later.",
                duration: 4000,
                position: 'bottom'
            });
            presentToast.present();
        });
    }
    goTo(page) {
        // this.compSer.compareTwoDates(localStorage.getItem('expired_on'));
        console.log(localStorage.getItem('isExpired'));
        if (localStorage.getItem('isExpired') == 'false') {
            this.navCtrl.navigateRoot(page, { animationDirection: 'forward' });
        }
        else {
            this.navCtrl.navigateRoot('planpage', { animationDirection: 'forward' });
        }
    }
    clickButtonforPayment() {
        this.isCurrentUser = this.isUserExpire;
    }
    goToBids() {
        this.navCtrl.navigateForward('mybids');
    }
    goToChat() {
        this.restApi.getChatStatus().then((res) => {
            this.chatStatus = res.data;
            this.chat();
        }, (err) => {
            console.log(err);
        });
    }
    openModel() {
        this.menuCtrl.enable(true);
        this.menuCtrl.open();
    }
    chat() {
        this.navCtrl.navigateForward(['chat-detail']);
    }
    getChatStatus() {
        this.restApi.getChatStatus().then((res) => {
            this.chatStatus = res.data;
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
    getChatCount() {
        this.restApi.getChatCount().then((res) => {
            this.hasMessage = res.data;
        }, (err) => {
        });
    }
    showPaymentModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.compSer.showPaymentModal.next();
        });
    }
};
MenuComponent.ctorParameters = () => [
    { type: _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], MenuComponent);



/***/ })

}]);
//# sourceMappingURL=default~about-about-module~bid-bid-module~buy-buy-module~calculator-calculator-module~contact-contac~522076c7-es2015.js.map