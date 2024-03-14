import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
	public hasMessage: any = 0;
	public isUserExpire: any = 'true';
	public isCurrentUser: any = 'false';
	public chatStatus: any;
	public apptype: any;
	public seledctedRole: any;
	public news: any;
	public route: any;
	public newsWidth: any = '100%';

	constructor(public compSer: ComponentsService, public navCtrl: NavController, public menuCtrl: MenuController, public restApi: RestService, public ModelCtrl: ModalController, public toastCtrl: ToastController, private router: Router) {
		this.route = this.router.url;
		this.getNewsRunner()


		this.compSer.hasMessage.subscribe((data) => {
			if (data == 1) {
				// this.hasMessage = 1;
				document.getElementById('clickButton').click();
			} else {
				this.hasMessage = 0;
			}
		});

		this.compSer.isUserExpired.subscribe((res: any) => {
			this.isUserExpire = res;
			if (document.getElementById('clickButtonforPayment') != undefined) {
				document.getElementById('clickButtonforPayment').click();
			}

			if (localStorage.getItem('apptype') == 'USD') {
				this.apptype = localStorage.getItem('apptype');
				this.seledctedRole = localStorage.getItem('usd_role');
			} else {
				this.apptype = localStorage.getItem('apptype');
				this.seledctedRole = localStorage.getItem('role');
			}

			console.log(this.seledctedRole);
			console.log(this.apptype);
			// this.getNewsRunner()
		});

		this.getChatStatus();
		setTimeout(() => {
			this.apptype = localStorage.getItem('apptype');
			console.log(this.apptype);

		}, 1000)
	}

	ionViewDidEnter() {
		this.apptype = localStorage.getItem('apptype');
		console.log(this.apptype);
	}

	updateNotification() {
		this.hasMessage = this.hasMessage + 1;
	}

	ngOnInit() {
		if (localStorage.getItem('apptype') == 'USD') {
			this.seledctedRole = localStorage.getItem('usd_role');
		} else {

			this.seledctedRole = localStorage.getItem('role');
		}
	}
	async showChatUnavailableModal() {
		let presentToast = await this.toastCtrl.create({
			message: "No chat executive is available right now , Please contact later.",
			duration: 4000,
			position: 'bottom'
		});
		presentToast.present();
	}

	goTo(page) {
		// this.compSer.compareTwoDates(localStorage.getItem('expired_on'));
		if (localStorage.getItem('apptype') == 'OTHER') {
			this.navCtrl.navigateRoot(page, { animationDirection: 'forward' });
		} else {
			if (localStorage.getItem('isExpired') == 'false') {
				this.navCtrl.navigateRoot(page, { animationDirection: 'forward' });
			} else {
				this.navCtrl.navigateRoot('planpage', { animationDirection: 'forward' });
			}
		}

		if (localStorage.getItem('transaction_id') == undefined || localStorage.getItem('transaction_id') == null) {
		} else {

		}
	}

	clickButtonforPayment() {
		this.isCurrentUser = this.isUserExpire;
	}

	goToBids() {
		this.navCtrl.navigateForward('mybids');
	}

	goToChat() {
		this.restApi.getChatStatus().then((res: any) => {
			this.chatStatus = res.data;
			this.chat();
		}, (err: any) => {
		});
	}

	openModel() {
		this.compSer.reRenderSideMenu.next()
		this.menuCtrl.enable(true);
		this.menuCtrl.open();
	}

	chat() {
		this.navCtrl.navigateForward(['chat-detail']);
	}

	getChatStatus() {
		this.restApi.getChatStatus().then((res: any) => {
			this.chatStatus = res.data;
		}, (err: any) => {
		});
	}

	getChatCount() {
		this.restApi.getChatCount().then((res: any) => {
			this.hasMessage = res.data;
		}, (err: any) => {

		});
	}
	getNewsRunner() {
		this.restApi.getNewsRunner().then((res: any) => {
			console.log(this.apptype)
			console.log(res.data)
			if (localStorage.getItem('apptype') == 'USD') {
				this.news = res.data['usd'][0].title;
				this.newsWidth = (this.news.length * 8) + 'px';
			} else {
				this.news = res.data['inr'][0].title;
				this.newsWidth = (this.news.length * 8) + 'px';
			}

		}, (err: any) => {

		});
	}

	async showPaymentModel() {
		this.compSer.showPaymentModal.next();
	}
}