// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Http imports
import { HttpClientModule } from '@angular/common/http';

// Router import
import { RouterModule, Routes } from '@angular/router';

// Component imports
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { StoredListComponent } from './stored-list/stored-list.component';
import { RecipeService } from './recipe.service';

// Asset imports
import { BackButtonComponent } from './assets/back-button.component';


const routes: Routes = [
  { path: '', component: RecipeComponent },
  { path: 'users', component: RecipeComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'stored', component: StoredListComponent },
  { path: '**', component: RecipeComponent } // Wildcard route
];

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    BackButtonComponent,
    StoredListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
