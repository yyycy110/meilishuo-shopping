<template>

    <div>
        <!-- 导航栏 -->
        <nav-bar class="header">
            <div slot="center">购物车({{cartListlength}})</div>
        </nav-bar>
        <!-- 商品列表 -->
        <scroll class="content">
            <cart-list ></cart-list>
       
      
        </scroll>

    </div>


</template>




<script>

    import NavBar from 'components/common/navbar/NavBar'
    import CartList from './ChilComps/CartList'
    import Scroll from 'components/common/scroll/Scroll'


    import { mapGetters } from 'vuex'

    export default {

        data() {
            return {

            }

        },
        components: {
            NavBar,
            CartList,
            Scroll

        },
        computed: {
            ...mapGetters(['cartListlength'])
        }



    }
</script>

<style scoped>
    .header {
        background-color: pink;
        color: white;
        font-weight: bolder;
    }

    .content{
        position: absolute;
        left: 0;
        right: 0;
        top: 44px;
     
        bottom: 49px;
        background-color: #fff;
    }
</style>