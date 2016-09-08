<style>
	.topbar {
	    left: 0px;
	    position: fixed;
	    right: 0;
	    top: 0px;
	    z-index: 999;
	    /*height: 40px !important;*/
	}
	.topbar .topbar-left {
	    float: left;
	    position: relative;
	    width: 240px;
	    z-index: 1;
	}
	.navbar-default {
	    /*background-color: #FD5959;*/
	    background-color: #fff;
	    border-radius: 0px;
	    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 6px 0 rgba(0, 0, 0, 0.12);
	    border: none;
	    margin-bottom: 0px;
	}
	.navbar {
	    position: relative;
	    min-height: 50px;
	    margin-bottom: 20px;
	    border: 1px solid transparent;
	}
	.logo {
	    color: #000 !important;
	    /*color: #ffffff !important;*/
	    font-size: 24px;
	    letter-spacing: .05em;
	    line-height: 60px;
	    text-transform: uppercase;
	}
	
	.title-box {
    	color: #1caf9a;
    	font-weight: 600;
	}

	.pull-left {
		border-right:1px solid #eee;
		border-left: 1px solid #eee;
		height: 65px;
	}
</style>
<template>
	<div class="topbar">
        <!-- LOGO -->
        <div class="topbar-left">
            <div class="text-center">
                <a href="#!/" class="logo">
                	<span class="title-box">[</span>
                	<span>POS<span class="f12">Admin</span></span>
                	<span class="title-box">]</span>
                </a>
            </div>
        </div>

        <!-- Button mobile view to collapse sidebar menu -->
        <div class="navbar navbar-default" role="navigation">
            <div class="container">
                    <div class="pull-left">
                        <button class="button-menu-mobile open-left waves-effect waves-light" @click="scalingLeft()">
                            <i class="fa fa-bars"></i>
                        </button>
                        <span class="clearfix"></span>
                    </div>
                <h-right></h-right>
                <!--/.nav-collapse -->
            </div>
        </div>
    </div>
</template>

<script>

	import { toggleFixmodelState } from '../../vuex/common/actions.js'

	export default {
		vuex : {
			actions: {
				scalingLeft : toggleFixmodelState //button点击触发，修改state
			}
		},
		components : {
			'h-right' : require('./HeaderRight.vue')
		}
	}
</script>>