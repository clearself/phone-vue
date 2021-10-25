import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'
export const get_tar_statistic = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/getTarInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_tar_line_data = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/getTarTrend',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_tar_monitor_list = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/pageTarInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

