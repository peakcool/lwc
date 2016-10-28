<template>
    <div class="form-group">
        <label for="user_role" slot="checkbox_label">用户角色</label>
        <lwc-checkbox :value="roleList" :oldvalue="userObj.role"></lwc-checkbox>
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
    var roleGetters = require('../../vuex/role/getters.js');
    var roleActions = require('../../vuex/role/actions.js');
    var http = require('../../utils/HttpHelper.js');

    module.exports = {
        vuex : {
            getters : {
                currentObj : commonGetters.getCurrentObj, //获取当前对象
                roleList : roleGetters.getRoleList //获取角色数据
            },
            actions : {
                setRoleList : roleActions.setRoleList //设置角色数据
            }
        },
        data : function () {
            return {
                userObj : Object,
                editObj : false,
                queryRoleData : function (){
                    var self = this;
                    http.role.query({
                        succ : function (rs) {
                            self.setRoleList(rs.list);
                        },
                        err : function (msg) {
                            common.tips(msg,'error',1500);
                        }
                    })
                }
            }
        },
        components : {
            'lwc-checkbox' : require('../common/Checkbox.vue')
        },
        
        ready : function () {
            var self = this;
            self.$watch("currentObj" , function (v) {
                self.userObj = v;
                v.state == undefined ? self.editObj = true : self.editObj = false; //设置是否为编辑
            });

            if (self.roleList.length < 1){
                self.queryRoleData();
            } 
        }
    }
</script>
