(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"6Mca":function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class o{}var u=t("pMnS"),r=t("s7LF"),i=t("MKJQ"),a=t("sZkV"),s=t("SVse"),c=t("2yus");class g{constructor(n,l,t){this.activeRoute=n,this.restSer=l,this.navCtrl=t,this.userType="",this.sendOn="",this.hasError=!1,this.errorMessage="",this.number=this.activeRoute.snapshot.paramMap.get("number"),this.sendOTP()}sendOTP(){this.restSer.presentLoader("Please wait..."),this.restSer.sendOTP(this.number).then(n=>{this.restSer.loaderCtrl.dismiss(),this.hasError=!1,0==n.user.role?(this.userType="international",this.sendOn=n.user.email):(this.userType="domestic",this.sendOn=n.user.mobile)},n=>{this.restSer.loaderCtrl.dismiss(),console.log(n),this.hasError=!0,this.errorMessage=n.error.error})}ngOnInit(){}checkOTP(){this.restSer.verifyOTP(this.number,this.text1).then(n=>{this.navCtrl.navigateForward(["changepassword",{number:this.number}])},n=>{})}login(){this.navCtrl.navigateForward(["login"])}}var p=t("iInd"),b=e.ob({encapsulation:0,styles:[["#wrapper[_ngcontent-%COMP%]{font-family:Lato;font-size:1.5rem;text-align:center;box-sizing:border-box;color:#333}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 10px;padding:0;line-height:1.25}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:90%}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]{max-width:240px;margin:25px auto 0}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:0 5px;text-align:center;line-height:80px;font-size:50px;border:1px solid #ccc;box-shadow:0 0 5px #ccc inset;outline:0;width:93%;transition:all .2s ease-in-out;border-radius:3px}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:purple;box-shadow:0 0 5px purple inset}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-selection{background:0 0}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::selection{background:0 0}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:30px 0 50px;width:100%;padding:6px;background-color:#b85fc6;border:none;text-transform:uppercase}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%]{border:2px solid;border-radius:30px;line-height:19px;font-size:120%;width:22px;position:absolute;right:5px;top:5px}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;z-index:1}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;bottom:-70px;right:-63px;position:inherit!important}.register[_ngcontent-%COMP%]{text-align:center}.register[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;text-align:right;margin-right:25px}.register[_ngcontent-%COMP%]   .registerlogo[_ngcontent-%COMP%]{width:40%;margin-top:35px}.formData[_ngcontent-%COMP%]{padding:0 20px}.form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .item-native[_ngcontent-%COMP%]{background:0 0;--background:transparent}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{--background:#92B243!important;background:#92b243!important;--background-color:#92B243!important}.activeTab[_ngcontent-%COMP%]{--background:#92B243!important;background:#92b243!important;color:#fff}.userType[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;width:100%;display:inline-flex;padding:15px;margin:0}.userType[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px 15px;border:2px solid #92b243;border-radius:7px;margin-right:10px}.userTitle[_ngcontent-%COMP%]{text-align:left!important;padding-left:20px!important}.nounderline[_ngcontent-%COMP%]{text-decoration:none}.verifylistitem[_ngcontent-%COMP%]{display:inline-flex;padding:0;margin:0;list-style:none}.verifylistitem[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:inherit}"]],data:{}});function d(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Kb(1,null,[" "," "]))],null,(function(n,l){n(l,1,0,l.component.errorMessage)}))}function C(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,28,"div",[],null,null,null,null,null)),(n()(),e.qb(1,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Kb(2,null,["Please enter OTP that is sent to your registered "," "," "])),(n()(),e.qb(3,0,null,null,25,"div",[["id","form"]],null,null,null,null,null)),(n()(),e.qb(4,0,null,null,8,"input",[["max","9"],["maxLength","1"],["min","0"],["pattern","[0-9]{1}"],["size","1"],["style","background: black;background-color: black;color: #fff;"],["type","number"]],[[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(n,l,t){var o=!0,u=n.component;return"input"===l&&(o=!1!==e.Cb(n,5)._handleInput(t.target.value)&&o),"blur"===l&&(o=!1!==e.Cb(n,5).onTouched()&&o),"compositionstart"===l&&(o=!1!==e.Cb(n,5)._compositionStart()&&o),"compositionend"===l&&(o=!1!==e.Cb(n,5)._compositionEnd(t.target.value)&&o),"change"===l&&(o=!1!==e.Cb(n,6).onChange(t.target.value)&&o),"input"===l&&(o=!1!==e.Cb(n,6).onChange(t.target.value)&&o),"blur"===l&&(o=!1!==e.Cb(n,6).onTouched()&&o),"ngModelChange"===l&&(o=!1!==(u.text1=t)&&o),o}),null,null)),e.pb(5,16384,null,0,r.c,[e.C,e.k,[2,r.a]],null,null),e.pb(6,16384,null,0,r.m,[e.C,e.k],null,null),e.pb(7,540672,null,0,r.n,[],{pattern:[0,"pattern"]},null),e.Hb(1024,null,r.f,(function(n){return[n]}),[r.n]),e.Hb(1024,null,r.g,(function(n,l){return[n,l]}),[r.c,r.m]),e.pb(10,671744,null,0,r.l,[[8,null],[6,r.f],[8,null],[6,r.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,r.h,null,[r.l]),e.pb(12,16384,null,0,r.i,[[4,r.h]],null,null),(n()(),e.qb(13,0,null,null,9,"ion-row",[],null,null,null,i.Eb,i.I)),e.pb(14,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(15,0,null,0,4,"ion-col",[["size","10"]],null,null,null,i.gb,i.k)),e.pb(16,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(17,0,null,0,2,"ion-button",[["class","green mt-20"],["expand","block"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.checkOTP()&&e),e}),i.Y,i.c)),e.pb(18,49152,null,0,a.k,[e.h,e.k,e.x],{expand:[0,"expand"]},null),(n()(),e.Kb(-1,0,["Verify"])),(n()(),e.qb(20,0,null,0,2,"ion-col",[["size","2"]],null,null,null,i.gb,i.k)),e.pb(21,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(22,0,null,0,0,"img",[["alt",""],["src","../../assets/svg/refresh-outline.svg"],["style","width: 100%;margin-top: 20px;"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.sendOTP()&&e),e}),null,null)),(n()(),e.qb(23,0,null,null,2,"p",[["class","center w-100"],["style","font-size: 17px;"]],null,null,null,null,null)),(n()(),e.qb(24,0,null,null,1,"a",[["class","nounderline"],["href","javascript:void(0)"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.login()&&e),e}),null,null)),(n()(),e.Kb(-1,null,["Go to login"])),(n()(),e.qb(26,0,null,null,2,"ul",[["class","verifylistitem"]],null,null,null,null,null)),(n()(),e.qb(27,0,null,null,0,"li",[],null,null,null,null,null)),(n()(),e.qb(28,0,null,null,0,"li",[],null,null,null,null,null))],(function(n,l){var t=l.component;n(l,7,0,"[0-9]{1}"),n(l,10,0,t.text1),n(l,16,0,"10"),n(l,18,0,"block"),n(l,21,0,"2")}),(function(n,l){var t=l.component;n(l,2,0,"international"==t.userType?"email":"mobile",t.sendOn),n(l,4,0,e.Cb(l,7).pattern?e.Cb(l,7).pattern:null,e.Cb(l,12).ngClassUntouched,e.Cb(l,12).ngClassTouched,e.Cb(l,12).ngClassPristine,e.Cb(l,12).ngClassDirty,e.Cb(l,12).ngClassValid,e.Cb(l,12).ngClassInvalid,e.Cb(l,12).ngClassPending)}))}function h(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,16,"ion-content",[["class","register bg-lightgreen"]],null,null,null,i.hb,i.l)),e.pb(1,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(n()(),e.qb(2,0,null,0,4,"ion-row",[],null,null,null,i.Eb,i.I)),e.pb(3,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(4,0,null,0,2,"ion-col",[["class","h-260 green brlb-30"]],null,null,null,i.gb,i.k)),e.pb(5,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(n()(),e.qb(6,0,null,0,0,"img",[["alt",""],["class","registerlogo"],["src","../../assets/sntc_nobackground.png"]],null,null,null,null,null)),(n()(),e.qb(7,0,null,0,7,"ion-row",[["class","formData mt-50 "]],null,null,null,i.Eb,i.I)),e.pb(8,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(9,0,null,0,5,"div",[["id","wrapper"]],null,null,null,null,null)),(n()(),e.qb(10,0,null,null,4,"div",[["id","dialog"]],null,null,null,null,null)),(n()(),e.fb(16777216,null,null,1,null,d)),e.pb(12,16384,null,0,s.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,null,1,null,C)),e.pb(14,16384,null,0,s.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(15,0,null,0,1,"ion-row",[["class","center"]],null,null,null,i.Eb,i.I)),e.pb(16,49152,null,0,a.gb,[e.h,e.k,e.x],null,null)],(function(n,l){var t=l.component;n(l,12,0,t.hasError),n(l,14,0,!t.hasError)}),null)}function m(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,1,"app-otp",[],null,null,null,h,b)),e.pb(1,114688,null,0,g,[p.a,c.a,a.Gb],null,null)],(function(n,l){n(l,1,0)}),null)}var M=e.mb("app-otp",g,m,{},{},[]);class O{}t.d(l,"OtpPageModuleNgFactory",(function(){return P}));var P=e.nb(o,[],(function(n){return e.zb([e.Ab(512,e.j,e.Y,[[8,[u.a,M]],[3,e.j],e.v]),e.Ab(4608,s.n,s.m,[e.s,[2,s.B]]),e.Ab(4608,r.p,r.p,[]),e.Ab(4608,a.c,a.c,[e.x,e.g]),e.Ab(4608,a.Fb,a.Fb,[a.c,e.j,e.p]),e.Ab(4608,a.Kb,a.Kb,[a.c,e.j,e.p]),e.Ab(1073742336,s.b,s.b,[]),e.Ab(1073742336,r.o,r.o,[]),e.Ab(1073742336,r.d,r.d,[]),e.Ab(1073742336,a.Bb,a.Bb,[]),e.Ab(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),e.Ab(1073742336,O,O,[]),e.Ab(1073742336,o,o,[]),e.Ab(1024,p.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);