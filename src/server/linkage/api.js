import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'
/* 设备联动*/
export const get_link_device = (data) => {
    return axios.request({
        url: 'link_manage/manage/nft/pageLinkDevice',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_tar_link_device = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/pageLinkDevice',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const save_link_device = (data) => {
    return axios.request({
        url: 'link_manage/manage/nft/saveLinkDevice',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const save_tar_link_device = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/saveLinkDevice',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const delete_link_device = (data) => {
    return axios.request({
        url: 'link_manage/manage/nft/deleteLinkDevice',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_tar_link_device = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/deleteLinkDevice',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const switch_link_device_status = (data) => {
    return axios.request({
        url: 'link_manage/manage/nft/onLinkDevice',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const switch_tar_link_device_status = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/onLinkDevice',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
/* 时间设置*/
export const save_time_config = (data) => {
    return axios.request({
        url: 'link_manage/manage/timeConfig/sync',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

/* 全景流量概览*/
export const get_run_time = (data) => {
    return axios.request({
        url: 'link_manage/manage/nft/runtime',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_ntf_use = (data) => {
    return axios.request({
        url: 'link_manage/manage/nft/metric',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_ntf_save = (data) => {
    return axios.request({
        url: 'link_manage/manage/nft/storage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_alarm = (data) => {
    return axios.request({
        url: 'link_manage/manage/nft/count',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_line_data = (data) => {
    return axios.request({
        url: 'link_manage/manage/nft/chart',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const stop_task = (data) => {
    return axios.request({
        url: 'link_manage/manage/syslog/saveTaskCondition',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_pcac = (data) => {
    return axios.request({
        url: 'link_manage/manage/syslog/viewPcap',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// tar
export const get_tar_lib_list = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/pageFeatureLibrary',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_tar_lib = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/saveFeatureLibrary',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_tar_lib_list = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/deleteFeatureLibrary',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const revert_tar_lib_list = (data) => {
    return axios.request({
        url: 'link_manage/manage/tar/rolbackFeatureLibrary',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
