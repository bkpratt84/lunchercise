import 'babel-polyfill'

import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import Vuetify from 'vuetify'
import { createStore } from '@/store/index'
import 'vuetify/dist/vuetify.min.css'

import { firebaseApp } from '@/lib/firebase'
import VueFire from 'vuefire'

import Vuelidate from 'vuelidate'

Vue.prototype.$firebase = firebaseApp

Vue.use(VueFire)
Vue.use(Vuelidate)
Vue.use(Vuetify, { theme: {
  primary: "#1976D2",
  secondary: "#388E3C",
  accent: "#000000",
  error: "#f44336",
  warning: "#ffeb3b",
  info: "#2196f3",
  success: "#009688"
}})

Vue.config.productionTip = true

let app
const store = createStore()

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLoggedIn) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

firebaseApp.auth().onAuthStateChanged(function(user) {
  if (!app) {
    if(user) {
      store.dispatch('setUser', user)
    } else {
      store.dispatch('clearUser')
    }

    app = new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    })
  }
})
