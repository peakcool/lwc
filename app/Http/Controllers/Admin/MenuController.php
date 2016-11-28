<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Facades\MenuRepository;
class MenuController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $perpage = $request->perpage <= 100 ? $request->perpage : 10;
        $data = MenuRepository::paginate($perpage)->toArray();
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
        $childMenus = MenuRepository::getChildMenusById($id);
        if(!empty($childMenus)){
            return response()->json(['status' => 400, 'msg' => '请先删除其下级分类']);
        }

        if (MenuRepository::destroy($id)) {
            return response()->json(['status' => 200, 'msg' => '删除菜单成功']);
        } else {
            return response()->json(['status' => 400, 'msg' => '删除菜单失败']);
        }
    }
}
