import axios from "axios";
import { ElNotification } from "element-plus";

export const authClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

authClient.interceptors.response.use(
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
