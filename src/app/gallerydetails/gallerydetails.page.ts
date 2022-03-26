import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { ModalController } from '@ionic/angular';
import { ImageprevPage } from '../imageprev/imageprev.page';

@Component({
	selector: 'app-gallerydetails',
	templateUrl: './gallerydetails.page.html',
	styleUrls: ['./gallerydetails.page.scss'],
})
export class GallerydetailsPage implements OnInit {
	galleryData:any;
	galleryId:any;
	imageUrl:any;
	spec:any;
	userFirstName:any;
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
	
	constructor(public actRoute:ActivatedRoute,public apiser:RestService,public modalCtrl:ModalController) {
		this.galleryId = this.actRoute.snapshot.paramMap.get('galleryId');
		this.imageUrl = this.apiser.imageUrl;
		this.getGalleryDetails(this.galleryId);

		this.userFirstName = localStorage.getItem('name')[0];
	}

	ngOnInit() {
	}

	getGalleryDetails(galleryId){
		this.apiser.presentLoader("Loading gallery details...");
		this.apiser.getGalleryData(galleryId).then((res:any) => {
			this.apiser.loaderCtrl.dismiss();
			this.galleryData = res.data;
			this.spec = res.data.specification;
			
			console.log(this.spec);

		} ,(err:any) => {

		} );
	}

	async openModal(image){
		let modal = await this.modalCtrl.create({
			component: ImageprevPage,
			componentProps : {img : image}
		});
		await modal.present();
	}
	
}