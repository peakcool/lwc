/**
 * 获取对象内容
 * @type {Object}
 */
module.exports = {

	/**
	 * 获取权限编辑对象
	 */
	getRoleEditObj : function(state){
		return state.role.editObj;
	},

	/**
	 * 获取角色列表
	 */
	getRoleList : function(state){
		return state.role.roleList;
	}
}