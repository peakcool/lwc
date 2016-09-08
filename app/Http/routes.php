<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

$domainConfig = config('domain');
/*访问后端*/
Route::group(['domain' => $domainConfig['admin']], function(){
	
    //其他路由
    Route::group(['namespace' => 'Admin'], function(){
    	require_once __DIR__ . "/Routes/admin.php";
    });
});