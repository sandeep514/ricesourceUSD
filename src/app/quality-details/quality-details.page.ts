import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import * as HighCharts from 'highcharts';
import { RestService } from '../rest.service';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { PlanpagePage } from '../planpage/planpage.page';
declare let RazorpayCheckout: any;
declare var Highcharts: any;
import { StockChart } from 'angular-highcharts';
import { ActivatedRoute } from '@angular/router';
import { resolve } from 'url';

@Component({
	selector: 'app-quality-details',
	templateUrl: './quality-details.page.html',
	styleUrls: ['./quality-details.page.scss'],
})

export class QualityDetailsPage implements OnInit {

	loader: any;
	selectedstate: any;
	selectedriceType: any;
	selectedChartData: any = "15_Days";
	private scrollDepthTriggered = false;
	public scrollLength: any = 0;
	public scrollPosition = 'top';
	public ricename = '';
	public rice = '';
	public userFirstName = '';
	public chartIntervals: any;

	paymentAmount: any = 1000;
	currency: any = "INR";
	listPlans: any;
	chartInt: any;
	productType: any;
	stock: StockChart;
	packing: any;
	ports: any;
	selectedRegion: any;
	selectedCountry: any;
	selectedPorts: any;
	country: any;
	regions: any;
	portsArray: any;
	FOB: any;
	fobminData: any;
	defalutPort: any;
	defalutPortPrice: number;
	fobmaxData: any;
	fobminDataUpdated: any;
	fobmaxDataUpdated: any;
	arrayPort: any;
	riceQuality: any;
	fiftykgMaster: any;
	CIFminData: any;
	CIFmaxData: any;
	riceQualityId: any;
	selectedPackage: any;
	selectedUserCountry: any;
	selectedUserRegion: any;

	constructor(public navCtrl: NavController, public apiser: RestService, public loading: LoadingController, public compSer: ComponentsService, public ModelCtrl: ModalController, public componentService: ComponentsService, public activRoute: ActivatedRoute) {

		this.selectedstate = localStorage.getItem('state');
		this.selectedriceType = localStorage.getItem('riceType');
		this.chartInt = localStorage.getItem('chartInt');
		this.selectedChartData = "15_Days";

		this.getChartInterval();

		this.compSer.isUserExpired.subscribe((res: any) => {
			if (localStorage.getItem('isExpired') == 'true') {
				this.presentModel();
			}
		});

		this.ports = [
			{ id: 1, name: 'Tokai' },
			{ id: 2, name: 'Vladivostok' },
			{ id: 3, name: 'Navlakhi' }
		];

		this.activRoute.params.subscribe((params: any) => {
			this.riceQualityId = params.riceQuality
			this.getAllCountryPorts();
		});
	}

	async presentModel() {
		const model = await this.ModelCtrl.create({
			component: PlanpagePage,
			animated: true
		});
		await model.present();
	}

	gotoProfile() {
		this.navCtrl.navigateForward(['profile']);
	}

	parseValue(value) {
		return value.split(' ').join('_');
	}

	ngOnInit() {
		this.userFirstName = localStorage.getItem('name')[0];
	}

	getChartInterval() {
		// this.apiser.getChartInterval().then((res:any) => {
		// 	this.chartIntervals = res.chartinterval;
		// });
	}


	async presentLoader(message) {
		this.loader = await this.loading.create({
			message: message
		});
		await this.loader.present();
	}

	loginProfile() {

	}

	scroll(direction, className) {
		if (direction == 'left') {
			$("." + className).animate(
				{
					scrollLeft: "-=135px"
				},
				"slow"
			);
		} else {
			$("." + className).animate(
				{
					scrollLeft: "+=135px"
				},
				"slow"
			);
		}
	}



	changeName(name) {
		let newname = name.split('_').join(' ').toUpperCase();
		return newname;
	}

