<template>
	<div class="widget-heading side-bar-title">
		<i class="fa fa-chevron-right side-bar-close" @click="showSideBar()"></i>
		<h1 class="widget-title" slot="side-bar-title">
			<slot name="title"></slot>
		</h1>
    </div>
</template>

<script>
	var addFormaction = require("../../vuex/addForm/actions.js");

	module.exports = {
		vuex : {
			actions : {
				toggleSideBarState : addFormaction.toggleSideBarState
			}
		},
		methods : {
			showSideBar : function () {
				this.toggleSideBarState(false)
			}
		}
	}
</script>