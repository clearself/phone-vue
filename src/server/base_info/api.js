import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'
// form表单五返回code
var getAjaxVal = result => {
    return new Promise((resolve, reject) => {
        if (result.status == 200) {
            resolve('success')
        } else {
            Message({
                message: result.data.message,
                type: 'warning'
            })
            reject(result.data)
        }
    })
}

// 登录接口
export const login = (data) => {
    console.log(data)
    return axios.request({
        url: 'base_info/loginUser',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 修改密码
export const change_pwd = (data) => {
    return axios.request({
        url: 'base_info/manage/permission/updatePassword',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

// 系统列表
export const get_menu = (data) => {
    return axios.request({
        url: 'base_info/manage/permission/getMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

// 退出
export const exit = (data) => {
    return axios.request({
        url: 'base_info/exit',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

// 添加，编辑小组
export const addGroup = (data) => {
    // console.log(data)
    return axios.request({
        url: 'base_info/manage/InformationRetrieval/savaGroup',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result)
        return getAjaxSome(result)
    })
}
export const get_options_list = (data) => {
    return axios.request({
        url: 'base_info/manager/infohandle/getDeployInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 添加配置项
export const add_event_type = (data) => {
    return axios.request({
        url: 'base_info/manager/infohandle/addDeployItem',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 修改配置项
export const change_event_type = (data) => {
    return axios.request({
        url: 'base_info/manager/infohandle/updateDeployItem',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_option = (data) => {
    return axios.delete('base_info/manager/infohandle/deleteDeployItem', { // params参数必写 , 如果没有参数传{}也可以
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 高位信息列表
export const getEventList = (data) => {
    return axios.request({
        url: 'base_info/manager/decision/findHighRiskInfoList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 新增高位信息
export const addEvent = (data) => {
    return axios.request({
        url: 'base_info/manager/decision/addHighRiskInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 编辑高位信息
export const updateEvent = (data) => {
    return axios.request({
        url: 'base_info/manager/decision/modifyHighRiskInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
// 删除高位信息
export const delEvent = (data) => {
    return axios.delete('base_info/manager/decision/deleteInfo', { // params参数必写 , 如果没有参数传{}也可以
        params: data
    }).then(result => {
        return getAjax(result)
    })
}

// 获取任务列表
export const getTaskList = (data) => {
    return axios.request({
        url: 'base_info/manager/check/findTaskList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 新增任务
export const addTask = (data) => {
    return axios.request({
        url: 'base_info/manager/check/addTask',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 编辑任务
export const updateTask = (data) => {
    return axios.request({
        url: 'base_info/manager/check/updateTask',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 编辑checklist
export const updateCheckItem = (data) => {
    return axios.request({
        url: 'base_info/manager/check/updateCheckItemStatus',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 删除任务
export const delTask = (data) => {
    return axios.delete('base_info/manager/check/deleteCheckTask', { // params参数必写 , 如果没有参数传{}也可以
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 修改配置项
export const get_info_handel_list = (data) => {
    return axios.request({
        url: 'base_info/manager/infohandle/findInfoHandleList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 添加时间信息
export const add_event_info = (data) => {
    return axios.request({
        url: 'base_info/manager/infohandle/addInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取中和信息处理列表
export const get_info_list = (data) => {
    return axios.request({
        url: 'base_info/manager/infohandle/findInfoHandleList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取聊天信息
export const get_message_list = (data, _url) => {
    return axios.request({
        url: 'base_info/' + _url,
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取用户
export const get_users_list = (data) => {
    return axios.request({
        url: 'base_info/manage/greeting/getValidUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取小组列表
export const listGroup = (data) => {
    // console.log(data)
    return axios.request({
        url: 'base_info/manage/InformationRetrieval/getAllGroup',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result)
        return getAjaxSome(result)
    })
}

// 获取列表
export const getList = (data) => {
    // console.log(data)
    return axios.request({
        url: 'base_info/manage/InformationRetrieval/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result)
        return getAjaxSome(result)
    })
}

// 添加信息
export const addInfo = (data) => {
    console.log(data)
    return axios.request({
        url: 'base_info/manage/InformationRetrieval/saveInformation',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

// 修改信息
export const editIp = (data) => {
    console.log(data)
    return axios.request({
        url: 'base_info/manage/InformationRetrieval/editIp',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

// 获取所有来源
export const getGroup = (data) => {
    console.log(data)
    return axios.request({
        url: 'base_info/manage/InformationRetrieval/getAllGroup',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}
// 获取所有厂商
export const getDeps = (data) => {
    console.log(data)
    return axios.request({
        url: 'base_info/manage/InformationRetrieval/getDeps',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

// 创建文件夹
export const addFolder = (data) => {
    console.log(data)
    return axios.request({
        url: 'base_info/manage/electronicDocument/mkdir',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}
// 文件上传
export const upload = (data) => {
    console.log(data)
    return axios.request({
        url: 'base_info/manage/electronicDocument/upload',
        method: 'post',
        responseType: 'arraybuffer',
        params: data.queryData,
        data: data.paramsData
        // transformRequest: [function (data) {console.log(data) }],
    }).then(result => {
        console.log(result)
        return getAjaxVal(result)
    })
}
// 获取目录
export const getFile = (data) => {
    console.log(data)
    return axios.request({
        url: 'base_info/manage/electronicDocument/list',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

// 新建模板
export const addTemplate = (data) => {
    return axios.request({
        url: 'base_info/manager/template/addTemplateAllInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}
// 获取模板list
export const getTemplateList = (data) => {
    return axios.request({
        url: 'base_info/manage/eventinfo/getAllTemplate',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}
// 搜索客户
export const getUsers = (data) => {
    return axios.request({
        url: 'base_info/manager/check/getResponsibleList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
// 获取组列表
export const getGroups = (data) => {
    return axios.request({
        url: 'base_info/manager/templateColumn/findGroupList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 删除模板
export const delete_temp = (data) => {
    return axios.delete('base_info/manager/template/deleteTemplate', { // params参数必写 , 如果没有参数传{}也可以
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 更新模板
export const changeTemplate = (data) => {
    return axios.request({
        url: 'base_info/manager/template/updateTemplateAllInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取事件类型
export const get_event_types = (data) => {
    return axios.get('base_info/manage/eventinfo/getEventType', { // params参数必写 , 如果没有参数传{}也可以
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取事件类型new
export const getNewEventType = (data) => {
    return axios.get('base_info/manage/eventinfo/getNewEventType', { // params参数必写 , 如果没有参数传{}也可以
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 添加事件
export const add_event = (data) => {
    return axios.request({
        url: 'base_info/manage/eventinfo/saveEvent',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取事件列表
export const get_event_list = (data) => {
    return axios.request({
        url: 'base_info/manage/eventinfo/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 删除事件
export const delete_event = (data) => {
    return axios.request({
        url: 'base_info/manage/eventinfo/delEvent',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 事件详情
export const get_event_detail = (data) => {
    return axios.request({
        url: 'base_info/manage/eventinfo/editTemplateColumns',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 根据模板id获取组信息
export const get_temp_group = (data) => {
    return axios.request({
        url: 'base_info/manage/eventinfo/getTemplateColumnById',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 模板--获取所有文件
export const get_files = (data) => {
    return axios.request({
        url: 'base_info/manage/eventinfo/getFiles',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取模板分页
export const get_template_list = (data) => {
    return axios.request({
        url: 'base_info/manager/template/queryTemplateList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 判断当前用户是否有组
export const is_group = (data) => {
    return axios.request({
        url: 'base_info/manage/greeting/getUserGroup',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取省份
export const get_provinces = (data) => {
    return axios.request({
        url: 'base_info/manage/bank/getCity',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 根据省份获取城市
export const get_citys = (data) => {
    return axios.request({
        url: 'base_info/manage/bank/getCity',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取上级单位列表
export const get_prev_units = (data) => {
    return axios.request({
        url: 'base_info/manage/bank/getSuperiors',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 添加分行
export const add_bank = (data) => {
    return axios.request({
        url: 'base_info/manage/bank/saveBank',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 添加分行
export const get_bank_list = (data) => {
    return axios.request({
        url: 'base_info/manage/bank/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 删除分行
export const del_bank = (data) => {
    return axios.request({
        url: 'base_info/manage/bank/del',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 修改分行
export const change_bank = (data) => {
    return axios.request({
        url: 'base_info/manage/bank/saveBank',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取所有城市
export const getCity = (data) => {
    return axios.request({
        url: 'base_info/manage/InformationRetrieval/getSecondLevelCity',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取所有银行
export const getBank = (data) => {
    return axios.request({
        url: 'base_info/manage/InformationRetrieval/getAllBank',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取小组
export const getUserGroups = (data) => {
    return axios.request({
        url: 'base_info/manage/InformationRetrieval/getUserGroups',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 查询平台基础信息
export const getMonitorList = (data) => {
    return axios.request({
        url: 'base_info/manage/systemMon/selectSystemMonitoringDO',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 添加平台验收信息
export const addMonitor = (data) => {
    return axios.request({
        url: 'base_info/manage/systemMon/saveSystemMonitoringDO',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 修改平台验收信息
export const updateMonitor = (data) => {
    return axios.request({
        url: 'base_info/manage/systemMon/updateSystemMonitoringDO',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 删除平台验收信息
export const delMonitor = (data) => {
    return axios.request({
        url: 'base_info/manage/systemMon/deleteSystemMonitoringDO',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_time = (data) => {
    return axios.request({
        url: 'base_info/terminal/getSystemTime',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 资产用户管理
export const get_asset_tree = (data) => {
    return axios.request({
        url: 'base_info/manage/assetsUser/getDep',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const add_asset_group = (data) => {
    return axios.request({
        url: 'base_info/manage/assetsUser/saveDep',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_asset_group = (data) => {
    return axios.request({
        url: 'base_info/manage/assetsUser/delDep',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_asset_list = (data) => {
    return axios.request({
        url: 'base_info/manage/assetsUser/getUser',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const save_asset_person = (data) => {
    return axios.request({
        url: 'base_info/manage/assetsUser/saveUser',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const delete_asset_person = (data) => {
    return axios.request({
        url: 'base_info/manage/assetsUser/delUser',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_sync_person = (data) => {
    return axios.request({
        url: 'base_info/manage/assetsUser/getSyncData',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const add_sync_person = (data) => {
    return axios.request({
        url: 'base_info/manage/assetsUser/saveSyncUser',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const ad_domain_sync = (data) => {
    return axios.request({
        url: 'base_info/manage/assetsUser/getAd',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// ad域配置
export const get_ad_config = (data) => {
    return axios.request({
        url: 'base_info/manage/adDomain/get',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const save_ad_config = (data) => {
    return axios.request({
        url: 'base_info/manage/adDomain/save',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 配置参数
export const get_es_config = (data) => {
    return axios.request({
        url: 'base_info/manage/platformConfig/getPlatformConfig',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const save_es_config = (data) => {
    return axios.request({
        url: 'base_info/manage/platformConfig/saveEsAndKafka',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_channel_config = (data) => {
    return axios.request({
        url: 'base_info/manage/platformConfig/getChannels',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const save_channel_config = (data) => {
    return axios.request({
        url: 'base_info/manage/platformConfig/saveChannel',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_channel_config = (data) => {
    return axios.request({
        url: 'base_info/manage/platformConfig/deleteChannels',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_logstash = (data) => {
    return axios.request({
        url: 'base_info/manage/platformConfig/getLogstashNodes',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const save_logstash = (data) => {
    return axios.request({
        url: 'base_info/manage/platformConfig/saveLogstashNodes',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_logstash = (data) => {
    return axios.request({
        url: 'base_info/manage/platformConfig/deleteLogstashNodes',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const change_theme = (data) => {
    return axios.request({
        url: 'base_info/manage/themeConfig/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_theme = (data) => {
    return axios.request({
        url: 'base_info/manage/themeConfig/getThemeConfig',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_modulars = (data) => {
    return axios.request({
        url: 'base_info/manage/upModule/getModule',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_upgrade_list = (data) => {
    return axios.request({
        url: 'base_info/manage/upModule/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const addUpgrade = (data) => {
    return axios.request({
        url: 'base_info/manage/upModule/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_upgrade = (data) => {
    return axios.request({
        url: 'base_info/manage/upModule/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_logs = (data) => {
    return axios.request({
        url: 'base_info/manage/upModule/getLogs',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const startServe = (data) => {
    return axios.request({
        url: 'base_info/manage/upModule/operation',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_back_versons = (data) => {
    return axios.request({
        url: 'base_info/manage/upModule/getRollbackVersion',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const sure_back_versons = (data) => {
    return axios.request({
        url: 'base_info/manage/upModule/rollbackVersion',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_logs_detail = (data) => {
    return axios.request({
        url: 'base_info/manage/upModule/tailLog',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

