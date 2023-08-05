(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-chat-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/chat/chat.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/chat/chat.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border green\">\n\t<ion-toolbar>\n\t \n\t  <ion-title>Chats</ion-title>\n  \n\t</ion-toolbar>\n  \n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\t\n  \n\t<div class=\"chat-list\">\n\t  <ion-list>\n\t\t<ion-item *ngFor=\"let chatItems of listChats | keyvalue\" class=\"unread\" (click)=\"showChatDetails(chatItems.value.user)\">\n\t\t  <ion-avatar class=\"avatar-md has-status\" slot=\"start\">\n\t\t\t<img src=\"https://ui-avatars.com/api/?name={{ chatItems.value.name }}&color=7F9CF5&background=EBF4FF\" alt=\"\">\n\t\t\t<div class=\"avatar-status\">\n\t\t\t\t<ng-container *ngIf=\"chatItems.value.unseenMessage >= '1'\">\n\t\t\t\t\t<div class=\"online-status active\"></div>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t  </ion-avatar>\n\t\t  <ion-label>\n\t\t\t<h2 class=\"chat-name\" style=\"font-size: 20px;font-weight: 600;text-transform: capitalize;\">{{ chatItems.value.name }}</h2>\n\t\t\t<div class=\"chat-description\">\n\t\t\t  <div class=\"content-preview\">{{chatItems.value.unseenMessage}}{{chatItems.value.user}} {{ chatItems.value.last_message }} </div>\n\t\t\t</div>\n\t\t  </ion-label>\n\t\t</ion-item>\n\t\n\t  </ion-list>\n\t</div>\n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/admin/chat/chat-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/chat/chat-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function() { return ChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.page */ "./src/app/admin/chat/chat.page.ts");




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ "./src/app/admin/chat/chat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/admin/chat/chat-routing.module.ts");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/admin/chat/chat.page.ts");







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"]
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "./src/app/admin/chat/chat.page.scss":
/*!*******************************************!*\
  !*** ./src/app/admin/chat/chat.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".story-list {\n  height: 88px;\n  margin-left: 16px;\n  margin-bottom: 16px;\n}\n.story-list .scroll-item {\n  text-align: center;\n  margin-right: 16px;\n}\n.story-list .item-new {\n  width: 56px;\n  height: 56px;\n  text-align: center;\n  background-color: var(--ion-color-light);\n  border-radius: 99em;\n  padding-top: 10px;\n}\n.story-list .item-new ion-icon {\n  font-size: 36px;\n}\n.story-list .item-label {\n  font-size: 13px;\n  margin-top: 8px;\n}\n.chat-item {\n  margin-bottom: 12px;\n}\n.chat-item .chat-description {\n  font-size: 14px;\n  display: flex;\n}\n.chat-item .content-preview {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.chat-item .time-ago {\n  margin-left: 4px;\n}\n.chat-item .online-status.unread {\n  display: none;\n}\n.chat-item.unread .chat-name {\n  font-weight: 700;\n}\n.chat-item.unread .chat-description {\n  color: var(--ion-color-dark);\n  font-weight: 700;\n}\n.chat-item.unread .online-status.unread {\n  display: block;\n}\n.avatar-stacked {\n  position: relative;\n}\n.avatar-stacked img {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 40px;\n  height: 40px;\n}\n.avatar-stacked img:nth-child(2) {\n  z-index: 1;\n  top: 14px;\n  right: 14px;\n  width: 46px;\n  height: 46px;\n  border: 3px solid #fff;\n}\n.md body {\n  --ion-toolbar-background: #92B243 ;\n}\n.online-status.unread {\n  padding: 8px 5px;\n  color: white;\n  font-size: 12px;\n  width: auto;\n  height: auto;\n  min-width: 30px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9hZG1pbi9jaGF0L2NoYXQucGFnZS5zY3NzIiwic3JjL2FwcC9hZG1pbi9jaGF0L2NoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0NOO0FERUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQU47QURFTTtFQUNFLGVBQUE7QUNBUjtBRElJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNGTjtBRE1DO0VBQ0MsbUJBQUE7QUNIRjtBREtFO0VBQ0MsZUFBQTtFQUNBLGFBQUE7QUNISDtBRE1FO0VBQ0MsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSkg7QURPRTtFQUNDLGdCQUFBO0FDTEg7QURRRTtFQUNDLGFBQUE7QUNOSDtBRFVHO0VBQ0MsZ0JBQUE7QUNSSjtBRFdHO0VBQ0MsNEJBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEWUc7RUFDQyxjQUFBO0FDVko7QURlQztFQUNDLGtCQUFBO0FDWkY7QURjRTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1pIO0FEZUU7RUFDQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDYkg7QURnQkM7RUFDQyxrQ0FBQTtBQ2JGO0FEZ0JDO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDYkYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0b3J5LWxpc3Qge1xuICAgIGhlaWdodDogODhweDtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBcbiAgICAuc2Nyb2xsLWl0ZW0ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgXG4gICAgLml0ZW0tbmV3IHtcbiAgICAgIHdpZHRoOiA1NnB4O1xuICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5ZW07XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5pdGVtLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG4gIH1cbiAgXG5cdC5jaGF0LWl0ZW0ge1xuXHRcdG1hcmdpbi1ib3R0b206IDEycHg7XG5cdFxuXHRcdC5jaGF0LWRlc2NyaXB0aW9uIHtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0fVxuXHRcblx0XHQuY29udGVudC1wcmV2aWV3IHtcblx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0fVxuXHRcblx0XHQudGltZS1hZ28ge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDRweDtcblx0XHR9XG5cdFxuXHRcdC5vbmxpbmUtc3RhdHVzLnVucmVhZCB7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdH1cblx0XG5cdFx0Ji51bnJlYWQge1xuXHRcdFx0LmNoYXQtbmFtZSB7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHQuY2hhdC1kZXNjcmlwdGlvbiB7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHQub25saW5lLXN0YXR1cy51bnJlYWQge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdH1cblx0XHR9XG5cdH1cbiAgXG5cdC5hdmF0YXItc3RhY2tlZCB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcblx0XHRpbWcge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdGhlaWdodDogNDBweDtcblx0XHR9XG5cdFxuXHRcdGltZzpudGgtY2hpbGQoMikge1xuXHRcdFx0ei1pbmRleDogMTtcblx0XHRcdHRvcDogMTRweDtcblx0XHRcdHJpZ2h0OiAxNHB4O1xuXHRcdFx0d2lkdGg6IDQ2cHg7XG5cdFx0XHRoZWlnaHQ6IDQ2cHg7XG5cdFx0XHRib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuXHRcdH1cblx0fVxuXHQubWQgYm9keXtcblx0XHQtLWlvbi10b29sYmFyLWJhY2tncm91bmQgOiAjOTJCMjQzXG5cdH1cblxuXHQub25saW5lLXN0YXR1cy51bnJlYWR7XG5cdFx0cGFkZGluZzogOHB4IDVweDtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdHdpZHRoOiBhdXRvO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDMwcHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9IiwiLnN0b3J5LWxpc3Qge1xuICBoZWlnaHQ6IDg4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLnN0b3J5LWxpc3QgLnNjcm9sbC1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uc3RvcnktbGlzdCAuaXRlbS1uZXcge1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDk5ZW07XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnN0b3J5LWxpc3QgLml0ZW0tbmV3IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuLnN0b3J5LWxpc3QgLml0ZW0tbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmNoYXQtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uY2hhdC1pdGVtIC5jaGF0LWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNoYXQtaXRlbSAuY29udGVudC1wcmV2aWV3IHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2hhdC1pdGVtIC50aW1lLWFnbyB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4uY2hhdC1pdGVtIC5vbmxpbmUtc3RhdHVzLnVucmVhZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY2hhdC1pdGVtLnVucmVhZCAuY2hhdC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5jaGF0LWl0ZW0udW5yZWFkIC5jaGF0LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5jaGF0LWl0ZW0udW5yZWFkIC5vbmxpbmUtc3RhdHVzLnVucmVhZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYXZhdGFyLXN0YWNrZWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXZhdGFyLXN0YWNrZWQgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmF2YXRhci1zdGFja2VkIGltZzpudGgtY2hpbGQoMikge1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDE0cHg7XG4gIHJpZ2h0OiAxNHB4O1xuICB3aWR0aDogNDZweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xufVxuXG4ubWQgYm9keSB7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzkyQjI0MyA7XG59XG5cbi5vbmxpbmUtc3RhdHVzLnVucmVhZCB7XG4gIHBhZGRpbmc6IDhweCA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/chat/chat.page.ts":
/*!*****************************************!*\
  !*** ./src/app/admin/chat/chat.page.ts ***!
  \*****************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components.service */ "./src/app/components.service.ts");
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/rest.service */ "./src/app/rest.service.ts");





let ChatPage = class ChatPage {
    constructor(navCtrl, apiSer, compSer) {
        this.navCtrl = navCtrl;
        this.apiSer = apiSer;
        this.compSer = compSer;
    }
    ngOnInit() {
        // this.compSer.chatOpen.subscribe(() => {
        // 	this.apiSer.getChatPerson().then((res:any) => {
        // 		this.listChats = res.data;
        // 		// this.apiSer.loaderCtrl.dismiss();
        // 	});
        // });
    }
    ionViewDidEnter() {
        this.compSer.chatOpen.subscribe(() => {
            this.apiSer.getChatPerson().then((res) => {
                this.listChats = res.data;
                // this.apiSer.loaderCtrl.dismiss();
            });
        });
    }
    showChatDetails(userId) {
        this.compSer.chatOpen.next();
        localStorage.setItem('selectedChatUserId', userId);
        this.navCtrl.navigateForward(['admin/chatdetails', { id: userId }]);
    }
};
ChatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: src_app_components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"] }
];
ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/chat/chat.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.page.scss */ "./src/app/admin/chat/chat.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], src_app_components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]])
], ChatPage);



/***/ })

}]);
//# sourceMappingURL=admin-chat-chat-module-es2015.js.map