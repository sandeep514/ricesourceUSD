(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{Ocru:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{}var a=t("pMnS"),o=t("MKJQ"),i=t("sZkV"),r=t("SVse"),c=t("pWbT"),b=t("TGkX"),p=t("+QWb"),s=t("2yus"),g=t("iInd"),d=t("mrSG"),f=t("fn7o");class m{constructor(l,n,t){this.actRoute=l,this.apiser=n,this.modalCtrl=t,this.slideOpts={initialSlide:1,slidesPerView:1,spaceBetween:5,freeMode:!0,pagination:!1,speed:600,autoplay:!0,loop:!1},this.galleryId=this.actRoute.snapshot.paramMap.get("galleryId"),this.imageUrl=this.apiser.imageUrl,this.getGalleryDetails(this.galleryId),this.userFirstName=localStorage.getItem("name")[0]}ngOnInit(){}getGalleryDetails(l){this.apiser.presentLoader("Loading gallery details..."),this.apiser.getGalleryData(l).then(l=>{this.apiser.loaderCtrl.dismiss(),this.galleryData=l.data,this.spec=l.data.specification,console.log(this.spec)},l=>{})}openModal(l){return d.a(this,void 0,void 0,(function*(){let n=yield this.modalCtrl.create({component:f.a,componentProps:{img:l}});yield n.present()}))}}var h=u.ob({encapsulation:0,styles:[[".galleryContent[_ngcontent-%COMP%]{padding:0}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin-top:6px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:34px;font-size:12px;background-color:transparent important}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:transparent important;border-right:1px solid #dfdfdf}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:35px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:16px}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:0 0!important;border-bottom:2px solid #ededed!important}.specification[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{padding:0}.specification[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{margin:0;padding:0}.specification[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:inherit;text-align:left}.ricetype[_ngcontent-%COMP%]{font-size:24px;font-family:Arial;margin-bottom:0!important;margin-top:0!important}.ricetype[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%]{color:#000}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#000;font-size:14px!important}.card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{text-align:center}.type-columns[_ngcontent-%COMP%]{padding-left:40px}.pl-40[_ngcontent-%COMP%], .pl-60[_ngcontent-%COMP%]{padding-left:40px!important}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border:0!important}#card[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:transparent!important;--background-color:transparent!important}#card[_ngcontent-%COMP%]{position:absolute;width:-webkit-fill-available;padding-bottom:25px;margin:0;border-radius:0 0 22px 22px}.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:25px}"]],data:{}});function M(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,2,"ion-slide",[["style","width: 100%;padding: 15px;"]],null,null,null,o.Kb,o.O)),u.pb(1,49152,null,0,i.nb,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,0,"img",[["class","slide-image"]],[[8,"src",4]],[[null,"click"]],(function(l,n,t){var u=!0,e=l.component;return"click"===n&&(u=!1!==e.openModal(e.imageUrl+"uploads/gallery/"+e.galleryData.attachment)&&u),u}),null,null))],null,(function(l,n){var t=n.component;l(n,2,0,u.ub(2,"",t.imageUrl,"uploads/gallery/",t.galleryData.attachment,""))}))}function O(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,2,"ion-slide",[["style","width: 100%;padding: 15px;"]],null,null,null,o.Kb,o.O)),u.pb(1,49152,null,0,i.nb,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,0,"img",[["class","slide-image"]],[[8,"src",4]],[[null,"click"]],(function(l,n,t){var u=!0,e=l.component;return"click"===n&&(u=!1!==e.openModal(e.imageUrl+"uploads/gallery/"+e.galleryData.attachment2)&&u),u}),null,null))],null,(function(l,n){var t=n.component;l(n,2,0,u.ub(2,"",t.imageUrl,"uploads/gallery/",t.galleryData.attachment2,""))}))}function P(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,9,"ion-row",[["class","rice-gallery"]],null,null,null,o.Eb,o.I)),u.pb(1,49152,null,0,i.gb,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,7,"ion-col",[["style","padding: 0px 0px 15px 0px;background-color: #fffbd6;border-radius: 0px 0px 25px 25px;overflow: hidden;"]],null,null,null,o.gb,o.k)),u.pb(3,49152,null,0,i.t,[u.h,u.k,u.x],null,null),(l()(),u.qb(4,0,null,0,5,"ion-slides",[["pager","false"]],null,null,null,o.Lb,o.P)),u.pb(5,49152,null,0,i.ob,[u.h,u.k,u.x],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),u.fb(16777216,null,0,1,null,M)),u.pb(7,16384,null,0,r.l,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(l()(),u.fb(16777216,null,0,1,null,O)),u.pb(9,16384,null,0,r.l,[u.N,u.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,5,0,t.slideOpts,"false"),l(n,7,0,null!=t.galleryData.attachment),l(n,9,0,null!=t.galleryData.attachment2)}),null)}function C(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,6,"ion-row",[],null,null,null,o.Eb,o.I)),u.pb(1,49152,null,0,i.gb,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,4,"ion-col",[],null,null,null,o.gb,o.k)),u.pb(3,49152,null,0,i.t,[u.h,u.k,u.x],null,null),(l()(),u.qb(4,0,null,0,2,"div",[["class","title"]],null,null,null,null,null)),(l()(),u.qb(5,0,null,null,1,"h4",[["class","mt-2 pt-0"],["style","text-align: center"]],null,null,null,null,null)),(l()(),u.Kb(6,null,["",""]))],null,(function(l,n){l(n,6,0,n.component.galleryData.title)}))}function y(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),u.qb(1,0,null,null,1,"td",[["class","sticky-col first-col left pl-10"],["style","font-family: 'Poppins-SemiBold';"]],null,null,null,null,null)),(l()(),u.Kb(2,null,[" "," "])),(l()(),u.qb(3,0,null,null,2,"td",[["class","type-columns pl-60"],["style","width:180px"]],null,null,null,null,null)),(l()(),u.qb(4,0,null,null,1,"div",[["class","priceData "],["style","font-family: 'Poppins-Regular';"]],null,null,null,null,null)),(l()(),u.Kb(5,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.key),l(n,5,0,n.context.$implicit.value)}))}function _(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),u.fb(16777216,null,null,2,null,y)),u.pb(2,278528,null,0,r.k,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),u.Eb(0,r.f,[u.r]),(l()(),u.fb(0,null,null,0))],(function(l,n){l(n,2,0,u.Lb(n,2,0,u.Cb(n,3).transform(n.context.$implicit.value)))}),null)}function x(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,30,"ion-content",[["id","content"]],null,null,null,o.hb,o.l)),u.pb(1,49152,null,0,i.u,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,28,"div",[],null,null,null,null,null)),(l()(),u.qb(3,0,null,null,12,"div",[["class","lightgreen"]],null,null,null,null,null)),(l()(),u.qb(4,0,null,null,11,"div",[["class","header-content"]],null,null,null,null,null)),(l()(),u.qb(5,0,null,null,10,"ion-row",[["class",""]],null,null,null,o.Eb,o.I)),u.pb(6,49152,null,0,i.gb,[u.h,u.k,u.x],null,null),(l()(),u.qb(7,0,null,0,4,"ion-col",[["align","center"],["size","3"]],null,null,null,o.gb,o.k)),u.pb(8,49152,null,0,i.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.qb(9,0,null,0,2,"div",[["class","user-profile-icon"]],null,null,null,null,null)),(l()(),u.qb(10,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(11,null,["",""])),(l()(),u.qb(12,0,null,0,3,"ion-col",[["align","center"],["size","6"]],null,null,null,o.gb,o.k)),u.pb(13,49152,null,0,i.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.qb(14,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Product Details"])),(l()(),u.fb(16777216,null,null,1,null,P)),u.pb(17,16384,null,0,r.l,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(l()(),u.fb(16777216,null,null,1,null,C)),u.pb(19,16384,null,0,r.l,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(l()(),u.qb(20,0,null,null,8,"ion-row",[["class","ion-padding table-row padd-5"],["style","padding-top: 0px;"]],null,null,null,o.Eb,o.I)),u.pb(21,49152,null,0,i.gb,[u.h,u.k,u.x],null,null),(l()(),u.qb(22,0,null,0,6,"ion-col",[["class","price-table dashboard"]],null,null,null,o.gb,o.k)),u.pb(23,49152,null,0,i.t,[u.h,u.k,u.x],null,null),(l()(),u.qb(24,0,null,0,4,"table",[["class","table "]],null,null,null,null,null)),(l()(),u.qb(25,0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),u.fb(16777216,null,null,2,null,_)),u.pb(27,278528,null,0,r.k,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),u.Eb(0,r.f,[u.r]),(l()(),u.qb(29,0,null,null,1,"app-menu",[],null,null,null,c.b,c.a)),u.pb(30,114688,null,0,b.a,[p.a,i.Gb,i.Eb,s.a,i.Fb,i.Pb,g.m],null,null)],(function(l,n){var t=n.component;l(n,8,0,"3"),l(n,13,0,"6"),l(n,17,0,null!=t.galleryData),l(n,19,0,null!=t.galleryData),l(n,27,0,u.Lb(n,27,0,u.Cb(n,28).transform(t.spec))),l(n,30,0)}),(function(l,n){l(n,11,0,n.component.userFirstName)}))}function k(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,1,"app-gallerydetails",[],null,null,null,x,h)),u.pb(1,114688,null,0,m,[g.a,s.a,i.Fb],null,null)],(function(l,n){l(n,1,0)}),null)}var q=u.mb("app-gallerydetails",m,k,{},{},[]),v=t("s7LF"),w=t("j1ZV");class I{}t.d(n,"GallerydetailsPageModuleNgFactory",(function(){return A}));var A=u.nb(e,[],(function(l){return u.zb([u.Ab(512,u.j,u.Y,[[8,[a.a,q]],[3,u.j],u.v]),u.Ab(4608,r.n,r.m,[u.s,[2,r.B]]),u.Ab(4608,v.p,v.p,[]),u.Ab(4608,i.c,i.c,[u.x,u.g]),u.Ab(4608,i.Fb,i.Fb,[i.c,u.j,u.p]),u.Ab(4608,i.Kb,i.Kb,[i.c,u.j,u.p]),u.Ab(1073742336,r.b,r.b,[]),u.Ab(1073742336,v.o,v.o,[]),u.Ab(1073742336,v.d,v.d,[]),u.Ab(1073742336,i.Bb,i.Bb,[]),u.Ab(1073742336,w.a,w.a,[]),u.Ab(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),u.Ab(1073742336,I,I,[]),u.Ab(1073742336,e,e,[]),u.Ab(1024,g.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);