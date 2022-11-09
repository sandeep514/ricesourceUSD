import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../rest.service';
import { BrokLoginComponent } from '../brok-login/brok-login.component';
import { ComponentsService } from '../components.service';
import * as $ from 'jquery';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { ContactmodalPage } from '../contactmodal/contactmodal.page';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { VersionmodalPage } from '../versionmodal/versionmodal.page';

@Component({
  selector: "app-priceusd",
  templateUrl: "./priceusd.page.html",
  styleUrls: ["./priceusd.page.scss"],
})
export class PriceusdPage implements OnInit {
	@ViewChild(IonContent, { read: IonContent, static: false })
	myContent: IonContent;

	public scrollLength: any = 0;
	public prices: any;
	public basmatiColumns: any;
	public nonBasmatiColumns: any;
	public basmatiprice: any;
	public nonbasmatiprice: any;
	private scrollDepthTriggered = false;
	public scrollPosition = "top";
	private fullScrollHeight: any;
	public ImageGallerySlider: any;
	public lastupdatedDate: any;
	public appType: any;
	public height = true;
	public isNotifAvailable = 'false';

	latestDateBasmati: any;
	latestDateNONBasmati: any;
	defaultCIFPrice: any;
	oldDateBasmati: any;
	oldDateNONBasmati: any;
	selectedBasmatiState: any = "punjab_haryana";
	selectedNONBasmatiState: any = "punjab_haryana";
	riceTypeData: any = "price";
	riceUserType: any;
	myVar: any;
	imagePrefix: any;
	slideOpts = {
		initialSlide: 0,
		slidesPerView: 3,
		spaceBetween: 1,
		freeMode: true,
		pagination: false,
		speed: 600,
		autoplay: true,
		loop: true,
	};
	username: any;
	userFirstName: any;
	basmatiState: any;
	NONbasmatiState: any;
	basmatiSt: any = "punjab_haryana";
	nonbasmatists: any = "punjab_haryana";
	currentPaidStatus: any;
	restDays:any = 0;
	listBasmatiStates:any;
	listNONBasmatiStates:any;
	firstBasmatiState:any;
	defalutPort:any;
	USDActive:any;
	INRActive:any;

	constructor(public platform: Platform,public restService: RestService,public componentService: ComponentsService,public modalController: ModalController,public navCtrl: NavController,public route: Router ,public versionMdel : VersionmodalPage) {
		

		// this.componentService.compareTwoDates( localStorage.getItem('expired_on') );
		if( localStorage.getItem('isUserActivatedUSD') == '0' ){
			this.navCtrl.navigateRoot('planpage')
		}
		if( localStorage.getItem('isExpired') == 'true' ){
			this.navCtrl.navigateRoot( 'planpage', { animationDirection : 'forward' } );
		}

		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		var todayDate = mm + '/' + dd + '/' + yyyy;

		var ExpiredDate = new Date(localStorage.getItem('expired_on'));
		var Expireddd = String(ExpiredDate.getDate()).padStart(2, '0');
		var Expiredmm = String(ExpiredDate.getMonth() + 1).padStart(2, '0'); //January is 0!
		var Expiredyyyy = ExpiredDate.getFullYear();
		var ExpiredDateDate = Expiredmm + '/' + Expireddd + '/' + Expiredyyyy;
		
		this.componentService.isUserExpired.subscribe((res:any) => {
			this.componentService.differanceTwoDate(todayDate ,ExpiredDateDate ).then((res:any) => {
				this.restDays = res;
			} );
		} );

		this.componentService.isUserExpired.subscribe((res:any) => {
			this.currentPaidStatus = res;
			if(localStorage.getItem('apptype') == 'USD'){
				this.appType = "usd";
			}else{
				this.appType = 'other'
			}
			setTimeout(() => {
				// document.getElementById('getCurrentStatus').clic k();
			} , 3000);
		});
		this.getVersion();
		// this.fetchRiceForm()
		if(localStorage.getItem('apptype') == 'USD'){
			this.appType = "usd";
		}else{
			this.appType = 'other'
		}
	}

	
	doRefresh(event) {
		this.componentService.presentLoading().then(() => {
			setTimeout(() => {
				this.refresh();
				event.target.complete();
				this.componentService.loadingController.dismiss();
			}, 2000);
		})
		
	}

