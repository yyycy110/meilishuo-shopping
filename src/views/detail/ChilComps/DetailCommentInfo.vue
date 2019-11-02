<template>
    <div class="main">
        <div class="title">用户评论</div>
        <div class="main-info">
        <div v-for="(item,index) in commentInfo">
            <div class="comment-user" >
                <img :src="item.user.avatar" alt="">
                <span>{{item.user.uname}}</span>
            </div>
            <div class="comment-content">{{item.content}}</div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        props: {
            commentInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
    }
</script>

<style scoped>

    .title{
        border-bottom: 3px solid #f2f5f8;
        font-weight: bolder;
        margin: 20px 0;
        padding: 5px 5px;
    }
    img {
        border-radius: 50%;
        height: 40px;
        width: 40px;
    }


  .comment-user{

    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
  }
    .comment-content {
        color: gray;
        margin-top: 10px;
    }
</style>