// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    text: 'moduleA'
  },
  getters: {
    // 注意： rootState必须是第三个参数
    detail (state, getters, rootState) {
      return state.text + '-' + rootState.name
    }
  },
  mutations: {
    setText (state) {
      state.text = 'A'
    }
  },
  actions: {
    callAction ({ state, commit, rootState }) {
      commit('setName', '改变', { root: true })
      alert(state.text + '-' + rootState.name)
    }
  }
}
