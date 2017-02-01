<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PostGeneratorModel;

class PostGenerator extends Controller
{
    public function index()
    {
    	$data = [
    		'num_users' => PostGeneratorModel::count('users'),
    		'num_posts' => PostGeneratorModel::count('posts')
    	];

    	return view('postgen', $data);

    }

    public function get_stats()
    {
    	$data = [
            'num_users' => PostGeneratorModel::count('users'),
            'num_posts' => PostGeneratorModel::count('posts')
        ];

        return view('stats', $data);
    }

    public function create_post(Request $request)
    {
    	$id = $request->input('user_id');

        PostGeneratorModel::insert_post($id);

        echo $request->input('user_id');
        echo '-';
        echo $request->input('post_id');
    }
}
