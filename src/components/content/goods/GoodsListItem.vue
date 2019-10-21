<template>

<div class="goods-item">
 <img :src="goodsItem.show.img" alt="">
  <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>

  </div>
</div>


</template>

<script>

    export default {
        name: "GoodsListItem",
        props: {
            goodsItem:{
                type:Object,
                default(){
                    return {}
                }
            }

        }
    }

</script>

<style scoped>
.goods-item{
  width: 150px;
 
}

.goods-item img{
width: 100%;
height: 250px;
border-radius: 5px;

}
.goods-info{
    font-size: 12px;
    text-align: center;
    overflow: hidden;

}
.goods-info p{
     
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

}

.goods-info .price{
float: left;
    
}
.goods-info .cfav{
float: right;
color: palevioletred;;
    
}
</style>