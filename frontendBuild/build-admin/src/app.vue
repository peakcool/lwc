<style>
    #main{
        lwcition: relative;
        width: 100%;
        min-height: 100%;
        height: auto;
    }
</style>
<template>
    <!-- <div id="container"> -->
        <lwc-login v-if="!isLogin"></lwc-login>
        <div id="main" v-else>
        <!-- 头部 start -->
        <lwc-header></lwc-header>
        <!-- 头部  end  -->
        <!-- 左侧导航 start -->
        <lwc-aside></lwc-aside>
        <!-- 左侧导航  end  -->
        <!-- 右侧内容部分 start -->
        <lwc-section></lwc-section>
        <!-- 右侧内容部分  end  -->
        </div>
    <!-- </div> -->
</template>
<script>
    var commonGetter = require('./vuex/common/getters.js');
    var gloalStore = require('./vuex/store.js');
    module.exports = {
        store : gloalStore, //注入store，组件状态管理，在根组件中加入，让它的子组件和store链接
        vuex : {
            getters : {
                isLogin : commonGetter.isLogin
            }
        },
        components : {
            'lwc-header' : require('./components/common/Header.vue'),
            'lwc-aside' : require('./components/common/Aside.vue'),
            'lwc-section' : require('./components/common/Section.vue'),
            'lwc-login' : require('./components/common/Login.vue')
        }
    }
</script>