	ionViewDidLoad(){
		if(localStorage.getItem('apptype') == 'USD'){
			this.appType = "usd";
		}else{
			this.appType = 'other'
		}
		this.componentService.isUserExpired.subscribe((res:any) => {
			this.currentPaidStatus = res;
			
			setTimeout(() => {
				document.getElementById('getCurrentStatus').click();
			} , 1000);
		});

		this.componentService.isUserExpired.subscribe((res:any) => {
			this.currentPaidStatus = res;
			
			setTimeout(() => {
				document.getElementById('getCurrentStatus').click();
			} , 1500);
		});
	}

	
	
	
	getNotications(){
		this.navCtrl.navigateForward(['notifications']);
	}

	getCurrentPaidStatus(){
		this.currentPaidStatus = this.currentPaidStatus;
	}

	getPlans() {
		this.restService.checkUserPlan().then((res: any) => {
			localStorage.setItem("chartInt", "true");
			},(err: any) => {
				localStorage.setItem("chartInt", "false");
			}
		);
	}

	getGallery() {
		this.restService.getImagesForDashboard().then( (res: any) => {
			
		},(err: any) => {

		});
	}

	getBasmatiState() {
		
		this.componentService.presentLoading().then(() => {
			this.restService.getBasmatiState().then((res: any) => {
				if( res.data.length > 0 ){
					this.firstBasmatiState = res.data[0];
					setTimeout(() => {
						document.getElementById(this.firstBasmatiState).click();
					}, 1000);
				}
				this.basmatiState = res.data;
				this.componentService.loadingController.dismiss();
			},(err: any) => {
				this.componentService.loadingController.dismiss();
			});
		});
	}

	getNONBasmatiState() {
		this.restService.getNONBasmatiState().then(
		(res: any) => {
			this.NONbasmatiState = res.data;
		},
		(err: any) => {}
		);
	}

	getSlider() {
		this.restService.getGallery().then(
		(res: any) => {
			this.ImageGallerySlider = res.data.basmati;
		},
		(err: any) => {}
		);
	}

	changeState(data) {
		this.riceUserType = data;

		if (data.split("_").includes("percentage")) {
			$("#" + this.riceUserType).css({ display: "contents" });
			let classData = data.split("_");
			delete classData[classData.length - 1];

			$("#" + classData.join("_") + "price").css({ display: "none" });
		} else {
			$("#" + this.riceUserType).css({ display: "contents" });
			let classData = data.split("_");
			delete classData[classData.length - 1];

			$("#" + classData.join("_") + "percentage").css({ display: "none" });
		}
		this.removePopover();
	}

	getLoadedData(type) {
		return new Promise((resolve, reject) => {
		this.restService.getPrices(this.firstBasmatiState, type).then((res: any) => {

			let basmatiColumns = res.prices.basmati;
			if (basmatiColumns != undefined) {

				this.latestDateBasmati = res.latest;
				this.oldDateBasmati = res.oldDate;
				this.basmatiColumns = basmatiColumns;
				// 	basmatiColumns = Object.keys(basmatiColumns);
				// 	if (basmatiColumns.length != 0) {
				// 		basmatiColumns = Object.keys(res.prices.basmati[basmatiColumns[0]]);
				// 		this.basmatiColumns = basmatiColumns;
				// 	}
			}

			let nonBasmati = res.prices["non_basmati"];
			if (nonBasmati != undefined) {
			this.nonBasmatiColumns = nonBasmati;
			this.latestDateNONBasmati = res.oldDate;
			this.oldDateNONBasmati = res.latest;

			// nonBasmati = Object.keys(nonBasmati);
			// if (nonBasmati.length != 0) {
			// 	nonBasmati = Object.keys(res.prices.non_basmati[nonBasmati[0]]);
			// 	this.nonBasmatiColumns = nonBasmati;
			// }
			}
			this.myContent.getScrollElement().then((res) => {
			if (res != null) {
				this.fullScrollHeight = res.scrollHeight + 400;
			}
			});

			resolve(res.prices);

			this.getContentScrollLength();
		});
		});
	}

