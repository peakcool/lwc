//创建对象来保存应用启动时的初始数据
var state = {
	fixmodelState : false, //common/FixModel.vuex组件的状态［true:显示状态,false:关闭状态］
	routerName : "menu", //页面路由名,默认为菜单MENU
	paging : {
		total : 0,//总页数
		page : 1 ,//当前页数
		number : 20 //每页显示多少条

	},//分页的相关状态
	currentObj : {
		state : 1
	}, //当前对象
	formTitle : " ", //表单标题
	setting : " ",
	leftMenus : [],
	checkobx_raw : {}
};

//创建对象存储一系列我们接下来要写的mutation函数
var mutations = {
	//设置FixModel 组件的状态
	TOGGLE_FIXMODEL_STATE : function(state,bool){
		if(bool != undefined){
			state.fixmodelState = bool;
		}else{
			state.fixmodelState = !state.fixmodelState;
		}
	},

	/**
	 * 设置路由名，表单标题
	 * @param {[string]} router [路由]
	 * @param {[string]} title  [标题]
	 */
	SAVE_ROUTER_NAME : function (state, router) {

		if (router != undefined) {
			state.routerName = router;
		} else {
			state.routerName = " ";
		}
	},

	/**
	* 设置分页的总页数
	* @param total 总页数
	*/
	SET_PAGING_TOTAL : function(state,total){
		state.paging.total = total;
	},
	/**
	* 设置当前的第几页
	* @param page 页数
	*/
	SET_PAGING_PAGE : function(state,page){
		state.paging.page = page;
	},
	/**
	* 设置每页显示的条数
	* @param number 条数
	*/
	SET_PAGING_NUMBER : function(state,number){
		state.paging.number = number;
	},

	/**
	 * 初始化当前对象
	 */
	INIT_CURRENT_OBJ : function (state) {
		state.currentObj = {
			"state" : 0
		}
	},

	/**
	 * 设置当前对象
	 * @param {[object]} currentObj [当前对象]
	 */
	SET_CURRENT_OBJ : function(state,currentObj){
		state.currentObj = currentObj;
		console.log(state.currentObj.role[0].display_name);
	},

	/**
	 * 设置表单标题
	 * @param {[string]} title [标题]
	 */
	SET_FORM_TITLE : function(state,title) {
		if(title) {
			state.formTitle = title;
		} else {
			state.formTitle = "TITLE ERROR";
		}
	},

	/**
	 * 左侧栏菜单配置
	 * @param {[object]} leftMenus [菜单]
	 */
	SET_LEFT_MENUS : function(state, leftMenus) {
		state.leftMenus = leftMenus;
	},

	/**
	 * 设置配置文件
	 * @param {[object]} config [配置]
	 */
	SET_COMMON_SETTING : function (state, setting) {

		// console.log('store:', setting);
		state.setting = setting;
	},

	/**
	 * 设置checkbox原始数据
	 */
	SET_CHECKBOX_RAW : function (state, data){
		state.checkobx_raw = data;
	}
};

//整合初始状态和变更函数，得到所需store，就可以连接到我们应用中
module.exports = {
	state :  state,
	mutations : mutations
};