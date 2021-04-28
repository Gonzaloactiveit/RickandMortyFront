import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { CharacterComponent } from '@characters/character.componet';
import { CharacterSpeciesComponent } from './character-species/character-species.component';
import { TablaListaComponent } from './tabla-lista/tabla-lista.component';
import { MatTableModule } from '@angular/material/table';
import { LocationComponent } from './location/location.component';
import {MatCardModule} from '@angular/material/card';
import { CharacterInfoComponent } from './character-info/character-info.component';
// import {MatPaginatorModule} from '@angular/material/paginator';  


const myComponents = [
  CharacterDetailsComponent, 
  CharacterListComponent, 
  CharacterComponent
];

@NgModule({
  declarations: [...myComponents, CharacterSpeciesComponent, TablaListaComponent, LocationComponent, CharacterInfoComponent],
  imports: [MatCardModule, MatTableModule, CommonModule, RouterModule, InfiniteScrollModule],
  exports: [...myComponents],
})
export class CharactersModule {}
