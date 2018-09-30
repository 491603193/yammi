import Index from '../views/Index.vue'
const routers =     [
    {
        path: '/',
        name: 'index',
        component: Index
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














