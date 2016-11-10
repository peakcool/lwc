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
	setUserList : function (store, users){
		return store.dispatch('SET_USER_LIST', users);
	},

	/*
	 * 初始化用户列表
	 */
	initRoleList : function(store){
		return store.dispatch('INIT_USER_LIST');
	},
	/**
	 * 添加用户
	 */
	pushUser : function(store, user){
		return store.dispatch('PUSH_USER',user);
	},
	/**
	 * 删除一条用户
	 */
	deleteUser : function(store, user){
		return store.dispatch('DELETE_USER',user);
	}
}