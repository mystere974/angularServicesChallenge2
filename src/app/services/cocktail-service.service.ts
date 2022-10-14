import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Cocktail } from '../classes/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {
  
  constructor(public http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]>{
    return this.http.get<Cocktail[]>("../assets/data.json")
  }

  
  /* public cocktails: Cocktail[]= [
    {
      name:'copaCabana',
      price: 5,
      image:''
    },
    {
      name:'theRock',
      price: 7,
      image:''
    }
  ]
  public toto: Cocktail[] = [
    new Cocktail('toto', 500, ''),
    new Cocktail('argh', 150, '')
  ] */


  /* getCocktail(): Cocktail {
    return this.toto[1];
  } */
}
