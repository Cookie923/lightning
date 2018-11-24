import Vue from 'vue'
import Router from 'vue-router'
import Hot from '@/pages/hot/Hot'
import Search from '@/pages/search/Search'
import Activity from '@/pages/activity/Activity'
import Account from '@/pages/account/Account'
import SignInCalendar from '@/pages/hot/SignInCalendar'
import FilmDetails from '@/pages/film/FilmDetails'
import CommentDetails from '@/pages/film/CommentDetails'
import NewsDetails from '@/pages/film/NewsDetails'
import BillboardList from '@/pages/search/BillboardList'
import MyList from '@/pages/account/MyList'
import MyCollection from '@/pages/account/MyCollection'
import Password from '@/pages/account/Password'
import LogIn from '@/pages/account/LogIn'

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
    }, {
      path: '/calendar',
      name: 'Calendar',
      component: SignInCalendar
    }, {
      path: '/film-details',
      name: 'Film',
      component: FilmDetails
    }, {
      path: '/comment-details',
      name: 'Comment',
      component: CommentDetails
    }, {
      path: '/news-details',
      name: 'news',
      component: NewsDetails
    }, {
      path: '/search/billboardlist',
      name: 'billboardlist',
      component: BillboardList
    }, {
      path: '/account/mylist',
      name: 'mylist',
      component: MyList
    }, {
      path: '/account/mycollection',
      name: 'mycollection',
      component: MyCollection
    }, {
      path: '/account/password',
      name: 'password',
      component: Password
    }, {
      path: '/account/log',
      name: 'log',
      component: LogIn
    }
  ]
})
