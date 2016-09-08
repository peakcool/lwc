module.exports = function(router){
    router.map({
		'/' : {
			name : 'menu',
			component : require('./views/menu/Index.vue')
		},
		'menu' : {
			name : 'menu',
			component : require('./views/menu/Index.vue')
		},
		'user' : {
			name : 'user',
			component : require('./views/user/Index.vue')
		},
		'role' : {
			name : 'role',
			component : require('./views/role/Index.vue')
		},
		'permission' : {
			name : 'permission',
			component : require('./views/permission/Index.vue')
		},
		'action' : {
			name : 'action',
			component : require('./views/action/Index.vue')
		},
		'posparam' : {
			name : 'posparam',
			component : require('./views/posparam/Index.vue')
		},
		'*' : {
			name : '404',
			component : require('./views/404.vue')
		}

	});
}