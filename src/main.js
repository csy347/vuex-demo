import Vue from 'vue'
import App from './App.vue'
import router from './router'
import searchStore from './store/searchStore' // 引入searchStore.js

Vue.config.productionTip = false

new Vue({
  router,
  store: searchStore, // 注入searchStore
  render: h => h(App)
}).$mount('#app')
