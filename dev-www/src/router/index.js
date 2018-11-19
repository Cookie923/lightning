import Vue from 'vue'
import Router from 'vue-router'
import Hot from '@/pages/hot/Hot'
import Search from '@/pages/search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hot',
      component: Hot
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }

  ]
})
