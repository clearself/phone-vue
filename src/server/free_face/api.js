import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'

// 系统列表
export const get_menu = (data) => {
    return axios.request({
        url: 'free_face/manage/permission/getMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

// 任务管理--获取首页
export const get_task_list = (data, page, pageSize) => {
    return axios.request({
        url: `free_face/manage/facetask/page?page=${page}&pageSize=${pageSize}`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 任务管理--获取企业列表
export const get_all_company = (data) => {
    return axios.request({
        url: 'free_face/terminal/getAllEnt',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 任务管理--添加企业
export const add_company = (data) => {
    return axios.request({
        url: 'free_face/terminal/addEnt',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 任务管理--添加、编辑、任务
export const add_task = (data) => {
    return axios.request({
        url: 'free_face/manage/facetask/save',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 任务管理--删除
export const del_task = (data) => {
    return axios.request({
        url: 'free_face/manage/facetask/delByIds',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 任务管理--详情查看
export const task_detail = (data, page, pageSize) => {
    return axios.request({
        url: `free_face/manage/facetask/asset/page?page=${page}&pageSize=${pageSize}&type=main`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 企业暴露面--主页展示
export const get_company_list = (data, page, pageSize) => {
    return axios.request({
        url: `free_face/manage/enterprise/page?page=${page}&pageSize=${pageSize}`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 企业暴露面--企业删除
export const del_company = (data) => {
    return axios.request({
        url: `free_face/manage/enterprise/delByIds`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 企业暴露面--增加编辑出口 ip
export const add_exportIp = (data) => {
    return axios.request({
        url: `free_face/manage/enterprise/network/save`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 企业暴露面--删除出口 ip
export const del_exportIp = (data) => {
    return axios.request({
        url: `free_face/manage/enterprise/network/delByIds`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 企业暴露面--展示出口 ip
export const get_exportIp = (data, page, pageSize) => {
    return axios.request({
        url: `free_face/manage/enterprise/network/page?page=${page}&pageSize=${pageSize}`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 企业暴露面--资产展示
export const get_asset_list = (data, page, pageSize) => {
    return axios.request({
        url: `free_face/manage/enterprise/asset/page?page=${page}&pageSize=${pageSize}&type=main`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 企业暴露面--资产添加
export const add_asset_data = (data) => {
    return axios.request({
        url: `free_face/manage/enterprise/asset/save`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 企业暴露面--资产删除
export const del_asset_data = (data) => {
    return axios.request({
        url: `free_face/manage/enterprise/asset/delByIds`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 企业暴露面--资产变化展示
export const get_assetChange = (data, page, pageSize) => {
    return axios.request({
        url: `free_face/manage/enterprise/asset/page?page=${page}&pageSize=${pageSize}&type=update`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
