import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
	selector: 'app-verifyotp',
	templateUrl: './verifyotp.page.html',
	styleUrls: ['./verifyotp.page.scss'],
})
export class VerifyotpPage implements OnInit {
	mobile:any;
	otp:any;

	constructor(public navCtrl: NavController, public restAPI: RestService) { }

	ngOnInit() {
	}
	
	checkOTP(){
		let data = {
			mobile : localStorage.getItem('mobile'),
			otp: this.otp
		}
		this.restAPI.presentLoader('Please wait...');

		this.restAPI.verifyUser(data).then((res:any) => {
			this.restAPI.loaderCtrl.dismiss();
			localStorage.setItem('status' , '1');

			
				if( localStorage.getItem('is_INR_active') == '1' ){
					this.navCtrl.navigateForward(['prices']);
				}else{
					if( localStorage.getItem('isUserActivatedUSD') == '0' ){
						this.navCtrl.navigateForward(['planpage']);	
					}else{
						this.navCtrl.navigateForward(['priceusd']);
					}
				}

		} ,(err:any) => {
			this.restAPI.presentToast(err.error.error);
			this.restAPI.loaderCtrl.dismiss();
		});	
	}

	login(){
		this.navCtrl.navigateForward(['login']);
	}
}