import Vue from 'vue'
import Router from 'vue-router'
import routers from './config/routers'
import {getLocalStorage,setLocalStorage,clearLocalStorage} from  './common/utils/location.js'
Vue.use(Router);

const router = new Router({
    routes: routers
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
    // to: Route: 即将要进入的目标 路由对象
    // from: Route: 当前导航正要离开的路由
    // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
    const nextRoute = ['login','index']; //不需要过滤的
    let isLogin = getLocalStorage("isLogin");  // 是否登录
    console.log(isLogin);
    console.log(to);
    // 未登录状态；当路由到nextRoute指定页时，跳转至login
    if (nextRoute.indexOf(to.name) < 0) {
        if (!isLogin) {
            router.push({ name: 'login' });
            return;
        }
    }
    next();
});


export default router