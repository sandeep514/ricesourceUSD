import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-buy',
	templateUrl: './buy.page.html',
	styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {
	quality:any;
	quantity:any;
	party:any = 	localStorage.getItem('name');
	mobile:any = 	localStorage.getItem('mobile');
	remarks:any = '';
	validDays:any=0;
	riceQualityType:any;
	riceQualityData:any;
	port:any;
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
	constructor(public apiser: RestService,public location:Location,public navCtrl : NavController) { }

	ngOnInit() {
		this.getData();
	}

	save(){
		
		this.isError = false;
		if( this.quality != undefined &&
			this.quantity != undefined &&
			this.party != undefined &&
			this.mobile != undefined &&
			this.portName != '' &&
			this.portName != undefined
		){
			this.apiser.presentLoader('Please wait...');

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
				this.apiser.loaderCtrl.dismiss();

				this.apiser.presentToast('Query generated successfully.');
				this.navCtrl.navigateRoot(['thankyou']);

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
		this.selectedPackageName = unprocessdata[1]+' '+unprocessdata[2];
	}
	
	back(){
		this.location.back();
	}
	
	changePort(data){
		console.log(data);
		let myData = (data.detail.value).split('_');
		let selectedPortName = myData[0];

		let portValue = parseFloat(data.freight_25MT).toFixed(2);
		this.portName = selectedPortName;
	}

}