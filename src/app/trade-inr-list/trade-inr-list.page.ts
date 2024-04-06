import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { RestService } from "../rest.service";
import { Location } from "@angular/common";
import { ImageprevPage } from "../imageprev/imageprev.page";
import * as $ from 'jquery';
import { ComponentsService } from "../components.service";

@Component({
	selector: 'app-trade-inr-list',
	templateUrl: './trade-inr-list.page.html',
	styleUrls: ['./trade-inr-list.page.scss'],
})
export class TradeInrListPage implements OnInit {
	public allBuySellData: any;
	public allBuyData: any;
	public allSellData: any;
	public buySellData: any;
	public buyData: any;
	public sellData: any;
	public yourbid: any;
	public mybid: any;
	public QueryId: any;
	public validTill: any;
	public mindate: any;
	public maxDate: any;
	public lastDate: any;
	public imagePre: any;
	public currentStatus: any;
	public currentStatusMessage: any;
	public newsWidth: any;
	public selectedTradeType: any = 'buy';

	constructor(
		public apiService: RestService,
		public location: Location,
		public modalCtrl: ModalController,
		public navCtrl: NavController,
		public compService: ComponentsService
	) {
		var today = new Date();
		// this.mindate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
		this.mindate = new Date(today.setDate(today.getDate() + 2)).toISOString();
		this.maxDate = today.setFullYear(today.getFullYear() + 2);
		this.lastDate = new Date(this.maxDate).toISOString();
		this.imagePre = this.apiService.imageUrl;
	}

	ngOnInit() {
		// this.getListBids();
	}
	ionViewDidEnter() {
		this.getListBids();

	}
	updateSelectedTradeType(selectedTrade) {
		console.log(selectedTrade);
		this.selectedTradeType = selectedTrade;
	}
	changed(event) {
		let todayDate = new Date();
		let todayFormatedDate =
			todayDate.getDate() +
			"/" +
			todayDate.getMonth() +
			"/" +
			todayDate.getFullYear();

		let selectedDate = new Date(event.detail.value);
		let getFullYear = selectedDate.getFullYear();
		let getDate = selectedDate.getDate();
		let getMonth = selectedDate.getMonth();
		let selectedFormatedDate = getDate + "/" + getMonth + "/" + getFullYear;

		var date1 = todayDate;
		var date2 = selectedDate;
		var diffDays = date2.getDate() - date1.getDate();
		this.validTill = diffDays;
		// console.log(diffDays);
	}

	getListBids() {
		let userid = localStorage.getItem("id");
		this.compService.presentLoading();

		this.apiService.getTrades(userid).then(
			(res: any) => {
				this.currentStatus = (res.currentStatus);
				this.currentStatusMessage = (res.statusMessage);
				this.newsWidth = (res.statusMessage.length * 14) + 'px'
				console.log(res.data[1]);
				this.buyData = res.data[1];
				this.sellData = res.data[2];
				this.buySellData = res.allTrade;

				this.allBuyData = res.data[1];
				this.allSellData = res.data[2];
				this.allBuySellData = res.allTrade;
				setTimeout(() => {
					this.apiService.dismissLoader();
				}, 1000);
			},
			(err: any) => {
				setTimeout(() => {
					this.apiService.dismissLoader();
				}, 1000);
			}
		);
	}

	yourbidfunction(event, buyQueryId) {
		this.mybid = event.detail.value;
		this.QueryId = buyQueryId;
	}

	validDays(event, buyQueryId) {
		this.validTill = event.detail.value;
		this.QueryId = buyQueryId;
	}

	saveUserBid(buyQueryId) {
		this.QueryId = buyQueryId;

		if (
			this.QueryId != undefined &&
			this.mybid != undefined &&
			this.validTill != undefined
		) {
			this.apiService.presentLoader("Please Wait...");

			this.apiService
				.addBidOnBuyerQuery({
					buyQueryId: this.QueryId,
					validTill: this.validTill,
					amount: this.mybid,
					userid: localStorage.getItem("id"),
				})
				.then(
					(res: any) => {
						this.apiService.dismissLoader();
						this.getListBids();
					},
					(err: any) => {
						this.apiService.dismissLoader();
					}
				);
		} else {
			this.apiService.presentToast(
				"Bid amount & Bid expired date is required..."
			);
		}
	}

	back() {
		this.location.back();
	}

