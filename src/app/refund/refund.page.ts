import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.page.html',
  styleUrls: ['./refund.page.scss'],
})
export class RefundPage implements OnInit {

  constructor( public location:Location) { }

	ngOnInit() {
	}

	goBack(){
		this.location.back();
	}
}
