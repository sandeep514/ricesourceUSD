function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,_toPropertyKey(t.key),t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),Object.defineProperty(l,"prototype",{writable:!1}),l}function _toPropertyKey(l){var n=_toPrimitive(l,"string");return"symbol"==typeof n?n:n+""}function _toPrimitive(l,n){if("object"!=typeof l||!l)return l;var e=l[Symbol.toPrimitive];if(void 0!==e){var t=e.call(l,n||"default");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(l)}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{EA3h:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),o=_createClass((function l(){_classCallCheck(this,l)})),u=e("pMnS"),a=e("SVse"),i=e("MKJQ"),s=e("sZkV"),r=e("s7LF"),g=e("MCLT"),b=e("+QWb"),p=e("2yus"),c=function(){return _createClass((function l(n,e,t,o,u){_classCallCheck(this,l),this.route=n,this.restSer=e,this.navCtrl=t,this.menuCtrl=o,this.componentSer=u,this.availableRoles={4:"Seller",5:"Buyer",6:"Supplier",7:"Broker",8:"Guest"},this.userId=this.route.snapshot.paramMap.get("id"),this.username=localStorage.getItem("name"),this.email=localStorage.getItem("email"),this.mobile=localStorage.getItem("mobile"),this.role=this.availableRoles[localStorage.getItem("role")],this.companyname=localStorage.getItem("companyname"),this.expired_on=localStorage.getItem("expired_on"),this.isExpired=localStorage.getItem("isExpired"),this.userRole=this.availableRoles[localStorage.getItem("role")],console.log(this.userRole),this.userState=this.role}),[{key:"isValidEmail",value:function(l){return/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test(l)}},{key:"changeState",value:function(l){console.log(l),this.userState=l,this.role=l}},{key:"updatePassword",value:function(){var l=this;if(null!=this.password&&null!=this.password)if(this.password==this.confpassword){var n={number:this.mobile,password:this.password};this.restSer.presentLoader("Please wait..."),this.password==this.confpassword?this.restSer.changePassword(n).then((function(n){l.restSer.loaderCtrl.dismiss(),l.restSer.presentToast("Password change successfully.")}),(function(n){l.restSer.loaderCtrl.dismiss(),l.restSer.presentToast("Something went wrong.")})):this.restSer.presentToast("Password and confirm password is not correct.")}else this.restSer.presentToast("Password and confirm password should same.")}},{key:"home",value:function(){"USD"==localStorage.getItem("apptype")?this.navCtrl.navigateForward("priceusd"):this.navCtrl.navigateForward("prices")}},{key:"updateUserDetails",value:function(){var l=this;if(null!=this.username&&null!=this.email&&null!=this.mobile&&null!=this.companyname)if(""!=this.username&&""!=this.email&&""!=this.mobile&&""!=this.password&&""!=this.confpassword)if(1==this.isValidEmail(this.email)){var n={username:this.username,email:this.email,mobile:this.mobile,companyname:this.companyname,userId:localStorage.getItem("id")};this.restSer.presentLoader("Please wait..."),this.restSer.updateUser(n).then((function(n){localStorage.setItem("id",n.data.id),localStorage.setItem("name",n.data.name),localStorage.setItem("email",n.data.email),localStorage.setItem("mobile",n.data.mobile),localStorage.setItem("companyname",n.data.companyname),localStorage.setItem("expired_on",n.data.expired_on),l.restSer.presentToast("Profile updated successfully."),l.restSer.loaderCtrl.dismiss()}),(function(n){l.restSer.presentToast(n.error.error),l.restSer.loaderCtrl.dismiss()}))}else this.restSer.presentToast("Please enter a valid email address.");else this.restSer.presentToast("Missing required fields.");else this.restSer.presentToast("Missing required fields.")}},{key:"getProfileDetails",value:function(){}},{key:"showMenu",value:function(){this.menuCtrl.open()}},{key:"ngOnInit",value:function(){this.getPlanDetails()}},{key:"getPlanDetails",value:function(){var l=this;this.restSer.getUserPlanDetails().then((function(n){console.log(n),0==n.data.length?(l.planName="Trial Period",l.planMonths="3 Months"):(l.planName=n.data.plan,l.planMonths=n.data.sub_plan_name),console.log(n.data.length)}),(function(l){console.log(g.error)}))}},{key:"gotohome",value:function(){localStorage.setItem("apptype","OTHER"),this.navCtrl.navigateForward(["prices"])}}])}(),d=e("iInd"),m=t.nb({encapsulation:0,styles:[[".register[_ngcontent-%COMP%]{text-align:center}.register[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000}.register[_ngcontent-%COMP%]   .registerlogo[_ngcontent-%COMP%]{width:31%;margin-top:12px}.formData[_ngcontent-%COMP%]{padding:0 20px}.form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{background:#fff;--background:#fff;margin-top:20px}.form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .item-native[_ngcontent-%COMP%]{background:0 0;--background:transparent}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{--background:#92B243!important;background:#92b243!important;--background-color:#92B243!important}.activeTab[_ngcontent-%COMP%]{--background:#92B243!important;background:#92b243!important;color:#fff}.userType[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;width:100%;display:inline-flex;padding:15px;margin:0}.userType[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px 15px;border:2px solid #92b243;border-radius:7px;margin-right:10px}.userTitle[_ngcontent-%COMP%]{text-align:left!important;padding-left:20px!important}.nounderline[_ngcontent-%COMP%]{text-decoration:none}"]],data:{}});function h(l){return t.Lb(0,[t.Db(0,a.t,[]),(l()(),t.pb(1,0,null,null,82,"ion-content",[["class","register "]],null,null,null,i.hb,i.l)),t.ob(2,49152,null,0,s.u,[t.h,t.k,t.x],null,null),(l()(),t.pb(3,0,null,0,18,"ion-row",[["style","height: 30%;"]],null,null,null,i.Eb,i.I)),t.ob(4,49152,null,0,s.gb,[t.h,t.k,t.x],null,null),(l()(),t.pb(5,0,null,0,16,"div",[["style","margin-top: 0px;text-align: center;width: 100%;"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,11,"ion-row",[["style","margin: 30px 0px;"]],null,null,null,i.Eb,i.I)),t.ob(7,49152,null,0,s.gb,[t.h,t.k,t.x],null,null),(l()(),t.pb(8,0,null,0,3,"ion-col",[["style","text-align: left;padding-left: 20px;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.home()&&t),t}),i.gb,i.k)),t.ob(9,49152,null,0,s.t,[t.h,t.k,t.x],null,null),(l()(),t.pb(10,0,null,0,1,"ion-icon",[["name","arrow-back-outline"],["style","font-size: 20px;"]],null,null,null,i.ob,i.s)),t.ob(11,49152,null,0,s.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(12,0,null,0,3,"ion-col",[],null,null,null,i.gb,i.k)),t.ob(13,49152,null,0,s.t,[t.h,t.k,t.x],null,null),(l()(),t.pb(14,0,null,0,1,"h1",[["class",""],["style","color: #000;font-size: 16px;margin: 0px;padding: 0px;"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Edit Profile"])),(l()(),t.pb(16,0,null,0,1,"ion-col",[],null,null,null,i.gb,i.k)),t.ob(17,49152,null,0,s.t,[t.h,t.k,t.x],null,null),(l()(),t.pb(18,0,null,null,0,"img",[["src","../../assets/img/avatars/7.jpg"],["style","width: 100px;border-radius: 100%;"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,2,"h1",[["class","main-heading font-18"],["style","color: #000;font-size: 18px"]],null,null,null,null,null)),(l()(),t.Jb(20,null,["",""])),t.Fb(21,1),(l()(),t.pb(22,0,null,0,59,"ion-row",[["class","formData lightgreen"],["style","height: 70%;border-radius: 30px 30px 0px 0px;"]],null,null,null,i.Eb,i.I)),t.ob(23,49152,null,0,s.gb,[t.h,t.k,t.x],null,null),(l()(),t.pb(24,0,null,0,57,"ion-col",[["class","form"]],null,null,null,i.gb,i.k)),t.ob(25,49152,null,0,s.t,[t.h,t.k,t.x],null,null),(l()(),t.pb(26,0,null,0,12,"ion-item",[],null,null,null,i.vb,i.x)),t.ob(27,49152,null,0,s.H,[t.h,t.k,t.x],null,null),(l()(),t.pb(28,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.wb,i.A)),t.ob(29,49152,null,0,s.N,[t.h,t.k,t.x],{position:[0,"position"]},null),(l()(),t.Jb(-1,0,["Username"])),(l()(),t.pb(31,0,null,0,6,"ion-input",[["name","username"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==t.Bb(l,32)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==t.Bb(l,32)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(u.username=e)&&o),o}),i.sb,i.w)),t.ob(32,4341760,null,0,s.Ob,[t.p,t.k],null,null),t.Gb(1024,null,r.g,(function(l){return[l]}),[s.Ob]),t.ob(34,671744,null,0,r.l,[[8,null],[8,null],[8,null],[6,r.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,r.h,null,[r.l]),t.ob(36,16384,null,0,r.i,[[4,r.h]],null,null),t.ob(37,49152,null,0,s.G,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(38,0,null,0,0,"img",[["alt",""],["slot","start"],["src","../../assets/svg/person-outline.svg"],["style","width: 8%;margin-top: 18px;"]],null,null,null,null,null)),(l()(),t.pb(39,0,null,0,12,"ion-item",[],null,null,null,i.vb,i.x)),t.ob(40,49152,null,0,s.H,[t.h,t.k,t.x],null,null),(l()(),t.pb(41,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.wb,i.A)),t.ob(42,49152,null,0,s.N,[t.h,t.k,t.x],{position:[0,"position"]},null),(l()(),t.Jb(-1,0,["Email"])),(l()(),t.pb(44,0,null,0,6,"ion-input",[["name","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==t.Bb(l,45)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==t.Bb(l,45)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(u.email=e)&&o),o}),i.sb,i.w)),t.ob(45,4341760,null,0,s.Ob,[t.p,t.k],null,null),t.Gb(1024,null,r.g,(function(l){return[l]}),[s.Ob]),t.ob(47,671744,null,0,r.l,[[8,null],[8,null],[8,null],[6,r.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,r.h,null,[r.l]),t.ob(49,16384,null,0,r.i,[[4,r.h]],null,null),t.ob(50,49152,null,0,s.G,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(51,0,null,0,0,"img",[["alt",""],["slot","start"],["src","../../assets/svg/mail-outline.svg"],["style","width: 8%;margin-top: 18px;"]],null,null,null,null,null)),(l()(),t.pb(52,0,null,0,12,"ion-item",[],null,null,null,i.vb,i.x)),t.ob(53,49152,null,0,s.H,[t.h,t.k,t.x],null,null),(l()(),t.pb(54,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.wb,i.A)),t.ob(55,49152,null,0,s.N,[t.h,t.k,t.x],{position:[0,"position"]},null),(l()(),t.Jb(-1,0,["Mobile no"])),(l()(),t.pb(57,0,null,0,6,"ion-input",[["name","mobile"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==t.Bb(l,58)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==t.Bb(l,58)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(u.mobile=e)&&o),o}),i.sb,i.w)),t.ob(58,4341760,null,0,s.Ob,[t.p,t.k],null,null),t.Gb(1024,null,r.g,(function(l){return[l]}),[s.Ob]),t.ob(60,671744,null,0,r.l,[[8,null],[8,null],[8,null],[6,r.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,r.h,null,[r.l]),t.ob(62,16384,null,0,r.i,[[4,r.h]],null,null),t.ob(63,49152,null,0,s.G,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(64,0,null,0,0,"img",[["alt",""],["slot","start"],["src","../../assets/svg/call-outline.svg"],["style","width: 8%;margin-top: 18px;"]],null,null,null,null,null)),(l()(),t.pb(65,0,null,0,12,"ion-item",[],null,null,null,i.vb,i.x)),t.ob(66,49152,null,0,s.H,[t.h,t.k,t.x],null,null),(l()(),t.pb(67,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.wb,i.A)),t.ob(68,49152,null,0,s.N,[t.h,t.k,t.x],{position:[0,"position"]},null),(l()(),t.Jb(-1,0,["Company name"])),(l()(),t.pb(70,0,null,0,6,"ion-input",[["name","companyname"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==t.Bb(l,71)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==t.Bb(l,71)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(u.companyname=e)&&o),o}),i.sb,i.w)),t.ob(71,4341760,null,0,s.Ob,[t.p,t.k],null,null),t.Gb(1024,null,r.g,(function(l){return[l]}),[s.Ob]),t.ob(73,671744,null,0,r.l,[[8,null],[8,null],[8,null],[6,r.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,r.h,null,[r.l]),t.ob(75,16384,null,0,r.i,[[4,r.h]],null,null),t.ob(76,49152,null,0,s.G,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(77,0,null,0,0,"img",[["alt",""],["slot","start"],["src","../../assets/svg/business-outline.svg"],["style","width: 8%;margin-top: 18px;"]],null,null,null,null,null)),(l()(),t.pb(78,0,null,0,3,"div",[["class","center mt10"]],null,null,null,null,null)),(l()(),t.pb(79,0,null,null,2,"ion-button",[["class","green"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.updateUserDetails()&&t),t}),i.Y,i.c)),t.ob(80,49152,null,0,s.k,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,[" Edit Profile "])),(l()(),t.pb(82,0,null,0,1,"ion-row",[["class","center"]],null,null,null,i.Eb,i.I)),t.ob(83,49152,null,0,s.gb,[t.h,t.k,t.x],null,null)],(function(l,n){var e=n.component;l(n,11,0,"arrow-back-outline"),l(n,29,0,"floating"),l(n,34,0,"username",e.username),l(n,37,0,"username"),l(n,42,0,"floating"),l(n,47,0,"email",e.email),l(n,50,0,"email"),l(n,55,0,"floating"),l(n,60,0,"mobile",e.mobile),l(n,63,0,"mobile"),l(n,68,0,"floating"),l(n,73,0,"companyname",e.companyname),l(n,76,0,"companyname")}),(function(l,n){var e=n.component,o=t.Kb(n,20,0,l(n,21,0,t.Bb(n,0),e.name));l(n,20,0,o),l(n,31,0,t.Bb(n,36).ngClassUntouched,t.Bb(n,36).ngClassTouched,t.Bb(n,36).ngClassPristine,t.Bb(n,36).ngClassDirty,t.Bb(n,36).ngClassValid,t.Bb(n,36).ngClassInvalid,t.Bb(n,36).ngClassPending),l(n,44,0,t.Bb(n,49).ngClassUntouched,t.Bb(n,49).ngClassTouched,t.Bb(n,49).ngClassPristine,t.Bb(n,49).ngClassDirty,t.Bb(n,49).ngClassValid,t.Bb(n,49).ngClassInvalid,t.Bb(n,49).ngClassPending),l(n,57,0,t.Bb(n,62).ngClassUntouched,t.Bb(n,62).ngClassTouched,t.Bb(n,62).ngClassPristine,t.Bb(n,62).ngClassDirty,t.Bb(n,62).ngClassValid,t.Bb(n,62).ngClassInvalid,t.Bb(n,62).ngClassPending),l(n,70,0,t.Bb(n,75).ngClassUntouched,t.Bb(n,75).ngClassTouched,t.Bb(n,75).ngClassPristine,t.Bb(n,75).ngClassDirty,t.Bb(n,75).ngClassValid,t.Bb(n,75).ngClassInvalid,t.Bb(n,75).ngClassPending)}))}var f=t.lb("app-editprofile",c,(function(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"app-editprofile",[],null,null,null,h,m)),t.ob(1,114688,null,0,c,[d.a,p.a,s.Gb,s.Eb,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),C=_createClass((function l(){_classCallCheck(this,l)}));e.d(n,"EditprofilePageModuleNgFactory",(function(){return v}));var v=t.mb(o,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[u.a,f]],[3,t.j],t.v]),t.zb(4608,a.n,a.m,[t.s,[2,a.B]]),t.zb(4608,r.p,r.p,[]),t.zb(4608,s.c,s.c,[t.x,t.g]),t.zb(4608,s.Fb,s.Fb,[s.c,t.j,t.p]),t.zb(4608,s.Kb,s.Kb,[s.c,t.j,t.p]),t.zb(1073742336,a.b,a.b,[]),t.zb(1073742336,r.o,r.o,[]),t.zb(1073742336,r.d,r.d,[]),t.zb(1073742336,s.Bb,s.Bb,[]),t.zb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),t.zb(1073742336,C,C,[]),t.zb(1073742336,o,o,[]),t.zb(1024,d.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);