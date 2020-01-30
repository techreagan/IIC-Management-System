import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataCreated: false,
    helo: 'coding'
  },
  getters: {
    dataCreated: state => {
      return state.dataCreated
    }
  },
  mutations: {
    setDataCreated(state, bool) {
      state.dataCreated = bool
    }
  },
  actions: {
    setDataCreated({ commit }, payload) {
      commit('setDataCreated', payload)
    }
  }
})
