(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculator-calculator-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"green\">\n\t<ion-toolbar  mode=\"ios\"  style=\"background: transparent; --background: transparent\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t\t<ion-title class=\"header-title porttitle\">Calculator</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content id=\"content\" class=\"lightgreen\"  style=\"height: 100%;\">\n\t<div style=\"height: 90%;overflow: scroll;\">\n\n\t\t<ion-item>\n\t\t\t<ion-label>Rice</ion-label>\n\t\t\t<ion-select placeholder=\"Select One\" (ionChange)=\"changeQuality($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let Qualities of QualityMaster\" value=\"{{ Qualities.id }}\">{{ Qualities.quality}} {{ Qualities?.quality_name }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Cost of Rice Ex Mill Min Price*</ion-label>\n\t\t\t<ion-input placeholder=\"Cost of Rice Ex Mill Min Price\" [(ngModel)]=\"riceMinPrice\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Cost of Rice Ex Mill Max Price*</ion-label>\n\t\t\t<ion-input placeholder=\"Cost of Rice Ex Mill Max Price\" [(ngModel)]=\"riceMaxPrice\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Transport Min Price</ion-label>\n\t\t\t<ion-input placeholder=\"Transport Min Price\" [(ngModel)]=\"transportMin\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Transport Max Price</ion-label>\n\t\t\t<ion-input placeholder=\"Transport Max Price\" [(ngModel)]=\"transportMax\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Bag Cost including Sortexing & packing labour*</ion-label>\n\t\t\t<ion-input placeholder=\"Bag Cost including Sortexing & packing labour*\" [(ngModel)]=\"bagcost\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">All Local charges( CFS Handling, B/L, THC ), Finance cost*</ion-label>\n\t\t\t<ion-input placeholder=\"All Local charges( CFS Handling, B/L, THC ), Finance cost*\" [(ngModel)]=\"localCharges\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Today's Dollar rate *</ion-label>\n\t\t\t<ion-input placeholder=\"Today's Dollar rate *\" [(ngModel)]=\"dollaerate\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label>Supplier Markup% +SNTC Service charge (1 - 20%)*</ion-label>\n\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"supplierCharge\">\n\t\t\t\t<ion-select-option value=\"1\">1</ion-select-option>\n\t\t\t\t<ion-select-option value=\"2\">2</ion-select-option>\n\t\t\t\t<ion-select-option value=\"3\">3</ion-select-option>\n\t\t\t\t<ion-select-option value=\"4\">4</ion-select-option>\n\t\t\t\t<ion-select-option value=\"5\">5</ion-select-option>\n\t\t\t\t<ion-select-option value=\"6\">6</ion-select-option>\n\t\t\t\t<ion-select-option value=\"7\">7</ion-select-option>\n\t\t\t\t<ion-select-option value=\"8\">8</ion-select-option>\n\t\t\t\t<ion-select-option value=\"9\">9</ion-select-option>\n\t\t\t\t<ion-select-option value=\"10\">10</ion-select-option>\n\t\t\t\t<ion-select-option value=\"11\">11</ion-select-option>\n\t\t\t\t<ion-select-option value=\"12\">12</ion-select-option>\n\t\t\t\t<ion-select-option value=\"13\">13</ion-select-option>\n\t\t\t\t<ion-select-option value=\"14\">14</ion-select-option>\n\t\t\t\t<ion-select-option value=\"15\">15</ion-select-option>\n\t\t\t\t<ion-select-option value=\"16\">16</ion-select-option>\n\t\t\t\t<ion-select-option value=\"17\">17</ion-select-option>\n\t\t\t\t<ion-select-option value=\"18\">18</ion-select-option>\n\t\t\t\t<ion-select-option value=\"19\">19</ion-select-option>\n\t\t\t\t<ion-select-option value=\"20\">20</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label>Bag size*</ion-label>\n\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"bagSize\" (ionChange)=\"bagChange($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let data of USD_master\" value=\"{{ data.bag_size }}_{{ data.bag_type }}_{{ data.PMT_USD }}\" >{{ data.bag_size }}_{{ data.bag_type }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t\n\t\t<div>\n\t\t\t<p>Total: (in ₹): {{total}}</p>\n\t\t\t<p>After exchange rate: (in $): {{exchange}}</p>\n\t\t\t<p>FOB Prices: {{FOB}}</p>\n\t\t</div>\n\t\t<ion-button color=\"success\" expand=\"full\" shape=\"round\" (click)=\"save()\">Calculate Now</ion-button>\n\t\t<div style=\"text-align: center;align-items: center;\">\n\t\t\t<ion-button color=\"success\" shape=\"round\" (click)=\"getLatestQueries()\">Last Buyer's Queries</ion-button>\n\t\t</div>\n\t</div>\n\t\n\t<app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/calculator/calculator-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/calculator/calculator-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CalculatorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPageRoutingModule", function() { return CalculatorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calculator_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator.page */ "./src/app/calculator/calculator.page.ts");




const routes = [
    {
        path: '',
        component: _calculator_page__WEBPACK_IMPORTED_MODULE_3__["CalculatorPage"]
    }
];
let CalculatorPageRoutingModule = class CalculatorPageRoutingModule {
};
CalculatorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalculatorPageRoutingModule);



