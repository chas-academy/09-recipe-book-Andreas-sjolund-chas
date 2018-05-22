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
        $data = $request->all();
        $list = RecipeList::findOrFail($id);

        if ($request->filled('recipe_id')) {
            $listRecipes = $list->recipes;
            $listRecipes[] = $data['recipe_id'];
            $listRecipes = array_unique(array_merge($listRecipes, $list->recipes));

            $list->recipes = $listRecipes;
            
            $list->fill($data);
            $list->save();
        } else if ($request->filled('title')) {
            $list->fill($data);
            $list->save();
        } else {
            return response()->json('Nothing to update', 500);
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
