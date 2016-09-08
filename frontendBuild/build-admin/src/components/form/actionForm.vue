<style>
</style>
<template>
    <div class="form-group">
        <label for="parent_id" solt="select_label">操作分组</label>
        <lwc-select name="group" type="actions"></lwc-select>
    </div>
    <div class="form-group">
        <label for="name">操作名称</label>
        <input id="name" type="text" class="form-control" name="name">
    </div>

    <div class="form-group">
        <label for="description">操作描述</label>
        <input id="description" type="text" class="form-control" name="description">
    </div>

    <div class="form-group">
        <label for="action" class="col-sm-3 control-label">操作标识</label>
    	<select id="action" class="form-control" name="action">
            <option value="1">http://localhost:8080/#!/actions</option>
            <option value="1">http://localhost:8080/#!/actions</option>
            <option value="1">http://localhost:8080/#!/actions</option>
            <option value="1">http://localhost:8080/#!/actions</option>
            <option value="1">http://localhost:8080/#!/actions</option>
        </select>
    </div>
    <div class="form-group">
        <label for="state" class="col-sm-3 control-label">是否禁用</label>
    	<select id="state" class="form-control" name="state">
            <option value="1">启用</option>
            <option value="0">禁用</option>
        </select>
    </div>
</template>

<script>
    
    var commonGetters = require('../../vuex/common/getters.js');

    module.exports =  {
        vuex : {
            getters : {
                commonSetting : commonGetters.getCommonSetting //获取操作配置
            }
        },
        components : {
            'lwc-select' : require('../common/Select.vue')
        },
        data : function () {
            return {
                action_group : " "
            }
        }
    }
</script>


