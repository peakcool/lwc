<template>
    <div class="form-group">
        <label class="" for="name">角色标识</label>
        <div class="col-md-12">
            <lwc-input 
                type="text"
                verify="isTitle"
                hodler=""
                tips="*"  
                :value.sync="roleObj.name">
            </lwc-input>
        </div>
    </div>
    <div class="form-group">
        <label class="" for="display_name">角色名称</label>
        <div class="col-md-12">
            <lwc-input 
                type="text"
                verify="isTitle"
                hodler=""
                tips="*"  
                :value.sync="roleObj.display_name">
            </lwc-input>
        </div>
    </div>
    <div class="form-group">
        <label class="" for="description">角色描述</label>
        <div class="col-md-12">
            <lwc-input 
                type="text"
                verify="isTitle"
                hodler=""
                tips="*"  
                :value.sync="roleObj.description">
            </lwc-input>
        </div>
    </div>
    <!-- <lwc-form-button></lwc-form-button> -->
    <div class="text-right">
        <button type="submit" class="btn btn-success" @click="submitForm">提交</button>
        <button type="reset" class="btn btn-black" @click="showSideBar(false)">取消</button>
    </div>
</template>

<script>
    var roleGetters = require('../../vuex/role/getters.js');
    var roleActions = require('../../vuex/role/actions.js');
    var addFormActions = require('../../vuex/addForm/actions.js');

    var http = require('../../utils/HttpHelper.js');
    var common = require('../../utils/Common.js');
    module.exports = {
        data : function () {
            return {
                roleObj : {
                    id : 0,
                    name : " ",
                    display_name : " ",
                    description : " "
                },
                isEdit : false,
                /**
                * 数据的验证
                */
                isAdopt : function(){

                    if($.isEmptyObject(this.roleObj.name)){
                        common.tips('角色标识不能为空','error',1500);
                        return false;
                    }
                    if($.isEmptyObject(this.roleObj.display_name)){
                        common.tips('角色名称不能为空','error',1500);
                        return false;
                    }
                    if($.isEmptyObject(this.roleObj.description)){
                        common.tips('角色描述不能为空','error',1500);
                        return false;
                    }
                    return true;
                },
                /**
                 * 创建角色
                 */
                creatData : function (){
                    var self = this;
                    if(self.isAdopt()){
                        http.role.create({
                            data : self.roleObj,
                            succ : function(rs){
                                self.pushRole(self.roleObj);
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
                 * 更新角色
                 */
                updateData : function (){
                    var self = this;
                    if(self.isAdopt()){
                        http.role.save({
                            key : [self.roleObj.id],
                            data : self.roleObj,
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
        vuex : {
            actions : {
                toggleSideBar : addFormActions.toggleSideBarState,
                pushRole : roleActions.pushRole //添加角色

            },
            getters : {
                roleCurrentObj : roleGetters.getRoleCurrentObj, //获取当前对象
            }
        },
        components : {
            'lwc-input' : require('../common/Input.vue'),
            'lwc-form-button' : require("../common/FormButton.vue"),
        },
        ready : function () {
            var self = this;
            self.$watch("roleCurrentObj" , function (v) {
                self.roleObj = v;
                v.id != 0 ? self.isEdit = true : self.isEdit = false; //设置是否为编辑
            });
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