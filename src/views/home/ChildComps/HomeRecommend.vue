<template>


<div class="recommend">


<div v-for="item in recommends">
    <a :href="item.link"><img :src="item.image" alt=""></a>
    <div>{{item.title}}</div>

</div>

    
</div>


</template>




<script>

export default{
    name:"HomeRecommend",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}


</script>

<style scoped>
.recommend{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    text-align: center;
    margin:15px 0;
    padding: 5px 0;
}
img{
width: 54px;
height: 54px;

}
</style>