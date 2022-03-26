import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Location } from '@angular/common';

@Component({
	selector: 'app-otherservices',
	templateUrl: './otherservices.page.html',
	styleUrls: ['./otherservices.page.scss'],
})
export class OtherservicesPage implements OnInit {
  	public myBuyers:any;
	constructor(public apiService: RestService,public location:Location) { 

	}

	ngOnInit() {
		this.getBuyers();
	}
	getBuyers(){
		this.apiService.presentLoader('Fetching Queries');

		this.apiService.getBuyerList().then((res:any) => {
			this.myBuyers = res.data;
			console.log(res);
			setTimeout(() => {
				this.apiService.dismissLoader()
			} , 1000)
		} , (err:any) => {
			setTimeout(() => {
				this.apiService.dismissLoader()
			} , 1000)
		});
	}	
	back(){
		this.location.back();
	}
	
	
}