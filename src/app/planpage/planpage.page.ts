import { Location } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';
import { TrialperiodPage } from '../trialperiod/trialperiod.page';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
declare var RazorpayCheckout:any;
import * as $ from 'jquery';
// import { Stripe } from '@ionic-native/stripe/ngx';
declare var Stripe;


@Component({
  selector: 'app-planpage',
  templateUrl: './planpage.page.html',
  styleUrls: ['./planpage.page.scss'],
})

export class PlanpagePage implements OnInit {
	paymentAmount: string = '3.33';
	currency: string = 'USD';
	currencyIcon: string = "$";
	stripe = Stripe('pk_live_tAcok0RjcD3tnKONwKRegMYp');
	// stripe = Stripe('pk_test_FyOvOhn86f8G1k2NHetJVJrz');
	cardDetails:any = {};
	stripeCustomerId:any;
	card: any;


	@ViewChild('slides', {static: false}) slides: IonSlides;

	slidePrev() {
		this.slides.slidePrev()
	}
	slideNext() {
		this.slides.slideNext()
	}
	public listPlans:any;
	public listUSDPlans:any;
	public selectedPlanId:any;
	public selectedPlanDiscountedAmountINR:any;
	public selectedPlanDiscountedAmountUSD:any;
	public featureSplit:any = [];
	slideOpts = {
		initialSlide: 0,
		slidesPerView: 1,
		spaceBetween: 1,
		freeMode: true,
		pagination: true,
		speed: 600,
		autoplay: false,
		loop: false,
	};
	public price;
	public showScreenshotStatus= 0;
	public priceToPay = 10;
	public isDomesticRoleAvailable = false;
	public isUSDRoleAvailable = false;
	public showTrialPeriod = false;

	constructor(public menuCtrl: MenuController ,public apiser:RestService, public modelController:ModalController ,public compSer:ComponentsService ,public navCtrl:NavController ,public location:Location ,public route: Router) { 
		console.log('order_'+Math.floor(Math.random() * 30000000)+'_'+localStorage.getItem('id')+'_'+Math.floor(Math.random() * 30000000));
		this.getUSDPlans();
		// this.presentModel()
		if( localStorage.getItem('role') != '' && localStorage.getItem('role') != undefined && localStorage.getItem('role') != '0' ){
			console.log("knjk");
			this.isDomesticRoleAvailable = true;
		}
		if( localStorage.getItem('usd_role') != '' && localStorage.getItem('usd_role') != undefined  && localStorage.getItem('usd_role') != '0' && localStorage.getItem('is_INR_active') != '1' ){
			console.log("ljmk");
			this.isUSDRoleAvailable = true;
		}

		// if( localStorage.getItem('ExpiryUSDDate') != undefined && localStorage.getItem('ExpiryUSDDate') != '' && localStorage.getItem('ExpiryUSDDate') != 'null' ) {
		// 	this.showTrialPeriod = true
		// }

		console.log(localStorage.getItem('ExpiryUSDDate'))
		console.log(localStorage.getItem('created_on'))
		console.log(typeof localStorage.getItem('transaction_id'))

		if( localStorage.getItem('transaction_id') == undefined || localStorage.getItem('transaction_id') == null || localStorage.getItem('transaction_id') == 'null' ){
			console.log("jkni");
			this.showTrialPeriod = true
		}else{
			console.log("jkni");
			this.showTrialPeriod = false
		}
		// if( localStorage.getItem('ExpiryUSDDate') == localStorage.getItem('created_on') ){
		// 	this.showTrialPeriod = true
		// 	console.log('i am here');
		// }
		setTimeout(() => {
			this.apiser.dismissLoader();
		} , 10000)
	
		console.log(this.showTrialPeriod);
	}
	// ionViewDidLoad() {
	// 	alert(this.isUSDRoleAvailable);
	// 	if( this.isUSDRoleAvailable ){
	// 		setTimeout(() => {
	// 			this.setupStripe();
	// 		} ,5000)
	// 	}
	// 	console.log("jnknk");
		
