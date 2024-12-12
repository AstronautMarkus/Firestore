import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantasDetailPage } from './plantas-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PlantasDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantasDetailPageRoutingModule {}
