import Home from '../views/Home.vue'
import index from '../views/index.vue'
const routers =     [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/tabContainer',
        name: 'tabContainer',
        component: () => import('../views/tabContainer.vue')
    }
];
export default routers














