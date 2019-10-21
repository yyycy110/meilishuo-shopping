<template>

<div class="item" @click="btnclick">
   <slot name="item-icon"></slot>
   <slot name="item-text"></slot>

   </div>
</template>



<script>
  export default{
    props:{
      path:String
    },
    methods:{
     btnclick(){
       console.log("btn生效")
       this.$router.push(this.path)
     }
    }


  }


</script>

<style >

img{
    width: 24px;
    height: 24px;
}

.item{
  flex: 1;
  text-align: center;
  height: 49px;
  margin-top: 3px;
}

</style>