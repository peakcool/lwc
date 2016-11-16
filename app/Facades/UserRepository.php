<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * This is the user repository facade class
 */
class UserRepository extends Facade
{
	protected static function getFacadeAccessor()
	{
		return 'userrepository';
	}
}