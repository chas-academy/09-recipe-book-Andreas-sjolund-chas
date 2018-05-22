<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RecipeList extends Model
{
    protected $table = 'lists';

    protected $attributes = [
        'recipes' => '[]'
    ];

    protected $casts = [
        'recipes' => 'array'
    ];

    protected $fillable = [
        'title', 'recipes', 'user_id',
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }
}
