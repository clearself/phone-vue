import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'

// 告警规则设置
export const add_rule = (data) => {
    return axios.request({
        url: 'alarm/manage/alarmRuleConfig/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_alarm_type = (data) => {
    return axios.request({
        url: 'alarm/manage/alarmRuleConfig/getAlarmType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_rule_list = (data) => {
    return axios.request({
        url: 'alarm/manage/alarmRuleConfig/getAllRules',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const delete_rule = (data) => {
    return axios.request({
        url: 'alarm/manage/alarmRuleConfig/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const start_rule = (data) => {
    return axios.request({
        url: 'alarm/manage/alarmRuleConfig/updateStatus',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 交流大厅数据源配置
export const get_match_all = (data) => {
    return axios.request({
        url: 'alarm/manage/msgSet/getMsgSet',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_match_set = (data) => {
    return axios.request({
        url: 'alarm/manage/msgSet/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
