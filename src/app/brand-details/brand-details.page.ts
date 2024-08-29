import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: "app-brand-details",
  templateUrl: "./brand-details.page.html",
  styleUrls: ["./brand-details.page.scss"],
})
export class BrandDetailsPage implements OnInit {
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
  data: any;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    pagination: true
  };
  constructor(
    public apiser: RestService,
    public location: Location,
    public navCtrl: NavController,
    public ActRoute: ActivatedRoute
  ) {
    this.data = JSON.parse(this.ActRoute.snapshot.params.data).get_attachments;
    console.log(JSON.parse(this.ActRoute.snapshot.params.data).get_attachments)
    console.log(this.data);
  }

  ngOnInit() {
    this.imagePre = this.apiser.imageUrl;
    this.data = JSON.parse(this.ActRoute.snapshot.params.data).get_attachments;
    console.log(JSON.parse(this.ActRoute.snapshot.params.data).get_attachments)
    console.log(this.data);
    // this.getData();
  }

  getData() {
    this.apiser.getBrandList().then(
      (res: any) => {
        console.log("res");
        console.log(res);
        this.brandList = res.data;
        // this.riceQualityType = res.riceQualityType;
        // this.riceQualityData = res.riceQualityData;
        // this.riceQualityDataArray = res.riceQualityDataArray;
        // this.ports = res.ports;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  back() {
    this.location.back();
  }

  getBrandDetail(details) {
    console.log(" i am here");
    console.log(details);
    this.navCtrl.navigateForward(["brand-details", { data: details }]);
  }
}
