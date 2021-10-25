import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'
// 钓鱼邮件
export const get_report_list = (data) => {
    return axios.request({
        url: 'phishing_email/manage/report/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_work_template = (data) => {
    return axios.request({
        url: 'phishing_email/manage/report/getWorkMouldBySendId',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_work_order = (data) => {
    return axios.request({
        url: 'phishing_email/manage/report/createOrder',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_work_detail = (data) => {
    return axios.request({
        url: 'phishing_email/manage/report/getOrderInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_level_num = (data) => {
    return axios.request({
        url: 'phishing_email/manage/overview/getLevelNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_highSend10_table = (data) => {
    return axios.request({
        url: 'phishing_email/manage/overview/highSendTop10',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_largeSend10_bar = (data) => {
    return axios.request({
        url: 'phishing_email/manage/overview/sendTop10',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_theme_pie = (data) => {
    return axios.request({
        url: 'phishing_email/manage/overview/getMailSubject',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_black_pie = (data) => {
    return axios.request({
        url: 'phishing_email/manage/overview/getNatureNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_week_num = (data) => {
    return axios.request({
        url: 'phishing_email/manage/overview/getDateNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_mail_trend = (data) => {
    return axios.request({
        url: 'phishing_email/manage/overview/getTrend',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_map_chart = (data) => {
    return axios.request({
        url: 'phishing_email/manage/overview/getCountryNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const send_simutation_data = (data) => {
    return axios.request({
        url: 'phishing_email/manage/cep/sendData',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 添加资源池
export const addResourcePool = (data) => {
    return axios.request({
        url: 'phishing_email/manage/resource/savePool',
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
        url: 'phishing_email/manage/resource/updatePool',
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
        url: 'phishing_email/manage/resource/saveResource',
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
        url: 'phishing_email/manage/resource/updateResource',
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
        url: 'phishing_email/manage/resource/getResourcePool',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return new Promise((resolve, reject) => {
            resolve(result.data)
        })
    })
}
// 查询资源
export const selectResource = (data) => {
    return axios.request({
        url: 'phishing_email/manage/resource/getResource',
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
        url: 'phishing_email/manage/resource/deletePool',
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
        url: 'phishing_email/manage/resource/deleteResource',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

