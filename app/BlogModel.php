<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class BlogModel extends Model
{
    public static function get_posts($offset, $limit)
    {
    	return DB::table('posts')
    				->where('status', '=', 'published')
    				->orderBy('date_published', 'desc')
    				->skip( $offset )->take( $limit )
    				->join('users', 'posts.user_id', '=', 'users.id')
    				->get();
    }

    public static function get_last_page()
    {

    	$posts = DB::table('posts')
    				->where('status', '=', 'published')
    				->count();

    	$pages = 1;
    	
    	if($posts)
		{
			$pages = $posts / 5;

			if($posts%5)
				$pages++;

		}

		return $pages;
    }
}
