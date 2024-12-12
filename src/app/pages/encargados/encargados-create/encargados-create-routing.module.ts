import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncargadosCreatePage } from './encargados-create.page';

const routes: Routes = [
  {
    path: '',
    component: EncargadosCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncargadosCreatePageRoutingModule {}
