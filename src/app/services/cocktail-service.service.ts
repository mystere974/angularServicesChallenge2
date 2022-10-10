import { Injectable } from '@angular/core';
import { Cocktail } from '../classes/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  public cocktails: Cocktail[]= [
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
  ]
  constructor() { }

  getCocktails(): Cocktail[]{
    return this.cocktails
  }

  getCocktail(): Cocktail {
    return this.toto[1];
  }
}
