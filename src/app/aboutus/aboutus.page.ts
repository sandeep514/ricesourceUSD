import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-aboutus',
	templateUrl: './aboutus.page.html',
	styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

	constructor(public location: Location, public navCtrl: NavController) { }

	ngOnInit() {
	}
	goBack() {
		this.location.back();
	}
	gotohome() {
		if (
			localStorage.getItem("usd_role") != "0" &&
			localStorage.getItem("is_usd_active") != "0" &&
			localStorage.getItem("isExpiryUSD") == "false"
		) {
			localStorage.setItem("apptype", "USD");
			this.navCtrl.navigateForward(["priceusd"]);
		} else {
			localStorage.setItem("apptype", "OTHER");
			this.navCtrl.navigateForward(["prices"]);
		}
	}
}
