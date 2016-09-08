<template>
    <div class="form-group">
        <label for="user_role" slot="checkbox_label">用户角色</label>
        <lwc-checkbox :value="roleList"></lwc-checkbox>
    </div>
    <div class="form-group">
        <label for="name">用户名称</label>
        <input id="name" type="text" class="form-control" name="name" value="{{ userObj.name }}">
    </div>
    <div class="form-group">
        <label for="email">用户邮箱</label>
        <input id="email" type="text" class="form-control" name="email" value="{{ userObj.email }}">
    </div>
    <div class="form-group" v-show="editObj">
        <label for="password" >原始密码</label>
        <input id="password_old" type="password" class="form-control" name="password_old">
    </div>
    <div class="form-group">
        <label for="password" v-if="editObj">新密码</label>
        <label for="password" v-else>用户密码</label>
    	<input id="password" type="password" class="form-control" name="password">
    </div>
    <div class="form-group">
        <label for="password_confirmation" v-if="editObj">确认新密码</label>
        <label for="password_confirmation" v-else>确认密码</label>
    	<input id="password_confirmation" type="password" class="form-control" name="password_confirmation">
    </div>
</template>

<script>
    var commonGetters = require('../../vuex/common/getters.js');
    var http = require('../../utils/HttpHelper.js');

    module.exports = {
        data : function () {
            return {
                userObj : Object,
                roleList : [],
                editObj : false,
                roleModel : []
            }
        },
        components : {
            'lwc-checkbox' : require('../common/Checkbox.vue')
        },
        vuex : {
            getters : {
                currentObj : commonGetters.getCurrentObj, //获取当前对象
            }
        },
        ready : function () {

            var self = this;
            self.$watch("currentObj" , function (v) {
                self.userObj = v;
                v.state == undefined ? self.editObj = true : self.editObj = false; //设置是否为编辑
            });

            http.role.query({
                succ : function (rs) {
                    self.roleList = rs
                },
                err : function (msg) {
                    console.log(msg)
                }
            })
        }
    }
</script>
