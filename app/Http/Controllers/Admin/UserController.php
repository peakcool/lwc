<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Facades\UserRepository;
use Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(request $request)
    {
        $perpage = $request->perpage <= 100 ? $request->perpage : 10;
        $data = UserRepository::paginate($perpage)->toArray();
        if (!$data) {
            $rt = array('status' => 400,'msg' => '没有对应数据');
        } else {
            $rt = array(
                'status' => 200,
                'msg' => '',
                'data' => array(
                    'total' => $data['last_page'],
                    'page' => $data['current_page'],
                    'list' => $data['data']
                )
            );
        }
        return response()->json($rt);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if ($id != Auth::user()->id && Auth::user()->is_super_admin == 0) {
            $rt = array('status' => 400, 'msg' => "只允许编辑自身资料");
        }

        // $user = UserRepository::find($id);
        // $user->name = $request->name;
        // $user->
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (UserRepository::destroy($id)) {
            return response()->json(['status' => 200, 'msg' => '删除用户成功']);
        } else {
            return response()->json(['status' => 400, 'msg' => '删除用户失败']);
        }
    }
}
