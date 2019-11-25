import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectsPage } from './prospects.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectsPageRoutingModule {}
