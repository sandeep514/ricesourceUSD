(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"uP/6":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class e{}var t=u("pMnS"),b=u("MKJQ"),c=u("sZkV"),i=u("+QWb"),a=u("jLa2"),p=u("ZsY6"),r=u("sAVj");class s{constructor(l,n){this.menu=l,this.componentService=n,this.menu.enable(!0)}ngOnInit(){}sampleEntry(){this.componentService.openModal(a.a)}courierEntry(){this.componentService.openModal(p.a)}millStatus(){this.componentService.openModal(r.a)}popMenu(l){this.componentService.presentPopover(l)}}var g=o.ob({encapsulation:0,styles:[[".dashboard-bg[_ngcontent-%COMP%]{background-color:#fff}.header-bg[_ngcontent-%COMP%]{position:absolute}.header-bg[_ngcontent-%COMP%]   .bg-header[_ngcontent-%COMP%]{width:100%;height:243px}.dashboard-header[_ngcontent-%COMP%]{color:#fff}.menu-button[_ngcontent-%COMP%]{position:relative;left:-39px;top:8px;font-size:28px}.dashboard-title[_ngcontent-%COMP%]{padding-top:19px;font-weight:600;font-size:20px}.pop-menu[_ngcontent-%COMP%]{padding-top:18px;padding-right:13px;font-size:25px}.header-icons[_ngcontent-%COMP%]{margin-top:102px;text-align:center;color:#fff;height:85px}.header-icons[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:38px;color:#fff}.header-icons[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:15px}.header-icons[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1);border-right:1px solid rgba(255,255,255,.2);padding-top:10px}.progress-count[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center}.progress-count[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:600}.progress-count[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(1){border-right:1px solid #ccc}.progress-count[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(1)   h1[_ngcontent-%COMP%]{color:green}.progress-count[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(2)   h1[_ngcontent-%COMP%]{color:red}.progress-card[_ngcontent-%COMP%]{box-shadow:0 5px 9px 4px #ccc}.sntc-logo[_ngcontent-%COMP%]{position:absolute;top:4px;z-index:9999;width:169px;left:34%}"]],data:{}});function h(l){return o.Mb(0,[(l()(),o.qb(0,0,null,null,79,"ion-content",[["class","ion-no-padding dashboard-bg"]],null,null,null,b.hb,b.l)),o.pb(1,49152,null,0,c.u,[o.h,o.k,o.x],null,null),(l()(),o.qb(2,0,null,0,5,"ion-row",[["class","header-bg ion-no-padding"]],null,null,null,b.Eb,b.I)),o.pb(3,49152,null,0,c.gb,[o.h,o.k,o.x],null,null),(l()(),o.qb(4,0,null,0,3,"ion-col",[["class","ion-no-padding"]],null,null,null,b.gb,b.k)),o.pb(5,49152,null,0,c.t,[o.h,o.k,o.x],null,null),(l()(),o.qb(6,0,null,0,0,"img",[["class","sntc-logo"],["src","../../assets/SNTC LOGO (1).png"]],null,null,null,null,null)),(l()(),o.qb(7,0,null,0,0,"img",[["class","bg-header"],["src","../../assets/dashboard-1.png"]],null,null,null,null,null)),(l()(),o.qb(8,0,null,0,11,"ion-row",[["class","dashboard-header"]],null,null,null,b.Eb,b.I)),o.pb(9,49152,null,0,c.gb,[o.h,o.k,o.x],null,null),(l()(),o.qb(10,0,null,0,3,"ion-col",[["align","left"]],null,null,null,b.gb,b.k)),o.pb(11,49152,null,0,c.t,[o.h,o.k,o.x],null,null),(l()(),o.qb(12,0,null,0,1,"ion-menu-button",[["class","menu-button"]],null,null,null,b.yb,b.D)),o.pb(13,49152,null,0,c.R,[o.h,o.k,o.x],null,null),(l()(),o.qb(14,0,null,0,1,"ion-col",[["align","center"],["class","dashboard-title"]],null,null,null,b.gb,b.k)),o.pb(15,49152,null,0,c.t,[o.h,o.k,o.x],null,null),(l()(),o.qb(16,0,null,0,3,"ion-col",[["align","right"],["class","pop-menu"]],null,null,null,b.gb,b.k)),o.pb(17,49152,null,0,c.t,[o.h,o.k,o.x],null,null),(l()(),o.qb(18,0,null,0,1,"ion-icon",[["name","ellipsis-vertical"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.popMenu(u)&&o),o}),b.ob,b.s)),o.pb(19,49152,null,0,c.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.qb(20,0,null,0,31,"ion-row",[["class","header-icons"]],null,null,null,b.Eb,b.I)),o.pb(21,49152,null,0,c.gb,[o.h,o.k,o.x],null,null),(l()(),o.qb(22,0,null,0,9,"ion-col",[["class","ion-activatable ripple-parent"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.sampleEntry()&&o),o}),b.gb,b.k)),o.pb(23,49152,null,0,c.t,[o.h,o.k,o.x],null,null),(l()(),o.qb(24,0,null,0,1,"ion-icon",[["name","albums-outline"]],null,null,null,b.ob,b.s)),o.pb(25,49152,null,0,c.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.qb(26,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.qb(27,0,null,0,2,"ion-label",[],null,null,null,b.wb,b.A)),o.pb(28,49152,null,0,c.N,[o.h,o.k,o.x],null,null),(l()(),o.Kb(-1,0,["Sample Entry"])),(l()(),o.qb(30,0,null,0,1,"ion-ripple-effect",[],null,null,null,b.Db,b.H)),o.pb(31,49152,null,0,c.eb,[o.h,o.k,o.x],null,null),(l()(),o.qb(32,0,null,0,9,"ion-col",[["class","ion-activatable ripple-parent"]],null,null,null,b.gb,b.k)),o.pb(33,49152,null,0,c.t,[o.h,o.k,o.x],null,null),(l()(),o.qb(34,0,null,0,1,"ion-icon",[["name","send-outline"]],null,null,null,b.ob,b.s)),o.pb(35,49152,null,0,c.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.qb(36,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.qb(37,0,null,0,2,"ion-label",[],null,null,null,b.wb,b.A)),o.pb(38,49152,null,0,c.N,[o.h,o.k,o.x],null,null),(l()(),o.Kb(-1,0,["Send Courier"])),(l()(),o.qb(40,0,null,0,1,"ion-ripple-effect",[],null,null,null,b.Db,b.H)),o.pb(41,49152,null,0,c.eb,[o.h,o.k,o.x],null,null),(l()(),o.qb(42,0,null,0,9,"ion-col",[["class","ion-activatable ripple-parent"]],null,null,null,b.gb,b.k)),o.pb(43,49152,null,0,c.t,[o.h,o.k,o.x],null,null),(l()(),o.qb(44,0,null,0,1,"ion-icon",[["name","clipboard-outline"]],null,null,null,b.ob,b.s)),o.pb(45,49152,null,0,c.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.qb(46,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.qb(47,0,null,0,2,"ion-label",[],null,null,null,b.wb,b.A)),o.pb(48,49152,null,0,c.N,[o.h,o.k,o.x],null,null),(l()(),o.Kb(-1,0,["Mill Status"])),(l()(),o.qb(50,0,null,0,1,"ion-ripple-effect",[],null,null,null,b.Db,b.H)),o.pb(51,49152,null,0,c.eb,[o.h,o.k,o.x],null,null),(l()(),o.qb(52,0,null,0,27,"ion-row",[],null,null,null,b.Eb,b.I)),o.pb(53,49152,null,0,c.gb,[o.h,o.k,o.x],null,null),(l()(),o.qb(54,0,null,0,25,"ion-col",[],null,null,null,b.gb,b.k)),o.pb(55,49152,null,0,c.t,[o.h,o.k,o.x],null,null),(l()(),o.qb(56,0,null,0,23,"ion-card",[["class","progress-card"]],null,null,null,b.eb,b.e)),o.pb(57,49152,null,0,c.m,[o.h,o.k,o.x],null,null),(l()(),o.qb(58,0,null,0,3,"ion-item",[],null,null,null,b.vb,b.x)),o.pb(59,49152,null,0,c.H,[o.h,o.k,o.x],null,null),(l()(),o.qb(60,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),o.Kb(-1,null,["Total Progress"])),(l()(),o.qb(62,0,null,0,17,"ion-card-content",[],null,null,null,b.ab,b.f)),o.pb(63,49152,null,0,c.n,[o.h,o.k,o.x],null,null),(l()(),o.qb(64,0,null,0,15,"ion-row",[["class","progress-count"]],null,null,null,b.Eb,b.I)),o.pb(65,49152,null,0,c.gb,[o.h,o.k,o.x],null,null),(l()(),o.qb(66,0,null,0,6,"ion-col",[],null,null,null,b.gb,b.k)),o.pb(67,49152,null,0,c.t,[o.h,o.k,o.x],null,null),(l()(),o.qb(68,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),o.Kb(-1,null,["520"])),(l()(),o.qb(70,0,null,0,2,"ion-label",[],null,null,null,b.wb,b.A)),o.pb(71,49152,null,0,c.N,[o.h,o.k,o.x],null,null),(l()(),o.Kb(-1,0,["Total Samples"])),(l()(),o.qb(73,0,null,0,6,"ion-col",[],null,null,null,b.gb,b.k)),o.pb(74,49152,null,0,c.t,[o.h,o.k,o.x],null,null),(l()(),o.qb(75,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),o.Kb(-1,null,["520"])),(l()(),o.qb(77,0,null,0,2,"ion-label",[],null,null,null,b.wb,b.A)),o.pb(78,49152,null,0,c.N,[o.h,o.k,o.x],null,null),(l()(),o.Kb(-1,0,["Pending Courier"]))],(function(l,n){l(n,19,0,"ellipsis-vertical"),l(n,25,0,"albums-outline"),l(n,35,0,"send-outline"),l(n,45,0,"clipboard-outline")}),null)}function d(l){return o.Mb(0,[(l()(),o.qb(0,0,null,null,1,"app-dashboard",[],null,null,null,h,g)),o.pb(1,114688,null,0,s,[c.Eb,i.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=o.mb("app-dashboard",s,d,{},{},[]),k=u("SVse"),m=u("s7LF"),q=u("iInd");class M{}u.d(n,"DashboardPageModuleNgFactory",(function(){return f}));var f=o.nb(e,[],(function(l){return o.zb([o.Ab(512,o.j,o.Y,[[8,[t.a,x]],[3,o.j],o.v]),o.Ab(4608,k.n,k.m,[o.s,[2,k.B]]),o.Ab(4608,m.p,m.p,[]),o.Ab(4608,c.c,c.c,[o.x,o.g]),o.Ab(4608,c.Fb,c.Fb,[c.c,o.j,o.p]),o.Ab(4608,c.Kb,c.Kb,[c.c,o.j,o.p]),o.Ab(1073742336,k.b,k.b,[]),o.Ab(1073742336,m.o,m.o,[]),o.Ab(1073742336,m.d,m.d,[]),o.Ab(1073742336,c.Bb,c.Bb,[]),o.Ab(1073742336,q.o,q.o,[[2,q.t],[2,q.m]]),o.Ab(1073742336,M,M,[]),o.Ab(1073742336,e,e,[]),o.Ab(1024,q.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);