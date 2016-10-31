var state = {
	obj : {}, //编辑对象
	userList : []
};

var mutations = {

	/**
	 * 初始化当前对象
	 */
	INIT_USER_CURRENT_OBJ : function (state) {
		state.editObj = {
            "id":0,
            "name":"",
            "display_name":" ",
            "description":" ",
            "role" : {}
		}
	},
	/**
	 * 设置当前对象
	 */
	SET_USER_CURRENT_OBJ : function(state,obj){
		state.obj = obj;
	},

	/**
	 * 设置用户列表
	 */
	SET_USER_LIST : function (state, arr){
		state.userList = arr;
	}
};

//整合初始状态和变更函数，得到所需store，就可以连接到我们应用中
module.exports = {
	state :  state,
	mutations : mutations
};