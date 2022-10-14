import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-privatepolicy',
  templateUrl: './privatepolicy.page.html',
  styleUrls: ['./privatepolicy.page.scss'],
})
export class PrivatepolicyPage implements OnInit {

  constructor( public location:Location) { }

	ngOnInit() {
	}

	goBack(){
		this.location.back();
	}

}
