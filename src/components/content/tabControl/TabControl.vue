<template>

    <div class="tabcontrol">
        <div v-for="(item,index) in titles" :class="{active:index === currentIndex}" @click="itemClick(index)">
            <span>{{item}}</span>

        </div>
    </div>
  
</template>


<script>
    export default {
        props: {
            titles: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index;
                this.$emit('tabClick',index)
            }
        }
    }

</script>

<style scoped>
    .tabcontrol {
        background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
    }

    .active {
        color: var(--color-high-text);
        border-bottom: 2px solid var(--color-tint);
    }
</style>