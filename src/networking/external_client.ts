import axios from "axios";
import { responseErrorInterceptor, responseInterceptor } from "./interceptors";

export const externalClient = axios.create();

externalClient.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
);
