import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncargadosCreatePageRoutingModule } from './encargados-create-routing.module';

import { EncargadosCreatePage } from './encargados-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncargadosCreatePageRoutingModule
  ],
  declarations: [EncargadosCreatePage]
})
export class EncargadosCreatePageModule {}
