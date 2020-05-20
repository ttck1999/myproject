import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cell from '@/components/cell/Cell'
import BasicsIndices from '@/components/cell/BasicsIndices'
import WeightPending from '@/components/cell/WeightPending'

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
