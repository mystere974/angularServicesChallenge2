import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../classes/cocktail';
import { CocktailServiceService } from '../services/cocktail-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Cocktail[] = []
  
  constructor(public cocktailService: CocktailServiceService) {
    
  }

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
      this.cocktails = cocktailsFromJsonFile;
    });
  }

}
