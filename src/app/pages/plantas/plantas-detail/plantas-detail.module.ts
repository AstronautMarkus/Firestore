import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantasDetailPageRoutingModule } from './plantas-detail-routing.module';

import { PlantasDetailPage } from './plantas-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantasDetailPageRoutingModule
  ],
  declarations: [PlantasDetailPage]
})
export class PlantasDetailPageModule {}
