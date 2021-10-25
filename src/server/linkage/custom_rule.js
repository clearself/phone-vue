import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'

export const getEventType = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/getEventType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const getAll = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/pageCustomRules',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const addCustomRule = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/saveCustomRules',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const delCustomRule = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/deleteCustomRules',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

