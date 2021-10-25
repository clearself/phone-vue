import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'
// form表单五返回code
var getAjaxVal = result => {
    return new Promise((resolve, reject) => {
        if (result.status == 200) {
            resolve('success')
        } else {
            // eslint-disable-next-line no-undef
            Message({
                message: result.data.message,
                type: 'warning'
            })
            reject(result.data)
        }
    })
}

// 系统列表
export const get_menu = (data) => {
    return axios.request({
        url: 'defense_drill/manage/permission/getMenu',
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
        url: 'defense_drill/manage/InformationRetrieval/savaGroup',
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
        url: 'defense_drill/manager/infohandle/getDeployInfo',
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
        url: 'defense_drill/manager/infohandle/addDeployItem',
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
        url: 'defense_drill/manager/infohandle/updateDeployItem',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_option = (data) => {
    return axios.delete('defense_drill/manager/infohandle/deleteDeployItem', { // params参数必写 , 如果没有参数传{}也可以
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 高位信息列表
export const getEventList = (data) => {
    return axios.request({
        url: 'defense_drill/manager/decision/findHighRiskInfoList',
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
        url: 'defense_drill/manager/decision/addHighRiskInfo',
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
        url: 'defense_drill/manager/decision/modifyHighRiskInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
// 删除高位信息
export const delEvent = (data) => {
    return axios.delete('defense_drill/manager/decision/deleteInfo', { // params参数必写 , 如果没有参数传{}也可以
        params: data
    }).then(result => {
        return getAjax(result)
    })
}

// 获取任务列表
export const getTaskList = (data) => {
    return axios.request({
        url: 'defense_drill/manager/check/findTaskList',
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
        url: 'defense_drill/manager/check/addTask',
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
        url: 'defense_drill/manager/check/updateTask',
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
        url: 'defense_drill/manager/check/updateCheckItemStatus',
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
    return axios.delete('defense_drill/manager/check/deleteCheckTask', { // params参数必写 , 如果没有参数传{}也可以
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 修改配置项
export const get_info_handel_list = (data) => {
    return axios.request({
        url: 'defense_drill/manager/infohandle/findInfoHandleList',
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
        url: 'defense_drill/manager/infohandle/addInfo',
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
        url: 'defense_drill/manager/infohandle/findInfoHandleList',
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
        url: 'defense_drill/' + _url,
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
        url: 'defense_drill/manage/greeting/getValidUsers',
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
        url: 'defense_drill/manage/InformationRetrieval/getAllGroup',
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
        url: 'defense_drill/manage/InformationRetrieval/page',
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
        url: 'defense_drill/manage/InformationRetrieval/saveInformation',
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
        url: 'defense_drill/manage/InformationRetrieval/editIp',
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
        url: 'defense_drill/manage/InformationRetrieval/getAllGroup',
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
        url: 'defense_drill/manage/InformationRetrieval/getDeps',
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
        url: 'defense_drill/manage/electronicDocument/mkdir',
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
        url: 'defense_drill/manage/electronicDocument/upload',
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
        url: 'defense_drill/manage/electronicDocument/list',
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
        url: 'defense_drill/manager/template/addTemplateAllInfo',
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
        url: 'defense_drill/manage/eventinfo/getAllTemplate',
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
        url: 'defense_drill/manager/check/getResponsibleList',
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
        url: 'defense_drill/manager/templateColumn/findGroupList',
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
    return axios.delete('defense_drill/manager/template/deleteTemplate', { // params参数必写 , 如果没有参数传{}也可以
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 更新模板
export const changeTemplate = (data) => {
    return axios.request({
        url: 'defense_drill/manager/template/updateTemplateAllInfo',
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
    return axios.get('defense_drill/manage/eventinfo/getEventType', { // params参数必写 , 如果没有参数传{}也可以
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取事件类型new
export const getNewEventType = (data) => {
    return axios.get('defense_drill/manage/eventinfo/getNewEventType', { // params参数必写 , 如果没有参数传{}也可以
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 添加事件
export const add_event = (data) => {
    return axios.request({
        url: 'defense_drill/manage/eventinfo/saveEvent',
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
        url: 'defense_drill/manage/eventinfo/page',
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
        url: 'defense_drill/manage/eventinfo/delEvent',
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
        url: 'defense_drill/manage/eventinfo/editTemplateColumns',
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
        url: 'defense_drill/manage/eventinfo/getTemplateColumnById',
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
        url: 'defense_drill/manage/eventinfo/getFiles',
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
        url: 'defense_drill/manager/template/queryTemplateList',
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
        url: 'defense_drill/manage/greeting/getUserGroup',
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
        url: 'defense_drill/manage/bank/getCity',
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
        url: 'defense_drill/manage/bank/getCity',
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
        url: 'defense_drill/manage/bank/getSuperiors',
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
        url: 'defense_drill/manage/bank/saveBank',
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
        url: 'defense_drill/manage/bank/page',
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
        url: 'defense_drill/manage/bank/del',
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
        url: 'defense_drill/manage/bank/saveBank',
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
        url: 'defense_drill/manage/InformationRetrieval/getSecondLevelCity',
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
        url: 'defense_drill/manage/InformationRetrieval/getAllBank',
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
        url: 'defense_drill/manage/InformationRetrieval/getUserGroups',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_match_users_list_hall = (data) => {
    return axios.request({
        url: 'defense_drill/manage/greeting/getAllUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
