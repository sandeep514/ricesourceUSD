import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherservicesPage } from './otherservices.page';

const routes: Routes = [
  {
    path: '',
    component: OtherservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherservicesPageRoutingModule {}
