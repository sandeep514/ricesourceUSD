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
  	public buyerTypes:any;
  	public selectedBuyerType:any;
  	public selectedBuyers:any;
  	public selectedBuyerslength:any = 1;

	constructor(public apiService: RestService,public location:Location) { 

	}

	ngOnInit() {
		this.getBuyers();
	}
	getBuyers(){
		this.apiService.presentLoader('Fetching Queries');

		this.apiService.getBuyerList().then((res:any) => {
			this.myBuyers = res.data;
			this.buyerTypes = Object.keys(res.data);

			setTimeout(() => {
				this.apiService.dismissLoader()
			} , 1000)
		} , (err:any) => {
			setTimeout(() => {
				this.apiService.dismissLoader()
			} , 1000)
		});
	}	
	changeBuyer(event){
		this.selectedBuyerType = event.detail.value;
		this.selectedBuyers = this.myBuyers[this.selectedBuyerType][0]['get_vendor_list'];
		this.selectedBuyerslength = this.selectedBuyers.length;
	}
	back(){
		this.location.back();
	}
	
	
}