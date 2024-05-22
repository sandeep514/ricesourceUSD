(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-chatdetails-chatdetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/chatdetails/chatdetails.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/chatdetails/chatdetails.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" (click)=\"back()\">\n            <ion-icon style=\"font-size: 23px;\" name=\"arrow-back-outline\"></ion-icon>\n        </ion-buttons>\n\n        <ion-title style=\"font-size: 15px;\" class=\"\">{{ userDetails }} </ion-title>\n\n        <!-- <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"videocam\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div class=\"chat-list\">\n        <ng-container *ngFor=\"let item of additionalMessages | keyvalue\">\n            <div id=\"appendedMessage\">\n                <div class=\"chat-item\" id=\"appendedMessage\">\n                    <div class=\"chat-timestamp\">\n                        {{item.key}}\n                    </div>\n                    <div class=\"chat-item-content\" [ngClass]=\"(chat.from == myId) ? 'right' : 'left'\" *ngFor=\" let chat of item.value \">\n                        <div class=\"chat-avatar\">\n                            <ion-avatar class=\"avatar-sm\">\n                                <!-- <img src='assets/img/avatars/5.jpg'> -->\n                                <ng-container *ngIf=\"parseInt(chat.from) !== parseInt(myId)\">\n                                    <img src='https://ui-avatars.com/api/?name={{userDetails}}&color=7F9CF5&background=EBF4FF'>\n                                </ng-container>\n                                <ng-container *ngIf=\"parseInt(chat.from) === parseInt(myId)\">\n                                    <img src='https://ui-avatars.com/api/?name=admin&color=7F9CF5&background=EBF4FF'>\n                                </ng-container>\n                            </ion-avatar>\n                        </div>\n    \n                        <div class=\"chat-item-bubble\" [ngClass]=\"{'bubble-image': item.type === 'image'}\">\n                            <div class=\"chat-body\"> {{ chat.message }}</div>\n                            <!-- <img [src]=\"item.body\" *ngIf=\"item.type === 'image'\"> -->\n                        </div>\n                    </div>\n    \n                </div>\n            </div>\n        </ng-container>\n\n\n        <!-- <div class=\"chat-item\" *ngFor=\"let item of newMessages\" >\n            <div class=\"chat-item-content right\">\n                <div class=\"chat-avatar\">\n                    <ion-avatar class=\"avatar-sm\">\n                        <img src='assets/img/avatars/5.jpg'>\n                    </ion-avatar>\n                </div>\n\n                <div class=\"chat-item-bubble\" [ngClass]=\"{'bubble-image': item.type === 'image'}\">\n                    <div class=\"chat-body\" *ngIf=\"item.type !== 'image'\" [innerHtml]=\"nl2br(item.body)\"></div>\n                    <img [src]=\"item.body\" *ngIf=\"item.type === 'image'\">\n                </div>\n\n                <div class=\"chat-item-reaction\" *ngIf=\"!item.isSender && item.type === 'image'\">\n                    <ion-icon name=\"share-outline\"></ion-icon>\n                </div>\n            </div>\n        </div> -->\n\n    </div>\n</ion-content>\n\n<button id=\"refresh\" (click)=\"getMessages()\"></button>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-input class=\"message-input\" placeholder=\"Aa\" [(ngModel)]=\"messageInput\" (ionFocus)=\"toggleFocus(true)\" (ionBlur)=\"toggleFocus(false)\">\n        </ion-input>\n\n        <ion-buttons slot=\"end\" (click)=\"sendMessage()\">\n            <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"chevron-forward\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/admin/chatdetails/chatdetails-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/chatdetails/chatdetails-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChatdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatdetailsPageRoutingModule", function() { return ChatdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chatdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatdetails.page */ "./src/app/admin/chatdetails/chatdetails.page.ts");




const routes = [
    {
        path: '',
        component: _chatdetails_page__WEBPACK_IMPORTED_MODULE_3__["ChatdetailsPage"]
    }
];
let ChatdetailsPageRoutingModule = class ChatdetailsPageRoutingModule {
};
ChatdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/admin/chatdetails/chatdetails.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/chatdetails/chatdetails.module.ts ***!
  \*********************************************************/
/*! exports provided: ChatdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatdetailsPageModule", function() { return ChatdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _chatdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatdetails-routing.module */ "./src/app/admin/chatdetails/chatdetails-routing.module.ts");
/* harmony import */ var _chatdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatdetails.page */ "./src/app/admin/chatdetails/chatdetails.page.ts");







let ChatdetailsPageModule = class ChatdetailsPageModule {
};
ChatdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chatdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatdetailsPageRoutingModule"]
        ],
        declarations: [_chatdetails_page__WEBPACK_IMPORTED_MODULE_6__["ChatdetailsPage"]]
    })
], ChatdetailsPageModule);



/***/ }),