	ionViewDidLeave() {
		clearTimeout(this.myVar);
	}

	ionViewDidEnter() {
		this.isNotifAvailable = localStorage.getItem('isNewNotification');
		console.log(this.isNotifAvailable);
		console.log(this.route.url);
		
		if (this.route.url == "/priceusd") {

			// if (localStorage.getItem("popupCanceled") == null) {
				this.myVar = setTimeout(() => {
					this.showCOntactModal();
				}, 30000);
			// }

			this.componentService.cancelPopup.subscribe(() => {
				if (localStorage.getItem("popupCanceled") != "true") {
				this.myVar = setTimeout(() => {
					this.showCOntactModal();
				}, 30000);
				}
			});
		}
		
			this.getLoadedData("basmati").then((res: any) => {
				this.basmatiprice = res;
				
			} , (err:any) => {
			});
			this.getLoadedData("non-basmati").then((res: any) => {
				this.nonbasmatiprice = res;
			}, (err:any) => {
			});
			
		// });
		
		
		

		this.restService.CheckUserExpired().then( (res:any) => {

			// localStorage.setItem('isExpiryUSD' , res.isExpiry)
			// localStorage.setItem('ExpiryUSDDate' , res.data)
			
			if( localStorage.getItem('is_usd_active') != '0' ){
				localStorage.setItem('isExpiryUSD' , res.isExpiry)
				localStorage.setItem('ExpiryUSDDate' , res.data)
			}else{
				localStorage.setItem('isExpiryUSD' , 'true')
				localStorage.setItem('ExpiryUSDDate' , null)	
			}

			localStorage.setItem('expired_on' , res.data);
			let isUserExpiredStatus = localStorage.getItem('isExpiryUSD');

			
			if( isUserExpiredStatus == 'true' ){
				this.navCtrl.navigateForward(['prices']);
			}
			
			this.componentService.compareTwoDates(localStorage.getItem('expired_on'));
		} , (err:any) => {
		});

		this.imagePrefix = this.restService.imageUrl;
		this.getSlider();
		this.username = localStorage.getItem("name");
		this.userFirstName = localStorage.getItem("name")[0];

		this.getUSDPrices(localStorage.getItem('id'));
	}
	async showVersionModal() {
		const modal = await this.modalController.create({
		component: VersionmodalPage,
		cssClass: "contactModal",
		});
		return await modal.present();
	}
	getVersion() {
		this.restService.getLatestVersion().then((res:any) => {

			let elemem = this;
			if( '1.0.0' != res.data.version ){
				setTimeout(function(){ elemem.showVersionModal() }, 8000);
			}
		}  , (err) => {

		}).catch((err) => {

		});
	}

	refresh(){
		// this.getBasmatiState();
		// this.getNONBasmatiState();
		// this.getPlans();
		this.getUSDPrices(localStorage.getItem('id'));
	}
	
	ngOnInit() {
		this.platform.ready().then(() => {
			$("#brown_percentage").css({ display: "none" });
			$("#creamy_sella_percentage").css({ display: "none" });
			$("#golden_selle_percentage").css({ display: "none" });
			$("#raw_percentage").css({ display: "none" });
			$("#steam_percentage").css({ display: "none" });
			let api = this.restService;

			if( localStorage.getItem('is_usd_active') == '1'){
				this.USDActive = 1;
			}else{
				this.USDActive = 0;
			}

			if( localStorage.getItem('is_INR_active') == '1'){	
				this.INRActive = 1;
			}else{
				this.INRActive = 0;
			}
		});
	}
	async showPaymentModel(){
		this.componentService.showPaymentModal.next();
	}
	async showCOntactModal() {
		const modal = await this.modalController.create({
		component: ContactmodalPage,
		cssClass: "contactModal",
	});
		return await modal.present();
	}

