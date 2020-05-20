import Vue from 'vue'
import Vuex from "vuex"
import dateRange from "./data-range"
import pageName from "./name"
Vue.use(Vuex);
const modules = {
  "date-range": dateRange,
  "page-name":pageName
};
const store = new Vuex.Store({ modules });

export default store;
