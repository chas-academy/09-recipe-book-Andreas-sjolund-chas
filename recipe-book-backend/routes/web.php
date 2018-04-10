<?php

use App\Http\Middleware\Cors;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('login', 'TestController@index')->middleware('cors');




Route::get('register', 'Auth\RegisterController@register')->middleware('cors');




// Route::group(array('prefix' => 'api'), function() {
//     Route::resource('users', 'TestController',
//     array('only' => array('index', 'test')));
// });
