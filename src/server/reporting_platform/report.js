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

// 目标系统管理

export const get_targetSystem_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/targetSystemConfig/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const add_targetSystem = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/targetSystemConfig/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const del_targetSystem = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/targetSystemConfig/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 数据匹配设置

export const get_dataMatching_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/eventTypeConfig/getAllEventTypeConfig',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const add_dataMatching = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/eventTypeConfig/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const del_dataMatching_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/eventTypeConfig/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 规则配置
export const get_rules_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/filterRules/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取所有目标系统
export const get_allTargetSystem = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/filterRules/getAllTargetSystem',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取网络攻击攻击类型/病毒感染病毒类型
export const get_attackType = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/filterRules/getAttackType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const save_rules = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/filterRules/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const delete_rules = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/filterRules/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取所有分支机构/所属区域
export const get_branch_area = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/filterRules/getAllSubOrg',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取过滤器状态
export const get_filter_status = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/filterRules/getFilterRulesFlag',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 修改过滤器状态
export const modify_filter_status = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/filterRules/modifyFilterRulesFlag',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getDataType = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/eventTypeConfig/getSource',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const getOriginType = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/eventTypeConfig/getDataType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
