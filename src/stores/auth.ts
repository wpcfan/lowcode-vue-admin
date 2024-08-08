import { defineStore } from "pinia";
import { authClient } from "~/networking";

interface AuthState {
  token: string | null;
  error: string | null;
  loading: boolean; // 添加 loading 状态
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    token: null,
    error: null,
    loading: false, // 初始化 loading 状态
  }),
  actions: {
    async login(username: string, password: string) {
      this.loading = true; // 登录开始时设置为 loading
      const basicAuth = `Basic ${btoa(`${username}:${password}`)}`;
      try {
        const response = await authClient.post(
          "/auth/token",
          {},
          {
            headers: {
              Authorization: basicAuth,
            },
          }
        );
        this.token = response.data;
        this.error = null;
      } catch (error: any) {
        this.error = error.response?.data?.message || "An error occurred";
      } finally {
        this.loading = false; // 登录完成后取消 loading
      }
    },
    logout() {
      this.token = null;
    },
  },
});
