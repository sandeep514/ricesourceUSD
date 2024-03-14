import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ImageprevPage } from '../imageprev/imageprev.page';
import { Location } from "@angular/common";
import { ConditionalExpr } from '@angular/compiler';

@Component({
	selector: 'app-trade-detail',
	templateUrl: './trade-detail.page.html',
	styleUrls: ['./trade-detail.page.scss'],
})
export class TradeDetailPage implements OnInit {

	galleryData: any;
	galleryId: any;
	tradeDetails: any;
	additionalInfo: any;
	addInfo: any;
	imageUrl: any;
	spec: any;
	userFirstName: any;
	slideOpts = {
		initialSlide: 1,
		slidesPerView: 1,
		spaceBetween: 5,
		freeMode: true,
		pagination: false,
		speed: 600,
		autoplay: true,
		loop: false
	};

	constructor(public location: Location, public actRoute: ActivatedRoute, public apiser: RestService, public modalCtrl: ModalController) {
		let tradeData = this.actRoute.snapshot.paramMap.get('tradeDetail');
		this.tradeDetails = JSON.parse(tradeData);
		var specialCharacter = ' ,';
		this.addInfo = (this.tradeDetails.additioanlInfo).split(specialCharacter);

		this.imageUrl = this.apiser.imageUrl;
		// this.getTradeDetails(this.galleryId);

		this.userFirstName = localStorage.getItem('name')[0];
	}
	back() {
		this.location.back();
	}
	ngOnInit() {
	}

	getTradeDetails(galleryId) {
		this.apiser.presentLoader("Loading trade details...");
		this.apiser.getTradeData(galleryId).then((res: any) => {
			console.log('trade details');
			console.log(res);

			this.apiser.loaderCtrl.dismiss();
			this.galleryData = res.data;
			this.spec = res.data.specification;

			console.log(this.spec);

		}, (err: any) => {

		});
	}

	async openModal(image) {
		let modal = await this.modalCtrl.create({
			component: ImageprevPage,
			componentProps: { img: image }
		});
		await modal.present();
	}
	generateDate = (date) => {

		var someDate = new Date(date);
		return someDate.getDay() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear();
	}
	generateDateForValid = (date, days) => {
		var result = new Date(date);
		result.setDate(result.getDate() + parseInt(days));

		return result.getDate() + '/' + (result.getMonth() + 1) + '/' + result.getFullYear();
	}
	//intrested/trade
	userShowInterest = (tradeId, $event) => {
		$event.currentTarget.classList.add('hide');
		$event.currentTarget.parentNode.parentNode.children[1].classList.remove('hide');
		document.getElementById('showingInterest').classList.remove('hide');
		// $event.currentTarget.parentNode.parentNode.children[2].classList.remove('hide');

		// return false;

		let postedData = {
			tradeId: tradeId,
			userId: localStorage.getItem('id')
		}
		this.apiser.tradeInterest(postedData).then((res) => {
			console.log(res);
		}).catch((err) => {
			console.log(err)
		})
	}
}