import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ComponentsService } from '../components.service';

@Component({
	selector: 'app-contactmodal',
	templateUrl: './contactmodal.page.html',
	styleUrls: ['./contactmodal.page.scss'],
})

export class ContactmodalPage implements OnInit {
	public userRole:any;
	public roleTitle:any;
	constructor(public modalctrl:ModalController, public componentserv: ComponentsService,public navCtrl: NavController) {
		this.isBuyer();
	}
	

	closeModal(){
		this.modalctrl.dismiss();
	}
	
	ngOnInit() {
	}

	isBuyer(){
		if( localStorage.getItem('apptype') == 'OTHER' ){
			if( '5' == localStorage.getItem('role') ){
				this.roleTitle = "Are you looking to buy rice?";
			}else{
				this.isSupplier();
			}
		}else{
			if( '5' == localStorage.getItem('usd_role') ){
				this.roleTitle = "Are you looking to buy rice?";
			}else{
				this.isSupplier();
			}
		}
	}

	isSupplier(){
		if( localStorage.getItem('apptype') == 'OTHER' ){
			if( '6' == localStorage.getItem('role') ){
				this.roleTitle = "Are you looking to sell rice?";
			}else{
				this.isBroker();
			}
		}else{
			if( '6' == localStorage.getItem('usd_role') ){
				this.roleTitle = "Are you looking to sell rice?";
			}else{
				this.isBroker();
			}
		}
	}

	isBroker(){
		if( localStorage.getItem('apptype') == 'OTHER' ){
			if( '7' == localStorage.getItem('role') ){
				this.roleTitle = "Are you looking to Buy/Sell rice?";
			}else{
				this.isGuest();
			}
		}else{
			if( '7' == localStorage.getItem('usd_role') ){
				this.roleTitle = "Are you looking to Buy/Sell rice?";
			}else{
				this.isGuest();
			}
		}
	}

	isGuest(){
		if( localStorage.getItem('apptype') == 'OTHER' ){
			if( '8' == localStorage.getItem('role') ){
				this.roleTitle = "Are you looking to Buy/Sell rice?";
			}else{
				return false;
			}
		}else{
			if( '8' == localStorage.getItem('usd_role') ){
				this.roleTitle = "Are you looking to Buy/Sell rice?";
			}else{
				return false;
			}
		}
	}

	oldVersionModel(){
		this.roleTitle = "You are using a older version of app, Would you like to update?";
	}
	
	 
}