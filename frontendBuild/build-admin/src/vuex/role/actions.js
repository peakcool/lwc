module.exports = {
	
	/**
	 * 初始化当前对象
	 */
	initRoleCurrentObj : function(store){
		return store.dispatch('INIT_ROLE_CURRENT_OBJ');
	},
	/**
	 * 设置当前对象
	 */
	setRoleCurrentObj : function(store,obj){
		return store.dispatch('SET_ROLE_CURRENT_OBJ',obj);
	},
	/*
	 * 初始化角色列表
	 */
	initRoleList : function(store){
		return store.dispatch('INIT_ROLE_LIST');
	},
	/**
	 * 添加角色
	 */
	pushRole : function(store, role){
		return store.dispatch('PUSH_ROLE',role);
	},
	/**
	 * 删除一条角色
	 */
	deleteRole : function(store, role){
		return store.dispatch('DELETE_ROLE',role);
	},
	/**
	 * 设置角色列表
	 */
	setRoleList : function (store, arr){
		return store.dispatch('SET_ROLE_LIST', arr);
	}
}