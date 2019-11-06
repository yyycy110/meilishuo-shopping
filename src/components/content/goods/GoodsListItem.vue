<template>

    <div class="goods-item" @click="itemClick">
        <img :src="showImage" alt="" >
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
            goodsItem: {
                type: Object,
                default() {
                    return {}
                }
            }


        },
        computed: {
            showImage() {
                return this.goodsItem.image || this.goodsItem.show.img
            }
        },
        methods: {
            itemClick() {
                this.$router.push('/detail/' + this.goodsItem.iid)
                console.log('详情页')
            }
        },
        
    }

</script>

<style scoped>
    .goods-item {
        width: 150px;

    }

    .goods-item img {
        width: 100%;
        height: 250px;
        border-radius: 5px;

    }

    .goods-info {
        font-size: 12px;
        text-align: center;
        overflow: hidden;

    }

    .goods-info p {

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

    }

    .goods-info .price {
        float: left;

    }

    .goods-info .cfav {
        float: right;
        color: palevioletred;
        ;

    }
</style>