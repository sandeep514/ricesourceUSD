function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return n};var n={},t=Object.prototype,l=t.hasOwnProperty,e=Object.defineProperty||function(n,t,l){n[t]=l.value},o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(n,t,l){return Object.defineProperty(n,t,{value:l,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{u({},"")}catch(z){u=function(n,t,l){return n[t]=l}}function c(n,t,l,o){var r=t&&t.prototype instanceof g?t:g,i=Object.create(r.prototype),a=new k(o||[]);return e(i,"_invoke",{value:P(n,l,a)}),i}function s(n,t,l){try{return{type:"normal",arg:n.call(t,l)}}catch(z){return{type:"throw",arg:z}}}n.wrap=c;var p={};function g(){}function b(){}function d(){}var h={};u(h,r,(function(){return this}));var f=Object.getPrototypeOf,m=f&&f(f(M([])));m&&m!==t&&l.call(m,r)&&(h=m);var x=d.prototype=g.prototype=Object.create(h);function y(n){["next","throw","return"].forEach((function(t){u(n,t,(function(n){return this._invoke(t,n)}))}))}function v(n,t){var o;e(this,"_invoke",{value:function(e,r){function i(){return new t((function(o,i){!function e(o,r,i,a){var u=s(n[o],n,r);if("throw"!==u.type){var c=u.arg,p=c.value;return p&&"object"==typeof p&&l.call(p,"__await")?t.resolve(p.__await).then((function(n){e("next",n,i,a)}),(function(n){e("throw",n,i,a)})):t.resolve(p).then((function(n){c.value=n,i(c)}),(function(n){return e("throw",n,i,a)}))}a(u.arg)}(e,r,o,i)}))}return o=o?o.then(i,i):i()}})}function P(n,t,l){var e="suspendedStart";return function(o,r){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw r;return w()}for(l.method=o,l.arg=r;;){var i=l.delegate;if(i){var a=C(i,l);if(a){if(a===p)continue;return a}}if("next"===l.method)l.sent=l._sent=l.arg;else if("throw"===l.method){if("suspendedStart"===e)throw e="completed",l.arg;l.dispatchException(l.arg)}else"return"===l.method&&l.abrupt("return",l.arg);e="executing";var u=s(n,t,l);if("normal"===u.type){if(e=l.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:l.done}}"throw"===u.type&&(e="completed",l.method="throw",l.arg=u.arg)}}}function C(n,t){var l=t.method,e=n.iterator[l];if(void 0===e)return t.delegate=null,"throw"===l&&n.iterator.return&&(t.method="return",t.arg=void 0,C(n,t),"throw"===t.method)||"return"!==l&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+l+"' method")),p;var o=s(e,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var r=o.arg;return r?r.done?(t[n.resultName]=r.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function _(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function O(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function k(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(_,this),this.reset(!0)}function M(n){if(n){var t=n[r];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,o=function t(){for(;++e<n.length;)if(l.call(n,e))return t.value=n[e],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:w}}function w(){return{value:void 0,done:!0}}return b.prototype=d,e(x,"constructor",{value:d,configurable:!0}),e(d,"constructor",{value:b,configurable:!0}),b.displayName=u(d,a,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,d):(n.__proto__=d,u(n,a,"GeneratorFunction")),n.prototype=Object.create(x),n},n.awrap=function(n){return{__await:n}},y(v.prototype),u(v.prototype,i,(function(){return this})),n.AsyncIterator=v,n.async=function(t,l,e,o,r){void 0===r&&(r=Promise);var i=new v(c(t,l,e,o),r);return n.isGeneratorFunction(l)?i:i.next().then((function(n){return n.done?n.value:i.next()}))},y(x),u(x,a,"Generator"),u(x,r,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=Object(n),l=[];for(var e in t)l.push(e);return l.reverse(),function n(){for(;l.length;){var e=l.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},n.values=M,k.prototype={constructor:k,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!n)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function e(l,e){return i.type="throw",i.arg=n,t.next=l,e&&(t.method="next",t.arg=void 0),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],i=r.completion;if("root"===r.tryLoc)return e("end");if(r.tryLoc<=this.prev){var a=l.call(r,"catchLoc"),u=l.call(r,"finallyLoc");if(a&&u){if(this.prev<r.catchLoc)return e(r.catchLoc,!0);if(this.prev<r.finallyLoc)return e(r.finallyLoc)}else if(a){if(this.prev<r.catchLoc)return e(r.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return e(r.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&l.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===n||"continue"===n)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=n,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(i)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),p},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var l=this.tryEntries[t];if(l.finallyLoc===n)return this.complete(l.completion,l.afterLoc),O(l),p}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var l=this.tryEntries[t];if(l.tryLoc===n){var e=l.completion;if("throw"===e.type){var o=e.arg;O(l)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,l){return this.delegate={iterator:M(n),resultName:t,nextLoc:l},"next"===this.method&&(this.arg=void 0),p}},n}function _defineProperties(n,t){for(var l=0;l<t.length;l++){var e=t[l];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,_toPropertyKey(e.key),e)}}function _createClass(n,t,l){return t&&_defineProperties(n.prototype,t),l&&_defineProperties(n,l),Object.defineProperty(n,"prototype",{writable:!1}),n}function _toPropertyKey(n){var t=_toPrimitive(n,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(n,t){if("object"!=typeof n||null===n)return n;var l=n[Symbol.toPrimitive];if(void 0!==l){var e=l.call(n,t||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"5L+w":function(n,t,l){"use strict";l.r(t);var e=l("8Y7J"),o=_createClass((function n(){_classCallCheck(this,n)})),r=l("pMnS"),i=l("MKJQ"),a=l("sZkV"),u=l("s7LF"),c=l("SVse"),s=l("pWbT"),p=l("TGkX"),g=l("+QWb"),b=l("2yus"),d=l("iInd"),h=l("mrSG"),f=l("EVdn"),m=l("ovzj"),x=function(){function n(t,l,e,o,r,i,a){var u=this;_classCallCheck(this,n),this.navCtrl=t,this.apiser=l,this.loading=e,this.compSer=o,this.ModelCtrl=r,this.componentService=i,this.activRoute=a,this.selectedChartData="15_Days",this.scrollDepthTriggered=!1,this.scrollLength=0,this.scrollPosition="top",this.ricename="",this.rice="",this.userFirstName="",this.paymentAmount=1e3,this.currency="INR",this.selectedstate=localStorage.getItem("state"),this.selectedriceType=localStorage.getItem("riceType"),this.chartInt=localStorage.getItem("chartInt"),this.selectedChartData="15_Days",this.getChartInterval(),this.compSer.isUserExpired.subscribe((function(n){"true"==localStorage.getItem("isExpired")&&u.presentModel()})),this.ports=[{id:1,name:"Tokai"},{id:2,name:"Vladivostok"},{id:3,name:"Navlakhi"}],this.activRoute.params.subscribe((function(n){u.riceQualityId=n.riceQuality,u.getAllCountryPorts()}))}return _createClass(n,[{key:"presentModel",value:function(){return h.a(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var t;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.ModelCtrl.create({component:m.a,animated:!0});case 2:return t=n.sent,n.next=5,t.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"gotoProfile",value:function(){this.navCtrl.navigateForward(["profile"])}},{key:"parseValue",value:function(n){return n.split(" ").join("_")}},{key:"ngOnInit",value:function(){this.userFirstName=localStorage.getItem("name")[0]}},{key:"getChartInterval",value:function(){}},{key:"presentLoader",value:function(n){return h.a(this,void 0,void 0,_regeneratorRuntime().mark((function t(){return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loading.create({message:n});case 2:return this.loader=t.sent,t.next=5,this.loader.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"loginProfile",value:function(){}},{key:"scroll",value:function(n,t){"left"==n?f("."+t).animate({scrollLeft:"-=135px"},"slow"):f("."+t).animate({scrollLeft:"+=135px"},"slow")}},{key:"changeName",value:function(n){return n.split("_").join(" ").toUpperCase()}},{key:"getAllCountryPorts",value:function(){var n=this;this.componentService.presentLoading().then((function(){n.apiser.getAllPorts(n.riceQualityId).then((function(t){console.log("combinedData"),console.log(t.chartData.combinedData),n.packing=t.packing,n.FOB=t.FOB,n.fobminData=t.FOB.fobmin,n.fobmaxData=t.FOB.fobmax,n.ports=t.ports,n.regions=Object.keys(t.ports).sort(),n.portsArray=Object.values(t.ports),n.riceQuality=t.riceQuality,n.fiftykgMaster=t.fiftykgMaster,n.defalutPort=t.defalutPort,n.selectedUserCountry=t.defalutPortDetail[0].country,n.selectedUserRegion=t.defalutPortDetail[0].region,console.log(n.defalutPort),n.defalutPortPrice=parseFloat(t.defalutPortPrice),n.CIFminData=parseFloat(t.FOB.fobmin)+n.defalutPortPrice,n.CIFmaxData=parseFloat(t.FOB.fobmax)+n.defalutPortPrice,n.selectedPackage=t.fiftykgMaster.bag_size+" "+t.fiftykgMaster.bag_type,Highcharts.chart("highcharts",{chart:{type:"spline",scrollablePlotArea:{minWidth:600,scrollPositionX:1}},yAxis:{opposite:!1,labels:{align:"left"},title:{text:"Price( per Quintal )",x:-12}},title:{text:"Rice Graph",align:"left"},xAxis:{type:"datetime",labels:{overflow:"justify"}},rangeSelector:{selected:0,inputEnabled:!1,buttons:[{type:"week",count:1,text:"1W"},{type:"month",count:1,text:"1m"},{type:"month",count:2,text:"2m"},{type:"month",count:3,text:"3m"},{type:"month",count:4,text:"4m"},{type:"month",count:5,text:"5m"},{type:"month",count:6,text:"6m"},{type:"month",count:7,text:"7m"},{type:"month",count:8,text:"8m"},{type:"month",count:9,text:"9m"},{type:"month",count:10,text:"10m"},{type:"month",count:11,text:"11m"},{type:"year",count:1,text:"1y"}]},tooltip:{valueSuffix:""},plotOptions:{spline:{lineWidth:4,states:{hover:{lineWidth:5}},marker:{enabled:!1},pointInterval:36e5,pointStart:Date.UTC(2020,3,15,0,0,0)}},series:[{name:"Price",data:t.chartData.combinedData}],navigation:{menuItemStyle:{fontSize:"10px"}}}),console.log("kjnk"),n.componentService.loadingController.dismiss()}),(function(t){n.componentService.loadingController.dismiss()}))}))}},{key:"getbagIndex",value:function(n){var t=this.packing;return new Promise((function(l,e){if(0==t.length)e(!1);else for(var o=0;o<t.length;o++)n==t[o].id&&l(o)}))}},{key:"changeBag",value:function(n){var t=this;this.getbagIndex(n.detail.value).then((function(n){var l=t.packing[n].PMT_USD;t.selectedPackage=t.packing[n].bag_size+" "+t.packing[n].bag_type;var e=parseFloat(l).toFixed(2),o=parseFloat(t.fobminData).toFixed(2),r=parseFloat(t.fobmaxData).toFixed(2);console.log(o),console.log(r);var i=parseFloat(t.fiftykgMaster.PMT_USD).toFixed(2),a=o-i,u=r-i;console.log(i),console.log(a),console.log(u);var c=parseFloat(a+parseFloat(e)),s=parseFloat(u+parseFloat(e));t.fobminDataUpdated=c,t.fobmaxDataUpdated=s,console.log(parseFloat(e)),console.log(c),console.log(s),console.log(t.defalutPortPrice),t.CIFminData=c+Number(t.defalutPortPrice),t.CIFmaxData=s+Number(t.defalutPortPrice)}),(function(n){console.log(n)}))}},{key:"changeRegion",value:function(n){var t=n.detail.value;this.selectedRegion=t,this.country=Object.keys(this.ports[t]).sort(),this.defalutPort="",this.selectedUserCountry=""}},{key:"changeCountry",value:function(n){this.selectedCountry=n.detail.value,this.selectedPorts=this.ports[this.selectedRegion][this.selectedCountry],this.selectedPorts=Object.keys(this.selectedPorts).sort(),this.selectedUserCountry=this.selectedCountry}},{key:"changePort",value:function(n){this.defalutPort.split(" ").join("_");var t=this.defalutPortPrice;this.defalutPort=n.detail.value;var l=this.ports[this.selectedRegion][this.selectedCountry][n.detail.value];this.defalutPortPrice=l[0].freight_25MT_1MT,this.CIFminData=parseFloat(this.CIFminData)-t+parseFloat(l[0].freight_25MT_1MT),this.CIFmaxData=parseFloat(this.CIFmaxData)-t+parseFloat(l[0].freight_25MT_1MT)}},{key:"closeModal",value:function(){this.navCtrl.pop(),"OTHER"==localStorage.getItem("apptype")?this.navCtrl.navigateForward(["prices"]):this.navCtrl.navigateForward(["priceusd"])}}]),n}(),y=e.nb({encapsulation:0,styles:[[".tf-tree.example[_ngcontent-%COMP%]{text-align:center}.back-button[_ngcontent-%COMP%]{margin-right:10px;margin-left:10px;color:#fff}.back-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:23px}ion-toolbar[_ngcontent-%COMP%]{--background:#494f58;color:#fff;--background:white}.header-md[_ngcontent-%COMP%]::after{background:0 0}.header-title[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000}ion-title[_ngcontent-%COMP%]{padding:0;text-align:center}.ion-card[_ngcontent-%COMP%]{width:900px}ion-card[_ngcontent-%COMP%]{width:17%;text-align:center;float:left}.tf-tree[_ngcontent-%COMP%]{clear:both}.ioncard1[_ngcontent-%COMP%], .ioncard2[_ngcontent-%COMP%], .ioncard3[_ngcontent-%COMP%], .ioncard4[_ngcontent-%COMP%], .ioncard5[_ngcontent-%COMP%]{background:#d8f9fe}table[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]{border:1px solid #eee}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px 0;border-right:1px solid #eee}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:50%;text-align:center;padding:10px 0;border-right:1px solid #eee}.capitalize[_ngcontent-%COMP%]{text-transform:capitalize}.active[_ngcontent-%COMP%]{--background:#c9a27c;--background-color:#c9a27c}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin-top:6px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:34px;font-size:12px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-right:1px solid #dfdfdf}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:35px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:16px;border-right:1px solid #dfdfdf}table[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:0!important}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:0 0!important}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:2px solid #cfcaab!important}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:0;margin:0}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:left;margin-left:20px;padding-left:20px}.pl-60[_ngcontent-%COMP%]{padding-left:60px!important}.pl-10[_ngcontent-%COMP%]{padding-left:10px!important}.left[_ngcontent-%COMP%]{text-align:left}.active[_ngcontent-%COMP%], .segment-button-checked[_ngcontent-%COMP%]{background:#92b243;color:#fff!important;border:2px solid #92b243!important}.scroll-arrow[_ngcontent-%COMP%]{position:absolute;margin-top:3.2%;width:100%;padding-top:4px;font-size:18px}.header-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--indicator-color:transparent!important;--indicator-color-checked:transparent!important;height:0;border-radius:0;min-height:31px;margin-left:2px;margin-right:2px;width:auto;--width:auto;min-width:auto;--min-width:auto;color:#000;font-size:12px;border:2px solid #92b243}.ios[_ngcontent-%COMP%]   .header-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--indicator-color:transparent!important;--indicator-color-checked:transparent!important;height:0;border-radius:5px;min-height:31px;margin-left:2px;margin-right:2px;width:auto;--width:auto;min-width:auto;--min-width:auto;color:#000;font-size:12px;border:2px solid #92b243}.header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{border:0;--border-width:0px}.ios[_ngcontent-%COMP%]   .type-columns[_ngcontent-%COMP%]{border:0 solid transparent!important;--border:0px solid transparent!important}.scroll-arrow[_ngcontent-%COMP%]   .lefticon[_ngcontent-%COMP%]{position:absolute;left:10px;z-index:999999;color:#000;padding:2px;width:18px;top:0}.scroll-arrow[_ngcontent-%COMP%]   .righticon[_ngcontent-%COMP%]{position:absolute;right:10px;z-index:999999;color:#000;padding:2px;width:18px;top:0}.basmatiState[_ngcontent-%COMP%]{margin:10px 30px 0}.ricetype[_ngcontent-%COMP%]{color:#000;font-size:30px;font-family:GlacialIndifference-bold;margin-bottom:0!important;margin-top:0!important}.font-17[_ngcontent-%COMP%]{font-size:14px;font-family:GlacialIndifference-bold}.green[_ngcontent-%COMP%]{color:#92b243}.green[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-transform:capitalize;font-size:18px!important}.porttitle[_ngcontent-%COMP%]{font-size:20px}ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:-2px 0 0;padding:0}.imageprev[_ngcontent-%COMP%]{min-height:200px;max-height:200px;height:200px}.hide[_ngcontent-%COMP%]{display:none}.show[_ngcontent-%COMP%]{display:block}.paddingBottom100[_ngcontent-%COMP%]{padding-bottom:100px}.item-native[_ngcontent-%COMP%]{--background-color:transparent;background:0 0;--background:transparent}.item-ionic-selectable[_ngcontent-%COMP%]{border:2px solid #92b243;border-radius:10px}.item-ionic-selectable[_ngcontent-%COMP%]   .item-native[_ngcontent-%COMP%]{--background-color:transparent;background:0 0;--background:transparent}ion-col[_ngcontent-%COMP%]{padding:0}ion-select[_ngcontent-%COMP%]{width:100%;--placeholder-color:#000!important;--placeholder-opacity:1!important}.select-placeholder[_ngcontent-%COMP%]{color:#000;--placeholder-color:#000!important}"]],data:{}});function v(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,4,"ion-select-option",[],null,null,null,i.Ib,i.N)),e.ob(1,49152,null,0,a.lb,[e.h,e.k,e.x],{value:[0,"value"]},null),(n()(),e.Jb(2,0,[" "," "])),(n()(),e.pb(3,0,null,0,0,"div",[],null,null,null,null,null)),(n()(),e.Jb(4,0,[" "," "]))],(function(n,t){n(t,1,0,e.tb(1,"",null==t.context.$implicit?null:t.context.$implicit.id,""))}),(function(n,t){n(t,2,0,null==t.context.$implicit?null:t.context.$implicit.bag_size),n(t,4,0,null==t.context.$implicit?null:t.context.$implicit.bag_type)}))}function P(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,i.Ib,i.N)),e.ob(1,49152,null,0,a.lb,[e.h,e.k,e.x],null,null),(n()(),e.Jb(2,0,["",""]))],null,(function(n,t){n(t,2,0,t.context.$implicit)}))}function C(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,i.Ib,i.N)),e.ob(1,49152,null,0,a.lb,[e.h,e.k,e.x],null,null),(n()(),e.Jb(2,0,["",""]))],null,(function(n,t){n(t,2,0,t.context.$implicit)}))}function _(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,i.Ib,i.N)),e.ob(1,49152,null,0,a.lb,[e.h,e.k,e.x],null,null),(n()(),e.Jb(2,0,["",""]))],null,(function(n,t){n(t,2,0,t.context.$implicit)}))}function O(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,9,"ion-header",[["class",""]],null,null,null,i.nb,i.r)),e.ob(1,49152,null,0,a.B,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,7,"ion-toolbar",[["mode","ios"],["style","background: transparent; --background: transparent;padding: 0px;"]],null,null,null,i.Qb,i.U)),e.ob(3,49152,null,0,a.zb,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(n()(),e.pb(4,0,null,0,5,"div",[],null,null,null,null,null)),(n()(),e.pb(5,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.pb(6,0,null,null,3,"ion-buttons",[["class","back-button"],["slot","start"]],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.closeModal()&&e),e}),i.Z,i.d)),e.ob(7,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(n()(),e.pb(8,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,i.ob,i.s)),e.ob(9,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.pb(10,0,null,null,119,"ion-content",[["class",""]],null,null,null,i.hb,i.l)),e.ob(11,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(n()(),e.pb(12,0,null,0,115,"div",[["style","margin-bottom: 50px; padding: 0px 20px;"]],null,null,null,null,null)),(n()(),e.pb(13,0,null,null,103,"div",[["style","border-bottom: 2px solid #000;margin: 20px 0px"]],null,null,null,null,null)),(n()(),e.pb(14,0,null,null,1,"div",[["style","text-align: center;font-weight: bold;font-size: 20px"]],null,null,null,null,null)),(n()(),e.Jb(15,null,[" "," "," "])),(n()(),e.pb(16,0,null,null,18,"ion-row",[],null,null,null,i.Eb,i.I)),e.ob(17,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.pb(18,0,null,0,2,"ion-col",[["size","12"],["style","font-size: 20px;line-height: 2.5;"]],null,null,null,i.gb,i.k)),e.ob(19,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.Jb(-1,0,["Packing: "])),(n()(),e.pb(21,0,null,0,13,"ion-col",[["size","12"],["style","border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;"]],null,null,null,i.gb,i.k)),e.ob(22,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(23,0,null,0,11,"ion-row",[],null,null,null,i.Eb,i.I)),e.ob(24,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.pb(25,0,null,0,9,"ion-col",[],null,null,null,i.gb,i.k)),e.ob(26,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(n()(),e.pb(27,0,null,0,7,"ion-item",[["class","select"]],null,null,null,i.vb,i.x)),e.ob(28,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.pb(29,0,null,0,5,"ion-select",[["placeholder","Select"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,t,l){var o=!0,r=n.component;return"ionBlur"===t&&(o=!1!==e.Bb(n,32)._handleBlurEvent(l.target)&&o),"ionChange"===t&&(o=!1!==e.Bb(n,32)._handleChangeEvent(l.target)&&o),"ionChange"===t&&(o=!1!==r.changeBag(l)&&o),o}),i.Jb,i.M)),e.Gb(5120,null,u.g,(function(n){return[n]}),[a.Nb]),e.ob(31,49152,null,0,a.kb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),e.ob(32,4341760,null,0,a.Nb,[e.p,e.k],null,null),(n()(),e.eb(16777216,null,0,1,null,v)),e.ob(34,278528,null,0,c.k,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(35,0,null,null,10,"ion-row",[],null,null,null,i.Eb,i.I)),e.ob(36,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.pb(37,0,null,0,2,"ion-col",[["size","12"],["style","font-size: 20px;line-height: 2.5"]],null,null,null,i.gb,i.k)),e.ob(38,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.Jb(-1,0,["FOB Price: "])),(n()(),e.pb(40,0,null,0,5,"ion-col",[["size","12"],["style","border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;"]],null,null,null,i.gb,i.k)),e.ob(41,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(42,0,null,0,3,"ion-item",[["class","select"],["style",""]],null,null,null,i.vb,i.x)),e.ob(43,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.pb(44,0,null,0,1,"h4",[["style","padding: 0;margin: 0;width: 100%;text-align: left;"]],null,null,null,null,null)),(n()(),e.Jb(45,null,["$"," - $"," PMT"])),(n()(),e.pb(46,0,null,null,50,"ion-row",[],null,null,null,i.Eb,i.I)),e.ob(47,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.pb(48,0,null,0,2,"ion-col",[["size","12"],["style","font-size: 20px;line-height: 2.5"]],null,null,null,i.gb,i.k)),e.ob(49,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.Jb(-1,0,["Port: "])),(n()(),e.pb(51,0,null,0,45,"ion-col",[["size","12"]],null,null,null,i.gb,i.k)),e.ob(52,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(53,0,null,0,43,"ion-row",[],null,null,null,i.Eb,i.I)),e.ob(54,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.pb(55,0,null,0,15,"ion-col",[["size","12"],["style","border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;margin-bottom: 15px;"]],null,null,null,i.gb,i.k)),e.ob(56,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(57,0,null,0,13,"ion-item",[["class","select"],["style",""]],null,null,null,i.vb,i.x)),e.ob(58,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.pb(59,0,null,0,2,"ion-label",[["style","font-size: 15px;"]],null,null,null,i.wb,i.A)),e.ob(60,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["REGION"])),(n()(),e.pb(62,0,null,0,8,"ion-select",[["placeholder","Select"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,t,l){var o=!0,r=n.component;return"ionBlur"===t&&(o=!1!==e.Bb(n,63)._handleBlurEvent(l.target)&&o),"ionChange"===t&&(o=!1!==e.Bb(n,63)._handleChangeEvent(l.target)&&o),"ngModelChange"===t&&(o=!1!==(r.selectedUserRegion=l)&&o),"ionChange"===t&&(o=!1!==r.changeRegion(l)&&o),o}),i.Jb,i.M)),e.ob(63,4341760,null,0,a.Nb,[e.p,e.k],null,null),e.Gb(1024,null,u.g,(function(n){return[n]}),[a.Nb]),e.ob(65,671744,null,0,u.l,[[8,null],[8,null],[8,null],[6,u.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,u.h,null,[u.l]),e.ob(67,16384,null,0,u.i,[[4,u.h]],null,null),e.ob(68,49152,null,0,a.kb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),(n()(),e.eb(16777216,null,0,1,null,P)),e.ob(70,278528,null,0,c.k,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(71,0,null,0,12,"ion-col",[["size","12"],["style","border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;margin-bottom: 15px;"]],null,null,null,i.gb,i.k)),e.ob(72,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(73,0,null,0,10,"ion-item",[["class","select"],["style",""]],null,null,null,i.vb,i.x)),e.ob(74,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.pb(75,0,null,0,2,"ion-label",[["style","font-size: 15px;"]],null,null,null,i.wb,i.A)),e.ob(76,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["COUNTRY"])),(n()(),e.pb(78,0,null,0,5,"ion-select",[["placeholder","Select"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,t,l){var o=!0,r=n.component;return"ionBlur"===t&&(o=!1!==e.Bb(n,81)._handleBlurEvent(l.target)&&o),"ionChange"===t&&(o=!1!==e.Bb(n,81)._handleChangeEvent(l.target)&&o),"ionChange"===t&&(o=!1!==r.changeCountry(l)&&o),o}),i.Jb,i.M)),e.Gb(5120,null,u.g,(function(n){return[n]}),[a.Nb]),e.ob(80,49152,null,0,a.kb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),e.ob(81,4341760,null,0,a.Nb,[e.p,e.k],null,null),(n()(),e.eb(16777216,null,0,1,null,C)),e.ob(83,278528,null,0,c.k,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(84,0,null,0,12,"ion-col",[["size","12"],["style","border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;margin-bottom: 15px;"]],null,null,null,i.gb,i.k)),e.ob(85,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(86,0,null,0,10,"ion-item",[["class","select"],["style",""]],null,null,null,i.vb,i.x)),e.ob(87,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.pb(88,0,null,0,2,"ion-label",[["style","font-size: 15px;"]],null,null,null,i.wb,i.A)),e.ob(89,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["PORT"])),(n()(),e.pb(91,0,null,0,5,"ion-select",[["placeholder","Select"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,t,l){var o=!0,r=n.component;return"ionBlur"===t&&(o=!1!==e.Bb(n,94)._handleBlurEvent(l.target)&&o),"ionChange"===t&&(o=!1!==e.Bb(n,94)._handleChangeEvent(l.target)&&o),"ionChange"===t&&(o=!1!==r.changePort(l)&&o),o}),i.Jb,i.M)),e.Gb(5120,null,u.g,(function(n){return[n]}),[a.Nb]),e.ob(93,49152,null,0,a.kb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),e.ob(94,4341760,null,0,a.Nb,[e.p,e.k],null,null),(n()(),e.eb(16777216,null,0,1,null,_)),e.ob(96,278528,null,0,c.k,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(97,0,null,null,9,"ion-row",[],null,null,null,i.Eb,i.I)),e.ob(98,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.pb(99,0,null,0,3,"ion-col",[["size","6"]],null,null,null,i.gb,i.k)),e.ob(100,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(101,0,null,0,1,"p",[["style","margin-left: 5px;font-size: 14px;padding: 0px"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Ocean Freight PMT: "])),(n()(),e.pb(103,0,null,0,3,"ion-col",[["size","6"]],null,null,null,i.gb,i.k)),e.ob(104,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(105,0,null,0,1,"p",[["style","font-size: 14px; text-transform: uppercase; font-weight: bold; list-style: none; padding: 0; text-align: right;margin-right: 14px;color: rgba(119, 154, 32, 1)"]],null,null,null,null,null)),(n()(),e.Jb(106,null,[" "," ($",")"])),(n()(),e.pb(107,0,null,null,9,"ion-row",[],null,null,null,i.Eb,i.I)),e.ob(108,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.pb(109,0,null,0,3,"ion-col",[["size","6"]],null,null,null,i.gb,i.k)),e.ob(110,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(111,0,null,0,1,"p",[["style","margin-left: 5px;font-size: 14px;padding: 0px"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["CIF Price:"])),(n()(),e.pb(113,0,null,0,3,"ion-col",[["size"," 6"]],null,null,null,i.gb,i.k)),e.ob(114,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(115,0,null,0,1,"p",[["style","font-size: 14px; text-transform: uppercase; font-weight: bold; list-style: none; padding: 0; text-align: right;margin-right: 14px;color: rgba(119, 154, 32, 1);"]],null,null,null,null,null)),(n()(),e.Jb(116,null,[" $"," - $"," PMT"])),(n()(),e.pb(117,0,null,null,1,"div",[["style","text-align: center;font-size: 20px;"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,[" Rice Graph "])),(n()(),e.pb(119,0,null,null,8,"ion-row",[["style","margin-bottom: 100px;"]],null,null,null,i.Eb,i.I)),e.ob(120,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.pb(121,0,null,0,1,"ion-col",[["size","0.5"]],null,null,null,i.gb,i.k)),e.ob(122,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(123,0,null,0,2,"ion-col",[],null,null,null,i.gb,i.k)),e.ob(124,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(n()(),e.pb(125,0,null,0,0,"div",[["id","highcharts"],["style","width: 100%; height:300"]],null,null,null,null,null)),(n()(),e.pb(126,0,null,0,1,"ion-col",[["size","0.5"]],null,null,null,i.gb,i.k)),e.ob(127,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(128,0,null,0,1,"app-menu",[],null,null,null,s.b,s.a)),e.ob(129,114688,null,0,p.a,[g.a,a.Gb,a.Eb,b.a,a.Fb,a.Pb,d.m],null,null)],(function(n,t){var l=t.component;n(t,3,0,"ios"),n(t,9,0,"arrow-back-outline"),n(t,19,0,"12"),n(t,22,0,"12"),n(t,31,0,"Select"),n(t,34,0,l.packing),n(t,38,0,"12"),n(t,41,0,"12"),n(t,49,0,"12"),n(t,52,0,"12"),n(t,56,0,"12"),n(t,65,0,l.selectedUserRegion),n(t,68,0,"Select"),n(t,70,0,l.regions),n(t,72,0,"12"),n(t,80,0,"Select"),n(t,83,0,l.country),n(t,85,0,"12"),n(t,93,0,"Select"),n(t,96,0,l.selectedPorts),n(t,100,0,"6"),n(t,104,0,"6"),n(t,110,0,"6"),n(t,114,0," 6"),n(t,122,0,"0.5"),n(t,127,0,"0.5"),n(t,129,0)}),(function(n,t){var l=t.component;n(t,15,0,null==l.riceQuality?null:l.riceQuality.quality,null==l.riceQuality?null:l.riceQuality.quality_name),n(t,45,0,l.fobminDataUpdated,l.fobmaxDataUpdated),n(t,62,0,e.Bb(t,67).ngClassUntouched,e.Bb(t,67).ngClassTouched,e.Bb(t,67).ngClassPristine,e.Bb(t,67).ngClassDirty,e.Bb(t,67).ngClassValid,e.Bb(t,67).ngClassInvalid,e.Bb(t,67).ngClassPending),n(t,106,0,l.defalutPort,l.defalutPortPrice),n(t,116,0,l.CIFminData,l.CIFmaxData)}))}var k=e.lb("app-quality-details",x,(function(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,1,"app-quality-details",[],null,null,null,O,y)),e.ob(1,114688,null,0,x,[a.Gb,b.a,a.Db,g.a,a.Fb,g.a,d.a],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),M=l("j1ZV"),w=_createClass((function n(){_classCallCheck(this,n)}));l.d(t,"QualityDetailsPageModuleNgFactory",(function(){return z}));var z=e.mb(o,[],(function(n){return e.yb([e.zb(512,e.j,e.X,[[8,[r.a,k]],[3,e.j],e.v]),e.zb(4608,c.n,c.m,[e.s,[2,c.B]]),e.zb(4608,u.p,u.p,[]),e.zb(4608,a.c,a.c,[e.x,e.g]),e.zb(4608,a.Fb,a.Fb,[a.c,e.j,e.p]),e.zb(4608,a.Kb,a.Kb,[a.c,e.j,e.p]),e.zb(1073742336,c.b,c.b,[]),e.zb(1073742336,u.o,u.o,[]),e.zb(1073742336,u.d,u.d,[]),e.zb(1073742336,a.Bb,a.Bb,[]),e.zb(1073742336,M.a,M.a,[]),e.zb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),e.zb(1073742336,w,w,[]),e.zb(1073742336,o,o,[]),e.zb(1024,d.k,(function(){return[[{path:"",component:x}]]}),[])])}))}}]);