(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"4/Id":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var e=u("pMnS"),o=u("MKJQ"),b=u("sZkV"),a=u("SVse"),s=u("pWbT"),c=u("TGkX"),r=u("+QWb"),p=u("2yus"),g=u("iInd");class f{constructor(l,n){this.restService=l,this.navCtrl=n,this.userFirstName=localStorage.getItem("name")[0]}ngOnInit(){this.restService.getLatestNotifications().then(l=>{this.ListNotif=l.data,console.log(l.data),this.clearNotif()},l=>{})}clearNotif(){let l=localStorage.getItem("id");this.restService.clearNotification(l).then(l=>{localStorage.setItem("isNewNotification","false")},l=>{})}gotoProfile(){localStorage.setItem("apptype","OTHER"),this.navCtrl.navigateForward("prices")}formatDate(l){return new Date(l).toLocaleString()}}var h=t.ob({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,11,"ion-row",[["style","padding: 10px;border-bottom: 1px solid #ededed"]],null,null,null,o.Eb,o.I)),t.pb(1,49152,null,0,b.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,9,"ion-col",[],null,null,null,o.gb,o.k)),t.pb(3,49152,null,0,b.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,5,"ul",[["style","list-style: none;display: flex;width: 100%;padding-left: 0;justify-content: space-between;margin-top: 0;"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"li",[["style","font-weight: 700;"]],null,null,null,null,null)),(l()(),t.Kb(6,null,[" "," "])),(l()(),t.qb(7,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.Kb(8,null,[" "," "])),t.Gb(9,2),(l()(),t.qb(10,0,null,0,1,"p",[["style","margin: 0"]],null,null,null,null,null)),(l()(),t.Kb(11,null,["",""]))],null,(function(l,n){l(n,6,0,n.context.$implicit.title);var u=t.Lb(n,8,0,l(n,9,0,t.Cb(n.parent,1),n.context.$implicit.created_at,"dd/MM/yyyy H:mm"));l(n,8,0,u),l(n,11,0,n.context.$implicit.message)}))}function m(l){return t.Mb(0,[t.Eb(0,a.t,[]),t.Eb(0,a.d,[t.s]),(l()(),t.qb(2,0,null,null,25,"ion-content",[["class","lightgreen"],["id","content"]],null,null,null,o.hb,o.l)),t.pb(3,49152,null,0,b.u,[t.h,t.k,t.x],{scrollEvents:[0,"scrollEvents"]},null),(l()(),t.qb(4,0,null,0,21,"div",[["class","header-data green"],["style","min-height: 80px;height: 80px"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,15,"div",[["style","min-height: 80px"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,14,"ion-row",[],null,null,null,o.Eb,o.I)),t.pb(7,49152,null,0,b.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(8,0,null,0,5,"ion-col",[["align","center"],["size","4"]],null,null,null,o.gb,o.k)),t.pb(9,49152,null,0,b.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.qb(10,0,null,0,3,"div",[["class","user-profile-icon"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.gotoProfile()&&t),t}),null,null)),(l()(),t.qb(11,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Kb(12,null,["",""])),t.Gb(13,1),(l()(),t.qb(14,0,null,0,2,"ion-col",[["align","center"],["class","notification"],["size","4"],["style","margin-top: 25px ;font-size: 20px;font-weight: 700;"]],null,null,null,o.gb,o.k)),t.pb(15,49152,null,0,b.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.Kb(-1,0,[" Notification "])),(l()(),t.qb(17,0,null,0,3,"ion-col",[["align","right"],["class","notification"],["size","4"]],null,null,null,o.gb,o.k)),t.pb(18,49152,null,0,b.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.qb(19,0,null,0,1,"ion-icon",[["name","notifications"]],null,null,null,o.ob,o.s)),t.pb(20,49152,null,0,b.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(21,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,d)),t.pb(23,278528,null,0,a.k,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(24,0,null,null,1,"ion-row",[["style","height: 100px"]],null,null,null,o.Eb,o.I)),t.pb(25,49152,null,0,b.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(26,0,null,0,1,"app-menu",[],null,null,null,s.b,s.a)),t.pb(27,114688,null,0,c.a,[r.a,b.Gb,b.Eb,p.a,b.Fb,b.Pb,g.m],null,null)],(function(l,n){var u=n.component;l(n,3,0,!0),l(n,9,0,"4"),l(n,15,0,"4"),l(n,18,0,"4"),l(n,20,0,"notifications"),l(n,23,0,u.ListNotif),l(n,27,0)}),(function(l,n){var u=n.component,i=t.Lb(n,12,0,l(n,13,0,t.Cb(n,0),u.userFirstName));l(n,12,0,i)}))}function x(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,1,"app-notifications",[],null,null,null,m,h)),t.pb(1,114688,null,0,f,[p.a,b.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}var k=t.mb("app-notifications",f,x,{},{},[]),q=u("s7LF"),v=u("j1ZV");class y{}u.d(n,"NotificationsPageModuleNgFactory",(function(){return w}));var w=t.nb(i,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[e.a,k]],[3,t.j],t.v]),t.Ab(4608,a.n,a.m,[t.s,[2,a.B]]),t.Ab(4608,q.p,q.p,[]),t.Ab(4608,b.c,b.c,[t.x,t.g]),t.Ab(4608,b.Fb,b.Fb,[b.c,t.j,t.p]),t.Ab(4608,b.Kb,b.Kb,[b.c,t.j,t.p]),t.Ab(1073742336,a.b,a.b,[]),t.Ab(1073742336,q.o,q.o,[]),t.Ab(1073742336,q.d,q.d,[]),t.Ab(1073742336,b.Bb,b.Bb,[]),t.Ab(1073742336,v.a,v.a,[]),t.Ab(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),t.Ab(1073742336,y,y,[]),t.Ab(1073742336,i,i,[]),t.Ab(1024,g.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);