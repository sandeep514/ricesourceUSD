import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.page.html',
  styleUrls: ['./bid.page.scss'],
})
export class BidPage implements OnInit {
	public qualityName : any;
	public quantity : any;
	public remarks : any;
	public qualityType : any;
	public bidprice : any;
	public queryDataId : any;
	public validateFails : any;
	
	constructor(public ActRoute: ActivatedRoute , public apiser: RestService,public location:Location) {
		let queryId = this.ActRoute.snapshot.params.buy_query;
		this.queryDataId = queryId; 
		// alert(queryId)
		this.apiser.getBuyerDetails(queryId).then((res:any) => {
			this.qualityName = res.data.qualityName;
			this.quantity = res.data.quantity;
			this.remarks = res.data.remarks;
			this.qualityType = res.data.qualityType;
		});
	}

	ngOnInit() {

	}
	back(){
		this.location.back();
	}
	save(){
		if( this.bidprice != 0 ){
			let postedData = { 'bidPrice' : this.bidprice , 'user_id' : localStorage.getItem('id') , queryDataId : this.queryDataId};
			this.apiser.saveUserBid(postedData).then((res:any) => {	
				if( res.status == true ){
					this.apiser.presentToast('Bid Posted Successfully.');
				}else{
					this.apiser.presentToast('something went wrong.');
				}

			}, (err:any) => {
				console.log(err);
			})
		}
		
	}

}