import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes'; //URL to web api to grab heores data

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  };

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched heroes id=${id}`);
    return this.http.get<Hero[]>(this.heroesUrl).find(hero => hero.id === id));
  };

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

}
