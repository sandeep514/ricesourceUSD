(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-inr-buy-inr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/buy-inr/buy-inr.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buy-inr/buy-inr.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"\">\n\t<ion-toolbar mode=\"ios\" style=\"background: #fff; --background: #fff\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Buy Query</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content id=\"content\" [scrollEvents]=\"true\" class=\"\">\n\t<div style=\"padding: 10px 20px;margin-bottom: 100px;\">\n\t\t<ion-item>\n\t\t\t<ion-label>Category*</ion-label>\n\t\t\t<!-- (ionChange)=\"changecountry($event)\" -->\n\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQualityType($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let qualityType of riceQualityType\" style=\"text-transform: capitalize;\">{{\n\t\t\t\t\tqualityType | uppercase }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Quality*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQuality($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let riceName of onlyRiceName | keyvalue\" value={{riceName.value}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ riceName.key }}</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option style=\"text-transform: capitalize;\">Other</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;margin-right: 15px;text-align: right;padding: 5px;\">{{quality}}</p> -->\n\t\t\t</ion-col>\n\n\t\t</ion-row>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Type*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQualityForm($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let riceName of onlyRiceForms\" value={{riceName.id}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ riceName.name }}</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option style=\"text-transform: capitalize;\">Other</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;margin-right: 15px;text-align: right;padding: 5px;\">{{qualityForm}}</p> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<p style=\"padding: 0px;margin: 0px;text-align: right;\">{{ selectedRiceFormAndName?.quality }}{{\n\t\t\t\t\tselectedRiceFormAndName?.quality_name }}</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Grade*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeGrade($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let wand of riceWand\" value={{wand.id}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{\n\t\t\t\t\t\t\twand.get_wand_type.type }} {{ wand.value }}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\n\t\t<!-- <ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div>\n\t\t\t\t\t<div *ngFor=\"let wand of riceWand\" style=\"padding: 0px 0px;\">\n\t\t\t\t\t\t<div (click)=\"selectedWand(wand)\" style=\"display: inline-block;width: 100%;padding: 0px 10px;border-radius: 14px;\" [ngStyle]=\"{'background': selectedGrade == wand.id ? '#92b243' : 'transparent' }\">\n\t\t\t\t\t\t\t<div style=\"width: 80%;float: left;\">\n\t\t\t\t\t\t\t\t<p style=\"margin: 10px 0px;\">{{ wand.get_wand_type.type }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style=\"width: 20%;float: left;\">\n\t\t\t\t\t\t\t\t<p style=\"margin: 10px 0px;\">{{ wand.value }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row> -->\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<!-- <ion-item class=\"packingSelect\" style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Packing*</ion-label> -->\n\t\t\t\t<!-- <ion-select placeholder=\"Select\" (ionChange)=\"changeBuyerPackingType($event)\">\n\t\t\t\t\t\t<ion-select-option value=\"0\"><p>Miller Packing</p></ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"1\"><p>Private Packing</p></ion-select-option>\n\t\t\t\t\t</ion-select> -->\n\n\t\t\t\t<ion-radio-group value=\"0\" (ionChange)=\"changeBuyerPackingType($event)\">\n\t\t\t\t\t<div style=\"\">\n\t\t\t\t\t\t<ion-label><ion-radio style=\"vertical-align: middle;\" value=\"0\">Miller Packing</ion-radio><span\n\t\t\t\t\t\t\t\tstyle=\"margin-left: 20px;\">Miller Packing</span></ion-label><br />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div style=\"\">\n\t\t\t\t\t\t<ion-label><ion-radio style=\"vertical-align: middle;\" value=\"1\">Private Packing\n\t\t\t\t\t\t\t</ion-radio><span style=\"margin-left: 20px;\">Private Packing</span></ion-label>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ion-radio-group>\n\t\t\t\t<!-- </ion-item> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"margin-bottom: 10px;\" *ngIf=\"changedBuyerPackingType == '0' \">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item class=\"packingSelect\" style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Packing*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePacking($event)\">\n\t\t\t\t\t\t<ion-select-option value=\"{{ '0_50KG PP' }}\">\n\t\t\t\t\t\t\t<p>50KG PP</p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"{{ '1_55KG PP' }}\">\n\t\t\t\t\t\t\t<p>55KG PP</p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<p style=\"padding: 0;margin: 0;margin-left: 15px;text-align: left;padding: 5px;\">{{selectedPackageName}}\n\t\t\t\t</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"margin-bottom: 10px;\" *ngIf=\"changedBuyerPackingType == '1' \">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item class=\"packingSelect\" style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Packing*</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePacking($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let package of buyerPackingList\"\n\t\t\t\t\t\t\tvalue=\"{{ package.id+'_'+package.packing }}\">\n\t\t\t\t\t\t\t<p>{{package.packing}} {{ package?.description }}</p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<p style=\"padding: 0;margin: 0;margin-left: 15px;text-align: left;padding: 5px;\">{{selectedPackageName}}\n\t\t\t\t</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Quantity (Qtls)*</ion-label>\n\t\t\t<ion-input type=\"tel\" maxLength=\"5\" [(ngModel)]=\"quantity\" (ionChange)=\"textareaMaxLengthValidation()\"\n\t\t\t\tstyle=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\n\t\t<ion-label position=\"\">Additional Information*</ion-label>\n\t\t<ion-item>\n\t\t\t<ion-textarea rows=\"4\" [(ngModel)]=\"additionalinfo\" style=\"\"></ion-textarea>\n\t\t</ion-item>\n\n\n\t\t<div *ngIf=\"isError\" style=\"text-align: center;color: red;font-weight: 600\">\n\t\t\t<span>{{ errorMessage }}</span>\n\t\t</div>\n\t\t<ion-button expand=\"full\" shape=\"round\" (click)=\"save()\"\n\t\t\tstyle=\"--background: #000;color: #fff\">Submit</ion-button>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/buy-inr/buy-inr-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/buy-inr/buy-inr-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BuyInrPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyInrPageRoutingModule", function() { return BuyInrPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _buy_inr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buy-inr.page */ "./src/app/buy-inr/buy-inr.page.ts");




const routes = [
    {
        path: '',
        component: _buy_inr_page__WEBPACK_IMPORTED_MODULE_3__["BuyInrPage"]
    }
];
let BuyInrPageRoutingModule = class BuyInrPageRoutingModule {
};
BuyInrPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BuyInrPageRoutingModule);



