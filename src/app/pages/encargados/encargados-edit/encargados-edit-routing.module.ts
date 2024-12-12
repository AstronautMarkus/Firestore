import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncargadosEditPage } from './encargados-edit.page';

const routes: Routes = [
  {
    path: '',
    component: EncargadosEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncargadosEditPageRoutingModule {}
