import Cookies from "js-cookie";
import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import AboutPage from "~/views/AboutPage.vue";
import HomePage from "~/views/HomePage.vue";
import LoginPage from "~/views/LoginPage.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomePage,
      },
      {
        path: "about",
        name: "about",
        component: AboutPage,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

// add a global navigation guard to check if the user is authenticated
router.beforeEach((to, from, next) => {
  const tokenExpiration = Cookies.get("token_expiration");
  let token;
  if (tokenExpiration) {
    if (tokenExpiration < new Date().toISOString()) {
      localStorage.removeItem("token");
      Cookies.remove("token_expiration");
      token = null;
    } else {
      token = localStorage.getItem("token");
    }
  } else {
    token = sessionStorage.getItem("token");
  }
  if (to.name !== "login" && !token) next({ name: "login" });
  else next();
});

export default router;