/***/ }),

/***/ "./src/app/buy-inr/buy-inr.module.ts":
/*!*******************************************!*\
  !*** ./src/app/buy-inr/buy-inr.module.ts ***!
  \*******************************************/
/*! exports provided: BuyInrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyInrPageModule", function() { return BuyInrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _buy_inr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buy-inr-routing.module */ "./src/app/buy-inr/buy-inr-routing.module.ts");
/* harmony import */ var _buy_inr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buy-inr.page */ "./src/app/buy-inr/buy-inr.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let BuyInrPageModule = class BuyInrPageModule {
};
BuyInrPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _buy_inr_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyInrPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ],
        declarations: [_buy_inr_page__WEBPACK_IMPORTED_MODULE_6__["BuyInrPage"]],
    })
], BuyInrPageModule);



/***/ }),

/***/ "./src/app/buy-inr/buy-inr.page.scss":
/*!*******************************************!*\
  !*** ./src/app/buy-inr/buy-inr.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-item {\n  border: 1px solid #e1e1e1;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.item-native {\n  background: transparent;\n  background-color: transparent;\n  --background: transparent;\n  --background-color: transparent;\n}\n\n.packingSelect .select-text {\n  display: none;\n}\n\nion-radio::part(container) {\n  width: 20px;\n  height: 20px;\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #92b243;\n  border-color: transparent;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n\nion-toolbar {\n  --border-width: 0 0 0px !important;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9idXktaW5yL2J1eS1pbnIucGFnZS5zY3NzIiwic3JjL2FwcC9idXktaW5yL2J1eS1pbnIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFSTtFQUNJLGVBQUE7QUNBUjs7QURTQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNBO0VBQ0ksdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUNOSjs7QURVSTtFQUNJLGFBQUE7QUNQUjs7QURVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtBQ1JKOztBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1JKOztBRFdBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQ1JKOztBRFdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFFQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSx3QkFBQTtBQ1ZKOztBRGFBO0VBQ0ksa0NBQUE7QUNWSjs7QURZQTtFQUNJLGtDQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9idXktaW5yL2J1eS1pbnIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRmLXRyZWUuZXhhbXBsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvLyBjb2xvcjogI0ZGRjtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cblxuLy8gaW9uLXRvb2xiYXIge1xuLy8gICAgIC0tYmFja2dyb3VuZDogIzQ5NGY1ODtcbi8vICAgICBjb2xvcjogI0ZGRjtcbi8vIH1cblxuaW9uLWl0ZW0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjI1LCAyMjUsIDIyNSwgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhY2tpbmdTZWxlY3Qge1xuICAgIC5zZWxlY3QtdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuaW9uLXJhZGlvOjpwYXJ0KGNvbnRhaW5lcikge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xufVxuXG5pb24tcmFkaW86OnBhcnQobWFyaykge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuaW9uLXJhZGlvLnJhZGlvLWNoZWNrZWQ6OnBhcnQoY29udGFpbmVyKSB7XG4gICAgYmFja2dyb3VuZDogIzkyYjI0MztcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tcmFkaW8ucmFkaW8tY2hlY2tlZDo6cGFydChtYXJrKSB7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG5cbiAgICBib3JkZXItd2lkdGg6IDBweCAycHggMnB4IDBweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcblxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggIWltcG9ydGFudDtcbn1cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZXtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufSIsIi50Zi10cmVlLmV4YW1wbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYmFjay1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFja2luZ1NlbGVjdCAuc2VsZWN0LXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tcmFkaW86OnBhcnQoY29udGFpbmVyKSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcbn1cblxuaW9uLXJhZGlvOjpwYXJ0KG1hcmspIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pb24tcmFkaW8ucmFkaW8tY2hlY2tlZDo6cGFydChjb250YWluZXIpIHtcbiAgYmFja2dyb3VuZDogIzkyYjI0MztcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXJhZGlvLnJhZGlvLWNoZWNrZWQ6OnBhcnQobWFyaykge1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci13aWR0aDogMHB4IDJweCAycHggMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/buy-inr/buy-inr.page.ts":
/*!*****************************************!*\
  !*** ./src/app/buy-inr/buy-inr.page.ts ***!
  \*****************************************/
