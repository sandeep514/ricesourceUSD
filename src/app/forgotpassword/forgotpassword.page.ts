import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
	number:any;
	constructor(public navCtrl:NavController, public restAPI: RestService) { }
	ngOnInit() {

	}

	login(){
		this.navCtrl.navigateForward(['login']);
	}

	sendOTP(){
		if( this.number != '' && this.number != undefined ){
			this.navCtrl.navigateForward([ 'otp' , {number : this.number}]);
		}else{
			this.restAPI.presentToast('Mobile number required');
		}
	}
	
	verifyForgotPassword(){
		this.navCtrl.navigateForward(['otp']);
	}

}