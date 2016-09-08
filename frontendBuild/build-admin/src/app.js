//加载公共样式
require('./static/css/base.css');
require('./static/css/common.css');

require('./static/css/animate.css');
require('./static/css/umega.default.css');

var Vue = require('vue');
var App = require('./app.vue');
var VueRouter = require('vue-router');
var ConfigRouter = require('./router.js');

Vue.use(VueRouter);

var router = new VueRouter();
ConfigRouter(router);//注入路由规则

//加载组件
router.start(Vue.extend(App),'#app');