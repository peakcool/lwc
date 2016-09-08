<style>
</style>
<template>
	<div class="table-box col-md-12">
	    <div class="widget-heading">
            <h1 class="widget-title">权限管理</h1>
        </div>
	    <div class="col-md-12">
	        <div class="table-responsive">
	            <table class="table mb30 table-hover">
	                <thead>
	                    <tr>
	                        <th>权限ID</th>
	                        <th>权限标识</th>
	                        <th>权限类型</th>
	                        <th>权限名称</th>
	                        <th>权限描述</th>
	                        <th></th>
	                    </tr>
	                </thead>
	                <tbody class="table-hover"> 
	                    <tr v-for="per in perList">
	                        <td>{{per.id}}</td>
	                        <td>{{per.name}}</td>
	                        <td>{{per.type}}</td>
	                        <td>{{per.display_name}}</td>
	                        <td>{{per.description}}</td>
	                        <!-- <td class="table-action">
	                        	<lwc-buttons
									:type="buttons"
	                        	>
	                        	</lwc-button>
	                        </td> -->
	                        <td class="table-action">
	                        	<button type="button" class="btn btn-default">赋权</button>
	                            <button type="button" class="btn btn-success" @click="showSideBar(per.id)">编辑</button>
	                            <button type="button" class="btn btn-danger">删除</button>
	                        </td>
	                    </tr>
	                </tbody>
	            </table>
	        </div>
	        <!-- table-responsive -->
	    </div>
	    <!-- col-md-6 -->
    </div>
</template>

<script>
	
	import { setRouterName} from '../../vuex/common/actions.js'
	import * as addFormActions from '../../vuex/addForm/actions.js'
	import * as usersActions from '../../vuex/users/actions.js'
	var http = require('../../utils/HttpHelper.js')
	export default {
		data : function () {
			return {
				perList : [],
				// buttons : ['edit','delete','empower']
			}
		},
		// components : {
		// 	"lwc-buttons" : require("../../components/common/Button.vue")
		// },
		vuex : {
			actions : {
				saveRouter : setRouterName,
				toggleSideBar : addFormActions.toggleSideBarState,
				setEditObj : usersActions.setUserEditObj, //设置编辑对象
				initEditObj : usersActions.initUserEditObj //获取编辑对象
			},
		},
		methods : {
			showSideBar : function (id){
				console.log(id);
				// this.saveRouter("editUsers"); //编辑表单
				var self = this;
				http.permission.query({
					data : id,
					succ : function (rs) {
						self.setEditObj(rs)
					},
					err : function (msg) {
						console.log(msg)
					}
				})

				this.toggleSideBar(true);
			}
		},
		ready : function () {
			var self = this;
			http.permission.query({
				succ : function (rs) {
					self.perList = rs
				},
				err : function (msg) {
					console.log(msg)
				}
			})
		},
		route: {
	        activate(transition) {
	            this.saveRouter(this.$route.name);
	            transition.next();
	        },
    	}
	}
</script>
