import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
	selector: 'app-updatepassword',
	templateUrl: './updatepassword.page.html',
	styleUrls: ['./updatepassword.page.scss'],
})
export class UpdatepasswordPage implements OnInit {
	password:any;
  	confpassword:any;
	mobile:any;
	password1Type: string = 'password';
	password1Icon: string = 'eye-off';

	password2Type: string = 'password';
	password2Icon: string = 'eye-off';
	constructor( public restSer: RestService) {
		this.mobile 		= localStorage.getItem('mobile');
	}
	hideShowPassword1() {
		this.password1Type = this.password1Type === 'text' ? 'password' : 'text';
		this.password1Icon = this.password1Icon === 'eye-off' ? 'eye' : 'eye-off';
	}
	hideShowPassword2() {
		this.password2Type = this.password2Type === 'text' ? 'password' : 'text';
		this.password2Icon = this.password2Icon === 'eye-off' ? 'eye' : 'eye-off';
	}
	ngOnInit() {
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
}