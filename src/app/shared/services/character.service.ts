import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';

import { Character } from '@shared/interfaces/character.interface';
import { environment } from '@environment/environment';
import { TrackHttpError } from '@shared/models/trackHttpError';
import { catchError } from 'rxjs/operators';
import { Episode } from '../interfaces/episode.interface';
import { ResEp, ResLo } from '../interfaces/res.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  searchCharacters(query = '', page = 200):Observable<Character[] | TrackHttpError> {
    const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter)
    .pipe(catchError((err) => this.handleHttpError(err)));
  }

  getDetails(id: number) {
    return this.http.get<Character>(`${environment.baseUrlAPI}/${id}`)
    .pipe(catchError((err) => this.handleHttpError(err)));
  }

  getSpecies(species: String) {
    return this.http.get<Character>(`${environment.baseUrlAPI}/'?species='${species}`)
    .pipe(catchError((err) => this.handleHttpError(err)));
  }

  getEpisode():Observable<ResEp>{

    let getAll = 'https://rickandmortyapi.com/api/episode';

    return this.http.get<ResEp>(getAll);

  }

  getLocation():Observable<ResLo>{

    let getAll = 'https://rickandmortyapi.com/api/location';

    return this.http.get<ResLo>(getAll);

  }

  getCharacterByURL(url):Observable<Character>{
    
    return this.http.get<Character>(url);
  }

  getCharacterbyId(id):Observable<Character>{

    let getId= 'https://rickandmortyapi.com/api/character/' + id;

    return this.http.get<Character>(getId);

  }


  private handleHttpError(
    error:HttpErrorResponse
  ):Observable<TrackHttpError>{

    let dataError = new TrackHttpError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured retrienving data.';
    return throwError(dataError);
  }
}
