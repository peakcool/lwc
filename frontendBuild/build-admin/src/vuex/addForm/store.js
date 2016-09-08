//创建对象来保存应用启动时的初始状态
var state = {
	sideBar : false,//addForm/FixModel.vuex组件的状态［true:显示状态,false:关闭状态］
};

//创建对象存储一系列我们接下来要写的mutation函数
var mutations = {
	//设置FixModel 组件的状态
	TOGGLE_SIDEBAR_STATE : function(state,bool){
		if(bool != undefined){
			state.sideBar = bool;
		}else{
			state.sideBar = !state.sideBar;
		}
	}
};

//整合初始状态和变更函数，得到所需store，就可以连接到我们应用中
module.exports = {
	state :  state,
	mutations : mutations
};