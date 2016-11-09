<style>
	.content-page {
	    overflow-y: auto;
	    /*overflow-x: hidden;*/
	    padding: 65px 0 0 240px;

	    transition:padding 1s;
		-moz-transition:padding 1s; /* Firefox 4 */
		-webkit-transition:padding 1s; /* Safari and Chrome */
		-o-transition:padding 1s; /* Opera */
	}
	.content-page > .content {
	    padding: 30px 0 15px 5px;
	}

	.container {
		margin: 0px;
	}
	
	/* 内容box收缩 */
	.showContent {
		padding: 62px 0 0 0px !important;
		transition:padding 1s;
		-moz-transition:padding 1s; /* Firefox 4 */
		-webkit-transition:padding 1s; /* Safari and Chrome */
		-o-transition:padding 1s; /* Opera */
	}
</style>
<template>

	<div class="content-page" :style="{height : height + 'px'}" v-bind:class="{ 'showContent' : componentState }">
		<!-- Start content -->
		<div class="content">
			<div class="container">
				<router-view></router-view>
	        </div> <!-- container -->
	    </div> <!-- content -->

	    <!--悬浮添加按钮-->
		<lwc-add-btn></lwc-add-btn>
    	<!-- <lwc-sidebar></lwc-sidebar> -->

	</div>
</template>
<script>

	var commonGetters  = require('../../vuex/common/getters.js');

	module.exports =  {
		data : function(){
			return {
				height : 0,
			}
		},
		components : {
            'lwc-add-btn' : require('./AddBtn.vue'),
            "lwc-sidebar" : require('./SideBar.vue')
        },
		vuex : {
			getters : {
				componentState : commonGetters.fixmodelState, //侧栏组件状态,true为伸状态，false为缩状态
			}
		},
		ready : function(){
			this.height = document.body.clientHeight;
			//浏览器窗口改变的监听
			window.onresize = function(){
				self.height = document.body.clientHeight;
			};
		}
	}
</script>