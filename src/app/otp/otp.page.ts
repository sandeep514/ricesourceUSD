import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
	selector: 'app-otp',
	templateUrl: './otp.page.html',
	styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
	number: any;
	text1: any;
	text2: any;
	text3: any;
	text4: any;

	userType = '';
	sendOn = '';
	hasError = false;
	errorMessage = '';

	constructor(public activeRoute: ActivatedRoute, public restSer: RestService, public navCtrl: NavController) {
		this.number = this.activeRoute.snapshot.paramMap.get('number');
		this.sendOTP();
	}

	sendOTP() {
		this.restSer.presentLoader('Please wait...');

		this.restSer.sendOTP(this.number).then((res: any) => {
			this.restSer.loaderCtrl.dismiss();

			this.hasError = false;
			if (res.user.role == 0) {
				this.userType = 'international';
				this.sendOn = res.user.email;
			} else {
				this.userType = 'domestic';
				this.sendOn = res.user.mobile;
			}

		}, (err: any) => {
			this.restSer.loaderCtrl.dismiss();

			console.log(err);
			this.hasError = true;
			this.errorMessage = err.error.error;
		})
	}

	ngOnInit() {

	}
	checkOTP() {
		let otp = this.text1;

		this.restSer.verifyOTP(this.number, otp).then((res: any) => {
			this.navCtrl.navigateForward(['changepassword', { number: this.number }]);
		}, (err: any) => {

		});
	}
	login() {
		this.navCtrl.navigateForward(['login']);
	}
}