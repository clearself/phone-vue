import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'
// 演练统计
export const getAssetsStatistic = (data) => {
    return axios.request({
        url: 'assets/manage/overviewChart/getAssetsNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_tuoputu = (data) => {
    return axios.request({
        url: 'assets/manage/overviewChart/getPath',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAssetsZWType = (data) => {
    return axios.request({
        url: 'assets/manage/overviewChart/getAssetsTypeOrFingerprintType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const getAssetsZWTypeZone = (data) => {
    return axios.request({
        url: 'assets/manage/overviewChart/getZoneOrSystemNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getLoopAssets = (data) => {
    return axios.request({
        url: 'assets/manage/overviewChart/getLeakOrIntelligenceTop10',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAlarmAssets = (data) => {
    return axios.request({
        url: 'assets/manage/overviewChart/getReportTop10',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 安全界管理
export const get_doamins = (data) => {
    return axios.request({
        url: 'assets/manage/safetyBoundary/getAllSafetyZone',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_devices = (data) => {
    return axios.request({
        url: 'assets/manage/safetyBoundary/getAllCompanyAssets',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_safe_border = (data) => {
    return axios.request({
        url: 'assets/manage/safetyBoundary/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_safe_borders = (data) => {
    return axios.request({
        url: 'assets/manage/safetyBoundary/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_safe_border = (data) => {
    return axios.request({
        url: 'assets/manage/safetyBoundary/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

