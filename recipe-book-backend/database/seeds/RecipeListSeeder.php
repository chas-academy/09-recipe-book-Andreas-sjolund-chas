<?php

use Illuminate\Database\Seeder;
use App\RecipeList;

class RecipeListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        RecipeList::create(array(
            'title' => 'Andreas Tasty Chicked Recipes',
            'recipes' => [1, 3, 4],
            'user_id' => 1
        ));
    }
}
