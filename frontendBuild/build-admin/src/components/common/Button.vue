<template>
		
		<!--赋权按钮-->
        <button type="button" 
        	v-for="button in type" 
        	v-if="button == 'empower'" 
        	class="btn btn-default">
        	赋权
        </button>
		
		<!--编辑按钮-->
        <button type="button" 
        	v-for="button in type"
        	v-if="button == 'edit'"
			class="btn btn-success" 
			@click="showSideBar(id)">
			编辑
		</button>

		<!--删除按钮-->
        <button type="button" 
        	v-for="button in type" 
        	v-if="button == 'delete'" 
        	class="btn btn-danger">
        	删除
        </button>

</template>

<script>
	import * as addFormActions from '../../vuex/addForm/actions.js'
	// import * as editFormActions from '../../vuex/editForm/actions.js'

	var http = require('../../utils/HttpHelper.js')

	export default {
		props : ['type','id'],
		data : function (){

		},
		
		vuex : {
			actions : {
				toggleSideBar : addFormActions.toggleSideBarState,
				// setEditObj : editFormActions.setEditObj
			}
		},
		methods : {
			showSideBar : function (id){

			}
		}
	}
</script>