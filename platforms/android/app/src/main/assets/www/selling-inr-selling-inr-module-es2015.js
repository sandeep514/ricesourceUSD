(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-inr-selling-inr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/selling-inr/selling-inr.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selling-inr/selling-inr.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"\">\n\t<ion-toolbar mode=\"ios\" style=\"background: #fff; --background: #fff\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Sell Query</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content id=\"content\" [scrollEvents]=\"true\" class=\"\">\n\t<div style=\"padding: 10px 10px;margin-bottom: 100px;\">\n\t\t<ion-item>\n\t\t\t<ion-label>Category*</ion-label>\n\t\t\t<!-- (ionChange)=\"changecountry($event)\" -->\n\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQualityType($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let qualityType of riceQualityType\" style=\"text-transform: capitalize;\">{{\n\t\t\t\t\tqualityType | uppercase }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border:  1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Quality*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" id=\"quality\" (ionChange)=\"changeQuality($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let riceName of onlyRiceName\" value={{riceName.id}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ riceName.name }}</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option style=\"text-transform: capitalize;\">Other</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;margin-right: 15px;text-align: right;padding: 5px;\">{{quality}}</p> -->\n\t\t\t</ion-col>\n\n\t\t</ion-row>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border:  1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Type*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" id=\"qualityForm\" (ionChange)=\"changeQualityForm($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let riceName of onlyRiceForms\" value={{riceName.id}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ riceName.name }}</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option style=\"text-transform: capitalize;\">Other</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;margin-right: 15px;text-align: right;padding: 5px;\">{{qualityForm}}</p> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<p style=\"padding: 0px;margin: 0px;text-align: right;\">{{ selectedRiceFormAndName?.quality }}{{\n\t\t\t\t\tselectedRiceFormAndName?.quality_name }}</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border:  1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Grade*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" id=\"grade\" (ionChange)=\"changeGrade($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let wand of riceWand\" value={{wand.id}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ wand.get_wand_type.type }} {{\n\t\t\t\t\t\t\twand.value}}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\n\t\t<!-- <ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div>\n\t\t\t\t\t<div *ngFor=\"let wand of riceWand\" style=\"padding: 0px 0px;\">\n\t\t\t\t\t\t<div (click)=\"selectedWand(wand)\" style=\"display: inline-block;width: 100%;padding: 0px 10px;border-radius: 14px;\" [ngStyle]=\"{'background': selectedGrade == wand.id ? '#92b243' : 'transparent' }\">\n\t\t\t\t\t\t\t<div style=\"width: 80%;float: left;\">\n\t\t\t\t\t\t\t\t<p style=\"margin: 10px 0px;\">{{ wand.get_wand_type.type }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style=\"width: 20%;float: left;\">\n\t\t\t\t\t\t\t\t<p style=\"margin: 10px 0px;\">{{ wand.value }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row> -->\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border:  1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item class=\"packingSelect\" style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Packing*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" id=\"packing\" (ionChange)=\"changePacking($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let package of sellerPackingList\"\n\t\t\t\t\t\t\tvalue=\"{{ package.id+'_'+package.packing }}\">\n\t\t\t\t\t\t\t<p>{{package.packing}} </p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option value=\"other\">\n\t\t\t\t\t\t\t<p>Any Other</p>\n\t\t\t\t\t\t</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<p style=\"padding: 0;margin: 0;margin-left: 15px;text-align: left;padding: 5px;\">{{selectedPackageName}}\n\t\t\t\t</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row *ngIf=\"selectedPackageName == '26KG BOPP' || selectedPackageName == '30KG BOPP' \">\n\t\t\t<!-- <ion-col>\n\t\t\t\t<button (click)=\"pickBagImage()\" style=\"padding: 10px;background-color: #92b243;border-radius: 5px;\">Pick packing image</button>\n\t\t\t</ion-col> -->\n\t\t\t<!-- <ion-col text-center>\n\t\t\t\t<ion-button (click)=\"imagePicker()\">Select Images</ion-button>\n\t\t\t</ion-col> -->\n\t\t\t<ion-label position=\"\" style=\"\">Packing Bag Image</ion-label>\n\t\t\t<input type=\"file\" (change)=\"packageImage($event)\"\n\t\t\t\tstyle=\"background: #91b247;--background: #91b247;padding: 10px;margin-bottom: 10px;border-radius: 5px;\" />\n\t\t</ion-row>\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Quantity (Qtls)*</ion-label>\n\t\t\t<ion-input type=\"tel\" maxLength=\"5\" [(ngModel)]=\"quantity\" (ionChange)=\"textareaMaxLengthValidation()\"\n\t\t\t\tstyle=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Ex-factory price ₹(Qtls)*</ion-label>\n\t\t\t<ion-input type=\"tel\" maxLength=\"5\" [(ngModel)]=\"offerPrice\" style=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Validity (Days)*</ion-label>\n\t\t\t<ion-input type=\"tel\" maxLength=\"5\" [(ngModel)]=\"validDays\" style=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Warehouse Location*</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"warehouselocation\" style=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\n\t\t<ion-row>\n\t\t\t<ion-col text-center>\n\t\t\t\t<!-- <ion-button (click)=\"pickUncookedImage($event)\">Uncooked Rice Image</ion-button> -->\n\t\t\t\t<ion-label position=\"\" style=\"\">Rice Image*</ion-label>\n\t\t\t\t<input type=\"file\" (change)=\"pickUncookedImage($event)\"\n\t\t\t\t\tstyle=\"padding: 10px;margin-bottom: 10px;border-radius: 5px;\" />\n\n\t\t\t</ion-col>\n\t\t\t<ion-col text-center>\n\t\t\t\t<!-- <ion-button (click)=\"pickCookedImage($event)\">Select Images</ion-button> -->\n\t\t\t\t<ion-label position=\"\" style=\"\">Cooked Image*</ion-label>\n\t\t\t\t<input type=\"file\" (change)=\"pickCookedImage($event)\"\n\t\t\t\t\tstyle=\"padding: 10px;margin-bottom: 10px;border-radius: 5px;\" />\n\n\t\t\t</ion-col>\n\t\t\t<!-- <ion-col>\n\t\t\t\t<button (click)=\"pickUncookedImage()\" style=\"padding: 10px;background-color: #92b243;border-radius: 5px;\">Uncooked Rice Image </button>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<button (click)=\"pickCookedImage()\" style=\"padding: 10px;background-color: #92b243;border-radius: 5px;\">Cooked Rice Image</button>\n\t\t\t</ion-col> -->\n\t\t</ion-row>\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Contact Person*</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"contactperson\" style=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Contact Mobile*</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"contactMobile\" style=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\n\t\t<div *ngIf=\"isError\" style=\"text-align: center;color: red;font-weight: 600\">\n\t\t\t<span>{{ errorMessage }}</span>\n\t\t</div>\n\t\t<ion-button expand=\"full\" shape=\"round\" (click)=\"save()\"\n\t\t\tstyle=\"--background: #000;color: #fff\">Submit</ion-button>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/selling-inr/selling-inr-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/selling-inr/selling-inr-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SellingINRPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellingINRPageRoutingModule", function() { return SellingINRPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _selling_inr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selling-inr.page */ "./src/app/selling-inr/selling-inr.page.ts");




const routes = [
    {
        path: '',
        component: _selling_inr_page__WEBPACK_IMPORTED_MODULE_3__["SellingINRPage"]
    }
];
let SellingINRPageRoutingModule = class SellingINRPageRoutingModule {
};
SellingINRPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellingINRPageRoutingModule);



