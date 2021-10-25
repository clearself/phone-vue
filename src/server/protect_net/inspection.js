import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'
// h获取合规模板
export const get_templates = (data) => {
    return axios.request({
        url: 'protect_net/manage/inspection/findHgTemplateList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 添加迎检项
export const add_inspection = (data) => {
    return axios.request({
        url: 'protect_net/manage/inspection/addOrModifyInspection',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 迎检列表
export const get_inspections = (data) => {
    return axios.request({
        url: 'protect_net/manage/inspection/findInspectionList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// s删除迎检
export const delete_inspection = (data) => {
    return axios.delete('protect_net/manage/inspection/deleteInspection', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}
export const get_inspections_inner = (data) => {
    return axios.request({
        url: 'protect_net/manage/inspection/findAllInspectionItem',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const sure_shenhe = (data) => {
    return axios.request({
        url: 'protect_net/manage/inspection/verifyInspectionItem',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 左侧树结构接口

// 模型接口
export const get_rule_tree = (data) => {
    return axios.request({
        url: 'protect_net/manage/baseTask/getGroup',
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
        url: 'protect_net/manage/baseTask/saveGroup',
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
        url: 'protect_net/manage/baseTask/deleteGroup',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_task_list = (data) => {
    return axios.request({
        url: 'protect_net/manage/baseTask/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_assign_users = (data) => {
    return axios.request({
        url: 'protect_net/manage/baseTask/getAllRolesAndUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const addTask = (data) => {
    return axios.request({
        url: 'protect_net/manage/baseTask/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const assign_user = (data) => {
    return axios.request({
        url: 'protect_net/manage/baseTask/assign',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const import_module = (data) => {
    return axios.request({
        url: 'gjsy/manage/model/importModelData',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const statrt_stop = (data) => {
    return axios.get('gjsy/manage/model/stateControl', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}

export const delete_task = (data) => {
    return axios.request({
        url: 'protect_net/manage/baseTask/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

