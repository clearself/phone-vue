import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'

// 创建群组
export const create_group = (data) => {
    return axios.request({
        url: 'message-service/manage/chatroom/saveGroup',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取群成员
export const get_group_users = (data) => {
    return axios.request({
        url: 'message-service/manage/chatroom/getGroupUser',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 移除群成员
export const remove_group_users = (data) => {
    return axios.request({
        url: 'message-service/manage/chatroom/deleteGroupUser',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 修改群名称
export const change_group_name = (data) => {
    return axios.request({
        url: 'message-service/manage/chatroom/updateGroupName',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取聊天消息记录
export const get_message_record = (data) => {
    return axios.request({
        url: 'message-service/manage/chatroom/findMessagePage',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
export const get_group_info = (data) => {
    return axios.request({
        url: 'message-service/manage/chatroom/getGroupInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

