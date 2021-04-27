import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaListaComponent } from './tabla-lista.component';

const routes: Routes = [{ path: '', component: TablaListaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaListaRoutingModule { }