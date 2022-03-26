import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.page.html',
	styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
	public QualityMaster:any;
	public DefaultValues:any ;
	public riceMinPrice:any;
	public riceMaxPrice:any;
	public transportMin:any;
	public transportMax:any;
	public bagcost:any;
	public localCharges:any;
	public dollaerate:any;
	public supplierCharge:any;
	public total:any = 0;
	public exchange:any = 0;
	public FOB:any = 0;
	public USD_master:any;
	public selectedFiftykg:any = 0;
	public updatedUserPrice:any = 0;
	public selectedBag:any;
	public selectedBagId:any=0;
	public selectedRice:any;

	constructor(public apiService: RestService , public navCtrl: NavController,public location:Location) { }

	ngOnInit() {
		this.getCalculatorData();
	}

	getCalculatorData(){
		this.apiService.getCalculatorDetails().then((res:any) => {
			this.QualityMaster = res.qualityMaster
			this.DefaultValues = res.defaultValues
			
			this.dollaerate = res.defaultValues.dollarvalue;
			this.bagcost = res.defaultValues.bagcost;
			this.localCharges = res.defaultValues.localcharges;
			this.USD_master = res.USD_master;
			this.selectedFiftykg = res.fiftykg.PMT_USD;

		} ,(err:any) =>{ 
			console.log(err);
		});
	}
	save(){
		if (this.riceMinPrice == '' || this.riceMinPrice == undefined){
			this.riceMinPrice = 0;
		}
		if (this.riceMaxPrice == '' || this.riceMaxPrice == undefined){
			this.riceMaxPrice = 0;
		}
		if (this.transportMin == '' || this.transportMin == undefined){
			this.transportMin = 0;
		}
		if (this.transportMax == '' || this.transportMax == undefined){
			this.transportMax = 0;
		}
		if (this.bagcost == '' || this.bagcost == undefined){
			this.bagcost = 0;
		}
		if (this.localCharges == '' || this.localCharges == undefined){
			this.localCharges = 0;
		}
		if (this.dollaerate == '' || this.dollaerate == undefined){
			this.dollaerate = 0;
		}
		if (this.supplierCharge == '' || this.supplierCharge == undefined){
			this.supplierCharge = 0;
		}

		let minValue = (parseFloat(this.riceMinPrice)+parseFloat(this.bagcost)+parseFloat(this.transportMin)+parseFloat(this.localCharges)).toFixed(2);
		let maxValue = (parseFloat(this.riceMaxPrice)+parseFloat(this.bagcost)+parseFloat(this.transportMax)+parseFloat(this.localCharges)).toFixed(2);


		let exchangeRatemin = ((parseFloat(this.riceMinPrice)+parseFloat(this.bagcost)+parseFloat(this.transportMin) ) / this.dollaerate).toFixed(2);
		let exchangeRatemax = ((parseFloat(this.riceMaxPrice)+parseFloat(this.bagcost)+parseFloat(this.transportMax) ) / this.dollaerate).toFixed(2);
		console.log(exchangeRatemin)

		let Fobmin = 0;
		let Fobmax = 0;
		
		if( this.supplierCharge != 0  ){
			Fobmin = (( (((parseFloat(exchangeRatemin)*this.supplierCharge)/100 ) + parseFloat(exchangeRatemin)) - parseFloat(this.selectedFiftykg)) + parseFloat(this.updatedUserPrice ));
			Fobmax = (( (((parseFloat(exchangeRatemax)*this.supplierCharge)/100 ) + parseFloat(exchangeRatemax)) - parseFloat(this.selectedFiftykg)) + parseFloat(this.updatedUserPrice ));
		}else{
			Fobmin = ((parseFloat(exchangeRatemin) - parseFloat(this.selectedFiftykg)) + parseFloat(this.updatedUserPrice ));
			Fobmax = ((parseFloat(exchangeRatemax) - parseFloat(this.selectedFiftykg)) + parseFloat(this.updatedUserPrice ));
		}

		this.total = minValue+' - '+maxValue ;
		this.exchange = '$'+exchangeRatemin+' - $'+exchangeRatemax ;
		this.FOB = '$'+Fobmin+' - $'+Fobmax ;

		let postedData = JSON.stringify({ 
			'rice' : this.selectedRice,
			'ricemin' : this.riceMinPrice,
			'ricemax' : this.riceMaxPrice,
			'transportmin' : this.transportMin,
			'transportmax' : this.transportMax,
			'category' : this.bagcost,
			'charges' : this.localCharges,
			'dollarrate' : this.dollaerate,
			'percentageValue' : this.supplierCharge,
			'totalMin' : minValue,
			'totalMax' : maxValue,
			'exchangeRatemin' : exchangeRatemin,
			'exchangeRatemax' : exchangeRatemax,
			'fobmin' : Fobmin,
			'fobmax' : Fobmax,
			'user_id' : localStorage.getItem('id'),
			'usd_defaultMaster_id' : this.selectedBagId
		});

		this.apiService.saveUSDPrices(postedData).then((res:any) => {
			console.log(res);
		} , (err:any) => {
			console.log(err)
		})
	}

	bagChange(event){
		let value = event.detail.value;
		let splitedValue = value.split('_');
		
		let bagSize = splitedValue[0];
		let bagNme = splitedValue[1];
		let bagPrice = splitedValue[2];
		this.selectedBagId = splitedValue[3];

		let updatedPrice = parseFloat(bagPrice);
		this.selectedBag = bagSize+'_'+bagNme;
		this.updatedUserPrice = updatedPrice;
	}

	changeQuality(event){
		this.selectedRice = event.detail.value;
	}
	getLatestQueries(){
		this.navCtrl.navigateForward('mybids');
	}
	back(){
		this.location.back();
	}
}