(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"5L+w":function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class o{}var i=t("pMnS"),u=t("MKJQ"),a=t("sZkV"),r=t("s7LF"),c=t("SVse"),s=t("pWbT"),b=t("TGkX"),g=t("+QWb"),p=t("2yus"),d=t("iInd"),h=t("mrSG"),x=t("EVdn"),m=t("ovzj");class C{constructor(n,l,t,e,o,i,u){this.navCtrl=n,this.apiser=l,this.loading=t,this.compSer=e,this.ModelCtrl=o,this.componentService=i,this.activRoute=u,this.selectedChartData="15_Days",this.scrollDepthTriggered=!1,this.scrollLength=0,this.scrollPosition="top",this.ricename="",this.rice="",this.userFirstName="",this.paymentAmount=1e3,this.currency="INR",this.selectedstate=localStorage.getItem("state"),this.selectedriceType=localStorage.getItem("riceType"),this.chartInt=localStorage.getItem("chartInt"),this.selectedChartData="15_Days",this.getChartInterval(),this.compSer.isUserExpired.subscribe(n=>{"true"==localStorage.getItem("isExpired")&&this.presentModel()}),this.ports=[{id:1,name:"Tokai"},{id:2,name:"Vladivostok"},{id:3,name:"Navlakhi"}],this.activRoute.params.subscribe(n=>{this.riceQualityId=n.riceQuality,this.getAllCountryPorts()})}presentModel(){return h.a(this,void 0,void 0,(function*(){const n=yield this.ModelCtrl.create({component:m.a,animated:!0});yield n.present()}))}gotoProfile(){this.navCtrl.navigateForward(["profile"])}parseValue(n){return n.split(" ").join("_")}ngOnInit(){this.userFirstName=localStorage.getItem("name")[0]}getChartInterval(){}presentLoader(n){return h.a(this,void 0,void 0,(function*(){this.loader=yield this.loading.create({message:n}),yield this.loader.present()}))}loginProfile(){}scroll(n,l){"left"==n?x("."+l).animate({scrollLeft:"-=135px"},"slow"):x("."+l).animate({scrollLeft:"+=135px"},"slow")}changeName(n){return n.split("_").join(" ").toUpperCase()}getAllCountryPorts(){this.componentService.presentLoading().then(()=>{this.apiser.getAllPorts(this.riceQualityId).then(n=>{console.log("combinedData"),console.log(n.chartData.combinedData),this.packing=n.packing,this.FOB=n.FOB,this.fobminData=n.FOB.fobmin,this.fobmaxData=n.FOB.fobmax,this.ports=n.ports,this.regions=Object.keys(n.ports).sort(),this.portsArray=Object.values(n.ports),this.riceQuality=n.riceQuality,this.fiftykgMaster=n.fiftykgMaster,this.defalutPort=n.defalutPort,this.selectedUserCountry=n.defalutPortDetail[0].country,this.selectedUserRegion=n.defalutPortDetail[0].region,console.log(this.defalutPort),this.defalutPortPrice=parseFloat(n.defalutPortPrice),this.CIFminData=parseFloat(n.FOB.fobmin)+this.defalutPortPrice,this.CIFmaxData=parseFloat(n.FOB.fobmax)+this.defalutPortPrice,this.selectedPackage=n.fiftykgMaster.bag_size+" "+n.fiftykgMaster.bag_type,Highcharts.chart("highcharts",{chart:{type:"spline",scrollablePlotArea:{minWidth:600,scrollPositionX:1}},yAxis:{opposite:!1,labels:{align:"left"},title:{text:"Price( per Quintal )",x:-12}},title:{text:"Rice Graph",align:"left"},xAxis:{type:"datetime",labels:{overflow:"justify"}},rangeSelector:{selected:0,inputEnabled:!1,buttons:[{type:"week",count:1,text:"1W"},{type:"month",count:1,text:"1m"},{type:"month",count:2,text:"2m"},{type:"month",count:3,text:"3m"},{type:"month",count:4,text:"4m"},{type:"month",count:5,text:"5m"},{type:"month",count:6,text:"6m"},{type:"month",count:7,text:"7m"},{type:"month",count:8,text:"8m"},{type:"month",count:9,text:"9m"},{type:"month",count:10,text:"10m"},{type:"month",count:11,text:"11m"},{type:"year",count:1,text:"1y"}]},tooltip:{valueSuffix:""},plotOptions:{spline:{lineWidth:4,states:{hover:{lineWidth:5}},marker:{enabled:!1},pointInterval:36e5,pointStart:Date.UTC(2020,3,15,0,0,0)}},series:[{name:"Price",data:n.chartData.combinedData}],navigation:{menuItemStyle:{fontSize:"10px"}}}),console.log("kjnk"),this.componentService.loadingController.dismiss()},n=>{this.componentService.loadingController.dismiss()})})}getbagIndex(n){let l=this.packing;return new Promise((function(t,e){if(0==l.length)e(!1);else for(let o=0;o<l.length;o++)n==l[o].id&&t(o)}))}changeBag(n){this.getbagIndex(n.detail.value).then(n=>{let l=this.packing[n].PMT_USD;this.selectedPackage=this.packing[n].bag_size+" "+this.packing[n].bag_type;let t=parseFloat(l).toFixed(2),e=parseFloat(this.fobminData).toFixed(2),o=parseFloat(this.fobmaxData).toFixed(2);console.log(e),console.log(o);let i=parseFloat(this.fiftykgMaster.PMT_USD).toFixed(2),u=e-i,a=o-i;console.log(i),console.log(u),console.log(a);let r=parseFloat(u+parseFloat(t)),c=parseFloat(a+parseFloat(t));this.fobminDataUpdated=r,this.fobmaxDataUpdated=c,console.log(parseFloat(t)),console.log(r),console.log(c),console.log(this.defalutPortPrice),this.CIFminData=r+Number(this.defalutPortPrice),this.CIFmaxData=c+Number(this.defalutPortPrice)},n=>{console.log(n)})}changeRegion(n){let l=n.detail.value;this.selectedRegion=l,this.country=Object.keys(this.ports[l]).sort(),this.defalutPort="",this.selectedUserCountry=""}changeCountry(n){this.selectedCountry=n.detail.value,this.selectedPorts=this.ports[this.selectedRegion][this.selectedCountry],this.selectedPorts=Object.keys(this.selectedPorts).sort(),this.selectedUserCountry=this.selectedCountry}changePort(n){this.defalutPort.split(" ").join("_");let l=this.defalutPortPrice;this.defalutPort=n.detail.value;let t=this.ports[this.selectedRegion][this.selectedCountry][n.detail.value];this.defalutPortPrice=t[0].freight_25MT_1MT,this.CIFminData=parseFloat(this.CIFminData)-l+parseFloat(t[0].freight_25MT_1MT),this.CIFmaxData=parseFloat(this.CIFmaxData)-l+parseFloat(t[0].freight_25MT_1MT)}closeModal(){this.navCtrl.pop(),"OTHER"==localStorage.getItem("apptype")?this.navCtrl.navigateForward(["prices"]):this.navCtrl.navigateForward(["priceusd"])}}var P=e.ob({encapsulation:0,styles:[[".tf-tree.example[_ngcontent-%COMP%]{text-align:center}.back-button[_ngcontent-%COMP%]{margin-right:10px;margin-left:10px;color:#fff}.back-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:23px}ion-toolbar[_ngcontent-%COMP%]{--background:#494f58;color:#fff;--background:white}.header-md[_ngcontent-%COMP%]::after{background:0 0}.header-title[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000}ion-title[_ngcontent-%COMP%]{padding:0;text-align:center}.ion-card[_ngcontent-%COMP%]{width:900px}ion-card[_ngcontent-%COMP%]{width:17%;text-align:center;float:left}.tf-tree[_ngcontent-%COMP%]{clear:both}.ioncard1[_ngcontent-%COMP%], .ioncard2[_ngcontent-%COMP%], .ioncard3[_ngcontent-%COMP%], .ioncard4[_ngcontent-%COMP%], .ioncard5[_ngcontent-%COMP%]{background:#d8f9fe}table[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]{border:1px solid #eee}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px 0;border-right:1px solid #eee}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:50%;text-align:center;padding:10px 0;border-right:1px solid #eee}.capitalize[_ngcontent-%COMP%]{text-transform:capitalize}.active[_ngcontent-%COMP%]{--background:#c9a27c;--background-color:#c9a27c}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin-top:6px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:34px;font-size:12px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-right:1px solid #dfdfdf}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:35px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:16px;border-right:1px solid #dfdfdf}table[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:0!important}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:0 0!important}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:2px solid #cfcaab!important}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:0;margin:0}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:left;margin-left:20px;padding-left:20px}.pl-60[_ngcontent-%COMP%]{padding-left:60px!important}.pl-10[_ngcontent-%COMP%]{padding-left:10px!important}.left[_ngcontent-%COMP%]{text-align:left}.active[_ngcontent-%COMP%], .segment-button-checked[_ngcontent-%COMP%]{background:#92b243;color:#fff!important;border:2px solid #92b243!important}.scroll-arrow[_ngcontent-%COMP%]{position:absolute;margin-top:3.2%;width:100%;padding-top:4px;font-size:18px}.header-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--indicator-color:transparent!important;--indicator-color-checked:transparent!important;height:0;border-radius:0;min-height:31px;margin-left:2px;margin-right:2px;width:auto;--width:auto;min-width:auto;--min-width:auto;color:#000;font-size:12px;border:2px solid #92b243}.ios[_ngcontent-%COMP%]   .header-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--indicator-color:transparent!important;--indicator-color-checked:transparent!important;height:0;border-radius:5px;min-height:31px;margin-left:2px;margin-right:2px;width:auto;--width:auto;min-width:auto;--min-width:auto;color:#000;font-size:12px;border:2px solid #92b243}.header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{border:0;--border-width:0px}.ios[_ngcontent-%COMP%]   .type-columns[_ngcontent-%COMP%]{border:0 solid transparent!important;--border:0px solid transparent!important}.scroll-arrow[_ngcontent-%COMP%]   .lefticon[_ngcontent-%COMP%]{position:absolute;left:10px;z-index:999999;color:#000;padding:2px;width:18px;top:0}.scroll-arrow[_ngcontent-%COMP%]   .righticon[_ngcontent-%COMP%]{position:absolute;right:10px;z-index:999999;color:#000;padding:2px;width:18px;top:0}.basmatiState[_ngcontent-%COMP%]{margin:10px 30px 0}.ricetype[_ngcontent-%COMP%]{color:#000;font-size:30px;font-family:GlacialIndifference-bold;margin-bottom:0!important;margin-top:0!important}.font-17[_ngcontent-%COMP%]{font-size:14px;font-family:GlacialIndifference-bold}.green[_ngcontent-%COMP%]{color:#92b243}.green[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-transform:capitalize;font-size:18px!important}.porttitle[_ngcontent-%COMP%]{font-size:20px}ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:-2px 0 0;padding:0}.imageprev[_ngcontent-%COMP%]{min-height:200px;max-height:200px;height:200px}.hide[_ngcontent-%COMP%]{display:none}.show[_ngcontent-%COMP%]{display:block}.paddingBottom100[_ngcontent-%COMP%]{padding-bottom:100px}.item-native[_ngcontent-%COMP%]{--background-color:transparent;background:0 0;--background:transparent}.item-ionic-selectable[_ngcontent-%COMP%]{border:2px solid #92b243;border-radius:10px}.item-ionic-selectable[_ngcontent-%COMP%]   .item-native[_ngcontent-%COMP%]{--background-color:transparent;background:0 0;--background:transparent}ion-col[_ngcontent-%COMP%]{padding:0}ion-select[_ngcontent-%COMP%]{width:100%;--placeholder-color:#000!important;--placeholder-opacity:1!important}.select-placeholder[_ngcontent-%COMP%]{color:#000;--placeholder-color:#000!important}"]],data:{}});function f(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,4,"ion-select-option",[],null,null,null,u.Ib,u.N)),e.pb(1,49152,null,0,a.lb,[e.h,e.k,e.x],{value:[0,"value"]},null),(n()(),e.Kb(2,0,[" "," "])),(n()(),e.qb(3,0,null,0,0,"div",[],null,null,null,null,null)),(n()(),e.Kb(4,0,[" "," "]))],(function(n,l){n(l,1,0,e.ub(1,"",null==l.context.$implicit?null:l.context.$implicit.id,""))}),(function(n,l){n(l,2,0,null==l.context.$implicit?null:l.context.$implicit.bag_size),n(l,4,0,null==l.context.$implicit?null:l.context.$implicit.bag_type)}))}function M(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,u.Ib,u.N)),e.pb(1,49152,null,0,a.lb,[e.h,e.k,e.x],null,null),(n()(),e.Kb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.context.$implicit)}))}function _(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,u.Ib,u.N)),e.pb(1,49152,null,0,a.lb,[e.h,e.k,e.x],null,null),(n()(),e.Kb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.context.$implicit)}))}function O(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,u.Ib,u.N)),e.pb(1,49152,null,0,a.lb,[e.h,e.k,e.x],null,null),(n()(),e.Kb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.context.$implicit)}))}function k(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,9,"ion-header",[["class",""]],null,null,null,u.nb,u.r)),e.pb(1,49152,null,0,a.B,[e.h,e.k,e.x],null,null),(n()(),e.qb(2,0,null,0,7,"ion-toolbar",[["mode","ios"],["style","background: transparent; --background: transparent;padding: 0px;"]],null,null,null,u.Qb,u.U)),e.pb(3,49152,null,0,a.zb,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(n()(),e.qb(4,0,null,0,5,"div",[],null,null,null,null,null)),(n()(),e.qb(5,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.qb(6,0,null,null,3,"ion-buttons",[["class","back-button"],["slot","start"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.closeModal()&&e),e}),u.Z,u.d)),e.pb(7,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(n()(),e.qb(8,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,u.ob,u.s)),e.pb(9,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.qb(10,0,null,null,119,"ion-content",[["class",""]],null,null,null,u.hb,u.l)),e.pb(11,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(n()(),e.qb(12,0,null,0,115,"div",[["style","margin-bottom: 50px; padding: 0px 20px;"]],null,null,null,null,null)),(n()(),e.qb(13,0,null,null,103,"div",[["style","border-bottom: 2px solid #000;margin: 20px 0px"]],null,null,null,null,null)),(n()(),e.qb(14,0,null,null,1,"div",[["style","text-align: center;font-weight: bold;font-size: 20px"]],null,null,null,null,null)),(n()(),e.Kb(15,null,[" "," "," "])),(n()(),e.qb(16,0,null,null,18,"ion-row",[],null,null,null,u.Eb,u.I)),e.pb(17,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(18,0,null,0,2,"ion-col",[["size","12"],["style","font-size: 20px;line-height: 2.5;"]],null,null,null,u.gb,u.k)),e.pb(19,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.Kb(-1,0,["Packing: "])),(n()(),e.qb(21,0,null,0,13,"ion-col",[["size","12"],["style","border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;"]],null,null,null,u.gb,u.k)),e.pb(22,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(23,0,null,0,11,"ion-row",[],null,null,null,u.Eb,u.I)),e.pb(24,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(25,0,null,0,9,"ion-col",[],null,null,null,u.gb,u.k)),e.pb(26,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(n()(),e.qb(27,0,null,0,7,"ion-item",[["class","select"]],null,null,null,u.vb,u.x)),e.pb(28,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.qb(29,0,null,0,5,"ion-select",[["placeholder","Select"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.Cb(n,32)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Cb(n,32)._handleChangeEvent(t.target)&&o),"ionChange"===l&&(o=!1!==i.changeBag(t)&&o),o}),u.Jb,u.M)),e.Hb(5120,null,r.g,(function(n){return[n]}),[a.Nb]),e.pb(31,49152,null,0,a.kb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),e.pb(32,4341760,null,0,a.Nb,[e.p,e.k],null,null),(n()(),e.fb(16777216,null,0,1,null,f)),e.pb(34,278528,null,0,c.k,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.qb(35,0,null,null,10,"ion-row",[],null,null,null,u.Eb,u.I)),e.pb(36,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(37,0,null,0,2,"ion-col",[["size","12"],["style","font-size: 20px;line-height: 2.5"]],null,null,null,u.gb,u.k)),e.pb(38,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.Kb(-1,0,["FOB Price: "])),(n()(),e.qb(40,0,null,0,5,"ion-col",[["size","12"],["style","border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;"]],null,null,null,u.gb,u.k)),e.pb(41,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(42,0,null,0,3,"ion-item",[["class","select"],["style",""]],null,null,null,u.vb,u.x)),e.pb(43,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.qb(44,0,null,0,1,"h4",[["style","padding: 0;margin: 0;width: 100%;text-align: left;"]],null,null,null,null,null)),(n()(),e.Kb(45,null,["$"," - $"," PMT"])),(n()(),e.qb(46,0,null,null,50,"ion-row",[],null,null,null,u.Eb,u.I)),e.pb(47,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(48,0,null,0,2,"ion-col",[["size","12"],["style","font-size: 20px;line-height: 2.5"]],null,null,null,u.gb,u.k)),e.pb(49,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.Kb(-1,0,["Port: "])),(n()(),e.qb(51,0,null,0,45,"ion-col",[["size","12"]],null,null,null,u.gb,u.k)),e.pb(52,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(53,0,null,0,43,"ion-row",[],null,null,null,u.Eb,u.I)),e.pb(54,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(55,0,null,0,15,"ion-col",[["size","12"],["style","border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;margin-bottom: 15px;"]],null,null,null,u.gb,u.k)),e.pb(56,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(57,0,null,0,13,"ion-item",[["class","select"],["style",""]],null,null,null,u.vb,u.x)),e.pb(58,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.qb(59,0,null,0,2,"ion-label",[["style","font-size: 15px;"]],null,null,null,u.wb,u.A)),e.pb(60,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Kb(-1,0,["REGION"])),(n()(),e.qb(62,0,null,0,8,"ion-select",[["placeholder","Select"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.Cb(n,63)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Cb(n,63)._handleChangeEvent(t.target)&&o),"ngModelChange"===l&&(o=!1!==(i.selectedUserRegion=t)&&o),"ionChange"===l&&(o=!1!==i.changeRegion(t)&&o),o}),u.Jb,u.M)),e.pb(63,4341760,null,0,a.Nb,[e.p,e.k],null,null),e.Hb(1024,null,r.g,(function(n){return[n]}),[a.Nb]),e.pb(65,671744,null,0,r.l,[[8,null],[8,null],[8,null],[6,r.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,r.h,null,[r.l]),e.pb(67,16384,null,0,r.i,[[4,r.h]],null,null),e.pb(68,49152,null,0,a.kb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),(n()(),e.fb(16777216,null,0,1,null,M)),e.pb(70,278528,null,0,c.k,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.qb(71,0,null,0,12,"ion-col",[["size","12"],["style","border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;margin-bottom: 15px;"]],null,null,null,u.gb,u.k)),e.pb(72,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(73,0,null,0,10,"ion-item",[["class","select"],["style",""]],null,null,null,u.vb,u.x)),e.pb(74,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.qb(75,0,null,0,2,"ion-label",[["style","font-size: 15px;"]],null,null,null,u.wb,u.A)),e.pb(76,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Kb(-1,0,["COUNTRY"])),(n()(),e.qb(78,0,null,0,5,"ion-select",[["placeholder","Select"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.Cb(n,81)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Cb(n,81)._handleChangeEvent(t.target)&&o),"ionChange"===l&&(o=!1!==i.changeCountry(t)&&o),o}),u.Jb,u.M)),e.Hb(5120,null,r.g,(function(n){return[n]}),[a.Nb]),e.pb(80,49152,null,0,a.kb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),e.pb(81,4341760,null,0,a.Nb,[e.p,e.k],null,null),(n()(),e.fb(16777216,null,0,1,null,_)),e.pb(83,278528,null,0,c.k,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.qb(84,0,null,0,12,"ion-col",[["size","12"],["style","border: 1px solid rgba(225, 225, 225, 1);border-radius: 100px;overflow: hidden;margin-bottom: 15px;"]],null,null,null,u.gb,u.k)),e.pb(85,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(86,0,null,0,10,"ion-item",[["class","select"],["style",""]],null,null,null,u.vb,u.x)),e.pb(87,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.qb(88,0,null,0,2,"ion-label",[["style","font-size: 15px;"]],null,null,null,u.wb,u.A)),e.pb(89,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Kb(-1,0,["PORT"])),(n()(),e.qb(91,0,null,0,5,"ion-select",[["placeholder","Select"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.Cb(n,94)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Cb(n,94)._handleChangeEvent(t.target)&&o),"ionChange"===l&&(o=!1!==i.changePort(t)&&o),o}),u.Jb,u.M)),e.Hb(5120,null,r.g,(function(n){return[n]}),[a.Nb]),e.pb(93,49152,null,0,a.kb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),e.pb(94,4341760,null,0,a.Nb,[e.p,e.k],null,null),(n()(),e.fb(16777216,null,0,1,null,O)),e.pb(96,278528,null,0,c.k,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.qb(97,0,null,null,9,"ion-row",[],null,null,null,u.Eb,u.I)),e.pb(98,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(99,0,null,0,3,"ion-col",[["size","6"]],null,null,null,u.gb,u.k)),e.pb(100,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(101,0,null,0,1,"p",[["style","margin-left: 5px;font-size: 14px;padding: 0px"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Ocean Freight PMT: "])),(n()(),e.qb(103,0,null,0,3,"ion-col",[["size","6"]],null,null,null,u.gb,u.k)),e.pb(104,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(105,0,null,0,1,"p",[["style","font-size: 14px; text-transform: uppercase; font-weight: bold; list-style: none; padding: 0; text-align: right;margin-right: 14px;color: rgba(119, 154, 32, 1)"]],null,null,null,null,null)),(n()(),e.Kb(106,null,[" "," ($",")"])),(n()(),e.qb(107,0,null,null,9,"ion-row",[],null,null,null,u.Eb,u.I)),e.pb(108,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(109,0,null,0,3,"ion-col",[["size","6"]],null,null,null,u.gb,u.k)),e.pb(110,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(111,0,null,0,1,"p",[["style","margin-left: 5px;font-size: 14px;padding: 0px"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["CIF Price:"])),(n()(),e.qb(113,0,null,0,3,"ion-col",[["size"," 6"]],null,null,null,u.gb,u.k)),e.pb(114,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(115,0,null,0,1,"p",[["style","font-size: 14px; text-transform: uppercase; font-weight: bold; list-style: none; padding: 0; text-align: right;margin-right: 14px;color: rgba(119, 154, 32, 1);"]],null,null,null,null,null)),(n()(),e.Kb(116,null,[" $"," - $"," PMT"])),(n()(),e.qb(117,0,null,null,1,"div",[["style","text-align: center;font-size: 20px;"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,[" Rice Graph "])),(n()(),e.qb(119,0,null,null,8,"ion-row",[["style","margin-bottom: 100px;"]],null,null,null,u.Eb,u.I)),e.pb(120,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(121,0,null,0,1,"ion-col",[["size","0.5"]],null,null,null,u.gb,u.k)),e.pb(122,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(123,0,null,0,2,"ion-col",[],null,null,null,u.gb,u.k)),e.pb(124,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(n()(),e.qb(125,0,null,0,0,"div",[["id","highcharts"],["style","width: 100%; height:300"]],null,null,null,null,null)),(n()(),e.qb(126,0,null,0,1,"ion-col",[["size","0.5"]],null,null,null,u.gb,u.k)),e.pb(127,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(128,0,null,0,1,"app-menu",[],null,null,null,s.b,s.a)),e.pb(129,114688,null,0,b.a,[g.a,a.Gb,a.Eb,p.a,a.Fb,a.Pb,d.m],null,null)],(function(n,l){var t=l.component;n(l,3,0,"ios"),n(l,9,0,"arrow-back-outline"),n(l,19,0,"12"),n(l,22,0,"12"),n(l,31,0,"Select"),n(l,34,0,t.packing),n(l,38,0,"12"),n(l,41,0,"12"),n(l,49,0,"12"),n(l,52,0,"12"),n(l,56,0,"12"),n(l,65,0,t.selectedUserRegion),n(l,68,0,"Select"),n(l,70,0,t.regions),n(l,72,0,"12"),n(l,80,0,"Select"),n(l,83,0,t.country),n(l,85,0,"12"),n(l,93,0,"Select"),n(l,96,0,t.selectedPorts),n(l,100,0,"6"),n(l,104,0,"6"),n(l,110,0,"6"),n(l,114,0," 6"),n(l,122,0,"0.5"),n(l,127,0,"0.5"),n(l,129,0)}),(function(n,l){var t=l.component;n(l,15,0,null==t.riceQuality?null:t.riceQuality.quality,null==t.riceQuality?null:t.riceQuality.quality_name),n(l,45,0,t.fobminDataUpdated,t.fobmaxDataUpdated),n(l,62,0,e.Cb(l,67).ngClassUntouched,e.Cb(l,67).ngClassTouched,e.Cb(l,67).ngClassPristine,e.Cb(l,67).ngClassDirty,e.Cb(l,67).ngClassValid,e.Cb(l,67).ngClassInvalid,e.Cb(l,67).ngClassPending),n(l,106,0,t.defalutPort,t.defalutPortPrice),n(l,116,0,t.CIFminData,t.CIFmaxData)}))}function y(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,1,"app-quality-details",[],null,null,null,k,P)),e.pb(1,114688,null,0,C,[a.Gb,p.a,a.Db,g.a,a.Fb,g.a,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}var v=e.mb("app-quality-details",C,y,{},{},[]),z=t("j1ZV");class q{}t.d(l,"QualityDetailsPageModuleNgFactory",(function(){return w}));var w=e.nb(o,[],(function(n){return e.zb([e.Ab(512,e.j,e.Y,[[8,[i.a,v]],[3,e.j],e.v]),e.Ab(4608,c.n,c.m,[e.s,[2,c.B]]),e.Ab(4608,r.p,r.p,[]),e.Ab(4608,a.c,a.c,[e.x,e.g]),e.Ab(4608,a.Fb,a.Fb,[a.c,e.j,e.p]),e.Ab(4608,a.Kb,a.Kb,[a.c,e.j,e.p]),e.Ab(1073742336,c.b,c.b,[]),e.Ab(1073742336,r.o,r.o,[]),e.Ab(1073742336,r.d,r.d,[]),e.Ab(1073742336,a.Bb,a.Bb,[]),e.Ab(1073742336,z.a,z.a,[]),e.Ab(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),e.Ab(1073742336,q,q,[]),e.Ab(1073742336,o,o,[]),e.Ab(1024,d.k,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);