import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-sample-entry',
  templateUrl: './sample-entry.component.html',
  styleUrls: ['./sample-entry.component.scss'],
})
export class SampleEntryComponent implements OnInit {

	public sampleImage:any = 'https://via.placeholder.com/300x200&text=Select%20%20sample%20image';
	public sellers:any;
	public qualities:any;
	public packings:any;
	public packingTypes:any;
	public formData:any = {};
	public selectedImage:any = "";
	public noOfBags:any = [{"value":"Enter Manually","key":"manual"},{"value":"Runing","key":"runing"}];
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
			this.sampleImage = base64Image;
			this.selectedImage = base64Image;
		});
	}

	ionViewDidEnter(){
		this.componentService.presentLoading().then(()=>{
			this.restService.sampleEntryPreLoaddata().then((res:any)=>{
				this.componentService.loadingController.dismiss();
				this.sellers = res.seller;
				this.qualities = res.quality;
				this.packings = res.packing;
				this.packingTypes = res.packing_type;
			});
		});
	}

	saveSample(){
		this.componentService.validateInput(this.formData,['date','seller','packing','packing_type','qty'])
		.then((isValid)=>{
			if(isValid){
				if(this.selectedImage == ''){
					this.componentService.presentToastWithOptions('Please capture the sample image!');
				}else{
					this.formData['image'] = this.selectedImage;
					this.componentService.presentLoading().then(()=>{
						this.restService.saveSampleEntry(this.formData).then((res)=>{
							this.componentService.loadingController.dismiss();
							this.componentService.presentToastWithOptions('Sample entry saved successfully!','Success');
							this.componentService.modalCtrl.dismiss();
						});
					});
				}
			}else{
				this.componentService.presentToastWithOptions('Please fill all fields!');
			}
		});
	}

	
}
