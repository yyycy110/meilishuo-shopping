<template>
  <swiper :options="swiperOption" class="swiper-item">
    <!-- slides -->
     <slot></slot>
   
 
   
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  
  </swiper>
</template>




<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop:true,
          autoplay:true
        },
      }
    }
  }
</script>

<style >

.slide-img{
  width: 100%;
  height: 100%;
}



</style>
 
 