/***/ }),

/***/ "./src/app/selling-inr/selling-inr.module.ts":
/*!***************************************************!*\
  !*** ./src/app/selling-inr/selling-inr.module.ts ***!
  \***************************************************/
/*! exports provided: SellingINRPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellingINRPageModule", function() { return SellingINRPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _selling_inr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selling-inr-routing.module */ "./src/app/selling-inr/selling-inr-routing.module.ts");
/* harmony import */ var _selling_inr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selling-inr.page */ "./src/app/selling-inr/selling-inr.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let SellingINRPageModule = class SellingINRPageModule {
};
SellingINRPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _selling_inr_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellingINRPageRoutingModule"]
        ],
        declarations: [_selling_inr_page__WEBPACK_IMPORTED_MODULE_6__["SellingINRPage"]],
        providers: []
    })
], SellingINRPageModule);



/***/ }),

/***/ "./src/app/selling-inr/selling-inr.page.scss":
/*!***************************************************!*\
  !*** ./src/app/selling-inr/selling-inr.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n}\n\nion-item {\n  border: 1px solid #e1e1e1;\n  border-radius: 100px;\n  margin-bottom: 10px;\n}\n\n.item-native {\n  background: transparent;\n  background-color: transparent;\n  --background: transparent;\n  --background-color: transparent;\n}\n\n.packingSelect .select-text {\n  display: none;\n}\n\nion-toolbar {\n  --border-width: 0 0 0px !important;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0px !important;\n}\n\n.alert-message.sc-ion-alert-md {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9zZWxsaW5nLWluci9zZWxsaW5nLWluci5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlbGxpbmctaW5yL3NlbGxpbmctaW5yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUk7RUFDSSxlQUFBO0FDQVI7O0FESUE7RUFDSSxxQkFBQTtBQ0RKOztBREtBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBQ0ZKOztBRE1JO0VBQ0ksYUFBQTtBQ0hSOztBRE9BO0VBQ0ksa0NBQUE7QUNKSjs7QURPQTtFQUNJLGtDQUFBO0FDSko7O0FET0E7RUFDSSx1QkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvc2VsbGluZy1pbnIvc2VsbGluZy1pbnIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRmLXRyZWUuZXhhbXBsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvLyBjb2xvcjogI0ZGRjtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbiAgICAvLyBjb2xvcjogI0ZGRjtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjI1LCAyMjUsIDIyNSwgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wYWNraW5nU2VsZWN0IHtcbiAgICAuc2VsZWN0LXRleHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggIWltcG9ydGFudDtcbn1cblxuLmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn0iLCIudGYtdHJlZS5leGFtcGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmJhY2stYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFja2luZ1NlbGVjdCAuc2VsZWN0LXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/selling-inr/selling-inr.page.ts":
/*!*************************************************!*\
  !*** ./src/app/selling-inr/selling-inr.page.ts ***!
  \*************************************************/
