import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'

export const getChannels = (data) => {
    return axios.request({
        url: 'data_center/manage/channelLabel/getChannels',
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
        url: 'data_center/manage/channelLabel/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const getAllField = (data) => {
    return axios.request({
        url: 'data_center/manage/channelLabel/allFields',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const getAllCondition = (data) => {
    return axios.request({
        url: 'data_center/manage/channelLabel/allCondition',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const del_tag = (data) => {
    return axios.request({
        url: 'data_center/manage/channelLabel/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_reg = (data) => {
    return axios.request({
        url: 'data_center/manage/channelLabel/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_label_tree = (data) => {
    return axios.request({
        url: 'data_center/manage/channelLabel/getAllDT',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_label_name = (data) => {
    return axios.request({
        url: 'data_center/manage/channelLabel/getLableNames',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
