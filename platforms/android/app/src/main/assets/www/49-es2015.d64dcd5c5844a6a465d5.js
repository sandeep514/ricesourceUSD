(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{hKrX:function(n,t,l){"use strict";l.r(t);var e=l("8Y7J");class o{}var i=l("pMnS"),r=l("MKJQ"),a=l("sZkV"),c=l("SVse"),u=l("s7LF"),s=l("pWbT"),p=l("TGkX"),g=l("+QWb"),b=l("2yus"),d=l("iInd"),h=l("EVdn");class m{constructor(n,t,l){this.apiser=n,this.navCtrl=t,this.componentService=l,this.areaData="gujarat",this.selectedTransportState="",this.selectedPortData="",this.isNull=!1,this.imagePre=this.apiser.imageUrl,this.getTransportState()}ngOnInit(){this.getTransportState(),this.getTransportState(),this.componentService.selectedPort.subscribe(n=>{this.selectedTransportState=n})}getTransportState(){this.componentService.presentLoading().then(()=>{this.apiser.getTransportStates().then(n=>{if(this.listStates=n.data,this.listStates.length>0){let n=Object.keys(this.listStates[0]);this.selectedTransportState=this.lowerCase(n[0]),console.log(this.selectedTransportState)}let t=this.selectedTransportState.toLowerCase();console.log("inLowerCase"),console.log(t),this.getDetails(t),this.componentService.loadingController.dismiss(),setTimeout(()=>{this.componentService.loadingController.dismiss()},1e3),setTimeout(()=>{document.getElementById(t).click()},1500)},n=>{this.componentService.loadingController.dismiss(),setTimeout(()=>{this.componentService.loadingController.dismiss()},1e3),this.componentService.loadingController.dismiss()})})}ionViewDidEnter(){this.getList().then(n=>{this.getDataDetails(this.areaData)},n=>{})}scroll(n,t){"left"==n?h("."+t).animate({scrollLeft:"-=135px"},"slow"):h("."+t).animate({scrollLeft:"+=135px"},"slow")}removePopover(){}getList(){return new Promise((n,t)=>{this.apiser.listPorts().then(t=>{this.listPort=t.list,n("true")},n=>{t("false")})})}Details(){}explodeString(n){let t=n.split(" ").length;return console.log(n.split(" ")[t-1]),n.split(" ")[t-1]}getPortDetails(n){this.selectedTransportState="";let t=n.target.innerText.toLowerCase();this.componentService.selectedPort.next(t),this.apiser.getPortDetails(t).then(n=>{this.selectedPortData=n.data,this.portImages=n.portImage,console.log(this.portImages),this.isNull=0==n.data.length,this.componentService.loadingController.dismiss(),this.selectedTransportState=t,console.log(t),setTimeout(()=>{this.componentService.loadingController.dismiss()},1e3)},n=>{this.componentService.loadingController.dismiss(),setTimeout(()=>{this.componentService.loadingController.dismiss()},1e3)})}getDetails(n){if(null!=n.target){let t=n.target.innerText.toLowerCase();this.apiser.getPortDetails(t).then(n=>{this.selectedTransportState=t,this.selectedPortData=n.data,this.portImages=n.portImage,console.log(this.portImages),this.componentService.loadingController.dismiss()},n=>{this.componentService.loadingController.dismiss()})}}getDataDetails(n){this.listPortArea=this.listPort[n],this.areaData=n}closeModal(){this.navCtrl.back()}lowerCase(n){return n.toLowerCase()}convertedToJson(n){if(console.log(typeof n),console.log(n.banner),null!=n&&"object"==typeof n)return n.banner}}var P=e.nb({encapsulation:0,styles:[[".tf-tree.example[_ngcontent-%COMP%]{text-align:center}.back-button[_ngcontent-%COMP%]{margin-right:10px;margin-left:10px;color:#fff}.back-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:23px}ion-toolbar[_ngcontent-%COMP%]{--background:#494f58;color:#fff;--background:white}.header-md[_ngcontent-%COMP%]::after{background:0 0}.header-title[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000}ion-title[_ngcontent-%COMP%]{padding:0;text-align:center}.ion-card[_ngcontent-%COMP%]{width:900px}ion-card[_ngcontent-%COMP%]{width:17%;text-align:center;float:left}.tf-tree[_ngcontent-%COMP%]{clear:both}.ioncard1[_ngcontent-%COMP%], .ioncard2[_ngcontent-%COMP%], .ioncard3[_ngcontent-%COMP%], .ioncard4[_ngcontent-%COMP%], .ioncard5[_ngcontent-%COMP%]{background:#d8f9fe}table[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]{border:1px solid #eee}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px 0;border-right:1px solid #eee}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:50%;text-align:center;padding:10px 0;border-right:1px solid #eee}.capitalize[_ngcontent-%COMP%]{text-transform:capitalize}.active[_ngcontent-%COMP%]{--background:#c9a27c;--background-color:#c9a27c;background:#eefcce;color:#fff!important;border:2px solid #eefcce!important}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin-top:6px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:34px;font-size:12px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-right:1px solid #dfdfdf}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:35px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:16px;border-right:1px solid #dfdfdf}table[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:0!important}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:0 0!important}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #cfcaab!important}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:0;margin:0}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:left;margin-left:20px;padding-left:20px}.pl-60[_ngcontent-%COMP%]{padding-left:60px!important}.pl-10[_ngcontent-%COMP%]{padding-left:10px!important}.left[_ngcontent-%COMP%]{text-align:left}.scroll-arrow[_ngcontent-%COMP%]{position:absolute;margin-top:3.2%;width:100%;padding-top:4px;font-size:18px}.header-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%], .ios[_ngcontent-%COMP%]   .header-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--indicator-color:transparent!important;--indicator-color-checked:transparent!important;height:0;border-radius:25px;min-height:40px;margin-left:2px;margin-right:2px;width:auto;--width:auto;min-width:auto;--min-width:auto;color:#000;font-size:12px;border:2px solid #e1e1e1}.header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{border:0;--border-width:0px}.ios[_ngcontent-%COMP%]   .type-columns[_ngcontent-%COMP%]{border:0 solid transparent!important;--border:0px solid transparent!important}.scroll-arrow[_ngcontent-%COMP%]   .lefticon[_ngcontent-%COMP%]{position:absolute;left:10px;z-index:999999;color:#000;padding:2px;width:18px;top:0}.scroll-arrow[_ngcontent-%COMP%]   .righticon[_ngcontent-%COMP%]{position:absolute;right:10px;z-index:999999;color:#000;padding:2px;width:18px;top:0}.basmatiState[_ngcontent-%COMP%]{margin:0 10px}.ricetype[_ngcontent-%COMP%]{color:#000;font-size:30px;font-family:GlacialIndifference-bold;margin-bottom:0!important;margin-top:0!important}.font-17[_ngcontent-%COMP%]{font-size:14px;font-family:GlacialIndifference-bold}.green[_ngcontent-%COMP%]{color:#92b243}.green[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-transform:capitalize;font-size:18px!important}.porttitle[_ngcontent-%COMP%]{font-size:20px}.segment-button-checked[_ngcontent-%COMP%]{background:#eefcce;color:#fff!important;border:2px solid #eefcce!important}.segment-button-checked[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#779a20!important}.imageprev[_ngcontent-%COMP%]{min-height:200px;max-height:200px;height:200px}.hide[_ngcontent-%COMP%]{display:none}.show[_ngcontent-%COMP%]{display:block}.paddingBottom100[_ngcontent-%COMP%]{padding-bottom:100px}ion-segment[_ngcontent-%COMP%], ion-segment.active[_ngcontent-%COMP%]{height:50px}ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:-2px 0 0;padding:5px;color:#7b7966;font-size:14px;font-family:Poppins-Bold}ion-segment.active[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:-2px 0 0;padding:5px;color:#779a20!important;font-size:14px;font-family:Poppins-Bold}"]],data:{}});function C(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,2,"ion-row",[["class","here"]],null,null,null,r.Eb,r.I)),e.ob(1,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,0,"img",[["class","app-logo"],["style","width: 100%;"]],[[8,"src",4]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,2,0,e.tb(2,"",l.imagePre,"uploads/port/",l.portImages.attachment,""))}))}function M(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,4,"ion-segment-button",[],[[8,"id",0],[2,"active",null]],null,null,r.Gb,r.L)),e.ob(1,49152,null,0,a.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(n()(),e.pb(2,0,null,0,2,"ion-label",[["style","margin-top: -2px"]],null,null,null,r.wb,r.A)),e.ob(3,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Jb(4,0,[" ",""]))],(function(n,t){n(t,1,0,e.tb(1,"",t.context.$implicit.key,""))}),(function(n,t){var l=t.component;n(t,0,0,e.tb(1,"",l.lowerCase(t.context.$implicit.key),""),l.lowerCase(t.context.$implicit.key)==l.selectedTransportState),n(t,4,0,t.context.$implicit.key)}))}function f(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,3,null,null,null,null,null,null,null)),(n()(),e.eb(16777216,null,null,2,null,M)),e.ob(2,278528,null,0,c.k,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Db(0,c.f,[e.r]),(n()(),e.eb(0,null,null,0))],(function(n,t){n(t,2,0,e.Kb(t,2,0,e.Bb(t,3).transform(t.context.$implicit.value)))}),null)}function O(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,4,"tr",[["class","green"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,1,"td",[["class","sticky-col first-col left pl-10"],["style","font-size: 14px !important;color: #464646;font-family: 'Poppins-Regular';"]],null,null,null,null,null)),(n()(),e.Jb(2,null,[" "," "])),(n()(),e.pb(3,0,null,null,1,"td",[["class","type-columns"],["style","width:180px;border: none ;--border: none;color: #232000;font-size: 16px !important;font-family: 'Poppins-SemiBold';"]],null,null,null,null,null)),(n()(),e.Jb(4,null,[" \u20b9 "," "]))],null,(function(n,t){var l=t.context.$implicit.route.replace("_"," ");n(t,2,0,l),n(t,4,0,t.context.$implicit.price)}))}function _(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,1,"td",[["colspan","2"],["style","text-align: center;"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,[" No port found "]))],null,null)}function x(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,12,"ion-header",[["class",""],["style","background-color: #ECECEC;"]],null,null,null,r.nb,r.r)),e.ob(1,49152,null,0,a.B,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,8,"ion-toolbar",[["mode","ios"],["style","background: transparent; --background: transparent"]],null,null,null,r.Qb,r.U)),e.ob(3,49152,null,0,a.zb,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(n()(),e.pb(4,0,null,0,3,"ion-buttons",[["class","back-button"],["slot","start"]],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.closeModal()&&e),e}),r.Z,r.d)),e.ob(5,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(n()(),e.pb(6,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,r.ob,r.s)),e.ob(7,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.pb(8,0,null,0,2,"ion-title",[["class","header-title porttitle"]],null,null,null,r.Pb,r.T)),e.ob(9,49152,null,0,a.xb,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["Freight"])),(n()(),e.eb(16777216,null,0,1,null,C)),e.ob(12,16384,null,0,c.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(13,0,null,null,36,"ion-content",[["class",""],["style","border: 2px solid red;"]],null,null,null,r.hb,r.l)),e.ob(14,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(n()(),e.pb(15,0,null,0,31,"div",[["style","margin-bottom: 55px;"]],null,null,null,null,null)),(n()(),e.pb(16,0,null,null,10,"ion-row",[["style","padding-top: 14px;height: auto;"]],null,null,null,r.Eb,r.I)),e.ob(17,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.pb(18,0,null,0,8,"ion-col",[["class","pt0 pb0 "],["style","padding: 0px;"]],null,null,null,r.gb,r.k)),e.ob(19,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(n()(),e.pb(20,0,null,0,6,"ion-segment",[["class","header-segment table-responsive-1 basmatiState"],["scrollable",""]],null,[[null,"click"],[null,"ionBlur"],[null,"ionChange"]],(function(n,t,l){var o=!0,i=n.component;return"ionBlur"===t&&(o=!1!==e.Bb(n,23)._handleBlurEvent(l.target)&&o),"ionChange"===t&&(o=!1!==e.Bb(n,23)._handleChangeEvent(l.target)&&o),"click"===t&&(o=!1!==i.getPortDetails(l)&&o),o}),r.Hb,r.K)),e.Gb(5120,null,u.g,(function(n){return[n]}),[a.Nb]),e.ob(22,49152,null,0,a.ib,[e.h,e.k,e.x],{scrollable:[0,"scrollable"],value:[1,"value"]},null),e.ob(23,4341760,null,0,a.Nb,[e.p,e.k],null,null),(n()(),e.eb(16777216,null,0,2,null,f)),e.ob(25,278528,null,0,c.k,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Db(0,c.f,[e.r]),(n()(),e.pb(27,0,null,null,19,null,null,null,null,null,null,null)),(n()(),e.pb(28,0,null,null,18,"ion-row",[["class","ion-padding table-row padd-5 paddingBottom100"],["style","padding: 0px 10px;"]],null,null,null,r.Eb,r.I)),e.ob(29,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.pb(30,0,null,0,16,"ion-col",[["class","price-table dashboard"]],null,null,null,r.gb,r.k)),e.ob(31,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(n()(),e.pb(32,0,null,0,14,"table",[["class","table"]],null,null,null,null,null)),(n()(),e.pb(33,0,null,null,8,"thead",[],null,null,null,null,null)),(n()(),e.pb(34,0,null,null,6,"tr",[],null,null,null,null,null)),(n()(),e.pb(35,0,null,null,2,"th",[["class","sticky-col first-col left pl-10"],["style","width:60%"]],null,null,null,null,null)),(n()(),e.pb(36,0,null,null,1,"h4",[["class","black ricetype"],["style","font-family: 'Poppins-SemiBold';font-size: 16px;"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,[" Destination"])),(n()(),e.pb(38,0,null,null,2,"th",[["class","sticky-col first-col left pl-10"],["style","width:60%"]],null,null,null,null,null)),(n()(),e.pb(39,0,null,null,1,"h4",[["class","black ricetype"],["style","font-family: 'Poppins-SemiBold';font-size: 16px;"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,[" Prices in Qtls"])),(n()(),e.pb(41,0,null,null,0,"div",[["class","popoverley"]],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.removePopover()&&e),e}),null,null)),(n()(),e.pb(42,0,null,null,4,"tbody",[["class","user_price"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,O)),e.ob(44,278528,null,0,c.k,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.eb(16777216,null,null,1,null,_)),e.ob(46,16384,null,0,c.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(47,0,null,0,0,"button",[["id","details"]],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.Details()&&e),e}),null,null)),(n()(),e.pb(48,0,null,0,1,"app-menu",[],null,null,null,s.b,s.a)),e.ob(49,114688,null,0,p.a,[g.a,a.Gb,a.Eb,b.a,a.Fb,a.Pb,d.m],null,null)],(function(n,t){var l=t.component;n(t,3,0,"ios"),n(t,7,0,"arrow-back-outline"),n(t,12,0,null!=l.portImages),n(t,22,0,"",e.tb(1,"",l.states,"")),n(t,25,0,e.Kb(t,25,0,e.Bb(t,26).transform(l.listStates))),n(t,44,0,l.selectedPortData),n(t,46,0,1==l.isNull),n(t,49,0)}),null)}function k(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,1,"app-port",[],null,null,null,x,P)),e.ob(1,114688,null,0,m,[b.a,a.Gb,g.a],null,null)],(function(n,t){n(t,1,0)}),null)}var y=e.lb("app-port",m,k,{},{},[]),v=l("j1ZV");class w{}l.d(t,"PortPageModuleNgFactory",(function(){return S}));var S=e.mb(o,[],(function(n){return e.yb([e.zb(512,e.j,e.X,[[8,[i.a,y]],[3,e.j],e.v]),e.zb(4608,c.n,c.m,[e.s,[2,c.B]]),e.zb(4608,u.p,u.p,[]),e.zb(4608,a.c,a.c,[e.x,e.g]),e.zb(4608,a.Fb,a.Fb,[a.c,e.j,e.p]),e.zb(4608,a.Kb,a.Kb,[a.c,e.j,e.p]),e.zb(1073742336,c.b,c.b,[]),e.zb(1073742336,u.o,u.o,[]),e.zb(1073742336,u.d,u.d,[]),e.zb(1073742336,a.Bb,a.Bb,[]),e.zb(1073742336,v.a,v.a,[]),e.zb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),e.zb(1073742336,w,w,[]),e.zb(1073742336,o,o,[]),e.zb(1024,d.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);