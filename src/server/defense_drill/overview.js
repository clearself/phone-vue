import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'
// 演练统计
export const getDrillStatistic = (data) => {
    return axios.request({
        url: 'defense_drill/manage/overviewChart/getNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const getDrillBrokenLine = (data) => {
    return axios.request({
        url: 'defense_drill/manage/overviewChart/getNumByMonth',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getAttrackRank = (data) => {
    return axios.request({
        url: 'defense_drill/manage/overviewChart/getAttackTeamRanking',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const getDefenseRank = (data) => {
    return axios.request({
        url: 'defense_drill/manage/overviewChart/getDefenseTeamRanking',
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
export const get_attrack_defense_detail = (data) => {
    return axios.request({
        url: 'defense_drill/terminal/getRecordPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_matchTime = (data) => {
    return axios.request({
        url: 'defense_drill/terminal/getGameTime',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

