<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\Menu;
class MenuController extends Controller
{
    
    /**
     * init menu model
     */
    function __construct() {
        $this->menu = new Menu;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->has('page')){
            $input = $request->input();
            // $input['diypages'] = $request->has('diypages') ? $input['diypages'] : 10; //自定义每页显示数目 10/30/50...
        }
        if ($request->has('keyword')) { //关键字搜索
            $keyword = $request->input('keyword');
            $res = $this->menu->where('name','like','%'.$keyword.'%')->paginate(20)->toArray();
        } else {
            $res = $this->menu->paginate(20)->toArray();
        }

        if (!$res) {
            $rt = array(
                'status' => 400,
                'msg' => '没有对应数据'
            );

        } else {
            $rt = array(
                'status' => 200,
                'msg' => '',
                'data' => array(
                    'total' => $res['last_page'],
                    'page' => $res['current_page'],
                    'list' => $res['data']
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
        //
    }
}
