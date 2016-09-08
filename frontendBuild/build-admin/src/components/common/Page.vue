<style scoped>
	.ly-page{
		color:#181a21;
	}
	select{
		border:none;
		color: #747474;
		background-color: transparent;
	}
</style>
<template>
	<div class="ly-page row print-display" v-if="pagingTotal > 1">
		<div class="col-xs-4 mt10">
			每页显示
			<select v-model="perpage" @change="change">
				<option value="20">10</option>
				<option value="40">20</option>
				<option value="60">40</option>
				<option value="80">80</option>
			</select>条
		</div>
		<div class="col-xs-8 dataTables_paginate paging_simple_numbers">
			<ul class="pagination m0 pull-right">
		        <li @click="prev">
		        	<a href="javascript:;" title="上一页">
		        		<span>«</span>
		        	</a>
		        </li>
		        <li v-for="n in pagingTotal" :class="n == (pagingPage-1) ? 'active' : ''" @click="filter(n)">
		        	<a href="javascript:;">{{n+1}}</a>
		        </li>
		        <li @click="next">
		        	<a href="javascript:;" title="下一页">
		        		<span>»</span>
		        	</a>
		        </li>
		     </ul>
		</div>
	</div>
</template>
<script>
	var commonGetters = require('../../vuex/common/getters.js');
	var commonActions = require('../../vuex/common/actions.js');

	module.exports = {
		vuex : {
			getters : {
				pagingTotal : commonGetters.pagingTotal,
				pagingPage : commonGetters.pagingPage
			},
			actions : {
				setPagingPage : commonActions.setPagingPage
			}
		},
		data : function(){
			return {
				perpage : 20, //每页的条数
				/*
				* 计算page的值
				* @param v [-1:上一页，1:下一页]
				*/
				countPage : function(v){
					var page = this.pagingPage + v;
					page = page < 1 ? 1 : page;
					page = page > this.pagingTotal ? this.pagingTotal : page;
					this.setPagingPage(page);
				}
			}
		},
		methods : {
			/**
			* 上一页
			*/
			prev : function(){
				this.countPage(-1);
			},
			/**
			* 下一页
			*/
			next : function(){
				this.countPage(1);
			},
			/**
			* 根据指定页，筛选
			* @param page 指定的页数
			*/
			filter : function(page){
				page = page + 1;
				this.setPagingPage(page);
			},
			change : function(){

			}
		}
	}
</script>