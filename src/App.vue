<template>
  <div id="app" class="wrapper">
    <router-view></router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from '../src/components/content/MainTabBar'

  export default {
    name: 'App',
    components: {
      "main-tab-bar": MainTabBar
    }
  }
</script>


<style scoped>
  @import "./assets/css/base.css";
</style>