import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComponentsService } from '../components.service';

@Component({
	selector: 'app-contactmodal',
	templateUrl: './contactmodal.page.html',
	styleUrls: ['./contactmodal.page.scss'],
})

export class ContactmodalPage implements OnInit {
	public userRole:any;
	public roleTitle:any;
	constructor(public modalctrl:ModalController, public componentserv: ComponentsService) {
		this.isBuyer();
	}

	ngOnInit() {
	}

	isBuyer(){
		if( '5' == localStorage.getItem('role') ){
			this.roleTitle = "Are you looking to buy rice?";
		}else{
			this.isSupplier();
		}
	}

	isSupplier(){
		if( '6' == localStorage.getItem('role') ){
			this.roleTitle = "Are you looking to sell rice?";
		}else{
			this.isBroker();
		}
	}

	isBroker(){
		if( '7' == localStorage.getItem('role') ){
			this.roleTitle = "Are you looking to Buy/Sell rice?";
		}else{
			this.isGuest();
		}
	}

	isGuest(){
		if( '8' == localStorage.getItem('role') ){
			this.roleTitle = "Are you looking to Buy/Sell rice?";
		}else{
			return false;
		}
	}

	oldVersionModel(){
		this.roleTitle = "You are using a older version of app, Would you like to update?";
	}
	
	closeModal(){
		this.modalctrl.dismiss();
		localStorage.setItem('popupCanceled' , 'true');
		this.componentserv.cancelPopup.next('true');
	}
}