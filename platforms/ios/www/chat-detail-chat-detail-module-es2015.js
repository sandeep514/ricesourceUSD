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
/* harmony default export */ __webpack_exports__["default"] = (".message-input {\n  --background: var(--ion-color-light);\n  --padding-start: 12px;\n  --padding-end: 12px;\n  border-radius: 20px;\n}\n\n/* Chat UI v2.1.0 by Hieu Pham<mr_hie@yahoo.com> */\n\n.chat-list .chat-item {\n  margin-bottom: 8px;\n}\n\n.chat-list .chat-item.chat-item-sender {\n  text-align: right;\n}\n\n.chat-list .chat-item.chat-item-sender .chat-item-content {\n  justify-content: flex-end;\n}\n\n.chat-list .chat-item.chat-item-sender .chat-body {\n  color: #fff;\n  background: var(--ion-color-primary);\n  border-radius: 20px;\n  border-color: transparent;\n}\n\n.chat-list .chat-timestamp {\n  text-align: center;\n  font-size: 13px;\n  padding: 8px;\n  color: var(--ion-color-medium);\n  text-transform: uppercase;\n}\n\n.chat-list .chat-item-status {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin-right: 8px;\n}\n\n.chat-list .chat-item-content {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n}\n\n.chat-list .chat-item-content .chat-avatar {\n  margin-right: 8px;\n  align-self: flex-end;\n}\n\n.chat-list .chat-item-content .chat-avatar img {\n  display: inline-block;\n  width: 100%;\n  border-radius: 50%;\n  margin-top: 6px;\n}\n\n.chat-list .chat-item-bubble {\n  position: relative;\n  max-width: 75%;\n}\n\n.chat-list .chat-item-bubble .chat-body {\n  display: inline-block;\n  background: #92b243;\n  border-radius: 20px;\n  padding: 12px 16px;\n  white-space: normal;\n  max-width: 100%;\n  text-align: left;\n}\n\n.chat-list .chat-item-bubble.bubble-image {\n  font-size: 0;\n}\n\n.chat-list .chat-item-bubble.bubble-image img {\n  width: 100%;\n  max-width: 480px;\n  border-radius: 16px;\n}\n\n.chat-list .chat-item-reaction {\n  text-align: left;\n  margin-left: 8px;\n  font-size: 18px;\n  align-self: center;\n  flex-grow: 99;\n}\n\n.right .chat-avatar {\n  float: right;\n}\n\n.right .chat-item-bubble {\n  text-align: right;\n  max-width: 100%;\n}\n\n.chat-list .chat-item-content.right {\n  width: 100%;\n  display: block;\n}\n\n.chat-list .chat-item-content.right .chat-item-bubble .chat-body {\n  color: #fff;\n}\n\n.left .chat-body {\n  color: #000;\n  background: #fdf4a7 !important;\n}\n\n.left .chat-avatar {\n  float: left;\n}\n\n.left .chat-item-bubble {\n  text-align: left;\n  max-width: 86%;\n}\n\n.chat-list .chat-item-content.left {\n  width: 100%;\n  display: block;\n}\n\n.left .chat-body {\n  color: #000;\n  background: #fdf4a7 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9jaGF0LWRldGFpbC9jaGF0LWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQtZGV0YWlsL2NoYXQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUEsa0RBQUE7O0FBR0k7RUFDRSxrQkFBQTtBQ0ROOztBREdNO0VBQ0UsaUJBQUE7QUNEUjs7QURHUTtFQUNFLHlCQUFBO0FDRFY7O0FESVE7RUFDRSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDRlY7O0FET0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQ0xOOztBRFFJO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNOTjs7QURTSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDUE47O0FEU007RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDUFI7O0FEU1E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNQVjs7QURZSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ1ZOOztBRFlNO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1ZSOztBRGFNO0VBQ0UsWUFBQTtBQ1hSOztBRGFRO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNYVjs7QURnQkk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ2ROOztBRGtCQTtFQUNJLFlBQUE7QUNmSjs7QURrQkE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNmSjs7QURrQkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ2ZKOztBRGlCTTtFQUNFLFdBQUE7QUNmUjs7QURxQkk7RUFDSSxXQUFBO0VBQ0EsOEJBQUE7QUNsQlI7O0FEc0JBO0VBQ0ksV0FBQTtBQ25CSjs7QURzQkE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNuQko7O0FEc0JBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNuQko7O0FEdUJJO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0FDcEJSIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1kZXRhaWwvY2hhdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtaW5wdXQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLyogQ2hhdCBVSSB2Mi4xLjAgYnkgSGlldSBQaGFtPG1yX2hpZUB5YWhvby5jb20+ICovXG5cbi5jaGF0LWxpc3Qge1xuICAgIC5jaGF0LWl0ZW0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBcbiAgICAgICYuY2hhdC1pdGVtLXNlbmRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICBcbiAgICAgICAgLmNoYXQtaXRlbS1jb250ZW50IHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gIFxuICAgICAgICAuY2hhdC1ib2R5IHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuY2hhdC10aW1lc3RhbXAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gIFxuICAgIC5jaGF0LWl0ZW0tc3RhdHVzIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbiAgXG4gICAgLmNoYXQtaXRlbS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgXG4gICAgICAuY2hhdC1hdmF0YXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIFxuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuY2hhdC1pdGVtLWJ1YmJsZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXgtd2lkdGg6IDc1JTtcbiAgXG4gICAgICAuY2hhdC1ib2R5IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0NiwgMTc4LCA2NywgMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICBcbiAgICAgICYuYnViYmxlLWltYWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAwO1xuICBcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQ4MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5jaGF0LWl0ZW0tcmVhY3Rpb24ge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBmbGV4LWdyb3c6IDk5O1xuICAgIH1cbiAgfVxuICBcbi5yaWdodCAuY2hhdC1hdmF0YXIge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLnJpZ2h0IC5jaGF0LWl0ZW0tYnViYmxlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1jb250ZW50LnJpZ2h0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAuY2hhdC1pdGVtLWJ1YmJsZXtcbiAgICAgIC5jaGF0LWJvZHl7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cbn1cblxuLmxlZnQge1xuICAgIC5jaGF0LWJvZHkge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTMsIDI0NCwgMTY3LCAxKSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiAgXG4ubGVmdCAuY2hhdC1hdmF0YXIge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4ubGVmdCAuY2hhdC1pdGVtLWJ1YmJsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXgtd2lkdGg6IDg2JTtcbn1cblxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWNvbnRlbnQubGVmdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2tcbn1cblxuLmxlZnQge1xuICAgIC5jaGF0LWJvZHkge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTMsIDI0NCwgMTY3LCAxKSAhaW1wb3J0YW50O1xuICAgIH1cbn0iLCIubWVzc2FnZS1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4vKiBDaGF0IFVJIHYyLjEuMCBieSBIaWV1IFBoYW08bXJfaGllQHlhaG9vLmNvbT4gKi9cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS5jaGF0LWl0ZW0tc2VuZGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0uY2hhdC1pdGVtLXNlbmRlciAuY2hhdC1pdGVtLWNvbnRlbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLmNoYXQtaXRlbS1zZW5kZXIgLmNoYXQtYm9keSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uY2hhdC1saXN0IC5jaGF0LXRpbWVzdGFtcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1zdGF0dXMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tY29udGVudCAuY2hhdC1hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tY29udGVudCAuY2hhdC1hdmF0YXIgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tYnViYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDc1JTtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1idWJibGUgLmNoYXQtYm9keSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzkyYjI0MztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tYnViYmxlLmJ1YmJsZS1pbWFnZSB7XG4gIGZvbnQtc2l6ZTogMDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1idWJibGUuYnViYmxlLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLXJlYWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogOTk7XG59XG5cbi5yaWdodCAuY2hhdC1hdmF0YXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5yaWdodCAuY2hhdC1pdGVtLWJ1YmJsZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1jb250ZW50LnJpZ2h0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWNvbnRlbnQucmlnaHQgLmNoYXQtaXRlbS1idWJibGUgLmNoYXQtYm9keSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubGVmdCAuY2hhdC1ib2R5IHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQ6ICNmZGY0YTcgIWltcG9ydGFudDtcbn1cblxuLmxlZnQgLmNoYXQtYXZhdGFyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sZWZ0IC5jaGF0LWl0ZW0tYnViYmxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWF4LXdpZHRoOiA4NiU7XG59XG5cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1jb250ZW50LmxlZnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sZWZ0IC5jaGF0LWJvZHkge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogI2ZkZjRhNyAhaW1wb3J0YW50O1xufSJdfQ== */");

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