import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { error } from 'util';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  	userId:any;
  	username:any;
	email:any;
	mobile:any;
	role:any;
	companyname:any;
  	expired_on:any;
  	isExpired:any;
  	planName:any;
  	planMonths:any;
  	userRole:any;
  	password:any;
  	confpassword:any;
	public userState:any;

	availableRoles = {4 : 'Seller' , 5 : 'Buyer' , 6 : 'Supplier' , 7 : 'Broker' , 8 : 'Guest'};
	
	constructor(public route:ActivatedRoute, public restSer:RestService , public navCtrl:NavController,public menuCtrl:MenuController,public componentSer:ComponentsService) {
		this.userId 		= this.route.snapshot.paramMap.get('id');
		this.username 		= localStorage.getItem('name');
		this.email 			= localStorage.getItem('email');
		this.mobile 		= localStorage.getItem('mobile');
		this.role 			= this.availableRoles[localStorage.getItem('role')];
		this.companyname 	= localStorage.getItem('companyname');
		this.expired_on 	= localStorage.getItem('expired_on');
		this.isExpired 		= localStorage.getItem('isExpired');
		this.userRole 		= this.availableRoles[localStorage.getItem('role')];
		console.log(this.userRole);

		this.userState = this.role;
	}
	isValidEmail( value ) {
		return /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test( value );
	}
	changeState(state){
		console.log(state)
		this.userState = state;
		this.role = state;
	}
	updatePassword(){
		if( this.password != undefined && this.password != undefined ){
			if( this.password == this.confpassword ){
				let formData = {
					number: this.mobile,
					password : this.password
				}
				this.restSer.presentLoader('Please wait...');

				if( this.password == this.confpassword ){
					
					this.restSer.changePassword(formData).then((res:any) => {
						this.restSer.loaderCtrl.dismiss();
						this.restSer.presentToast('Password change successfully.');
					} , (err:any) => {
						this.restSer.loaderCtrl.dismiss();
						this.restSer.presentToast('Something went wrong.');
					});

				}else{
					this.restSer.presentToast('Password and confirm password is not correct.');
				}
			}else{
				this.restSer.presentToast('Password and confirm password should same.');
			}
		}
	}
	home(){
		this.navCtrl.navigateForward('prices')
	}
	updateUserDetails(){
		if( this.username != undefined && this.email != undefined && this.mobile != undefined && this.companyname != undefined ){
			if( this.username != '' && this.email != '' && this.mobile != '' && this.password != '' && this.confpassword != ''){
				if( this.isValidEmail(this.email) == true ){
					if(this.mobile.length == 10 || this.mobile.length == 11 || this.mobile.length == 12){
						let postData = {
							'username' : this.username,
							'email' : this.email,
							'mobile' : this.mobile,
							'companyname' : this.companyname,
							'userState' : this.userState,
							'userId' : localStorage.getItem('id')
						}

						this.restSer.presentLoader('Please wait...');
						this.restSer.updateUser(postData).then((res:any) => {
							localStorage.setItem('id' , res.data.id);
							localStorage.setItem('name' , res.data.name);
							localStorage.setItem('email' , res.data.email);
							localStorage.setItem('mobile' , res.data.mobile);
							localStorage.setItem('role' , res.data.role);
							localStorage.setItem('companyname' , res.data.companyname);
							localStorage.setItem('expired_on' , res.data.expired_on);
							
							this.restSer.presentToast('Profile updated successfully.');
							this.restSer.loaderCtrl.dismiss();
						},(err:any) => {
							this.restSer.presentToast(err.error.error);
							this.restSer.loaderCtrl.dismiss();
						});
					}else{
						this.restSer.presentToast('Password and confirm password should be valid.');
					}
				}else{
					this.restSer.presentToast('Please enter a valid email address.');
				}
			}else{
				this.restSer.presentToast('Missing required fields.');
			}
		}else{
			this.restSer.presentToast('Missing required fields.');
		}
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
