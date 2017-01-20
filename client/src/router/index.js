import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Application'
import Login from '../views/login/Login'

Vue.use(VueRouter)
export default new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: Home },
		{ path: '/app', component: Home },
		{ path: '/login', component: Login }
	]
})