	// }
	setupStripe(){
		let elements = this.stripe.elements();
		console.log('elements');
		console.log(elements);
		var style = {
		  base: {
			color: '#32325d',
			lineHeight: '24px',
			fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
			fontSmoothing: 'antialiased',
			fontSize: '16px',
			'::placeholder': {
			  color: '#aab7c4'
			}
		  },
		  invalid: {
			color: '#fa755a',
			iconColor: '#fa755a'
		  }
		};
	
		this.card = elements.create('card', { style: style });
	
		this.card.mount('#card-element');
		this.paymentAmount = this.selectedPlanDiscountedAmountUSD;
	
		this.card.addEventListener('change', event => {
		  var displayError = document.getElementById('card-errors');
		  if (event.error) {
			displayError.textContent = event.error.message;
		  } else {
			displayError.textContent = '';
		  }
		});
	
		var form = document.getElementById('payment-form');
		console.log(form)

		form.addEventListener('submit', event => {
		this.apiser.presentLoader('Please wait...');

		  event.preventDefault();
		  this.stripe.createSource(this.card).then(result => {
			if( 'error' in result ){
				var errorElement = document.getElementById('card-errors');
				errorElement.textContent = result.error.message;
				this.apiser.presentToast(result.error.message);
				this.apiser.dismissLoader();
			}else{
				this.stripe.createToken(this.card).then((data) => {
					let cardId = data.token.card.id;
					this.stripe.createPaymentMethod({
						type: 'card',
						card : this.card
					}).then((res:any) => {
						let paymentMethodId = res.paymentMethod.id;
						// this.stripe.paymentMethod()
						this.apiser.getCustomerStripe( { 'paymentMethodId' : paymentMethodId , 'email' : localStorage.getItem('email') , 'source' : result.source.id }).then((res:any) => {
							console.log(res)
							this.stripeCustomerId = res.stripeCustomer;
						}).catch((err:any) => {
							console.log(err)
						})
					}).catch((err:any) => {
						console.log(err)
					})
					console.log(data);
					
					let myData = {
						'amount' : this.selectedPlanDiscountedAmountUSD,
						'currency' : 'usd',
						'description' : 'Example charge',
						'stripeToken' : data.token.id,
						'source' : result.source.id,
						'email' : localStorage.getItem('email')
					}

					this.apiser.chargeStripe(myData).then((res:any) => {
						console.log(res);
						if(res.data.captured == true && res.data.paid == true){
							let plan_id = this.selectedPlanId;
							this.apiser.addOrder({ transaction_id: 'stripe' , user_id : localStorage.getItem('id') , plan_id : plan_id }).then((apires:any) => {
								localStorage.setItem('expired_on' , apires.userDetails[0]['expired_on']);
								localStorage.setItem('apptype' , 'USD');
								localStorage.setItem('is_usd_active' , '1');
								localStorage.setItem('isExpired' , 'false');
								localStorage.setItem('usd_role' , apires.userDetails[0]['usd_role']);
								localStorage.setItem('transaction_id' , res.data.balance_transaction);
								localStorage.setItem('isUserActivatedUSD' , '1');
								this.compSer.isUserExpired.next('false');
								this.navCtrl.navigateForward(['payment-success']);
								this.apiser.presentToast('Payment successful.');

								// this.closeme();
							} , (err:any) => {
								this.navCtrl.navigateForward(['payment-cancel']);
								this.apiser.presentToast('Something went wrong.');
							});
						}
						
						this.apiser.dismissLoader()

					}).catch((err:any) => {
						console.log(err)
						var errorElement = document.getElementById('card-errors');
						errorElement.textContent = err.error.message;
						this.apiser.presentToast(err.error.message);
						this.apiser.dismissLoader()
					})
				}).catch(() => {
					console.log("error")
					this.apiser.dismissLoader()
				})
			}

			return false;
			if (result.error) {
			 
			} else {
				

				// stripe.charges.create({
				// 	amount: req.body.amount,
				// 	currency: req.body.currency,
				// 	source: req.body.token,
				// 	description: 'My First Test Charge (created for API docs)',
				// 	  }).then((charge) => {
				// 		console.log(charge);
				// 		res.status(200).json(charge);
				// 	  })
				// 	  .catch((err) => {
				// 		console.log(err);
				// 		res.send(err);
				// 	  });
			  console.log(result);
			}
		  });
		});
	  }
	