	replaceText(column) {
		let text = column.replace("Basamti Rice", "");
		text = text.replace("Basmati Rice", "");
		return text;
	}

	toArray(answers: object) {
		return Object.keys(answers).map((key) => ({
		key,
		...answers[key],
		}));
	}

	parseText(text) {
		let arrayText = text.split("_");

		if (arrayText.length == 1) {
		return arrayText[0];
		} else {
		return arrayText[0] + " " + arrayText[1];
		}
	}

	loginProfile() {
		this.restService.presentModal(BrokLoginComponent).then(() => {});
	}

	scroll(direction, className) {
		if (direction == "left") {
		$("." + className).animate(
			{
			scrollLeft: "-=135px",
			},
			"slow"
		);
		} else {
		$("." + className).animate(
			{
			scrollLeft: "+=135px",
			},
			"slow"
		);
		}
	}

	getGalleryData(id) {
		this.navCtrl.navigateForward(["gallerydetails", { galleryId: id }]);
	}

	changeStateBasmati(event) {
		this.selectedBasmatiState = event.detail.value;
		this.selectedNONBasmatiState = event.detail.value;
		this.componentService.presentLoading().then(() => {
			this.fetchRiceForm(event.detail.value, "basmati").then((res: any) => {
				this.basmatiprice = res;

				console.log(res);
				
				this.componentService.loadingController.dismiss();
			});
		})

		if (event.detail.value == "kota_bundi") {
			$(".rajasthan").click();
		} else {
			$("." + event.detail.value).click();
		}
	}

	gotoProfile(){
		this.navCtrl.navigateForward(['profile']);
	}

	changeStateNONBasmati(event) {
		this.selectedNONBasmatiState = event.detail.value;
		this.selectedBasmatiState = event.detail.value;

		this.fetchRiceForm(event.detail.value, "non-basmati").then((res: any) => {
			// this.componentService.loadingController.dismiss();

			this.nonbasmatiprice = res;
		});
		if (event.detail.value == "kota_bundi") {
			$(".rajasthan").click();
		} else {
			$("." + event.detail.value).click();
		}
	}

	fetchRiceForm(event, type) {
		return new Promise((resolve, reject) => {
			// this.componentService.presentLoading().then(() => {
				this.restService.getPrices(event, type).then((res: any) => {
					

					let basmatiColumns = res.prices.basmati;
					this.latestDateBasmati = res.latest;

					if (basmatiColumns != undefined) {
						this.basmatiColumns = basmatiColumns;
					}

					let nonBasmati = res.prices["non_basmati"];
					if (nonBasmati != undefined) {
						this.nonBasmatiColumns = nonBasmati;
					}
					this.lastupdatedDate = res.latestDate;

					resolve(res.prices);
				} , (err:any) => {
					reject(err)
				});
			// });
		});
	}

	AddData(fob , defuaultValue){
		console.log(fob)
		// return (parseFloat(fob) + parseFloat(defuaultValue))
	}
	navToPort() {
		this.navCtrl.navigateForward(["port"]);
	}
	getContentScrollLength() {
		// setTimeout(() => {
		// 	var elmnt = document.getElementById("content");
		// 	var y = elmnt.scrollHeight;
		// 	var x = elmnt.scrollWidth;
		// }, 2500);
	}

	scrollDown() {
		this.scrollLength = this.scrollLength + this.fullScrollHeight / 4;

		if (this.fullScrollHeight >= this.scrollLength) {
		this.scrollPosition = "bottom";
		} else {
		this.scrollPosition = "top";
		}

		this.myContent.scrollToPoint(0, this.scrollLength);
	}

	scrollUp() {
		this.myContent.scrollToTop();
		this.scrollPosition = "top";
		this.scrollLength = 0;
	}

