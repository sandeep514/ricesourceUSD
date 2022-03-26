import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-mill-status',
  templateUrl: './mill-status.component.html',
  styleUrls: ['./mill-status.component.scss'],
})
export class MillStatusComponent implements OnInit {

	public sellers:any = [];
	public formData:any = {};
  	constructor(public componentService: ComponentsService, public restService: RestService) { }

  	ngOnInit() {}

	closeModal(){
		this.componentService.modalCtrl.dismiss();
	}

	ionViewDidEnter(){
		this.componentService.presentLoading().then(()=>{
			this.restService.sampleEntryPreLoaddata().then((res:any)=>{
				this.componentService.loadingController.dismiss();
				this.sellers = res.seller;
			})
		});
	}

	saveMillStatus(){
		this.componentService.validateInput(this.formData,['date','remarks','seller','visit_status'])
			.then((isValid)=>{
				if(isValid){
					this.componentService.presentLoading().then(()=>{
						this.restService.saveMillStatus(this.formData).then((res)=>{
							this.componentService.loadingController.dismiss();
							this.componentService.loadingController.dismiss();
							this.componentService.presentToastWithOptions('Mill status saved successfully!','Success');
							this.componentService.modalCtrl.dismiss();
						})
					});
				}else{
					this.componentService.presentToastWithOptions('Please select required fileds');
				}
			});
		console.log(this.formData);
	}
}
