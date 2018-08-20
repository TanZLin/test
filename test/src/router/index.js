import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/pages/home/home"
import homeSearch from "../components/pages/home/homeSearch"
import shop from "../components/pages/shop/shop"
import detail from "../components/pages/detail/detail"
import cart from "../components/pages/cart/cart"

Vue.use(VueRouter)

const routes =  [
        {
            path: '/',
            name: 'home',
            component:Home,
        },
        {
            path: '/homesearch',
            name: 'homeSearch',
            component:homeSearch,
        },
        {
            path: '/shop',
            name: 'shop',
            component:shop,
        },
        {
            path: '/detail',
            name: 'detail',
            component:detail,
        },
        {
            path:'/cart',
            name:'cart',
            component:cart,
        }
    ]
const router = new VueRouter({
    mode:'history',
    routes
})

//全局路由守卫
//那个需要登录才能查看的页面在这添加
let need_user_state = ['']

router.beforeEach((to,from,next)=>{
    let need_us = need_user_state.some(name=>to.name===name)

    if(need_us && !store.state.commons.user_state ){
        next('./login');
        return false;
    }
    next()
})

export default router