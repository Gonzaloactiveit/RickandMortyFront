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


export interface Lista{

  id: number;
  name:String;

}

@Component({
  selector: 'app-tabla-lista',
  templateUrl: './tabla-lista.component.html',
  styleUrls: ['./tabla-lista.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class TablaListaComponent implements OnInit {
  
  episode: Episode[] = [];
  listaCharacter: Lista[] = [];

  dataSource = new MatTableDataSource<Episode>(this.episode);

  constructor(
    @Inject(DOCUMENT) private document:Document,
    private characterSvc: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    
  }

  
  

  ngOnInit(): void {
  this.characterSvc.getEpisode().subscribe(data =>{
    console.log(data);
    this.episode = data.results;
    console.log(this.episode);
  })
  }

  onClick(ep){

    this.listaCharacter = [];

      ep.characters.forEach((character) =>{
        this.characterSvc.getCharacterByURL(character).subscribe(char =>{
          this.listaCharacter.push({id: char.id, name: char.name});
        });
        
      });
      
  }


  columnsToDisplay: string[] = ['id','name'];
  expandedElement: Episode | null;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}

