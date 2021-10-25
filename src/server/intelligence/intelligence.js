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

// 威胁情报--获取所有攻击方式
export const get_attackWay = (data) => {
    return axios.request({
        url: 'intelligence/manage/intelligence/getAllAttackMode',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 威胁情报--列表
export const get_attackList = (data, page, pageSize) => {
    return axios.request({
        url: `intelligence/manage/intelligence/page?page=${page}&pageSize=${pageSize}`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 威胁情报--添加、修改
export const save_attack = (data) => {
    return axios.request({
        url: 'intelligence/manage/intelligence/save',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 威胁情报--删除
export const del_attack = (data) => {
    return axios.request({
        url: 'intelligence/manage/intelligence/delete',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 常用端口--列表
export const get_commonPort = (data, page, pageSize) => {
    return axios.request({
        url: `intelligence/manage/port/page?page=${page}&pageSize=${pageSize}`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_weibuData = (data, type) => {
    return axios.request({
        url: `isr/manage/intelligence/getLost/${type}`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_weibuList = (data) => {
    return axios.request({
        url: `isr/manage/intelligence/findIntelligenceList`,
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
