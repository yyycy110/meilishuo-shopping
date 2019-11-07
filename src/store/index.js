import Vue from 'vue'
import Vuex from 'vuex'

/* store 目录结构 */
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)


/* 创建state */
const state = {
    cartList:[],
    ifchanged:true
}
const store = new Vuex.Store({
    /* state 类似data */
state,
mutations,
actions,
getters
    




})


export default store