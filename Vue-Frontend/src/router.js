import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login.vue';
import Users from './components/Users.vue';

Vue.use(Router);

function checkIfLoggedIn(to, from, next) {
  if (localStorage.getItem('token')) {
    next('/users');
  } else {
    next('/login');
  }
}

function guardMyroute(to, from, next) {
  if (localStorage.getItem('token')) {
    next();
  } else {
    next('/login');
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      beforeEnter: checkIfLoggedIn,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
      beforeEnter: guardMyroute
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ]
});