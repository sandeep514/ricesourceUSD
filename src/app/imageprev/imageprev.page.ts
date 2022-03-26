import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
	selector: 'app-imageprev',
	templateUrl: './imageprev.page.html',
	styleUrls: ['./imageprev.page.scss'],
})
export class ImageprevPage implements OnInit {
	image:any;
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
	constructor(public navParams:NavParams,public modalCtrl:ModalController) { }

	ngOnInit() {
		this.image = this.navParams.get('img');
		console.log(this.image);
	}

	closeModal(){
		this.modalCtrl.dismiss();
	}
}