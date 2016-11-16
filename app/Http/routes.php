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

Route::get('hello', function () {
    return view('welcome');
});

$domainConfig = config('domain');
Route::group(['domain' => $domainConfig['admin']], function(){
	
    //登录注销路由配置
    Route::post('/auth/login', 'Auth\AuthController@postLogin');
    Route::post('/auth/logout', 'Auth\AuthController@postLogout');
    Route::post('/auth/smscode', 'Auth\PasswordController@postSMSCode');
    Route::post('/auth/smsforget', 'Auth\PasswordController@postForget');
    Route::post('/auth/passforget', 'Auth\PasswordController@postModify');
    Route::get('/auth/login','Auth\AuthController@getLogin');
	/*访问后端*/
    Route::group([
    	'namespace'  => 'Admin',
    	// 'middleware' => ['authenticate', 'authorize'],
    	], function(){
    	require_once __DIR__ . "/Routes/admin.php";
    });
});