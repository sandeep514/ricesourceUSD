import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';
import * as $ from 'jquery';
import { ComponentsService } from '../components.service';

@Component({
	selector: 'app-port',
	templateUrl: './port.page.html',
	styleUrls: ['./port.page.scss'],
})
export class PortPage implements OnInit {
	listPortArea:any;
	listPort:any;
	listStates:any;
	areaData: any = "gujarat";
	selectedTransportState:any = '';
	selectedPortData:any = '';
	isNull:any = false;
	imagePre:any;
	states:any;
	
	constructor(public apiser: RestService,public navCtrl: NavController,public componentService: ComponentsService) {
		this.imagePre = this.apiser.imageUrl;
	}

	ngOnInit(){
		this.getTransportState();
		this.getTransportState();
		this.componentService.selectedPort.subscribe((data) => {
			this.selectedTransportState = data
		});
	}

	getTransportState(){
		this.componentService.presentLoading().then(() => {
			this.apiser.getTransportStates().then( (res:any) => {
				this.listStates = res.data;
				
				if( this.listStates.length > 0 ){
					let keys = Object.keys(this.listStates[0]);
					let StateKeys = keys[0];
					this.selectedTransportState = this.lowerCase(StateKeys);
					console.log(this.selectedTransportState)
				}
	
				let inLowerCase = this.selectedTransportState.toLowerCase();
				this.getDetails(inLowerCase);
				this.componentService.loadingController.dismiss();
				setTimeout(() => {
					this.componentService.loadingController.dismiss();
				},1000)
				setTimeout(() => {
					document.getElementById(inLowerCase).click();
					// document.getElementById(inLowerCase).classList.add('active');
				}, 1500);
			} , (err:any) => {
				this.componentService.loadingController.dismiss();
				setTimeout(() => {
					this.componentService.loadingController.dismiss();
				},1000)
				this.componentService.loadingController.dismiss();
			});
	
		});
	}

	ionViewDidEnter() {
		this.getList().then((res:any) => {
			this.getDataDetails(this.areaData);
		} , (err:any) => {
		});

		// setTimeout(() => {
		// }, 7000);
	}

	
	scroll(direction,className){
		if(direction == 'left'){
			$("."+className).animate({
					scrollLeft: "-=135px"
				},"slow");
		}else{
			$("."+className).animate(
				{
					scrollLeft: "+=135px"
				},
				"slow"
			);
		}
	}
	removePopover(){
		
	}
	getList() {
		return new Promise( (resolve , reject) => {
			this.apiser.listPorts().then((res: any) => {
				this.listPort = res.list;
				resolve('true');
			}, (err: any) => {
				reject('false');
			});
		});
	}

	Details(){
	}
	explodeString(string) {
		let arrayLength = string.split(' ').length;
		console.log(string.split(' ')[(arrayLength-1)])
		return string.split(' ')[(arrayLength-1)];
	}
	getPortDetails(area){
		this.selectedTransportState = '';
		let targetName = area.target.innerText;

		let smallArea = targetName.toLowerCase();
		this.componentService.selectedPort.next(smallArea);
		this.componentService.presentLoading().then( () =>{
			this.apiser.getPortDetails(smallArea).then((res:any) => {
				this.selectedPortData = res.data;
				if( res.data.length == 0 ){
					this.isNull = true;
				}else{
					this.isNull = false;
				}

				this.componentService.loadingController.dismiss();
				this.selectedTransportState = smallArea;
				console.log(smallArea);

				setTimeout(() => {
					this.componentService.loadingController.dismiss();
				}, 1000);
			} ,(err:any) =>{
				this.componentService.loadingController.dismiss();

				setTimeout(() => {
					this.componentService.loadingController.dismiss();
				}, 1000);
			});		
		});
	}

	getDetails(area){
		if( area.target != undefined ){
			this.componentService.presentLoading().then( () => {
				let targetName = area.target.innerText;
				let smallArea = targetName.toLowerCase();
				
				// document.getElementById(smallArea).click();
	
				this.apiser.getPortDetails(smallArea).then((res:any) => {
					this.selectedTransportState = smallArea;
					this.selectedPortData = res.data;
					this.componentService.loadingController.dismiss();
				} ,(err:any) =>{
					this.componentService.loadingController.dismiss();
				});
			})
		}
		// this.listPortArea = this.listPort[area.detail.value];
		// var element1 = document.getElementById('bundi');
		// // element1.classList.remove("active");

		// var element2 = document.getElementById('gujrat');
		// // element2.classList.remove("active");

		// var element3 = document.getElementById('haryana');
		// // element3.classList.remove("active");

		// var element4 = document.getElementById('madhya_pradesh');
		// // element4.classList.remove("active");

		// var element5 = document.getElementById('punjab');
		// // element5.classList.remove("active");

		// var element = document.getElementById(area);
		// // element.classList.add("active");
		// this.areaData = area.detail.value;
		
	}

	getDataDetails(area){
		this.listPortArea = this.listPort[area];
		this.areaData = area;	
	}

	closeModal(){
		this.navCtrl.back();
	}
	
	lowerCase(string){
		let str = string.toLowerCase();
		return str;
	}
	convertedToJson(string){
		console.log( typeof string );
		console.log( string.banner );
		if( string != undefined ){
			if( typeof string == 'object' ){
				return string.banner;
			}
		}
	}
}