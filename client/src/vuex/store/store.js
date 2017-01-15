import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from '../actions'
import * as getters from ''

Vue.use(Vuex)

export default new Vuex.store({
	actions,
	getters,
})