<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', ['uses' => 'MainController@index']);

Route::get('blog', ['uses' => 'MainController@blog']);
Route::get('blog/posts/{offset}', ['uses' => 'MainController@get_posts']);

Route::get('dashboard', ['uses' => 'MainController@dashboard']);

Route::get('posts', ['uses' => 'PostController@posts']);
Route::get('posts/list/{offset}', ['uses' => 'PostController@get_posts']);
Route::get('posts/new', ['uses' => 'PostController@new_post']);
Route::get('posts/edit/post/{id}', ['uses' => 'PostController@edit_post']);
Route::get('posts/remove/{id}', ['uses' => 'PostController@remove_post']);

Route::post('posts/new/publish', ['uses' => 'PostController@publish_post']);
Route::post('posts/new/draft', ['uses' => 'PostController@draft_post']);

Route::post('posts/edit/publish', ['uses' => 'PostController@publish_edit']);
Route::post('posts/edit/draft', ['uses' => 'PostController@draft_edit']);

Route::post('session/check', ['uses' => 'MainController@check_session']);
Route::post('session/set', ['uses' => 'MainController@set_session']);
Route::get('session/destroy', ['uses' => 'MainController@destroy_session']);

Route::get('postgen',['uses' => 'PostGenerator@index']);