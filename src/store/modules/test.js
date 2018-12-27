import * as types from '../mutation-type'

const test = {
  state: {
    files: []
  },
  getters: {
    files (state) {
      return state.files
    }
  },
  setters: {},
  mutations: {
    [types.TEST_VUEX] (state, data) {
      state.files = data
    }
  },
  actions: {
  }
}

export default test
