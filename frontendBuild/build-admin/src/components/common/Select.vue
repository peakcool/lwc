<template>
	<slot name="select_label"></slot>
    <select class="form-control" name="{{ name }}">
        <option value="{{$key}}"  v-if='options != " "'  v-for="item in options">{{ item }}</option>
    </select>
</template>

<script>
    var commonGetters = require('../../vuex/common/getters.js');
    var commonActions = require('../../vuex/common/actions.js');
    var http = require('../../utils/HttpHelper.js');

	module.exports = {
		props : ['name', 'type'],
		data  : function () {
			return {
				options : " "
			}
		},
		vuex  : {
			actions : {
				setCommonSetting : commonActions.setCommonSetting,
			},
			getters : {
				currentObj : commonGetters.getCurrentObj, //获取当前对象
                commonSetting : commonGetters.getCommonSetting //获取操作配置
			}
		},
		ready : function () {

			var self = this
			if(self.commonSetting == " ") {

				http.config.query({
					data : {key : "setting"},
	                succ : function (rs) {
	                    self.setCommonSetting(rs);
	                },
	                err : function (msg) {
	                    console.log(msg)
	                }
	            });
			} 

			this.$watch('commonSetting', function(v){

				switch(this.type){
					case "actions" :
						this.options = v.actions;
						break;
					case "main_menu":
						this.options = v.main_menu;
						break;
				}
			});

			this.$watch('currentObj', function(v){
				console.log('edit:',v.id);
			});
		}
	}
</script>