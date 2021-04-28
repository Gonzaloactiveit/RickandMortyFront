import { DOCUMENT } from '@angular/common';
import {
  Component, HostListener, Inject, OnInit, ViewChild,
} from '@angular/core';
import {
  ActivatedRoute, NavigationEnd, ParamMap, Router,
} from '@angular/router';

import { CharacterService } from '@shared/services/character.service';
import { Character } from '@shared/interfaces/character.interface';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TrackHttpError } from '@shared/models/trackHttpError';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {

  character$: Observable<Character | TrackHttpError>;  

  constructor(
    @Inject(DOCUMENT) private document:Document,
    private characterSvc: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails(id);
      console.log(this.character$);
    });
    
  }

}
