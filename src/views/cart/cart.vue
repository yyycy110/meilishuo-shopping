<template>

    <div>
        <!-- 导航栏 -->
        <nav-bar class="header">
            <div slot="center">购物车({{cartListlength}})</div>
        </nav-bar>
        <!-- 商品列表 -->
        <scroll class="content" ref="scroll">
            <cart-list ></cart-list>
       
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
      
        </scroll>
        <cart-bottom></cart-bottom>

    </div>


</template>




<script>




    import NavBar from 'components/common/navbar/NavBar'
    import CartList from './ChilComps/CartList'
    import CartBottom from './ChilComps/CartBottom'
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
            Scroll,
            CartBottom

        },
        computed: {
            ...mapGetters(['cartListlength'])
        },
        activated(){
            this.$refs.scroll.refresh();
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