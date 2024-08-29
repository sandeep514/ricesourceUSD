function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mybids-mybids-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/mybids/mybids.page.html": (
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mybids/mybids.page.html ***!
    \*******************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMybidsMybidsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header class=\"\">\n\t<ion-toolbar mode=\"ios\" style=\"background: transparent; --background: transparent\">\n\t\t<ion-buttons slot=\"start\" class=\"back-button\" (click)=\"back()\">\n\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"header-title porttitle\">Bids</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content id=\"content\" class=\"\" style=\"height: 100%;\">\n\t<div style=\"height: 90%;overflow: scroll;\">\n\t\t<div>\n\t\t\t<ul style=\"padding: 10px;\">\n\t\t\t\t<li *ngFor=\"let bids of mybids\" class=\"demandedData\" style=\"border-bottom: 2px solid #ededed;\">\n\t\t\t\t\t<div style=\"margin: 0;padding: 15px 0px;\">\n\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Bid no.</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\tBid_{{ (bids.id + 1) }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Rice</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">\n\t\t\t\t\t\t\t\t\t{{ bids.qualityName }} <ng-container *ngIf=\"bids.qualityType != 'NON-BASMATI' \"> {{\n\t\t\t\t\t\t\t\t\t\tbids.qualityType | titlecase }} </ng-container>Rice\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<!-- <ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Specifications:</ion-col> \n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">length - 8.30mm+</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">moisture - 12-13%</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">Broken - under 1%</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">Purity - 95%</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">D.D - under 1%</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">Kett - 33</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row> -->\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Quantity MT</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">{{ bids.quantity}}</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Packing</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">{{ bids.get_packing_type.bag_size }} {{\n\t\t\t\t\t\t\t\t\tbids.get_packing_type.bag_type }}</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Port</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 25px\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">{{ bids.portName }}</div>\n\t\t\t\t\t\t\t</ion-col>\n\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<ion-row *ngIf=\"bids.remarks != null && bids.remarks != '' \">\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Remarks</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 100%\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">{{ bids.remarks }}</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row\n\t\t\t\t\t\t\t*ngIf=\"bids?.length != '' && bids?.length != 0 && bids?.length != null || bids?.length != '' && bids?.length != 0 && bids?.length != null || bids?.purity != '' && bids?.purity != 0 && bids?.purity != null || bids?.moisture != '' && bids?.moisture != 0 && bids?.moisture != null || bids?.broken != '' && bids?.broken != 0 && bids?.broken != null || bids?.kett != '' && bids?.kett != 0 && bids?.kett != null || bids?.dd != '' && bids?.dd != 0 && bids?.dd != null\">\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Parameters</ion-col>\n\t\t\t\t\t\t\t<ion-col class=\"demandHeaders\" style=\"text-transform: capitalize;\">Specifications</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row *ngIf=\"bids?.length != null && bids?.length != ''\">\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Length</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 100%\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">{{ bids.length}}</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row *ngIf=\"bids?.purity != null && bids?.purity != ''\">\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Purity</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 100%\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">{{ bids.purity}}</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row *ngIf=\"bids?.moisture != null && bids?.moisture != ''\">\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Moisture</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 100%\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">{{ bids.moisture}}</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row *ngIf=\"bids?.broken != null && bids?.broken != ''\">\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Broken</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 100%\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">{{ bids.broken}}</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row *ngIf=\"bids?.kett != null && bids?.kett != ''\">\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Kett</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 100%\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">{{ bids.kett}}</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ion-row *ngIf=\"bids?.dd != null && bids?.dd != ''\">\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">DD</ion-col>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<div style=\"float: left;width: 10px;margin: 0px;height: 100%\">:</div>\n\t\t\t\t\t\t\t\t<div style=\"margin: 0px\">{{ bids.dd}}</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<!-- <ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"demandHeaders\">Valid Date</ion-col> \n\t\t\t\t\t\t\t<ion-col>: {{ bids.validDate | date :  'M/d/yyyy' }}</ion-col>\n\t\t\t\t\t\t</ion-row> -->\n\n\n\t\t\t\t\t\t<ion-row *ngIf=\"bids?.get_bids.length\" style=\"margin-top: 5px;text-align: center;\">\n\n\t\t\t\t\t\t\t<ion-row\n\t\t\t\t\t\t\t\t*ngIf=\"bids?.user_bid_amount && bids?.get_bids_extra.length == 0 && bids?.my_bid_expired == 'false' && bids?.status != 2 \"\n\t\t\t\t\t\t\t\tstyle=\"width: 100%;\">\n\t\t\t\t\t\t\t\t<div style=\"font-size: 13px;width: 100%;\">\n\t\t\t\t\t\t\t\t\tYour offer <span class=\"demandHeaders\" style=\"font-size: 13px;\">${{\n\t\t\t\t\t\t\t\t\t\tbids?.get_bids[0].bid_amount }} </span> PMT validity <span class=\"demandHeaders\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 13px;\">{{ bids?.get_bids[0].validTill | date: 'dd/MM/yyyy' }}\n\t\t\t\t\t\t\t\t\t\t18:00 IST</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t<ion-row\n\t\t\t\t\t\t\t\t*ngIf=\"bids?.is_bid_accepted_by_me == 'pending' && bids?.get_bids[0].accept_status == null && bids?.status != 2 \"\n\t\t\t\t\t\t\t\tstyle=\"border: 2px solid #93b243;padding: 10px;text-align: center;align-items: center;justify-content: center;margin-top: 10px;\">\n\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t\tBuyer's counter offer ${{bids?.user_bid_amount}}\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-button class=\"green\" style=\"color: #fff;border-radius: 12px;\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"accept( bids?.get_bids[0].id )\">Interested</ion-button>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-button class=\"red\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: #fff;border-radius: 12px;--background: red;--background-color: red;\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"reject( bids?.get_bids[0].id  )\">Decline</ion-button>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t<ion-row *ngIf=\"bids?.get_bids_extra.length > 0 && bids?.is_accepted_by_admin == 'true' \"\n\t\t\t\t\t\t\t\tstyle=\"border: 2px solid #93b243;padding: 10px;text-align: center;align-items: center;justify-content: center;margin-top: 10px;width: 100%;\">\n\t\t\t\t\t\t\t\t<span class=\"demandHeaders\">CONGRATULATIONS,</span> Your offer has been accepted.\n\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t<ion-row *ngIf=\"bids?.is_bid_closed == 'true' && bids?.get_bids_extra.length > 0\"\n\t\t\t\t\t\t\t\tstyle=\"border: 2px solid #93b243;padding: 10px;text-align: center;align-items: center;justify-content: center;margin-top: 10px;width: 100%;\">\n\t\t\t\t\t\t\t\tThe Deal has been closed @ ${{bids?.bid_closed_amount}}\n\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t<ion-row *ngIf=\"bids?.is_bid_accepted_by_me == 'true' \"\n\t\t\t\t\t\t\t\tstyle=\"border: 2px solid #93b243;padding: 10px;text-align: center;align-items: center;justify-content: center;margin-top: 10px;width: 100%;\">\n\t\t\t\t\t\t\t\t<span class=\"demandHeaders\">CONGRATULATIONS,</span> Your offer has been closed @ <span\n\t\t\t\t\t\t\t\t\tclass=\"demandHeaders\">${{bids?.user_bid_amount}}</span>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t*ngIf=\"bids?.get_bids_extra.length > 0 && bids?.is_accepted_by_admin != 'true'\">\n\t\t\t\t\t\t\t\t<ion-row *ngIf=\"bids?.is_bid_accepted_by_me == 'true' \"\n\t\t\t\t\t\t\t\t\tstyle=\"border: 2px solid #93b243;padding: 10px;text-align: center;align-items: center;justify-content: center;margin-top: 10px;width: 100%;\">\n\t\t\t\t\t\t\t\t\t<span class=\"demandHeaders\"></span> Thanks for showing the interest in counter\n\t\t\t\t\t\t\t\t\toffer.Team SNTC will confirm you shortly <span\n\t\t\t\t\t\t\t\t\t\tclass=\"demandHeaders\">${{bids?.user_bid_amount}}</span>\n\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t</ng-container>\n\n\n\t\t\t\t\t\t\t<ion-row *ngIf=\"bids?.is_bid_accepted_by_me == 'false' \"\n\t\t\t\t\t\t\t\tstyle=\"border: 2px solid #93b243;padding: 10px;text-align: center;align-items: center;justify-content: center;margin-top: 10px;width: 100%;color: red;\">\n\t\t\t\t\t\t\t\tYou have declined counter offer of ${{bids?.user_bid_amount}}\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t<ng-container *ngIf=\"bids?.get_bids.length > 0\">\n\t\t\t\t\t\t\t<ng-container *ngIf=\"bids?.get_bids[0].status == 0\">\n\t\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t\t*ngIf=\"bids?.get_bids_extra.length == 0 && bids?.is_accepted_by_admin != 'true' && bids?.my_bid_expired == 'true' &&  bids?.status != 2 && bids?.is_bid_accepted_by_me != 'false'  && bids?.status != 2 \">\n\t\t\t\t\t\t\t\t\t<div style=\"padding: 0;margin: 0;text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../../assets/STAMP EXPIRED.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ng-container>\n\n\n\n\t\t\t\t\t\t<ng-container *ngIf=\"bids?.get_bids.length == 0\">\n\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t*ngIf=\"bids?.is_expired == 'true' && bids?.get_bids_extra.length == 0 && bids?.is_bid_accepted_by_me != 'false' && bids?.is_bid_closed != 'true' && bids?.is_accepted_by_admin != 'true' && bids?.status != 2 \">\n\t\t\t\t\t\t\t\t<div style=\"padding: 0;margin: 0;text-align: center;\">\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/STAMP EXPIRED.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ng-container>\n\n\n\t\t\t\t\t\t<!-- <ng-container *ngIf=\"bids?.is_expired == 'true' && bids?.get_bids_extra.length == 0 && bids?.is_bid_accepted_by_me != 'false' && bids?.is_bid_accepted_by_me != 'true' && bids?.is_bid_closed != 'true' && bids?.is_accepted_by_admin != 'true'  \">\n\t\t\t\t\t\t\t<div style=\"padding: 0;margin: 0;text-align: center;\">\n\t\t\t\t\t\t\t\t<img src=\"../../assets/STAMP EXPIRED.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t\t\texpired 2\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container> -->\n\n\t\t\t\t\t\t<ng-container *ngIf=\"bids?.status == 2 \">\n\t\t\t\t\t\t\t<div style=\"padding: 0;margin: 0;text-align: center;\">\n\t\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<ng-container *ngIf=\"bids?.status != 2 \">\n\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t*ngIf=\"bids?.get_bids_extra.length > 0 && bids?.is_accepted_by_admin != 'true' \">\n\t\t\t\t\t\t\t\t<div style=\"padding: 0;margin: 0;text-align: center;\">\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/STAMP SOLD.png\" style=\"width: 100px;\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ng-container>\n\n\n\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t*ngIf=\" bids?.get_bids_extra.length == 0 && bids?.is_accepted_by_admin != 'true'  \">\n\t\t\t\t\t\t\t<ng-container *ngIf=\"bids?.is_expired == 'false' && bids?.status != 2 \">\n\t\t\t\t\t\t\t\t<ion-row *ngIf=\"bids?.get_bids.length <= 0 \" style=\"margin-top: 5px\">\n\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 10;border-radius: 10;border: 2px solid #92b243;border-radius: 12px;width: 70%\">\n\t\t\t\t\t\t\t\t\t\t<div style=\"float: left;padding: 0px 10px;margin-top: 23px;font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t$\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"float: left;border-bottom: 2px solid #92b243;margin: 0px;padding: 0px;padding-top: 2px !important;;width: 35%\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Place your offer</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t<ion-input (ionChange)=\"yourbidfunction($event , bids.id)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"--padding-top: 0px;--padding-bottom: 0px;\"></ion-input>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div style=\"float: left;padding: 0px 10px;margin-top: 23px;font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPMT\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t\t<ion-row *ngIf=\"bids?.get_bids.length <= 0\"\n\t\t\t\t\t\t\t\t\tstyle=\"margin-top: 5px;margin-bottom: 10px;\">\n\t\t\t\t\t\t\t\t\t<ion-item style=\"width: 70%\">\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Validity</ion-label>\n\t\t\t\t\t\t\t\t\t\t<!-- <ion-input (ionChange)=\"validDays($event , bids.id)\" type=\"number\"></ion-input> -->\n\t\t\t\t\t\t\t\t\t\t<ion-datetime displayFormat=\"DD MMMM YYYY\" presentation=\"date\" [min]=\"mindate\"\n\t\t\t\t\t\t\t\t\t\t\t[max]=\"lastDate\" (ionChange)=\"changed($event)\"\n\t\t\t\t\t\t\t\t\t\t\taria-placeholder=\"here\"></ion-datetime>\n\t\t\t\t\t\t\t\t\t\t<!-- [(ngModel)]=mindate -->\n\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t\t<ion-button class=\"green\" style=\"color: #fff;border-radius: 12px;\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"saveUserBid(bids.id)\">Save</ion-button>\n\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<app-menu></app-menu>\n</ion-content>";

    /***/
  }),
  /***/"./src/app/mybids/mybids-routing.module.ts": (
  /*!*************************************************!*\
    !*** ./src/app/mybids/mybids-routing.module.ts ***!
    \*************************************************/
  /*! exports provided: MybidsPageRoutingModule */
  /***/
  function srcAppMybidsMybidsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MybidsPageRoutingModule", function () {
      return MybidsPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _mybids_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./mybids.page */"./src/app/mybids/mybids.page.ts");
    var routes = [{
      path: '',
      component: _mybids_page__WEBPACK_IMPORTED_MODULE_3__["MybidsPage"]
    }];
    var MybidsPageRoutingModule = /*#__PURE__*/_createClass(function MybidsPageRoutingModule() {
      _classCallCheck(this, MybidsPageRoutingModule);
    });
    MybidsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MybidsPageRoutingModule);

    /***/
  }),
  /***/"./src/app/mybids/mybids.module.ts": (
  /*!*****************************************!*\
    !*** ./src/app/mybids/mybids.module.ts ***!
    \*****************************************/
  /*! exports provided: MybidsPageModule */
  /***/
  function srcAppMybidsMybidsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MybidsPageModule", function () {
      return MybidsPageModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _mybids_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./mybids-routing.module */"./src/app/mybids/mybids-routing.module.ts");
    /* harmony import */
    var _mybids_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./mybids.page */"./src/app/mybids/mybids.page.ts");
    /* harmony import */
    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../components/components.module */"./src/app/components/components.module.ts");
    var MybidsPageModule = /*#__PURE__*/_createClass(function MybidsPageModule() {
      _classCallCheck(this, MybidsPageModule);
    });
    MybidsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mybids_routing_module__WEBPACK_IMPORTED_MODULE_5__["MybidsPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_mybids_page__WEBPACK_IMPORTED_MODULE_6__["MybidsPage"]]
    })], MybidsPageModule);

    /***/
  }),
  /***/"./src/app/mybids/mybids.page.scss": (
  /*!*****************************************!*\
    !*** ./src/app/mybids/mybids.page.scss ***!
    \*****************************************/
  /*! exports provided: default */
  /***/
  function srcAppMybidsMybidsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".tf-tree.example {\n  text-align: center;\n}\n\n.back-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #FFF;\n}\n\n.back-button ion-icon {\n  font-size: 23px;\n}\n\nion-toolbar {\n  --background: #494f58;\n  color: #FFF;\n}\n\n.header-title {\n  color: #FFF;\n}\n\n.header-md::after {\n  background: none;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-toolbar ion-icon {\n  color: #000;\n}\n\n.header-title {\n  color: #000;\n}\n\nion-title {\n  padding: 0;\n  text-align: center;\n}\n\n.ion-card {\n  width: 900px;\n}\n\nion-card {\n  width: 17%;\n  text-align: center;\n  float: left;\n}\n\n.tf-tree {\n  clear: both;\n}\n\n.ioncard1 {\n  background: #d8f9fe;\n}\n\n.ioncard2 {\n  background: #d8f9fe;\n}\n\n.ioncard3 {\n  background: #d8f9fe;\n}\n\n.ioncard4 {\n  background: #d8f9fe;\n}\n\n.ioncard5 {\n  background: #d8f9fe;\n}\n\ntable,\nthead,\ntbody {\n  border: 1px solid #eeeeee;\n}\n\ntable {\n  width: 100%;\n}\n\ntable thead th {\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\ntable tbody tr {\n  border-bottom: 1px solid #ededed;\n}\n\ntable tbody td {\n  width: 50%;\n  text-align: center;\n  padding: 10px 0px;\n  border-right: 1px solid #eeeeee;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.active {\n  background: #c9a27c;\n  --background: #c9a27c;\n  background-color: #c9a27c;\n  --background-color: #c9a27c;\n}\n\n.price-table table {\n  width: 100%;\n  margin-top: 6px;\n}\n\n.price-table table thead tr {\n  height: 34px;\n  font-size: 12px;\n}\n\n.price-table table thead tr th {\n  border-right: 1px solid #dfdfdf;\n}\n\n.price-table table tbody tr {\n  height: 35px;\n}\n\n.price-table table tbody tr td {\n  font-size: 16px;\n  border-right: 1px solid #dfdfdf;\n}\n\ntable,\ntable thead,\ntable tbody,\ntable thead th,\ntable tbody tr,\ntable tbody tr td {\n  border: 0 !important;\n}\n\ntable thead,\ntable tbody,\ntable tbody tr {\n  background: transparent !important;\n  background-color: transparent !important;\n}\n\ntable thead tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tbody tr {\n  border-bottom: 2px solid #cfcaab !important;\n}\n\ntable tr th {\n  padding: 0;\n  margin: 0;\n}\n\ntable tbody tr td {\n  text-align: left;\n  margin-left: 20px;\n  padding-left: 20px;\n}\n\n.pl-60 {\n  padding-left: 60px !important;\n}\n\n.pl-10 {\n  padding-left: 10px !important;\n}\n\n.left {\n  text-align: left;\n}\n\n.active {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.segment-button-checked {\n  background: #92B243;\n  color: white !important;\n  border: 2px solid #92B243 !important;\n}\n\n.scroll-arrow {\n  position: absolute;\n  margin-top: 3.2%;\n  width: 100%;\n  padding-top: 4px;\n  font-size: 18px;\n}\n\n.header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 0px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.ios .header-segment ion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 0px;\n  border-radius: 5px;\n  min-height: 31px;\n  margin-left: 2px;\n  margin-right: 2px;\n  width: auto;\n  --width: auto;\n  min-width: auto;\n  --min-width: auto;\n  color: #000;\n  font-size: 12px;\n  border: 2px solid #92b243;\n}\n\n.header-ios ion-toolbar {\n  border: 0px;\n  --border-width: 0px ;\n}\n\n.ios .type-columns {\n  border: 0px solid transparent !important;\n  --border: 0px solid transparent !important;\n}\n\n.scroll-arrow .lefticon {\n  position: absolute;\n  left: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.scroll-arrow .righticon {\n  position: absolute;\n  right: 10px;\n  z-index: 999999;\n  color: #000;\n  padding: 2px;\n  width: 18px;\n  top: 0px;\n}\n\n.basmatiState {\n  margin: 10px 30px 0px 30px;\n}\n\n.ricetype {\n  color: #000;\n  font-size: 30px;\n  font-family: GlacialIndifference-bold;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.font-17 {\n  font-size: 14px;\n  font-family: GlacialIndifference-bold;\n}\n\n.green {\n  color: #92B243;\n}\n\n.green td {\n  text-transform: capitalize;\n  font-size: 18px !important;\n}\n\n.porttitle {\n  font-size: 20px;\n}\n\nion-segment ion-segment-button ion-label {\n  margin: 0;\n  padding: 0;\n  margin-top: -2px;\n}\n\n.imageprev {\n  min-height: 200px;\n  max-height: 200px;\n  height: 200px;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.paddingBottom100 {\n  padding-bottom: 100px;\n}\n\n.item-ionic-selectable {\n  border: 2px solid #92b243;\n  border-radius: 10px;\n}\n\n.item-ionic-selectable .item-native {\n  background-color: transparent;\n  --background-color: transparent;\n  background: transparent;\n  --background: transparent;\n}\n\n.demandHeaders {\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.demandedData p {\n  padding: 0;\n  margin: 0;\n}\n\n.demandedData div {\n  margin-bottom: 20px;\n}\n\nion-item {\n  width: 47%;\n  float: left;\n  margin-right: 10px;\n  border: 2px solid #92b243;\n  border-radius: 12px;\n  background: transparent !important;\n  background-color: transparent !important;\n  --background: transparent !important;\n  --background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGV0YW4vRGVza3RvcC9vZmZpY2UvbW9iaWxlL3JpY2Vzb3VyY2VVU0Qvc3JjL2FwcC9teWJpZHMvbXliaWRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXliaWRzL215Ymlkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURBSTtFQUNJLGVBQUE7QUNFUjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQUk7RUFDSSxXQUFBO0FDRVI7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBOzs7RUFHSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBRENRO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtBQ0NaOztBREdRO0VBQ0ksZ0NBQUE7QUNEWjs7QURHUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNEWjs7QURNQTtFQUNJLDBCQUFBO0FDSEo7O0FETUE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ0hKOztBRFFJO0VBQ0ksV0FBQTtFQXVCQSxlQUFBO0FDM0JSOztBRE1ZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNKaEI7O0FETWdCO0VBRUksK0JBQUE7QUNMcEI7O0FEVVk7RUFDSSxZQUFBO0FDUmhCOztBRFNnQjtFQUNJLGVBQUE7RUFHQSwrQkFBQTtBQ1RwQjs7QURpQkE7Ozs7OztFQU1JLG9CQUFBO0FDZEo7O0FEaUJBOzs7RUFHSSxrQ0FBQTtFQUNBLHdDQUFBO0FDZEo7O0FEZ0JBO0VBQ0ksMkNBQUE7QUNiSjs7QURlQTtFQUNJLDJDQUFBO0FDWko7O0FEZUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ1pKOztBRGtCWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2ZoQjs7QURxQkE7RUFDSSw2QkFBQTtBQ2xCSjs7QURxQkE7RUFDSSw2QkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxnQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUNsQko7O0FEcUJBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0FDbEJKOztBRHFCQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLHlDQUFBO0VBQ0EsaURBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEc0JBO0VBQ0kseUNBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ3JCSjs7QUR1QkE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUNwQko7O0FEdUJJO0VBQ0ksd0NBQUE7RUFDQSwwQ0FBQTtBQ3BCUjs7QUR3QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsUUFBQTtBQ3RCSjs7QUR5QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsUUFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSwwQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxlQUFBO0VBQ0EscUNBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksY0FBQTtBQ3ZCSjs7QUR3Qkk7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0FDdEJSOztBRDBCQTtFQUNJLGVBQUE7QUN2Qko7O0FENEJRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ3pCWjs7QUQ4QkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQzNCSjs7QUQ4QkE7RUFDSSxhQUFBO0FDM0JKOztBRDhCQTtFQUNJLGNBQUE7QUMzQko7O0FEOEJBO0VBQ0kscUJBQUE7QUMzQko7O0FEK0JBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQzVCSjs7QUQ2Qkk7RUFDSSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQzNCUjs7QUQ4QkE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUMzQko7O0FEOEJJO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUMzQlI7O0FENkJJO0VBQ0ksbUJBQUE7QUMzQlI7O0FEOEJBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBQzNCSiIsImZpbGUiOiJzcmMvYXBwL215Ymlkcy9teWJpZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRmLXRyZWUuZXhhbXBsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICB9XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0OTRmNTg7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG5pb24tdGl0bGUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW9uLWNhcmQge1xuICAgIHdpZHRoOiA5MDBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIHdpZHRoOiAxNyU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udGYtdHJlZSB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5pb25jYXJkMSB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDMge1xuICAgIGJhY2tncm91bmQ6ICNkOGY5ZmU7XG59XG5cbi5pb25jYXJkNCB7XG4gICAgYmFja2dyb3VuZDogI2Q4ZjlmZTtcbn1cblxuLmlvbmNhcmQ1IHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG50YWJsZSxcbnRoZWFkLFxudGJvZHkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0aGVhZCB7XG4gICAgICAgIHRoIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0Ym9keSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xuICAgICAgICB9XG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWVlZWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2M5YTI3YztcbiAgICAtLWJhY2tncm91bmQ6ICNjOWEyN2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3YztcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNjOWEyN2M7XG59XG5cbi5wcmljZS10YWJsZSB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG59XG5cbnRhYmxlLFxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRoZWFkIHRoLFxudGFibGUgdGJvZHkgdHIsXG50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnRcbn1cblxudGFibGUgdGhlYWQsXG50YWJsZSB0Ym9keSxcbnRhYmxlIHRib2R5IHRyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG50YWJsZSB0aGVhZCB0cntcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxudGFibGUgdGJvZHkgdHJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbn1cblxudGFibGUgdHIgdGgge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG50YWJsZSB7XG4gICAgdGJvZHkge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wbC02MCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0xMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTJCMjQzO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzkyQjI0MyAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMy4yJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAvLyBib3gtc2hhZG93OiAtMXB4IDFweCA5cHggMHB4ICNDQ0M7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgLS13aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgLS1taW4td2lkdGg6IGF1dG87XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG4uaW9zIC5oZWFkZXItc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtaW4taGVpZ2h0OiAzMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgLy8gYm94LXNoYWRvdzogLTFweCAxcHggOXB4IDBweCAjQ0NDO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIC0td2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIC0tbWluLXdpZHRoOiBhdXRvO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xufVxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJ7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweFxufVxuLmlvc3tcbiAgICAudHlwZS1jb2x1bW5ze1xuICAgICAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uc2Nyb2xsLWFycm93IC5sZWZ0aWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIHRvcDogMHB4O1xufVxuXG4uc2Nyb2xsLWFycm93IC5yaWdodGljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgdG9wOiAwcHg7XG59XG5cbi5iYXNtYXRpU3RhdGUge1xuICAgIG1hcmdpbjogMTBweCAzMHB4IDBweCAzMHB4O1xufVxuXG4ucmljZXR5cGUge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogR2xhY2lhbEluZGlmZmVyZW5jZS1ib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC0xNyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBHbGFjaWFsSW5kaWZmZXJlbmNlLWJvbGQ7XG59XG5cbi5ncmVlbiB7XG4gICAgY29sb3I6ICM5MkIyNDM7XG4gICAgdGQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ucG9ydHRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHhcbn0gICBcblxuaW9uLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmltYWdlcHJldiB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZGRpbmdCb3R0b20xMDAge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuXG4uaXRlbS1pb25pYy1zZWxlY3RhYmxle1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAuaXRlbS1uYXRpdmV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG4uZGVtYW5kSGVhZGVyc3tcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uZGVtYW5kZWREYXRhe1xuICAgIHB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgZGl2e1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn1cbmlvbi1pdGVte1xuICAgIHdpZHRoOiA0NyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0iLCIudGYtdHJlZS5leGFtcGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5iYWNrLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM0OTRmNTg7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW9uLXRvb2xiYXIgaW9uLWljb24ge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5pb24tdGl0bGUge1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pb24tY2FyZCB7XG4gIHdpZHRoOiA5MDBweDtcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogMTclO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udGYtdHJlZSB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uaW9uY2FyZDEge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDIge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDMge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDQge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG4uaW9uY2FyZDUge1xuICBiYWNrZ3JvdW5kOiAjZDhmOWZlO1xufVxuXG50YWJsZSxcbnRoZWFkLFxudGJvZHkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGFibGUgdGhlYWQgdGgge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbn1cbnRhYmxlIHRib2R5IHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG59XG50YWJsZSB0Ym9keSB0ZCB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWVlZWU7XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjYzlhMjdjO1xuICAtLWJhY2tncm91bmQ6ICNjOWEyN2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWEyN2M7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2M5YTI3Yztcbn1cblxuLnByaWNlLXRhYmxlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0aGVhZCB0ciB7XG4gIGhlaWdodDogMzRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnByaWNlLXRhYmxlIHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB7XG4gIGhlaWdodDogMzVweDtcbn1cbi5wcmljZS10YWJsZSB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cblxudGFibGUsXG50YWJsZSB0aGVhZCxcbnRhYmxlIHRib2R5LFxudGFibGUgdGhlYWQgdGgsXG50YWJsZSB0Ym9keSB0cixcbnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHksXG50YWJsZSB0Ym9keSB0ciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRoZWFkIHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNhYWIgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGJvZHkgdHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NmY2FhYiAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0ciB0aCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxudGFibGUgdGJvZHkgdHIgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ucGwtNjAge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLnBsLTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM5MkIyNDM7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJCMjQzICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzkyQjI0MztcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MkIyNDMgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMy4yJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtaW4taGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgd2lkdGg6IGF1dG87XG4gIC0td2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogYXV0bztcbiAgLS1taW4td2lkdGg6IGF1dG87XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG5cbi5pb3MgLmhlYWRlci1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4taGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgd2lkdGg6IGF1dG87XG4gIC0td2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogYXV0bztcbiAgLS1taW4td2lkdGg6IGF1dG87XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgYm9yZGVyOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggO1xufVxuXG4uaW9zIC50eXBlLWNvbHVtbnMge1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGwtYXJyb3cgLmxlZnRpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxOHB4O1xuICB0b3A6IDBweDtcbn1cblxuLnNjcm9sbC1hcnJvdyAucmlnaHRpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogOTk5OTk5O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMnB4O1xuICB3aWR0aDogMThweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5iYXNtYXRpU3RhdGUge1xuICBtYXJnaW46IDEwcHggMzBweCAwcHggMzBweDtcbn1cblxuLnJpY2V0eXBlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IEdsYWNpYWxJbmRpZmZlcmVuY2UtYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC0xNyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IEdsYWNpYWxJbmRpZmZlcmVuY2UtYm9sZDtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6ICM5MkIyNDM7XG59XG4uZ3JlZW4gdGQge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wb3J0dGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi5pbWFnZXByZXYge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZGRpbmdCb3R0b20xMDAge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbi5pdGVtLWlvbmljLXNlbGVjdGFibGUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTJiMjQzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLml0ZW0taW9uaWMtc2VsZWN0YWJsZSAuaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5kZW1hbmRIZWFkZXJzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmRlbWFuZGVkRGF0YSBwIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmRlbWFuZGVkRGF0YSBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIHdpZHRoOiA0NyU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MmIyNDM7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/mybids/mybids.page.ts": (
  /*!***************************************!*\
    !*** ./src/app/mybids/mybids.page.ts ***!
    \***************************************/
  /*! exports provided: MybidsPage */
  /***/
  function srcAppMybidsMybidsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MybidsPage", function () {
      return MybidsPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../rest.service */"./src/app/rest.service.ts");
    var MybidsPage = /*#__PURE__*/function () {
      function MybidsPage(apiService, location) {
        _classCallCheck(this, MybidsPage);
        this.apiService = apiService;
        this.location = location;
        var today = new Date();
        // this.mindate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        this.mindate = new Date(today.setDate(today.getDate() + 2)).toISOString();
        this.maxDate = today.setFullYear(today.getFullYear() + 2);
        this.lastDate = new Date(this.maxDate).toISOString();
      }
      return _createClass(MybidsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getListBids();
        }
      }, {
        key: "changed",
        value: function changed(event) {
          var todayDate = new Date();
          var todayFormatedDate = todayDate.getDate() + '/' + todayDate.getMonth() + '/' + todayDate.getFullYear();
          var selectedDate = new Date(event.detail.value);
          var getFullYear = selectedDate.getFullYear();
          var getDate = selectedDate.getDate();
          var getMonth = selectedDate.getMonth();
          var selectedFormatedDate = getDate + '/' + getMonth + '/' + getFullYear;
          var date1 = todayDate;
          var date2 = selectedDate;
          var diffDays = date2.getDate() - date1.getDate();
          this.validTill = diffDays;
          // console.log(diffDays);
        }
      }, {
        key: "getListBids",
        value: function getListBids() {
          var _this = this;
          var userid = localStorage.getItem('id');
          this.apiService.presentLoader('Please wait...');
          this.apiService.getMyBids(userid).then(function (res) {
            _this.mybids = res.bids;
            console.log(res.bids);
            setTimeout(function () {
              _this.apiService.dismissLoader();
            }, 1000);
          }, function (err) {
            setTimeout(function () {
              _this.apiService.dismissLoader();
            }, 1000);
          });
        }
      }, {
        key: "yourbidfunction",
        value: function yourbidfunction(event, buyQueryId) {
          this.mybid = event.detail.value;
          this.QueryId = buyQueryId;
        }
      }, {
        key: "validDays",
        value: function validDays(event, buyQueryId) {
          this.validTill = event.detail.value;
          this.QueryId = buyQueryId;
        }
      }, {
        key: "saveUserBid",
        value: function saveUserBid(buyQueryId) {
          var _this2 = this;
          this.QueryId = buyQueryId;
          if (this.QueryId != undefined && this.mybid != undefined && this.validTill != undefined) {
            this.apiService.presentLoader("Please Wait...");
            this.apiService.addBidOnBuyerQuery({
              buyQueryId: this.QueryId,
              validTill: this.validTill,
              amount: this.mybid,
              userid: localStorage.getItem('id')
            }).then(function (res) {
              _this2.apiService.dismissLoader();
              _this2.getListBids();
            }, function (err) {
              _this2.apiService.dismissLoader();
            });
          } else {
            this.apiService.presentToast('Bid amount & Bid expired date is required...');
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "accept",
        value: function accept(bid_id) {
          var _this3 = this;
          this.apiService.presentLoader("Please Wait...");
          var postedData = {
            'bid_id': bid_id,
            'counter_status': 1
          };
          this.apiService.updateCounterStatus(postedData).then(function (res) {
            _this3.apiService.dismissLoader();
            console.log(res);
            _this3.getListBids();
          })["catch"](function (err) {
            _this3.apiService.dismissLoader();
            _this3.getListBids();
            console.log(err);
          });
        }
      }, {
        key: "reject",
        value: function reject(bid_id) {
          var _this4 = this;
          this.apiService.presentLoader("Please Wait...");
          var postedData = {
            'bid_id': bid_id,
            'counter_status': 2
          };
          this.apiService.updateCounterStatus(postedData).then(function (res) {
            _this4.apiService.dismissLoader();
            console.log(res);
            _this4.getListBids();
          })["catch"](function (err) {
            _this4.getListBids();
            _this4.apiService.dismissLoader();
            console.log(err);
          });
        }
      }]);
    }();
    MybidsPage.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
      }];
    };
    MybidsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-mybids',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./mybids.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/mybids/mybids.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./mybids.page.scss */"./src/app/mybids/mybids.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])], MybidsPage);

    /***/
  })
}]);
//# sourceMappingURL=mybids-mybids-module-es5.js.map