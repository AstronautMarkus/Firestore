import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiegosDetailPageRoutingModule } from './riegos-detail-routing.module';

import { RiegosDetailPage } from './riegos-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiegosDetailPageRoutingModule
  ],
  declarations: [RiegosDetailPage]
})
export class RiegosDetailPageModule {}
