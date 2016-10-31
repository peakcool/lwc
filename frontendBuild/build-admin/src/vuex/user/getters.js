module.exports = {

	/**
	 * 获取对象内容
	 */
	getUserCurrentObj : function(state){
		return state.user.obj;
	},

	/**
	 * 获取用户列表
	 */
	getUserList : function(state){
		return state.user.userList;
	}
}