<style>
	#login{
		padding-top: 1px;
		width: 100%;
		height: 100%;
		background-color: #FD5959;
		background-image: url("../../static/img/login/4.jpg");
	}
	#login-box{
		margin:200px auto 0;
		padding: 15px;
		width: 380px;
		background-color: #fff;
		border-radius: 4px;
		box-shadow: 0 0 10px rgba(0,0,0,.3);
	}
	#login-box h1{
		color: #FD5959;
		font-size: 18px;
		font-weight: bold;
		margin: 10px 0 20px 0;
	}
	#login-box span{
		font-size: 16px;
	}
	#login-box input{
		display: block;
		width: 100%;
		height: 35px;
		padding: 5px 10px;
		border:1px solid #ccc;
		border-radius: 4px;
		margin-bottom: 18px;
	}
	#login-box button{
		float: right;
		border:none;
		color: #fff;
		height: 35px;
		width: 80px;
		border-radius: 4px;
		background-color: #FD5959;
	}
	#login-load{
		position: absolute;
		top:50%;
		left: 50%;
		color: #fff;
		text-align: center;
		font-size: 16px;
		margin:-15px 0 0 -8px;
	}
</style>
<template>
	<div id="login">	
		<div id="login-load" v-if="!isShowLogin">
			<i class="fa fa-spinner eleCircle"></i>
		</div>
		<div id="login-box" class="clearfix" v-else>
			<h1>Lwc<span>&nbsp;后台管理登录</span></h1>
			<input type="text" placeholder="登录帐号" v-model="formdata.name">
			<input type="password" placeholder="登录密码" v-model="formdata.password">
			<button type="button" @click="subLogin">{{btnTxt}}</button>
		</div>
	</div>
</template>
<script>
	var Http = require('../../utils/HttpHelper.js');
	var commonActions = require('../../vuex/common/actions.js');
	module.exports = {
		vuex : {
			actions : {
				toggleLogin : commonActions.toggleLogin
			}
		},
		data : function(){
			return {
				btnTxt : '登 录',
				isSubmit : false,
				isShowLogin : false,//当前是否展示登录框
				formdata : {
					name : '',
					password : ''  
				},
				initBtnTxt : function(){
					this.btnTxt = '登 录';
				},
				//获取登录状态
				loginStatus : function(){
					var self = this;
					Http.login.query({
						succ : function(rs){
							if(rs.isLogin){
								self.toggleLogin();
							}else{
								self.isShowLogin = true;
							}
						},
						err : function(msg){
							self.isShowLogin = true;
						}
					});
				}
			};
		},
		ready : function(){
			this.initBtnTxt();
			this.loginStatus();
		},
		methods : {
			/**
			* 提交登录得信息
			*/
			subLogin : function() {
				if(!this.isSubmit){
					var self = this;
					if(this.formdata.name.length >= 6 && this.formdata.password.length >= 6){
						this.isSubmit = true;
						this.btnTxt = '登录中...';
						Http.login.lg({
							data : this.formdata,
							succ : function(rs){
								self.isSubmit = false;
								self.initBtnTxt();
								self.toggleLogin();
							},
							err : function(msg){
								self.btnTxt = '登录失败';
								setTimeout(function(){
									self.isSubmit = false;
									self.initBtnTxt();
								},1500);
							}
						});
					}else{
						self.btnTxt = '登录失败';
						setTimeout(function(){
							self.isSubmit = false;
							self.initBtnTxt();
						},1500);
					}
				}
			}
		}
	}
</script>