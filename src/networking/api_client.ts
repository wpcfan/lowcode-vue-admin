import axios from 'axios'
import 'element-plus/theme-chalk/el-notification.css'
import {
    requestInterceptorWithHeader,
    requestInterceptorWithToken,
    responseErrorInterceptor,
    responseInterceptor,
} from './interceptors'

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// 请求拦截器
apiClient.interceptors.request.use(requestInterceptorWithToken)
apiClient.interceptors.request.use(requestInterceptorWithHeader)
// 响应拦截器
apiClient.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
