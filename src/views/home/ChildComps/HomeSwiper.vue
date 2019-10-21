<template>

    <swiper>
        <swiper-slide v-for="(item,index) in banners">
            <a :href="item.link">
                <img :src="item.image" alt="" class="slide-img">
            </a>
        </swiper-slide>

    </swiper>



</template>



<script>
    import Swiper from 'components/common/swiper/Swiper'


    export default {
        name: "HomeSwiper",
        components: {
            Swiper
        },
        /* 组件的传值 这里是父组件 而Home 里我们请求了数据baners 需要把Home那边的banner和这边子组件v-for 里面的banners做绑定  */
        props: {
            banners: {
                type: Array,
                default() {
                    return []
                }
            }
        }

    }

</script>