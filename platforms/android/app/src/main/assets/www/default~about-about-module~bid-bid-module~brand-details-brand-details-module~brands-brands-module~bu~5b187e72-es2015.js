(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-about-module~bid-bid-module~brand-details-brand-details-module~brands-brands-module~bu~5b187e72"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row class=\"ion-no-padding footer-tabs\">\n\t<ion-col class=\"ion-no-padding\">\t\n\t\t<ion-row class=\"tabs-row\">\n\t\t\t<ng-container *ngIf=\"apptype == 'OTHER' \">\n\t\t\t\t\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" (click)=\"goTo((apptype != 'USD')? 'prices' :'priceusd' )\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/live prices.png\" />\n\t\t\t\t\t<h5>Live Prices</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" (click)=\"goTo('port')\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/transport.png\" class=\"truck\" style=\"width: 60px !important\"/>\n\t\t\t\t\t<h5>Transport</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" (click)='goTo(\"gallery\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/gallery.png\" />\n\t\t\t\t\t<h5>Gallery</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" (click)='goTo(\"chat-detail\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/chaat.png\" />\n\t\t\t\t\t<h5>Chat</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" (click)='openModel()'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/menu.png\" />\n\t\t\t\t\t<h5>Menu</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t</ng-container>\n\n\t\t\t<ng-container *ngIf=\"apptype != 'OTHER' \">\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" (click)=\"goTo((apptype != 'USD')? 'prices' :'priceusd' )\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t\t<img src=\"../../assets/menu/live prices.png\" *ngIf=\"apptype != 'USD'\" />\n\t\t\t\t\t\t<img src=\"../../assets/menu/doller.png\" *ngIf=\"apptype == 'USD'\" />\n\n\t\t\t\t\t<h5>Live Prices</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\"isCurrentUser == 'false' && apptype == 'USD'\" (click)=\"goTo('oceanfreights')\">\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/images-removebg-preview.png\" class=\"truck\" style=\"width: 39px !important\"/>\n\t\t\t\t\t<h5>Ocean Freight</h5>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" *ngIf=\"seledctedRole == 5 && apptype == 'USD' \" align=\"center\" (click)='goTo(\"buy\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/486-4865980_shopping-cart-png-vector-shopping-cart-png-transparent-removebg-preview.png\" style=\"width: 34px !important\" />\n\t\t\t\t\t<h5>Buy\t</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\"seledctedRole == 4 || seledctedRole == 6 || seledctedRole == 7  && apptype == 'USD'\" (click)='goTo(\"calculator\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/calculator.png\" style=\"width: 21px !important\" />\n\t\t\t\t\t<h5>Calculator</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\"seledctedRole == 5  && apptype == 'USD'\" (click)='goTo(\"hotdeals\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/fire-sign-fire-flame-icon-isolated-on-white-background-illustration-free-vector-removebg-preview.png\" style=\"width: 34px !important\" />\n\t\t\t\t\t<h5>Hot Deals</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<!-- <ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\" isCurrentUser == 'false' \" (click)='goTo(\"gallery\")'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/gallery.png\" />\n\t\t\t\t\t<h5>Gallery</h5>\n\t\t\t\t</ion-col> -->\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\"seledctedRole == 4 || seledctedRole == 6 || seledctedRole == 7 && apptype == 'USD'\" (click)='goToBids()'>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/offers.png\" style=\"width: 27px;\" />\n\t\t\t\t\t<h5>Offer</h5>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col class=\"tab-icon ion-activatable ripple-parent\" align=\"center\" *ngIf=\"apptype == 'USD'\" (click)=\"goTo('otherservices')\" menuToggle>\n\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n\t\t\t\t\t<img src=\"../../assets/menu/images__1_-removebg-preview.png\" style=\"width: 27px;\" />\n\t\t\t\t\t<h5>Other services</h5>\n\t\t\t\t</ion-col>\n\t\t\t</ng-container>\n\n\t\t</ion-row>\n\t\t<button style=\"display: none;\" id=\"clickButton\" (click)=\"updateNotification()\">kjhnj</button>\n\t\t<button style=\"display: none;\" id=\"clickButtonforPayment\" (click)=\"clickButtonforPayment()\">kjhnj</button>\n\t</ion-col>\n</ion-row>");

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
/* harmony default export */ __webpack_exports__["default"] = (".footer-tabs {\n  position: fixed;\n  height: 69px;\n  bottom: -8px;\n  width: 100%;\n  z-index: 9999999;\n  background-color: #fffbd6;\n  padding-top: 0px;\n}\n\n.tab-icon img {\n  width: 25px;\n}\n\n.tab-icon h5 {\n  margin: 0px;\n  font-size: 9.9px;\n  color: #5f5f5f;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.truck {\n  width: 53px !important;\n  margin-top: 5px !important;\n}\n\n.unseenmessage {\n  position: absolute;\n  top: 5px;\n  border-radius: 100%;\n  width: 15px;\n  background: #92B243;\n  color: #FFFBD6;\n  font-size: 0px;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNJLFdBQUE7QUNBUjs7QURFSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBUjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXRhYnN7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogNjlweDtcbiAgICBib3R0b206IC04cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTk5OTk5OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmQ2O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi50YWItaWNvbntcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgIH1cbiAgICBoNXtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogOS45cHg7XG4gICAgICAgIGNvbG9yOiAjNWY1ZjVmO1xuICAgIH1cbn1cblxuLnJpcHBsZS1wYXJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udHJ1Y2t7XG4gICAgd2lkdGg6IDUzcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLnVuc2Vlbm1lc3NhZ2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogIzkyQjI0MztcbiAgICBjb2xvcjogI0ZGRkJENjtcbiAgICBmb250LXNpemU6IDBweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG59IiwiLmZvb3Rlci10YWJzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDY5cHg7XG4gIGJvdHRvbTogLThweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTk5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZDY7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi50YWItaWNvbiBpbWcge1xuICB3aWR0aDogMjVweDtcbn1cbi50YWItaWNvbiBoNSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDkuOXB4O1xuICBjb2xvcjogIzVmNWY1Zjtcbn1cblxuLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50cnVjayB7XG4gIHdpZHRoOiA1M3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG4udW5zZWVubWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICBjb2xvcjogI0ZGRkJENjtcbiAgZm9udC1zaXplOiAwcHg7XG4gIGhlaWdodDogMTVweDtcbn0iXX0= */");

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
            this.isUserExpire = res;
            if (document.getElementById('clickButtonforPayment') != undefined) {
                document.getElementById('clickButtonforPayment').click();
            }
            if (localStorage.getItem('apptype') == 'USD') {
                this.apptype = localStorage.getItem('apptype');
                this.seledctedRole = localStorage.getItem('usd_role');
            }
            else {
                this.apptype = localStorage.getItem('apptype');
                this.seledctedRole = localStorage.getItem('role');
            }
            console.log(this.seledctedRole);
        });
        this.getChatStatus();
        this.apptype = localStorage.getItem('apptype');
    }
    updateNotification() {
        this.hasMessage = this.hasMessage + 1;
    }
    ngOnInit() {
        if (localStorage.getItem('apptype') == 'USD') {
            this.seledctedRole = localStorage.getItem('usd_role');
        }
        else {
            this.seledctedRole = localStorage.getItem('role');
        }
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
        if (localStorage.getItem('apptype') == 'OTHER') {
            this.navCtrl.navigateRoot(page, { animationDirection: 'forward' });
        }
        else {
            if (localStorage.getItem('isExpired') == 'false') {
                this.navCtrl.navigateRoot(page, { animationDirection: 'forward' });
            }
            else {
                this.navCtrl.navigateRoot('planpage', { animationDirection: 'forward' });
            }
        }
        if (localStorage.getItem('transaction_id') == undefined || localStorage.getItem('transaction_id') == null) {
        }
        else {
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
        }, (err) => {
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
//# sourceMappingURL=default~about-about-module~bid-bid-module~brand-details-brand-details-module~brands-brands-module~bu~5b187e72-es2015.js.map