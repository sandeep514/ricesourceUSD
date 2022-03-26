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
/* harmony default export */ __webpack_exports__["default"] = (".story-list {\n  height: 88px;\n  margin-left: 16px;\n  margin-bottom: 16px;\n}\n.story-list .scroll-item {\n  text-align: center;\n  margin-right: 16px;\n}\n.story-list .item-new {\n  width: 56px;\n  height: 56px;\n  text-align: center;\n  background-color: var(--ion-color-light);\n  border-radius: 99em;\n  padding-top: 10px;\n}\n.story-list .item-new ion-icon {\n  font-size: 36px;\n}\n.story-list .item-label {\n  font-size: 13px;\n  margin-top: 8px;\n}\n.chat-item {\n  margin-bottom: 12px;\n}\n.chat-item .chat-description {\n  font-size: 14px;\n  display: flex;\n}\n.chat-item .content-preview {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.chat-item .time-ago {\n  margin-left: 4px;\n}\n.chat-item .online-status.unread {\n  display: none;\n}\n.chat-item.unread .chat-name {\n  font-weight: 700;\n}\n.chat-item.unread .chat-description {\n  color: var(--ion-color-dark);\n  font-weight: 700;\n}\n.chat-item.unread .online-status.unread {\n  display: block;\n}\n.avatar-stacked {\n  position: relative;\n}\n.avatar-stacked img {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 40px;\n  height: 40px;\n}\n.avatar-stacked img:nth-child(2) {\n  z-index: 1;\n  top: 14px;\n  right: 14px;\n  width: 46px;\n  height: 46px;\n  border: 3px solid #fff;\n}\n.md body {\n  --ion-toolbar-background: #92B243 ;\n}\n.online-status.unread {\n  padding: 8px 5px;\n  color: white;\n  font-size: 12px;\n  width: auto;\n  height: auto;\n  min-width: 30px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9yaWNlX21vYmlsZS9zcmMvYXBwL2FkbWluL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkbWluL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDQ047QURFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBTjtBREVNO0VBQ0UsZUFBQTtBQ0FSO0FESUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0ZOO0FETUM7RUFDQyxtQkFBQTtBQ0hGO0FES0U7RUFDQyxlQUFBO0VBQ0EsYUFBQTtBQ0hIO0FETUU7RUFDQyx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNKSDtBRE9FO0VBQ0MsZ0JBQUE7QUNMSDtBRFFFO0VBQ0MsYUFBQTtBQ05IO0FEVUc7RUFDQyxnQkFBQTtBQ1JKO0FEV0c7RUFDQyw0QkFBQTtFQUNBLGdCQUFBO0FDVEo7QURZRztFQUNDLGNBQUE7QUNWSjtBRGVDO0VBQ0Msa0JBQUE7QUNaRjtBRGNFO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWkg7QURlRTtFQUNDLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNiSDtBRGdCQztFQUNDLGtDQUFBO0FDYkY7QURnQkM7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNiRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvcnktbGlzdCB7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIFxuICAgIC5zY3JvbGwtaXRlbSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuICBcbiAgICAuaXRlbS1uZXcge1xuICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOTllbTtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLml0ZW0tbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cbiAgfVxuICBcblx0LmNoYXQtaXRlbSB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcblx0XG5cdFx0LmNoYXQtZGVzY3JpcHRpb24ge1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHR9XG5cdFxuXHRcdC5jb250ZW50LXByZXZpZXcge1xuXHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHR9XG5cdFxuXHRcdC50aW1lLWFnbyB7XG5cdFx0XHRtYXJnaW4tbGVmdDogNHB4O1xuXHRcdH1cblx0XG5cdFx0Lm9ubGluZS1zdGF0dXMudW5yZWFkIHtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0fVxuXHRcblx0XHQmLnVucmVhZCB7XG5cdFx0XHQuY2hhdC1uYW1lIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdH1cblx0XHRcblx0XHRcdC5jaGF0LWRlc2NyaXB0aW9uIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdH1cblx0XHRcblx0XHRcdC5vbmxpbmUtc3RhdHVzLnVucmVhZCB7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuICBcblx0LmF2YXRhci1zdGFja2VkIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFxuXHRcdGltZyB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdH1cblx0XG5cdFx0aW1nOm50aC1jaGlsZCgyKSB7XG5cdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0dG9wOiAxNHB4O1xuXHRcdFx0cmlnaHQ6IDE0cHg7XG5cdFx0XHR3aWR0aDogNDZweDtcblx0XHRcdGhlaWdodDogNDZweDtcblx0XHRcdGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG5cdFx0fVxuXHR9XG5cdC5tZCBib2R5e1xuXHRcdC0taW9uLXRvb2xiYXItYmFja2dyb3VuZCA6ICM5MkIyNDNcblx0fVxuXG5cdC5vbmxpbmUtc3RhdHVzLnVucmVhZHtcblx0XHRwYWRkaW5nOiA4cHggNXB4O1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0d2lkdGg6IGF1dG87XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1pbi13aWR0aDogMzBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH0iLCIuc3RvcnktbGlzdCB7XG4gIGhlaWdodDogODhweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uc3RvcnktbGlzdCAuc2Nyb2xsLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5zdG9yeS1saXN0IC5pdGVtLW5ldyB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogOTllbTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uc3RvcnktbGlzdCAuaXRlbS1uZXcgaW9uLWljb24ge1xuICBmb250LXNpemU6IDM2cHg7XG59XG4uc3RvcnktbGlzdCAuaXRlbS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uY2hhdC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5jaGF0LWl0ZW0gLmNoYXQtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2hhdC1pdGVtIC5jb250ZW50LXByZXZpZXcge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jaGF0LWl0ZW0gLnRpbWUtYWdvIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5jaGF0LWl0ZW0gLm9ubGluZS1zdGF0dXMudW5yZWFkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jaGF0LWl0ZW0udW5yZWFkIC5jaGF0LW5hbWUge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmNoYXQtaXRlbS51bnJlYWQgLmNoYXQtZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmNoYXQtaXRlbS51bnJlYWQgLm9ubGluZS1zdGF0dXMudW5yZWFkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hdmF0YXItc3RhY2tlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdmF0YXItc3RhY2tlZCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uYXZhdGFyLXN0YWNrZWQgaW1nOm50aC1jaGlsZCgyKSB7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMTRweDtcbiAgcmlnaHQ6IDE0cHg7XG4gIHdpZHRoOiA0NnB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG59XG5cbi5tZCBib2R5IHtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjOTJCMjQzIDtcbn1cblxuLm9ubGluZS1zdGF0dXMudW5yZWFkIHtcbiAgcGFkZGluZzogOHB4IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi13aWR0aDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

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
        // this.apiSer.presentLoader("Fetching latest chat...");     
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