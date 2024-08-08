import { InternalAxiosRequestConfig } from "axios";

// 请求拦截器函数，处理需要 token 的情况
export const requestInterceptorWithToken = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.timeout = 10000; // 设置超时时间为10秒
  return config;
};

// 请求拦截器函数，不处理 token
export const requestInterceptorWithoutToken = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  config.timeout = 10000; // 设置超时时间为10秒
  return config;
};
