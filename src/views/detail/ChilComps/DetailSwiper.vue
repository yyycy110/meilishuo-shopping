<template>


    <swiper class="swiper-item">

        <swiper-slide v-for="(item,index) in TopImg">
            <a href="">
                <img :src="item" alt=""  >
            </a>
        </swiper-slide>

    </swiper>

</template>


<script>

    import Swiper from "components/common/swiper/Swiper"

    export default {
        props: {
            TopImg: {
                type: Array
            }
        },
        components: {
            Swiper
        }
    }

</script> 

<style  scoped>
.swiper-item{
    height: 300px;
    width: 100%;
}
img{
width: 100%;
height: 320px;
overflow: hidden;
}
</style>