/*! exports provided: SellingINRPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellingINRPage", function() { return SellingINRPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");












let SellingINRPage = class SellingINRPage {
    constructor(apiser, location, navCtrl, actionSheetController, transfer, file, filechooser, filePath, httpClient, loaderCtrl, camera // public imgPicker: ImagePicker
    ) {
        this.apiser = apiser;
        this.location = location;
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
        this.transfer = transfer;
        this.file = file;
        this.filechooser = filechooser;
        this.filePath = filePath;
        this.httpClient = httpClient;
        this.loaderCtrl = loaderCtrl;
        this.camera = camera;
        this.validDays = 1;
        this.party = localStorage.getItem("name");
        this.mobile = localStorage.getItem("mobile");
        this.remarks = "";
        this.isError = false;
        this.errorMessage = "";
        this.qualityForm = "";
        this.selectedRiceFormAndName = "";
        this.selectedGrade = "";
        this.sellerPackingList = "";
        this.croppedImagepath = "";
        this.croppedBagImagepath = "";
        this.croppedUncookedImagepath = "";
        this.croppedCookedImagepath = "";
        this.fileTransfer = "";
        this.contactperson = "";
        this.contactMobile = "";
        this.isLoading = false;
        this.userId = '';
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50,
        };
    }
    ngOnInit() {
        this.getData();
        this.getSellerINRPacking();
        this.userId = localStorage.getItem('id');
    }
    selectedWand(selectedWantDetail) {
        this.selectedGrade = selectedWantDetail.id;
        console.log(selectedWantDetail);
    }
    packageImage(event) {
        this.packageImageFile = event.target.files[0];
        console.log(this.packageImageFile);
        console.log(event.target.files[0]);
        // this.croppedImagepath = photo;
        // this.imgPicker.getPictures(this.imagePickerOptions).then((res) => {
        // 	console.log(res)
        // }).catch((err) => {
        // 	console.log(err);
        // });
    }
    pickBagImage(sourceType) {
        // this.filechooser.open().then((uri: any) => {
        // 	this.filePath.resolveNativePath(uri).then((nativePath) => {
        // 		this.uploadImage(nativePath,"https://snjtradelink.com/staging/public/api/submit/sell/query");
        // 	})
        // });
        // return false;
        const options = {
            quality: 100,
            sourceType: sourceType,
            //   destinationType: this.camera.DestinationType.DATA_URL, //base64
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            this.croppedBagImagepath = "data:image/jpeg;base64," + imageData;
            this.uploadImage(imageData, "https://snjtradelink.com/staging/public/api/submit/sell/query");
            console.log(imageData);
        }, (err) => {
            // Handle error
        });
    }
    getFile() {
        // 	this.file.checkDir(this.file.dataDirectory, 'mydir').then((res) => console.log('Directory exists')).catch(err =>
        //   console.log('Directory doesnt exist'));
    }
    pickUncookedImage(event) {
        this.uncookedFile = event.target.files[0];
        // console.log(photo);
        // const options: CameraOptions = {
        //   quality: 100,
        //   sourceType: sourceType,
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE,
        // };
        // this.camera.getPicture(options).then(
        //   (imageData) => {
        //     // imageData is either a base64 encoded string or a file URI
        //     this.croppedUncookedImagepath = "data:image/jpeg;base64," + imageData;
        //   },
        //   (err) => {
        //     // Handle error
        //   }
        // );
    }
    pickCookedImage(event) {
        this.cookedImageFile = event.target.files[0];
        // console.log(photo);
        // const options: CameraOptions = {
        //   quality: 100,
        //   sourceType: sourceType,
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE,
        // };
        // this.camera.getPicture(options).then(
        //   (imageData) => {
        //     // imageData is either a base64 encoded string or a file URI
        //     this.croppedCookedImagepath = "data:image/jpeg;base64," + imageData;
        //   },
        //   (err) => {
        //     // Handle error
        //   }
        // );
    }
    // async selectImage() {
    //   const actionSheet = await this.actionSheetController.create({
    //     header: "Select Image source",
    //     buttons: [
    //       {
    //         text: "Load from Library",
    //         handler: () => {
    //           this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
    //         },
    //       },
    //       {
    //         text: "Use Camera",
    //         handler: () => {
    //           this.pickImage(this.camera.PictureSourceType.CAMERA);
    //         },
    //       },
    //       {
    //         text: "Cancel",
    //         role: "cancel",
    //       },
    //     ],
    //   });
    //   await actionSheet.present();
    // }
    uploadImage(imagePath, serverUrl) {
        const fileTransfer = this.transfer.create();
        const options = {
            fileKey: "file",
            fileName: "my_image.jpg",
            mimeType: "image/jpeg",
            params: {},
        };
        fileTransfer
            .upload(imagePath, serverUrl, options)
            .then((data) => {
            console.log("Image uploaded successfully:", data);
        })
            .catch((error) => {
            console.error("Error uploading image:", error);
        });
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.apiser.presentLoader('Please wait...');
            const headers = {
                enctype: "multipart/form-data;",
                Accept: "application/json",
            };
            if (!this.selectedQualityTypeInt || !this.quality || !this.qualityForm || !this.selectedGrade || !this.changePackingType || !this.warehouselocation || !this.contactperson || !this.contactMobile || !this.quantity || !this.offerPrice || !this.uncookedFile || !this.cookedImageFile || !this.validDays) {
                this.apiser.presentToast('Required fields are missing..');
                setTimeout(() => {
                    this.loaderCtrl.dismiss();
                    this.apiser.dismissLoader();
                }, 1000);
            }
            else {
                let formData = new FormData();
                formData.append("_method", "PATCH");
                formData.append("selectedQualityTypeInt", this.selectedQualityTypeInt);
                formData.append("quality", this.quality);
                formData.append("qualityForm", this.qualityForm);
                formData.append("selectedGrade", this.selectedGrade);
                formData.append("changePackingType", this.changePackingType);
                formData.append("warehouselocation", this.warehouselocation);
                formData.append("contactperson", this.contactperson);
                formData.append("contactMobile", this.contactMobile);
                formData.append("userId", this.userId);
                if (this.packageImageFile != undefined) {
                    formData.append("packageImageFile", this.packageImageFile, this.packageImageFile.name);
                }
                formData.append("quantity", this.quantity);
                formData.append("offerPrice", this.offerPrice);
                formData.append("validDays", this.validDays);
                formData.append("uncookedFile", this.uncookedFile, this.uncookedFile.name);
                formData.append("cookedImageFile", this.cookedImageFile, this.cookedImageFile.name);
                let posteddata = {
                    method: "POST",
                    body: formData,
                };
                fetch("https://snjtradelink.com/staging/public/api/submit/sell/query", posteddata).then(() => {
                    this.apiser.presentToast('Thanks for submiting the offer, SNTC will contact you shortly.');
                    setTimeout(() => {
                        this.apiser.dismissLoader();
                        this.loaderCtrl.dismiss();
                        this.navCtrl.navigateRoot(['trade-inr-list']);
                    }, 1000);
                }).catch(() => {
                    setTimeout(() => {
                        this.apiser.dismissLoader();
                    });
                });
                return false;
                this.isError = false;
                if (this.quality != undefined &&
                    this.quantity != undefined &&
                    this.party != undefined &&
                    this.mobile != undefined &&
                    this.portName != "" &&
                    this.portName != undefined) {
                    this.apiser.presentLoader("Please wait...");
                    let postedData = {
                        selectedQualityType: this.selectedQualityType,
                        quality: this.quality,
                        changePackingType: this.changePackingType,
                        quantity: this.quantity,
                        validDays: this.validDays,
                        portName: this.portName,
                        party: this.party,
                        mobile: this.mobile,
                        remarks: this.remarks,
                        user: localStorage.getItem("id"),
                    };
                    // this.apiser.saveRiceQuery(postedData).then(
                    //   (res: any) => {
                    //     this.apiser.loaderCtrl.dismiss();
                    //     this.apiser.presentToast("Query generated successfully.");
                    //     this.navCtrl.navigateRoot(["thankyou"]);
                    //   },
                    //   (err: any) => {
                    //     console.log(err);
                    //   }
                    // );
                }
                else {
                    this.isError = true;
                    this.errorMessage = "Required fields are missing";
                    console.log("validate fails");
                    console.log("here");
                }
            }
            return false;
        });
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
    getCategoryQualities(selectedQualityTypeInit) {
        this.apiser.getRiceQualities(selectedQualityTypeInit).then((res) => {
            this.onlyRiceName = res.data;
            console.log(res.data);
            // this.getCategoryQualitiesForm(res.data);
        }, (err) => {
            console.log(err);
        });
    }
    getCategoryQualitiesForm(riceNameId) {
        this.apiser.getRiceQualitiesForms(riceNameId).then((res) => {
            this.onlyRiceForms = res.data;
            console.log("res");
            console.log(this.onlyRiceForms);
        }, (err) => {
            console.log(err);
        });
    }
    getRiceWand() {
        console.log(this.quality);
        this.apiser.getRiceWand(this.quality).then((res) => {
            this.riceWand = res.data;
        }, (err) => {
            console.log(err);
        });
    }
    getSellerINRPacking() {
        this.apiser.getSellerINRPacking().then((res) => {
            // this.riceWand = res.data;
            console.log(res.data);
            this.sellerPackingList = res.data;
        }, (err) => {
            console.log(err);
        });
    }
    changeQualityType(data) {
        this.selectedQualityType = data.detail.value;
        let selectedQualityTypeInit = 2;
        if (this.selectedQualityType == "BASMATI") {
            selectedQualityTypeInit = 1;
        }
        this.selectedQualityTypeInt = selectedQualityTypeInit;
        this.getCategoryQualities(selectedQualityTypeInit);
        this.riceQualityDataSelectedArray = this.riceQualityDataArray[data.detail.value.toLowerCase()];
        document.getElementById('quality').click();
        // this.selectedPackageData =
        //   this.riceQualityData[data.detail.value.toLowerCase()];
    }
    changeQuality(data) {
        console.log(data);
        this.quality = data.detail.value;
        this.getCategoryQualitiesForm(data.detail.value);
        console.log(this.quality);
        document.getElementById('qualityForm').click();
        // this.onlyRiceName.forEach((data) => {
        // 	console.log(data);
        // });
        // document.getElementById('qualityForm').click()
    }
    textareaMaxLengthValidation() {
        console.log(this.quantity.toString());
        console.log(this.quantity.length);
        if (this.quantity.length > 5) {
            this.quantity = this.quantity.slice(0, 5);
        }
    }
    changeQualityForm(data) {
        console.log();
        this.qualityForm = data.detail.value;
        // this.getCategoryQualitiesForm(data.detail.value);
        for (let i = 0; i < this.onlyRiceForms.length; i++) {
            if (this.onlyRiceForms[i].id == this.qualityForm) {
                this.selectedRiceFormAndName = this.onlyRiceForms[i];
                console.log(this.selectedRiceFormAndName);
            }
        }
        this.getRiceWand();
        document.getElementById('grade').click();
    }
    changeGrade(data) {
        this.selectedGrade = data.detail.value;
        document.getElementById('packing').click();
        console.log(data);
    }
    changePacking(data) {
        let unprocessdata = data.detail.value.split("_");
        this.changePackingType = unprocessdata[0];
        this.selectedPackageName = unprocessdata[1];
        console.log(this.changePackingType);
        console.log(this.selectedPackageName);
    }
    back() {
        this.location.back();
    }
    changePort(data) {
        console.log(data);
        let myData = data.detail.value.split("_");
        let selectedPortName = myData[0];
        let portValue = parseFloat(data.freight_25MT).toFixed(2);
        this.portName = selectedPortName;
    }
};
SellingINRPage.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__["FileChooser"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] // public imgPicker: ImagePicker
     }
];
SellingINRPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-selling-inr",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selling-inr.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/selling-inr/selling-inr.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./selling-inr.page.scss */ "./src/app/selling-inr/selling-inr.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
        _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__["FileChooser"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] // public imgPicker: ImagePicker
    ])
], SellingINRPage);



/***/ })

}]);
//# sourceMappingURL=selling-inr-selling-inr-module-es2015.js.map