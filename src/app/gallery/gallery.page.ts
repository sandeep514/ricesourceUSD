import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.page.html',
	styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
	listGallery:any;
	imagePre:any;
	riceTypeAvailable:any;
	basmartiGallery:any = '';
	nonbasmartiGallery:any = '';
	userFirstName:any;
	
	constructor(public restApi:RestService,public navctrl:NavController) {
		this.getGallery();
		this.imagePre = this.restApi.imageUrl;
		this.riceTypeAvailable = 'basmati';

		this.userFirstName = localStorage.getItem('name')[0];
	}

	ngOnInit() {
	}
	
	getGallery(){
		this.restApi.presentLoader('Loading gallery...');
		return new Promise((resolve , reject) => {
			this.restApi.getGallery().then((res:any) => {

				if( 'basmati' in res.data ){
					this.basmartiGallery = res.data.basmati;
				}
				if( 'nonbasmati' in res.data ){
					this.nonbasmartiGallery = res.data.nonbasmati;
				}
				this.listGallery = res.data;
				this.restApi.loaderCtrl.dismiss();
				
			} , (err:any) => {
				console.log(err);
			});
		});

	}
	getGalleryData(id){
		this.navctrl.navigateForward(['gallerydetails' ,{galleryId : id} ]);
	}

	getRiceType(event){
		this.riceTypeAvailable = event.detail.value;
		
	}
}