import Vue from 'vue'
// import { VueConstructor } from 'vue/types'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
const auth = firebase.auth()

Vue.config.productionTip = false
let app: any

auth.onAuthStateChanged(user => {
  console.log('user', user)
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
