import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'
// 系统列表
export const get_menu = (data) => {
    return axios.request({
        url: 'works_order/manage/permission/getMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjaxSome(result)
    })
}
// 告警字段
export const get_selested_all_fileds = (data) => {
    return axios.request({
        url: 'works_order/manage/workMould/getAlarmField',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_condition = (data) => {
    return axios.request({
        url: 'works_order/manage/workMould/allCondition',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取工单字段
export const get_work_fileds = (data) => {
    return axios.request({
        url: 'works_order/manage/workMould/getWorkOrderField',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取工单任务详情
export const get_workTask_detail = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/getDetail',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取工单任务详情
export const get_workTask_detailAllTask = (data) => {
    return axios.request({
        url: 'works_order/manage/allOrder/getDetail',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取漏洞字段
export const get_leak_fileds = (data) => {
    return axios.request({
        url: 'works_order/manage/workMould/getLeakField',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 工单完成
export const finish_workTask = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/approve',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 工单任务获取流程图
export const get_one_work = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/getWorkMouldById',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 工单任务获取流程图
export const get_one_workAllTask = (data) => {
    return axios.request({
        url: 'works_order/manage/allOrder/getWorkMouldById',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_selested_all_leak_fileds = (data) => {
    return axios.request({
        url: 'works_order/manage/workMould/getLeakField',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_task_info = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/get',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_task_infoAllTask = (data) => {
    return axios.request({
        url: 'works_order/manage/allOrder/get',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_work_users = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrderView/getOrderUser',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_work_order_data = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrderView/getView',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_work_detail_data = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrderView/getTable',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_work_order_statistic = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrderTime/getOrderNum',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const get_work_order_overview_list = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrderTime/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_statistic_workTask_detail = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrderTime/getBpmRecord',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_timeVal = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrderTime/getAvgTime',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