	  makepaymentButton(){
		// this.stripe.charges.create({
		// 	amount: 100,
		// 	currency: 'USD',
		// 	source: req.body.token,
		// 	description: 'My First Test Charge (created for API docs)',
		// 	  }).then((charge) => {
		// 		console.log(charge);
		// 		// res.status(200).json(charge);
		// 	  })
		// 	  .catch((err) => {
		// 		console.log(err);
		// 		// res.send(err);
		// 	  });
	  }
	// payWithStripe() {
	// 	this.stripe.setPublishableKey(this.stripe_Key);
	
	// 	this.cardDetails = {
	// 		number: '4242424242424242',
	// 		expMonth: 12,
	// 		expYear: 2025,
	// 		cvc: '220'
	// 	}
	
	// 	this.stripe.createCardToken(this.cardDetails)
	// 	  .then(token => {
	// 		console.log(token);
	// 		// this.makePayment(token.id);
	// 	  })
	// 	  .catch(error => console.error(error));
	//   }
	async presentModel(){
		const model = await this.modelController.create({
			component: TrialperiodPage,
			cssClass: "contactModal",
			animated: true
		})
		await model.present();
	}


	ngOnInit() {

		if( localStorage.getItem('role') != '' && localStorage.getItem('role') != undefined  && localStorage.getItem('role') != '0' ){
			this.isUSDRoleAvailable = false;
		}
		if( localStorage.getItem('usd_role') != '' && localStorage.getItem('usd_role') != undefined  && localStorage.getItem('usd_role') != '0' && localStorage.getItem('is_INR_active') != '1' ){
			console.log("ljmk");
			this.isUSDRoleAvailable = true;
		}
		


		this.price = this.selectedPlanDiscountedAmountUSD + " $"
		let enviroment = ""
		
		
		// if( this.isUSDRoleAvailable ){
		// 	setTimeout(() => {
		// 		this.setupStripe();
		// 	} ,5000)
		// }

	}

	ionViewDidEnter() {
		if( this.isUSDRoleAvailable ){
			setTimeout(() => {
				this.setupStripe();
				console.log("i runned");
			} ,2000)
		}
		console.log("jnknk");
		if( localStorage.getItem('usd_role') ){
			// paypal.Buttons(this.payPalConfig).render('#paypal-button');
		}
	}
	
	closeme(){
		if( localStorage.getItem('is_INR_active') == "1" ){
			this.modelController.dismiss();
			localStorage.setItem('apptype' , 'OTHER');
			this.navCtrl.navigateForward(['prices']);
		}else{
			if( localStorage.getItem('isExpiryUSD') == "true" ){
				this.navCtrl.navigateForward(['planpage']);
			}else{
				this.modelController.dismiss();
				// localStorage.setItem('apptype' , 'OTHER');
				// this.navCtrl.navigateForward(['prices']);
				// return false;
		
				if( localStorage.getItem('is_INR_active') == '1' ){
					localStorage.setItem('apptype' , 'OTHER');
					this.navCtrl.navigateForward(['prices']);
				}else if( localStorage.getItem('isUserActivatedUSD') == '1' ){
					localStorage.setItem('apptype' , 'USD');
					this.navCtrl.navigateForward(['priceusd']);
				}
			}
		}
		
	}

	validPurchase(id) {
		// Purchase confirm 
		//Do whatever you want to do
	  }
	
	
	getPlans(){
		this.apiser.getPlans().then((res:any) => {
			this.listPlans = res.plans;
			this.apiser.loaderCtrl.dismiss();
		} , (err:any) => {
			this.apiser.loaderCtrl.dismiss();
		});
	}

	floatingTwo(offerPrice , actualPrice){
		let percentageValue = (100 - (( offerPrice * 100) / actualPrice));
		return percentageValue.toFixed(2);
	}

	getSplitsValue(feature){
		this.featureSplit =  feature.split(',');
	}

