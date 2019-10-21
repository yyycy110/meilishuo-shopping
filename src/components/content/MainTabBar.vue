<template>
    <div id="tabbar">
     
      <tab-bar>
        <tabbar-item path="/home">
          <img slot="item-icon" src="../../assets/img/tabbar/首页.png" alt="">
          <div slot="item-text">首页</div>
        </tabbar-item>
        <tabbar-item path="/category">
          <img slot="item-icon" src="../../assets/img/tabbar/分类.png" alt="">
          <div slot="item-text">分类</div>
        </tabbar-item>
        <tabbar-item path="/cart">
          <img slot="item-icon" src="../../assets/img/tabbar/购物.png" alt="">
          <div slot="item-text">购物车</div>
        </tabbar-item>
        <tabbar-item path="/profile">
          <img slot="item-icon" src="../../assets/img/tabbar/我的.png" alt="">
          <div slot="item-text">我的</div>
        </tabbar-item>
  
  
      </tab-bar>
  
  
    </div>
  </template>
  
  <script>
    import TabBar from "../common/tabbar/TabBar.vue"
    import TabBarItem from "../common/tabbar/TabBarItem.vue"
    export default {
      name: 'App',
      components: {
        "tab-bar": TabBar,
        "tabbar-item": TabBarItem
      }
    }
  </script>
  
 