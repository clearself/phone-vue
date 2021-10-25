import axios from 'axios'
import { getAjax, getAjaxSome } from '@/utils/http'
export const getNftInfo = (data) => {
    return axios.request({
        url: 'link_manage/manage/nft/pageNftInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

