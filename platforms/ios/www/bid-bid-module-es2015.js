(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bid-bid-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bid/bid.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bid/bid.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"green\">\n\t<ion-toolbar  mode=\"ios\"  style=\"background: transparent; --background: transparent\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t\t<ion-title class=\"header-title porttitle\">Bid</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content id=\"content\" [scrollEvents]=\"true\" class=\"lightgreen\" >\n\t<div style=\"padding: 10px 10px;margin-bottom: 100px;\">\n\t\t<div>\n\t\t\t<p style=\"font-size: 20px;line-height: 1.5;padding: 0 10px;\">\t\t\t\t\n\t\t\t\tNew Query for <span style=\"color: #92b243;\">{{qualityType}} - {{qualityName}}</span> with <span style=\"color: #92b243;\">{{quantity}}</span> Quantity.</p>\n\t\t\t\t<p>\n\t\t\t\t\tRemarks: {{remarks}}\n\t\t\t\t</p>\n\t\t</div>\n\t\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Place your bid</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"bidprice\" type=\"text\"></ion-input>\n\t\t</ion-item>\n\n\t\t<div *ngIf=\"validateFails\" style=\"text-align: center;color: red;font-weight: 600\">\n\t\t\t<span>Required Fields are missing</span>\n\t\t</div>\n\n\t\t<ion-button color=\"success\" expand=\"full\" shape=\"round\" (click)=\"save()\">Submit</ion-button>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/bid/bid-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/bid/bid-routing.module.ts ***!
  \*******************************************/
/*! exports provided: BidPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidPageRoutingModule", function() { return BidPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bid_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bid.page */ "./src/app/bid/bid.page.ts");




const routes = [
    {
        path: '',
        component: _bid_page__WEBPACK_IMPORTED_MODULE_3__["BidPage"]
    }
];
let BidPageRoutingModule = class BidPageRoutingModule {
};
BidPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BidPageRoutingModule);



/***/ }),

/***/ "./src/app/bid/bid.module.ts":
/*!***********************************!*\
  !*** ./src/app/bid/bid.module.ts ***!
  \***********************************/
/*! exports provided: BidPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidPageModule", function() { return BidPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bid_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bid-routing.module */ "./src/app/bid/bid-routing.module.ts");
/* harmony import */ var _bid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bid.page */ "./src/app/bid/bid.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let BidPageModule = class BidPageModule {
};
BidPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _bid_routing_module__WEBPACK_IMPORTED_MODULE_5__["BidPageRoutingModule"]
        ],
        declarations: [_bid_page__WEBPACK_IMPORTED_MODULE_6__["BidPage"]]
    })
], BidPageModule);



/***/ }),

/***/ "./src/app/bid/bid.page.scss":
/*!***********************************!*\
  !*** ./src/app/bid/bid.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\nion-item {\n  border: 3px solid #92b243;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.item-native {\n  background: transparent;\n  background-color: transparent;\n  --background: transparent;\n  --background-color: transparent;\n}\n\n.packingSelect .select-text {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2JpZC9iaWQucGFnZS5zY3NzIiwic3JjL2FwcC9iaWQvYmlkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREFJO0VBQ0ksZUFBQTtBQ0VSOztBREVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQ0k7RUFDSSxhQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9iaWQvYmlkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50Zi10cmVlLmV4YW1wbGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDk0ZjU4O1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG5pb24taXRlbXtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjOTJiMjQzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pdGVtLW5hdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ucGFja2luZ1NlbGVjdHtcbiAgICAuc2VsZWN0LXRleHR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSIsIi50Zi10cmVlLmV4YW1wbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmJhY2stYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgY29sb3I6ICNGRkY7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyOiAzcHggc29saWQgIzkyYjI0MztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFja2luZ1NlbGVjdCAuc2VsZWN0LXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/bid/bid.page.ts":
/*!*********************************!*\
  !*** ./src/app/bid/bid.page.ts ***!
  \*********************************/
/*! exports provided: BidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidPage", function() { return BidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let BidPage = class BidPage {
    constructor(ActRoute, apiser, location) {
        this.ActRoute = ActRoute;
        this.apiser = apiser;
        this.location = location;
        let queryId = this.ActRoute.snapshot.params.buy_query;
        this.queryDataId = queryId;
        // alert(queryId)
        this.apiser.getBuyerDetails(queryId).then((res) => {
            this.qualityName = res.data.qualityName;
            this.quantity = res.data.quantity;
            this.remarks = res.data.remarks;
            this.qualityType = res.data.qualityType;
        });
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
    }
    save() {
        if (this.bidprice != 0) {
            let postedData = { 'bidPrice': this.bidprice, 'user_id': localStorage.getItem('id'), queryDataId: this.queryDataId };
            this.apiser.saveUserBid(postedData).then((res) => {
                if (res.status == true) {
                    this.apiser.presentToast('Bid Posted Successfully.');
                }
                else {
                    this.apiser.presentToast('something went wrong.');
                }
            }, (err) => {
                console.log(err);
            });
        }
    }
};
BidPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
BidPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bid.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bid/bid.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bid.page.scss */ "./src/app/bid/bid.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
], BidPage);



/***/ })

}]);
//# sourceMappingURL=bid-bid-module-es2015.js.map