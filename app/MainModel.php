<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MainModel extends Model
{
    public static function save_userdata($data)
    {
    	$userid = MainModel::check_user( $data['uid'] );

    	if($userid):

    		//update existing user
    		DB::table('users')->where('id', $userid)->update($data);
    	
    	else:

    		// add new user
    		$userid = DB::table('users')->insertGetId($data);

    	endif;

    	return $userid;
    }

    private static function check_user($uid)
    {
    	return DB::table('users')
    			->where('uid','=',$uid)
    			->value('id');
    }
}
