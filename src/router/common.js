
const Home = () => import('@/pages/Home.vue')
const About = () => import('@/pages/About.vue')
const Login = () => import('@/pages/login/index.vue')
const Vr = () => import('@/pages/vr.vue')
export default [
    {
        path: '/',
        name: 'Home',
        component: Vr
    },
    {
        path: '/about',
        name: 'About',
        component: Vr
    },
    {
        path: '/vr',
        name: 'vr',
        component: About
    },
    {
        path: '/video',
        name: 'video',
        component: Login
    }

]