	startTrial(){
		this.apiser.presentLoader('Please wait...');

		let userEmail = localStorage.getItem('user');
		let userId = JSON.parse(userEmail).id;
		
		this.apiser.startTrialPeriod(userId).then((res:any) => {
			localStorage.setItem('transaction_id' , 'trial');
			localStorage.setItem('is_usd_active' , '1');
			localStorage.setItem('usd_role' , res.data.usd_role);
			localStorage.setItem('isExpired' ,'false');
			localStorage.setItem('isExpiryUSD' ,'false');
			localStorage.setItem('isUserActivatedUSD', '1');
			localStorage.setItem('expired_on' , res.data.expired_on);
			localStorage.setItem('ExpiryUSDDate' , res.data.expired_on);
			localStorage.setItem('apptype', 'USD');

			setTimeout(() => {
				this.apiser.dismissLoader();
				this.closeme()
				this.navCtrl.navigateForward(['priceusd']);

			} , 2000)
		} , (err:any) => {
			this.apiser.dismissLoader();

		  	console.log(err)
		});
		
	}
	buynow(){
		
		// key: 'rzp_test_LA2o3rFXhgtfmS',
		// key: 'rzp_live_igtbdlPLfbiw6d',
		let paymentAmount = this.selectedPlanDiscountedAmountINR;
		let planid = this.selectedPlanId;
		let data = {
			'amount' : (paymentAmount*100),
		}
		this.apiser.getOrderIdFromRazorpay(data).then((res:any) => {
			var options = {
				description: ' Plan',
				image: 'https://ricebrok-staging.webcooks.in/images/sitelogo.png',
				currency: 'INR',
				// key: 'rzp_test_dvU9zyoVzyzTb5',
				key: 'rzp_live_NY1vm28wpcuCKf',
				// secret: 'eTqutKKKWKjyq28vTsahFIcl',
				payment_capture: 1,
				amount: (paymentAmount*100),
				order_id: JSON.parse(res.data).id,
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
						console.log('dismissed');
					}
				}
			};
		
			var successCallback = (payment_id) => {
				let tran_id = payment_id
				let userId = localStorage.getItem('id');
				let plan_id = this.selectedPlanId;
	
				this.apiser.addOrder({ transaction_id: tran_id , user_id : localStorage.getItem('id') , plan_id : plan_id }).then((res:any) => {
					localStorage.setItem('expired_on' ,res.userDetails[0]['expired_on'])
					// alert("payment successfull");
					localStorage.setItem('apptype' , 'USD');
					localStorage.setItem('is_usd_active' , '1');
					localStorage.setItem('isExpired' , 'false');
					localStorage.setItem('usd_role' , res.userDetails[0]['usd_role']);
					localStorage.setItem('transaction_id' , res.userDetails[0]['transaction_id']);
					localStorage.setItem('isUserActivatedUSD' , '1');
					this.compSer.isUserExpired.next('false');
					this.navCtrl.navigateForward(['payment-success']);
	
					// this.closeme();
				} , (err:any) => {
					console.log("kjniknk");
				});
			};
		
			var cancelCallback = (error) => {
				// alert(JSON.stringify(error));
				this.navCtrl.navigateForward(['payment-cancel']);
				console.log(error);
				// this.compSer.chartInterval.next("15 Days");
			};
			RazorpayCheckout.open(options, successCallback, cancelCallback);
		}).catch((err:any) => {
			console.log(err)
		})
		return false;


		
	}

	getUSDPlans(){
		this.apiser.getUSDPlan().then((res:any) => {
			console.log(res.plans[0]);
			this.listUSDPlans = res.plans;
			this.selectedPlanId = res.plans[0].id;
			console.log(res.plans[0].discounted_prie);
			this.selectedPlanDiscountedAmountINR = res.plans[0].discounted_prie;
			this.selectedPlanDiscountedAmountUSD = res.plans[0].discounted_price_usd;
			
		} , (err:any) => {
			console.log(err);
		})
	}
	
	updateSelectedPlan(PlanDetails){
		this.selectedPlanId = PlanDetails.id;

		this.selectedPlanDiscountedAmountINR = PlanDetails.discounted_prie
		this.selectedPlanDiscountedAmountUSD = PlanDetails.discounted_price_usd
	}

	showScreenshot(){
		if(this.showScreenshotStatus == 0){
			this.showScreenshotStatus = 1;
		}else{
			this.showScreenshotStatus = 0;
		}
		console.log(this.showScreenshotStatus);
	}
	openModel(){
		this.menuCtrl.enable(true);
		this.menuCtrl.open();
	}
}