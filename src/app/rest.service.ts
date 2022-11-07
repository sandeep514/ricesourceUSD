import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { ContactmodalPage } from './contactmodal/contactmodal.page';

@Injectable({
  providedIn: 'root'
})
export class RestService {
	public loading:any;

	// public APIURL:any = 'http://localhost/rice/rice_brokerage/public/api/';
	public APIURL:any = 'https://snjtradelink.com/staging/public/api/';
	public imageUrl = "https://snjtradelink.com/staging/public/";

	constructor(public http: HttpClient, public modalController: ModalController , public loaderCtrl:LoadingController,public toastCtrl:ToastController) { 
 
	}

	async presentLoader(message){
		this.loading = await this.loaderCtrl.create({
			message : message
		});
		await this.loading.present();
	}

	async presentToast(message){
		let toast = await this.toastCtrl.create({
			message: message,
			duration : 2000,
			position: "bottom"
		});
		toast.present();
	}

	dismissLoader(){
		this.loaderCtrl.dismiss();
	}
	//contactmodal
	
	login(userDetails){
		return new Promise((resolve,reject)=>{
			this.http.post(this.APIURL+'login',userDetails).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			})
		});
	}

	sampleEntryPreLoaddata(){
		let token = localStorage.getItem('token');
		return new Promise((resolve,reject)=>{
			this.http.get(this.APIURL+'pre-load-sample-data?api_token='+token).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			});
		});
	}

	getLatestNotifications(){
		let id = localStorage.getItem('id');
		return new Promise((resolve,reject)=>{
			this.http.get(this.APIURL+'get/user/notification/'+id).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			});
		});
	}

	getTransportStates(){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'get/transport/states').subscribe( (res:any) => {
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}

	saveSampleEntry(formData){
		let token = localStorage.getItem('token');
		return new Promise((resolve,reject)=>{
			this.http.post(this.APIURL+'sample/save?api_token='+token,JSON.stringify(formData)).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			});
		});
	}

	pubdingCourierSamples(){
		let token = localStorage.getItem('token');
		return new Promise((resolve,reject)=>{
			this.http.get(this.APIURL+'pending/courier/samples?api_token='+token).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			});
		});
	}

	listPorts(){
		let token = localStorage.getItem('token');
		return new Promise((resolve,reject)=>{
			this.http.get(this.APIURL +'list/port').subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			});
		});
	}

	getImagesForDashboard(){
		let token = localStorage.getItem('token');
		return new Promise((resolve,reject)=>{
			this.http.get(this.APIURL +'get/images/for/dashboard').subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			});
		});
	}

	saveCourier(formData){
		let token = localStorage.getItem('token');
		return new Promise((resolve,reject)=>{
			this.http.post(this.APIURL+'courier/save?api_token='+token,JSON.stringify(formData)).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			});
		});
	}

	saveMillStatus(formData){
		let token = localStorage.getItem('token');
		return new Promise((resolve,reject) => {
			this.http.post(this.APIURL+'millstatus/save?api_token='+token,JSON.stringify(formData)).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			});
		});
	}

	saveRiceQuery(formData){
		
		let token = localStorage.getItem('token');
		return new Promise((resolve,reject) => {
			this.http.post(this.APIURL+'add/rice/query?api_token='+token,JSON.stringify(formData)).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			});
		});
	}
	updateCounterStatus(formData){
		
		let token = localStorage.getItem('token');
		return new Promise((resolve,reject) => {
			this.http.post(this.APIURL+'update/counter/status?api_token='+token,JSON.stringify(formData)).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			});
		});
	}


	async presentModal(modalPage) {
		const modal = await this.modalController.create({
		  component: modalPage,
		  cssClass: 'my-custom-class'
		});
		return await modal.present();
	}
	
	getPrices(state , type){
		return new Promise((resolve,reject)=>{
			this.http.get(this.APIURL+'prices/'+state+'/'+type).subscribe((res)=>{
				resolve(res);
				console.log("jnk");
			},err=>{
				reject(err);
			});
		});
	}

	getChartData(state , riceType , rice , timePeriod){
		timePeriod = timePeriod.split(' ').join('_');

		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'get/price/'+btoa(state)+'/'+btoa(riceType)+'/'+btoa(rice)+'/'+btoa(timePeriod)).subscribe((res) => {
				resolve(res);
			} , (err:any) => {
				reject(err);
			});
		});
	}

	getPlans(){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'get/plans').subscribe((res:any) => {
			resolve(res);
		} , (err:any) => {
				reject(err);
			});
		});
	}

	checkUserPlan(){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'check/user/plan/'+localStorage.getItem('id')).subscribe((res:any) => {
				resolve(res.data);
			} , (err:any) => {
				reject(err);
			});
		});
	}

	addOrder(jsonData){
		let token = localStorage.getItem('token');
		return new Promise((resolve,reject)=>{
			this.http.post(this.APIURL+'save/order?api_token='+token,JSON.stringify(jsonData)).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			});
		});
	}

	getGallery(){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'get/gallery/list').subscribe((res) => {
				resolve(res);
			} , (err:any) => {
				reject(err);
			});
		});
	}
	
	getGalleryData(getGalleryData){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'get/gallery/details/'+getGalleryData).subscribe((res) => {
				resolve(res);
			} , (err:any) => {
				reject(err);
			});
		});
	}

	regsiterUser(formdata){
		let token = localStorage.getItem('token');
		return new Promise((resolve,reject) => {
			this.http.post(this.APIURL+'save/user?api_token='+token,JSON.stringify(formdata)).subscribe((res)=>{
				console.log(res);
				resolve(res);
			},err=>{
				console.log(err);
				reject(err);
			});
		});
	}

	updateUser(formdata){
		let token = localStorage.getItem('token');
		return new Promise((resolve,reject) => {
			this.http.post(this.APIURL+'update/user?api_token='+token,JSON.stringify(formdata)).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			});
		});
	}

	verifyUser(formdata){
		let token = localStorage.getItem('token');
		return new Promise((resolve,reject) => {
			this.http.post(this.APIURL+'verify/user?api_token='+token,JSON.stringify(formdata)).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			});
		});
	}
	
	sendOTP(number){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'send/otp/'+number).subscribe((res) => {
				resolve(res);
			} , (err:any) => {
				reject(err);
			});
		});
	}

	resendOTP(number){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'resend/otp/'+number).subscribe((res) => {
				resolve(res);
			} , (err:any) => {
				reject(err);
			});
		});
	}

	verifyOTP(number , otp){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'verify/otp/'+number+'/'+otp).subscribe((res) => {
				resolve(res);
			} , (err:any) => {
				reject(err);
			});
		});
	}

	changePassword(formData){
		let token = localStorage.getItem('token');
		return new Promise((resolve,reject) => {
			this.http.post(this.APIURL+'change/password?api_token='+token,JSON.stringify(formData)).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			});
		});
	}

	getBasmatiState(){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'get/basmati/state').subscribe((res) => {
				resolve(res);
			} , (err:any) => {
				reject(err);
			});
		});
	}
	
	getNONBasmatiState(){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'get/nonbasmati/state').subscribe((res) => {
				resolve(res);
			} , (err:any) => {
				reject(err);
			});
		});
	}

	getChartInterval(){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'get/chartinterval').subscribe((res) => {
				resolve(res);
			} , (err:any) => {
				reject(err);
			});
		});
	}
	
	sendMessage(userDetails){
		return new Promise((resolve,reject)=>{
			this.http.post(this.APIURL+'save/message',userDetails).subscribe((res)=>{
				console.log("jnhjkn");
				resolve(res);
			},err=>{
				console.log("lnhjnk");
				reject(err);
			})
		});
	}

	updateToken(id , token){
		return new Promise((resolve,reject)=>{
			this.http.post(this.APIURL+'update/user/token',JSON.stringify({id : id , user_token: token})).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			})
		});
	}

	getMessages(from  , to){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'get/message/'+from+'/'+to).subscribe((res) => {
				resolve(res);
			} , (err:any) => {
				reject(err);
			});
		});
	}

	getChatPerson(){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'get/message/contacts/list').subscribe((res) => {
				resolve(res);
			} , (err:any) => {
				reject(err);
			});
		});
	}

	getChatCount(){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'get/user/messages/count/'+localStorage.getItem('id')).subscribe((res) => {
				resolve(res);
			} , (err:any) => {
				reject(err);
			});
		});
	}
	
	CheckUserExpired(){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'check/user/expired/'+localStorage.getItem('id')).subscribe((res:any) => {
				resolve(res);
			} , (err:any) => {
				reject(err);
			});
		});
	}

	getPriceBasmatiState(){
		return new Promise((resolve , reject) => {
			this.http.get(this.APIURL+'get/price/states').subscribe( (res:any) => {
				console.log(res);
			} ,(err:any) => {
				console.log(err);
			});
		});
	}

	// getPriceNONBasmatiState(){
	// 	return new Promise((resolve , reject) => {
	// 		this.http.get(this.APIURL+'get/price/states').subscribe( (res:any) => {
	// 			console.log(res);
	// 		} ,(err:any) => {
	// 			console.log(err);
	// 		});
	// 	});
	// }

	getPortDetails(state){
		return new Promise((resolve , reject) => {
			this.http.get( this.APIURL+'get/port/details/'+state ).subscribe((res:any) =>{
				resolve(res);
			}, (err:any)=>{
				reject(err);
			});
		});
	}
	
	getUserPlanDetails(){
		return new Promise((resolve , reject) => {
			this.http.get( this.APIURL+'get/user/plan/'+localStorage.getItem('id') ).subscribe((res:any) =>{
				resolve(res);
			}, (err:any)=>{
				reject(err);
			});
		});
	}

	getChatStatus(){
		return new Promise((resolve , reject) => {
			this.http.get( this.APIURL+'get/chat/status' ).subscribe((res:any) =>{
				resolve(res);
			}, (err:any)=>{
				reject(err);
			});
		});
	}

	getLatestVersion(){
		return new Promise((resolve , reject) => {
			this.http.get( this.APIURL+'get/latest/version' ).subscribe((res:any) =>{
				resolve(res);
			}, (err:any)=>{
				reject(err);
			});
		});
	}

	getUSDPrice(userId){
		return new Promise((resolve , reject) => {
			this.http.get( this.APIURL+'get/usd/prices/'+userId ).subscribe((res:any) =>{
				resolve(res);
			}, (err:any)=>{
				reject(err);
			});
		});
	}
	
	getOceanPorts(){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'get/distinct/region').subscribe( (res:any) => {
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}

	getAllPorts(riceQualityId){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'get/all/ports/'+riceQualityId+'/'+localStorage.getItem('id')).subscribe( (res:any) => {
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}

	getDataForBuyer(){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'get/data/for/buyer').subscribe( (res:any) => {
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}

	getBuyerDetails(queryId){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'get/buyer/details/'+queryId).subscribe( (res:any) => {
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}

	
	saveUserBid(postedData){
		return new Promise((resolve,reject)=>{
			this.http.post(this.APIURL+'save/bid',JSON.stringify(postedData)).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			})
		});
	}
	getCalculatorDetails(){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'get/calculator/data').subscribe( (res:any) => {
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}
	
	saveUSDPrices(postedData){
		return new Promise((resolve,reject)=>{
			this.http.post(this.APIURL+'save/usd/prices',postedData).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			})
		});
	}
	
	addBidOnBuyerQuery(postedData){
		return new Promise((resolve,reject)=>{
			this.http.post(this.APIURL+'save/user/bid',postedData).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			})
		});
	}

	getMyBids(userid){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'get/my/bids/'+userid).subscribe( (res:any) => {
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}

	getBuyerList(){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'get/buyer/list').subscribe( (res:any) => {
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}

	getUSDPlan(){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'get/usd/plans').subscribe( (res:any) => {
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}

	getUSDCounties(){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'get/countries/list').subscribe( (res:any) => {
				
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}

	getBagVendors(){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'get/bag/vendors').subscribe( (res:any) => {
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}

	contact(){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'get/contact/details').subscribe( (res:any) => {
				
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}

	getHotDeals(userId){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'get/hot/deals/'+userId).subscribe( (res:any) => {
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}

	startTrialPeriod(userId){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'start/trial/period/'+userId).subscribe( (res:any) => {
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}

	updatePort(postedData){
		return new Promise((resolve,reject)=>{
			this.http.post(this.APIURL+'update/port',postedData).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			})
		});
	}
	acceptHotDeal(postedData){
		return new Promise((resolve,reject)=>{
			this.http.post(this.APIURL+'accept/hot/deal/notification',postedData).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			})
		});
	}

	updateUserPlan(postedData){
		return new Promise((resolve,reject)=>{
			this.http.post(this.APIURL+'payment/success',postedData).subscribe((res)=>{
				resolve(res);
			},err=>{
				reject(err);
			})
		});
	}

	userNotification(userId){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'user/notification/'+userId).subscribe( (res:any) => {
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}

	clearNotification(userId){
		return new Promise( (resolve , reject) => {
			this.http.get(this.APIURL+'clear/notification/'+userId).subscribe( (res:any) => {
				resolve(res);
			} ,(err:any) => {
				reject(err);
			});
		} );
	}
}