import { Injectable } from '@angular/core';
import { ModalController, PopoverController, LoadingController, ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PopoverComponent } from './popover/popover.component';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
	public loginUser = new Subject;
	public cancelPopup = new Subject; 
	public chartInterval = new Subject; 
	public sendMessage = new Subject;
	public newRecieveMessage = new Subject;
	public newRecieveMessageForUser : Subject<any[]> = new BehaviorSubject<any[]>([]); 
	public chatOpen : Subject<any[]> = new BehaviorSubject<any[]>([]); 
	public hasMessage = new Subject;
	public firePushNotif = new Subject;
	public isUserExpired = new Subject; 
	public showPaymentModal = new Subject; 
	public selectedPort = new Subject; 

	constructor(
		public modalCtrl: ModalController,
		public camera: Camera,
		public popoverController: PopoverController,
		public loadingController: LoadingController,
		public toastController: ToastController
	) {

	}

	async openModal(component){
		const modal = await this.modalCtrl.create({
			component: component
		});
		return await modal.present();
	}

	takePicture(){
		const options: CameraOptions = {
			quality: 20,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}
		return this.camera.getPicture(options);
	}

	async presentPopover(ev: any) {
		const popover = await this.popoverController.create({
		  component: PopoverComponent,
		  event: ev,
		  translucent: true
		});
		return await popover.present();
	}

	async presentLoading() {
		const loading = await this.loadingController.create({
		  message: 'Please wait...',
		});
		await loading.present();
	}

	async presentToastWithOptions(message, header='Error', position:any = 'top') {
		const toast = await this.toastController.create({
		  	header: header,
		  	message: message,
			position: position,
			duration: 2000
		});
		toast.present();
	}

	async validateInput(formData,requiredFields){
		let isValid = true;
		await requiredFields.forEach((key)=>{
			if(formData[key] != undefined && formData[key] != '' && formData[key] != null){
				if(typeof formData[key] === 'object'){
					if(Object.keys(formData[key]).length == 0){
						isValid = false;
					}
				}
			}else{
				isValid = false;
			}
		});
		return isValid;
	}

	compareTwoDates( date2 ){
		let todayDate = new Date();
		let expiredDate = new Date(date2);

		if( todayDate > expiredDate ){
			localStorage.setItem('isExpired' , 'true');
			this.isUserExpired.next('true');
		}else{
			localStorage.setItem('isExpired' , 'false');
			this.isUserExpired.next('false');
		}		
	}
	differanceTwoDate(todaydate , ExpiredDate){

		return new Promise((resolve , reject) => {
			var date1 = new Date(todaydate);
			var date2 = new Date(ExpiredDate);
			var start = Math.floor(date1.getTime() / (3600 * 24 * 1000));
			var end = Math.floor(date2.getTime() / (3600 * 24 * 1000));
			var daysDiff = end - start;
			resolve(daysDiff);
		});
		
	}

}