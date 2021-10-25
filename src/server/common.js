
import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'

// 退出
export const exit = (data) => {
    return axios.request({
        url: 'common/exit',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}
export const get_history_messages = (data) => {
    return axios.request({
        url: 'defense_drill/manage/greeting/getUserTopic',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_new_history_messages = (data) => {
    return axios.request({
        url: 'common/terminal/getUnread',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 系统列表
export const get_menu = (data) => {
    return axios.request({
        url: 'common/manage/permission/getIndexMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

// 获取用户信息
export const get_user_info = (data) => {
    return axios.request({
        url: 'common/manage/permission/getUserInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_time = (data) => {
    return axios.request({
        url: 'common/terminal/getSystemTime',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 登录接口
export const login = (data) => {
    console.log(data)
    return axios.request({
        url: 'common/loginUser',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 修改密码
export const change_pwd = (data) => {
    return axios.request({
        url: 'common/manage/permission/updatePassword',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

export const get_asset_info = (data) => {
    return axios.request({
        url: 'common/terminal/getAdMsg',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const change_theme = (data) => {
    return axios.request({
        url: 'common/manage/themeConfig/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_theme = (data) => {
    return axios.request({
        url: 'common/manage/themeConfig/getThemeConfig',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_login_theme = (data) => {
    return axios.request({
        url: 'common/terminal/getThemeConfig',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_user_auth = (id) => {
    return axios.request({
        url: 'common/manage/permission/getPermByModular',
        method: 'post',
        data: {
            modularId: id
        }
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
/* 右上角获取异常规则*/
export const get_rule_msg = (data) => {
    return axios.request({
        url: 'base_info/terminal/getRuleMsg',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

