/**
 * 获取对象内容
 * @type {Object}
 */
module.exports = {

	/**
	 * 获取角色当前对象
	 */
	getRoleCurrentObj : function(state){
		return state.role.obj;
	},

	/**
	 * 获取角色列表
	 */
	getRoleList : function(state){
		return state.role.roleList;
	}
}