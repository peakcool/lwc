module.exports = {
	
	/**
	 * 初始化当前对象
	 */
	initUserCurrentObj : function(store){
		return store.dispatch('INIT_USER_CURRENT_OBJ');
	},
	/**
	 * 设置当前对象
	 */
	setUserCurrentObj : function(store,obj){
		return store.dispatch('SET_USER_CURRENT_OBJ',obj);
	},

	/**
	 * 设置用户列表
	 */
	setUserList : function (store, arr){
		return store.dispatch('SET_USER_LIST', arr);
	}
}