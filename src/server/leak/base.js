import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'
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
// 获取用户信息
export const get_user_info = (data) => {
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
