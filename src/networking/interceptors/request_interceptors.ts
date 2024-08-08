import { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

// 请求拦截器函数，处理需要 token 的情况
export const requestInterceptorWithToken = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const tokenExpiration = Cookies.get("token_expiration");
  let token;
  if (tokenExpiration) {
    token = localStorage.getItem("token");
  } else {
    token = sessionStorage.getItem("token");
  }

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
