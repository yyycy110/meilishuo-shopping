<template>
    <div class="cart-list">
        <div class="list" v-for="(item,index) in getCartList" :key="index">
            <div style="margin:0 10px">
                <check-button :isChecked="item.checked" @click.native="checkClick(item)"></check-button>
            </div>
            <img :src="item.image" alt="">
            <div class="content" style="width: 220px;">
                <p class="title">{{item.title}}</p>
                <p class="desc" style="color: gray;font-size: 12px;">{{item.desc}}</p>
                <div>
                    <p class="price">￥{{item.lowNowPrice}}</p>
                    <p class="count">x{{item.count}}</p>
                </div>

            </div>

        </div>
    </div>
</template>

<script>

    import CheckButton from 'components/common/checkButton/CheckButton'
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
             
            }
        },
        components: {
            CheckButton
        },

        computed: {
            ...mapGetters(['getCartList'])
        },
        methods: {
            checkClick(item){
                console.log("触发了")
        
                   item.checked = !item.checked;
        }
    }
    }
</script>

<style scoped>
    .list {
        border-bottom: 1px solid #f3f5f7;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 110px;
    }

    .cart-list {
        margin: 5px 0;
    }

    .content {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }

    .title,
    .desc {
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .price {
        color:#FF6347;
    }

    .count {
        float: right;
    }

    img {
        display: inline;
        height: 80px;
        width: 80px;
    }
</style>