import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'

// 通讯录所有人
export const get_all_users = (data) => {
    return axios.request({
        url: 'message-service/manage/chatroom/getAllUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 通讯录所有群
export const get_all_groups = (data) => {
    return axios.request({
        url: 'message-service/manage/chatroom/getGroupInfos',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取所有会话
export const get_all_chat_record = (data) => {
    return axios.request({
        url: 'message-service/manage/chatroom/getChatRecord',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 获取群成员
export const get_group_member = (data) => {
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
// 获取聊天记录
export const get_chat_message = (data) => {
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
// 置顶聊天
export const save_chat_top = (data) => {
    return axios.request({
        url: 'message-service/manage/chatroom/recordTop',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 删除聊天列表
export const delete_chat_record = (data) => {
    return axios.request({
        url: 'message-service/manage/chatroom/deleteChatRecord',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 删除群组
export const delete_chat_group = (data) => {
    return axios.request({
        url: 'message-service/manage/chatroom/deleteGroup',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
// 撤销
export const revoke_my_chat = (data) => {
    return axios.request({
        url: 'message-service/manage/chatroom/revoke',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}
