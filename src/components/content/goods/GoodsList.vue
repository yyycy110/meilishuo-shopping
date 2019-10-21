<template>

    <div class="goods">

        <goods-list-item v-for="item in goods" :goodsItem="item"/>

    </div>

</template>




<script>

    import GoodsListItem from './GoodsListItem.vue'
    export default {
        name: "GoodsList",
        components: {
            GoodsListItem
        },
        props: {
            goods: {
                type: Array,
                default() {
                    return []
                }

            }
        }
    }



</script>



<style scoped>
.goods{
    width: 100%;
    padding: 2px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10px;
}
</style>