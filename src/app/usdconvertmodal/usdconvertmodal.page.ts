import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-usdconvertmodal',
  templateUrl: './usdconvertmodal.page.html',
  styleUrls: ['./usdconvertmodal.page.scss'],
})
export class UsdconvertmodalPage implements OnInit {

  constructor(public modalctrl : ModalController,public componentserv: ComponentsService) { }

  ngOnInit() {
  }
  closeModal(){
		this.modalctrl.dismiss();
		localStorage.setItem('popupCanceledversion' , 'true');
		this.componentserv.cancelPopup.next('true');
	}
}
