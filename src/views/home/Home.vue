<template>

  <!-- 顶部导航栏 模块-->
  <div id="home">


    <nav-bar class="home-nav">
      <div slot="center">
        <h3> 购物街</h3>
      </div>
    </nav-bar>
    <tab-control  class="tab-control" ref="tabControl1" :titles="['流行','新款','精选']" @tabClick="tabClick" v-show="isTabFixed">
    </tab-control>


    <!-- 进行滚动的区域  -->
    <scroll class="content" ref="scroll" :probeType="3" :pullupload="true" @tabScroll="tabScroll" @pullingUp="loadMore">

      <!-- 轮播图 模块 -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <!-- 推荐栏 模块 -->
      <home-recommend :recommends="recommends"></home-recommend>
      <!-- 图片栏 -->
      <feature-view></feature-view>
      <!-- 选择导航栏 -->
      <tab-control  ref="tabControl2" :titles="['流行','新款','精选']" @tabClick="tabClick">
      </tab-control>

      <goods-list :goods="showGoods"></goods-list>

    </scroll>
    <!-- 跳转至顶部的小圆点 -->
    <back-top class="arrive-top" @click.native="backClick" v-show="ifshow" />


  </div>

</template>


<script>
  //公共部分

  /* 顶部导航栏 */
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  /* 小圆点 */
  import BackTop from 'components/content/backTop/BackTop'


  /* ------------ */

  //页面大组件  HomeChlids

  /* 轮播图 */
  import HomeSwiper from './ChildComps/HomeSwiper.vue'
  /* 推荐栏 */
  import HomeRecommend from './ChildComps/HomeRecommend.vue'
  /* 图片栏 */
  import FeatureView from './ChildComps/FeatureView.vue'

  /* ------------ */

  //页面组件

  /* 导航选择 */
  import TabControl from 'components/content/tabControl/TabControl'

  /* ------------ */

  //数据相关

  /* 商品数据列表 */
  import GoodsList from 'components/content/goods/GoodsList'





  import { getHomeMultidata, getHomeGoods } from "../../network/home.js"


  export default {
    name: 'Home',
    components: {
      Scroll,
      NavBar,
      HomeSwiper,
      HomeRecommend,
      FeatureView,
      TabControl,
      GoodsList,
      BackTop

    },
    data() {
      return {
        result: null,
        banners: [],
        recommends: [],
        goods: {
          "pop": { page: 0, list: [] },
          "sell": { page: 0, list: [] },
          "new": { page: 0, list: [] }
        },
        currentType: 'pop',
        /* 小圆点的显示控制 */
        ifshow: false,
        tabOffsetTop: 0,
        /* tabControl是否吸顶 */
        isTabFixed: false


      }
    },
    created() {
      /* 请求多个数据 */
      this.getHomeMultidata()

      /* 请求商品数据 */


      this.getHomeGoods('new');
      this.getHomeGoods('pop');

      this.getHomeGoods('sell');




    },

   
    methods: {

      /* 
      事件监听相关方法
       */

      // 监听 流行 上新  精选 这三个选项
      tabClick(index) {
        console.log(index);

        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;

      },
      //监听滚动的位置
      tabScroll(position) {
        /* 三元操作符  当滚动的定位 小于一个值的时候 再显示置顶的按钮  */
        this.ifshow = -position.y > 1000 ? true : false;
        this.isTabFixed = -position.y > this.tabOffsetTop ? true : false;
   
      },
      //监听 下拉加载
      loadMore() {
        /*下载更多 */
        console.log("loadMore..")
        /* 这个地方 很重要 我们可以去重新查看当时定义的这个方法 的page 是 +=1的 也就是说
        你每下拉一次 他就会执行一次page +=1 从而获取更多的数据
        */
        this.getHomeGoods(this.currentType)
      },

      swiperImageLoad() {
        /* 图片加载成功 */
        console.log("图片加载成功")
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop

      },
      /* 
      网络请求相关方法
       */

      //获取轮播图
      getHomeMultidata() {
        getHomeMultidata().then(res => {

          /* 保存数据 */
          this.result = res;
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        });

      },

      //获取商品列表
      getHomeGoods(type) {


        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {

          console.log(res)
          /* 保存数据 */
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp();


        })
      },

      backClick() {
        this.$refs.scroll.scroll.scrollTo(0, 0, 1000)

      }

    },
    /* 计算属性 */
    computed: {
      /* 获取你当前点击的是哪个选项下的数据 分别是 pop new sell */
      showGoods() {
        return this.goods[this.currentType].list
      }
    }

  }


</script>

<style scoped>
  .home-nav {
    background-color: #54FF9F;
    color: white;
  
  }




  .content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 51px;
    top: 44px;
    overflow: hidden;
  }

  .arrive-top {
    position: absolute;
    right: 3px;
    bottom: 52px;
  }

  .tab-control{
    position: relative;
    z-index: 9;
  }
</style>