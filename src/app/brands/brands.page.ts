import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { Location } from "@angular/common";
import { NavController } from "@ionic/angular";

@Component({
	selector: "app-brands",
	templateUrl: "./brands.page.html",
	styleUrls: ["./brands.page.scss"],
})
export class BrandsPage implements OnInit {
	quality: any;
	quantity: any;
	party: any = localStorage.getItem("name");
	mobile: any = localStorage.getItem("mobile");
	remarks: any = "";
	validDays: any = 0;
	riceQualityType: any;
	riceQualityData: any;
	port: any;
	ports: any;
	selectedPackageData: any;
	changePackingType: any;
	portName: any;
	selectedQualityType: any;
	selectedPackageName: any;
	riceQualityDataArray: any;
	riceQualityDataSelectedArray: any;
	isError: any = false;
	errorMessage: any = "";
	brandList: any = "";
	imagePre: any;

	constructor(
		public apiser: RestService,
		public location: Location,
		public navCtrl: NavController
	) {}

	ngOnInit() {
		this.imagePre = this.apiser.imageUrl;

		this.getData();
	}

	getData() {
		this.apiser.getBrandList().then((res: any) => {
			console.log("res");
			console.log(res);
			this.brandList = res.data;
			// this.riceQualityType = res.riceQualityType;
			// this.riceQualityData = res.riceQualityData;
			// this.riceQualityDataArray = res.riceQualityDataArray;
			// this.ports = res.ports;
			},(err: any) => {
				console.log(err);
			}
		);
	}

	back() {
		this.location.back();
	}

	getBrandDetail(details){
		console.log(" i am here");
		console.log(details);
		this.navCtrl.navigateForward(['brand-details' , {data:JSON.stringify(details)}]);
	}
}