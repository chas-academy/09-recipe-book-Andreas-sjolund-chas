import { Injectable, Input } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { catchError, flatMap, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import { StoredListComponent } from './stored-list/stored-list.component';
import { List } from './stored-list/list.model';

@Injectable()

export class RecipeService {

  constructor(private http: HttpClient) { }

  fetchRecipesFromApi(searchQuery: string): Observable<Recipe[]> {
    const api_url = 'https://www.themealdb.com/api/json/v1/1/';
    const search = 'search.php?s=' + searchQuery;
    let query;

    if (searchQuery) {
      query = api_url + search;
    } else {
      query = api_url + 'latest.php';
    }

    const recipeList = [];

    return this.http.get<Recipe[]>(query)
      .pipe(
        flatMap((res) => {
          return res['meals'];
        }),
        map((meal: Recipe[]) =>  {
          const recipe = new Recipe(
            +meal['idMeal'],
            meal['strMeal'],
            meal['strCategory'],
            meal['strArea'],
            meal['strInstructions'],
            meal['strMealThumb'],
            meal['strYoutube'],
            null
          );
          recipeList.push(recipe);
          return recipeList;
        })
      );
  }

  fetchRecipeFromApiById(recipeId: number): Observable<Recipe> {
    const api_url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const query = api_url + recipeId;

    return this.http.get<Recipe>(query)
    .pipe(
      flatMap((res) => {
        return res['meals'];
      }),
      map((meal: Recipe) =>  {

        const ingredients = [];

        for (let i = 1; i < 20; i++) {
          if (meal[`strIngredient${i}`] !== '') {
            const ing = {
              name: meal[`strIngredient${i}`],
              measure: meal[`strMeasure${i}`]
            };
            ingredients.push(ing);
          }
        }

        const instructionLinebreak = meal['strInstructions'].split(/(\r\n|\n|\r)/gm);

        const index = instructionLinebreak.indexOf('');
        if (index > -1) {
          instructionLinebreak.splice(index, 1);
        }

        const newLinebreak = instructionLinebreak.filter(function(e) { return e.replace(/(\r\n|\n|\r)/gm, ''); });

        const recipe = new Recipe(
          +meal['idMeal'],
          meal['strMeal'],
          meal['strCategory'],
          meal['strArea'],
          newLinebreak,
          meal['strMealThumb'],
          meal['strYoutube'],
          ingredients
        );

        return recipe;
      })
    );
  }

  filterRecipesFromApi(filter: string): Observable<Recipe[]> {
    const api_url = 'https://www.themealdb.com/api/json/v1/1/';
    const search = 'filter.php?a=' + filter;
    let query;

    if (filter) {
      query = api_url + search;
    } else {
      query = api_url + 'latest.php';
    }

    const recipeList = [];

    return this.http.get<Recipe[]>(query)
      .pipe(
        flatMap((res) => {
          return res['meals'];
        }),
        map((meal: Recipe[]) =>  {
          const recipe = new Recipe(
            +meal['idMeal'],
            meal['strMeal'],
            meal['strCategory'],
            meal['strArea'],
            meal['strInstructions'],
            meal['strMealThumb'],
            meal['strYoutube'],
            null
          );
          recipeList.push(recipe);
          return recipeList;
        })
      );
  }

  // getUser(): Observable<User> {
  //   return this.http.get<User>('http://recipe.test/login')
  //     .pipe(
  //       flatMap((res) => {
  //         return res;
  //       }),
  //       map((person: User) => {
  //         const user = new User(
  //           +person['id'],
  //           person['name'],
  //           person['email']
  //         );
  //         return user;
  //       })
  //     );
  // }

//   storeRecipe(recipeId: number) {
//     console.log(recipeId);
//     this.http.post('http://recipe.test/api/store', {'recipeId': recipeId});
//   }

//   getStoredRecipes(): Observable<List[]> {
//     return this.http.get<List[]>('http://recipe.test/api/stored/list')
//       .pipe(
//         flatMap((res) => {
//           return res;
//         }).
//         map((listItem: List[]) => {
//           const list = new List(
//             +listItem['recipeId']
//           );
//         })
//       );
//   }
}
