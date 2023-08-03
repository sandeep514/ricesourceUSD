import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { ImagePicker } from "@awesome-cordova-plugins/image-picker/ngx";

@Component({
  selector: "app-selling-inr",
  templateUrl: "./selling-inr.page.html",
  styleUrls: ["./selling-inr.page.scss"],
})
export class SellingINRPage implements OnInit {
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
  onlyRiceName: any;
  onlyRiceForms: any;
  riceWand: any;
  isError: any = false;
  errorMessage: any = "";
  qualityForm: any = "";
  selectedRiceFormAndName: any = "";
  selectedGrade: any = "";
  sellerPackingList: any = "";

  constructor(
    public apiser: RestService,
    public location: Location,
    public navCtrl: NavController,
    private imagePicker: ImagePicker
  ) {}

  ngOnInit() {
    this.getData();
    this.getSellerINRPacking();
  }

  selectedWand(selectedWantDetail) {
    this.selectedGrade = selectedWantDetail.id;
    console.log(selectedWantDetail);
  }
  showGallery(){
    let options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      maximumImagesCount: 1,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 400,
      height: 400,

      // quality of resized image, defaults to 100
      quality: 20,

      // output type, defaults to FILE_URIs.
      // available options are
      // window.imagePicker.OutputType.FILE_URI (0) or
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 0,
    };
    this.imagePicker.getPictures(options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          console.log("Image URI: " + results[i]);
        }
      },
      (err) => {}
    );
  }
  save() {
    this.isError = false;
    if (
      this.quality != undefined &&
      this.quantity != undefined &&
      this.party != undefined &&
      this.mobile != undefined &&
      this.portName != "" &&
      this.portName != undefined
    ) {
      this.apiser.presentLoader("Please wait...");

      let postedData = {
        selectedQualityType: this.selectedQualityType,
        quality: this.quality,
        changePackingType: this.changePackingType,
        quantity: this.quantity,
        validDays: this.validDays,
        portName: this.portName,
        party: this.party,
        mobile: this.mobile,
        remarks: this.remarks,
        user: localStorage.getItem("id"),
      };

      this.apiser.saveRiceQuery(postedData).then(
        (res: any) => {
          this.apiser.loaderCtrl.dismiss();

          this.apiser.presentToast("Query generated successfully.");
          this.navCtrl.navigateRoot(["thankyou"]);
        },
        (err: any) => {
          console.log(err);
        }
      );
    } else {
      this.isError = true;
      this.errorMessage = "Required fields are missing";
      console.log("validate fails");
      console.log("here");
    }
  }

  getData() {
    this.apiser.getDataForBuyer().then(
      (res: any) => {
        this.riceQualityType = res.riceQualityType;
        this.riceQualityData = res.riceQualityData;
        this.riceQualityDataArray = res.riceQualityDataArray;
        this.ports = res.ports;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getCategoryQualities(selectedQualityTypeInit) {
    this.apiser.getRiceQualities(selectedQualityTypeInit).then(
      (res: any) => {
        this.onlyRiceName = res.data;
        console.log(res.data);
        // this.getCategoryQualitiesForm(res.data);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getCategoryQualitiesForm(riceNameId) {
    this.apiser.getRiceQualitiesForms(riceNameId).then(
      (res: any) => {
        this.onlyRiceForms = res.data;

        console.log("res");
        console.log(this.onlyRiceForms);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getRiceWand() {
    console.log(this.quality);
    this.apiser.getRiceWand(this.quality).then(
      (res: any) => {
        this.riceWand = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getSellerINRPacking() {
    this.apiser.getSellerINRPacking().then(
      (res: any) => {
        // this.riceWand = res.data;
        console.log(res.data);
        this.sellerPackingList = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  changeQualityType(data) {
    this.selectedQualityType = data.detail.value;
    let selectedQualityTypeInit = 2;
    if (this.selectedQualityType == "BASMATI") {
      selectedQualityTypeInit = 1;
    }
    this.getCategoryQualities(selectedQualityTypeInit);
    this.riceQualityDataSelectedArray =
      this.riceQualityDataArray[data.detail.value.toLowerCase()];
    // this.selectedPackageData =
    //   this.riceQualityData[data.detail.value.toLowerCase()];
  }

  changeQuality(data) {
    console.log();
    this.quality = data.detail.value;
    this.getCategoryQualitiesForm(data.detail.value);
    console.log(this.quality);
  }

  changeQualityForm(data) {
    console.log();
    this.qualityForm = data.detail.value;
    // this.getCategoryQualitiesForm(data.detail.value);
    for (let i = 0; i < this.onlyRiceForms.length; i++) {
      if (this.onlyRiceForms[i].id == this.qualityForm) {
        this.selectedRiceFormAndName = this.onlyRiceForms[i];
        console.log(this.selectedRiceFormAndName);
      }
    }
    this.getRiceWand();
  }

  changePacking(data) {
    let unprocessdata = data.detail.value.split("_");
    this.changePackingType = unprocessdata[0];
    this.selectedPackageName = unprocessdata[1];
    console.log(this.changePackingType);
    console.log(this.selectedPackageName);
  }

  back() {
    this.location.back();
  }

  changePort(data) {
    console.log(data);
    let myData = data.detail.value.split("_");
    let selectedPortName = myData[0];

    let portValue = parseFloat(data.freight_25MT).toFixed(2);
    this.portName = selectedPortName;
  }
}
