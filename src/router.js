import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/views/Dashboard';
import Profile from '@/views/Profile';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Manage from '@/views/Manage';
import ConfirmationPage from '@/views/ConfirmationPage';
import Price from '@/views/PriceChart';

// import { validateToken } from './actions/authenticate';

Vue.use(Router)

function checkValidationOfToken(next) {
  const token = localStorage.getItem('token');

  // validateToken(token).then(res => {
  if (token) {
    next();
  } else {
    next('/login')
  }
  // });
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DashboardHome',
      component: Dashboard,

    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter(to, from, next) {
        checkValidationOfToken(next)
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/confirmation/:id',
      name: 'Confirmation',
      component: ConfirmationPage,
    },
    {
      path: '/price',
      name: 'Price',
      component: Price,
    }
  ]
})