import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RicechartPage } from './ricechart.page';
import { ComponentsModule } from '../components/components.module';
import { PlanpagePageModule } from '../planpage/planpage.module';

const routes: Routes = [
  {
    path: '',
    component: RicechartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PlanpagePageModule
  ],
  entryComponents: [],
  declarations: [RicechartPage]
})
export class RicechartPageModule {}
