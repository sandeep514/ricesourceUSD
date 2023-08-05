import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
// import { ImagePicker } from "@awesome-cordova-plugins/image-picker/ngx";

import { File } from "@ionic-native/file/ngx";
import { ActionSheetController } from "@ionic/angular";
import { Camera , CameraOptions} from '@ionic-native/camera/ngx';

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
  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50,
  };
  constructor(
    public apiser: RestService,
    public location: Location,
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    public file: File,
    private camera: Camera 
  ) {}

  ngOnInit() {
    this.getData();
    this.getSellerINRPacking();
  }

  selectedWand(selectedWantDetail) {
    this.selectedGrade = selectedWantDetail.id;
    console.log(selectedWantDetail);
  }
  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        this.croppedImagepath = "data:image/jpeg;base64," + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }

  // async selectImage() {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: "Select Image source",
  //     buttons: [
  //       {
  //         text: "Load from Library",
  //         handler: () => {
  //           this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
  //         },
  //       },
  //       {
  //         text: "Use Camera",
  //         handler: () => {
  //           this.pickImage(this.camera.PictureSourceType.CAMERA);
  //         },
  //       },
  //       {
  //         text: "Cancel",
  //         role: "cancel",
  //       },
  //     ],
  //   });
  //   await actionSheet.present();
  // }
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
