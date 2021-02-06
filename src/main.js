import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import modifyName from './store/modifyName'

Vue.config.productionTip = false

new Vue({
  router,
  // modifyName,
  render: h => h(App)
}).$mount('#app')
