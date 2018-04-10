import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../recipe.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getRecipeById();
  }

  getRecipeById() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.fetchRecipeFromApiById(id)
    .subscribe(recipe => this.recipe = recipe);
  }

  // storeRecipe(recipeId: number) {
  //   this.recipeService.storeRecipe(recipeId);
  // }
}
