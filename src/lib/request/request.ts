import axios, { AxiosRequestConfig } from 'axios'
import dayjs from 'dayjs'
import { encode } from 'js-base64'
const instance = axios.create({
    baseURL: '/',
})

const Authorization = encode(`${process.env?.ACCOUNT_ID}:${dayjs().format('YYYYMMDDHHmmss')}`)

instance.interceptors.request.use(
    (config) => config,

    (error) => Promise.reject(error)
)

instance.interceptors.response.use(
    (res) => {
        if (res?.status === 200) {
            return res?.data
        } else {
            return {
                code: -1,
                message: '请求失败',
                data: null,
            }
        }
    },
    (error) => Promise.reject(error)
)

const request = {
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return instance.get(url, config)
    },
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return instance.post(url, data, config)
    },
}

export default request
