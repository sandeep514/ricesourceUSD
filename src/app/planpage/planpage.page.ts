import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';
// import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

declare var RazorpayCheckout:any;

@Component({
  selector: 'app-planpage',
  templateUrl: './planpage.page.html',
  styleUrls: ['./planpage.page.scss'],
})
export class PlanpagePage implements OnInit {
	public listPlans:any;
	public listUSDPlans:any;
	public featureSplit:any = [];

	constructor(public apiser:RestService, public modelController:ModalController,public compSer:ComponentsService,public navCtrl:NavController,public location:Location) { 
		this.getUSDPlans();
		console.log("kjnjk");
	}

	paymentAmount: string = '3.33';
	currency: string = 'USD';
	currencyIcon: string = '₹';

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
		// this.apiser.presentLoader("Fetching Plans...");
		
	}

	closeme(){
		// this.modelController.dismiss();
		this.navCtrl.navigateForward(['prices']);
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

	buynow(plan){
		
		// key: 'rzp_test_LA2o3rFXhgtfmS',
		// key: 'rzp_live_igtbdlPLfbiw6d',
		let paymentAmount = plan.discounted_prie;
		let planid = plan.id;

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
			let plan_id = planid;

			this.apiser.addOrder({ transaction_id: tran_id , user_id : localStorage.getItem('id') , plan_id : planid }).then((res:any) => {
				this.compSer.isUserExpired.next('false');
				localStorage.setItem('apptype' , 'USD');
				this.closeme();
				// this.navCtrl.navigateForward(['priceusd']);
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
			console.log(res.plans);
		} , (err:any) => {
			console.log(err);
		})
	}
}