import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'

// 系统列表
export const get_menu = (data) => {
    return axios.request({
        url: 'alarm/manage/permission/getMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}
// 告警字段
export const get_selested_all_fileds = (data) => {
    return axios.request({
        url: 'alarm/manage/workMould/getAlarmField',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_condition = (data) => {
    return axios.request({
        url: 'alarm/manage/workMould/allCondition',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取工单字段
export const get_work_fileds = (data) => {
    return axios.request({
        url: 'alarm/manage/workMould/getWorkOrderField',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取工单任务详情
export const get_workTask_detail = (data) => {
    return axios.request({
        url: 'alarm/manage/workOrder/getDetail',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取漏洞字段
export const get_leak_fileds = (data) => {
    return axios.request({
        url: 'alarm/manage/workMould/getLeakField',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 告警配置

// 攻击结果
export const get_attack_results = (data) => {
    return axios.request({
        url: 'alarm/manage/attackResult/get',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const save_attack_results = (data) => {
    return axios.request({
        url: 'alarm/manage/attackResult/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_attack_results = (data) => {
    return axios.request({
        url: 'alarm/manage/attackResult/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 告警类型
export const get_alarm_type = (data) => {
    return axios.request({
        url: 'alarm/manage/alarmType/get',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const save_alarm_type = (data) => {
    return axios.request({
        url: 'alarm/manage/alarmType/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const delete_alarm_type = (data) => {
    return axios.request({
        url: 'alarm/manage/alarmType/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
