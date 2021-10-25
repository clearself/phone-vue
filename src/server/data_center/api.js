import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'
// 普通模式列表
export const get_normal_logs_list = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/ordinaryPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 专家模式
// 获取已选字段
export const get_selested_fileds = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/getCustomField',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取专家列表
export const get_expert_list = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/customPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取专家统计数据
export const get_statistic_data = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/statisticsLog',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取可选字段
export const get_selested_all_fileds = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/getAllField',
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
        url: 'data_center/manage/syslog/saveCustomField',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const saveSQL = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/saveQueryCriteria',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_expert_listSave = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/queryCriteriaPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const del_search_con = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/delQueryCriteria',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_expert_listHistory = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/queryCriteriaHistoryPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_history_search = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/saveQueryCriteriaHistory',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_num_search = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/addQueryCriteriaNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_reg = (data) => {
    return axios.request({
        url: 'data_center/manage/regularLibrary/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 数据接入
export const get_data_access_list = (data) => {
    return axios.request({
        url: 'data_center/manage/dataAccess/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_channels = (data) => {
    return axios.request({
        url: 'data_center/manage/dataAccess/getChannels',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_rules = (data) => {
    return axios.request({
        url: 'data_center/manage/dataAccess/getConfigLibrary',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_rules_old = (data) => {
    return axios.request({
        url: 'data_center/manage/dataAccess/getRules',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const data_access_save = (data) => {
    return axios.request({
        url: 'data_center/manage/dataAccess/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const del_access = (data) => {
    return axios.request({
        url: 'data_center/manage/dataAccess/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const send_access = (data) => {
    return axios.request({
        url: 'data_center/manage/dataAccess/send',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_ladsh_nodes = (data) => {
    return axios.request({
        url: 'data_center/manage/dataAccess/getLogstashNodes',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const invalid_access = (data) => {
    return axios.request({
        url: 'data_center/manage/dataAccess/stop',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_log = (data) => {
    return axios.request({
        url: 'data_center/manage/dataAccess/getLog',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 状态监控
export const get_state_info = (data) => {
    return axios.request({
        url: 'data_center/manage/monitor/getInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_index_list = (data) => {
    return axios.request({
        url: 'data_center/manage/monitor/getIndices',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_node_list = (data) => {
    return axios.request({
        url: 'data_center/manage/monitor/getNode',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 告警类别
export const get_alarm_type_auto = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/getAlarmType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const addReport = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/saveAlarm',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 根据目的ip找对应资产
export const ip_searchAsset = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/getAssetsInfo',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_getLogIndex = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/getAllDT',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_log_ffroms = (data) => {
    return axios.request({
        url: 'data_center/manage/dtConfig/getAllDT',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const saveDeviceType = (data) => {
    return axios.request({
        url: 'data_center/manage/dtConfig/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delDeviceType = (data) => {
    return axios.request({
        url: 'data_center/manage/dtConfig/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const create_dwnload = (data, url) => {
    return axios.request({
        url: url,
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_download_list = (data) => {
    return axios.request({
        url: 'data_center/manage/exportTask/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const del_download = (data) => {
    return axios.request({
        url: 'data_center/manage/exportTask/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_top5 = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/getFieldTop5',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 标签名称管理

export const get_tag_list = (data) => {
    return axios.request({
        url: 'data_center/manage/lableNames/getAllNames',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const saveTag = (data) => {
    return axios.request({
        url: 'data_center/manage/lableNames/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delTag = (data) => {
    return axios.request({
        url: 'data_center/manage/lableNames/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_tag_copy_list = (data) => {
    return axios.request({
        url: 'data_center/manage/lableNames/getTwoLevelNames',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
/* 设备联动*/
export const get_link_device = (data) => {
    return axios.request({
        url: 'data_center/manage/linkDevice/page',
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
        url: 'data_center/manage/linkDevice/save',
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
        url: 'data_center/manage/linkDevice/delete',
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
        url: 'data_center/manage/linkDevice/on',
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
        url: 'data_center/manage/timeConfig/sync',
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
        url: 'data_center/manage/flowView/runtime',
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
        url: 'data_center/manage/flowView/metric',
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
        url: 'data_center/manage/flowView/storage',
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
        url: 'data_center/manage/flowView/count',
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
        url: 'data_center/manage/flowView/chart',
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
        url: 'data_center/manage/syslog/saveTaskCondition',
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
        url: 'data_center/manage/syslog/viewPcap',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const create_pcac = (data) => {
    return axios.request({
        url: 'data_center/manage/syslog/createTask',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

