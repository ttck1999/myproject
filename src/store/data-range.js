// 此模块用于控制侧边栏的展示和隐藏
export default {
  state: {
    // 日期范围
    dateRange: null
  },

  mutations: {
    CHANGE_DATE_RANGE: (state, dateRange) => {
      state.dateRange = dateRange;
    }
  },

  getters: {
    dateRange(state) {
      return state.dateRange;
    }
  },

  actions: {
    changeDateRange({ commit }, payload) {
      commit("CHANGE_DATE_RANGE", Object.assign({}, payload));
    }
  }
};
