import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantasListPage } from './plantas-list.page';

const routes: Routes = [
  {
    path: '',
    component: PlantasListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantasListPageRoutingModule {}
