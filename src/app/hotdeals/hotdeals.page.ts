import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
	selector: 'app-hotdeals',
	templateUrl: './hotdeals.page.html',
	styleUrls: ['./hotdeals.page.scss'],
})
export class HotdealsPage implements OnInit {
	public notifs:any;
	public todayDate:any;
	public imageUrl:any;
	public showImage:any = false;
	public ShownImage:any;

    constructor(public apiService: RestService,public location: Location,public navCtrl: NavController,public alertController: AlertController) { }

    ngOnInit() {
		const d = new Date();
		let year = d.getFullYear();
		let month = d.getMonth();
		let stringMonth = '';
		if((''+month).toString().length == 1){
			stringMonth = '0'+month;
		}

		let date = d.getDate();
		this.todayDate = year+'-'+stringMonth+'-'+date

		console.log(this.todayDate)

		this.imageUrl = this.apiService.imageUrl;
		this.getListBids()
    }
	
	getListBids(){
		let userid = localStorage.getItem('id');
		this.apiService.presentLoader('Fetching deals');
		this.apiService.getHotDeals(userid).then((res:any) => {
			this.notifs = res.data;
			setTimeout(() => {
				this.apiService.dismissLoader()
			} , 1000)
		} , (err:any) => {
			setTimeout(() => {
				this.apiService.dismissLoader()
			} , 1000)
		});
	}
	
	back(){
		this.location.back();
	}

	async acceptHotDeal(bidId){
		const alert = await this.alertController.create({
			message: 'Kindly confirm your interest',
			buttons: [
				
				{
					text: 'Yes',
					role: 'confirm',
					handler: () => {
						this.apiService.acceptHotDeal({'user_id' : localStorage.getItem('id') , 'bid_id' : bidId }).then( (res:any) => {
							this.getListBids();
							console.log(res)
						} , (err:any) => {
							console.log(err)
						});
					},
				},
				{
					text: 'Cancel',
					role: 'cancel',
					handler: () => {
						alert.dismiss();
					},
				}
			],
			cssClass: "confirm"
			
		});
		await alert.present()

		return false;

		
	}
	
	openImage(imagePrefix , destination , image){
		this.showImage = true;
		this.ShownImage = imagePrefix+''+destination+'/'+image;
	}

	closeImage(){
		this.showImage = false;
	}

}