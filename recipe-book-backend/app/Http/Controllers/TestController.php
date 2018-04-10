<?php

namespace App\Http\Controllers;

use DB;
use App\User;
use App\Http\Controllers\Controller;
use Response;
use Illuminate\Http\Request;

class TestController extends Controller {

     /**
     * Send back all users as JSON
     *
     * @return Response
     */
    public function index()
    {
        $users = DB::table('users')->get();
        return Response::json($users);
    }

    public function storeRecipe(Request $request)
    {
        // return $request;
        DB::table('storedrecipes')->insert([
            ['recipeId' => $request->recipeId]
            ]);
        return Response::json($request);
    }

    public function getStoredRecipes()
    {
        $recipes = DB::table('storedrecipes')->get();
        return Response::json($recipes);
    }
}
