import { Component, OnInit, QueryList } from '@angular/core';

import { Platform, ModalController, NavController, MenuController, ToastController, IonRouterOutlet, AlertController } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeDetection, ThemeDetectionResponse } from "@ionic-native/theme-detection/ngx";
import { RestService } from './rest.service';
// // // import { SplashscreenPage } from './splashscreen/splashscreen.page';
import { ComponentsService } from './components.service';
import { Router } from '@angular/router';
import { PlanpagePage } from './planpage/planpage.page';
import { Location } from '@angular/common';
declare let RazorpayCheckout: any;
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';
import { UsdconvertmodalPage } from './usdconvertmodal/usdconvertmodal.page';
import { ConditionalExpr } from '@angular/compiler';
// import { Facebook } from '@ionic-native/facebook/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
	public selectedIndex = 0;
	public user: any = '';
	public hasUser: any = '';
	public cancelPopup: any = 'true';
	public appPages = [
		// {
		// 	title: 'Home',
		// 	url: '/prices',
		// 	icon: 'home.svg'
		// },
		{
			title: 'Edit Profile',
			url: '/editprofile',
			icon: 'profile.svg'
		},
		{
			title: 'About us',
			url: '/aboutus',
			icon: 'about.svg'
		},


		{
			title: 'Terms and conditions',
			url: '/termsandcondition',
			icon: 'terms.svg'
		},
		{
			title: 'Private Policy',
			url: '/privatepolicy',
			icon: 'privacy.svg'
		},
		{
			title: 'Disclaimer',
			url: '/disclaimer',
			icon: 'disclaimer.svg'
		},

		{
			title: 'Change Password',
			url: '/updatepassword',
			icon: 'changepassword.svg'
		},
		{
			title: 'Return & Refund Policy',
			url: '/refund',
			icon: 'terms.svg'
		},
		{
			title: 'Gallery',
			url: '/gallery',
			icon: 'gallery.svg'
		},
		{
			title: 'Chat',
			url: '/chat-detail',
			icon: 'chat.svg'
		},
		// {
		// 	title: 'Trade',
		// 	url: '/trade-inr',
		// 	icon: 'albums'
		// },
		// {
		// 	title: 'Trade list',
		// 	url: '/trade-inr-list',
		// 	icon: 'albums'
		// },

		// {
		// 	title: 'Gallery',
		// 	url: '/gallery',
		// 	icon: 'albums'
		// },
		{
			title: 'Contact us',
			url: '/contact',
			icon: 'contactus.svg'
		}
	];
	public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
	public razor_key = 'rzp_test_eBPImORw1zmU8F';
	public razorSecret = 'QAhUguSrbOIcflzHikLToMuw';
	paymentAmount: any = 100;
	currency: any = "INR";
	appType: any;

	constructor(
		private platform: Platform,
		// // private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private themeDetection: ThemeDetection,
		public apiser: RestService,
		public modalCtrl: ModalController,
		public navCtrl: NavController,
		public componentSer: ComponentsService,
		public menuCtrl: MenuController,
		public toastCtrl: ToastController,
		public alertController: AlertController,
		public route: Router,
		public location: Location,
		public firebase: FirebaseMessaging,
		// private fb: Facebook
	) {
		platform.ready().then(() => {

		}).catch(() => {

		});


		// if(FacebookAds)
		// {
		// 	let options = {
		// 		adId: '763416880384578_1088816394511290',
		// 		adSize: 'SMART_BANNER',
		// 		isTesting: false,
		// 		autoShow: true
		// 	};

		// 	FacebookAds.getAttributionDetails().then((res:any) => {
		// 		console.log(res);
		// 	}).catch((err:any) => {
		// 		console.log(err);
		// 	})
		// 	FacebookAds.createBanner(options, function(data){
		// 	FacebookAds.showBanner(8);
		// 	}, function(err){});
		// }

		this.initializeApp();

		this.menuCtrl.open();
		this.user = localStorage.getItem('prices');
		this.hasUser = localStorage.getItem('name');
		this.componentSer.loginUser.subscribe(function (userName) {
			console.log("kjnk");
			this.user = userName;
		});

		this.componentSer.firePushNotif.subscribe(function () {
			// this.firebasepushnotif()

			this.firebase.requestPermission().then(() => {

				this.firebase.getToken().then(function (token) {

					if (localStorage.getItem('id') != null) {
						this.apiser.updateToken(localStorage.getItem('id'), token);
					}
				});

				setInterval(() => {
					this.firebase.onTokenRefresh().subscribe(function (token) {
						console.log("hello i am here 2");
						if (localStorage.getItem('id') != null) {
							this.apiser.updateToken(localStorage.getItem('id'), token);
						}
					});
				}, 600000);

				this.firebase.onTokenRefresh().subscribe(function (token) {
					console.log("hello i am here 2");
					if (localStorage.getItem('id') != null) {
						this.apiser.updateToken(localStorage.getItem('id'), token);
					}
				});



				this.firebase.onBackgroundMessage().subscribe(function (payload) {
				})
				this.firebase.onMessage().subscribe((payload) => {
					this.componentSer.hasMessage.next(1);


					let routee = this.route.url.split('/');
					let routeArray = [];
					for (let i = 0; i < routee.length; i++) {

						let rout = routee[i].split(';');
						if (rout) {
							routeArray.push(rout[0]);
						} else {
							routeArray.push(routee[i]);
						}

					}


					if (routeArray.indexOf('chat-detail')) {
						// if (localStorage.getItem('id') == payload.messageFrom) {
						// this.navCtrl.navigateForward(['chat-detail', { 'id': payload.messageFrom }])
						this.componentSer.newRecieveMessageForUser.next(payload.body);
						// }
					}

					if (routeArray.indexOf('prices') || routeArray.indexOf('port') || routeArray.indexOf('ricechart') || routeArray.indexOf('gallery') || routeArray.indexOf('gallerydetails')) {
						this.componentSer.hasMessage.next(1);

					}

					if (routeArray.indexOf('chatdetails')) {

						if (localStorage.getItem('selectedChatUserId') == payload.messageFrom) {
							// this.navCtrl.navigateForward(['admin/chatdetails', { 'contactId': payload.id }])
							this.componentSer.newRecieveMessage.next(payload.body);
						}

					}
					// if( localStorage.getItem('id') == '1' ){
					// 	if (localStorage.getItem('selectedChatUserId') == payload.messageFrom) {
					// 		this.componentSer.newRecieveMessage.next(payload.message);
					// 	}
					// }
				});
			});
		});
		setTimeout(() => {
			this.componentSer.compareTwoDates(localStorage.getItem('expired_on'));
			this.appType = localStorage.getItem('apptype')

		}, 1000);

		// this.componentSer.showPaymentModal.subscribe((res: any) => {
		// 	this.presentModel();
		// });

	}

	home() {
		if (localStorage.getItem('is_INR_active') == '1') {
			this.navCtrl.navigateForward('prices');
		} else {
			if (localStorage.getItem('isExpiryUSD') == 'true') {
				// this.navCtrl.navigateForward(['planpage']);
			} else {
				if (localStorage.getItem('apptype') == 'USD') {
					console.log("i am here");
					this.navCtrl.navigateForward('priceusd');
				} else {
					this.navCtrl.navigateForward('prices');
				}
			}
		}

		this.menuCtrl.close();
	}
	port() {
		this.navCtrl.navigateRoot('port', { animationDirection: 'forward' });
		this.menuCtrl.close();

	}

	firebasepushnotif() {
		let apiHn = this.apiser;
		let navigation = this.navCtrl;
		this.firebase.requestPermission().then(() => {

			this.firebase.getToken().then(function (token) {

				if (localStorage.getItem('id') != null) {
					apiHn.updateToken(localStorage.getItem('id'), token);
				}
			});

			setInterval(() => {
				this.firebase.onTokenRefresh().subscribe(function (token) {
					console.log("hello i am here 2");
					if (localStorage.getItem('id') != null) {
						apiHn.updateToken(localStorage.getItem('id'), token);
					}
				});
			}, 600000);

			this.firebase.onTokenRefresh().subscribe(function (token) {
				console.log("hello i am here 2");
				if (localStorage.getItem('id') != null) {
					apiHn.updateToken(localStorage.getItem('id'), token);
				}
			});


			this.firebase.onBackgroundMessage().subscribe(function (payload) {

				if ('extra' in payload) {
					let jsonDecodedPayload = JSON.parse(payload.extra);
					if ('hotDealId' in jsonDecodedPayload) {
						if (jsonDecodedPayload.hotDealId != null) {

							navigation.navigateRoot(['hotdeals']);
							return false;
						}
					}
				}
			})
			this.firebase.onMessage().subscribe((payload) => {
				this.componentSer.hasMessage.next(1);


				let routee = this.route.url.split('/');
				let routeArray = [];
				for (let i = 0; i < routee.length; i++) {

					let rout = routee[i].split(';');
					if (rout) {
						routeArray.push(rout[0]);
					} else {
						routeArray.push(routee[i]);
					}

				}


				if (routeArray.indexOf('chat-detail')) {
					// if (localStorage.getItem('id') == payload.messageFrom) {
					// this.navCtrl.navigateForward(['chat-detail', { 'id': payload.messageFrom }])
					this.componentSer.newRecieveMessageForUser.next(payload.body);
					// }
				}

				if (routeArray.indexOf('prices') || routeArray.indexOf('port') || routeArray.indexOf('ricechart') || routeArray.indexOf('gallery') || routeArray.indexOf('gallerydetails')) {
					this.componentSer.hasMessage.next(1);

				}

				if (routeArray.indexOf('chatdetails')) {
					if (localStorage.getItem('selectedChatUserId') == payload.messageFrom) {
						// this.navCtrl.navigateForward(['admin/chatdetails', { 'contactId': payload.id }])
						this.componentSer.newRecieveMessage.next(payload.body);
					}
				}
				// if( localStorage.getItem('id') == '1' ){
				// 	if (localStorage.getItem('selectedChatUserId') == payload.messageFrom) {
				// 		this.componentSer.newRecieveMessage.next(payload.message);
				// 	}
				// }
			});
		});
	}

	async presentModel() {
		console.log("Hey i am here");
		const model = await this.modalCtrl.create({
			component: PlanpagePage,
			animated: true
		})
		await model.present();
	}
	showExitConfirm() {
		this.alertController.create({
			header: 'Alert',
			message: 'Do you want to close the app?',
			backdropDismiss: false,
			buttons: [{
				text: 'Stay',
				role: 'cancel',
				handler: () => {

				}
			}, {
				text: 'Exit',
				handler: () => {
					navigator['app'].exitApp();
				}
			}]
		})
			.then(alert => {
				alert.present();
			});
	}

	initializeApp() {

		this.platform.ready().then(async () => {
			this.hasUser = localStorage.getItem('name');

			this.appType = localStorage.getItem('apptype')
			this.componentSer.compareTwoDates(localStorage.getItem('ExpiryUSDDate'));

			this.getlatestNotifCount();

			this.platform.ready().then(async () => {
				if (localStorage.getItem('id') != undefined) {
					if (localStorage.getItem('is_usd_active') == undefined || localStorage.getItem('usd_role') == '0') {
						const model = await this.modalCtrl.create({
							component: UsdconvertmodalPage,
							animated: true,
							cssClass: "contactModal"
						})
						await model.present();
					}
				}
			});

			console.log('Width: ' + this.platform.width());
			console.log('Height: ' + this.platform.height());

			this.apiser.CheckUserExpired().then((res: any) => {
				console.log(res)
				if (localStorage.getItem('is_usd_active') != '0') {
					localStorage.setItem('isExpiryUSD', res.isExpiry)
					localStorage.setItem('ExpiryUSDDate', res.data)
				} else {
					localStorage.setItem('isExpiryUSD', 'true')
					localStorage.setItem('ExpiryUSDDate', null)
				}

				localStorage.setItem('expired_on', res.data);
				console.log("i m here")
				this.componentSer.compareTwoDates(localStorage.getItem('expired_on'));
				this.componentSer.isUserExpired.next('true');



			}, (err: any) => {

			});

			console.log(new Date());
			let classThis = this;
			this.componentSer.firePushNotif.subscribe(function () {
				classThis.firebasepushnotif()
			});

			if (localStorage.getItem('id') != undefined || localStorage.getItem('id') != '') {
				let ifUsdActive = localStorage.getItem('is_usd_active');
				if (localStorage.getItem('is_INR_active') == '1') {
					console.log("kjhnijk");
					console.log("apptype OTHER");
					localStorage.setItem('apptype', 'OTHER');
				}

				if (ifUsdActive == '0') {
					console.log("kjhnijk");
					console.log("apptype OTHER");
					localStorage.setItem('apptype', 'OTHER');
				} else {
					console.log("apptype USD");
					localStorage.setItem('apptype', 'USD');
				}


			}
			let isExpiredUsd = localStorage.getItem('isExpiryUSD');
			this.statusBar.styleDefault();
			this.statusBar.overlaysWebView(false);
			this.statusBar.backgroundColorByHexString('#92B243');

			this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {

				if (this.location.isCurrentPathEqualTo('/prices')) {
					this.showExitConfirm();
					processNextHandler();
				} else {
					// Navigate to back page
					this.location.back();
				}
			});
			this.platform.backButton.subscribeWithPriority(5, () => {
				this.alertController.getTop().then(r => {
					if (r) {
						navigator['app'].exitApp();
					}
				}).catch(e => {

				})
			});

			localStorage.removeItem("popupCanceled");
			setTimeout(() => {
				this.componentSer.compareTwoDates(localStorage.getItem('expired_on'));
			}, 1000);


			// // let splash = await this.modalCtrl.create({ component: SplashscreenPage });
			// splash.present();
			if (localStorage.getItem('role') != null && localStorage.getItem('role') != undefined) {
				if (localStorage.getItem('role') == '2') {
					setTimeout(() => {
						// splash.dismiss();
						this.navCtrl.navigateForward(['admin/chat']);
					}, 4000);
				} else {
					setTimeout(() => {
						// splash.dismiss();
						let navigation = this.navCtrl;

						// this.navCtrl.navigateForward(['quality-details']);
						if (this.appType == 'USD') {
							// this.navCtrl.navigateForward(['quality-details']);
							this.firebase.onBackgroundMessage().subscribe(function (payload) {
								if ('buyerQuery' in payload) {
									navigation.navigateForward(['bid', { 'buy_query': payload.buyerQuery }]);
									return false
								}
								if ('extra' in payload) {
									let jsonDecodedPayload = JSON.parse(payload.extra);
									if ('hotDealId' in jsonDecodedPayload) {
										if (payload.extra.hotDealId != null) {

											navigation.navigateForward(['hotdeals']);
											return false;
										}
									}
								}
							});


							if (isExpiredUsd == 'true') {
								if (localStorage.getItem('is_INR_active') == '0') {
									console.log("hey i am here");
									// this.navCtrl.navigateRoot(['planpage']);
								} else {
									this.platform.ready().then(async () => {
										if (localStorage.getItem('id') != undefined) {
											if (localStorage.getItem('is_usd_active') == undefined || localStorage.getItem('usd_role') == '0') {
												const model = await this.modalCtrl.create({
													component: UsdconvertmodalPage,
													animated: true,
													cssClass: "contactModal"
												})
												await model.present();
											}
										}
									});
									console.log("apptype OTHER");
									localStorage.setItem('apptype', 'OTHER')

									console.log("i am here");
									this.navCtrl.navigateForward(['prices']);
									console.log("kjhnijk");
								}
							} else {
								this.firebase.onBackgroundMessage().subscribe(function (payload) {

									if ('extra' in payload) {
										let jsonDecodedPayload = JSON.parse(payload.extra);
										if ('hotDealId' in jsonDecodedPayload) {
											if (jsonDecodedPayload.hotDealId != null) {

												navigation.navigateRoot(['hotdeals']);
												return false;
											}
										}
									}
								})
								if (localStorage.getItem('isUserActivatedUSD') == '0') {
									if (localStorage.getItem('is_INR_active') == '1') {
										localStorage.setItem('apptype', 'OTHER')

										this.navCtrl.navigateRoot('prices');

									} else {
										// this.navCtrl.navigateRoot('planpage');
									}
								} else {
									if (localStorage.getItem('status') != '0') {
										if (localStorage.getItem('is_INR_active') == '0' && localStorage.getItem('transaction_id') == 'null') {
											// this.navCtrl.navigateRoot('planpage');
										} else {
											this.navCtrl.navigateForward(['prices']);
											localStorage.setItem('apptype', 'OTHER')


										}

									} else {
										this.navCtrl.navigateForward(['verifyotp']);
									}
								}
							}

						} else {
							this.firebase.onBackgroundMessage().subscribe(function (payload) {
								if ('buyerQuery' in payload) {
									navigation.navigateForward(['bid', { 'buy_query': payload.buyerQuery }]);
									return false
								}
							});
							console.log("kjhink");
							if (localStorage.getItem('is_INR_active') == '1') {
								this.platform.ready().then(async () => {
									if (localStorage.getItem('id') != undefined) {
										if (localStorage.getItem('is_usd_active') == undefined || localStorage.getItem('usd_role') == '0') {
											const model = await this.modalCtrl.create({
												component: UsdconvertmodalPage,
												animated: true,
												cssClass: "contactModal"
											})
											await model.present();
										}
									}
								});

								console.log("apptype OTHER");
								localStorage.setItem('apptype', 'OTHER')
								console.log("i am here");
								this.navCtrl.navigateForward(['prices']);
								console.log("kjhnijk");
							}

							if (localStorage.getItem('is_usd_active') == undefined || localStorage.getItem('is_usd_active') == '0') {
								if (localStorage.getItem('is_INR_active') == undefined || localStorage.getItem('is_INR_active') == '0') {
									localStorage.setItem('is_INR_active', '1');
									console.log("apptype OTHER");
									localStorage.setItem('apptype', 'OTHER')

									this.platform.ready().then(async () => {
										if (localStorage.getItem('id') != undefined) {
											if (localStorage.getItem('is_usd_active') == undefined || localStorage.getItem('usd_role') == '0') {
												const model = await this.modalCtrl.create({
													component: UsdconvertmodalPage,
													animated: true,
													cssClass: "contactModal"
												})
												await model.present();
											}
										}
									});

									console.log("i am here");
									this.navCtrl.navigateForward(['prices']);

								}
							}


							if (localStorage.getItem('is_INR_active') == '0' && localStorage.getItem('isUserActivatedUSD') == '1' && localStorage.getItem('isExpired') != 'true') {
								if (localStorage.getItem('is_INR_active') == '0' && localStorage.getItem('transaction_id') == null) {
									console.log("hey i am here");
									// this.navCtrl.navigateRoot('planpage');
								} else {
									console.log("i am here");
									this.navCtrl.navigateForward(['priceusd']);
									console.log("apptype USD");
									localStorage.setItem('apptype', 'USD')
								}
							}

							if (localStorage.getItem('is_INR_active') == '0' && localStorage.getItem('isUserActivatedUSD') == '1' && localStorage.getItem('isExpired') != 'false') {
								console.log("hey i am here");
								// this.navCtrl.navigateForward(['planpage']);
							}

						}
					}, 4000);
				}
			} else {
				setTimeout(() => {
					// splash.dismiss();
					// this.navCtrl.navigateForward(['forgotpassword']);
					this.navCtrl.navigateForward(['pre-register']);
				}, 4000);
			}

			this.isDarkModeEnabled();
			let apiPre = this.apiser;
			let navigation = this.navCtrl;
			this.firebasepushnotif()
			this.firebase.requestPermission().then(() => {

				this.firebase.getToken().then(function (token) {

					if (localStorage.getItem('id') != null) {
						apiPre.updateToken(localStorage.getItem('id'), token);
					}
				});

				setInterval(() => {
					this.firebase.onTokenRefresh().subscribe(function (token) {
						console.log("hello i am here 2");
						if (localStorage.getItem('id') != null) {
							apiPre.updateToken(localStorage.getItem('id'), token);
						}
					});
				}, 600000);

				this.firebase.onTokenRefresh().subscribe(function (token) {
					console.log("hello i am here 2");
					if (localStorage.getItem('id') != null) {
						apiPre.updateToken(localStorage.getItem('id'), token);
					}
				});

				this.firebase.onBackgroundMessage().subscribe(function (payload) {
					if ('extra' in payload) {
						let jsonDecodedPayload = JSON.parse(payload.extra);
						if ('hotDealId' in jsonDecodedPayload) {
							if (payload.extra.hotDealId != null) {

								this.navCtrl.navigateForward(['hotdeals']);
								return false;
							}
						}
					}
					if ('buyerQuery' in payload) {
						navigation.navigateForward(['bid', { 'buy_query': payload.buyerQuery }]);
					}
				});

				this.firebase.onMessage().subscribe((payload) => {
					if ('extra' in payload) {
						let jsonDecodedPayload = JSON.parse(payload.extra);
						if ('hotDealId' in jsonDecodedPayload) {
							if (payload.extra.hotDealId != null) {
								this.navCtrl.navigateForward(['hotdeals']);
								return false
							}
						}
					}
					this.componentSer.hasMessage.next(1);
					let routee = this.route.url.split('/');
					let routeArray = [];
					for (let i = 0; i < routee.length; i++) {
						let rout = routee[i].split(';');
						if (rout) {
							routeArray.push(rout[0]);
						} else {
							routeArray.push(routee[i]);
						}
					}

					if (routeArray.indexOf('chat-detail')) {
						// if (localStorage.getItem('id') == payload.messageFrom) {
						// this.navCtrl.navigateForward(['chat-detail', { 'id': payload.messageFrom }])
						this.componentSer.newRecieveMessageForUser.next(payload.body);
						// }
					}

					if (routeArray.indexOf('prices') || routeArray.indexOf('port') || routeArray.indexOf('ricechart') || routeArray.indexOf('gallery') || routeArray.indexOf('gallerydetails')) {
						this.componentSer.hasMessage.next(1);

					}

					if (routeArray.indexOf('chatdetails')) {

						if (localStorage.getItem('selectedChatUserId') == payload.messageFrom) {
							// this.navCtrl.navigateForward(['admin/chatdetails', { 'contactId': payload.id }])
							this.componentSer.newRecieveMessage.next(payload.body);
						}

					}
					// if( localStorage.getItem('id') == '1' ){
					// 	if (localStorage.getItem('selectedChatUserId') == payload.messageFrom) {
					// 		this.componentSer.newRecieveMessage.next(payload.message);
					// 	}
					// }
				});
			});
			// if(localStorage.getItem('isExpiryUSD') == 'true' ){
			// 	if( localStorage.getItem('is_INR_active') == '0' ){
			// 		this.navCtrl.navigateRoot(['prices']);
			// 	}
			// }
			// if(this.platform.is('ios')){
			// 	this.firebase.hasPermission().then( () => {
			// 		this.firebase.grantPermission().then(() => {
			// 			this.firebase.getToken().then(function(token) {
			// 				if( localStorage.getItem('id') != null ){
			// 					this.apiser.updateToken(localStorage.getItem('id') , token);
			// 				}
			// 			});

			// 			this.firebase.onTokenRefresh().subscribe(function(token) {
			console.log("hello i am here 2");
			// 				if( localStorage.getItem('id') != null ){
			// 					this.apiser.updateToken(localStorage.getItem('id') , token);
			// 				}
			// 			});
			// 			this.firebase.onMessageReceived().subscribe((payload) => {
			// 				let routee = this.route.url.split('/')[1].split(';');
			// 				if (routee[0] == 'chat-detail') {
			// 					if (localStorage.getItem('userId') == payload.messageTo) {
			// 						// this.navCtrl.navigateForward(['chat-detail', { 'contactId': payload.id }])
			// 					}
			// 				}
			// 				if (routee[0] == 'admin/chatdetails') {
			// 					if (localStorage.getItem('userId') == payload.messageTo) {
			// 						// this.navCtrl.navigateForward(['admin/chatdetails', { 'contactId': payload.id }])
			// 					}
			// 				}
			// 			});
			// 		});
			// 	});
			// }
			this.appType = localStorage.getItem('apptype')

		});

		this.componentSer.reRenderSideMenu.subscribe((data) => {
			this.appType = localStorage.getItem('apptype')
		});
	}



	logout() {
		localStorage.clear();
		this.menuCtrl.close();
		this.navCtrl.navigateForward(['login']);
	}

	deleteaccount() {
		this.menuCtrl.close();
		this.navCtrl.navigateForward(['deleteaccount']);
	}

	private async isDarkModeEnabled() {
		try {
			let dark_mode_enabled: ThemeDetectionResponse = await this.themeDetection.isDarkModeEnabled();
			if (dark_mode_enabled.value == true) {
				//document.body.classList.toggle('dark', true);
			}
		} catch (e) {
		}
	}

	ngOnInit() {
		console.log(this.selectedIndex);
		this.appType = localStorage.getItem('apptype')
		const path = window.location.pathname.split('folder/')[1];
		if (path !== undefined) {
			this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
		}
	}

	payWithRazor() {
		var options = {
			description: 'Rice Data',
			image: 'https://ricebrok-staging.webcooks.in/images/sitelogo.png',
			currency: 'INR',
			key: 'rzp_test_LA2o3rFXhgtfmS',
			amount: this.paymentAmount,
			name: 'SNTC',
			prefill: {
				email: localStorage.getItem('email'),
				contact: localStorage.getItem('mobile'),
				name: localStorage.getItem('name')
			},
			theme: {
				color: '#F37254'
			},
			modal: {
				ondismiss: function () {
					alert('dismissed')
				}
			}
		};

		var successCallback = (payment_id) => {
			// let tran_id = payment_id
			// let userId = localStorage.getItem('id');
			// let plan_id


		};

		var cancelCallback = (error) => {
			// this.compSer.chartInterval.next("15_Days");
		};

		RazorpayCheckout.open(options, successCallback, cancelCallback);
	}

	showProfile() {
		this.navCtrl.navigateForward(['profile']);
		this.menuCtrl.close();
	}
	goToUSD() {
		this.menuCtrl.close();

		console.log('i am here')
		console.log("jnk,s");
		console.log("hey i am here");
		// this.navCtrl.navigateForward(['planpage'])
		console.log("apptype USD");
		localStorage.setItem('apptype', 'USD')
	}

	getlatestNotifCount() {
		let userId = localStorage.getItem('id');
		this.apiser.userNotification(userId).then((res: any) => {
			console.log(res.data);
			if (res.data > 0) {
				localStorage.setItem('isNewNotification', 'true');
			} else {
				localStorage.setItem('isNewNotification', 'false');
			}
		}, (err: any) => {
			console.log(err)
		})
	}

}