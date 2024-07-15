(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-detail-chat-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" (click)=\"back()\">\n            <ion-icon style=\"font-size: 23px;\" name=\"arrow-back-outline\"></ion-icon>\n        </ion-buttons>\n\n        <ion-title class=\"\">Chat Support</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div class=\"chat-list\">\n        <ng-container *ngFor=\"let item of additionalMessages | keyvalue\">\n\n            <div class=\"chat-item\">\n                <div class=\"chat-timestamp\">\n                    {{item.key}}\n                </div>\n                <div class=\"chat-item-content\" [ngClass]=\"(chat.from == myId) ? 'right' : 'left'\" *ngFor=\" let chat of item.value \">\n                    <!-- <div class=\"chat-avatar\">\n                        <ion-avatar class=\"avatar-sm\">\n                            <ng-container *ngIf=\" chat.from == myId \">\n                                <img src='https://ui-avatars.com/api/?name={{ myName }}&color=7F9CF5&background=EBF4FF'>\n                            </ng-container>\n                            <ng-container *ngIf=\" chat.from != myId \">\n                                <img src='https://ui-avatars.com/api/?name=Chart+support&color=FFFBD6&background=92B243'>\n                            </ng-container>\n                        </ion-avatar>\n                    </div> -->\n\n                    <div class=\"chat-item-bubble\" [ngClass]=\"{'bubble-image': item.type === 'image'}\">\n                        <div class=\"chat-body\"> {{ chat.message }}</div>\n                        <!-- <img [src]=\"item.body\" *ngIf=\"item.type === 'image'\"> -->\n                    </div>\n                </div>\n\n            </div>\n        </ng-container>\n\n\n        <div class=\"chat-item\" *ngFor=\"let item of newMessages\" >\n            <div class=\"chat-item-content right\">\n                <div class=\"chat-avatar\">\n                    <ion-avatar class=\"avatar-sm\">\n                        <img src='assets/img/avatars/5.jpg'>\n                    </ion-avatar>\n                </div>\n\n                <div class=\"chat-item-bubble\" [ngClass]=\"{'bubble-image': item.type === 'image'}\">\n                    <div class=\"chat-body\" *ngIf=\"item.type !== 'image'\" [innerHtml]=\"nl2br(item.body)\"></div>\n                    <img [src]=\"item.body\" *ngIf=\"item.type === 'image'\">\n                </div>\n\n                <div class=\"chat-item-reaction\" *ngIf=\"!item.isSender && item.type === 'image'\">\n                    <ion-icon name=\"share-outline\"></ion-icon>\n                </div>\n            </div>\n        </div>\n        <button id=\"refresh\" (click)=\"getMessages()\" style=\"display: none;\">hi</button>\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-input class=\"message-input\" placeholder=\"Aa\" [(ngModel)]=\"messageInput\" (ionFocus)=\"toggleFocus(true)\" (ionBlur)=\"toggleFocus(false)\">\n        </ion-input>\n\n        <ion-buttons slot=\"end\" (click)=\"sendMessage()\">\n            <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"chevron-forward\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/chat-detail/chat-detail-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat-detail/chat-detail-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ChatDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPageRoutingModule", function() { return ChatDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-detail.page */ "./src/app/chat-detail/chat-detail.page.ts");




const routes = [
    {
        path: '',
        component: _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__["ChatDetailPage"]
    }
];
let ChatDetailPageRoutingModule = class ChatDetailPageRoutingModule {
};
ChatDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/chat-detail/chat-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.module.ts ***!
  \***************************************************/
/*! exports provided: ChatDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPageModule", function() { return ChatDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-detail-routing.module */ "./src/app/chat-detail/chat-detail-routing.module.ts");
/* harmony import */ var _chat_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-detail.page */ "./src/app/chat-detail/chat-detail.page.ts");







let ChatDetailPageModule = class ChatDetailPageModule {
};
ChatDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatDetailPageRoutingModule"]
        ],
        declarations: [_chat_detail_page__WEBPACK_IMPORTED_MODULE_6__["ChatDetailPage"]]
    })
], ChatDetailPageModule);



/***/ }),

