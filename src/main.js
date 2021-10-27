
import 'core-js/stable'
import 'regenerator-runtime/runtime'
// import './assets/js/flexible.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueCookies from 'vue-cookies'
import '@vant/touch-emulator'
// import Vant from 'vant'
// rem h5 适配

import './assets/css/base.css'
// import 'vant/lib/index.css'
// import './icon/iconfont.css'
import store from './store/index.js'
import Debounce from './assets/js/utils.js'
// 自定义组件库
import FLYmodules from './components/modules/index.js'
// 自定义全局方法库
import PublicFun from './assets/js/exit_fun.js'
// // 自定义过滤器
import filters from './assets/js/filters.js'

import VueClipBoard from 'vue-clipboard2'
// 指令统一处理加载
import directives from './assets/js/directives.js'
// 路由切换加载进度条
import LoadingBar from './components/loading-bar/index.js'
// Vue.use(Vant)
Vue.use(VueCookies)
Vue.component('Debounce', Debounce)
Vue.use(FLYmodules)
Vue.use(PublicFun)
// 过滤器统一处理加载
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
// 国际化
// import { i18n } from './i18n/index'
Vue.use(VueClipBoard)

Object.keys(directives).forEach(key => {
    Vue.directive(key, {
        bind: directives[key].bind,
        inserted: directives[key].inserted,
        update: directives[key].update,
        componentUpdated: directives[key].componentUpdated,
        unbind: directives[key].unbind
    })
})
router.beforeEach((to, from, next) => {
    LoadingBar.start()
    next()
})
router.afterEach(transition => {
    LoadingBar.finish()
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    store,
    // i18n,
    render: h => h(App)
}).$mount('#app')

