import axios from "axios";
import { responseErrorInterceptor, responseInterceptor } from "./interceptors";

export const authClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

authClient.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
);
