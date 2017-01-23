// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import './filters'
// import App from './App'
// import Router from './router'
import RouterArr from './router'
import './css/index.scss'
import './assets/test/iconfont'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: RouterArr
})
/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')