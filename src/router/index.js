import Vue from 'vue'
import VueRouter from 'vue-router'



/* 获取四个组件 分别是首页 分类 购物车 我的信息  */
const Home = () => import('../views/home/Home.vue')
const Category = () => import("../views/category/CateGory.vue")
const Cart = () => import("../views/cart/cart.vue")
const Profile = () => import("../views/profile/profile.vue")



Vue.use(VueRouter)



//创建Router
const routes = [

{
    path:'/',
    redirect:"/home"
},
{
    path:"/home",
    component:Home
},
{
    path:"/category",
    component:Category
},
{
    path:"/cart",
    component:Cart
},
{
    path:"/profile",
    component:Profile
},




]

const router = new VueRouter({
    routes,
    mode:"history"
})

export default router;



