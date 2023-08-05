(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-inr-selling-inr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/selling-inr/selling-inr.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selling-inr/selling-inr.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"green\">\n\t<ion-toolbar mode=\"ios\" style=\"background: transparent; --background: transparent\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Sell Query</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content id=\"content\" [scrollEvents]=\"true\" class=\"lightgreen\">\n\t<div style=\"padding: 10px 10px;margin-bottom: 100px;\">\n\t\t<ion-item>\n\t\t\t<ion-label>Category</ion-label>\n\t\t\t<!-- (ionChange)=\"changecountry($event)\" -->\n\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQualityType($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let qualityType of riceQualityType\" style=\"text-transform: capitalize;\">{{\n\t\t\t\t\tqualityType | uppercase }}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 3px solid #92b243;border-radius: 10px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Quality</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQuality($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let riceName of onlyRiceName | keyvalue\" value={{riceName.value}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ riceName.key }}</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option style=\"text-transform: capitalize;\">Other</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;margin-right: 15px;text-align: right;padding: 5px;\">{{quality}}</p> -->\n\t\t\t</ion-col>\n\n\t\t</ion-row>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 3px solid #92b243;border-radius: 10px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Form</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changeQualityForm($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let riceName of onlyRiceForms\" value={{riceName.id}}\n\t\t\t\t\t\t\tstyle=\"text-transform: capitalize;\">{{ riceName.quality_name }}</ion-select-option>\n\t\t\t\t\t\t<!-- <ion-select-option style=\"text-transform: capitalize;\">Other</ion-select-option> -->\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- <p style=\"padding: 0;margin: 0;margin-right: 15px;text-align: right;padding: 5px;\">{{qualityForm}}</p> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<p style=\"padding: 0px;margin: 0px;text-align: right;\">{{ selectedRiceFormAndName?.quality }}{{\n\t\t\t\t\tselectedRiceFormAndName?.quality_name }}</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div>\n\t\t\t\t\t<div *ngFor=\"let wand of riceWand\" style=\"padding: 0px 0px;\">\n\t\t\t\t\t\t<div (click)=\"selectedWand(wand)\" style=\"display: inline-block;width: 100%;padding: 0px 10px;border-radius: 14px;\" [ngStyle]=\"{'background': selectedGrade == wand.id ? '#92b243' : 'transparent' }\">\n\t\t\t\t\t\t\t<div style=\"width: 80%;float: left;\">\n\t\t\t\t\t\t\t\t<p style=\"margin: 10px 0px;\">{{ wand.get_wand_type[0].type }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style=\"width: 20%;float: left;\">\n\t\t\t\t\t\t\t\t<p style=\"margin: 10px 0px;\">{{ wand.value }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row style=\"margin-bottom: 10px;\">\n\t\t\t<ion-col size=\"12\"\n\t\t\t\tstyle=\"border: 3px solid #92b243;border-radius: 10px;margin-bottom: 10px;padding: 0;margin: 0;background: white;\">\n\t\t\t\t<ion-item class=\"packingSelect\" style=\"border: 0px;margin-bottom: 0;\">\n\t\t\t\t\t<ion-label>Packing</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePacking($event)\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let package of sellerPackingList\"\n\t\t\t\t\t\t\tvalue=\"{{ package.id+'_'+package.packing }}\">\n\t\t\t\t\t\t\t<p>{{package.packing}} </p>\n\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<p style=\"padding: 0;margin: 0;margin-left: 15px;text-align: left;padding: 5px;\">{{selectedPackageName}}\n\t\t\t\t</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<button (click)=\"pickImage()\">Pick Image</button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Quantity (MT)</ion-label>\n\t\t\t<ion-input type=\"number\" [(ngModel)]=\"quantity\" style=\" text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label>Port</ion-label>\n\t\t\t<ion-select placeholder=\"Select\" (ionChange)=\"changePort($event)\">\n\t\t\t\t<ion-select-option *ngFor=\"let port of ports\" value=\"{{ port.port+'_'+port.freight_25MT }}\">{{ port.port\n\t\t\t\t\t}}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\n\t\t<!-- <ion-item>\n\t\t\t<ion-label>Port</ion-label>\n\t\t\t<ionic-selectable\n\t\t\t\t[(ngModel)]=\"port\"\n\t\t\t\t[items]=\"ports\"\n\t\t\t\titemValueField=\"id\"\n\t\t\t\titemTextField=\"port\"\n\t\t\t\t[canSearch]=\"true\"\n\t\t\t\t(onChange)=\"changePort($event)\"\n\t\t\t\t(ionChange)=\"changePort($event)\"\n\t\t\t>\n\t\t\t</ionic-selectable>\n\t\t</ion-item> -->\n\n\t\t<!-- <ion-item>\n\t\t\t<ion-label position=\"\">Buyer Name</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"party\" type=\"text\" style=\"text-align: right;\"></ion-input>\n\t\t</ion-item>\n\t\n\t\t<ion-item>\n\t\t\t<ion-label position=\"\">Contact No.</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"mobile\" type=\"text\" style=\"text-align: right;\"></ion-input>\n\t\t</ion-item> -->\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"stacked\">Additional Information: </ion-label>\n\t\t\t<ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"remarks\"></ion-textarea>\n\t\t</ion-item>\n\n\t\t<!-- <ion-item>\n\t\t\t<ion-label position=\"\">Deal Valid for days</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"validDays\" type=\"text\" style=\" text-align: right;\" placeholder=\"2\"></ion-input>\n\t\t</ion-item> -->\n\n\t\t<div *ngIf=\"isError\" style=\"text-align: center;color: red;font-weight: 600\">\n\t\t\t<span>{{ errorMessage }}</span>\n\t\t</div>\n\t\t<ion-button color=\"success\" expand=\"full\" shape=\"round\" (click)=\"save()\">Submit</ion-button>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\nion-item {\n  border: 3px solid #92b243;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.item-native {\n  background: transparent;\n  background-color: transparent;\n  --background: transparent;\n  --background-color: transparent;\n}\n\n.packingSelect .select-text {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9zZWxsaW5nLWluci9zZWxsaW5nLWluci5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlbGxpbmctaW5yL3NlbGxpbmctaW5yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENJO0VBQ0ksZUFBQTtBQ0NSOztBREdBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDQUo7O0FESUk7RUFDSSxhQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9zZWxsaW5nLWluci9zZWxsaW5nLWluci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGYtdHJlZS5leGFtcGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDk0ZjU4O1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzkyYjI0MztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFja2luZ1NlbGVjdCB7XG4gICAgLnNlbGVjdC10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59IiwiLnRmLXRyZWUuZXhhbXBsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICNGRkY7XG59XG4uYmFjay1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDk0ZjU4O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXI6IDNweCBzb2xpZCAjOTJiMjQzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wYWNraW5nU2VsZWN0IC5zZWxlY3QtdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

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
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");





// import { ImagePicker } from "@awesome-cordova-plugins/image-picker/ngx";



let SellingINRPage = class SellingINRPage {
    constructor(apiser, location, navCtrl, actionSheetController, file, camera) {
        this.apiser = apiser;
        this.location = location;
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.camera = camera;
        this.party = localStorage.getItem("name");
        this.mobile = localStorage.getItem("mobile");
        this.remarks = "";
        this.validDays = 0;
        this.isError = false;
        this.errorMessage = "";
        this.qualityForm = "";
        this.selectedRiceFormAndName = "";
        this.selectedGrade = "";
        this.sellerPackingList = "";
        this.croppedImagepath = "";
        this.isLoading = false;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50,
        };
    }
    ngOnInit() {
        this.getData();
        this.getSellerINRPacking();
    }
    selectedWand(selectedWantDetail) {
        this.selectedGrade = selectedWantDetail.id;
        console.log(selectedWantDetail);
    }
    pickImage(sourceType) {
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            this.croppedImagepath = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            // Handle error
        });
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
    save() {
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
            this.apiser.saveRiceQuery(postedData).then((res) => {
                this.apiser.loaderCtrl.dismiss();
                this.apiser.presentToast("Query generated successfully.");
                this.navCtrl.navigateRoot(["thankyou"]);
            }, (err) => {
                console.log(err);
            });
        }
        else {
            this.isError = true;
            this.errorMessage = "Required fields are missing";
            console.log("validate fails");
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
        this.getCategoryQualities(selectedQualityTypeInit);
        this.riceQualityDataSelectedArray =
            this.riceQualityDataArray[data.detail.value.toLowerCase()];
        // this.selectedPackageData =
        //   this.riceQualityData[data.detail.value.toLowerCase()];
    }
    changeQuality(data) {
        console.log();
        this.quality = data.detail.value;
        this.getCategoryQualitiesForm(data.detail.value);
        console.log(this.quality);
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
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] }
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
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]])
], SellingINRPage);



/***/ })

}]);
//# sourceMappingURL=selling-inr-selling-inr-module-es2015.js.map