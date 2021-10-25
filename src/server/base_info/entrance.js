import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'
// form表单五返回code
var getAjaxVal = result => {
    return new Promise((resolve, reject) => {
        if (result.status == 200) {
            resolve('success')
        } else {
            Message({
                message: result.data.message,
                type: 'warning'
            })
            reject(result.data)
        }
    })
}

// 登录接口
export const login = (data) => {
    console.log(data)
    return axios.request({
        url: 'base_info/loginUser',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取用户登录成功后的系统入口列表
export const getSysMenus = (data) => {
    return axios.request({
        url: 'base_info/manage/permission/getSysMenus',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
export const getNewSysMenus = (data) => {
    return axios.request({
        url: 'base_info/manage/permission/getNavigateList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 系统列表
export const get_menu = (data) => {
    return axios.request({
        url: 'base_info/manage/permission/getMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

// 退出
export const exit = (data) => {
    return axios.request({
        url: 'base_info/exit',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

export const get_time = (data) => {
    return axios.request({
        url: 'base_info/terminal/getSystemTime',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_history_messages = (data) => {
    return axios.request({
        url: 'chat/manage/greeting/getUserTopic',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_sys_info_decoding = (data) => {
    return axios.request({
        url: 'base_info/manage/permission/getSysInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_sys_info_base = (data) => {
    return axios.request({
        url: 'base_info/manage/permission/getSysInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_user_info_base = (data) => {
    return axios.request({
        url: 'base_info/manage/permission/getUserInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_asset_info_base = (data) => {
    return axios.request({
        url: 'base_info/terminal/getAdMsg',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
