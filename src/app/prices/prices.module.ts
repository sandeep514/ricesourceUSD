import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricesPageRoutingModule } from './prices-routing.module';

import { PricesPage } from './prices.page';
import { ComponentsModule } from '../components/components.module';
import { ContactmodalPageModule } from '../contactmodal/contactmodal.module';
import { VersionmodalPageModule } from '../versionmodal/versionmodal.module';

@NgModule({
  	imports: [
    	CommonModule,
    	FormsModule,
    	IonicModule,
		PricesPageRoutingModule,
		ComponentsModule,
		ContactmodalPageModule,
		VersionmodalPageModule

  	],
  declarations: [PricesPage]
})
export class PricesPageModule {}
