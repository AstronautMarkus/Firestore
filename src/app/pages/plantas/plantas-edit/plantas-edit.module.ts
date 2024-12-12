import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantasEditPageRoutingModule } from './plantas-edit-routing.module';

import { PlantasEditPage } from './plantas-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantasEditPageRoutingModule
  ],
  declarations: [PlantasEditPage]
})
export class PlantasEditPageModule {}
