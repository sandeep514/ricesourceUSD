import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
	selector: 'app-mybids',
	templateUrl: './mybids.page.html',
	styleUrls: ['./mybids.page.scss'],
})
export class MybidsPage implements OnInit {
	public mybids:any;
	public yourbid:any;
	public mybid:any;
	public QueryId:any;
	
	constructor(public apiService: RestService,public location:Location) { 

	}

	ngOnInit() {
		this.getListBids();
	}

	getListBids(){
		let userid = localStorage.getItem('id');
		this.apiService.presentLoader('Fetching Queries');

		this.apiService.getMyBids(userid).then((res:any) => {
			this.mybids = res.bids;
			setTimeout(() => {
				this.apiService.dismissLoader()
			} , 1000)
		} , (err:any) => {
			setTimeout(() => {
				this.apiService.dismissLoader()
			} , 1000)
		});
	}	
	
	yourbidfunction(event , buyQueryId){
		this.mybid = event.detail.value;
		this.QueryId = buyQueryId;
	}

	saveUserBid(){
		this.apiService.presentLoader("Please wait");
		if( this.QueryId != undefined && this.mybid != undefined ){
			this.apiService.addBidOnBuyerQuery({buyQueryId : this.QueryId , amount : this.mybid , userid : localStorage.getItem('id')}).then((res:any)=>{
				this.apiService.dismissLoader()
				this.mybids = res.data
			} , (err:any) => {
				this.apiService.dismissLoader()
			});	
		}
	}
	
	back(){
		this.location.back();
	}

	accept(  bid_id ){
		let postedData = {'bid_id' : bid_id , 'counter_status' : 1};
		this.apiService.updateCounterStatus(postedData ).then((res:any) => {
			console.log(res)
		}).catch((err) => {
			console.log(err)
		})
	}

	reject(  bid_id ){
		let postedData = {'bid_id' : bid_id , 'counter_status' : 2};
		this.apiService.updateCounterStatus(postedData ).then((res:any) => {
			console.log(res)
		}).catch((err) => {
			console.log(err)
		})
	}
}