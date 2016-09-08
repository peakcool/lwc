<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Menu;
class ConfigController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   

        $request->has('key') ? $rt = array('status' => 200, 'msg' => '') : $rt = array('status' => 400, 'msg' => '传入参数不对');

        if($request->key == "menu"){
            //左侧栏菜单配置
            $menu_conf = Menu::all();
            $level_1_arr = array();//存放一级分类的数据
            //遍历Level 1的数据
            foreach ($menu_conf as $key => $level_1_obj) {
                if ($level_1_obj->parent_id == 0) {
                    //1-1、定义存放Level 2对象的数组
                    $level_2_arr = array();
                    //1-2、遍历Level 2的数据
                    foreach ($menu_conf as $key => $level_2_obj) {
                        //2-1、判断是否是level_1_obj的子级
                        if ($level_1_obj->id == $level_2_obj->parent_id) {
                            //2-4、将处理完成的level 2对象存放到数组中
                            array_push($level_2_arr,$level_2_obj);
                        }
                    }
                    //1-3、将处理完的二级数组，存放到 当前level 1对象中
                    $level_1_obj['child_list'] = $level_2_arr;
                    //2-4、将处理完的Level 1对象，存放到数组中
                    array_push($level_1_arr,$level_1_obj);

                }
            }

            $rt['data'] = $level_1_arr;
        }

        if ($request->key == "setting"){
            $config = config('config');
            $rt['data'] = $config;
        }
        
        return response()->json($rt); 
    }
}
