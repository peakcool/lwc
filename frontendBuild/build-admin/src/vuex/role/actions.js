module.exports = {
	
	/**
	 * 初始化编辑对象
	 */
	initRoleEditObj : function(store){
		return store.dispatch('INIT_ROLE_EDIT_OBJ');
	},
	/**
	 * 设置编辑对象
	 */
	setRoleEditObj : function(store,editObj){
		return store.dispatch('SET_ROLE_EDIT_OBJ',editObj);
	},

	/**
	 * 设置角色列表
	 */
	setRoleList : function (store, arr){
		return store.dispatch('SET_ROLE_LIST', arr);
	}
}