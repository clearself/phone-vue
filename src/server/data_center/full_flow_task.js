import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'

export const getFlowTaskList = (data) => {
    return axios.request({
        url: 'data_center/manage/flowTask/page',
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
        url: 'data_center/manage/flowTask/add',
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
        url: 'data_center/manage/flowTask/conditionPage',
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
        url: 'data_center/manage/flowTask/delCondition',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
