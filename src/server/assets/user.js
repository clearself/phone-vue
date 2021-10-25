import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'

/* 用户管理模块*/
// 获取用户列表
export const get_registerUser = (data) => {
    return axios.request({
        url: 'assets/manage/user/getUserList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 添加用户
export const addNewUser = (data) => {
    return axios.request({
        url: 'assets/manage/user/addNewUser',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 更新用户
export const updateUser = (data) => {
    return axios.request({
        url: 'assets/manage/user/updateUser',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 删除用户
export const deleteUser = (data) => {
    return axios.delete('assets/manage/user/deleteUser', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}
// 审核用户
export const sure_check = (data) => {
    return axios.request({
        url: 'assets/manage/user/reviewUserInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取区域和行业

export const getAreaIndustry = (data) => {
    return axios.get('assets/common/getAreaIndustry', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}
// 获取角色
export const getRoles = (data) => {
    return axios.get('assets/common/getRoleList', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}

// 获取省份或部门
export const get_province_department = (data) => {
    return axios.request({
        url: 'assets/common/getChildInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

