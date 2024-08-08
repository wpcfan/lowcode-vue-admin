import { defineStore } from "pinia";
import { authClient } from "~/networking";

interface AuthState {
  token: string | null;
  error: string | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    token: null,
    error: null,
  }),
  actions: {
    async login(username: string, password: string) {
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
      }
    },
    logout() {
      this.token = null;
    },
  },
});
