import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';

@Component({
	selector: 'app-trialperiod',
	templateUrl: './trialperiod.page.html',
	styleUrls: ['./trialperiod.page.scss'],
})
export class TrialperiodPage implements OnInit {

	constructor(public modalctrl: ModalController, public componentserv: ComponentsService, public resService: RestService) { }

	ngOnInit() {
	}

	closeModal() {
		this.modalctrl.dismiss();
	}

	startTrialPeriod() {
		console.log("jnk");
		let userEmail = localStorage.getItem('email');
		this.resService.startTrialPeriod(userEmail).then((res: any) => {
			console.log(res);
		}, (err: any) => {
			console.log(err)
		});
	}
	
	// closeModal(){
	// 	this.modalctrl.dismiss();
	// 	localStorage.setItem('popupCanceled' , 'true');
	// 	this.componentserv.cancelPopup.next('true');
	// }
}
