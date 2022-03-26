import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';
import * as $ from 'jquery';
import { Location } from '@angular/common';

@Component({
  selector: 'app-oceanfreights',
  templateUrl: './oceanfreights.page.html',
  styleUrls: ['./oceanfreights.page.scss'],
})
export class OceanfreightsPage implements OnInit {
	regions: any;
	data: any;
	countries: any;
	selectedResign: any;
	ports: any;

	constructor(public apiser: RestService,public navCtrl: NavController,public componentService: ComponentsService,public location:Location) {
	}

	ngOnInit(){
		this.getTransportState();
		
	}

	getTransportState(){
		this.componentService.presentLoading().then(() => {
			this.apiser.getOceanPorts().then( (res:any) => {
				this.componentService.loadingController.dismiss();
				this.regions = Object.values(res.region).sort();
				this.data = res.data;
				console.log(res.data);
			} , (err:any) => {
				this.componentService.loadingController.dismiss();

			});
		});
	}

	changecountry(resign){
		let resignValue = resign.detail.value;
		this.selectedResign = resignValue;
		this.countries = Object.keys(this.data[resignValue]).sort();
	}

	getPortList(resign){
		let region = this.selectedResign;
		let countryName = resign.detail.value;
		let portsOfCountry = this.data[region][countryName];
		this.ports = portsOfCountry;
		console.log(portsOfCountry);
	}
	close(){
		this.location.back();
	}

}