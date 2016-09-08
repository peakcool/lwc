<style>
.check-left {
    display: inline;
    margin-right: 10px;
}

.check-ul {
    margin: 20px 15px !important;
}

.check-tagsinput {
    border: 1px solid #e6e6e6;
    box-shadow: none;
    padding: 6px 12px;
    line-height: 20px;
    display: block;
}

.check-tagsinput > .tag {
    display: inline-block;
    margin-right: 5px !important;
}
</style>
<template>
    <slot name="checkbox_label"></slot>
    <div class="form-control check-tagsinput">
        <span class="tag label label-success" v-for="name in nameModel"> {{ name }} </span>
    </div>
    <ul class="has-success check-ul">
        <li class="checkbox-custom check-left" v-for="obj in value">
            <input id="checkbox{{ obj.id }}" type="checkbox" v-model="idModel" value="{{ obj.id }}" >
            <label for="checkbox{{ obj.id }}" class="checkbox-success">{{ obj.display_name }}</label>
        </li>
    </ul>
</template>
<script>

var http = require('../../utils/HttpHelper.js');

module.exports = {
    props: ['value'],
    data: function() {
        return {
            idModel: [], //id list
            nameModel : [] // name list
        }
    },
    ready : function (){
    	this.$watch('idModel', function (v){ //监听选中列表
    		var checkbox = [];
    		if(eval(v).length <= 0){
    			this.nameModel = checkbox;
    			return
    		}
    		for(var i in v){ //选中checkbox id => name
    			$.each(this.value,function(k,el){
    				if (v[i] == el.id) {
    					checkbox.push(el.display_name);
    				}
    			})
    			this.nameModel = checkbox;
    		}
    	})
    }
}
</script>
