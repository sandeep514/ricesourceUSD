import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';
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

	ngOnInit() {
		// this.apiser.presentLoader("Fetching Plans...");
		
	}

	closeme(){
		this.modelController.dismiss();
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
			key: 'rzp_live_igtbdlPLfbiw6d',
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
				localStorage.setItem('chartInt' , 'true');
				localStorage.setItem('isExpired' , 'false');

				this.compSer.isUserExpired.next('false');
				this.navCtrl.navigateForward(['port']);

				this.apiser.CheckUserExpired().then( (res:any) => {
					localStorage.setItem('expired_on' , res.data);
					this.closeme();
				});

				
			} , (err:any) => {

			});

		};
	
		var cancelCallback = (error) => {
			alert("Something went wrong.");
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