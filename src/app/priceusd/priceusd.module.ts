import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriceusdPageRoutingModule } from './priceusd-routing.module';

import { PriceusdPage } from './priceusd.page';
import { ComponentsModule } from '../components/components.module';
import { ContactmodalPageModule } from '../contactmodal/contactmodal.module';
import { VersionmodalPageModule } from '../versionmodal/versionmodal.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		PriceusdPageRoutingModule,
		ComponentsModule,
		ContactmodalPageModule,
		VersionmodalPageModule
	],
	declarations: [PriceusdPage]
})
export class PriceusdPageModule {}