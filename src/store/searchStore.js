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

    // 多个参数，可以通过对象的方式传递
    changeSearchContentByObject (state, payload) {
      state.searchContent = 'mutations-object-' + payload.searchContent
    }
  },
  actions: {
    changeSearchContentByAction (context, payload) {
      setTimeout(() => {
        context.commit('changeSearchContentByObject', payload)
      }, 2000)
    }
  }
})
