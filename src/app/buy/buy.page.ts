import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Location } from '@angular/common';

@Component({
	selector: 'app-buy',
	templateUrl: './buy.page.html',
	styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {
	quality:any;
	quantity:any;
	party:any;
	mobile:any;
	remarks:any;
	validDays:any;
	riceQualityType:any;
	riceQualityData:any;
	ports:any;
	selectedPackageData:any;
	changePackingType:any;
	portName:any;
	selectedQualityType:any;
	selectedPackageName:any;
	riceQualityDataArray:any;
	riceQualityDataSelectedArray:any;
	isError:any = false;
	errorMessage:any = '';

	constructor(public apiser: RestService,public location:Location) { }

	ngOnInit() {
		this.getData();
	}

	save(){
		this.isError = false;
		if( isNaN(parseFloat(this.validDays)) == true ){
			this.isError = true;
			this.errorMessage = "Deal Valid should be number";
			return false;
		}

		if( this.quality != undefined && this.quantity != undefined && this.party != undefined && this.mobile != undefined && this.remarks != undefined ){
			let postedData = {
				'selectedQualityType' 	: this.selectedQualityType,
				'quality' 				: this.quality,
				'changePackingType' 	: this.changePackingType,
				'quantity' 				: this.quantity,
				'validDays' 			: this.validDays,
				'portName' 				: this.portName,
				'party' 				: this.party,
				'mobile' 				: this.mobile,
				'remarks' 				: this.remarks,
				'user'					: localStorage.getItem('id')
			};

			this.apiser.saveRiceQuery(postedData).then((res:any) => {
				console.log(res);
			} , (err:any) => {
				console.log(err);
			})
		}else{ 
			this.isError = true;
			this.errorMessage = "Required fields are missing";
			console.log( 'validate fails' );
			console.log("here");
		}
	}

	getData(){
		this.apiser.getDataForBuyer().then((res:any) => {

			this.riceQualityType = res.riceQualityType;
			this.riceQualityData = res.riceQualityData;
			this.riceQualityDataArray = res.riceQualityDataArray;
			this.ports = res.ports;

		} , (err:any) => {
			console.log(err)
		})
	}

	changeQualityType(data){
		this.selectedQualityType = data.detail.value;

		this.riceQualityDataSelectedArray = this.riceQualityDataArray[(data.detail.value).toLowerCase()];
		this.selectedPackageData = this.riceQualityData[(data.detail.value).toLowerCase()];
	}
	changeQuality(data){
		this.quality = data.detail.value;
		console.log(this.quality)
	}

	changePacking(data){
		let unprocessdata = (data.detail.value).split('_');
		this.changePackingType = unprocessdata[0];
		this.selectedPackageName = unprocessdata[1]+' ('+unprocessdata[2]+')';
	}
	
	back(){
		this.location.back();
	}
	
	changePort(data){
		console.log(data);
		let myData = (data.detail.value).split('_');
		let selectedPortName = myData[0];

		let portValue = parseFloat(myData[1]).toFixed(2);
		this.portName = selectedPortName;
	}

}