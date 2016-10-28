module.exports = {
	
	/**
	 * 初始化编辑对象
	 */
	initUserEditObj : function(store){
		return store.dispatch('INIT_USER_EDIT_OBJ');
	},
	/**
	 * 设置编辑对象
	 */
	setUserEditObj : function(store,editObj){
		return store.dispatch('SET_USER_EDIT_OBJ',editObj);
	},

	/**
	 * 设置用户列表
	 */
	setUserList : function (store, arr){
		return store.dispatch('SET_USER_LIST', arr);
	}
}