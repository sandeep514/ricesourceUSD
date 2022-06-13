import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyPageRoutingModule } from './buy-routing.module';

import { BuyPage } from './buy.page';
import { ComponentsModule } from '../components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ComponentsModule,
		BuyPageRoutingModule,
		IonicSelectableModule
	],
	declarations: [BuyPage]
})
export class BuyPageModule {}