/***/ "./src/app/admin/chatdetails/chatdetails.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/admin/chatdetails/chatdetails.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message-input {\n  --background: var(--ion-color-light);\n  --padding-start: 12px;\n  --padding-end: 12px;\n  border-radius: 20px;\n}\n\n/* Chat UI v2.1.0 by Hieu Pham<mr_hie@yahoo.com> */\n\n.chat-list .chat-item {\n  margin-bottom: 8px;\n}\n\n.chat-list .chat-item.chat-item-sender {\n  text-align: right;\n}\n\n.chat-list .chat-item.chat-item-sender .chat-item-content {\n  justify-content: flex-end;\n}\n\n.chat-list .chat-item.chat-item-sender .chat-body {\n  color: #fff;\n  background: var(--ion-color-primary);\n  border-radius: 20px;\n  border-color: transparent;\n}\n\n.chat-list .chat-timestamp {\n  text-align: center;\n  font-size: 13px;\n  padding: 8px;\n  color: var(--ion-color-medium);\n  text-transform: uppercase;\n}\n\n.chat-list .chat-item-status {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin-right: 8px;\n}\n\n.chat-list .chat-item-content {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 4px;\n}\n\n.chat-list .chat-item-content .chat-avatar {\n  margin-right: 8px;\n  align-self: flex-end;\n}\n\n.chat-list .chat-item-content .chat-avatar img {\n  display: inline-block;\n  width: 100%;\n  border-radius: 50%;\n}\n\n.chat-list .chat-item-bubble {\n  position: relative;\n  max-width: 75%;\n}\n\n.chat-list .chat-item-bubble .chat-body {\n  display: inline-block;\n  background: var(--ion-color-light);\n  border-radius: 20px;\n  padding: 12px 16px;\n  white-space: normal;\n  max-width: 100%;\n  text-align: left;\n}\n\n.chat-list .chat-item-bubble.bubble-image {\n  font-size: 0;\n}\n\n.chat-list .chat-item-bubble.bubble-image img {\n  width: 100%;\n  max-width: 480px;\n  border-radius: 16px;\n}\n\n.chat-list .chat-item-reaction {\n  text-align: left;\n  margin-left: 8px;\n  font-size: 18px;\n  align-self: center;\n  flex-grow: 99;\n}\n\n.right .chat-avatar {\n  float: right;\n}\n\n.right .chat-item-bubble {\n  text-align: right;\n  max-width: 86%;\n}\n\n.chat-list .chat-item-content.right {\n  width: 100%;\n  display: block;\n}\n\n.right .chat-body {\n  color: #fff;\n  background: #4592f0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9hZG1pbi9jaGF0ZGV0YWlscy9jaGF0ZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkbWluL2NoYXRkZXRhaWxzL2NoYXRkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FER0Esa0RBQUE7O0FBR0k7RUFDSSxrQkFBQTtBQ0ZSOztBREdRO0VBQ0ksaUJBQUE7QUNEWjs7QURFWTtFQUNJLHlCQUFBO0FDQWhCOztBREVZO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0FoQjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FDRlI7O0FESUk7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ0ZSOztBRElJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGUjs7QURHUTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUNEWjs7QURFWTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQWhCOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDRlI7O0FER1E7RUFDSSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRFo7O0FER1E7RUFDSSxZQUFBO0FDRFo7O0FERVk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FoQjs7QURJSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDRlI7O0FETUE7RUFDSSxZQUFBO0FDSEo7O0FETUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDSEo7O0FET0k7RUFDSSxXQUFBO0VBQ0EsOEJBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NoYXRkZXRhaWxzL2NoYXRkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLWlucHV0IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuXG4vKiBDaGF0IFVJIHYyLjEuMCBieSBIaWV1IFBoYW08bXJfaGllQHlhaG9vLmNvbT4gKi9cblxuLmNoYXQtbGlzdCB7XG4gICAgLmNoYXQtaXRlbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgJi5jaGF0LWl0ZW0tc2VuZGVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgLmNoYXQtaXRlbS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXQtYm9keSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2hhdC10aW1lc3RhbXAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIC5jaGF0LWl0ZW0tc3RhdHVzIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbiAgICAuY2hhdC1pdGVtLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIC5jaGF0LWF2YXRhciB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jaGF0LWl0ZW0tYnViYmxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXgtd2lkdGg6IDc1JTtcbiAgICAgICAgLmNoYXQtYm9keSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgICYuYnViYmxlLWltYWdlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jaGF0LWl0ZW0tcmVhY3Rpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgZmxleC1ncm93OiA5OTtcbiAgICB9XG59XG5cbi5yaWdodCAuY2hhdC1hdmF0YXIge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLnJpZ2h0IC5jaGF0LWl0ZW0tYnViYmxlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXgtd2lkdGg6IDg2JTtcbn1cblxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWNvbnRlbnQucmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrXG59XG5cbi5yaWdodCB7XG4gICAgLmNoYXQtYm9keSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDU5MmYwICFpbXBvcnRhbnQ7XG4gICAgfVxufSIsIi5tZXNzYWdlLWlucHV0IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi8qIENoYXQgVUkgdjIuMS4wIGJ5IEhpZXUgUGhhbTxtcl9oaWVAeWFob28uY29tPiAqL1xuLmNoYXQtbGlzdCAuY2hhdC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLmNoYXQtaXRlbS1zZW5kZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS5jaGF0LWl0ZW0tc2VuZGVyIC5jaGF0LWl0ZW0tY29udGVudCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0uY2hhdC1pdGVtLXNlbmRlciAuY2hhdC1ib2R5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtdGltZXN0YW1wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLXN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWNvbnRlbnQgLmNoYXQtYXZhdGFyIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWNvbnRlbnQgLmNoYXQtYXZhdGFyIGltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1idWJibGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNzUlO1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWJ1YmJsZSAuY2hhdC1ib2R5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1idWJibGUuYnViYmxlLWltYWdlIHtcbiAgZm9udC1zaXplOiAwO1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWJ1YmJsZS5idWJibGUtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tcmVhY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZmxleC1ncm93OiA5OTtcbn1cblxuLnJpZ2h0IC5jaGF0LWF2YXRhciB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnJpZ2h0IC5jaGF0LWl0ZW0tYnViYmxlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1heC13aWR0aDogODYlO1xufVxuXG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tY29udGVudC5yaWdodCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnJpZ2h0IC5jaGF0LWJvZHkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzQ1OTJmMCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/chatdetails/chatdetails.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/chatdetails/chatdetails.page.ts ***!
  \*******************************************************/
