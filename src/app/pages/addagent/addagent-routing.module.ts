import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddagentPage } from './addagent.page';

const routes: Routes = [
  {
    path: '',
    component: AddagentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddagentPageRoutingModule {}
