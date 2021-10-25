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
        url: 'reporting_platform/loginUser',
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
        url: 'reporting_platform/manage/permission/updatePassword',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}
export const exit = (data) => {
    return axios.request({
        url: 'reporting_platform/exit',
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
        url: 'reporting_platform/manage/permission/getMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}
/* 网络攻击*/

// 攻击类型
export const get_attrack_type = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/getAttackType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 保存/上报网络攻击
export const add_net_attrack = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/saveNetworkAttack',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_net_attrack_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/networkAttackPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_net_attrack = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/deleteNetworkAttack',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const report_data = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/send',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

/* DDOC攻击*/
export const add_ddoc = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/saveDdosAttack',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_ddoc_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/ddosAttackPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_ddoc = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/deleteDdosAttack',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

/* 病毒感染*/
export const add_virus = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/saveViralInfection',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_virus_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/viralInfectionPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_virus = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/deleteViralInfection',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_branch_areas = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/getArea',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

/* 恶意邮件*/
export const add_malicious_mail = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/saveMaliciousMail',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_malicious_mail_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/maliciousMailPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_malicious_mail = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/deleteMaliciousMail',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

/* 防病毒数*/
export const add_antivirus = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/saveViralInfectionNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_antivirus_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/viralInfectionNumPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_antivirus = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/deleteViralInfectionNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
/* 反垃圾*/
export const add_anti_spam = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/saveAntiWasteMail',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_anti_spam_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/antiWasteMailPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_anti_spam = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/deleteAntiWasteMail',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
/* 钓鱼网站/假冒APP*/
export const add_phishing_websit = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/saveSiteApp',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_phishing_websit_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/siteAppPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_phishing_websit = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/deleteSiteApp',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// ip威胁库
export const get_threaten_ip_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/ipIntelligence/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_threaten_domain_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/domainIntelligence/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_report_set = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/systemConfig/getConfig',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_report_set = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/systemConfig/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 机构配置
export const add_instruction = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/orgInfo/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_instruction = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/orgInfo/getOrgInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_area_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/areaCode/getArea',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const saveDeviceType = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/areaCode/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const delDeviceType = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/areaCode/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 分支机构管理

export const get_branch_city = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/subOrgConfig/getArea',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_branches = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/subOrgConfig/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_branches_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/subOrgConfig/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_branches = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/subOrgConfig/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const add_device_type = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/deviceTypeConfig/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_device_type_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/deviceTypeConfig/getAllDeviceTypeConfig',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_device_type = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/deviceTypeConfig/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 流量单位配置
export const add_flow = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/attackFlowUnit/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_flow = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/attackFlowUnit/getConfig',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_total_num = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/getConfig',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const add_data_type = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/attackTypeConfig/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_data_type_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/attackTypeConfig/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_data_type = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/attackTypeConfig/delete',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const add_test = (data) => {
    return axios.request({
        url: 'reporting_platform/terminal/saveAttackLog',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_report_switch = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/openConfig/getConfig',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_report_switch = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/openConfig/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 概览统计
export const get_statistical_top = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/statistical/top',
        method: 'get',
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 网络攻击折线图
export const get_network_line = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/statistical/period',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 操作日志
export const get_ULog_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/log/get',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 事件统计
export const get_event_bar = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/statistical/event',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_attrack_virus = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/statistical/attackType',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_attrack_src = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/statistical/attackSource',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_attrack_src_address = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/statistical/attackSourceIp',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_attracked_sys = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/statistical/attackTargetSystem',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_attracked_ip = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/statistical/attackDestinationIp',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_trend = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/statistical/trend',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_trend_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/statistical/trendPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取授权时间
export const get_time_down_time = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/license/getTime',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_email_config = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/mailConfig/get',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const add_email_config = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/mailConfig/update',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 上报失败列表
// 网络攻击
export const get_net_attrack_list_fail = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/networkAttackPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 病毒感染
export const get_virus_list_fail = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/viralInfectionPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 防病毒安装
export const get_antivirus_list_fail = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/viralInfectionNumPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 钓鱼网站
export const get_phishing_websit_list_fail = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/siteAppPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 恶意邮件
export const get_malicious_mail_list_fail = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/maliciousMailPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// DDOS攻击
export const get_ddoc_list_fail = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/ddosAttackPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 反垃圾邮件
export const get_anti_spam_list_fail = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/antiWasteMailPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 反垃圾邮件
export const get_add_is_show = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/searchAntiWasteMailEs',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 审核数据
export const check_data = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/audit',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_all_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/getAllOrignal',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 授权
export const add_auto_set = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/systemSign/saveSystemSign',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_auto_set = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/systemSign/getSystemSign',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取银行类型
export const get_bank_type = (data) => {
    return axios.get('reporting_platform/terminal/getAppVersion', {
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 获取子机构列表
export const get_sub_institutions = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/getSubInstitutions',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_file_userguide = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/fileDownload/userGuide',
        method: 'get',
        params: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 原始数据钓鱼网站
export const get_orig_phish_site = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/report/siteAppPage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 数据源配置

export const get_data_source_config = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/systemConfig/getConfig',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const save_data_source_config = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/systemConfig/saveDataSources',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_station_mail_list = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/stationMessage/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