/***/ }),

/***/ "./src/app/calculator/calculator.module.ts":
/*!*************************************************!*\
  !*** ./src/app/calculator/calculator.module.ts ***!
  \*************************************************/
/*! exports provided: CalculatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPageModule", function() { return CalculatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _calculator_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculator-routing.module */ "./src/app/calculator/calculator-routing.module.ts");
/* harmony import */ var _calculator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculator.page */ "./src/app/calculator/calculator.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let CalculatorPageModule = class CalculatorPageModule {
};
CalculatorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _calculator_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalculatorPageRoutingModule"]
        ],
        declarations: [_calculator_page__WEBPACK_IMPORTED_MODULE_6__["CalculatorPage"]]
    })
], CalculatorPageModule);



/***/ }),

/***/ "./src/app/calculator/calculator.page.scss":
/*!*************************************************!*\
  !*** ./src/app/calculator/calculator.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\nion-item {\n  border: 3px solid #92b243;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  --background: #fffbd6;\n}\n\n.item-native {\n  background: transparent;\n  background-color: transparent;\n  --background: transparent;\n  --background-color: transparent;\n}\n\n.packingSelect .select-text {\n  display: none;\n}\n\nion-content {\n  padding: 10px;\n  border: 10px solid #fffbd6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9yaWNlX21vYmlsZS9zcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURBSTtFQUNJLGVBQUE7QUNFUjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURDQTtFQUNJLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQ0k7RUFDSSxhQUFBO0FDRVI7O0FERUE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGYtdHJlZS5leGFtcGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuaW9uLWl0ZW17XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzkyYjI0MztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmYmQ2O1xufVxuLml0ZW0tbmF0aXZle1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5wYWNraW5nU2VsZWN0e1xuICAgIC5zZWxlY3QtdGV4dHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbn1cbmlvbi1jb250ZW50e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICNmZmZiZDY7XG59IiwiLnRmLXRyZWUuZXhhbXBsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICNGRkY7XG59XG4uYmFjay1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDk0ZjU4O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXI6IDNweCBzb2xpZCAjOTJiMjQzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZiZDY7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhY2tpbmdTZWxlY3QgLnNlbGVjdC10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDEwcHggc29saWQgI2ZmZmJkNjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/calculator/calculator.page.ts":
/*!***********************************************!*\
  !*** ./src/app/calculator/calculator.page.ts ***!
  \***********************************************/
