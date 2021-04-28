import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterInfoComponent } from './character-info.component';

const routes: Routes = [{ path: '', component: CharacterInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterInfoRoutingModule { }