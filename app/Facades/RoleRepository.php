<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * This is the role repository facade class
 */
class RoleRepository extends Facade
{
	protected static function getFacadeAccessor()
	{
		return 'rolerepository';
	}
}