(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{bXQ8:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class o{}var u=t("pMnS"),i=t("MKJQ"),a=t("sZkV"),c=t("s7LF"),r=t("SVse"),b=t("pWbT"),g=t("TGkX"),p=t("+QWb"),s=t("2yus"),d=t("iInd");class h{constructor(n,l,t,e){this.apiser=n,this.navCtrl=l,this.componentService=t,this.location=e,this.selectedCoun=""}ngOnInit(){this.getTransportState()}getTransportState(){this.componentService.presentLoading().then(()=>{this.apiser.getOceanPorts().then(n=>{this.componentService.loadingController.dismiss(),this.regions=Object.values(n.region).sort(),this.data=n.data,console.log(n.data)},n=>{this.componentService.loadingController.dismiss()})})}changecountry(n){let l=n.detail.value;this.selectedResign=l,this.countries=Object.keys(this.data[l]).sort(),this.ports=[],this.selectedCoun=""}getPortList(n){let l=this.data[this.selectedResign][n.detail.value];console.log(this.selectedCoun),this.ports=l,console.log(l)}close(){this.location.back()}}var C=e.ob({encapsulation:0,styles:[[".tf-tree.example[_ngcontent-%COMP%]{text-align:center}.back-button[_ngcontent-%COMP%]{margin-right:10px;margin-left:10px;color:#fff}.back-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:23px}ion-toolbar[_ngcontent-%COMP%]{--background:#494f58;color:#fff;--background:white}.header-md[_ngcontent-%COMP%]::after{background:0 0}.header-title[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000}ion-title[_ngcontent-%COMP%]{padding:0;text-align:center}.ion-card[_ngcontent-%COMP%]{width:900px}ion-card[_ngcontent-%COMP%]{width:17%;text-align:center;float:left}.tf-tree[_ngcontent-%COMP%]{clear:both}.ioncard1[_ngcontent-%COMP%], .ioncard2[_ngcontent-%COMP%], .ioncard3[_ngcontent-%COMP%], .ioncard4[_ngcontent-%COMP%], .ioncard5[_ngcontent-%COMP%]{background:#d8f9fe}table[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]{border:1px solid #eee}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px 0;border-right:1px solid #eee}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:50%;text-align:center;padding:10px 0;border-right:1px solid #eee}.capitalize[_ngcontent-%COMP%]{text-transform:capitalize}.active[_ngcontent-%COMP%]{--background:#c9a27c;--background-color:#c9a27c}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin-top:6px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:50px;font-size:12px;background-color:#fffbd6!important}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:35px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:16px}table[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:0!important}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:0 0!important}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:2px solid #cfcaab!important}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:0;margin:0}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:left;margin-left:20px;padding-left:20px}.pl-60[_ngcontent-%COMP%]{padding-left:60px!important}.pl-10[_ngcontent-%COMP%]{padding-left:10px!important}.left[_ngcontent-%COMP%]{text-align:left}.active[_ngcontent-%COMP%], .segment-button-checked[_ngcontent-%COMP%]{background:#92b243;color:#fff!important;border:2px solid #92b243!important}.scroll-arrow[_ngcontent-%COMP%]{position:absolute;margin-top:3.2%;width:100%;padding-top:4px;font-size:18px}.header-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--indicator-color:transparent!important;--indicator-color-checked:transparent!important;height:0;border-radius:0;min-height:31px;margin-left:2px;margin-right:2px;width:auto;--width:auto;min-width:auto;--min-width:auto;color:#000;font-size:12px;border:2px solid #92b243}.ios[_ngcontent-%COMP%]   .header-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--indicator-color:transparent!important;--indicator-color-checked:transparent!important;height:0;border-radius:5px;min-height:31px;margin-left:2px;margin-right:2px;width:auto;--width:auto;min-width:auto;--min-width:auto;color:#000;font-size:12px;border:2px solid #92b243}.header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{border:0;--border-width:0px}.ios[_ngcontent-%COMP%]   .type-columns[_ngcontent-%COMP%]{border:0 solid transparent!important;--border:0px solid transparent!important}.scroll-arrow[_ngcontent-%COMP%]   .lefticon[_ngcontent-%COMP%]{position:absolute;left:10px;z-index:999999;color:#000;padding:2px;width:18px;top:0}.scroll-arrow[_ngcontent-%COMP%]   .righticon[_ngcontent-%COMP%]{position:absolute;right:10px;z-index:999999;color:#000;padding:2px;width:18px;top:0}.basmatiState[_ngcontent-%COMP%]{margin:10px 30px 0}.ricetype[_ngcontent-%COMP%]{color:#000;font-size:30px;font-family:GlacialIndifference-bold;margin-bottom:0!important;margin-top:0!important}.font-17[_ngcontent-%COMP%]{font-size:14px;font-family:GlacialIndifference-bold}.green[_ngcontent-%COMP%]{color:#92b243}.green[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-transform:capitalize;font-size:18px!important}.porttitle[_ngcontent-%COMP%]{font-size:20px}ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:-2px 0 0;padding:0}.imageprev[_ngcontent-%COMP%]{min-height:200px;max-height:200px;height:200px}.hide[_ngcontent-%COMP%]{display:none}.show[_ngcontent-%COMP%]{display:block}.paddingBottom100[_ngcontent-%COMP%]{padding-bottom:100px}label[_ngcontent-%COMP%]{opacity:1!important;--opacity:1!important}ion-select[_ngcontent-%COMP%]{--placeholder-opacity:1!important;color:#000}"]],data:{}});function M(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,i.Ib,i.N)),e.pb(1,49152,null,0,a.lb,[e.h,e.k,e.x],null,null),(n()(),e.Kb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.context.$implicit)}))}function P(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,i.Ib,i.N)),e.pb(1,49152,null,0,a.lb,[e.h,e.k,e.x],null,null),(n()(),e.Kb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.context.$implicit)}))}function O(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,4,"tr",[["class","green"],["style","height: 50px;"]],null,null,null,null,null)),(n()(),e.qb(1,0,null,null,1,"td",[["class","sticky-col first-col left pl-10"],["style","color: rgba(70, 70, 70, 1);font-size: 18px;width:40%;font-size: 14px !important;font-family: 'Poppins-Regular';text-align: left;padding-left: 20px;"]],null,null,null,null,null)),(n()(),e.Kb(2,null,[" "," "])),(n()(),e.qb(3,0,null,null,1,"td",[["class","type-columns"],["style","color: #000;width:30%;font-size: 16px !important;font-family: 'Poppins-SemiBold';text-align: center;padding-right: 20px;"]],null,null,null,null,null)),(n()(),e.Kb(4,null,[" $ "," - "," "]))],null,(function(n,l){n(l,2,0,l.context.$implicit.port),n(l,4,0,l.context.$implicit.freight_21MT,l.context.$implicit.freight_25MT)}))}function _(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),e.qb(1,0,null,null,1,"td",[["colspan","2"],["style","text-align: center;"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,[" No port found "]))],null,null)}function f(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,10,"ion-header",[["class",""]],null,null,null,i.nb,i.r)),e.pb(1,49152,null,0,a.B,[e.h,e.k,e.x],null,null),(n()(),e.qb(2,0,null,0,8,"ion-toolbar",[["mode","ios"],["style","background: transparent; --background: transparent"]],null,null,null,i.Qb,i.U)),e.pb(3,49152,null,0,a.zb,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(n()(),e.qb(4,0,null,0,3,"ion-buttons",[["class","back-button"],["slot","start"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.close()&&e),e}),i.Z,i.d)),e.pb(5,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(n()(),e.qb(6,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,i.ob,i.s)),e.pb(7,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.qb(8,0,null,0,2,"ion-title",[["class","header-title porttitle"]],null,null,null,i.Pb,i.T)),e.pb(9,49152,null,0,a.xb,[e.h,e.k,e.x],null,null),(n()(),e.Kb(-1,0,["Freight"])),(n()(),e.qb(11,0,null,null,52,"ion-content",[["class",""]],null,null,null,i.hb,i.l)),e.pb(12,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(n()(),e.qb(13,0,null,0,48,"div",[],null,null,null,null,null)),(n()(),e.qb(14,0,null,null,30,"ion-row",[["style","padding-top: 14px;"]],null,null,null,i.Eb,i.I)),e.pb(15,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(16,0,null,0,12,"ion-col",[["size","6"]],null,null,null,i.gb,i.k)),e.pb(17,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(18,0,null,0,10,"ion-item",[["class","select"],["style","background: rgba(238, 252, 206, 1);--background: rgba(238, 252, 206, 1);border-radius: 100px"]],null,null,null,i.vb,i.x)),e.pb(19,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.qb(20,0,null,0,2,"ion-label",[],null,null,null,i.wb,i.A)),e.pb(21,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Kb(-1,0,["Region"])),(n()(),e.qb(23,0,null,0,5,"ion-select",[["placeholder",""]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.Cb(n,26)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Cb(n,26)._handleChangeEvent(t.target)&&o),"ionChange"===l&&(o=!1!==u.changecountry(t)&&o),o}),i.Jb,i.M)),e.Hb(5120,null,c.g,(function(n){return[n]}),[a.Nb]),e.pb(25,49152,null,0,a.kb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),e.pb(26,4341760,null,0,a.Nb,[e.p,e.k],null,null),(n()(),e.fb(16777216,null,0,1,null,M)),e.pb(28,278528,null,0,r.k,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.qb(29,0,null,0,15,"ion-col",[["size","6"]],null,null,null,i.gb,i.k)),e.pb(30,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(31,0,null,0,13,"ion-item",[["class","select"],["style","background: rgba(238, 252, 206, 1);--background: rgba(238, 252, 206, 1);border-radius: 100px"]],null,null,null,i.vb,i.x)),e.pb(32,49152,null,0,a.H,[e.h,e.k,e.x],null,null),(n()(),e.qb(33,0,null,0,2,"ion-label",[],null,null,null,i.wb,i.A)),e.pb(34,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(n()(),e.Kb(-1,0,["Country"])),(n()(),e.qb(36,0,null,0,8,"ion-select",[["placeholder",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.Cb(n,37)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Cb(n,37)._handleChangeEvent(t.target)&&o),"ngModelChange"===l&&(o=!1!==(u.selectedCoun=t)&&o),"ionChange"===l&&(o=!1!==u.getPortList(t)&&o),o}),i.Jb,i.M)),e.pb(37,4341760,null,0,a.Nb,[e.p,e.k],null,null),e.Hb(1024,null,c.g,(function(n){return[n]}),[a.Nb]),e.pb(39,671744,null,0,c.l,[[8,null],[8,null],[8,null],[6,c.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,c.h,null,[c.l]),e.pb(41,16384,null,0,c.i,[[4,c.h]],null,null),e.pb(42,49152,null,0,a.kb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),(n()(),e.fb(16777216,null,0,1,null,P)),e.pb(44,278528,null,0,r.k,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.qb(45,0,null,null,16,null,null,null,null,null,null,null)),(n()(),e.qb(46,0,null,null,15,"ion-row",[["class","ion-padding table-row"],["style","margin: 10px 0px;padding: 5px 0px;"]],null,null,null,i.Eb,i.I)),e.pb(47,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(48,0,null,0,13,"ion-col",[["class","price-table dashboard"]],null,null,null,i.gb,i.k)),e.pb(49,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(n()(),e.qb(50,0,null,0,11,"table",[["class","table"]],null,null,null,null,null)),(n()(),e.qb(51,0,null,null,5,"thead",[["style","background: rgba(255, 251, 214, 1) !important;"]],null,null,null,null,null)),(n()(),e.qb(52,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),e.qb(53,0,null,null,1,"th",[["class"," type-columns black"],["style","font-weight: bold;width:40%;font-size: 14px;padding-left: 10px;text-align: left;font-family: 'Poppins-Regular'"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,[" Ports "])),(n()(),e.qb(55,0,null,null,1,"th",[["class"," type-columns black"],["style","font-weight: bold;width:30%;font-size: 14px;font-family: 'Poppins-SemiBold'"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,[" 25MT Mundra "])),(n()(),e.qb(57,0,null,null,4,"tbody",[["class","user_price"]],null,null,null,null,null)),(n()(),e.fb(16777216,null,null,1,null,O)),e.pb(59,278528,null,0,r.k,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.fb(16777216,null,null,1,null,_)),e.pb(61,16384,null,0,r.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(62,0,null,0,1,"app-menu",[],null,null,null,b.b,b.a)),e.pb(63,114688,null,0,g.a,[p.a,a.Gb,a.Eb,s.a,a.Fb,a.Pb,d.m],null,null)],(function(n,l){var t=l.component;n(l,3,0,"ios"),n(l,7,0,"arrow-back-outline"),n(l,17,0,"6"),n(l,25,0,""),n(l,28,0,t.regions),n(l,30,0,"6"),n(l,39,0,t.selectedCoun),n(l,42,0,""),n(l,44,0,t.countries),n(l,59,0,t.ports),n(l,61,0,1==t.isNull),n(l,63,0)}),(function(n,l){n(l,36,0,e.Cb(l,41).ngClassUntouched,e.Cb(l,41).ngClassTouched,e.Cb(l,41).ngClassPristine,e.Cb(l,41).ngClassDirty,e.Cb(l,41).ngClassValid,e.Cb(l,41).ngClassInvalid,e.Cb(l,41).ngClassPending)}))}function x(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,1,"app-oceanfreights",[],null,null,null,f,C)),e.pb(1,114688,null,0,h,[s.a,a.Gb,p.a,r.h],null,null)],(function(n,l){n(l,1,0)}),null)}var m=e.mb("app-oceanfreights",h,x,{},{},[]),k=t("j1ZV");class y{}t.d(l,"OceanfreightsPageModuleNgFactory",(function(){return w}));var w=e.nb(o,[],(function(n){return e.zb([e.Ab(512,e.j,e.Y,[[8,[u.a,m]],[3,e.j],e.v]),e.Ab(4608,r.n,r.m,[e.s,[2,r.B]]),e.Ab(4608,c.p,c.p,[]),e.Ab(4608,a.c,a.c,[e.x,e.g]),e.Ab(4608,a.Fb,a.Fb,[a.c,e.j,e.p]),e.Ab(4608,a.Kb,a.Kb,[a.c,e.j,e.p]),e.Ab(1073742336,r.b,r.b,[]),e.Ab(1073742336,c.o,c.o,[]),e.Ab(1073742336,c.d,c.d,[]),e.Ab(1073742336,a.Bb,a.Bb,[]),e.Ab(1073742336,k.a,k.a,[]),e.Ab(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),e.Ab(1073742336,y,y,[]),e.Ab(1073742336,o,o,[]),e.Ab(1024,d.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);