import Cookies from 'js-cookie'
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '~/layouts/DefaultLayout.vue'
import { Constants, storage } from '~/utils'
import AboutPage from '~/views/AboutPage.vue'
import HomePage from '~/views/HomePage.vue'
import LoginPage from '~/views/LoginPage.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
      },
      {
        path: 'about',
        name: 'about',
        component: AboutPage,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

// add a global navigation guard to check if the user is authenticated
router.beforeEach((to, from, next) => {
  const tokenExpiration = Cookies.get(Constants.TOKEN_EXPIRATION_KEY)
  let token
  if (tokenExpiration) {
    if (tokenExpiration < new Date().toISOString()) {
      storage.removeItem(Constants.TOKEN_KEY)
      Cookies.remove(Constants.TOKEN_EXPIRATION_KEY)
      token = null
    } else {
      token = storage.getItem(Constants.TOKEN_KEY)
    }
  } else {
    token = sessionStorage.getItem(Constants.TOKEN_KEY)
  }
  if (to.name !== 'login' && !token) next({ name: 'login' })
  else next()
})

export default router
