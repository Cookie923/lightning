// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import ElementUI from 'element-ui'
import VueAwesonmeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
// import moment from 'moment'
// import 'moment/locale/zh-cn'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/reset.css'
import './assets/styles/border.css' // 一像素边框解决方案
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

// moment.locale('zh-cn')
// Vue.prototype.$moment = moment
const moment = require('moment')
require('moment/locale/zh-cn')

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(ElementUI)
Vue.use(VueAwesonmeSwiper)
Vue.use(VueLazyload, {
  loading: require('./assets/img/juice.gif')
})
Vue.use(require('vue-moment'), {
	moment
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
