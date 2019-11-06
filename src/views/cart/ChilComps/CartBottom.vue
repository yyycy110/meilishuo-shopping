<template>
  <div class="bottom">
       

       <div class="left ">
        <check-button :isChecked="true"></check-button> 
       </div>
       <div class="center ">总计：{{}}</div>
       <div class="right "> <button class="btn">结算</button> </div>
  </div>
</template>

<script>

import CheckButton from "components/common/checkButton/CheckButton";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    CheckButton,
   
  },
  computed: {
    ...mapGetters(["priceSum"])
  }
};
</script>

<style scoped>

.bottom{
  position: absolute;
  align-items: center;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 45px;
  background-color: pink;
  display: flex;
  flex-direction: row;
  justify-content: space-between
}
span{
 
}

.btn{
  width: 100px; /* 宽度 */
	height: 45px; /* 高度 */
	border-width: 0px; /* 边框宽度 */
	border-radius: 3px; /* 边框半径 */
	background: #FF1493; /* 背景颜色 */
	cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
	outline: none; /* 不显示轮廓线 */
	font-family: Microsoft YaHei; /* 设置字体 */
	color: white; /* 字体颜色 */


}
</style>