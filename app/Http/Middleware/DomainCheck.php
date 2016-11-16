<?php

namespace App\Http\Middleware;

use Closure;
use EasyWeChat\Foundation\Application;

class DomainCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $host = $request->getHost();

        $guard = '';
        $domains = config('lydomain');
        foreach ($domains as $key => $domain) {
            if ($domain === $host) {
                $guard = $key;
                config(['auth.defaults.guard' => $guard]);
                break;
            }
        }

        $entrustConfig = config('multirole.guards.' . $guard);
        foreach ($entrustConfig as $key => $val) {
            config(['entrust.' . $key => $val]);
        }

        return $next($request);
    }
}
