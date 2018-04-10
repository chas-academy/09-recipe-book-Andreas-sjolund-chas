import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { List } from './list.model';

@Component({
  selector: 'app-stored-list',
  templateUrl: './stored-list.component.html',
  styleUrls: ['./stored-list.component.css'],
  providers: [RecipeService]
})
export class StoredListComponent implements OnInit {

  list: List[];

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
  //   this.getStoredRecipes();
  }

  // getStoredRecipes() {
  //   this.recipeService.getStoredRecipes()
  //     .subscribe(list => this.list = list);
  // }
}
