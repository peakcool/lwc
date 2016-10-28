/**
 * 获取对象内容
 * @type {Object}
 */
module.exports = {
	getUserEditObj : function(state){
		return state.user.editObj;
	},

	/**
	 * 获取用户列表
	 */
	getUserList : function(state){
		return state.user.userList;
	}
}