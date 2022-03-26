import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GallerydetailsPageRoutingModule } from './gallerydetails-routing.module';

import { GallerydetailsPage } from './gallerydetails.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    GallerydetailsPageRoutingModule
  ],
  declarations: [GallerydetailsPage]
})
export class GallerydetailsPageModule {}
