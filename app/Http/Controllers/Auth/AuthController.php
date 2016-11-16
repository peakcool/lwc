<?php
/**
 * @Author   TangLiangcheng
 * @DateTime 2016-11-15
 */

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Http\Request;
use Auth;
use Validator;

class AuthController extends Controller
{
    use ThrottlesLogins;

    public function postLogin(Request $request)
    {

        $throttles = $this->isUsingThrottlesLoginsTrait();

        $validator = Validator::make($request->all(), [
            'name' => 'required|min:6',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            if ($throttles) {
                $this->incrementLoginAttempts($request);
            }
            return response()->json(['status' => 500, 'msg' => '用户名或密码错误', 'data' => null]);
        }

        if ($throttles && $this->hasTooManyLoginAttempts($request)) {
            return response()->json(['status' => 500, 'msg' => '您尝试登录错误次数太多,请稍后再试', 'data' => null]);

        }

        $credentials = $request->only('name', 'password');

        if (Auth::attempt(['name' => $request->name, 'password' => $request->password])) {
            return $this->handleUserWasAuthenticated($request, $throttles);
        }

        if ($throttles) {
            $this->incrementLoginAttempts($request);
        }

        return response()->json(['status' => 500, 'msg' => '用户名或密码错误', 'data' => null]);

    }

    /**
     * 判断当前是否是否防刷机制
     * @return bool
     */
    protected function isUsingThrottlesLoginsTrait()
    {
        return in_array(
            ThrottlesLogins::class, class_uses_recursive(get_class($this))
        );
    }

    /**
     * Send the response after the user was authenticated.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  bool $throttles
     * @return \Illuminate\Http\Response
     */
    protected function handleUserWasAuthenticated(Request $request, $throttles)
    {
        if ($throttles) {
            $this->clearLoginAttempts($request);
        }

        if (method_exists($this, 'authenticated')) {
            return $this->authenticated($request, Auth::user());
        }


        return response()->json(['status'=>200, 'msg'=>'', 'data'=>['name'=>Auth::user()->name,'isLogin' => true]]);
    }

    /**
     * Get the login username to be used by the controller.
     *
     * @return string
     */
    public function loginUsername()
    {
        return property_exists($this, 'username') ? $this->username : 'phone';
    }

    public function postLogout() {
        Auth::logout();
        return response()->json(['status'=>200, 'msg'=>'', 'data'=>array('isLogin' => false)]);
    }

    public function getLogin() {
        if (Auth::check()) {
            $rt = array('status' => 200, 'msg' => ' ', 'data' => array('isLogin' => true));
        } else {
            $rt = array('status' => 400, 'msg' => ' ', 'data' => array('isLogin' => false));
        }

        return response()->json($rt);
    }
}