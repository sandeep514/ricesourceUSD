import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-aboutus',
	templateUrl: './aboutus.page.html',
	styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

	constructor(public location:Location) { }

	ngOnInit() {
	}
	goBack(){
		this.location.back();
	}
}
