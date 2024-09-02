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
import TicketsView from '../views/TicketsView.vue'
import SingleTicketView from '../views/SingleTicketView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import SingleArticleView from '../views/SingleArticleView.vue'
import NewFaceDash from '../views/newfacedash/DashboardView'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticlesView
  },
  {
    path: '/article/:slug',
    name: 'single-article',
    component: SingleArticleView
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
    path: '/tickets',
    name: 'tickets',
    component: TicketsView,
    meta: { loginRequired: true }
  },
  {
    path: '/ticket/:id',
    name: 'ticket',
    component: SingleTicketView,
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
  {
    path: '/newfacedash',
    name: 'newfacedash',
    component: NewFaceDash,
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