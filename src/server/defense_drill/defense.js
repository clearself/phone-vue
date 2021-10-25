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

// 获取赛事配置信息
export const get_match_sets = (data) => {
    return axios.get('defense_drill/manage/gameEvent/getDeployInfo', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取赛事组织列表
export const get_match_group = (data) => {
    return axios.request({
        url: 'defense_drill/manage/gameEvent/getTissueList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
// 获取赛事裁判列表
export const get_match_referee = (data) => {
    return axios.request({
        url: 'defense_drill/manage/gameEvent/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
// 发布赛事
export const public_match = (data) => {
    return axios.request({
        url: 'defense_drill/manage/gameEvent/addGameEvent',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
// 发布赛事
export const edit_match = (data) => {
    return axios.request({
        url: 'defense_drill/manage/gameEvent/updateGameEventInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
// 赛事列表
export const get_match_list = (data) => {
    return axios.request({
        url: 'defense_drill/manage/gameEvent/findGameEventInfoList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 删除赛事
export const delete_match = (data) => {
    return axios.delete('defense_drill/manage/gameEvent/deleteGameEventInfo', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 关闭赛事
export const close_match = (data) => {
    return axios.request({
        url: 'defense_drill/manage/gameEvent/closeGameEvent',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 赛事详情
export const get_match_info = (data) => {
    return axios.get('defense_drill/manage/gameEvent/getEventInfo', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取战绩配置信息
export const get_record_sets = (data) => {
    return axios.get('defense_drill/manage/record/getDeployInfo', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_record_attrack_sets = (data) => {
    return axios.get('defense_drill//manage/rehearsal/getDeployInfo', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取所有赛事信息
export const get_all_matchs = (data) => {
    return axios.get('defense_drill/manage/record/getAllGameEvent', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 创建战绩
export const add_record = (data) => {
    return axios.request({
        url: 'defense_drill/manage/record/addRecord',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
// 获取银行城市信息
export const get_bank_city = (data) => {
    return axios.get('defense_drill/manage/record/getAllBankCityInfo', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 查询战绩
export const get_records = (data) => {
    return axios.request({
        url: 'defense_drill/manage/record/findRecordList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
// 查询战绩
export const change_attack_record = (data) => {
    return axios.request({
        url: 'defense_drill/manage/record/modifyRecord',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 删除战绩
export const delete_record = (data) => {
    return axios.delete('defense_drill/manage/record/deleteRecord', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 审核战绩
export const sure_check = (data) => {
    return axios.request({
        url: 'defense_drill/manage/record/verifyRecord',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 管理中心顶部数据
export const get_num_data = (data) => {
    return axios.get('defense_drill/manage/statistics/getCountData', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 管理中心获取所有赛事
export const get_all_achievement_matchs = (data) => {
    return axios.get('defense_drill/manage/statistics/getAllGameEvent', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 统计
export const get_statistic_data = (data) => {
    return axios.request({
        url: 'defense_drill/manage/statistics/recordCount',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
// 获取小组
export const get_chat_list = (data) => {
    return axios.request({
        url: 'defense_drill/manage/greeting/findGameEventInfoList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
/* 聊天接口*/
// 获取赛事人员列表
export const get_match_users_list = (data) => {
    return axios.request({
        url: 'defense_drill/manage/greeting/getGameUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_match_team_users_list = (data) => {
    return axios.request({
        url: 'defense_drill/manage/greeting/getTeamUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_small_team_users_list = (data) => {
    return axios.request({
        url: 'defense_drill/manage/greeting/getSmallTeamUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_teamType = (data) => {
    return axios.request({
        url: 'defense_drill/manage/greeting/findUserTeamType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_historyTeam = (data) => {
    return axios.request({
        url: 'defense_drill/manage/gameEvent/findHistoryTeam',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 新郑接口
// 获取 登录账号 所在的赛事信息list
export const get_attract_defense_match_list = (data) => {
    return axios.get('defense_drill/manage/rehearsal/getMyGameEvent', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_attract_defense_match_list_select = (data) => {
    return axios.get('defense_drill/manage/record/getMyGameEvent', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 添加成果
export const add_attrack_defense_record = (data) => {
    return axios.request({
        url: 'defense_drill/manage/record/addRecord',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const edit_attrack_defense_record = (data) => {
    return axios.request({
        url: 'defense_drill/manage/record/modifyRecord',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 赛事列表
export const get_replay_match_list = (data) => {
    return axios.request({
        url: 'defense_drill/manage/rehearsal/findRehearsalList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
// 赛事列表
export const add_Attrack_relay = (data) => {
    return axios.request({
        url: 'defense_drill/manage/rehearsal/addStep',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
export const get_Attrack_defense_relay = (data) => {
    return axios.request({
        url: 'defense_drill/manage/rehearsal/refreshStepData',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
export const get_replay_record = (data) => {
    return axios.get('defense_drill/manage/rehearsal/getDefenseGainList', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const edit_defense_relay = (data) => {
    return axios.request({
        url: 'defense_drill/manage/rehearsal/modifyDefenseStep',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
export const edit_Attrack_relay = (data) => {
    return axios.request({
        url: 'defense_drill/manage/rehearsal/modifyAttackStep',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
export const deleteReplay = (data) => {
    return axios.delete('defense_drill/manage/rehearsal/deleteStep', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_say = (data) => {
    return axios.request({
        url: 'defense_drill/manage/rehearsal/stateGain',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
export const voer_replay = (data) => {
    return axios.get('defense_drill/manage/rehearsal/overRehearsal', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_link = (data) => {
    return axios.request({
        url: 'defense_drill/manage/rehearsal/linkGraph',
        method: 'post',
        data: data
    }).then(result => {
        return getAjax(result)
    })
}
//
export const get_record_referee = (data) => {
    return axios.request({
        url: 'defense_drill/manage/defenseReferee/findRecordList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
export const get_attrack_referee = (data) => {
    return axios.request({
        url: 'defense_drill/manage/attackReferee/findRecordList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

export const sure_attrack_check = (data) => {
    return axios.request({
        url: 'defense_drill/manage/attackReferee/verifyRecord',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

export const sure_defense_check = (data) => {
    return axios.request({
        url: 'defense_drill/manage/defenseReferee/verifyRecord',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

export const get_attrack_match_list = (data) => {
    return axios.get('defense_drill/manage/attackReferee/getMyGameEvent', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_defense_match_list = (data) => {
    return axios.get('defense_drill/manage/defenseReferee/getMyGameEvent', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 添加常用语
export const add_common_wordds = (data) => {
    return axios.request({
        url: 'defense_drill/manage/greeting/saveWords',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
export const get_common_wordds = (data) => {
    return axios.request({
        url: 'defense_drill/manage/greeting/getOftenWords',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
export const delete_common_wordds = (data) => {
    return axios.request({
        url: 'defense_drill/manage/greeting/deleteWords',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
export const get_current_team_info = (data) => {
    return axios.request({
        url: 'defense_drill/manage/gameEvent/findTeamUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 聊天图片上传

export const chat_upload = (data) => {
    return axios.request({
        url: 'defense_drill/manage/greeting/upload',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

