import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncargadosEditPageRoutingModule } from './encargados-edit-routing.module';

import { EncargadosEditPage } from './encargados-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncargadosEditPageRoutingModule
  ],
  declarations: [EncargadosEditPage]
})
export class EncargadosEditPageModule {}
