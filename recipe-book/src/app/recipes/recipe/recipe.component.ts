import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() user: User;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    // this.getUser();
  }

  // getUser() {
  //   this.recipeService.getUser()
  //     .subscribe(user => this.user = user);
  // }
}
