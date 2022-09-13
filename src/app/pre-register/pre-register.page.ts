import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pre-register',
  templateUrl: './pre-register.page.html',
  styleUrls: ['./pre-register.page.scss'],
})
export class PreRegisterPage implements OnInit {

	constructor(public navCtrl: NavController) { }
	ngOnInit() {
	}

	registerUserAs(registerType){
		console.log(registerType.detail.value)
		localStorage.setItem('registerUserAs' , registerType.detail.value);
		this.navCtrl.navigateRoot(['register']);
	}

	signin(){
		console.log("nkjnk");
		this.navCtrl.navigateRoot(['login']);
	}

}