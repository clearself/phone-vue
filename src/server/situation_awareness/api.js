import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'

export const get_screen_static = (data) => {
    return axios.request({
        url: 'alarm/terminal/getReportNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 防御指挥态势--告警类别
export const get_reportType_pie = (data) => {
    return axios.request({
        url: 'alarm/terminal/getReportTypePie',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 防御指挥态势--告警等级
export const get_reportLevel_pie = (data) => {
    return axios.request({
        url: 'alarm/terminal/getReportLevelPie',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 防御指挥态势--攻击态势 日/周/月
export const get_defenseTrend_day = (data) => {
    return axios.request({
        url: 'alarm/terminal/attackTrend?type=day',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_defenseTrend_hour = (data) => {
    return axios.request({
        url: 'alarm/terminal/attackTrendByDay',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_defenseTrend_week = (data) => {
    return axios.request({
        url: 'alarm/terminal/attackTrend?type=week',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_defenseTrend_month = (data) => {
    return axios.request({
        url: 'alarm/terminal/attackTrend?type=month',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 防御指挥态势--攻击源Ip
export const get_defenseIp_src = (data, type) => {
    return axios.request({
        url: `data_center/terminal/source?type=src&searchType=${type}`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_defenseIp_target = (data, type) => {
    return axios.request({
        url: `data_center/terminal/source?type=desc&searchType=${type}`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 防御指挥态势--攻击源分布top10
export const getAttackTop10 = (data) => {
    return axios.request({
        url: 'alarm/terminal/getAttackTop10',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const getMap = (data) => {
    return axios.request({
        url: 'data_center/terminal/getAttackMap',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_logs_static = (data) => {
    return axios.request({
        url: 'alarm/terminal/getDeviceTypeHistogram',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_alarm_list = (data) => {
    return axios.request({
        url: 'alarm/terminal/getSearchReportPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_alarm_data = (data) => {
    return axios.request({
        url: 'alarm/terminal/getAlarmMap',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAssetsAlarm = (data) => {
    return axios.request({
        url: 'alarm/terminal/getAssetsAlarmPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAreasAlarm = (data) => {
    return axios.request({
        url: 'alarm/terminal/getZoneAlarmPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getDdeviceLog = (data) => {
    return axios.request({
        url: 'alarm/terminal/getDeviceTypeLog',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_alarm_url = (data) => {
    return axios.request({
        url: 'alarm/terminal/getResourceCenterWebUrl',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 演练指挥态势
export const get_screen_drill_static = (data) => {
    return axios.request({
        url: 'defense_drill/terminal/getGameNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_rank_data = (data) => {
    return axios.request({
        url: 'defense_drill/terminal/attackTeamRanking',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_attrack_result = (data) => {
    return axios.request({
        url: 'defense_drill/terminal/getAttackResults',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_defense_data = (data) => {
    return axios.request({
        url: 'defense_drill/terminal/getDefenseResults',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_link_data = (data) => {
    return axios.request({
        url: 'defense_drill/terminal/linkGraph',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 成果提交分析
export const get_submit_result = (data) => {
    return axios.request({
        url: 'defense_drill/terminal/getSubmitAnalysis',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 攻击手段统计
export const get_attack_way = (data) => {
    return axios.request({
        url: 'defense_drill/terminal/getAttackModeNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 演练趋势
export const get_trend = (data) => {
    return axios.request({
        url: 'defense_drill/terminal/getDrillTrend',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 顶部列表
export const get_topList = (data) => {
    return axios.request({
        url: 'defense_drill/terminal/getHisTop20',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_drill_team_detail = (data) => {
    return axios.request({
        url: 'defense_drill/terminal/attackTeamRankingInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 资产脆弱性态势

export const get_screen_assstsFragility_static = (data) => {
    return axios.request({
        url: 'assets/terminal/getLeakNums',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_assets_type_data = (data) => {
    return axios.request({
        url: 'assets/terminal/getDeviceTypeNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_loop_type = (data) => {
    return axios.request({
        url: 'assets/terminal/getLeakTypeOrLevelNums',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_zone_system = (data) => {
    return axios.request({
        url: 'assets/terminal/getZoneOrSystemNumTop10',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_zone_loop_system = (data) => {
    return axios.request({
        url: 'assets/terminal/getZoneOrSystemLeakNumTop10',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_highRisk_assets = (data) => {
    return axios.request({
        url: 'assets/terminal/getHighRiskAssetsTop10',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_newest_loop = (data) => {
    return axios.request({
        url: 'assets/terminal/getLatestLeakTop20',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_all_loop_types = (data) => {
    return axios.request({
        url: 'assets/terminal/getAllLeakType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_all_loop_types_detail = (data) => {
    return axios.request({
        url: 'assets/terminal/getAssetsTypeNumByLeakType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_heigh_risk_detail = (data) => {
    return axios.request({
        url: 'assets/terminal/getHighRiskAssetsInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_zone_assets_system = (data) => {
    return axios.request({
        url: 'assets/terminal/getZoneOrSystemNumInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_assets_types = (data) => {
    return axios.request({
        url: 'assets/terminal/getAllAsstesType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 指挥调度--获取坐席
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
// 指挥调度--获取图例
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
// 指挥调度--聊天大厅
export const get_chat_history = (data) => {
    return axios.request({
        url: 'protect_net/terminal/getNewestMessageTop30',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 指挥调度--当前值班人员
export const get_duty_person = (data) => {
    return axios.request({
        url: 'protect_net/terminal/getNow',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 指挥调度--值班表
export const get_duty_schedule = (data) => {
    return axios.request({
        url: `protect_net/terminal/getDuty`,
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 指挥调度--战时记录规范
export const get_rule_log = (data) => {
    return axios.request({
        url: 'protect_net/terminal/getDiscilinrule',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_fire_data = (data) => {
    return axios.request({
        url: 'alarm/terminal/getReportStageNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_fire_list = (data) => {
    return axios.request({
        url: 'alarm/terminal/getReportStage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_alarm_left_list = (data) => {
    return axios.request({
        url: 'alarm/terminal/getFreshReport',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

