import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    searchContent: 'value'
  },
  getters: {
    getSearchContent (state) {
      return 'getters-' + state.searchContent
    }
  },
  mutations: {
    // 单个参数
    chagneSearchContent (state, payload) {
      state.searchContent = 'mutations-' + payload
    },

    // 多个参数
    changeSearchContentByObject (state, payload) {
      state.searchContent = 'mutations-boject-' + payload.searchContent
    }
  }
})
