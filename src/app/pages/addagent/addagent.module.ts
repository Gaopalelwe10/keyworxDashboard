import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddagentPageRoutingModule } from './addagent-routing.module';

import { AddagentPage } from './addagent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddagentPageRoutingModule
  ],
  declarations: [AddagentPage]
})
export class AddagentPageModule {}
