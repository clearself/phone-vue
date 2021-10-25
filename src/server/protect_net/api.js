import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'

// 系统列表
export const get_menu = (data) => {
    return axios.request({
        url: 'protect_net/manage/permission/getMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}

export const add_region = (data) => {
    return axios.request({
        url: 'protect_net/manage/seatArea/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_region = (data) => {
    return axios.request({
        url: 'protect_net/manage/seatArea/getSeatAreas',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const clear_region = (data) => {
    return axios.request({
        url: 'protect_net/manage/seatArea/reset',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_team = (data) => {
    return axios.request({
        url: 'protect_net/manage/seatArea/legendPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_team = (data) => {
    return axios.request({
        url: 'protect_net/manage/seatArea/saveLegend',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_team = (data) => {
    return axios.request({
        url: 'protect_net/manage/seatArea/deleteLegend',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_region_team = (data) => {
    return axios.request({
        url: 'protect_net/manage/seatArea/getAllSeatAreaLegend',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_region_team = (data) => {
    return axios.request({
        url: 'protect_net/manage/seatArea/bindSeatAreas',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 作战室-- 清空坐席
export const cleanAgent = (data) => {
    return axios.get('protect_net/manage/seatArea/cleanAgent', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}
export const get_screen_data = (data) => {
    return axios.request({
        url: 'protect_net/terminal/getSeatAreas',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_screen_teams = (data) => {
    return axios.request({
        url: 'protect_net/terminal/getAllSeatAreaLegend',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_screen_static = (data) => {
    return axios.request({
        url: 'protect_net/terminal/numByType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 组织管理--树控组件
export const get_tree_data = (data) => {
    return axios.request({
        url: 'protect_net/manage/organization/getTree',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 组织管理--allUser
export const get_allUser = (data) => {
    return axios.request({
        url: 'protect_net/terminal/getAllUsers',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 组织管理--添加、修改组件架构
export const add_organizationGroup = (data) => {
    return axios.request({
        url: 'protect_net/manage/organization/save',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 组织管理--删除组件架构
export const del_organizationGroup = (data) => {
    return axios.request({
        url: 'protect_net/manage/organization/del',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 组织管理--获取组织列表
export const get_organization_data = (data, page, pageSize) => {
    return axios.request({
        url: `protect_net/manage/organization/getUser?page=${page}&pageSize=${pageSize}`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 组织管理--添加组织人员
export const add_organization_user = (data) => {
    return axios.request({
        url: `protect_net/manage/organization/saveOrganizer`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 组织管理--编辑组织人员
export const edit_organization_user = (data) => {
    return axios.request({
        url: `protect_net/manage/organization/saveOrganizer`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 组织管理--删除组织人员
export const del_organization_user = (data) => {
    return axios.request({
        url: 'protect_net/manage/organization/delUser',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 组织管理--删除组织人员--多选
export const del_muiti_user = (data) => {
    return axios.request({
        url: 'protect_net/manage/organization/delUserByIds',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 作战室排班--获取列表
export const get_fightSchedule_data = (data, page, pageSize) => {
    return axios.request({
        url: `protect_net/manage/workforcemanage/page?page=${page}&pageSize=${pageSize}`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 作战室排班-- 添加
export const add_userTable = (data) => {
    return axios.request({
        url: 'protect_net/manage/workforcemanage/save',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 作战室排班-- 删除
export const del_userTable = (data) => {
    return axios.request({
        url: 'protect_net/manage/workforcemanage/del',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 作战室排班--多选删除
export const del_muti_usertable = (data) => {
    return axios.request({
        url: 'protect_net/manage/workforcemanage/delByIds',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 规则规范列表--获取列表
export const get_ruleStandard_data = (data) => {
    return axios.request({
        url: `protect_net/manage/discilinrule/getAll`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 规则规范列表--修改规则
export const edit_ruleStandard = (data) => {
    return axios.request({
        url: `protect_net/manage/discilinrule/update`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 回收站--获取列表
export const get_recoverList = (data, page, pageSize) => {
    return axios.request({
        url: `protect_net/manage/recovery/page?page=${page}&pageSize=${pageSize}`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 回收站--恢复
export const recoverData = (data) => {
    return axios.request({
        url: `protect_net/manage/recovery/recover`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 我的任务--列表
export const get_myTaskData = (data, page, pageSize) => {
    return axios.request({
        url: `protect_net/manage/myTask/page?page=${page}&pageSize=${pageSize}`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 我的任务--处理任务
export const disposal_myTask = (data) => {
    return axios.request({
        url: `protect_net/manage/myTask/disposal`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_set_time = (data) => {
    return axios.request({
        url: 'protect_net/manage/timeSet/getTimeSet',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const add_set_time = (data) => {
    return axios.request({
        url: 'protect_net/manage/timeSet/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_match_all = (data) => {
    return axios.request({
        url: 'protect_net/manage/msgSet/getMsgSet',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_match_set = (data) => {
    return axios.request({
        url: 'protect_net/manage/msgSet/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 告警规则设置
export const add_rule = (data) => {
    return axios.request({
        url: 'protect_net/manage/alarmRuleConfig/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_alarm_type = (data) => {
    return axios.request({
        url: 'protect_net/manage/alarmRuleConfig/getAlarmType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_rule_list = (data) => {
    return axios.request({
        url: 'protect_net/manage/alarmRuleConfig/getAllRules',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_rule = (data) => {
    return axios.request({
        url: 'protect_net/manage/alarmRuleConfig/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const start_rule = (data) => {
    return axios.request({
        url: 'protect_net/manage/alarmRuleConfig/updateStatus',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

