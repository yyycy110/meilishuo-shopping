<template>
    <div class="wrapper" ref="wrapper">
git        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>



<script>

    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullupload: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                scroll: null
            }
        },
        mounted() {
            this.$nextTick(() => {
                /* 创建scroll 实例 */
                this.scroll = new BScroll(this.$refs.wrapper, {
                    click: true,
                    probeType: this.probeType,
                    pullUpLoad: this.pullupload


                })



                /* 监听滚动 */
                if (this.probeType === 2 || this.probeType === 3) {
                    this.scroll.on('scroll', (position) => {
                        this.$emit('tabScroll', position)
                    })
                }

                if (this.pullupload) {
                    /* 监听上拉事件 */
                    this.scroll.on('pullingUp', () => {
                        //监听滚动底部

                         this.$emit('pullingUp') 
                    })
                }


                this.scroll.refresh();
            })

        },
        methods: {
            finishPullUp(){
                this.scroll && this.scroll.finishPullUp();
            }

        }

    }

</script>


<style scoped>
    .wrapper {
        overflow: hidden;
    }
</style>