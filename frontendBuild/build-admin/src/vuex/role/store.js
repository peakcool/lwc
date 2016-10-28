var state = {
	editObj : {}, //编辑对象
	roleList : []
};

var mutations = {

	/**
	 * 初始化编辑对象
	 */
	INIT_ROLE_EDIT_OBJ : function (state) {
		state.editObj = {
            "id":0,
            "name":"",
            "display_name":" ",
            "description":" "
		}
	},
	/**
	 * 设置编辑对象
	 */
	SET_ROLE_EDIT_OBJ : function(state,editObj){
		state.editObj = editObj;
	},

	/**
	 * 设置角色列表
	 */
	SET_ROLE_LIST : function (state, arr){
		state.roleList = arr;
	}
};

//整合初始状态和变更函数，得到所需store，就可以连接到我们应用中
module.exports = {
	state :  state,
	mutations : mutations
};