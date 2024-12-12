import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantasCreatePage } from './plantas-create.page';

const routes: Routes = [
  {
    path: '',
    component: PlantasCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantasCreatePageRoutingModule {}
