import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { ComponentsService } from '../components.service';

@Component({
	selector: 'app-versionmodal',
	templateUrl: './versionmodal.page.html',
	styleUrls: ['./versionmodal.page.scss'],
})
export class VersionmodalPage implements OnInit {
	public userRole:any;
	public roleTitle:any;
	
	constructor(public modalctrl:ModalController, public componentserv: ComponentsService,public platform:Platform) {
		// this.oldVersionModel();
	}

	ngOnInit() {
	}

	oldVersionModel(){
		this.roleTitle = "You are using a older version of app, Would you like to update?";
	}
	
	closeModal(){
		this.modalctrl.dismiss();
		localStorage.setItem('popupCanceledversion' , 'true');
		this.componentserv.cancelPopup.next('true');
	}
	redirectToPlaystore(){
		if(this.platform.is('android')){
			window.open("https://play.google.com/store/apps/details?id=app.sntcrice.sourcing","_system");
		}
		if(this.platform.is('ios')){
			window.open("https://apps.apple.com/in/app/sntc-rice-sourcing/id1562015927","_system");
		}
	}

}