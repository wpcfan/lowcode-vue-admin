import axios from 'axios'
import {
    requestInterceptorWithoutToken,
    responseErrorInterceptor,
    responseInterceptor,
} from './interceptors'

export const externalClient = axios.create()

externalClient.interceptors.request.use(requestInterceptorWithoutToken)
externalClient.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
