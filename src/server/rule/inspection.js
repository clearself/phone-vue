import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'

// 规则组接口
export const get_rule_tree = (data) => {
    return axios.request({
        url: 'rule/manage/rule/findRuleType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const add_rule_group = (data) => {
    return axios.request({
        url: 'rule/manage/rule/saveRuleType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_rule_group = (data) => {
    return axios.request({
        url: 'rule/manage/rule/deleteRuleType',
        method: 'post',
        data: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}
export const get_order_template = (data) => {
    return axios.request({
        url: 'rule/manage/rule/getAlarmWorkMould',
        method: 'post',
        data: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}
export const get_order_user = (data) => {
    return axios.request({
        url: 'rule/manage/rule/getUser',
        method: 'post',
        data: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}

