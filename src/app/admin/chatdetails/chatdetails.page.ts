import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import { ElementArrayFinder } from 'protractor';
import { ComponentsService } from 'src/app/components.service';
import { RestService } from 'src/app/rest.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-chatdetails',
  templateUrl: './chatdetails.page.html',
  styleUrls: ['./chatdetails.page.scss'],
})
export class ChatdetailsPage implements OnInit {

	messages:any = [];
	newMessages:any = [];
	recieveMessage:any = [];
	messageInput: string;
	isFocus: boolean;
	toChat:any;
	selectedUser:any;
	myId:any;
	additionalMessages:any;
	userDetails:any;
	userDetailsMobile:any;
	newMessage:any = '0';

	@ViewChild(IonContent, { read: IonContent, static: false }) myContent: IonContent;

  constructor(public navCtrl:NavController, public restAPI: RestService, public ActRoute:ActivatedRoute,public compSer:ComponentsService) { }
	ionViewDidEnter(){
		this.myId = localStorage.getItem('id');
		this.selectedUser = localStorage.getItem('selectedChatUserId');

		this.getMessages();
		this.ScrollToBottom();
		
		let ele = this;
		this.compSer.sendMessage.subscribe( function(message){
			ele.getMessages();
		});
		
		let elem = this;
		this.compSer.newRecieveMessage.subscribe( (message:any)=> {
			document.getElementById('refresh').click();
			ele.getMessages();
		});
	}
	parseInt(string){
		return parseInt(string);
	}
	newRecMessage(message){
		let ele = this.recieveMessage;
		ele.push({
			'isSender' : true,
			'avatar' : 'assets/img/avatars/5.jpg',
			'type' : 'text',
			'body' : message,
			'timestamp' : 'May 2, 2020 9:48 AM' 
		});
	}

	ScrollToBottom() {
		setTimeout(() => {
			this.myContent.scrollToBottom(300);
		}, 1000);

	}
	
	clickme(){
		this.newMessage = "jhg";
	}
	
	getMessages(){
		this.restAPI.getMessages(localStorage.getItem('id') , this.toChat).then((res:any) =>{
			this.additionalMessages = res.data;
			this.userDetails = res.from.name+','+res.from.mobile;
			this.userDetailsMobile = res.from.mobile;
			console.log(this.userDetails);
			this.ScrollToBottom();
		});
	}

	ngOnInit() {
		this.toChat = this.ActRoute.snapshot.params.id;

  	}

	toggleFocus(isFocus: boolean) {
		this.isFocus = isFocus;
	}

	nl2br(text: string) {
		if (!text) return text;

		return text.replace(/\n/ig, '<br>');
	}
	back(){
		this.navCtrl.navigateForward(['admin/chat']);
	}

  	sendMessage(){
		this.newMessage = '0';
		let latestMessage = this.messageInput;

		let formData = {
			message: this.messageInput,
			from : localStorage.getItem('id'),
			to : localStorage.getItem('selectedChatUserId')
		}
		this.messageInput = '';			
		this.ScrollToBottom();

		this.restAPI.sendMessage(formData).then((res:any) => {
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