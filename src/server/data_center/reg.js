import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'
// 采集陪住库
export const add_reg = (data) => {
    return axios.request({
        url: 'data_center/manage/gatherConfigLibrary/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_list = (data) => {
    return axios.request({
        url: 'data_center/manage/gatherConfigLibrary/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const del_reg = (data) => {
    return axios.request({
        url: 'data_center/manage/gatherConfigLibrary/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_conf_temp = (data) => {
    return axios.request({
        url: 'data_center/manage/gatherConfigLibrary/getTemplate',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 正则库
export const add_reg_old = (data) => {
    return axios.request({
        url: 'data_center/manage/regularLibrary/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_list_old = (data) => {
    return axios.request({
        url: 'data_center/manage/regularLibrary/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const del_reg_old = (data) => {
    return axios.request({
        url: 'data_center/manage/regularLibrary/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const getRegDeviceTypeTree = (data) => {
    return axios.get('data_center/manage/regularLibrary/getDeviceTypeTree', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
