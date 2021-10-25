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

// 系统列表
export const get_menu = (data) => {
    return axios.request({
        url: 'intelligence/manage/permission/getMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

// 恶意iP库
export const get_ip_detail = (data) => {
    return axios.request({
        url: 'intelligence/manage/spiteIp/getSpiteIp',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 采集配置
export const get_threat_config = (data) => {
    return axios.request({
        url: 'intelligence/manage/collectConfig/get',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const save_threat_config = (data) => {
    return axios.request({
        url: 'intelligence/manage/collectConfig/save',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const test_threat_config = (data) => {
    return axios.request({
        url: 'intelligence/manage/collectConfig/test',
        method: 'post',
        data: data
    }).then(result => {
        return new Promise((resolve, reject) => {
            if (result.status == 200) {
                Message({
                    message: '测试成功',
                    type: 'success'
                })
                resolve(result.data)
            } else {
                Message({
                    message: '测试失败',
                    type: 'error',
                    duration: 5000,
                    showClose: true
                })
                reject(result.data)
            }
        })
    })
}
/* 情报查询*/
export const get_threat_log = (data) => {
    return axios.request({
        url: 'intelligence/manage/intelligenceQuery/getRecord?page=1&pageSize=20',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_threat_search = (data) => {
    return axios.request({
        url: 'intelligence/manage/intelligenceQuery/query',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