/***/ "./src/app/chat-detail/chat-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message-input {\n  --background: var(--ion-color-light);\n  --padding-start: 12px;\n  --padding-end: 12px;\n  border-radius: 20px;\n}\n\n/* Chat UI v2.1.0 by Hieu Pham<mr_hie@yahoo.com> */\n\n.chat-list .chat-item {\n  margin-bottom: 8px;\n}\n\n.chat-list .chat-item.chat-item-sender {\n  text-align: right;\n}\n\n.chat-list .chat-item.chat-item-sender .chat-item-content {\n  justify-content: flex-end;\n}\n\n.chat-list .chat-item.chat-item-sender .chat-body {\n  color: #fff;\n  background: var(--ion-color-primary);\n  border-radius: 20px;\n  border-color: transparent;\n}\n\n.chat-list .chat-timestamp {\n  text-align: center;\n  font-size: 13px;\n  padding: 8px;\n  color: var(--ion-color-medium);\n  text-transform: uppercase;\n}\n\n.chat-list .chat-item-status {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin-right: 8px;\n}\n\n.chat-list .chat-item-content {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n}\n\n.chat-list .chat-item-content .chat-avatar {\n  margin-right: 8px;\n  align-self: flex-end;\n}\n\n.chat-list .chat-item-content .chat-avatar img {\n  display: inline-block;\n  width: 100%;\n  border-radius: 50%;\n  margin-top: 6px;\n}\n\n.chat-list .chat-item-bubble {\n  position: relative;\n  max-width: 75%;\n}\n\n.chat-list .chat-item-bubble .chat-body {\n  display: inline-block;\n  background: #92b243;\n  border-radius: 20px;\n  padding: 12px 16px;\n  white-space: normal;\n  max-width: 100%;\n  text-align: left;\n}\n\n.chat-list .chat-item-bubble.bubble-image {\n  font-size: 0;\n}\n\n.chat-list .chat-item-bubble.bubble-image img {\n  width: 100%;\n  max-width: 480px;\n  border-radius: 16px;\n}\n\n.chat-list .chat-item-reaction {\n  text-align: left;\n  margin-left: 8px;\n  font-size: 18px;\n  align-self: center;\n  flex-grow: 99;\n}\n\n.right .chat-avatar {\n  float: right;\n}\n\n.right .chat-item-bubble {\n  text-align: right;\n  max-width: 100%;\n}\n\n.chat-list .chat-item-content.right {\n  width: 100%;\n  display: block;\n}\n\n.chat-list .chat-item-content.right .chat-item-bubble .chat-body {\n  color: #fff;\n}\n\n.left .chat-body {\n  color: #000;\n  background: #fdf4a7 !important;\n}\n\n.left .chat-avatar {\n  float: left;\n}\n\n.left .chat-item-bubble {\n  text-align: left;\n  max-width: 86%;\n}\n\n.chat-list .chat-item-content.left {\n  width: 100%;\n  display: block;\n}\n\n.left .chat-body {\n  color: #000;\n  background: #fdf4a7 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwL0Rlc2t0b3AvcmljZXNvdXJjZVVTRC9zcmMvYXBwL2NoYXQtZGV0YWlsL2NoYXQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhdC1kZXRhaWwvY2hhdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQSxrREFBQTs7QUFHSTtFQUNFLGtCQUFBO0FDRE47O0FER007RUFDRSxpQkFBQTtBQ0RSOztBREdRO0VBQ0UseUJBQUE7QUNEVjs7QURJUTtFQUNFLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNGVjs7QURPSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FDTE47O0FEUUk7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ05OOztBRFNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNQTjs7QURTTTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNQUjs7QURTUTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1BWOztBRFlJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDVk47O0FEWU07RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVlI7O0FEYU07RUFDRSxZQUFBO0FDWFI7O0FEYVE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1hWOztBRGdCSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDZE47O0FEa0JBO0VBQ0ksWUFBQTtBQ2ZKOztBRGtCQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ2ZKOztBRGtCQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDZko7O0FEaUJNO0VBQ0UsV0FBQTtBQ2ZSOztBRHFCSTtFQUNJLFdBQUE7RUFDQSw4QkFBQTtBQ2xCUjs7QURzQkE7RUFDSSxXQUFBO0FDbkJKOztBRHNCQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ25CSjs7QURzQkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ25CSjs7QUR1Qkk7RUFDSSxXQUFBO0VBQ0EsOEJBQUE7QUNwQlIiLCJmaWxlIjoic3JjL2FwcC9jaGF0LWRldGFpbC9jaGF0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4vKiBDaGF0IFVJIHYyLjEuMCBieSBIaWV1IFBoYW08bXJfaGllQHlhaG9vLmNvbT4gKi9cblxuLmNoYXQtbGlzdCB7XG4gICAgLmNoYXQtaXRlbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIFxuICAgICAgJi5jaGF0LWl0ZW0tc2VuZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIFxuICAgICAgICAuY2hhdC1pdGVtLWNvbnRlbnQge1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5jaGF0LWJvZHkge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5jaGF0LXRpbWVzdGFtcCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgXG4gICAgLmNoYXQtaXRlbS1zdGF0dXMge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuICBcbiAgICAuY2hhdC1pdGVtLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbiAgICAgIC5jaGF0LWF2YXRhciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5jaGF0LWl0ZW0tYnViYmxlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1heC13aWR0aDogNzUlO1xuICBcbiAgICAgIC5jaGF0LWJvZHkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTQ2LCAxNzgsIDY3LCAxKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gIFxuICAgICAgJi5idWJibGUtaW1hZ2Uge1xuICAgICAgICBmb250LXNpemU6IDA7XG4gIFxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogNDgwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmNoYXQtaXRlbS1yZWFjdGlvbiB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIGZsZXgtZ3JvdzogOTk7XG4gICAgfVxuICB9XG4gIFxuLnJpZ2h0IC5jaGF0LWF2YXRhciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucmlnaHQgLmNoYXQtaXRlbS1idWJibGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWNvbnRlbnQucmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC5jaGF0LWl0ZW0tYnViYmxle1xuICAgICAgLmNoYXQtYm9keXtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxufVxuXG4ubGVmdCB7XG4gICAgLmNoYXQtYm9keSB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MywgMjQ0LCAxNjcsIDEpICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuICBcbi5sZWZ0IC5jaGF0LWF2YXRhciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sZWZ0IC5jaGF0LWl0ZW0tYnViYmxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1heC13aWR0aDogODYlO1xufVxuXG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tY29udGVudC5sZWZ0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9ja1xufVxuXG4ubGVmdCB7XG4gICAgLmNoYXQtYm9keSB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MywgMjQ0LCAxNjcsIDEpICFpbXBvcnRhbnQ7XG4gICAgfVxufSIsIi5tZXNzYWdlLWlucHV0IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi8qIENoYXQgVUkgdjIuMS4wIGJ5IEhpZXUgUGhhbTxtcl9oaWVAeWFob28uY29tPiAqL1xuLmNoYXQtbGlzdCAuY2hhdC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLmNoYXQtaXRlbS1zZW5kZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS5jaGF0LWl0ZW0tc2VuZGVyIC5jaGF0LWl0ZW0tY29udGVudCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0uY2hhdC1pdGVtLXNlbmRlciAuY2hhdC1ib2R5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtdGltZXN0YW1wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLXN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1jb250ZW50IC5jaGF0LWF2YXRhciB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1jb250ZW50IC5jaGF0LWF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1idWJibGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNzUlO1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWJ1YmJsZSAuY2hhdC1ib2R5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjOTJiMjQzO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1idWJibGUuYnViYmxlLWltYWdlIHtcbiAgZm9udC1zaXplOiAwO1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWJ1YmJsZS5idWJibGUtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tcmVhY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZmxleC1ncm93OiA5OTtcbn1cblxuLnJpZ2h0IC5jaGF0LWF2YXRhciB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnJpZ2h0IC5jaGF0LWl0ZW0tYnViYmxlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWNvbnRlbnQucmlnaHQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tY29udGVudC5yaWdodCAuY2hhdC1pdGVtLWJ1YmJsZSAuY2hhdC1ib2R5IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sZWZ0IC5jaGF0LWJvZHkge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogI2ZkZjRhNyAhaW1wb3J0YW50O1xufVxuXG4ubGVmdCAuY2hhdC1hdmF0YXIge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxlZnQgLmNoYXQtaXRlbS1idWJibGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXgtd2lkdGg6IDg2JTtcbn1cblxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWNvbnRlbnQubGVmdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxlZnQgLmNoYXQtYm9keSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZmRmNGE3ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/chat-detail/chat-detail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.page.ts ***!
  \*************************************************/
