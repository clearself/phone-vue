import request from '@/utils/server.js'

export const login = (data) => {
    return request({
        url: '/login',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}
