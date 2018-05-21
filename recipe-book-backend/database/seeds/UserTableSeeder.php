<?php
use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder {

    public function run()
    {
        // DB::table('user')->delete();

        User::create(array(
            'name' => 'Andreas',
            'email' => 'andreas.sjolund@chasacademy.se',
            'password' => 'password'
        ));
    }    

}