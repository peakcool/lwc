module.exports = {
	
	/**
	 * 设置编辑对象
	 * @param  {[type]} store 
	 * @return {[type]}       
	 */
	initMenuEditObj : function(store){
		return store.dispatch('INIT_MENU_EDIT_OBJ');
	},
	/**
	 * 设置编辑对象
	 * @param {[type]} store   
	 * @param {[type]} editobj [对象]
	 */
	setMenuEditObj : function(store,editObj){
		return store.dispatch('SET_MENU_EDIT_OBJ',editObj);
	}
}