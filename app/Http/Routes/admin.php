<?php

/* 菜单管理模块 */
Route::resource('menu', 'MenuController');

/* 用户管理模块 */
Route::resource("user", 'UserController');

/* 角色管理模块 */
Route::resource("role", 'RoleController');

/* 权限管理模块 */
Route::resource("permission", 'PermissionController');

/* 操作管理模块 */
Route::resource('action', 'ActionController');

/* 系统配置项 */
Route::resource('config', 'ConfigController');

/* 系统登录 */
// Route::resource('login', 'LoginController');

/* 退出系统模块*/
// Route::resource('logout', 'LogoutController');
