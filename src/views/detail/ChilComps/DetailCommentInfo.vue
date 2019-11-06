<template>
    <div class="main">
        <div class="title">用户评论</div>
        <div class="main-info">
            <div v-for="(item,index) in commentInfo" :key="index">
                <div class="comment-user">
                    <img :src="item.user.avatar" alt="">
                    <span>{{item.user.uname}}</span>
                </div>
                <div class="comment-content">{{item.content}}</div>
                <div class="timeinfo">
                    <span>{{item.created |formatDate}}</span>
                    <span style="margin-left: 10px;">{{item.style}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { format } from '../../../common/util.js'
    export default {
        props: {
            commentInfo: {
                type: Object,

            }
        },
        filters: {
            formatDate(value) {
                const date = new Date(value * 1000)
                /* 格式化date */

                return format(date)

            }
        }
    }
</script>

<style scoped>
    .main {
        border-bottom: 3px solid #f2f5f8;
        margin-bottom: 20px;
        padding: 20px;
    }

    .title {
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


    .comment-user {
        color: black;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 5px;
    }

    .comment-content {
        color: gray;
        margin-top: 10px;
    }

    .timeinfo {
        font-size: 15px;
        margin-top: 10px;
        color: gray;
    }
</style>