/*! exports provided: ChatdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatdetailsPage", function() { return ChatdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components.service */ "./src/app/components.service.ts");
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/rest.service */ "./src/app/rest.service.ts");






let ChatdetailsPage = class ChatdetailsPage {
    constructor(navCtrl, restAPI, ActRoute, compSer) {
        this.navCtrl = navCtrl;
        this.restAPI = restAPI;
        this.ActRoute = ActRoute;
        this.compSer = compSer;
        this.messages = [];
        this.newMessages = [];
        this.recieveMessage = [];
        this.newMessage = '0';
    }
    ionViewDidEnter() {
        this.myId = localStorage.getItem('id');
        this.selectedUser = localStorage.getItem('selectedChatUserId');
        this.getMessages();
        this.ScrollToBottom();
        let ele = this;
        this.compSer.sendMessage.subscribe(function (message) {
            ele.getMessages();
        });
        let elem = this;
        this.compSer.newRecieveMessage.subscribe((message) => {
            document.getElementById('refresh').click();
            ele.getMessages();
        });
    }
    parseInt(string) {
        return parseInt(string);
    }
    newRecMessage(message) {
        let ele = this.recieveMessage;
        ele.push({
            'isSender': true,
            'avatar': 'assets/img/avatars/5.jpg',
            'type': 'text',
            'body': message,
            'timestamp': 'May 2, 2020 9:48 AM'
        });
    }
    ScrollToBottom() {
        setTimeout(() => {
            this.myContent.scrollToBottom(300);
        }, 1000);
    }
    clickme() {
        this.newMessage = "jhg";
    }
    getMessages() {
        this.restAPI.getMessages(localStorage.getItem('id'), this.toChat).then((res) => {
            this.additionalMessages = res.data;
            this.userDetails = res.from.name + ',' + res.from.mobile;
            this.userDetailsMobile = res.from.mobile;
            console.log(this.userDetails);
            this.ScrollToBottom();
        });
    }
    ngOnInit() {
        this.toChat = this.ActRoute.snapshot.params.id;
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
        this.navCtrl.navigateForward(['admin/chat']);
    }
    sendMessage() {
        this.newMessage = '0';
        let latestMessage = this.messageInput;
        let formData = {
            message: this.messageInput,
            from: localStorage.getItem('id'),
            to: localStorage.getItem('selectedChatUserId')
        };
        this.messageInput = '';
        this.ScrollToBottom();
        this.restAPI.sendMessage(formData).then((res) => {
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
ChatdetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_components_service__WEBPACK_IMPORTED_MODULE_4__["ComponentsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], ChatdetailsPage.prototype, "myContent", void 0);
ChatdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chatdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chatdetails.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/chatdetails/chatdetails.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chatdetails.page.scss */ "./src/app/admin/chatdetails/chatdetails.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_components_service__WEBPACK_IMPORTED_MODULE_4__["ComponentsService"]])
], ChatdetailsPage);



/***/ })

}]);
//# sourceMappingURL=admin-chatdetails-chatdetails-module-es2015.js.map