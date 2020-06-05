import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cell from '@/page/cell/Cell'
import BasicsIndices from '@/page/cell/BasicsIndices'
import WeightPending from '@/page/cell/WeightPending'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cell',
      name: 'Cell',
      component: Cell,
      children: [
        {name: 'basicsIndices', path: 'basicsIndices', component: BasicsIndices},
        {name: 'weightPending', path: 'weightPending', component: WeightPending}
      ]
    }
  ]
})
