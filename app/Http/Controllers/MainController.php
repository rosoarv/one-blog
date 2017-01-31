<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MainModel;
use App\BlogModel;

class MainController extends Controller
{
    public function index()
    {
    	return view('app');
    }

    public function blog()
    {
    	$last_page = BlogModel::get_last_page();
    	return view('blog',['last_page' => $last_page]);
    }

    public function get_posts($offset)
    {
    	$posts = BlogModel::get_posts($offset,5);
    	return view('blogList', ['posts' => $posts]);
    }

    public function dashboard()
    {
    	return view('dashboard');
    }

    public function check_session(Request $req)
    {
        $token = $req->session()->get('token');
        echo ($token == $req->input('token') );
    }

    public function set_session(Request $req)
    {
        $data = [
            'uid'   => $req->input('uid'),
            'email' => $req->input('email'),
            'name'  => $req->input('displayName'),
            'photo' => $req->input('photoURL'),
            'token' => $req->input('token')
        ];

        $data['id'] = MainModel::save_userdata( $data );

        $req->session()->put( $data );
    }

    public function destroy_session(Request $request)
    {
        //$request->session()->flush();
    }

    
}
