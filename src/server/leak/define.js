import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'
// 获取所有人
export const getAllUsers = (data) => {
    return axios.request({
        url: 'leak/manage/workMould/getAllUsers',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取所有部门
export const getAllDep = (data) => {
    return axios.request({
        url: 'leak/manage/workMould/getAllDep',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取所有角色
export const getAllRoles = (data) => {
    return axios.request({
        url: 'leak/manage/workMould/getAllUserRoles',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取工单发起对象
export const getSendObject = (data) => {
    return axios.request({
        url: 'leak/manage/workMould/getSendObj',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 攻击者分析地图
export const getAttackMap = (data) => {
    return axios.request({
        url: 'leak/manage/attackAnalysis/mapShow',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAttackTopBar = (data) => {
    return axios.request({
        url: 'leak/manage/attackAnalysis/attackTop',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAttackStage = (data) => {
    return axios.request({
        url: 'leak/manage/attackAnalysis/attackStage',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取攻击行为
export const getAlarmType = (data) => {
    return axios.request({
        url: 'leak/manage/attackAnalysis/alarmType',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取列表
export const getAttackList = (data) => {
    return axios.request({
        url: 'leak/manage/attackAnalysis/page',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 查看资产列表
export const getAssetTable = (data) => {
    return axios.request({
        url: 'leak/manage/attackAnalysis/getAssetsBySrcIp',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取告警列表
export const getAlarmTable = (data) => {
    return axios.request({
        url: 'leak/manage/attackAnalysis/getAlarmBySrcIp',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 受害资产分析
export const getAssetList = (data) => {
    return axios.request({
        url: 'leak/manage/assetsAnalysis/page',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 所有人
export const getAlarmUsers = (data) => {
    return axios.request({
        url: 'leak/manage/warnSound/getAllUsers',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取告警模板
export const getAlarmTemplate = (data) => {
    return axios.request({
        url: 'leak/manage/common/getWorkMould',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 资产获取告警列表
export const getAssetAlarmTable = (data) => {
    return axios.request({
        url: 'leak/manage/assetsAnalysis/getAlarmByDesIp',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取攻击者、资产模板
export const getAssetTemplate = (data) => {
    return axios.request({
        url: 'leak/manage/common/getWorkMouldBySendId',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 资产1,3图表
export const getAssetBarPie = (data) => {
    return axios.request({
        url: 'leak/manage/assetsAnalysis/top',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 资产2图表
export const getAssetBar2 = (data) => {
    return axios.request({
        url: 'leak/manage/assetsAnalysis/speTop',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 发起工单
export const addWorkOrder = (data) => {
    return axios.request({
        url: 'leak/manage/common/createOrder',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 状态变更
export const changeStatus = (data) => {
    return axios.request({
        url: 'leak/manage/common/changeStatus',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取告警配置列表
export const getAlarmConfigTable = (data) => {
    return axios.request({
        url: 'leak/manage/warnSound/page',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 删除
export const deleteAlarmConfigTable = (data) => {
    return axios.request({
        url: 'leak/manage/warnSound/delete',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 条件
export const getConfigCondition = (data) => {
    return axios.request({
        url: 'leak/manage/warnSound/allCondition',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 告警字段
export const getAlarmFields = (data) => {
    return axios.request({
        url: 'leak/manage/warnSound/getAlarmField',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 编辑
export const saveAlarmConfig = (data) => {
    return axios.request({
        url: 'leak/manage/warnSound/save',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
