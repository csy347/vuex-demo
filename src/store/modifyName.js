import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from '../module/moduleA'
import moduleB from '../module/moduleB'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Lucy'
  },
  getters: {
  },
  mutations: {
    setName (state, newName) {
      state.name = newName
    }
  },
  actions: {
    modifyName ({ commit }, newName) {
      commit('setName', newName)
    }
  },
  modules: {
    moduleA, moduleB
  }
})
