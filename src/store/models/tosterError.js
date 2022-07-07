export default {
  mutations: {
    setMessage(state, msg) {
      state.message = msg
    },
  },
  state: {
    message: '',
  },
  getters: {
    getMessage(state) {
      return state.message
    },
  },
}
