import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.page.html',
	styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
	public email:any;
	public phone:any;

    constructor(public apiser:RestService) { }

    ngOnInit() {
		this.getContactDetail();
    }

	getContactDetail(){
		this.apiser.contact().then((res:any) => {
			
			this.email = res.data.email
			this.phone = res.data.phone

		}).catch((err) => {
			console.log(err);
		})
	}
	chat() {
		// window.open("https://api.whatsapp.com/send/?phone=[PHONENUMBER]&text=Hi,%20Test%20Message&app_absent=0");
	}
}
