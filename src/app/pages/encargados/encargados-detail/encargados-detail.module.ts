import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncargadosDetailPageRoutingModule } from './encargados-detail-routing.module';

import { EncargadosDetailPage } from './encargados-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncargadosDetailPageRoutingModule
  ],
  declarations: [EncargadosDetailPage]
})
export class EncargadosDetailPageModule {}
