import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../recipe.model';

const delay = (() => {
  let timer = 0;
  return (callback, ms) => {
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})

export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  public searchString: string;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getRecipes(null);
  }

  search(query: string) {
    delay(() => {
      this.getRecipes(query);
      this.searchString = query;
    }, 700);
  }

  getRecipes(searchQuery: string) {
    this.recipeService.fetchRecipesFromApi(searchQuery)
      .subscribe(recipes => this.recipes = recipes);
  }

  filterRecipes(filter: string) {
    this.recipeService.filterRecipesFromApi(filter)
      .subscribe(recipes => this.recipes = recipes);
  }

}
