import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    searchHistoryList: ['历史记录1']
  },
  getters: {
    getHistoryList (state) {
      return state.searchHistoryList
    }
  },
  mutations: {
    changeHistoryList (state, payload) {
      state.searchHistoryList.push(payload)
    }
  },
  actions: {
    changeHistoryListByAction (context, payload) {
      context.commit('changeHistoryList', payload)
    }
  },
  modules: {
  }
}
