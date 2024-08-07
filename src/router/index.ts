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

export default router;
