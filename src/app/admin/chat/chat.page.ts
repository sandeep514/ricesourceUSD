import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ComponentsService } from 'src/app/components.service';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  	listChats:any;

    constructor(public navCtrl: NavController , public apiSer:RestService , public compSer : ComponentsService) { }

    ngOnInit() {

		// this.compSer.chatOpen.subscribe(() => {
		// 	this.apiSer.getChatPerson().then((res:any) => {
		// 		this.listChats = res.data;
		// 		// this.apiSer.loaderCtrl.dismiss();
		// 	});
		// });
	}
	
    ionViewDidEnter(){ 
		this.compSer.chatOpen.subscribe(() => {
			this.apiSer.getChatPerson().then((res:any) => {
				this.listChats = res.data;
				// this.apiSer.loaderCtrl.dismiss();
			});
		});
	}
	
	showChatDetails(userId){
		this.compSer.chatOpen.next();
		localStorage.setItem('selectedChatUserId' , userId);
		this.navCtrl.navigateForward([ 'admin/chatdetails' , {id : userId} ]);
    }
}