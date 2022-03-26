import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.page.html',
	styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
	
	userFirstName: any;
	ListNotif: any;
	constructor(public restService: RestService, public navCtrl : NavController) {
		this.userFirstName = localStorage.getItem("name")[0];
	}

	ngOnInit() {
		this.restService.getLatestNotifications().then((res:any) => {
			this.ListNotif = res.data;
			console.log(res.data)
		} , (err:any) => {

		});
	}
	gotoProfile() {
		this.navCtrl.navigateForward('prices');
	}
	formatDate(date){
		return new Date(date).toLocaleString();
	}

}