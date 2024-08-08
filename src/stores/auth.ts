import Cookies from "js-cookie";
import { defineStore } from "pinia";
import { Router } from "vue-router"; // 引入类型
import { authClient } from "~/networking";

interface AuthState {
  token: string | null;
  error: string | null;
  loading: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    token: null,
    error: null,
    loading: false,
  }),
  actions: {
    async login(
      username: string,
      password: string,
      rememberMe: boolean,
      router: Router
    ) {
      // 添加 router 参数
      this.loading = true;
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

        if (rememberMe) {
          localStorage.setItem("token", this.token || "");
          const expirationDate = new Date(
            new Date().getTime() + 14 * 24 * 60 * 60 * 1000
          );
          Cookies.set("token_expiration", expirationDate.toISOString(), {
            expires: 14,
          });
        } else {
          sessionStorage.setItem("token", this.token || "");
        }

        await router.push("/");
      } catch (error: any) {
        this.error = error.response?.data?.message || "An error occurred";
      } finally {
        this.loading = false;
      }
    },
    logout() {
      this.token = null;
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      Cookies.remove("token_expiration");
    },
  },
});
