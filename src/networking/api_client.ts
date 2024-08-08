import axios from "axios";
import "element-plus/theme-chalk/el-notification.css";
import {
  requestInterceptorWithToken,
  responseErrorInterceptor,
  responseInterceptor,
} from "./interceptors";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
apiClient.interceptors.request.use(requestInterceptorWithToken);
apiClient.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
);
