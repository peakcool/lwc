<style>
</style>
<template>
	<div class="table-box col-md-12">
	    <div class="widget-heading">
            <h1 class="widget-title">操作管理</h1>
        </div>
	    <div class="col-md-12">
	        <div class="table-responsive">
	            <table class="table mb30 table-hover">
	                <thead>
	                    <tr>
	                        <th>操作ID</th>
	                        <th>操作名称</th>
	                        <th>操作描述</th>
	                        <th>操作分组</th>
	                        <th>操作标识</th>
	                        <th></th>
	                    </tr>
	                </thead>
	                <tbody class="table-hover"> 
	                    <tr v-for="action in actionList">
	                        <td>{{ action.id }}</td>
	                        <td>{{ action.name }}</td>
	                        <td>{{ action.description }}</td>
	                        <td>{{ action.group }}</td>
	                        <td>{{ action.action }}</td>
	                        <td class="table-action">
	                            <button type="button" class="btn btn-success" @click="showSideBar(action)">编辑</button>
	                            <button type="button" class="btn btn-danger">删除</button>
	                        </td>
	                    </tr>
	                </tbody>
	            </table>
	        </div>
	        <div class="col-md-12">
            	<lwc-page></lwc-page>	
            </div>
	        <!-- table-responsive -->
	    </div>
	    <!-- col-md-6 -->
    </div>
</template>

<script>

	var commonGetters  = require('../../vuex/common/getters.js');
    var commonActions  = require('../../vuex/common/actions.js');
    var addFormActions = require('../../vuex/addForm/actions.js');
    var addFormGetters  = require('../../vuex/addForm/getters.js');

	var http = require('../../utils/HttpHelper.js');
    var common = require('../../utils/Common.js');

	module.exports = {
		vuex : {
			actions : {
				setCurrentObj : commonActions.setCurrentObj, //设置当前对象
				saveRouter : commonActions.setRouterName, //设置路由参数
				setPagingTotal : commonActions.setPagingTotal,//设置总页数
				toggleSideBar : addFormActions.toggleSideBarState, //设置右弹出层状态
				setFormTitle : commonActions.setFormTitle, //设置表单标题
			},
			getters : {
            	pagingTotal : commonGetters.pagingTotal,//总页数
                pagingPage : commonGetters.pagingPage,//获得当前的页数
                sideBarState : addFormGetters.sideBarState, //获取表单侧栏状态
            }
		},
		data : function () {
			return {
				actionList : [],
				queryMenu : function() {
					var self = this;
					http.action.query({
						data : {
		                    page : this.pagingPage
		                },
						succ : function (rs) {
							self.setPagingTotal(rs.total)
							self.actionList = rs.list
						},
						err : function (msg) {
							common.tips(msg,'error',1500);
						}
					});
				}
			};
		},
		components : {
			"lwc-page" : require("../../components/common/Page.vue"),
		},
		
		methods : {
			showSideBar : function (currentObj){
            	this.setFormTitle("编辑操作");
				this.setCurrentObj(currentObj); //设置当前对象
				this.toggleSideBar(true); //设置右弹出框状态
			}
		},
		ready : function () {
			var self = this;
            //执行一次数据的获取
            if(this.pagingTotal < 1){
                this.queryMenu();
            }
            //监听page的变化
            this.$watch('pagingPage',function(v){
                self.queryMenu();                          
            });

            this.setFormTitle("添加操作"); //设置表单title
            this.$watch('sideBarState', function(state){ //监听表单侧栏状态，修改表单title
            	if (!state) this.setFormTitle("添加操作")
            });
		},
		route : {
			data : function (transition) {
				this.queryMenu()
			},
	        activate(transition) {
	            this.saveRouter(this.$route.name);
	            transition.next();
	        },
    	}
	}
</script>
