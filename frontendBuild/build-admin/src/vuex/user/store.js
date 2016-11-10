var state = {
	obj : {}, //当前对象
	userList : []
};

var mutations = {

	/**
	 * 初始化当前对象
	 */
	INIT_USER_CURRENT_OBJ : function (state) {
		state.obj = {
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
	SET_USER_LIST : function (state, users){
		state.userList = users;
	},

	/*
	 * 初始化角色列表
	 */
	INIT_USER_LIST : function (state) {
		state.userList = [];
	},

	/**
	 * 添加用户
	 */
	PUSH_USER : function (state, user) {
		state.userList.push(user);
	},
	/**
	 * 删除一名用户
	 */
	DELETE_USER : function (state, user){
		var index = -1;
    	for(var i = 0,len = state.userList.length; i < len; i ++){
    		if(state.userList[i]['id'] == user.id){
    			index = i;
    			break;
    		}
    	}
    	if(index >= 0){
    		state.userList.splice(index,1);
    	}
	}
};

//整合初始状态和变更函数，得到所需store，就可以连接到我们应用中
module.exports = {
	state :  state,
	mutations : mutations
};