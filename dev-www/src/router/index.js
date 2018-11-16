import Vue from 'vue'
import Router from 'vue-router'
import Hot from '@/pages/hot/Hot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hot',
      component: Hot
    }
  ]
})
