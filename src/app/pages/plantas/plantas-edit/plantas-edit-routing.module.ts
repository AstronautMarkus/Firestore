import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantasEditPage } from './plantas-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PlantasEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantasEditPageRoutingModule {}
