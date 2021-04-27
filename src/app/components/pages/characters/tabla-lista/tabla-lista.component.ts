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

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];



// type RequestInfo = {
//   next: string;
// };
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
  // characters: Character[] = [];

  // displayedColumns: string[] = ['id'];
  // dataSource = this.characters;

  

  // info: RequestInfo = {
  //   next: null,
  // };

  showGoUpButton = false;

  private pageNum = 1;

  private query: string;

  private hideScrollHeight = 200;

  private showScrollHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document:Document,
    private characterSvc: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    
  }

  episode: Episode[] = [];
  nameCharacter: String[] = [];


  dataSource = new MatTableDataSource<Episode>(this.episode)
  

  ngOnInit(): void {
  this.characterSvc.getEpisode().subscribe(data =>{
    console.log(data);
    this.episode = data.results;
    console.log(this.episode);
  })
  }

  onClick(ep){

    

      ep.characters.forEach((character) =>{
        console.log(character);
        this.characterSvc.getCharacterByURL(character).subscribe(char =>{
          this.nameCharacter.push(char.name);
          console.log(ep.id,this.nameCharacter);
        });
      });

    console.log(ep);
  }


  columnsToDisplay: string[] = ['id','name'];
  expandedElement: Episode | null;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}

