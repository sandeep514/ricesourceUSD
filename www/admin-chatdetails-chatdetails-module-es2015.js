(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-chatdetails-chatdetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/chatdetails/chatdetails.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/chatdetails/chatdetails.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" (click)=\"back()\">\n            <ion-icon style=\"font-size: 23px;\" name=\"arrow-back-outline\"></ion-icon>\n        </ion-buttons>\n\n        <ion-title style=\"font-size: 15px;\" class=\"\">{{ userDetails }} </ion-title>\n\n        <!-- <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"videocam\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div class=\"chat-list\">\n        <ng-container *ngFor=\"let item of additionalMessages | keyvalue\">\n            <div id=\"appendedMessage\">\n                <div class=\"chat-item\" id=\"appendedMessage\">\n                    <div class=\"chat-timestamp\">\n                        {{item.key}}\n                    </div>\n                    <div class=\"chat-item-content\" [ngClass]=\"(chat.from == myId) ? 'right' : 'left'\" *ngFor=\" let chat of item.value \">\n                        <div class=\"chat-avatar\">\n                            <ion-avatar class=\"avatar-sm\">\n                                <!-- <img src='assets/img/avatars/5.jpg'> -->\n                                <ng-container *ngIf=\"parseInt(chat.from) === parseInt(myId)\">\n                                    <img src='https://ui-avatars.com/api/?name={{userDetails}}&color=7F9CF5&background=EBF4FF'>\n                                </ng-container>\n                                <ng-container *ngIf=\"parseInt(chat.from) !== parseInt(myId)\">\n                                    <img src='https://ui-avatars.com/api/?name=admin&color=7F9CF5&background=EBF4FF'>\n                                </ng-container>\n                            </ion-avatar>\n                        </div>\n    \n                        <div class=\"chat-item-bubble\" [ngClass]=\"{'bubble-image': item.type === 'image'}\">\n                            <div class=\"chat-body\"> {{ chat.message }}</div>\n                            <!-- <img [src]=\"item.body\" *ngIf=\"item.type === 'image'\"> -->\n                        </div>\n                    </div>\n    \n                </div>\n            </div>\n        </ng-container>\n\n\n        <!-- <div class=\"chat-item\" *ngFor=\"let item of newMessages\" >\n            <div class=\"chat-item-content right\">\n                <div class=\"chat-avatar\">\n                    <ion-avatar class=\"avatar-sm\">\n                        <img src='assets/img/avatars/5.jpg'>\n                    </ion-avatar>\n                </div>\n\n                <div class=\"chat-item-bubble\" [ngClass]=\"{'bubble-image': item.type === 'image'}\">\n                    <div class=\"chat-body\" *ngIf=\"item.type !== 'image'\" [innerHtml]=\"nl2br(item.body)\"></div>\n                    <img [src]=\"item.body\" *ngIf=\"item.type === 'image'\">\n                </div>\n\n                <div class=\"chat-item-reaction\" *ngIf=\"!item.isSender && item.type === 'image'\">\n                    <ion-icon name=\"share-outline\"></ion-icon>\n                </div>\n            </div>\n        </div> -->\n\n    </div>\n</ion-content>\n\n<button id=\"refresh\" (click)=\"getMessages()\"></button>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-input class=\"message-input\" placeholder=\"Aa\" [(ngModel)]=\"messageInput\" (ionFocus)=\"toggleFocus(true)\" (ionBlur)=\"toggleFocus(false)\">\n        </ion-input>\n\n        <ion-buttons slot=\"end\" (click)=\"sendMessage()\">\n            <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"chevron-forward\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>");

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
/* harmony default export */ __webpack_exports__["default"] = (".message-input {\n  --background: var(--ion-color-light);\n  --padding-start: 12px;\n  --padding-end: 12px;\n  border-radius: 20px;\n}\n\n/* Chat UI v2.1.0 by Hieu Pham<mr_hie@yahoo.com> */\n\n.chat-list .chat-item {\n  margin-bottom: 8px;\n}\n\n.chat-list .chat-item.chat-item-sender {\n  text-align: right;\n}\n\n.chat-list .chat-item.chat-item-sender .chat-item-content {\n  justify-content: flex-end;\n}\n\n.chat-list .chat-item.chat-item-sender .chat-body {\n  color: #fff;\n  background: var(--ion-color-primary);\n  border-radius: 20px;\n  border-color: transparent;\n}\n\n.chat-list .chat-timestamp {\n  text-align: center;\n  font-size: 13px;\n  padding: 8px;\n  color: var(--ion-color-medium);\n  text-transform: uppercase;\n}\n\n.chat-list .chat-item-status {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin-right: 8px;\n}\n\n.chat-list .chat-item-content {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 4px;\n}\n\n.chat-list .chat-item-content .chat-avatar {\n  margin-right: 8px;\n  align-self: flex-end;\n}\n\n.chat-list .chat-item-content .chat-avatar img {\n  display: inline-block;\n  width: 100%;\n  border-radius: 50%;\n}\n\n.chat-list .chat-item-bubble {\n  position: relative;\n  max-width: 75%;\n}\n\n.chat-list .chat-item-bubble .chat-body {\n  display: inline-block;\n  background: var(--ion-color-light);\n  border-radius: 20px;\n  padding: 12px 16px;\n  white-space: normal;\n  max-width: 100%;\n  text-align: left;\n}\n\n.chat-list .chat-item-bubble.bubble-image {\n  font-size: 0;\n}\n\n.chat-list .chat-item-bubble.bubble-image img {\n  width: 100%;\n  max-width: 480px;\n  border-radius: 16px;\n}\n\n.chat-list .chat-item-reaction {\n  text-align: left;\n  margin-left: 8px;\n  font-size: 18px;\n  align-self: center;\n  flex-grow: 99;\n}\n\n.right .chat-avatar {\n  float: right;\n}\n\n.right .chat-item-bubble {\n  text-align: right;\n  max-width: 86%;\n}\n\n.chat-list .chat-item-content.right {\n  width: 100%;\n  display: block;\n}\n\n.right .chat-body {\n  color: #fff;\n  background: #4592f0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9yaWNlX21vYmlsZS9zcmMvYXBwL2FkbWluL2NoYXRkZXRhaWxzL2NoYXRkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRtaW4vY2hhdGRldGFpbHMvY2hhdGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURHQSxrREFBQTs7QUFHSTtFQUNJLGtCQUFBO0FDRlI7O0FER1E7RUFDSSxpQkFBQTtBQ0RaOztBREVZO0VBQ0kseUJBQUE7QUNBaEI7O0FERVk7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQWhCOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUNGUjs7QURJSTtFQUNJLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDRlI7O0FESUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZSOztBREdRO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQ0RaOztBREVZO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNBaEI7O0FESUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNGUjs7QURHUTtFQUNJLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNEWjs7QURHUTtFQUNJLFlBQUE7QUNEWjs7QURFWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQWhCOztBRElJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNGUjs7QURNQTtFQUNJLFlBQUE7QUNISjs7QURNQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNISjs7QURPSTtFQUNJLFdBQUE7RUFDQSw4QkFBQTtBQ0pSIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY2hhdGRldGFpbHMvY2hhdGRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtaW5wdXQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5cbi8qIENoYXQgVUkgdjIuMS4wIGJ5IEhpZXUgUGhhbTxtcl9oaWVAeWFob28uY29tPiAqL1xuXG4uY2hhdC1saXN0IHtcbiAgICAuY2hhdC1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAmLmNoYXQtaXRlbS1zZW5kZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAuY2hhdC1pdGVtLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hhdC1ib2R5IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jaGF0LXRpbWVzdGFtcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gICAgLmNoYXQtaXRlbS1zdGF0dXMge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuICAgIC5jaGF0LWl0ZW0tY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgLmNoYXQtYXZhdGFyIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNoYXQtaXRlbS1idWJibGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1heC13aWR0aDogNzUlO1xuICAgICAgICAuY2hhdC1ib2R5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgJi5idWJibGUtaW1hZ2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ4MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNoYXQtaXRlbS1yZWFjdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBmbGV4LWdyb3c6IDk5O1xuICAgIH1cbn1cblxuLnJpZ2h0IC5jaGF0LWF2YXRhciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucmlnaHQgLmNoYXQtaXRlbS1idWJibGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1heC13aWR0aDogODYlO1xufVxuXG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tY29udGVudC5yaWdodCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2tcbn1cblxuLnJpZ2h0IHtcbiAgICAuY2hhdC1ib2R5IHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NTkyZjAgIWltcG9ydGFudDtcbiAgICB9XG59IiwiLm1lc3NhZ2UtaW5wdXQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLyogQ2hhdCBVSSB2Mi4xLjAgYnkgSGlldSBQaGFtPG1yX2hpZUB5YWhvby5jb20+ICovXG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0uY2hhdC1pdGVtLXNlbmRlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLmNoYXQtaXRlbS1zZW5kZXIgLmNoYXQtaXRlbS1jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS5jaGF0LWl0ZW0tc2VuZGVyIC5jaGF0LWJvZHkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmNoYXQtbGlzdCAuY2hhdC10aW1lc3RhbXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tY29udGVudCAuY2hhdC1hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tY29udGVudCAuY2hhdC1hdmF0YXIgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA3NSU7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tYnViYmxlIC5jaGF0LWJvZHkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWJ1YmJsZS5idWJibGUtaW1hZ2Uge1xuICBmb250LXNpemU6IDA7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tYnViYmxlLmJ1YmJsZS1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1yZWFjdGlvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmbGV4LWdyb3c6IDk5O1xufVxuXG4ucmlnaHQgLmNoYXQtYXZhdGFyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucmlnaHQgLmNoYXQtaXRlbS1idWJibGUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWF4LXdpZHRoOiA4NiU7XG59XG5cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1jb250ZW50LnJpZ2h0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucmlnaHQgLmNoYXQtYm9keSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNDU5MmYwICFpbXBvcnRhbnQ7XG59Il19 */");

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