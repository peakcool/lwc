<style>
</style>
<template>
    <div class="form-group">
        <label for="parent_id" solt="select_label">操作分组</label>
        <lwc-select name="group" type="actions"></lwc-select>
    </div>
    <div class="form-group">
        <label for="name">操作名称</label>
        <input id="name" type="text" class="form-control" name="name" value="{{ actionObj.name }}">
    </div>

    <div class="form-group">
        <label for="description">操作描述</label>
        <input id="description" type="text" class="form-control" name="description" value="{{ actionObj.description }}">
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
            <option value="1" v-bind:selected="hideState">启用</option>
            <option value="0" v-bind:selected="!hideState">禁用</option>
        </select>
    </div>
</template>

<script>
    var commonGetters = require('../../vuex/common/getters.js');

    module.exports = {
        data : function () {
            return {
                actionObj : Object,
                hideState : true,
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
                v.hide == 0 ? this.hideState = false : this.hideState = true ;
                this.actionObj = v;
            });

        }
    }
</script>


