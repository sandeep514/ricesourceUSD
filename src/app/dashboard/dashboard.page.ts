import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ComponentsService } from '../components.service';
import { SampleEntryComponent } from '../sample-entry/sample-entry.component';
import { SendCourierComponent } from '../send-courier/send-courier.component';
import { MillStatusComponent } from '../mill-status/mill-status.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  	constructor(
		  public menu: MenuController,
		  public componentService: ComponentsService
		) { 
		this.menu.enable(true);
	}

  	ngOnInit() {
		
	}
	  
	sampleEntry(){
		this.componentService.openModal(SampleEntryComponent);
	}

	courierEntry(){
		this.componentService.openModal(SendCourierComponent);
	}

	millStatus(){
		this.componentService.openModal(MillStatusComponent);
	}

	popMenu(event){
		this.componentService.presentPopover(event);
	}
}
