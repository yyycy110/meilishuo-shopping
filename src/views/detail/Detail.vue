<template>
    <div class="detail">
        <detail-navbar @controlNav="updateNav" ref="nav"></detail-navbar>

        <scroll ref="scroll" class="content" :probeType="3" :pullupload="true" @tabScroll="tabScroll"
            @pullingUp="loadMore">
            <detail-swiper :TopImg="topImages"></detail-swiper>
            <detail-base-info :goods="goodsInfo"></detail-base-info>
            <detail-shop :shop="shop"></detail-shop>
            <detail-info-mes :detailInfo="detailInfo"></detail-info-mes>
            <detail-params-info :itemParams="itemParams" ref="params" />
            <detail-comment :commentInfo="comment" ref="comment"></detail-comment>
            <goods-list :goods="recommends" ref="recommend"></goods-list>
        </scroll>

         <detail-bottom-bar  @addCart="addToCart" />
        <back-top class="arrive-top" @click.native="backClick" v-show="ifshow" />
    </div>
</template>

<script>

    /* 公共部分 */

    import BackTop from 'components/content/backTop/BackTop'
    import Scroll from 'components/common/scroll/Scroll'

    /* 导航条 */
    import DetailNavbar from './ChilComps/DetailNavbar'
    /* 轮播图 */
    import DetailSwiper from './ChilComps/DetailSwiper.vue'
    /* 商品价格详情 */
    import DetailBaseInfo from './ChilComps/DetailBaseInfo.vue'
    /* 店铺信息 */
    import DetailShop from './ChilComps/DetailShop.vue'
    /* 商品图片 */
    import DetailInfoMes from './ChilComps/DetailInfo.vue'
    /* 商品参数 信息 */
    import DetailParamsInfo from './ChilComps/DetailParamsInfo.vue'
    /* 商品评论 */
    import DetailComment from './ChilComps/DetailCommentInfo.vue'
    /* 推荐商品 */
    import GoodsList from 'components/content/goods/GoodsList'
    import DetailBottomBar from './ChilComps/DetailBottomBar.vue'

    /* 导入 网络请求 */
    import { getDetail, Goods, shop } from '../../network/detail.js'

    import { getRecommend } from '../../network/detail.js'


    export default {
        name: 'Detail',
        data() {
            return {
                /* 控制 */
                ifshow: false,
                currentIndex:0,  

                /* iid 是从Home页传过来的 通过iid 跳转到对应商品的详情页 */
                iid: null,
                /* 轮播模块 */
                topImages: [],
                /* 价格模块 */
                goodsInfo: {},
                /* 店铺信息 */
                shop: {},
                /* 商品图片详情 */
                detailInfo: {},
                /* 商品参数模块 */
                itemParams: {},
                /* 评论模块 */
                comment: {},
                /* 推荐商品 */
                recommends: [],
                themeTopYs: []




            }
        },
        components: {
            BackTop,
            Scroll,

            DetailNavbar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShop,
            DetailInfoMes,
            DetailParamsInfo,
            DetailComment,
            GoodsList,
            DetailBottomBar
        },
        created() {
            /* 获取参数iid iid 是通过url传过来的 */
            this.iid = this.$route.params.iid

            /* 获取详情数据 */
            this.getDetailData();
            /* 获取推荐数据 */
            this.getDetailRecommend();




        },

        methods: {
            /* 获取详情数据 */
            getDetailData() {

                getDetail(this.iid).then(res => {
                    const data = res.result
                    /* 详情页的轮播图 */
                    this.topImages = res.result.itemInfo.topImages
                    /* 详情页的价格收藏量等信息 */
                    this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                    /* 详情页店铺信息 */
                    this.shop = new shop(data.shopInfo, data.shopInfo.score);
                    /* 商品图片 */
                    this.detailInfo = data.detailInfo;
                    /* 商品的参数信息 */
                    this.itemParams = data.itemParams
                    /* 评论信息 */
                    this.comment = data.rate.list
                    console.log(this.comment)
                    console.log(res)
                    /* 第一次获取值不对的原因是因为接口获取的数据还没渲染出来 例如图片 */
                    this.$nextTick(() => {
                        this.themeTopYs = [];
                        this.themeTopYs.push(0)
                        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
                        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
                        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
                        console.log(this.themeTopYs)
                    })


                })
            },
            /* 获取推荐数据 */
            getDetailRecommend() {
                getRecommend().then(res => {

                    this.recommends = res.data.list;
                    console.log(this.recommends)
                })
            },
            detailImageLoad() {
                console.log('详情页图片加载成功')



            },
            updateNav(index) {
                this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 1000)
                console.log(index)
            },


            //监听滚动的位置
            tabScroll(position) {

                /* 三元操作符  当滚动的定位 小于一个值的时候 再显示置顶的按钮  */
                this.ifshow = -position.y > 1000 ? true : false;
                this.current = -position.y > 13000 ? 1 : 0;

                const positionY = -position.y
                let length = this.themeTopYs.length;
                for (let i =0;i<length;i++) {
                  if((i<length-1 && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i + 1] ) || (i === length-1&& positionY>this.themeTopYs[i])){
                    this.currentIndex = i;
                    this.$refs.nav.currentIndex= this.currentIndex
                  }
                    
                }
            




            },
            //监听 下拉加载
            loadMore() {
                /*下载更多 */
                console.log("loadMore..")
                /* 这个地方 很重要 我们可以去重新查看当时定义的这个方法 的page 是 +=1的 也就是说
                你每下拉一次 他就会执行一次page +=1 从而获取更多的数据
                */
            },
            /* 点击按钮跳回顶部 */
            backClick() {
                this.$refs.scroll.scroll.scrollTo(0, 0, 1000)

            },

            addToCart(){
                const product = {}
                product.image = this.topImages[0]
                product.title = this.goodsInfo.title
                product.desc = this.goodsInfo.desc
                product.price  = this.goodsInfo.price
                product.iid = this.iid



                /* 把商品添加到购物车 */
               /*  this.$store.cartList.push(product) */
                this.$store.dispatch('addCart',product)
                console.log("-----点击了")

            }

        }
    }

</script>

<style scoped>
    .content {
        position: absolute;
        left: 0;
        right: 0;
        top: 44px;
        
        bottom: 0;
        background-color: #fff;
    }

    /* 置顶图标的位置 */
    .arrive-top {
        position: absolute;
        right: 3px;
        bottom: 70px;
    }
    .detail{
        height: 100vh;
        position: relative;
        z-index: 20;
        background-color: #fff;
    }
</style>