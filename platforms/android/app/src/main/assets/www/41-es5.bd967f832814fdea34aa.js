function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,_toPropertyKey(t.key),t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function _toPropertyKey(n){var l=_toPrimitive(n,"string");return"symbol"==typeof l?l:l+""}function _toPrimitive(n,l){if("object"!=typeof n||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,l||"default");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(n)}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"f+ep":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),o=_createClass((function n(){_classCallCheck(this,n)})),r=e("pMnS"),a=e("MKJQ"),i=e("sZkV"),u=e("s7LF"),s=e("+QWb"),c=e("2yus"),p=function(){return _createClass((function n(l,e,t,o){_classCallCheck(this,n),this.menu=l,this.navCtrl=e,this.componentService=t,this.restService=o,this.email="",this.password="",this.passwordType="password",this.passwordIcon="eye-off",this.menu.enable(!1)}),[{key:"ngOnInit",value:function(){}},{key:"registernow",value:function(){this.navCtrl.navigateForward(["pre-register"])}},{key:"loginNow",value:function(){var n=this;if(null==this.email||""==this.email||""==this.password||null==this.password)return this.componentService.presentToastWithOptions("Please fill email and password"),!1;this.componentService.presentLoading();var l={email:this.email.replaceAll(" ",""),password:this.password};this.restService.login(l).then((function(l){if(n.componentService.loadingController.dismiss(),console.log(l),"success"!=l.status)return n.componentService.presentToastWithOptions("Wrong User details!"),!1;var e=l.user.created_at,t=new Date(e).getFullYear().toString(),o=(new Date(e).getMonth()+1).toString(),r=new Date(e).getDate().toString();1==o.length&&(o="0"+o);var a=t+"-"+o+"-"+r;localStorage.setItem("id",l.user.id),localStorage.setItem("created_on",a),localStorage.setItem("name",l.user.name),localStorage.setItem("email",l.user.email),localStorage.setItem("mobile",l.user.mobile),localStorage.setItem("role",0==l.user.role?l.user.usd_role:l.user.role),localStorage.setItem("role_name",null!=l.user.role_rel?l.user.role_rel.role_name:l.user.role_rel_usd.role_name),localStorage.setItem("companyname",l.user.companyname),localStorage.setItem("status",l.user.status),localStorage.setItem("expired_on",l.user.expired_on),localStorage.setItem("is_usd_active",l.user.is_usd_active),n.componentService.compareTwoDates(l.user.expired_on),localStorage.setItem("user",JSON.stringify(l.user)),localStorage.setItem("token",l.user.user_token),localStorage.setItem("is_INR_active",l.user.is_INR_active),localStorage.setItem("usd_role",l.user.usd_role),localStorage.setItem("transaction_id",l.user.transaction_id),localStorage.setItem("isUserActivatedUSD",l.user.is_usd_active),n.componentService.loginUser.next(l.user.name),n.componentService.firePushNotif.next(l.user.name),0==l.user.status?n.navCtrl.navigateForward(["verifyotp"]):"2"==localStorage.getItem("role")?n.navCtrl.navigateForward(["admin/chat"]):"1"==l.user.is_usd_active?(localStorage.setItem("apptype","USD"),"false"==localStorage.getItem("isExpired")?n.navCtrl.navigateRoot("priceusd",{animationDirection:"forward"}):(console.log("jjnjkn"),"1"!=localStorage.getItem("is_INR_active")&&"true"==localStorage.getItem("isExpired")&&null!=localStorage.getItem("transaction_id")?n.navCtrl.navigateRoot("planpage",{animationDirection:"forward"}):(localStorage.setItem("apptype","OTHER"),n.navCtrl.navigateRoot("prices",{animationDirection:"forward"})))):(localStorage.setItem("apptype","OTHER"),n.navCtrl.navigateRoot("prices",{animationDirection:"forward"}))}))}},{key:"forgotpassword",value:function(){this.navCtrl.navigateForward(["forgotpassword"])}},{key:"hideShowPassword",value:function(){this.passwordType="text"===this.passwordType?"password":"text",this.passwordIcon="eye-off"===this.passwordIcon?"eye":"eye-off"}}])}(),g=t.ob({encapsulation:0,styles:[[".register[_ngcontent-%COMP%]{text-align:center}.register[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000}.register[_ngcontent-%COMP%]   .registerlogo[_ngcontent-%COMP%]{width:80px;margin-top:30px;margin-bottom:10px}.formData[_ngcontent-%COMP%]{padding:0 20px}.form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{background:0 0;--background:transparent}.form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .item-native[_ngcontent-%COMP%]{background:0 0;--background:transparent;border:0}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{--background:#fff!important;background:#fff!important;--background-color:#fff!important;padding:25px}.item-native[_ngcontent-%COMP%]{border:0;padding:0}.activeTab[_ngcontent-%COMP%]{--background:#92B243!important;background:#92b243!important;color:#fff}.userType[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;width:100%;display:inline-flex;padding:15px;margin:0}.userType[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px 15px;border:2px solid #92b243;border-radius:7px;margin-right:10px}.userTitle[_ngcontent-%COMP%]{text-align:left!important;padding-left:20px!important}.nounderline[_ngcontent-%COMP%]{text-decoration:none}ion-input[_ngcontent-%COMP%]{padding:0!important;--padding:0px!important;--padding-top:0px!important;--padding-bottom:0px!important;--padding-start:0px!important;--placeholder-color:#fff;--placeholder-opacity:1;font-size:14px;font-family:Poppins-Regular}ion-item[_ngcontent-%COMP%]{min-height:55px;--min-height:55px}"]],data:{}});function d(n){return t.Mb(0,[(n()(),t.qb(0,0,null,null,57,"ion-content",[["class","register green"]],null,null,null,a.hb,a.l)),t.pb(1,49152,null,0,i.u,[t.h,t.k,t.x],null,null),(n()(),t.qb(2,0,null,0,4,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(3,49152,null,0,i.gb,[t.h,t.k,t.x],null,null),(n()(),t.qb(4,0,null,0,2,"ion-col",[["class","h-160  brlb-30"]],null,null,null,a.gb,a.k)),t.pb(5,49152,null,0,i.t,[t.h,t.k,t.x],null,null),(n()(),t.qb(6,0,null,0,0,"img",[["alt",""],["class","registerlogo"],["src","../../assets/sntc_nobackground.png"]],null,null,null,null,null)),(n()(),t.qb(7,0,null,0,9,"ion-row",[],null,null,null,a.Eb,a.I)),t.pb(8,49152,null,0,i.gb,[t.h,t.k,t.x],null,null),(n()(),t.qb(9,0,null,0,3,"ion-col",[["size","12"]],null,null,null,a.gb,a.k)),t.pb(10,49152,null,0,i.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.qb(11,0,null,0,1,"h3",[["style","font-family: 'Poppins-SemiBold';font-weight: 500;color: #fff;font-size: 35px;margin: 0px;padding: 0px;"]],null,null,null,null,null)),(n()(),t.Kb(-1,null,[" Welcome back "])),(n()(),t.qb(13,0,null,0,3,"ion-col",[["size","12"]],null,null,null,a.gb,a.k)),t.pb(14,49152,null,0,i.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.qb(15,0,null,0,1,"p",[["style","font-family: 'Poppins-Regular';font-weight: 500;color: #fff;font-size: 16px;margin: 0px;padding: 0px;"]],null,null,null,null,null)),(n()(),t.Kb(-1,null,[" Login To Access Your Account "])),(n()(),t.qb(17,0,null,0,38,"ion-row",[["class","formData "]],null,null,null,a.Eb,a.I)),t.pb(18,49152,null,0,i.gb,[t.h,t.k,t.x],null,null),(n()(),t.qb(19,0,null,0,36,"ion-col",[["class","form"]],null,null,null,a.gb,a.k)),t.pb(20,49152,null,0,i.t,[t.h,t.k,t.x],null,null),(n()(),t.qb(21,0,null,0,8,"ion-item",[["lines","none"],["no-lines",""],["style","background: rgba(255,255,255, 0.3);border-radius: 8px;"]],null,null,null,a.vb,a.x)),t.pb(22,49152,null,0,i.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.qb(23,0,null,0,6,"ion-input",[["name","email"],["placeholder","Email or Mobile number"],["style","font-family: 'Poppins-SemiBold';color: #fff;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,r=n.component;return"ionBlur"===l&&(o=!1!==t.Cb(n,24)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t.Cb(n,24)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(r.email=e)&&o),o}),a.sb,a.w)),t.pb(24,4341760,null,0,i.Ob,[t.p,t.k],null,null),t.Hb(1024,null,u.g,(function(n){return[n]}),[i.Ob]),t.pb(26,671744,null,0,u.l,[[8,null],[8,null],[8,null],[6,u.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,u.h,null,[u.l]),t.pb(28,16384,null,0,u.i,[[4,u.h]],null,null),t.pb(29,49152,null,0,i.G,[t.h,t.k,t.x],{name:[0,"name"],placeholder:[1,"placeholder"]},null),(n()(),t.qb(30,0,null,0,10,"ion-item",[["lines","none"],["no-lines",""],["style","background: rgba(255,255,255, 0.3);border-radius: 8px;margin-top: 20px;"]],null,null,null,a.vb,a.x)),t.pb(31,49152,null,0,i.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.qb(32,0,null,0,6,"ion-input",[["name","password"],["placeholder","Password"],["style","width: 100%;font-family: 'Poppins-SemiBold';color: #fff;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,r=n.component;return"ionBlur"===l&&(o=!1!==t.Cb(n,33)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t.Cb(n,33)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(r.password=e)&&o),o}),a.sb,a.w)),t.pb(33,4341760,null,0,i.Ob,[t.p,t.k],null,null),t.Hb(1024,null,u.g,(function(n){return[n]}),[i.Ob]),t.pb(35,671744,null,0,u.l,[[8,null],[8,null],[8,null],[6,u.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,u.h,null,[u.l]),t.pb(37,16384,null,0,u.i,[[4,u.h]],null,null),t.pb(38,49152,null,0,i.G,[t.h,t.k,t.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(n()(),t.qb(39,0,null,0,1,"ion-icon",[["class","passwordIcon"],["slot","end"],["style","font-size: 1px;"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.hideShowPassword()&&t),t}),a.ob,a.s)),t.pb(40,49152,null,0,i.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.qb(41,0,null,0,4,"ion-item",[["lines","none"],["no-lines",""]],null,null,null,a.vb,a.x)),t.pb(42,49152,null,0,i.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.qb(43,0,null,0,2,"p",[["class"," w-100"],["style","text-align: center;"]],null,null,null,null,null)),(n()(),t.qb(44,0,null,null,1,"a",[["class","nounderline"],["href","javascript:void(0)"],["style","color: #fff;font-family: 'Poppins-Regular';font-size: 14px;"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.forgotpassword()&&t),t}),null,null)),(n()(),t.Kb(-1,null,["Forgot Password?"])),(n()(),t.qb(46,0,null,0,0,"div",[["class","center mt10"]],null,null,null,null,null)),(n()(),t.qb(47,0,null,0,8,"div",[["class","center mt10"]],null,null,null,null,null)),(n()(),t.qb(48,0,null,null,2,"button",[["expand","full"],["size","large"],["style","background: #fff;border-radius: 27px;padding: 18px;width: 100%;"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.loginNow()&&t),t}),null,null)),(n()(),t.qb(49,0,null,null,1,"p",[["style","padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: #677435;font-size: 16px;"]],null,null,null,null,null)),(n()(),t.Kb(-1,null,["Sign in"])),(n()(),t.qb(51,0,null,null,1,"p",[["style","color: #fff;"]],null,null,null,null,null)),(n()(),t.Kb(-1,null,["OR"])),(n()(),t.qb(53,0,null,null,2,"button",[["expand","full"],["style","background: #fff;border-radius: 27px;padding: 18px;width: 100%;"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.registernow()&&t),t}),null,null)),(n()(),t.qb(54,0,null,null,1,"p",[["style","padding: 0px;margin:0px;font-family: 'Poppins-SemiBold';color: #677435;font-size: 16px;"]],null,null,null,null,null)),(n()(),t.Kb(-1,null,["Register"])),(n()(),t.qb(56,0,null,0,1,"ion-row",[["class","center"]],null,null,null,a.Eb,a.I)),t.pb(57,49152,null,0,i.gb,[t.h,t.k,t.x],null,null)],(function(n,l){var e=l.component;n(l,10,0,"12"),n(l,14,0,"12"),n(l,22,0,"none"),n(l,26,0,"email",e.email),n(l,29,0,"email","Email or Mobile number"),n(l,31,0,"none"),n(l,35,0,"password",e.password),n(l,38,0,"password","Password",e.passwordType),n(l,40,0,e.passwordIcon),n(l,42,0,"none")}),(function(n,l){n(l,23,0,t.Cb(l,28).ngClassUntouched,t.Cb(l,28).ngClassTouched,t.Cb(l,28).ngClassPristine,t.Cb(l,28).ngClassDirty,t.Cb(l,28).ngClassValid,t.Cb(l,28).ngClassInvalid,t.Cb(l,28).ngClassPending),n(l,32,0,t.Cb(l,37).ngClassUntouched,t.Cb(l,37).ngClassTouched,t.Cb(l,37).ngClassPristine,t.Cb(l,37).ngClassDirty,t.Cb(l,37).ngClassValid,t.Cb(l,37).ngClassInvalid,t.Cb(l,37).ngClassPending)}))}var b=t.mb("app-login",p,(function(n){return t.Mb(0,[(n()(),t.qb(0,0,null,null,1,"app-login",[],null,null,null,d,g)),t.pb(1,114688,null,0,p,[i.Eb,i.Gb,s.a,c.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),m=e("SVse"),f=e("iInd"),h=_createClass((function n(){_classCallCheck(this,n)}));e.d(l,"LoginPageModuleNgFactory",(function(){return C}));var C=t.nb(o,[],(function(n){return t.zb([t.Ab(512,t.j,t.Y,[[8,[r.a,b]],[3,t.j],t.v]),t.Ab(4608,m.n,m.m,[t.s,[2,m.B]]),t.Ab(4608,u.p,u.p,[]),t.Ab(4608,i.c,i.c,[t.x,t.g]),t.Ab(4608,i.Fb,i.Fb,[i.c,t.j,t.p]),t.Ab(4608,i.Kb,i.Kb,[i.c,t.j,t.p]),t.Ab(1073742336,m.b,m.b,[]),t.Ab(1073742336,u.o,u.o,[]),t.Ab(1073742336,u.d,u.d,[]),t.Ab(1073742336,i.Bb,i.Bb,[]),t.Ab(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),t.Ab(1073742336,h,h,[]),t.Ab(1073742336,o,o,[]),t.Ab(1024,f.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);