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

// 新增或修改合规模板
export const addTemplate = (data) => {
    return axios.request({
        url: 'leak/manage/hgTemplate/saveOrModifyHgTemplate',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 模板列表
export const getList = (data) => {
    return axios.request({
        url: 'leak/manage/hgTemplate/findHgTemplateList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 新增或编辑合规项
export const addItem = (data) => {
    return axios.request({
        url: 'leak/manage/hgTemplate/addOrModifyHgItem',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 合规项list
export const getItemList = (data) => {
    return axios.request({
        url: 'leak/manage/hgTemplate/findHgItemList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 删除模板
export const delTemplate = (data) => {
    return axios.delete('leak//manage/hgTemplate/deleteHgTemplate', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}
// 删除合规项
export const delItem = (data) => {
    return axios.delete('leak//manage/hgTemplate/deleteHgItem', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}

// 攻击溯源------手动告警列表
export const getReportList = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReport/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 攻击溯源------发起告警

// 攻击溯源------编辑告警
export const editReport = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReport/update',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const editReportCommand = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReportCommander/update',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 攻击溯源------手动处置
export const dealReport = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReport/deal',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 攻击溯源------自动告警列表
export const getAutoList = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReport/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 攻击溯源------自动处置
export const autoReport = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReport/deal',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 攻击溯源------自动忽略
export const ignore = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReport/ignore',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 攻击溯源------告警图表

// 攻击溯源------手动列表获取小组
export const allSysRoles = (data) => {
    return axios.get('leak/manage/operSafeReport/allSysRoles', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}
// 攻击溯源------自动列表获取小组
export const allAutoRoles = (data) => {
    return axios.get('leak/manage/autoSafeReport/allSysRoles', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}

// 手动告警（指挥调度）
export const addReportCommand = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReport/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getReportListCommand = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReportCommander/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 手动告警--处置
export const sendManualDisposal = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReport/isAnalysis',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const sendManualDisposalCommand = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReportCommander/isAnalysis',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getManualUsers = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReport/getAllUsers',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getManualUsersCommand = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReportCommander/getAllUsers',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const dealReportCommand = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReportCommander/deal',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const allSysRolesCommand = (data) => {
    return axios.get('leak/manage/operSafeReportCommander/allSysRoles', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}
// 自动告警--处置
export const sendAutoDisposal = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReport/isAnalysis',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const sendAutoDisposalCommand = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReportCommander/isAnalysis',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAutoUsers = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReport/getAllUsers',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAutoUsersCommand = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReportCommander/getAllUsers',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 分析任务---主页展示 管理人员
export const getAnalysisTask = (data) => {
    return axios.request({
        url: 'leak/manage/analysisTaskCommander/selectTask',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 分析任务---追加建议 管理人员
export const appendAdvice = (data) => {
    return axios.request({
        url: 'leak/manage/analysisTaskCommander/appendProposal',
        method: 'post',
        data: data
    }).then(res => {
        console.log(res)
        return getAjax(res)
    })
}
// 分析任务 --告警分析 管理人员
export const alarmAnalysis_data = (data) => {
    return axios.request({
        url: 'leak/manage/analysisTaskCommander/insertDispose',
        method: 'post',
        data: data
    }).then(res => {
        console.log(res)
        return getAjax(res)
    })
}
// 分析任务--告警分析人员列表 管理人员
export const alarmAllUsers = (data) => {
    return axios.request({
        url: 'leak/manage/analysisTaskCommander/getAllUsers',
        method: 'post',
        data: data
    }).then(res => {
        console.log(res)
        return getAjax(res)
    })
}

// 分析任务--周期报告预览 管理人员
export const previewReport = (data) => {
    return axios.request({
        url: 'leak/manage/analysisTaskCommander/periodicSummary',
        method: 'post',
        data: data
    }).then(res => {
        console.log(res)
        return getAjax(res)
    })
}

// 分析任务---主页展示 普通用户
export const getAnalysisTask_1 = (data) => {
    return axios.request({
        url: 'leak/manage/analysisTask/selectTask',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 分析任务 --告警分析 普通用户
export const alarmAnalysis_data_1 = (data) => {
    return axios.request({
        url: 'leak/manage/analysisTask/insertDispose',
        method: 'post',
        data: data
    }).then(res => {
        console.log(res)
        return getAjax(res)
    })
}
// 分析任务--告警分析人员列表 普通用户
export const alarmAllUsers_1 = (data) => {
    return axios.request({
        url: 'leak/manage/analysisTask/getAllUsers',
        method: 'post',
        data: data
    }).then(res => {
        console.log(res)
        return getAjax(res)
    })
}
// 分析任务--周期报告预览 普通用户
export const previewReport_1 = (data) => {
    return axios.request({
        url: 'leak/manage/analysisTask/periodicSummary',
        method: 'post',
        data: data
    }).then(res => {
        console.log(res)
        return getAjax(res)
    })
}

// 分析任务--溯源
export const sendEventSource = (data) => {
    return axios.request({
        url: 'leak/terminal/isTrace',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 追加建议
export const add_addvice = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReportCommander/appendProposal',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 溯源任务--主页展示 普通用户
export const getSourceTask = (data) => {
    return axios.request({
        url: 'leak/terminal/selectTask',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

//

export const addReport_auto = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReportCommander/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const ignore_auto = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReportCommander/ignore',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAutoList_auto = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReportCommander/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 攻击溯源------自动处置
export const autoReport_auto = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReportCommander/deal',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getChart_auto = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReportCommander/chart',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const allAutoRoles_auto = (data) => {
    return axios.get('leak/manage/autoSafeReportCommander/allSysRoles', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}
export const add_auto_addvice = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReportCommander/appendProposal',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 自动告警
export const auto_getLog = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReport/getLog',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 手动告警
export const manual_getLog = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReport/getLog',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 手动告警--指挥人员
export const manual_getLogCommand = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReportCommander/getLog',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 自动告警--指挥人员
export const auto_getLog_commander = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReportCommander/getLog',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 内网端口异动
export const get_net_port_list = (data) => {
    return axios.request({
        url: 'leak/manage/lanChange/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_net_port_detail = (data) => {
    return axios.request({
        url: 'leak/manage/lanChange/getCompanyAssetsByIp',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_net_port_history = (data) => {
    return axios.request({
        url: 'leak/manage/lanChange/getVisitHistory',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_net_port_table = (data) => {
    return axios.request({
        url: 'leak/manage/lanChange/getVisitHistoryPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 资产端口移动
export const get_assets_ip_list = (data) => {
    return axios.request({
        url: 'leak/manage/assetsChange/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_asset_port_history = (data) => {
    return axios.request({
        url: 'leak/manage/assetsChange/getVisitHistory',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_asset_port_table = (data) => {
    return axios.request({
        url: 'leak/manage/assetsChange/getVisitHistoryPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_logs_table = (data) => {
    return axios.request({
        url: 'leak/terminal/lyPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 安全日志信息
export const get_logs = (data) => {
    return axios.request({
        url: 'leak/terminal/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const sendAlarm = (data) => {
    return axios.request({
        url: 'leak/manage/attackshow/drools/saveOperSafeReport',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjaxFile(result)
    })
}
export const exportData = (data) => {
    return axios.request({
        url: 'leak/terminal/downLoadEsWaf',
        method: 'post',
        responseType: 'arraybuffer',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxFile(result)
    })
}
// 网络流信息
export const get_warning_logs = (data) => {
    return axios.request({
        url: 'leak/terminal/lyPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const exportStreamData = (data) => {
    return axios.request({
        url: 'leak/terminal/downLoadEsLy',
        method: 'post',
        responseType: 'arraybuffer',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxFile(result)
    })
}

// 查询相关告警
export const search_alarms = (data) => {
    return axios.request({
        url: 'leak/terminal/getESDataByIdAndTime',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 溯源--溯源结果
export const sourceResult = (data) => {
    return axios.request({
        url: 'leak/terminal/traceEnd',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 溯源--追加建议
export const addSourceResult = (data) => {
    return axios.request({
        url: 'leak/terminal/appendProposalTrace',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 发起告警，ip查询资产

// ip映射
export const add_device = (data) => {
    console.log(data)
    return axios.request({
        url: 'leak/terminal/addIPMapper',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取映射列表
export const get_device = (data) => {
    return axios.request({
        url: 'leak/terminal/iPMapperpage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取映射列表
export const edit_device = (data) => {
    return axios.request({
        url: 'leak/terminal/updateIPMapper',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_device = (data) => {
    return axios.request({
        url: 'leak/terminal/delIPMapper',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 告警类别管理
export const get_alarm_type = (data) => {
    return axios.request({
        url: 'leak/manage/alarmType/find',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_alarm_type_log = (data) => {
    return axios.request({
        url: 'leak/terminal/findAlarmType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_alarm_type_auto_commander = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReportCommander/findAlarmType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 受影响资产
export const get_affect_assets = (data) => {
    return axios.request({
        url: 'leak/terminal/findAssets',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 安全域
export const get_safetyZone = (data) => {
    return axios.request({
        url: 'leak/terminal/findSafetyZone',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 域名
export const get_domainName = (data) => {
    return axios.request({
        url: 'leak/terminal/findDomainName',
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
        url: 'leak/terminal/updateHeader',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 告警类别--手动告警
export const get_alarm_type_manual = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReport/findAlarmType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 告警类别--手动告警--管理人员
export const get_alarm_type_manualM = (data) => {
    return axios.request({
        url: 'leak/manage/operSafeReportCommander/findAlarmType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 告警类别--分析任务
export const get_alarm_type_analysis = (data) => {
    return axios.request({
        url: 'leak/manage/analysisTask/findAlarmType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 告警类别--分析任务--管理人员
export const get_alarm_type_analysisM = (data) => {
    return axios.request({
        url: 'leak/manage/analysisTaskCommander/findAlarmType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 告警类别--溯源
export const get_alarm_type_source = (data) => {
    return axios.request({
        url: 'leak/terminal/findAlarmType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 告警类别--规则
export const get_alarm_type_rule = (data) => {
    return axios.request({
        url: 'leak/manage/attackshow/drools/findAlarmType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const save_alarm_type = (data) => {
    return axios.request({
        url: 'leak/manage/alarmType/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const delete_alarm_type = (data) => {
    return axios.request({
        url: 'leak/manage/alarmType/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 规则类别管理
export const get_rule_type = (data) => {
    return axios.request({
        url: 'leak/manage/droolstype/find',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const save_rule_type = (data) => {
    return axios.request({
        url: 'leak/manage/droolstype/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const delete_rule_type = (data) => {
    return axios.request({
        url: 'leak/manage/droolstype/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 提示音

// ip映射
export const add_voice = (data) => {
    console.log(data)
    return axios.request({
        url: 'leak/manage/warnSound/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取映射列表
export const get_voice = (data) => {
    return axios.request({
        url: 'leak/manage/warnSound/getAllWarnSound',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取映射列表
export const edit_voice = (data) => {
    return axios.request({
        url: 'leak/manage/warnSound/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_voice = (data) => {
    return axios.request({
        url: 'leak/manage/warnSound/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_voice_level = (data) => {
    return axios.request({
        url: 'leak/manage/warnSound/getLevel',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 攻击结果
export const get_attack_results = (data) => {
    return axios.request({
        url: 'leak/manage/attackresult/find',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const save_attack_results = (data) => {
    return axios.request({
        url: 'leak/manage/attackresult/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_attack_results = (data) => {
    return axios.request({
        url: 'leak/manage/attackresult/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 规则-获取攻击结果
export const get_rule_attack_result = (data) => {
    return axios.request({
        url: 'leak/manage/attackshow/drools/findAttackResult',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_auto_alarm_commander = (data) => {
    return axios.request({
        url: 'leak/manage/autoSafeReportCommander/delReport',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 安全日志--所有人员
export const get_log_users = (data) => {
    return axios.request({
        url: 'leak/manage/attackshow/drools/getAllUsers',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 溯源--获取通知人员
export const sourceMessageUsers = (data) => {
    return axios.request({
        url: 'leak/terminal/getAllUsers',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 告警列表

export const getAlarmList = (data) => {
    return axios.request({
        url: 'leak/manage/alarmList/page',
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
        url: 'leak/manage/alarmList/getAssetsInfo',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取头部显示字段接口
export const get_header_list = (data) => {
    return axios.request({
        url: 'leak/terminal/findHeader',
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
        url: 'leak/manage/alarmList/getAlarmType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 告警删除
export const delete_auto_alarm = (data) => {
    return axios.request({
        url: 'leak/manage/alarmList/delete',
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
        url: 'leak/manage/alarmList/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const changeAlarmState = (data) => {
    return axios.request({
        url: 'leak/manage/common/changeStatus',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getChart = (data) => {
    return axios.request({
        url: 'leak/manage/alarmList/chart',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAlarmTemp = (data) => {
    return axios.request({
        url: 'leak/manage/common/getWorkMould',
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
        url: 'leak/manage/common/createOrder',
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
        url: 'leak/manage/alarmList/getOrderInfo',
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
        url: 'leak/manage/alarmList/getNodeInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

