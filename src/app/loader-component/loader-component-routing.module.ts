import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoaderComponentPage } from './loader-component.page';

const routes: Routes = [
  {
    path: '',
    component: LoaderComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoaderComponentPageRoutingModule {}
