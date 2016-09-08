<template>
	<div class="form-horizontal"> 
		<div class="form-group has-feedback" 
	  		:class="{'has-success' : status == 1,'has-error' : status == -1}"> 
			<div class="col-sm-8"> 
                <!-- 多行输入框 start -->
                <textarea 
                	class="form-control" 
                	placeholder="{{holder}}" 
                	rows="5"
					v-model="value"
					@blur="blur" 
    				@input="input"
                	v-if="type == 'textarea'">
                </textarea>
                <!-- 多行输入框 start -->
				
				<input 
					class="form-control" 
					placeholder="{{holder}}" 
					type="{{type}}"
					v-model="value"
					@blur="blur" 
    				@input="input"
    				v-else>  
		      	<span class="glyphicon glyphicon-ok form-control-feedback" 
		      	v-if="status == 1">
		      	</span>
				<span class="glyphicon glyphicon-remove form-control-feedback" 
				v-if="status == -1">
				</span>
			</div> 
			<label class="control-label c-danger tl">
				{{tips}}
			</label>  
		</div> 
	</div>
</template>
<script>
	var common = require('../../utils/Common.js');
	/**
	* @param type 输入框的的类型
	* @param verify 验证的规则
	* @param holder 输入的的提示文字
	* @param tips 验证不通过时的提示信息
	* @param value 输入框的值.sync
	*/
	module.exports = {
		props : ['type','verify','holder','tips','value'],
		data : function(){
			return {	
				verFunc : null,//记录用于验证的函数
				isOK : false, //标识是否验证通过
				isActivated : false,//标识是否激活了判断
				/**
				* 获取当前是否验证通过
				*/
				isAdopt : function(){
					this.isActivated = true;
					this.isOK = this.verFunc(this.value);
					return this.isOK;
				}
			}
		},
		computed : {
			/**
			* 输入框的状态 -1:错误状态，0:正常状态,1正确状态
			*/
			status : function(){
				var num = 0;
				if(this.isActivated){
					num = this.isOK ? 1 : -1; 
				}
				return num;
			}
		},
		ready : function(){
			if(this.type == undefined){
				this.type = 'text';
			}
			if(this.holder == undefined){
				this.holder = '请输入...';
			}
			if(this.verify == undefined){
				this.verify = 'isTitle';
			}
			if(this.value == undefined){
				this.value = '';
			}
			this.verFunc = common[this.verify];
		},
		methods : {
			/**
			* 失去焦点
			*/
			blur : function(){
				if(!this.isActivated){
					this.isActivated = true;//激活判断
				}
				//验证的判断
				this.isOK = this.verFunc(this.value);
			},
			/**
			* 输入的监听
			*/
			input : function(){
				//移除两边的空格，并过滤特殊字符
				if(!this.isActivated){
					this.isActivated = true;//激活判断
				}
				this.isOK = this.verFunc(this.value);
			}
		}
	}
</script>