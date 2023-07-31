import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProfileView from '../views/ProfileView.vue'
import Dashboard from '../views/DashboardView.vue'
import VerifyEmailView from '../views/VerifyEmailView.vue'
import WalletsView from '../views/WalletsView.vue'
import WithdrawView from '../views/WithdrawView.vue'
import DepositView from '../views/DepositView.vue'
import SetPasswordView from '../views/SetPasswordView.vue'


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
    component: Dashboard,
    meta: { loginRequired: true }
  },
  {
    path: '/wallets',
    name: 'wallets',
    component: WalletsView,
    meta: { loginRequired: true }
  },
  {
    path: '/deposit',
    name: 'deposit',
    component: DepositView,
    meta: { loginRequired: true }
  },
  {
    path: '/withdraw',
    name: 'withdraw',
    component: WithdrawView,
    meta: { loginRequired: true }
  },
  {
    path: '/verify-email/:token',
    name: 'verify-email',
    component: VerifyEmailView,
  },
  {
    path: '/set-password/:token',
    name: 'set-password',
    component: SetPasswordView,
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
      next("/dashboard")
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router