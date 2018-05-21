<?php

namespace App\Http\Middleware;

use Closure;

class CheckAuthentication
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        dd($request);
        if ($request->age <= 200) {
            echo('Not authenticated');
        }

        return $next($request);
    }
}