function _defineProperties(l,n){for(var t=0;t<n.length;t++){var u=n[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,_toPropertyKey(u.key),u)}}function _createClass(l,n,t){return n&&_defineProperties(l.prototype,n),t&&_defineProperties(l,t),Object.defineProperty(l,"prototype",{writable:!1}),l}function _toPropertyKey(l){var n=_toPrimitive(l,"string");return"symbol"==typeof n?n:n+""}function _toPrimitive(l,n){if("object"!=typeof l||!l)return l;var t=l[Symbol.toPrimitive];if(void 0!==t){var u=t.call(l,n||"default");if("object"!=typeof u)return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(l)}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"0/ZQ":function(l,n,t){"use strict";t.r(n);var u=t("8Y7J"),e=_createClass((function l(){_classCallCheck(this,l)})),o=t("ekNO"),i=t("pMnS"),a=t("MKJQ"),r=t("sZkV"),b=t("SVse"),s=t("pWbT"),c=t("TGkX"),p=t("+QWb"),d=t("2yus"),h=t("iInd"),f=function(){return _createClass((function l(n,t,u){_classCallCheck(this,l),this.apiser=n,this.location=t,this.navCtrl=u,this.party=localStorage.getItem("name"),this.mobile=localStorage.getItem("mobile"),this.remarks="",this.validDays=0,this.isError=!1,this.errorMessage="",this.brandList=""}),[{key:"ngOnInit",value:function(){this.imagePre=this.apiser.imageUrl,this.getData()}},{key:"getData",value:function(){var l=this;this.apiser.getBrandList().then((function(n){console.log("res"),console.log(n),l.brandList=n.data}),(function(l){console.log(l)}))}},{key:"back",value:function(){this.location.back()}},{key:"getBrandDetail",value:function(l){console.log(" i am here"),console.log(l),this.navCtrl.navigateForward(["brand-details",{data:JSON.stringify(l)}])}}])}(),g=u.ob({encapsulation:0,styles:[[".header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-of-type, ion-toolbar[_ngcontent-%COMP%]{--border-width:0 0 0px!important}"]],data:{}});function m(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,7,"ion-col",[["size","6"]],null,null,null,a.gb,a.k)),u.pb(1,49152,null,0,r.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.qb(2,0,null,0,5,"div",[["style","border-radius: 20px;overflow: hidden;box-shadow: 1px 0px 14px 5px #ededed;"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.getBrandDetail(l.context.$implicit)&&u),u}),null,null)),(l()(),u.qb(3,0,null,null,0,"div",[],[[8,"style",2]],null,null,null,null)),(l()(),u.qb(4,0,null,null,1,"div",[["style","height: 170px;width: 100%;"]],null,null,null,null,null)),(l()(),u.qb(5,0,null,null,0,"img",[["alt","i am here"],["onerror","this.src='../../assets/img/No_image_available.svg.png'"],["style","padding: 15px;width: 100%;"]],[[8,"src",4]],null,null,null,null)),(l()(),u.qb(6,0,null,null,1,"p",[["style","text-align: left;font-weight: bold;font-size: 12px;padding: 0px;margin: 0px;padding: 10px;text-transform: capitalize;text-align: center;"]],null,null,null,null,null)),(l()(),u.Kb(7,null,[" ",""]))],(function(l,n){l(n,1,0,"6")}),(function(l,n){var t=n.component;l(n,3,0,u.ub(2,"width: 200px;height: 200px;background-image: url(",t.imagePre,"uploads/",n.context.$implicit.image,");")),l(n,5,0,u.ub(2,"",t.imagePre,"uploads/brandlogo/",n.context.$implicit.image,"")),l(n,7,0,n.context.$implicit.name)}))}function k(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,10,"ion-header",[["class",""]],null,null,null,a.nb,a.r)),u.pb(1,49152,null,0,r.B,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,8,"ion-toolbar",[["mode","ios"],["style","background: #fff; --background: #fff"]],null,null,null,a.Qb,a.U)),u.pb(3,49152,null,0,r.zb,[u.h,u.k,u.x],{mode:[0,"mode"]},null),(l()(),u.qb(4,0,null,0,3,"ion-buttons",[["class","back-button"],["slot","start"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.back()&&u),u}),a.Z,a.d)),u.pb(5,49152,null,0,r.l,[u.h,u.k,u.x],null,null),(l()(),u.qb(6,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,a.ob,a.s)),u.pb(7,49152,null,0,r.C,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.qb(8,0,null,0,2,"ion-title",[["class","header-title porttitle"]],null,null,null,a.Pb,a.T)),u.pb(9,49152,null,0,r.xb,[u.h,u.k,u.x],null,null),(l()(),u.Kb(-1,0,["Rice Brands"])),(l()(),u.qb(11,0,null,null,23,"ion-content",[["class",""],["id","content"]],null,null,null,a.hb,a.l)),u.pb(12,49152,null,0,r.u,[u.h,u.k,u.x],{scrollEvents:[0,"scrollEvents"]},null),(l()(),u.qb(13,0,null,0,19,"div",[["style","height: 88%;"]],null,null,null,null,null)),(l()(),u.qb(14,0,null,null,11,"div",[["style","height: 16%;"]],null,null,null,null,null)),(l()(),u.qb(15,0,null,null,4,"ion-row",[["class","center"],["style","padding: 10px 0px"]],null,null,null,a.Eb,a.I)),u.pb(16,49152,null,0,r.gb,[u.h,u.k,u.x],null,null),(l()(),u.qb(17,0,null,0,2,"ion-col",[["style","font-size: 22px;font-weight: bold;"]],null,null,null,a.gb,a.k)),u.pb(18,49152,null,0,r.t,[u.h,u.k,u.x],null,null),(l()(),u.Kb(-1,0,["For Distributorship"])),(l()(),u.qb(20,0,null,null,5,"ion-row",[["class","center"]],null,null,null,a.Eb,a.I)),u.pb(21,49152,null,0,r.gb,[u.h,u.k,u.x],null,null),(l()(),u.qb(22,0,null,0,3,"ion-col",[["style","font-size: 22px;font-weight: bold;"]],null,null,null,a.gb,a.k)),u.pb(23,49152,null,0,r.t,[u.h,u.k,u.x],null,null),(l()(),u.qb(24,0,null,0,1,"a",[["class","contactuser"],["href","tel:+919877092004"],["style","font-size: 18px;background: #92b243;padding: 5px 20px;color: #fff;text-decoration: none;border-radius: 10px;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Call now"])),(l()(),u.qb(26,0,null,null,6,"div",[["style","height: 84% ;overflow: scroll;"]],null,null,null,null,null)),(l()(),u.qb(27,0,null,null,5,"ion-grid",[],null,null,null,a.mb,a.q)),u.pb(28,49152,null,0,r.A,[u.h,u.k,u.x],null,null),(l()(),u.qb(29,0,null,0,3,"ion-row",[],null,null,null,a.Eb,a.I)),u.pb(30,49152,null,0,r.gb,[u.h,u.k,u.x],null,null),(l()(),u.fb(16777216,null,0,1,null,m)),u.pb(32,278528,null,0,b.k,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.qb(33,0,null,0,1,"app-menu",[],null,null,null,s.b,s.a)),u.pb(34,114688,null,0,c.a,[p.a,r.Gb,r.Eb,d.a,r.Fb,r.Pb,h.m],null,null)],(function(l,n){var t=n.component;l(n,3,0,"ios"),l(n,7,0,"arrow-back-outline"),l(n,12,0,!0),l(n,32,0,t.brandList),l(n,34,0)}),null)}var x=u.mb("app-brands",f,(function(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,1,"app-brands",[],null,null,null,k,g)),u.pb(1,114688,null,0,f,[d.a,b.h,r.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),v=t("s7LF"),y=t("A2Kn"),w=_createClass((function l(){_classCallCheck(this,l)})),q=t("j1ZV");t.d(n,"BrandsPageModuleNgFactory",(function(){return C}));var C=u.nb(e,[],(function(l){return u.zb([u.Ab(512,u.j,u.Y,[[8,[o.a,o.b,i.a,x]],[3,u.j],u.v]),u.Ab(4608,b.n,b.m,[u.s,[2,b.B]]),u.Ab(4608,v.p,v.p,[]),u.Ab(4608,r.c,r.c,[u.x,u.g]),u.Ab(4608,r.Fb,r.Fb,[r.c,u.j,u.p]),u.Ab(4608,r.Kb,r.Kb,[r.c,u.j,u.p]),u.Ab(1073742336,b.b,b.b,[]),u.Ab(1073742336,v.o,v.o,[]),u.Ab(1073742336,v.d,v.d,[]),u.Ab(1073742336,r.Bb,r.Bb,[]),u.Ab(1073742336,y.a,y.a,[]),u.Ab(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),u.Ab(1073742336,w,w,[]),u.Ab(1073742336,q.a,q.a,[]),u.Ab(1073742336,e,e,[]),u.Ab(1024,h.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);