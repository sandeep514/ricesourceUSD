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
	public validTill:any;
	public mindate:any;
	public maxDate:any;
	public lastDate:any;
	
	constructor(public apiService: RestService,public location:Location) { 
		var today = new Date();
		// this.mindate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
		this.mindate = new Date(today.setDate((today.getDate() + 2))).toISOString();
		this.maxDate = today.setFullYear(today.getFullYear() + 2);
		this.lastDate = new Date(this.maxDate).toISOString()
	}

	ngOnInit() {
		this.getListBids();
	}
	changed(event){
		let todayDate = new Date();
		let todayFormatedDate = todayDate.getDate()+'/'+todayDate.getMonth()+'/'+todayDate.getFullYear();

		let selectedDate = new Date(event.detail.value);
		let getFullYear = selectedDate.getFullYear();
		let getDate = selectedDate.getDate();
		let getMonth = selectedDate.getMonth();
		let selectedFormatedDate = getDate+'/'+getMonth+'/'+getFullYear;

		var date1 = todayDate;
		var date2 = selectedDate;
		var diffDays = date2.getDate() - date1.getDate(); 
		this.validTill = diffDays;
		// console.log(diffDays);
	}

	getListBids(){
		let userid = localStorage.getItem('id');
		this.apiService.presentLoader('Please wait...');

		this.apiService.getMyBids(userid).then((res:any) => {
			this.mybids = res.bids;
			console.log(res.bids)
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

	validDays(event , buyQueryId){
		this.validTill = event.detail.value;
		this.QueryId = buyQueryId;
	}

	saveUserBid(buyQueryId){
		this.QueryId = buyQueryId;

		if( this.QueryId != undefined && this.mybid != undefined && this.validTill != undefined ){
			this.apiService.presentLoader("Please Wait...");

			this.apiService.addBidOnBuyerQuery({buyQueryId : this.QueryId , validTill : this.validTill , amount : this.mybid , userid : localStorage.getItem('id')}).then((res:any)=>{
				this.apiService.dismissLoader()
				this.getListBids();
			} , (err:any) => {
				this.apiService.dismissLoader()
			});	
		}else{
			this.apiService.presentToast('Bid amount & Bid expired date is required...');
		}
	}
	
	back(){
		this.location.back();
	}

	accept(  bid_id ){
		this.apiService.presentLoader("Please Wait...");

		let postedData = {'bid_id' : bid_id , 'counter_status' : 1};
		this.apiService.updateCounterStatus(postedData ).then((res:any) => {
			this.apiService.dismissLoader()
			console.log(res)
			this.getListBids();
		}).catch((err) => {
			this.apiService.dismissLoader()
			this.getListBids();
			console.log(err)
		})
	}

	reject(  bid_id ){
		this.apiService.presentLoader("Please Wait...");

		let postedData = {'bid_id' : bid_id , 'counter_status' : 2};
		this.apiService.updateCounterStatus(postedData ).then((res:any) => {
			this.apiService.dismissLoader()

			console.log(res)
			this.getListBids();
		}).catch((err) => {
			this.getListBids();
			this.apiService.dismissLoader()

			console.log(err)
		})
	}
}