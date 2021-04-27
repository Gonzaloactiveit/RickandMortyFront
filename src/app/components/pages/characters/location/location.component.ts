import { DOCUMENT } from '@angular/common';
import {
  Component, HostListener, Inject, OnInit, ViewChild,
} from '@angular/core';
import {
  ActivatedRoute, NavigationEnd, ParamMap, Router,
} from '@angular/router';

import { filter, take } from 'rxjs/operators';

// import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { Character } from '@shared/interfaces/character.interface';
import { CharacterService } from '@shared/services/character.service';
import { TrackHttpError } from '@shared/models/trackHttpError';
import { Observable } from 'rxjs';
import { Episode } from '@app/shared/interfaces/episode.interface';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Location} from '@app/shared/interfaces/location.interface';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document:Document,
  private characterSvc: CharacterService,
  private route: ActivatedRoute,
  private router: Router) { }

  location: Location[] = [];

  ngOnInit(): void {
    this.characterSvc.getLocation().subscribe(data =>{
      this.location = data.results;
    })
  }

}
