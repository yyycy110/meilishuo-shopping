<template>
    <div class="check-button" :class="{check:isChecked}" >
        <img src="../../../assets/img/cart/tick.svg" alt="" >
    </div>
</template>

<script>
    export default {
        props: {
            isChecked: {
                type:Boolean,
                default:false
        }
        },
        methods: {
          
        }
    }
</script>


<style scoped>
    .check-button{
        
        border-radius: 50%;
        width: 21px;
        height: 21px;
        border: 1px solid #aaa;
    }
     img{
         height: 18px;
         width: 18px;
     }
    .check{
        border-color: red;
        background-color: red;
    }
</style>