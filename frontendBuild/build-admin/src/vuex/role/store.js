var state = {
	obj : {}, //当前对象
	roleList : [] //角色列表
};

var mutations = {

	/**
	 * 初始化当前对象
	 */
	INIT_ROLE_CURRENT_OBJ : function (state) {
		state.obj = {
            "id":0,
            "name":"",
            "display_name":" ",
            "description":" "
		}
	},
	/**
	 * 设置当前对象
	 */
	SET_ROLE_CURRENT_OBJ : function(state,obj){
		state.obj = obj;
	},
	/*
	 * 初始化角色列表
	 */
	INIT_ROLE_LIST : function (state) {
		state.roleList = [];
	},
	/**
	 * 设置角色列表
	 */
	SET_ROLE_LIST : function (state, arr){
		state.roleList = arr;
	},
	/**
	 * 添加角色
	 */
	PUSH_ROLE : function (state, role) {
		state.roleList.push(role);
	},
	/**
	 * 删除一条角色
	 */
	DELETE_ROLE : function (state, role){
		var index = -1;
    	for(var i = 0,len = state.roleList.length; i < len; i ++){
    		if(state.roleList[i]['id'] == role.id){
    			index = i;
    			break;
    		}
    	}
    	if(index >= 0){
    		state.roleList.splice(index,1);
    	}
	}

};

//整合初始状态和变更函数，得到所需store，就可以连接到我们应用中
module.exports = {
	state :  state,
	mutations : mutations
};