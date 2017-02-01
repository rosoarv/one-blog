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
}
