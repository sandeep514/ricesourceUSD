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
	userType = '';

	constructor(public navCtrl: NavController, public restAPI: RestService) { }

	ngOnInit() {
		if( localStorage.getItem('registerUserAs') == 'international' ){
			this.userType = 'USD';
		}else{
			this.userType = 'Domestic';
		}
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

				if( localStorage.getItem('registerUserAs') == 'international' ){
					if( localStorage.getItem('isExpiryUSD') == 'true' || localStorage.getItem('isExpired') == 'true' ){
						this.navCtrl.navigateForward(['planpage']);
					}else{
						this.navCtrl.navigateForward(['priceusd']);
					}
				}else{
					this.navCtrl.navigateRoot(['prices']);
				}
		} ,(err:any) => {
			this.restAPI.presentToast(err.error.error);
			this.restAPI.loaderCtrl.dismiss();
		});	
	}

	sendOTP(){
		this.restAPI.presentLoader('Please wait...');

		this.restAPI.resendOTP(localStorage.getItem('mobile')).then((res:any) => {
			this.restAPI.presentToast("OTP send successfully");
			this.restAPI.loaderCtrl.dismiss();
		} ,(err:any) => {
			console.log(err);
			this.restAPI.presentToast(err.error.error);
			this.restAPI.loaderCtrl.dismiss();
		});	
	}

	login(){
		this.navCtrl.navigateForward(['login']);
	}
}