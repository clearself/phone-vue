import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'

// 获取自定义列表
export const getWorkObject = (data) => {
    return axios.request({
        url: 'works_order/manage/workObject/page',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 保存自定义列表
export const saveWorkObject = (data) => {
    return axios.request({
        url: 'works_order/manage/workObject/save',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 删除自定义列表
export const deleteWorkObject = (data) => {
    return axios.request({
        url: 'works_order/manage/workObject/del',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取所有人
export const getAllUsers = (data) => {
    return axios.request({
        url: 'works_order/manage/workMould/getAllUsers',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取所有部门
export const getAllDep = (data) => {
    return axios.request({
        url: 'works_order/manage/workMould/getAllDep',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取所有角色
export const getAllRoles = (data) => {
    return axios.request({
        url: 'works_order/manage/workMould/getAllUserRoles',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取工单发起对象
export const getSendObject = (data) => {
    return axios.request({
        url: 'works_order/manage/workMould/getSendObj',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取工单模板列表
export const getWorkTemplateList = (data) => {
    return axios.request({
        url: 'works_order/manage/workMould/page',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 删除工单模板列表
export const deleteWorkTemplateList = (data) => {
    return axios.request({
        url: 'works_order/manage/workMould/delete',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 启用停用工单模板
export const changeWorkStatus = (data) => {
    return axios.request({
        url: 'works_order/manage/workMould/updateStatus',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 保存或修改工单模板
export const saveWorkTemplate = (data) => {
    return axios.request({
        url: 'works_order/manage/workMould/save',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 工单任务 --列表
export const get_workTask = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/page',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 所有工单任务 --列表
export const get_all_workTask = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/getAll',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 工单任务 --列表
export const get_workObject = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/getObject',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 工单任务 --列表
export const get_workTemplate = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/getWorkMould',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 工单任务 --发起工单
export const add_workTask = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/save',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 工单任务 --催办
export const urge_workTask = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/sendReminder',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 工单任务 --撤销
export const revert_workTask = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/stop',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 工单任务 --删除
export const delete_workTask = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/delete',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 工单任务 --下载
export const exportWorkTaskExcel = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/download',
        method: 'get',
        responseType: 'blob',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        data: data
    }).then(result => {
        console.log(result)
        return getAjaxFile(result)
    })
}

// 获取所有人
export const getAllUsersOrder = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/getAllUsers',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取所有部门
export const getAllDepOrder = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/getAllDep',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取所有角色
export const getAllRolesOrder = (data) => {
    return axios.request({
        url: 'works_order/manage/workOrder/getAllUserRoles',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 所有工单任务

// 获取所有人
export const getAllUsersAllTask = (data) => {
    return axios.request({
        url: 'works_order/manage/allOrder/getAllUsers',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取所有部门
export const getAllDepAllTask = (data) => {
    return axios.request({
        url: 'works_order/manage/allOrder/getAllDep',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取所有角色
export const getAllRolesAllTask = (data) => {
    return axios.request({
        url: 'works_order/manage/allOrder/getAllUserRoles',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 所有工单任务 --列表
export const get_all_workTaskAllTask = (data) => {
    return axios.request({
        url: 'works_order/manage/allOrder/getAll',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 工单任务 --列表
export const get_workObjectAllTask = (data) => {
    return axios.request({
        url: 'works_order/manage/allOrder/getObject',
        method: 'post',
        data: data.paramsData,
        params: data.queryData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 工单任务 --列表
export const get_workTemplateAllTask = (data) => {
    return axios.request({
        url: 'works_order/manage/allOrder/getWorkMould',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 工单任务 --撤销
export const revert_workTaskAllTask = (data) => {
    return axios.request({
        url: 'works_order/manage/allOrder/stop',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const delete_workTaskAllTask = (data) => {
    return axios.request({
        url: 'works_order/manage/allOrder/delete',
        method: 'post',
        data: data
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

export const exportWorkTaskExcelAllTask = (data) => {
    return axios.request({
        url: 'works_order/manage/allOrder/download',
        method: 'get',
        responseType: 'blob',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        data: data
    }).then(result => {
        console.log(result)
        return getAjaxFile(result)
    })
}
