<style>
    #main{
        position: relative;
        width: 100%;
        min-height: 100%;
        height: auto;
    }
</style>
<template>
    <div id="main">
        <!-- 头部 start -->
        <pos-header></pos-header>
        <!-- 头部  end  -->
        <!-- 左侧导航 start -->
        <pos-aside></pos-aside>
        <!-- 左侧导航  end  -->
        <!-- 右侧内容部分 start -->
        <pos-section></pos-section>
        <!-- 右侧内容部分  end  -->
    </di6v>
</template>
<script>

    var gloalStore = require('./vuex/store.js');
    module.exports = {
        store : gloalStore, //注入store，组件状态管理，在根组件中加入，让它的子组件和store链接
        components : {
            'pos-header' : require('./components/common/Header.vue'),
            'pos-aside' : require('./components/common/Aside.vue'),
            'pos-section' : require('./components/common/Section.vue'),
        }
    }
</script>