export default {
  state:{
    pageName:"奥利奥",
    age:"18"
  },
  mutations: {
    SHOW_PEOPLE: (state, pageName) => {
      state.pageName = pageName;
    }
  },

  getters: {
    pageName(state) {
      return state.pageName;
    }
  },

  actions: {
    showPeople({ commit }, payload) {
      commit("SHOW_PEOPLE",  payload);
    }
  }
}
