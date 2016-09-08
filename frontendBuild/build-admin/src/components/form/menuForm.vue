<template>
    <div class="form-group">
        <label for="parent_id" solt="select_label">父级菜单</label>
        <lwc-select name="parent_id" type="main_menu"></lwc-select>
    </div>
    <div class="form-group">
        <label for="name">菜单名称</label>
        <input id="name" type="text" class="form-control" name="name" value="{{ menuObj.name }}">
    </div>
    	<div class="form-group">
        <label for="description">菜单描述</label>
        <input id="description" type="text" class="form-control" name="description" value="{{ menuObj.description }}">
    </div>
    	<div class="form-group">
        <label for="route">菜单路由</label>
        <input id="route" type="text" class="form-control" name='route' value="{{ menuObj.route }}"> 
    </div>
    	<div class="form-group">
        <label for="icon">菜单图标</label>
        <input id="icon" type="text" class="form-control" name="icon" value="{{ menuObj.icon }}">
    </div>
    	<div class="form-group">
        <label for="sort">菜单排序</label>
        <input id="sort" type="text" class="form-control" name="sort" value="{{ menuObj.sort }}">
    </div>
    </div>
    	<div class="form-group">
        <label for="hide">是否隐藏</label>
        <select id="hide" class="form-control" name="hide">
            <option value="0" v-bind:selected="hideState">显示</option>
            <option value="1" v-bind:selected="!hideState">隐藏</option>
        </select>
    </div>
</template>

<script>
    var commonGetters = require('../../vuex/common/getters.js');

    module.exports = {
        data : function () {
            return {
                menuObj : Object,
                hideState : true,
                parent_menu : " "
            }
        },
        components : {
            'lwc-select' : require('../common/Select.vue')
        },
        vuex : {
            getters : {
                currentObj : commonGetters.getCurrentObj, //获取当前对象
                commonSetting : commonGetters.getCommonSetting, //获取操作配置
            }
        },
        ready : function () {

            this.$watch("currentObj" , function (v) {
                v.hide == 1 ? this.hideState = false : this.hideState = true ;
                this.menuObj = v;
            });

        }
    }
</script>