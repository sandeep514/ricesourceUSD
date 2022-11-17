import { Location } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';
import { TrialperiodPage } from '../trialperiod/trialperiod.page';
// import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
declare var RazorpayCheckout:any;
declare var paypal: any;

@Component({
  selector: 'app-planpage',
  templateUrl: './planpage.page.html',
  styleUrls: ['./planpage.page.scss'],
})

export class PlanpagePage implements OnInit {
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
	public payPalConfig: any;
	public PAYPAL_CLIENT_ID_TEST = "Af5Op1UABAes1X3EKCYbVAwjZITlKe9Oqlvjxh1bHM8hQWhLNJ4DLdsMcL6AmaeeKOZ_CdDWZVvWm75q" // discountindia
	public PAYPAL_CLIENT_ID_LIVE = "ARNC1YzHCEPir1DCmzRW9F9eksQVDJxbceTPzwPd3yEx2F2NFjxHydc8a2gLx2qcvUhc697apiR88_Fi" // discountindia
	public PAYPAL_CLIENT_ID = this.PAYPAL_CLIENT_ID_LIVE
	public isDomesticRoleAvailable = false;
	public isUSDRoleAvailable = false;
	public showTrialPeriod = false;

	constructor(public apiser:RestService, public modelController:ModalController,public compSer:ComponentsService,public navCtrl:NavController,public location:Location,public route: Router) { 
		this.getUSDPlans();
		// this.presentModel()
		if( localStorage.getItem('role') != '' && localStorage.getItem('role') != undefined && localStorage.getItem('role') != '0' ){
			console.log("knjk");
			this.isDomesticRoleAvailable = true;
		}
		if( localStorage.getItem('usd_role') != '' && localStorage.getItem('usd_role') != undefined  && localStorage.getItem('usd_role') != '0' ){
			console.log("ljmk");
			this.isUSDRoleAvailable = true;
		}

		// if( localStorage.getItem('ExpiryUSDDate') != undefined && localStorage.getItem('ExpiryUSDDate') != '' && localStorage.getItem('ExpiryUSDDate') != 'null' ) {
		// 	this.showTrialPeriod = true
		// }

		console.log(localStorage.getItem('ExpiryUSDDate'))
		console.log(localStorage.getItem('created_on'))
		console.log(typeof localStorage.getItem('transaction_id'))

		if( localStorage.getItem('transaction_id') == undefined || localStorage.getItem('transaction_id') == null || localStorage.getItem('transaction_id') == 'null'  ){
			this.showTrialPeriod = true
			console.log('i am here');
		}else{
			this.showTrialPeriod = false
		}
		if( localStorage.getItem('ExpiryUSDDate') == localStorage.getItem('created_on') ){
			this.showTrialPeriod = true
			console.log('i am here');
		}

		

			
		console.log(this.showTrialPeriod);
	}
	async presentModel(){
		const model = await this.modelController.create({
			component: TrialperiodPage,
			cssClass: "contactModal",
			animated: true
		})
		await model.present();
	}

	
	// payWithPaypal() {
	// 	console.log("jnk");
	// 	this.payPal.init({
	// 		PayPalEnvironmentProduction: 'ARNC1YzHCEPir1DCmzRW9F9eksQVDJxbceTPzwPd3yEx2F2NFjxHydc8a2gLx2qcvUhc697apiR88_Fi',
	// 		PayPalEnvironmentSandbox: 'Af5Op1UABAes1X3EKCYbVAwjZITlKe9Oqlvjxh1bHM8hQWhLNJ4DLdsMcL6AmaeeKOZ_CdDWZVvWm75q' 
	// 	}).then(() => {

	// 		this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({

	// 		})).then(() => {
	// 			let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
	// 			this.payPal.renderSinglePaymentUI(payment).then((res) => {
	// 				console.log(res);
	// 			}, (err:any) => {
	// 				alert(JSON.stringify(err));
	// 			});
	// 		}, (err:any) => {
	// 			alert(JSON.stringify(err));

	// 		});
	// 	}, (err:any) => {
	// 		alert(JSON.stringify(err));
	// 	});
	// }


