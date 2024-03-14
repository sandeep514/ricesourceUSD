import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { RestService } from "../rest.service";
import { Location } from "@angular/common";

import { ImageprevPage } from "../imageprev/imageprev.page";
import * as $ from 'jquery';

@Component({
	selector: 'app-trade-list-usd',
	templateUrl: './trade-list-usd.page.html',
	styleUrls: ['./trade-list-usd.page.scss'],
})

export class TradeListUsdPage implements OnInit {
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
	public selectedTradeType: any = 'all';

	constructor(
		public apiService: RestService,
		public location: Location,
		public modalCtrl: ModalController,
		public navCtrl: NavController
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
		console.log("kjnkljonk");
		this.getListBids();

	}
	updateSelectedTradeType(selectedTrade) {
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

	// getListBids() {
	//   let userid = localStorage.getItem("id");
	//   this.apiService.presentLoader("Please wait...");

	//   this.apiService.getTrades(userid).then(
	//     (res: any) => {
	//       this.buyData = res.data[1];
	//       this.sellData = res.data[2];
	//       setTimeout(() => {
	//         this.apiService.dismissLoader();
	//       }, 1000);
	//     },
	//     (err: any) => {
	//       setTimeout(() => {
	//         this.apiService.dismissLoader();
	//       }, 1000);
	//     }
	//   );
	// }
	getListBids() {
		let userid = localStorage.getItem('id');
		this.apiService.presentLoader('Please wait');
		this.apiService.getHotDeals(userid).then((res: any) => {
			console.log("here");
			this.buyData = res.data;
			setTimeout(() => {
				this.apiService.dismissLoader()
			}, 1000)
		}, (err: any) => {
			setTimeout(() => {
				this.apiService.dismissLoader()
			}, 1000)
		});
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

	// back() {
	//   this.location.back();
	// }

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
	generateDate = (days) => {
		var someDate = new Date();
		var duration = days;
		someDate.setTime(someDate.getTime() + (duration * 24 * 60 * 60 * 1000));
		return (someDate.getDate() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear());
	}
	parseDate = (date) => {
		var someDate = new Date(date);
		// someDate.setTime(someDate.getTime() + (duration * 24 * 60 * 60 * 1000));
		return (someDate.getDate() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear());
	}

	navigateToDetailPage = (tradeDetail) => {
		this.navCtrl.navigateForward(['trade-usd-details', { tradeDetail: JSON.stringify(tradeDetail) }])
	}
	likeTrade(tradeId, $event) {
		$event.currentTarget.classList.add('hide');
		$event.currentTarget.parentNode.children[1].classList.remove('hide');


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
}