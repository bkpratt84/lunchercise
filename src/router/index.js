import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
          auth: false
      }
    },

    // {
    //   path: '/logout',
    //   name: 'logout',
    //   component: Logout,
    //   meta: {
    //       auth: false
    //   }
    // },

    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        auth: true
      }
    }
  ]
})
