<template>

    <div class="main" v-if="Object.keys(shop).length !== 0">
        <div class="shop-top">
            <img :src="shop.shopInfo.shopLogo" alt="">
            <div class="shop-name">{{shop.shopInfo.name}}</div>
        </div>

        <div class="shop-low">
            <div class="left item ">
                <span>{{shop.shopInfo.cSells |sellCountFilter}}</span>
                <div>总销量</div>
            </div>
            <div class="center item co">
                <span>{{shop.shopInfo.cGoods}}</span>
                <div>全部宝贝</div>

            </div>
            <div class="right item">
                <div class="right-info" v-for="item in shop.shopInfo.score ">{{item.name}} <span>{{item.score}}</span>
                    <span :class="[item.isBetter?'high':'low']">{{item.isBetter?'高':'低'}}</span>
                </div>

            </div>


        </div>




    </div>


</template>



<script>
    export default {
        props: {
            shop: {
                type: Object
            }
        },
        data(){
            return{
              
            }
        },
        computed:{
          

        },
         filters:{
            sellCountFilter(value){
                let result = value;
                if(value>10000){
                    result = (value/10000).toFixed(1)+'万'
                    console.log(result)
                }
                return result;
            }

         }


    }
</script>

<style scoped>
    .main {
        height: 200px;
        margin-top: 5px;
        border-bottom: 5px solid #f2f5f8;

    }

    /* 店铺图标和店铺名 */
    .shop-top {
        display: flex;
        flex-direction: row;
        height: 80px;
        align-items: center;
    }

    .shop-top img {
        height: 55px;
        width: 55px;
        border-radius: 50%;
        border: 1px solid wheat;
        background-color: #DCDCDC;

    }

    .shop-top .shop-name {
        margin: 0px 10px;
        display: inline;


    }

    /* 店铺销量 */
    .shop-low {
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .shop-low .item {
        width:50px;

        
    }

    .shop-low .co{
        border-right: 3px solid #f2f5f8;
    }

    .right .right-info {
        display: block;
    }
   

    .high{
        border-radius: 5px;
        padding: 3px 3px;
        color: white;
        background-color: palevioletred; 
        
    }

    .low{
        border-radius: 5px;
        padding: 3px 3px;
        color: white;  
     
        

    }

    
</style>