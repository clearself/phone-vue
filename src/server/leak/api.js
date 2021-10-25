import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'
// 系统列表
export const get_menu = (data) => {
    return axios.request({
        url: 'leak/manage/permission/getMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

export const getEngTypes = (data) => {
    return axios.request({
        url: 'leak/manage/scanEngine/getAllType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getFactoryTypes = (data) => {
    return axios.request({
        url: 'leak/manage/scanEngine/getAllFactory',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getEngList = (data) => {
    return axios.request({
        url: 'leak/manage/scanEngine/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const deleteEng = (data) => {
    return axios.request({
        url: 'leak/manage/scanEngine/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const saveEng = (data) => {
    return axios.request({
        url: 'leak/manage/scanEngine/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 漏洞信息库

export const getLoopholeList = (data) => {
    return axios.request({
        url: 'leak/manage/leakInfo/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const deleteLoophole = (data) => {
    return axios.request({
        url: 'leak/manage/leakInfo/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const saveLoophole = (data) => {
    return axios.request({
        url: 'leak/manage/leakInfo/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 漏洞管理

export const getLeakList = (data) => {
    return axios.request({
        url: 'leak/manage/scanLeak/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const deleteLeak = (data) => {
    return axios.request({
        url: 'leak/manage/scanLeak/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const saveLeak = (data) => {
    return axios.request({
        url: 'leak/manage/scanLeak/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAssets = (data) => {
    return axios.request({
        url: 'leak/manage/scanLeak/getAllAssets',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getSystem = (data) => {
    return axios.request({
        url: 'leak/manage/scanLeak/getAllSystem',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getLeakTemp = (data) => {
    return axios.request({
        url: 'leak/manage/scanLeak/getWorkMouldBySendId',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_workTask = (data) => {
    return axios.request({
        url: 'leak/manage/scanLeak/createOrder',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_workFlowInfo = (data) => {
    return axios.request({
        url: 'leak/manage/scanLeak/getOrderInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_ElementInfo = (data) => {
    return axios.request({
        url: 'leak/manage/scanLeak/getNodeInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const getAssetTypePrcent = (data) => {
    return axios.request({
        url: 'leak/manage/scanLeak/assetType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAssetList = (data) => {
    return axios.request({
        url: 'leak/manage/scanLeak/assetPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_label = (data) => {
    return axios.request({
        url: 'leak/manage/scanLeak/saveLabel',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAssetsLabel = (data) => {
    return axios.request({
        url: 'leak/manage/scanLeak/getAllLabel',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 标签
export const getLabelList = (data) => {
    return axios.request({
        url: 'leak/manage/labelInfo/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const deleteLabel = (data) => {
    return axios.request({
        url: 'leak/manage/labelInfo/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const saveLabel = (data) => {
    return axios.request({
        url: 'leak/manage/labelInfo/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 任务
export const getTaskList = (data) => {
    return axios.request({
        url: 'leak/manage/taskInfo/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_policy = (data) => {
    return axios.request({
        url: 'leak/manage/taskInfo/getPolicy',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_assets = (data) => {
    return axios.request({
        url: 'leak/manage/taskInfo/getAllAssets',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_system = (data) => {
    return axios.request({
        url: 'leak/manage/taskInfo/getAllSystem',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const finish_task = (data) => {
    return axios.request({
        url: 'leak/manage/taskInfo/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const deleteTask = (data) => {
    return axios.request({
        url: 'leak/manage/taskInfo/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getTaskListLog = (data) => {
    return axios.request({
        url: 'leak/manage/taskInfo/getTaskInfoLogPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const switchScan = (data) => {
    return axios.request({
        url: 'leak/manage/taskInfo/open',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const reScan = (data) => {
    return axios.request({
        url: 'leak/manage/taskInfo/reScanTask',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 概览
export const get_leak_type = (data) => {
    return axios.request({
        url: 'leak/manage/overview/getLeakTypeDisByMonth',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_leak_level = (data) => {
    return axios.request({
        url: 'leak/manage/overview/getRiskLevelNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_year_statistic = (data) => {
    return axios.request({
        url: 'leak/manage/overview/getMonthLeak',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_leak_type_tend = (data) => {
    return axios.request({
        url: 'leak/manage/overview/getLeakType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_leak_type_level = (data) => {
    return axios.request({
        url: 'leak/manage/overview/getLeakTypeDis',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_system_leak = (data) => {
    return axios.request({
        url: 'leak/manage/overview/getSystemDis',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_overview_table = (data) => {
    return axios.request({
        url: 'leak/manage/overview/getLeakTop20',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

