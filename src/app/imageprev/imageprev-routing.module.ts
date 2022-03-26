import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageprevPage } from './imageprev.page';

const routes: Routes = [
  {
    path: '',
    component: ImageprevPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageprevPageRoutingModule {}
