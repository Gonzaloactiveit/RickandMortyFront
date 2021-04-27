import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { LocationRoutingModule  } from './location-routing.module';

@NgModule({
  declarations: [],
  imports: [MatCardModule, CommonModule, LocationRoutingModule ],
})
export class LocationModule {}