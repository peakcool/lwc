module.exports = {
	
	/**
	 * 设置编辑对象
	 * @param  {[type]} store 
	 * @return {[type]}       
	 */
	initUserEditObj : function(store){
		return store.dispatch('INIT_USER_EDIT_OBJ');
	},
	/**
	 * 设置编辑对象
	 * @param {[type]} store   
	 * @param {[type]} editobj [对象]
	 */
	setUserEditObj : function(store,editObj){
		return store.dispatch('SET_USER_EDIT_OBJ',editObj);
	}
}