<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PostGeneratorModel extends Model
{
    public static function count($table)
    {
    	return DB::table( $table )->count();
    }

    public static function insert_post($id)
	{
		$user_id = PostGeneratorModel::check_user( $id );

		if( !$user_id ):
			
			$userdata = [
				'uid'	=> 'xxxx'.$id,
				'email'	=> 'xxxx'.$id . '@domain.com',
				'name'	=> 'User '.$id,
				'photo'	=> 'xxxx'.$id,
				'token' => 'xxxx'.$id
			];

			$userid = DB::table('users')->insertGetId( $userdata );

		endif;

		$post_txt = PostGeneratorModel::generate_post();
		$post_title = PostGeneratorModel::generate_title();
		$date_published = PostGeneratorModel::generate_date_published();

		$postdata = [
			'post_title'		=> $post_title,
			'post_markdown'		=> html_entity_decode( '#' . $post_title . '\n' . $post_txt ),
			'post_html'			=> PostGeneratorModel::post_to_html( $post_title, $post_txt ),
			'status'			=> 'published',
			'date_published'	=> $date_published,
			'date_modified'		=> $date_published,
			'user_id'			=> $user_id
		];		

		DB::table('posts')->insert( $postdata );
	}


	private static function check_user($id)
	{
		return DB::table('users')
			->where('uid','=','xxxx'.$id)
			->value('id');
	}

	private static function generate_date_published()
	{
		$int = mt_rand( 1262055681 , time(date("Y-m-d H:i:s")) );

		return date("Y-m-d H:i:s",$int);

	}

	private static function generate_post()
	{
		$count = rand(2,3);

		return simplexml_load_file('http://www.lipsum.com/feed/xml?amount=' . $count . '&what=paras&start=0')->lipsum;
		
	}

	private static function post_to_html($title, $data)
	{

		$data_br = nl2br('<p>'.$data.'</p>');
		
		$data_p = str_replace("<br />","</p><p>",$data_br);
	
		return '<h1>' . $title . '</h1>' . $data_p;
	}

	private static function generate_title()
	{
		$count = rand(3,6);

		return simplexml_load_file('http://www.lipsum.com/feed/xml?amount=' . $count . '&what=words&start=0')->lipsum;
	}

}
