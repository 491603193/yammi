import Index from '../views/Index.vue'
import Hello from '../components/HelloWorld.vue'
import Login from '../views/Login.vue'
const routers =     [
    {
        path: '/',
        name: 'hello',
        component: Hello
    },
    {
        path: '/index',
        name: 'index',
        component: Index
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/about/:id',
        name: 'about',
        component: () => import('../views/About.vue'),
        props: { default: true, sidebar: false }
    },
    {
        path: '/tabContainer',
        name: 'tabContainer',
        component: () => import('../views/tabContainer.vue')
    },
    {
        path: '/material',
        name: 'material',
        component: () => import('../components/material/Material.vue')
    }

];
export default routers














