module.exports = {
	//切换fixmodel的状态
	toggleFixmodelState : function(store,bool){
		return store.dispatch('TOGGLE_FIXMODEL_STATE',bool);
	},

	/**
	 * 设置路由，表单标题
	 */
	setRouterName : function(store, router){
		return store.dispatch('SAVE_ROUTER_NAME', router);
	},

	/**
    * 设置分页的总页数
    * @param total 总页数
    */
    setPagingTotal : function(store,total){
        return store.dispatch('SET_PAGING_TOTAL',total);
    },
    /**
    * 设置当前的第几页
    * @param page 页数
    */
    setPagingPage : function(store,page){
        return store.dispatch('SET_PAGING_PAGE',page);
    },
    /**
    * 设置每页显示的条数
    * @param number 条数
    */
    setPagingNumber : function(store,number){
        return store.dispatch('SET_PAGING_NUMBER',number);
    },

    /**
     * 初始化当前对象
     */
    initCurrentObj : function (store) {
    	return store.dispatch('INIT_CURRENT_OBJ');
    },

    /**
     * 设置当前对象
     */
    setCurrentObj : function (store,currentObj) {
    	return store.dispatch('SET_CURRENT_OBJ',currentObj);
    },

    /**
     * 设置表单标题
     * @param {[string]} title [表单标题]
     */
    setFormTitle : function (store, title) {
    	return store.dispatch('SET_FORM_TITLE', title);
    },

    /**
     * 设置配置文件内容
     * @param {[object]} setting [配置]
     */
    setCommonSetting : function (store, setting) {
        console.log('actions:', setting);
    	return store.dispatch('SET_COMMON_SETTING', setting);
    },

    /**
     * 设置左侧栏菜单配置
     * @param {[object]} leftMenus [菜单]
     */
    setLeftMenus : function (store, leftMenus) {
        return store.dispatch('SET_LEFT_MENUS', leftMenus);
    }
}
