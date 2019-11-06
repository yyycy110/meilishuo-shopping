<template>
    <div>


        <nav-bar>


            <div slot="left" @click="blackClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center">
                <span v-for="(item,index) in titles" :class="{active:index == currentIndex}"
                    @click="NavCon(index)" :key="index">{{item}}</span>

            </div>
        </nav-bar>

    </div>


</template>




<script>

    import NavBar from 'components/common/navbar/NavBar'

    export default {
        data() {
            return {
                titles: ['商品', '参数', '评论', '推荐'],
                currentIndex: 0
            }

        },
        components: {
            NavBar
        },
        methods: {
            /* 这个index呢 是v-for (item,index)的index */
            NavCon(index) {
                 this.currentIndex = index
                this.$emit('controlNav',index)
            },
            blackClick() {
                this.$router.back();
            }
        }

    }
</script>

<style scoped>
    span {
        margin: 0 10px;
        font-size: 14px;
        color: gray;
    }

    img {
        margin-top: 12px;
        width: 20px;
        height: 20px;
    }

    .active {
        color: red;
    }
</style>