	accept(bid_id) {
		this.apiService.presentLoader("Please Wait...");

		let postedData = { bid_id: bid_id, counter_status: 1 };
		this.apiService
			.updateCounterStatus(postedData)
			.then((res: any) => {
				this.apiService.dismissLoader();
				console.log(res);
				this.getListBids();
			})
			.catch((err) => {
				this.apiService.dismissLoader();
				this.getListBids();
				console.log(err);
			});
	}

	reject(bid_id) {
		this.apiService.presentLoader("Please Wait...");

		let postedData = { bid_id: bid_id, counter_status: 2 };
		this.apiService
			.updateCounterStatus(postedData)
			.then((res: any) => {
				this.apiService.dismissLoader();

				console.log(res);
				this.getListBids();
			})
			.catch((err) => {
				this.getListBids();
				this.apiService.dismissLoader();

				console.log(err);
			});
	}

	async openModal(image) {
		console.log(image);

		let modal = await this.modalCtrl.create({
			component: ImageprevPage,
			componentProps: { img: image },
		});
		await modal.present();
	}

	generateDate = (validDate) => {
		var date = new Date(validDate)
		var ddate = date.getDate();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var hours = date.getHours().toString();
		var minutes = date.getMinutes().toString();
		// var ampm = hours >= 12 ? 'pm' : 'am';
		// hours = hours % 12;
		hours = hours ? (hours).toString() : '12'; // the hour '0' should be '12'
		hours = (hours.length == 1) ? '0' + hours : hours;
		minutes = minutes < '10' ? '0' + minutes : minutes;
		var strTime = ddate + '/' + month + '/' + year + ' (' + hours + ':' + minutes + ')';
		return strTime;
	}

	generateDateForValid = (date, days) => {
		var result = new Date(date);
		result.setDate(result.getDate() + parseInt(days));

		return result.getDate() + '/' + (result.getMonth() + 1) + '/' + result.getFullYear();
	}


	navigateToDetailPage = (tradeDetail) => {
		this.navCtrl.navigateForward(['trade-detail', { tradeDetail: JSON.stringify(tradeDetail) }])
	}

	likeTrade(tradeId, $event) {
		$event.currentTarget.classList.add('hide');
		$event.currentTarget.parentNode.children[1].classList.remove('hide');
		let currentCounter = $event.currentTarget.parentNode.parentNode.children[1].children[0].innerHTML;
		$event.currentTarget.parentNode.parentNode.children[1].children[0].textContent = (parseInt(currentCounter) + 1);

		let postedData = {
			tradeId: tradeId,
			userId: localStorage.getItem('id')
		}

		this.apiService.likeTrade(postedData).then((res) => {
			console.log(res);
		}).catch((err) => {
			console.log(err)
		})
	}

	searchTrade(value, tradeType) {
		let searchValue = value.detail.value;

		if (tradeType == 'all') {
			let data = [];
			this.allBuySellData.filter(function (el, index) {
				let string = (el.rice_name_data.name + ' ' + el.rice_form_milestone3.name).toLowerCase();
				let stringToCheck = ((searchValue).toLowerCase());

				if (string.indexOf(stringToCheck) !== -1) {
					data.push(el);
				}
			});
			console.log(data)
			this.buySellData = data;


			// let slData = [];
			// this.allSellData.filter(function (el, index) {
			// 	let string = (el.rice_name_data.name + ' ' + el.rice_form_milestone3.name).toLowerCase();
			// 	let stringToCheck = ((searchValue).toLowerCase());

			// 	if (string.indexOf(stringToCheck) !== -1) {
			// 		slData.push(el);
			// 	}
			// });
			// this.sellData = slData;

		} else if (tradeType == 'buy') {
			let data = [];
			this.allBuyData.filter(function (el, index) {
				let string = (el.rice_name_data.name + ' ' + el.rice_form_milestone3.name).toLowerCase();
				let stringToCheck = ((searchValue).toLowerCase());

				if (string.indexOf(stringToCheck) !== -1) {
					data.push(el);
				}
			});
			this.buyData = data;
		} else {
			let data = [];
			this.allSellData.filter(function (el, index) {
				let string = ((el.rice_form_milestone3.name).toLowerCase());
				let string2 = ((el.rice_name_data.name).toLowerCase());

				let stringToCheck = ((searchValue).toLowerCase());

				if (string.indexOf(stringToCheck) !== -1 || string2.indexOf(stringToCheck) !== -1) {
					data.push(el);
				}

			});
			this.sellData = data;

		}
	}

}