	ngOnInit() {

		if( localStorage.getItem('usd_role') != '' && localStorage.getItem('usd_role') != undefined  && localStorage.getItem('usd_role') != '0' ){
			console.log("ljmk");
			this.isUSDRoleAvailable = true;
		}
		
		if( localStorage.getItem('role') != '' && localStorage.getItem('role') != undefined  && localStorage.getItem('role') != '0' ){
			this.isUSDRoleAvailable = false;
		}


		this.price = this.selectedPlanDiscountedAmountUSD + " $"
		let enviroment = ""
		
		if (this.PAYPAL_CLIENT_ID == this.PAYPAL_CLIENT_ID_TEST) {
			enviroment = "sandbox"
		}else {
			enviroment = "live"
		}

		this.payPalConfig = {
			style: {
				layout: 'horizontal',
				color:  'blue',
				shape:  'rect',
				label:  'paypal',
				tagline: 'false'
			},
			env: enviroment,
			client: {
				sandbox: this.PAYPAL_CLIENT_ID,
			},
			commit: false,
			createOrder: (data, actions)=> {
				return actions.order.create({
					purchase_units: [{
						amount: {
							value: this.selectedPlanDiscountedAmountUSD,
							currency: 'USD' 
						}
					}]
				});
			},

			onApprove: (data, actions) => {
				return actions.order.capture().then((details) => {
					console.log(details)

					let status = details["status"];
					let id = details["id"];

					if (status == "COMPLETED") {
						this.validPurchase(id);
						let plan_id = this.selectedPlanId;

						this.apiser.addOrder({ transaction_id: 'paypal' , user_id : localStorage.getItem('id') , plan_id : plan_id }).then((res:any) => {

							
							localStorage.setItem('apptype' , 'USD');
							localStorage.setItem('is_usd_active' , '1');
							localStorage.setItem('usd_role' , res.userDetails[0]['usd_role']);
							localStorage.setItem('transaction_id' , res.userDetails[0]['transaction_id']);
							localStorage.setItem('isUserActivatedUSD' , '1');
							this.compSer.isUserExpired.next('false');
							this.navCtrl.navigateForward(['priceusd']);

							// this.closeme();
						} , (err:any) => {

						});
					}else {

					}

					console.log('Transaction completed by ' + details.payer.name.given_name + '!');
				})
				.catch(err => {
					console.log(err);
					// alert('paypal error');
				})
			},

			onError: (err) => {
				console.log(err)
			}
		}
	}
	ionViewDidEnter() {
		if( localStorage.getItem('usd_role') ){
			paypal.Buttons(this.payPalConfig).render('#paypal-button');
		}
	}
	closeme(){
		this.modelController.dismiss();

		localStorage.setItem('apptype' , 'OTHER');
		this.navCtrl.navigateForward(['prices']);
		return false;

		if( localStorage.getItem('is_INR_active') == '1' ){
			localStorage.setItem('apptype' , 'OTHER');
			this.navCtrl.navigateForward(['prices']);
		}else if( localStorage.getItem('isUserActivatedUSD') != '1' ){
			localStorage.setItem('apptype' , 'OTHER');
			this.navCtrl.navigateForward(['prices']);
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
		let userEmail = localStorage.getItem('user');
		let userId = JSON.parse(userEmail).id;
		
		this.apiser.startTrialPeriod(userId).then((res:any) => {
			localStorage.setItem('is_usd_active' , '1');
			localStorage.setItem('usd_role' , res.data.usd_role);
			localStorage.setItem('isExpiryUSD' ,'false');
			localStorage.setItem('isUserActivatedUSD', '1');
			localStorage.setItem('expired_on' , res.data.expired_on);
			localStorage.setItem('ExpiryUSDDate' , res.data.expired_on);
			localStorage.setItem('apptype', 'USD');

			setTimeout(() => {
				this.navCtrl.navigateForward('priceusd');
			} , 2000)
			this.closeme()
		} , (err:any) => {
		  	console.log(err)
		});
		
	}
	buynow(){
		
		// key: 'rzp_test_LA2o3rFXhgtfmS',
		// key: 'rzp_live_igtbdlPLfbiw6d',
		let paymentAmount = this.selectedPlanDiscountedAmountINR;
		let planid = this.selectedPlanId;

		var options = {
			description: ' Plan',
			image: 'https://ricebrok-staging.webcooks.in/images/sitelogo.png',
			currency: 'INR',
			// key: 'rzp_test_dvU9zyoVzyzTb5',
			key: 'rzp_live_LfJHE2u8SRy5Eg',
			amount: (paymentAmount*100),
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
				// alert("payment successfull");
				localStorage.setItem('apptype' , 'USD');
				localStorage.setItem('is_usd_active' , '1');
				localStorage.setItem('isExpired' , 'false');
				localStorage.setItem('usd_role' , res.userDetails[0]['usd_role']);
				localStorage.setItem('transaction_id' , res.userDetails[0]['transaction_id']);
				localStorage.setItem('isUserActivatedUSD' , '1');
				this.compSer.isUserExpired.next('false');
				this.navCtrl.navigateForward(['priceusd']);

				// this.closeme();
			} , (err:any) => {

			});
		};
	
		var cancelCallback = (error) => {
			// alert(JSON.stringify(error));
			console.log(error);
			// this.compSer.chartInterval.next("15 Days");
		};
		RazorpayCheckout.open(options, successCallback, cancelCallback);
	}

	getUSDPlans(){
		this.apiser.getUSDPlan().then((res:any) => {
			console.log(res.plans[0]);
			this.listUSDPlans = res.plans;
			this.selectedPlanId = res.plans[0].id;
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
}