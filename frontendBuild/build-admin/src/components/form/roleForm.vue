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
    var commonGetters = require('../../vuex/common/getters.js');
    var addFormActions = require('../../vuex/addForm/actions.js');

    var http = require('../../utils/HttpHelper.js');
    var common = require('../../utils/Common.js');
    module.exports = {
        data : function () {
            return {
                roleObj : {
                    name : " ",
                    display_name : " ",
                    description : " "
                },
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
                }
            }
        },
        vuex : {
            actions : {
                toggleSideBar : addFormActions.toggleSideBarState
            },
            getters : {
                currentObj : commonGetters.getCurrentObj, //获取当前对象
            }
        },
        components : {
            'lwc-input' : require('../common/Input.vue'),
            'lwc-form-button' : require("../common/FormButton.vue"),
        },
        ready : function () {
            var self = this;
            self.$watch("currentObj" , function (v) {
                self.roleObj = v;
            });
        },
        methods : {
            submitForm : function(){
                if(this.isAdopt()){
                    http.role.save({
                    key : [this.roleObj.id],
                    data : this.roleObj,
                    succ : function(rs){
                        common.go('role');
                        common.tips('保存成功','success',1500);

                    },
                    err : function(msg){
                        common.tips(msg,'error',1500);
                    }
                });
                }
            },
            showSideBar : function(state){
                this.toggleSideBar(state);
            }
        }
    }
</script>