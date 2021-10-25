
const Home = () => import('@/pages/Home.vue')
const About = () => import('@/pages/About.vue')
const Login = () => import('@/pages/login/index.vue')
export default [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }

]
