import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { ElNotification } from "element-plus";

// 处理成功响应
export const responseInterceptor = (response: AxiosResponse): AxiosResponse =>
  response;

// 处理错误响应
export const responseErrorInterceptor = (error: unknown): Promise<never> => {
  if (!isAxiosError(error)) {
    ElNotification({
      title: "Error",
      message: "An unknown error occurred",
      type: "error",
    });
    return Promise.reject(error);
  }

  const axiosError = error as AxiosError;
  if (!axiosError.response) {
    ElNotification({
      title: "Error",
      message: "Network Error, please check your network connection",
      type: "error",
    });
    return Promise.reject(axiosError);
  }

  const { status, data } = axiosError.response;
  let message = "An error occurred";

  if (data && typeof data === "object" && "message" in data) {
    message = (data as { message?: string }).message || message;
  }

  switch (status) {
    case 401:
    case 403:
      message = "Unauthorized or forbidden";
      break;
    case 500:
      message = "Internal server error";
      break;
    case 504:
      message = "Gateway timeout";
      break;
    default:
      break;
  }

  ElNotification({
    title: "Error",
    message,
    type: "error",
  });

  return Promise.reject(axiosError);
};
