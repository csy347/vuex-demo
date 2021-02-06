import Vue from 'vue'
import Vuex from 'vuex'

import searchInputStore from './searchInputStore.js'
import searchItemStore from './searchItemStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rootVal: '根节点Store的值'
  },
  getters: {
    getRootVal (state) {
      return state.rootVal
    }
  },
  mutations: {
    changeRootVal (state, payload) {
      console.log('根节点Store的changeRootVal被调用了')
      state.rootVal = payload
    }
  },
  actions: {
    changeRootValByAction (context, payload) {
      console.log('根节点Store的changeRootValByAction被调用了')
      context.commit('changeRootVal', payload)
    }
  },
  modules: {
    searchInputStore,
    searchItemStore
  }
})
