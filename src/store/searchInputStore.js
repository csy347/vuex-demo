import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    searchContent: '1234'
  },
  getters: {
    // getSearchContent (state) {
    //   return state.searchContent
    // }

    /**
     * state 代表了当前模块的state
     * getters 代表了当前模块的getters
     * rootState 代表了根Store的state，既index.js的Store，但也包含它的子Store
     */

    getSearchContent (state, getters, rootState, rootGetters) {
      // 通过rootState去访问searchItemStore的state数据
      console.log(rootState.searchItemStore.searchHistoryList)

      //  通过rootState去访问index.js的state数据
      console.log(rootState.rootVal)

      // 通过rootGetters去访问searchItemStore的Getter
      console.log(rootGetters['searchItemStore/getHistoryList'])

      // 通过rootGetters.getRootVal去访问根模块的getRootVal
      console.log(rootGetters.getRootVal)

      return state.searchContent
    }
  },
  mutations: {
    // changeSearchContent (state, payload) {
    //   state.searchContent = payload
    // }
    /**
     * state 代表了当前模块的state
     * payload 代表了传入的数据
     */
    changeSearchContent (state, payload) {
      // 调用searchItemStore根模块的changeHistoryList
      this.commit('searchItemStore/changeHistoryList', payload)

      // 通过this.commit('changeRootVal', payloda)调用根模块的changeRootVal
      this.commit('changeRootVal', payload)

      console.log('changeSearchContent被调用了')

      state.searchContent = payload
    }

  },
  actions: {
    changeSearchContentByAction (context, payload) {
      // 调用本模块的changeSearchContent
      context.commit('changeSearchContent', payload)

      // 调用本模块的otherAction
      context.dispatch('otherAction', payload)

      // 调用根节点的Mutation和Action只需传入第三个参数对象，{root:true}即可
      context.commit('changeRootVal', payload, { root: true })

      // 调用根节点的changeRootValByAction
      context.dispatch('changeRootValByAction', payload, { root: true })
    },

    otherAction (context, payload) {
      console.log('otherAction被调用')
    }
  },
  modules: {
  }
}
