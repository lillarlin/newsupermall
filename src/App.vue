<template>
  <div id="app">
    <router-view></router-view>
    <!-- 要看到路由跳转的组件的内容要使用router-view -->
  <tab-bar-main></tab-bar-main>
  </div>
</template>

<script>

import TabBarMain from './components/content/maintabbar/TabBarMain.vue'
export default {
  name: 'App',
  components: {
  TabBarMain,
  
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
