import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';
// import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

declare var RazorpayCheckout:any;
declare var paypal: any;

@Component({
  selector: 'app-planpage',
  templateUrl: './planpage.page.html',
  styleUrls: ['./planpage.page.scss'],
})
export class PlanpagePage implements OnInit {
	public listPlans:any;
	public listUSDPlans:any;
	public selectedPlanId:any;
	public selectedPlanDiscountedAmountINR:any;
	public selectedPlanDiscountedAmountUSD:any;
	public featureSplit:any = [];

	public price;
	public priceToPay = 10;
	public payPalConfig: any;
	public PAYPAL_CLIENT_ID_TEST = "Af5Op1UABAes1X3EKCYbVAwjZITlKe9Oqlvjxh1bHM8hQWhLNJ4DLdsMcL6AmaeeKOZ_CdDWZVvWm75q"
	public PAYPAL_CLIENT_ID_LIVE = "ARNC1YzHCEPir1DCmzRW9F9eksQVDJxbceTPzwPd3yEx2F2NFjxHydc8a2gLx2qcvUhc697apiR88_Fi"
	public PAYPAL_CLIENT_ID = this.PAYPAL_CLIENT_ID_TEST


	constructor(public apiser:RestService, public modelController:ModalController,public compSer:ComponentsService,public navCtrl:NavController,public location:Location,public route: Router) { 
		this.getUSDPlans();
		console.log("kjnjk");
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
						alert('i am here paypal success')
					}else {

					}

					console.log('Transaction completed by ' + details.payer.name.given_name + '!');
				})
				.catch(err => {
					console.log(err);
					alert('paypal error');
				})
			},

			onError: (err) => {
				console.log(err)
			}
		}
	}
	ionViewDidEnter() {
		paypal.Buttons(this.payPalConfig).render('#paypal-button');
	}
	closeme(){
		// this.modelController.dismiss();
		if( localStorage.getItem('isUserActivatedUSD') != '1' ){
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

	buynow(){
		
		// key: 'rzp_test_LA2o3rFXhgtfmS',
		// key: 'rzp_live_igtbdlPLfbiw6d',
		let paymentAmount = this.selectedPlanDiscountedAmountINR;
		let planid = this.selectedPlanId;

		var options = {
			description: 'Rice Data',
			image: 'https://ricebrok-staging.webcooks.in/images/sitelogo.png',
			currency: 'INR',
			key: 'rzp_test_LA2o3rFXhgtfmS',
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
					alert('dismissed');
				}
			}
		};
	
		var successCallback = (payment_id) => {
			let tran_id = payment_id
			let userId = localStorage.getItem('id');
			let plan_id = this.selectedPlanId;

			this.apiser.addOrder({ transaction_id: tran_id , user_id : localStorage.getItem('id') , plan_id : plan_id }).then((res:any) => {

				this.compSer.isUserExpired.next('false');
				
				localStorage.setItem('apptype' , 'USD');
				localStorage.setItem('is_usd_active' , '1');
				localStorage.setItem('usd_role' , res.userDetails[0]['usd_role']);
				localStorage.setItem('transaction_id' , res.userDetails[0]['transaction_id']);
				localStorage.setItem('isUserActivatedUSD' , '1');

				this.closeme();
				this.navCtrl.navigateForward(['priceusd']);
			} , (err:any) => {

			});
		};
	
		var cancelCallback = (error) => {
			alert(JSON.stringify(error));
			// this.compSer.chartInterval.next("15 Days");
		};
		RazorpayCheckout.open(options, successCallback, cancelCallback);
	}

	getUSDPlans(){
		this.apiser.getUSDPlan().then((res:any) => {
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

}