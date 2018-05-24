export default {
  state: {
    text: '',
    mode: 'processing',
    visible: false,
    timeoutId: -1,
  },
  mutations: {
    setMessage: (state, payload) => {
      state.text = payload.text;
      state.mode = payload.mode;
      state.visible = true;
    },
    setMessageVisible: (state, value) => state.visible = value,
    setMessageTimeoutId: (state, value) => state.timeoutId = value,
    clearMessageTimeoutId: (state) => state.timeoutId = -1,
  },
  actions: {
    showFlashMessage: ({state, commit}, message) => new Promise((resolve, reject) => {
      if( state.timeoutId !== -1 ) {
        clearTimeout(state.timeoutId);
        commit('clearMessageTimeoutId');
      }

      commit('setMessage', message);

      if( message.duration > 0 ) {
        const timeoutId = setTimeout( () => {
          commit('clearMessageTimeoutId');
          commit('setMessageVisible', false);
          return resolve();
        }, message.duration);
        commit('setMessageTimeoutId', timeoutId);
      } else {
        return resolve();
      }
    })
  }
}
