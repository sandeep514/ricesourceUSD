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
	countries:any;
	selectedCountries:any;
	state:any;
	selectedState:any;
	city:any;
	selectedCity:any;

	data:any;
	error:any = "false";
	errorMessage:any;

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
		this.getCountryList();
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
	getCountryList(){
		this.restSer.getOceanPorts().then((res:any) => {
			this.countries = (Object.keys(res.data));
			this.data = res.data
		} , (err:any) => {
			console.log(err)
		});
	}
	getRegionsList(){
		
	}
	getPortList(event){
		this.selectedCountries = event.detail.value;
		this.state = Object.keys(this.data[event.detail.value])
	}
	getPortListFromState(event){
		this.selectedState = event.detail.value;
		this.city = this.data[this.selectedCountries][this.selectedState];
	}
	getPortListFromCity(event){
		this.selectedCity = event.detail.value;
	}
	saveport(){
		if( this.selectedCountries != undefined && this.selectedState != undefined && this.selectedCity != undefined ){
			let postedData = { 'id' : localStorage.getItem('id') , 'country' : this.selectedCountries , 'state' : this.selectedState , 'port' : this.selectedCity };
			this.restSer.updatePort(postedData).then((res:any) => {
				if (res.status == true){
					this.restSer.presentToast("Port updated successfully");
				}
			} , (err:any) => {
				console.log(err);
			})
		}
	}
}