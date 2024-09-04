import axios from 'axios'
import {
    requestInterceptorWithoutToken,
    responseErrorInterceptor,
    responseInterceptor,
} from './interceptors'

export const authClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

authClient.interceptors.request.use(requestInterceptorWithoutToken)
authClient.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
