import axios from "axios";
import { ElNotification } from "element-plus";

export const externalClient = axios.create();

externalClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || "An error occurred";
    ElNotification({
      title: "Error",
      message,
      type: "error",
    });
    return Promise.reject(error);
  }
);
