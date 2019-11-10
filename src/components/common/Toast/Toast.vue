<template>
  <div>
    <div class="toast" v-show="isShow">
      {{message}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      /* message:{
        type:String
      },
      show:{
        type:Boolean,
        default:false
      } */
    },
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, duration) {
        
        this.isShow = true;
        this.message = message;
        setTimeout(() => {
          this.message = '';
          this.isShow = false
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    z-index: 999;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 8px 10px;
    background-color: rgba(0, 0, 0, .3);
    color: white;
    transform: translate(-50%, -50%);
  }
</style>