	getAllCountryPorts() {
		this.componentService.presentLoading().then(() => {
			this.apiser.getAllPorts(this.riceQualityId).then((res: any) => {
				console.log('combinedData')
				console.log(res.chartData.combinedData)
				this.packing = res.packing;

				this.FOB = res.FOB;
				this.fobminData = res.FOB.fobmin;
				this.fobmaxData = res.FOB.fobmax;
				this.ports = res.ports;
				this.regions = (Object.keys(res.ports)).sort();

				this.portsArray = Object.values(res.ports);
				this.riceQuality = res.riceQuality;
				this.fiftykgMaster = res.fiftykgMaster;
				this.defalutPort = res.defalutPort;

				this.selectedUserCountry = res.defalutPortDetail[0].country;
				this.selectedUserRegion = res.defalutPortDetail[0].region;


				console.log(this.defalutPort);

				this.defalutPortPrice = parseFloat(res.defalutPortPrice);

				this.CIFminData = (parseFloat(res.FOB.fobmin) + (this.defalutPortPrice));
				this.CIFmaxData = (parseFloat(res.FOB.fobmax) + (this.defalutPortPrice));

				this.selectedPackage = res.fiftykgMaster.bag_size + ' ' + res.fiftykgMaster.bag_type;

				// Data retrieved from https://www.vikjavev.no/ver/#2020-04-15,2020-04-16

				Highcharts.chart('highcharts', {
					chart: {
						type: 'spline',
						scrollablePlotArea: {
							minWidth: 600,
							scrollPositionX: 1
						}
					},
					yAxis: {
						opposite: false,
						labels: {
							align: 'left',
						},
						title: {
							text: "Price( per Quintal )",
							x: -12
						}
					},
					title: {
						text: 'Rice Graph',
						align: 'left'
					},
					// subtitle: {
					// 	text: '15th & 16th of April, 2020 at two locations in Vik i Sogn, Norway',
					// 	align: 'left'
					// },
					xAxis: {
						type: 'datetime',
						labels: {
							overflow: 'justify'
						}
					},
					rangeSelector: {
						selected: 0,
						inputEnabled: false,
						buttons: [{
							type: 'week',
							count: 1,
							text: '1W'
						}, {
							type: 'month',
							count: 1,
							text: '1m'
						}, {
							type: 'month',
							count: 2,
							text: '2m'
						}, {
							type: 'month',
							count: 3,
							text: '3m'
						}, {
							type: 'month',
							count: 4,
							text: '4m'
						}, {
							type: 'month',
							count: 5,
							text: '5m'
						}, {
							type: 'month',
							count: 6,
							text: '6m'
						}, {
							type: 'month',
							count: 7,
							text: '7m'
						}, {
							type: 'month',
							count: 8,
							text: '8m'
						}, {
							type: 'month',
							count: 9,
							text: '9m'
						}, {
							type: 'month',
							count: 10,
							text: '10m'
						}, {
							type: 'month',
							count: 11,
							text: '11m'
						}, {
							type: 'year',
							count: 1,
							text: '1y'
						}],
					},
					tooltip: {
						valueSuffix: ''
					},
					plotOptions: {
						spline: {
							lineWidth: 4,
							states: {
								hover: {
									lineWidth: 5
								}
							},
							marker: {
								enabled: false
							},
							pointInterval: 3600000, // one hour
							pointStart: Date.UTC(2020, 3, 15, 0, 0, 0)
						}
					},
					series: [{
						name: 'Price',
						data: res.chartData.combinedData
					}],
					navigation: {
						menuItemStyle: {
							fontSize: '10px'
						}
					}
				});


				console.log("kjnk");

				this.componentService.loadingController.dismiss();


			}, (err: any) => {
				this.componentService.loadingController.dismiss();

			});
		});
	}
	getbagIndex(selectedData) {
		let packingList = this.packing;
		return new Promise(function (resolve, reject) {
			if (packingList.length == 0) {
				reject(false);
			} else {
				for (let i = 0; i < packingList.length; i++) {
					if (selectedData == packingList[i].id) {
						resolve(i);
					}
				}
			}
		});
	}
	changeBag(data) {

		this.getbagIndex(data.detail.value).then((res: any) => {
			let bag_size = this.packing[res]['bag_size'];
			let bag_type = this.packing[res]['bag_type'];
			let bag_PMT_USD = this.packing[res]['PMT_USD'];


			this.selectedPackage = bag_size + ' ' + bag_type;
			let packingPMT_USD = bag_PMT_USD;

			let modifiedAmount: any = parseFloat(packingPMT_USD).toFixed(2);
			let fobmin: any = parseFloat(this.fobminData).toFixed(2)
			let fobmax: any = parseFloat(this.fobmaxData).toFixed(2);
			console.log(fobmin);
			console.log(fobmax);
			let fiftyKGBagSize: any = parseFloat(this.fiftykgMaster.PMT_USD).toFixed(2);
			let removedMinFiftyKgBag: any = (fobmin - fiftyKGBagSize);
			let removedMaxFiftyKgBag: any = (fobmax - fiftyKGBagSize);

			console.log(fiftyKGBagSize);
			console.log(removedMinFiftyKgBag);
			console.log(removedMaxFiftyKgBag);

			let newFOBminDATA = parseFloat((removedMinFiftyKgBag) + parseFloat(modifiedAmount));
			let newFOBmaxDATA = parseFloat(removedMaxFiftyKgBag + parseFloat(modifiedAmount));

			this.fobminDataUpdated = newFOBminDATA;
			this.fobmaxDataUpdated = newFOBmaxDATA;

			console.log(parseFloat(modifiedAmount));
			console.log(newFOBminDATA);
			console.log(newFOBmaxDATA);
			console.log(this.defalutPortPrice);

			this.CIFminData = ((newFOBminDATA) + (Number(this.defalutPortPrice)));
			this.CIFmaxData = (newFOBmaxDATA + (Number(this.defalutPortPrice)));
		}, (err: any) => {
			console.log(err)
		})

	}

	changeRegion(data) {
		let region = data.detail.value;
		this.selectedRegion = region;
		this.country = ((Object.keys(this.ports[region])).sort());
		this.defalutPort = '';
		this.selectedUserCountry = '';
	}
	changeCountry(data) {
		let countries = data.detail.value;
		this.selectedCountry = countries;

		this.selectedPorts = this.ports[this.selectedRegion][this.selectedCountry];
		this.selectedPorts = (Object.keys(this.selectedPorts).sort());
		this.selectedUserCountry = this.selectedCountry
	}

	changePort(data) {
		let oldDefaultPortName = this.defalutPort;
		let oldReplacedWithUnderscore = oldDefaultPortName.split(' ').join('_');
		let OldportPrice = this.defalutPortPrice;
		this.defalutPort = data.detail.value;
		let portData = (this.ports[this.selectedRegion][this.selectedCountry][data.detail.value]);
		this.defalutPortPrice = portData[0].freight_25MT_1MT;
		this.CIFminData = ((parseFloat(this.CIFminData) - OldportPrice) + parseFloat(portData[0].freight_25MT_1MT));
		this.CIFmaxData = ((parseFloat(this.CIFmaxData) - OldportPrice) + parseFloat(portData[0].freight_25MT_1MT));
	}

	closeModal() {
		this.navCtrl.pop();

		if (localStorage.getItem('apptype') == 'OTHER') {
			this.navCtrl.navigateForward(['prices']);
		} else {
			this.navCtrl.navigateForward(['priceusd']);
		}
	}
}