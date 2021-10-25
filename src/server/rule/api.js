import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'

// 系统列表
export const get_menu = (data) => {
    return axios.request({
        url: 'rule/manage/permission/getMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

// 告警类别--规则
export const get_alarm_type_rule = (data) => {
    return axios.request({
        url: 'rule/manage/rule/getAlarmType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 提示音
// ip映射
export const add_voice = (data) => {
    console.log(data)
    return axios.request({
        url: 'rule/manage/warnSound/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取映射列表
export const get_voice = (data) => {
    return axios.request({
        url: 'rule/manage/warnSound/getAllWarnSound',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取映射列表
export const edit_voice = (data) => {
    return axios.request({
        url: 'rule/manage/warnSound/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_voice = (data) => {
    return axios.request({
        url: 'rule/manage/warnSound/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_voice_level = (data) => {
    return axios.request({
        url: 'rule/manage/warnSound/getLevel',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 规则-获取攻击结果
export const get_rule_attack_result = (data) => {
    return axios.request({
        url: 'rule/manage/rule/getAttackResult',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 规则--资产下拉
export const getAssetsSelect = (data) => {
    return axios.request({
        url: 'rule/manage/rule/getAssetsData',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 规则--标签
export const getSubjectLabel = (data) => {
    return axios.request({
        url: 'rule/manage/rule/getLabels',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 模拟数据
export const releaseRuleForm = (data) => {
    return axios.request({
        url: 'rule/manage/cep/sendData',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
