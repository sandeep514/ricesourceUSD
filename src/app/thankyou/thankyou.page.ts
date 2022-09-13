import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-thankyou',
	templateUrl: './thankyou.page.html',
	styleUrls: ['./thankyou.page.scss'],
})
export class ThankyouPage implements OnInit {
	public currentCountdown: any = 5;
	public userFirstName: any;

	constructor(public navCtrl: NavController) {
		this.userFirstName = localStorage.getItem("name")[0];
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

}