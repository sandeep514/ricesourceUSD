import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GallerydetailsPage } from './gallerydetails.page';

const routes: Routes = [
  {
    path: '',
    component: GallerydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GallerydetailsPageRoutingModule {}
