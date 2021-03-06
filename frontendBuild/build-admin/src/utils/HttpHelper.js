var Vue = require('vue');
var VueResource = require('vue-resource');
var Common = require('./Common.js');

Vue.use(VueResource);
var v = new Vue();

/**
 * @param method 方法仅限以下方法query, create, save, delete
 * @param resourceName 资源的路径，如['department'], 对于嵌套的资源与key相对应如: department/1/employee    
 * @param param.key 与资源对应，resourceName.length - 1 <= key.length <= resourceName.length 
 * @param param.data 上传的数据
 * @param param.succ 成功后的回调
 * @param param.err 失败后的回调
 **/
var paramParse = function(method, resourceName, param) {
    var resource = {
        method: 'GET',
        url: ''
    };
    param.key = param.key||[];
    switch (method) {
        case 'query':
            resource.method = 'GET';
            break;
        case 'create':
            resource.method = 'POST';
            break;
        case 'save':
            resource.method = 'PUT';
            break;
        case 'delete':
            resource.method = 'DELETE';
            break;
        default:
            console.log('error method' + method);
    };
    if (param.key.length < resourceName.length - 1 || param.key.length > resourceName.length) {
        console.log('资源与参数不匹配');
        return false;
    }
    for (var i = 0; i < resourceName.length; i++) {
        resource.url += '/' + resourceName[i];
        if (param.key[i]) {
            resource.url += '/' + param.key[i];
        }
    }
    /*----本地测试使用 start -----*/
    // resource.method = 'GET';
    // console.log("url:" + resource.url);
    // resource.url = 'src/json/' + resourceName.join('/') + '/' + method  + '.json';
    // console.log("url:" + resource.url);
    /*----本地测试使用 end-----*/

    if (param.data) {
        resource.data = param.data;
    }

     v.$http(resource).then(function(response) {
        var rs = response.data;

        if (rs.status == 200) {
            if(param.succ){
                param.succ(rs['data']||{});
            }
        } else {
            if (param.err) {
                param.err(rs.msg);
            } 
        }
    }, function(response) {
        if (param.err) {
            if(response.statusText != "") {
                 param.err(response.statusText);
            } else {
                Common.tips("网络错误,请重试!","error",1500);
            }
        } 
    });
};


module.exports = {
    login : {
        query : function(param){
            paramParse('query', ['auth/login'], param);
        },
        lg : function(param){
            paramParse('create', ['auth/login'], param);
        }
    },   
    user : {
        query: function (param) {
            paramParse('query', ['user'], param);
        },
        create : function(param){
            paramParse('create',['user'], param);
        },
        save : function(param){
            paramParse('save',['user'], param);
        },
        delete : function(param){
            paramParse('delete',['user'], param);
        }
    },
    role : {
        query : function(param){
            paramParse('query',['role'], param);
        },
        create : function(param){
            paramParse('create',['role'], param);
        },
        save : function(param){
            paramParse('save',['role'], param);
        },
        delete : function(param){
            paramParse('delete',['role'], param);
        }
    },
    permission : {
        query : function(param){
            paramParse('query',['permission'], param);
        },
        create : function(param){
            paramParse('create',['permission'], param);
        },
        save : function(param){
            paramParse('save',['permission'], param);
        },
        delete : function(param){
            paramParse('delete',['permission'], param);
        }
    },
    action : {
        query : function(param){
            paramParse('query',['action'], param);
        },
        create : function(param){
            paramParse('create',['action'], param);
        },
        save : function(param){
            paramParse('save',['action'], param);
        },
        delete : function(param){
            paramParse('delete',['action'], param);
        }
    },
    menu : {
        query : function(param){
            paramParse('query',['menu'], param);
        },
        create : function(param){
            paramParse('create',['menu'], param);
        },
        save : function(param){
            paramParse('save',['menu'], param);
        },
        delete : function(param){
            paramParse('delete',['menu'], param);
        }
    },
    config : {
        query : function(param){
            paramParse('query',['config'], param);
        }
    }
}