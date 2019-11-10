import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
/* 图片懒加载 */
import VueLazyload from 'vue-lazyload'
/* 取消 移动端自带的300延迟 */
import Fastclick from 'fastclick'

import toast from 'components/common/Toast'

/* px 转vm */




import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */) 
Vue.use(VueLazyload,)

/* 解决移动端300毫秒的延迟 */
Fastclick.attach(document.body)

Vue.use(toast)

new Vue({
  render: h => h(App),
   router,
   store
}).$mount('#app')
