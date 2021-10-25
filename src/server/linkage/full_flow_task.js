import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'

export const getFlowTaskList = (data) => {
    return axios.request({
        url: 'link_manage/manage/nft/pageFlowTask',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const addFlowTask = (data) => {
    return axios.request({
        url: 'link_manage/manage/nft/addFlowTask',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const conditionPage = (data) => {
    return axios.request({
        url: 'link_manage/manage/nft/conditionPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const delCondition = (data) => {
    return axios.request({
        url: 'link_manage/manage/nft/delCondition',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_pcac = (data) => {
    return axios.request({
        url: 'data_center/terminal/viewPcap',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
