import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'
// 邮件分析
export const get_black_list = (data) => {
    return axios.request({
        url: 'phishing_email/manage/black/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const remove_black_list = (data) => {
    return axios.request({
        url: 'phishing_email/manage/black/update',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_white_list = (data) => {
    return axios.request({
        url: 'phishing_email/manage/white/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const remove_white_list = (data) => {
    return axios.request({
        url: 'phishing_email/manage/white/update',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_selested_fileds = (data) => {
    return axios.request({
        url: 'phishing_email/manage/emailAnalysis/getCustomField',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_selested_all_fileds = (data) => {
    return axios.request({
        url: 'phishing_email/manage/emailAnalysis/getAllFileds',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const change_fileds = (data) => {
    return axios.request({
        url: 'phishing_email/manage/emailAnalysis/saveCustomField',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_expert_list = (data) => {
    return axios.request({
        url: 'phishing_email/manage/emailAnalysis/emailPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_white_black = (data) => {
    return axios.request({
        url: 'phishing_email/manage/emailAnalysis/updateNature',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const reply_email = (data) => {
    return axios.request({
        url: 'phishing_email/manage/emailAnalysis/sendMail',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_login_log = (data) => {
    return axios.request({
        url: 'phishing_email/manage/emailLoginLog/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

