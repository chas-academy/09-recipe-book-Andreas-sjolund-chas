<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\RecipeList;

class ListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(
            RecipeList::all()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $title = $request->input('title');
        $user_id = Auth::user()->id;

        return response(
            RecipeList::create(array('title' => $title, 'user_id' => $user_id))
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response(
            RecipeList::find($id)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $recipe_id = $request->input('recipe_id');
        $newTitle = $request->input('title');
        
        if(empty($recipe_id)) {

            $recipeList = RecipeList::find($id)->recipes;
            $recipeList[] = $recipe_id;

            RecipeList::findOrFail($id)->update
            ([
                'recipes' => $recipeList
            ]);
        }

        if ($newTitle) {
            RecipeList::findOrFail($id)->update
            ([
                'title' => $newTitle
            ]);
        } 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        RecipeList::find($id)->delete();
    }
}
