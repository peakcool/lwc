<style>
.side-bar {
    width: 60%;
    height: 100%;
    position: fixed;
    top: 67px;
    right: 0;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 0px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.12);
    overflow:scroll;
}

.side-bar-close {
	float: right;
	font-size: 18px;
}

.side-bar-none{
	display: none;
}


</style>
<template>
    <div class="side-bar animated col-md-12" v-bind:class="{'slideInRight' : componentState, 'slideInLeft' : !componentState}">
        <lwc-title>
            <span slot="title">{{ getFormTitle }}</span>
        </lwc-title>
        <div class="widget">
            <div class="widget-body">
                <component :is="routerName"></component>
            </div>
        </div>
    </div>
</template>
<script>

var addFormActions = require('../../vuex/addForm/actions.js');
var addFormGetters = require('../../vuex/addForm/getters.js');
var commonGetters  = require('../../vuex/common/getters.js');
module.exports =  {
    components : {
    	'user' : require('../form/userForm.vue'),
    	'menu' : require('../form/menuForm.vue'),
    	'action' : require('../form/actionForm.vue'),
    	'role' : require('../form/roleForm.vue'),
    	'permission' : require('../form/permissionForm.vue'),
        'lwc-title' : require("./Title.vue"),
    },
    vuex : {
    	getters : {
			componentState : addFormGetters.sideBarState, //组件状态,true为伸状态，false为缩状态
			routerName : commonGetters.getRouterName, //根据路由名加载相应表单
            getFormTitle : commonGetters.getFormTitle, //获取表单标题
		}
    }, 
    ready : function () {
        var sb = $('.side-bar');
        sb.addClass('side-bar-none');
        this.$watch('componentState', function (v){
            if (v) sb.removeClass('side-bar-none');
        })
    }
}
</script>
