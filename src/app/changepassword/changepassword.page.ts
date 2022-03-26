import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
	selector: 'app-changepassword',
	templateUrl: './changepassword.page.html',
	styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
	number:any;
	password:any;
	confpassword:any;
	passwordType: string = 'password';
	passwordIcon: string = 'eye-off';
	password1Type: string = 'password';
	password1Icon: string = 'eye-off';
	constructor(public restSer:RestService, public  actRoute: ActivatedRoute, public navCtrl: NavController) {
		this.number = this.actRoute.snapshot.paramMap.get('number');
	}

	ngOnInit() {

	}
	hideShowPassword() {
		this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
		this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
	}
	hideShowPassword1() {
		this.password1Type = this.password1Type === 'text' ? 'password' : 'text';
		this.password1Icon = this.password1Icon === 'eye-off' ? 'eye' : 'eye-off';
	}
	changePassword(){
		let formData = {
			number: this.number,
			password : this.password
		}
		this.restSer.presentLoader('Please wait...');

		if( this.password == this.confpassword ){
			
			this.restSer.changePassword(formData).then((res:any) => {
				this.navCtrl.navigateForward(['login']);
				this.restSer.loaderCtrl.dismiss();
				this.restSer.presentToast('Password change successfully.');
			} , (err:any) => {
				this.restSer.loaderCtrl.dismiss();
				this.restSer.presentToast('Something went wrong.');
			});

		}else{
			this.restSer.presentToast('Password and confirm password is not correct.');
		}
	}
	login(){
		this.navCtrl.navigateForward(['login']);
	}
}