/*! exports provided: BuyInrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyInrPage", function() { return BuyInrPage; });
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












let BuyInrPage = class BuyInrPage {
    constructor(apiser, location, navCtrl, actionSheetController, transfer, file, filechooser, filePath, httpClient, loadCTRL, camera // public imgPicker: ImagePicker
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
        this.loadCTRL = loadCTRL;
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
        this.buyerPackingList = "";
        this.croppedImagepath = "";
        this.croppedBagImagepath = "";
        this.croppedUncookedImagepath = "";
        this.croppedCookedImagepath = "";
        this.fileTransfer = "";
        this.contactperson = "";
        this.contactMobile = "";
        this.isLoading = false;
        this.changedBuyerPackingType = "0";
        this.additionalinfo = "";
        this.user_id = "";
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50,
        };
    }
    ngOnInit() {
        this.getData();
        this.getSellerINRPacking();
        this.getBuyerINRPacking();
        this.user_id = localStorage.getItem('id');
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
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.croppedBagImagepath = "data:image/jpeg;base64," + imageData;
            this.uploadImage(imageData, "https://snjtradelink.com/staging/public/api/submit/sell/query");
        }, (err) => {
            // Handle error
        });
    }
    getFile() {
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
            if (this.selectedQualityTypeInt == undefined ||
                this.selectedQualityTypeInt == 'undefined' ||
                this.selectedQualityTypeInt == '' ||
                this.quality == undefined ||
                this.quality == 'undefined' ||
                this.quality == '' ||
                this.qualityForm == undefined ||
                this.qualityForm == 'undefined' ||
                this.qualityForm == '' ||
                this.selectedGrade == undefined ||
                this.selectedGrade == 'undefined' ||
                this.selectedGrade == '' ||
                this.changedBuyerPackingType == undefined ||
                this.changedBuyerPackingType == 'undefined' ||
                this.changedBuyerPackingType == '' ||
                this.changePackingType == undefined ||
                this.changePackingType == 'undefined' ||
                this.changePackingType == '' ||
                this.quantity == undefined ||
                this.quantity == 'undefined' ||
                this.quantity == '') {
                setTimeout(() => {
                    this.loadCTRL.dismiss();
                    this.apiser.dismissLoader();
                }, 1000);
                this.apiser.presentToast('All field are required...');
                return false;
            }
            else {
                const headers = {
                    enctype: "multipart/form-data;",
                    Accept: "application/json",
                };
                let formData = new FormData();
                formData.append("_method", "PATCH");
                formData.append("selectedQualityTypeInt", this.selectedQualityTypeInt);
                formData.append("quality", this.quality);
                formData.append("qualityForm", this.qualityForm);
                formData.append("selectedGrade", this.selectedGrade);
                formData.append("changePackingType", this.changedBuyerPackingType);
                formData.append("packing", this.changePackingType);
                formData.append("quantity", this.quantity);
                formData.append("additionalinfo", this.additionalinfo);
                formData.append("user_id", this.user_id);
                let posteddata = {
                    method: "POST",
                    body: formData,
                };
                fetch("https://snjtradelink.com/staging/public/api/submit/buy/query", posteddata).then((res) => {
                    setTimeout(() => {
                        this.apiser.presentToast('We have received your buy query. SNTC will contact you shortly.');
                        this.loadCTRL.dismiss();
                        this.apiser.dismissLoader();
                        this.navCtrl.navigateForward('prices');
                    }, 1000);
                }).catch((err) => {
                    setTimeout(() => {
                        this.loadCTRL.dismiss();
                        this.apiser.dismissLoader();
                    }, 1000);
                });
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
    getBuyerINRPacking() {
        this.apiser.getBuyerINRPacking().then((res) => {
            // this.riceWand = res.data;
            console.log(res.data);
            this.buyerPackingList = res.data;
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
        this.riceQualityDataSelectedArray =
            this.riceQualityDataArray[data.detail.value.toLowerCase()];
        // this.selectedPackageData =
        //   this.riceQualityData[data.detail.value.toLowerCase()];
    }
    changeQuality(data) {
        console.log(data);
        this.quality = data.detail.value;
        this.getCategoryQualitiesForm(data.detail.value);
        console.log(this.quality);
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
    }
    changeGrade(data) {
        this.selectedGrade = data.detail.value;
        console.log(data);
    }
    changePacking(data) {
        let unprocessdata = data.detail.value.split("_");
        this.changePackingType = unprocessdata[0];
        this.selectedPackageName = unprocessdata[1];
        console.log(this.changePackingType);
        console.log(this.selectedPackageName);
    }
    changeBuyerPackingType(event) {
        console.log(event.detail.value);
        this.changedBuyerPackingType = event.detail.value;
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
BuyInrPage.ctorParameters = () => [
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
BuyInrPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-buy-inr",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buy-inr.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/buy-inr/buy-inr.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buy-inr.page.scss */ "./src/app/buy-inr/buy-inr.page.scss")).default]
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
], BuyInrPage);



/***/ })

}]);
//# sourceMappingURL=buy-inr-buy-inr-module-es2015.js.map