	async logScrolling($event) {
		if (this.scrollDepthTriggered) {
		return;
		}

		if ($event.target.localName != "ion-content") {
		return;
		}

		const scrollElement = await $event.target.getScrollElement();

		const scrollHeight =
		scrollElement.scrollHeight - scrollElement.clientHeight;

		const currentScrollDepth = $event.detail.scrollTop;
		this.scrollLength = currentScrollDepth;

		const targetPercent = 80;

		let triggerDepth = (scrollHeight / 100) * targetPercent;

		if (currentScrollDepth >= triggerDepth) {
		this.scrollPosition = "bottom";
		// this.scrollDepthTriggered = true;
		} else {
		this.scrollPosition = "top";
		// this.scrollDepthTriggered = false;
		}
	}

	getRiceDetails(riceType, state, riceName) {

		if( this.currentPaidStatus == 'true' ) {
			this.showPaymentModel();
		}else{

			let newRiceName = riceName.split(" ");
			newRiceName = newRiceName.join("_");
	
			localStorage.setItem("riceType",riceType.split(" ").join("_").toLowerCase());
			localStorage.setItem("state", state.split(" ").join("_").toLowerCase());
			localStorage.setItem("ricename", newRiceName);
	
			this.navCtrl.navigateForward(["ricechart"]);
		}
	}

	extractRiceName(riceName) {
		let riceNameArray = riceName.split(" ");
		if (
		riceNameArray[1] == "Basmati" ||
		riceNameArray[1] == "non-basmati" ||
		riceNameArray[1] == "rice" ||
		riceNameArray[1] == "Rice"
		) {
		return riceNameArray[0];
		}
		if (
		riceNameArray[2] == "Basmati" ||
		riceNameArray[2] == "non-basmati" ||
		riceNameArray[2] == "rice" ||
		riceNameArray[2] == "Rice"
		) {
		return riceNameArray[0] + " " + riceNameArray[1];
		}
		if (
		riceNameArray[3] == "Basmati" ||
		riceNameArray[3] == "non-basmati" ||
		riceNameArray[3] == "rice" ||
		riceNameArray[3] == "Rice"
		) {
		return riceNameArray[0] + " " + riceNameArray[1] + " " + riceNameArray[2];
		}
		return riceNameArray.join(" ");
	}

	convertToLowerCase(string) {
		return string.split(" ").join("_").toLowerCase();
	}
	
	convertToLowerCaseWithReplaceOfHighfn(string) {
		let str = string.split(" ").join("_").toLowerCase();
		let str2 = str.split("-").join("_");
		return str2.split("/").join("_");
	}
	
	checkIfValueIsNeg(newValue, oldValue) {
		let data = (newValue - oldValue) / 100;
		return Math.sign(data);
	}
	
	openPopup(key) {
		$(".popover").hide();
		$(".popoverley").show();
		$("#" + key).show();
	}
	
	removePopover() {
		$(".popover").hide();
		$(".popoverley").hide();
	}
	
	returnZero() {
		return 0;
	}

	getUSDPrices(userId){
		this.componentService.presentLoading().then(() => {
			this.restService.getUSDPrice(userId).then((res:any) => {
				this.listBasmatiStates = Object.values(res.basmatiPrices);
				this.listNONBasmatiStates = Object.values(res.nonbasmatiPrices);
				this.defaultCIFPrice = parseFloat(res.defaultCIFPrice);
				this.defalutPort = res.defalutPort;
				this.lastupdatedDate = res.latestDate;
				localStorage.setItem('defalutPort' , res.defalutPort);
				
				this.componentService.loadingController.dismiss();
			} , (err:any) => {
				this.componentService.loadingController.dismiss();
			} );
		})
		
	}

	// getPriceNONBasmatiState(){
	// 	this.restService.getPriceNONBasmatiState().then((res:any) => {
	// 		this.listBasmatiStates = res;
	// 	} , (err:any) => {
	// 	} );
	// }

	changeAppType(){

		localStorage.setItem('apptype' , 'OTHER');
		this.navCtrl.navigateForward(['prices']);
	}

	openQuality(id){
		this.navCtrl.navigateForward(['quality-details' , {riceQuality: id}]);
	}

	changeHeight(){
		if(this.height == true){
			this.height = false; 
		}else{
			this.height = true;
		}
	}
	gotoPlan(){
		this.navCtrl.navigateForward('planpage');
	}
}