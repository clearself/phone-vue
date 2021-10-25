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
/* 工作台*/
export const get_work_num = (data) => {
    return axios.request({
        url: 'base_info/manage/workPlatform/getFourData',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取全部、完成、待办工单
export const get_three_work_num = (data) => {
    return axios.request({
        url: 'base_info/manage/workPlatform/getThreeData',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取超时工单
export const get_out_work_num = (data) => {
    return axios.request({
        url: 'base_info/manage/workPlatform/getOutData',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 工作类型数量
export const get_work_type_num = (data) => {
    return axios.request({
        url: 'base_info/manage/workPlatform/getOrderObjNum',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 当前表格
export const get_current_workTable = (data) => {
    return axios.request({
        url: 'base_info/manage/workPlatform/getPersonTask',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取通知
export const get_message_list = (data) => {
    return axios.request({
        url: 'base_info/manage/workPlatform/getInsideMessage',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 已读通知
export const markRead = (data) => {
    return axios.request({
        url: 'base_info/manage/workPlatform/updateInsideMessage',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取工单趋势统计
export const get_work_trend = (data) => {
    return axios.request({
        url: 'base_info/manage/workPlatform/getOrderTrend',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取工单类型统计
export const get_work_pie = (data) => {
    return axios.request({
        url: 'base_info/manage/workPlatform/getOrderTypeSum',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取工单柱形图
export const get_work_bar = (data) => {
    return axios.request({
        url: 'base_info/manage/workPlatform/getOrderTypeBar',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
