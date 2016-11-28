<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Facades\RoleRepository;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $perpage = $request->perpage <= 100 ? $request->perpage : 10;
        $data = RoleRepository::paginate($perpage)->toArray();
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (RoleRepository::destroy($id)) {
            return response()->json(['status' => 200, 'msg' => '删除角色成功']);
        } else {
            return response()->json(['status' => 400, 'msg' => '删除角色失败']);
        }
    }
}
