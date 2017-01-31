<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PostModel;

class PostController extends Controller
{
    public function posts()
    {
    	$data = [
    		'last_page' => PostModel::get_last_page()
    	];

    	return view('posts', $data);
    }

    public function get_posts($offset)
    {
    	$data = [
    		'posts' => PostModel::get_posts($offset,5),
    		'start' => $offset+1
    	];

    	return view('postlist', $data);
    }

    public function new_post()
    {
    	return view('postform');
    }

    public function edit_post($id)
    {
    	$data = [
    		'post_data' => PostModel::get_post($id)
    	];

    	return view('postedit', $data);
    }

    private function get_request($request, $status)
    {
    	$data = [
			'post_title'		=> $request->input('post_title'),
			'post_markdown'		=> $request->input('post_markdown'),
			'post_html'			=> $request->input('post_html'),
			'status'			=> $status,
			'date_modified'		=> date('Y-m-d H:i:s'),
			'user_id'			=> $request->session()->get('id')
		];

		if($status == 'published')
			$data['date_published'] = date('Y-m-d H:i:s');

		return $data;
    }

    public function publish_post(Request $req)
    {
		
    	$data = $this->get_request( $req, 'published' );

		PostModel::insert_post($data);

    }

    public function draft_post(Request $req)
    {
    	$data = $this->get_request( $req, 'draft' );

		PostModel::insert_post($data);

    }

    public function remove_post($id)
    {
    	PostModel::delete_post($id);
    }

    public function publish_edit(Request $req)
    {
		
    	$data = $this->get_request( $req, 'published' );

		PostModel::edit_post($data,$req->id);

    }

    public function draft_edit(Request $req)
    {
		
    	$data = $this->get_request( $req, 'draft' );

		PostModel::edit_post($data,$req->id);

    }
}
