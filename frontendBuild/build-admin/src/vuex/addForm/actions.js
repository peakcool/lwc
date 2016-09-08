//action 会收到 store 作为它的第一个参数
//既然我们只对事件的分发（dispath 对象） 感兴趣(state也可以作为可选项放入)
module.exports = {
	//切换fixmodel的状态
	toggleSideBarState : function(store,bool){
		return store.dispatch('TOGGLE_SIDEBAR_STATE',bool);
	}
}