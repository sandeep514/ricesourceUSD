function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return n};var l,n={},t=Object.prototype,e=t.hasOwnProperty,u=Object.defineProperty||function(l,n,t){l[n]=t.value},i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(l,n,t){return Object.defineProperty(l,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),l[n]}try{c({},"")}catch(l){c=function(l,n,t){return l[n]=t}}function s(l,n,t,e){var i=n&&n.prototype instanceof g?n:g,r=Object.create(i.prototype),o=new P(e||[]);return u(r,"_invoke",{value:L(l,t,o)}),r}function p(l,n,t){try{return{type:"normal",arg:l.call(n,t)}}catch(l){return{type:"throw",arg:l}}}n.wrap=s;var b="suspendedStart",d="executing",f="completed",h={};function g(){}function m(){}function y(){}var x={};c(x,r,(function(){return this}));var v=Object.getPrototypeOf,k=v&&v(v(E([])));k&&k!==t&&e.call(k,r)&&(x=k);var w=y.prototype=g.prototype=Object.create(x);function q(l){["next","throw","return"].forEach((function(n){c(l,n,(function(l){return this._invoke(n,l)}))}))}function _(l,n){function t(u,i,r,o){var a=p(l[u],l,i);if("throw"!==a.type){var c=a.arg,s=c.value;return s&&"object"==typeof s&&e.call(s,"__await")?n.resolve(s.__await).then((function(l){t("next",l,r,o)}),(function(l){t("throw",l,r,o)})):n.resolve(s).then((function(l){c.value=l,r(c)}),(function(l){return t("throw",l,r,o)}))}o(a.arg)}var i;u(this,"_invoke",{value:function(l,e){function u(){return new n((function(n,u){t(l,e,n,u)}))}return i=i?i.then(u,u):u()}})}function L(n,t,e){var u=b;return function(i,r){if(u===d)throw Error("Generator is already running");if(u===f){if("throw"===i)throw r;return{value:l,done:!0}}for(e.method=i,e.arg=r;;){var o=e.delegate;if(o){var a=S(o,e);if(a){if(a===h)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(u===b)throw u=f,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);u=d;var c=p(n,t,e);if("normal"===c.type){if(u=e.done?f:"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(u=f,e.method="throw",e.arg=c.arg)}}}function S(n,t){var e=t.method,u=n.iterator[e];if(u===l)return t.delegate=null,"throw"===e&&n.iterator.return&&(t.method="return",t.arg=l,S(n,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var i=p(u,n.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,h;var r=i.arg;return r?r.done?(t[n.resultName]=r.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=l),t.delegate=null,h):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function $(l){var n={tryLoc:l[0]};1 in l&&(n.catchLoc=l[1]),2 in l&&(n.finallyLoc=l[2],n.afterLoc=l[3]),this.tryEntries.push(n)}function z(l){var n=l.completion||{};n.type="normal",delete n.arg,l.completion=n}function P(l){this.tryEntries=[{tryLoc:"root"}],l.forEach($,this),this.reset(!0)}function E(n){if(n||""===n){var t=n[r];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var u=-1,i=function t(){for(;++u<n.length;)if(e.call(n,u))return t.value=n[u],t.done=!1,t;return t.value=l,t.done=!0,t};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return m.prototype=y,u(w,"constructor",{value:y,configurable:!0}),u(y,"constructor",{value:m,configurable:!0}),m.displayName=c(y,a,"GeneratorFunction"),n.isGeneratorFunction=function(l){var n="function"==typeof l&&l.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(l){return Object.setPrototypeOf?Object.setPrototypeOf(l,y):(l.__proto__=y,c(l,a,"GeneratorFunction")),l.prototype=Object.create(w),l},n.awrap=function(l){return{__await:l}},q(_.prototype),c(_.prototype,o,(function(){return this})),n.AsyncIterator=_,n.async=function(l,t,e,u,i){void 0===i&&(i=Promise);var r=new _(s(l,t,e,u),i);return n.isGeneratorFunction(t)?r:r.next().then((function(l){return l.done?l.value:r.next()}))},q(w),c(w,a,"Generator"),c(w,r,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),n.keys=function(l){var n=Object(l),t=[];for(var e in n)t.push(e);return t.reverse(),function l(){for(;t.length;){var e=t.pop();if(e in n)return l.value=e,l.done=!1,l}return l.done=!0,l}},n.values=E,P.prototype={constructor:P,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(z),!n)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=l)},stop:function(){this.done=!0;var l=this.tryEntries[0].completion;if("throw"===l.type)throw l.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function u(e,u){return o.type="throw",o.arg=n,t.next=e,u&&(t.method="next",t.arg=l),!!u}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],o=r.completion;if("root"===r.tryLoc)return u("end");if(r.tryLoc<=this.prev){var a=e.call(r,"catchLoc"),c=e.call(r,"finallyLoc");if(a&&c){if(this.prev<r.catchLoc)return u(r.catchLoc,!0);if(this.prev<r.finallyLoc)return u(r.finallyLoc)}else if(a){if(this.prev<r.catchLoc)return u(r.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return u(r.finallyLoc)}}}},abrupt:function(l,n){for(var t=this.tryEntries.length-1;t>=0;--t){var u=this.tryEntries[t];if(u.tryLoc<=this.prev&&e.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var i=u;break}}i&&("break"===l||"continue"===l)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var r=i?i.completion:{};return r.type=l,r.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(r)},complete:function(l,n){if("throw"===l.type)throw l.arg;return"break"===l.type||"continue"===l.type?this.next=l.arg:"return"===l.type?(this.rval=this.arg=l.arg,this.method="return",this.next="end"):"normal"===l.type&&n&&(this.next=n),h},finish:function(l){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===l)return this.complete(t.completion,t.afterLoc),z(t),h}},catch:function(l){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===l){var e=t.completion;if("throw"===e.type){var u=e.arg;z(t)}return u}}throw Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:E(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=l),h}},n}function _defineProperties(l,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,_toPropertyKey(e.key),e)}}function _createClass(l,n,t){return n&&_defineProperties(l.prototype,n),t&&_defineProperties(l,t),Object.defineProperty(l,"prototype",{writable:!1}),l}function _toPropertyKey(l){var n=_toPrimitive(l,"string");return"symbol"==typeof n?n:n+""}function _toPrimitive(l,n){if("object"!=typeof l||!l)return l;var t=l[Symbol.toPrimitive];if(void 0!==t){var e=t.call(l,n||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(l)}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{Ejnb:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),u=_createClass((function l(){_classCallCheck(this,l)})),i=t("pMnS"),r=t("SVse"),o=t("MKJQ"),a=t("sZkV"),c=t("pWbT"),s=t("TGkX"),p=t("+QWb"),b=t("2yus"),d=t("iInd"),f=t("mrSG"),h=t("fn7o"),g=function(){return _createClass((function l(n,t,e){_classCallCheck(this,l),this.apiService=n,this.location=t,this.modalCtrl=e,this.generateDate=function(l){var n=new Date,t=l;return n.setTime(n.getTime()+24*t*60*60*1e3),n.getDate()+"/"+(n.getMonth()+1)+"/"+n.getFullYear()};var u=new Date;this.mindate=new Date(u.setDate(u.getDate()+2)).toISOString(),this.maxDate=u.setFullYear(u.getFullYear()+2),this.lastDate=new Date(this.maxDate).toISOString(),this.imagePre=this.apiService.imageUrl}),[{key:"ngOnInit",value:function(){this.getListBids()}},{key:"changed",value:function(l){var n=new Date,t=(n.getDate(),n.getMonth(),n.getFullYear(),new Date(l.detail.value));t.getFullYear(),t.getDate(),t.getMonth();var e=n,u=t.getDate()-e.getDate();this.validTill=u}},{key:"getListBids",value:function(){var l=this,n=localStorage.getItem("id");this.apiService.presentLoader("Please wait..."),this.apiService.getTrades(n).then((function(n){console.log("res 67"),console.log(n),l.mybids=n.data,console.log(n),setTimeout((function(){l.apiService.dismissLoader()}),1e3)}),(function(n){setTimeout((function(){l.apiService.dismissLoader()}),1e3)}))}},{key:"yourbidfunction",value:function(l,n){this.mybid=l.detail.value,this.QueryId=n}},{key:"validDays",value:function(l,n){this.validTill=l.detail.value,this.QueryId=n}},{key:"saveUserBid",value:function(l){var n=this;this.QueryId=l,null!=this.QueryId&&null!=this.mybid&&null!=this.validTill?(this.apiService.presentLoader("Please Wait..."),this.apiService.addBidOnBuyerQuery({buyQueryId:this.QueryId,validTill:this.validTill,amount:this.mybid,userid:localStorage.getItem("id")}).then((function(l){n.apiService.dismissLoader(),n.getListBids()}),(function(l){n.apiService.dismissLoader()}))):this.apiService.presentToast("Bid amount & Bid expired date is required...")}},{key:"back",value:function(){this.location.back()}},{key:"accept",value:function(l){var n=this;this.apiService.presentLoader("Please Wait..."),this.apiService.updateCounterStatus({bid_id:l,counter_status:1}).then((function(l){n.apiService.dismissLoader(),console.log(l),n.getListBids()})).catch((function(l){n.apiService.dismissLoader(),n.getListBids(),console.log(l)}))}},{key:"reject",value:function(l){var n=this;this.apiService.presentLoader("Please Wait..."),this.apiService.updateCounterStatus({bid_id:l,counter_status:2}).then((function(l){n.apiService.dismissLoader(),console.log(l),n.getListBids()})).catch((function(l){n.getListBids(),n.apiService.dismissLoader(),console.log(l)}))}},{key:"openModal",value:function(l){return f.a(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var t;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(l),n.next=3,this.modalCtrl.create({component:h.a,componentProps:{img:l}});case 3:return t=n.sent,n.next=6,t.present();case 6:case"end":return n.stop()}}),n,this)})))}}])}(),m=e.ob({encapsulation:0,styles:[[".blink_me[_ngcontent-%COMP%]{-webkit-animation:1s linear infinite blinker;animation:1s linear infinite blinker}@-webkit-keyframes blinker{0%{opacity:0}50%{opacity:.5}100%{opacity:1}}@keyframes blinker{0%{opacity:0}50%{opacity:.5}100%{opacity:1}}.header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-of-type, ion-toolbar[_ngcontent-%COMP%]{--border-width:0 0 0px!important}"]],data:{}});function y(l){return e.Mb(0,[(l()(),e.qb(0,0,null,null,5,"div",[["style","padding: 5px 10px;border-radius: 0px 0px 0px 5px;"]],null,null,null,null,null)),e.Hb(512,null,r.y,r.z,[e.k,e.r,e.C]),e.pb(2,278528,null,0,r.o,[r.y],{ngStyle:[0,"ngStyle"]},null),e.Fb(3,{"background-color":0}),e.Fb(4,{"background-color":0}),(l()(),e.Kb(-1,null,["Sell"]))],(function(l,n){var t=1==(null==n.parent.context.$implicit?null:n.parent.context.$implicit.tradeType)?l(n,3,0,"green"):l(n,4,0,"#324ab2");l(n,2,0,t)}),null)}function x(l){return e.Mb(0,[(l()(),e.qb(0,0,null,null,5,"div",[["style","padding: 5px 10px;border-radius: 0px 0px 0px 5px;"]],null,null,null,null,null)),e.Hb(512,null,r.y,r.z,[e.k,e.r,e.C]),e.pb(2,278528,null,0,r.o,[r.y],{ngStyle:[0,"ngStyle"]},null),e.Fb(3,{"background-color":0}),e.Fb(4,{"background-color":0}),(l()(),e.Kb(-1,null,["Buy"]))],(function(l,n){var t=1==(null==n.parent.context.$implicit?null:n.parent.context.$implicit.tradeType)?l(n,3,0,"green"):l(n,4,0,"#324ab2");l(n,2,0,t)}),null)}function v(l){return e.Mb(0,[(l()(),e.qb(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Basmati Rice"]))],null,null)}function k(l){return e.Mb(0,[(l()(),e.qb(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Non-Basmati Rice"]))],null,null)}function w(l){return e.Mb(0,[(l()(),e.qb(0,0,null,null,4,"ion-row",[],null,null,null,o.Eb,o.I)),e.pb(1,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,2,"ion-col",[["size","12"],["style","margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;"]],null,null,null,o.gb,o.k)),e.pb(3,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(4,0,null,0,0,"img",[["src","../../assets/STAMP SOLD.png"],["style","width: 100px;"]],null,null,null,null,null))],(function(l,n){l(n,3,0,"12")}),null)}function q(l){return e.Mb(0,[(l()(),e.qb(0,0,null,null,4,"ion-row",[],null,null,null,o.Eb,o.I)),e.pb(1,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,2,"ion-col",[["size","12"],["style","margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;"]],null,null,null,o.gb,o.k)),e.pb(3,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(4,0,null,0,0,"img",[["src","../../assets/STAMP SOLD.png"],["style","width: 100px;"]],null,null,null,null,null))],(function(l,n){l(n,3,0,"12")}),null)}function _(l){return e.Mb(0,[(l()(),e.qb(0,0,null,null,100,"li",[["class","demandedData"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,99,"div",[["style","margin: 0;border: 1px solid #ededed;border-radius: 10px;margin-bottom: 20px;overflow: hidden;box-shadow: 1px 4px 6px 2px #ededed;"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,8,"ion-row",[["style",""]],null,null,null,o.Eb,o.I)),e.pb(3,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,6,"ion-col",[["size","2"],["style","text-align: center;margin: 0px;padding: 0px;"]],null,null,null,o.gb,o.k)),e.pb(5,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(6,0,null,0,4,"div",[["style","margin: 0px;color: #fffbd6;font-weight: bold;"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,y)),e.pb(8,16384,null,0,r.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,null,1,null,x)),e.pb(10,16384,null,0,r.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(11,0,null,null,83,"div",[],null,null,null,null,null)),(l()(),e.qb(12,0,null,null,15,"ion-row",[],null,null,null,o.Eb,o.I)),e.pb(13,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(l()(),e.qb(14,0,null,0,2,"ion-col",[["class","demandHeaders"],["size","4"]],null,null,null,o.gb,o.k)),e.pb(15,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Kb(-1,0,["Rice"])),(l()(),e.qb(17,0,null,0,10,"ion-col",[],null,null,null,o.gb,o.k)),e.pb(18,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(l()(),e.qb(19,0,null,0,1,"div",[["style","float: left;width: 10px;margin: 0px;height: 25px"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[":"])),(l()(),e.qb(21,0,null,0,6,"div",[["style","margin: 0px"]],null,null,null,null,null)),(l()(),e.Kb(22,null,[" "," "," "," "])),(l()(),e.fb(16777216,null,null,1,null,v)),e.pb(24,16384,null,0,r.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,null,1,null,k)),e.pb(26,16384,null,0,r.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.Kb(27,null,[" (",") "])),(l()(),e.qb(28,0,null,null,10,"ion-row",[],null,null,null,o.Eb,o.I)),e.pb(29,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(l()(),e.qb(30,0,null,0,2,"ion-col",[["class","demandHeaders"],["size","4"]],null,null,null,o.gb,o.k)),e.pb(31,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Kb(-1,0,["Packing"])),(l()(),e.qb(33,0,null,0,5,"ion-col",[],null,null,null,o.gb,o.k)),e.pb(34,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(l()(),e.qb(35,0,null,0,1,"div",[["style","float: left;width: 10px;margin: 0px;height: 25px"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[":"])),(l()(),e.qb(37,0,null,0,1,"div",[["style","margin: 0px"]],null,null,null,null,null)),(l()(),e.Kb(38,null,[" "," "])),(l()(),e.qb(39,0,null,null,10,"ion-row",[],null,null,null,o.Eb,o.I)),e.pb(40,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(l()(),e.qb(41,0,null,0,2,"ion-col",[["class","demandHeaders"],["size","4"]],null,null,null,o.gb,o.k)),e.pb(42,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Kb(-1,0,["Quantity(MT)"])),(l()(),e.qb(44,0,null,0,5,"ion-col",[],null,null,null,o.gb,o.k)),e.pb(45,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(l()(),e.qb(46,0,null,0,1,"div",[["style","float: left;width: 10px;margin: 0px;height: 25px"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[":"])),(l()(),e.qb(48,0,null,0,1,"div",[["style","margin: 0px"]],null,null,null,null,null)),(l()(),e.Kb(49,null,[" "," "])),(l()(),e.qb(50,0,null,null,10,"ion-row",[],null,null,null,o.Eb,o.I)),e.pb(51,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(l()(),e.qb(52,0,null,0,2,"ion-col",[["class","demandHeaders"],["size","4"]],null,null,null,o.gb,o.k)),e.pb(53,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Kb(-1,0,["Price (PMT) "])),(l()(),e.qb(55,0,null,0,5,"ion-col",[],null,null,null,o.gb,o.k)),e.pb(56,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(l()(),e.qb(57,0,null,0,1,"div",[["style","float: left;width: 10px;margin: 0px;height: 25px"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[":"])),(l()(),e.qb(59,0,null,0,1,"div",[["style","margin: 0px"]],null,null,null,null,null)),(l()(),e.Kb(60,null,[" \u20b9"," "])),(l()(),e.qb(61,0,null,null,10,"ion-row",[],null,null,null,o.Eb,o.I)),e.pb(62,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(l()(),e.qb(63,0,null,0,2,"ion-col",[["class","demandHeaders"],["size","4"]],null,null,null,o.gb,o.k)),e.pb(64,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Kb(-1,0,["Ex-Warehouse"])),(l()(),e.qb(66,0,null,0,5,"ion-col",[],null,null,null,o.gb,o.k)),e.pb(67,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(l()(),e.qb(68,0,null,0,1,"div",[["style","float: left;width: 10px;margin: 0px;height: 25px"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[":"])),(l()(),e.qb(70,0,null,0,1,"div",[["style","margin: 0px;text-transform: capitalize;"]],null,null,null,null,null)),(l()(),e.Kb(71,null,[" "," "])),(l()(),e.qb(72,0,null,null,10,"ion-row",[],null,null,null,o.Eb,o.I)),e.pb(73,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(l()(),e.qb(74,0,null,0,2,"ion-col",[["class","demandHeaders"],["size","4"]],null,null,null,o.gb,o.k)),e.pb(75,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Kb(-1,0,["Validity"])),(l()(),e.qb(77,0,null,0,5,"ion-col",[],null,null,null,o.gb,o.k)),e.pb(78,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(l()(),e.qb(79,0,null,0,1,"div",[["style","float: left;width: 10px;margin: 0px;height: 25px"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[":"])),(l()(),e.qb(81,0,null,0,1,"div",[["style","margin: 0px"]],null,null,null,null,null)),(l()(),e.Kb(82,null,[" "," "])),(l()(),e.qb(83,0,null,null,7,"ion-row",[],null,null,null,o.Eb,o.I)),e.pb(84,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(l()(),e.qb(85,0,null,0,2,"ion-col",[["size","6"],["style","margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;"]],null,null,null,o.gb,o.k)),e.pb(86,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(87,0,null,0,0,"img",[["alt","cooked"],["onerror","this.src='../../assets/img/No_image_available.svg.png';"],["style","width: 200px;padding: 0 5px;"]],[[8,"src",4]],[[null,"click"]],(function(l,n,t){var e=!0,u=l.component;return"click"===n&&(e=!1!==u.openModal(u.imagePre+"uploads/"+(null==l.context.$implicit?null:l.context.$implicit.cooked_file))&&e),e}),null,null)),(l()(),e.qb(88,0,null,0,2,"ion-col",[["size","6"],["style","margin-top: 5px;margin-bottom: 0px;text-align: center;font-size: 19px;color: green;font-weight: bold;"]],null,null,null,o.gb,o.k)),e.pb(89,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(90,0,null,0,0,"img",[["alt","cooked"],["onerror","this.src='../../assets/img/No_image_available.svg.png';"],["style","width: 200px;padding: 0 5px;"]],[[8,"src",4]],[[null,"click"]],(function(l,n,t){var e=!0,u=l.component;return"click"===n&&(e=!1!==u.openModal(u.imagePre+"uploads/"+(null==l.context.$implicit?null:l.context.$implicit.uncooked_file))&&e),e}),null,null)),(l()(),e.fb(16777216,null,null,1,null,w)),e.pb(92,16384,null,0,r.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,null,1,null,q)),e.pb(94,16384,null,0,r.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(95,0,null,null,5,"div",[["style","text-align: center;padding: 10px;"]],null,null,null,null,null)),(l()(),e.qb(96,0,null,null,4,"div",[["class","blink_me"]],null,null,null,null,null)),(l()(),e.qb(97,0,null,null,1,"ion-icon",[["name","call-outline"],["style","color: #000;"]],null,null,null,o.ob,o.s)),e.pb(98,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.qb(99,0,null,null,1,"a",[["class","contactuser"],["href","tel:+919877092004"],["style","text-decoration: none;color: #000;font-weight: bold;font-size: 17px;margin-left: 5px;"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Call SNTC"]))],(function(l,n){l(n,5,0,"2"),l(n,8,0,1==(null==n.context.$implicit?null:n.context.$implicit.tradeType)),l(n,10,0,2==(null==n.context.$implicit?null:n.context.$implicit.tradeType)),l(n,15,0,"4"),l(n,24,0,1==(null==n.context.$implicit?null:n.context.$implicit.quality_type)),l(n,26,0,2==(null==n.context.$implicit?null:n.context.$implicit.quality_type)),l(n,31,0,"4"),l(n,42,0,"4"),l(n,53,0,"4"),l(n,64,0,"4"),l(n,75,0,"4"),l(n,86,0,"6"),l(n,89,0,"6"),l(n,92,0,3==(null==n.context.$implicit?null:n.context.$implicit.status)&&"3"==(null==n.context.$implicit?null:n.context.$implicit.status)),l(n,94,0,2==(null==n.context.$implicit?null:n.context.$implicit.status)&&"3"==(null==n.context.$implicit?null:n.context.$implicit.status)),l(n,98,0,"call-outline")}),(function(l,n){var t=n.component;l(n,22,0,null==n.context.$implicit?null:n.context.$implicit.rice_quality_master.quality,null==n.context.$implicit?null:n.context.$implicit.rice_form_milestone3.name,null==n.context.$implicit?null:n.context.$implicit.rice_grade.get_wand_type.type),l(n,27,0,null==n.context.$implicit?null:n.context.$implicit.rice_grade.value),l(n,38,0,null==n.context.$implicit?null:n.context.$implicit.rice_packing.packing),l(n,49,0,null==n.context.$implicit?null:n.context.$implicit.quantity),l(n,60,0,null==n.context.$implicit?null:n.context.$implicit.offerPrice),l(n,71,0,null==n.context.$implicit?null:n.context.$implicit.location),l(n,82,0,t.generateDate(null==n.context.$implicit?null:n.context.$implicit.validDays)),l(n,87,0,e.ub(2,"",t.imagePre,"uploads/",null==n.context.$implicit?null:n.context.$implicit.cooked_file,"")),l(n,90,0,e.ub(2,"",t.imagePre,"uploads/",null==n.context.$implicit?null:n.context.$implicit.uncooked_file,""))}))}function L(l){return e.Mb(0,[(l()(),e.qb(0,0,null,null,10,"ion-header",[["class",""]],null,null,null,o.nb,o.r)),e.pb(1,49152,null,0,a.B,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,8,"ion-toolbar",[["mode","ios"],["style","background: #fff; --background: #fff"]],null,null,null,o.Qb,o.U)),e.pb(3,49152,null,0,a.zb,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(l()(),e.qb(4,0,null,0,3,"ion-buttons",[["class","back-button"],["slot","start"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.back()&&e),e}),o.Z,o.d)),e.pb(5,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(l()(),e.qb(6,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,o.ob,o.s)),e.pb(7,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.qb(8,0,null,0,2,"ion-title",[["class","header-title porttitle"]],null,null,null,o.Pb,o.T)),e.pb(9,49152,null,0,a.xb,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["Trade"])),(l()(),e.qb(11,0,null,null,8,"ion-content",[["class",""],["id","content"],["style","height: 100%;"]],null,null,null,o.hb,o.l)),e.pb(12,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(l()(),e.qb(13,0,null,0,4,"div",[["style","height: 90%;overflow: scroll;"]],null,null,null,null,null)),(l()(),e.qb(14,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),e.qb(15,0,null,null,2,"ul",[["style","padding: 10px;"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,_)),e.pb(17,278528,null,0,r.k,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(18,0,null,0,1,"app-menu",[],null,null,null,c.b,c.a)),e.pb(19,114688,null,0,s.a,[p.a,a.Gb,a.Eb,b.a,a.Fb,a.Pb,d.m],null,null)],(function(l,n){var t=n.component;l(n,3,0,"ios"),l(n,7,0,"arrow-back-outline"),l(n,17,0,t.mybids),l(n,19,0)}),null)}var S=e.mb("app-trade-inr",g,(function(l){return e.Mb(0,[(l()(),e.qb(0,0,null,null,1,"app-trade-inr",[],null,null,null,L,m)),e.pb(1,114688,null,0,g,[b.a,r.h,a.Fb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),$=t("s7LF"),z=_createClass((function l(){_classCallCheck(this,l)})),P=t("j1ZV");t.d(n,"TradeINRPageModuleNgFactory",(function(){return E}));var E=e.nb(u,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[i.a,S]],[3,e.j],e.v]),e.Ab(4608,r.n,r.m,[e.s,[2,r.B]]),e.Ab(4608,$.p,$.p,[]),e.Ab(4608,a.c,a.c,[e.x,e.g]),e.Ab(4608,a.Fb,a.Fb,[a.c,e.j,e.p]),e.Ab(4608,a.Kb,a.Kb,[a.c,e.j,e.p]),e.Ab(1073742336,r.b,r.b,[]),e.Ab(1073742336,$.o,$.o,[]),e.Ab(1073742336,$.d,$.d,[]),e.Ab(1073742336,a.Bb,a.Bb,[]),e.Ab(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),e.Ab(1073742336,z,z,[]),e.Ab(1073742336,P.a,P.a,[]),e.Ab(1073742336,u,u,[]),e.Ab(1024,d.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);