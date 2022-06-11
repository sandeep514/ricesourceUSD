import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	email:any;
	password:any;
	passwordType: string = 'password';
	passwordIcon: string = 'eye-off';
  	constructor(private menu: MenuController,public navCtrl: NavController,public componentService: ComponentsService,public restService: RestService) { 
		this.menu.enable(false);
  	}

  	ngOnInit() {

	}
	registernow(){
		this.navCtrl.navigateForward(['register']);
	}

	loginNow(){
		if(this.email == undefined || this.email == '' || this.password == '' || this.password == undefined){
			this.componentService.presentToastWithOptions('Please fill email and password');
			return false;
		}
		this.componentService.presentLoading();
		let userDetails = {
			email: this.email,
			password: this.password
		}
		this.restService.login(userDetails).then((res:any)=>{
			this.componentService.loadingController.dismiss();
			if(res.status == 'success'){
				if( res.user.status == 0 ){
					localStorage.setItem('mobile' , res.user.mobile);
					this.navCtrl.navigateForward(['verifyotp']);
				}else{
					localStorage.setItem('id' , res.user.id);
					localStorage.setItem('name' , res.user.name);
					localStorage.setItem('email' , res.user.email);
					localStorage.setItem('mobile' , res.user.mobile);
					localStorage.setItem('role' , res.user.role);
					localStorage.setItem('role_name' , res.user.role_rel.role_name);
					localStorage.setItem('companyname' , res.user.companyname);
					localStorage.setItem('status' , res.user.status);
					localStorage.setItem('expired_on' , res.user.expired_on);
					localStorage.setItem('is_usd_active' , res.user.is_usd_active);
					
					this.componentService.compareTwoDates(res.user.expired_on);
					
					localStorage.setItem('user',JSON.stringify(res.user));
					localStorage.setItem('token',res.user.user_token);

					this.componentService.loginUser.next(res.user.name);
					this.componentService.firePushNotif.next(res.user.name);
					
					if(localStorage.getItem('role') == '2'){						
						this.navCtrl.navigateForward(['admin/chat']);
					}else{
						if(res.user.is_usd_active == 0){
							localStorage.setItem('apptype' , 'OTHER');
							this.navCtrl.navigateRoot('prices',{animationDirection: 'forward'});
						}else{
							localStorage.setItem('apptype' , 'USD');
							this.navCtrl.navigateRoot('priceusd',{animationDirection: 'forward'});
						}
					}
				}
			}else{
				this.componentService.presentToastWithOptions('Wrong User details!');
				return false;
			}
		});

	}
	
	forgotpassword(){
		this.navCtrl.navigateForward(['forgotpassword']);
	}
	
	hideShowPassword() {
		this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
		this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
	}

}