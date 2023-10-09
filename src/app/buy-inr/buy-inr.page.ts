import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { LoadingController, NavController } from "@ionic/angular";
import { Location } from "@angular/common";
import { ImagePicker } from "@ionic-native/image-picker/ngx";
import { FileChooser } from "@ionic-native/file-chooser/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";

import {
	FileTransfer,
	FileUploadOptions,
	FileTransferObject,
} from "@ionic-native/file-transfer/ngx";

import { File } from "@ionic-native/file/ngx";
import { ActionSheetController } from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "app-buy-inr",
	templateUrl: "./buy-inr.page.html",
	styleUrls: ["./buy-inr.page.scss"],
})
export class BuyInrPage implements OnInit {
	quality: any;
	quantity: any;
	offerPrice: any;
	uncookedFile: any;
	cookedImageFile: any;
	packageImageFile: any;
	warehouselocation: any;
	validDays: any = 1;
	party: any = localStorage.getItem("name");
	mobile: any = localStorage.getItem("mobile");
	remarks: any = "";
	riceQualityType: any;
	riceQualityData: any;
	port: any;
	ports: any;
	selectedPackageData: any;
	changePackingType: any;
	portName: any;
	selectedQualityType: any;
	selectedQualityTypeInt: any;
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
	buyerPackingList: any = "";
	croppedImagepath = "";
	croppedBagImagepath = "";
	croppedUncookedImagepath = "";
	croppedCookedImagepath = "";
	fileTransfer = "";
	contactperson = "";
	contactMobile = "";
	isLoading = false;
	changedBuyerPackingType = "0";
	additionalinfo = "";

	imagePickerOptions = {
		maximumImagesCount: 1,
		quality: 50,
	};
	constructor(
		public apiser: RestService,
		public location: Location,
		public navCtrl: NavController,
		public actionSheetController: ActionSheetController,
		public transfer: FileTransfer,
		public file: File,
		public filechooser: FileChooser,
		public filePath: FilePath,
		public httpClient: HttpClient,
		public loadCTRL : LoadingController,
		private camera: Camera // public imgPicker: ImagePicker
	) { }
	ngOnInit() {
		this.getData();
		this.getSellerINRPacking();
		this.getBuyerINRPacking();
	}

