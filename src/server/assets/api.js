import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'
// 添加域名
export const addDomainName = (data) => {
    console.log(data)
    return axios.request({
        url: 'assets/manage/domainInfo/saveDomain',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取域名
export const get_domain = (data) => {
    console.log(data)
    return axios.request({
        url: 'assets/manage/domainInfo/domainPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取域名下子域名
export const get_domain_children = (data) => {
    console.log(data)
    return axios.request({
        url: 'assets/manage/domainInfo/subDomainPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取域名下子域名
export const get_domain_tree = (data) => {
    console.log(data)
    return axios.request({
        url: 'assets/manage/domainInfo/domainMap',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 删除域名
export const delete_domain = (data) => {
    console.log(data)
    return axios.request({
        url: 'assets/manage/domainInfo/delDomain',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 添加资产
export const add_assets = (data) => {
    console.log(data)
    return axios.request({
        url: 'assets/manage/assets/addAssets',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取资产类型
export const get_types = (data) => {
    return axios.request({
        url: 'assets/manage/assets/getDeviceTypeTree',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取厂商
export const getAllManufacturer = (data) => {
    return axios.request({
        url: 'assets/manage/assets/getAllManufacturer',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 查询资产
export const get_assets = (data) => {
    return axios.request({
        url: 'assets/manage/assets/queryAssetsList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 修改资产
export const edit_assets = (data) => {
    return axios.request({
        url: 'assets/manage/assets/updateAssets',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 删除资产类型
export const delete_asset = (data) => {
    return axios.request({
        url: 'assets/manage/assets/deleteAssets',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 拓扑图数据
export const get_tuopu_data = (data) => {
    return axios.delete('assets/manage/topology/getTopology', { // params参数必写 , 如果没有参数传{}也可以
        params: data
    }).then(result => {
        return getAjax(result)
    })
}
// 刷新域名
export const refresh_data = (data) => {
    return axios.request({
        url: 'assets/manage/domainInfo/searchDomain',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取应用系统
export const getSystemType = (data) => {
    return axios.request({
        url: 'assets/manage/assets/getSystemType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 根据ip获取漏洞信息
export const getScanLeakByIp = (data) => {
    return axios.request({
        url: 'assets/manage/assets/getScanLeakByAssetsId',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 查询IP是否已存在
export const checkIP = (data) => {
    return axios.request({
        url: 'assets/manage/assets/checkIPBug',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 应用系统查询
export const getSystem = (data) => {
    return axios.request({
        url: 'assets/manage/system/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 添加应用系统
export const addSystem = (data) => {
    return axios.request({
        url: 'assets/manage/system/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 删除应用系统
export const delectSystem = (data) => {
    return axios.request({
        url: 'assets/manage/system/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 修改应用系统
export const assetChat = (data) => {
    return axios.request({
        url: 'assets/manage/statistics/getStatistics',
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
        url: 'assets/manage/permission/getMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

// 安全域分页
export const safetyZone = (data) => {
    return axios.request({
        url: 'assets/manage/SafetyZone/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 安全域添加
export const addZoom = (data) => {
    return axios.request({
        url: 'assets/manage/SafetyZone/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 安全域删除
export const delZoom = (data) => {
    return axios.request({
        url: 'assets/manage/SafetyZone/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取所有安全域
export const get_all_zoneIds = (data) => {
    return axios.request({
        url: 'assets/manage/assets/getAllZone',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取资产危情数据
export const get_threatData = (data) => {
    return axios.request({
        url: 'assets/manage/assets/getIntelligenceById',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAlarmsByIp = (data) => {
    return axios.request({
        url: 'assets/manage/assets/getReportByIp',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取映射

export const findIpLinkList = (data) => {
    return axios.request({
        url: 'assets/manage/ipLink/findIpLinkList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 搜索单个映射
export const findOneIpLink = (data) => {
    return axios.get('assets/manage/ipLink/findOneIpLink', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}

export const deleteIpLink = (data) => {
    return axios.request({
        url: 'assets/manage/ipLink/deleteIpLink',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 新增映射
export const addIpLink = (data) => {
    return axios.request({
        url: 'assets/manage/ipLink/addIpLink',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 修改映射
export const editIpLink = (data) => {
    return axios.request({
        url: 'assets/manage/ipLink/modifyIpLink',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 安全域拓扑图
export const seeTopology = (data) => {
    return axios.request({
        url: 'assets/manage/SafetyZone/topology',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 刷新資產數據
export const refresh_assetsSummary = (data) => {
    return axios.request({
        url: 'assets/manage/assets/assetsSummary',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 指纹分类---添加,修改
export const addType = (data) => {
    return axios.request({
        url: 'assets/manage/fingerprintType/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 指纹分类---列表
export const getType = (data) => {
    return axios.request({
        url: 'assets/manage/fingerprintType/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 指纹分类---删除
export const delType = (data) => {
    return axios.request({
        url: 'assets/manage/fingerprintType/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 指纹---获取分类
export const getFingerType = (data) => {
    return axios.request({
        url: 'assets/manage/fingerprintWarehouse/findFingerprintType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 指纹---添加,修改
export const addFinger = (data) => {
    return axios.request({
        url: 'assets/manage/fingerprintWarehouse/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 指纹---列表
export const getFinger = (data) => {
    return axios.request({
        url: 'assets/manage/fingerprintWarehouse/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 指纹---删除
export const delFinger = (data) => {
    return axios.request({
        url: 'assets/manage/fingerprintWarehouse/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 资产发现---列表
export const assetsFindList = (data) => {
    return axios.request({
        url: 'assets/manage/assetsFind/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 资产发现---添加
export const assetsFindAdd = (data) => {
    return axios.request({
        url: 'assets/manage/assetsFind/addAssets',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 拓扑管理---保存图片
export const savePath = (data) => {
    return axios.request({
        url: 'assets/manage/topologyImg/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 拓扑管理---获取图片
export const getPath = (data) => {
    return axios.request({
        url: 'assets/manage/topologyImg/getPath',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 资产信息库---导出数据
export const exportExcel = (data) => {
    return axios.get('assets/manage/assets/exportExcel', {
        params: data,
        responseType: 'arraybuffer'
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}

export const getUsers = (data) => {
    return axios.request({
        url: 'assets/manage/system/getAllUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 网段
export const getBorder = (data) => {
    return axios.request({
        url: 'assets/manage/networkSegment/getAllSafetyBoundary',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getZones = (data) => {
    return axios.request({
        url: 'assets/manage/networkSegment/getSafetyBoundaryZone',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const addNetSegment = (data) => {
    return axios.request({
        url: 'assets/manage/networkSegment/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getNetSegment = (data) => {
    return axios.request({
        url: 'assets/manage/networkSegment/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delNetSegment = (data) => {
    return axios.request({
        url: 'assets/manage/networkSegment/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 资产类型--获取设备类型树
export const getDeviceTypeTree = (data) => {
    return axios.request({
        url: 'assets/manage/deviceType/getDeviceTypeTree',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 资产类型--添加修改
export const saveDeviceType = (data) => {
    return axios.request({
        url: 'assets/manage/deviceType/save',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 资产类型--删除
export const delDeviceType = (data) => {
    return axios.request({
        url: 'assets/manage/deviceType/delete',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 资产联系人
export const get_asset_users = (data) => {
    return axios.request({
        url: 'assets/manage/assets/getAllUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 资产自定义表头
export const get_header_list = (data) => {
    return axios.request({
        url: 'assets/terminal/findHeader',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const save_header_list = (data) => {
    return axios.request({
        url: 'assets/terminal/updateHeader',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 资产信息库树结构
export const get_asset_info_tree = (data) => {
    return axios.request({
        url: 'assets/manage/assets/getTree',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_asset_label = (data) => {
    return axios.request({
        url: 'assets/manage/assets/getLabel',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 资产系统属性
export const get_asset_system_attr = (data) => {
    return axios.request({
        url: 'assets/manage/assets/getSysAttr',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 资产标签
export const get_label_tree = (data) => {
    return axios.request({
        url: 'assets/manage/label/getGroup',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const save_label_group = (data) => {
    return axios.request({
        url: 'assets/manage/label/saveGroup',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_label_group = (data) => {
    return axios.request({
        url: 'assets/manage/label/deleteGroup',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_label_list = (data) => {
    return axios.request({
        url: 'assets/manage/label/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const save_label = (data) => {
    return axios.request({
        url: 'assets/manage/label/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_label = (data) => {
    return axios.request({
        url: 'assets/manage/label/delete',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 资产属性
export const get_device_attr = (data) => {
    return axios.request({
        url: 'assets/manage/deviceType/getType',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_attr_list = (data) => {
    return axios.request({
        url: 'assets/manage/deviceType/pageAttr',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const save_attr = (data) => {
    return axios.request({
        url: 'assets/manage/deviceType/saveAttr',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_attr = (data) => {
    return axios.request({
        url: 'assets/manage/deviceType/deleteAttr',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
