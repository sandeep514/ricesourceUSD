(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{Yk4D:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class o{}var u=t("pMnS"),r=t("MKJQ"),i=t("sZkV"),a=t("s7LF"),s=t("2yus");class c{constructor(n,l){this.navCtrl=n,this.restAPI=l,this.userType=""}ngOnInit(){this.userType="international"==localStorage.getItem("registerUserAs")?"USD":"Domestic"}checkOTP(){let n={mobile:localStorage.getItem("mobile"),otp:this.otp};this.restAPI.presentLoader("Please wait..."),this.restAPI.verifyUser(n).then(n=>{this.restAPI.loaderCtrl.dismiss(),localStorage.setItem("status","1"),"international"==localStorage.getItem("registerUserAs")?"true"==localStorage.getItem("isExpiryUSD")||"true"==localStorage.getItem("isExpired")?this.navCtrl.navigateForward(["planpage"]):(localStorage.setItem("apptype","USD"),this.navCtrl.navigateForward(["priceusd"])):(localStorage.setItem("apptype","OTHER"),this.navCtrl.navigateRoot(["prices"]))},n=>{this.restAPI.presentToast(n.error.error),this.restAPI.loaderCtrl.dismiss()})}sendOTP(){this.restAPI.presentLoader("Please wait..."),this.restAPI.resendOTP(localStorage.getItem("mobile")).then(n=>{this.restAPI.presentToast("OTP send successfully"),this.restAPI.loaderCtrl.dismiss()},n=>{console.log(n),this.restAPI.presentToast(n.error.error),this.restAPI.loaderCtrl.dismiss()})}login(){this.navCtrl.navigateForward(["login"])}}var g=e.ob({encapsulation:0,styles:[["#wrapper[_ngcontent-%COMP%]{font-family:Lato;font-size:1.5rem;text-align:center;box-sizing:border-box;color:#333}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 10px;padding:0;line-height:1.25}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:90%}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]{max-width:240px;margin:25px auto 0}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:0 5px;text-align:center;line-height:80px;font-size:50px;border:1px solid #ccc;box-shadow:0 0 5px #ccc inset;outline:0;width:93%;transition:all .2s ease-in-out;border-radius:3px}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:purple;box-shadow:0 0 5px purple inset}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-selection{background:0 0}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::selection{background:0 0}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:30px 0 50px;width:100%;padding:6px;background-color:#b85fc6;border:none;text-transform:uppercase}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%]{border:2px solid;border-radius:30px;line-height:19px;font-size:120%;width:22px;position:absolute;right:5px;top:5px}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;z-index:1}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;bottom:-70px;right:-63px;position:inherit!important}.register[_ngcontent-%COMP%]{text-align:center}.register[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;text-align:right;margin-right:25px}.register[_ngcontent-%COMP%]   .registerlogo[_ngcontent-%COMP%]{width:40%;margin-top:35px}.formData[_ngcontent-%COMP%]{padding:0 20px}.form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .item-native[_ngcontent-%COMP%]{background:0 0;--background:transparent}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{--background:#92B243!important;background:#92b243!important;--background-color:#92B243!important}.activeTab[_ngcontent-%COMP%]{--background:#92B243!important;background:#92b243!important;color:#fff}.userType[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;width:100%;display:inline-flex;padding:15px;margin:0}.userType[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px 15px;border:2px solid #92b243;border-radius:7px;margin-right:10px}.userTitle[_ngcontent-%COMP%]{text-align:left!important;padding-left:20px!important}.nounderline[_ngcontent-%COMP%]{text-decoration:none}.verifylistitem[_ngcontent-%COMP%]{display:inline-flex;padding:0;margin:0;list-style:none}.verifylistitem[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:inherit}.bullets[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-align:left;font-size:20px}"]],data:{}});function p(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,45,"ion-content",[["class","register bg-lightgreen"]],null,null,null,r.hb,r.l)),e.pb(1,49152,null,0,i.u,[e.h,e.k,e.x],null,null),(n()(),e.qb(2,0,null,0,4,"ion-row",[],null,null,null,r.Eb,r.I)),e.pb(3,49152,null,0,i.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(4,0,null,0,2,"ion-col",[["class","h-260 green brlb-30"]],null,null,null,r.gb,r.k)),e.pb(5,49152,null,0,i.t,[e.h,e.k,e.x],null,null),(n()(),e.qb(6,0,null,0,0,"img",[["alt",""],["class","registerlogo"],["src","../../assets/sntc_nobackground.png"]],null,null,null,null,null)),(n()(),e.qb(7,0,null,0,36,"ion-row",[["class","formData mt-50 "]],null,null,null,r.Eb,r.I)),e.pb(8,49152,null,0,i.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(9,0,null,0,34,"div",[["id","wrapper"]],null,null,null,null,null)),(n()(),e.qb(10,0,null,null,33,"div",[["id","dialog"]],null,null,null,null,null)),(n()(),e.qb(11,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["OTP has been sent to your registered mobile number/ e-mail for authentication."])),(n()(),e.qb(13,0,null,null,4,"ul",[["class","bullets"]],null,null,null,null,null)),(n()(),e.qb(14,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,[" SMS for Indian Users "])),(n()(),e.qb(16,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,[" Email for International Users "])),(n()(),e.qb(18,0,null,null,25,"div",[["id","form"]],null,null,null,null,null)),(n()(),e.qb(19,0,null,null,8,"input",[["max","9"],["maxLength","1"],["min","0"],["pattern","[0-9]{1}"],["size","1"],["style","background-color: black;background: black;color: white"],["type","number"]],[[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(n,l,t){var o=!0,u=n.component;return"input"===l&&(o=!1!==e.Cb(n,20)._handleInput(t.target.value)&&o),"blur"===l&&(o=!1!==e.Cb(n,20).onTouched()&&o),"compositionstart"===l&&(o=!1!==e.Cb(n,20)._compositionStart()&&o),"compositionend"===l&&(o=!1!==e.Cb(n,20)._compositionEnd(t.target.value)&&o),"change"===l&&(o=!1!==e.Cb(n,21).onChange(t.target.value)&&o),"input"===l&&(o=!1!==e.Cb(n,21).onChange(t.target.value)&&o),"blur"===l&&(o=!1!==e.Cb(n,21).onTouched()&&o),"ngModelChange"===l&&(o=!1!==(u.otp=t)&&o),o}),null,null)),e.pb(20,16384,null,0,a.c,[e.C,e.k,[2,a.a]],null,null),e.pb(21,16384,null,0,a.m,[e.C,e.k],null,null),e.pb(22,540672,null,0,a.n,[],{pattern:[0,"pattern"]},null),e.Hb(1024,null,a.f,(function(n){return[n]}),[a.n]),e.Hb(1024,null,a.g,(function(n,l){return[n,l]}),[a.c,a.m]),e.pb(25,671744,null,0,a.l,[[8,null],[6,a.f],[8,null],[6,a.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,a.h,null,[a.l]),e.pb(27,16384,null,0,a.i,[[4,a.h]],null,null),(n()(),e.qb(28,0,null,null,6,"ion-row",[],null,null,null,r.Eb,r.I)),e.pb(29,49152,null,0,i.gb,[e.h,e.k,e.x],null,null),(n()(),e.qb(30,0,null,0,4,"ion-col",[["size","12"]],null,null,null,r.gb,r.k)),e.pb(31,49152,null,0,i.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(32,0,null,0,2,"ion-button",[["class","green mt-20"],["expand","block"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.checkOTP()&&e),e}),r.Y,r.c)),e.pb(33,49152,null,0,i.k,[e.h,e.k,e.x],{expand:[0,"expand"]},null),(n()(),e.Kb(-1,0,["Verify"])),(n()(),e.qb(35,0,null,null,2,"p",[["class","center w-100"],["style","font-size: 17px;"]],null,null,null,null,null)),(n()(),e.qb(36,0,null,null,1,"a",[["class","nounderline"],["href","javascript:void(0)"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.sendOTP()&&e),e}),null,null)),(n()(),e.Kb(-1,null,["Resend OTP"])),(n()(),e.qb(38,0,null,null,2,"p",[["class","center w-100"],["style","font-size: 17px;"]],null,null,null,null,null)),(n()(),e.qb(39,0,null,null,1,"a",[["class","nounderline"],["href","javascript:void(0)"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.login()&&e),e}),null,null)),(n()(),e.Kb(-1,null,["Go to login"])),(n()(),e.qb(41,0,null,null,2,"ul",[["class","verifylistitem"]],null,null,null,null,null)),(n()(),e.qb(42,0,null,null,0,"li",[],null,null,null,null,null)),(n()(),e.qb(43,0,null,null,0,"li",[],null,null,null,null,null)),(n()(),e.qb(44,0,null,0,1,"ion-row",[["class","center"]],null,null,null,r.Eb,r.I)),e.pb(45,49152,null,0,i.gb,[e.h,e.k,e.x],null,null)],(function(n,l){var t=l.component;n(l,22,0,"[0-9]{1}"),n(l,25,0,t.otp),n(l,31,0,"12"),n(l,33,0,"block")}),(function(n,l){n(l,19,0,e.Cb(l,22).pattern?e.Cb(l,22).pattern:null,e.Cb(l,27).ngClassUntouched,e.Cb(l,27).ngClassTouched,e.Cb(l,27).ngClassPristine,e.Cb(l,27).ngClassDirty,e.Cb(l,27).ngClassValid,e.Cb(l,27).ngClassInvalid,e.Cb(l,27).ngClassPending)}))}function b(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,1,"app-verifyotp",[],null,null,null,p,g)),e.pb(1,114688,null,0,c,[i.Gb,s.a],null,null)],(function(n,l){n(l,1,0)}),null)}var d=e.mb("app-verifyotp",c,b,{},{},[]),C=t("SVse"),P=t("iInd");class m{}t.d(l,"VerifyotpPageModuleNgFactory",(function(){return h}));var h=e.nb(o,[],(function(n){return e.zb([e.Ab(512,e.j,e.Y,[[8,[u.a,d]],[3,e.j],e.v]),e.Ab(4608,C.n,C.m,[e.s,[2,C.B]]),e.Ab(4608,a.p,a.p,[]),e.Ab(4608,i.c,i.c,[e.x,e.g]),e.Ab(4608,i.Fb,i.Fb,[i.c,e.j,e.p]),e.Ab(4608,i.Kb,i.Kb,[i.c,e.j,e.p]),e.Ab(1073742336,C.b,C.b,[]),e.Ab(1073742336,a.o,a.o,[]),e.Ab(1073742336,a.d,a.d,[]),e.Ab(1073742336,i.Bb,i.Bb,[]),e.Ab(1073742336,P.o,P.o,[[2,P.t],[2,P.m]]),e.Ab(1073742336,m,m,[]),e.Ab(1073742336,o,o,[]),e.Ab(1024,P.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);