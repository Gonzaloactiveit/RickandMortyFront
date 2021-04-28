import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'character-list',
    loadChildren: () =>
      import(
        './components/pages/characters/character-list/character-list.module'
      ).then((m) => m.CharacterListModule),
  },
  {
    path: 'character-details/:id',
    loadChildren: () =>
      import(
        './components/pages/characters/character-details/character-details.module'
      ).then((m) => m.CharacterDetailsModule),
  },

  {
    path: 'tabla-lista',
    loadChildren: () =>
      import(
        './components/pages/characters/tabla-lista/tabla-lista.module'
      ).then((m) => m.TablaListaModule),
  },

  {
    path: 'location',
    loadChildren: () =>
      import(
        './components/pages/characters/location/location.module'
      ).then((m) => m.LocationModule),
  },
  {
  path: 'character-info/:id',
    loadChildren: () =>
      import(
        './components/pages/characters/character-info/character-info.module'
      ).then((m) => m.CharacterInfoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
