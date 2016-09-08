var state = {
	editObj : {} //编辑对象
};

var mutations = {

	/**
	 * 初始化编辑对象
	 * @param {[type]} state [description]
	 */
	INIT_MENU_EDIT_OBJ : function (state) {
		state.editObj = {
            "id":0,
            "parent_id" : " ",
            "name":"",
            "display_name":" ",
            "description":" ",
            "icon" : " ",
            "sort" : " ",
            "hide" : " "
		}
	},
	/**
	 * 设置编辑对象
	 * @param {[type]} state   [description]
	 * @param {[type]} editobj [description]
	 */
	SET_MENU_EDIT_OBJ : function(state,editObj){
		state.editObj = editObj;
	}
};

//整合初始状态和变更函数，得到所需store，就可以连接到我们应用中
module.exports = {
	state :  state,
	mutations : mutations
};