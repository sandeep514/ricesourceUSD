import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	public userState:any;
	public username:any;
	public email:any ;
	public mobile:any ;
	public companyname:any;
	public password:any ;
	public confpassword:any ;
	public termsAndConditions : boolean = false;
	password1Type: string = 'password';
	password1Icon: string = 'eye-off';
	public registerForm = 'domestic';
	public listCountries:any;
	public data:any;
	public selectedPort:any;
	public mySelectedPort:any;
	public address:any;
	public country:any;
	public zipcode:any;
	public contactperson:any;
	public selectedCountry:any;
	public bagVendorCategory:any;
	public bagVendor:any;
	public import:any;
	public selectedBagVendorCategory:any = 0;
	public selectedCountryMobileCode:any = '';

	password2Type: string = 'password';
	password2Icon: string = 'eye-off';

	constructor(public api: RestService,public navCtrl: NavController,public componentSer:ComponentsService) { }
	hideShowPassword1() {
		this.password1Type = this.password1Type === 'text' ? 'password' : 'text';
		this.password1Icon = this.password1Icon === 'eye-off' ? 'eye' : 'eye-off';
	}
	hideShowPassword2() {
		this.password2Type = this.password2Type === 'text' ? 'password' : 'text';
		this.password2Icon = this.password2Icon === 'eye-off' ? 'eye' : 'eye-off';
	}
	ngOnInit() {
		this.userState = "supplier";
		this.getCountries();
		this.getBagVendors();

		if(localStorage.getItem('registerUserAs') != null){
			this.registerForm = localStorage.getItem('registerUserAs');
			if( localStorage.getItem('registerUserAs') == 'international' ){
				this.userState = "buyer";
			}else{
				this.userState = "supplier";
			}
		}
	}
	
	changeState(state){
		this.userState = state;
		console.log(state)
	}

	isValidEmail( value ) {
		return /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test( value );
	}
	
	termsandcondition(){
		this.navCtrl.navigateForward(['termsandcondition']);
	}
	
	registerUser(){
	
		var form = new FormData();
		if( this.termsAndConditions == true ){
			if( this.registerForm == 'international' && this.userState == 'guest' ){
				if( this.username != undefined && this.email && this.companyname && this.address && this.contactperson && this.mobile && this.password && this.userState && this.selectedBagVendorCategory ){
					let postData = {
						'username' :  this.username,
						'email' :  this.email,
						'companyname' :  this.companyname,
						'address' :  this.address,
						'contactperson' :  this.contactperson,
						'mobile' :  this.mobile,
						'password' :  this.password,
						'userState' : this.userState,
						'bagCategory' : this.selectedBagVendorCategory,
						'registerForm' : this.registerForm
					}
					this.api.regsiterUser(postData).then((res:any) => {
						console.log(res);
						localStorage.setItem('id' , res.data.id);
						localStorage.setItem('name' , res.data.name);
						localStorage.setItem('email' , res.data.email);
						localStorage.setItem('mobile' , res.data.mobile);
						localStorage.setItem('role' , res.data.role);
						localStorage.setItem('companyname' , res.data.companyname);
						localStorage.setItem('expired_on' , res.data.expired_on);
						localStorage.setItem('apptype' , 'USD');
						localStorage.setItem('isUserActivatedUSD' , res.data.is_usd_active);
						localStorage.setItem('status' , (res.data.status).toString());

						localStorage.setItem('user',JSON.stringify(res.data));
						localStorage.setItem('token',res.data.user_token);

						localStorage.setItem('is_INR_active',res.data.is_INR_active);
						localStorage.setItem('usd_role',res.data.usd_role);
						
						this.componentSer.compareTwoDates(res.data.expired_on);
						this.navCtrl.navigateForward(['verifyotp']);
						// this.api.loaderCtrl.dismiss();
					},(err:any) => {
						this.api.presentToast(err.error.error);
						this.api.loaderCtrl.dismiss();
					});
				}else{
					this.api.presentToast('Data not correct');
				}
				
			}else{
				if( this.zipcode != undefined ){
					if(this.username != undefined && this.email != undefined && this.companyname != undefined && this.address != undefined && this.country != undefined && this.zipcode != undefined && this.contactperson != undefined && this.mobile != undefined && this.password != undefined && this.confpassword != undefined && this.mySelectedPort != undefined && this.selectedCountry != undefined){
						let postData = {
							'username' :  this.username,
							'email' :  this.email,
							'companyname' :  this.companyname,
							'address' :  this.address,
							'country' :  this.country,
							'zipcode' :  this.zipcode,
							'contactperson' :  this.contactperson,
							'mobile' :  this.mobile,
							'password' :  this.password,
							'import_port' :  this.mySelectedPort,
							'userState' : this.userState,
							'bagCategory' : this.selectedBagVendorCategory
						}
	
						this.api.regsiterUser(postData).then((res:any) => {
							console.log(res);
							localStorage.setItem('id' , res.data.id);
							localStorage.setItem('name' , res.data.name);
							localStorage.setItem('email' , res.data.email);
							localStorage.setItem('mobile' , res.data.mobile);
							localStorage.setItem('role' , res.data.role);
							localStorage.setItem('companyname' , res.data.companyname);
							localStorage.setItem('expired_on' , res.data.expired_on);
							localStorage.setItem('apptype' , 'USD');
							localStorage.setItem('isUserActivatedUSD' , res.data.is_usd_active);
							localStorage.setItem('status' , (res.data.status).toString());
	
							localStorage.setItem('user',JSON.stringify(res.data));
							localStorage.setItem('token',res.data.user_token);
	
							localStorage.setItem('is_INR_active',res.data.is_INR_active);
							localStorage.setItem('usd_role',res.data.usd_role);
							
							this.componentSer.compareTwoDates(res.data.expired_on);
							this.navCtrl.navigateForward(['verifyotp']);
							// this.api.loaderCtrl.dismiss();
						},(err:any) => {
							this.api.presentToast(err.error.error);
							this.api.loaderCtrl.dismiss();
						});
					}else{
						this.api.presentToast('Data not correct');
					}
				}else{
					if( this.username != '' && this.email != '' && this.mobile != '' && this.password != '' && this.confpassword != ''){
						if( this.isValidEmail(this.email) == true ){
							if(this.mobile.length == 10){
								if( this.password == this.confpassword ){
									
									let postData = {
										'username' : this.username,
										'email' : this.email,
										'mobile' : this.mobile,
										'companyname' : this.companyname,
										'password' : this.password,
										'userState' : this.userState
									}
			
									this.api.presentLoader('Please wait...');
									this.api.regsiterUser(postData).then((res:any) => {
			
										localStorage.setItem('id' , res.data.id);
										localStorage.setItem('name' , res.data.name);
										localStorage.setItem('email' , res.data.email);
										localStorage.setItem('mobile' , res.data.mobile);
										localStorage.setItem('role' , res.data.role);
										localStorage.setItem('companyname' , res.data.companyname);
										localStorage.setItem('expired_on' , res.data.expired_on);
		
										this.componentSer.compareTwoDates(res.data.expired_on);
		
	
										localStorage.setItem('apptype' , 'OTHER');
										localStorage.setItem('isUserActivatedUSD' , res.data.is_usd_active);
										localStorage.setItem('status' , (res.data.status).toString());
	
										localStorage.setItem('user',JSON.stringify(res.data));
										localStorage.setItem('token',res.data.user_token);
	
										localStorage.setItem('is_INR_active',res.data.is_INR_active);
										localStorage.setItem('usd_role', res.data.usd_role);
										localStorage.setItem('transaction_id', res.data.transaction_id);
										
										this.componentSer.compareTwoDates(res.data.expired_on);
										
										this.navCtrl.navigateForward(['verifyotp']);
										// this.navCtrl.navigateForward(['prices']);
										// this.api.presentToast('User register successfully.');
										this.api.loaderCtrl.dismiss();
									},(err:any) => {
										this.api.presentToast(err.error.error);
										this.api.loaderCtrl.dismiss();
									});
			
								}else{
									this.api.presentToast('Password and Confirm Password is invalid.');
								}
							}else{
								this.api.presentToast('Mobile number is invalid.');
							}
						}else{
							this.api.presentToast('Email is invalid.');
						}
					}else{
						this.api.presentToast('Required field are missing.');
					}
				}
			}
			

			
		}else{
			this.api.presentToast("Terms and condition must be checked");
		}
	}

	changetermsandcondition(e){
		this.termsAndConditions = e.currentTarget.checked;
	}

	signin(){
		console.log("nkjnk");
		this.navCtrl.navigateRoot(['login']);
	}

	registerFormType(formtype){
		console.log(formtype);
		this.registerForm = formtype;

		if( formtype == 'international' ){
			this.userState = "buyer";
		}else{
			this.userState = "supplier";
		}
		
	}

	getCountries() {
		this.api.getUSDCounties().then((res:any) => {
			this.listCountries = (Object.keys(res.countries).sort());
			this.data = res.countries;
		} , (err:any) => {
			console.log(err);
		})
	}

	changebagVendor(event){
		this.selectedBagVendorCategory = event.detail.value;
	}

	getBagVendors() {
		this.api.getBagVendors().then((res:any) => {
			console.log(res)
			this.bagVendorCategory = res.data;
		} , (err:any) => {
			console.log(err);
		})
	}

	changeCountry(event) {
		this.selectedCountry = event.detail.value;
		this.selectedPort = this.data[this.selectedCountry];
		console.log(this.data[this.selectedCountry]);
		console.log(this.data);
		this.selectedCountryMobileCode = (this.data[this.selectedCountry][0].mobile_code);

	}

	changePort(event) {
		this.mySelectedPort = event.detail.value;
	}

	checkboxClick(e){
		// console.log(e.detail.checked)
		this.termsAndConditions = e.detail.checked
		// var statement = true;
		// if(statement){
		//   	e.checked = true;
		// }
	}
}