import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  	constructor(public navCtrl: NavController, public popoverController: PopoverController) { }

  	ngOnInit() {}

	logout(){
		this.popoverController.dismiss();
		this.navCtrl.navigateRoot('login',{animationDirection: 'forward'});
	}
}
