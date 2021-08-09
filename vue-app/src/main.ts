import Vue from 'vue'
import App from './App.vue'
import '../resources/assets/app.css'

import router from './router'
// import store from './store'
import store from './store/store'


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
