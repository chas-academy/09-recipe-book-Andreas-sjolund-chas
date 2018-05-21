<?php

namespace App\Http\Controllers;

use DB;
use App\User;
use App\Http\Controllers\Controller;
use Response;
use Illuminate\Http\Request;

class RecipeController extends Controller {

    public function createList(Request $request)
    {
        // // return $request;
        // DB::table('lists')->;
        // return Response::json($request);
    }

    public function storeRecipe(Request $request)
    {
        // // return $request;
        // DB::table('storedrecipes')->insert([
        //     ['recipeId' => $request->recipeId]
        //     ]);
        // return Response::json($request);
    }

    public function getStoredRecipes()
    {
        // $recipes = DB::table('storedrecipes')->get();
        // return Response::json($recipes);
    }
}
