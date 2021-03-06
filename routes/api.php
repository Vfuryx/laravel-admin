<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', [
    'namespace' => 'App\Http\Controllers\Api',
    'middleware' => 'serializer:array'
], function ($api) {

    $api->group([
        //限制调用频率
        'middleware' => 'api.throttle',
        'limit' => config('api.rate_limits.access.limit'),
        'expires' => config('api.rate_limits.access.expires'),
    ], function ($api) {

        //游客访问接口




        //需要 token 验证的接口
        $api->group(['middleware' => 'api.auth'], function($api) {
            // 当前登录用户信息
            $api->post('me', 'UsersController@me')
                ->name('api.user.show');
        });





        // 验证码
        $api->post('captchas', 'CaptchasController@store')
            ->name('api.captchas.store');
        // 验证验证码
        $api->post('verificationcodes', 'VerificationCodesController@store')
            ->name('api.verificationcodes.store');

        $api->post('authorizations', 'AuthorizationsController@store')
            ->name('api.authorizations.store');

        // 刷新token
        $api->put('authorizations/current', 'AuthorizationsController@update')
            ->name('api.authorizations.update');

        // 删除token
        $api->delete('authorizations/current', 'AuthorizationsController@destroy')
            ->name('api.authorizations.destroy');
    });

    $api->get('version', function () {
        return response('this is version v1');
    });

});

$api->version('v2', function ($api) {
    $api->get('version', function () {
        return response('this is version v2');
    });
});
