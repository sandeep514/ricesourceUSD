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
	public total:any = 0;
	public exchange:any = 0;
	public FOB:any = 0;
	public USD_master:any;
	public selectedFiftykg:any = 0;
	public updatedUserPrice:any = 0;
	public selectedBag:any;
	public selectedBagId:any=0;
	public selectedRice:any;


	public riceone:any = 0;
	public riceonepercentage:any = 0;
	public ricetwo:any = 0;
	public ricetwopercentage:any = 0;
	public ricethree:any = 0;
	public ricethreepercentage:any = 0;
	public ricefour:any = 0;
	public ricefourpercentage:any = 0;
	public processingCharges:any = 0;
	public bagSize:any = 0;
	public domesticTransport:any = 0;
	public lccharges:any = 0;
	public oceanfreight:any = 0;
	public thirdpartyinspection:any = 0;
	public legalisationcharges:any = 0;
	public coc:any = 0;
	public eiacost:any = 0;
	public supplierCharge:any = 1;
	public financecost:any = 0;
	public PMT:any = 0;

	public costOfRice1:any = 0;
	public costOfRice2:any = 0;
	public costOfRice3:any = 0;
	public costOfRice4:any = 0;

	public totalPriceINR:any = 0;
	public PMTusd:any = 0;
	public finalCIFPrice:any = 0;

	constructor(public apiService: RestService , public navCtrl: NavController,public location:Location) { }

	ngOnInit() {
		this.getCalculatorData();
	}
	calculateData(){

		if(this.riceone != undefined && this.riceonepercentage != undefined){
			this.costOfRice1 = parseFloat(((this.riceone *this.riceonepercentage)/100).toFixed(2));
		}
		if(this.ricetwo != undefined && this.ricetwopercentage != undefined){
			this.costOfRice2 = ((this.ricetwo *this.ricetwopercentage)/100);
		}
		if(this.ricethree != undefined && this.ricethreepercentage != undefined){
			this.costOfRice3 = ((this.ricethree *this.ricethreepercentage)/100);
		}
		if(this.ricefour != undefined && this.ricefourpercentage != undefined){
			this.costOfRice4 = ((this.ricefour *this.ricefourpercentage)/100);
		}


		this.PMT = (this.costOfRice1+this.costOfRice2+this.costOfRice3+this.costOfRice4+parseFloat(this.processingCharges)+this.updatedUserPrice);

		this.totalPriceINR = (this.costOfRice1+this.costOfRice2+this.costOfRice3+this.costOfRice4+parseFloat(this.processingCharges)+this.updatedUserPrice+parseFloat(this.domesticTransport)+parseFloat(this.localCharges)+parseFloat(this.financecost) );

		this.PMTusd = ((((this.totalPriceINR/this.dollaerate)*this.supplierCharge)/100)+(this.totalPriceINR/this.dollaerate))

		this.finalCIFPrice = (parseFloat(this.PMTusd)+parseFloat(this.lccharges)+parseFloat(this.oceanfreight)+parseFloat(this.thirdpartyinspection)+parseFloat(this.legalisationcharges)+parseFloat(this.coc)+parseFloat(this.eiacost))

 


		console.log(this.PMTusd);
	}

	getCalculatorData(){
		this.apiService.getCalculatorDetails().then((res:any) => {
			this.QualityMaster = res.qualityMaster
			this.DefaultValues = res.defaultValues
			
			this.dollaerate = res.defaultValues.dollarvalue;
			this.bagcost = res.defaultValues.bagcost;
			this.localCharges = res.defaultValues.localcharges;
			this.financecost = res.defaultValues.financecost;
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

		this.PMT = updatedPrice
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