import { InternalAxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'
import { Constants, storage } from '~/utils'

// 请求拦截器函数，处理需要 token 的情况
export const requestInterceptorWithToken = (
    config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
    const tokenExpiration = Cookies.get('token_expiration')
    let token
    if (tokenExpiration) {
        token = storage.getItem(Constants.TOKEN_KEY)
    } else {
        token = sessionStorage.getItem(Constants.TOKEN_KEY)
    }

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    config.timeout = 10000 // 设置超时时间为10秒
    return config
}

// 请求拦截器函数，不处理 token
export const requestInterceptorWithoutToken = (
    config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
    config.timeout = 10000 // 设置超时时间为10秒
    return config
}

// 请求拦截器，添加自定义 header
export const requestInterceptorWithHeader = (
    config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
    config.headers['X-Custom-Header'] = 'custom header'
    return config
}
