(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-buy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/buy/buy.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buy/buy.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"green\">\n\t<ion-toolbar  mode=\"ios\"  style=\"background: transparent; --background: transparent\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t\t<ion-title class=\"header-title porttitle\">Buy Query</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content id=\"content\" [scrollEvents]=\"true\" class=\"lightgreen\" >\n\t<div style=\"padding: 10px 10px;margin-bottom: 100px;\">\n\t\t<ion-item>\n\t\t\t<ion-label>Category</ion-label>\n\t\t\t<!-- (ionChange)=\"changecountry($event)\" -->\n\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQualityType($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let qualityType of riceQualityType\" style=\"text-transform: capitalize;\">{{ qualityType | uppercase }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\" style=\"border: 3px solid #92b243;border-radius: 10px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Quality</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQuality($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let qualityType of riceQualityDataSelectedArray\" style=\"text-transform: capitalize;\">{{ qualityType.quality }} {{ qualityType.quality_name }}</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option style=\"text-transform: capitalize;\">Other</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<p style=\"padding: 0;margin: 0;margin-right: 15px;text-align: right;padding: 5px;\">{{quality}}</p>\n\t\t\t</ion-col>\t\t\t\t\n\t\t\t\t\t\n\t\t</ion-row>\n\n\t\t<!-- <ion-item>\n\t\t\t<ion-label position=\"\">Quality</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"quality\" type=\"text\"></ion-input>\n\t\t</ion-item> -->\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\" style=\"border: 3px solid #92b243;border-radius: 10px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item class=\"packingSelect\" style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Packing</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePacking($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let package of selectedPackageData\" value=\"{{ package.id+'_'+package.bag_size+'_'+package.bag_type }}\">\n\t\t\t\t\t\t\t<p>{{package.bag_size}} </p>\n\t\t\t\t\t\t\t<p>{{package.bag_type}}</p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item> \n\t\t\t\t<p style=\"padding: 0;margin: 0;margin-left: 15px;text-align: left;padding: 5px;\">{{selectedPackageName}}</p>\n\t\t\t</ion-col>\t\t\t\t\n\t\t\t\n\t\t</ion-row>\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Quantity (MT)</ion-label>\n\t\t\t<ion-input type=\"number\" [(ngModel)]=\"quantity\" style=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label>Port</ion-label>\n\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePort($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let port of ports\" value=\"{{ port.port+'_'+port.freight_25MT }}\">{{ port.port }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t\n\t\t<!-- <ion-item>\n\t\t\t<ion-label>Port</ion-label>\n\t\t\t<ionic-selectable\n\t\t\t\t[(ngModel)]=\"port\"\n\t\t\t\t[items]=\"ports\"\n\t\t\t\titemValueField=\"id\"\n\t\t\t\titemTextField=\"port\"\n\t\t\t\t[canSearch]=\"true\"\n\t\t\t\t(onChange)=\"changePort($event)\"\n\t\t\t\t(ionChange)=\"changePort($event)\"\n\t\t\t>\n\t\t\t</ionic-selectable>\n\t\t</ion-item> -->\n\n\t\t<!-- <ion-item>\n\t\t\t<ion-label position=\"\">Buyer Name</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"party\" type=\"text\" style=\"text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Contact No.</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"mobile\" type=\"text\" style=\"text-align: right;\"></ion-input>\n\t\t</ion-item> -->\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"stacked\" >Additional Information: </ion-label>\n\t\t\t<ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"remarks\" ></ion-textarea>\n\t\t</ion-item>\n\n\t\t<!-- <ion-item>\n\t\t\t<ion-label position=\"\">Deal Valid for days</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"validDays\" type=\"text\" style=\" text-align: right;\" placeholder=\"2\"></ion-input>\n\t\t</ion-item> -->\n\t\t\n\t\t<div *ngIf=\"isError\" style=\"text-align: center;color: red;font-weight: 600\">\n\t\t\t<span>{{ errorMessage }}</span>\n\t\t</div>\n\t\t<ion-button color=\"success\" expand=\"full\" shape=\"round\" (click)=\"save()\">Submit</ion-button>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/buy/buy-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/buy/buy-routing.module.ts ***!
  \*******************************************/
/*! exports provided: BuyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPageRoutingModule", function() { return BuyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _buy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buy.page */ "./src/app/buy/buy.page.ts");




const routes = [
    {
        path: '',
        component: _buy_page__WEBPACK_IMPORTED_MODULE_3__["BuyPage"]
    }
];
let BuyPageRoutingModule = class BuyPageRoutingModule {
};
BuyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BuyPageRoutingModule);



/***/ }),

/***/ "./src/app/buy/buy.module.ts":
/*!***********************************!*\
  !*** ./src/app/buy/buy.module.ts ***!
  \***********************************/
