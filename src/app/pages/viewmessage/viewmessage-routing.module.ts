import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewmessagePage } from './viewmessage.page';

const routes: Routes = [
  {
    path: '',
    component: ViewmessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewmessagePageRoutingModule {}
