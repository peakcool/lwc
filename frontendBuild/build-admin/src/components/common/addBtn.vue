<style>
.material-button,
.material-button .shape {
    display: block;
}

.material-button {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: #333;
    position: fixed;
    bottom: 110px;
    right: 70px;
    cursor: pointer;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.material-button .shape {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

.material-button .shape:before,
.material-button .shape:after {
    content: "";
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(360deg);
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    -ms-transform: translate(-50%, -50%) rotate(360deg);
}

.material-button .shape:before {
    width: 15px;
    height: 2px;
}

.material-button .shape:after {
    height: 15px;
    width: 2px;
}

.material-button:hover {
    background: #000;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
}

.hide-btn{
	display: none;
}

</style>
<template>
    <div class="material-button" @click="showSideBar()" v-bind:class="{'hide-btn' : componentState}">
        <span class="shape"></span>
    </div>
    <lwc-sidebar></lwc-sidebar>
</template>
<script>

var addFormActions = require('../../vuex/addForm/actions.js'); 
var addFormGetters = require('../../vuex/addForm/getters.js');
var commonActions    = require('../../vuex/common/actions.js');

module.exports = {
    components : {
    	"lwc-sidebar" : require('./SideBar.vue')
    },
    vuex : {
    	actions : {
    		toggleSideBarState : addFormActions.toggleSideBarState, //设置右弹出层状态
            initCurrentObj : commonActions.initCurrentObj //初始化当前对象
    	},
    	getters : {
    		componentState : addFormGetters.sideBarState //获取右弹出层状态
    	}
    },
    methods : {
        showSideBar : function () {
            this.initCurrentObj();
            this.toggleSideBarState();
        }
    }, 
    ready : function () {
    	this.$watch('componentState', function (v){
            if (!v) $('.material-button').removeClass('hide-btn');
        })
    }
}
</script>
