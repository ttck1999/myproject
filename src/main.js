import Vue from 'vue'
import Vuex from "vuex"
import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI) 
Vue.prototype.Axios = axios
Vue.use(Vuex);

// 向main.js中添加如下代码
process.env.Mock && require('./mock.js')

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
