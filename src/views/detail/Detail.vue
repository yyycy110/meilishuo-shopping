<template>
    <div>
        <detail-navbar></detail-navbar>
        <detail-swiper :TopImg="topImages"></detail-swiper>
        <detail-base-info :goods="goodsInfo"></detail-base-info>
        <detail-shop :shop="shop"></detail-shop>


<ul>


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
</ul>

    </div>
</template>

<script>
    /* 导航条 */
    import DetailNavbar from './ChilComps/DetailNavbar'
    /* 轮播图 */
    import DetailSwiper from './ChilComps/DetailSwiper.vue'
    /* 商品详情 */
    import DetailBaseInfo from './ChilComps/DetailBaseInfo.vue'
    /* 店铺信息 */
    import DetailShop from './ChilComps/DetailShop.vue'
    


    /* 导入 网络请求 */
    import { getDetail,Goods,shop } from '../../network/detail.js'


    export default {
        name: 'Detail',
        data() {
            return {
                iid: null,
                topImages: [],
                goodsInfo:{},
                shop:{}

             

            }
        },
        components: {
            DetailNavbar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShop
        },
        created() {
            /* 获取参数iid iid 是通过url传过来的 */
            this.iid = this.$route.params.iid

            /* 获取轮播图图片 */
            this.getSwiperData();
            
          

        },
        methods: {
            getSwiperData() {
                getDetail(this.iid).then(res => {
                     const data = res.result

                    this.topImages = res.result.itemInfo.topImages

                    this.goodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

                    this.shop = new shop(data.shopInfo,data.shopInfo.score);

                    console.log(res)

                })
            }
        }
    }

</script>