import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'

export const getParse = (data) => {
    return axios.request({
        url: 'data_center/manage/logparse/queryParseRulePage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const delParse = (data) => {
    return axios.request({
        url: 'data_center/manage/logparse/deleteParseRule',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const parseing = (data) => {
    return axios.request({
        url: 'data_center/manage/logparse/parseContent',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const getRegexList = (data) => {
    return axios.request({
        url: 'data_center/manage/logparse/getRegexList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const parseContent = (data) => {
    return axios.request({
        url: 'data_center/manage/logparse/parseContent',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const getTargetFieldsList = (data) => {
    return axios.get('/data_center/manage/logparse/getTargetFieldsList', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const getOriginalFieldsList = (data) => {
    return axios.request({
        url: 'data_center/manage/logparse/getOriginalFieldsList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const saveParseRule = (data) => {
    return axios.request({
        url: 'data_center/manage/logparse/saveParseRule',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const getRuleById = (data) => {
    return axios.request({
        url: 'data_center/manage/logparse/getRuleById',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const copyRuleById = (data) => {
    return axios.request({
        url: 'data_center/manage/logparse/copyRuleById',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const getDeviceTypeTree = (data) => {
    return axios.get('data_center/manage/logparse/getDeviceTypeTree', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

