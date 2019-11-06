<template>
  <div class="bottom">
      <nav-bar>
       <div slot="left">总计：{{priceSum}}</div>
       <div slot="right"><button>结算</button></div>

      </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {mapGetters } from 'vuex'

export default {

data(){
    return{

    }
},
components:{
    NavBar
},
computed:{
    ...mapGetters(['priceSum'])
}

};
</script>

<style scoped>
.bottom {
  position: fixed;
  height: 40px;
  background-color: pink;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>