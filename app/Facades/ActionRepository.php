<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * This is the action repository facade class
 */
class ActionRepository extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'actionrepository';
    }
}
