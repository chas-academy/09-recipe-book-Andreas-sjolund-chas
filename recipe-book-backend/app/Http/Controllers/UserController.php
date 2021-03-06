<?php

namespace App\Http\Controllers;

use DB;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Hash;

class UserController extends Controller {

    /**
     * Send back all users as JSON
     *
     * @return Response
     */
    public function getAllUsers()
    {
        $users = Users::all();
        return response($users);
    }

    public function getUserRecipeLists($id)
    {
        $user = User::find($id)->with('lists')->get();
        return response($user);
    }
}