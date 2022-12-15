import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.page.html',
  styleUrls: ['./payment-success.page.scss'],
})
export class PaymentSuccessPage implements OnInit {
  public currentCountdown: any = 5;
	public userFirstName: any;
	public expired_on: any;

	constructor(public navCtrl: NavController) {
		this.userFirstName = localStorage.getItem("name")[0];

		this.expired_on = localStorage.getItem('expired_on');
	}

	gotoProfile(){
		this.navCtrl.navigateForward(['profile']);
	}

	getNotications(){
		this.navCtrl.navigateForward(['notifications']);
	}

	ngOnInit() {
	}

	gotobuy(){
		this.navCtrl.navigateForward(['buy']);
	}
	gotoHome(){
		this.navCtrl.navigateForward(['priceusd']);
	}

}
