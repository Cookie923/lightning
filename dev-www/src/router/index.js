import Vue from 'vue'
import Router from 'vue-router'
import Hot from '@/pages/hot/Hot'
import Search from '@/pages/search/Search'
import Activity from '@/pages/activity/Activity'
import Account from '@/pages/account/Account'

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
    }, {
      path: '/activity',
      name: 'Activity',
      component: Activity
    }, {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
