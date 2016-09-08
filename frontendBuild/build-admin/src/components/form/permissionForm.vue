<template>
	<div class="form-group">
        <label for="name">权限标识</label>
        <input id="name" type="text" class="form-control" name="name" value="{{ perObj.name }}">
    </div>
    <div class="form-group">
        <label for="type">权限分类</label>
        <select id="type" class="form-control" name="type">
            <option value="menu" v-bind:selected="currentPer">菜单权限</option>
            <option value="action" v-bind:selected="!currentPer">操作权限</option>
        </select>
    </div>
    <div class="form-group">
        <label for="display_name">权限名称</label>
        <input id="display_name" type="text" class="form-control" name="display_name" value="{{ perObj.display_name }}">
    </div>
    <div class="form-group">
        <label for="description" class="col-sm-3 control-label">权限描述</label>
    	<input id="description" type="text" class="form-control" name="description" value="{{ perObj.description }}">
    </div>
</template>

<script>
    var commonGetters = require('../../vuex/common/getters.js');
    var http = require('../../utils/HttpHelper.js');

    module.exports = {
        data : function () {
            return {
                perObj : Object,
                currentPer : true
            }
        },
        vuex : {
            getters : {
                currentObj : commonGetters.getCurrentObj, //获取当前对象
            }
        },
        ready : function () {
            var self = this;
            self.$watch("currentObj" , function (v) {
                self.perObj = v;
                v.type == "action" ? this.currentPer = false : this.currentPer = true ;
            });
        }
    }
</script>