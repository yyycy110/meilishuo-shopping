<template>
    <div class="main">
        <div class="goods-title">{{goods.title}}</div>

        <div class="goods-price">
            <span class="newPrice">{{goods.price}}</span>
            <span class="oldPrice">{{goods.oldPrice}}</span>
            <span class="discount">{{goods.discount}}</span>

        </div>

        <div class="goods-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[3].name}}</span>


        </div>


        <div class="goods-service">
            <span v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </span>

        </div>
    </div>



</template>


<script>

    export default {
        props: {
            goods: {
                type: Object

            }
        }

    }


</script>

<style scoped>
    .main {
        margin: 8px 8px;
        border-bottom: 5px solid #f2f5f8;
    }

    /* 标题板块 */

    .main .goods-title {
        height: 60px;
        color: black;
        font-size: 18px;
        letter-spacing: 0.5px;
    }

    /* 价格板块 */
    .goods-price {
        height: 40px;
        margin-top: 15px;
    }

    .goods-price .newPrice {
        color: palevioletred;
        font-weight: bold;
        font-size: 24px;
    }

    .goods-price .oldPrice {
        margin: 0 5px;
        text-decoration: line-through;
    }

    .goods-price .discount {
        border-radius: 8px;
        background-color: var(--color-high-text);
        padding: 2px 5px;
        color: #fff;
    }

    /* 销量收藏板块 */
    .goods-other {
        margin-top: 10px;
        height: 40px;
        display: flex;
        justify-content: space-between;
    }

    /* 有关消费者权益板块 */
    .goods-service {
        margin-top: 10px;
        height: 33px;
        display: flex;
        justify-content: space-between;

    }

    .goods-service span {
        font-size: 14px;
        line-height: 33px;
    }

    .goods-service img {
        width: 20px;
        height: 20px;
        line-height: 33px;
    }
</style>