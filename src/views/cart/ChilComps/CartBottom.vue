<template>
  <div class="bottom">
    <nav-bar>
      <div slot="left" class="picture">
        <check-button></check-button>
        <span>全选</span>
      </div>

      <div slot="center">总计：{{priceSum}}</div>
      <div slot="right"><button>结算</button></div>



    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CheckButton from 'components/common/checkButton/CheckButton'
  import { mapGetters } from 'vuex'

  export default {

    data() {
      return {

      }
    },
    components: {
      NavBar
    },
    computed: {
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
  img{
    width: 20px;
  }
  .picture{
    width: 20px;
    height: 20px;
    
    border: 1px solid red;
    border-radius: 50%;
  }
</style>