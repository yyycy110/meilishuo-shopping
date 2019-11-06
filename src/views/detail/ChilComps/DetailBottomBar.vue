<template>
    <div class="bottom-bar">

        <div class="bottom-left">
            <div>
                <i class="icon service"></i>
                <span>客服</span>
            </div>
            <div>
                <i class="icon shop"></i>
                <span>店铺</span>

            </div>
            <div>
                <i class="icon select"></i>
                <span>收藏</span>

            </div>

        </div>

        <div class="bottom-right">

            <div class="cart" @click="addToCart">加入购物车</div>
            <div class="buy">购买</div>

        </div>
    </div>
</template>

<script>
    export default {
        props: {
        },
        methods: {
            /* 点击添加到购物车 */
            addToCart() {
     
                this.$emit("addCart")
            }
        }
    }
</script>

<style scoped>
    .bottom-bar {

        height: 49px;
        background-color: white;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;

    }

    .bottom-left,
    .bottom-right {
        flex: 1;
    }

    .bottom-right {
        display: flex;
        flex-direction: row;
        ;
        justify-content: space-around;
    }

    .bottom-left {
        display: flex;
        flex-direction: row;
        ;
        justify-content: space-around;
    }

    .bottom-left .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 6px auto 3px;
        background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
    }

    .cart {

        line-height: 49px;
        text-align: center;
        flex: 1;
        height: 49px;
        background-color: #FFD700;
    }

    .buy {
        color: white;
        flex: 1;
        text-align: center;
        line-height: 49px;
        height: 49px;
        background-color: pink;
    }
</style>