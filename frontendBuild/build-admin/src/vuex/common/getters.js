module.exports = {

	//获取模块状态
	fixmodelState : function(state){
		return state.common.fixmodelState;
	},
	
	//获取路由名
	getRouterName : function (state) {
		return state.common.routerName;
	},

	//获取总页数
	pagingTotal : function(state){
		return state.common.paging.total;
	},
	//获取当前页数
	pagingPage : function(state){
		return state.common.paging.page;
	},
	//获取每页的条数
	pagingNumber : function(state){
		return state.common.paging.number;
	},

	//获取当前对象
	getCurrentObj : function(state){
		return state.common.currentObj;
	},

	//获取表单标题
	getFormTitle : function(state){
		return state.common.formTitle;
	},

	//获取配置对象
	getCommonSetting : function(state) {
		console.log("getters:",state.common.setting);
		return state.common.setting;
	},

	//获取左侧栏菜单配置
	getLeftMenus : function (state) {
		return state.common.leftMenus;
	}
}