/*! exports provided: BuyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPageModule", function() { return BuyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _buy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buy-routing.module */ "./src/app/buy/buy-routing.module.ts");
/* harmony import */ var _buy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buy.page */ "./src/app/buy/buy.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");









let BuyPageModule = class BuyPageModule {
};
BuyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _buy_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyPageRoutingModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]
        ],
        declarations: [_buy_page__WEBPACK_IMPORTED_MODULE_6__["BuyPage"]]
    })
], BuyPageModule);



/***/ }),

/***/ "./src/app/buy/buy.page.scss":
/*!***********************************!*\
  !*** ./src/app/buy/buy.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\nion-item {\n  border: 3px solid #92b243;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.item-native {\n  background: transparent;\n  background-color: transparent;\n  --background: transparent;\n  --background-color: transparent;\n}\n\n.packingSelect .select-text {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9idXkvYnV5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYnV5L2J1eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURBSTtFQUNJLGVBQUE7QUNFUjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBQ0VKOztBRENJO0VBQ0ksYUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvYnV5L2J1eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGYtdHJlZS5leGFtcGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuaW9uLWl0ZW17XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzkyYjI0MztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaXRlbS1uYXRpdmV7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnBhY2tpbmdTZWxlY3R7XG4gICAgLnNlbGVjdC10ZXh0e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iLCIudGYtdHJlZS5leGFtcGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5iYWNrLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM0OTRmNTg7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM5MmIyNDM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhY2tpbmdTZWxlY3QgLnNlbGVjdC10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/buy/buy.page.ts":
/*!*********************************!*\
  !*** ./src/app/buy/buy.page.ts ***!
  \*********************************/
/*! exports provided: BuyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPage", function() { return BuyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let BuyPage = class BuyPage {
    constructor(apiser, location, navCtrl) {
        this.apiser = apiser;
        this.location = location;
        this.navCtrl = navCtrl;
        this.party = localStorage.getItem('name');
        this.mobile = localStorage.getItem('mobile');
        this.remarks = '';
        this.validDays = 0;
        this.isError = false;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.getData();
    }
    save() {
        this.isError = false;
        if (this.quality != undefined &&
            this.quantity != undefined &&
            this.party != undefined &&
            this.mobile != undefined &&
            this.portName != '' &&
            this.portName != undefined) {
            this.apiser.presentLoader('Please wait...');
            let postedData = {
                'selectedQualityType': this.selectedQualityType,
                'quality': this.quality,
                'changePackingType': this.changePackingType,
                'quantity': this.quantity,
                'validDays': this.validDays,
                'portName': this.portName,
                'party': this.party,
                'mobile': this.mobile,
                'remarks': this.remarks,
                'user': localStorage.getItem('id')
            };
            this.apiser.saveRiceQuery(postedData).then((res) => {
                this.apiser.loaderCtrl.dismiss();
                this.apiser.presentToast('Query generated successfully.');
                this.navCtrl.navigateRoot(['thankyou']);
            }, (err) => {
                console.log(err);
            });
        }
        else {
            this.isError = true;
            this.errorMessage = "Required fields are missing";
            console.log('validate fails');
            console.log("here");
        }
    }
    getData() {
        this.apiser.getDataForBuyer().then((res) => {
            this.riceQualityType = res.riceQualityType;
            this.riceQualityData = res.riceQualityData;
            this.riceQualityDataArray = res.riceQualityDataArray;
            this.ports = res.ports;
        }, (err) => {
            console.log(err);
        });
    }
    changeQualityType(data) {
        this.selectedQualityType = data.detail.value;
        this.riceQualityDataSelectedArray = this.riceQualityDataArray[(data.detail.value).toLowerCase()];
        this.selectedPackageData = this.riceQualityData[(data.detail.value).toLowerCase()];
    }
    changeQuality(data) {
        this.quality = data.detail.value;
        console.log(this.quality);
    }
    changePacking(data) {
        let unprocessdata = (data.detail.value).split('_');
        this.changePackingType = unprocessdata[0];
        this.selectedPackageName = unprocessdata[1] + ' ' + unprocessdata[2];
    }
    back() {
        this.location.back();
    }
    changePort(data) {
        console.log(data);
        let myData = (data.detail.value).split('_');
        let selectedPortName = myData[0];
        let portValue = parseFloat(data.freight_25MT).toFixed(2);
        this.portName = selectedPortName;
    }
};
BuyPage.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
BuyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/buy/buy.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buy.page.scss */ "./src/app/buy/buy.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], BuyPage);



/***/ })

}]);
//# sourceMappingURL=buy-buy-module-es2015.js.map