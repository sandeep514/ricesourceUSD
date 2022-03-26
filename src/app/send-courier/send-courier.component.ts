import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-send-courier',
  templateUrl: './send-courier.component.html',
  styleUrls: ['./send-courier.component.scss'],
})
export class SendCourierComponent implements OnInit {

	public samples:any = [];
	public sentVia:any = [];
	public formData:any = {};
	public courierImage:any = 'https://via.placeholder.com/300x200&text=Select%20%20sample%20image';
	public selectedImage:any = '';
	constructor(
		public componentService: ComponentsService,
		public restService: RestService
	) { }

	  ngOnInit() {}
	  
	closeModal(){
		this.componentService.modalCtrl.dismiss();
	}

	getPicture(){
		this.componentService.takePicture().then((imageData)=>{
			let base64Image = 'data:image/jpeg;base64,' + imageData;
			this.courierImage = base64Image;
			this.selectedImage = base64Image;
		});
	}

	ionViewDidEnter(){
		this.componentService.presentLoading().then(()=>{
			this.restService.pubdingCourierSamples().then((res:any)=>{
				this.componentService.loadingController.dismiss();
				this.samples = res.samples;
				this.sentVia = res.sent_via;
			});
		});
	}

	saveCourier(){
		this.componentService.validateInput(this.formData,['date','details','sent_via','sample'])
			.then((isValid)=>{
				if(isValid){
					let samples = this.formData.sample;
					let arrangedSamples = {};
					samples.forEach((sample)=>{
						arrangedSamples[sample] = 'on';
					});
					this.formData['sample'] = arrangedSamples;
					this.componentService.presentLoading().then(()=>{
						this.restService.saveCourier(this.formData).then((res)=>{
							this.componentService.loadingController.dismiss();
							this.componentService.modalCtrl.dismiss();
							this.componentService.presentToastWithOptions('Courier saved successfully!','Success');
						})
					});
				}else{
					this.componentService.presentToastWithOptions('Please fill required fileds');
				}
			});
	}
}