/*! exports provided: ChatDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPage", function() { return ChatDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components.service */ "./src/app/components.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");






let ChatDetailPage = class ChatDetailPage {
    constructor(navCtrl, location, restAPI, compSer) {
        this.navCtrl = navCtrl;
        this.location = location;
        this.restAPI = restAPI;
        this.compSer = compSer;
        this.messages = [];
        this.lastSentMessage = [];
        this.adminId = 1;
        this.newMessages = [];
        this.newRecMessage = [];
    }
    ionViewDidEnter() {
        this.myId = localStorage.getItem('id'),
            this.myName = localStorage.getItem('name'),
            this.selectedUser = localStorage.getItem('selectedChatUserId');
        this.getMessages();
        this.ScrollToBottom();
        let ele = this;
        this.compSer.sendMessage.subscribe(function (message) {
            // ele.push({
            // 	'isSender' : true,
            // 	'avatar' : 'assets/img/avatars/5.jpg',
            // 	'type' : 'text',
            // 	'body' : message,
            // 	'timestamp' : 'May 2, 2020 9:48 AM' 
            // });
            ele.getMessages();
        });
        this.compSer.newRecieveMessageForUser.subscribe(function (message) {
            document.getElementById('refresh').click();
            ele.getMessages();
        });
        this.ScrollToBottom();
    }
    getMessages() {
        this.restAPI.getMessages(localStorage.getItem('id'), 1).then((res) => {
            this.additionalMessages = res.data;
            // for (let i = 0; i < res.data.length; i++) {
            // 	if(res.data[i].from == localStorage.getItem('id')){
            // 		this.messages.push({
            // 			'isSender' : true,
            // 			'avatar' : 'assets/img/avatars/5.jpg',
            // 			'type' : 'text',
            // 			'body' : res.data[i].message,
            // 			'timestamp' : 'May 2, 2020 9:48 AM' 
            // 		});
            // 	}else{
            // 		this.messages.push({
            // 			'isSender' : false,
            // 			'avatar' : 'assets/img/avatars/5.jpg',
            // 			'type' : 'text',
            // 			'body' : res.data[i].message,
            // 			'timestamp' : 'May 2, 2020 9:48 AM' 
            // 		});
            // 	}
            // }
            this.ScrollToBottom();
        });
    }
    ngOnInit() {
        // this.restAPI.getMessages(localStorage.getItem('id') , 1).then((res:any) =>{
        // 	for (let i = 0; i < res.data.length; i++) {
        // 		if(res.data[i].from == localStorage.getItem('id')){
        // 			this.messages.push({
        // 				'isSender' : true,
        // 				'avatar' : 'assets/img/avatars/5.jpg',
        // 				'type' : 'text',
        // 				'body' : res.data[i].message,
        // 				'timestamp' : 'May 2, 2020 9:48 AM' 
        // 			});
        // 		}else{
        // 			this.messages.push({
        // 				'isSender' : false,
        // 				'avatar' : 'assets/img/avatars/5.jpg',
        // 				'type' : 'text',
        // 				'body' : res.data[i].message,
        // 				'timestamp' : 'May 2, 2020 9:48 AM' 
        // 			});
        // 		}
        // 	}
        // });
        // let ele = this.messages;
        // this.compSer.sendMessage.subscribe( function(message){
        // 	ele.push({
        // 		'isSender' : true,
        // 		'avatar' : 'assets/img/avatars/5.jpg',
        // 		'type' : 'text',
        // 		'body' : message,
        // 		'timestamp' : 'May 2, 2020 9:48 AM' 
        // 	});
        // });
    }
    toggleFocus(isFocus) {
        this.isFocus = isFocus;
    }
    nl2br(text) {
        if (!text)
            return text;
        return text.replace(/\n/ig, '<br>');
    }
    back() {
        this.location.back();
    }
    ScrollToBottom() {
        setTimeout(() => {
            this.myContent.scrollToBottom(300);
        }, 1000);
    }
    sendMessage() {
        // this.newMessage = '0';
        let latestMessage = this.messageInput;
        let formData = {
            message: this.messageInput,
            from: localStorage.getItem('id'),
            to: 1
        };
        this.messageInput = '';
        this.ScrollToBottom();
        this.restAPI.sendMessage(formData).then((res) => {
            // this.compSer.sendMessage.next(this.messageInput);
            this.messageInput = '';
            this.ScrollToBottom();
        }, (err) => {
            if (err.status == 200) {
                this.messageInput = '';
                this.compSer.sendMessage.next(latestMessage);
                this.ScrollToBottom();
            }
            else {
                this.restAPI.presentToast('Something went wrong..');
            }
        });
    }
};
ChatDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
    { type: _components_service__WEBPACK_IMPORTED_MODULE_4__["ComponentsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], ChatDetailPage.prototype, "myContent", void 0);
ChatDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-chat-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-detail.page.scss */ "./src/app/chat-detail/chat-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"], _components_service__WEBPACK_IMPORTED_MODULE_4__["ComponentsService"]])
], ChatDetailPage);



/***/ })

}]);
//# sourceMappingURL=chat-detail-chat-detail-module-es2015.js.map