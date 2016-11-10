<template>
    <div class="form-group">
        <label for="user_role" slot="checkbox_label">用户角色</label>
        <lwc-checkbox :value="roleList" :model.sync="model"></lwc-checkbox>
    </div>
    <div class="form-group">
        <label for="name">用户名称</label>
        <lwc-input
            type="text"
            verify="isTitle"
            hodler=""
            tips="*"
            :value.sync="userObj.name">
        </lwc-input>
    </div>
    <div class="form-group">
        <label for="email">用户邮箱</label>
        <lwc-input
            type="text"
            verify="isEmail"
            hodler=""
            tips="*"
            :value.sync="userObj.email">
        </lwc-input>
    </div>
    <div class="form-group" v-show="isEdit">
        <label for="password" >原始密码</label>
        <lwc-input
            type="text"
            verify="isPwd"
            hodler=""
            tips="*"
            :value.sync="userObj.password_old">
        </lwc-input>
    </div>
    <div class="form-group">
        <label for="password" v-if="isEdit">新密码</label>
        <label for="password" v-else>用户密码</label>
    	<lwc-input
            type="text"
            verify="isPwd"
            hodler=""
            tips="*"
            :value.sync="userObj.password">
        </lwc-input>
    </div>
    <div class="form-group">
        <label for="password_confirmation" v-if="isEdit">确认新密码</label>
        <label for="password_confirmation" v-else>确认密码</label>
    	<lwc-input
            type="text"
            verify="isPwd"
            hodler=""
            tips="*"
            :value.sync="userObj.password_confirmation">
        </lwc-input>
    </div>
    <div class="text-right">
        <button type="submit" class="btn btn-success" @click="submitForm">提交</button>
        <button type="reset" class="btn btn-black" @click="showSideBar(false)">取消</button>
    </div>
</template>

<script>
    var userGetters = require('../../vuex/user/getters.js');
    var userActions = require('../../vuex/user/actions.js');
    var roleGetters = require('../../vuex/role/getters.js');
    var roleActions = require('../../vuex/role/actions.js');
    var commonActions = require('../../vuex/common/actions.js');
    var commonGetters = require('../../vuex/common/getters.js');
    var addFormActions = require('../../vuex/addForm/actions.js');

    var common = require('../../utils/Common.js');
    var http = require('../../utils/HttpHelper.js');

    module.exports = {
        vuex : {
            getters : {
                currentObj  : userGetters.getUserCurrentObj, //获取当前对象
                roleList    : roleGetters.getRoleList, //获取角色数据
                checkboxRaw : commonGetters.getCheckboxRaw //获取原始数据
            },
            actions : {
                setRoleList    : roleActions.setRoleList, //设置角色数据
                setCheckboxRaw : commonActions.setCheckboxRaw, //设置checkbox 原始数据
                toggleSideBar  : addFormActions.toggleSideBarState, //设置右侧栏状态
                pushUser       : userActions.pushUser //添加用户
            }
        },
        data : function () {
            return {
                userObj : {
                    name : "",
                    email: "",
                    password: "",
                    password_old:"",
                    password_confirmation : ""
                },
                isEdit : false,
                model   : [],
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
                },
                /**
                * 数据的验证
                */
                isAdopt : function(){

                    console.log(this.userObj.name);
                    console.log($.isEmptyObject(this.userObj.name));
                    if($.isEmptyObject(this.userObj.name)){
                        common.tips('用户名称不能为空','error',1500);
                        return false;
                    }
                    if($.isEmptyObject(this.userObj.email)){
                        common.tips('用户邮箱不能为空','error',1500);
                        return false;
                    }
                    
                    if (!$.isEmptyObject(this.userObj.password)){
                        if (this.userObj.password != this.userObj.password_confirmation) {
                            common.tips('两次密码必须一致','error',1500);
                            return false;
                        }
                    }
                    return true;
                },

                /**
                 * 创建用户
                 */
                creatData : function (){
                    var self = this;
                    if(self.isAdopt()){
                        http.user.create({
                            data : self.userObj,
                            succ : function(rs){
                                self.pushUser(self.userObj);
                                self.toggleSideBar(false);
                                common.tips('提交成功','success',1500);
                            },
                            err : function(msg){
                                common.tips(msg,'error',1500);
                            }
                        });
                    }
                },

                /**
                 * 更新用户
                 */
                updateData : function (){
                    var self = this;
                    if(self.isAdopt()){
                        http.user.save({
                            key : [self.userObj.id],
                            data : self.userObj,
                            succ : function(rs){
                                self.toggleSideBar(false);
                                common.tips('提交成功','success',1500);
                            },
                            err : function(msg){
                                common.tips(msg,'error',1500);
                            }
                        });
                    }
                }
            }
        },
        components : {
            'lwc-checkbox' : require('../common/Checkbox.vue'),
            'lwc-input' : require('../common/Input.vue'),
            'lwc-form-botton' : require('../common/FormButton.vue')
        },
        ready : function () {
            var self = this;
            self.$watch("currentObj" , function (v) {
                self.userObj = v;
                v.id != 0 ? self.isEdit = true : self.isEdit = false; //设置是否为编辑
                if (self.isEdit) self.setCheckboxRaw(v.role);
            });

            self.$watch("checkboxRaw" , function(raw){
                self.model = raw;
            });

            if (self.roleList.length < 1) self.queryRoleData();
        },
        methods : {
            submitForm : function(){
                this.isEdit ? this.updateData() : this.creatData();
            },
            showSideBar : function(state){
                this.toggleSideBar(state);
            }
        }
    }
</script>
