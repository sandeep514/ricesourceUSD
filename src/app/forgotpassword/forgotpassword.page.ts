import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
	number:any;

	constructor(public navCtrl:NavController) { }

	ngOnInit() {

	}

	login(){
		this.navCtrl.navigateForward(['login']);
	}

	sendOTP(){
		this.navCtrl.navigateForward([ 'otp' , {number : this.number}]);
	}
	verifyForgotPassword(){
		this.navCtrl.navigateForward(['otp']);
	}
}