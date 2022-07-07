
const Home = () => import('@/pages/Home.vue')
const About = () => import('@/pages/About.vue')
const Login = () => import('@/pages/login/index.vue')
export default [
    {
        path: '/',
        name: 'Home',
        component: Login
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/video',
        name: 'video',
        component: Login
    }

]
