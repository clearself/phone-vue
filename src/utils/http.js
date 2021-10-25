import axios from 'axios'
import router from '../router/index'
import { Message, MessageBox, Notification } from 'element-ui'
import { setsessionStorage, removesessionStorage } from '../assets/js/public_fun.js'
import store from '../store/index'

// 全局的配置的默认值/defaults
export let axios_config = () => {
    axios.defaults.baseURL = 'api/'
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.defaults.timeout = 60000
    axios.interceptors.response.use(
        response => {
            // IE 8-9
            if (response.data == null && response.config.responseType === 'json' && response.request.responseText != null) {
                try {
                    // eslint-disable-next-line no-param-reassign
                    response.data = JSON.parse(response.request.responseText)
                } catch (e) {
                    // ignored
                }
            }
            console.log(response)
            return response
        },
        (error) => {
            console.dir(error)
            let code = 0
            try {
                code = error.response.status
            } catch (e) {
                if (error.toString().indexOf('Error: timeout') !== -1) {
                    Notification.error({
                        title: '网络请求超时',
                        duration: 2500
                    })
                    return Promise.reject(error)
                }
                if (error.toString().indexOf('Error: Network Error') !== -1) {
                    Notification.error({
                        title: '网络请求错误',
                        duration: 2500
                    })
                    return Promise.reject(error)
                }
                console.log(code)
            }
            if (code === 503) {
                if (document.getElementsByClassName('el-notification').length === 0) {
                    Notification.error({
                        title: '服务不可用',
                        duration: 2500
                    })
                }
                return Promise.reject(error)
            }
            if (code === 504) {
                if (document.getElementsByClassName('el-notification').length === 0) {
                    Notification.error({
                        title: '网关超时',
                        duration: 2500
                    })
                }
                return Promise.reject(error)
            }
            if (code === 401) {
                // router.push({ path: '/401' })
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
}
axios_config()
export const getAjax = (result) => {
    return new Promise((resolve, reject) => {
        if (typeof result.data.code !== 'undefined' && result.data.code == 1) {
            resolve(result.data.data)
        } else {
            if (result.data.code == 2) {
                // 请求成功但流程不对
                if (document.getElementsByClassName('el-message').length === 0) {
                    Message({
                        message: result.data.message,
                        type: 'warning'
                    })
                }
            } else if (result.data.code == 9999) {
                MessageBox.confirm('系统报错，点击查看详情?', '提示', {
                    confirmButtonText: '查看',
                    cancelButtonText: '取消',
                    type: 'warning',
                    customClass: 'confirm-box'
                })
                    .then(() => {
                        setsessionStorage('errorInfo', result.data.message)
                        router.push('/error')
                    })
                    .catch(() => {})
            } else if (result.data.code == 9005) {
                if (document.getElementsByClassName('el-message').length === 0) {
                    Message({
                        message: '登录已失效，请重新登录！',
                        type: 'warning'
                    })
                }
                removesessionStorage('currentPath')
                store.commit('changeExit', true)
                setTimeout(() => {
                    router.push('/login')
                }, 1500)
            } else {
                if (document.getElementsByClassName('el-message').length === 0) {
                    Message({
                        message: result.data.message,
                        type: 'warning'
                    })
                }
            }
            reject(result.data)
        }
    })
}
export const getAjaxSome = (result) => {
    return new Promise((resolve, reject) => {
        if (typeof result.data.code !== 'undefined' && result.data.code == 1) {
            resolve(result.data)
        } else {
            if (result.data.code == 2) {
                // 请求成功但流程不对
                if (document.getElementsByClassName('el-message').length === 0) {
                    Message({
                        message: result.data.message,
                        type: 'warning'
                    })
                }
            } else if (result.data.code == 9999) {
                MessageBox.confirm('系统报错，点击查看详情?', '提示', {
                    confirmButtonText: '查看',
                    cancelButtonText: '取消',
                    type: 'warning',
                    customClass: 'confirm-box'
                })
                    .then(() => {
                        setsessionStorage('errorInfo', result.data.message)
                        router.push('/error')
                    })
                    .catch(() => {})
            } else if (result.data.code == 9005) {
                if (document.getElementsByClassName('el-message').length === 0) {
                    Message({
                        message: '登录已失效，请重新登录！',
                        type: 'warning'
                    })
                }
                removesessionStorage('currentPath')
                store.commit('changeExit', true)
                setTimeout(() => {
                    router.push('/login')
                }, 1500)
            } else {
                if (document.getElementsByClassName('el-message').length === 0) {
                    Message({
                        message: result.data.message,
                        type: 'warning'
                    })
                }
            }
            reject(result.data)
        }
    })
}
export const getAjaxFile = result => {
    // console.log(result)
    return new Promise((resolve, reject) => {
        if (result.status == 200) {
            resolve(result.data)
        } else {
            if (result.data.code == 2) { // 请求成功但流程不对
                if (document.getElementsByClassName('el-message').length === 0) {
                    Message({
                        message: result.data.message,
                        type: 'warning'
                    })
                }
            } else if (result.data.code == 9999) {
                MessageBox.confirm('系统报错，点击查看详情?', '提示', {
                    confirmButtonText: '查看',
                    cancelButtonText: '取消',
                    type: 'warning',
                    customClass: 'confirm-box'
                }).then(() => {
                    setsessionStorage('errorInfo', result.data.message)
                    router.push('/error')
                }).catch(() => {})
            } else if (result.data.code == 9005) {
                if (document.getElementsByClassName('el-message').length === 0) {
                    Message({
                        message: '登录已失效，请重新登录！',
                        type: 'warning'
                    })
                }
                removesessionStorage('currentPath')
                store.commit('changeExit', true)
                setTimeout(() => {
                    router.push('/login')
                }, 1500)
            } else {
                if (document.getElementsByClassName('el-message').length === 0) {
                    Message({
                        message: result.data.message,
                        type: 'warning'
                    })
                }
            }
            reject(result.data)
        }
    })
}
