(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{w54Y:function(n,l,o){"use strict";o.r(l);var s=o("8Y7J");class t{}var e=o("pMnS"),u=o("MKJQ"),a=o("sZkV"),r=o("s7LF"),i=o("2yus");class p{constructor(n){this.restSer=n,this.password1Type="password",this.password1Icon="eye-off",this.password2Type="password",this.password2Icon="eye-off",this.mobile=localStorage.getItem("mobile")}hideShowPassword1(){this.password1Type="text"===this.password1Type?"password":"text",this.password1Icon="eye-off"===this.password1Icon?"eye":"eye-off"}hideShowPassword2(){this.password2Type="text"===this.password2Type?"password":"text",this.password2Icon="eye-off"===this.password2Icon?"eye":"eye-off"}ngOnInit(){}updatePassword(){if(null!=this.password&&null!=this.password)if(this.password==this.confpassword){let n={number:this.mobile,password:this.password};this.restSer.presentLoader("Please wait..."),this.password==this.confpassword?this.restSer.changePassword(n).then(n=>{this.restSer.loaderCtrl.dismiss(),this.restSer.presentToast("Password change successfully.")},n=>{this.restSer.loaderCtrl.dismiss(),this.restSer.presentToast("Something went wrong.")}):this.restSer.presentToast("Password and confirm password is not correct.")}else this.restSer.presentToast("Password and confirm password should same.")}}var d=s.nb({encapsulation:0,styles:[[".register[_ngcontent-%COMP%]{text-align:center}.register[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000}.register[_ngcontent-%COMP%]   .registerlogo[_ngcontent-%COMP%]{width:31%;margin-top:12px}.formData[_ngcontent-%COMP%]{padding:0 20px}.form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .item-native[_ngcontent-%COMP%]{background:0 0;--background:transparent}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{--background:#92B243!important;background:#92b243!important;--background-color:#92B243!important}.activeTab[_ngcontent-%COMP%]{--background:#92B243!important;background:#92b243!important;color:#fff}.userType[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;width:100%;display:inline-flex;padding:15px;margin:0}.userType[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px 15px;border:2px solid #92b243;border-radius:7px;margin-right:10px}.userTitle[_ngcontent-%COMP%]{text-align:left!important;padding-left:20px!important}.nounderline[_ngcontent-%COMP%]{text-decoration:none}"]],data:{}});function b(n){return s.Lb(0,[(n()(),s.pb(0,0,null,null,52,"ion-content",[["class","register lightgreen"]],null,null,null,u.hb,u.l)),s.ob(1,49152,null,0,a.u,[s.h,s.k,s.x],null,null),(n()(),s.pb(2,0,null,0,4,"ion-row",[],null,null,null,u.Eb,u.I)),s.ob(3,49152,null,0,a.gb,[s.h,s.k,s.x],null,null),(n()(),s.pb(4,0,null,0,2,"ion-col",[["class","h-230 green brlb-30"]],null,null,null,u.gb,u.k)),s.ob(5,49152,null,0,a.t,[s.h,s.k,s.x],null,null),(n()(),s.pb(6,0,null,0,0,"img",[["alt",""],["class","registerlogo"],["src","../../assets/sntc_nobackground.png"],["style","margin-top: 20"]],null,null,null,null,null)),(n()(),s.pb(7,0,null,0,5,"ion-row",[],null,null,null,u.Eb,u.I)),s.ob(8,49152,null,0,a.gb,[s.h,s.k,s.x],null,null),(n()(),s.pb(9,0,null,0,3,"ion-col",[],null,null,null,u.gb,u.k)),s.ob(10,49152,null,0,a.t,[s.h,s.k,s.x],null,null),(n()(),s.pb(11,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),s.Jb(-1,null,[" Change Password "])),(n()(),s.pb(13,0,null,0,37,"ion-row",[["class","formData"]],null,null,null,u.Eb,u.I)),s.ob(14,49152,null,0,a.gb,[s.h,s.k,s.x],null,null),(n()(),s.pb(15,0,null,0,35,"ion-col",[["class","form"]],null,null,null,u.gb,u.k)),s.ob(16,49152,null,0,a.t,[s.h,s.k,s.x],null,null),(n()(),s.pb(17,0,null,0,14,"ion-item",[],null,null,null,u.vb,u.x)),s.ob(18,49152,null,0,a.H,[s.h,s.k,s.x],null,null),(n()(),s.pb(19,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,u.wb,u.A)),s.ob(20,49152,null,0,a.N,[s.h,s.k,s.x],{position:[0,"position"]},null),(n()(),s.Jb(-1,0,["New Password"])),(n()(),s.pb(22,0,null,0,6,"ion-input",[["name","password"],["style"," color: 'red' "]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var t=!0,e=n.component;return"ionBlur"===l&&(t=!1!==s.Bb(n,23)._handleBlurEvent(o.target)&&t),"ionChange"===l&&(t=!1!==s.Bb(n,23)._handleInputEvent(o.target)&&t),"ngModelChange"===l&&(t=!1!==(e.password=o)&&t),t}),u.sb,u.w)),s.ob(23,4341760,null,0,a.Ob,[s.p,s.k],null,null),s.Gb(1024,null,r.g,(function(n){return[n]}),[a.Ob]),s.ob(25,671744,null,0,r.l,[[8,null],[8,null],[8,null],[6,r.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),s.Gb(2048,null,r.h,null,[r.l]),s.ob(27,16384,null,0,r.i,[[4,r.h]],null,null),s.ob(28,49152,null,0,a.G,[s.h,s.k,s.x],{name:[0,"name"],type:[1,"type"]},null),(n()(),s.pb(29,0,null,0,1,"ion-icon",[["class","passwordIcon"],["slot","end"]],null,[[null,"click"]],(function(n,l,o){var s=!0;return"click"===l&&(s=!1!==n.component.hideShowPassword1()&&s),s}),u.ob,u.s)),s.ob(30,49152,null,0,a.C,[s.h,s.k,s.x],{name:[0,"name"]},null),(n()(),s.pb(31,0,null,0,0,"img",[["alt",""],["slot","start"],["src","../../assets/svg/key-outline.svg"],["style","width: 8%;margin-top: 18px;"]],null,null,null,null,null)),(n()(),s.pb(32,0,null,0,14,"ion-item",[],null,null,null,u.vb,u.x)),s.ob(33,49152,null,0,a.H,[s.h,s.k,s.x],null,null),(n()(),s.pb(34,0,null,0,2,"ion-label",[["class","font-lightgreen"],["position","floating"]],null,null,null,u.wb,u.A)),s.ob(35,49152,null,0,a.N,[s.h,s.k,s.x],{position:[0,"position"]},null),(n()(),s.Jb(-1,0,["Confirm Password"])),(n()(),s.pb(37,0,null,0,6,"ion-input",[["name","confpassword"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var t=!0,e=n.component;return"ionBlur"===l&&(t=!1!==s.Bb(n,38)._handleBlurEvent(o.target)&&t),"ionChange"===l&&(t=!1!==s.Bb(n,38)._handleInputEvent(o.target)&&t),"ngModelChange"===l&&(t=!1!==(e.confpassword=o)&&t),t}),u.sb,u.w)),s.ob(38,4341760,null,0,a.Ob,[s.p,s.k],null,null),s.Gb(1024,null,r.g,(function(n){return[n]}),[a.Ob]),s.ob(40,671744,null,0,r.l,[[8,null],[8,null],[8,null],[6,r.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),s.Gb(2048,null,r.h,null,[r.l]),s.ob(42,16384,null,0,r.i,[[4,r.h]],null,null),s.ob(43,49152,null,0,a.G,[s.h,s.k,s.x],{name:[0,"name"],type:[1,"type"]},null),(n()(),s.pb(44,0,null,0,1,"ion-icon",[["class","passwordIcon"],["slot","end"]],null,[[null,"click"]],(function(n,l,o){var s=!0;return"click"===l&&(s=!1!==n.component.hideShowPassword2()&&s),s}),u.ob,u.s)),s.ob(45,49152,null,0,a.C,[s.h,s.k,s.x],{name:[0,"name"]},null),(n()(),s.pb(46,0,null,0,0,"img",[["alt",""],["slot","start"],["src","../../assets/svg/key-outline.svg"],["style","width: 8%;margin-top: 18px;"]],null,null,null,null,null)),(n()(),s.pb(47,0,null,0,3,"div",[["class","center"],["style","margin-top: 20px;"]],null,null,null,null,null)),(n()(),s.pb(48,0,null,null,2,"ion-button",[["class","green"]],null,[[null,"click"]],(function(n,l,o){var s=!0;return"click"===l&&(s=!1!==n.component.updatePassword()&&s),s}),u.Y,u.c)),s.ob(49,49152,null,0,a.k,[s.h,s.k,s.x],null,null),(n()(),s.Jb(-1,0,[" Change Password "])),(n()(),s.pb(51,0,null,0,1,"ion-row",[["class","center"]],null,null,null,u.Eb,u.I)),s.ob(52,49152,null,0,a.gb,[s.h,s.k,s.x],null,null)],(function(n,l){var o=l.component;n(l,20,0,"floating"),n(l,25,0,"password",o.password),n(l,28,0,"password",o.password1Type),n(l,30,0,o.password1Icon),n(l,35,0,"floating"),n(l,40,0,"confpassword",o.confpassword),n(l,43,0,"confpassword",o.password2Type),n(l,45,0,o.password2Icon)}),(function(n,l){n(l,22,0,s.Bb(l,27).ngClassUntouched,s.Bb(l,27).ngClassTouched,s.Bb(l,27).ngClassPristine,s.Bb(l,27).ngClassDirty,s.Bb(l,27).ngClassValid,s.Bb(l,27).ngClassInvalid,s.Bb(l,27).ngClassPending),n(l,37,0,s.Bb(l,42).ngClassUntouched,s.Bb(l,42).ngClassTouched,s.Bb(l,42).ngClassPristine,s.Bb(l,42).ngClassDirty,s.Bb(l,42).ngClassValid,s.Bb(l,42).ngClassInvalid,s.Bb(l,42).ngClassPending)}))}function g(n){return s.Lb(0,[(n()(),s.pb(0,0,null,null,1,"app-updatepassword",[],null,null,null,b,d)),s.ob(1,114688,null,0,p,[i.a],null,null)],(function(n,l){n(l,1,0)}),null)}var c=s.lb("app-updatepassword",p,g,{},{},[]),h=o("SVse"),w=o("iInd");class m{}o.d(l,"UpdatepasswordPageModuleNgFactory",(function(){return f}));var f=s.mb(t,[],(function(n){return s.yb([s.zb(512,s.j,s.X,[[8,[e.a,c]],[3,s.j],s.v]),s.zb(4608,h.n,h.m,[s.s,[2,h.B]]),s.zb(4608,r.p,r.p,[]),s.zb(4608,a.c,a.c,[s.x,s.g]),s.zb(4608,a.Fb,a.Fb,[a.c,s.j,s.p]),s.zb(4608,a.Kb,a.Kb,[a.c,s.j,s.p]),s.zb(1073742336,h.b,h.b,[]),s.zb(1073742336,r.o,r.o,[]),s.zb(1073742336,r.d,r.d,[]),s.zb(1073742336,a.Bb,a.Bb,[]),s.zb(1073742336,w.o,w.o,[[2,w.t],[2,w.m]]),s.zb(1073742336,m,m,[]),s.zb(1073742336,t,t,[]),s.zb(1024,w.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);