	selectedWand(selectedWantDetail) {
		this.selectedGrade = selectedWantDetail.id;
		console.log(selectedWantDetail);
	}
	packageImage(event) {
		this.packageImageFile = event.target.files[0];
		console.log(this.packageImageFile);
		console.log(event.target.files[0]);
		// this.croppedImagepath = photo;
		// this.imgPicker.getPictures(this.imagePickerOptions).then((res) => {
		// 	console.log(res)
		// }).catch((err) => {
		// 	console.log(err);
		// });
	}
	pickBagImage(sourceType) {
		const options: CameraOptions = {
			quality: 100,
			sourceType: sourceType,
			destinationType: this.camera.DestinationType.FILE_URI, // imageURL
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
		};
		this.camera.getPicture(options).then(
			(imageData) => {
				this.croppedBagImagepath = "data:image/jpeg;base64," + imageData;
				this.uploadImage(imageData, "https://snjtradelink.com/staging/public/api/submit/sell/query");
			},
			(err) => {
				// Handle error
			}
		);
	}
	getFile() {

	}
	pickUncookedImage(event) {
		this.uncookedFile = event.target.files[0];
		// console.log(photo);
		// const options: CameraOptions = {
		//   quality: 100,
		//   sourceType: sourceType,
		//   destinationType: this.camera.DestinationType.DATA_URL,
		//   encodingType: this.camera.EncodingType.JPEG,
		//   mediaType: this.camera.MediaType.PICTURE,
		// };
		// this.camera.getPicture(options).then(
		//   (imageData) => {
		//     // imageData is either a base64 encoded string or a file URI
		//     this.croppedUncookedImagepath = "data:image/jpeg;base64," + imageData;
		//   },
		//   (err) => {
		//     // Handle error
		//   }
		// );
	}
	pickCookedImage(event) {
		this.cookedImageFile = event.target.files[0];
		// console.log(photo);
		// const options: CameraOptions = {
		//   quality: 100,
		//   sourceType: sourceType,
		//   destinationType: this.camera.DestinationType.DATA_URL,
		//   encodingType: this.camera.EncodingType.JPEG,
		//   mediaType: this.camera.MediaType.PICTURE,
		// };
		// this.camera.getPicture(options).then(
		//   (imageData) => {
		//     // imageData is either a base64 encoded string or a file URI
		//     this.croppedCookedImagepath = "data:image/jpeg;base64," + imageData;
		//   },
		//   (err) => {
		//     // Handle error
		//   }
		// );
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

	uploadImage(imagePath: string, serverUrl: string) {


		const fileTransfer: FileTransferObject = this.transfer.create();

		const options = {
			fileKey: "file",
			fileName: "my_image.jpg",
			mimeType: "image/jpeg",
			params: {}, // Any additional parameters to send with the request
		};

		fileTransfer
			.upload(imagePath, serverUrl, options)
			.then((data) => {
				console.log("Image uploaded successfully:", data);
			})
			.catch((error) => {
				console.error("Error uploading image:", error);
			});
	}
	async save() {
		this.apiser.presentLoader('Please wait...')
		if(
			this.selectedQualityTypeInt == undefined ||
			this.selectedQualityTypeInt == 'undefined' ||
			this.selectedQualityTypeInt == '' ||
			this.quality == undefined ||
			this.quality == 'undefined' ||
			this.quality == '' ||
			this.qualityForm == undefined ||
			this.qualityForm == 'undefined' ||
			this.qualityForm == '' ||
			this.selectedGrade == undefined ||
			this.selectedGrade == 'undefined' ||
			this.selectedGrade == '' ||
			this.changedBuyerPackingType == undefined ||
			this.changedBuyerPackingType == 'undefined' ||
			this.changedBuyerPackingType == '' ||
			this.changePackingType == undefined ||
			this.changePackingType == 'undefined' ||
			this.changePackingType == '' ||
			this.quantity == undefined ||
			this.quantity == 'undefined' ||
			this.quantity == '' ||
			this.additionalinfo == undefined ||
			this.additionalinfo == 'undefined' ||
			this.additionalinfo == ''
		){
			setTimeout(() => {
				this.loadCTRL.dismiss();
				this.apiser.dismissLoader();
			} , 1000)
			this.apiser.presentToast('All field are required...');
			return false;
		}else{
			const headers = {
				enctype: "multipart/form-data;",
				Accept: "application/json",
			};

			let formData = new FormData();

			formData.append("_method", "PATCH");
			formData.append("selectedQualityTypeInt", this.selectedQualityTypeInt);
			formData.append("quality", this.quality);
			formData.append("qualityForm", this.qualityForm);
			formData.append("selectedGrade", this.selectedGrade);
			formData.append("changePackingType", this.changedBuyerPackingType);
			formData.append("packing", this.changePackingType);
			formData.append("quantity", this.quantity);
			formData.append("additionalinfo", this.additionalinfo);

			let posteddata = {
				method: "POST",
				body: formData,
			};
			fetch("https://snjtradelink.com/staging/public/api/submit/buy/query", posteddata).then((res) => {
				setTimeout(() => {
					this.apiser.presentToast('Query updated successfully...');
					this.loadCTRL.dismiss();
					this.apiser.dismissLoader();
				}, 1000)
			}).catch((err) => {
				setTimeout(() => {
					this.loadCTRL.dismiss();
					this.apiser.dismissLoader();
				}, 1000)
			});
			
		}
		return false;
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
	getBuyerINRPacking() {
		this.apiser.getBuyerINRPacking().then(
			(res: any) => {
				// this.riceWand = res.data;
				console.log(res.data);
				this.buyerPackingList = res.data;
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

		this.selectedQualityTypeInt = selectedQualityTypeInit;

		this.getCategoryQualities(selectedQualityTypeInit);
		this.riceQualityDataSelectedArray =
			this.riceQualityDataArray[data.detail.value.toLowerCase()];
		// this.selectedPackageData =
		//   this.riceQualityData[data.detail.value.toLowerCase()];
	}

	changeQuality(data) {
		console.log(data);
		this.quality = data.detail.value;
		this.getCategoryQualitiesForm(data.detail.value);
		console.log(this.quality);
		this.onlyRiceName.forEach((data) => {
			console.log(data);
		});
	}
	textareaMaxLengthValidation() {
		console.log(this.quantity.toString());
		console.log(this.quantity.length);
		if (this.quantity.length > 5) {
			this.quantity = this.quantity.slice(0, 5);
		}
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
	changeGrade(data) {
		this.selectedGrade = data.detail.value;
		console.log(data);
	}

	changePacking(data) {
		let unprocessdata = data.detail.value.split("_");
		this.changePackingType = unprocessdata[0];
		this.selectedPackageName = unprocessdata[1];
		console.log(this.changePackingType);
		console.log(this.selectedPackageName);
	}

	changeBuyerPackingType(event) {
		console.log(event.detail.value);
		this.changedBuyerPackingType = event.detail.value;
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
