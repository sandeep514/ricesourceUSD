(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"5uHM":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),a=u("MKJQ"),o=u("sZkV"),r=u("SVse"),s=u("pWbT"),b=u("TGkX"),d=u("+QWb"),c=u("2yus"),p=u("iInd"),g=u("mrSG"),f=u("fn7o");class h{constructor(l,n,u,t){this.location=l,this.actRoute=n,this.apiser=u,this.modalCtrl=t,this.slideOpts={initialSlide:1,slidesPerView:1,spaceBetween:5,freeMode:!0,pagination:!1,speed:600,autoplay:!0,loop:!1},this.generateDate=l=>{var n=new Date(l);return n.getDay()+"/"+(n.getMonth()+1)+"/"+n.getFullYear()},this.generateDateForValid=l=>{var n=new Date(l),u=n.getDate(),t=n.getMonth()+1,e=n.getFullYear(),i=n.getHours().toString(),a=n.getMinutes().toString();return i=1==(i=i?i.toString():"12").length?"0"+i:i,console.log("minutes"),console.log(a),u+"/"+t+"/"+e+" ("+i+":"+(a=a<"10"?"0"+a:a)+")"},this.userShowInterest=(l,n)=>{n.currentTarget.classList.add("hide"),n.currentTarget.parentNode.parentNode.children[1].classList.remove("hide"),document.getElementById("showingInterest").classList.remove("hide");let u={tradeId:l,userId:localStorage.getItem("id")};this.apiser.tradeInterest(u).then(l=>{console.log(l)}).catch(l=>{console.log(l)})};let e=this.actRoute.snapshot.paramMap.get("tradeDetail");this.tradeDetails=JSON.parse(e),console.log(this.tradeDetails);let i=this.tradeDetails.additioanlInfo;i&&(this.addInfo=i.split(",")),this.imageUrl=this.apiser.imageUrl,this.userFirstName=localStorage.getItem("name")[0]}back(){this.location.back()}ngOnInit(){}getTradeDetails(l){this.apiser.presentLoader("Loading trade details..."),this.apiser.getTradeData(l).then(l=>{console.log("trade details"),console.log(l),this.apiser.loaderCtrl.dismiss(),this.galleryData=l.data,this.spec=l.data.specification,console.log(this.spec)},l=>{})}openModal(l){return g.a(this,void 0,void 0,(function*(){let n=yield this.modalCtrl.create({component:f.a,componentProps:{img:l}});yield n.present()}))}}var x=t.ob({encapsulation:0,styles:[[".galleryContent[_ngcontent-%COMP%]{padding:0}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin-top:6px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:34px;font-size:12px;background-color:transparent important}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:transparent important;border-right:1px solid #dfdfdf}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:35px}.price-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:16px}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:0 0!important;border-bottom:2px solid #ededed!important}.specification[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{padding:0}.specification[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{margin:0;padding:0}.specification[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:inherit;text-align:left}.ricetype[_ngcontent-%COMP%]{font-size:24px;font-family:Arial;margin-bottom:0!important;margin-top:0!important}.ricetype[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%]{color:#000}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#000;font-size:14px!important}.card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{text-align:center}.type-columns[_ngcontent-%COMP%]{padding-left:40px}.pl-40[_ngcontent-%COMP%], .pl-60[_ngcontent-%COMP%]{padding-left:40px!important}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border:0!important}#card[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:transparent!important;--background-color:transparent!important}#card[_ngcontent-%COMP%]{position:absolute;width:-webkit-fill-available;padding-bottom:25px;margin:0;border-radius:0 0 22px 22px}.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:25px}.header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-of-type, ion-toolbar[_ngcontent-%COMP%]{--border-width:0 0 0px!important}p[_ngcontent-%COMP%]{padding:0;margin:0}.interestedButton[_ngcontent-%COMP%]{text-align:center;font-size:18px;color:#fff;background-color:#000;padding:15px 0;text-transform:capitalize;border-radius:100px;width:40%}.callNowButton[_ngcontent-%COMP%]{text-align:center;font-size:18px;color:#fff;background-color:#91b243;padding:15px 0;text-transform:capitalize;border-radius:100px;width:40%}.hide[_ngcontent-%COMP%]{display:none}.specRice[_ngcontent-%COMP%]{margin-left:10px}.specRice[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0;margin:0}"]],data:{}});function q(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,2,"ion-slide",[["style","width: 100%;padding: 15px;height: 200px;"]],null,null,null,a.Kb,a.O)),t.pb(1,49152,null,0,o.nb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,0,"img",[["class","slide-image"]],[[8,"src",4]],[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.openModal(e.imageUrl+"uploads/"+(null==e.tradeDetails?null:e.tradeDetails.cooked_file))&&t),t}),null,null))],null,(function(l,n){var u=n.component;l(n,2,0,t.ub(2,"",u.imageUrl,"uploads/",null==u.tradeDetails?null:u.tradeDetails.cooked_file,""))}))}function D(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,2,"ion-slide",[["style","width: 100%;padding: 15px;height: 200px;"]],null,null,null,a.Kb,a.O)),t.pb(1,49152,null,0,o.nb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,0,"img",[["class","slide-image"]],[[8,"src",4]],[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.openModal(e.imageUrl+"uploads/"+(null==e.tradeDetails?null:e.tradeDetails.uncooked_file))&&t),t}),null,null))],null,(function(l,n){var u=n.component;l(n,2,0,t.ub(2,"",u.imageUrl,"uploads/",null==u.tradeDetails?null:u.tradeDetails.uncooked_file,""))}))}function k(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,9,"ion-row",[["class","rice-gallery"]],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,7,"ion-col",[["style","padding: 0px 0px 15px 0px;background-color: #fffbd6;border-radius: 0px 0px 25px 25px;overflow: hidden;"]],null,null,null,a.gb,a.k)),t.pb(3,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,5,"ion-slides",[["pager","false"]],null,null,null,a.Lb,a.P)),t.pb(5,49152,null,0,o.ob,[t.h,t.k,t.x],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),t.fb(16777216,null,0,1,null,q)),t.pb(7,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,0,1,null,D)),t.pb(9,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,5,0,u.slideOpts,"false"),l(n,7,0,null!=(null==u.tradeDetails?null:u.tradeDetails.cooked_file)),l(n,9,0,null!=(null==u.tradeDetails?null:u.tradeDetails.uncooked_file))}),null)}function m(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,6,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,4,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(3,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,2,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"p",[["class"," pt-0"],["style","font-size: 16px;color: rgba(119, 154, 32, 1);font-weight: bold;"]],null,null,null,null,null)),(l()(),t.Kb(6,null,["\u20b9 "," Price in Qtls (Ex. Factory) "]))],null,(function(l,n){var u=n.component;l(n,6,0,null==u.tradeDetails?null:u.tradeDetails.offerPrice)}))}function y(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,9,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,7,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(3,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,5,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,4,"div",[["class"," pt-0"],["style","display: flex;font-size: 14px;"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,1,"p",[["style","font-weight: bold;width: 40%;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Location"])),(l()(),t.qb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(9,null,[" : "," "]))],null,(function(l,n){var u=n.component;l(n,9,0,null==u.tradeDetails?null:u.tradeDetails.location)}))}function _(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,5,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,3,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(3,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Specification"]))],null,null)}function M(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,9,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,7,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(3,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,5,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,4,"div",[["class"," pt-0"],["style","display: flex;font-size: 14px;"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,1,"p",[["style","font-weight: bold;width: 40%;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Moisture"])),(l()(),t.qb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(9,null,[": ",""]))],null,(function(l,n){var u=n.component;l(n,9,0,null==u.tradeDetails?null:u.tradeDetails.moisture)}))}function w(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,9,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,7,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(3,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,5,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,4,"div",[["class"," pt-0"],["style","display: flex;font-size: 14px;"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,1,"p",[["style","font-weight: bold;width: 40%;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Kett"])),(l()(),t.qb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(9,null,[": ",""]))],null,(function(l,n){var u=n.component;l(n,9,0,null==u.tradeDetails?null:u.tradeDetails.kett)}))}function I(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,9,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,7,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(3,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,5,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,4,"div",[["class"," pt-0"],["style","display: flex;font-size: 14px;"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,1,"p",[["style","font-weight: bold;width: 40%;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Broken"])),(l()(),t.qb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(9,null,[": ",""]))],null,(function(l,n){var u=n.component;l(n,9,0,null==u.tradeDetails?null:u.tradeDetails.broken)}))}function v(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,9,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,7,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(3,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,5,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,4,"div",[["class"," pt-0"],["style","display: flex;font-size: 14px;"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,1,"p",[["style","font-weight: bold;width: 40%;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["DD"])),(l()(),t.qb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(9,null,[": ",""]))],null,(function(l,n){var u=n.component;l(n,9,0,null==u.tradeDetails?null:u.tradeDetails.dd)}))}function P(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,9,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,7,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(3,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,5,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,4,"div",[["class"," pt-0"],["style","display: flex;font-size: 14px;"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,1,"p",[["style","font-weight: bold;width: 40%;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Admixture"])),(l()(),t.qb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(9,null,[": ",""]))],null,(function(l,n){var u=n.component;l(n,9,0,null==u.tradeDetails?null:u.tradeDetails.admixture)}))}function O(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,9,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,7,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(3,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,5,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,4,"div",[["class"," pt-0"],["style","display: flex;font-size: 14px;"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,1,"p",[["style","font-weight: bold;width: 40%;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Elongation"])),(l()(),t.qb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(9,null,[": ",""]))],null,(function(l,n){var u=n.component;l(n,9,0,null==u.tradeDetails?null:u.tradeDetails.elongation)}))}function C(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,10,"ion-row",[["style","margin-top: 20px;"]],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,8,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(3,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,6,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,5,"div",[["class"," pt-0"],["style","display: flex;font-size: 14px;"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,1,"p",[["style","font-weight: bold;width: 40%;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Additional Info"])),(l()(),t.Kb(-1,null,[" : "])),(l()(),t.qb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(10,null,["",""]))],null,(function(l,n){var u=n.component;l(n,10,0,null==u.tradeDetails?null:u.tradeDetails.additioanlInfo)}))}function K(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,5,"ion-row",[["style","padding: 10px 20px;"]],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,3,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(3,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Thanks for showing your interest, Our team will contact you shortly."]))],null,null)}function z(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,4,"ion-col",[["class","interestedButton"],["size","6"]],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.userShowInterest(null==e.tradeDetails?null:e.tradeDetails.id,u)&&t),t}),a.gb,a.k)),t.pb(1,49152,null,0,o.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.qb(2,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Interested"]))],(function(l,n){l(n,1,0,"6")}),null)}function E(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,9,"ion-row",[["style","padding: 10px 20px;justify-content: center;"]],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,z)),t.pb(3,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(4,0,null,0,5,"ion-col",[["class","callNowButton"],["size","6"]],null,null,null,a.gb,a.k)),t.pb(5,49152,null,0,o.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.qb(6,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),t.qb(7,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,1,"a",[["class","contactuser"],["href","tel:+919877092004"],["style","text-decoration: none;color: #fff;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Call now"]))],(function(l,n){var u=n.component;l(n,3,0,!(null!=u.tradeDetails&&u.tradeDetails.trade_interest)),l(n,5,0,"6")}),null)}function N(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,5,"ion-row",[["style","padding: 10px 20px;"]],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,3,"ion-col",[["class",""]],null,null,null,a.gb,a.k)),t.pb(3,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,1,"div",[["style","text-align: center;"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,0,"img",[["src","../../assets/STAMP EXPIRED.png"],["style","width: 200px;"]],null,null,null,null,null))],null,null)}function A(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,5,"ion-row",[["style","padding: 10px 20px;"]],null,null,null,a.Eb,a.I)),t.pb(1,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,3,"ion-col",[["class",""]],null,null,null,a.gb,a.k)),t.pb(3,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,1,"div",[["style","text-align: center;"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,0,"img",[["src","../../assets/STAMP SOLD.png"],["style","width: 200px;"]],null,null,null,null,null))],null,null)}function T(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,78,null,null,null,null,null,null,null)),(l()(),t.qb(1,0,null,null,62,"div",[["style","padding: 12px 5px;"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,6,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(3,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,4,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(5,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(6,0,null,0,2,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.qb(7,0,null,null,1,"p",[["class","pt-0"],["style","font-size: 12px;"]],null,null,null,null,null)),(l()(),t.Kb(8,null,["Valid Till: ",""])),(l()(),t.qb(9,0,null,null,6,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(10,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(11,0,null,0,4,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(12,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(13,0,null,0,2,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.qb(14,0,null,null,1,"p",[["class"," pt-0"],["style","font-size: 16px;font-weight: bold;"]],null,null,null,null,null)),(l()(),t.Kb(15,null,[" "," ",""])),(l()(),t.qb(16,0,null,null,6,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(17,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(18,0,null,0,4,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(19,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(20,0,null,0,2,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.qb(21,0,null,null,1,"p",[["class"," pt-0"],["style","font-size: 14px;"]],null,null,null,null,null)),(l()(),t.Kb(22,null,[" "," "," "])),(l()(),t.fb(16777216,null,null,1,null,m)),t.pb(24,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(25,0,null,null,9,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(26,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(27,0,null,0,7,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(28,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(29,0,null,0,5,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.qb(30,0,null,null,4,"div",[["class"," pt-0"],["style","display: flex;font-size: 14px;"]],null,null,null,null,null)),(l()(),t.qb(31,0,null,null,1,"p",[["style","font-weight: bold;width: 40%;;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Packing"])),(l()(),t.qb(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(34,null,[" : "," "])),(l()(),t.qb(35,0,null,null,9,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(36,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(37,0,null,0,7,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(38,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(39,0,null,0,5,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.qb(40,0,null,null,4,"div",[["class"," pt-0"],["style","display: flex;font-size: 14px;"]],null,null,null,null,null)),(l()(),t.qb(41,0,null,null,1,"p",[["style","font-weight: bold;width: 40%;;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Quantity"])),(l()(),t.qb(43,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(44,null,[" : "," qtls "])),(l()(),t.fb(16777216,null,null,1,null,y)),t.pb(46,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,_)),t.pb(48,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(49,0,null,null,14,"div",[["class","specRice"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,M)),t.pb(51,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,w)),t.pb(53,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,I)),t.pb(55,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,v)),t.pb(57,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,P)),t.pb(59,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,O)),t.pb(61,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,C)),t.pb(63,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(64,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),t.qb(65,0,null,null,5,"ion-row",[["class","hide"],["id","showingInterest"],["style","padding: 10px 20px;"]],null,null,null,a.Eb,a.I)),t.pb(66,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(67,0,null,0,3,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(68,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(69,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Thanks for showing your interest, Our team will contact you shortly."])),(l()(),t.fb(16777216,null,null,1,null,K)),t.pb(72,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,E)),t.pb(74,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,N)),t.pb(76,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,A)),t.pb(78,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,24,0,1==(null==u.tradeDetails?null:u.tradeDetails.tradeType)),l(n,46,0,(null==u.tradeDetails?null:u.tradeDetails.location)&&1==(null==u.tradeDetails?null:u.tradeDetails.tradeType)),l(n,48,0,(null==u.tradeDetails?null:u.tradeDetails.moisture)||(null==u.tradeDetails?null:u.tradeDetails.kett)||(null==u.tradeDetails?null:u.tradeDetails.broken)||(null==u.tradeDetails?null:u.tradeDetails.dd)||(null==u.tradeDetails?null:u.tradeDetails.admixture)||(null==u.tradeDetails?null:u.tradeDetails.elongation)),l(n,51,0,null==u.tradeDetails?null:u.tradeDetails.moisture),l(n,53,0,null==u.tradeDetails?null:u.tradeDetails.kett),l(n,55,0,null==u.tradeDetails?null:u.tradeDetails.broken),l(n,57,0,null==u.tradeDetails?null:u.tradeDetails.dd),l(n,59,0,null==u.tradeDetails?null:u.tradeDetails.admixture),l(n,61,0,null==u.tradeDetails?null:u.tradeDetails.elongation),l(n,63,0,null==u.tradeDetails?null:u.tradeDetails.additioanlInfo),l(n,72,0,null==u.tradeDetails?null:u.tradeDetails.trade_interest),l(n,74,0,1==(null==u.tradeDetails?null:u.tradeDetails.status)||6==(null==u.tradeDetails?null:u.tradeDetails.status)),l(n,76,0,2==(null==u.tradeDetails?null:u.tradeDetails.status)),l(n,78,0,3==(null==u.tradeDetails?null:u.tradeDetails.status))}),(function(l,n){var u=n.component;l(n,8,0,u.generateDateForValid(null==u.tradeDetails?null:u.tradeDetails.validDays)),l(n,15,0,null==u.tradeDetails||null==u.tradeDetails.rice_name_data?null:u.tradeDetails.rice_name_data.name,null==u.tradeDetails||null==u.tradeDetails.rice_form_milestone3?null:u.tradeDetails.rice_form_milestone3.name),l(n,22,0,null==u.tradeDetails||null==u.tradeDetails.rice_grade||null==u.tradeDetails.rice_grade.get_wand_type?null:u.tradeDetails.rice_grade.get_wand_type.type,null==u.tradeDetails||null==u.tradeDetails.rice_grade?null:u.tradeDetails.rice_grade.value),l(n,34,0,2==(null==u.tradeDetails?null:u.tradeDetails.tradeType)?(null==u.tradeDetails||null==u.tradeDetails.rice_packing_buyer?null:u.tradeDetails.rice_packing_buyer.packing)+" "+(null==u.tradeDetails||null==u.tradeDetails.rice_packing_buyer?null:u.tradeDetails.rice_packing_buyer.description):null==u.tradeDetails||null==u.tradeDetails.rice_packing_seller?null:u.tradeDetails.rice_packing_seller.description),l(n,44,0,null==u.tradeDetails?null:u.tradeDetails.quantity)}))}function S(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,22,"ion-content",[["id","content"]],null,null,null,a.hb,a.l)),t.pb(1,49152,null,0,o.u,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,20,"div",[["style","margin-bottom: 100px;"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,15,"div",[["class","header-container"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,0,"div",[["class",""]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,13,"div",[["class","lightgreen"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,12,"div",[["style","margin-top: 0px;text-align: center;padding: 10px 0px;"]],null,null,null,null,null)),(l()(),t.qb(7,0,null,null,11,"ion-row",[["style","margin: 0px 0px;"]],null,null,null,a.Eb,a.I)),t.pb(8,49152,null,0,o.gb,[t.h,t.k,t.x],null,null),(l()(),t.qb(9,0,null,0,3,"ion-col",[["style","text-align: left;padding-left: 20px;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.back()&&t),t}),a.gb,a.k)),t.pb(10,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(11,0,null,0,1,"ion-icon",[["name","arrow-back-outline"],["style","font-size: 20px;"]],null,null,null,a.ob,a.s)),t.pb(12,49152,null,0,o.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(13,0,null,0,3,"ion-col",[["align","center"],["size","6"]],null,null,null,a.gb,a.k)),t.pb(14,49152,null,0,o.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.qb(15,0,null,0,1,"h4",[["style","padding: 0px;margin: 0px;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Trade Detail"])),(l()(),t.qb(17,0,null,0,1,"ion-col",[],null,null,null,a.gb,a.k)),t.pb(18,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,null,1,null,k)),t.pb(20,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,T)),t.pb(22,16384,null,0,r.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(23,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.qb(24,0,null,null,1,"app-menu",[],null,null,null,s.b,s.a)),t.pb(25,114688,null,0,b.a,[d.a,o.Gb,o.Eb,c.a,o.Fb,o.Pb,p.m],null,null)],(function(l,n){var u=n.component;l(n,12,0,"arrow-back-outline"),l(n,14,0,"6"),l(n,20,0,null!=u.tradeDetails&&1==(null==u.tradeDetails?null:u.tradeDetails.tradeType)),l(n,22,0,null!=u.tradeDetails),l(n,25,0)}),null)}function F(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,1,"app-trade-detail",[],null,null,null,S,x)),t.pb(1,114688,null,0,h,[r.h,p.a,c.a,o.Fb],null,null)],(function(l,n){l(n,1,0)}),null)}var B=t.mb("app-trade-detail",h,F,{},{},[]),L=u("s7LF");class V{}var j=u("j1ZV");u.d(n,"TradeDetailPageModuleNgFactory",(function(){return R}));var R=t.nb(e,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[i.a,B]],[3,t.j],t.v]),t.Ab(4608,r.n,r.m,[t.s,[2,r.B]]),t.Ab(4608,L.p,L.p,[]),t.Ab(4608,o.c,o.c,[t.x,t.g]),t.Ab(4608,o.Fb,o.Fb,[o.c,t.j,t.p]),t.Ab(4608,o.Kb,o.Kb,[o.c,t.j,t.p]),t.Ab(1073742336,r.b,r.b,[]),t.Ab(1073742336,L.o,L.o,[]),t.Ab(1073742336,L.d,L.d,[]),t.Ab(1073742336,o.Bb,o.Bb,[]),t.Ab(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),t.Ab(1073742336,V,V,[]),t.Ab(1073742336,j.a,j.a,[]),t.Ab(1073742336,e,e,[]),t.Ab(1024,p.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);