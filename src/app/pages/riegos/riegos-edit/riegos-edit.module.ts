import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiegosEditPageRoutingModule } from './riegos-edit-routing.module';

import { RiegosEditPage } from './riegos-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiegosEditPageRoutingModule
  ],
  declarations: [RiegosEditPage]
})
export class RiegosEditPageModule {}
