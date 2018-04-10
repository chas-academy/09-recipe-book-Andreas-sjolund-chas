<?php
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder {

    public function run()
    {
        // DB::table('user')->delete();

        User::create(array(
            'name' => 'Andreas',
            'email' => 'andreas.sjolund@chasacademy.se',
            'password' => 'test123' 
        ));
    }    

}