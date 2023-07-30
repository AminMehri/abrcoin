import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProfileView from '../views/ProfileView.vue'
import dashboard from '../views/dashboardView.vue'
import VerifyEmailView from '../views/VerifyEmailView.vue'
import WalletsView from '../views/WalletsView.vue'
import TradeHistory from '../views/TradeHistoryView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { loginRedirect: true }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: { loginRedirect: true }
  },
  {
    path: '/dashboard/profile',
    name: 'profile',
    component: ProfileView,
    meta: { loginRequired: true }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: { loginRequired: true }
  },
  {
    path: '/wallets',
    name: 'wallets',
    component: WalletsView,
    meta: { loginRequired: true }
  },
  {
    path: '/trade-history',
    name: 'trade-history',
    component: TradeHistory,
    meta: { loginRequired: true }
  },
  {
    path: '/verify-email/:token',
    name: 'verify-email',
    component: VerifyEmailView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.loginRequired)) {
    if (store.state.isAuthenticated) {
      next()
    } else {
      next("/login")
    }
  }else if (to.matched.some(record => record.meta.loginRedirect)) {
    if (store.state.isAuthenticated) {
      next("/dashboard/profile")
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router