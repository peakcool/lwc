<template>
	<div class="form-group">
        <label for="name">角色标识</label>
        <input id="name" type="text" class="form-control" name="name" value="{{ roleObj.name }}">
    </div>
    <div class="form-group">
        <label for="txtPhoneNumber">角色名称</label>
        <input id="display_name" type="text" class="form-control" name="display_name" value="{{ roleObj.display_name }}">
    </div>
    <div class="form-group">
        <label for="description">角色描述</label>
        <input id="description" type="text" class="form-control" name="description" value="{{ roleObj.description }}">
    </div>
   
</template>

<script>
    var commonGetters = require('../../vuex/common/getters.js');
    var http = require('../../utils/HttpHelper.js');

    module.exports = {
        data : function () {
            return {
                roleObj : Object,
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
                self.roleObj = v;
            });
        }
    }
</script>