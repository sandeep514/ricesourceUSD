import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { OceanfreightsPage } from '../oceanfreights/oceanfreights.page';
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
	public total:any = '';
	public exchange:any = '';
	public FOB:any = '';
	public USD_master:any;
	public selectedFiftykg:any = '';
	public updatedUserPrice:any = 0;
	public selectedBag:any;
	public selectedBagId:any='';
	public selectedRice:any;
	public isNull:any;


	public riceone:any = '';
	public riceonepercentage:any = 100;
	public ricetwo:any = '';
	public ricetwopercentage:any = '';
	public ricethree:any = '';
	public ricethreepercentage:any = '';
	public ricefour:any = '';
	public ricefourpercentage:any = '';
	public processingCharges:any = '';
	public bagSize:any = 0;
	public domesticTransport:any = '';
	public lccharges:any = '';
	public oceanfreight:any = '';
	public thirdpartyinspection:any = '';
	public legalisationcharges:any = '';
	public coc:any = '';
	public eiacost:any = '';
	public supplierCharge:any = 0;
	public financecost:any = 0;
	public PMT:any = 0;
	public lastFOBAmount:any = 0;
	public bagSizePrice:any = 0;

	public costOfRice1:any = 0;
	public costOfRice2:any = 0;
	public costOfRice3:any = 0;
	public costOfRice4:any = 0;

	public totalPriceINR:any = 0;
	public PMTusd:any = 0;
	public finalCIFPrice:any = 0;
	public beforeMarkup:any = 0;

	public regions: any;
	public data: any;
	public countries: any;
	public selectedResign: any;
	public ports: any;
	public modalStatus: any = false;
	public AverageRiceCostPMT: any = 0;

	public blendError1: any = false;
	public blendError2: any = false;
	public blendError3: any = false;
	public blendError4: any = false;

	constructor(public apiService: RestService , public navCtrl: NavController,public location:Location, public modalCtrl: ModalController,public componentService: ComponentsService) { }

	ngOnInit() {
		this.getCalculatorData();
		this.getTransportState();
	}
	calculateData(){
		if( this.ricefour != '' ){
			if (this.ricefour.length < 5){
				this.blendError4 = true;
			}	else{
				this.blendError4 = false;
			}
		}

		( this.riceone.length != 0 || this.riceone != '') ?( this.riceone.length > 4 )? this.blendError1 = false : this.blendError1 = true  : '';
		( this.ricetwo.length != 0 || this.ricetwo != '') ?( this.ricetwo.length > 4 )? this.blendError2 = false : this.blendError2 = true  : '';
		( this.ricethree.length != 0 || this.ricethree != '') ?( this.ricethree.length > 4 )? this.blendError3 = false : this.blendError3 = true  : '';
		( this.ricefour.length != 0 || this.ricefour != '') ?( this.ricefour.length > 4 )? this.blendError4 = false : this.blendError4 = true  : '';
		
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

		if( this.processingCharges == '' ){
			this.PMT = (this.costOfRice1+this.costOfRice2+this.costOfRice3+this.costOfRice4+this.updatedUserPrice);

			if( this.domesticTransport== '' ){
				this.totalPriceINR = (parseFloat(this.costOfRice1)+parseFloat(this.costOfRice2)+parseFloat(this.costOfRice3)+parseFloat(this.costOfRice4)+parseFloat(this.updatedUserPrice)+parseFloat(this.localCharges)+parseFloat(this.financecost) );
			}else{
				this.totalPriceINR = (parseFloat(this.costOfRice1)+parseFloat(this.costOfRice2)+parseFloat(this.costOfRice3)+parseFloat(this.costOfRice4)+parseFloat(this.updatedUserPrice)+parseFloat(this.domesticTransport)+parseFloat(this.localCharges)+parseFloat(this.financecost) );
			}
		}else{
			this.PMT = (this.costOfRice1+this.costOfRice2+this.costOfRice3+this.costOfRice4+parseFloat(this.processingCharges)+this.updatedUserPrice);
			if( this.domesticTransport== '' ){
				this.totalPriceINR = (parseFloat(this.costOfRice1)+parseFloat(this.costOfRice2)+parseFloat(this.costOfRice3)+parseFloat(this.costOfRice4)+parseFloat(this.updatedUserPrice)+parseFloat(this.localCharges)+parseFloat(this.financecost) );
			}else{
				this.totalPriceINR = (parseFloat(this.costOfRice1)+parseFloat(this.costOfRice2)+parseFloat(this.costOfRice3)+parseFloat(this.costOfRice4)+parseFloat(this.updatedUserPrice)+parseFloat(this.domesticTransport)+parseFloat(this.localCharges)+parseFloat(this.financecost) );
			}
			// this.totalPriceINR = (parseFloat(this.costOfRice1)+parseFloat(this.costOfRice2)+parseFloat(this.costOfRice3)+parseFloat(this.costOfRice4)+parseFloat(this.processingCharges)+parseFloat(this.updatedUserPrice)+parseFloat(this.localCharges)+parseFloat(this.financecost) );
		}
		let dollaerateData = 0;
		if (this.dollaerate == '' || this.dollaerate == undefined){
			dollaerateData = 0;
		}else{
			dollaerateData = this.dollaerate;
		}
		
		// this.PMTusd = ((((this.totalPriceINR/this.dollaerate)*this.supplierCharge)/100)+(this.totalPriceINR/this.dollaerate)).toFixed(2);
		console.log(this.totalPriceINR);
		console.log(dollaerateData);
		if( (this.totalPriceINR/dollaerateData) == Infinity ){
			this.PMTusd = 0;
		}else{
			this.PMTusd = (this.totalPriceINR/dollaerateData).toFixed(2);
		}
		console.log(this.PMTusd)

		// if( isNaN(Number(this.lccharges)) ){
		// 	this.lccharges = 0;
		// }
		// if( isNaN(Number(this.lccharges)) ){
		// 	this.lccharges = 0;
		// }
		// if( isNaN(Number(this.oceanfreight)) ){
		// 	this.oceanfreight = 0;
		// }
		// if( isNaN(Number(this.thirdpartyinspection)) ){
		// 	this.thirdpartyinspection = 0;
		// }
		// if( isNaN(Number(this.legalisationcharges)) ){
		// 	this.legalisationcharges = 0;
		// }
		// if( isNaN(Number(this.coc)) ){
		// 	this.coc = 0;
		// }
		// if( isNaN(Number(this.eiacost)) ){
		// 	this.eiacost = 0;
		// }
		this.beforeMarkup = Math.floor((parseFloat(this.PMTusd)));
		let processedAmount = 0;
		if(this.lccharges != ''){
			processedAmount = Math.floor(((processedAmount)+parseFloat(this.lccharges)));
		}
		if(this.oceanfreight != ''){
			processedAmount = Math.floor(((processedAmount)+parseFloat(this.oceanfreight)));
		}
		if(this.thirdpartyinspection != ''){
			processedAmount = Math.floor(((processedAmount)+parseFloat(this.thirdpartyinspection)));
		}
		if(this.legalisationcharges != ''){
			processedAmount = Math.floor(((processedAmount)+parseFloat(this.legalisationcharges)));
		}
		if(this.coc != ''){
			processedAmount = Math.floor(((processedAmount)+parseFloat(this.coc)));
		}
		if(this.eiacost != ''){
			processedAmount = Math.floor(((processedAmount)+parseFloat(this.eiacost)));
		}

		this.beforeMarkup = this.beforeMarkup+processedAmount;
		if( this.oceanfreight != '' ){
			this.lastFOBAmount = Math.floor(this.beforeMarkup-parseFloat(this.oceanfreight));
		}else{
			this.lastFOBAmount = this.beforeMarkup;
		}
		// this.beforeMarkup = Math.floor((parseFloat(this.PMTusd)+parseFloat(this.lccharges)+parseFloat(this.oceanfreight)+parseFloat(this.thirdpartyinspection)+parseFloat(this.legalisationcharges)+parseFloat(this.coc)+parseFloat(this.eiacost)));

		if( this.supplierCharge != '' || this.supplierCharge != 0 ){
			console.log((((this.lastFOBAmount * this.supplierCharge)/100) + this.lastFOBAmount));
			console.log((((this.beforeMarkup * this.supplierCharge)/100) + this.beforeMarkup));

			this.lastFOBAmount = Math.round(((this.lastFOBAmount * this.supplierCharge)/100) + this.lastFOBAmount);
			this.finalCIFPrice = Math.round(((this.beforeMarkup * this.supplierCharge)/100) + this.beforeMarkup);
		}else{
			this.finalCIFPrice = this.beforeMarkup;
		}
		this.AverageRiceCostPMT = (parseFloat(this.costOfRice1)+parseFloat(this.costOfRice2)+parseFloat(this.costOfRice3)+parseFloat(this.costOfRice4)).toFixed(2);
	
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
			console.log(this.USD_master)
			this.selectedFiftykg = res.fiftykg.PMT_USD;

		} ,(err:any) =>{ 
		});
	} 
	save(){
		let dollaerateData = 0;
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
			dollaerateData = 0;
		}else{
			dollaerateData = this.dollaerate;
		}
		if (this.supplierCharge == '' || this.supplierCharge == undefined){
			this.supplierCharge = 0;
		}

		let minValue = (parseFloat(this.riceMinPrice)+parseFloat(this.bagcost)+parseFloat(this.transportMin)+parseFloat(this.localCharges)).toFixed(2);
		let maxValue = (parseFloat(this.riceMaxPrice)+parseFloat(this.bagcost)+parseFloat(this.transportMax)+parseFloat(this.localCharges)).toFixed(2);


		let exchangeRatemin = ((parseFloat(this.riceMinPrice)+parseFloat(this.bagcost)+parseFloat(this.transportMin) ) / dollaerateData).toFixed(2);
		let exchangeRatemax = ((parseFloat(this.riceMaxPrice)+parseFloat(this.bagcost)+parseFloat(this.transportMax) ) / dollaerateData).toFixed(2);

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

		// let postedData = JSON.stringify({ 
		// 	'rice' : this.selectedRice,
		// 	'ricemin' : this.riceMinPrice,
		// 	'ricemax' : this.riceMaxPrice,
		// 	'transportmin' : this.transportMin,
		// 	'transportmax' : this.transportMax,
		// 	'category' : this.bagcost,
		// 	'charges' : this.localCharges,
		// 	'dollarrate' : this.dollaerate,
		// 	'percentageValue' : this.supplierCharge,
		// 	'totalMin' : minValue,
		// 	'totalMax' : maxValue,
		// 	'exchangeRatemin' : exchangeRatemin,
		// 	'exchangeRatemax' : exchangeRatemax,
		// 	'fobmin' : Fobmin,
		// 	'fobmax' : Fobmax,
		// 	'user_id' : localStorage.getItem('id'),
		// 	'usd_defaultMaster_id' : this.selectedBagId
		// });

		// this.apiService.saveUSDPrices(postedData).then((res:any) => {
		// } , (err:any) => {
		// })
	}

	checkInput(event, riceType){
		if((event.detail.value).length >= 5){

			if( riceType == 'one' ){
				this.riceone = (event.detail.value).substring(0, 5); 
			}
			if( riceType == 'two' ){
				this.ricetwo = (event.detail.value).substring(0, 5);
			}
			if( riceType == 'three' ){
				this.ricethree = (event.detail.value).substring(0, 5);
			}
			if( riceType == 'four' ){
				this.ricefour = (event.detail.value).substring(0, 5);
			}
		}else{
			if( riceType == 'one' ){
				if(this.ricetwopercentage == ''){
					this.ricetwopercentage = 0;
				}
				if(this.ricethreepercentage == ''){
					this.ricethreepercentage = 0;
				}
				if(this.ricefourpercentage == ''){
					this.ricefourpercentage = 0;
				}

				let percentage = (parseFloat(this.ricetwopercentage) + parseFloat(this.ricethreepercentage) + parseFloat(this.ricefourpercentage));

				let totalPercentage = (parseFloat(this.riceonepercentage)+parseFloat(this.ricetwopercentage) + parseFloat(this.ricethreepercentage) + parseFloat(this.ricefourpercentage));


				if( !isNaN(Number(totalPercentage) )){
					if( totalPercentage <= 100 ){
						if( percentage == 0 ){
							this.riceonepercentage = 100;
						}else{
							this.riceonepercentage = (100 -percentage);
						}
						this.costOfRice1 = ((this.riceone * this.riceonepercentage)/100).toFixed(2);
						this.AverageRiceCostPMT =  this.costOfRice1;
					}else{

						alert('Total Percentage should not > 100')
					}
				}
			}
			if( riceType == 'two' ){
				if( this.riceone != '' ){
					if (this.riceone.length < 5){
						// alert('Blend rice 1 shoult be greater than 10,000.');
						this.blendError1 = true
						return false;
					}else{
						this.blendError1 = false;
					}
				}
				if(this.riceonepercentage == ''){
					this.riceonepercentage = 0;
				}
				if(this.ricethreepercentage == ''){
					this.ricethreepercentage = 0;
				}
				if(this.ricefourpercentage == ''){
					this.ricefourpercentage = 0;
				}

				let percentage = (parseFloat(this.riceonepercentage) + parseFloat(this.ricethreepercentage) + parseFloat(this.ricefourpercentage));
				// this.costOfRice1 = (  this.riceonepercentage);

				let totalPercentage = (parseFloat(this.riceonepercentage)+parseFloat(this.ricetwopercentage) + parseFloat(this.ricethreepercentage) + parseFloat(this.ricefourpercentage));



				if( !isNaN(Number(totalPercentage)) ){
					if( totalPercentage <= 100 ){
						if( percentage == 0 ){
							this.ricetwopercentage = 100;
						}else{
							this.ricetwopercentage = (100 - percentage);
						}

					}else{

						alert('Total Percentage should not > 100')
					}	
				}
				this.costOfRice2 = ((this.ricetwo * this.ricetwopercentage)/100);
				this.AverageRiceCostPMT =  (this.costOfRice1+this.costOfRice2).toFixed(2);
				
			}
			if( riceType == 'three' ){
				if( this.ricetwo != '' ){
					if (this.ricetwo.length < 5){
						this.blendError2 = true;
						return false;
					}else{
						this.blendError2 = false;
					}
				}
				
				if(this.riceonepercentage == ''){
					this.riceonepercentage = 0;
				}
				if(this.ricetwopercentage == ''){
					this.ricetwopercentage = 0;
				}
				if(this.ricefourpercentage == ''){
					this.ricefourpercentage = 0;
				}
				let percentage = (parseFloat(this.riceonepercentage) + parseFloat(this.ricetwopercentage) + parseFloat(this.ricefourpercentage));

				let totalPercentage = (parseFloat(this.riceonepercentage)+parseFloat(this.ricetwopercentage) + parseFloat(this.ricethreepercentage) + parseFloat(this.ricefourpercentage));

				if( !isNaN(Number(totalPercentage) )){
					if( totalPercentage <= 100 ){
						if( percentage == 0 ){
							this.ricethreepercentage = 100;
						}else{
							this.ricethreepercentage = (100 -percentage);
						}

					}else{
						

						alert('Total Percentage should not > 100')
					}
				}
				this.costOfRice3 = ((this.ricethree * this.ricethreepercentage)/100);
				this.AverageRiceCostPMT = (this.costOfRice1 + this.costOfRice3 + this.costOfRice3).toFixed(2)
			}
			if( riceType == 'four' ){
				if( this.ricethree != '' ){
					if (this.ricethree.length < 5){
						// alert('Blend rice 3 shoult be greater than 10,000.');
						this.blendError3 = true;
						return false;
					}else{
						this.blendError3 = false;
					}
				}
				
				
				if(this.riceonepercentage == ''){
					this.riceonepercentage = 0;
				}
				if(this.ricetwopercentage == ''){
					this.ricetwopercentage = 0;
				}
				if(this.ricethreepercentage == ''){
					this.ricethreepercentage = 0;
				}

				let percentage = (parseFloat(this.riceonepercentage) + parseFloat(this.ricetwopercentage) + parseFloat(this.ricethreepercentage));

				let totalPercentage = (parseFloat(this.riceonepercentage)+parseFloat(this.ricetwopercentage) + parseFloat(this.ricethreepercentage) + parseFloat(this.ricefourpercentage));



				if( !isNaN(Number(totalPercentage) )){
					if( totalPercentage <= 100 ){
						if( percentage == 0 ){
							this.ricefourpercentage = 100;
						}else{
							this.ricefourpercentage = (100 - percentage);
						}

					}else{

						alert('Total Percentage should not > 100')
					}
				}
				this.costOfRice4 = ((this.ricefour * this.ricefourpercentage)/100);
				this.AverageRiceCostPMT = (this.costOfRice1 + this.costOfRice2 + this.costOfRice3+this.costOfRice4).toFixed(2)
			}

			this.save()
			this.calculateData()
		}
	}
	
	bagChange(event){
		let value = event.detail.value;
		let splitedValue = value.split('_');

		let bagSize = splitedValue[0];
		let bagNme = splitedValue[1];
		let bagPrice = splitedValue[2];
		this.selectedBagId = splitedValue[3];

		let updatedPrice = parseFloat(bagPrice);
		this.bagSizePrice = updatedPrice;

		this.selectedBag = bagSize+'_'+bagNme;
		this.updatedUserPrice = updatedPrice;

		this.save()
		this.calculateData()
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

	async presentModel(){
		// const model = await this.modalCtrl.create({
		// 	component: OceanfreightsPage,
		// 	animated: true
		// })
		// await model.present();
		this.modalStatus = true
	}
	getTransportState(){
		this.componentService.presentLoading().then(() => {
			this.apiService.getOceanPorts().then( (res:any) => {
				this.componentService.loadingController.dismiss();
				this.regions = Object.values(res.region).sort();
				console.log(res.data)

				this.data = res.data;
			} , (err:any) => {
				this.componentService.loadingController.dismiss();

			});
		});
	}

	changecountry(resign){
		let resignValue = resign.detail.value;
		this.selectedResign = resignValue;
		this.countries = Object.keys(this.data[resignValue]).sort();
	}

	getPortList(resign){
		let region = this.selectedResign;
		let countryName = resign.detail.value;
		let portsOfCountry = this.data[region][countryName];
		console.log(portsOfCountry)
		this.ports = portsOfCountry;
	}
	
	updateModel(){
		if( this.modalStatus == false ){
			this.modalStatus = true;
		}
		if( this.modalStatus == true ){
			this.modalStatus = false;
		}
	}
	
}