import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
	public hasMessage:any = 0;
	public isUserExpire:any = 'true';
	public isCurrentUser:any = 'false';
	public chatStatus:any;
	public apptype:any;
	public seledctedRole:any;
	
  	constructor(public compSer:ComponentsService ,public navCtrl: NavController, public menuCtrl:MenuController,public restApi: RestService,public ModelCtrl: ModalController, public toastCtrl: ToastController) {
		this.compSer.hasMessage.subscribe((data) => {
			if( data == 1 ){
				// this.hasMessage = 1;
				document.getElementById('clickButton').click();
			}else{
				this.hasMessage = 0;
			}
		});

		this.compSer.isUserExpired.subscribe((res:any) => {
			this.isUserExpire = res;
			if( document.getElementById('clickButtonforPayment') != undefined){
				document.getElementById('clickButtonforPayment').click();
			}

			if( localStorage.getItem('apptype') == 'USD' ){
				this.apptype = localStorage.getItem('apptype');
				console.log(localStorage.getItem('role') )
				this.seledctedRole = localStorage.getItem('usd_role');
			}else{
				console.log(localStorage.getItem('role') )
				this.apptype = localStorage.getItem('apptype');
				this.seledctedRole = localStorage.getItem('role');
			}	
		});
		this.getChatStatus();
		
		console.log(localStorage.getItem('apptype'))
		this.apptype = localStorage.getItem('apptype');
		console.log(localStorage.getItem('apptype'))
	}
	
	updateNotification(){
		this.hasMessage = this.hasMessage + 1 ;
	}

  	ngOnInit() {
		console.log(localStorage.getItem('apptype') );
		if( localStorage.getItem('apptype') == 'USD' ){
			console.log(localStorage.getItem('role') )
			this.seledctedRole = localStorage.getItem('usd_role');
		}else{
			console.log(localStorage.getItem('role') )

			this.seledctedRole = localStorage.getItem('role');
		}
		
		console.log(this.seledctedRole)
	}
	async showChatUnavailableModal(){
		let presentToast = await this.toastCtrl.create({
			message: "No chat executive is available right now , Please contact later.",
			duration: 4000,
			position: 'bottom'
		});
		presentToast.present();
	}

	goTo(page){
		// this.compSer.compareTwoDates(localStorage.getItem('expired_on'));
		console.log(localStorage.getItem('isExpired'));
		if( localStorage.getItem('isExpired') == 'false' ){
			this.navCtrl.navigateRoot( page, { animationDirection : 'forward' } );
		}else{
			this.navCtrl.navigateRoot( 'planpage', { animationDirection : 'forward' } );
		}
	}
	
	clickButtonforPayment(){
		this.isCurrentUser = this.isUserExpire;
	}

	goToBids(){
		this.navCtrl.navigateForward('mybids');
	}

	goToChat(){
		this.restApi.getChatStatus().then((res:any) => {
			this.chatStatus = res.data;
			this.chat();
		} , (err:any) => {
			console.log(err);
		});
	}

	openModel(){
		this.menuCtrl.enable(true);
		this.menuCtrl.open();
	}

	chat(){
		this.navCtrl.navigateForward(['chat-detail']);
	}

	getChatStatus(){
		this.restApi.getChatStatus().then((res:any) => {
			this.chatStatus = res.data;
			console.log(res);
		} , (err:any) => {
			console.log(err);
		});
	}

	getChatCount(){
		this.restApi.getChatCount().then((res:any) => {
			this.hasMessage = res.data;
		} , (err:any) => {

		});
	}

	async showPaymentModel(){
		this.compSer.showPaymentModal.next();
	}
}