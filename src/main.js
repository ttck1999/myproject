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



// axios.interceptors.response.use(response => {
//   if (response) {
//     switch (response.data.code) {
//       case 403: //与后台约定登录失效的返回码,根据实际情况处理
//         localStorage.clear();     //删除用户信息
//         //如果超时就处理 ，指定要跳转的页面(比如登陆页)
//         Message({
//           message: 'token失效,请重新登录!',
//           type: 'warning',
//           center: true,
//           onClose:function () {
//             console.log('关闭了看下')
//             router.replace({
//               path: '/user/login',
//             })
//           }
//         });
//     }
//   }
//   return response;
// }, error => {
//   return Promise.reject(error.response.data) //返回接口返回的错误信息
// })

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
