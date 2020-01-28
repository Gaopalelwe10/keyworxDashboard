import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewmessagePageRoutingModule } from './viewmessage-routing.module';

import { ViewmessagePage } from './viewmessage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewmessagePageRoutingModule
  ],
  declarations: [ViewmessagePage]
})
export class ViewmessagePageModule {}
