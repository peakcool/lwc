<style>
	.fixed-left .side-menu.left {
	    bottom: 50px;
	    height: 100%;
	    margin-bottom: -70px;
	    margin-top: 0px;
	    padding-bottom: 70px;
	    position: fixed;
	}
	.side-menu.left {
	    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
	    position: fixed;
	    top: 60px;
	}
	.side-menu {
	    bottom: 0;
	    top: 0;
	    width: 240px;
	    z-index: 2;
	    background: #2f3e47;

	    transition:width 1s;
		-moz-transition:width 1s; /* Firefox 4 */
		-webkit-transition:width 1s; /* Safari and Chrome */
		-o-transition:width 1s; /* Opera */
	}
	.slimScrollDiv{
		position: relative; 
		overflow: hidden; 
		width: auto; 
		height: 735px;
	}
	.sidebar-inner{
		overflow: hidden; 
		/*width: auto; */
		width: 240px;
		height: 735px;
	}

	#sidebar-menu, #sidebar-menu ul, #sidebar-menu li, #sidebar-menu a {
	    border: 0;
	    font-weight: normal;
	    line-height: 1;
	    list-style: none;
	    margin: 0;
	    padding: 0;
	    position: relative;
	    text-decoration: none;
	}
	#sidebar-menu {
	    padding-bottom: 30px;
	    padding-top: 30px;
	    width: 100%;
	}
	#sidebar-menu > ul > li > a {
	    color: rgba(255, 255, 255, 0.5);
	    display: block;
	    padding: 12px 20px;
	    margin: 0px 0px;
	    font-size: 15px;
	    border-left: 3px solid transparent;
	}
	#sidebar-menu a {
	    line-height: 1.3;
	}
	#sidebar-menu ul li a i {
	    display: inline-block;
	    font-size: 16px;
	    line-height: 17px;
	    margin-left: 3px;
	    margin-right: 15px;
	    text-align: center;
	    width: 20px;
	}
	#sidebar-menu  ul  li  a.active {
	    background: #2b3941 !important;
	    border-left: 3px solid rgba(255, 255, 255, 0.4);
	    color: rgba(255, 255, 255, 0.9) !important;
	}
	#sidebar-menu  ul  li  a:hover {
	    color: rgba(255, 255, 255, 0.8) !important;
	    text-decoration: none;
	}
	
	/* 子级菜单栏 */
	.menu-child > li > a{
		color: rgba(255, 255, 255, 0.5);
	    display: block;
	    margin: 10px 45px !important;
	    font-size: 14px;
	}
	
	#sidebar-menu .showhide {
		float: right;
	}
	
	/* 菜单栏伸缩 */
	.hiddenLeft {
		width: 0% !important;
		transition:width 1s;
		-moz-transition:width 1s; /* Firefox 4 */
		-webkit-transition:width 1s; /* Safari and Chrome */
		-o-transition:width 1s; /* Opera */
	}
	
	.menu-child {
		display: none;
	}
</style>
<template>
	<!-- <div class="left side-menu"> -->
	<div class="left side-menu" v-bind:class="{ 'hiddenLeft' : componentState }">
        <div class="slimScrollDiv">
        	<div class="sidebar-inner">
            <!--- Divider -->
	            <div id="sidebar-menu">
	                <ul>
	                	<li class="has_sub" v-for="l1 in l1_arr">
	                		<a class="waves-effect" v-if=" l1.route == 'admin'" href="#!/{{ l1.route }}">
	                        	<i v-bind:class="l1.icon"></i> 
	                        	<span>{{ l1.description }}</span>
	                        </a>
	                		<a class="waves-effect" @click="showMenu" v-else>
	                        	<i v-bind:class="l1.icon"></i> 
	                        	<span>{{ l1.description }}</span>
	                        	<i class="fa showhide fa-angle-down"></i>
	                        </a>
	                        <ul class="menu-child">
                        		<li class="has_sub" v-for="l2 in l2_arr" v-if="l1.id == l2.parent_id">
	                        		<a href="#!/{{ l2.route }}">
	                        			<i v-bind:class="l2.icon "></i> 
	                        			<span>{{ l2.description}}</span>
	                        		</a>
                        		</li>
                        	</ul>
	                	</li>
	                </ul>
	            </div>
	        </div>
	    </div>
    </div>
</template>
<script>

	var commonGetters = require('../../vuex/common/getters.js');
	var commonActions = require('../../vuex/common/actions.js');
    var http = require('../../utils/HttpHelper.js');
	var Common = require('../../utils/Common.js');

	module.exports = {
		vuex : {
			actions : {
				setLeftMenus : commonActions.setLeftMenus
			},
			getters : {
				componentState : commonGetters.fixmodelState, //组件状态,true为伸状态，false为缩状态
				leftMenus : commonGetters.getLeftMenus //获取菜单配置
			}
		},
		data : function () {
			return {
				/**
				* 将菜单拆分,获取指定的菜单列表
				* @param level 菜单等级
				*/
				splitMenu : function(level) {
					var arr = [];
					for(var i = 0, len = this.leftMenus.length; i < len ; i++){
						var l = this.leftMenus[i]['level'];
						if (l == level) {
							arr.push(this.leftMenus[i]);
						}
					}
					return arr;
				},
				/**
				* 获取所有的菜单
				*/
				queryMenu : function (){
					var self = this;
					http.menu.query({
						succ : function (rs){
							self.setLeftMenus(rs.list);
						},
						err : function (msg){
							Common.tips(msg, 'error', 1500);
						}
					});
				}
			}
		},
		computed : {
			/**
			 * 1级菜单
			 * @return {[array]} [1级菜单list]
			 */
			l1_arr : function(){
				return this.splitMenu(1);
			},
			/**
			 * 2级菜单
			 * @return {[array]} [2级菜单list]
			 */
			l2_arr : function(){
				return this.splitMenu(2);
			},
		},
		methods: {
			showMenu : function (event){ //菜单下拉

				var clickobj = event.currentTarget, //获取点击当前dom对象
					i_child = $(clickobj).find('.showhide'),
					menu_child = $(clickobj).next();

				//子菜单是否隐藏
				menu_child.is(":visible") ? i_child.removeClass("fa-angle-up").addClass("fa-angle-down") : i_child.removeClass('fa-angle-down').addClass('fa-angle-up');
				$(clickobj).toggleClass('active');
				menu_child.slideToggle('slow');
			}
		},
		ready : function () {

			if (this.leftMenus.length < 1){
   				this.queryMenu();
   			}

			// var self = this;
			// if (self.leftMenus == " ") {
			// 	http.menu.query({
			// 		data : {
			// 			key : "menu"
			// 		},
	  //               succ : function (rs) {

	  //                   self.setLeftMenus(rs);
	  //               },
	  //               err : function (msg) {
	  //                   console.log(msg)
	  //               }
	  //           });
			// }

   //          this.$watch('leftMenus', function(v){ //监听菜单配置
   //          	this.menus = v;
   //          });

   						
        }
    }
</script>>