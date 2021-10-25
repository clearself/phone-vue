import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'

// 获取列表
export const getDrools = (data) => {
    return axios.request({
        url: 'rule/manage/rule/getRule',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 新建列表
export const buildDrools = (data) => {
    return axios.request({
        url: 'rule/manage/rule/saveRule',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 修改部署状态
export const modify_deployData = (data) => {
    return axios.request({
        url: 'rule/manage/rule/updateStatus',
        method: 'post',
        data: data
    }).then(res => {
        console.log(res)
        return getAjax(res)
    })
}

export const modify_deployAllData = (data) => {
    return axios.request({
        url: 'rule/manage/rule/updateStatus',
        method: 'post',
        data: data
    }).then(res => {
        console.log(res)
        return getAjax(res)
    })
}

// 删除单条数据
export const delete_singleData = (data) => {
    return axios.request({
        url: 'rule/manage/rule/deleteRule',
        method: 'post',
        data: data
    }).then(res => {
        console.log(res)
        return getAjax(res)
    })
}

// reload
export const reloadData = (data) => {
    return axios.request({
        url: 'rule/manage/rule/reload',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 添加资源池
export const addResourcePool = (data) => {
    return axios.request({
        url: 'rule/manage/resource/savePool',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 修改资源池
export const editResourcePool = (data) => {
    return axios.request({
        url: 'rule/manage/resource/updatePool',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 添加资源
export const addResource = (data) => {
    return axios.request({
        url: 'rule/manage/resource/saveResource',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 修改资源
export const editResource = (data) => {
    return axios.request({
        url: 'rule/manage/resource/updateResource',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 查询资源池
export const selectResourcePool = (data) => {
    return axios.request({
        url: 'rule/manage/rule/getResourcePool',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return new Promise((resolve, reject) => {
            resolve(result.data)
        })
    })
}
// 查询字段
export const get_fields = (data) => {
    return axios.request({
        url: 'rule/manage/rule/getField',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 规则继承
export const get_extendRules = (data) => {
    return axios.request({
        url: 'rule/manage/rule/getEnableRules',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 查询资源
export const selectResource = (data) => {
    return axios.request({
        url: 'rule/manage/resource/getResource',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return new Promise((resolve, reject) => {
            resolve(result.data)
        })
    })
}
// 删除资源池
export const deleteResourcePool = (data) => {
    return axios.request({
        url: 'rule/manage/resource/deletePool',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 删除资源
export const deleteResource = (data) => {
    return axios.request({
        url: 'rule/manage/resource/deleteResource',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 查询规则详情单条
export const get_one_rule = (data) => {
    return axios.request({
        url: 'rule/manage/rule/getRuleById',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 查询邮箱/短信人员
export const get_mail_users = (data) => {
    return axios.request({
        url: 'rule/manage/rule/getMailAndPhone',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
