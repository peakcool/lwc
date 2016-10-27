<style>
.text-right {
	margin-bottom: 10px;
}
</style>
<template>
	<div class="text-right">
        <button type="submit" class="btn btn-success">提交</button>
        <button type="reset" class="btn btn-black" @click="showSideBar(false)">取消</button>
    </div>
</template>

<script>
	var addFormActions = require('../../vuex/addForm/actions.js');

	module.exports = {
		props : ['value'],
		vuex : {
    		actions : {
    			showSideBar : addFormActions.toggleSideBarState
    		}
    	},
    	ready : function (){
    		console.log(this.value);
    	}
	}
</script>