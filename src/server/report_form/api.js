import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'
// 任务管理--获取首页
export const get_task = (data) => {
    return axios.request({
        url: 'report_form/manage/reportTask/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 任务管理--添加、编辑、任务
export const add_task = (data) => {
    return axios.request({
        url: 'report_form/manage/reportTask/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 任务管理--删除
export const del_task = (data) => {
    return axios.request({
        url: 'report_form/manage/reportTask/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_all_users = (data) => {
    return axios.request({
        url: 'report_form/manage/reportTask/getAllUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_task_detail = (data) => {
    return axios.request({
        url: 'report_form/manage/reportTask/detailPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const start_task = (data) => {
    return axios.request({
        url: 'report_form/manage/reportTask/updateStatus',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_task_templates = (data) => {
    return axios.request({
        url: 'report_form/manage/reportTask/getAllMould',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_reports = (data) => {
    return axios.request({
        url: 'report_form/manage/reportMould/getSubMould',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_template = (data) => {
    return axios.request({
        url: 'report_form/manage/reportMould/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_template = (data) => {
    return axios.request({
        url: 'report_form/manage/reportMould/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const del_template = (data) => {
    return axios.request({
        url: 'report_form/manage/reportMould/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_reportsLogs = (data) => {
    return axios.request({
        url: 'report_form/manage/reportMould/getAllDT',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
