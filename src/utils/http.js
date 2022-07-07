
import { Notify } from 'vant'
export const getAjax = (result) => {
    return new Promise((resolve, reject) => {
        if (typeof result.code && result.code === 1) {
            resolve(result.data)
        } else {
            Notify({ type: 'warning', message: result.message })
            reject(result.data)
        }
    })
}

