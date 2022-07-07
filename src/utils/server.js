import axios from 'axios'
import router from '../router/index'
import { getAjax } from '@/utils/http'
import { Notify } from 'vant'
// 创建axios实例
const service = axios.create({
    baseURL: '/api/',
    timeout: 60 * 1000
})
// request拦截器
service.interceptors.request.use(
    (config) => {
        // let userInfo = getlocalStorage('userInfo')
        // if (userInfo && userInfo.token) {
        //     config.headers.token = userInfo.token
        // }
        if (config.method === 'post' && config.headers['Content-Type']) {
            // eslint-disable-next-line no-self-assign
            config.headers['Content-Type'] = config.headers['Content-Type']
        } else {
            config.headers['Content-Type'] = 'application/json'
        }
        return config
    },
    (error) => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)
// response 拦截器
service.interceptors.response.use(
    (response) => {
        console.log(response)
        const code = response.status
        if (code >= 200 && code < 300) {
            return getAjax(response.data)
        } else {
            Notify({ type: 'warning', message: response.data.message })
            return Promise.reject(response.data.message)
        }
    },
    (error) => {
        let code = 0
        try {
            code = error.response.data.code
        } catch (e) {
            if (error.toString().indexOf('Error: timeout') !== -1) {
                Notify({ type: 'warning', message: '网络请求超时' })
                return Promise.reject(error)
            }
            if (error.toString().indexOf('Error: Network Error') !== -1) {
                Notify({ type: 'warning', message: '网络请求错误' })
                return Promise.reject(error)
            }
        }
        if (code === 401) {
            router.push({ path: '/401' })
            // 需要创建401页面
            // router.push({ path: '/401' })
        } else if (code === 403) {
            // 需要创建403页面
            // router.push({ path: '/403' })
        } else if (code === 404) {
            // 需要创建404页面
            // router.push({ path: '/404' })
        } else {
            const errorMsg = error.response.data.message
            if (errorMsg === '不允许访问') {
                // 需要创建401页面
                // router.push({ path: '/401' })
            }
        }
        return Promise.reject(error)
    }
)

export default service

