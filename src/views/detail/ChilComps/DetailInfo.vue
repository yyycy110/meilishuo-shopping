<template>

  <div v-if="Object.keys(detailInfo).length !==0">
    <div class="detail-info">

       <div class="desc">{{detailInfo.desc}}</div>

  
       <div class="key">{{detailInfo.detailImage[0].key}}</div>

        <img v-for="(item,index) in detailInfo.detailImage[0].list" :src="item" alt="" :key="index">


    </div>

</div>
</template>



<script>

    export default {
        props: {
            detailInfo: {
                type: Object
            }
        },
     
    }



</script>


<style scoped>
    

    .detail-info{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }

    img{
        width: 100%;
        height: 300px;
        margin-bottom: 5px;
      
    }
    .key{

        color:black;

        margin: 10px 7px;
    }

    .desc{
        border-left: 5px solid palevioletred;
        padding: 0px 10px;
        margin: 20px 7px;
        color: gray;
    }
</style>