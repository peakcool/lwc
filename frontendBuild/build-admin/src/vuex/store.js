var Vue = require('vue');
var Vuex = require('vuex');

//告诉 vue "使用" vuex
Vue.use(Vuex);

//模块化的store，公共模块，管理模块状态
var common = require('./common/store.js');
var addForm = require('./addForm/store.js');
var user = require('./user/store.js');
var menu = require('./menu/store.js');
var role = require('./role/store.js');

module.exports = new Vuex.Store({
	//组合模块
	modules : {
		common : common,
		addForm : addForm,
		user : user,
		menu : menu,
		role : role
	}
});