import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as HighCharts from 'highcharts';
import { RestService } from '../rest.service';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { PlanpagePage } from '../planpage/planpage.page';
declare let RazorpayCheckout: any;
declare var Highcharts: any;
import { StockChart } from 'angular-highcharts';

@Component({
	selector: 'app-ricechart',
	templateUrl: './ricechart.page.html',
	styleUrls: ['./ricechart.page.scss'],
})
export class RicechartPage implements OnInit {
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
	public razor_key = 'rzp_test_eBPImORw1zmU8F';
	public razorSecret = 'QAhUguSrbOIcflzHikLToMuw';
	paymentAmount: any = 1000;
	currency: any = "INR";
	listPlans: any;
	chartInt: any;
	productType: any;
	stock: StockChart;

	constructor(public navCtrl: NavController, public apiser: RestService, public loading: LoadingController, public compSer: ComponentsService, public ModelCtrl: ModalController) {
		this.selectedstate = localStorage.getItem('state');
		this.selectedriceType = localStorage.getItem('riceType');
		this.chartInt = localStorage.getItem('chartInt');
		this.selectedChartData = "15_Days";

		this.getChartInterval();

		this.compSer.chartInterval.subscribe((res: any) => {
			// this.selectedChartData = res;
			// this.getCartData(res);
		});
		// document.getElementById('clickme').click();
		this.presentLoader("Generating chart...");
		this.clickme();

		this.compSer.isUserExpired.subscribe((res: any) => {
			if (localStorage.getItem('isExpired') == 'true') {
				this.presentModel();
			}
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
	clickme() {
		let state = localStorage.getItem('state');
		let riceType = localStorage.getItem('riceType');
		this.ricename = localStorage.getItem('riceType').split('_').join(' ');
		this.rice = localStorage.getItem('ricename');

		this.selectedChartData = "15_Days";
		this.apiser.getChartData(state, riceType, this.rice, "15_Days").then((res: any) => {
			console.log('res.combinedData');
			console.log(res)
			this.productType = res.productType.type;

			this.loading.dismiss();

			let priceArray = [];
			for (let i = 0; i <= res.prices.length; i++) {
				priceArray.push(parseInt(res.prices[i]));
			}
			Highcharts.stockChart('highcharts', {
				chart: {
					alignTicks: false,
					backgroundColor: '#fffbd6',
					marginLeft: 40
				},
				// xAxis: {
				// 	title: {
				// 		text: "Price in Rs ( per Quintal )",
				// 	},
				// 	AlignValue: 'left',
				// },
				yAxis: {
					opposite: false,
					labels: {
						align: 'left',
					},
					title: {
						text: "Price in Rs ( per Quintal )",
						x: -12
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

				// title: {
				// 	text: 'AAPL Stock Volume'
				// },
				series: [{
					fontSize: '11px',
					color: '#92b243',
					type: 'line',
					name: 'Rs (per Qtl)',
					data:
						res.combinedData,

					dataGrouping: {

						units: [[
							'week', // unit name
							[1] // allowed multiples
						], [
							'month',
							[1, 2, 3, 4, 6]
						]]
					}
				}]
			});

			// var myChart = HighCharts.chart('highcharts', {
			// 	chart: {
			// 		backgroundColor: '#FFFBD6',
			// 		type: 'line'
			// 	},
			// 	rangeSelector: {
			// 		enabled:true,
			// 		allButtonsEnabled: true,
			// 		selected: 2
			// 	},
			// 	title: {
			// 		text: ''
			// 	},
			// 	xAxis: {
			// 		categories: res.date,
			// 		labels:{
			// 			enabled: false
			// 		}
			// 	},
			// 	yAxis: {
			// 		title: {
			// 			text: "Price in Rs ( per Quintal )"
			// 		}
			// 	},
			// 	series: [ 

			// 		{
			// 			type: 'line',
			// 			name: this.rice+' - '+this.changeName(riceType),
			// 			data: priceArray
			// 		}]
			// });
			// setTimeout(() => {
			// 	this.loading.dismiss();
			// 	console.log(priceArray);
			// }, 300);
		}, (err: any) => {
		})
	}

	parseValue(value) {
		return value.split(' ').join('_');
	}

	ngOnInit() {
		this.getCartData('15_Days');
		this.userFirstName = localStorage.getItem('name')[0];
	}

	getChartInterval() {
		this.apiser.getChartInterval().then((res: any) => {
			this.chartIntervals = res.chartinterval;
		});
	}

	payWithRazor() {
		var options = {
			description: 'Rice Data',
			image: 'https://i.imgur.com/3g7nmJC.png',
			currency: 'INR',
			key: 'rzp_live_igtbdlPLfbiw6d',
			amount: this.paymentAmount,
			name: 'SNTC',
			prefill: {
				email: localStorage.getItem('email'),
				contact: localStorage.getItem('mobile'),
				name: localStorage.getItem('name')
			},
			theme: {
				color: '#F37254'
			},
			modal: {
				ondismiss: function () {
					alert('dismissed')
				}
			}
		};

		var successCallback = (payment_id) => {
			// let tran_id = payment_id
			// let userId = localStorage.getItem('id');
			// let plan_id
		};

		var cancelCallback = (error) => {
			this.compSer.chartInterval.next("15_Days");
		};

		RazorpayCheckout.open(options, successCallback, cancelCallback);
	}



	async logScrolling($event) {
		if (this.scrollDepthTriggered) {
			return;
		}

		if ($event.target.localName != "ion-content") {
			return;
		}

		const scrollElement = await $event.target.getScrollElement();

		const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;

		const currentScrollDepth = ($event.detail.scrollTop);
		this.scrollLength = currentScrollDepth;

		const targetPercent = 80;

		let triggerDepth = ((scrollHeight / 100) * targetPercent);

		if (currentScrollDepth >= triggerDepth) {
			this.scrollPosition = "bottom";
			// this.scrollDepthTriggered = true;
		} else {
			this.scrollPosition = "top";
			// this.scrollDepthTriggered = false;
		}
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

	getCartData(timeLimit) {
		return true;
		this.selectedChartData = timeLimit;

		if (this.selectedChartData != "15_Days" && localStorage.getItem('chartInt') == 'false') {
			// this.payWithRazor();
			this.presentModel();
		}
		if (this.selectedChartData == "15_Days") {
			this.presentLoader("Generating chart...");
			let state = localStorage.getItem('state');
			let riceType = localStorage.getItem('riceType');
			this.ricename = localStorage.getItem('riceType').split('_').join(' ');
			this.rice = localStorage.getItem('ricename');

			this.selectedChartData = timeLimit;
			console.log(state);
			console.log(riceType);
			console.log(this.rice);
			console.log(timeLimit);

			this.apiser.getChartData(state, riceType, this.rice, timeLimit).then((res: any) => {
				let priceArray = [];
				for (let i = 0; i <= res.prices.length; i++) {
					priceArray.push(parseInt(res.prices[i]));
				}

				var myChart = HighCharts.chart('highcharts', {
					chart: {
						backgroundColor: '#FFFBD6',
						type: 'line'
					},
					// title: {
					// 	text: this.changeName(riceType)
					// },
					xAxis: {
						categories: res.date
					},
					yAxis: {
						title: {
							text: "Price"
						}
					},
					series: [{
						type: 'line',
						name: this.rice + ' - ' + this.changeName(riceType),
						data: priceArray
					}]
				});
				setTimeout(() => {
					this.loading.dismiss();
				}, 300);
			}, (err: any) => {
			})
		}
		if (this.selectedChartData != "15_Days" && localStorage.getItem('chartInt') == 'true') {
			this.presentLoader("Generating chart...");
			let state = localStorage.getItem('state');
			let riceType = localStorage.getItem('riceType');
			this.ricename = localStorage.getItem('riceType').split('_').join(' ');
			this.rice = localStorage.getItem('ricename');

			this.selectedChartData = timeLimit;
			this.apiser.getChartData(state, riceType, this.rice, timeLimit).then((res: any) => {
				let priceArray = [];
				for (let i = 0; i <= res.prices.length; i++) {
					priceArray.push(parseInt(res.prices[i]));
				}

				var myChart = HighCharts.chart('highcharts', {
					chart: {
						backgroundColor: '#FFFBD6',
						type: 'line'
					},
					// title: {
					// 	text: this.changeName(riceType)
					// },
					xAxis: {
						categories: res.date
					},
					yAxis: {
						title: {
							text: "Price"
						}
					},
					series: [

						{
							type: 'line',
							name: this.changeName(riceType),
							data: priceArray
						}]
				});
				setTimeout(() => {
					this.loading.dismiss();
				}, 300);
			}, (err: any) => {
			})
		}
	}

	changeName(name) {
		let newname = name.split('_').join(' ').toUpperCase();
		return newname;
	}

}