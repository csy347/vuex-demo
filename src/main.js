import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store/index'
// import searchStore from './store/searchStore' // 引入searchStore.js

Vue.config.productionTip = false

new Vue({
  router,
  // store: searchStore, // 注入searchStore
  store,
  render: h => h(App)
}).$mount('#app')
