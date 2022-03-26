import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {

	messages = [];
	lastSentMessage = [];
	messageInput: string;
	isFocus: boolean;
	adminId = 1;
	additionalMessages:any;
	selectedUser:any;
	myId:any;
	myName:any;
	newMessages:any = [];
	newRecMessage:any = [];


	@ViewChild(IonContent, { read: IonContent, static: false }) myContent: IonContent;

	constructor(public navCtrl:NavController, public location:Location,public restAPI:RestService,public compSer:ComponentsService) { }
	ionViewDidEnter(){
		this.myId = localStorage.getItem('id'),
		this.myName = localStorage.getItem('name'),
		this.selectedUser = localStorage.getItem('selectedChatUserId')

		this.getMessages();
		this.ScrollToBottom();
		
		let ele = this;
		this.compSer.sendMessage.subscribe( function(message){
			// ele.push({
			// 	'isSender' : true,
			// 	'avatar' : 'assets/img/avatars/5.jpg',
			// 	'type' : 'text',
			// 	'body' : message,
			// 	'timestamp' : 'May 2, 2020 9:48 AM' 
			// });
			ele.getMessages();
		});

		this.compSer.newRecieveMessageForUser.subscribe( function(message) {			
			document.getElementById('refresh').click();
			ele.getMessages();
		} );

		this.ScrollToBottom();
	}
	getMessages(){
		this.restAPI.getMessages(localStorage.getItem('id') , 1).then((res:any) =>{
			this.additionalMessages = res.data;
			// for (let i = 0; i < res.data.length; i++) {
			// 	if(res.data[i].from == localStorage.getItem('id')){
			// 		this.messages.push({
			// 			'isSender' : true,
			// 			'avatar' : 'assets/img/avatars/5.jpg',
			// 			'type' : 'text',
			// 			'body' : res.data[i].message,
			// 			'timestamp' : 'May 2, 2020 9:48 AM' 
			// 		});
			// 	}else{
			// 		this.messages.push({
			// 			'isSender' : false,
			// 			'avatar' : 'assets/img/avatars/5.jpg',
			// 			'type' : 'text',
			// 			'body' : res.data[i].message,
			// 			'timestamp' : 'May 2, 2020 9:48 AM' 
			// 		});
			// 	}
			// }
			this.ScrollToBottom();
		});
	}
	ngOnInit() {
		// this.restAPI.getMessages(localStorage.getItem('id') , 1).then((res:any) =>{
		// 	for (let i = 0; i < res.data.length; i++) {
		// 		if(res.data[i].from == localStorage.getItem('id')){
		// 			this.messages.push({
		// 				'isSender' : true,
		// 				'avatar' : 'assets/img/avatars/5.jpg',
		// 				'type' : 'text',
		// 				'body' : res.data[i].message,
		// 				'timestamp' : 'May 2, 2020 9:48 AM' 
		// 			});
		// 		}else{
		// 			this.messages.push({
		// 				'isSender' : false,
		// 				'avatar' : 'assets/img/avatars/5.jpg',
		// 				'type' : 'text',
		// 				'body' : res.data[i].message,
		// 				'timestamp' : 'May 2, 2020 9:48 AM' 
		// 			});
		// 		}
		// 	}
		// });

		// let ele = this.messages;
		// this.compSer.sendMessage.subscribe( function(message){
		// 	ele.push({
		// 		'isSender' : true,
		// 		'avatar' : 'assets/img/avatars/5.jpg',
		// 		'type' : 'text',
		// 		'body' : message,
		// 		'timestamp' : 'May 2, 2020 9:48 AM' 
		// 	});
		// });
	}
  
	toggleFocus(isFocus: boolean) {
	  this.isFocus = isFocus;
	}
  
	nl2br(text: string) {
	  if (!text) return text;
  
	  return text.replace(/\n/ig, '<br>');
	}
	back(){
		this.location.back();
	}

	ScrollToBottom() {
		setTimeout(() => {
			this.myContent.scrollToBottom(300);
		}, 1000);
	}

	sendMessage(){
		// this.newMessage = '0';
		let latestMessage = this.messageInput;
	
		let formData = {
			message: this.messageInput,
			from : localStorage.getItem('id'),
			to : 1
		}
		this.messageInput = '';			
		this.ScrollToBottom();
	
		this.restAPI.sendMessage(formData).then((res:any) => {
			// this.compSer.sendMessage.next(this.messageInput);
			this.messageInput = '';
			
			this.ScrollToBottom();
		} , (err:any) => {
			if( err.status == 200 ){
				this.messageInput = '';
				this.compSer.sendMessage.next(latestMessage);
				this.ScrollToBottom();
			}else{
				this.restAPI.presentToast('Something went wrong..');
			}
		});
	}
}