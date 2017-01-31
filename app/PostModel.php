<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PostModel extends Model
{
    public static function get_posts($offset, $limit)
    {
    	return DB::table('posts')
    				->orderBy('post_id', 'desc')
    				->skip( $offset )->take( $limit )
    				//->where('status', '=', 'published')
    				->get();
    }

    public static function get_post($id)
    {
    	return DB::table('posts')
    				->where('post_id', '=', $id)
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

    public static function insert_post($data)
	{
		DB::table('posts')->insert($data);
	}

	public static function edit_post($data, $id)
	{
		DB::table('posts')
            ->where('post_id', $id)
            ->update($data);
    }

	public static function delete_post($id)
	{
		DB::table('posts')->where('post_id', '=', $id)->delete();
	}

}
