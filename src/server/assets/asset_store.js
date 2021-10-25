import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'

// 获取厂商列表
export const getDepsAll = (data) => {
    return axios.request({
        url: 'assets/manage/manufacturer/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 添加厂商
export const addDeps = (data) => {
    return axios.request({
        url: 'assets/manage/manufacturer/saveManufacturer',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 删除厂商
export const delDeps = (data) => {
    return axios.request({
        url: 'assets/manage/manufacturer/del',
        method: 'post',

        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