/*! exports provided: CalculatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPage", function() { return CalculatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");





let CalculatorPage = class CalculatorPage {
    constructor(apiService, navCtrl, location) {
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.location = location;
        this.total = 0;
        this.exchange = 0;
        this.FOB = 0;
        this.selectedFiftykg = 0;
        this.updatedUserPrice = 0;
        this.selectedBagId = 0;
    }
    ngOnInit() {
        this.getCalculatorData();
    }
    getCalculatorData() {
        this.apiService.getCalculatorDetails().then((res) => {
            this.QualityMaster = res.qualityMaster;
            this.DefaultValues = res.defaultValues;
            this.dollaerate = res.defaultValues.dollarvalue;
            this.bagcost = res.defaultValues.bagcost;
            this.localCharges = res.defaultValues.localcharges;
            this.USD_master = res.USD_master;
            this.selectedFiftykg = res.fiftykg.PMT_USD;
        }, (err) => {
            console.log(err);
        });
    }
    save() {
        if (this.riceMinPrice == '' || this.riceMinPrice == undefined) {
            this.riceMinPrice = 0;
        }
        if (this.riceMaxPrice == '' || this.riceMaxPrice == undefined) {
            this.riceMaxPrice = 0;
        }
        if (this.transportMin == '' || this.transportMin == undefined) {
            this.transportMin = 0;
        }
        if (this.transportMax == '' || this.transportMax == undefined) {
            this.transportMax = 0;
        }
        if (this.bagcost == '' || this.bagcost == undefined) {
            this.bagcost = 0;
        }
        if (this.localCharges == '' || this.localCharges == undefined) {
            this.localCharges = 0;
        }
        if (this.dollaerate == '' || this.dollaerate == undefined) {
            this.dollaerate = 0;
        }
        if (this.supplierCharge == '' || this.supplierCharge == undefined) {
            this.supplierCharge = 0;
        }
        let minValue = (parseFloat(this.riceMinPrice) + parseFloat(this.bagcost) + parseFloat(this.transportMin) + parseFloat(this.localCharges)).toFixed(2);
        let maxValue = (parseFloat(this.riceMaxPrice) + parseFloat(this.bagcost) + parseFloat(this.transportMax) + parseFloat(this.localCharges)).toFixed(2);
        let exchangeRatemin = ((parseFloat(this.riceMinPrice) + parseFloat(this.bagcost) + parseFloat(this.transportMin)) / this.dollaerate).toFixed(2);
        let exchangeRatemax = ((parseFloat(this.riceMaxPrice) + parseFloat(this.bagcost) + parseFloat(this.transportMax)) / this.dollaerate).toFixed(2);
        console.log(exchangeRatemin);
        let Fobmin = 0;
        let Fobmax = 0;
        if (this.supplierCharge != 0) {
            Fobmin = (((((parseFloat(exchangeRatemin) * this.supplierCharge) / 100) + parseFloat(exchangeRatemin)) - parseFloat(this.selectedFiftykg)) + parseFloat(this.updatedUserPrice));
            Fobmax = (((((parseFloat(exchangeRatemax) * this.supplierCharge) / 100) + parseFloat(exchangeRatemax)) - parseFloat(this.selectedFiftykg)) + parseFloat(this.updatedUserPrice));
        }
        else {
            Fobmin = ((parseFloat(exchangeRatemin) - parseFloat(this.selectedFiftykg)) + parseFloat(this.updatedUserPrice));
            Fobmax = ((parseFloat(exchangeRatemax) - parseFloat(this.selectedFiftykg)) + parseFloat(this.updatedUserPrice));
        }
        this.total = minValue + ' - ' + maxValue;
        this.exchange = '$' + exchangeRatemin + ' - $' + exchangeRatemax;
        this.FOB = '$' + Fobmin + ' - $' + Fobmax;
        let postedData = JSON.stringify({
            'rice': this.selectedRice,
            'ricemin': this.riceMinPrice,
            'ricemax': this.riceMaxPrice,
            'transportmin': this.transportMin,
            'transportmax': this.transportMax,
            'category': this.bagcost,
            'charges': this.localCharges,
            'dollarrate': this.dollaerate,
            'percentageValue': this.supplierCharge,
            'totalMin': minValue,
            'totalMax': maxValue,
            'exchangeRatemin': exchangeRatemin,
            'exchangeRatemax': exchangeRatemax,
            'fobmin': Fobmin,
            'fobmax': Fobmax,
            'user_id': localStorage.getItem('id'),
            'usd_defaultMaster_id': this.selectedBagId
        });
        this.apiService.saveUSDPrices(postedData).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
    bagChange(event) {
        let value = event.detail.value;
        let splitedValue = value.split('_');
        let bagSize = splitedValue[0];
        let bagNme = splitedValue[1];
        let bagPrice = splitedValue[2];
        this.selectedBagId = splitedValue[3];
        let updatedPrice = parseFloat(bagPrice);
        this.selectedBag = bagSize + '_' + bagNme;
        this.updatedUserPrice = updatedPrice;
    }
    changeQuality(event) {
        this.selectedRice = event.detail.value;
    }
    getLatestQueries() {
        this.navCtrl.navigateForward('mybids');
    }
    back() {
        this.location.back();
    }
};
CalculatorPage.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
CalculatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-calculator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calculator.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calculator.page.scss */ "./src/app/calculator/calculator.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
], CalculatorPage);



/***/ })

}]);
//# sourceMappingURL=calculator-calculator-module-es2015.js.map