import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { error } from 'util';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  	userId:any;
  	name:any;
  	email:any;
  	expired_on:any;
  	isExpired:any;
  	planName:any;
  	planMonths:any;
  	userRole:any;
	availableRoles = {4 : 'Seller' , 5 : 'Buyer' , 6 : 'Supplier' , 7 : 'Broker' , 8 : 'Guest'};

	constructor(public route:ActivatedRoute, public restSer:RestService , public navCtrl:NavController,public menuCtrl:MenuController) {
		this.userId = this.route.snapshot.paramMap.get('id');
		this.name = localStorage.getItem('name');
		this.email = localStorage.getItem('email');
		this.expired_on = localStorage.getItem('expired_on');
		this.isExpired = localStorage.getItem('isExpired');
		this.userRole = this.availableRoles[localStorage.getItem('role')];
		console.log(this.userRole);
	}

	getProfileDetails(){

	}
	showMenu(){
		this.menuCtrl.open();
	}
	ngOnInit() {
		this.getPlanDetails();
	}
	getPlanDetails(){
		this.restSer.getUserPlanDetails().then((res:any) => {
			console.log(res);
			if( res.data.length == 0 ){
				this.planName = "Trial Period";
				this.planMonths = "3 Months";
			}else{
				this.planName = res.data.plan;
				this.planMonths = res.data.sub_plan_name;
			}
			console.log(res.data.length);
		} , (err:any) => {
			console.log(error);
		});
	}
	gotohome(){
		this.navCtrl.navigateForward(['prices']);
	}
}